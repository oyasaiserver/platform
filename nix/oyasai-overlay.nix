{ inputs }:

final: prev:
let
  inherit (final.stdenv.hostPlatform) system;
in
{
  inherit (inputs.nixpkgs-unstable.legacyPackages.${system})
    # just in 25.11 doesn't include [format strings](https://just.systems/man/en/strings.html#format-strings)
    just
    ;
}
