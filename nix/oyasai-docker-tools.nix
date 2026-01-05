{ dockerTools }:
builtins.mapAttrs (
  _:
  (
    builder: args:
    let
      image = builder args;
    in
    image.override { name = "ghcr.io/platform/${image.imageName}"; }
  )
) dockerTools
