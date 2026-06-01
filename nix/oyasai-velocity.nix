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

    text = ''
      cp --no-preserve=ownership,mode ${velocityToml} velocity.toml

      mkdir -p plugins
      rm -f plugins/*.jar
      ${lib.optionalString (plugins != [ ]) ''
        cp --no-preserve=ownership,mode ${lib.concatStringsSep " " plugins} plugins
      ''}

      MEMORY="''${MEMORY:-512M}"
      exec ${lib.getExe package} \
        -Xmx"''${MEMORY}" \
        -Xms"''${MEMORY}" \
        -Dvelocity.max-plugin-message-payload-size=2100000 \
        -Dvelocity.max-compression-ratio=2000000 \
        "$@"
    '';

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config = {
          Cmd = [ (lib.getExe result) ];
          WorkingDir = "/data";
        };
      };
    };
  };
in
result
