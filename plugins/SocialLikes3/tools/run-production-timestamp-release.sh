#!/usr/bin/env bash
set -euo pipefail

: "${CANDIDATE_IMAGE:?CANDIDATE_IMAGE is required}"
: "${GITHUB_SHA:?GITHUB_SHA is required}"

main_container="oyasai-minecraft-main"
velocity_container="oyasai-velocity"
backup_container="minecraft-main-backup"
server_host_path="/opt/platform/master/minecraft-main"
release_id="${GITHUB_SHA}-${GITHUB_RUN_ID:-manual}-${GITHUB_RUN_ATTEMPT:-1}"
stack="platform-master-services"
started_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

data_activated=0
deployment_attempted=0
release_started=0
success=0
velocity_was_paused=0

run_release_tool() {
  docker run --rm \
    --name "sl3-timestamp-${1}-${release_id:0:12}" \
    --entrypoint sociallikes3-timestamp-release \
    --volume "$server_host_path:/data" \
    "$CANDIDATE_IMAGE" "$1" /data "$release_id"
}

deploy_image() {
  local image="$1"
  local repo_root
  repo_root="$(git rev-parse --show-toplevel)"
  (
    cd "$repo_root/packages/oyasai-cdktf"
    ENVIRONMENT=master OYASAI_MINECRAFT_MAIN_IMAGE_OVERRIDE="$image" \
      nix run "$repo_root#oyasai-cdktf" -- \
      deploy "$stack" \
      --ignore-missing-stack-dependencies \
      --auto-approve
  )
}

wait_for_stopped() {
  local attempts=0
  while [[ "$(docker inspect --format '{{.State.Running}}' "$main_container")" == "true" ]]; do
    attempts=$((attempts + 1))
    ((attempts <= 120)) || return 1
    sleep 1
  done
}

wait_for_healthy() {
  local attempts=0
  local status
  while true; do
    status="$(
      docker inspect \
        --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' \
        "$main_container" 2>/dev/null || true
    )"
    [[ "$status" == "healthy" ]] && return 0
    [[ "$status" != "exited" && "$status" != "dead" ]] || return 1
    attempts=$((attempts + 1))
    ((attempts <= 240)) || return 1
    sleep 2
  done
}

stop_main_safely() {
  if [[ "$(docker inspect --format '{{.State.Running}}' "$main_container" 2>/dev/null || true)" != "true" ]]; then
    return 0
  fi
  docker update --restart=no "$main_container" >/dev/null
  docker exec "$backup_container" rcon-cli save-all flush
  docker exec "$backup_container" rcon-cli stop
  wait_for_stopped
}

rollback() {
  local original_status="$1"
  local rollback_ok=1
  trap - EXIT INT TERM
  set +e
  echo "Release failed (exit=$original_status); starting rollback" >&2

  if ((data_activated == 1)); then
    stop_main_safely || docker stop --time 120 "$main_container"
    run_release_tool rollback || rollback_ok=0
  fi

  if ((deployment_attempted == 1)); then
    deploy_image "$PREVIOUS_IMAGE" || rollback_ok=0
  else
    docker update --restart=unless-stopped "$main_container" >/dev/null || rollback_ok=0
    docker start "$main_container" >/dev/null || rollback_ok=0
  fi

  if ((rollback_ok == 1)); then
    wait_for_healthy || rollback_ok=0
  fi
  if ((rollback_ok == 1 && velocity_was_paused == 0)); then
    docker unpause "$velocity_container" >/dev/null || rollback_ok=0
  fi

  if ((rollback_ok == 0)); then
    echo "Rollback did not complete; Velocity remains paused for operator intervention" >&2
  else
    echo "Rollback completed with the previous image and data snapshot" >&2
  fi
  exit "$original_status"
}

finish() {
  local status=$?
  if ((success == 0 && release_started == 1)); then
    rollback "$status"
  fi
}

trap finish EXIT INT TERM

PREVIOUS_IMAGE="$(docker inspect --format '{{.Config.Image}}' "$main_container")"
[[ -n "$PREVIOUS_IMAGE" ]] || {
  echo "Could not resolve current minecraft-main image" >&2
  exit 1
}
[[ "$PREVIOUS_IMAGE" != "$CANDIDATE_IMAGE" ]] || {
  echo "Candidate image is already running: $CANDIDATE_IMAGE" >&2
  exit 1
}

player_count="$(nix run .#mc-monitor -- status -host oyasai.io -show-player-count | tr -d '[:space:]')"
[[ "$player_count" == "0" ]] || {
  echo "Production release requires zero online players; found $player_count" >&2
  exit 1
}

docker pull "$CANDIDATE_IMAGE"
velocity_was_paused="$(docker inspect --format '{{if .State.Paused}}1{{else}}0{{end}}' "$velocity_container")"
release_started=1
if ((velocity_was_paused == 0)); then
  docker pause "$velocity_container" >/dev/null
fi

# Re-check through RCON after new connections have been blocked.
docker exec "$backup_container" rcon-cli list | tee /tmp/sl3-rcon-list.txt
grep -Eq 'There are 0|0 of a max|players online: 0' /tmp/sl3-rcon-list.txt

stop_main_safely
run_release_tool prepare
data_activated=1
run_release_tool activate

deployment_attempted=1
deploy_image "$CANDIDATE_IMAGE"
wait_for_healthy

health_output="$(docker exec "$backup_container" rcon-cli 'sldataop timestamp-health')"
echo "$health_output"
grep -Fq 'SL3_TIMESTAMP_HEALTH status=ok' <<<"$health_output"

run_release_tool verify
if docker logs --since "$started_at" "$main_container" 2>&1 | grep -E '\[SocialLikes3\].*(SEVERE|Exception|failed permanently)'; then
  echo "SocialLikes3 startup errors were found after deployment" >&2
  exit 1
fi

if ((velocity_was_paused == 0)); then
  docker unpause "$velocity_container" >/dev/null
fi
success=1
trap - EXIT INT TERM
echo "SL3_TIMESTAMP_PRODUCTION_RELEASE status=ok release=$release_id image=$CANDIDATE_IMAGE"
