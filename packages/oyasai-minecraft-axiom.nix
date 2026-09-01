{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-axiom";
  version = "26.2";

  properties = {
    # keep-sorted start
    enable-rcon = true;
    force-gamemode = true;
    gamemode = "creative";
    online-mode = false; # handled by velocity
    white-list = true;
    # keep-sorted endt
  };

  paperConfig = {
    proxies.velocity = {
      enabled = true;
      online-mode = true;
    };
  };

  plugins = with oyasai-plugin-registry.forPlatform "paper" version; [
    # keep-sorted start
    arceon
    arceon-axiom
    axiom-paper-plugin
    ezedits
    fastasyncvoxelsniper
    fastasyncworldedit
    floodgate
    luckperms
    lunachat
    multiversecore
    multiverseportals
    oyasaichat
    placeholderapi
    plugmanx
    protocollib
    vault
    viaversion
    worldeditsui
    worldguard
    # keep-sorted end
  ];
}
