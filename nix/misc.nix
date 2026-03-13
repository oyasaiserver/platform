{ inputs, ... }:
{
  perSystem =
    { system, inputs', ... }:
    {
      _module.args = {
        pkgs = import inputs.nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      };
      packages = { inherit (inputs'.tools.packages) nix-flake-check-changed nix-grep-to-build; };
    };
}
