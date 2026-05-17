package icu.oyasai.citiesskymine.guimaker

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.menu.CsmMenuEngine
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class GuiMakerCommand(
    private val plugin: Main,
    private val engine: GuiEditorEngine,
    private val menuEngine: CsmMenuEngine
) : CommandExecutor, TabCompleter {

  companion object {
    private val ROOT_SUBCOMMANDS = listOf("new", "edit", "list", "ui", "help")
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
      "new" -> handleNew(sender, args)
      "edit" -> handleEdit(sender, args)
      "list" -> handleList(sender)
      "ui" -> handleUi(sender, args)
      "help",
      null -> printHelp(sender)
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
    return emptyList()
  }

  private fun handleNew(sender: Player, args: Array<String>) {
    val menuId =
        args.getOrNull(1)
            ?: run {
              sender.sendMessage(comp("&c使用方法: /.gm new <menu-id>"))
              return
            }
    if (!validateMenuId(sender, menuId)) return

    val session = engine.newSession(sender, menuId)
    engine.openCanvas(sender, session)
    sender.sendMessage(comp("&e[GuiMaker] &a新規メニュー '&f$menuId&a' を作成しました。"))
  }

  private fun handleEdit(sender: Player, args: Array<String>) {
    val menuId =
        args.getOrNull(1)
            ?: run {
              sender.sendMessage(comp("&c使用方法: /.gm edit <menu-id> [操作]"))
              return
            }
    if (!validateMenuId(sender, menuId)) return

    val operation = args.getOrNull(2)?.lowercase() ?: "canvas"
    val session =
        resolveSession(sender, menuId)
            ?: run {
              sender.sendMessage(comp("&cメニュー '$menuId' が見つかりません。新規作成は /.gm new $menuId です。"))
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
                sender, session, args.getOrNull(3), "&c使用方法: /.gm edit $menuId name <slot> <text>")
                ?: return
        val text = args.drop(4).joinToString(" ")
        if (text.isBlank()) {
          sender.sendMessage(comp("&c使用方法: /.gm edit $menuId name <slot> <text>"))
          return
        }
        engine.cmdSetName(sender, session, slot, text)
      }
      "lore" -> {
        val slot =
            parseSlot(
                sender, session, args.getOrNull(3), "&c使用方法: /.gm edit $menuId lore <slot> <text>")
                ?: return
        val text = args.drop(4).joinToString(" ")
        if (text.isBlank()) {
          sender.sendMessage(comp("&c使用方法: /.gm edit $menuId lore <slot> <text>"))
          return
        }
        engine.cmdAddLore(sender, session, slot, text)
      }
      "clearlore" -> {
        val slot =
            parseSlot(
                sender, session, args.getOrNull(3), "&c使用方法: /.gm edit $menuId clearlore <slot>")
                ?: return
        engine.cmdClearLore(sender, session, slot)
      }
      "perm" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /.gm edit $menuId perm <slot> [permission]") ?: return
        engine.cmdSetPerm(sender, session, slot, args.getOrNull(4)?.takeIf { it.isNotBlank() })
      }
      "action" -> {
        val slot =
            parseSlot(
                sender,
                session,
                args.getOrNull(3),
                "&c使用方法: /.gm edit $menuId action <slot> <type> [value]") ?: return
        val type =
            args.getOrNull(4)?.uppercase()
                ?: run {
                  sender.sendMessage(comp("&c使用方法: /.gm edit $menuId action <slot> <type> [value]"))
                  return
                }
        if (type !in GuiActionCatalog.types) {
          sender.sendMessage(comp("&c不明なアクションタイプです: &f$type"))
          return
        }
        val value = args.drop(5).joinToString(" ")
        if (type != "CLOSE" && value.isBlank()) {
          sender.sendMessage(comp("&c$type には値が必要です。"))
          return
        }
        engine.cmdAddAction(sender, session, slot, type, value)
      }
      "clearactions" -> {
        val slot =
            parseSlot(
                sender, session, args.getOrNull(3), "&c使用方法: /.gm edit $menuId clearactions <slot>")
                ?: return
        engine.cmdClearActions(sender, session, slot)
      }
      "clearslot" -> {
        val slot =
            parseSlot(
                sender, session, args.getOrNull(3), "&c使用方法: /.gm edit $menuId clearslot <slot>")
                ?: return
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
      "list" ->
          sender.sendMessage(
              comp("&e[GuiMaker] &f編集可能なUI画面: &a${engine.uiScreenNames().joinToString("&7, &a")}"))
      "edit" -> {
        val screen =
            args.getOrNull(2)
                ?: run {
                  sender.sendMessage(
                      comp(
                          "&c使用方法: /.gm ui edit <screen>  画面: ${engine.uiScreenNames().joinToString(", ")}"))
                  return
                }
        engine.openUiSkinEditor(sender, screen)
      }
      "silent" -> engine.toggleUiSilent(sender)
      else -> {
        sender.sendMessage(comp("&e[GuiMaker] UIスキン設定"))
        sender.sendMessage(comp("&7/.gm ui list            &f- 編集可能な画面を一覧"))
        sender.sendMessage(comp("&7/.gm ui edit <screen>  &f- 指定した画面のアイコンとレイアウトを変更"))
        sender.sendMessage(comp("&7/.gm ui silent         &f- 編集時のチャットログをミュート切替"))
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
    engine.rebuildSlotsFromInventory(session)
    val result = GuiMakerExporter.commit(plugin, session)
    if (result.isSuccess) {
      sender.sendMessage(comp("&e[GuiMaker] &aコミットしました: &f${result.getOrNull()}"))
      menuEngine.reload()
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
    sender.sendMessage(comp("&7/.gm new <id>                         &f- 新規メニューを作成"))
    sender.sendMessage(comp("&7/.gm edit <id> [canvas]               &f- 編集キャンバスを開く"))
    sender.sendMessage(comp("&7/.gm edit <id> preview                &f- 現在の編集内容をプレビュー"))
    sender.sendMessage(comp("&7/.gm edit <id> commit                 &f- OyasaiMenu に反映"))
    sender.sendMessage(comp("&7/.gm edit <id> revert                 &f- ドラフトを破棄"))
    sender.sendMessage(comp("&7/.gm edit <id> info                   &f- 編集状況を表示"))
    sender.sendMessage(comp("&e--- /.gm edit <id> <操作> ---"))
    sender.sendMessage(comp("&7title [text] / name <s> <text> / lore <s> <text>"))
    sender.sendMessage(comp("&7perm <s> [perm] / action <s> <type> [value]"))
    sender.sendMessage(comp("&7clearlore <s> / clearactions <s> / clearslot <s>"))
  }

  private fun comp(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)
}
