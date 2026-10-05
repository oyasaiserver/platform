package icu.oyasai.utilities.playerstate

import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration

data class SavedPlayerState(
    var nickname: String? = null,
    var flyMode: Boolean = false,
    var flying: Boolean = false,
    var flySpeed: Float = 0.1f,
    var walkSpeed: Float = 0.2f,
    var lastName: String = "",
    var lastHeal: Long = 0,
)

/** Own files, including an explicit first-import marker even for an absent nickname. */
class PlayerStateStore(private val directory: File, private val essentialsDirectory: File) {
  private val cache = mutableMapOf<UUID, SavedPlayerState>()

  fun get(id: UUID): SavedPlayerState =
      cache.getOrPut(id) {
        val own = File(directory, "$id.yml")
        if (own.exists()) {
          val y = YamlConfiguration().apply { load(own) }
          require(y.getBoolean("essentials-imported")) { "Missing migration marker: $own" }
          SavedPlayerState(
              y.getString("nickname"),
              y.getBoolean("flymode"),
              y.getBoolean("flying"),
              y.getDouble("fly-speed", 0.1).toFloat(),
              y.getDouble("walk-speed", 0.2).toFloat(),
              y.getString("last-name", "")!!,
              y.getLong("last-heal"),
          )
        } else {
          val legacy = File(essentialsDirectory, "$id.yml")
          val y = YamlConfiguration().apply { if (legacy.exists()) load(legacy) }
          SavedPlayerState(
                  nickname = y.getString("nickname"),
                  flyMode = y.getBoolean("flymode"),
                  lastHeal = y.getLong("timestamps.lastheal"),
              )
              .also { save(id, it) }
        }
      }

  fun save(id: UUID, state: SavedPlayerState = get(id)) {
    directory.mkdirs()
    val y = YamlConfiguration()
    y.set("essentials-imported", true)
    y.set("nickname", state.nickname)
    y.set("flymode", state.flyMode)
    y.set("flying", state.flying)
    y.set("fly-speed", state.flySpeed.toDouble())
    y.set("walk-speed", state.walkSpeed.toDouble())
    y.set("last-name", state.lastName)
    y.set("last-heal", state.lastHeal)
    val target = File(directory, "$id.yml").toPath()
    val temporary = Files.createTempFile(directory.toPath(), "$id-", ".tmp")
    try {
      Files.writeString(temporary, y.saveToString())
      Files.move(
          temporary,
          target,
          StandardCopyOption.ATOMIC_MOVE,
          StandardCopyOption.REPLACE_EXISTING,
      )
    } finally {
      Files.deleteIfExists(temporary)
    }
  }

  fun forget(id: UUID) {
    cache.remove(id)
  }
}
