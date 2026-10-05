package icu.oyasai.games.headhunt

import icu.oyasai.games.OyasaiGamesPlugin
import icu.oyasai.games.headhunt.command.HeadHuntCommand
import icu.oyasai.games.headhunt.listener.TreasureListener
import icu.oyasai.games.headhunt.manager.GameManager
import icu.oyasai.games.headhunt.manager.TeamManager
import icu.oyasai.games.headhunt.manager.TreasureManager
import java.io.File
import java.nio.file.Files
import org.bukkit.NamespacedKey

class HeadHuntModule(private val plugin: OyasaiGamesPlugin) {
  private var treasureManager: TreasureManager? = null

  fun enable() {
    val dataFile = File(plugin.dataFolder, "treasures.yml")
    if (copyLegacyTreasures(dataFile)) {
      plugin.logger.info("旧HeadHuntのtreasures.ymlをOyasaiGamesにコピーしました。")
    }

    // The ID belongs to the placed head block's TileState PDC; keep its original namespace.
    val treasureIdKey = NamespacedKey("headhunt", "treasure_id")
    val treasures = TreasureManager(dataFile, treasureIdKey, plugin.logger, plugin.server::getWorld)
    treasures.load()
    treasureManager = treasures

    val teams = TeamManager()
    val game = GameManager(treasures, teams)
    plugin.server.pluginManager.registerEvents(TreasureListener(treasures, game), plugin)

    val command =
        plugin.getCommand("headhunt") ?: error("headhunt command is missing from plugin.yml")
    val executor = HeadHuntCommand(treasures, teams, game)
    command.setExecutor(executor)
    command.tabCompleter = executor

    plugin.logger.info("HeadHuntを有効化しました。${treasures.size}件の宝HEADを読み込みました。")
  }

  fun disable() {
    treasureManager?.let {
      if (!it.save()) plugin.logger.severe("HeadHuntの終了時に宝HEAD情報を保存できませんでした。")
      plugin.logger.info("HeadHuntを無効化しました。")
    }
  }
}

internal fun copyLegacyTreasures(dataFile: File): Boolean {
  val legacyFile = File(dataFile.parentFile.parentFile, "HeadHunt/treasures.yml")
  if (dataFile.exists() || !legacyFile.isFile) return false
  Files.createDirectories(dataFile.parentFile.toPath())
  Files.copy(legacyFile.toPath(), dataFile.toPath())
  return true
}
