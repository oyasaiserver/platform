{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-axiom";
  version = "26.3";

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
    citiesskymine
    ezedits
    fastasyncvoxelsniper
    fastasyncworldedit
    floodgate
    luckperms
    oyasaichat
    oyasaitab
    oyasaiworldgenerator
    plugmanx
    vault
    viaversion
    worldguard
    # keep-sorted end
  ];
}
