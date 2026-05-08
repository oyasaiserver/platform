package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PlayerMacro
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.makeItem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.player.AsyncPlayerChatEvent
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import java.text.SimpleDateFormat
import java.util.Date
import java.util.UUID

/**
 * MacroEngine
 *
 * ■ スラッシュ: 保存時はそのまま、実行時に1つ除去 (MacroManager側で処理)
 * ■ クリックモード: デフォルト=実行、ヒント(slot53)クリックで編集モード切替
 * ■ 本エディタ: 変更なし / 空 の場合も本を削除
 * ■ 共有ボタン(slot15): 既存の共有IDを再確認しつつ新しいIDを発行
 */
class MacroEngine(private val plugin: OyasaiMenu) : Listener {

    private val activePlayers: MutableSet<String>          = mutableSetOf()
    private val editModeMap:   MutableMap<String, Boolean> = mutableMapOf()
    private val pageMap:       MutableMap<String, Int>     = mutableMapOf()

    private data class ChatInputState(val mode: InputMode, val macroId: String?)
    private enum class InputMode { MACRO_NAME, COMMAND_ADD }
    private val chatInputPlayers:  MutableMap<String, ChatInputState> = mutableMapOf()
    private val bookEditorPending: MutableMap<UUID, String>           = mutableMapOf()

    private val plainText  = PlainTextComponentSerializer.plainText()
    private val dateFormat = SimpleDateFormat("MM/dd HH:mm")

    fun openMacroList(player: Player) {
        val page = pageMap[player.uniqueId.toString()] ?: 0
        player.openInventory(buildMacroListInventory(player, page))
        activePlayers.add(player.uniqueId.toString())
    }

    // ============================
    // 本エディタ
    // ============================

    private fun openBookEditor(player: Player, macroId: String) {
        val book = ItemStack(Material.WRITABLE_BOOK)
        val meta = book.itemMeta as BookMeta
        val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
        if (macro != null && macro.commands.isNotEmpty()) {
            // ★ 保存値をそのまま表示 (スラッシュの加工なし)
            val content = macro.commands.joinToString("\n")
            splitIntoPages(content, 254).forEach { meta.addPage(it) }
        } else {
            meta.addPage(
                "コマンドを1行ずつ入力\n\n" +
                "スラッシュの数:\n" +
                "  warp home  → /warp home\n" +
                "  //wand     → //wand (FAWE)\n\n" +
                "待機: wait 1s / wait 0.5s\n\n" +
                "Done で確定"
            )
        }
        book.itemMeta = meta
        val slot = player.inventory.firstEmpty().takeIf { it >= 0 } ?: 8
        player.inventory.setItem(slot, book)
        player.inventory.heldItemSlot = slot
        bookEditorPending[player.uniqueId] = macroId
        player.sendMessage(c("&b=== マクロ本エディタ ===  Done で確定"))
    }

    @EventHandler
    fun onPlayerEditBook(event: PlayerEditBookEvent) {
        val uuid    = event.player.uniqueId
        val macroId = bookEditorPending.remove(uuid) ?: return
        val meta    = event.newBookMeta

        // ★ スラッシュを除去せずそのまま保存
        val commands = meta.pages()
            .joinToString("\n") { plainText.serialize(it) }
            .split("\n").map { it.trim() }.filter { it.isNotEmpty() }

        if (event.isSigning) event.isCancelled = true
        removeBook(event.player)

        if (commands.isEmpty()) {
            event.player.sendMessage(c("&cコマンドが空です。変更を破棄しました。")); return
        }

        val macro = plugin.macroManager.getMacro(event.player.uniqueId, macroId)
            ?: run { event.player.sendMessage(c("&cマクロが見つかりません。")); return }

        if (commands == macro.commands) {
            event.player.sendMessage(c("&7変更がなかったため保存しませんでした。")); return
        }

        val err = plugin.macroManager.updateMacro(event.player.uniqueId, macro.copy(commands = commands))
        if (err != null) {
            event.player.sendMessage(c("&c$err"))
        } else {
            event.player.sendMessage(c("&aマクロ「&e${macro.name}&a」を更新しました。&f${commands.size}&a個"))
            commands.take(5).forEachIndexed { i, cmd ->
                event.player.sendMessage(c("  &7${i+1}. ${if (plugin.macroManager.isWaitCommand(cmd)) "⏱ $cmd" else cmd}"))
            }
            if (commands.size > 5) event.player.sendMessage(c("  &7...他 ${commands.size - 5} 個"))
        }
    }

    private fun removeBook(player: Player) {
        plugin.server.scheduler.runTaskLater(plugin, Runnable {
            for (i in 0 until player.inventory.size) {
                val item = player.inventory.getItem(i) ?: continue
                if (item.type == Material.WRITABLE_BOOK || item.type == Material.WRITTEN_BOOK) {
                    player.inventory.setItem(i, null); break
                }
            }
        }, 1L)
    }

    // ============================
    // インベントリ構築
    // ============================

    private fun buildMacroListInventory(player: Player, page: Int): Inventory {
        val uid        = player.uniqueId.toString()
        val macros     = plugin.macroManager.getMacros(player.uniqueId)
        val maxPerPage = 45
        val pageCount  = maxOf(1, (macros.size + maxPerPage - 1) / maxPerPage)
        val curPage    = page.coerceIn(0, pageCount - 1)
        val isEditMode = editModeMap[uid] ?: false
        pageMap[uid]   = curPage

        val inv = Bukkit.createInventory(null, 54, comp("&6コマンドマクロ &8| &f${curPage + 1}&8/&f${pageCount}"))

        macros.drop(curPage * maxPerPage).take(maxPerPage).forEachIndexed { i, macro ->
            inv.setItem(i, buildMacroItem(macro, isEditMode))
        }

        // ページボタン
        if (curPage > 0)
            inv.setItem(46, makeItem(Material.ARROW, "&e← 前のページ",
                listOf("&7ページ &f${curPage}&7/&f${pageCount}")))
        if (curPage < pageCount - 1)
            inv.setItem(52, makeItem(Material.ARROW, "&e次のページ →",
                listOf("&7ページ &f${curPage + 2}&7/&f${pageCount}")))

        inv.setItem(45, makeItem(Material.ARROW, "&c← 戻る", listOf("&7メインメニューに戻ります")))

        val maxMacros = plugin.macroManager.getMaxMacros(player)
        val canAdd    = macros.size < maxMacros
        inv.setItem(49, makeItem(
            if (canAdd) Material.NETHER_STAR else Material.GRAY_STAINED_GLASS_PANE,
            if (canAdd) "&a+ 新しいマクロを作成" else "&7マクロ上限 ($maxMacros) に達しています",
            listOf("&7現在: &f${macros.size} &7/ &f$maxMacros")
        ))

        // モード切替ボタン
        if (!isEditMode) {
            inv.setItem(53, makeItem(Material.BOOK, "&7クリック: &a実行モード",
                listOf("&a● 左クリック → 実行", "&7  右クリック → 詳細・編集", "", "&eクリックで &b編集モード &eに切替")))
        } else {
            inv.setItem(53, makeItem(Material.WRITABLE_BOOK, "&7クリック: &b編集モード",
                listOf("&b● 左クリック → 詳細・編集", "&7  右クリック → 実行", "", "&eクリックで &a実行モード &eに切替")))
        }
        return inv
    }

    private fun buildMacroItem(macro: PlayerMacro, isEditMode: Boolean): ItemStack {
        val clickHint = if (!isEditMode)
            listOf("&e左クリック &7→ 実行  &7右クリック → 詳細・編集")
        else
            listOf("&b左クリック &7→ 詳細・編集  &7右クリック → 実行")

        val item = makeItem(Material.COMMAND_BLOCK, "&e${macro.name}", buildList {
            add("&8ID: ${macro.id}")
            add("&7コマンド (${macro.commands.size} 個):")
            macro.commands.take(5).forEach { cmd ->
                add(if (plugin.macroManager.isWaitCommand(cmd)) "&8  ⏱ $cmd" else "&8  $cmd")
            }
            if (macro.commands.size > 5) add("&8  ...他 ${macro.commands.size - 5} 個")
            add(""); add("&eCooldown: &f${macro.cooldownSeconds}秒"); add("")
            addAll(clickHint)
        })
        val meta = item.itemMeta!!
        meta.persistentDataContainer.set(
            org.bukkit.NamespacedKey(plugin, "macro_id"),
            org.bukkit.persistence.PersistentDataType.STRING, macro.id
        )
        item.itemMeta = meta; return item
    }

    private fun buildMacroDetailInventory(player: Player, macro: PlayerMacro): Inventory {
        val inv = Bukkit.createInventory(null, 54, comp("&6マクロ詳細: &e${macro.name}"))

        // 共有済みIDがあるかチェックしてボタンのloreを変える
        val existingShares = plugin.sharedMacroManager.findSharesForMacro(player.uniqueId, macro.name)
        val shareLore = buildList {
            add("&7このマクロを他プレイヤーに共有します")
            if (existingShares.isNotEmpty()) {
                add("")
                add("&b既存の共有ID (${existingShares.size}件):")
                existingShares.take(3).forEach { share ->
                    val date = dateFormat.format(Date(share.createdAt))
                    add("&f  ${share.shareId}  &8[$date]")
                }
                if (existingShares.size > 3) add("&8  ...他 ${existingShares.size - 3} 件")
                add("")
                add("&eクリックで既存IDを再表示 + 新しいIDを発行")
            } else {
                add("")
                add("&eクリックで共有IDを発行")
            }
        }

        inv.setItem(10, makeItem(Material.NAME_TAG, "&a名前を変更",
            listOf("&f${macro.name}", "&8ID: ${macro.id}", "", "&eクリックしてチャットで入力")))
        inv.setItem(12, makeItem(Material.WRITABLE_BOOK, "&b本でコマンドを編集", buildList {
            add("&7現在のコマンド (${macro.commands.size} 個):")
            macro.commands.take(5).forEachIndexed { i, cmd ->
                add(if (plugin.macroManager.isWaitCommand(cmd)) "&8  ${i+1}. ⏱ $cmd" else "&8  ${i+1}. $cmd")
            }
            if (macro.commands.size > 5) add("&8  ...他 ${macro.commands.size - 5} 個")
            add(""); add("&eクリックで本エディタを開く")
        }))
        inv.setItem(14, makeItem(Material.LIME_CONCRETE, "&a▶ 今すぐ実行",
            listOf("&7このマクロを今すぐ実行します")))
        inv.setItem(15, makeItem(Material.PAPER, "&b共有IDを発行", shareLore))
        inv.setItem(16, makeItem(Material.TNT, "&cマクロを削除",
            listOf("&7このマクロを削除します。", "&c取り消しできません。")))
        inv.setItem(49, makeItem(Material.ARROW, "&c← 戻る", listOf("&7マクロ一覧に戻ります")))
        return inv
    }

    // ============================
    // イベントハンドラ
    // ============================

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        val uid    = player.uniqueId.toString()
        if (!activePlayers.contains(uid)) return
        if (event.clickedInventory == player.inventory) { if (event.isShiftClick) event.isCancelled = true; return }
        event.isCancelled = true

        val slot     = event.rawSlot
        val titleStr = LegacyComponentSerializer.legacyAmpersand().serialize(event.view.title())

        if (titleStr.contains("マクロ詳細")) {
            val macroId = getMacroIdFromTitle(titleStr, player)
                ?: run { plugin.logger.warning("MacroEngine: ID逆引き失敗 '$titleStr'"); return }
            handleDetailClick(player, macroId, slot); return
        }

        val isEditMode = editModeMap[uid] ?: false
        when (slot) {
            45 -> {
                player.closeInventory()
                Bukkit.getScheduler().runTaskLater(plugin, Runnable { plugin.menuEngine.openMenu(player, "root") }, 1L)
            }
            46 -> changePage(player, -1)
            49 -> startCreateMacro(player)
            52 -> changePage(player, +1)
            53 -> {
                editModeMap[uid] = !isEditMode
                player.openInventory(buildMacroListInventory(player, pageMap[uid] ?: 0))
                activePlayers.add(uid)
            }
            in 0..44 -> {
                val macros  = plugin.macroManager.getMacros(player.uniqueId)
                val curPage = pageMap[uid] ?: 0
                val macro   = macros.getOrNull(curPage * 45 + slot) ?: return
                when {
                    !isEditMode && event.isLeftClick  -> executeMacro(player, macro)
                    !isEditMode && event.isRightClick -> openDetail(player, macro)
                    isEditMode  && event.isLeftClick  -> openDetail(player, macro)
                    isEditMode  && event.isRightClick -> executeMacro(player, macro)
                }
            }
        }
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        val uid   = (event.player as? Player)?.uniqueId?.toString() ?: return
        activePlayers.remove(uid)
        val title = LegacyComponentSerializer.legacyAmpersand().serialize(event.view.title())
        if (!title.contains("マクロ詳細") && !title.contains("コマンドマクロ")) {
            editModeMap.remove(uid); pageMap.remove(uid)
        }
    }

    @EventHandler(priority = EventPriority.LOWEST)
    fun onChat(event: AsyncPlayerChatEvent) {
        val uuid  = event.player.uniqueId.toString()
        val state = chatInputPlayers[uuid] ?: return
        event.isCancelled = true
        val input  = event.message.trim()
        val player = event.player

        Bukkit.getScheduler().runTask(plugin, Runnable {
            chatInputPlayers.remove(uuid)
            when (state.mode) {
                InputMode.MACRO_NAME -> {
                    if (input.isEmpty() || input.equals("cancel", ignoreCase = true)) {
                        player.sendMessage(c("&eキャンセルしました。")); openMacroList(player); return@Runnable
                    }
                    if (state.macroId == null) {
                        val mcid      = player.name.lowercase()
                        val safeName  = input.lowercase().replace(Regex("[^a-z0-9_\\-]"), "_").take(32)
                        val baseId    = "${mcid}_${safeName}"
                        val existing  = plugin.macroManager.getMacros(player.uniqueId).map { it.id }.toSet()
                        val newId     = generateUniqueId(baseId, existing)
                        val maxMacros = plugin.macroManager.getMaxMacros(player)
                        val err       = plugin.macroManager.addMacro(player.uniqueId, PlayerMacro(
                            id = newId, name = input, ownerUUID = uuid, commands = emptyList()
                        ), maxMacros)
                        if (err != null) { player.sendMessage(c("&c$err")); openMacroList(player); return@Runnable }
                        player.sendMessage(c("&7マクロ名: &f$input &8(ID: $newId)"))
                        Bukkit.getScheduler().runTaskLater(plugin, Runnable { openBookEditor(player, newId) }, 1L)
                    } else {
                        val macro = plugin.macroManager.getMacro(player.uniqueId, state.macroId)
                        if (macro != null) {
                            plugin.macroManager.updateMacro(player.uniqueId, macro.copy(name = input))
                            player.sendMessage(c("&aマクロ名を変更しました: &f$input"))
                        }
                        openMacroList(player)
                    }
                }
                InputMode.COMMAND_ADD -> {
                    val macroId = state.macroId ?: run { openMacroList(player); return@Runnable }
                    if (input.equals("cancel", ignoreCase = true)) {
                        plugin.macroManager.removeMacro(player.uniqueId, macroId)
                        player.sendMessage(c("&eキャンセルしました。")); openMacroList(player); return@Runnable
                    }
                    if (input.equals("done", ignoreCase = true)) {
                        val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
                        if (macro != null && macro.commands.isEmpty()) {
                            plugin.macroManager.removeMacro(player.uniqueId, macroId)
                            player.sendMessage(c("&cコマンドが空のため作成しませんでした。"))
                        } else player.sendMessage(c("&aマクロ「&e${macro?.name}&a」を作成しました。"))
                        openMacroList(player); return@Runnable
                    }
                    // ★ スラッシュを除去せずそのまま保存
                    val cmd = if (plugin.macroManager.isWaitCommand(input)) input else input
                    val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
                    if (macro != null) {
                        val err = plugin.macroManager.updateMacro(player.uniqueId, macro.copy(commands = macro.commands + cmd))
                        if (err != null) player.sendMessage(c("&c$err"))
                        else player.sendMessage(c("&7追加: &f$cmd &7(「done」で完了)"))
                    }
                    chatInputPlayers[uuid] = state
                }
            }
        })
    }

    // ============================
    // 操作ハンドラ
    // ============================

    private fun handleDetailClick(player: Player, macroId: String, slot: Int) {
        val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
            ?: run { openMacroList(player); return }
        when (slot) {
            10 -> {
                player.closeInventory()
                player.sendMessage(c("&7新しいマクロ名を入力してください。(&e「cancel」でキャンセル)"))
                chatInputPlayers[player.uniqueId.toString()] = ChatInputState(InputMode.MACRO_NAME, macroId)
            }
            12 -> { player.closeInventory(); Bukkit.getScheduler().runTaskLater(plugin, Runnable { openBookEditor(player, macroId) }, 1L) }
            14 -> executeMacro(player, macro)
            15 -> handleShare(player, macro)
            16 -> {
                plugin.macroManager.removeMacro(player.uniqueId, macroId)
                player.sendMessage(c("&cマクロ「${macro.name}」を削除しました。"))
                openMacroList(player)
            }
            49 -> openMacroList(player)
        }
    }

    /**
     * 共有ボタンのハンドラ。
     * 既存の共有IDをチャットに表示した後、新しいIDを発行する。
     */
    private fun handleShare(player: Player, macro: PlayerMacro) {
        if (macro.commands.isEmpty()) { player.sendMessage(c("&cコマンドが空のマクロは共有できません。")); return }

        val existing = plugin.sharedMacroManager.findSharesForMacro(player.uniqueId, macro.name)
        if (existing.isNotEmpty()) {
            player.sendMessage(comp("&b--- 既存の共有ID (${macro.name}) ---"))
            existing.take(5).forEach { share ->
                val date = dateFormat.format(Date(share.createdAt))
                player.sendMessage(
                    Component.text("  ").decoration(TextDecoration.ITALIC, false)
                        .append(buildIdComponent(share.shareId))
                        .append(comp("  &8[$date]"))
                )
            }
            if (existing.size > 5) player.sendMessage(comp("  &8...他 ${existing.size - 5} 件"))
            player.sendMessage(comp("&7新しいIDも発行しました:"))
        }

        val shareId = plugin.sharedMacroManager.publishMacro(macro, player.name, player.uniqueId)
            ?: run { player.sendMessage(c("&c共有IDの発行に失敗しました。")); return }

        player.sendMessage(
            Component.text("").decoration(TextDecoration.ITALIC, false)
                .append(comp("&a新しい共有ID: "))
                .append(buildIdComponent(shareId))
                .append(comp("  &7(クリックでコピー)"))
        )
        player.sendMessage(comp("&7相手に &f/macro import $shareId &7と伝えてください。"))
        player.sendMessage(comp("&7過去のID一覧: &f/macro shares"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.5f)

        // 詳細画面を再描画してloreを更新する
        Bukkit.getScheduler().runTaskLater(plugin, Runnable {
            if (activePlayers.contains(player.uniqueId.toString())) {
                player.openInventory(buildMacroDetailInventory(player, macro))
                activePlayers.add(player.uniqueId.toString())
            }
        }, 2L)
    }

    private fun buildIdComponent(shareId: String): Component =
        Component.text(shareId)
            .color(NamedTextColor.GOLD)
            .decoration(TextDecoration.ITALIC, false)
            .decoration(TextDecoration.BOLD, true)
            .clickEvent(ClickEvent.copyToClipboard(shareId))
            .hoverEvent(HoverEvent.showText(
                Component.text("クリックでコピー: $shareId")
                    .color(NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false)
            ))

    private fun executeMacro(player: Player, macro: PlayerMacro) {
        val err = plugin.macroManager.executeMacro(player, macro.id)
        if (err != null) player.sendMessage(c("&c$err"))
        else { player.sendMessage(c("&aマクロ「&e${macro.name}&a」を実行しました。")); player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 1f, 1.2f) }
    }

    private fun openDetail(player: Player, macro: PlayerMacro) {
        player.openInventory(buildMacroDetailInventory(player, macro))
        activePlayers.add(player.uniqueId.toString())
    }

    private fun startCreateMacro(player: Player) {
        val macros    = plugin.macroManager.getMacros(player.uniqueId)
        val maxMacros = plugin.macroManager.getMaxMacros(player)
        if (macros.size >= maxMacros) { player.sendMessage(c("&cマクロの上限 ($maxMacros) に達しています。")); return }
        player.closeInventory()
        player.sendMessage(c("&7マクロ名を入力してください。(&e「cancel」でキャンセル)"))
        player.sendMessage(c("&7ID は &f<あなたのID>_<マクロ名> &7の形式で自動生成されます。"))
        chatInputPlayers[player.uniqueId.toString()] = ChatInputState(InputMode.MACRO_NAME, null)
    }

    private fun changePage(player: Player, delta: Int) {
        val uid       = player.uniqueId.toString()
        val macros    = plugin.macroManager.getMacros(player.uniqueId)
        val pageCount = maxOf(1, (macros.size + 44) / 45)
        val curPage   = pageMap[uid] ?: 0
        val newPage   = (curPage + delta).coerceIn(0, pageCount - 1)
        if (newPage == curPage) return
        pageMap[uid] = newPage
        player.openInventory(buildMacroListInventory(player, newPage))
        activePlayers.add(uid)
    }

    // ============================
    // ユーティリティ
    // ============================

    private fun getMacroIdFromTitle(title: String, player: Player): String? {
        val macroName = title.substringAfter("マクロ詳細: ").trim()
            .replace("&[0-9a-fk-orA-FK-OR]".toRegex(), "")
        return plugin.macroManager.getMacros(player.uniqueId).find { it.name == macroName }?.id
    }

    private fun generateUniqueId(baseId: String, existing: Set<String>): String {
        if (!existing.contains(baseId)) return baseId
        var counter = 2
        while (existing.contains("${baseId}_$counter")) counter++
        return "${baseId}_$counter"
    }

    private fun splitIntoPages(text: String, maxChars: Int): List<String> {
        if (text.length <= maxChars) return listOf(text)
        val pages = mutableListOf<String>()
        var remaining = text
        while (remaining.isNotEmpty()) {
            if (remaining.length <= maxChars) { pages.add(remaining); break }
            val cutAt = remaining.lastIndexOf('\n', maxChars - 1).takeIf { it > 0 } ?: maxChars
            pages.add(remaining.substring(0, cutAt))
            remaining = remaining.substring(cutAt).trimStart('\n')
        }
        return pages
    }
}