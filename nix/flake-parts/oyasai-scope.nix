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
        in
        {
          oyasai.scope = oyasaiScope;
          packages = lib.filterAttrs (_: v: (availableOnSystem v) && (lib.isDerivation v)) oyasaiScope;
        };
    }
  );
}
