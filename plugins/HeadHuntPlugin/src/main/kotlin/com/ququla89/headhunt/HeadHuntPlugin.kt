package com.ququla89.headhunt

import com.ququla89.headhunt.command.HeadHuntCommand
import com.ququla89.headhunt.listener.TreasureListener
import com.ququla89.headhunt.manager.GameManager
import com.ququla89.headhunt.manager.TeamManager
import com.ququla89.headhunt.manager.TreasureManager
import java.io.File
import org.bukkit.NamespacedKey
import org.bukkit.plugin.java.JavaPlugin

class HeadHuntPlugin : JavaPlugin() {
  private lateinit var treasureManager: TreasureManager
  private lateinit var teamManager: TeamManager
  private lateinit var gameManager: GameManager

  override fun onEnable() {
    val treasureIdKey = NamespacedKey(this, "treasure_id")
    val dataFile = File(dataFolder, "treasures.yml")

    treasureManager = TreasureManager(dataFile, treasureIdKey, logger, server::getWorld)
    treasureManager.load()

    teamManager = TeamManager()
    gameManager = GameManager(treasureManager, teamManager)

    server.pluginManager.registerEvents(TreasureListener(treasureManager, gameManager), this)

    val executor = HeadHuntCommand(treasureManager, teamManager, gameManager)
    registerCommand("headhunt", "HeadHuntのメインコマンドです。", listOf("hhunt"), executor)

    logger.info("HeadHuntを有効化しました。${treasureManager.size}件の宝HEADを読み込みました。")
  }

  override fun onDisable() {
    if (::treasureManager.isInitialized) {
      if (!treasureManager.save()) {
        logger.severe("HeadHuntの終了時に宝HEAD情報を保存できませんでした。")
      }
    }
    logger.info("HeadHuntを無効化しました。")
  }
}
