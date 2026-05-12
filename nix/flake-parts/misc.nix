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
            (import ../oyasai-overlay.nix { inherit inputs; })
          ];
        };
      };
    };
}
