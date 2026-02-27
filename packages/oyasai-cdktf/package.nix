{
  package-lock2nix,
  cdktf-cli,
  nodejs,
  infisical,
}:

package-lock2nix.mkNpmModule {
  src = ./.;
  buildInputs = [
    cdktf-cli
    nodejs
  ];
}
