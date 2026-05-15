{
  runCommand,
  ktfmt,
  gradle2nix,
}:

runCommand "gradle-plugins" { } ''
  mkdir -p $out/ktfmt/share $out/gradle2nix

  cp ${ktfmt}/share/ktfmt/* $out/ktfmt/share

  cp -r ${gradle2nix}/lib/gradle2nix/{lib,share} $out/gradle2nix
''
