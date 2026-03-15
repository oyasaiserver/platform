{ testers, runCommand }:

testers.runNixOSTest (
  { lib, ... }:
  {
    name = "oyasai-integration-test";
    nodes.machine =
      { pkgs, ... }:
      {
        environment.systemPackages = [ pkgs.hello ];
      };
    testScript = ''
      machine.succeed("hello")
    '';

    meta.platforms = lib.platforms.linux;
  }
)
