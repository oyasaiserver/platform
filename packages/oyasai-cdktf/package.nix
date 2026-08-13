{
  package-lock2nix,
  terraform,
  writeShellApplication,
  lib,
  oyasai-cdktf-providers,
  constants,
}:
let
  oyasaiCdktf = package-lock2nix.mkNpmModule { src = ./.; };
in
writeShellApplication {
  name = "oyasai-cdktf";
  runtimeEnv = {
    CDKTF_APP = lib.getExe oyasaiCdktf;
    NIX_CACHE_PUBLIC_KEY = constants.oyasai.nix-cache.publicKey;
  };
  runtimeInputs = [
    oyasai-cdktf-providers
    terraform
  ];
  text = ''
    cdktf "$@"
  '';
}
