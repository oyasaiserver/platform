#!/usr/bin/env bash
set -euo pipefail

: "${SL3_MIGRATOR_JAR:?SL3_MIGRATOR_JAR must point to the release SocialLikes3 jar}"

usage() {
  echo "Usage: sociallikes3-timestamp-release <prepare|activate|verify|rollback> <server-root> <release-id>" >&2
  exit 2
}

command_name="${1:-}"
server_root="${2:-}"
release_id="${3:-}"

[[ -n "$command_name" && -n "$server_root" && -n "$release_id" ]] || usage
[[ "$server_root" = /* ]] || {
  echo "server-root must be absolute" >&2
  exit 2
}
[[ "$release_id" =~ ^[A-Za-z0-9._-]+$ ]] || {
  echo "invalid release-id" >&2
  exit 2
}

plugin_dir="$server_root/plugins/SocialLikes3"
backup_root="$server_root/plugins/SocialLikes3-release-backups"
backup_dir="$backup_root/timestamp-$release_id"
failed_dir="$server_root/plugins/SocialLikes3-failed-$release_id"
database="$plugin_dir/SocialLikesShadow.db"
candidate="$plugin_dir/.SocialLikesShadow.db.candidate-$release_id"
previous="$plugin_dir/.SocialLikesShadow.db.pre-$release_id"
main_class="com.github.srain3.sociallikes.datas.TimestampMigrationMain"

run_migrator() {
  java -cp "$SL3_MIGRATOR_JAR" "$main_class" "$1" "$2" "$release_id"
}

case "$command_name" in
prepare)
  [[ -d "$plugin_dir" ]] || {
    echo "plugin data directory is missing: $plugin_dir" >&2
    exit 1
  }
  [[ -f "$database" ]] || {
    echo "database is missing: $database" >&2
    exit 1
  }
  [[ ! -e "$backup_dir" ]] || {
    echo "backup already exists: $backup_dir" >&2
    exit 1
  }
  [[ ! -e "$candidate" && ! -e "$previous" ]] || {
    echo "candidate or previous database already exists for release $release_id" >&2
    exit 1
  }

  run_migrator preflight "$database"
  mkdir -p "$backup_dir"
  cp -a "$plugin_dir/." "$backup_dir/"
  cp -p "$database" "$candidate"
  run_migrator dry-run "$candidate"
  run_migrator apply "$candidate"
  run_migrator verify "$candidate"
  rm -f "$candidate-wal" "$candidate-shm"
  echo "SL3_TIMESTAMP_RELEASE status=prepared release=$release_id backup=$backup_dir"
  ;;
activate)
  [[ -f "$candidate" ]] || {
    echo "candidate database is missing: $candidate" >&2
    exit 1
  }
  [[ -d "$backup_dir" ]] || {
    echo "release backup is missing: $backup_dir" >&2
    exit 1
  }
  [[ ! -e "$previous" ]] || {
    echo "previous database already exists: $previous" >&2
    exit 1
  }

  run_migrator verify "$candidate"
  mv "$database" "$previous"
  [[ ! -e "$database-wal" ]] || mv "$database-wal" "$previous-wal"
  [[ ! -e "$database-shm" ]] || mv "$database-shm" "$previous-shm"
  mv "$candidate" "$database"
  sync
  echo "SL3_TIMESTAMP_RELEASE status=activated release=$release_id previous=$previous"
  ;;
verify)
  run_migrator verify "$database"
  echo "SL3_TIMESTAMP_RELEASE status=verified release=$release_id"
  ;;
rollback)
  [[ -d "$backup_dir" ]] || {
    echo "release backup is missing: $backup_dir" >&2
    exit 1
  }
  [[ -d "$plugin_dir" ]] || {
    echo "plugin data directory is missing: $plugin_dir" >&2
    exit 1
  }
  [[ ! -e "$failed_dir" ]] || {
    echo "failed-state directory already exists: $failed_dir" >&2
    exit 1
  }

  mv "$plugin_dir" "$failed_dir"
  cp -a "$backup_dir" "$plugin_dir"
  run_migrator preflight "$database"
  sync
  echo "SL3_TIMESTAMP_RELEASE status=rolled-back release=$release_id failed=$failed_dir"
  ;;
*) usage ;;
esac
