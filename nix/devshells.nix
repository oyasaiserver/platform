{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { config, ... }:
    let
      oyasaiScope = config.oyasai.scope;
    in
    {
      devshells.default = {
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
