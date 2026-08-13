package com.gakubuchilocker

import com.gakubuchilocker.commands.GakubuchiCommand
import com.gakubuchilocker.commands.GakubuchiFinderCommand
import com.gakubuchilocker.commands.GakubuchiToumeiCommand
import com.gakubuchilocker.database.DatabaseManager
import com.gakubuchilocker.listeners.FrameEventListener
import java.util.UUID
import org.bukkit.NamespacedKey
import org.bukkit.plugin.java.JavaPlugin

class GakubuchiLockerPlugin : JavaPlugin() {
  lateinit var db: DatabaseManager
  val ownerKey by lazy { NamespacedKey(this, "owner") }

  // プレイヤーのモード管理 (UUID → "lock" | "unlock")
  val pendingMode = mutableMapOf<UUID, PendingMode>()

  // 額縁自動透明化モードのプレイヤー一覧
  val toumeiPlayers = mutableSetOf<UUID>()

  enum class PendingMode {
    LOCK,
    UNLOCK,
  }

  override fun onEnable() {
    db = DatabaseManager(this)

    val handler = GakubuchiCommand(this)
    listOf("gakubuchilock", "gakubuchiunlock").forEach { name ->
      getCommand(name)?.let { cmd ->
        cmd.setExecutor(handler)
        cmd.tabCompleter = handler
      }
    }

    val finderHandler = GakubuchiFinderCommand(this)
    getCommand("gakubuchifinder")?.let { cmd ->
      cmd.setExecutor(finderHandler)
      cmd.tabCompleter = finderHandler
    }

    val toumeiHandler = GakubuchiToumeiCommand(this)
    getCommand("gakubuchitoumei")?.let { cmd ->
      cmd.setExecutor(toumeiHandler)
      cmd.tabCompleter = toumeiHandler
    }

    server.pluginManager.registerEvents(FrameEventListener(this), this)

    logger.info("Gakubuchi-Locker が有効になりました。")
  }

  override fun onDisable() {
    db.close()
    logger.info("Gakubuchi-Locker が無効になりました。")
  }
}
