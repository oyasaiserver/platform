{ ... }:
{
  perSystem =
    { pkgs, config, ... }:
    let
      oyasaiScope = config.oyasai.scope;
    in
    {
      devshells.default = {
        packages =
          with pkgs;
          with oyasaiScope;
          [
            nodejs
            jdk
            terraform
            gradle
            gradle2nix-cli
            nixd
            typescript-language-server
          ];
      };
    };
}
