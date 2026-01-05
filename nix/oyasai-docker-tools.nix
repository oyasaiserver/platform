{ dockerTools }:
builtins.mapAttrs (
  _:
  (
    builder: args:
    let
      image = builder args;
    in
    image.override { name = "ghcr.io/oyasaiserver/${image.imageName}"; }
  )
) dockerTools
