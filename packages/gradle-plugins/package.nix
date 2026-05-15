{
  runCommand,
  ktfmt,
  gradle2nix,
  jdk,
  writableTmpDirAsHomeHook
}:

runCommand "gradle-plugins" {
  passthru.oyasai-tests.basic = runCommand "basic" {
    nativeBuildInputs = [
      jdk
      writableTmpDirAsHomeHook
    ];
  }
    ''
      cd ${../..}

      export GRADLE_USER_HOME=$(mktemp -d)

      ls -la

      java --version
      ./gradlew --version

      touch $out
    ''
  ;
} ''
  mkdir -p $out/ktfmt/share $out/gradle2nix

  cp ${ktfmt}/share/ktfmt/* $out/ktfmt/share

  cp -r ${gradle2nix}/lib/gradle2nix/{lib,share} $out/gradle2nix
''
