{
  lib,
  jre,
  writeShellApplication,
  coreutils,
  purpurServers,
}:

{
  name,
  version,
  plugins,
  directory ? ".",
  # TODO: port handling
  port ? 25565,
  passthru ? { },
}:

let
  package = purpurServers."purpur-${lib.replaceString "." "_" version}".override { inherit jre; };
in
writeShellApplication {
  inherit name passthru;

  runtimeInputs = [ coreutils ];
  text = ''
    mkdir -p ${directory}
    cd ${directory}

    echo "eula=true" > eula.txt

    mkdir -p cache
    cp ${package.vanillaJar} cache/mojang_${version}.jar

    mkdir -p plugins
    rm -rf plugins/.paper-remapped
    rm -f plugins/*.jar

    ${lib.concatMapStringsSep "\n" (k: "cp --no-preserve=ownership,mode ${k} plugins") plugins}

    exec ${lib.getExe package} "$@"
  '';
}
