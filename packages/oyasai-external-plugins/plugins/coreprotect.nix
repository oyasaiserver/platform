{
  inputs,
  makeWrapper,
  maven,
  jdk,
  runCommand,
}:

let
  jar = maven.buildMavenPackage (finalAttrs: {
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
  });
in
# Paper は `.jar` で終わるファイルしか読まない。サーバーは Nix ストアの
# ファイル名のまま plugins/ へコピーするので、名前が `.jar` で終わる必要がある。
runCommand "coreprotect.jar" { } ''
  cp ${jar} $out
''
