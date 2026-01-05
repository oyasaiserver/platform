{ dockerTools }:
builtins.mapAttrs (
  _:
  (
    builder:
    { platforms, ... }@args:
    let
      args' = builtins.removeAttrs args [ "platforms" ];
      image = builder args';
    in
    image.override { name = "ghcr.io/oyasaiserver/${image.imageName}"; }.overrideAttrs (old: {
      meta = (old.meta or { }) // {
        inherit platforms;
      };
    })
  )
) dockerTools
