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
              inherit (scopeSelf) callPackage;
              overlays = {
                package-lock2nix = final: prev: {
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
              };
              # TODO: Here we build all plugins, and each plugins will have a
              # thin derivation of just copying from here. This is because
              # Gradle makes it very hard as local (`project`) depencencies are
              # not part of the lockfile.
              plugins = scopeSelf.gradle2nix.buildGradlePackage {
                pname = "plugins";
                version = "0.0.0";
                src =
                  with lib.fileset;
                  toSource {
                    root = ../.;
                    fileset = unions [
                      ../build.gradle.kts
                      ../gradle
                      ../plugins
                      ../settings.gradle.kts
                    ];
                  };
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
            in
            {
              inherit (pkgs) terraform;
              nodejs = pkgs.nodejs_24;
              jdk = pkgs.javaPackages.compiler.temurin-bin.jdk-25;
              jre = pkgs.javaPackages.compiler.temurin-bin.jre-25;
              gradle = pkgs.gradle_9-unwrapped;

              package-lock2nix = callPackage inputs.package-lock2nix.lib.package-lock2nix {
                inherit (scopeSelf) nodejs;
                overrideScope = overlays.package-lock2nix;
              };

              gradle2nix = inputs.gradle2nix.builders.${system};

              plugins = lib.mapAttrs' (
                name: _:
                lib.nameValuePair (lib.toLower name) (
                  pkgs.runCommand name { } ''
                    mkdir -p $out
                    cp ${plugins}/${name}.jar $out
                  ''
                )
              ) (builtins.readDir ../plugins);
            }
            // lib.packagesFromDirectoryRecursive {
              inherit callPackage;
              directory = ../packages;
            }
          );
          availableOnSystem = lib.meta.availableOn { inherit system; };
        in
        {
          oyasai.scope = oyasaiScope;
          legacyPackages.oyasai-plugins = oyasaiScope.plugins;
          packages = lib.filterAttrs (_: availableOnSystem) {
            # exposed as `nix run .#...`
            inherit (oyasaiScope) plugin-registry;
          };
          checks = lib.concatMapAttrs (k: v: lib.optionalAttrs (availableOnSystem v) { "build-${k}" = v; }) (
            lib.filterAttrs (_: lib.isDerivation) (oyasaiScope // oyasaiScope.plugins)
          );
        };
    }
  );
}
