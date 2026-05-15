{ stdenvNoCC, ktfmt }:
let
  version = ktfmt.version;
in
stdenvNoCC.mkDerivation {
  pname = "ktfmt-plugin";
  inherit version;
  dontUnpack = true;
  installPhase = ''
    jarDir=$out/com/facebook/ktfmt/${version}
    mkdir -p $jarDir
    cp ${ktfmt}/share/ktfmt/ktfmt.jar $jarDir/ktfmt-${version}.jar
    printf '%s' '<?xml version="1.0" encoding="UTF-8"?><project><modelVersion>4.0.0</modelVersion><groupId>com.facebook</groupId><artifactId>ktfmt</artifactId><version>${version}</version><packaging>jar</packaging></project>' \
      > $jarDir/ktfmt-${version}.pom
  '';
}
