{ ... }:
{
  perSystem =
    { pkgs, config, ... }:
    let
      oyasaiScope = config.oyasai.scope;

      # Base packages
      packages =
        with pkgs;
        with oyasaiScope;
        [
          # keep-sorted start
          awscli2
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
    in
    {
      devshells = {
        default = { inherit packages; };
        ocaml = {
          packages =
            packages
            ++ (
              with pkgs;
              with oyasaiScope;
              [
                ocaml
                dune
                ocamlPackages.ocaml-lsp

                # ocaml-base-compiler
                clang
                libllvm
                gnumake
                # janestreet/gel
                gnupatch
              ]
            );
        };
      };
    };
}
