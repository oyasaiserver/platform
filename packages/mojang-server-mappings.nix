# NeoForge installers bundle the Mojang server mappings inside their fat jar
# at maven/minecraft/<version>/server_mappings.txt.
{
  neoforgeServers,
  runCommand,
  lib,
  unzip,
}:

runCommand "mojang-server-mappings"
  {
    passthru = lib.pipe neoforgeServers [
      (lib.filterAttrs (k: v: v ? gameVersion))
      (lib.mapAttrs' (
        name: server:
        let
          inherit (server) gameVersion;
        in
        lib.nameValuePair gameVersion (
          runCommand "mojang-server-mappings-${name}" { nativeBuildInputs = [ unzip ]; } ''
            fatjar=$(awk '/java -jar/{print $3}' ${lib.getExe server.installer})
            unzip -p \
              "$fatjar" \
              "maven/minecraft/${gameVersion}/server_mappings.txt" \
              > $out
          ''
        )
      ))
    ];
  }
  ''
    touch $out
  ''
