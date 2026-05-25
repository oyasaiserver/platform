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

      forVersion = (
        version:
        let
          staticDir = ./static + "/${version}";
          fromStatic = lib.optionalAttrs (builtins.pathExists staticDir) (
            lib.pipe (builtins.readDir staticDir) [
              (lib.filterAttrs (_: t: t == "regular"))
              (lib.mapAttrs' (name: _: lib.nameValuePair (lib.removeSuffix ".jar" name) (staticDir + "/${name}")))
            ]
          );
        in
        lib.pipe lock [
          (lib.filterAttrs (_: versions: lib.hasAttr version versions))
          (lib.mapAttrs (id: versions: fetchurl (versions.${version} // { name = "${id}.jar"; })))
          (fromLock: fromLock // fromStatic // oyasai-plugins)
        ]
      );
    };
  };
in
final
