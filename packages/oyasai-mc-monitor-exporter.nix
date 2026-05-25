{
  lib,
  mc-monitor,
  oyasaiDockerTools,
  stdenv,
  writeShellApplication,
}:

let
  result = writeShellApplication {
    name = "oyasai-mc-monitor-exporter";
    runtimeInputs = [ mc-monitor ];
    text = ''
      exec mc-monitor export-for-prometheus "$@"
    '';
    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        name = "oyasai-mc-monitor-exporter";
        config = {
          Cmd = [ (lib.getExe result) ];
          ExposedPorts = {
            "8080/tcp" = { };
          };
        };
      };
    };
  };
in
result
