{
  pkgs,
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
}:

let
  versions = {
    "1.21.8" = {
      build = 60;
      hash = "sha256-jefFLDsCQDUD0W+sWAA/Hv733XoCVnhoQ5J/qS7lfx4=";
    };
  };
  setup = writeShellScriptBin "${name}-setup" ''
    echo "eula=true" > eula.txt
    echo "${builtins.toJSON plugins}" > foo.txt
  '';
  final = stdenvNoCC.mkDerivation (finalAttrs: {
    inherit name;

    src =
      let
        inherit (versions.${version}) build hash;
      in
      fetchurl {
        url = "https://api.papermc.io/v2/projects/paper/versions/${version}/builds/${toString build}/downloads/paper-${version}-${toString build}.jar";
        inherit hash;
      };

    dontUnpack = true;
    preferLocalBuild = true;
    allowSubstitutes = false;

    nativeBuildInputs = [ makeWrapper ];

    installPhase = ''
      runHook preInstall

      install -D $src $out/share/papermc/papermc.jar

      makeWrapper ${lib.getExe jre} "$out/bin/minecraft-server" \
        --run "${lib.getExe setup}" \
        --append-flags "-jar $out/share/papermc/papermc.jar nogui" \
        ${lib.optionalString stdenvNoCC.hostPlatform.isLinux "--prefix LD_LIBRARY_PATH : ${
          lib.makeLibraryPath [ pkgs.udev ]
        }"}

      runHook postInstall
    '';

    meta.mainProgram = "minecraft-server";
  });
in
final
