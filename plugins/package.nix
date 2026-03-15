# TODO: Here we build all plugins, and each plugins will have a
# thin derivation of just copying from here. This is because
# Gradle makes it very hard as local (`project`) dependencies are
# not part of the lockfile.
{
  gradle2nix,
  lib,
  gradle,
  jdk,
}:
gradle2nix.buildGradlePackage {
  pname = "plugins";
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
  gradleBuildFlags = [ "build" ];
  installPhase = ''
    runHook preInstall

    mkdir -p $out
    cp plugins/*/build/libs/*.jar $out

    runHook postInstall
  '';
}
