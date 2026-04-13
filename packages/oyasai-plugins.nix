# TODO: Here we build all plugins, and each plugins will have a
# thin derivation of just copying from this. This is because
# Gradle makes it very hard as local (`project`) dependencies are
# not part of the lockfile.
{
  gradle2nix,
  lib,
  gradle,
  jdk,
  runCommand,
}:
let
  final = gradle2nix.buildGradlePackage {
    name = "oyasai-plugins";
    version = "0.0.0";
    src =
      with lib.fileset;
      toSource {
        root = ../.;
        fileset = unions [
          ../build.gradle.kts
          ../gradle
          ../plugins
          ../settings.gradle.kts
        ];
      };

    inherit gradle;
    buildJdk = jdk;
    lockFile = ../gradle.lock;

    gradleBuildFlags = [
      "build"
      "--no-daemon"
    ];

    # TODO: this feels like a weird place to set these options, but without the
    # build fails with OOM.
    _JAVA_OPTIONS = "-Xmx4g -Xms512m -XX:MaxMetaspaceSize=512m";

    installPhase = ''
      runHook preInstall

      mkdir -p $out
      cp plugins/*/build/libs/*.jar $out

      runHook postInstall
    '';

    passthru = lib.mapAttrs' (
      name: _:
      lib.nameValuePair (lib.toLower name) (
        runCommand name { } ''
          cp ${final}/${name}.jar $out
        ''
      )
    ) (builtins.readDir ../plugins);
  };
in
final
