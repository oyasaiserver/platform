{
  writeShellApplication,
  infisical,
  lib,
}:

{
  name,
  main,
  projectConfigDir,
}:

let
  infisicalJsonOnlySrc = lib.cleanSourceWith {
    src = projectConfigDir;
    filter = path: type: builtins.baseNameOf path == ".infisical.json";
  };
in
writeShellApplication {
  inherit name;
  runtimeInputs = [ infisical ];

  # NOMERGE project id
  text = ''
    infisical run \
      --projectId "160ddd7e-ecdc-40cd-bff6-3d123b0689f7" \
      --project-config-dir ${infisicalJsonOnlySrc} \
      -- ${lib.getExe main} "$@"
  '';
}
