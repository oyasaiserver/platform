{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    flake-parts.url = "github:hercules-ci/flake-parts";
    devshell.url = "github:numtide/devshell";
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    gradle2nix = {
      url = "github:oyasaiserver/gradle2nix?ref=v2";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    package-lock2nix = {
      url = "github:anteriorcore/package-lock2nix";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-parts.follows = "flake-parts";
      inputs.treefmt-nix.follows = "treefmt-nix";
    };
  };
  outputs =
    {
      nixpkgs,
      flake-parts,
      treefmt-nix,
      devshell,
      ...
    }@inputs:
    let
      flakeAllSystems = {
        perSystem =
          { system, ... }:
          {
            _module.args = {
              pkgs = import nixpkgs {
                inherit system;
                config.allowUnfree = true;
              };
            };
          };
      };
    in
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-darwin"
        "x86_64-linux"
      ];
      imports = [
        ./nix/devshell.nix
        ./nix/oyasai-scope.nix
        ./nix/treefmt.nix
        devshell.flakeModule
        treefmt-nix.flakeModule
        flakeAllSystems
      ];
    };
}
