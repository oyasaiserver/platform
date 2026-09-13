package icu.oyasai.utilities.joincommands

import icu.oyasai.utilities.OyasaiUtilities
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.logging.Level
import org.bukkit.World
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player

/**
 * 初回参加フラグ。上流 JoinCommands と同じキーを YAML-per-player で保存する。
 *
 * 保存先: `plugins/OyasaiUtilities/joincommands/playerdata/<uuid>.data.yml`
 *
 * 読み込みフォールバック: `plugins/JoinCommands/playerdata/<uuid>.data.yml`
 */
internal object JoinCommandsPlayerData {
  private const val PLAYED_BEFORE = "join-commands.played-before"
  private const val PLAYED_BEFORE_WORLDS = "join-commands.played-before-world-list"

  private val plugin
    get() = OyasaiUtilities.plugin

  private val cache = ConcurrentHashMap<UUID, YamlConfiguration>()

  fun hasJoinedServerBefore(player: Player): Boolean = get(player).getBoolean(PLAYED_BEFORE, false)

  fun hasJoinedWorldBefore(player: Player, world: World): Boolean =
      get(player).getStringList(PLAYED_BEFORE_WORLDS).contains(world.name)

  fun setJoinedServerBefore(player: Player, disablePlayerData: Boolean) {
    if (disablePlayerData) return
    val data = get(player)
    if (data.getBoolean(PLAYED_BEFORE, false)) return
    data.set(PLAYED_BEFORE, true)
    save(player)
  }

  fun setJoinedWorldBefore(player: Player, world: World, disablePlayerData: Boolean) {
    if (disablePlayerData) return
    val data = get(player)
    val worlds = data.getStringList(PLAYED_BEFORE_WORLDS)
    if (worlds.contains(world.name)) return
    worlds.add(world.name)
    data.set(PLAYED_BEFORE_WORLDS, worlds)
    save(player)
  }

  fun clearCache() {
    cache.clear()
  }

  private fun get(player: Player): YamlConfiguration {
    return cache.computeIfAbsent(player.uniqueId) { load(player.uniqueId) }
  }

  private fun load(uuid: UUID): YamlConfiguration {
    val configuration = YamlConfiguration()
    val file = existingFile(uuid) ?: return configuration
    try {
      configuration.load(file)
    } catch (ex: Exception) {
      plugin.logger.log(Level.WARNING, "[JoinCommands] Failed to load playerdata for $uuid", ex)
    }
    return configuration
  }

  private fun save(player: Player) {
    val configuration = cache[player.uniqueId] ?: return
    val file = dataFile(player.uniqueId)
    try {
      file.parentFile.mkdirs()
      configuration.save(file)
    } catch (ex: Exception) {
      plugin.logger.log(
          Level.WARNING,
          "[JoinCommands] Failed to save playerdata for ${player.uniqueId}",
          ex,
      )
    }
  }

  private fun existingFile(uuid: UUID): File? {
    val ours = dataFile(uuid)
    if (ours.isFile) return ours
    val legacy = legacyFile(uuid)
    return legacy.takeIf { it.isFile }
  }

  private fun dataFile(uuid: UUID): File =
      File(plugin.dataFolder, "joincommands/playerdata/${uuid}.data.yml")

  private fun legacyFile(uuid: UUID): File =
      File(plugin.dataFolder.parentFile, "JoinCommands/playerdata/${uuid}.data.yml")
}
