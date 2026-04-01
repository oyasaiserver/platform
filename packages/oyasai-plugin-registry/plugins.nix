# Auto-generated plugin derivations from lock.json
# Usage: callPackage ./plugins.nix { }
{
  lib,
  fetchurl,
}:
let
  lockData = builtins.fromJSON (builtins.readFile ./lock.json);

  mkPlugin =
    name: entry:
    if entry ? type then
      # Static files bundled in the repo
      if entry.type == "static" then
        ./static/${entry.name}
      # Local plugins built from source - not handled here
      else if entry.type == "local" then
        null
      else
        throw "Unknown plugin type: ${entry.type}"
    else
      # Remote plugins with url and hash
      fetchurl {
        inherit (entry) url hash;
        name = entry.filename or "${name}.jar";
      };

  mkVersionPlugins =
    versionData:
    lib.filterAttrs (_: v: v != null) (lib.mapAttrs mkPlugin versionData.plugins);
in
lib.mapAttrs (_: mkVersionPlugins) lockData.versions
