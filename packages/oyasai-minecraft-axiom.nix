{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-axiom";
  version = "1.21.10";

  # NOMERGE set properly
  properties = {
    # keep-sorted start
    enable-rcon = true;
    online-mode = false; # handled by velocity
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
    plugmanx
    viaversion
    # keep-sorted end
  ];
}
