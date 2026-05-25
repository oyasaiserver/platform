{ oyasaiPurpur, oyasai-plugin-registry }:

let
  # Radius of the lobby build in chunks. Tune this as the build grows.
  worldRadius = 5;
in
oyasaiPurpur rec {
  name = "oyasai-minecraft-lobby";
  version = "1.21.10";

  properties = {
    # keep-sorted start
    allow-flight = true;
    difficulty = "peaceful";
    enable-rcon = true;
    enforce-secure-profile = false;
    force-gamemode = true;
    gamemode = "adventure";
    generate-structures = false;
    level-type = "flat";
    max-players = 70;
    online-mode = false; # handled by velocity
    pvp = false;
    simulation-distance = worldRadius;
    spawn-animals = false;
    spawn-monsters = false;
    spawn-npcs = false;
    spawn-protection = 0;
    sync-chunk-writes = false;
    view-distance = worldRadius + 2; # A bit of visual buffer
    # keep-sorted end
  };

  paperConfig = {
    proxies.velocity = {
      enabled = true;
      online-mode = true;
    };
  };

  plugins = with oyasai-plugin-registry.forVersion version; [
    # keep-sorted start
    floodgate
    skinsrestorer
    viaversion
    # keep-sorted end
  ];
}
