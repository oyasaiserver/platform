{
  runCommandLocal,
  callPackage,
  oyasaiDockerTools,
}:

let
  inherit (callPackage ./_sources/generated.nix { })
    # keep-sorted start
    caddy
    mariadb
    mc-backup
    mysql-backup
    # keep-sorted end
    ;
in
runCommandLocal "oyasai-standalone-images"
  {
    passthru = {
      # keep-sorted start block=yes
      caddy = oyasaiDockerTools.buildImage {
        name = caddy.pname;
        fromImage = caddy.src;
        config = {
          Entrypoint = [ "caddy" ];
        };
      };
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
      # keep-sorted end
    };
  }
  ''
    touch $out
  ''
