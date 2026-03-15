{
  lib,
  stdenvNoCC,
  fetchurl,
  makeWrapper,
  jre,
  writeShellApplication,
  coreutils,
  purpurServers,
  runCommand,
}:

{
  name,
  version,
  plugins,
  directory ? ".",
  port ? 25565,
  passthru ? { },
  cleanPlugins ? true,
}:

let
  setup = writeShellApplication {
    name = "${name}-setup";
    runtimeInputs = [ coreutils ];
    text = ''
      echo "eula=true" > eula.txt
      mkdir -p plugins
      ${
        if cleanPlugins then
          ''
            rm -rf plugins/.paper-remapped
            rm -f plugins/*.jar
          ''
        else
          ""
      }
      ${lib.concatMapStringsSep "\n" (k: "cp --no-preserve=ownership,mode ${k} plugins") plugins}
    '';
  };

  pkg = purpurServers.purpur-1_21_8.override { inherit jre; };
in
writeShellApplication {
  inherit name;
  text = ''
    echo "eula=true" > eula.txt
    mkdir -p plugins
    mkdir -p cache
    cp ${pkg.vanillaJar} cache/mojang_1.21.8.jar

    ${lib.getExe pkg}
  '';
}
