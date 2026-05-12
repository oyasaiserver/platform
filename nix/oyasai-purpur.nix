{
  lib,
  jre,
  writeShellApplication,
  coreutils,
  yq-go,
  purpurServers,
  writeTextFile,
}:

{
  name,
  version,
  plugins ? [ ],
  icon ? null,
  # Can make this an attrset
  properties ? "",
  velocityForwarding ? false,
  passthru ? { },
}:

let
  package = purpurServers."purpur-${lib.replaceString "." "_" version}".override { inherit jre; };

  serverProperties = writeTextFile {
    name = "server.properties";
    text = properties;
  };
in
writeShellApplication {
  inherit name passthru;

  runtimeInputs = [
    coreutils
    yq-go
  ];

  text = ''
    echo "eula=true" > eula.txt
    cp --no-preserve=ownership,mode ${serverProperties} server.properties

    ${lib.optionalString velocityForwarding ''
      if [ -z "''${VELOCITY_FORWARDING_SECRET:-}" ]; then
        echo "VELOCITY_FORWARDING_SECRET is required" >&2
        exit 1
      fi

      mkdir -p config
      if [ -f config/paper-global.yml ]; then
        yq --inplace '
          .proxies.velocity.enabled = true |
          .proxies.velocity.online-mode = true |
          .proxies.velocity.secret = strenv(VELOCITY_FORWARDING_SECRET)
        ' config/paper-global.yml
      else
        {
          echo "proxies:"
          echo "  velocity:"
          echo "    enabled: true"
          echo "    online-mode: true"
          printf '    secret: "%s"\n' "''${VELOCITY_FORWARDING_SECRET}"
        } > config/paper-global.yml
      fi
      chmod 600 config/paper-global.yml
    ''}

    mkdir -p cache
    cp --no-preserve=ownership,mode ${package.vanillaJar} cache/mojang_${version}.jar

    ${lib.optionalString (icon != null) ''
      cp --no-preserve=ownership,mode ${icon} server-icon.png
    ''}

    mkdir -p plugins
    rm -rf plugins/.paper-remapped
    rm -f plugins/*.jar

    ${lib.concatMapStringsSep "\n" (
      k:
      "cp --no-preserve=ownership,mode ${k} ${
        # HOTFIX come up with a better way - shun 2026-04
        if (lib.hasSuffix ".jar" k) then "plugins" else "plugins/${builtins.baseNameOf k}.jar"
      }"
    ) plugins}

    if [ -n "''${RCON_PASSWORD:-}" ]; then
      printf '\nrcon.password=%s\n' "''${RCON_PASSWORD}" >> server.properties
    fi

    MEMORY="''${MEMORY:-2G}"
    exec ${lib.getExe package} -Xmx"''${MEMORY}" -Xms"''${MEMORY}" "$@"
  '';
}
