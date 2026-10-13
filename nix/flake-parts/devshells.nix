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
            gradle
            infisical
            jdk
            just
            nixd
            nodejs
            npm-list
            nvfetcher
            restic
            terraform
            typescript-language-server
            # keep-sorted end
          ];
      };
    };
}
