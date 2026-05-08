package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PlayerMacro
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.entity.Player
import java.text.SimpleDateFormat
import java.util.Date

/**
 * /macro
 *
 *   /macro                         → マクロ一覧GUI
 *   /macro <id>                    → 指定IDのマクロを実行
 *   /macro run <id>                → 同上 (明示的)
 *   /macro <id> <番号> <コマンド>  → 指定インデックスにコマンドをセット
 *   /macro <id> <番号> remove      → 指定インデックスのコマンドを削除
 *   /macro share <id>              → 共有IDを発行 (既存IDがあれば再表示も)
 *   /macro shares                  → 自分が発行した共有IDを一覧表示
 *   /macro import <shareId>        → 共有IDからマクロを取り込む
 */
@Suppress("UnstableApiUsage")
class MacroCommand(private val plugin: OyasaiMenu) : BasicCommand {

    private val dateFormat = SimpleDateFormat("yyyy/MM/dd HH:mm")

    override fun execute(source: CommandSourceStack, args: Array<out String>) {
        val player = source.sender as? Player
            ?: run { source.sender.sendMessage("§cゲーム内から実行してください。"); return }
        if (!player.hasPermission("oyasaimenu.macro")) {
            player.sendMessage("§cこのコマンドを使う権限がありません。"); return
        }

        when {
            // /macro share <id>
            args.size >= 2 && args[0].equals("share", ignoreCase = true) ->
                handleShare(player, args[1])

            // /macro shares
            args.size >= 1 && args[0].equals("shares", ignoreCase = true) ->
                handleShares(player)

            // /macro import <shareId>
            args.size >= 2 && args[0].equals("import", ignoreCase = true) ->
                handleImport(player, args[1])

            // /macro run <id>
            args.size >= 2 && args[0].equals("run", ignoreCase = true) -> {
                val err = plugin.macroManager.executeMacro(player, args[1])
                if (err != null) player.sendMessage("§c$err")
            }

            // /macro <id> <番号> <コマンド/remove>
            args.size >= 3 && args[1].toIntOrNull() != null -> {
                val macroId = args[0]; val index = args[1].toInt() - 1
                val value   = args.drop(2).joinToString(" ")
                if (plugin.macroManager.getMacro(player.uniqueId, macroId) == null) {
                    player.sendMessage("§cマクロ '§e$macroId§c' が見つかりません。"); return
                }
                if (value.equals("remove", ignoreCase = true)) {
                    val err = plugin.macroManager.removeCommandAtIndex(player.uniqueId, macroId, index)
                    if (err != null) player.sendMessage("§c$err")
                    else player.sendMessage("§a'$macroId' の ${index+1} 番目を削除しました。")
                } else {
                    val err = plugin.macroManager.setCommandAtIndex(player.uniqueId, macroId, index, value)
                    if (err != null) player.sendMessage("§c$err")
                    else player.sendMessage("§a'$macroId' の ${index+1} 番目を設定: §f$value")
                }
            }

            args.size == 2 ->
                player.sendMessage("§7使い方: §f/macro §e<id> §b<番号> §f<コマンド>")

            args.isEmpty() ->
                plugin.macroEngine.openMacroList(player)

            else -> {
                val err = plugin.macroManager.executeMacro(player, args[0])
                if (err != null) { player.sendMessage("§c$err"); player.sendMessage("§7GUIから管理: §e/macro") }
            }
        }
    }

    // ============================
    // share
    // ============================

    private fun handleShare(player: Player, macroId: String) {
        val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
        if (macro == null) { player.sendMessage(c("&cマクロ '$macroId' が見つかりません。")); return }
        if (macro.commands.isEmpty()) { player.sendMessage(c("&cコマンドが空のマクロは共有できません。")); return }

        // 既存の共有IDを確認
        val existing = plugin.sharedMacroManager.findSharesForMacro(player.uniqueId, macro.name)
        if (existing.isNotEmpty()) {
            player.sendMessage(comp("&b--- 既存の共有ID (${macro.name}) ---"))
            existing.take(5).forEach { share ->
                val date = dateFormat.format(Date(share.createdAt))
                val idComp = buildIdComponent(share.shareId)
                player.sendMessage(
                    Component.text("  ").decoration(TextDecoration.ITALIC, false)
                        .append(idComp)
                        .append(comp("  &8[$date]"))
                )
            }
            if (existing.size > 5) player.sendMessage(comp("  &8...他 ${existing.size - 5} 件"))
            player.sendMessage(comp("&7新しいIDを発行する場合は下のIDをご利用ください:"))
        }

        // 新しい共有IDを発行
        val shareId = plugin.sharedMacroManager.publishMacro(macro, player.name, player.uniqueId)
        if (shareId == null) { player.sendMessage(c("&c共有に失敗しました。")); return }

        player.sendMessage(
            Component.text("").decoration(TextDecoration.ITALIC, false)
                .append(comp("&a新しい共有ID: "))
                .append(buildIdComponent(shareId))
                .append(comp("  &7(クリックでコピー)"))
        )
        player.sendMessage(comp("&7相手に &f/macro import $shareId &7と伝えてください。"))
    }

    // ============================
    // shares (再確認)
    // ============================

    private fun handleShares(player: Player) {
        val all = plugin.sharedMacroManager.findSharesByAuthor(player.uniqueId)
        if (all.isEmpty()) {
            player.sendMessage(c("&7まだマクロを共有していません。"))
            player.sendMessage(c("&7共有: &f/macro share <マクロID>"))
            return
        }

        player.sendMessage(comp("&b--- あなたの共有マクロ一覧 (${all.size}件) ---"))
        all.take(20).forEach { share ->
            val date = dateFormat.format(Date(share.createdAt))
            player.sendMessage(
                Component.text("").decoration(TextDecoration.ITALIC, false)
                    .append(comp("&7${share.macroName}: "))
                    .append(buildIdComponent(share.shareId))
                    .append(comp("  &8[$date]"))
            )
        }
        if (all.size > 20) player.sendMessage(comp("&8...他 ${all.size - 20} 件 (古いものは省略)"))
        player.sendMessage(comp("&7取り込み: &f/macro import <ID>"))
    }

    // ============================
    // import
    // ============================

    private fun handleImport(player: Player, shareId: String) {
        val shared = plugin.sharedMacroManager.importMacro(shareId.lowercase())
        if (shared == null) {
            player.sendMessage(c("&c共有ID '${shareId}' が見つかりません。")); return
        }

        val mcid        = player.name.lowercase()
        val safeName    = shared.macroName.lowercase().replace(Regex("[^a-z0-9_\\-]"), "_").take(32)
        val baseId      = "${mcid}_${safeName}"
        val existingIds = plugin.macroManager.getMacros(player.uniqueId).map { it.id }.toSet()
        val newId       = generateUniqueId(baseId, existingIds)

        val err = plugin.macroManager.addMacro(
            player.uniqueId,
            PlayerMacro(
                id              = newId,
                name            = shared.macroName,
                ownerUUID       = player.uniqueId.toString(),
                commands        = shared.commands,
                cooldownSeconds = plugin.config.getInt("macro.cooldown-seconds", 3)
            ),
            plugin.macroManager.getMaxMacros(player)
        )
        if (err != null) { player.sendMessage(c("&c取り込み失敗: $err")); return }

        player.sendMessage(comp("&aマクロを取り込みました！"))
        player.sendMessage(comp("&7マクロ名: &f${shared.macroName}"))
        player.sendMessage(comp("&7${shared.description}"))
        player.sendMessage(comp("&7コマンド数: &f${shared.commands.size}個  ID: &f$newId"))
        player.sendMessage(comp("&7/macro で確認・実行できます"))
    }

    // ============================
    // ユーティリティ
    // ============================

    /** クリックでコピーできる共有IDのComponentを生成する */
    private fun buildIdComponent(shareId: String): Component =
        Component.text(shareId)
            .color(NamedTextColor.GOLD)
            .decoration(TextDecoration.ITALIC, false)
            .decoration(TextDecoration.BOLD, true)
            .clickEvent(ClickEvent.copyToClipboard(shareId))
            .hoverEvent(HoverEvent.showText(
                Component.text("クリックでコピー: $shareId")
                    .color(NamedTextColor.GRAY)
                    .decoration(TextDecoration.ITALIC, false)
            ))

    private fun generateUniqueId(baseId: String, existing: Set<String>): String {
        if (!existing.contains(baseId)) return baseId
        var counter = 2
        while (existing.contains("${baseId}_$counter")) counter++
        return "${baseId}_$counter"
    }

    override fun suggest(source: CommandSourceStack, args: Array<out String>): List<String> {
        val player = source.sender as? Player ?: return emptyList()
        val prefix = args.lastOrNull() ?: ""
        return when (args.size) {
            0, 1 -> (listOf("run", "share", "shares", "import") +
                    plugin.macroManager.getMacros(player.uniqueId).map { it.id })
                .filter { it.startsWith(prefix, ignoreCase = true) }
            2    -> when {
                args[0].equals("run",   ignoreCase = true) ||
                args[0].equals("share", ignoreCase = true) ->
                    plugin.macroManager.getMacros(player.uniqueId).map { it.id }
                        .filter { it.startsWith(prefix, ignoreCase = true) }
                plugin.macroManager.getMacro(player.uniqueId, args[0]) != null -> {
                    val macro = plugin.macroManager.getMacro(player.uniqueId, args[0])!!
                    ((1..maxOf(macro.commands.size + 1, 1)).map { it.toString() } + listOf("remove"))
                        .filter { it.startsWith(prefix, ignoreCase = true) }
                }
                else -> emptyList()
            }
            3    -> when {
                args[1].toIntOrNull() != null ->
                    listOf("wait 1s", "wait 0.5s", "remove").filter { it.startsWith(prefix, ignoreCase = true) }
                else -> emptyList()
            }
            else -> emptyList()
        }
    }
}