{
  oyasaiPurpur,
  oyasai-plugin-registry,
  lib,
  oyasaiDockerTools,
  stdenv,
}:

let
  final = oyasaiPurpur rec {
    name = "oyasai-minecraft-main";
    version = "1.21.8";

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

    # TODO: world container config

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config.Cmd = [ (lib.getExe final) ];
      };
    };
  };
in
final
