package com.gakubuchilocker

import com.gakubuchilocker.commands.GakubuchiCommand
import com.gakubuchilocker.commands.GakubuchiFinderCommand
import com.gakubuchilocker.commands.GakubuchiToumeiCommand
import com.gakubuchilocker.database.DatabaseManager
import com.gakubuchilocker.listeners.FrameEventListener
import icu.oyasai.frames.OyasaiFrames
import java.util.UUID

class GakubuchiLockerPlugin(val plugin: OyasaiFrames) {
  lateinit var db: DatabaseManager
  val ownerKey
    get() = plugin.ownerKey

  val logger
    get() = plugin.logger

  val dataFolder
    get() = plugin.dataFolder

  // プレイヤーのモード管理 (UUID → "lock" | "unlock")
  val pendingMode = mutableMapOf<UUID, PendingMode>()

  // 額縁自動透明化モードのプレイヤー一覧
  val toumeiPlayers = mutableSetOf<UUID>()

  enum class PendingMode {
    LOCK,
    UNLOCK,
  }

  fun onEnable() {
    db = DatabaseManager(this)

    val handler = GakubuchiCommand(this)
    listOf("gakubuchilock", "gakubuchiunlock").forEach { name ->
      plugin.getCommand(name)?.let { cmd ->
        cmd.setExecutor(handler)
        cmd.tabCompleter = handler
      }
    }

    val finderHandler = GakubuchiFinderCommand(this)
    plugin.getCommand("gakubuchifinder")?.let { cmd ->
      cmd.setExecutor(finderHandler)
      cmd.tabCompleter = finderHandler
    }

    val toumeiHandler = GakubuchiToumeiCommand(this)
    plugin.getCommand("gakubuchitoumei")?.let { cmd ->
      cmd.setExecutor(toumeiHandler)
      cmd.tabCompleter = toumeiHandler
    }

    plugin.server.pluginManager.registerEvents(FrameEventListener(this), plugin)

    logger.info("Gakubuchi-Locker が有効になりました。")
  }

  fun onDisable() {
    if (::db.isInitialized) db.close()
    logger.info("Gakubuchi-Locker が無効になりました。")
  }
}
