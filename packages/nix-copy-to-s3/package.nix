{ writeShellApplication }:

writeShellApplication {
  name = "nix-copy-to-s3";
  text = builtins.readFile ./nix-copy-to-s3.sh;
}
