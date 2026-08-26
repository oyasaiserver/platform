{
  inputs,
  flake-parts-lib,
  config,
  self,
  ...
}:
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
          oyasaiScope = pkgs.callPackage ../oyasai-scope.nix {
            inherit inputs;
            inherit (config) constants;
          };
          availableOnSystem = lib.meta.availableOn { inherit system; };
          packages = (
            lib.filterAttrs (_: v: lib.isDerivation v && availableOnSystem v) (
              oyasaiScope
              // {
                oyasai-cdktf = oyasaiScope.oyasai-cdktf.override {
                  oyasaiImageIds = self.packages.x86_64-linux.all-docker-tags.attrs;
                };
              }
            )
          );
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
