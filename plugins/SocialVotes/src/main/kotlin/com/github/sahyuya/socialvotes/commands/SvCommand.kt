package com.github.sahyuya.socialvotes.commands

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.data.SVGroup
import com.github.sahyuya.socialvotes.util.SignDisplayUtil.SVLOGO
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import java.util.*

class SvCommand : CommandExecutor {

    override fun onCommand(
        sender: CommandSender,
        command: Command,
        label: String,
        args: Array<out String>
    ): Boolean {

        if (args.isEmpty()) {
            sender.sendMessage("/sv <subcommand>")
            return true
        }
        if (sender !is Player) {
            sender.sendMessage("プレイヤーのみ実行できます。")
            return true
        }

        val dm = SocialVotes.dataManager
        when (args[0].lowercase(Locale.getDefault())) {
            "setgroup" -> {
                if (args.size < 2) {
                    sender.sendMessage("/sv setgroup <groupname>")
                    return true
                }
                val groupName = args[1]
                if (dm.groupByName.containsKey(groupName)) {
                    sender.sendMessage("既にそのグループは存在します。")
                    return true
                }
                val g = SVGroup(
                    name = groupName,
                    owner = sender.uniqueId
                )
                dm.groupByName[groupName] = g
                dm.save()

                sender.sendMessage("投票グループ $groupName を作成し、オーナーになりました。")
                return true
            }

            "add" -> {
                if (args.size < 2) {
                    sender.sendMessage("/sv add <groupname>")
                    return true
                }
                val groupName = args[1]
                val group = dm.groupByName[groupName]
                if (group == null) {
                    sender.sendMessage("グループが見つかりません。")
                    return true
                }
                // put player into a temporary 'add mode' state
                AddModeManager.watchPlayerForAdd(sender.uniqueId, groupName)
                sender.sendMessage("SV看板を右クリックすることで $groupName に追加します。")
                return true
            }

            "remove" -> {
                RemoveModeManager.watchPlayerForRemove(sender.uniqueId)
                sender.sendMessage("SV看板を右クリックすることでグループから除外します。")
                return true
            }

            "list" -> {
                if (args.size == 1) {
                    sender.sendMessage("§7--- グループ一覧 ---")
                    dm.groupByName.keys.forEach { sender.sendMessage("§7・§b$it") }
                } else {
                    val group = args[1]
                    val g = dm.groupByName[group]
                    if (g == null) {
                        sender.sendMessage("グループが見つかりません。")
                        return true
                    }
                    sender.sendMessage("§7--- グループ§b${group}§7の看板一覧 ---")
                    g.signIds.forEach { id ->
                        val s = dm.signById[id] ?: return@forEach
                        val line = Component.text()
                            .append(Component.text("§7ID:§6${s.id}§7「§a${s.name}§7」座標：${s.x} ${s.y} ${s.z} world=${s.world}"))
                            .clickEvent(
                                ClickEvent.runCommand("/svtp ${s.id}")
                            )
                            .hoverEvent(
                                HoverEvent.showText(
                                    Component.text("§bクリックでこのSV看板へテレポート")
                                )
                            )
                            .build()
                        sender.sendMessage(line)
                    }
                }
                return true
            }

            "delhere" -> {
                if (!sender.isOp) {
                    sender.sendMessage("OPのみ実行できます。")
                    return true
                }
                val loc = (sender).location.block.location
                val sign = dm.getSignAt(loc)
                if (sign == null) {
                    sender.sendMessage("この座標にSL看板はありません。")
                    return true
                }
                val groupName = sign.group
                // データ削除
                dm.removeSignById(sign.id)

                val message = SVLOGO+"${sender.name}§eが§6「${sign.name}」(ID:${sign.id})§eを消去しました。"
                val targets = mutableSetOf<Player>()
                targets.addAll(Bukkit.getOnlinePlayers().filter { it.isOp })
                targets.add(sender)
                targets.forEach { it.sendMessage(message) }
                groupName?.let { dm.notifyIfAutoDelete(it) }
                return true
            }

            "startvote" -> {
                if (args.size < 2) {
                    sender.sendMessage("/sv startvote <group>")
                    return true
                }
                val g = dm.groupByName[args[1]]
                if (g == null) {
                    sender.sendMessage("グループが見つかりません。")
                    return true
                }
                if (!sender.isOp && g.owner != sender.uniqueId) {
                    sender.sendMessage("§cこの操作はグループ作成者またはOPのみ可能です。")
                    return true
                }
                val now = System.currentTimeMillis()
                g.startTime = now
                if (g.endTime != null && g.endTime!! <= now) {
                    g.endTime = null
                }
                dm.save()
                sender.sendMessage("§a投票を開始しました。")
                return true
            }

            "stopvote" -> {
                if (args.size < 2) {
                    sender.sendMessage("/sv stopvote <group>")
                    return true
                }
                val g = dm.groupByName[args[1]]
                if (g == null) {
                    sender.sendMessage("グループが見つかりません。")
                    return true
                }
                if (!sender.isOp && g.owner != sender.uniqueId) {
                    sender.sendMessage("§cこの操作はグループオーナーのみ可能です。")
                    return true
                }
                val now = System.currentTimeMillis()
                if (g.startTime == null || now < g.startTime!!) {
                    sender.sendMessage("§c投票はまだ開始されていません。")
                    return true
                }
                g.endTime = now
                dm.save()
                sender.sendMessage("§a投票を終了しました。")
                return true
            }

            "allclear" -> {
                if (!sender.isOp) {
                    sender.sendMessage("OPのみ実行できます。")
                    return true
                }
                if (args.size < 2) {
                    sender.sendMessage("/sv allclear <groupname>")
                    return true
                }
                val group = dm.groupByName[args[1]]
                if (group == null) {
                    sender.sendMessage("グループが見つかりません。")
                    return true
                }
                group.signIds.toList().forEach {
                    dm.removeSignById(it)
                }
                dm.groupByName.remove(args[1])
                dm.save()

                val message = SVLOGO+"${sender.name}§eがグループ§6${args[1]}§eと所属SV看板を消去しました。"
                val targets = mutableSetOf<Player>()
                targets.addAll(Bukkit.getOnlinePlayers().filter { it.isOp })
                targets.add(sender)
                targets.forEach { it.sendMessage(message) }
                return true
            }

            "help" -> {
                sender.sendMessage("§6--- SocialVotes Help ---")
                sender.sendMessage("§e/sv list")
                sender.sendMessage("§e/sv add <group>")
                sender.sendMessage("§e/sv remove")
                sender.sendMessage("§e/sv startvote <group>")
                sender.sendMessage("§e/sv stopvote <group>")

                if (sender.isOp) {
                    sender.sendMessage("§c/sv setgroup <name>")
                    sender.sendMessage("§c/sv allclear <group>")
                    sender.sendMessage("§c/sv delhere")
                }
                return true
            }

            else -> {
                sender.sendMessage("存在しないコマンドです。")
                return true
            }
        }
    }
}
