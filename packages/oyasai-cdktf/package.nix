{
  package-lock2nix,
  terraform,
  writeShellApplication,
  lib,
  oyasai-cdktf-providers,
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
    oyasai-cdktf-providers
    terraform
  ];
  text = ''
    cdktf "$@"
  '';
}
