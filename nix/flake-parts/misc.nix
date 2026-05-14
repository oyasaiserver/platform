{ inputs, ... }:
{
  perSystem =
    { system, ... }:
    {
      _module.args = {
        pkgs = import inputs.nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [ (import ../oyasai-overlay.nix { inherit inputs; }) ];
        };
      };
    };
}
