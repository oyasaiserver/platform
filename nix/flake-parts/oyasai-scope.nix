{ inputs, flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    {
      pkgs,
      lib,
      system,
      ...
    }:
    {
      options.oyasai.scope = lib.mkOption { type = lib.types.raw; };
      config =
        let
          oyasaiScope = pkgs.callPackage ../oyasai-scope.nix { inherit inputs; };
          availableOnSystem = lib.meta.availableOn { inherit system; };
          packages = lib.filterAttrs (_: v: lib.isDerivation v && availableOnSystem v) oyasaiScope;
        in
        {
          oyasai.scope = oyasaiScope;

          inherit packages;
          checks = lib.foldlAttrs (
            acc: name: package:
            acc // lib.mapAttrs' (k: v: lib.nameValuePair "${name}-${k}" v) package.oyasai-tests or { }
          ) { } packages;
        };
    }
  );
}
