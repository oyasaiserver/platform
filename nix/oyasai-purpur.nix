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

  runtimeInputs = [
    coreutils
    jre
  ];

  text = ''
    # Technically not required but prepopulate the cache to minimize
    # non-determinism.
    mkdir -p cache
    cp --no-preserve=ownership,mode ${package.vanillaJar} cache/mojang_${version}.jar

    # Server icon
    ${lib.optionalString (icon != null) ''
      cp --no-preserve=ownership,mode ${icon} server-icon.png
    ''}

    # Plugins
    mkdir -p plugins
    rm -rf plugins/.paper-remapped
    rm -f plugins/*.jar

    # Cleaner to inject as `--add-plugin` but doesn't work with Plugman well :(
    ${lib.optionalString (plugins != [ ]) ''
      cp --no-preserve=ownership,mode ${lib.concatStringsSep " " plugins} plugins
    ''}

    # Sighs. Doesn't take rcon password as a envvar.
    {
      cat ${serverProperties}
      if [[ -n "''${RCON_PASSWORD:-}" ]]; then
        printf 'enable-rcon=true\nrcon.password=%s\n' "''${RCON_PASSWORD}"
      fi
    } > server.properties

    MEMORY="''${MEMORY:-2G}"

    exec java \
      -Xmx"''${MEMORY}" \
      -Xms"''${MEMORY}" \
      -XX:+UseZGC \
      -XX:+AlwaysPreTouch \
      -XX:+DisableExplicitGC \
      -XX:+PerfDisableSharedMem \
      -XX:-OmitStackTraceInFastThrow \
      -Dfile.encoding=UTF-8 \
      -Dcom.mojang.eula.agree=true \
      -jar "${package}/lib/minecraft/server.jar" \
      nogui \
      "$@"
  '';
}
