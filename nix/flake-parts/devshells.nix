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
            # keep-sorted start
            awscli2
            gradle
            gradle2nix-cli
            infisical
            jdk
            just
            nixd
            nodejs
            terraform
            typescript-language-server
            # keep-sorted end
          ];
      };
    };
}
