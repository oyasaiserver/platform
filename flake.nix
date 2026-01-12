{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    devshell.url = "github:numtide/devshell";
    flake-parts.url = "github:hercules-ci/flake-parts";
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
    systems.url = "github:nix-systems/default";
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    {
      nixpkgs,
      flake-parts,
      treefmt-nix,
      devshell,
      systems,
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
      systems = import systems;
      imports = [
        # keep-sorted start
        ./nix/devshells.nix
        ./nix/docker.nix
        ./nix/oyasai-scope.nix
        ./nix/treefmt.nix
        devshell.flakeModule
        flakeAllSystems
        treefmt-nix.flakeModule
        # keep-sorted end
      ];
    };
}
