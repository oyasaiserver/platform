{
  package-lock2nix,
  cdktf-cli,
  terraform,
  writeShellApplication,
  lib,
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
    cdktf-cli
    terraform
  ];
  text = ''
    cdktf "$@"
  '';
}
