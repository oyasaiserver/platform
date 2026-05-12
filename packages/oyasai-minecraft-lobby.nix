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
    name = "oyasai-minecraft-lobby";
    version = "1.21.8";

    icon = ../assets/icon.png;
    velocityForwarding = true;

    properties = ''
      allow-flight=true
      allow-nether=false
      difficulty=peaceful
      enable-command-block=false
      enforce-secure-profile=false
      generate-structures=false
      gamemode=adventure
      level-name=lobby
      level-type=minecraft:flat
      max-players=200
      motd=§b§lOyasai§f§lServer§7 Lobby
      network-compression-threshold=96
      online-mode=false
      pvp=false
      server-port=25565
      simulation-distance=4
      spawn-animals=false
      spawn-monsters=false
      spawn-npcs=false
      spawn-protection=64
      sync-chunk-writes=false
      view-distance=4
    '';

    plugins = with (oyasai-plugin-registry.forVersion version); [
      # keep-sorted start
      chestcommands
      decentholograms
      essentialsx
      essentialsxspawn
      luckperms
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
