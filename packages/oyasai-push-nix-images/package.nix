{ writeShellApplication }:

writeShellApplication {
  name = "oyasai-push-nix-images";
  text = builtins.readFile ./oyasai-push-nix-images.sh;
}
