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
    advancedban
    arceon
    bkcommonlib
    bluemap
    citiesskymine
    coreprotect
    crackshotguns
    decentholograms
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
    inventoryshop
    joincommands
    luckperms
    lunachat
    lwc
    minepacks
    multiversecore
    multiverseportals
    mycommand
    nuvotifier
    openinv
    oyasaiadmintools
    oyasaichat
    oyasaimenu
    oyasaimusic
    oyasaipets
    # OyasaiToken keeps the legacy plugin name TokenManager for binary/API compatibility.
    oyasaitoken
    oyasaiutilities
    oyasaivehicles
    painttools
    particlehats
    placeholderapi
    plugmanx
    protocollib
    pvparena
    sba
    screamingbedwars
    signshop
    simpleelevator
    skinsrestorer
    skript
    slotmachine
    sociallikes3
    socialvotes
    tab
    tntruneloaded
    tpswitch
    vault
    veinminer
    vertex
    viaversion
    worldborder
    worldeditsui
    worldguard
    zvoteparty
    # keep-sorted end
  ];
}
