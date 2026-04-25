{ ... }:
{
  perSystem.treefmt = {
    programs = {
      # keep-sorted start block=yes
      actionlint.enable = true;
      autocorrect = {
        enable = true;
        excludes = [ "plugins/*" ];
      };
      jsonfmt.enable = true;
      just.enable = true;
      keep-sorted.enable = true;
      ktfmt.enable = true;
      mdformat = {
        enable = true;
        settings = {
          wrap = 80;
        };
      };
      nixfmt = {
        enable = true;
        strict = true;
      };
      prettier.enable = true;
      shellcheck.enable = true;
      shfmt = {
        enable = true;
        simplify = false;
      };
      toml-sort.enable = true;
      typos = {
        enable = true;
        excludes = [ "plugins/*" ];
      };
      yamlfmt = {
        enable = true;
        settings.formatter = {
          type = "basic";
          # allow single empty line
          retain_line_breaks_single = true;
          # https://github.com/google/yamlfmt/issues/84
          scan_folded_as_literal = true;
          # according to the doc - "crlf on Windows, lf otherwise". Explicitly setting
          # to avoid inconsistency.
          line_ending = "lf";
        };
      };
      # keep-sorted end
    };
    settings.global.excludes = [ "*/gen/*" ];
  };
}
