{ ... }: {
  perSystem =
    {
      pkgs,
      lib,
      config,
      inputs',
      ...
    }:
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
            clang
            gradle
            infisical
            inputs'.fenix.packages.stable.toolchain
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
        env = lib.optionals pkgs.stdenv.isDarwin [
          {
            name = "SDKROOT";
            value = pkgs.apple-sdk_26;
          }
          {
            name = "LIBRARY_PATH";
            value = "${pkgs.libiconv}/lib";
          }
        ];
      };
    };
}
