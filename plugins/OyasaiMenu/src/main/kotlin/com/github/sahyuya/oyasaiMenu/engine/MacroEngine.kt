package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PlayerMacro
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.makeItem
import java.text.SimpleDateFormat
import java.util.Date
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.AsyncPlayerChatEvent
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import org.bukkit.persistence.PersistentDataType

/**
 * MacroEngine
 *
 * ■ 変更点
 * - マクロ実行本の追加 詳細画面 slot 17「実行本を入手」ボタン → WRITTEN_BOOK を生成して配布 本の PDC に macro_book_id を保存
 *   PlayerInteractEvent で右クリックを検知してマクロ実行 スニーク+右クリックは通常通り本を開く
 */
class MacroEngine(private val plugin: OyasaiMenu) : Listener {

  private data class ChatInputState(
      val mode: InputMode,
      val macroId: String?,
      val returnPage: Int = 0,
      val returnEditMode: Boolean = false,
  )

  private enum class InputMode {
    MACRO_NAME,
    COMMAND_ADD,
  }

  private val chatInputPlayers: MutableMap<String, ChatInputState> = ConcurrentHashMap()

  private data class BookEditorState(val macroId: String?, val slot: Int)

  private val bookEditorPending: MutableMap<UUID, BookEditorState> = ConcurrentHashMap()

  /** マクロ実行本の PDC キー */
  private val macroBoodIdKey = NamespacedKey(plugin, "macro_book_id")

  private val plainText = PlainTextComponentSerializer.plainText()
  private val dateFormat = SimpleDateFormat("MM/dd HH:mm")

  private class MacroListHolder(val page: Int, val isEditMode: Boolean) : InventoryHolder {
    private lateinit var backingInventory: Inventory

    fun attach(inventory: Inventory) {
      backingInventory = inventory
    }

    override fun getInventory(): Inventory = backingInventory
  }

  private class MacroDetailHolder(
      val macroId: String,
      val listPage: Int,
      val listEditMode: Boolean,
  ) : InventoryHolder {
    private lateinit var backingInventory: Inventory

    fun attach(inventory: Inventory) {
      backingInventory = inventory
    }

    override fun getInventory(): Inventory = backingInventory
  }

  // ============================
  // マクロ一覧を開く
  // ============================

  fun openMacroList(player: Player) {
    when (val holder = player.openInventory.topInventory.holder) {
      is MacroListHolder -> openMacroList(player, holder.page, holder.isEditMode)
      is MacroDetailHolder -> openMacroList(player, holder.listPage, holder.listEditMode)
      else -> openMacroList(player, 0, false)
    }
  }

  private fun openMacroList(player: Player, page: Int, isEditMode: Boolean) {
    if (!player.hasPermission("oyasaimenu.macro")) {
      player.sendMessage(c("&cこのコマンドを使う権限がありません。"))
      return
    }
    player.openInventory(buildMacroListInventory(player, page, isEditMode))
  }

  // ============================
  // 本エディタ — 新規作成
  // ============================

  private fun openBookEditor(
      player: Player,
      macroId: String,
      currentCommands: List<String>? = null,
      preferredSlot: Int? = null,
  ) {
    val book = ItemStack(Material.WRITABLE_BOOK)
    val meta = book.itemMeta as BookMeta
    val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)

    val commandsToUse = currentCommands ?: macro?.commands

    if (!commandsToUse.isNullOrEmpty()) {
      val content = commandsToUse.joinToString("\n")
      splitIntoPages(content, 254).forEach { meta.addPages(Component.text(it)) }
    } else {
      meta.addPages(
          Component.text(
              "コマンドを1行ずつ入力\n\n" +
                  "改行でコマンドを区切ります\n" +
                  "スラッシュなし→チャット発言\n\n" +
                  "wait 1.0s で遅延も可\n\n" +
                  "完了 で確定"
          )
      )
    }
    book.itemMeta = meta

    var slot = preferredSlot
    if (slot != null) {
      val currentItem = player.inventory.getItem(slot)
      if (currentItem != null && !currentItem.type.isAir) {
        slot = null
      }
    }
    if (slot == null) {
      slot = player.inventory.firstEmpty().takeIf { it >= 0 } ?: 8
    }

    player.inventory.setItem(slot, book)
    player.inventory.heldItemSlot = slot
    bookEditorPending[player.uniqueId] = BookEditorState(macroId, slot)

    if (currentCommands == null) {
      player.sendMessage(c("&b=== マクロ本エディタ ===  完了 で確定"))
    } else {
      player.sendMessage(c("&e内容を修正して再度 完了 を押してください。"))
    }
  }

  // ============================
  // PlayerEditBookEvent
  // ============================

  @EventHandler
  fun onPlayerEditBook(event: PlayerEditBookEvent) {
    val uuid = event.player.uniqueId
    val edState = bookEditorPending.remove(uuid) ?: return
    val macroId = edState.macroId ?: return
    val meta = event.newBookMeta

    val commands =
        meta
            .pages()
            .joinToString("\n") { plainText.serialize(it) }
            .split("\n")
            .map { it.trim() }
            .filter { it.isNotEmpty() }

    if (event.isSigning) event.isCancelled = true
    removeBook(event.player, edState.slot)

    if (commands.isEmpty()) {
      event.player.sendMessage(c("&cコマンドが空です。変更を破棄しました。"))
      return
    }

    val macro =
        plugin.macroManager.getMacro(event.player.uniqueId, macroId)
            ?: run {
              event.player.sendMessage(c("&cマクロが見つかりません。"))
              return
            }

    if (commands == macro.commands) {
      event.player.sendMessage(c("&7変更がなかったため保存しませんでした。"))
      return
    }

    val err =
        plugin.macroManager.updateMacro(
            event.player.uniqueId,
            macro.copy(commands = commands),
            event.player,
        )
    if (err != null) {
      event.player.sendMessage(c("&c$err"))
      Bukkit.getScheduler()
          .runTaskLater(
              plugin,
              Runnable { openBookEditor(event.player, macroId, commands, edState.slot) },
              5L,
          )
    } else {
      event.player.sendMessage(c("&aマクロ「&e${macro.name}&a」を更新しました。&f${commands.size}&a個"))
      commands.take(5).forEachIndexed { i, cmd ->
        event.player.sendMessage(
            c("  &7${i+1}. ${if (plugin.macroManager.isWaitCommand(cmd)) "⏱ $cmd" else cmd}")
        )
      }
      if (commands.size > 5) event.player.sendMessage(c("  &7...他 ${commands.size - 5} 個"))
    }
  }

  private fun removeBook(player: Player, slot: Int) {
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          val atSlot = player.inventory.getItem(slot)
          if (
              atSlot != null &&
                  (atSlot.type == Material.WRITABLE_BOOK || atSlot.type == Material.WRITTEN_BOOK)
          ) {
            player.inventory.setItem(slot, null)
            return@Runnable
          }
          for (i in 0 until player.inventory.size) {
            val item = player.inventory.getItem(i) ?: continue
            if (item.type == Material.WRITABLE_BOOK || item.type == Material.WRITTEN_BOOK) {
              player.inventory.setItem(i, null)
              break
            }
          }
        },
        3L,
    )
  }

  // ============================
  // マクロ実行本
  // ============================

  private fun createMacroBook(player: Player, macro: PlayerMacro): ItemStack {
    val book = ItemStack(Material.WRITTEN_BOOK)
    val meta = (book.itemMeta as? BookMeta) ?: return book
    meta.setTitle(macro.name.ifEmpty { "Untitled" })
    meta.setAuthor(player.name)
    meta.generation = BookMeta.Generation.ORIGINAL

    meta.displayName(comp("&6▶ &e${macro.name} &8(&7マクロ実行本&8)"))
    meta.lore(
        listOf(
            comp("&7右クリック &8→ &aマクロ実行"),
            comp("&7Shift+右クリック &8→ &f内容を開く"),
            comp("&8ID: ${macro.id}"),
        )
    )

    val overview =
        "▶ マクロ実行本\n\n" +
            "名前: ${macro.name}\n" +
            "コマンド: ${macro.commands.size}個\n\n" +
            "右クリック → 実行\n" +
            "Shift+右クリック → 内容確認"
    meta.addPages(Component.text(overview))

    val commandLines = macro.commands.mapIndexed { i, cmd -> "${i + 1}. $cmd" }.joinToString("\n")
    splitIntoPages(commandLines, 240).forEach { page -> meta.addPages(Component.text(page)) }

    meta.persistentDataContainer.set(macroBoodIdKey, PersistentDataType.STRING, macro.id)

    book.itemMeta = meta
    return book
  }

  private fun giveMacroBook(player: Player, macro: PlayerMacro) {
    val book = createMacroBook(player, macro)
    val leftover = player.inventory.addItem(book)
    if (leftover.isEmpty()) {
      player.sendMessage(c("&a実行本を入手しました: &e${macro.name}"))
    } else {
      player.world.dropItemNaturally(player.location, book)
      player.sendMessage(c("&eインベントリが満杯のため足元にドロップしました: &f${macro.name}"))
    }
    player.playSound(player.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1f, 1.2f)
  }

  @EventHandler
  fun onPlayerInteract(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_AIR && event.action != Action.RIGHT_CLICK_BLOCK) return
    val item = event.item ?: return
    if (item.type != Material.WRITTEN_BOOK) return
    val meta = item.itemMeta ?: return
    val macroId =
        meta.persistentDataContainer.get(macroBoodIdKey, PersistentDataType.STRING) ?: return

    if (event.player.isSneaking) return

    event.isCancelled = true
    val player = event.player
    val err = plugin.macroManager.executeMacro(player, macroId)

    if (err != null) {
      if (err.isNotEmpty()) {
        player.sendMessage(c("&c$err"))
      }
    } else {
      val macroName = plugin.macroManager.getMacro(player.uniqueId, macroId)?.name ?: macroId
      player.sendMessage(c("&aマクロ「&e$macroName&a」を実行しました。"))
      player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 1f, 1.2f)
    }
  }

  // ============================
  // インベントリ構築
  // ============================

  private fun buildMacroListInventory(player: Player, page: Int, isEditMode: Boolean): Inventory {
    val macros = plugin.macroManager.getMacros(player.uniqueId)
    val maxPerPage = 45
    val pageCount = maxOf(1, (macros.size + maxPerPage - 1) / maxPerPage)
    val curPage = page.coerceIn(0, pageCount - 1)

    val holder = MacroListHolder(curPage, isEditMode)
    val inv =
        Bukkit.createInventory(holder, 54, comp("&6コマンドマクロ &8| &f${curPage + 1}&8/&f${pageCount}"))
    holder.attach(inv)

    macros.drop(curPage * maxPerPage).take(maxPerPage).forEachIndexed { i, macro ->
      inv.setItem(i, buildMacroItem(macro, isEditMode))
    }

    if (curPage > 0)
        inv.setItem(
            46,
            makeItem(Material.ARROW, "&e← 前のページ", listOf("&7ページ &f${curPage}&7/&f${pageCount}")),
        )
    if (curPage < pageCount - 1)
        inv.setItem(
            52,
            makeItem(Material.ARROW, "&e次のページ →", listOf("&7ページ &f${curPage + 2}&7/&f${pageCount}")),
        )

    inv.setItem(45, makeItem(Material.ARROW, "&c← 戻る", listOf("&7メインメニューに戻ります")))

    val maxMacros = plugin.macroManager.getMaxMacros(player)
    val maxCmds = plugin.macroManager.getMaxCommands(player)
    val canAdd = macros.size < maxMacros
    inv.setItem(
        49,
        makeItem(
            if (canAdd) Material.NETHER_STAR else Material.GRAY_STAINED_GLASS_PANE,
            if (canAdd) "&a+ 新しいマクロを作成" else "&7マクロ上限 ($maxMacros) に達しています",
            listOf("&7現在: &f${macros.size} &7/ &f$maxMacros", "&7コマンド上限: &f$maxCmds 個/マクロ"),
        ),
    )

    if (!isEditMode) {
      inv.setItem(
          53,
          makeItem(
              Material.BOOK,
              "&7クリック: &a実行モード",
              listOf("&a● 左クリック → 実行", "&7  右クリック → 詳細・編集", "", "&eクリックで &b編集モード &eに切替"),
          ),
      )
    } else {
      inv.setItem(
          53,
          makeItem(
              Material.WRITABLE_BOOK,
              "&7クリック: &b編集モード",
              listOf("&b● 左クリック → 詳細・編集", "&7  右クリック → 実行", "", "&eクリックで &a実行モード &eに切替"),
          ),
      )
    }
    return inv
  }

  private fun buildMacroItem(macro: PlayerMacro, isEditMode: Boolean): ItemStack {
    val clickHint =
        if (!isEditMode) listOf("&e左クリック &7→ 実行  &7右クリック → 詳細・編集")
        else listOf("&b左クリック &7→ 詳細・編集  &7右クリック → 実行")

    val item =
        makeItem(
            Material.COMMAND_BLOCK,
            "&e${macro.name}",
            buildList {
              add("&8ID: ${macro.id}")
              add("&7コマンド (${macro.commands.size} 個):")
              macro.commands.take(5).forEach { cmd ->
                add(if (plugin.macroManager.isWaitCommand(cmd)) "&8  ⏱ $cmd" else "&8  $cmd")
              }
              if (macro.commands.size > 5) add("&8  ...他 ${macro.commands.size - 5} 個")
              add("")
              add("&eCooldown: &f${macro.cooldownSeconds}秒")
              add("")
              addAll(clickHint)
            },
        )
    val meta = item.itemMeta!!
    meta.persistentDataContainer.set(
        NamespacedKey(plugin, "macro_id"),
        PersistentDataType.STRING,
        macro.id,
    )
    item.itemMeta = meta
    return item
  }

  private fun buildMacroDetailInventory(
      player: Player,
      macro: PlayerMacro,
      listPage: Int,
      listEditMode: Boolean,
  ): Inventory {
    val holder = MacroDetailHolder(macro.id, listPage, listEditMode)
    val inv = Bukkit.createInventory(holder, 54, comp("&6マクロ詳細: &e${macro.name}"))
    holder.attach(inv)

    val existingShares = plugin.sharedMacroManager.findSharesForMacro(player.uniqueId, macro.name)
    val shareLore = buildList {
      add("&7このマクロを他プレイヤーに共有します")
      if (existingShares.isNotEmpty()) {
        add("")
        add("&b既存の共有ID (${existingShares.size}件):")
        existingShares.take(3).forEach { share ->
          add("&f  ${share.shareId}  &8[${dateFormat.format(Date(share.createdAt))}]")
        }
        if (existingShares.size > 3) add("&8  ...他 ${existingShares.size - 3} 件")
        add("")
        add("&eクリックで既存IDを再表示 + 新しいIDを発行")
      } else {
        add("")
        add("&eクリックで共有IDを発行")
      }
    }

    inv.setItem(
        10,
        makeItem(
            Material.NAME_TAG,
            "&a名前を変更",
            listOf("&f${macro.name}", "&8ID: ${macro.id}", "", "&eクリックしてチャットで入力"),
        ),
    )
    inv.setItem(
        11,
        makeItem(
            Material.WRITABLE_BOOK,
            "&b本でコマンドを編集",
            buildList {
              add("&7現在のコマンド (${macro.commands.size} 個):")
              macro.commands.take(5).forEachIndexed { i, cmd ->
                add(
                    if (plugin.macroManager.isWaitCommand(cmd)) "&8  ${i+1}. ⏱ $cmd"
                    else "&8  ${i+1}. $cmd"
                )
              }
              if (macro.commands.size > 5) add("&8  ...他 ${macro.commands.size - 5} 個")
              add("")
              add("&eクリックで本エディタを開く")
            },
        ),
    )
    inv.setItem(13, makeItem(Material.LIME_CONCRETE, "&a▶ 今すぐ実行", listOf("&7このマクロを今すぐ実行します")))
    inv.setItem(15, makeItem(Material.PAPER, "&b共有IDを発行", shareLore))
    inv.setItem(
        16,
        makeItem(
            Material.WRITTEN_BOOK,
            "&6実行本を入手",
            listOf("&7右クリックでマクロを実行する本を入手します", "&8Shift+右クリックで内容を開く", "", "&eクリックで入手"),
        ),
    )
    inv.setItem(43, makeItem(Material.TNT, "&cマクロを削除", listOf("&7このマクロを削除します。", "&c取り消しできません。")))
    inv.setItem(37, makeItem(Material.ARROW, "&c← 戻る", listOf("&7マクロ一覧に戻ります")))
    return inv
  }

  // ============================
  // イベントハンドラ (GUI)
  // ============================

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val holder = event.view.topInventory.holder
    if (holder !is MacroListHolder && holder !is MacroDetailHolder) return
    if (event.clickedInventory == player.inventory) {
      if (event.isShiftClick) event.isCancelled = true
      return
    }
    event.isCancelled = true

    val slot = event.rawSlot

    if (holder is MacroDetailHolder) {
      handleDetailClick(player, holder, slot)
      return
    }

    val listHolder = holder as MacroListHolder
    val isEditMode = listHolder.isEditMode
    when (slot) {
      45 -> {
        player.closeInventory()
        Bukkit.getScheduler()
            .runTaskLater(plugin, Runnable { plugin.menuEngine.openMenu(player, "root") }, 1L)
      }
      46 -> changePage(player, listHolder, -1)
      49 -> startCreateMacro(player, listHolder)
      52 -> changePage(player, listHolder, +1)
      53 -> {
        player.openInventory(buildMacroListInventory(player, listHolder.page, !isEditMode))
      }
      in 0..44 -> {
        val macros = plugin.macroManager.getMacros(player.uniqueId)
        val macro = macros.getOrNull(listHolder.page * 45 + slot) ?: return
        when {
          !isEditMode && event.isLeftClick -> executeMacro(player, macro)
          !isEditMode && event.isRightClick -> openDetail(player, macro, listHolder)
          isEditMode && event.isLeftClick -> openDetail(player, macro, listHolder)
          isEditMode && event.isRightClick -> executeMacro(player, macro)
        }
      }
    }
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun onChat(event: AsyncPlayerChatEvent) {
    val uuid = event.player.uniqueId.toString()
    val state = chatInputPlayers[uuid] ?: return
    event.isCancelled = true
    val input = event.message.trim()
    val player = event.player

    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              chatInputPlayers.remove(uuid)
              when (state.mode) {
                InputMode.MACRO_NAME -> {
                  if (input.isEmpty() || input.equals("cancel", ignoreCase = true)) {
                    player.sendMessage(c("&eキャンセルしました。"))
                    openMacroList(player, state.returnPage, state.returnEditMode)
                    return@Runnable
                  }
                  if (state.macroId == null) {
                    val mcid = player.name.lowercase()
                    val safeName = input.lowercase().replace(Regex("[^a-z0-9_\\-]"), "_").take(32)
                    val baseId = "${mcid}_${safeName}"
                    val existing =
                        plugin.macroManager.getMacros(player.uniqueId).map { it.id }.toSet()
                    val newId = generateUniqueId(baseId, existing)
                    val maxMacros = plugin.macroManager.getMaxMacros(player)
                    val err =
                        plugin.macroManager.addMacro(
                            player.uniqueId,
                            PlayerMacro(
                                id = newId,
                                name = input,
                                ownerUUID = uuid,
                                commands = emptyList(),
                            ),
                            maxMacros,
                            player,
                        )
                    if (err != null) {
                      player.sendMessage(c("&c$err"))
                      openMacroList(player, state.returnPage, state.returnEditMode)
                      return@Runnable
                    }
                    player.sendMessage(c("&7マクロ名: &f$input &8(ID: $newId)"))
                    Bukkit.getScheduler()
                        .runTaskLater(plugin, Runnable { openBookEditor(player, newId) }, 1L)
                  } else {
                    val macro = plugin.macroManager.getMacro(player.uniqueId, state.macroId)
                    if (macro != null) {
                      plugin.macroManager.updateMacro(player.uniqueId, macro.copy(name = input))
                      player.sendMessage(c("&aマクロ名を変更しました: &f$input"))
                    }
                    openMacroList(player, state.returnPage, state.returnEditMode)
                  }
                }
                InputMode.COMMAND_ADD -> {
                  val macroId =
                      state.macroId
                          ?: run {
                            openMacroList(player, state.returnPage, state.returnEditMode)
                            return@Runnable
                          }
                  if (input.equals("cancel", ignoreCase = true)) {
                    plugin.macroManager.removeMacro(player.uniqueId, macroId)
                    player.sendMessage(c("&eキャンセルしました。"))
                    openMacroList(player, state.returnPage, state.returnEditMode)
                    return@Runnable
                  }
                  if (input.equals("done", ignoreCase = true)) {
                    val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
                    if (macro != null && macro.commands.isEmpty()) {
                      plugin.macroManager.removeMacro(player.uniqueId, macroId)
                      player.sendMessage(c("&cコマンドが空のため作成しませんでした。"))
                    } else player.sendMessage(c("&aマクロ「&e${macro?.name}&a」を作成しました。"))
                    openMacroList(player, state.returnPage, state.returnEditMode)
                    return@Runnable
                  }
                  val macro = plugin.macroManager.getMacro(player.uniqueId, macroId)
                  if (macro != null) {
                    val err =
                        plugin.macroManager.updateMacro(
                            player.uniqueId,
                            macro.copy(commands = macro.commands + input.trim()),
                            player,
                        )
                    if (err != null) player.sendMessage(c("&c$err"))
                    else player.sendMessage(c("&7追加: &f${input.trim()} &7(「完了」で確定)"))
                  }
                  chatInputPlayers[uuid] = state
                }
              }
            },
        )
  }

  // ============================
  // 操作ハンドラ
  // ============================

  private fun handleDetailClick(player: Player, holder: MacroDetailHolder, slot: Int) {
    val macroId = holder.macroId
    val macro =
        plugin.macroManager.getMacro(player.uniqueId, macroId)
            ?: run {
              openMacroList(player, holder.listPage, holder.listEditMode)
              return
            }
    when (slot) {
      10 -> {
        player.closeInventory()
        player.sendMessage(c("&7新しいマクロ名を入力してください。(「&ecancel&7」でキャンセル)"))
        chatInputPlayers[player.uniqueId.toString()] =
            ChatInputState(InputMode.MACRO_NAME, macroId, holder.listPage, holder.listEditMode)
      }
      11 -> {
        player.closeInventory()
        Bukkit.getScheduler().runTaskLater(plugin, Runnable { openBookEditor(player, macroId) }, 1L)
      }
      13 -> executeMacro(player, macro)
      15 -> handleShare(player, macro)
      16 -> {
        player.closeInventory()
        Bukkit.getScheduler().runTaskLater(plugin, Runnable { giveMacroBook(player, macro) }, 1L)
      }
      43 -> {
        plugin.macroManager.removeMacro(player.uniqueId, macroId)
        player.sendMessage(c("&cマクロ「${macro.name}」を削除しました。"))
        openMacroList(player, holder.listPage, holder.listEditMode)
      }
      37 -> openMacroList(player, holder.listPage, holder.listEditMode)
    }
  }

  private fun handleShare(player: Player, macro: PlayerMacro) {
    if (macro.commands.isEmpty()) {
      player.sendMessage(c("&cコマンドが空のマクロは共有できません。"))
      return
    }

    val existing = plugin.sharedMacroManager.findSharesForMacro(player.uniqueId, macro.name)
    if (existing.isNotEmpty()) {
      player.sendMessage(comp("&b--- 既存の共有ID (${macro.name}) ---"))
      existing.take(5).forEach { share ->
        player.sendMessage(
            Component.text("  ")
                .decoration(TextDecoration.ITALIC, false)
                .append(buildIdComponent(share.shareId))
                .append(comp("  &8[${dateFormat.format(Date(share.createdAt))}]"))
        )
      }
      if (existing.size > 5) player.sendMessage(comp("  &8...他 ${existing.size - 5} 件"))
      player.sendMessage(comp("&7新しいIDも発行しました:"))
    }

    val shareId =
        plugin.sharedMacroManager.publishMacro(macro, player.name, player.uniqueId)
            ?: run {
              player.sendMessage(c("&c共有IDの発行に失敗しました。"))
              return
            }

    player.sendMessage(
        Component.text("")
            .decoration(TextDecoration.ITALIC, false)
            .append(comp("&a新しい共有ID: "))
            .append(buildIdComponent(shareId))
            .append(comp("  &7(クリックでコピー)"))
    )
    player.sendMessage(comp("&7共有先は &f/macro import $shareId &7で取り込めます。"))
    player.sendMessage(comp("&7過去のID一覧: &f/macro shares"))
    player.playSound(player.location, org.bukkit.Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.5f)

    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              val holder = player.openInventory.topInventory.holder as? MacroDetailHolder
              if (holder != null && holder.macroId == macro.id) {
                player.openInventory(
                    buildMacroDetailInventory(player, macro, holder.listPage, holder.listEditMode)
                )
              }
            },
            2L,
        )
  }

  private fun buildIdComponent(shareId: String): Component =
      Component.text(shareId)
          .color(NamedTextColor.GOLD)
          .decoration(TextDecoration.ITALIC, false)
          .decoration(TextDecoration.BOLD, true)
          .clickEvent(ClickEvent.copyToClipboard(shareId))
          .hoverEvent(
              HoverEvent.showText(
                  Component.text("クリックでコピー: $shareId")
                      .color(NamedTextColor.GRAY)
                      .decoration(TextDecoration.ITALIC, false)
              )
          )

  private fun executeMacro(player: Player, macro: PlayerMacro) {
    val err = plugin.macroManager.executeMacro(player, macro.id)

    if (err != null) {
      if (err.isNotEmpty()) {
        player.sendMessage(c("&c$err"))
      }
    } else {
      player.sendMessage(c("&aマクロ「&e${macro.name}&a」を実行しました。"))
      player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 1f, 1.2f)
    }
  }

  private fun openDetail(player: Player, macro: PlayerMacro, holder: MacroListHolder) {
    player.openInventory(buildMacroDetailInventory(player, macro, holder.page, holder.isEditMode))
  }

  private fun startCreateMacro(player: Player, holder: MacroListHolder) {
    val macros = plugin.macroManager.getMacros(player.uniqueId)
    val maxMacros = plugin.macroManager.getMaxMacros(player)
    if (macros.size >= maxMacros) {
      player.sendMessage(c("&cマクロの上限 ($maxMacros) に達しています。"))
      return
    }
    player.closeInventory()
    player.sendMessage(c("&7マクロ名を入力してください。(「&ecancel&7」でキャンセル)"))
    player.sendMessage(c("&7ID は &f<あなたのID>_<マクロ名> &7の形式で自動生成されます。"))
    chatInputPlayers[player.uniqueId.toString()] =
        ChatInputState(InputMode.MACRO_NAME, null, holder.page, holder.isEditMode)
  }

  private fun changePage(player: Player, holder: MacroListHolder, delta: Int) {
    val macros = plugin.macroManager.getMacros(player.uniqueId)
    val pageCount = maxOf(1, (macros.size + 44) / 45)
    val curPage = holder.page
    val newPage = (curPage + delta).coerceIn(0, pageCount - 1)
    if (newPage == curPage) return
    player.openInventory(buildMacroListInventory(player, newPage, holder.isEditMode))
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
      if (remaining.length <= maxChars) {
        pages.add(remaining)
        break
      }
      val cutAt = remaining.lastIndexOf('\n', maxChars - 1).takeIf { it > 0 } ?: maxChars
      pages.add(remaining.substring(0, cutAt))
      remaining = remaining.substring(cutAt).trimStart('\n')
    }
    return pages
  }
}
