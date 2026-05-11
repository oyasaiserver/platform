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
            dune
            gradle
            infisical
            jdk
            just
            nixd
            nodejs
            npm-list
            terraform
            typescript-language-server
            # keep-sorted end
          ];
      };
    };
}
