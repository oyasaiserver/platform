{ stdenv, gradle }:

stdenv.mkDerivation {
  name = "gradle-wrapper";
  dontUnpack = true;
  dontPatchShebangs = true;
  buildInputs = [ gradle ];
  _JAVA_OPTIONS = "-Xmx8g -Xms1g -XX:MaxMetaspaceSize=512m -Djava.net.preferIPv4Stack=true";
__darwinAllowLocalNetworking = true;
  buildPhase = ''
    touch settings.gradle.kts

    gradle wrapper
  '';
  installPhase = ''
    cp -r . $out
  '';
}
