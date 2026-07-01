package com.gakubuchilocker.commands

import com.gakubuchilocker.GakubuchiLockerPlugin
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class GakubuchiCommand(private val plugin: GakubuchiLockerPlugin) : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("§cこのコマンドはプレイヤーのみ使用できます。")
            return true
        }

        if (!sender.hasPermission("gakubuchilocker.use")) {
            sender.sendMessage("§c[Gakubuchi] §fこのコマンドを使用する権限がありません。")
            return true
        }

        val sub = args.getOrNull(0)?.lowercase()
        if (sub != "on" && sub != "off") {
            sender.sendMessage("§eUsage: /${command.name} <on|off>")
            return true
        }

        val turnOn = sub == "on"
        when (command.name.lowercase()) {
            "gakubuchilock"   -> handleMode(sender, turnOn, GakubuchiLockerPlugin.PendingMode.LOCK,   "Lock",   "ロック")
            "gakubuchiunlock" -> handleMode(sender, turnOn, GakubuchiLockerPlugin.PendingMode.UNLOCK, "Unlock", "ロック解除")
        }

        return true
    }

    private fun handleMode(
        player: Player,
        turnOn: Boolean,
        mode: GakubuchiLockerPlugin.PendingMode,
        label: String,
        action: String
    ) {
        if (turnOn) {
            plugin.pendingMode[player.uniqueId] = mode
            val offCmd = if (mode == GakubuchiLockerPlugin.PendingMode.LOCK) "gakubuchilock" else "gakubuchiunlock"
            player.sendMessage("§a[Gakubuchi] §f${label}モードを§aON§fにしました。額縁を左クリックで${action}できます。")
            player.sendMessage("§7/${offCmd} off §7で終了します。")
        } else {
            if (plugin.pendingMode[player.uniqueId] == mode) {
                plugin.pendingMode.remove(player.uniqueId)
                player.sendMessage("§e[Gakubuchi] §f${label}モードを§cOFF§fにしました。")
            } else {
                player.sendMessage("§c[Gakubuchi] §f${label}モードはONになっていません。")
            }
        }
    }

    override fun onTabComplete(
        sender: CommandSender,
        command: Command,
        alias: String,
        args: Array<out String>
    ): List<String> {
        if (args.size == 1) {
            return listOf("on", "off").filter { it.startsWith(args[0].lowercase()) }
        }
        return emptyList()
    }
}
