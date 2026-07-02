{
  runCommandLocal,
  callPackage,
  oyasaiDockerTools,
}:

let
  inherit (callPackage ./_sources/generated.nix { })
    # keep-sorted start
    mariadb
    mc-backup
    mysql-backup
    traefik
    # keep-sorted end
    ;
in
runCommandLocal "oyasai-standalone-images"
  {
    passthru = {
      # keep-sorted start block=yes
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
      traefik = oyasaiDockerTools.buildImage {
        name = traefik.pname;
        fromImage = traefik.src;
        config = {
          Entrypoint = [ "/entrypoint.sh" ];
          Cmd = [ "traefik" ];
        };
      };
      # keep-sorted end
    };
  }
  ''
    touch $out
  ''
