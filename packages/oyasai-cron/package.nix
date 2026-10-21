{
  package-lock2nix,
  lib,
  stdenv,
  oyasaiDockerTools,
  cacert,
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
          Env = [ "SSL_CERT_FILE=${cacert}/etc/ssl/certs/ca-bundle.crt" ];
        };
      };
    };
  };
in
final
