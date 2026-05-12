{
  lib,
  writeShellApplication,
  coreutils,
  velocityServers,
  writeTextFile,
}:

{
  name,
  plugins ? [ ],
  config,
  passthru ? { },
}:

let
  package = velocityServers.velocity;

  velocityToml = writeTextFile {
    name = "velocity.toml";
    text = config;
  };
in
writeShellApplication {
  inherit name passthru;

  runtimeInputs = [ coreutils ];

  text = ''
    cp --no-preserve=ownership,mode ${velocityToml} velocity.toml

    if [ -z "''${VELOCITY_FORWARDING_SECRET:-}" ]; then
      echo "VELOCITY_FORWARDING_SECRET is required" >&2
      exit 1
    fi

    printf '%s\n' "''${VELOCITY_FORWARDING_SECRET}" > forwarding.secret
    chmod 600 forwarding.secret

    mkdir -p plugins
    rm -f plugins/*.jar

    ${lib.concatMapStringsSep "\n" (
      k:
      "cp --no-preserve=ownership,mode ${k} ${
        if (lib.hasSuffix ".jar" k) then "plugins" else "plugins/${builtins.baseNameOf k}.jar"
      }"
    ) plugins}

    MEMORY="''${MEMORY:-1G}"
    exec ${lib.getExe package} -Xmx"''${MEMORY}" -Xms"''${MEMORY}" "$@"
  '';
}
