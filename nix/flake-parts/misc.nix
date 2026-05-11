{ inputs, ... }:
{
  perSystem =
    { system, ... }:
    {
      _module.args = {
        pkgs = import inputs.nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [
            inputs.nix-minecraft.overlay
            inputs.dune2nix.overlays.dune
            (import ../oyasai-overlay.nix { inherit inputs; })
          ];
        };
      };
    };
}
