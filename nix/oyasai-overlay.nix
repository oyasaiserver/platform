{ inputs }:

final: prev:
let
  inherit (final.stdenv.hostPlatform) system;
in
{
  inherit (inputs.nixpkgs-25-11.legacyPackages.${system})
    # Removed in 26.05
    cdktf-cli
    ;
}
