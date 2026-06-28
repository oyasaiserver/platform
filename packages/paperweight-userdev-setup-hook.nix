# Setup hook that pre-populates the paperweight-userdev vanillaServerDownloads cache
# for every version in mojang-server-mappings, so the download task is skipped in the
# Nix sandbox. Must run after gradleConfigurePhase sets GRADLE_USER_HOME, so it
# registers to postConfigureHooks.
{
  lib,
  makeSetupHook,
  jq,
  writeText,
  vanillaServers,
  fetchurl,
  inputs,
}:
let
  mojang-server-mappings = lib.importJSON "${inputs.nix-minecraft}/pkgs/neoforge-servers/game_locks.json";

  script = writeText "paperweight-userdev-setup-hook.sh" ''
    paperweightUserdevPopulateCache() {
      ${lib.concatMapAttrsStringSep "\n" (
        version:
        {
          mappings ? null,
        }:
        let
          # Reimplementation of paperweight cache key
          cacheKey = (builtins.hashString "sha256" (builtins.hashString "sha256" version));
          vanillaServerJar = vanillaServers."vanilla-${lib.replaceString "." "_" version}";
        in
        lib.optionalString (mappings != null) ''
          dir="$GRADLE_USER_HOME/caches/paperweight-userdev/v2/work/vanillaServerDownloads_${cacheKey}"
          mkdir -p "$dir"

          serverJar="$dir/vanillaServer.jar"
          mappings="$dir/mojangServerMappings.txt"

          cp ${vanillaServerJar}/lib/minecraft/server.jar "$serverJar"
          cp ${fetchurl mappings} "$mappings"

          jq -n \
            --arg serverJarHash "$(sha256sum "$serverJar" | cut -d' ' -f1)" \
            --arg mappingsHash "$(sha256sum "$mappings" | cut -d' ' -f1)" \
            '{ outputHashes: [$serverJarHash, $mappingsHash], lastUsed: 0 }' \
            >"$dir/metadata.json"
        ''
      ) mojang-server-mappings}
    }
    postConfigureHooks+=(paperweightUserdevPopulateCache)
  '';
in
makeSetupHook {
  name = "paperweight-userdev-setup-hook";
  propagatedBuildInputs = [ jq ];
} script
