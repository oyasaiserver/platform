{
  lib,
  jre,
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
  package = velocityServers.velocity.override { jre_headless = jre; };

  velocityToml = (formats.toml { }).generate "velocity.toml" velocityConfig;

  result = writeShellApplication {
    inherit name;

    runtimeInputs = [ coreutils ];

    text = ''
      cp --no-preserve=ownership,mode ${velocityToml} velocity.toml

      mkdir -p plugins
      rm -f plugins/*.jar
      ${lib.optionalString (plugins != [ ]) ''
        # store のパスは `<hash>-<name>.jar`。`ls` で名前順に並ぶよう `<name>-<hash>.jar` にして置く
        for p in ${lib.concatStringsSep " " plugins}; do
          b=$(basename "$p")
          h=''${b%%-*}
          n=''${b#*-}
          cp --no-preserve=ownership,mode "$p" "plugins/''${n%.jar}-$h.jar"
        done
      ''}

      # Floodgate key.pem is 16 raw bytes (AES-128), base64-encoded in the envvar.
      if [[ -n "''${FLOODGATE_KEY_PEM_B64:-}" ]]; then
        mkdir -p plugins/floodgate
        <<<"''${FLOODGATE_KEY_PEM_B64}" base64 -d  >plugins/floodgate/key.pem
      fi

      mkdir -p logs/dumps

      MEMORY="''${MEMORY:-512M}"
      exec ${lib.getExe package} \
        -Xmx"''${MEMORY}" \
        -Xms"''${MEMORY}" \
        -XX:+ExitOnOutOfMemoryError \
        -XX:+HeapDumpOnOutOfMemoryError \
        -XX:HeapDumpPath=logs/dumps/ \
        -Dvelocity.max-plugin-message-payload-size=2100000 \
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
