{ testers, inputs }:

testers.runNixOSTest (
  { lib, ... }:
  let
    machine = "machine";
    name = "minecraft-main";
  in
  {
    name = "plugins-integration-test";
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
      ${machine}.systemctl("start --no-block ${name}.service")
      ${machine}.wait_for_unit("${name}.service")
    '';

    # NOMERGE
    # meta.platforms = lib.platforms.linux;
  }
)
