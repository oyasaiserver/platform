{ stdenvNoCC, gradle2nix }:
stdenvNoCC.mkDerivation {
  name = "gradle2nix-gradle-plugin";
  dontUnpack = true;
  buildPhase = ''
    cp -rL ${gradle2nix}/* .

    chmod -R u+w .

    rm -rf lib/gradle2nix/bin
  '';
  installPhase = ''
    cp -r lib/gradle2nix $out
  '';
}
