{
  oyasaiVelocity,
  oyasai-plugin-registry,
  oyasai-minecraft-main,
}:

oyasaiVelocity {
  name = "oyasai-velocity";

  plugins = with oyasai-plugin-registry.forVersion "velocity"; [
    # keep-sorted start
    floodgate-velocity
    geyser-velocity
    # keep-sorted end
  ];

  velocityConfig = {
    config-version = "2.7";
    bind = "0.0.0.0:25565";
    motd = "§l§r                 §b§lOyasai§f§lServer§r\\n§l§f            建築勢は集合だ！建築！建築！建築！！！";
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
      main = "${oyasai-minecraft-main.name}:25565";
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
}
