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

    src = lib.fileset.toSource {
      root = ../.;
      fileset = lib.fileset.unions [
        ../build.gradle.kts
        ../gradle
        ../plugins
        ../settings.gradle.kts
      ];
    };

    lockFile = ../gradle.lock;

    nativeBuildInputs = [ paperweight-userdev-setup-hook ];

    gradleBuildFlags = [
      "build"
      "--no-daemon"
    ];

    _JAVA_OPTIONS = "-Xmx8g -Xms1g -XX:MaxMetaspaceSize=512m";

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
