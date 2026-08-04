{ lib, ... }: {
  options.constants = lib.mkOption {
    type = lib.types.lazyAttrsOf lib.types.anything;
    default = { };
    description = "Arbitrary shared constants (cache URLs, keys, etc.) used across the configuration.";
  };
  config.constants.oyasai = {
    nix-cache = {
      publicKey = "oyasaiserver:f0coAsRP8jLzDTOmVCY8hqQibMHtZcxjk60oVCQkjtU=";
    };
  };
}
