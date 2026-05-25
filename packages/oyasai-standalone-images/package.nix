{
  runCommandLocal,
  callPackage,
  oyasaiDockerTools,
}:

let
  inherit (callPackage ./_sources/generated.nix { })
    mariadb
    mc-backup
    mysql-backup
    caddy
    silverbullet
    ;
in
runCommandLocal "oyasai-standalone-images"
  {
    passthru = {
      mariadb = oyasaiDockerTools.buildImage {
        name = mariadb.pname;
        fromImage = mariadb.src;
        config = {
          Entrypoint = [ "docker-entrypoint.sh" ];
          Cmd = [ "mysqld" ];
        };
      };
      mc-backup = oyasaiDockerTools.buildImage {
        name = mc-backup.pname;
        fromImage = mc-backup.src;
        config = {
          Entrypoint = [ "/usr/bin/backup" ];
          Cmd = [ "loop" ];
        };
      };
      mysql-backup = oyasaiDockerTools.buildImage {
        name = mysql-backup.pname;
        fromImage = mysql-backup.src;
        config = {
          Entrypoint = [ "/entrypoint" ];
        };
      };
      caddy = oyasaiDockerTools.buildImage {
        name = caddy.pname;
        fromImage = caddy.src;
        config = {
          Entrypoint = [ "caddy" ];
        };
      };
      silverbullet = oyasaiDockerTools.buildImage {
        name = silverbullet.pname;
        fromImage = silverbullet.src;
        config = {
          Entrypoint = [
            "/sbin/tini"
            "--"
            "/docker-entrypoint.sh"
          ];
        };
      };
    };
  }
  ''
    touch $out
  ''
