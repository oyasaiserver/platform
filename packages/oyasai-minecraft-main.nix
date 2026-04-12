{
  oyasaiPurpur,
  oyasai-plugin-registry,
  lib,
  oyasaiDockerTools,
  stdenv,
  mc-monitor,
}:

let
  final = oyasaiPurpur rec {
    name = "oyasai-minecraft-main";
    version = "1.21.8";

    icon = ../assets/icon.png;

    properties = ''
      allow-flight=true
      allow-nether=false
      difficulty=normal
      enable-jmx-monitoring=true
      enable-rcon=true
      enforce-secure-profile=false
      generate-structures=false
      level-name=lifeworld
      max-players=70
      motd=§l§r                 §b§lOyasai§f§lServer§7 [v${version}]§r\n§l§f            建築勢は集合だ！建築！建築！建築！！！
      network-compression-threshold=96
      rcon.password=0721
      spawn-animals=false
      spawn-npcs=false
      spawn-protection=0
      view-distance=24
      enable-rcon=true
      rcon.port=25575
    '';

    plugins = with (oyasai-plugin-registry.forVersion version); [
      advancedban
      arceon
      bkcommonlib
      bluemap
      chestcommands
      coreprotect
      crackshotguns
      decentholograms
      discordsrv
      dynamicprofile
      essentialsx
      essentialsxchat
      essentialsxspawn
      ezedits
      fastasyncvoxelsniper
      fastasyncworldedit
      floodgate
      geyser
      gsit
      imageonmap
      inventoryshop
      joincommands
      luckperms
      lunachat
      lwc
      minepacks
      multiversecore
      multiverseprotals
      mycommand
      mypet
      nuvotifier
      openinv
      oyasaiadmintools
      oyasaipets
      oyasaiutilities
      painttools
      particlehats
      placeholderapi
      plugmanx
      protocollib
      pvparena
      signshop
      simpleelevator
      skinsrestorer
      skript
      slotmachine
      sociallikes3
      socialvotes
      tab
      terra
      tntruneloaded
      tokenmanager
      tpswitch
      vault
      veinminer
      venturechat
      vertex
      viaversion
      worldborder
      worldeditsui
      worldguard
      zvoteparty
    ];

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config = {
          Cmd = [ (lib.getExe final) ];
          WorkingDir = "/data";
          Healthcheck = {
            Test = [
              "CMD"
              "mc-monitor"
              "status"
              "--host"
              "127.0.0.1"
              "--port"
              "25565"
            ];
            Interval = 30 * 1000000000; # 30s in nanoseconds
            Timeout = 5 * 1000000000;
            StartPeriod = 180 * 1000000000; # 3 min for startup
            Retries = 3;
          };
        };
      };
    };
  };
in
final
