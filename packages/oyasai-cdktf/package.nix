{
  package-lock2nix,
  terraform,
  writeShellApplication,
  lib,
  oyasai-cdktf-providers,
  constants,
  oyasaiImageIds ? null,
}:
let
  oyasaiCdktf = package-lock2nix.mkNpmModule { src = ./.; };
in
writeShellApplication {
  name = "oyasai-cdktf";

  excludeShellChecks = [
    "SC2089"
    "SC2090"
  ];

  runtimeEnv = {
    CDKTF_APP = lib.getExe oyasaiCdktf;
    NIX_CACHE_PUBLIC_KEY = constants.oyasai.nix-cache.publicKey;
  }
  // (lib.optionalAttrs (oyasaiImageIds != null) { OYASAI_IMAGE_IDS = lib.toJSON oyasaiImageIds; });

  runtimeInputs = [
    oyasai-cdktf-providers
    terraform
  ];

  text = ''
    cdktf "$@"
  '';
}
