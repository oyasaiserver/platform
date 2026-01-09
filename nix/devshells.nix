{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { pkgs, config, ... }:
    let
      oyasaiScope = config.oyasai.scope;
    in
    {
      devshells.default = {
        packages =
          (with oyasaiScope; [
            nodejs
            jdk
            # terraform NOMERGE
            gradle
            gradle2nix-cli
          ])
          ++ (with pkgs; [ infisical ]);
      };
    }
  );
}
