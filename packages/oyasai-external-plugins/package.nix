{
  runCommandLocal,
  callPackage,
  lib,
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
