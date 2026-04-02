{ inputs, ... }:
{
  perSystem =
    { system, inputs', ... }:
    {
      _module.args = {
        pkgs = import inputs.nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [ inputs.nix-minecraft.overlay ];
        };
      };
      packages = { inherit (inputs'.tools.packages) nix-flake-check-changed nix-grep-to-build; };
    };
}
