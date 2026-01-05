{
  oyasaiDockerTools,
  dockerTools,
  stdenv,
}:
let
  inherit (stdenv.hostPlatform) system;
  name = "mc-backup";
  imageName = "itzg/mc-backup";
  hashes = {
    "x86_64-linux" = "sha256-3g2ayNkXxJjaXuC8t7EMDTI9nMH2did75gB/nmNH2Aw=";
    "aarch64-linux" = "sha256-mzKgbyhuH0pMmzFuNKC/ltsDLzx0kfypTEY7XbVPPes=";
  };
in
# https://nixos.org/manual/nixpkgs/stable/#ssec-pkgs-dockerTools-pullImage-examples
oyasaiDockerTools.buildImage {
  inherit name;
  fromImage = dockerTools.pullImage {
    inherit imageName;
    imageDigest = "sha256:81e68ecbf7c3452079d08fc7058208cdf493633b4e7431d79d56bdb910c4dfea";
    hash = hashes.${system};
    finalImageName = imageName;
    finalImageTag = "latest";
  };
  config.Entrypoint = [ "/usr/bin/backup" ];
  config.Cmd = [ "loop" ];
  platforms = builtins.attrNames hashes;
}
