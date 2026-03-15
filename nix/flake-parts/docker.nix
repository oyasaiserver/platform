{ ... }:
{
  perSystem =
    {
      pkgs,
      config,
      system,
      lib,
      ...
    }:
    let
      oyasaiScope = config.oyasai.scope;
      standalone-docker-images = lib.filterAttrs (_: lib.meta.availableOn { inherit system; }) {
        inherit (oyasaiScope) mc-backup mariadb;
      };
    in
    lib.mkIf (builtins.elem system lib.platforms.linux) {
      packages =
        let
          aggregate =
            { writeTextFile, lib, ... }:
            derivs:
            writeTextFile {
              name = "aggregate.txt";
              text = lib.concatLines (builtins.attrValues derivs);
              passthru = derivs;
            };
          all-docker-image-derivs =
            lib.flatten (
              lib.mapAttrsToList (
                name: value:
                lib.optionals (value ? docker) {
                  inherit name;
                  image = value.docker;
                }
              ) oyasaiScope
            )
            ++ lib.mapAttrsToList (name: image: { inherit name image; }) standalone-docker-images;
        in
        lib.concatMapAttrs (k: v: { "${k}-docker" = v; }) standalone-docker-images
        // {
          all-docker-images =
            aggregate pkgs (
              builtins.listToAttrs (
                map (
                  { image, name }:
                  {
                    inherit name;
                    value = image;
                  }
                ) all-docker-image-derivs
              )
            )
            // {
              references = builtins.listToAttrs (
                map (
                  { name, image }:
                  {
                    inherit name;
                    value = with image; "${imageName}:${imageTag}";
                  }
                ) all-docker-image-derivs
              );
              derivations = pkgs.writeText "all-docker-derivations" (
                lib.concatLines (
                  map (
                    { image, ... }:
                    with image;
                    "${imageName}:${imageTag} ${builtins.unsafeDiscardStringContext drvPath}"
                  ) all-docker-image-derivs
                )
              );
            };
        };
    };
}
