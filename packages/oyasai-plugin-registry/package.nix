{
  package-lock2nix,
  lib,
  fetchurl,
  oyasai-plugins,
  writeShellApplication,
}:

let
  lock = lib.importJSON ./lock.json;

  final = package-lock2nix.mkNpmModule {
    src = ./.;

    passthru = {
      update = writeShellApplication {
        name = "plugin-registry-update";
        runtimeInputs = [ final ];
        text = ''
          <${./registry.json} plugin-registry-lock --mc-version "$1" >lock.json
        '';
      };

      forPlatform = (
        platform:
        let
          fromLock = lib.mapAttrs (
            id: platforms: fetchurl (platforms.${platform} // { name = "${id}.jar"; })
          ) (lib.filterAttrs (_: lib.hasAttr platform) lock);

          mkRegistryFromDir =
            dir:
            let
              fromStatic = lib.optionalAttrs (builtins.pathExists dir) (
                lib.mapAttrs' (
                  name: _:
                  let
                    id = lib.removeSuffix ".jar" name;
                  in
                  lib.nameValuePair id (dir + "/${name}")
                ) (builtins.readDir dir)
              );
            in
            fromLock // fromStatic;

          dir = ./static + "/${platform}";
        in
        if platform == "velocity" then
          mkRegistryFromDir dir
        else
          (version: (mkRegistryFromDir (dir + "/${version}")) // oyasai-plugins)

      );
    };
  };
in
final
