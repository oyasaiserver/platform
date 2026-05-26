{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-axios";
  version = "1.21.10";

  properties = {
    # keep-sorted start
    allow-flight = true;
    difficulty = "peaceful";
    enable-rcon = true;
    enforce-secure-profile = false;
    max-players = 70;
    network-compression-threshold = 96;
    online-mode = false; # handled by velocity
    pvp = false;
    simulation-distance = 8;
    spawn-animals = false;
    spawn-monsters = false;
    spawn-npcs = false;
    spawn-protection = 0;
    view-distance = 16;
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
    axiom
    axiom-paper-plugin
    ezedit
    floodgate
    viaversion
    # keep-sorted end
  ];
}
