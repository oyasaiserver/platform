{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { pkgs, config, ... }:
    let
      oyasaiScope = config.oyasai.scope;
    in
    {
      devShells.default = pkgs.mkShell {
        packages = with oyasaiScope; [
          nodejs
          jdk
          terraform
          gradle
        ];
      };
    }
  );
}
