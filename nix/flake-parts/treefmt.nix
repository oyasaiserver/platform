{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { lib, config, ... }:
    {
      treefmt =
        let
          inherit (config.oyasai.scope) callPackage;
        in
        lib.filterAttrs (n: _: !(lib.hasPrefix "override" n)) (callPackage ../treefmt.nix { });
    }
  );
}
