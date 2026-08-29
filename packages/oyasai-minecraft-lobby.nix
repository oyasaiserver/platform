{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-lobby";
  version = "1.21.11";

  properties = {
    # keep-sorted start
    allow-flight = true;
    difficulty = "peaceful";
    enable-rcon = true;
    enforce-secure-profile = false;
    level-type = "minecraft:the_void";
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
    # keep-sorted end
  };

  paperConfig = {
    proxies.velocity = {
      enabled = true;
      online-mode = true;
    };
  };

  plugins = with oyasai-plugin-registry.forPlatform "paper" version; [
    # keep-sorted start
    floodgate
    luckperms
    oyasaichat
    skinsrestorer
    viaversion
    # keep-sorted end
  ];
}
