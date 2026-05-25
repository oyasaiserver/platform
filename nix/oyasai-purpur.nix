{
  lib,
  jre,
  oyasaiDockerTools,
  stdenv,
  mc-monitor,
  writeShellApplication,
  writeTextFile,
  formats,
  coreutils,
  gnused,
  purpurServers,
}:

{
  name,
  version,
  plugins ? [ ],
  icon ? null,
  properties ? { },
  paperConfig ? null,
}:

let
  package = purpurServers."purpur-${lib.replaceString "." "_" version}".override { inherit jre; };

  serverProperties = writeTextFile {
    name = "server.properties";
    text = lib.generators.toKeyValue { } properties;
  };

  paperGlobalYml =
    if paperConfig != null then (formats.yaml { }).generate "paper-global.yml" paperConfig else null;

  result = writeShellApplication {
    inherit name;

    runtimeInputs = [
      coreutils
      gnused
      jre
    ];

    text = ''
      # Technically not required but prepopulate the cache to ensure
      # reproducibility.
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

      # Doesn't have cli flag
      ${lib.optionalString (paperConfig != null) ''
        mkdir -p config
        cp --no-preserve=ownership,mode ${paperGlobalYml} config/paper-global.yml
        # FIXME: Paper supports PAPER_VELOCITY_SECRET env var (@PostProcess in GlobalConfiguration.java,
        # added June 2022), but it's unclear whether Purpur's build includes this. In practice the env
        # var silently has no effect and we fall back to sed-patching the baked YAML at startup.
        # Consider switching to upstream Paper if Purpur-specific features are no longer needed.
        if [[ -n "''${PAPER_VELOCITY_SECRET:-}" ]]; then
          sed -i "s/PAPER_VELOCITY_SECRET_PLACEHOLDER/''${PAPER_VELOCITY_SECRET}/" config/paper-global.yml
        fi
      ''}

      # Sighs. Doesn't take rcon password as a envvar.
      {
        cat ${serverProperties}
        if [[ -n "''${RCON_PASSWORD:-}" ]]; then
          printf 'rcon.password=%s\n' "''${RCON_PASSWORD}"
        fi
      } >server.properties

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

    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit name;
        config = {
          Cmd = [ (lib.getExe result) ];
          WorkingDir = "/data";
          Healthcheck = {
            Test = [
              "CMD"
              (lib.getExe mc-monitor)
              "status"
            ];
            Interval = 5 * 1000000000;
            Timeout = 5 * 1000000000;
            StartPeriod = 60 * 1000000000;
            Retries = 20;
          };
        };
      };
    };
  };
in
result
