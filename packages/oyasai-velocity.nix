{
  oyasaiVelocity,
  oyasai-plugin-registry,
  oyasai-minecraft-main,
  oyasai-minecraft-lobby,
  oyasai-minecraft-axiom,
}:

oyasaiVelocity {
  name = "oyasai-velocity";

  plugins = with oyasai-plugin-registry.forPlatform "velocity"; [
    # keep-sorted start
    floodgate
    geyser
    luckperms
    oyasaichat
    oyasaimusic
    # keep-sorted end
  ];

  velocityConfig = {
    config-version = "2.8";
    motd = "                 <aqua><bold>Oyasai<white>Server<reset>\n<bold>      建築勢は集合だ！建築！建築！建築！！！";
    player-info-forwarding-mode = "modern";
    show-max-players = 114514;

    # Velocity tries to set default
    forced-hosts = { };

    servers = {
      main = oyasai-minecraft-main.name;
      lobby = oyasai-minecraft-lobby.name;
      axiom = oyasai-minecraft-axiom.name;
      try = [
        "main"
        "lobby"
      ];
    };
  };
}
