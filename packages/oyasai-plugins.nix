# TODO: Here we build all plugins, and each plugins will have a
# thin derivation of just copying from this. This is because
# Gradle makes it very hard as local (`project`) dependencies are
# not part of the lockfile.
{
  buildGradlePackage,
  lib,
  runCommand,
  paperweight-userdev-setup-hook,
}:
let
  final = buildGradlePackage {
    name = "oyasai-plugins";
    version = "0.0.0";
    src =
      with lib.fileset;
      toSource {
        root = ../.;
        fileset = unions [
          # keep-sorted start
          ../build.gradle.kts
          ../gradle
          ../gradle.properties
          ../plugins
          ../settings.gradle.kts
          # keep-sorted end
        ];
      };

    lockFile = ../gradle.lock;

    nativeBuildInputs = [ paperweight-userdev-setup-hook ];

    gradleBuildFlags = [
      "build"
      "--no-daemon"
    ];

    installPhase = ''
      runHook preInstall

      mkdir -p $out
      cp plugins/*/build/libs/*.jar $out

      runHook postInstall
    '';

    passthru = lib.mapAttrs' (
      name: _:
      let
        filename = "${name}.jar";
      in
      lib.nameValuePair (lib.toLower name) (
        runCommand filename { } ''
          cp ${final}/${filename} $out
        ''
      )
    ) (builtins.readDir ../plugins);
  };
in
final
