{
  cdktf-cli,
  writableTmpDirAsHomeHook,
  nodejs,
  terraform,
  stdenv,
  writeTextFile,
  lib,
  oyasaiTerraformProviders,
}:

let
  # Minimal cdktf.json used for geneting the bindings.
  cdktfJson = writeTextFile {
    name = "cdktf.json";
    text = builtins.toJSON {
      app = "unused";
      language = "typescript";
      terraformProviders = map (
        provider:
        # Assuming registry.terraform.io because nixpkgs-terraform-providers-bin has
        # an everlasting TODO: https://github.com/nix-community/nixpkgs-terraform-providers-bin/blob/4f8dfea41cd94403a6c768923b3ddcb15fd4c611/default.nix#L26
        lib.replaceString "registry.terraform.io/" "" provider.provider-source-address
      ) oyasaiTerraformProviders;
    };
  };
in
stdenv.mkDerivation {
  name = "cdktf-providers";

  nativeBuildInputs = [
    cdktf-cli
    nodejs
    terraform
    # cdktf wants to write in homedir for cache
    writableTmpDirAsHomeHook
  ];

  dontUnpack = true;

  # Disable telemetry, requires internet access.
  CHECKPOINT_DISABLE = 1;

  buildPhase = ''
    cp ${cdktfJson} cdktf.json

    cdktf get
  '';

  installPhase = ''
    mkdir -p $out

    cp -r .gen/* $out/
  '';
}
