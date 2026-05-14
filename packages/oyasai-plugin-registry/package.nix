{
  package-lock2nix,
  lib,
  fetchurl,
  oyasai-plugins,
  writeShellApplication,
}:

let
  registry = builtins.fromJSON (builtins.readFile ./registry.json);
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
          fromStatic = lib.pipe (builtins.readDir staticDir) [
            (lib.filterAttrs (_: t: t == "regular"))
            (lib.mapAttrs' (name: _: lib.nameValuePair (lib.removeSuffix ".jar" name) (staticDir + "/${name}")))
          ];
        in
        lib.pipe registry [
          (lib.filterAttrs (_: versions: lib.hasAttr version versions))
          (lib.mapAttrs (id: _: fetchurl (lock.${id}.${version} // { name = "${id}.jar"; })))
          (fromRegistry: fromRegistry // fromStatic // oyasai-plugins)
        ]
      );
    };
  };
in
final
