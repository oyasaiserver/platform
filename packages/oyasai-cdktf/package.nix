{
  package-lock2nix,
  cdktf-cli,
  terraform,
  writeShellApplication,
  lib,
  oyasaiMakeSecretsWrapper,
}:
let
  oyasaiCdktf = package-lock2nix.mkNpmModule { src = ./.; };
  main = writeShellApplication {
    name = "oyasai-cdktf-main";
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
  };
in
oyasaiMakeSecretsWrapper {
  inherit main;
  name = "oyasai-cdktf";
}
