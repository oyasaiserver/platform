{
  lib,
  stdenvNoCC,
  fetchurl,
  makeWrapper,
  jre,
  writeShellScriptBin,
}:

{
  name,
  version,
  plugins,
  passthru ? { },
}:

let
  versions = {
    "1.21.8" = {
      build = 2497;
      hash = "sha256-3XsifyVVYBw5zsCR32eCdfCoH6ftaM6VTsSSS7RXXEY=";
    };
  };
  setup = writeShellScriptBin "${name}-setup" ''
    echo "eula=true" > eula.txt

    mkdir -p plugins
    rm -rf plugins/.paper-remapped
    rm plugins/*.jar

    ${lib.concatMapStringsSep "\n" (k: "cp ${k} plugins") plugins}
  '';
in
stdenvNoCC.mkDerivation (finalAttrs: {
  inherit name passthru;

  src =
    let
      inherit (versions.${version}) build hash;
    in
    fetchurl {
      url = "https://api.purpurmc.org/v2/purpur/${version}/${toString build}/download";
      inherit hash;
    };

  nativeBuildInputs = [ makeWrapper ];

  preferLocalBuild = true;

  installPhase = ''
    mkdir -p $out/bin $out/lib/minecraft
    cp -v $src $out/lib/minecraft/server.jar

    makeWrapper ${jre}/bin/java $out/bin/minecraft-server \
      --run "${lib.getExe setup}" \
      --add-flags "-jar $out/lib/minecraft/server.jar nogui"
  '';

  dontUnpack = true;

  meta.mainProgram = "minecraft-server";
})
