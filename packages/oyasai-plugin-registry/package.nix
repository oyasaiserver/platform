{
  package-lock2nix,
  lib,
  fetchurl,
  oyasai-plugins,
  writeShellApplication,
}:

let
  lock = builtins.fromJSON (builtins.readFile ./lock.json);

  final = package-lock2nix.mkNpmModule {
    src = ./.;

    passthru = {
      update = writeShellApplication {
        name = "plugin-registry-update";
        runtimeInputs = [ final ];
        text = ''
          <${./registry.json} plugin-registry-lock >lock.json
        '';
      };

      forPlatform = (
        platform:
        let
          fromLock = lib.pipe lock [
            (lib.filterAttrs (_: platforms: lib.hasAttr platform platforms))
            (lib.mapAttrs (id: platforms: fetchurl (platforms.${platform} // { name = "${id}.jar"; })))
          ];
          mkResult =
            staticDir:
            let
              fromStatic = lib.optionalAttrs (builtins.pathExists staticDir) (
                lib.pipe (builtins.readDir staticDir) [
                  (lib.filterAttrs (_: t: t == "regular"))
                  (lib.mapAttrs' (name: _: lib.nameValuePair (lib.removeSuffix ".jar" name) (staticDir + "/${name}")))
                ]
              );
            in
            fromLock // fromStatic // lib.optionalAttrs (platform == "paper") oyasai-plugins;
        in
        if platform == "paper" then
          (version: mkResult (./static/paper + "/${version}"))
        else
          mkResult (./static + "/${platform}")
      );
    };
  };
in
final
