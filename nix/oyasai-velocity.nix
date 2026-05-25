{
  lib,
  oyasaiDockerTools,
  stdenv,
  velocityServers,
  writeShellApplication,
  formats,
  coreutils,
}:

{
  name,
  velocityConfig,
  plugins ? [ ],
}:

let
  package = velocityServers.velocity;

  velocityToml = (formats.toml { }).generate "velocity.toml" velocityConfig;

  result = writeShellApplication {
    inherit name;

    runtimeInputs = [ coreutils ];

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config = {
          Cmd = [ (lib.getExe result) ];
          WorkingDir = "/data";
        };
      };
    };

    text = ''
      cp --no-preserve=ownership,mode ${velocityToml} velocity.toml

      mkdir -p plugins
      rm -f plugins/*.jar
      ${lib.optionalString (plugins != [ ]) ''
        cp --no-preserve=ownership,mode ${lib.concatStringsSep " " plugins} plugins
      ''}

      MEMORY="''${MEMORY:-512M}"
      exec ${lib.getExe package} -Xmx"''${MEMORY}" -Xms"''${MEMORY}" "$@"
    '';
  };
in
result
