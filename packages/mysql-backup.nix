{
  oyasaiDockerTools,
  dockerTools,
  stdenv,
  lib,
}:
let
  inherit (stdenv.hostPlatform) system;
  name = "databack/mysql-backup";
  hashes = {
    "x86_64-linux" = "sha256-P4DFvPlqta1f2KllsB49fxUA9cBWzFMWeRX+vvFWKFQ=";
    "aarch64-linux" = "sha256-h0ngkgKxAsdXAWgVgpN1ahZy81Rs222YAxD2XEAXatE=";
  };
in
# https://nixos.org/manual/nixpkgs/stable/#ssec-pkgs-dockerTools-pullImage-examples
oyasaiDockerTools.buildImage {
  inherit name;
  fromImage = dockerTools.pullImage {
    imageName = name;
    imageDigest = "sha256:644995235e8898d0c34ecd8814142e349ff8b134dd9e7be69ca51cbfe2dbe644";
    hash = hashes.${system};
    finalImageName = name;
    finalImageTag = "1.4.0";
  };
  config = {
    Entrypoint = [ "/entrypoint" ];
  };
  platforms = lib.attrNames hashes;
}
