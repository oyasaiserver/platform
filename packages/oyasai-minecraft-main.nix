{
  oyasaiPurpur,
  plugin-registry,
  lib,
  oyasaiDockerTools,
  stdenv,
}:

let
  final = oyasaiPurpur rec {
    name = "oyasai-minecraft-main";
    version = "1.21.8";

    # TODO: migrate all plugins once moved to production
    plugins = with (plugin-registry.forVersion version); [
      essentialsx
      fastasyncworldedit
      luckperms
      plugmanx
      protocollib
      vault
      nuvotifier
      vertex
    ];

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config.Cmd = [ "${lib.getExe final}" ];
      };
    };
  };
in
final
