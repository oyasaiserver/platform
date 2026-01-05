{
  oyasaiDockerTools,
  dockerTools,
  stdenv,
}:
let
  inherit (stdenv.hostPlatform) system;
  name = "mariadb";
  hashes = {
    "x86_64-linux" = "sha256-pIEYzawoBIJI295R0ToQyueVVDGLfYItnn8mySwhvLs=";
    "aarch64-linux" = "sha256-jaupqFKnxG7NnVA81haFmG5yKANwblnLuXR3yy2hOrI=";
  };
in
# https://nixos.org/manual/nixpkgs/stable/#ssec-pkgs-dockerTools-pullImage-examples
oyasaiDockerTools.buildImage {
  inherit name;
  fromImage = dockerTools.pullImage {
    imageName = name;
    imageDigest = "sha256:d8369cb7020907b44ab0a7a73f855e41cbd5b6da16e01fbd8b8fe21200c7a854";
    hash = hashes.${system};
    finalImageName = name;
    finalImageTag = "10.4.28";
  };
  config.Entrypoint = [ "docker-entrypoint.sh" ];
  config.Cmd = [ "mysqld" ];
  platforms = builtins.attrNames hashes;
}
