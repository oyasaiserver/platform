package com.gakubuchilocker

import com.gakubuchilocker.commands.GakubuchiCommand
import com.gakubuchilocker.database.DatabaseManager
import com.gakubuchilocker.listeners.FrameEventListener
import org.bukkit.plugin.java.JavaPlugin
import java.util.UUID

class GakubuchiLockerPlugin : JavaPlugin() {

    lateinit var db: DatabaseManager

    // プレイヤーのモード管理 (UUID → "lock" | "unlock")
    val pendingMode = mutableMapOf<UUID, PendingMode>()

    enum class PendingMode { LOCK, UNLOCK }

    override fun onEnable() {
        db = DatabaseManager(dataFolder)

        val handler = GakubuchiCommand(this)
        listOf("gakubuchilock", "gakubuchiunlock").forEach { name ->
            getCommand(name)?.let { cmd ->
                cmd.setExecutor(handler)
                cmd.tabCompleter = handler
            }
        }

        server.pluginManager.registerEvents(FrameEventListener(this), this)

        logger.info("Gakubuchi-Locker が有効になりました。")
    }

    override fun onDisable() {
        db.close()
        logger.info("Gakubuchi-Locker が無効になりました。")
    }
}
