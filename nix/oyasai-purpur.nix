{
  lib,
  stdenvNoCC,
  fetchurl,
  makeWrapper,
  jre,
  writeShellApplication,
  coreutils,
}:

{
  name,
  version,
  plugins,
  directory ? ".",
  port ? 25565,
  passthru ? { },
  cleanPlugins ? true,
}:

let
  versions = {
    "1.21.8" = {
      build = 2497;
      hash = "sha256-3XsifyVVYBw5zsCR32eCdfCoH6ftaM6VTsSSS7RXXEY=";
    };
  };
  setup = writeShellApplication {
    name = "${name}-setup";
    runtimeInputs = [ coreutils ];
    text = ''
      echo "eula=true" > eula.txt
      mkdir -p plugins
      ${
        if cleanPlugins then
          ''
            rm -rf plugins/.paper-remapped
            rm -f plugins/*.jar
          ''
        else
          ""
      }
      ${lib.concatMapStringsSep "\n" (k: "cp --no-preserve=ownership,mode ${k} plugins") plugins}
    '';
  };
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
      --run "mkdir -p ${directory}" \
      --chdir ${directory} \
      --run "${lib.getExe setup}" \
      --add-flags "-jar $out/lib/minecraft/server.jar --nogui --port ${toString port}"
  '';

  dontUnpack = true;

  meta.mainProgram = "minecraft-server";
})
