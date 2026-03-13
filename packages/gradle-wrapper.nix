{ stdenv, gradle }:

stdenv.mkDerivation {
  name = "gradle-wrapper";
  dontUnpack = true;
  dontPatchShebangs = true;
  buildInputs = [ gradle ];
  buildPhase = ''
    touch settings.gradle.kts

    gradle wrapper
  '';
  installPhase = ''
    mkdir -p $out/gradle

    cp gradlew gradlew.bat $out
    cp -r gradle $out
    cp ${../gradle/libs.versions.toml} $out/gradle/libs.versions.toml
  '';
}
