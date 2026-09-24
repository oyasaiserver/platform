{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-main";
  version = "26.2";

  icon = ../assets/icon-64x64.png;

  properties = {
    # keep-sorted start
    allow-flight = true;
    allow-nether = false;
    difficulty = "normal";
    enable-command-block = true;
    enable-jmx-monitoring = true;
    enable-rcon = true;
    enforce-secure-profile = false;
    generate-structures = false;
    level-name = "lifeworld";
    max-players = 70;
    network-compression-threshold = 96;
    online-mode = false; # handled by velocity
    pvp = false;
    simulation-distance = 16;
    spawn-animals = false;
    spawn-npcs = false;
    spawn-protection = 0;
    sync-chunk-writes = false;
    view-distance = 32;
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
    arceon
    bluemap
    citiesskymine
    coreprotect
    crackshotguns
    decentholograms
    directstate
    discordsrv
    dynamicprofile
    entitypose
    essentialsx
    essentialsx-spawn
    ezedits
    fastasyncvoxelsniper
    fastasyncworldedit
    floodgate
    gakubuchilocker
    gsit
    headhuntplugin
    imageonmap
    joincommands
    luckperms
    lunachat
    lwc
    multiversecore
    multiverseportals
    oyasaiadmintools
    oyasaichat
    oyasaimenu
    oyasaimusic
    oyasaipets
    oyasaitab
    oyasaitoken
    oyasaiutilities
    oyasaivehicles
    oyasaivotifier
    oyasaiworldgenerator
    painttools
    placeholderapi
    plugmanx
    pvparena
    sba
    screamingbedwars
    signshop
    simpleelevator
    skript
    slotmachine
    sociallikes3
    socialvotes
    tntruneloaded
    tpswitch
    vault
    vertex
    viaversion
    worldguard
    # keep-sorted end
  ];
}
