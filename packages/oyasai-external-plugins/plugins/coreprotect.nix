{
  inputs,
  makeWrapper,
  maven,
  jdk,
}:

maven.buildMavenPackage (finalAttrs: {
  pname = "coreprotect";

  version = inputs.coreprotect.shortRev;

  src = inputs.coreprotect;

  mvnJdk = jdk;

  mvnHash = "sha256-k55lgSMUduRJT8HT0Jx4h5TmktEBJfVMNbtEp75GLO8=";

  nativeBuildInputs = [ makeWrapper ];

  postPatch = ''
    substituteInPlace src/main/resources/plugin.yml \
      --replace-fail 'branch: ''${project.branch}' 'branch: development'
  '';

  installPhase = ''
    runHook preInstall

    cp target/CoreProtect-*.jar $out

    runHook postInstall
  '';
})
