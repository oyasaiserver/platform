{
  inputs = {
    # keep-sorted start block=yes
    codegen = {
      url = "github:anteriorcore/codegen";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-parts.follows = "flake-parts";
      inputs.treefmt-nix.follows = "treefmt-nix";
      inputs.systems.follows = "systems";
    };
    devshell = {
      url = "github:numtide/devshell";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    fenix = {
      url = "github:nix-community/fenix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    gradle2nix = {
      url = "github:oyasaiserver/gradle2nix?ref=v2";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    mc-monitor = {
      url = "github:itzg/mc-monitor";
      flake = false;
    };
    nix-minecraft = {
      url = "github:infinidoge/nix-minecraft/pull/230/merge";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.systems.follows = "systems";
    };
    nixpkgs-terraform-providers-bin = {
      url = "github:nix-community/nixpkgs-terraform-providers-bin";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";
    package-lock2nix = {
      url = "github:anteriorcore/package-lock2nix";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-parts.follows = "flake-parts";
      inputs.treefmt-nix.follows = "treefmt-nix";
      inputs.systems.follows = "systems";
    };
    systems.url = "github:nix-systems/triplet";
    tools = {
      url = "github:anteriorcore/tools";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-parts.follows = "flake-parts";
      inputs.treefmt-nix.follows = "treefmt-nix";
      inputs.systems.follows = "systems";
      inputs.package-lock2nix.follows = "package-lock2nix";
    };
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    # keep-sorted end
  };
  outputs =
    { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      imports = [
        # keep-sorted start
        ./nix/flake-parts/codegen.nix
        ./nix/flake-parts/constants.nix
        ./nix/flake-parts/devshells.nix
        ./nix/flake-parts/docker.nix
        ./nix/flake-parts/misc.nix
        ./nix/flake-parts/oyasai-scope.nix
        ./nix/flake-parts/treefmt.nix
        inputs.codegen.flakeModules.default
        inputs.devshell.flakeModule
        inputs.tools.flakeModules.checkBuildAll
        inputs.treefmt-nix.flakeModule
        # keep-sorted end
      ];
    };
}
