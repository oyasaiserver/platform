package io.oyasai.worldgen.world

import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull

class LegacyImportTest {
  @Test
  fun importsNamesAndKeysWithoutGuessing() {
    val file = Files.createTempFile("fictional-worlds", ".yml")
    try {
      Files.writeString(
          file,
          """
          minecraft:overworld:
            read-only: {legacy-world-name: DemoRealm, environment: normal}
            difficulty: hard
          minecraft:the_nether:
            read-only: {legacy-world-name: DemoRealm_nether, environment: nether}
          minecraft:the_end:
            read-only: {legacy-world-name: DemoRealm_the_end, environment: the_end}
          minecraft:arena_key:
            read-only: {legacy-world-name: ArenaBlue, environment: normal}
            spawn-location:
              ==: MVSpawnLocation
              x: 2.0
              y: 70.0
              z: 3.0
              yaw: 90.0
              pitch: 0.0
            spawning: {monster: {spawn: false}, animal: {spawn: true}}
          minecraft:[dot]hidden_key:
            read-only: {legacy-world-name: .HiddenArena, environment: normal}
          minecraft:missing_key:
            read-only: {legacy-world-name: MissingArena, environment: normal}
            spawn-location:
              ==: MVNullLocation (It's a bug if you see this in your config file)
          old_registration:
            auto-load: false
            spawn-location:
              ==: MVNullLocation (It's a bug if you see this in your config file)
          """
              .trimIndent(),
      )
      val result = parseLegacyWorlds(file.toFile())
      assertEquals(6, result.worlds.size)
      assertEquals(1, result.skippedLegacy)
      assertEquals(0, result.skippedInvalid)
      assertEquals("minecraft:arena_key", result.worlds["ArenaBlue"]?.key.toString())
      assertEquals("minecraft:.hidden_key", result.worlds[".HiddenArena"]?.key.toString())
      assertFalse(assertNotNull(result.worlds["ArenaBlue"]).monsterSpawn)
      assertEquals("minecraft:overworld", result.worlds["DemoRealm"]?.key.toString())
      assertEquals("minecraft:missing_key", result.worlds["MissingArena"]?.key.toString())
      assertNull(result.worlds["MissingArena"]?.spawn)
      val root = Files.createTempDirectory("fictional-level")
      try {
        val arena = normalWorldFolder(root, assertNotNull(result.worlds["ArenaBlue"]).key)
        assertNotNull(arena).mkdirs()
        assertEquals(true, arena.isDirectory)
        assertEquals(
            false,
            normalWorldFolder(root, assertNotNull(result.worlds["MissingArena"]).key)?.isDirectory,
        )
      } finally {
        root.toFile().deleteRecursively()
      }
    } finally {
      Files.deleteIfExists(file)
    }
  }
}
