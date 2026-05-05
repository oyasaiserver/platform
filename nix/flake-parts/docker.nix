{ ... }:
{
  perSystem =
    {
      config,
      pkgs,
      lib,
      system,
      ...
    }:
    {
      packages =
        let
          oyasaiScope = config.oyasai.scope;
          standalone-docker-images = lib.filterAttrs (_: lib.meta.availableOn { inherit system; }) {
            inherit (oyasaiScope) mc-backup mariadb mysql-backup;
          };
          docker-image-derivs =
            lib.flatten (
              lib.mapAttrsToList (
                name: v:
                lib.optionals (v ? docker) [
                  {
                    inherit name;
                    image = v.docker;
                  }
                ]
              ) oyasaiScope
            )
            ++ lib.mapAttrsToList (name: image: { inherit name image; }) standalone-docker-images;
          aggregate =
            { writeTextFile, lib, ... }:
            derivs:
            writeTextFile {
              name = "aggregate.txt";
              text = lib.concatLines (builtins.attrValues derivs);
              passthru = derivs;
            };
        in
        lib.concatMapAttrs (k: v: { "${k}-docker" = v; }) standalone-docker-images
        // {
          all-docker-images = aggregate pkgs (
            builtins.listToAttrs (
              map (
                { image, name }:
                {
                  inherit name;
                  value = image;
                }
              ) docker-image-derivs
            )
          );
          all-docker-tags = pkgs.writeTextFile {
            name = "all-docker-tags";
            text = builtins.unsafeDiscardStringContext (
              lib.concatLines (
                map ({ image, name }: "${name} ${image.imageName}:${image.imageTag}") docker-image-derivs
              )
            );
            passthru =
              let
                attrs = builtins.listToAttrs (
                  map (
                    { name, image }: lib.nameValuePair name "${image.imageName}:${image.imageTag}"
                  ) docker-image-derivs
                );
                rawJson = builtins.unsafeDiscardStringContext (builtins.toJSON attrs);
              in
              {
                json = pkgs.writeText "all-docker-tags.json" rawJson;
                inherit attrs;
              };
          };
          all-docker-derivations = pkgs.writeText "all-docker-derivations" (
            lib.concatLines (
              map (
                { name, image }:
                "${image.imageName}:${image.imageTag} ${builtins.unsafeDiscardStringContext image.drvPath}"
              ) docker-image-derivs
            )
          );
        };
    };
}
