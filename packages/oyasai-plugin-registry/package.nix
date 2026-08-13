{
  package-lock2nix,
  lib,
  fetchurl,
  oyasai-plugins,
}:

let
  lock = lib.importJSON ./lock.json;

  final = package-lock2nix.mkNpmModule {
    src = ./.;

    meta.mainProgram = "lock";

    passthru.forPlatform =
      platform:
      let
        staticFrom =
          dir:
          lib.optionalAttrs (builtins.pathExists dir) (
            lib.mapAttrs' (name: _: lib.nameValuePair (lib.removeSuffix ".jar" name) (dir + "/${name}")) (
              lib.filterAttrs (_: t: t == "regular") (builtins.readDir dir)
            )
          );
      in
      if platform == "velocity" then
        let
          fromLock = lib.mapAttrs (id: plugins: fetchurl (plugins.velocity // { name = "${id}.jar"; })) (
            lib.filterAttrs (_: p: p ? velocity) lock
          );
        in
        fromLock // staticFrom (./static + "/velocity")
      else
        version:
        let
          fromLock = lib.mapAttrs (
            id: plugins: fetchurl (plugins.${platform}.${version} // { name = "${id}.jar"; })
          ) (lib.filterAttrs (_: p: lib.hasAttr version (p.${platform} or { })) lock);
        in
        fromLock // staticFrom (./static + "/${platform}/${version}") // oyasai-plugins;
  };
in
final
