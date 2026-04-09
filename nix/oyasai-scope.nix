{
  inputs,
  pkgs,
  lib,
  stdenv,
  ...
}:
let
  inherit (stdenv.hostPlatform) system;
in
lib.makeScope pkgs.newScope (
  scopeSelf:
  let
    inherit (scopeSelf) callPackage;

    # Terraform providersd that we use
    oyasaiTerraformProviders =
      with (inputs.nixpkgs-terraform-providers-bin.legacyPackages.${system}.providers); [
        cloudflare.cloudflare
        kreuzwerker.docker
        integrations.github
      ];

    overlays.package-lock2nix = final: prev: {
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

    terraform = pkgs.terraform.withPlugins (_: oyasaiTerraformProviders);
    nodejs = pkgs.nodejs_24;
    jdk = pkgs.javaPackages.compiler.temurin-bin.jdk-25;
    jre = pkgs.javaPackages.compiler.temurin-bin.jre-25;
    gradle = pkgs.gradle_9.override { java = scopeSelf.jdk; };

    package-lock2nix = callPackage inputs.package-lock2nix.lib.package-lock2nix {
      inherit (scopeSelf) nodejs;
      overrideScope = overlays.package-lock2nix;
    };

    gradle2nix = inputs.gradle2nix.builders.${system};

    gradle2nix-cli = inputs.gradle2nix.packages.${system}.default.overrideAttrs (old: {
      nativeBuildInputs = (old.nativeBuildInputs or [ ]) ++ [ pkgs.makeWrapper ];
      postFixup = (old.postFixup or "") + ''
        wrapProgram $out/bin/gradle2nix \
          --add-flags '--gradle-home=${scopeSelf.gradle}/lib/gradle'
      '';
    });

    oyasaiPurpur = callPackage ./oyasai-purpur.nix { };

    oyasaiDockerTools = callPackage ./oyasai-docker-tools.nix { };
  }
  // lib.packagesFromDirectoryRecursive {
    inherit callPackage;
    directory = ../packages;
  }
)
