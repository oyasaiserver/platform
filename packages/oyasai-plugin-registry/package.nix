{
  package-lock2nix,
  lib,
  fetchurl,
  oyasai-plugins,
}:

let
  registry = builtins.fromJSON (builtins.readFile ./registry.json);
  lock = builtins.fromJSON (builtins.readFile ./lock.json);

  final = package-lock2nix.mkNpmModule {
    src = ./.;
    buildInputs = [ oyasai-plugins ];

    passthru = {
      forVersion = (
        version:
        let
          fromRegistry = lib.pipe registry [
            (lib.filterAttrs (id: versions: lib.hasAttr version versions))
            (lib.mapAttrs (
              id: versions:
              let
                definition = versions.${version};
              in
              if definition.type == "static" then
                ./static + "/${version}/${definition.name}"
              else
                fetchurl lock.${id}.${version}
            ))
          ];
        in
        fromRegistry // oyasai-plugins
      );
    };
  };
in
final
