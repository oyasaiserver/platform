{
  lib,
  oyasaiPurpur,
  oyasai-plugin-registry,
}:
oyasaiPurpur rec {
  name = "oyasai-minecraft-lobby";
  version = "26.2";

  properties = {
    # keep-sorted start block=yes
    allow-flight = true;
    difficulty = "peaceful";
    enable-rcon = true;
    force-gamemode = true;
    gamemode = "adventure";
    generator-settings = builtins.toJSON {
      biome = "minecraft:the_void";
      features = false;
      lakes = false;
      layers = [ ];
    };
    level-type = "minecraft:flat";
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

  purpurConfig = {
    settings.startup-commands =
      let
        rules = {
          advance_time = false;
          advance_weather = false;
          drowning_damage = false;
          fall_damage = false;
          fire_damage = false;
          freeze_damage = false;
          immediate_respawn = true;
          keep_inventory = true;
          mob_griefing = false;
          respawn_radius = 0;
          spawn_mobs = false;
          spawn_monsters = false;
          spawn_patrols = false;
          spawn_phantoms = false;
          spawn_wandering_traders = false;
          spawn_wardens = false;
        };
      in
      lib.mapAttrsToList (
        k: v: "gamerule ${k} ${if lib.isBool v then lib.boolToString v else toString v}"
      ) rules
      ++ [ "time set 6000" ];
  };

  paperConfig = {
    proxies.velocity = {
      enabled = true;
      online-mode = true;
    };
  };

  plugins = with oyasai-plugin-registry.forPlatform "paper" version; [
    # keep-sorted start
    coreprotect
    fastasyncworldedit
    floodgate
    luckperms
    lunachat
    oyasaichat
    oyasaiutilities
    plugmanx
    skinsrestorer
    vertex
    viaversion
    # keep-sorted end
  ];
}
