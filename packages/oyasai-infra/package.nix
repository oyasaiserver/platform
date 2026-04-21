{
  lib,
  makeWrapper,
  stdenvNoCC,
  curl,
  jq,
  just,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  name = "oyasai-infra";
  src =
    with lib.fileset;
    toSource {
      root = ./.;
      fileset = unions [
        ./justfile
        (fileFilter (file: file.hasExt "just") ./.)
      ];
    };
  buildInputs = [
    curl
    jq
    just
  ];
  dontBuild = true;
  nativeBuildInputs = [ makeWrapper ];
  installPhase = ''
    mkdir -p $out/bin $out/share
    cp * $out/share/
    makeWrapper $out/share/justfile $out/bin/$name \
      --suffix PATH : ${lib.makeBinPath finalAttrs.buildInputs}
  '';
  meta.mainProgram = finalAttrs.name;
})
