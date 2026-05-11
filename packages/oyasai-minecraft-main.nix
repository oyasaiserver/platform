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
    version = "1.21.10";

    icon = ../assets/icon.png;

    properties = ''
      allow-flight=true
      allow-nether=false
      difficulty=normal
      enable-command-block=true
      enable-jmx-monitoring=true
      enforce-secure-profile=false
      generate-structures=false
      level-name=lifeworld
      max-players=70
      motd=§l§r                 §b§lOyasai§f§lServer§7 [v${version}]§r\n§l§f            建築勢は集合だ！建築！建築！建築！！！
      network-compression-threshold=96
      pvp=false
      simulation-distance=16
      spawn-animals=false
      spawn-npcs=false
      spawn-protection=0
      sync-chunk-writes=false
      view-distance=32
      enable-rcon=true
      rcon.port=25575
    '';

    plugins = with (oyasai-plugin-registry.forVersion version); [
      # keep-sorted start
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
      entitypose
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
      nuvotifier
      openinv
      oyasaiadmintools
      oyasaipets
      oyasaiutilities
      oyasaivehicles
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
      # keep-sorted end
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
              (lib.getExe mc-monitor)
              "status"
            ];
            Interval = 5 * 1000000000;
            Timeout = 5 * 1000000000;
            StartPeriod = 60 * 1000000000;
            Retries = 20;
          };
        };
      };
    };
  };
in
final
