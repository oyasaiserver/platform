{
  package-lock2nix,
  lib,
  fetchurl,
  oyasai-plugins,
  writeShellApplication,
  runCommandLocal,
  writers,
}:

let
  lock = builtins.fromJSON (builtins.readFile ./lock.json);
  final = (writers.writePython3 "oyasai-plugin-registry" {
  libraries = [ ];
  flakeIgnore = [
    "E265"
    "E501"
  ];
} (builtins.readFile ./update.py)) // {
    update = writeShellApplication {
      name = "plugin-registry-update";
      runtimeInputs = [ plugin-registry-lock ];
      text = ''
        <${./registry.toml} plugin-registry-lock >lock.json
      '';
    };

  passthru = {
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
