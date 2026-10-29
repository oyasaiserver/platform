{
  runCommandLocal,
  lib,
  callPackage,
}:

runCommandLocal "oyasai-external-plugins"
  {
    passthru = lib.packagesFromDirectoryRecursive {
      inherit callPackage;
      directory = ./plugins;
    };
  }
  ''
    touch $out
  ''
