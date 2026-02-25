{
  package-lock2nix,
  cdktf-cli,
  nodejs,
  terraform,
  writeShellApplication,
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
    CDKTF_APP = "${oyasaiCdktf}/bin/oyasai-cdktf";
  };
  runtimeInputs = [ cdktf-cli ];
  text = ''
    cdktf "$@"
  '';
}
