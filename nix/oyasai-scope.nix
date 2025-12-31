{ inputs, flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    {
      pkgs,
      lib,
      system,
      ...
    }:
    {
      options.oyasai.scope = lib.mkOption { type = lib.types.raw; };
      config =
        let
          oyasaiScope = lib.makeScope pkgs.newScope (
            scopeSelf:
            let
              package-lock2nixOverlay = final: prev: {
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
                        cat tsconfig.json | jq --arg tsconfig ${../tsconfig.json} '
                          if has("extends")
                          then .extends = $tsconfig
                          else .
                          end
                        ' | sponge tsconfig.json
                      '';
                    }
                  );
              };
            in
            {
              nodejs = pkgs.nodejs_24;
              jdk = pkgs.javaPackages.compiler.temurin-bin.jdk-25;
              gradle = pkgs.gradle_9-unwrapped;
              terraform = pkgs.terraform;

              package-lock2nix = pkgs.callPackage inputs.package-lock2nix.lib.package-lock2nix {
                inherit (scopeSelf) nodejs;
                overrideScope = package-lock2nixOverlay;
              };

              gradle2nix = inputs.gradle2nix.builders.${system};

              # TODO: Split up each into separate derivations
              __all_plugins = scopeSelf.gradle2nix.buildGradlePackage {
                pname = "plugins";
                src = ../.;
                version = "0.0.0";
                inherit (scopeSelf) gradle;
                buildJdk = scopeSelf.jdk;
                lockFile = ../gradle.lock;
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
              inherit (oyasaiScope) callPackage;
              directory = ../packages;
            }
          );
        in
        {
          oyasai.scope = oyasaiScope;
          packages = lib.filterAttrs (_: lib.meta.availableOn { inherit system; }) {
            inherit (oyasaiScope) cdktf;
          };
          checks = lib.concatMapAttrs (
            k: v: lib.optionalAttrs (lib.meta.availableOn { inherit system; } v) { "build-${k}" = v; }
          ) (lib.filterAttrs (_: lib.isDerivation) oyasaiScope);
        };
    }
  );
}
