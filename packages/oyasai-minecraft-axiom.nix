{
  oyasaiPurpur,
  oyasai-plugin-registry,
  lib,
  oyasaiDockerTools,
  stdenv,
  mc-monitor,
}:

let
  final = oyasaiPurpur rec {
    name = "oyasai-minecraft-axiom";
    version = "1.21.8";

    icon = ../assets/icon.png;
    velocityForwarding = true;

    properties = ''
      allow-flight=true
      allow-nether=false
      difficulty=peaceful
      enable-command-block=true
      enable-rcon=true
      enforce-secure-profile=false
      generate-structures=false
      gamemode=creative
      level-name=axiom
      max-players=70
      motd=§b§lOyasai§f§lServer§7 AXIOM
      network-compression-threshold=96
      online-mode=false
      pvp=false
      rcon.port=25575
      server-port=25565
      simulation-distance=10
      spawn-animals=false
      spawn-npcs=false
      spawn-protection=0
      sync-chunk-writes=false
      view-distance=16
    '';

    plugins = with (oyasai-plugin-registry.forVersion version); [
      # keep-sorted start
      arceon
      axiompaper
      coreprotect
      ezedits
      fastasyncvoxelsniper
      fastasyncworldedit
      luckperms
      worldeditsui
      worldguard
      # keep-sorted end
    ];

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config = {
          Cmd = [ (lib.getExe final) ];
          WorkingDir = "/data";
          Healthcheck = {
            Test = [
              "CMD"
              (lib.getExe mc-monitor)
              "status"
            ];
            Interval = 5 * 1000000000;
            Timeout = 5 * 1000000000;
            StartPeriod = 60 * 1000000000;
            Retries = 20;
          };
        };
      };
    };
  };
in
final
