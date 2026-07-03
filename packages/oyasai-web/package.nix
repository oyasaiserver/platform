{
  package-lock2nix,
  lib,
  stdenv,
  oyasaiDockerTools,
}:
let
  final = package-lock2nix.mkNpmModule {
    src = ./.;
    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit (final) name;
        config = {
          Cmd = [ (lib.getExe final) ];
          WorkingDir = "/data";
        };
      };
    };
  };
in
final
