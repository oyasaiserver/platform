{
  pkgs,
  lib,
  inputs,
  ...
}:
{
  options.oyasai.scope = lib.mkOption { type = lib.types.raw; };
  config.oyasai.scope = pkgs.callPackage ../oyasai-scope.nix { inherit inputs; };
}
