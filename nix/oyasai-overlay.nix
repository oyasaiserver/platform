{ inputs }:
(
  final: prev:
  let
    inherit (final.stdenv.hostPlatform) system;
    pkgs-unstable = import inputs.nixpkgs-unstable {
      config.allowUnfree = true;
      inherit system;
    };
  in
  {
    inherit (pkgs-unstable) mc-monitor;
  }
)
