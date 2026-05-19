package com.github.sahyuya.oyasaiMenu.guimaker

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class GuiMakerCommand(private val plugin: OyasaiMenu, private val engine: GuiEditorEngine) :
    CommandExecutor, TabCompleter {

  companion object {
    private val ROOT_SUBCOMMANDS =
        listOf("hub", "new", "edit", "list", "popup", "special", "ui", "template", "help")
    private val EDIT_SUBCOMMANDS =
        listOf(
            "canvas",
            "preview",
            "commit",
            "revert",
            "info",
            "discard",
            "title",
            "name",
            "lore",
            "clearlore",
            "perm",
            "action",
            "clearactions",
            "clearslot")
    private val MENU_ID_PATTERN = Regex("[a-zA-Z0-9_.-]+(?:/[a-zA-Z0-9_.-]+)*")
    private val POPUP_ID_PATTERN = Regex("[a-zA-Z0-9_.-]+")
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("このコマンドはプレイヤーのみ使用できます。")
      return true
    }
    if (!sender.isOp) {
      sender.sendMessage(comp("&cこのコマンドはOPのみ使用できます。"))
      return true
    }

    when (args.getOrNull(0)?.lowercase()) {
      "hub" -> engine.openHub(sender)
      "new" -> handleNew(sender, args)
      "edit" -> handleEdit(sender, args)
      "list" -> handleList(sender)
      "popup" -> handlePopup(sender, args)
      "special" -> engine.openSpecialSurfaceHub(sender)
      "ui" -> handleUi(sender, args)
      "template" -> handleTemplate(sender, args)
      "help" -> printHelp(sender)
      null -> engine.openHub(sender)
      else -> printHelp(sender)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    if (!sender.isOp) return emptyList()
    if (args.size == 1) return ROOT_SUBCOMMANDS.filter { it.startsWith(args[0], ignoreCase = true) }

    if (args[0].equals("edit", ignoreCase = true)) {
      if (args.size == 2) {
        return GuiMakerExporter.listMenuIds(plugin).filter {
          it.startsWith(args[1], ignoreCase = true)
        }
      }
      if (args.size == 3) {
        return EDIT_SUBCOMMANDS.filter { it.startsWith(args[2], ignoreCase = true) }
      }
      if (args.size == 5 && args[2].equals("action", ignoreCase = true)) {
        return GuiActionCatalog.types.filter { it.startsWith(args[4], ignoreCase = true) }
      }
    }
    if (args[0].equals("ui", ignoreCase = true)) {
      if (args.size == 2)
          return listOf("edit", "list", "silent").filter {
            it.startsWith(args[1], ignoreCase = true)
          }
      if (args.size == 3 && args[1].equals("edit", ignoreCase = true)) {
        return engine.uiScreenNames().filter { it.startsWith(args[2], ignoreCase = true) }
      }
    }
    if (args[0].equals("popup", ignoreCase = true)) {
      if (args.size == 2)
          return listOf("list", "edit", "new", "set").filter {
            it.startsWith(args[1], ignoreCase = true)
          }
      if (args.size == 3 && args[1].equals("edit", ignoreCase = true)) {
        return GuiMakerExporter.listPopupIds(plugin).filter {
          it.startsWith(args[2], ignoreCase = true)
        }
      }
      if (args.size == 4 && args[1].equals("set", ignoreCase = true)) {
        return listOf("glass", "nav_active", "title").filter {
          it.startsWith(args[3], ignoreCase = true)
        }
      }
    }
    if (args[0].equals("template", ignoreCase = true)) {
      if (args.size == 2)
          return listOf("approve").filter { it.startsWith(args[1], ignoreCase = true) }
      if (args.size == 3 && args[1].equals("approve", ignoreCase = true)) {
        return Bukkit.getOnlinePlayers()
            .map { it.name }
            .filter { it.startsWith(args[2], ignoreCase = true) }
      }
      if (args.size == 4 && args[1].equals("approve", ignoreCase = true)) {
        return listOf("menu", "block").filter { it.startsWith(args[3], ignoreCase = true) }
      }
    }
    return emptyList()
  }

  private fun handleNew(sender: Player, args: Array<String>) {
    val menuId =
        args.getOrNull(1)
            ?: run {
              sender.sendMessage(comp("&c使用方法: /guimaker new <menu-id>"))
              return
            }
    if (!validateMenuId(sender, menuId)) return
    if (!validateEditableMenuId(sender, menuId)) return

    val session = engine.newSession(sender, menuId)
    engine.openCanvas(sender, session)
    sender.sendMessage(comp("&e[GuiMaker] &a新規メニュー '&f$menuId&a' を作成しました。"))
  }

  private fun handlePopup(sender: Player, args: Array<String>) {
    when (args.getOrNull(1)?.lowercase()) {
      null,
      "list" -> engine.openPopupMenuList(sender)
      "edit" -> {
        val popupId =
            args.getOrNull(2)
                ?: run {
                  sender.sendMessage(comp("&c使用方法: /guimaker popup edit <popup-id>"))
                  return
                }
        if (!validatePopupId(sender, popupId)) return
        val session =
            PopupMenuAdapter.load(plugin, popupId)
                ?: run {
                  sender.sendMessage(
                      comp("&cPopup '$popupId' が見つかりません。新規作成は /guimaker popup new $popupId です。"))
                  return
                }
        engine.sessions[sender.uniqueId] = session
        engine.openCanvas(sender, session)
        sender.sendMessage(comp("&e[GuiMaker] &aPopup '&f$popupId&a' を専用エディタで開きました。"))
      }
      "new" -> {
        val popupId =
            args.getOrNull(2)
                ?: run {
                  sender.sendMessage(comp("&c使用方法: /guimaker popup new <popup-id>"))
                  return
                }
        if (!validatePopupId(sender, popupId)) return
        val session = PopupMenuAdapter.newSession(plugin, popupId)
        engine.sessions[sender.uniqueId] = session
        engine.openCanvas(sender, session)
        sender.sendMessage(comp("&e[GuiMaker] &a新規Popup '&f$popupId&a' を作成しました。"))
      }
      "set" -> handlePopupSet(sender, args)
      else -> {
        sender.sendMessage(comp("&e[GuiMaker] Popup編集"))
        sender.sendMessage(comp("&7/guimaker popup list"))
        sender.sendMessage(comp("&7/guimaker popup edit <id>"))
        sender.sendMessage(comp("&7/guimaker popup new <id>"))
        sender.sendMessage(comp("&7/guimaker popup set <id> glass|nav_active|title <value>"))
      }
    }
  }

  private fun handlePopupSet(sender: Player, args: Array<String>) {
    val popupId =
        args.getOrNull(2)
            ?: run {
              sender.sendMessage(
                  comp("&c使用方法: /guimaker popup set <id> glass|nav_active|title <value>"))
              return
            }
    if (!validatePopupId(sender, popupId)) return
    val field = args.getOrNull(3)?.lowercase()
    val value = args.drop(4).joinToString(" ")
    if (field == null || value.isBlank()) {
      sender.sendMessage(comp("&c使用方法: /guimaker popup set <id> glass|nav_active|title <value>"))
      return
    }
    val session =
        PopupMenuAdapter.load(plugin, popupId)
            ?: run {
              sender.sendMessage(comp("&cPopup '$popupId' が見つかりません。"))
              return
            }
    val meta = session.popupMeta ?: PopupEditorMeta().also { session.popupMeta = it }
    when (field) {
      "glass" -> meta.glass = value.uppercase()
      "nav_active" -> meta.navActive = value.toIntOrNull() ?: -1
      "title" -> session.menuTitle = value
      else -> {
        sender.sendMessage(comp("&c不明なPopup設定です: &f$field"))
        return
      }
    }
    engine.sessions[sender.uniqueId] = session
    GuiMakerExporter.exportDraft(plugin, session)
    sender.sendMessage(comp("&e[GuiMaker] &aPopup設定をドラフト保存しました: &f${session.displayId}"))
  }

  private fun handleEdit(sender: Player, args: Array<String>) {
    val menuId =
        args.getOrNull(1)
            ?: run {
              sender.sendMessage(comp("&c使用方法: /guimaker edit <menu-id> [操作]"))
              return
            }
    if (!validateMenuId(sender, menuId)) return
    if (!validateEditableMenuId(sender, menuId)) return

    val operation = args.getOrNull(2)?.lowercase() ?: "canvas"
    val session =
        resolveSession(sender, menuId)
            ?: run {
              sender.sendMessage(comp("&cメニュー '$menuId' が見つかりません。新規作成は /guimaker new $menuId です。"))
              return
            }

    when (operation) {
      "canvas",
      "open" -> {
        engine.openCanvas(sender, session)
        val src = if (GuiMakerExporter.hasDraft(plugin, menuId)) "&6ドラフト" else "&7ライブ"
        sender.sendMessage(comp("&e[GuiMaker] &a'&f$menuId&a' を${src}&aから開きました。"))
      }
      "preview" -> engine.openPreview(sender, session)
      "commit" -> commit(sender, session)
      "revert" -> revert(sender, session)
      "info" -> printInfo(sender, session)
      "discard" -> {
        engine.sessions.remove(sender.uniqueId)
        sender.closeInventory()
        sender.sendMessage(comp("&e[GuiMaker] &a'&f$menuId&a' の編集セッションを破棄しました。"))
      }
      "title" -> {
        val text = args.drop(3).joinToString(" ")
        if (text.isBlank()) {
          sender.closeInventory()
          engine.openColorPicker(sender, session, -1, "TITLE")
        } else {
          engine.cmdSetTitle(sender, session, text)
        }
      }
      "name" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId name <slot> <text>") ?: return
        val text = args.drop(4).joinToString(" ")
        if (text.isBlank()) {
          sender.sendMessage(comp("&c使用方法: /guimaker edit $menuId name <slot> <text>"))
          return
        }
        engine.cmdSetName(sender, session, slot, text)
      }
      "lore" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId lore <slot> <text>") ?: return
        val text = args.drop(4).joinToString(" ")
        if (text.isBlank()) {
          sender.sendMessage(comp("&c使用方法: /guimaker edit $menuId lore <slot> <text>"))
          return
        }
        engine.cmdAddLore(sender, session, slot, text)
      }
      "clearlore" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId clearlore <slot>") ?: return
        engine.cmdClearLore(sender, session, slot)
      }
      "perm" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId perm <slot> [permission]") ?: return
        engine.cmdSetPerm(sender, session, slot, args.getOrNull(4)?.takeIf { it.isNotBlank() })
      }
      "action" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId action <slot> <type> [value]") ?: return
        val type =
            args.getOrNull(4)?.uppercase()
                ?: run {
                  sender.sendMessage(
                      comp("&c使用方法: /guimaker edit $menuId action <slot> <type> [value]"))
                  return
                }
        if (type !in GuiActionCatalog.types) {
          sender.sendMessage(comp("&c不明なアクションタイプです: &f$type"))
          return
        }
        val value = args.drop(5).joinToString(" ")
        if (type !in setOf("CLOSE", "OPEN_SELL", "OPEN_MACRO") && value.isBlank()) {
          sender.sendMessage(comp("&c$type には値が必要です。"))
          return
        }
        engine.cmdAddAction(sender, session, slot, type, value)
      }
      "clearactions" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId clearactions <slot>") ?: return
        engine.cmdClearActions(sender, session, slot)
      }
      "clearslot" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /guimaker edit $menuId clearslot <slot>") ?: return
        engine.cmdClearSlot(sender, session, slot)
      }
      else -> {
        sender.sendMessage(comp("&c不明な edit 操作です: &f$operation"))
        printHelp(sender)
      }
    }
  }

  private fun handleUi(sender: Player, args: Array<String>) {
    when (args.getOrNull(1)?.lowercase()) {
      null -> engine.openUiScreenList(sender)
      "list" ->
          sender.sendMessage(
              comp("&e[GuiMaker] &f編集可能なUI画面: &a${engine.uiScreenNames().joinToString("&7, &a")}"))
      "edit" -> {
        val screen =
            args.getOrNull(2)
                ?: run {
                  sender.sendMessage(
                      comp(
                          "&c使用方法: /guimaker ui edit <screen>  画面: ${engine.uiScreenNames().joinToString(", ")}"))
                  return
                }
        engine.openUiSkinEditor(sender, screen)
      }
      "silent" -> engine.toggleUiSilent(sender)
      else -> {
        sender.sendMessage(comp("&e[GuiMaker] UIスキン設定"))
        sender.sendMessage(comp("&7/guimaker ui list            &f- 編集可能な画面を一覧"))
        sender.sendMessage(comp("&7/guimaker ui edit <screen>  &f- 指定した画面のアイコンとレイアウトを変更"))
        sender.sendMessage(comp("&7/guimaker ui silent         &f- 編集時のチャットログをミュート切替"))
        sender.sendMessage(comp("&7利用可能: &a${engine.uiScreenNames().joinToString("&7, &a")}"))
      }
    }
  }

  private fun handleList(sender: Player) {
    val ids = GuiMakerExporter.listMenuIds(plugin)
    if (ids.isEmpty()) {
      sender.sendMessage(comp("&e[GuiMaker] &7メニューはまだありません。"))
      return
    }
    sender.sendMessage(comp("&e[GuiMaker] &fメニュー: &a${ids.joinToString("&7, &a")}"))
  }

  private fun handleTemplate(sender: Player, args: Array<String>) {
    when (args.getOrNull(1)?.lowercase()) {
      null -> {
        engine.openTemplateLibrary(sender)
      }
      "approve" -> approveTemplate(sender, args)
      else -> {
        sender.sendMessage(comp("&e[GuiMaker] テンプレート管理"))
        sender.sendMessage(
            comp(
                "&7/guimaker template approve <player|uuid> <menu|block> <template-id> [official-id]"))
        sender.sendMessage(comp("&7個人テンプレートを公式テンプレートとして shared フォルダへ保存します。"))
      }
    }
  }

  private fun approveTemplate(sender: Player, args: Array<String>) {
    val ownerRaw =
        args.getOrNull(2)
            ?: run {
              sender.sendMessage(
                  comp(
                      "&c使用方法: /guimaker template approve <player|uuid> <menu|block> <template-id> [official-id]"))
              return
            }
    val kind =
        GuiTemplateKind.parse(args.getOrNull(3))
            ?: run {
              sender.sendMessage(comp("&c種類は menu または block を指定してください。"))
              return
            }
    val sourceId =
        args.getOrNull(4)
            ?: run {
              sender.sendMessage(comp("&c承認するテンプレートIDを指定してください。"))
              return
            }
    val officialId = args.getOrNull(5) ?: sourceId
    val owner = resolveOwnerUuid(ownerRaw)
    val result = GuiTemplateStore.approvePersonalTemplate(plugin, owner, kind, sourceId, officialId)
    if (result.isSuccess) {
      sender.sendMessage(comp("&e[GuiMaker] &a公式テンプレートに承認しました: &f${result.getOrNull()}"))
    } else {
      sender.sendMessage(comp("&e[GuiMaker] &c承認失敗: ${result.exceptionOrNull()?.message}"))
    }
  }

  private fun resolveSession(sender: Player, menuId: String): GuiEditorSession? {
    engine
        .getSession(sender)
        ?.takeIf { it.menuId == menuId }
        ?.let {
          return it
        }
    val session = GuiEditorSession(menuId)
    if (!GuiMakerExporter.loadIntoSession(plugin, session)) return null
    engine.sessions[sender.uniqueId] = session
    return session
  }

  private fun commit(sender: Player, session: GuiEditorSession) {
    if (engine.saveTemplateEdit(sender, session)) return
    engine.rebuildSlotsFromInventory(session)
    val result = GuiMakerExporter.commit(plugin, session)
    if (result.isSuccess) {
      sender.sendMessage(comp("&e[GuiMaker] &aコミットしました: &f${result.getOrNull()}"))
      plugin.reload()
    } else {
      sender.sendMessage(comp("&e[GuiMaker] &cコミット失敗: ${result.exceptionOrNull()?.message}"))
    }
  }

  private fun revert(sender: Player, session: GuiEditorSession) {
    GuiMakerExporter.revertDraft(plugin, session)
    val fresh = GuiEditorSession(session.menuId)
    if (GuiMakerExporter.loadIntoSession(plugin, fresh)) {
      engine.sessions[sender.uniqueId] = fresh
      engine.openCanvas(sender, fresh)
      sender.sendMessage(comp("&e[GuiMaker] &aドラフトを破棄してライブ版に戻しました。"))
    } else {
      engine.sessions.remove(sender.uniqueId)
      sender.sendMessage(comp("&e[GuiMaker] &aドラフトを破棄しました。(ライブ版なし)"))
    }
  }

  private fun printInfo(sender: Player, session: GuiEditorSession) {
    engine.rebuildSlotsFromInventory(session)
    val itemCount =
        session.canvasInventory?.contents?.count { it != null && it.type.name != "AIR" } ?: 0
    val hasDraft = GuiMakerExporter.hasDraft(plugin, session.menuId)
    sender.sendMessage(comp("&e[GuiMaker] &fID: &a${session.menuId}"))
    sender.sendMessage(comp("&e[GuiMaker] &fタイトル: &a${session.menuTitle}"))
    sender.sendMessage(comp("&e[GuiMaker] &fサイズ: &a${session.menuSize} &fアイテム数: &a$itemCount"))
    sender.sendMessage(comp("&e[GuiMaker] &fドラフト: ${if (hasDraft) "&a保存済み" else "&7なし"}"))
  }

  private fun validateMenuId(sender: Player, menuId: String): Boolean {
    val valid =
        menuId.matches(MENU_ID_PATTERN) && menuId.split('/').none { it == "." || it == ".." }
    if (!valid) {
      sender.sendMessage(comp("&cIDには英数字・_・-・. と階層用の / のみ使用できます。'.' または '..' 単独の階層は使えません。"))
    }
    return valid
  }

  private fun validateEditableMenuId(sender: Player, menuId: String): Boolean {
    if (GuiMakerExporter.isEditableMenuId(menuId)) return true
    sender.sendMessage(comp("&cこのIDは通常GUIメーカーの編集対象外です: &f$menuId"))
    sender.sendMessage(comp("&7popup/* や shop/shops などは形式が違うため、専用エディタが必要です。"))
    return false
  }

  private fun validatePopupId(sender: Player, popupId: String): Boolean {
    val valid = popupId.matches(POPUP_ID_PATTERN)
    if (!valid) sender.sendMessage(comp("&cPopup IDには英数字・_・-・. のみ使用できます。"))
    return valid
  }

  private fun resolveOwnerUuid(raw: String): UUID =
      runCatching { UUID.fromString(raw) }
          .getOrElse {
            Bukkit.getPlayerExact(raw)?.uniqueId ?: Bukkit.getOfflinePlayer(raw).uniqueId
          }

  private fun parseSlot(
      sender: Player,
      session: GuiEditorSession,
      raw: String?,
      usage: String
  ): Int? {
    val slot = raw?.toIntOrNull()
    if (slot == null) {
      sender.sendMessage(comp(usage))
      return null
    }
    if (slot !in 0 until session.menuSize) {
      sender.sendMessage(comp("&cslot は 0〜${session.menuSize - 1} の範囲で指定してください。"))
      return null
    }
    return slot
  }

  private fun printHelp(sender: Player) {
    sender.sendMessage(comp("&e===== GuiMaker ====="))
    sender.sendMessage(comp("&7/guimaker                                 &f- 編集ハブを開く"))
    sender.sendMessage(comp("&7/guimaker new <id>                         &f- 新規メニューを作成"))
    sender.sendMessage(comp("&7/guimaker edit <id> [canvas]               &f- 編集キャンバスを開く"))
    sender.sendMessage(comp("&7/guimaker popup list|edit|new              &f- Popup専用エディタ"))
    sender.sendMessage(comp("&7/guimaker ui                               &f- GUI Maker UI編集"))
    sender.sendMessage(comp("&7/guimaker special                          &f- 特殊メニュー入口"))
    sender.sendMessage(comp("&7/guimaker edit <id> preview                &f- 現在の編集内容をプレビュー"))
    sender.sendMessage(comp("&7/guimaker edit <id> commit                 &f- OyasaiMenu に反映"))
    sender.sendMessage(comp("&7/guimaker edit <id> revert                 &f- ドラフトを破棄"))
    sender.sendMessage(comp("&7/guimaker edit <id> info                   &f- 編集状況を表示"))
    sender.sendMessage(comp("&7/guimaker template approve ...            &f- 公式テンプレートとして承認"))
    sender.sendMessage(comp("&e--- /guimaker edit <id> <操作> ---"))
    sender.sendMessage(comp("&7title [text] / name <s> <text> / lore <s> <text>"))
    sender.sendMessage(comp("&7perm <s> [perm] / action <s> <type> [value]"))
    sender.sendMessage(comp("&7clearlore <s> / clearactions <s> / clearslot <s>"))
  }

  private fun comp(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)
}
