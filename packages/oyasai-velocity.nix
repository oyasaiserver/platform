{
  lib,
  oyasaiDockerTools,
  stdenv,
  velocityServers,
  writeShellApplication,
  formats,
  coreutils,
}:

let
  name = "oyasai-velocity";
  package = velocityServers.velocity;

  velocityToml = (formats.toml { }).generate "velocity.toml" {
    config-version = "2.7";
    bind = "0.0.0.0:25565";
    motd = "OyasaiServer";
    show-max-players = 500;
    online-mode = true;
    force-key-authentication = true;
    prevent-client-proxy-connections = false;
    player-info-forwarding-mode = "modern";
    announce-forge = false;
    kick-existing-players = false;
    ping-passthrough = "DISABLED";
    enable-player-address-logging = true;

    servers = {
      main = "minecraft-main:25565";
      try = [ "main" ];
    };

    forced-hosts = { };

    advanced = {
      compression-threshold = 256;
      compression-level = -1;
      login-ratelimiting-attempts = 3;
      login-ratelimiting-period = 3000;
      connection-timeout = 5000;
      read-timeout = 30000;
      haproxy-protocol = false;
      tcp-fast-open = false;
      bungee-plugin-message-channel = true;
      show-ping-requests = false;
      failover-on-unexpected-server-disconnect = true;
      announce-proxy-commands = true;
      log-command-executions = false;
      log-player-summary-on-shutdown = true;
      accepts-transfers = false;
    };

    query = {
      enabled = false;
      port = 25577;
      map = "Velocity";
      show-plugins = false;
    };
  };

  final = writeShellApplication {
    inherit name;

    runtimeInputs = [ coreutils ];

    text = ''
      cp --no-preserve=ownership,mode ${velocityToml} velocity.toml

      MEMORY="''${MEMORY:-512M}"
      exec ${lib.getExe package} -Xmx"''${MEMORY}" -Xms"''${MEMORY}" "$@"
    '';

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config = {
          Cmd = [ (lib.getExe final) ];
          WorkingDir = "/data";
        };
      };
    };
  };
in
final
