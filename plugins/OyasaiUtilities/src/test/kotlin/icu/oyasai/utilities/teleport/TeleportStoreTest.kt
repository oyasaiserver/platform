package icu.oyasai.utilities.teleport

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.io.File
import java.nio.file.Files
import java.util.UUID
import kotlin.test.*

class TeleportStoreTest {
  private fun temporary(test: (File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val temp = Files.createTempDirectory(root.toPath(), "teleport-").toFile()
    try {
      test(temp)
    } finally {
      temp.deleteRecursively()
    }
  }

  @Test
  fun `imports UUID only and name only homes and imprisonment once`() = temporary { root ->
    val legacy = File(root, "userdata").apply { mkdirs() }
    val id = UUID.randomUUID()
    val world = UUID.randomUUID().toString()
    val file = File(legacy, "$id.yml")
    file.writeText(
        """
      homes:
        uuid:
          world: $world
          x: 1
          y: 64
          z: 2
        name:
          world: survival
          x: 3
          y: 65
          z: 4
      jailed: true
      jail: cell
      timestamps:
        jail: 123456789
        onlinejail: 9876
      lastlocation:
        world-name: survival
        x: 8
        y: 70
        z: 9
    """
            .trimIndent()
    )
    val dbFile = File(root, "utilities.db")
    UtilitiesDatabase(dbFile).use { db ->
      val store = TeleportStore(db, legacy)
      val data = store.get(id)
      assertEquals(world, data.homes["uuid"]?.worldUuid)
      assertNull(data.homes["uuid"]?.worldName)
      assertEquals("survival", data.homes["name"]?.worldName)
      assertNull(data.homes["name"]?.worldUuid)
      assertTrue(data.jailed)
      assertEquals("cell", data.jail)
      assertEquals(123456789L, data.jailTimeout)
      assertEquals(9876L, data.onlineJailUntilTicks)
      assertEquals(8.0, data.returnLocation?.x)
      data.homes.clear()
      data.jailed = false
      store.save(id)
      data.homes["unsaved"] = SavedLocation(null, "survival", 0.0, 0.0, 0.0)
      store.forget(id)
      assertTrue(store.get(id).homes.isEmpty())
    }
    file.writeText(
        "homes:\n  late:\n    world: survival\n    x: 1\n    y: 2\n    z: 3\njailed: true\n"
    )
    UtilitiesDatabase(dbFile).use { db ->
      val data = TeleportStore(db, legacy).get(id)
      assertTrue(data.homes.isEmpty())
      assertFalse(data.jailed)
    }
  }

  @Test
  fun `absent userdata marked once and jailed without name preserved`() = temporary { root ->
    val id = UUID.randomUUID()
    val legacy = File(root, "userdata").apply { mkdirs() }
    val dbFile = File(root, "utilities.db")
    UtilitiesDatabase(dbFile).use { db -> assertFalse(TeleportStore(db, legacy).get(id).jailed) }
    File(legacy, "$id.yml").writeText("jailed: true\n")
    UtilitiesDatabase(dbFile).use { db -> assertFalse(TeleportStore(db, legacy).get(id).jailed) }
    val jailed = UUID.randomUUID()
    File(legacy, "$jailed.yml").writeText("jailed: true\n")
    UtilitiesDatabase(dbFile).use { db ->
      val data = TeleportStore(db, legacy).get(jailed)
      assertTrue(data.jailed)
      assertNull(data.jail)
    }
  }

  @Test
  fun `invalid legacy YAML never creates marker`() = temporary { root ->
    val id = UUID.randomUUID()
    File(root, "$id.yml").writeText("homes: [broken\n")
    UtilitiesDatabase(File(root, "db")).use { db ->
      assertFails { TeleportStore(db, root).get(id) }
      db.read { c ->
        c.createStatement().use { s ->
          s.executeQuery("SELECT COUNT(*) FROM teleport_players").use { r ->
            r.next()
            assertEquals(0, r.getInt(1))
          }
        }
      }
    }
  }

  @Test
  fun `recovered local homes persist marker without importing legacy imprisonment`() =
      temporary { root ->
        val id = UUID.randomUUID()
        val dbFile = File(root, "db")
        File(root, "$id.yml").writeText("jailed: true\njail: legacy\n")
        UtilitiesDatabase(dbFile).use { db ->
          val store = TeleportStore(db, root)
          db.write { c ->
            c.prepareStatement(
                    "INSERT INTO teleport_homes VALUES (?, 'local', NULL, 'survival', 1, 64, 2, 0, 0)"
                )
                .use {
                  it.setString(1, id.toString())
                  it.executeUpdate()
                }
          }
          db.flush()
          val state = store.get(id)
          assertEquals(setOf("local"), state.homes.keys)
          assertFalse(state.jailed)
          store.flush()
          db.read { c ->
            c.prepareStatement(
                    "SELECT essentials_imported FROM teleport_players WHERE player_uuid = ?"
                )
                .use {
                  it.setString(1, id.toString())
                  it.executeQuery().use { rows ->
                    assertTrue(rows.next())
                    assertEquals(1, rows.getInt(1))
                  }
                }
          }
          state.homes.clear()
          store.save(id)
          store.flush()
        }
        UtilitiesDatabase(dbFile).use { db ->
          val state = TeleportStore(db, root).get(id)
          assertTrue(state.homes.isEmpty())
          assertFalse(state.jailed)
        }
      }

  @Test
  fun `warps jails and tools YAML generated once then operator edits retained`() =
      temporary { root ->
        val legacy = File(root, "essentials").apply { mkdirs() }
        val own = File(root, "utilities")
        val coords = "world: survival\nx: 1\ny: 64\nz: 2\n"
        File(legacy, "warps").mkdirs()
        File(legacy, "warps/shop.yml").writeText("name: shop\n$coords")
        File(legacy, "jail.yml")
            .writeText(
                "jails:\n  cell:\n" +
                    coords
                        .lineSequence()
                        .filter { it.isNotEmpty() }
                        .joinToString("\n") { "    $it" }
            )
        File(legacy, "kits.yml").writeText("kits:\n  tools:\n    items:\n    - iron_pickaxe 1\n")
        val first = TeleportLocations(own, legacy)
        assertEquals("survival", first.warps["shop"]?.worldName)
        assertEquals(64.0, first.jails["cell"]?.y)
        assertEquals(listOf("iron_pickaxe 1"), first.toolsKit)
        File(own, "Warps/warps.yml").writeText("warps: {}\n")
        File(own, "Jail/jails.yml").writeText("jails: {}\n")
        File(own, "Kits/kits.yml").writeText("kits:\n  tools:\n    items: []\n")
        val second = TeleportLocations(own, legacy)
        assertTrue(second.warps.isEmpty())
        assertTrue(second.jails.isEmpty())
        assertTrue(second.toolsKit.isEmpty())
      }
}
