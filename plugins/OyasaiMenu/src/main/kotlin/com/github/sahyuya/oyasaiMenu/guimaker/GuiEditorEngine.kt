package com.github.sahyuya.oyasaiMenu.guimaker

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.engine.NavBar
import com.github.sahyuya.oyasaiMenu.model.ActionType
import com.github.sahyuya.oyasaiMenu.model.MenuAction
import com.github.sahyuya.oyasaiMenu.util.ItemVisuals
import java.util.Locale
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.AsyncPlayerChatEvent
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.persistence.PersistentDataType

class GuiEditorEngine(private val plugin: OyasaiMenu) : Listener {

  // ── PDC keys (アイテム本位の永続データ) ────────────────────
  private val KEY_NAME by lazy { NamespacedKey(plugin, "gm_name") }
  private val KEY_LORE by lazy { NamespacedKey(plugin, "gm_lore") }
  private val KEY_PERM by lazy { NamespacedKey(plugin, "gm_perm") }
  private val KEY_ACTIONS by lazy { NamespacedKey(plugin, "gm_actions") }
  private val KEY_ENCHANTED by lazy { NamespacedKey(plugin, "gm_enchanted") }
  private val KEY_EXTRA by lazy { NamespacedKey(plugin, "gm_extra") }
  private val KEY_FUNC by lazy { NamespacedKey(plugin, "gm_func") }
  private val KEY_SCREEN by lazy { NamespacedKey(plugin, "gm_screen") }
  private val KEY_SKIN_ITEM by lazy { NamespacedKey(plugin, "gm_skin_item") }

  val sessions: MutableMap<UUID, GuiEditorSession> = ConcurrentHashMap()
  private val playerFavorites: MutableMap<UUID, MutableList<GuiActionDef>> = mutableMapOf()
  private val uiSkinSilentPlayers: MutableSet<UUID> = mutableSetOf()

  private val uiScreenCatalog = GuiMakerUiSkinDefinitions.load(plugin)
  private val uiSkinStore = GuiMakerUiSkinStore(plugin, uiScreenCatalog)
  private val SOUND_CATEGORIES =
      setOf("ui", "entity", "block", "item", "music", "ambient", "weather", "event")
  private val soundPickFixedLabels =
      mapOf(
          36 to "前のページ",
          37 to "音量 -0.25",
          39 to "音量",
          40 to "カテゴリへ戻る",
          41 to "音量 +0.25",
          42 to "手入力",
          43 to "音量リセット",
          44 to "次のページ")
  private val UI_SKIN_RESTORE_SLOTS = uiScreenCatalog.restoreSlots
  private val UI_SCREEN_DEFS = uiScreenCatalog.screenDefs
  private val TEMPLATE_GRID_SLOTS = (19..25).toList() + (28..34).toList() + (37..43).toList()
  private val TEMPLATE_BLOCK_EDIT_SLOT = 22
  private val HUB_BACK_SLOT = 53
  private val POPUP_RESERVED_BACK_SLOT = 53

  private enum class TemplateCategory(val displayName: String) {
    ALL("すべて"),
    MENU("GUI"),
    BLOCK("ブロック"),
    PERSONAL("個人"),
    SHARED("公式");

    fun matches(entry: GuiTemplateEntry): Boolean =
        when (this) {
          ALL -> true
          MENU -> entry.kind == GuiTemplateKind.MENU
          BLOCK -> entry.kind == GuiTemplateKind.BLOCK
          PERSONAL -> entry.scope == GuiTemplateScope.PERSONAL
          SHARED -> entry.scope == GuiTemplateScope.SHARED
        }

    fun next(): TemplateCategory = entries[(ordinal + 1) % entries.size]
  }

  private enum class TemplateSortMode(val displayName: String) {
    UPDATED_DESC("新しい順"),
    UPDATED_ASC("古い順"),
    NAME_ASC("名前順"),
    NAME_DESC("名前逆順");

    fun next(): TemplateSortMode = entries[(ordinal + 1) % entries.size]
  }

  private data class SpecialBlockPreset(
      val id: String,
      val material: Material,
      val name: String,
      val lore: List<String>,
      val actions: List<GuiActionDef>
  )

  fun getSession(player: Player): GuiEditorSession? = sessions[player.uniqueId]

  fun uiScreenNames(): List<String> = UI_SCREEN_DEFS.keys.toList()

  fun openHub(player: Player) {
    val inv = Bukkit.createInventory(HubHolder(), 54, comp("&8GuiMaker 編集ハブ"))
    fillMain(inv, Material.GRAY_STAINED_GLASS_PANE)
    inv.setItem(
        10,
        makeItem(Material.ENDER_CHEST, "&a通常GUI", "&7menus/*.yml を編集します", "&7自由配置・アクション・権限・lore"))
    inv.setItem(
        12,
        makeItem(
            Material.CHORUS_FRUIT,
            "&dPopupメニュー",
            "&7menus/popup/*.yml を専用形式で編集します",
            "&745-53 はナビバー予約としてロックします"))
    inv.setItem(
        14,
        makeItem(Material.ENDER_EYE, "&b特殊メニュー", "&7オンラインプレイヤー・確認・可変コマンドなど", "&7コード駆動メニューの入口です"))
    inv.setItem(
        16,
        makeItem(
            Material.ITEM_FRAME,
            "&eGUI Maker UI",
            "&7gui-maker-ui-screens.yml をGUIから編集します",
            "&7現在の /guimaker ui edit の入口です"))
    inv.setItem(
        31,
        makeItem(
            Material.NETHER_STAR,
            "&6テンプレート / 公式ブロック",
            "&7通常GUI編集中のテンプレート管理を開きます",
            "&7未編集中の場合は root の編集から入ります"))
    inv.setItem(49, makeItem(Material.BOOK, "&fヘルプ", "&7コマンド一覧をチャットに表示します"))
    inv.setItem(53, makeItem(Material.BARRIER, "&c閉じる"))
    applyUiSkin(inv, "hub")
    player.openInventory(inv)
  }

  fun openNormalMenuList(player: Player, page: Int = 0) {
    val ids = NormalMenuAdapter.listIds(plugin)
    openSurfaceList(
        player,
        SurfaceListHolder(GuiEditableSurface.NORMAL, page),
        "&8通常GUI編集",
        Material.ENDER_CHEST,
        ids,
        page)
  }

  fun openPopupMenuList(player: Player, page: Int = 0) {
    val ids = PopupMenuAdapter.listIds(plugin)
    openSurfaceList(
        player,
        SurfaceListHolder(GuiEditableSurface.POPUP, page),
        "&8Popup編集",
        Material.CHORUS_FRUIT,
        ids,
        page)
  }

  fun openUiScreenList(player: Player, page: Int = 0) {
    val screens = uiScreenNames()
    val inv = Bukkit.createInventory(UiScreenListHolder(page), 54, comp("&8GUI Maker UI編集"))
    fillMain(inv, Material.YELLOW_STAINED_GLASS_PANE)
    inv.setItem(4, makeItem(Material.ITEM_FRAME, "&eGUI Maker UI", "&7編集画面を選択してください"))
    val grid = listGridSlots()
    val maxPage = ((screens.size - 1).coerceAtLeast(0)) / grid.size
    val safePage = page.coerceIn(0, maxPage)
    screens.drop(safePage * grid.size).take(grid.size).forEachIndexed { index, screen ->
      inv.setItem(grid[index], makeItem(Material.ITEM_FRAME, "&e$screen", "&7クリックでこの画面のUIを編集"))
    }
    inv.setItem(HUB_BACK_SLOT, makeItem(Material.ARROW, "&f編集ハブへ戻る"))
    inv.setItem(48, makeItem(Material.ARROW, "&e前のページ", "&7${safePage + 1}/${maxPage + 1}"))
    inv.setItem(50, makeItem(Material.ARROW, "&e次のページ", "&7${safePage + 1}/${maxPage + 1}"))
    applyUiSkin(inv, "ui_screen_list")
    player.openInventory(inv)
  }

  fun openSpecialSurfaceHub(player: Player) {
    val inv = Bukkit.createInventory(SpecialSurfaceHubHolder(), 54, comp("&8特殊メニュー"))
    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    inv.setItem(
        11,
        makeItem(
            Material.PLAYER_HEAD,
            "&bオンラインプレイヤー一覧",
            "&7OP限定のコード駆動メニュー",
            "&a左クリック&7: 呼び出しブロックを編集",
            "&e右クリック&7: プレビュー"))
    inv.setItem(
        13,
        makeItem(
            Material.LIME_CONCRETE,
            "&a確認ボタンメニュー",
            "&7コマンド実行前の確認画面",
            "&a左クリック&7: 呼び出しブロックを編集",
            "&e右クリック&7: サンプル確認を開く"))
    inv.setItem(
        15,
        makeItem(
            Material.REPEATER,
            "&e可変コマンドメニュー",
            "&7{amount} などの入力枠を持つコマンド",
            "&a左クリック&7: ブロックを編集",
            "&e右クリック&7: 使い方を表示"))
    inv.setItem(HUB_BACK_SLOT, makeItem(Material.ARROW, "&f編集ハブへ戻る"))
    inv.setItem(31, makeItem(Material.ENDER_CHEST, "&a通常GUIへ配置", "&7特殊メニューを呼ぶボタンを作る入口"))
    applyUiSkin(inv, "special_surface")
    player.openInventory(inv)
  }

  fun openTemplateLibrary(player: Player) {
    ensureOfficialTemplateBlocks()
    val session =
        getSession(player)
            ?: NormalMenuAdapter.load(plugin, "root")?.also { sessions[player.uniqueId] = it }
            ?: createTemplateWorkspaceSession().also { sessions[player.uniqueId] = it }
    openTemplateHub(player, session)
  }

  private fun createTemplateWorkspaceSession(): GuiEditorSession {
    val session = GuiEditorSession("guimaker_template_workspace", "&8テンプレート編集ワークスペース", 54)
    session.canvasInventory = Bukkit.createInventory(null, 54)
    return session
  }

  private fun ensureOfficialTemplateBlocks() {
    specialBlockPresets().forEach { preset ->
      val def =
          GuiSlotDef(
              name = preset.name,
              lore = preset.lore.toMutableList(),
              actions = preset.actions.map { it.copy(params = it.params.toMap()) }.toMutableList())
      GuiTemplateStore.ensureSharedBlockTemplate(
          plugin, "special/${preset.id}", preset.material, def)
    }
  }

  private fun specialBlockPresets(): List<SpecialBlockPreset> =
      listOf(
          SpecialBlockPreset(
              id = "online_players",
              material = Material.PLAYER_HEAD,
              name = "&bオンラインプレイヤー一覧",
              lore = listOf("&7OP限定のオンラインプレイヤー一覧を開きます", "&7クリックしたプレイヤーへ /tp します"),
              actions = listOf(GuiActionDef("OPEN_SPECIAL", mapOf("target" to "online_players")))),
          SpecialBlockPreset(
              id = "confirm_command",
              material = Material.LIME_CONCRETE,
              name = "&a確認ボタンメニュー",
              lore = listOf("&7実行前に確認ボタンを表示します", "&7command はアクション詳細から確認してください"),
              actions =
                  listOf(
                      GuiActionDef(
                          "OPEN_SPECIAL",
                          mapOf(
                              "target" to "confirm",
                              "command" to "say GuiMaker confirm sample",
                              "mode" to "player")))),
          SpecialBlockPreset(
              id = "parameter_command",
              material = Material.REPEATER,
              name = "&e可変コマンドメニュー",
              lore = listOf("&7{amount} の値をGUIで増減して実行します", "&7例: //stack {amount}"),
              actions =
                  listOf(
                      GuiActionDef(
                          "PARAM_COMMAND",
                          mapOf(
                              "command" to "//stack {amount}",
                              "mode" to "op",
                              "confirm" to "true",
                              "param.amount.type" to "int",
                              "param.amount.default" to "10",
                              "param.amount.min" to "1",
                              "param.amount.max" to "100",
                              "param.amount.step" to "1")))))

  private fun getFavorites(playerId: UUID): MutableList<GuiActionDef> =
      playerFavorites.getOrPut(playerId) { loadFavoritesFromDisk(playerId) }

  private fun loadFavoritesFromDisk(playerId: UUID): MutableList<GuiActionDef> {
    val file = java.io.File(plugin.dataFolder, "favorites/$playerId.yml")
    if (!file.exists()) return mutableListOf()
    return runCatching {
          val yaml = org.bukkit.configuration.file.YamlConfiguration.loadConfiguration(file)
          (yaml.getList("favorites") ?: emptyList<Any>())
              .filterIsInstance<Map<String, Any>>()
              .mapNotNull { map ->
                val type = map["type"]?.toString() ?: return@mapNotNull null
                GuiActionDef(
                    type, map.filterKeys { it != "type" }.mapValues { it.value.toString() })
              }
              .toMutableList()
        }
        .getOrElse { mutableListOf() }
  }

  private fun saveFavoritesToDisk(playerId: UUID) {
    val favorites = playerFavorites[playerId] ?: return
    runCatching {
      val file =
          java.io.File(plugin.dataFolder, "favorites/$playerId.yml").also { it.parentFile.mkdirs() }
      val yaml = org.bukkit.configuration.file.YamlConfiguration()
      yaml.set(
          "favorites",
          favorites.map { action ->
            val map = mutableMapOf<String, Any>("type" to action.type)
            map.putAll(action.params)
            map
          })
      yaml.save(file)
    }
  }

  private fun openSurfaceList(
      player: Player,
      holder: SurfaceListHolder,
      title: String,
      material: Material,
      ids: List<String>,
      page: Int
  ) {
    val inv = Bukkit.createInventory(holder, 54, comp(title))
    fillMain(
        inv,
        if (holder.surface == GuiEditableSurface.POPUP) Material.PURPLE_STAINED_GLASS_PANE
        else Material.LIME_STAINED_GLASS_PANE)
    val grid = listGridSlots()
    val maxPage = ((ids.size - 1).coerceAtLeast(0)) / grid.size
    val safePage = page.coerceIn(0, maxPage)
    inv.setItem(
        4,
        makeItem(
            material,
            if (holder.surface == GuiEditableSurface.POPUP) "&dPopupメニュー" else "&a通常GUI",
            "&7編集対象を選択してください",
            "&7${ids.size} 件"))
    ids.drop(safePage * grid.size).take(grid.size).forEachIndexed { index, id ->
      val draft =
          when (holder.surface) {
            GuiEditableSurface.POPUP -> PopupMenuAdapter.hasDraft(plugin, id)
            GuiEditableSurface.NORMAL -> NormalMenuAdapter.hasDraft(plugin, id)
          }
      inv.setItem(
          grid[index],
          makeItem(
              material,
              if (holder.surface == GuiEditableSurface.POPUP) "&d$id" else "&a$id",
              "&7ID: &f${if (holder.surface == GuiEditableSurface.POPUP) "popup/$id" else id}",
              "&7ドラフト: ${if (draft) "&aあり" else "&8なし"}",
              "&7クリックで編集"))
    }
    if (holder.surface == GuiEditableSurface.POPUP) {
      inv.setItem(44, makeItem(Material.WRITABLE_BOOK, "&f新規Popup", "&7/guimaker popup new <id>"))
    } else {
      inv.setItem(44, makeItem(Material.WRITABLE_BOOK, "&f新規通常GUI", "&7/guimaker new <id>"))
    }
    inv.setItem(HUB_BACK_SLOT, makeItem(Material.ARROW, "&f編集ハブへ戻る"))
    inv.setItem(48, makeItem(Material.ARROW, "&e前のページ", "&7${safePage + 1}/${maxPage + 1}"))
    inv.setItem(50, makeItem(Material.ARROW, "&e次のページ", "&7${safePage + 1}/${maxPage + 1}"))
    applyUiSkin(inv, "surface_list")
    player.openInventory(inv)
  }

  private fun listGridSlots(): List<Int> =
      (10..16).toList() + (19..25).toList() + (28..34).toList() + (37..43).toList()

  fun newSession(player: Player, menuId: String): GuiEditorSession {
    val session = GuiEditorSession(menuId)
    sessions[player.uniqueId] = session
    return session
  }

  // ── PDC helpers ─────────────────────────────────────────────

  /** GuiSlotDef の内容をアイテムの PDC と見た目に書き込む。移動後もデータが追従する。 */
  fun applyPdcToItem(session: GuiEditorSession, slot: Int) {
    val inv = session.canvasInventory ?: return
    if (slot !in 0 until inv.size) return
    val item = inv.getItem(slot)?.takeIf { it.type != Material.AIR } ?: return
    val def = session.slots[slot] ?: GuiSlotDef()
    val newItem = item.clone()
    val meta = newItem.itemMeta ?: return

    // 見た目を更新
    if (def.name.isNotEmpty()) meta.displayName(comp(def.name))
    if (def.lore.isNotEmpty()) meta.lore(def.lore.map { comp(it) }) else meta.lore(emptyList())
    ItemVisuals.applyEnchantVisual(meta, def.enchanted)

    // PDC に書き込む（アイテムと一緒に移動する）
    val pdc = meta.persistentDataContainer
    pdc.set(KEY_NAME, PersistentDataType.STRING, def.name)
    pdc.set(KEY_LORE, PersistentDataType.STRING, def.lore.joinToString("\n"))
    pdc.set(KEY_PERM, PersistentDataType.STRING, def.permission ?: "")
    pdc.set(KEY_ACTIONS, PersistentDataType.STRING, serializeActions(def.actions))
    pdc.set(KEY_ENCHANTED, PersistentDataType.STRING, if (def.enchanted) "1" else "")
    pdc.set(KEY_EXTRA, PersistentDataType.STRING, serializeExtras(def.extras))

    newItem.itemMeta = meta
    inv.setItem(slot, newItem)
  }

  /** アイテムの PDC から GuiSlotDef を復元する。 */
  private fun readPdcFromItem(item: ItemStack): GuiSlotDef? {
    val meta = item.itemMeta ?: return null
    val pdc = meta.persistentDataContainer
    if (!pdc.has(KEY_NAME, PersistentDataType.STRING)) return null
    val def =
        GuiSlotDef(
            name = pdc.get(KEY_NAME, PersistentDataType.STRING) ?: "",
            lore =
                pdc.get(KEY_LORE, PersistentDataType.STRING)
                    ?.split("\n")
                    ?.filter { it.isNotEmpty() }
                    ?.toMutableList() ?: mutableListOf(),
            permission = pdc.get(KEY_PERM, PersistentDataType.STRING)?.takeIf { it.isNotEmpty() },
            enchanted =
                pdc.get(KEY_ENCHANTED, PersistentDataType.STRING)?.takeIf { it.isNotEmpty() } ==
                    "1",
            extras =
                deserializeExtras(pdc.get(KEY_EXTRA, PersistentDataType.STRING) ?: "")
                    .toMutableMap(),
        )
    def.actions.addAll(deserializeActions(pdc.get(KEY_ACTIONS, PersistentDataType.STRING) ?: ""))
    return def
  }

  /** インベントリ内の全アイテムの PDC から session.slots を再構築する。 アイテムを移動した後に呼ぶことでスロット情報がアイテムに追従する。 */
  fun rebuildSlotsFromInventory(session: GuiEditorSession) {
    val inv = session.canvasInventory ?: return
    session.slots.clear()
    for (slot in 0 until inv.size) {
      if (session.surface == GuiEditableSurface.POPUP && slot in 45..53) continue
      val item = inv.getItem(slot) ?: continue
      if (item.type == Material.AIR) continue
      val def = readPdcFromItem(item) ?: continue
      session.slots[slot] = def
    }
  }

  private fun serializeActions(actions: List<GuiActionDef>): String =
      actions.joinToString("\n") { a ->
        a.type +
            if (a.params.isEmpty()) ""
            else
                " " +
                    a.params.entries.joinToString(" ") { (k, v) ->
                      "$k=${v.replace(" ", "\\s").replace("\n", "\\n")}"
                    }
      }

  private fun deserializeActions(raw: String): List<GuiActionDef> {
    if (raw.isBlank()) return emptyList()
    return raw.lines().mapNotNull { line ->
      val parts = line.trim().split(" ")
      if (parts.isEmpty() || parts[0].isBlank()) return@mapNotNull null
      val type = parts[0]
      val params =
          parts
              .drop(1)
              .mapNotNull { kv ->
                val eq = kv.indexOf('=')
                if (eq < 0) null
                else
                    kv.substring(0, eq) to
                        kv.substring(eq + 1).replace("\\s", " ").replace("\\n", "\n")
              }
              .toMap()
      GuiActionDef(type, params)
    }
  }

  private fun serializeExtras(extras: Map<String, String>): String =
      extras.entries.joinToString("\n") { (key, value) ->
        "$key=${value.replace(" ", "\\s").replace("\n", "\\n")}"
      }

  private fun deserializeExtras(raw: String): Map<String, String> {
    if (raw.isBlank()) return emptyMap()
    return raw.lines()
        .mapNotNull { line ->
          val eq = line.indexOf('=')
          if (eq < 0) null
          else
              line.substring(0, eq) to
                  line.substring(eq + 1).replace("\\s", " ").replace("\\n", "\n")
        }
        .toMap()
  }

  // ── Canvas ─────────────────────────────────────────────────

  fun openCanvas(player: Player, session: GuiEditorSession) {
    // PDC からスロット情報を再構築してからキャンバスを描画する
    rebuildSlotsFromInventory(session)
    val title =
        if (session.templateEditTarget == null) session.menuTitle
        else "&d[テンプレート] ${session.menuTitle}"
    val inv = Bukkit.createInventory(CanvasHolder(session), session.menuSize, comp(title))
    session.canvasInventory?.let { old ->
      for (i in 0 until old.size.coerceAtMost(inv.size)) {
        val item = old.getItem(i) ?: continue
        if (session.surface == GuiEditableSurface.POPUP && i in 45..53) continue
        inv.setItem(i, decorateItem(item, session.slots[i]))
      }
    }
    if (session.surface == GuiEditableSurface.POPUP) applyPopupReservedSlots(inv, session)
    session.canvasInventory = inv
    player.openInventory(inv)
  }

  // ── Preview (コミット前にドラフトをインタラクティブ確認) ─────

  fun openPreview(player: Player, session: GuiEditorSession) {
    rebuildSlotsFromInventory(session)
    val previewSession = GuiEditorSession(session.menuId, session.menuTitle, session.menuSize)
    previewSession.surface = session.surface
    previewSession.popupMeta = session.popupMeta?.copy()
    session.slots.forEach { (slot, def) ->
      previewSession.slots[slot] =
          def.copy(
              lore = def.lore.toMutableList(),
              actions = def.actions.toMutableList(),
              extras = def.extras.toMutableMap())
    }
    session.canvasInventory?.let { canvas ->
      val snapshot = Bukkit.createInventory(null, session.menuSize)
      for (i in 0 until canvas.size.coerceAtMost(snapshot.size)) {
        snapshot.setItem(i, canvas.getItem(i)?.clone())
      }
      previewSession.canvasInventory = snapshot
    }

    val title = "&7[プレビュー] ${previewSession.menuTitle}"
    val inv =
        Bukkit.createInventory(PreviewHolder(previewSession), previewSession.menuSize, comp(title))
    previewSession.canvasInventory?.let { canvas ->
      for (i in 0 until canvas.size.coerceAtMost(inv.size)) {
        val item = canvas.getItem(i) ?: continue
        if (item.type == Material.AIR) continue
        if (previewSession.surface == GuiEditableSurface.POPUP && i in 45..53) continue
        inv.setItem(i, decorateItem(item, previewSession.slots[i]))
      }
    }
    if (previewSession.surface == GuiEditableSurface.POPUP)
        applyPopupReservedSlots(inv, previewSession)
    player.openInventory(inv)
    msg(
        player,
        if (session.surface == GuiEditableSurface.POPUP)
            "&7[Preview] &f編集に戻るには /guimaker popup edit ${session.menuId}"
        else "&7[Preview] &fクリックでアクションをテストできます。編集に戻るには /guimaker edit ${session.menuId} canvas")
  }

  // ── Context Menu (54-slot PlayStation Style) ───────────────

  fun openContextMenu(player: Player, session: GuiEditorSession, slot: Int) {
    session.contextSlot = slot
    val def = session.slots[slot]
    val inv =
        Bukkit.createInventory(
            ContextHolder(session, slot), 54, comp("&9GuiMaker &8- &fスロット $slot"))

    val nameCurrent = def?.name?.takeIf { it.isNotEmpty() } ?: "&8(未設定)"
    session.canvasInventory
        ?.getItem(slot)
        ?.takeIf { it.type != Material.AIR }
        ?.let { inv.setItem(4, decorateItem(it, def)) }
    inv.setItem(9, makeItem(Material.CYAN_CANDLE, "&b表示", "&7アイテムの見た目を編集します"))
    inv.setItem(
        10, makeItem(Material.NAME_TAG, "&e名前を設定", "&f現在: $nameCurrent", "&7クリック → カラー選択 → テキスト入力"))

    val loreLore = buildList {
      add("&f現在: &e${def?.lore?.size ?: 0}行")
      def?.lore?.take(5)?.forEach { add("  &7$it") }
      if ((def?.lore?.size ?: 0) > 5) add("  &8...")
      add("&7クリック → カラー選択 → テキスト入力")
    }
    inv.setItem(11, makeItem(Material.BOOK, "&aロアを追加", *loreLore.toTypedArray()))
    inv.setItem(
        12,
        makeItem(
            Material.WRITABLE_BOOK,
            "&eロア編集",
            "&f現在: &e${def?.lore?.size ?: 0}行",
            "&7並べ替え・編集・削除を行います"))
    inv.setItem(
        13,
        makeItem(
            if (def?.enchanted == true) Material.ENCHANTED_BOOK else Material.BOOK,
            if (def?.enchanted == true) "&dエンチャント表示: ON" else "&7エンチャント表示: OFF",
            "&7クリックでON/OFFを切り替えます",
            "&7実画面のアイテムに光る表示を付けます"))

    inv.setItem(18, makeItem(Material.BLUE_CANDLE, "&9条件と動作", "&7表示権限とクリック時の動作を編集します"))
    val permCurrent = def?.permission ?: "&8(なし)"
    inv.setItem(
        19,
        makeItem(
            Material.IRON_DOOR,
            "&b権限を設定",
            "&f現在: $permCurrent",
            "&7LuckPerms のグループから選択します",
            "&7例: たくみ / 中級者 / 建築士"))

    val actionLore = buildList {
      add("&f現在: &e${def?.actions?.size ?: 0}件")
      def?.actions?.forEachIndexed { i, a -> add("  &b[$i] &f${a.type}") }
      add("&7クリックで新しいアクションを追加")
    }
    inv.setItem(20, makeItem(Material.LIME_DYE, "&aアクションを追加", *actionLore.toTypedArray()))
    inv.setItem(
        21,
        makeItem(
            Material.COMMAND_BLOCK,
            "&dアクション管理",
            "&f現在: &e${def?.actions?.size ?: 0}件",
            "&7編集・並べ替え・削除を行います"))
    inv.setItem(27, makeItem(Material.RED_CANDLE, "&c危険操作", "&7削除系の操作です"))
    inv.setItem(28, makeItem(Material.BARRIER, "&cスロットをクリア", "&7アイテムと設定を全て削除"))

    // お気に入りセクション (Row 4: slots 36-44)
    val favs = getFavorites(player.uniqueId)
    inv.setItem(
        36, makeItem(Material.ORANGE_CANDLE, "&6お気に入り", "&7${favs.size}/8 件", "&7クリックで管理画面"))
    inv.setItem(37, makeItem(Material.PAPER, "&aお気に入りを管理", "&7登録・追加・削除"))
    favs.take(7).forEachIndexed { i, action ->
      inv.setItem(38 + i, makeActionItem(-1, action, "&7クリックで即追加"))
    }

    fillMain(inv, Material.BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fキャンバスに戻る", "&7編集キャンバスを開きます")
    applyUiSkin(inv, "context")
    player.openInventory(inv)
  }

  // ── Action Type Menu (54-slot) ──────────────────────────────

  private fun openActionTypeMenu(player: Player, session: GuiEditorSession, slot: Int) {
    val count = session.slots[slot]?.actions?.size ?: 0
    val favMode = session.favRegistering
    val title = if (favMode) "&9GuiMaker &8- &6お気に入り登録" else "&9GuiMaker &8- &aアクション追加"
    val inv = Bukkit.createInventory(ActionTypeHolder(session, slot), 54, comp(title))
    placeItemPreview(inv, session, slot)

    inv.setItem(
        0,
        makeItem(
            if (favMode) Material.GOLD_NUGGET else Material.LIME_DYE,
            if (favMode) "&6お気に入り登録モード" else "&aアクション追加",
            "&7スロット $slot / 現在: &f${count}件",
            if (favMode) "&7選択したアクションをお気に入りに登録" else "&7アクションタイプを選んでください"))

    // Row 1: メニュー系カテゴリ + アイテム
    inv.setItem(9, makeItem(Material.ENDER_CHEST, "&aメニュー系", "&7別メニューやポップアップへ移動します"))
    inv.setItem(10, makeItem(Material.ENDER_CHEST, "&aメニューを開く", "&7OPEN_MENU", "&7既存メニューをGUIで選択"))
    inv.setItem(11, makeItem(Material.CHORUS_FRUIT, "&dポップアップ", "&7OPEN_POPUP", "&7ポップアップをGUIで選択"))
    inv.setItem(12, makeItem(Material.OAK_DOOR, "&fメニューを閉じる", "&7CLOSE", "&7クリックで即追加"))
    inv.setItem(
        13, makeItem(Material.ENDER_EYE, "&b特殊メニュー", "&7OPEN_SPECIAL", "&7online_players など"))
    inv.setItem(14, makeItem(Material.CHEST, "&eショップ", "&7OPEN_SHOP", "&7ショップカテゴリを開きます"))
    inv.setItem(
        15, makeItem(Material.NETHER_STAR, "&6ポイントショップ", "&7OPEN_POINT_SHOP", "&7ポイントショップカテゴリ"))
    inv.setItem(16, makeItem(Material.GOLD_INGOT, "&6一括売却", "&7OPEN_SELL", "&7売却メニューを開きます"))

    // Row 2: コマンド系カテゴリ + アイテム
    inv.setItem(18, makeItem(Material.COMMAND_BLOCK, "&6コマンド系", "&7クリック時にコマンドを実行します"))
    inv.setItem(
        19, makeItem(Material.STICK, "&eプレイヤーコマンド", "&7PLAYER_CMD", "&7プレイヤーとして実行 &8(%player%)"))
    inv.setItem(
        20,
        makeItem(Material.REDSTONE, "&6コンソールコマンド", "&7CONSOLE_CMD", "&7コンソールとして実行 &8(%player%)"))
    inv.setItem(21, makeItem(Material.NETHER_STAR, "&cOPコマンド", "&7OP_PLAYER_CMD", "&7一時OP権限で実行"))
    inv.setItem(
        22, makeItem(Material.COMMAND_BLOCK, "&aコマンドを提案", "&7SUGGEST_COMMAND", "&7クリックでチャット欄に入力"))
    inv.setItem(
        23,
        makeItem(Material.REPEATER, "&e可変コマンド", "&7PARAM_COMMAND", "&7{amount} などの入力枠を持つOP限定コマンド"))

    // Row 3: メッセージ系カテゴリ + アイテム
    inv.setItem(27, makeItem(Material.PAPER, "&fメッセージ系", "&7チャットへ情報を表示します"))
    inv.setItem(28, makeItem(Material.PAPER, "&fメッセージ送信", "&7MESSAGE", "&7プレイヤーにメッセージ"))
    inv.setItem(29, makeItem(Material.BEACON, "&9ブロードキャスト", "&7BROADCAST", "&7サーバー全員に送る"))
    inv.setItem(30, makeItem(Material.MAP, "&eURL", "&7URL", "&7URLをチャットに表示"))
    inv.setItem(31, makeItem(Material.WRITABLE_BOOK, "&fチャットペースト", "&7CHAT_PASTE", "&7コピー用テキスト"))

    // Row 4: その他カテゴリ + アイテム
    inv.setItem(36, makeItem(Material.NOTE_BLOCK, "&bその他", "&7補助アクション"))
    inv.setItem(37, makeItem(Material.NOTE_BLOCK, "&bサウンドを再生", "&7SOUND", "&7サウンドGUIで選択"))

    fillMain(inv, Material.BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fスロット編集に戻る", "&7スロット $slot の編集へ戻ります")
    applyUiSkin(inv, "action_type")
    player.openInventory(inv)
  }

  // ── Action Manager (54-slot) ────────────────────────────────

  private fun openActionManageMenu(player: Player, session: GuiEditorSession, slot: Int) {
    val actions = session.slots[slot]?.actions ?: mutableListOf()
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList()
    val slotToIndex = actions.take(gridSlots.size).mapIndexed { i, _ -> gridSlots[i] to i }.toMap()
    val inv =
        Bukkit.createInventory(
            ActionManageHolder(session, slot, slotToIndex), 54, comp("&9GuiMaker &8- &dアクション管理"))
    placeItemPreview(inv, session, slot)

    inv.setItem(
        0,
        makeItem(
            Material.COMMAND_BLOCK,
            "&dアクション管理",
            "&7スロット $slot のアクションを編集します",
            "&7現在: &f${actions.size}件"))

    for ((rawSlot, index) in slotToIndex) {
      val action = actions[index]
      inv.setItem(rawSlot, makeActionItem(index, action, "&7クリックで編集・並べ替え・削除"))
    }
    if (actions.size > gridSlots.size) {
      inv.setItem(
          8,
          makeItem(
              Material.PAPER,
              "&e表示しきれないアクションがあります",
              "&7表示中: &f${gridSlots.size} / ${actions.size}"))
    }

    // Row 4: 追加・削除
    inv.setItem(37, makeItem(Material.LIME_DYE, "&aアクションを追加", "&7新しいアクションを末尾に追加します"))
    if (actions.isNotEmpty()) {
      inv.setItem(43, makeItem(Material.TNT, "&c全アクション削除", "&7確認画面を開きます"))
    }

    fillMain(inv, Material.PURPLE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fスロット編集に戻る", "&7スロット $slot の編集へ戻ります")
    applyUiSkin(inv, "action_manage")
    player.openInventory(inv)
  }

  private fun openActionEditMenu(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int
  ) {
    val action =
        session.slots[slot]?.actions?.getOrNull(actionIndex)
            ?: run {
              openActionManageMenu(player, session, slot)
              return
            }
    val inv =
        Bukkit.createInventory(
            ActionEditHolder(session, slot, actionIndex),
            54,
            comp("&9GuiMaker &8- &dアクション ${actionIndex + 1}"))
    placeItemPreview(inv, session, slot)

    inv.setItem(13, makeActionItem(actionIndex, action, "&7現在の設定"))
    inv.setItem(
        10,
        makeItem(
            Material.WRITABLE_BOOK,
            "&e値を編集",
            "&7対象: &f${GuiActionCatalog.paramLabel(action.type)}",
            "&7クリックで値を変更します"))
    inv.setItem(12, makeItem(Material.ARROW, "&b上へ移動", "&7実行順を1つ前にします"))
    inv.setItem(14, makeItem(Material.ARROW, "&b下へ移動", "&7実行順を1つ後ろにします"))
    inv.setItem(
        22,
        makeItem(
            Material.BOOK,
            "&f現在の値",
            *action.params.entries
                .map { "&7${it.key}: &f${it.value}" }
                .ifEmpty { listOf("&8パラメータなし") }
                .toTypedArray()))
    inv.setItem(
        31,
        makeItem(
            Material.WRITABLE_BOOK,
            "&e詳細パラメータを編集",
            "&7key=value 形式で複数指定します",
            "&7例: &fcommand=\"//stack {amount}\" confirm=true mode=op"))

    // Row 4: 追加・削除
    inv.setItem(37, makeItem(Material.COMMAND_BLOCK, "&aアクションを追加", "&7新しいアクションを末尾に追加します"))
    inv.setItem(43, makeItem(Material.BARRIER, "&cこのアクションを削除", "&7確認画面を開きます"))

    fillMain(inv, Material.PURPLE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fアクション一覧に戻る", "&7アクション管理へ戻ります")
    applyUiSkin(inv, "action_edit")
    player.openInventory(inv)
  }

  // ── Lore Manager (54-slot) ──────────────────────────────────

  private fun openLoreManageMenu(player: Player, session: GuiEditorSession, slot: Int) {
    val lore = session.slots[slot]?.lore ?: mutableListOf()
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList()
    val slotToIndex = lore.take(gridSlots.size).mapIndexed { i, _ -> gridSlots[i] to i }.toMap()
    val inv =
        Bukkit.createInventory(
            LoreManageHolder(session, slot, slotToIndex), 54, comp("&9GuiMaker &8- &eロア編集"))
    placeItemPreview(inv, session, slot)

    inv.setItem(
        0,
        makeItem(
            Material.WRITABLE_BOOK, "&eロア編集", "&7スロット $slot のロアを編集します", "&7現在: &f${lore.size}行"))

    for ((rawSlot, index) in slotToIndex) {
      inv.setItem(rawSlot, makeLoreItem(index, lore[index], "&7クリックで編集・並べ替え・削除"))
    }
    if (lore.size > gridSlots.size) {
      inv.setItem(
          8,
          makeItem(Material.PAPER, "&e表示しきれないロアがあります", "&7表示中: &f${gridSlots.size} / ${lore.size}"))
    }

    // Row 4: 追加・削除
    inv.setItem(37, makeItem(Material.BOOK, "&aロアを追加", "&7新しい行を末尾に追加します"))
    if (lore.isNotEmpty()) {
      inv.setItem(43, makeItem(Material.TNT, "&cロアを全削除", "&7確認画面を開きます"))
    }

    fillMain(inv, Material.YELLOW_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fスロット編集に戻る", "&7スロット $slot の編集へ戻ります")
    applyUiSkin(inv, "lore_manage")
    player.openInventory(inv)
  }

  private fun openLoreLineEditMenu(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      lineIndex: Int
  ) {
    val lore = session.slots[slot]?.lore ?: mutableListOf()
    val line =
        lore.getOrNull(lineIndex)
            ?: run {
              openLoreManageMenu(player, session, slot)
              return
            }
    val inv =
        Bukkit.createInventory(
            LoreLineEditHolder(session, slot, lineIndex),
            54,
            comp("&9GuiMaker &8- &eロア ${lineIndex + 1}"))
    placeItemPreview(inv, session, slot)

    inv.setItem(13, makeLoreItem(lineIndex, line, "&7現在の内容"))
    inv.setItem(10, makeItem(Material.WRITABLE_BOOK, "&e本文を編集", "&7カラー選択後にテキストを入力します"))
    inv.setItem(12, makeItem(Material.ARROW, "&b上へ移動", "&7表示順を1つ前にします"))
    inv.setItem(14, makeItem(Material.ARROW, "&b下へ移動", "&7表示順を1つ後ろにします"))

    // Row 4: 追加・削除
    inv.setItem(37, makeItem(Material.BOOK, "&aロアを追加", "&7新しい行を末尾に追加します"))
    inv.setItem(43, makeItem(Material.BARRIER, "&cこの行を削除", "&7確認画面を開きます"))

    fillMain(inv, Material.YELLOW_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fロア一覧に戻る", "&7ロア編集へ戻ります")
    applyUiSkin(inv, "lore_edit")
    player.openInventory(inv)
  }

  // ── Permission Picker (LuckPerms groups) ────────────────────

  private fun openPermissionPicker(player: Player, session: GuiEditorSession, canvasSlot: Int) {
    val allGroups = GuiPermissionCatalog.collectGroups()
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList()
    val slotToGroup =
        allGroups.take(gridSlots.size).mapIndexed { i, g -> gridSlots[i] to g }.toMap()
    val inv =
        Bukkit.createInventory(
            PermissionFlatHolder(session, canvasSlot, slotToGroup),
            54,
            comp("&9GuiMaker &8- &b権限グループ"))
    placeItemPreview(inv, session, canvasSlot)

    inv.setItem(
        0,
        makeItem(
            Material.IRON_DOOR,
            "&b権限を設定",
            "&7LuckPerms グループから選択します",
            "&7選択値は lpgroup:<group> として保存されます"))

    inv.setItem(9, makeItem(GuiPermissionCatalog.categoryMaterial("プレイヤーランク"), "&7プレイヤーランク"))
    inv.setItem(18, makeItem(GuiPermissionCatalog.categoryMaterial("建築ランク"), "&7建築ランク / 特別ロール"))
    inv.setItem(27, makeItem(GuiPermissionCatalog.categoryMaterial("スタッフ"), "&7スタッフ / その他"))

    for ((rawSlot, group) in slotToGroup) {
      inv.setItem(
          rawSlot,
          makeItem(
              GuiPermissionCatalog.groupMaterial(group),
              "&f${group.displayName}",
              "&7グループ: &f${group.name}",
              "&7カテゴリ: &f${group.category}",
              "&7保存値: &f${group.value}",
              "&7クリックで設定"))
    }
    inv.setItem(40, makeItem(Material.BARRIER, "&c権限をクリア", "&7このスロットの表示条件を解除します"))
    inv.setItem(42, makeItem(Material.WRITABLE_BOOK, "&f手入力", "&7特殊な条件や従来の権限ノードを入力します"))

    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fスロット編集に戻る", "&7スロット $canvasSlot の編集へ戻ります")
    applyUiSkin(inv, "permission")
    player.openInventory(inv)
  }

  private fun openPermissionGroupPicker(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      category: String,
      page: Int = 0
  ) {
    val groups = GuiPermissionCatalog.collectGroups().filter { it.category == category }
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList()
    val pageSize = gridSlots.size
    val maxPage = ((groups.size - 1).coerceAtLeast(0)) / pageSize
    val safePage = page.coerceIn(0, maxPage)
    val visible = groups.drop(safePage * pageSize).take(pageSize)
    val slotToGroup = visible.mapIndexed { i, group -> gridSlots[i] to group }.toMap()
    val inv =
        Bukkit.createInventory(
            PermissionGroupHolder(session, canvasSlot, category, safePage, slotToGroup),
            54,
            comp("&9GuiMaker &8- &b$category ${safePage + 1}/${maxPage + 1}"))

    inv.setItem(
        0,
        makeItem(
            GuiPermissionCatalog.categoryMaterial(category),
            "&b$category",
            "&7LuckPerms グループを選択します",
            "&7選択後、このグループ所属者だけに表示します"))
    for ((rawSlot, group) in slotToGroup) {
      inv.setItem(
          rawSlot,
          makeItem(
              GuiPermissionCatalog.groupMaterial(group),
              "&f${group.displayName}",
              "&7group: &f${group.name}",
              "&7保存値: &f${group.value}",
              "&7weight: &f${group.weight}",
              "&7クリックでこのグループ条件を設定"))
    }
    inv.setItem(36, makeItem(Material.ARROW, "&e前のページ", "&7$pageSize 件ずつ表示します"))
    inv.setItem(40, makeItem(Material.BOOK, "&bカテゴリへ戻る", "&7権限カテゴリに戻ります"))
    inv.setItem(42, makeItem(Material.WRITABLE_BOOK, "&f手入力", "&7特殊な条件や従来の権限ノードを入力します"))
    inv.setItem(44, makeItem(Material.ARROW, "&e次のページ", "&7$pageSize 件ずつ表示します"))

    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fカテゴリへ戻る", "&7権限カテゴリに戻ります")
    player.openInventory(inv)
  }

  // ── Sound Picker (54-slot) ──────────────────────────────────

  private fun openSoundCategoryPicker(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int? = null
  ) {
    val categories =
        listOf(
            Triple(10, "ui", Material.NOTE_BLOCK),
            Triple(11, "entity", Material.PLAYER_HEAD),
            Triple(12, "block", Material.STONE),
            Triple(13, "item", Material.CHEST),
            Triple(14, "music", Material.JUKEBOX),
            Triple(15, "ambient", Material.AMETHYST_BLOCK),
            Triple(16, "weather", Material.WATER_BUCKET),
            Triple(19, "event", Material.BELL),
        )
    val slotToCategory = categories.associate { (slot, category, _) -> slot to category }
    val inv =
        Bukkit.createInventory(
            SoundCategoryHolder(session, canvasSlot, actionIndex, slotToCategory),
            54,
            comp("&9GuiMaker &8- &b効果音カテゴリ"))
    placeItemPreview(inv, session, canvasSlot)

    inv.setItem(
        0, makeItem(Material.NOTE_BLOCK, "&b効果音", "&7カテゴリを選んでサウンド一覧を開きます", "&7左クリックで追加、右クリックで視聴"))
    for ((rawSlot, category, mat) in categories) {
      inv.setItem(
          rawSlot,
          makeItem(mat, "&b${category.uppercase(Locale.ROOT)}", "&7${category}. から始まるサウンドを表示します"))
    }
    inv.setItem(42, makeItem(Material.WRITABLE_BOOK, "&f手入力", "&7リソースパックのカスタムサウンドなど"))
    addSoundVolumeControls(inv, session)

    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fアクション選択に戻る", "&7アクション種類の選択へ戻ります")
    applyUiSkin(inv, "sound_category")
    player.openInventory(inv)
  }

  private fun openSoundPicker(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      category: String,
      page: Int = 0,
      actionIndex: Int? = null
  ) {
    val sounds = Sound.values().map { soundKey(it) }.filter { it.startsWith("$category.") }.sorted()
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList()
    val pageSize = gridSlots.size
    val maxPage = ((sounds.size - 1).coerceAtLeast(0)) / pageSize
    val safePage = page.coerceIn(0, maxPage)
    val visible = sounds.drop(safePage * pageSize).take(pageSize)
    val slotToSound = visible.mapIndexed { i, sound -> gridSlots[i] to sound }.toMap()
    val inv =
        Bukkit.createInventory(
            SoundPickHolder(session, canvasSlot, actionIndex, category, safePage, slotToSound),
            54,
            comp("&9GuiMaker &8- &b$category ${safePage + 1}/${maxPage + 1}"))
    placeItemPreview(inv, session, canvasSlot)

    inv.setItem(0, makeItem(Material.NOTE_BLOCK, "&b効果音: $category", "&7左クリックで追加", "&7右クリックで視聴のみ"))
    for ((rawSlot, sound) in slotToSound) {
      inv.setItem(
          rawSlot,
          makeItem(
              soundMaterial(sound),
              "&f$sound",
              "&7左クリック: SOUND を${if (actionIndex == null) "追加" else "更新"}",
              "&7右クリック: 視聴のみ",
              "&7音量: &f${formatVolume(session.soundVolume)}"))
    }
    inv.setItem(36, makeItem(Material.ARROW, "&e前のページ", "&7$pageSize 件ずつ表示します"))
    inv.setItem(40, makeItem(Material.BOOK, "&bカテゴリへ戻る", "&7別カテゴリを選択します"))
    inv.setItem(42, makeItem(Material.WRITABLE_BOOK, "&f手入力", "&7一覧にないサウンド名を入力します"))
    inv.setItem(44, makeItem(Material.ARROW, "&e次のページ", "&7$pageSize 件ずつ表示します"))
    addSoundVolumeControls(inv, session)

    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fカテゴリへ戻る", "&7効果音カテゴリに戻ります")
    applyUiSkin(inv, "sound_pick")
    player.openInventory(inv)
  }

  // ── Color Picker (54-slot) ──────────────────────────────────

  fun openColorPicker(player: Player, session: GuiEditorSession, canvasSlot: Int, target: String) {
    val inv =
        Bukkit.createInventory(
            ColorPickHolder(session, canvasSlot, target), 54, comp("&9GuiMaker &8- &fカラー"))
    placeItemPreview(inv, session, canvasSlot)

    data class ColorDef(val code: String, val name: String, val mat: Material)
    val colors =
        listOf(
            ColorDef("&0", "黒", Material.BLACK_WOOL),
            ColorDef("&1", "濃紺", Material.BLUE_WOOL),
            ColorDef("&2", "緑", Material.GREEN_WOOL),
            ColorDef("&3", "シアン", Material.CYAN_WOOL),
            ColorDef("&4", "濃赤", Material.RED_WOOL),
            ColorDef("&5", "紫", Material.PURPLE_WOOL),
            ColorDef("&6", "金色", Material.ORANGE_WOOL),
            ColorDef("&7", "灰色", Material.LIGHT_GRAY_WOOL),
            ColorDef("&8", "暗灰", Material.GRAY_WOOL),
            ColorDef("&9", "青", Material.LIGHT_BLUE_WOOL),
            ColorDef("&a", "黄緑", Material.LIME_WOOL),
            ColorDef("&b", "水色", Material.CYAN_WOOL),
            ColorDef("&c", "赤", Material.PINK_WOOL),
            ColorDef("&d", "ピンク", Material.MAGENTA_WOOL),
            ColorDef("&e", "黄色", Material.YELLOW_WOOL),
            ColorDef("&f", "白", Material.WHITE_WOOL),
        )
    val colorSlots = (10..17).toList() + (19..26).toList()
    inv.setItem(
        0, makeItem(Material.LIGHT_BLUE_CANDLE, "&bカラー", "&7${target.lowercase()} に付ける色を選択します"))
    colors.forEachIndexed { i, c ->
      inv.setItem(
          colorSlots[i],
          makeItem(
              c.mat, "&f● ${c.name}", "&7コード: &f${c.code}", "${c.code}テキストサンプル&r", "&7クリックで適用"))
    }
    inv.setItem(40, makeItem(Material.PAPER, "&fカラーなし / 手動入力", "&7&カラーコードを自分で書く場合"))
    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&f戻る", "&7前の編集画面に戻ります")
    applyUiSkin(inv, "color")
    player.openInventory(inv)
  }

  // ── Popup / Menu ID Picker (54-slot) ───────────────────────

  private fun openPopupPicker(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int? = null
  ) {
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList() + (37..43).toList()
    val popupMaterials =
        mapOf(
            "shopindex" to Material.CHEST,
            "utility" to Material.CRAFTING_TABLE,
            "channel" to Material.JUKEBOX,
            "sociallikes" to Material.HEART_OF_THE_SEA,
            "carbuilder" to Material.MINECART,
            "links" to Material.MAP)
    val entries =
        plugin.popupMenuLoader.getPopupIds().take(gridSlots.size).mapIndexed { index, id ->
          Triple(gridSlots[index], id, popupMaterials[id] ?: Material.CHORUS_FRUIT)
        }
    val slotToId = entries.associate { (s, id, _) -> s to id }
    val inv =
        Bukkit.createInventory(
            PopupPickHolder(session, canvasSlot, actionIndex, slotToId),
            54,
            comp("&9GuiMaker &8- &dポップアップ"))
    placeItemPreview(inv, session, canvasSlot)
    inv.setItem(0, makeItem(Material.CHORUS_FRUIT, "&dポップアップ", "&7OyasaiMenu のポップアップIDを選択します"))
    for ((s, id, mat) in entries) inv.setItem(s, makeItem(mat, "&d$id", "&7ID: &f$id", "&7クリックで選択"))
    inv.setItem(44, makeItem(Material.WRITABLE_BOOK, "&fIDを手入力", "&7一覧にないIDを直接入力"))
    fillMain(inv, Material.PURPLE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fアクション選択に戻る", "&7アクション種類の選択へ戻ります")
    applyUiSkin(inv, "popup_pick")
    player.openInventory(inv)
  }

  private fun openMenuPicker(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int? = null
  ) {
    val menuIds = GuiMakerExporter.listMenuIds(plugin)
    val gridSlots = (10..16).toList() + (19..25).toList() + (28..34).toList() + (37..43).toList()
    val slotToId = menuIds.take(gridSlots.size).mapIndexed { i, id -> gridSlots[i] to id }.toMap()
    val inv =
        Bukkit.createInventory(
            MenuIdPickHolder(session, canvasSlot, actionIndex, slotToId),
            54,
            comp("&9GuiMaker &8- &aメニュー"))
    placeItemPreview(inv, session, canvasSlot)
    inv.setItem(0, makeItem(Material.ENDER_CHEST, "&a通常メニュー", "&7OyasaiMenu のメニューIDを選択します"))
    for ((s, id) in slotToId) inv.setItem(
        s, makeItem(Material.ENDER_CHEST, "&a$id", "&7ID: &f$id", "&7クリックで選択"))
    inv.setItem(44, makeItem(Material.WRITABLE_BOOK, "&fIDを手入力", "&7一覧にないIDを直接入力"))
    fillMain(inv, Material.LIME_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fアクション選択に戻る", "&7アクション種類の選択へ戻ります")
    applyUiSkin(inv, "menu_pick")
    player.openInventory(inv)
  }

  private fun openSpecialMenuPicker(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int? = null
  ) {
    val entries =
        listOf(
            SpecialMenuChoice(
                "online_players",
                Material.PLAYER_HEAD,
                "&bオンラインプレイヤー",
                listOf("&7オンラインプレイヤー一覧を開きます", "&7クリックで /tp <player>")),
            SpecialMenuChoice(
                "confirm",
                Material.LIME_CONCRETE,
                "&a確認メニュー",
                listOf("&7実行前の確認画面です", "&7手入力で command を指定してください")))
    val gridSlots = listOf(20, 24)
    val slotToId = entries.mapIndexed { i, entry -> gridSlots[i] to entry.id }.toMap()
    val inv =
        Bukkit.createInventory(
            SpecialMenuPickHolder(session, canvasSlot, actionIndex, slotToId),
            54,
            comp("&9GuiMaker &8- &b特殊メニュー"))
    placeItemPreview(inv, session, canvasSlot)
    inv.setItem(0, makeItem(Material.ENDER_EYE, "&b特殊メニュー", "&7コード生成メニューを選択します"))
    entries.forEachIndexed { i, entry ->
      inv.setItem(
          gridSlots[i],
          makeItem(entry.material, entry.name, "&7ID: &f${entry.id}", *entry.lore.toTypedArray()))
    }
    inv.setItem(44, makeItem(Material.WRITABLE_BOOK, "&fIDを手入力", "&7一覧にない特殊メニューIDを直接入力"))
    fillMain(inv, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fアクション選択に戻る", "&7アクション種類の選択へ戻ります")
    applyUiSkin(inv, "special_pick")
    player.openInventory(inv)
  }

  // ── Favorites Manager ──────────────────────────────────────

  private fun openFavoritesManage(player: Player, session: GuiEditorSession, canvasSlot: Int) {
    val favs = getFavorites(player.uniqueId)
    val inv =
        Bukkit.createInventory(
            FavManageHolder(session, canvasSlot), 54, comp("&9GuiMaker &8- &6お気に入り"))
    placeItemPreview(inv, session, canvasSlot)

    inv.setItem(
        0,
        makeItem(
            if (favs.isEmpty()) Material.GRAY_DYE else Material.GOLD_NUGGET,
            "&6お気に入り管理",
            "&7登録数: &f${favs.size}/8",
            "&7左クリック: スロットに追加 / 右クリック: 削除"))

    val favSlots = (10..17).toList()
    favs.take(8).forEachIndexed { i, action ->
      inv.setItem(
          favSlots[i],
          makeActionItem(i, action, "&7左クリック: スロット $canvasSlot に追加", "&7右クリック: お気に入りから削除"))
    }
    if (favs.size < 8) {
      inv.setItem(37, makeItem(Material.PAPER, "&aお気に入りを追加", "&7アクション選択画面でアクションを選ぶと登録されます"))
    }
    if (favs.isNotEmpty()) {
      inv.setItem(43, makeItem(Material.TNT, "&c全削除", "&7即削除します (確認なし)"))
    }
    fillMain(inv, Material.YELLOW_STAINED_GLASS_PANE)
    applyEditorBar(player, inv, session, "&fスロット編集に戻る", "&7スロット $canvasSlot の編集へ戻ります")
    applyUiSkin(inv, "favorites")
    player.openInventory(inv)
  }

  private fun handleFavManageClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openContextMenu(player, session, canvasSlot)
    })
        return

    val favs = getFavorites(player.uniqueId)
    val favSlots = (10..17).toList()

    when (funcLabelAt("favorites", event.rawSlot)) {
      "お気に入りを追加" -> {
        session.favRegistering = true
        openActionTypeMenu(player, session, canvasSlot)
      }
      "全削除" -> {
        favs.clear()
        saveFavoritesToDisk(player.uniqueId)
        msg(player, "&e[GuiMaker] &a全お気に入りを削除しました。")
        openFavoritesManage(player, session, canvasSlot)
      }
      null -> {
        val fi = favSlots.indexOf(event.rawSlot)
        if (fi < 0 || fi >= favs.size) return
        if (event.click == ClickType.RIGHT || event.click == ClickType.SHIFT_RIGHT) {
          favs.removeAt(fi)
          saveFavoritesToDisk(player.uniqueId)
          msg(player, "&e[GuiMaker] &aお気に入りを削除しました。")
          openFavoritesManage(player, session, canvasSlot)
        } else {
          val action = favs[fi]
          addActionToSlot(session, canvasSlot, action.copy(params = action.params.toMap()))
          applyPdcToItem(session, canvasSlot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &a${action.type} を追加しました。")
          openContextMenu(player, session, canvasSlot)
        }
      }
      else -> {}
    }
  }

  // ── Events ─────────────────────────────────────────────────

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    when (val holder = event.inventory.holder) {
      is HubHolder -> handleHubClick(event, player)
      is SurfaceListHolder -> handleSurfaceListClick(event, player, holder)
      is UiScreenListHolder -> handleUiScreenListClick(event, player, holder)
      is SpecialSurfaceHubHolder -> handleSpecialSurfaceHubClick(event, player)
      is CanvasHolder -> handleCanvasClick(event, player, holder.session)
      is ContextHolder -> handleContextClick(event, player, holder.session, holder.slot)
      is LoreManageHolder ->
          handleLoreManageClick(event, player, holder.session, holder.slot, holder.slotToIndex)
      is LoreLineEditHolder ->
          handleLoreLineEditClick(event, player, holder.session, holder.slot, holder.lineIndex)
      is ActionManageHolder ->
          handleActionManageClick(event, player, holder.session, holder.slot, holder.slotToIndex)
      is ActionEditHolder ->
          handleActionEditClick(event, player, holder.session, holder.slot, holder.actionIndex)
      is ActionTypeHolder -> handleActionTypeClick(event, player, holder.session, holder.slot)
      is PermissionFlatHolder ->
          handlePermissionFlatClick(
              event, player, holder.session, holder.canvasSlot, holder.slotToGroup)
      is PermissionCategoryHolder ->
          handlePermissionCategoryClick(
              event, player, holder.session, holder.canvasSlot, holder.slotToCategory)
      is PermissionGroupHolder ->
          handlePermissionGroupClick(
              event,
              player,
              holder.session,
              holder.canvasSlot,
              holder.category,
              holder.page,
              holder.slotToGroup)
      is SoundCategoryHolder ->
          handleSoundCategoryClick(
              event,
              player,
              holder.session,
              holder.canvasSlot,
              holder.actionIndex,
              holder.slotToCategory)
      is SoundPickHolder ->
          handleSoundPickClick(
              event,
              player,
              holder.session,
              holder.canvasSlot,
              holder.actionIndex,
              holder.category,
              holder.page,
              holder.slotToSound)
      is ColorPickHolder ->
          handleColorPickClick(event, player, holder.session, holder.canvasSlot, holder.target)
      is PopupPickHolder ->
          handlePopupPickClick(
              event, player, holder.session, holder.canvasSlot, holder.actionIndex, holder.slotToId)
      is MenuIdPickHolder ->
          handleMenuPickClick(
              event, player, holder.session, holder.canvasSlot, holder.actionIndex, holder.slotToId)
      is SpecialMenuPickHolder ->
          handleSpecialMenuPickClick(
              event, player, holder.session, holder.canvasSlot, holder.actionIndex, holder.slotToId)
      is FavManageHolder -> handleFavManageClick(event, player, holder.session, holder.canvasSlot)
      is ConfirmHolder ->
          handleConfirmClick(
              event, player, holder.session, holder.slot, holder.actionIndex, holder.kind)
      is PreviewHolder -> handlePreviewClick(event, player, holder.session)
      is UiSkinHolder -> handleUiSkinEditorClick(event, player, holder)
      is UiSkinBlockPickerHolder -> handleUiSkinBlockPickerClick(event, player, holder)
      is PopupSettingsHolder -> handlePopupSettingsClick(event, player, holder)
      is TemplateHubHolder -> handleTemplateHubClick(event, player, holder)
      is TemplateDeleteConfirmHolder -> handleTemplateDeleteConfirmClick(event, player, holder)
    }
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryDrag(event: InventoryDragEvent) {
    val holder = event.inventory.holder as? CanvasHolder ?: return
    if (holder.session.surface != GuiEditableSurface.POPUP) return
    if (event.rawSlots.any { it in 45..53 }) {
      event.isCancelled = true
      (event.whoClicked as? Player)?.let { msg(it, "&e[GuiMaker] &cPopup の slot 45-53 はナビバー予約です。") }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    when (val holder = event.inventory.holder) {
      is CanvasHolder -> saveWorkingCopy(holder.session)
      is UiSkinHolder -> {
        // スキンエディタ閉鎖時: カーソルにスキンアイテムが残っていれば破棄
        val player = event.player as? Player ?: return
        Bukkit.getScheduler()
            .runTaskLater(
                plugin,
                Runnable {
                  val cursor =
                      player.itemOnCursor?.takeIf { it.type != Material.AIR } ?: return@Runnable
                  if (cursor.itemMeta
                      ?.persistentDataContainer
                      ?.has(KEY_SKIN_ITEM, PersistentDataType.STRING) == true) {
                    player.setItemOnCursor(ItemStack(Material.AIR))
                  }
                },
                1L)
      }
      else -> {}
    }
  }

  private fun handleHubClick(event: InventoryClickEvent, player: Player) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    when (funcLabelAt("hub", event.rawSlot)) {
      "通常GUI" -> openNormalMenuList(player)
      "Popupメニュー" -> openPopupMenuList(player)
      "特殊メニュー" -> openSpecialSurfaceHub(player)
      "GUI Maker UI" -> openUiScreenList(player)
      "テンプレート / 公式ブロック" -> {
        openTemplateLibrary(player)
      }
      "ヘルプ" -> {
        player.closeInventory()
        Bukkit.getScheduler()
            .runTaskLater(plugin, Runnable { player.performCommand("guimaker help") }, 1L)
      }
      "閉じる" -> player.closeInventory()
    }
  }

  private fun handleSurfaceListClick(
      event: InventoryClickEvent,
      player: Player,
      holder: SurfaceListHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    val ids =
        when (holder.surface) {
          GuiEditableSurface.NORMAL -> NormalMenuAdapter.listIds(plugin)
          GuiEditableSurface.POPUP -> PopupMenuAdapter.listIds(plugin)
        }
    val grid = listGridSlots()
    val maxPage = ((ids.size - 1).coerceAtLeast(0)) / grid.size
    when (funcLabelAt("surface_list", event.rawSlot)) {
      "編集ハブへ戻る" -> openHub(player)
      "前のページ" ->
          when (holder.surface) {
            GuiEditableSurface.NORMAL ->
                openNormalMenuList(player, holder.page.coerceAtLeast(0) - 1)
            GuiEditableSurface.POPUP -> openPopupMenuList(player, holder.page.coerceAtLeast(0) - 1)
          }
      "次のページ" ->
          when (holder.surface) {
            GuiEditableSurface.NORMAL ->
                openNormalMenuList(player, holder.page.coerceAtLeast(0) + 1)
            GuiEditableSurface.POPUP -> openPopupMenuList(player, holder.page.coerceAtLeast(0) + 1)
          }
      "新規作成" -> {
        player.closeInventory()
        val command =
            if (holder.surface == GuiEditableSurface.POPUP) "guimaker popup new <id>"
            else "guimaker new <id>"
        msg(player, "&e[GuiMaker] &f新規作成: &a/$command")
      }
      else -> {
        val gridIndex = grid.indexOf(event.rawSlot)
        if (gridIndex < 0) return
        val id = ids.getOrNull(holder.page.coerceIn(0, maxPage) * grid.size + gridIndex) ?: return
        val session =
            when (holder.surface) {
              GuiEditableSurface.NORMAL -> NormalMenuAdapter.load(plugin, id)
              GuiEditableSurface.POPUP -> PopupMenuAdapter.load(plugin, id)
            }
                ?: run {
                  msg(player, "&e[GuiMaker] &c読み込みに失敗しました: &f$id")
                  return
                }
        sessions[player.uniqueId] = session
        openCanvas(player, session)
        msg(player, "&e[GuiMaker] &a${session.displayId} を開きました。")
      }
    }
  }

  private fun handleUiScreenListClick(
      event: InventoryClickEvent,
      player: Player,
      holder: UiScreenListHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    val screens = uiScreenNames()
    val grid = listGridSlots()
    when (funcLabelAt("ui_screen_list", event.rawSlot)) {
      "編集ハブへ戻る" -> openHub(player)
      "前のページ" -> openUiScreenList(player, holder.page.coerceAtLeast(0) - 1)
      "次のページ" -> openUiScreenList(player, holder.page.coerceAtLeast(0) + 1)
      else -> {
        val index = grid.indexOf(event.rawSlot)
        if (index < 0) return
        val safePage = holder.page.coerceIn(0, ((screens.size - 1).coerceAtLeast(0)) / grid.size)
        val screen = screens.getOrNull(safePage * grid.size + index) ?: return
        openUiSkinEditor(player, screen)
      }
    }
  }

  private fun handleSpecialSurfaceHubClick(event: InventoryClickEvent, player: Player) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    when (funcLabelAt("special_surface", event.rawSlot)) {
      "オンラインプレイヤー一覧" ->
          if (event.isRightClick) plugin.specialMenuEngine.open(player, "online_players")
          else openSpecialBlockEditor(player, "online_players")
      "確認ボタンメニュー" ->
          if (event.isRightClick)
              plugin.specialMenuEngine.openConfirmCommand(
                  player, "say GuiMaker confirm sample", "player")
          else openSpecialBlockEditor(player, "confirm_command")
      "可変コマンドメニュー" ->
          if (event.isRightClick) {
            player.closeInventory()
            msg(player, "&e[GuiMaker] &f可変コマンドはアクション種別 &aPARAM_COMMAND &fで配置します。")
            msg(player, "&7例: &f/guimaker edit root action 10 PARAM_COMMAND \"//stack {amount}\"")
          } else {
            openSpecialBlockEditor(player, "parameter_command")
          }
      "通常GUIへ配置" -> openNormalMenuList(player)
      "編集ハブへ戻る" -> openHub(player)
    }
  }

  private fun openSpecialBlockEditor(player: Player, presetId: String) {
    val preset =
        specialBlockPresets().firstOrNull { it.id == presetId }
            ?: run {
              msg(player, "&e[GuiMaker] &c特殊ブロックが見つかりません: &f$presetId")
              return
            }
    ensureOfficialTemplateBlocks()
    val session = GuiEditorSession("special_blocks/${preset.id}", "&8特殊ブロック: ${preset.id}", 54)
    val def =
        GuiSlotDef(
            name = preset.name,
            lore = preset.lore.toMutableList(),
            actions = preset.actions.map { it.copy(params = it.params.toMap()) }.toMutableList())
    session.contextSlot = TEMPLATE_BLOCK_EDIT_SLOT
    session.templateEditTarget =
        GuiTemplateStore.listTemplates(plugin, player).firstOrNull {
          it.scope == GuiTemplateScope.SHARED &&
              it.kind == GuiTemplateKind.BLOCK &&
              it.id == "special/${preset.id}"
        }
    session.canvasInventory = Bukkit.createInventory(null, session.menuSize)
    session.canvasInventory?.setItem(
        TEMPLATE_BLOCK_EDIT_SLOT, GuiTemplateStore.buildBlockItem(preset.material, def))
    session.slots[TEMPLATE_BLOCK_EDIT_SLOT] = def
    sessions[player.uniqueId] = session
    applyPdcToItem(session, TEMPLATE_BLOCK_EDIT_SLOT)
    msg(player, "&e[GuiMaker] &a特殊ブロック編集を開始しました: &f${preset.id}")
    openContextMenu(player, session, TEMPLATE_BLOCK_EDIT_SLOT)
  }

  // ── Canvas Click ────────────────────────────────────────────

  private fun handleCanvasClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession
  ) {
    if (event.clickedInventory == player.inventory) {
      if (event.isShiftClick) event.isCancelled = true
      return
    }
    val slot = event.rawSlot
    if (slot >= session.menuSize) return
    if (session.surface == GuiEditableSurface.POPUP && slot in 45..53) {
      event.isCancelled = true
      if (slot == POPUP_RESERVED_BACK_SLOT) {
        openPopupSettings(player, session)
        return
      }
      msg(player, "&e[GuiMaker] &cPopup の slot 45-53 はナビバー予約です。")
      return
    }

    when (event.click) {
      ClickType.RIGHT,
      ClickType.SHIFT_RIGHT -> {
        event.isCancelled = true
        if (event.currentItem?.type != Material.AIR) openContextMenu(player, session, slot)
      }
      ClickType.SHIFT_LEFT -> event.isCancelled = true
      else -> {
        // アイテムが移動した後に PDC からスロット情報を再構築する
        Bukkit.getScheduler()
            .runTaskLater(plugin, Runnable { rebuildSlotsFromInventory(session) }, 1L)
      }
    }
  }

  // ── Context Click ───────────────────────────────────────────

  private fun handleContextClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) { openCanvas(player, session) }) return
    val s = event.rawSlot
    when (funcLabelAt("context", s)) {
      "名前を設定" -> openColorPicker(player, session, slot, "NAME")
      "ロアを追加" -> openColorPicker(player, session, slot, "LORE")
      "ロア編集" -> openLoreManageMenu(player, session, slot)
      "エンチャント切替" -> toggleSlotEnchant(player, session, slot)
      "権限を設定" -> openPermissionPicker(player, session, slot)
      "アクションを追加" -> openActionTypeMenu(player, session, slot)
      "アクション管理" -> openActionManageMenu(player, session, slot)
      "スロットをクリア" -> openConfirm(player, session, slot, "CLEAR_SLOT")
      "お気に入りカテゴリ",
      "お気に入りを管理" -> openFavoritesManage(player, session, slot)
      null -> {
        // お気に入りショートカット（動的スロット 38-44）
        if (s in 38..44) {
          val fi = s - 38
          val favs = getFavorites(player.uniqueId)
          val action = favs.getOrNull(fi) ?: return
          addActionToSlot(session, slot, action.copy(params = action.params.toMap()))
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aお気に入り ${action.type} を追加しました。")
          openContextMenu(player, session, slot)
        }
      }
      else -> {}
    }
  }

  // ── Lore Manager Click ──────────────────────────────────────

  private fun handleLoreManageClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      slotToIndex: Map<Int, Int>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openContextMenu(player, session, slot)
    })
        return

    when (funcLabelAt("lore_manage", event.rawSlot)) {
      "ロアを追加" -> openColorPicker(player, session, slot, "LORE")
      "ロアを全削除" -> openConfirm(player, session, slot, "CLEAR_LORE")
      null -> {
        val index = slotToIndex[event.rawSlot] ?: return
        openLoreLineEditMenu(player, session, slot, index)
      }
      else -> {}
    }
  }

  private fun handleLoreLineEditClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      lineIndex: Int
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openLoreManageMenu(player, session, slot)
    })
        return

    val lore = session.slots[slot]?.lore ?: return
    when (funcLabelAt("lore_edit", event.rawSlot)) {
      "本文を編集" -> openColorPicker(player, session, slot, "LORE_EDIT:$lineIndex")
      "上へ移動" -> {
        if (lineIndex > 0) {
          java.util.Collections.swap(lore, lineIndex, lineIndex - 1)
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aロア行を上へ移動しました。")
          openLoreLineEditMenu(player, session, slot, lineIndex - 1)
        }
      }
      "下へ移動" -> {
        if (lineIndex < lore.lastIndex) {
          java.util.Collections.swap(lore, lineIndex, lineIndex + 1)
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aロア行を下へ移動しました。")
          openLoreLineEditMenu(player, session, slot, lineIndex + 1)
        }
      }
      "ロアを追加" -> openColorPicker(player, session, slot, "LORE")
      "この行を削除" -> openConfirm(player, session, slot, "DELETE_LORE", lineIndex)
      else -> {}
    }
  }

  // ── Action Manager Click ────────────────────────────────────

  private fun handleActionManageClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      slotToIndex: Map<Int, Int>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openContextMenu(player, session, slot)
    })
        return

    when (funcLabelAt("action_manage", event.rawSlot)) {
      "アクションを追加" -> openActionTypeMenu(player, session, slot)
      "全アクション削除" -> openConfirm(player, session, slot, "CLEAR_ACTIONS")
      null -> {
        val index = slotToIndex[event.rawSlot] ?: return
        openActionEditMenu(player, session, slot, index)
      }
      else -> {}
    }
  }

  private fun handleActionEditClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openActionManageMenu(player, session, slot)
    })
        return

    val actions = session.slots[slot]?.actions ?: return
    val action =
        actions.getOrNull(actionIndex)
            ?: run {
              openActionManageMenu(player, session, slot)
              return
            }
    when (funcLabelAt("action_edit", event.rawSlot)) {
      "値を編集" -> startActionValueEdit(player, session, slot, actionIndex, action)
      "詳細パラメータを編集" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionRawParams(slot, actionIndex)
        msg(player, "&e[GuiMaker] &f詳細パラメータを key=value 形式で入力してください。")
        msg(player, "&7例: &fcommand=\"//stack {amount}\" confirm=true mode=op")
      }
      "上へ移動" -> {
        if (actionIndex > 0) {
          java.util.Collections.swap(actions, actionIndex, actionIndex - 1)
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aアクションを上へ移動しました。")
          openActionEditMenu(player, session, slot, actionIndex - 1)
        }
      }
      "下へ移動" -> {
        if (actionIndex < actions.lastIndex) {
          java.util.Collections.swap(actions, actionIndex, actionIndex + 1)
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aアクションを下へ移動しました。")
          openActionEditMenu(player, session, slot, actionIndex + 1)
        }
      }
      "アクションを追加" -> openActionTypeMenu(player, session, slot)
      "このアクションを削除" -> openConfirm(player, session, slot, "DELETE_ACTION", actionIndex)
      else -> {}
    }
  }

  // ── Action Type Click ───────────────────────────────────────

  private fun handleActionTypeClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openContextMenu(player, session, slot)
    })
        return

    val funcLabel = funcLabelAt("action_type", event.rawSlot)
    when (funcLabel) {
      "メニューを開く" -> {
        openMenuPicker(player, session, slot)
        return
      }
      "ポップアップ" -> {
        openPopupPicker(player, session, slot)
        return
      }
      "特殊メニュー" -> {
        openSpecialMenuPicker(player, session, slot)
        return
      }
      "ショップ" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(slot, "OPEN_SHOP")
        msg(player, "&e[GuiMaker] &fショップカテゴリIDを入力:")
        return
      }
      "ポイントショップ" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(slot, "OPEN_POINT_SHOP")
        msg(player, "&e[GuiMaker] &fポイントショップカテゴリIDを入力:")
        return
      }
      "一括売却" -> {
        finishActionOrFav(
            player,
            session,
            slot,
            null,
            GuiActionDef("OPEN_SELL"),
            "&e[GuiMaker] &aOPEN_SELL を追加しました。") {
              openContextMenu(player, session, slot)
            }
        return
      }
      "メニューを閉じる" -> {
        finishActionOrFav(
            player, session, slot, null, GuiActionDef("CLOSE"), "&e[GuiMaker] &aCLOSE を追加しました。") {
              openContextMenu(player, session, slot)
            }
        return
      }
      "サウンドを再生",
      "効果音" -> {
        session.soundVolume = 1.0f
        openSoundCategoryPicker(player, session, slot)
        return
      }
    }
    val (type, prompt) = GuiActionCatalog.textInputChoice(funcLabel) ?: return
    player.closeInventory()
    session.pendingInput = PendingInput.ActionParam(slot, type)
    msg(player, "&e[GuiMaker] &f$prompt")
  }

  // ── Permission / Sound Click ────────────────────────────────

  private fun handlePermissionFlatClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      slotToGroup: Map<Int, PermissionGroupChoice>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openContextMenu(player, session, canvasSlot)
    })
        return
    when (funcLabelAt("permission", event.rawSlot)) {
      "権限をクリア" -> {
        session.slots.getOrPut(canvasSlot) { GuiSlotDef() }.permission = null
        applyPdcToItem(session, canvasSlot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &a権限をクリアしました。")
        openContextMenu(player, session, canvasSlot)
      }
      "手入力" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.Permission(canvasSlot)
        msg(player, "&e[GuiMaker] &f権限ノードを入力 (空欄でクリア):")
      }
      null -> {
        val group = slotToGroup[event.rawSlot] ?: return
        session.slots.getOrPut(canvasSlot) { GuiSlotDef() }.permission = group.value
        applyPdcToItem(session, canvasSlot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &a表示グループを設定: &f${group.displayName} &7(${group.value})")
        openContextMenu(player, session, canvasSlot)
      }
      else -> {}
    }
  }

  private fun handlePermissionCategoryClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      slotToCategory: Map<Int, String>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openContextMenu(player, session, canvasSlot)
    })
        return

    when (event.rawSlot) {
      40 -> {
        session.slots.getOrPut(canvasSlot) { GuiSlotDef() }.permission = null
        applyPdcToItem(session, canvasSlot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &a権限をクリアしました。")
        openContextMenu(player, session, canvasSlot)
      }
      42 -> {
        player.closeInventory()
        session.pendingInput = PendingInput.Permission(canvasSlot)
        msg(player, "&e[GuiMaker] &f権限ノードを入力 (空欄でクリア):")
      }
      else -> {
        val category = slotToCategory[event.rawSlot] ?: return
        openPermissionGroupPicker(player, session, canvasSlot, category)
      }
    }
  }

  private fun handlePermissionGroupClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      category: String,
      page: Int,
      slotToGroup: Map<Int, PermissionGroupChoice>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openPermissionPicker(player, session, canvasSlot)
    })
        return

    when (event.rawSlot) {
      36 -> openPermissionGroupPicker(player, session, canvasSlot, category, page - 1)
      40 -> openPermissionPicker(player, session, canvasSlot)
      42 -> {
        player.closeInventory()
        session.pendingInput = PendingInput.Permission(canvasSlot)
        msg(player, "&e[GuiMaker] &f権限ノードを入力 (空欄でクリア):")
      }
      44 -> openPermissionGroupPicker(player, session, canvasSlot, category, page + 1)
      else -> {
        val group = slotToGroup[event.rawSlot] ?: return
        val permission = group.value
        session.slots.getOrPut(canvasSlot) { GuiSlotDef() }.permission = permission
        applyPdcToItem(session, canvasSlot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &a表示グループを設定: &f${group.displayName} &7($permission)")
        openContextMenu(player, session, canvasSlot)
      }
    }
  }

  private fun handleSoundCategoryClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int?,
      slotToCategory: Map<Int, String>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      if (actionIndex == null) openActionTypeMenu(player, session, canvasSlot)
      else openActionEditMenu(player, session, canvasSlot, actionIndex)
    })
        return
    val funcLabel = funcLabelAt("sound_category", event.rawSlot)
    if (handleSoundVolumeClick(funcLabel, player, session) {
      openSoundCategoryPicker(player, session, canvasSlot, actionIndex)
    })
        return

    val category = funcLabel?.takeIf { it in SOUND_CATEGORIES }

    if (category != null) {
      openSoundPicker(player, session, canvasSlot, category, actionIndex = actionIndex)
      return
    }

    when (funcLabel) {
      "手入力" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(canvasSlot, "SOUND", actionIndex)
        msg(player, "&e[GuiMaker] &fサウンド名を入力 (例: entity.experience_orb.pickup):")
      }
      else -> {}
    }
  }

  private fun handleSoundPickClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int?,
      category: String,
      page: Int,
      slotToSound: Map<Int, String>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      openSoundCategoryPicker(player, session, canvasSlot, actionIndex)
    })
        return
    val funcLabel = funcLabelAt("sound_pick", event.rawSlot) ?: soundPickFixedLabels[event.rawSlot]
    if (handleSoundVolumeClick(funcLabel, player, session) {
      openSoundPicker(player, session, canvasSlot, category, page, actionIndex)
    })
        return

    when (funcLabel) {
      "前のページ" -> openSoundPicker(player, session, canvasSlot, category, page - 1, actionIndex)
      "カテゴリへ戻る" -> openSoundCategoryPicker(player, session, canvasSlot, actionIndex)
      "手入力" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(canvasSlot, "SOUND", actionIndex)
        msg(player, "&e[GuiMaker] &fサウンド名を入力 (例: entity.experience_orb.pickup):")
      }
      "次のページ" -> openSoundPicker(player, session, canvasSlot, category, page + 1, actionIndex)
      null -> {
        val sound = slotToSound[event.rawSlot] ?: return
        if (event.click == ClickType.RIGHT || event.click == ClickType.SHIFT_RIGHT) {
          playSoundPreview(player, sound, session.soundVolume)
          msg(player, "&e[GuiMaker] &b視聴: &f$sound &7volume=${formatVolume(session.soundVolume)}")
          return
        }
        val action =
            GuiActionDef(
                "SOUND", mapOf("sound" to sound, "volume" to formatVolume(session.soundVolume)))
        finishActionOrFav(
            player,
            session,
            canvasSlot,
            actionIndex,
            action,
            "&e[GuiMaker] &aSOUND を${if (actionIndex == null) "追加" else "更新"}: &f$sound &7volume=${formatVolume(session.soundVolume)}") {
              openContextMenu(player, session, canvasSlot)
            }
      }
    }
  }

  // ── Color Pick Click ────────────────────────────────────────

  private fun handleColorPickClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      target: String
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      if (canvasSlot == -1) openCanvas(player, session)
      else openContextMenu(player, session, canvasSlot)
    })
        return

    val colorCode =
        when (funcLabelAt("color", event.rawSlot)) {
          "カラーなし / 手動入力" -> ""
          null -> return
          else -> {
            // ラベル末尾が "&X" 形式のカラーコード
            funcLabelAt("color", event.rawSlot)?.substringAfterLast(" ")?.takeIf {
              it.startsWith("&") && it.length == 2
            } ?: return
          }
        }

    player.closeInventory()
    val preview = if (colorCode.isEmpty()) "" else " &8(${colorCode}色&8)"
    when (target) {
      "NAME" -> {
        session.pendingInput = PendingInput.ItemName(canvasSlot, colorCode)
        msg(player, "&e[GuiMaker] &fアイテム名を入力$preview&f:")
      }
      "LORE" -> {
        session.pendingInput = PendingInput.LoreLine(canvasSlot, colorCode)
        msg(player, "&e[GuiMaker] &fロア行を入力$preview&f:")
      }
      "TITLE" -> {
        session.pendingInput = PendingInput.MenuTitle(colorCode)
        msg(player, "&e[GuiMaker] &fタイトルを入力$preview&f:")
      }
      else -> {
        if (target.startsWith("LORE_EDIT:")) {
          val index = target.substringAfter(':').toIntOrNull() ?: return
          session.pendingInput = PendingInput.LoreEdit(canvasSlot, index, colorCode)
          msg(player, "&e[GuiMaker] &fロア行 ${index + 1} の本文を入力$preview&f:")
        }
      }
    }
  }

  // ── Popup / Menu Pick Click ─────────────────────────────────

  private fun handlePopupPickClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int?,
      slotToId: Map<Int, String>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      if (actionIndex == null) openActionTypeMenu(player, session, canvasSlot)
      else openActionEditMenu(player, session, canvasSlot, actionIndex)
    })
        return
    when (funcLabelAt("popup_pick", event.rawSlot)) {
      "IDを手入力" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(canvasSlot, "OPEN_POPUP", actionIndex)
        msg(player, "&e[GuiMaker] &fポップアップIDを入力:")
      }
      else -> {
        val id = slotToId[event.rawSlot] ?: return
        finishActionOrFav(
            player,
            session,
            canvasSlot,
            actionIndex,
            GuiActionDef("OPEN_POPUP", mapOf("target" to id)),
            "&e[GuiMaker] &aOPEN_POPUP ($id) を${if (actionIndex == null) "追加" else "更新"}しました。") {
              openContextMenu(player, session, canvasSlot)
            }
      }
    }
  }

  private fun handleMenuPickClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int?,
      slotToId: Map<Int, String>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      if (actionIndex == null) openActionTypeMenu(player, session, canvasSlot)
      else openActionEditMenu(player, session, canvasSlot, actionIndex)
    })
        return
    when (funcLabelAt("menu_pick", event.rawSlot)) {
      "IDを手入力" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(canvasSlot, "OPEN_MENU", actionIndex)
        msg(player, "&e[GuiMaker] &fメニューIDを入力:")
      }
      null -> {
        val id = slotToId[event.rawSlot] ?: return
        finishActionOrFav(
            player,
            session,
            canvasSlot,
            actionIndex,
            GuiActionDef("OPEN_MENU", mapOf("target" to id)),
            "&e[GuiMaker] &aOPEN_MENU ($id) を${if (actionIndex == null) "追加" else "更新"}しました。") {
              openContextMenu(player, session, canvasSlot)
            }
      }
      else -> {}
    }
  }

  private fun handleSpecialMenuPickClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int?,
      slotToId: Map<Int, String>
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (handleEditorBarClick(event.rawSlot, player, session) {
      if (actionIndex == null) openActionTypeMenu(player, session, canvasSlot)
      else openActionEditMenu(player, session, canvasSlot, actionIndex)
    })
        return
    when (funcLabelAt("special_pick", event.rawSlot)) {
      "IDを手入力" -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(canvasSlot, "OPEN_SPECIAL", actionIndex)
        msg(player, "&e[GuiMaker] &f特殊メニューIDを入力:")
      }
      else -> {
        val id = slotToId[event.rawSlot] ?: return
        finishActionOrFav(
            player,
            session,
            canvasSlot,
            actionIndex,
            GuiActionDef("OPEN_SPECIAL", mapOf("target" to id)),
            "&e[GuiMaker] &aOPEN_SPECIAL ($id) を${if (actionIndex == null) "追加" else "更新"}しました。") {
              openContextMenu(player, session, canvasSlot)
            }
      }
    }
  }

  private data class SpecialMenuChoice(
      val id: String,
      val material: Material,
      val name: String,
      val lore: List<String>
  )

  // ── Confirm Click ───────────────────────────────────────────

  private fun openConfirm(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      kind: String,
      actionIndex: Int? = null
  ) {
    val (title, detail) =
        when (kind) {
          "CLEAR_LORE" -> "&cロアをクリアしますか？" to "&7このスロットのロアを全て削除します"
          "CLEAR_ACTIONS" -> "&c全アクションを削除しますか？" to "&7このスロットのアクションを全て削除します"
          "CLEAR_SLOT" -> "&cスロットをクリアしますか？" to "&7アイテムと設定を全て削除します"
          "DELETE_LORE" -> "&cロア行を削除しますか？" to "&7ロア行 ${((actionIndex ?: 0) + 1)} を削除します"
          "DELETE_ACTION" -> "&cアクションを削除しますか？" to "&7アクション ${((actionIndex ?: 0) + 1)} を削除します"
          else -> "&c削除しますか？" to "&7この操作は元に戻せません"
        }
    val inv =
        Bukkit.createInventory(
            ConfirmHolder(session, slot, actionIndex, kind), 54, comp("&9GuiMaker &8- &c確認"))
    inv.setItem(13, makeItem(Material.TNT, title, detail, "&7対象スロット: &f$slot"))
    inv.setItem(20, makeItem(Material.LIME_CONCRETE, "&a実行する", "&7クリックで削除を確定します"))
    inv.setItem(24, makeItem(Material.RED_CONCRETE, "&cキャンセル", "&7前の画面に戻ります"))
    fillMain(inv, Material.RED_STAINED_GLASS_PANE)
    applyUiSkin(inv, "confirm")
    player.openInventory(inv)
  }

  private fun handleConfirmClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int?,
      kind: String
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    when (funcLabelAt("confirm", event.rawSlot)) {
      "実行する" -> executeConfirmedDelete(player, session, slot, actionIndex, kind)
      "キャンセル" -> returnFromConfirm(player, session, slot, actionIndex, kind)
      else -> {}
    }
  }

  private fun executeConfirmedDelete(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int?,
      kind: String
  ) {
    when (kind) {
      "CLEAR_LORE" -> {
        session.slots.getOrPut(slot) { GuiSlotDef() }.lore.clear()
        applyPdcToItem(session, slot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &aロアをクリアしました。")
        openLoreManageMenu(player, session, slot)
      }
      "CLEAR_ACTIONS" -> {
        session.slots.getOrPut(slot) { GuiSlotDef() }.actions.clear()
        applyPdcToItem(session, slot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &aアクションを全て削除しました。")
        openContextMenu(player, session, slot)
      }
      "CLEAR_SLOT" -> {
        session.canvasInventory?.setItem(slot, null)
        session.slots.remove(slot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &aスロット $slot をクリアしました。")
        openCanvas(player, session)
      }
      "DELETE_ACTION" -> {
        val actions = session.slots[slot]?.actions
        val index = actionIndex
        if (actions != null && index != null && index in actions.indices) {
          actions.removeAt(index)
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aアクションを削除しました。")
        }
        openActionManageMenu(player, session, slot)
      }
      "DELETE_LORE" -> {
        val lore = session.slots[slot]?.lore
        val index = actionIndex
        if (lore != null && index != null && index in lore.indices) {
          lore.removeAt(index)
          applyPdcToItem(session, slot)
          saveWorkingCopy(session)
          msg(player, "&e[GuiMaker] &aロア行を削除しました。")
        }
        openLoreManageMenu(player, session, slot)
      }
      else -> openContextMenu(player, session, slot)
    }
  }

  private fun returnFromConfirm(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int?,
      kind: String
  ) {
    when (kind) {
      "DELETE_ACTION" ->
          if (actionIndex != null) openActionEditMenu(player, session, slot, actionIndex)
          else openActionManageMenu(player, session, slot)
      "DELETE_LORE" ->
          if (actionIndex != null) openLoreLineEditMenu(player, session, slot, actionIndex)
          else openLoreManageMenu(player, session, slot)
      "CLEAR_LORE" -> openLoreManageMenu(player, session, slot)
      "CLEAR_ACTIONS" -> openActionManageMenu(player, session, slot)
      else -> openContextMenu(player, session, slot)
    }
  }

  // ── Preview Click (アクション実行) ──────────────────────────

  private fun handlePreviewClick(
      event: InventoryClickEvent,
      player: Player,
      session: GuiEditorSession
  ) {
    val slot = event.rawSlot
    if (slot >= session.menuSize) return
    event.isCancelled = true
    val def = session.slots[slot] ?: return
    if (def.actions.isEmpty()) return

    for (action in def.actions) {
      val param = action.params.values.firstOrNull()?.replace("%player%", player.name) ?: ""
      when (action.type) {
        "PLAYER_CMD" -> player.performCommand(param)
        "CONSOLE_CMD" -> Bukkit.dispatchCommand(Bukkit.getConsoleSender(), param)
        "OP_PLAYER_CMD" -> {
          val was = player.isOp
          try {
            player.isOp = true
            player.performCommand(param)
          } finally {
            player.isOp = was
          }
        }
        "MESSAGE" -> player.sendMessage(comp(action.params["text"] ?: ""))
        "BROADCAST" -> Bukkit.broadcast(comp(action.params["text"] ?: ""))
        "SOUND" ->
            playSoundPreview(
                player,
                action.params["sound"] ?: "ui.button.click",
                action.params["volume"]?.toFloatOrNull() ?: 1.0f)
        "PARAM_COMMAND" ->
            plugin.parameterCommandEngine.open(
                player, MenuAction(ActionType.PARAM_COMMAND, action.params))
        "CLOSE" -> player.closeInventory()
        "OPEN_MENU" ->
            Bukkit.getScheduler()
                .runTaskLater(
                    plugin,
                    Runnable {
                      player.performCommand("menu ${action.params["target"] ?: return@Runnable}")
                    },
                    1L)
        "OPEN_POPUP" ->
            Bukkit.getScheduler()
                .runTaskLater(
                    plugin,
                    Runnable {
                      player.performCommand("menu ${action.params["target"] ?: return@Runnable}")
                    },
                    1L)
        "OPEN_SPECIAL" -> plugin.specialMenuEngine.open(player, action.params["target"] ?: "", null)
        "URL" -> player.sendMessage(comp("&e${action.params["url"] ?: ""}"))
        "CHAT_PASTE" -> player.sendMessage(comp("&7: &f${action.params["text"] ?: ""}"))
        "SUGGEST_COMMAND" -> player.sendMessage(comp("&a▶ &e${action.params["command"] ?: ""}"))
      }
    }
  }

  // ── Chat ───────────────────────────────────────────────────

  @EventHandler(priority = EventPriority.LOWEST)
  fun onCommandWhilePendingInput(event: PlayerCommandPreprocessEvent) {
    val player = event.player
    val session = sessions[player.uniqueId] ?: return
    val pending = session.pendingInput ?: return

    event.isCancelled = true
    session.pendingInput = null
    Bukkit.getScheduler()
        .runTask(plugin, Runnable { handlePendingInput(player, session, pending, event.message) })
  }

  @Suppress("DEPRECATION")
  @EventHandler(priority = EventPriority.LOWEST)
  fun onChat(event: AsyncPlayerChatEvent) {
    val player = event.player
    val session = sessions[player.uniqueId] ?: return
    val pending = session.pendingInput ?: return

    event.isCancelled = true
    session.pendingInput = null
    val text = normalizeTypedInput(event.message)

    Bukkit.getScheduler()
        .runTask(plugin, Runnable { handlePendingInput(player, session, pending, text) })
  }

  private fun handlePendingInput(
      player: Player,
      session: GuiEditorSession,
      pending: PendingInput,
      rawText: String
  ) {
    val text = normalizeTypedInput(rawText)
    when (pending) {
      is PendingInput.ItemName -> {
        val full = pending.color + text
        session.slots.getOrPut(pending.slot) { GuiSlotDef() }.name = full
        applyPdcToItem(session, pending.slot)
        msg(player, "&e[GuiMaker] &a名前を設定: &f$full")
      }
      is PendingInput.LoreLine -> {
        val full = pending.color + text
        session.slots.getOrPut(pending.slot) { GuiSlotDef() }.lore.add(full)
        applyPdcToItem(session, pending.slot)
        msg(player, "&e[GuiMaker] &aロア行を追加: &f$full")
      }
      is PendingInput.LoreEdit -> {
        val full = pending.color + text
        val lore = session.slots.getOrPut(pending.slot) { GuiSlotDef() }.lore
        if (pending.lineIndex in lore.indices) {
          lore[pending.lineIndex] = full
          applyPdcToItem(session, pending.slot)
          msg(player, "&e[GuiMaker] &aロア行 ${pending.lineIndex + 1} を更新: &f$full")
        } else {
          msg(player, "&e[GuiMaker] &cロア行が見つかりません。")
        }
      }
      is PendingInput.Permission -> {
        val def = session.slots.getOrPut(pending.slot) { GuiSlotDef() }
        def.permission = text.ifBlank { null }
        applyPdcToItem(session, pending.slot)
        msg(player, "&e[GuiMaker] &a権限を設定: &f${def.permission ?: "(なし)"}")
      }
      is PendingInput.ActionParam -> {
        val existingParams =
            pending.actionIndex
                ?.let { session.slots[pending.slot]?.actions?.getOrNull(it)?.params }
                .orEmpty()
        val actionParams =
            existingParams.toMutableMap().also {
              it.putAll(
                  GuiActionCatalog.params(
                      pending.actionType, text, formatVolume(session.soundVolume)))
            }
        val action = GuiActionDef(pending.actionType, actionParams)
        val successMsg =
            "&e[GuiMaker] &a${pending.actionType} を${if (pending.actionIndex == null) "追加" else "更新"}: &f$text"
        finishActionOrFav(player, session, pending.slot, pending.actionIndex, action, successMsg) {
          openContextMenu(player, session, pending.slot)
        }
        return
      }
      is PendingInput.ActionRawParams -> {
        val actions = session.slots[pending.slot]?.actions
        val current = actions?.getOrNull(pending.actionIndex)
        if (actions == null || current == null) {
          msg(player, "&e[GuiMaker] &c編集対象のアクションが見つかりません。")
          openContextMenu(player, session, pending.slot)
          return
        }
        val parsed =
            parseKeyValuePairs(text)
                ?: run {
                  msg(
                      player,
                      "&e[GuiMaker] &c形式が正しくありません。例: command=\"//stack {amount}\" confirm=true")
                  openActionEditMenu(player, session, pending.slot, pending.actionIndex)
                  return
                }
        if (parsed.isEmpty()) {
          msg(player, "&e[GuiMaker] &c更新する key=value がありません。")
          openActionEditMenu(player, session, pending.slot, pending.actionIndex)
          return
        }
        val params = current.params.toMutableMap()
        params.putAll(parsed)
        actions[pending.actionIndex] = current.copy(params = params)
        applyPdcToItem(session, pending.slot)
        saveWorkingCopy(session)
        msg(player, "&e[GuiMaker] &a詳細パラメータを更新しました: &f${parsed.keys.joinToString()}")
        openActionEditMenu(player, session, pending.slot, pending.actionIndex)
        return
      }
      is PendingInput.MenuTitle -> {
        session.menuTitle = pending.color + text
        msg(player, "&e[GuiMaker] &aタイトルを設定: &f${session.menuTitle}")
      }
    }
    saveWorkingCopy(session)
    openCanvas(player, session)
  }

  private fun normalizeTypedInput(raw: String): String {
    val text = raw.trim()
    val unescaped = if (text.startsWith("\\/")) text.removePrefix("\\") else text
    if (unescaped.length >= 2) {
      val first = unescaped.first()
      val last = unescaped.last()
      if ((first == '"' && last == '"') || (first == '\'' && last == '\'')) {
        return unescaped.substring(1, unescaped.length - 1)
      }
    }
    return unescaped
  }

  private fun parseKeyValuePairs(raw: String): Map<String, String>? {
    val tokens = splitKeyValueTokens(raw) ?: return null
    val result = linkedMapOf<String, String>()
    for (token in tokens) {
      val eq = token.indexOf('=')
      if (eq <= 0) return null
      val key = token.substring(0, eq).trim()
      if (key.isBlank()) return null
      result[key] = token.substring(eq + 1)
    }
    return result
  }

  private fun splitKeyValueTokens(raw: String): List<String>? {
    val tokens = mutableListOf<String>()
    val current = StringBuilder()
    var quote: Char? = null
    var escaped = false
    raw.trim().forEach { ch ->
      when {
        escaped -> {
          current.append(ch)
          escaped = false
        }
        quote != null && ch == '\\' -> escaped = true
        quote != null && ch == quote -> quote = null
        quote != null -> current.append(ch)
        ch == '"' || ch == '\'' -> quote = ch
        ch.isWhitespace() -> {
          if (current.isNotEmpty()) {
            tokens += current.toString()
            current.clear()
          }
        }
        else -> current.append(ch)
      }
    }
    if (escaped || quote != null) return null
    if (current.isNotEmpty()) tokens += current.toString()
    return tokens
  }

  // ── 直接操作 API (コマンドから呼び出す) ─────────────────────

  fun cmdSetName(player: Player, session: GuiEditorSession, slot: Int, text: String) {
    session.slots.getOrPut(slot) { GuiSlotDef() }.name = text
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot 名前を設定: &f$text")
  }

  fun cmdAddLore(player: Player, session: GuiEditorSession, slot: Int, text: String) {
    session.slots.getOrPut(slot) { GuiSlotDef() }.lore.add(text)
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot ロア追加: &f$text")
  }

  fun cmdClearLore(player: Player, session: GuiEditorSession, slot: Int) {
    session.slots.getOrPut(slot) { GuiSlotDef() }.lore.clear()
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot ロアをクリアしました。")
  }

  fun cmdSetPerm(player: Player, session: GuiEditorSession, slot: Int, perm: String?) {
    session.slots.getOrPut(slot) { GuiSlotDef() }.permission = perm
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot 権限を設定: &f${perm ?: "(なし)"}")
  }

  fun cmdAddAction(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      type: String,
      value: String
  ) {
    val actionType = type.uppercase()
    val normalizedValue = normalizeTypedInput(value)
    addActionToSlot(
        session,
        slot,
        GuiActionDef(actionType, GuiActionCatalog.params(actionType, normalizedValue)))
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot アクション追加: &f${type.uppercase()} $normalizedValue")
  }

  fun cmdClearActions(player: Player, session: GuiEditorSession, slot: Int) {
    session.slots.getOrPut(slot) { GuiSlotDef() }.actions.clear()
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot アクションをクリアしました。")
  }

  fun cmdClearSlot(player: Player, session: GuiEditorSession, slot: Int) {
    session.canvasInventory?.setItem(slot, null)
    session.slots.remove(slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aslot $slot をクリアしました。")
  }

  fun cmdSetTitle(player: Player, session: GuiEditorSession, text: String) {
    session.menuTitle = text
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aタイトルを設定: &f$text")
  }

  // ── Helpers ─────────────────────────────────────────────────

  private fun addActionToSlot(session: GuiEditorSession, slot: Int, action: GuiActionDef) {
    session.slots.getOrPut(slot) { GuiSlotDef() }.actions.add(action)
  }

  private fun upsertAction(
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int?,
      action: GuiActionDef
  ) {
    val actions = session.slots.getOrPut(slot) { GuiSlotDef() }.actions
    if (actionIndex != null && actionIndex in actions.indices) actions[actionIndex] = action
    else actions.add(action)
  }

  private fun toggleSlotEnchant(player: Player, session: GuiEditorSession, slot: Int) {
    val def = session.slots.getOrPut(slot) { GuiSlotDef() }
    def.enchanted = !def.enchanted
    applyPdcToItem(session, slot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aエンチャント表示: &f${if (def.enchanted) "ON" else "OFF"}")
    openContextMenu(player, session, slot)
  }

  private fun startActionValueEdit(
      player: Player,
      session: GuiEditorSession,
      slot: Int,
      actionIndex: Int,
      action: GuiActionDef
  ) {
    when (action.type) {
      "OPEN_MENU" -> openMenuPicker(player, session, slot, actionIndex)
      "OPEN_POPUP" -> openPopupPicker(player, session, slot, actionIndex)
      "OPEN_SPECIAL" -> openSpecialMenuPicker(player, session, slot, actionIndex)
      "SOUND" -> {
        session.soundVolume = action.params["volume"]?.toFloatOrNull()?.coerceIn(0.0f, 4.0f) ?: 1.0f
        openSoundCategoryPicker(player, session, slot, actionIndex)
      }
      "CLOSE" -> {
        msg(player, "&e[GuiMaker] &7CLOSE には編集する値がありません。")
        openActionEditMenu(player, session, slot, actionIndex)
      }
      else -> {
        player.closeInventory()
        session.pendingInput = PendingInput.ActionParam(slot, action.type, actionIndex)
        msg(player, "&e[GuiMaker] &f${GuiActionCatalog.paramPrompt(action.type)}")
      }
    }
  }

  private fun makeActionItem(
      index: Int,
      action: GuiActionDef,
      vararg extraLore: String
  ): ItemStack {
    val lore = mutableListOf("&7順番: &f${index + 1}", "&7種類: &f${action.type}")
    if (action.params.isEmpty()) lore.add("&8パラメータなし")
    else action.params.forEach { (key, value) -> lore.add("&7$key: &f$value") }
    lore.addAll(extraLore)
    return makeItem(
        GuiActionCatalog.material(action.type),
        "&d${index + 1}. ${action.type}",
        *lore.toTypedArray())
  }

  private fun makeLoreItem(index: Int, line: String, vararg extraLore: String): ItemStack {
    val lore = mutableListOf("&7行: &f${index + 1}", "&7内容:", "&f$line")
    lore.addAll(extraLore)
    return makeItem(Material.PAPER, "&e${index + 1}. ロア行", *lore.toTypedArray())
  }

  private fun soundKey(sound: Sound): String = sound.getKey().key

  private fun addSoundVolumeControls(inv: Inventory, session: GuiEditorSession) {
    inv.setItem(
        37,
        makeItem(
            Material.REDSTONE_TORCH, "&c音量 -0.25", "&7現在: &f${formatVolume(session.soundVolume)}"))
    inv.setItem(
        39,
        makeItem(
            Material.NOTE_BLOCK,
            "&b音量",
            "&f${formatVolume(session.soundVolume)}",
            "&7左の赤で下げ、右の緑で上げます"))
    inv.setItem(
        41, makeItem(Material.TORCH, "&a音量 +0.25", "&7現在: &f${formatVolume(session.soundVolume)}"))
    inv.setItem(43, makeItem(Material.LEVER, "&e音量リセット", "&7volume=1.0 に戻します"))
  }

  private fun handleSoundVolumeClick(
      funcLabel: String?,
      player: Player,
      session: GuiEditorSession,
      redraw: () -> Unit
  ): Boolean {
    when (funcLabel) {
      "音量 -0.25" -> session.soundVolume = (session.soundVolume - 0.25f).coerceIn(0.0f, 4.0f)
      "音量 +0.25" -> session.soundVolume = (session.soundVolume + 0.25f).coerceIn(0.0f, 4.0f)
      "音量リセット" -> session.soundVolume = 1.0f
      "音量" -> {
        msg(player, "&e[GuiMaker] &f現在の音量: &b${formatVolume(session.soundVolume)}")
        return true
      }
      else -> return false
    }
    msg(player, "&e[GuiMaker] &f音量: &b${formatVolume(session.soundVolume)}")
    redraw()
    return true
  }

  private fun playSoundPreview(player: Player, sound: String, volume: Float) {
    runCatching { player.playSound(player.location, "minecraft:$sound", volume, 1f) }
  }

  private fun formatVolume(volume: Float): String =
      "%.2f".format(Locale.US, volume).trimEnd('0').trimEnd('.').ifEmpty { "0" }

  // ── UI Skin System ───────────────────────────────────────────

  private fun loadUiSkinData(screenName: String): UiSkinData = uiSkinStore.load(screenName)

  private fun saveUiSkinData(screenName: String, data: UiSkinData) =
      uiSkinStore.save(screenName, data)

  private fun applyUiSkin(inv: Inventory, screenName: String) {
    val data = loadUiSkinData(screenName)
    val defs = UI_SCREEN_DEFS[screenName]
    val defaultGlass = screenDefaultGlass(screenName)

    // Step 1: Position overrides — move functional items to configured slots
    if (defs != null) {
      val labelToDefault = defs.entries.associate { (slot, pair) -> pair.first to slot }
      val enabledLabels = data.enabledLabels ?: labelToDefault.keys
      val originalItemsByLabel =
          labelToDefault.mapValues { (_, defaultSlot) -> inv.getItem(defaultSlot)?.clone() }
      for ((label, defaultSlot) in labelToDefault) {
        if (label in enabledLabels && !data.positions.containsKey(label)) continue
        inv.setItem(defaultSlot, glass(defaultGlass))
      }
      for ((funcLabel, targetSlot) in data.positions) {
        if (funcLabel !in enabledLabels) continue
        val defaultSlot = labelToDefault[funcLabel] ?: continue
        if (defaultSlot == targetSlot) continue
        val funcItem = originalItemsByLabel[funcLabel]?.clone() ?: continue
        inv.setItem(targetSlot, funcItem)
      }
    }

    // Step 2: Icon overrides — replace material while preserving name/lore
    data.icons.forEach { (slot, mat) ->
      val existing = inv.getItem(slot) ?: return@forEach
      if (existing.type == Material.AIR) return@forEach
      val newItem = ItemStack(mat)
      val oldMeta = existing.itemMeta ?: return@forEach
      val newMeta = newItem.itemMeta ?: return@forEach
      oldMeta.displayName()?.let { newMeta.displayName(it) }
      oldMeta.lore()?.let { newMeta.lore(it) }
      oldMeta.itemFlags.forEach { newMeta.addItemFlags(it) }
      newItem.itemMeta = newMeta
      inv.setItem(slot, newItem)
    }
  }

  /** クリックされた rawSlot に対応する機能ラベルを返す。 positions で移動された場合でも正しいラベルを返す。 ガラスや動的グリッドアイテムは null を返す。 */
  private fun funcLabelAt(screenName: String, rawSlot: Int): String? {
    val defs = UI_SCREEN_DEFS[screenName] ?: return null
    val data = loadUiSkinData(screenName)
    val enabledLabels = data.enabledLabels ?: defs.values.map { it.first }.toSet()
    // 移動先スロットのチェック
    val movedLabel =
        data.positions.entries.find { it.value == rawSlot && it.key in enabledLabels }?.key
    if (movedLabel != null) return movedLabel
    // デフォルトスロットのチェック（移動済みでないことも確認）
    val label = defs[rawSlot]?.first ?: return null
    if (label !in enabledLabels) return null
    return if (data.positions.containsKey(label)) null else label
  }

  fun toggleUiSilent(player: Player) {
    if (uiSkinSilentPlayers.remove(player.uniqueId)) {
      player.sendMessage(comp("&e[GuiMaker] &7UIスキン編集ログを &a有効 &7にしました。"))
    } else {
      uiSkinSilentPlayers.add(player.uniqueId)
      player.sendMessage(comp("&e[GuiMaker] &7UIスキン編集ログを &cミュート &7にしました。"))
    }
  }

  private fun screenDefaultGlass(screenName: String): Material =
      uiScreenCatalog.screenDefaultGlass(screenName)

  private fun shortMaterialName(material: Material): String {
    val name = material.name
    return when {
      name.endsWith("_STAINED_GLASS_PANE") ->
          "${name.removeSuffix("_STAINED_GLASS_PANE").lowercase(Locale.ROOT).replace('_', ' ')} glass"
      name.endsWith("_CONCRETE_POWDER") ->
          "${name.removeSuffix("_CONCRETE_POWDER").lowercase(Locale.ROOT).replace('_', ' ')} powder"
      name.endsWith("_CONCRETE") ->
          "${name.removeSuffix("_CONCRETE").lowercase(Locale.ROOT).replace('_', ' ')} concrete"
      name.endsWith("_WOOL") ->
          "${name.removeSuffix("_WOOL").lowercase(Locale.ROOT).replace('_', ' ')} wool"
      else -> name.lowercase(Locale.ROOT).replace('_', ' ')
    }
  }

  private fun skinEditorSlotItem(
      slot: Int,
      currentMat: Material,
      defaultMat: Material,
      label: String?
  ): ItemStack {
    val iconStatus =
        if (currentMat == defaultMat) {
          arrayOf("&7アイコン: &fデフォルト")
        } else {
          arrayOf(
              "&7現在: &f${shortMaterialName(currentMat)}", "&8初期: ${shortMaterialName(defaultMat)}")
        }
    return if (label != null) {
      makeItem(
          currentMat,
          "&b$label",
          "&8slot $slot",
          *iconStatus,
          "&a左クリック&7: 移動",
          "&b右+手持ち&7: 変更",
          "&b右+空手&7: 初期化")
    } else {
      makeItem(currentMat, "&7スロット $slot", *iconStatus, "&b右+手持ち&7: 装飾変更", "&b右+空手&7: 初期化")
    }
  }

  private fun setUiSkinDecorationSlot(
      inv: Inventory,
      slot: Int,
      currentMat: Material,
      defaultMat: Material
  ) {
    val item = skinEditorSlotItem(slot, currentMat, defaultMat, null)
    val meta = item.itemMeta!!
    meta.persistentDataContainer.set(KEY_SKIN_ITEM, PersistentDataType.STRING, "1")
    item.itemMeta = meta
    inv.setItem(slot, item)
  }

  private fun setUiSkinFunctionSlot(
      inv: Inventory,
      screenName: String,
      slot: Int,
      funcLabel: String,
      currentMat: Material? = null
  ): Boolean {
    val defs = UI_SCREEN_DEFS[screenName] ?: return false
    val defaultSlot = defs.entries.find { it.value.first == funcLabel }?.key ?: return false
    val defaultMat = defs[defaultSlot]?.second ?: return false
    val item = skinEditorSlotItem(slot, currentMat ?: defaultMat, defaultMat, funcLabel)
    val meta = item.itemMeta!!
    meta.persistentDataContainer.set(KEY_FUNC, PersistentDataType.STRING, funcLabel)
    meta.persistentDataContainer.set(KEY_SCREEN, PersistentDataType.STRING, screenName)
    meta.persistentDataContainer.set(KEY_SKIN_ITEM, PersistentDataType.STRING, "1")
    item.itemMeta = meta
    inv.setItem(slot, item)
    return true
  }

  private fun uiSkinFuncLabel(item: ItemStack?): String? =
      item
          ?.takeIf { it.type != Material.AIR }
          ?.itemMeta
          ?.persistentDataContainer
          ?.get(KEY_FUNC, PersistentDataType.STRING)

  private fun firstUiSkinFunctionSlot(inv: Inventory, preferredSlot: Int): Int? {
    if (preferredSlot in 0..44 && uiSkinFuncLabel(inv.getItem(preferredSlot)) == null)
        return preferredSlot
    return (0..44).firstOrNull { uiSkinFuncLabel(inv.getItem(it)) == null }
  }

  private fun renderUiSkinControlBar(inv: Inventory, holder: UiSkinHolder) {
    val defs = UI_SCREEN_DEFS[holder.screenName] ?: return
    val labelToDefault = defs.entries.associate { (slot, pair) -> pair.first to slot }
    val addCandidates =
        labelToDefault.keys
            .filter { it !in holder.enabledLabels }
            .sortedBy { labelToDefault[it] ?: Int.MAX_VALUE }
    val pageSize = UI_SKIN_RESTORE_SLOTS.size
    val maxPage = ((addCandidates.size - 1).coerceAtLeast(0)) / pageSize
    holder.templatePage = holder.templatePage.coerceIn(0, maxPage)
    holder.templateLabels.clear()

    inv.setItem(
        45,
        makeItem(
            Material.BOOK,
            "&e使い方",
            "&a左クリック&7: スロット間で移動",
            "&b右+手持ち&7: アイコン変更",
            "&b右+空手&7: 初期化",
            "&c削除モード&7: 表示項目をクリックで非表示"))
    inv.setItem(
        46,
        makeItem(
            if (holder.deleteMode) Material.REDSTONE_TORCH else Material.GRAY_DYE,
            if (holder.deleteMode) "&c削除モード: ON" else "&7削除モード: OFF",
            "&7クリックで切替",
            "&7ON中に上の機能項目をクリックすると非表示"))

    val visibleCandidates = addCandidates.drop(holder.templatePage * pageSize).take(pageSize)
    for ((index, slot) in UI_SKIN_RESTORE_SLOTS.withIndex()) {
      val label = visibleCandidates.getOrNull(index)
      if (label == null) {
        inv.setItem(
            slot,
            makeItem(Material.LIGHT_GRAY_STAINED_GLASS_PANE, "&7追加候補なし", "&7配置していない機能ブロックがここに出ます"))
      } else {
        val defaultSlot = labelToDefault[label] ?: continue
        val mat = defs[defaultSlot]?.second ?: Material.LIME_DYE
        holder.templateLabels[slot] = label
        inv.setItem(
            slot,
            makeItem(
                mat, "&a追加: &f$label", "&7テンプレートからこの機能を配置します", "&7未配置: &f${addCandidates.size}件"))
      }
    }

    inv.setItem(49, makeItem(Material.LIME_CONCRETE, "&a保存して閉じる", "&7UIスキンをファイルに保存します"))
    inv.setItem(
        52,
        makeItem(Material.CHEST, "&eUIブロック", "&7この画面で使える機能ブロック一覧を開きます", "&7選んだブロックはインベントリに入ります"))
    inv.setItem(53, makeItem(Material.RED_CONCRETE, "&cキャンセル", "&7変更を破棄して閉じます"))
  }

  fun openUiSkinEditor(player: Player, screenName: String) {
    openUiSkinEditor(player, screenName, loadUiSkinData(screenName))
  }

  private fun openUiSkinEditor(player: Player, screenName: String, data: UiSkinData) {
    val defs =
        UI_SCREEN_DEFS[screenName]
            ?: run {
              msg(
                  player,
                  "&e[GuiMaker] &c不明な画面: $screenName  利用可能: &f${UI_SCREEN_DEFS.keys.joinToString()}")
              return
            }
    val defaultGlass = screenDefaultGlass(screenName)
    val enabledLabels = data.enabledLabels ?: defs.values.map { it.first }.toSet()
    val holder = UiSkinHolder(screenName, enabledLabels.toMutableSet())
    val inv = Bukkit.createInventory(holder, 54, comp("&9GuiMaker &8- UI: &f$screenName"))

    // funcLabel → 配置スロット（positions で移動済みのものはそちら）
    val labelToDefault = defs.entries.associate { (slot, pair) -> pair.first to slot }
    val occupiedSlots = mutableSetOf<Int>()

    // 機能アイテムを配置スロットに置く
    for ((funcLabel, funcDefaultSlot) in labelToDefault.entries.sortedBy { it.value }) {
      if (funcLabel !in holder.enabledLabels) continue
      val requestedSlot = data.positions[funcLabel]?.takeIf { it in 0..44 } ?: funcDefaultSlot
      val targetSlot =
          if (requestedSlot !in occupiedSlots) {
            requestedSlot
          } else {
            (0..44).firstOrNull { it !in occupiedSlots } ?: continue
          }
      val funcDefaultMat = defs[funcDefaultSlot]!!.second
      val currentMat = data.icons[targetSlot] ?: funcDefaultMat
      val item = skinEditorSlotItem(targetSlot, currentMat, funcDefaultMat, funcLabel)
      val meta = item.itemMeta!!
      meta.persistentDataContainer.set(KEY_FUNC, PersistentDataType.STRING, funcLabel)
      meta.persistentDataContainer.set(KEY_SCREEN, PersistentDataType.STRING, screenName)
      meta.persistentDataContainer.set(KEY_SKIN_ITEM, PersistentDataType.STRING, "1")
      item.itemMeta = meta
      inv.setItem(targetSlot, item)
      occupiedSlots += targetSlot
    }

    // 残りのスロット（0-44）はガラスで埋める
    for (slot in 0..44) {
      if (slot in occupiedSlots) continue
      val currentMat = data.icons[slot] ?: defaultGlass
      setUiSkinDecorationSlot(inv, slot, currentMat, defaultGlass)
    }

    renderUiSkinControlBar(inv, holder)

    player.openInventory(inv)
  }

  private fun openUiSkinBlockPicker(player: Player, holder: UiSkinHolder, editorInv: Inventory) {
    if (!returnCursorSkinItemToEditor(player, editorInv)) {
      msg(player, "&e[GuiMaker] &cカーソル上の編集アイテムを戻してから開いてください。")
      return
    }
    val snapshot = snapshotUiSkinData(holder, editorInv) ?: return
    openUiSkinBlockPicker(player, holder.screenName, snapshot, allScreens = false, page = 0)
  }

  private fun openUiSkinBlockPicker(
      player: Player,
      screenName: String,
      returnData: UiSkinData,
      allScreens: Boolean,
      page: Int
  ) {
    val entries = uiSkinBlockPickerEntries(screenName, allScreens)
    val gridSlots = (0..44).toList()
    val pageSize = gridSlots.size
    val maxPage = ((entries.size - 1).coerceAtLeast(0)) / pageSize
    val safePage = page.coerceIn(0, maxPage)
    val visible = entries.drop(safePage * pageSize).take(pageSize)
    val picker = UiSkinBlockPickerHolder(screenName, returnData, allScreens, safePage)
    val inv = Bukkit.createInventory(picker, 54, comp("&9GuiMaker &8- UIブロック: &f$screenName"))

    visible.forEachIndexed { index, entry ->
      inv.setItem(
          gridSlots[index],
          uiSkinBlockPickerItem(
              screenName, entry.label, entry.material, entry.defaultSlot, entry.sourceScreen))
    }
    inv.setItem(
        45,
        makeItem(
            Material.BOOK,
            if (allScreens) "&e全UIブロック" else "&eこの画面のUIブロック",
            "&7クリックでインベントリに追加します",
            "&7${safePage + 1}/${maxPage + 1} ページ"))
    inv.setItem(48, makeItem(Material.ARROW, "&e前のページ", "&7一覧を戻します"))
    inv.setItem(
        49,
        makeItem(
            if (allScreens) Material.CHEST else Material.ENDER_CHEST,
            if (allScreens) "&bこの画面の一覧" else "&b全機能ブロック一覧",
            "&7中央ボタンで一覧を切り替えます"))
    inv.setItem(50, makeItem(Material.ARROW, "&e次のページ", "&7一覧を進めます"))
    inv.setItem(53, makeItem(Material.ARROW, "&fUI編集に戻る", "&7現在の編集状態に戻ります"))
    player.openInventory(inv)
  }

  private data class UiSkinPickerEntry(
      val sourceScreen: String,
      val defaultSlot: Int,
      val label: String,
      val material: Material
  )

  private fun uiSkinBlockPickerEntries(
      screenName: String,
      allScreens: Boolean
  ): List<UiSkinPickerEntry> {
    val source =
        if (allScreens) UI_SCREEN_DEFS
        else mapOf(screenName to (UI_SCREEN_DEFS[screenName] ?: emptyMap()))
    return source
        .flatMap { (sourceScreen, defs) ->
          defs.entries.map { (slot, pair) ->
            UiSkinPickerEntry(sourceScreen, slot, pair.first, pair.second)
          }
        }
        .distinctBy { it.sourceScreen to it.label }
        .sortedWith(compareBy<UiSkinPickerEntry> { it.sourceScreen }.thenBy { it.defaultSlot })
  }

  private fun uiSkinBlockPickerItem(
      screenName: String,
      funcLabel: String,
      material: Material,
      defaultSlot: Int,
      sourceScreen: String
  ): ItemStack {
    val compatible = sourceScreen == screenName
    val item =
        makeItem(
            material,
            if (compatible) "&b$funcLabel" else "&7$funcLabel",
            "&8screen $sourceScreen / slot $defaultSlot",
            if (compatible) "&7クリックでインベントリに追加" else "&8別画面用: この画面には配置できません",
            "&7UI編集画面の上段へ置くと機能ブロックとして保存されます")
    val meta = item.itemMeta!!
    meta.persistentDataContainer.set(KEY_FUNC, PersistentDataType.STRING, funcLabel)
    meta.persistentDataContainer.set(KEY_SCREEN, PersistentDataType.STRING, sourceScreen)
    meta.persistentDataContainer.set(KEY_SKIN_ITEM, PersistentDataType.STRING, "1")
    item.itemMeta = meta
    return item
  }

  private fun handleUiSkinBlockPickerClick(
      event: InventoryClickEvent,
      player: Player,
      holder: UiSkinBlockPickerHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory == player.inventory) return
    if (event.clickedInventory != event.inventory) return

    when (event.rawSlot) {
      48 -> {
        openUiSkinBlockPicker(
            player, holder.screenName, holder.returnData, holder.allScreens, holder.page - 1)
        return
      }
      49 -> {
        openUiSkinBlockPicker(player, holder.screenName, holder.returnData, !holder.allScreens, 0)
        return
      }
      50 -> {
        openUiSkinBlockPicker(
            player, holder.screenName, holder.returnData, holder.allScreens, holder.page + 1)
        return
      }
      53 -> {
        openUiSkinEditor(player, holder.screenName, holder.returnData)
        return
      }
    }

    val item = event.currentItem?.takeIf { it.type != Material.AIR } ?: return
    val meta = item.itemMeta ?: return
    val funcLabel = meta.persistentDataContainer.get(KEY_FUNC, PersistentDataType.STRING) ?: return
    val screenName =
        meta.persistentDataContainer.get(KEY_SCREEN, PersistentDataType.STRING) ?: holder.screenName
    if (screenName != holder.screenName) {
      msg(player, "&e[GuiMaker] &cこのUIブロックは別画面用です: &f$screenName")
      return
    }

    val blockItem = item.clone()
    blockItem.amount = 1
    val leftovers = player.inventory.addItem(blockItem)
    if (leftovers.isEmpty()) {
      msg(player, "&e[GuiMaker] &aUIブロックを追加しました: &f$funcLabel")
    } else {
      msg(player, "&e[GuiMaker] &cインベントリに空きがありません。")
    }
  }

  private fun handleUiSkinEditorClick(
      event: InventoryClickEvent,
      player: Player,
      holder: UiSkinHolder
  ) {
    val screenName = holder.screenName
    if (event.clickedInventory == player.inventory) {
      // スキンアイテムをプレイヤーインベントリに置くことを阻止
      // プレイヤー自身のアイテムの出し入れ・並べ替えは許可
      val cursorIsSkinItem =
          event.cursor
              ?.takeIf { it.type != Material.AIR }
              ?.itemMeta
              ?.persistentDataContainer
              ?.has(KEY_SKIN_ITEM, PersistentDataType.STRING) == true
      when {
        event.isShiftClick -> event.isCancelled = true
        cursorIsSkinItem -> event.isCancelled = true
        event.action == InventoryAction.COLLECT_TO_CURSOR -> event.isCancelled = true
        event.action == InventoryAction.HOTBAR_SWAP -> event.isCancelled = true
        event.action == InventoryAction.HOTBAR_MOVE_AND_READD -> event.isCancelled = true
      }
      return
    }
    if (event.clickedInventory != event.inventory) return

    when (event.rawSlot) {
      in 45..53 -> {
        event.isCancelled = true
        when (event.rawSlot) {
          46 -> {
            holder.deleteMode = !holder.deleteMode
            renderUiSkinControlBar(event.inventory, holder)
          }
          in UI_SKIN_RESTORE_SLOTS -> {
            val label = holder.templateLabels[event.rawSlot] ?: return
            addUiSkinTemplate(player, holder, label, event.inventory)
          }
          49 -> saveSkinEditorAndClose(player, holder, event.inventory)
          52 -> openUiSkinBlockPicker(player, holder, event.inventory)
          53 -> player.closeInventory()
        }
      }
      in 0..44 -> {
        when {
          holder.deleteMode -> {
            event.isCancelled = true
            removeUiSkinTemplate(player, holder, event.rawSlot, event.inventory)
          }
          // 右クリック: アイコン変更（カーソルのマテリアルを適用、空なら元に戻す）
          event.click == ClickType.RIGHT || event.click == ClickType.SHIFT_RIGHT -> {
            event.isCancelled = true
            val cursorMat = event.cursor?.takeIf { it.type != Material.AIR }?.type
            applyIconChange(player, screenName, event.rawSlot, cursorMat, event.inventory)
          }
          // シフト左クリック: 上段→下段への流出をブロック
          event.isShiftClick -> event.isCancelled = true
          // COLLECT_TO_CURSOR: ブロック
          event.action == InventoryAction.COLLECT_TO_CURSOR -> event.isCancelled = true
        // 左クリック: フリームーブメント（キャンセルしない）
        }
      }
    }
  }

  private fun addUiSkinTemplate(
      player: Player,
      holder: UiSkinHolder,
      funcLabel: String,
      inv: Inventory
  ) {
    val defs = UI_SCREEN_DEFS[holder.screenName] ?: return
    val defaultSlot = defs.entries.find { it.value.first == funcLabel }?.key ?: return
    val targetSlot = firstUiSkinFunctionSlot(inv, defaultSlot)
    if (targetSlot == null) {
      msg(player, "&e[GuiMaker] &c配置できる空きスロットがありません。")
      return
    }
    if (!setUiSkinFunctionSlot(inv, holder.screenName, targetSlot, funcLabel)) return
    holder.enabledLabels += funcLabel
    renderUiSkinControlBar(inv, holder)
    msg(player, "&e[GuiMaker] &a機能ブロックを追加: &f$funcLabel")
  }

  private fun removeUiSkinTemplate(
      player: Player,
      holder: UiSkinHolder,
      slot: Int,
      inv: Inventory
  ) {
    val funcLabel = uiSkinFuncLabel(inv.getItem(slot))
    if (funcLabel == null) {
      msg(player, "&e[GuiMaker] &7装飾スロットは削除対象ではありません。")
      return
    }
    holder.enabledLabels.remove(funcLabel)
    setUiSkinDecorationSlot(
        inv, slot, screenDefaultGlass(holder.screenName), screenDefaultGlass(holder.screenName))
    renderUiSkinControlBar(inv, holder)
    msg(player, "&e[GuiMaker] &a機能ブロックを配置から外しました: &f$funcLabel")
  }

  private fun applyIconChange(
      player: Player,
      screenName: String,
      slot: Int,
      cursorMat: Material?,
      inv: Inventory
  ) {
    val defs = UI_SCREEN_DEFS[screenName] ?: return
    val defaultGlass = screenDefaultGlass(screenName)
    val currentItem = inv.getItem(slot)?.takeIf { it.type != Material.AIR }
    val funcLabel =
        currentItem?.itemMeta?.persistentDataContainer?.get(KEY_FUNC, PersistentDataType.STRING)
    val defaultMat =
        if (funcLabel != null) {
          val defSlot = defs.entries.find { it.value.first == funcLabel }?.key
          defSlot?.let { defs[it]?.second } ?: defaultGlass
        } else defaultGlass

    val actualMat = cursorMat ?: defaultMat
    val newItem = skinEditorSlotItem(slot, actualMat, defaultMat, funcLabel)
    val meta = newItem.itemMeta!!
    if (funcLabel != null)
        meta.persistentDataContainer.set(KEY_FUNC, PersistentDataType.STRING, funcLabel)
    if (funcLabel != null)
        meta.persistentDataContainer.set(KEY_SCREEN, PersistentDataType.STRING, screenName)
    meta.persistentDataContainer.set(KEY_SKIN_ITEM, PersistentDataType.STRING, "1")
    newItem.itemMeta = meta
    inv.setItem(slot, newItem)

    if (player.uniqueId !in uiSkinSilentPlayers) {
      if (cursorMat == null)
          msg(player, "&e[GuiMaker] &aスロット $slot: デフォルト (&f${defaultMat.name}&a) に戻しました")
      else msg(player, "&e[GuiMaker] &aスロット $slot: &f${cursorMat.name}&a に変更しました")
    }
  }

  private fun snapshotUiSkinData(holder: UiSkinHolder, inv: Inventory): UiSkinData? {
    val screenName = holder.screenName
    val defs = UI_SCREEN_DEFS[screenName] ?: return null
    val defaultGlass = screenDefaultGlass(screenName)
    val labelToDefault = defs.entries.associate { (slot, pair) -> pair.first to slot }

    val positions = mutableMapOf<String, Int>()
    val icons = mutableMapOf<Int, Material>()
    val labelsInInventory = mutableSetOf<String>()

    for (slot in 0..44) {
      val item = inv.getItem(slot)?.takeIf { it.type != Material.AIR } ?: continue
      val meta = item.itemMeta
      val funcLabel = meta?.persistentDataContainer?.get(KEY_FUNC, PersistentDataType.STRING)
      if (funcLabel != null) {
        if (funcLabel !in labelToDefault || funcLabel in labelsInInventory) continue
        labelsInInventory += funcLabel
        val defaultSlot = labelToDefault[funcLabel]
        if (defaultSlot != null && slot != defaultSlot) positions[funcLabel] = slot
        val funcDefaultMat = defaultSlot?.let { defs[it]?.second }
        if (funcDefaultMat != null && item.type != funcDefaultMat) icons[slot] = item.type
      } else {
        if (item.type != defaultGlass) icons[slot] = item.type
      }
    }
    val enabledLabels =
        (holder.enabledLabels + labelsInInventory).filter { it in labelToDefault }.toSet()

    return UiSkinData(positions, icons, enabledLabels)
  }

  private fun saveSkinEditorAndClose(player: Player, holder: UiSkinHolder, inv: Inventory) {
    val screenName = holder.screenName

    if (!returnCursorSkinItemToEditor(player, inv)) {
      msg(player, "&e[GuiMaker] &cカーソル上の編集アイテムを戻してから保存してください。")
      return
    }

    val data = snapshotUiSkinData(holder, inv) ?: return

    saveUiSkinData(screenName, data)
    if (player.uniqueId !in uiSkinSilentPlayers) {
      msg(player, "&e[GuiMaker] &aUIスキンを保存しました: &f$screenName")
    }
    player.closeInventory()
  }

  private fun returnCursorSkinItemToEditor(player: Player, inv: Inventory): Boolean {
    val cursor = player.itemOnCursor?.takeIf { it.type != Material.AIR } ?: return true
    val isSkinItem =
        cursor.itemMeta?.persistentDataContainer?.has(KEY_SKIN_ITEM, PersistentDataType.STRING) ==
            true
    if (!isSkinItem) return true
    val targetSlot =
        (0..44).firstOrNull {
          inv.getItem(it)?.type == null || inv.getItem(it)?.type == Material.AIR
        } ?: (0..44).firstOrNull { uiSkinFuncLabel(inv.getItem(it)) == null } ?: return false
    inv.setItem(targetSlot, cursor)
    player.setItemOnCursor(ItemStack(Material.AIR))
    return true
  }

  private fun soundMaterial(soundKey: String): Material {
    val parts = soundKey.split(".")
    if (parts.size < 2) return Material.NOTE_BLOCK
    val segment = parts[1].uppercase(Locale.ROOT)
    return when (parts[0]) {
      "block" ->
          runCatching { Material.valueOf(segment) }
              .getOrElse {
                runCatching { Material.valueOf("${segment}_BLOCK") }
                    .getOrElse { Material.NOTE_BLOCK }
              }
      "item" -> runCatching { Material.valueOf(segment) }.getOrElse { Material.NOTE_BLOCK }
      "entity" ->
          runCatching { Material.valueOf("${segment}_SPAWN_EGG") }.getOrElse { Material.NOTE_BLOCK }
      else -> Material.NOTE_BLOCK
    }
  }

  private fun placeItemPreview(inv: Inventory, session: GuiEditorSession, canvasSlot: Int) {
    if (canvasSlot < 0) return
    val item =
        session.canvasInventory?.getItem(canvasSlot)?.takeIf { it.type != Material.AIR } ?: return
    inv.setItem(4, decorateItem(item, session.slots[canvasSlot]))
  }

  private fun finishActionOrFav(
      player: Player,
      session: GuiEditorSession,
      canvasSlot: Int,
      actionIndex: Int?,
      action: GuiActionDef,
      successMsg: String,
      onDone: () -> Unit
  ) {
    if (session.favRegistering) {
      session.favRegistering = false
      val favs = getFavorites(player.uniqueId)
      if (favs.size < 8) {
        favs.add(action)
        saveFavoritesToDisk(player.uniqueId)
        msg(player, "&e[GuiMaker] &6お気に入りに登録: &f${action.type}")
      } else {
        msg(player, "&e[GuiMaker] &cお気に入りが満杯 (8/8)。")
      }
      openFavoritesManage(player, session, canvasSlot)
    } else {
      upsertAction(session, canvasSlot, actionIndex, action)
      applyPdcToItem(session, canvasSlot)
      saveWorkingCopy(session)
      msg(player, successMsg)
      onDone()
    }
  }

  private fun fillMain(inv: Inventory, glassMaterial: Material) {
    val filler = glass(glassMaterial)
    for (i in 0..44) {
      if (inv.getItem(i) == null) inv.setItem(i, filler)
    }
  }

  private fun fillAll(inv: Inventory, glassMaterial: Material) {
    val filler = glass(glassMaterial)
    for (i in 0 until inv.size) {
      if (inv.getItem(i) == null) inv.setItem(i, filler)
    }
  }

  // ── Template Hub ───────────────────────────────────────────

  private fun openTemplateHub(
      player: Player,
      session: GuiEditorSession,
      page: Int = 0,
      category: TemplateCategory = TemplateCategory.ALL,
      sortMode: TemplateSortMode = TemplateSortMode.UPDATED_DESC
  ) {
    rebuildSlotsFromInventory(session)
    saveWorkingCopy(session)
    val entries =
        sortTemplateEntries(
            GuiTemplateStore.listTemplates(plugin, player).filter { category.matches(it) },
            sortMode)
    val maxPage = ((entries.size - 1).coerceAtLeast(0)) / TEMPLATE_GRID_SLOTS.size
    val safePage = page.coerceIn(0, maxPage)
    val visible = entries.drop(safePage * TEMPLATE_GRID_SLOTS.size).take(TEMPLATE_GRID_SLOTS.size)
    val slotToEntry =
        visible.mapIndexed { index, entry -> TEMPLATE_GRID_SLOTS[index] to entry }.toMap()
    val holder = TemplateHubHolder(session, safePage, category, sortMode, slotToEntry)
    val inv = Bukkit.createInventory(holder, 54, comp("&9GuiMaker &8- &eテンプレート"))

    inv.setItem(
        4,
        makeItem(
            Material.YELLOW_CONCRETE_POWDER,
            "&eテンプレート",
            "&7個人テンプレートと公式テンプレートを管理します",
            "&7左クリック: 使用 / 右クリック: 編集 / Shift+右クリック: 削除",
            session.templateEditTarget?.let {
              "&d編集中: ${it.scope.displayName} ${it.kind.displayName} ${it.id}"
            } ?: "&7GUI全体または選択中スロットを保存・読込できます"))
    inv.setItem(
        10,
        makeItem(
            Material.CHEST,
            "&a現在のGUIを保存",
            "&7保存先: 個人テンプレート",
            "&7ID: &f${session.menuId}",
            "&7同じIDは上書きします"))
    inv.setItem(
        11,
        makeItem(
            Material.ITEM_FRAME,
            "&a選択中ブロックを保存",
            "&7保存先: 個人テンプレート",
            "&7対象slot: &f${templateTargetSlotLabel(session)}",
            "&7スロット編集画面から開くと確実です"))
    inv.setItem(
        12,
        makeItem(
            Material.NETHER_STAR,
            "&6公式テンプレート",
            "&7クリックで公式テンプレートだけ表示します",
            "&7OPコマンドで個人テンプレートを承認します",
            "&f/guimaker template approve <player> <menu|block> <id> [official-id]"))

    for ((slot, entry) in slotToEntry) inv.setItem(slot, templateEntryItem(entry))
    inv.setItem(
        45,
        makeItem(
            Material.BOOK,
            "&f一覧",
            "&7カテゴリ: &f${category.displayName}",
            "&7${safePage + 1}/${maxPage + 1} ページ",
            "&7表示: &f${entries.size}件"))
    inv.setItem(48, makeItem(Material.ARROW, "&e前のページ", "&7テンプレート一覧を戻します"))
    inv.setItem(49, templateFilterItem(category, sortMode))
    inv.setItem(50, makeItem(Material.ARROW, "&e次のページ", "&7テンプレート一覧を進めます"))
    inv.setItem(53, makeItem(Material.ARROW, "&f編集に戻る", "&7元の編集画面へ戻ります"))
    fillAll(inv, Material.YELLOW_STAINED_GLASS_PANE)
    applyUiSkin(inv, "template_hub")
    player.openInventory(inv)
  }

  private fun sortTemplateEntries(
      entries: List<GuiTemplateEntry>,
      sortMode: TemplateSortMode
  ): List<GuiTemplateEntry> =
      when (sortMode) {
        TemplateSortMode.UPDATED_DESC ->
            entries.sortedWith(
                compareByDescending<GuiTemplateEntry> { it.file.lastModified() }
                    .thenBy { it.scope.ordinal }
                    .thenBy { it.kind.ordinal }
                    .thenBy { it.id })
        TemplateSortMode.UPDATED_ASC ->
            entries.sortedWith(
                compareBy<GuiTemplateEntry> { it.file.lastModified() }
                    .thenBy { it.scope.ordinal }
                    .thenBy { it.kind.ordinal }
                    .thenBy { it.id })
        TemplateSortMode.NAME_ASC ->
            entries.sortedWith(
                compareBy<GuiTemplateEntry> { it.kind.ordinal }
                    .thenBy { it.scope.ordinal }
                    .thenBy { it.id })
        TemplateSortMode.NAME_DESC ->
            entries.sortedWith(
                compareByDescending<GuiTemplateEntry> { it.id }
                    .thenBy { it.scope.ordinal }
                    .thenBy { it.kind.ordinal })
      }

  private fun templateFilterItem(
      category: TemplateCategory,
      sortMode: TemplateSortMode
  ): ItemStack =
      makeItem(
          Material.CLOCK,
          "&e表示切替",
          "&7カテゴリ: &f${category.displayName}",
          "&7ソート: &f${sortMode.displayName}",
          "&a左クリック&7: カテゴリ切替",
          "&b右クリック&7: ソート切替")

  private fun templateEntryItem(entry: GuiTemplateEntry): ItemStack {
    val mat =
        when (entry.kind) {
          GuiTemplateKind.MENU ->
              if (entry.scope == GuiTemplateScope.SHARED) Material.ENDER_CHEST else Material.CHEST
          GuiTemplateKind.BLOCK ->
              if (entry.scope == GuiTemplateScope.SHARED) Material.NETHER_STAR
              else Material.ITEM_FRAME
        }
    return makeItem(
        mat,
        "${if (entry.scope == GuiTemplateScope.SHARED) "&6公式" else "&b個人"} ${entry.kind.displayName}: &f${entry.id}",
        "&a左クリック&7: 現在の編集に読み込み",
        "&e右クリック&7: このテンプレートをUIで編集",
        "&cShift+右クリック&7: 確認して削除",
        "&8${entry.file.name}",
        if (entry.kind == GuiTemplateKind.MENU) "&eGUI全体を置き換えます" else "&e選択中/空きスロットに配置します")
  }

  private fun handleTemplateHubClick(
      event: InventoryClickEvent,
      player: Player,
      holder: TemplateHubHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    val session = holder.session
    when (funcLabelAt("template_hub", event.rawSlot)) {
      "現在のGUIを保存" -> {
        rebuildSlotsFromInventory(session)
        val result = GuiTemplateStore.saveMenuTemplate(plugin, player, session)
        msgResult(player, result, "GUIテンプレートを保存しました")
        openTemplateHub(player, session, holder.page, TemplateCategory.MENU, holder.sortMode)
        return
      }
      "選択中ブロックを保存" -> {
        rebuildSlotsFromInventory(session)
        val slot = templateTargetSlot(session)
        if (slot == null) {
          msg(player, "&e[GuiMaker] &c保存できる選択中ブロックがありません。")
        } else {
          val result = GuiTemplateStore.saveBlockTemplate(plugin, player, session, slot)
          msgResult(player, result, "ブロックテンプレートを保存しました")
        }
        openTemplateHub(player, session, holder.page, TemplateCategory.BLOCK, holder.sortMode)
        return
      }
      "公式テンプレート" -> {
        openTemplateHub(player, session, 0, TemplateCategory.SHARED, holder.sortMode)
        return
      }
      "前のページ" -> {
        openTemplateHub(player, session, holder.page - 1, holder.category, holder.sortMode)
        return
      }
      "表示切替" -> {
        if (event.click == ClickType.RIGHT || event.click == ClickType.SHIFT_RIGHT) {
          openTemplateHub(player, session, 0, holder.category, holder.sortMode.next())
        } else {
          openTemplateHub(player, session, 0, holder.category.next(), holder.sortMode)
        }
        return
      }
      "次のページ" -> {
        openTemplateHub(player, session, holder.page + 1, holder.category, holder.sortMode)
        return
      }
      "編集に戻る" -> {
        returnFromTemplateHub(player, session)
        return
      }
    }
    val entry = holder.slotToEntry[event.rawSlot] ?: return
    when (event.click) {
      ClickType.SHIFT_RIGHT -> openTemplateDeleteConfirm(player, session, entry, holder)
      ClickType.RIGHT -> openTemplateEditor(player, session, entry)
      else ->
          when (entry.kind) {
            GuiTemplateKind.MENU -> applyMenuTemplate(player, session, entry)
            GuiTemplateKind.BLOCK -> applyBlockTemplate(player, session, entry)
          }
    }
  }

  private fun openTemplateEditor(
      player: Player,
      session: GuiEditorSession,
      entry: GuiTemplateEntry
  ) {
    rebuildSlotsFromInventory(session)
    saveWorkingCopy(session)
    session.templateEditTarget = entry

    when (entry.kind) {
      GuiTemplateKind.MENU -> {
        if (!GuiMakerExporter.loadFileIntoSession(plugin, entry.file, session)) {
          session.templateEditTarget = null
          msg(player, "&e[GuiMaker] &cテンプレートを読み込めませんでした: &f${entry.id}")
          return
        }
        msg(player, "&e[GuiMaker] &aテンプレート編集を開始しました: &f${entry.id}")
        openCanvas(player, session)
      }
      GuiTemplateKind.BLOCK -> {
        val template =
            runCatching { GuiTemplateStore.loadBlockTemplate(entry.file) }
                .getOrElse {
                  session.templateEditTarget = null
                  msg(player, "&e[GuiMaker] &cブロックテンプレートを読み込めませんでした: ${it.message}")
                  return
                }
        session.menuSize = 54
        session.menuTitle = "&8テンプレート: ${entry.id}"
        session.slots.clear()
        session.contextSlot = TEMPLATE_BLOCK_EDIT_SLOT
        session.canvasInventory = Bukkit.createInventory(null, session.menuSize)
        session.canvasInventory?.setItem(
            TEMPLATE_BLOCK_EDIT_SLOT,
            GuiTemplateStore.buildBlockItem(template.material, template.def))
        session.slots[TEMPLATE_BLOCK_EDIT_SLOT] =
            template.def.copy(
                lore = template.def.lore.toMutableList(),
                actions = template.def.actions.toMutableList(),
                extras = template.def.extras.toMutableMap())
        applyPdcToItem(session, TEMPLATE_BLOCK_EDIT_SLOT)
        msg(player, "&e[GuiMaker] &aブロックテンプレート編集を開始しました: &f${entry.id}")
        openContextMenu(player, session, TEMPLATE_BLOCK_EDIT_SLOT)
      }
    }
  }

  private fun openTemplateDeleteConfirm(
      player: Player,
      session: GuiEditorSession,
      entry: GuiTemplateEntry,
      hub: TemplateHubHolder
  ) {
    val inv =
        Bukkit.createInventory(
            TemplateDeleteConfirmHolder(session, entry, hub.page, hub.category, hub.sortMode),
            54,
            comp("&9GuiMaker &8- &cテンプレート削除確認"))
    inv.setItem(
        13,
        makeItem(
            Material.TNT,
            "&cテンプレートを削除しますか？",
            "&7対象: &f${entry.scope.displayName} ${entry.kind.displayName}",
            "&7ID: &f${entry.id}",
            "&cこの操作は元に戻せません"))
    inv.setItem(20, makeItem(Material.LIME_CONCRETE, "&a実行する", "&7クリックで削除を確定します"))
    inv.setItem(24, makeItem(Material.RED_CONCRETE, "&cキャンセル", "&7テンプレート一覧へ戻ります"))
    fillAll(inv, Material.RED_STAINED_GLASS_PANE)
    applyUiSkin(inv, "confirm")
    player.openInventory(inv)
  }

  private fun handleTemplateDeleteConfirmClick(
      event: InventoryClickEvent,
      player: Player,
      holder: TemplateDeleteConfirmHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    when (funcLabelAt("confirm", event.rawSlot)) {
      "実行する" -> {
        val result = GuiTemplateStore.deleteTemplate(plugin, holder.entry)
        msgResult(player, result, "テンプレートを削除しました")
        if (holder.session.templateEditTarget?.file == holder.entry.file) {
          holder.session.templateEditTarget = null
        }
        openTemplateHub(player, holder.session, holder.page, holder.category, holder.sortMode)
      }
      "キャンセル" ->
          openTemplateHub(player, holder.session, holder.page, holder.category, holder.sortMode)
      else -> {}
    }
  }

  private fun applyMenuTemplate(
      player: Player,
      session: GuiEditorSession,
      entry: GuiTemplateEntry
  ) {
    if (!GuiMakerExporter.loadFileIntoSession(plugin, entry.file, session)) {
      msg(player, "&e[GuiMaker] &cテンプレートを読み込めませんでした: &f${entry.id}")
      return
    }
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aGUIテンプレートを読み込みました: &f${entry.id}")
    openCanvas(player, session)
  }

  private fun applyBlockTemplate(
      player: Player,
      session: GuiEditorSession,
      entry: GuiTemplateEntry
  ) {
    val targetSlot =
        templateTargetSlot(session)
            ?: firstEmptyCanvasSlot(session)
            ?: run {
              msg(player, "&e[GuiMaker] &c配置できる空きスロットがありません。")
              return
            }
    val template =
        runCatching { GuiTemplateStore.loadBlockTemplate(entry.file) }
            .getOrElse {
              msg(player, "&e[GuiMaker] &cブロックテンプレートを読み込めませんでした: ${it.message}")
              return
            }
    val inv =
        session.canvasInventory
            ?: Bukkit.createInventory(null, session.menuSize).also { session.canvasInventory = it }
    inv.setItem(targetSlot, GuiTemplateStore.buildBlockItem(template.material, template.def))
    session.slots[targetSlot] =
        template.def.copy(
            lore = template.def.lore.toMutableList(),
            actions = template.def.actions.toMutableList(),
            extras = template.def.extras.toMutableMap())
    applyPdcToItem(session, targetSlot)
    saveWorkingCopy(session)
    msg(player, "&e[GuiMaker] &aブロックテンプレートを配置しました: &f${entry.id} &7(slot $targetSlot)")
    openContextMenu(player, session, targetSlot)
  }

  private fun templateTargetSlot(session: GuiEditorSession): Int? {
    val slot = session.contextSlot
    val inv = session.canvasInventory ?: return null
    if (slot !in 0 until session.menuSize) return null
    return inv.getItem(slot)?.takeIf { it.type != Material.AIR }?.let { slot }
  }

  private fun firstEmptyCanvasSlot(session: GuiEditorSession): Int? {
    val inv = session.canvasInventory ?: return null
    return (0 until session.menuSize).firstOrNull {
      if (session.surface == GuiEditableSurface.POPUP && it in 45..53) return@firstOrNull false
      inv.getItem(it)?.takeIf { item -> item.type != Material.AIR } == null
    }
  }

  private fun templateTargetSlotLabel(session: GuiEditorSession): String =
      templateTargetSlot(session)?.toString() ?: "(なし)"

  private fun returnFromTemplateHub(player: Player, session: GuiEditorSession) {
    val slot = templateTargetSlot(session)
    if (slot != null) openContextMenu(player, session, slot) else openCanvas(player, session)
  }

  private fun msgResult(player: Player, result: Result<String>, successPrefix: String) {
    if (result.isSuccess) {
      msg(player, "&e[GuiMaker] &a$successPrefix: &f${result.getOrNull()}")
    } else {
      msg(player, "&e[GuiMaker] &c失敗: ${result.exceptionOrNull()?.message}")
    }
  }

  fun saveTemplateEdit(player: Player, session: GuiEditorSession): Boolean {
    val target = session.templateEditTarget ?: return false
    rebuildSlotsFromInventory(session)
    val result = saveTemplateEditInternal(session, target)
    msgResult(player, result, "テンプレートを保存しました")
    return true
  }

  private fun saveWorkingCopy(session: GuiEditorSession) {
    val target = session.templateEditTarget
    if (target == null) {
      GuiMakerExporter.exportDraft(plugin, session)
      return
    }
    saveTemplateEditInternal(session, target).onFailure {
      plugin.logger.warning("[GuiMaker] テンプレート保存失敗: ${it.message}")
    }
  }

  private fun saveTemplateEditInternal(
      session: GuiEditorSession,
      target: GuiTemplateEntry
  ): Result<String> =
      GuiTemplateStore.saveEditedTemplate(plugin, session, target, templateEditSlot(session))

  private fun templateEditSlot(session: GuiEditorSession): Int? {
    val inv = session.canvasInventory ?: return null
    val contextSlot = session.contextSlot
    if (contextSlot in 0 until inv.size) {
      if (inv.getItem(contextSlot)?.takeIf { it.type != Material.AIR } != null) return contextSlot
    }
    return (0 until inv.size).firstOrNull {
      inv.getItem(it)?.takeIf { item -> item.type != Material.AIR } != null
    }
  }

  private fun openPopupSettings(player: Player, session: GuiEditorSession) {
    val meta = session.popupMeta ?: PopupEditorMeta().also { session.popupMeta = it }
    val inv = Bukkit.createInventory(PopupSettingsHolder(session), 54, comp("&8Popup設定"))
    fillMain(inv, Material.PURPLE_STAINED_GLASS_PANE)
    inv.setItem(4, makeItem(Material.CHORUS_FRUIT, "&d${session.displayId}", "&7Popup専用設定"))
    inv.setItem(
        10,
        makeItem(
            popupGlassMaterial(meta.glass),
            "&d背景ガラス",
            "&7現在: &f${meta.glass}",
            "&7左クリックで次へ / 右クリックで前へ"))
    inv.setItem(
        12,
        makeItem(
            Material.ARROW,
            "&eNav Active -",
            "&7現在: &f${if (meta.navActive < 0) "なし" else meta.navActive}",
            "&7下部ナビの強調スロットを戻します"))
    inv.setItem(
        14,
        makeItem(
            Material.ARROW,
            "&eNav Active +",
            "&7現在: &f${if (meta.navActive < 0) "なし" else meta.navActive}",
            "&7下部ナビの強調スロットを進めます"))
    inv.setItem(
        20, makeItem(Material.NAME_TAG, "&bタイトル", "&7現在: &f${session.menuTitle}", "&7クリックでタイトルを編集"))
    inv.setItem(48, makeItem(Material.LIME_CONCRETE_POWDER, "&a反映", "&7Popup YAML に書き込みます"))
    inv.setItem(HUB_BACK_SLOT, makeItem(Material.ARROW, "&fキャンバスへ戻る"))
    applyUiSkin(inv, "popup_settings")
    player.openInventory(inv)
  }

  private fun handlePopupSettingsClick(
      event: InventoryClickEvent,
      player: Player,
      holder: PopupSettingsHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    val session = holder.session
    val meta = session.popupMeta ?: PopupEditorMeta().also { session.popupMeta = it }
    when (funcLabelAt("popup_settings", event.rawSlot)) {
      "背景ガラス" -> {
        meta.glass = nextPopupGlass(meta.glass, backwards = event.isRightClick)
        saveWorkingCopy(session)
        openPopupSettings(player, session)
      }
      "Nav Active -" -> {
        meta.navActive = nextNavActive(meta.navActive, -1)
        saveWorkingCopy(session)
        openPopupSettings(player, session)
      }
      "Nav Active +" -> {
        meta.navActive = nextNavActive(meta.navActive, 1)
        saveWorkingCopy(session)
        openPopupSettings(player, session)
      }
      "タイトル" -> openColorPicker(player, session, -1, "TITLE")
      "キャンバスへ戻る" -> openCanvas(player, session)
      "反映" -> commitSession(player, session)
    }
  }

  private fun popupGlassMaterial(name: String): Material =
      runCatching { Material.valueOf(name) }.getOrDefault(Material.GRAY_STAINED_GLASS_PANE)

  private fun nextPopupGlass(current: String, backwards: Boolean): String {
    val options =
        listOf(
            Material.GRAY_STAINED_GLASS_PANE,
            Material.WHITE_STAINED_GLASS_PANE,
            Material.LIGHT_BLUE_STAINED_GLASS_PANE,
            Material.LIME_STAINED_GLASS_PANE,
            Material.YELLOW_STAINED_GLASS_PANE,
            Material.ORANGE_STAINED_GLASS_PANE,
            Material.PURPLE_STAINED_GLASS_PANE,
            Material.RED_STAINED_GLASS_PANE,
            Material.BLACK_STAINED_GLASS_PANE)
    val index = options.indexOf(popupGlassMaterial(current)).takeIf { it >= 0 } ?: 0
    val delta = if (backwards) -1 else 1
    return options[Math.floorMod(index + delta, options.size)].name
  }

  private fun nextNavActive(current: Int, delta: Int): Int {
    val options = listOf(-1) + NavBar.entries.map { it.slot }
    val index = options.indexOf(current).takeIf { it >= 0 } ?: 0
    return options[Math.floorMod(index + delta, options.size)]
  }

  private fun applyEditorBar(
      player: Player,
      inv: Inventory,
      session: GuiEditorSession,
      backName: String,
      backLore: String
  ) {
    inv.setItem(45, editorHead(player, session))
    inv.setItem(46, makeItem(Material.CYAN_CONCRETE_POWDER, "&bキャンバス", "&7編集キャンバスを開きます"))
    inv.setItem(47, makeItem(Material.LIGHT_BLUE_CONCRETE_POWDER, "&9プレビュー", "&7現在の編集内容で動作確認します"))
    val templateTarget = session.templateEditTarget
    inv.setItem(
        48,
        if (templateTarget == null)
            makeItem(Material.LIME_CONCRETE_POWDER, "&a反映", "&7OyasaiMenu のライブ YAML に書き込みます")
        else
            makeItem(
                Material.LIME_CONCRETE,
                "&aテンプレート保存",
                "&7編集中のテンプレートファイルへ保存します",
                "&7対象: &f${templateTarget.scope.displayName} ${templateTarget.kind.displayName}",
                "&7ID: &f${templateTarget.id}"))
    inv.setItem(
        49, makeItem(Material.YELLOW_CONCRETE_POWDER, "&eテンプレート", "&7GUI/ブロックテンプレートを保存・読込します"))
    inv.setItem(
        50,
        if (session.surface == GuiEditableSurface.POPUP)
            makeItem(
                Material.PURPLE_CONCRETE_POWDER, "&dPopup設定", "&7title / glass / nav_active を編集します")
        else makeItem(Material.PURPLE_CONCRETE_POWDER, "&dタイトル", "&7メニュータイトルを変更します"))
    inv.setItem(
        51,
        if (templateTarget == null)
            makeItem(Material.BLUE_CONCRETE_POWDER, "&9ライブ表示", "&7commit 済みの OyasaiMenu を開きます")
        else makeItem(Material.CHEST, "&eテンプレート一覧", "&7テンプレート一覧へ戻ります"))
    inv.setItem(52, makeItem(Material.GRAY_CONCRETE_POWDER, "&7閉じる", "&7編集セッションは保持します"))
    inv.setItem(53, makeItem(Material.ARROW, backName, backLore))
  }

  private fun handleEditorBarClick(
      rawSlot: Int,
      player: Player,
      session: GuiEditorSession,
      back: () -> Unit
  ): Boolean {
    when (rawSlot) {
      45 -> printSessionInfo(player, session)
      46 -> openCanvas(player, session)
      47 -> openPreview(player, session)
      48 -> if (!saveTemplateEdit(player, session)) commitSession(player, session)
      49 -> openTemplateHub(player, session)
      50 ->
          if (session.surface == GuiEditableSurface.POPUP) openPopupSettings(player, session)
          else openColorPicker(player, session, -1, "TITLE")
      51 -> {
        if (session.templateEditTarget != null) {
          openTemplateHub(player, session)
        } else {
          player.closeInventory()
          Bukkit.getScheduler()
              .runTaskLater(
                  plugin,
                  Runnable {
                    if (session.surface == GuiEditableSurface.POPUP)
                        plugin.popupMenuEngine.open(player, session.menuId)
                    else player.performCommand("menu ${session.menuId}")
                  },
                  1L)
        }
      }
      52 -> player.closeInventory()
      53 -> back()
      else -> return false
    }
    return true
  }

  private fun commitSession(player: Player, session: GuiEditorSession) {
    rebuildSlotsFromInventory(session)
    val result = GuiMakerExporter.commit(plugin, session)
    if (result.isSuccess) {
      msg(player, "&e[GuiMaker] &aコミットしました: &f${result.getOrNull()}")
      plugin.reload()
    } else {
      msg(player, "&e[GuiMaker] &cコミット失敗: ${result.exceptionOrNull()?.message}")
    }
  }

  private fun printSessionInfo(player: Player, session: GuiEditorSession) {
    rebuildSlotsFromInventory(session)
    val itemCount =
        session.canvasInventory?.contents?.count { it != null && it.type != Material.AIR } ?: 0
    val hasDraft = GuiMakerExporter.hasDraft(plugin, session)
    msg(player, "&e[GuiMaker] &fID: &a${session.displayId}")
    msg(player, "&e[GuiMaker] &fタイトル: &a${session.menuTitle}")
    msg(player, "&e[GuiMaker] &fサイズ: &a${session.menuSize} &fアイテム数: &a$itemCount")
    if (session.surface == GuiEditableSurface.POPUP) {
      val meta = session.popupMeta ?: PopupEditorMeta()
      msg(player, "&e[GuiMaker] &fPopup: glass=&a${meta.glass} &fnav_active=&a${meta.navActive}")
    }
    msg(player, "&e[GuiMaker] &fドラフト: ${if (hasDraft) "&a保存済み" else "&7なし"}")
  }

  private fun decorateItem(base: ItemStack, def: GuiSlotDef?): ItemStack {
    val item = base.clone()
    if (def == null) return item
    val meta = item.itemMeta ?: return item
    if (def.name.isNotEmpty()) meta.displayName(comp(def.name))
    if (def.lore.isNotEmpty()) meta.lore(def.lore.map { comp(it) })
    ItemVisuals.applyEnchantVisual(meta, def.enchanted)
    item.itemMeta = meta
    return item
  }

  private fun makeItem(mat: Material, name: String, vararg lore: String): ItemStack {
    val stack = ItemStack(mat)
    val meta = stack.itemMeta
    meta.displayName(comp(name))
    meta.lore(lore.map { comp(it) })
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    stack.itemMeta = meta
    return stack
  }

  private fun applyPopupReservedSlots(inv: Inventory, session: GuiEditorSession) {
    val active = session.popupMeta?.navActive ?: -1
    for (slot in 45..53) {
      val item =
          if (slot == POPUP_RESERVED_BACK_SLOT) {
            makeItem(
                Material.ARROW,
                "&fPopup設定へ戻る",
                "&7Popupでは 45-53 は下部ナビゲーション専用です",
                "&7クリックで Popup設定へ戻ります")
          } else {
            makeItem(
                if (slot == active) Material.LIME_STAINED_GLASS_PANE
                else Material.RED_STAINED_GLASS_PANE,
                if (slot == active) "&aNavBar予約: $slot" else "&cNavBar予約: $slot",
                "&7Popupでは 45-53 は下部ナビゲーション専用です",
                "&7このスロットにはアイテムを配置できません",
                "&7Popup設定から nav_active を変更できます")
          }
      val meta = item.itemMeta ?: continue
      meta.persistentDataContainer.set(
          KEY_FUNC,
          PersistentDataType.STRING,
          if (slot == POPUP_RESERVED_BACK_SLOT) "popup_reserved_back" else "popup_reserved")
      item.itemMeta = meta
      inv.setItem(slot, item)
    }
  }

  private fun editorHead(player: Player, session: GuiEditorSession): ItemStack {
    val stack = ItemStack(Material.PLAYER_HEAD)
    val meta = stack.itemMeta as? SkullMeta ?: return stack
    meta.owningPlayer = player
    meta.displayName(comp("&f${player.name}"))
    val templateTarget = session.templateEditTarget
    meta.lore(
        buildList {
          if (templateTarget == null) {
            add(comp("&7編集中: &a${session.displayId}"))
          } else {
            add(comp("&dテンプレート編集中"))
            add(
                comp(
                    "&7対象: &f${templateTarget.scope.displayName} ${templateTarget.kind.displayName}"))
            add(comp("&7ID: &f${templateTarget.id}"))
          }
          add(comp("&7タイトル: &f${session.menuTitle}"))
          add(comp("&7サイズ: &f${session.menuSize}"))
          add(comp(""))
          add(comp("&eクリックで情報を表示"))
        })
    stack.itemMeta = meta
    return stack
  }

  private fun glass(material: Material): ItemStack {
    val stack = ItemStack(material)
    val meta = stack.itemMeta
    meta.displayName(Component.text(" ").decoration(TextDecoration.ITALIC, false))
    stack.itemMeta = meta
    return stack
  }

  private fun msg(player: Player, text: String) = player.sendMessage(comp(text))

  private fun comp(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)

  // ── Holders ─────────────────────────────────────────────────

  inner class HubHolder : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class SurfaceListHolder(val surface: GuiEditableSurface, val page: Int) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class UiScreenListHolder(val page: Int) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class SpecialSurfaceHubHolder : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class CanvasHolder(val session: GuiEditorSession) : InventoryHolder {
    override fun getInventory(): Inventory =
        session.canvasInventory ?: Bukkit.createInventory(this, 54)
  }

  inner class ContextHolder(val session: GuiEditorSession, val slot: Int) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class LoreManageHolder(
      val session: GuiEditorSession,
      val slot: Int,
      val slotToIndex: Map<Int, Int>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class LoreLineEditHolder(val session: GuiEditorSession, val slot: Int, val lineIndex: Int) :
      InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class ActionManageHolder(
      val session: GuiEditorSession,
      val slot: Int,
      val slotToIndex: Map<Int, Int>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class ActionEditHolder(val session: GuiEditorSession, val slot: Int, val actionIndex: Int) :
      InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class ActionTypeHolder(val session: GuiEditorSession, val slot: Int) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class PermissionFlatHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val slotToGroup: Map<Int, PermissionGroupChoice>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class PermissionCategoryHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val slotToCategory: Map<Int, String>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class PermissionGroupHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val category: String,
      val page: Int,
      val slotToGroup: Map<Int, PermissionGroupChoice>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class SoundCategoryHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val actionIndex: Int?,
      val slotToCategory: Map<Int, String>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class SoundPickHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val actionIndex: Int?,
      val category: String,
      val page: Int,
      val slotToSound: Map<Int, String>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class ColorPickHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val target: String
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class PopupPickHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val actionIndex: Int?,
      val slotToId: Map<Int, String>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class MenuIdPickHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val actionIndex: Int?,
      val slotToId: Map<Int, String>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class SpecialMenuPickHolder(
      val session: GuiEditorSession,
      val canvasSlot: Int,
      val actionIndex: Int?,
      val slotToId: Map<Int, String>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class ConfirmHolder(
      val session: GuiEditorSession,
      val slot: Int,
      val actionIndex: Int?,
      val kind: String
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class FavManageHolder(val session: GuiEditorSession, val canvasSlot: Int) :
      InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class PreviewHolder(val session: GuiEditorSession) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, session.menuSize)
  }

  inner class UiSkinHolder(
      val screenName: String,
      val enabledLabels: MutableSet<String>,
      val templateLabels: MutableMap<Int, String> = mutableMapOf(),
      var templatePage: Int = 0,
      var deleteMode: Boolean = false
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class UiSkinBlockPickerHolder(
      val screenName: String,
      val returnData: UiSkinData,
      val allScreens: Boolean,
      val page: Int
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  inner class PopupSettingsHolder(val session: GuiEditorSession) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  private inner class TemplateHubHolder(
      val session: GuiEditorSession,
      val page: Int,
      val category: TemplateCategory,
      val sortMode: TemplateSortMode,
      val slotToEntry: Map<Int, GuiTemplateEntry>
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  private inner class TemplateDeleteConfirmHolder(
      val session: GuiEditorSession,
      val entry: GuiTemplateEntry,
      val page: Int,
      val category: TemplateCategory,
      val sortMode: TemplateSortMode
  ) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }
}
