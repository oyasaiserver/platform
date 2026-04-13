{
  lib,
  jre,
  writeShellApplication,
  coreutils,
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

  runtimeInputs = [ coreutils ];

  text = ''
    echo "eula=true" > eula.txt
    cp --no-preserve=ownership,mode ${serverProperties} server.properties

    mkdir -p cache
    cp --no-preserve=ownership,mode ${package.vanillaJar} cache/mojang_${version}.jar

    ${lib.optionalString (icon != null) ''
      cp --no-preserve=ownership,mode ${icon} server-icon.png
    ''}

    mkdir -p plugins
    rm -rf plugins/.paper-remapped
    rm -f plugins/*.jar

    ${lib.concatMapStringsSep "\n" (k: "cp --no-preserve=ownership,mode ${k} plugins") plugins}

    if [ -n "''${RCON_PASSWORD:-}" ]; then
      printf '\nrcon.password=%s\n' "''${RCON_PASSWORD}" >> server.properties
    fi

    MEMORY="''${MEMORY:-2G}"
    exec ${lib.getExe package} -Xmx"''${MEMORY}" -Xms"''${MEMORY}" "$@"
  '';
}
