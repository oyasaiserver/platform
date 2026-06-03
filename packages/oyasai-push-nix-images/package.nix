{
  findutils,
  skopeo,
  writeShellApplication,
}:

writeShellApplication {
  name = "oyasai-push-nix-images";
  runtimeInputs = [
    findutils
    skopeo
  ];
  text = builtins.readFile ./oyasai-push-nix-images.sh;
}
