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
      gradle2nix,
      ...
    }@inputs:
    let
      flakeAllSystems = {
        perSystem =
          {
            self',
            system,
            pkgs,
            lib,
            ...
          }:
          let
            nodejs = pkgs.nodejs_24;
            jdk = pkgs.javaPackages.compiler.temurin-bin.jdk-25;
            gradle = pkgs.gradle_9-unwrapped;
          in
          {
            _module.args = {
              pkgs = import nixpkgs {
                inherit system;
                config.allowUnfree = true;
              };
            };
            packages = {
              _plugins = gradle2nix.builders.${system}.buildGradlePackage {
                pname = "plugins";
                src = ./.;
                version = "0.0.0";
                inherit gradle;
                buildJdk = jdk;
                lockFile = ./gradle.lock;
                gradleBuildFlags = [ "build" ];
                installPhase = ''
                  runHook preInstall

                  mkdir -p $out
                  cp plugins/*/build/libs/*.jar $out

                  runHook postInstall
                '';
              };
            }
            // lib.packagesFromDirectoryRecursive {
              callPackage = lib.callPackage;
              directory = ./packages;
            };
            checks = lib.concatMapAttrs (k: v: { "build-${k}" = v; }) self'.packages;
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
        ./nix/treefmt.nix
        devshell.flakeModule
        treefmt-nix.flakeModule
        flakeAllSystems
      ];
    };
}
