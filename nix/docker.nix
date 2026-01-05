{ flake-parts-lib, lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { pkgs, config, ... }:
    let
      oyasaiScope = config.oyasai.scope;
    in
    {
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
          all-docker-image-derivs = lib.flatten (
            lib.mapAttrsToList (
              name: value:
              lib.optionals (value ? docker) {
                inherit name;
                image = value.docker;
              }
            ) oyasaiScope
          );
        in
        {
          all-docker-images = aggregate pkgs (
            builtins.listToAttrs (
              map (
                { image, name }:
                {
                  inherit name;
                  value = image;
                }
              ) all-docker-image-derivs
            )
          );
          all-docker-derivations = pkgs.writeText "all-docker-derivations" (
            lib.concatLines (
              map (
                { name, image }:
                "${image.imageName}:${image.imageTag} ${builtins.unsafeDiscardStringContext image.drvPath}"
              ) all-docker-image-derivs
            )
          );
        };
    }
  );
}
