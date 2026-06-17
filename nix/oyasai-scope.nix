{
  inputs,
  pkgs,
  lib,
  stdenv,
  ...
}:
let
  inherit (stdenv.hostPlatform) system;

  scope = lib.makeScope pkgs.newScope (
    scopeSelf:
    let
      inherit (scopeSelf) callPackage;

      oyasaiTerraformProviders =
        with (inputs.nixpkgs-terraform-providers-bin.legacyPackages.${system}.providers); [
          cloudflare.cloudflare
          kreuzwerker.docker
          integrations.github
          infisical.infisical
        ];

      pl2nixOverlay = final: prev: {
        mkNpmModule =
          args:
          let
            orig = prev.mkNpmModule args;
          in
          orig.overrideAttrs (
            self:
            lib.optionalAttrs (builtins.pathExists (self.src + "/tsconfig.json")) {
              nativeBuildInputs =
                self.nativeBuildInputs or [ ]
                ++ (with pkgs; [
                  jq
                  moreutils
                ]);
              prePatch = orig.prePatch or "" + ''
                jq --arg tsconfig ${../tsconfig.json} '
                  if has("extends")
                  then .extends = $tsconfig
                  else .
                  end
                ' tsconfig.json | sponge tsconfig.json
              '';
            }
          );
      };
    in
    {
      inherit inputs oyasaiTerraformProviders;
      inherit (pkgs) bore-cli;
      inherit (inputs.gradle2nix.packages.${system}) gradle2nix;
      inherit (inputs.tools.packages.${system}) nix-flake-check-changed nix-grep-to-build npm-list;
      inherit (inputs.nix-minecraft.legacyPackages.${system})
        purpurServers
        neoforgeServers
        vanillaServers
        velocityServers
        ;

      terraform = pkgs.terraform.withPlugins (_: oyasaiTerraformProviders);
      nodejs = pkgs.nodejs_24;
      jdk = pkgs.javaPackages.compiler.temurin-bin.jdk-25;
      jre = pkgs.javaPackages.compiler.temurin-bin.jre-25;
      gradle = pkgs.gradle_9.override { java = scopeSelf.jdk; };

      package-lock2nix = callPackage inputs.package-lock2nix.lib.package-lock2nix {
        overrideScope = pl2nixOverlay;
      };

      buildGradlePackage =
        args:
        inputs.gradle2nix.builders.${system}.buildGradlePackage (
          args
          // {
            inherit (scopeSelf) gradle;
            buildJdk = scopeSelf.jdk;
          }
        );

      oyasaiPurpur = callPackage ./oyasai-purpur.nix { };
      oyasaiVelocity = callPackage ./oyasai-velocity.nix { };

      oyasaiDockerTools = callPackage ./oyasai-docker-tools.nix { };
    }
    // lib.packagesFromDirectoryRecursive {
      inherit callPackage;
      directory = ../packages;
    }
  );

  overlay = final: prev: {
    oyasai-cdktf = prev.oyasai-cdktf.override {
      nodejs = pkgs.nodejs_22;
      package-lock2nix = final.package-lock2nix.override { nodejs = pkgs.nodejs_22; };
    };
    oyasai-cdktf-providers = prev.oyasai-cdktf-providers.override {
      nodejs = pkgs.nodejs_22;
      package-lock2nix = final.package-lock2nix.override { nodejs = pkgs.nodejs_22; };
    };
  };
in
scope.overrideScope overlay
