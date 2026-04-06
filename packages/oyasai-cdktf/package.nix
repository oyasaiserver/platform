{
  package-lock2nix,
  cdktf-cli,
  nodejs,
  terraform,
  writeShellApplication,
  lib,
}:
let
  oyasaiCdktf = package-lock2nix.mkNpmModule {
    src = ./.;
    buildInputs = [
      nodejs
      terraform
      cdktf-cli
    ];
  };
in
writeShellApplication {
  name = "oyasai-cdktf";
  runtimeEnv = {
    CDKTF_APP = lib.getExe oyasaiCdktf;
  };
  runtimeInputs = [ cdktf-cli ];
  text = ''
    cdktf "$@"
  '';
}
