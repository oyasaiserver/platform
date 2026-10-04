{ stdenv, gradle }:

stdenv.mkDerivation {
  name = "gradle-wrapper";

  # Gradle wants local networking
  __darwinAllowLocalNetworking = true;

  dontUnpack = true;
  dontPatchShebangs = true;

  buildInputs = [ gradle ];

  buildPhase = ''
    touch settings.gradle.kts

    gradle wrapper
  '';

  installPhase = ''
    cp -r . $out
  '';
}
