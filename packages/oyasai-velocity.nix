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
    oyasaiban
    oyasaichat
    oyasaimusic
    oyasaitab
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

  # Geyser (Bedrock): NetherNet only, so Bedrock 26.60+ only. Requires Geyser
  # 2.12.1+ (there transport defaults to "nethernet"; 2.12.0 still defaulted to
  # "raknet"). Every setting is a default: address 0.0.0.0, port 19132 for both
  # built-in signaling (TCP) and WebRTC (UDP), signaling mode "builtin".
  # Only the schema version is written; the loader treats a missing version as
  # -1 and rewrites the file on every start. The file is written on every
  # container start (nix/oyasai-velocity.nix) so a config left by an older
  # Geyser in the volume cannot override the defaults.
  # Ref: https://geysermc.org/blog/preparing-for-nethernet
  geyserConfig = {
    config-version = 11;
  };
}
