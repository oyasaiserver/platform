{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { ... }:
    {
      treefmt = {
        programs = {
          # keep-sorted start block=yes
          actionlint = {
            enable = true;
          };
          jsonfmt = {
            enable = true;
          };
          keep-sorted = {
            enable = true;
          };
          ktfmt = {
            enable = true;
          };
          nixfmt = {
            enable = true;
            strict = true;
          };
          prettier = {
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
          # keep-sorted end
        };
      };
    }
  );
}
