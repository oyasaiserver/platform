{
  lib,
  stdenvNoCC,
  fetchurl,
  writeShellApplication,
  package-lock2nix,
  nix,
  cacert,
}:
let
  src = ./.;

  # Import plugin derivations from plugins.nix
  pluginsByVersion = import ./plugins.nix { inherit lib fetchurl; };

  # Flat attrset of all derivations
  allDerivations = lib.foldl' (acc: v: acc // v) { } (lib.attrValues pluginsByVersion);

  npmModule = package-lock2nix.mkNpmModule {
    inherit src;
    nativeBuildInputs = [
      nix
      cacert
    ];
  };

  updateScript = writeShellApplication {
    name = "oyasai-plugin-registry-update";
    runtimeInputs = [
      nix
      cacert
    ];
    text = ''
      exec ${npmModule}/bin/plugin-registry-update "$@"
    '';
  };
in
stdenvNoCC.mkDerivation {
  pname = "oyasai-plugin-registry";
  version = "0.0.0";

  dontUnpack = true;

  installPhase = ''
    runHook preInstall
    mkdir -p $out
    ${lib.concatStringsSep "\n" (
      lib.mapAttrsToList (
        version: plugins: ''
          mkdir -p $out/${version}
          ${lib.concatStringsSep "\n" (
            lib.mapAttrsToList (name: drv: ''
              ln -s ${drv} $out/${version}/${name}.jar
            '') plugins
          )}
        ''
      ) pluginsByVersion
    )}
    runHook postInstall
  '';

  passthru = {
    inherit pluginsByVersion npmModule;
    derivations = allDerivations;
    update = updateScript;
  };

  meta = {
    description = "Oyasai Minecraft plugin registry";
  };
}
