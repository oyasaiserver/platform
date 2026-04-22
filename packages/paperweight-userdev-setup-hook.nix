# Setup hook that pre-populates the paperweight-userdev vanillaServerDownloads cache
# for every version in mojang-server-mappings, so the download task is skipped in the
# Nix sandbox. Must run after gradleConfigurePhase sets GRADLE_USER_HOME, so it
# registers to postConfigureHooks.
{
  lib,
  makeSetupHook,
  jq,
  writeText,
  mojang-server-mappings,
  vanillaServers,
}:
let
  script = writeText "paperweight-userdev-setup-hook.sh" ''
    paperweightUserdevPopulateCache() {
      ${lib.concatMapAttrsStringSep "\n" (
        version: mappings:
        let
          # Reimplementation of paperweight cache key
          cacheKey = (builtins.hashString "sha256" (builtins.hashString "sha256" version));
          vanillaServerJar = vanillaServers."vanilla-${lib.replaceString "." "_" version}";
        in
        ''
          local dir="$GRADLE_USER_HOME/caches/paperweight-userdev/v2/work/vanillaServerDownloads_${cacheKey}"
          mkdir -p "$dir"

          cp ${vanillaServerJar}/lib/minecraft/server.jar "$dir/vanillaServer.jar"
          cp ${mappings} "$dir/mojangServerMappings.txt"

          local serverJarHash=$(sha256sum "$dir/vanillaServer.jar" | cut -d' ' -f1)
          local mappingsHash=$(sha256sum "$dir/mojangServerMappings.txt" | cut -d' ' -f1)

          jq -n \
            --arg h1 "$serverJarHash" \
            --arg h2 "$mappingsHash" \
            '{ outputHashes: [$h1, $h2], lastUsed: 0 }' \
            > "$dir/metadata.json"
        ''
      ) mojang-server-mappings.passthru}
    }
    postConfigureHooks+=(paperweightUserdevPopulateCache)
  '';
in
makeSetupHook {
  name = "paperweight-userdev-setup-hook";
  propagatedBuildInputs = [ jq ];
} script
