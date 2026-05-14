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
  properties ? { },
  passthru ? { },
}:

let
  package = purpurServers."purpur-${lib.replaceString "." "_" version}".override { inherit jre; };

  serverProperties = writeTextFile {
    name = "server.properties";
    text = lib.generators.toKeyValue { } properties;
  };
in
writeShellApplication {
  inherit name passthru;

  runtimeInputs = [ coreutils ];

  text = ''
    mkdir -p cache
    cp --no-preserve=ownership,mode ${package.vanillaJar} cache/mojang_${version}.jar

    ${lib.optionalString (icon != null) ''
      cp --no-preserve=ownership,mode ${icon} server-icon.png
    ''}

    mkdir -p plugins

    # Sighs. Doesn't take rcon password as a envvar.
    {
      cat ${serverProperties}
      if [[ -n "''${RCON_PASSWORD:-}" ]]; then
        printf 'enable-rcon=true\nrcon.password=%s\n' "''${RCON_PASSWORD}"
      fi
    } > server.properties

    MEMORY="''${MEMORY:-2G}"
    exec ${lib.getExe package} -Xmx"''${MEMORY}" -Xms"''${MEMORY}" -Dcom.mojang.eula.agree=true \
      ${lib.concatMapStringsSep " " (k: "--add-plugin ${k}") plugins} \
      "$@"
  '';
}
