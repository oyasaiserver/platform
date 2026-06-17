{ inputs }:

final: prev:
let
  inherit (final.stdenv.hostPlatform) system;
in
{ }
