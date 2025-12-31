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
    systems.url = "github:nix-systems/default";
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
          { config, system, ... }:
          {
            _module.args = {
              pkgs = import nixpkgs {
                inherit system;
                config.allowUnfree = true;
              };
            };
            packages =
              let
                oyasaiScope = config.oyasai.scope;
              in
              {
                # TODO: Split up each into separate derivations
                all-plugins = oyasaiScope.gradle2nix.buildGradlePackage {
                  pname = "all-plugins";
                  version = "0.0.0";
                  src = ../.;
                  inherit (oyasaiScope) gradle;
                  buildJdk = oyasaiScope.jdk;
                  lockFile = ../gradle.lock;
                  gradleBuildFlags = [ "build" ];
                  installPhase = ''
                    runHook preInstall

                    mkdir -p $out
                    cp plugins/*/build/libs/*.jar $out

                    runHook postInstall
                  '';
                };
              };
          };
      };
    in
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import systems;
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
