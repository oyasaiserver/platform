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
    config-version = "2.8";
    motd = "                 <aqua><bold>Oyasai<white>Server<reset>\\n<bold>            建築勢は集合だ！建築！建築！建築！！！";
    player-info-forwarding-mode = "modern";
    forced-hosts = { };

    servers = {
      main = "${oyasai-minecraft-main.name}:25565";
      try = [ "main" ];
    };
  };
}
