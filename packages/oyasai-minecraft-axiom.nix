{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-axiom";
  version = "1.21.10";

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

  plugins = with oyasai-plugin-registry.forVersion version; [
    # keep-sorted start
    arceon
    arceon-axiom
    axiom-paper-plugin
    ezedits
    fastasyncvoxelsniper
    fastasyncworldedit
    floodgate
    multiversecore
    multiverseportals
    plugmanx
    venturechat
    viaversion
    worldeditsui
    worldguard
    # keep-sorted end
  ];
}
