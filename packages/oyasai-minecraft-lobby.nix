{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-lobby";
  version = "1.21.11";

  properties = {
    allow-flight = true;
    difficulty = "peaceful";
    enable-rcon = true;
    enforce-secure-profile = false;
    generator-settings = (
      builtins.toJSON {
        biome = "minecraft:the_void";
        features = false;
        lakes = false;
        layers = [ ];
      }
    );
    level-type = "minecraft:flat";
    max-players = 70;
    network-compression-threshold = 96;
    online-mode = false; # handled by velocity
    pvp = false;
    respawn_radius = 0;
    simulation-distance = 8;
    spawn-animals = false;
    spawn-monsters = false;
    spawn-npcs = false;
    spawn-protection = 0;
    view-distance = 16;
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
