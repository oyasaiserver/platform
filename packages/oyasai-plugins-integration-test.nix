{ testers, inputs }:

testers.runNixOSTest (
  { lib, ... }:
  let
    machine = "machine";
    name = "minecraft-main";
  in
  {
    name = "oyasai-plugins-integration-test";
    nodes.${machine} =
      { config, ... }:
      let
        inherit (config.oyasai.scope) oyasai-minecraft-main;
      in
      {
        imports = [
          ../nix/nixos/oyasai-scope.nix
          { _module.args = { inherit inputs; }; }
        ];
        virtualisation.memorySize = 4000;
        systemd.services.${name} = {
          serviceConfig = {
            Type = "oneshot";
            Restart = "no";
            RemainAfterExit = "yes";
            ExecStart = lib.getExe oyasai-minecraft-main;
          };
          enable = true;
          wants = [ "multi-user.target" ];
        };
      };

    testScript = ''
      ${machine}.wait_for_unit("default.target")
      ${machine}.succeed("systemctl start ${name}.service")
    '';

    __noChroot = true;

    meta.platforms = lib.platforms.linux;
  }
)
