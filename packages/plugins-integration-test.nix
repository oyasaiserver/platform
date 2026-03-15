{ testers, inputs }:

testers.runNixOSTest (
  { lib, ... }:
  {
    name = "plugins-integration-test";

    nodes.machine =
      { config, ... }:
      {
        imports = [
          ../nix/oyasai-scope.nix
          { _module.args = { inherit inputs; }; }
        ];

        virtualisation.oci-containers.backend = "docker";

        environment.systemPackages = [ pkgs.hello ];
      };

    testScript = ''
      machine.succeed("hello")
    '';

    meta.platforms = lib.platforms.linux;
  }
)
