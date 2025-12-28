{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { ... }:
    {
      treefmt = {
        programs = {
          nixfmt = {
            enable = true;
            strict = true;
          };
          prettier = {
            enable = true;
          };
          ktfmt = {
            enable = true;
          };
          shfmt = {
            enable = true;
            simplify = false;
          };
          toml-sort = {
            enable = true;
          };
          yamlfmt = {
            enable = true;
          };
          jsonfmt = {
            enable = true;
          };
        };
      };
    }
  );
}
