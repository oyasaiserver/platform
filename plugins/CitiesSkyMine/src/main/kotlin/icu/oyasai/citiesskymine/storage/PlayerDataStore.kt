package icu.oyasai.citiesskymine.storage

import icu.oyasai.citiesskymine.Main
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player

class PlayerDataStore(private val plugin: Main) {

  private val folder = File(plugin.dataFolder, "player-data")
  private val cache = ConcurrentHashMap<UUID, YamlConfiguration>()

  fun getString(player: Player, path: String): String? = data(player).getString(path)

  fun getString(playerId: UUID, path: String): String? = data(playerId).getString(path)

  fun getInt(player: Player, path: String): Int? =
      if (data(player).isInt(path)) data(player).getInt(path) else null

  fun getDouble(player: Player, path: String): Double? =
      if (data(player).isDouble(path) || data(player).isInt(path)) data(player).getDouble(path)
      else null

  fun getBoolean(player: Player, path: String): Boolean? =
      if (data(player).isBoolean(path)) data(player).getBoolean(path) else null

  fun getKeys(player: Player, path: String): Set<String> =
      data(player).getConfigurationSection(path)?.getKeys(false).orEmpty()

  fun set(player: Player, path: String, value: Any?) {
    val yaml = data(player)
    yaml.set(path, value)
    save(player.uniqueId)
  }

  fun set(playerId: UUID, path: String, value: Any?) {
    val yaml = data(playerId)
    yaml.set(path, value)
    save(playerId)
  }

  fun setMany(player: Player, values: Map<String, Any?>) {
    val yaml = data(player)
    for ((path, value) in values) {
      yaml.set(path, value)
    }
    save(player.uniqueId)
  }

  fun saveAll() {
    for (playerId in cache.keys) {
      save(playerId)
    }
  }

  private fun data(player: Player): YamlConfiguration {
    val yaml = data(player.uniqueId)
    yaml.set("name", player.name)
    return yaml
  }

  private fun data(playerId: UUID): YamlConfiguration = cache.computeIfAbsent(playerId) { load(it) }

  private fun load(playerId: UUID): YamlConfiguration {
    folder.mkdirs()
    val file = file(playerId)
    return if (file.exists()) YamlConfiguration.loadConfiguration(file) else YamlConfiguration()
  }

  private fun save(playerId: UUID) {
    folder.mkdirs()
    runCatching { cache[playerId]?.save(file(playerId)) }
        .onFailure { error ->
          plugin.logger.warning("プレイヤーデータの保存に失敗しました: $playerId / ${error.message}")
        }
  }

  private fun file(playerId: UUID): File = File(folder, "$playerId.yml")
}
