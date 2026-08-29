{
  lib,
  stdenv,
  oyasaiDockerTools,
  rustPlatform,
  cacert,
}:
let
  final = rustPlatform.buildRustPackage (finalAttrs: {
    name = "oyasai-cron";
    src = ./.;

    cargoLock.lockFile = ./Cargo.lock;

    meta.mainProgram = finalAttrs.name;

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
  });
in
final
