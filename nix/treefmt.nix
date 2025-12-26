{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { ... }:
    {
      treefmt = {
        programs.nixfmt = {
          enable = true;
          strict = true;
        };
      };
    }
  );
}
