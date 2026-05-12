{
  oyasaiVelocity,
  oyasai-plugin-registry,
  lib,
  oyasaiDockerTools,
  stdenv,
  mc-monitor,
}:

let
  minecraftVersion = "1.21.8";

  final = oyasaiVelocity rec {
    name = "oyasai-velocity";

    config = ''
      config-version = "2.7"
      bind = "0.0.0.0:25565"
      motd = "<#09add3><bold>Oyasai</bold><white><bold>Server</bold><gray> [v${minecraftVersion}]"
      show-max-players = 200
      online-mode = true
      force-key-authentication = true
      prevent-client-proxy-connections = false
      player-info-forwarding-mode = "modern"
      forwarding-secret-file = "forwarding.secret"
      announce-forge = false
      kick-existing-players = true
      ping-passthrough = "DISABLED"
      enable-player-address-logging = true

      [servers]
      lobby = "minecraft-lobby:25565"
      oyasai = "minecraft-main:25565"
      axiom = "minecraft-axiom:25565"
      try = ["lobby"]

      [forced-hosts]

      [advanced]
      compression-threshold = 256
      compression-level = -1
      login-ratelimit = 3000
      connection-timeout = 5000
      read-timeout = 30000
      haproxy-protocol = false
      tcp-fast-open = false
      bungee-plugin-message-channel = true
      show-ping-requests = false
      failover-on-unexpected-server-disconnect = true
      announce-proxy-commands = true
      log-command-executions = false
      log-player-connections = true
      accepts-transfers = false

      [query]
      enabled = false
      port = 25565
      map = "Oyasai"
      show-plugins = false
    '';

    plugins = with (oyasai-plugin-registry.forVersion minecraftVersion); [
      # keep-sorted start
      floodgatevelocity
      geyservelocity
      luckpermsvelocity
      viaversion
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
            StartPeriod = 15 * 1000000000;
            Retries = 20;
          };
        };
      };
    };
  };
in
final
