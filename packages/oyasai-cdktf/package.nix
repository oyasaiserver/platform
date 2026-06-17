{
  package-lock2nix,
  terraform,
  writeShellApplication,
  lib,
  nodejs,
}:
let
  oyasaiCdktf = package-lock2nix.mkNpmModule { src = ./.; };
in
writeShellApplication {
  name = "oyasai-cdktf";
  runtimeEnv = {
    CDKTF_APP = lib.getExe oyasaiCdktf;
  };
  runtimeInputs = [
    oyasaiCdktf
    terraform
    nodejs
  ];
  text = ''
    cdktf "$@"
  '';
}
