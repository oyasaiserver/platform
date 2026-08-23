{
  stdenvNoCC,
  maven,
  jdk,
  inputs,
}:
let
  deps = stdenvNoCC.mkDerivation {
    pname = "coreprotect-maven-deps";
    version = "24.0";

    src = inputs.coreprotect;

    nativeBuildInputs = [
      maven
      jdk
    ];

    buildPhase = ''
      mvn -Dmaven.repo.local=$out/.m2/repository \
          dependency:go-offline
    '';

    installPhase = "true";

    outputHashAlgo = "sha256";
    outputHashMode = "recursive";
    outputHash = "sha256-WWsZ2yuhvHnRsYsouliYH2V8F1P908/8tnKoGoH2b0o=";
  };
in
stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "coreprotect";
  version = "24.0";

  src = inputs.coreprotect;

  nativeBuildInputs = [
    maven
    jdk
  ];

  doCheck = true;

  buildPhase = ''
    mvn --offline \
        -Dmaven.repo.local=${deps}/.m2/repository \
        -DskipTests=false \
        clean package
  '';

  installPhase = ''
    cp target/${finalAttrs.pname}-${finalAttrs.version}.jar $out
  '';
})
