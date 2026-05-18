package com.github.sahyuya.oyasaiMenu.guimaker

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PopupActionType
import com.github.sahyuya.oyasaiMenu.util.ItemVisuals
import java.io.File
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack

object GuiMakerExporter {

  private val blockedLiveFileNames = setOf("custom_items.yml", "shops.yml", "pointshop.yml")

  private fun draftFile(plugin: OyasaiMenu, menuId: String): File =
      File(plugin.dataFolder, "guimaker/$menuId.yml").also { it.parentFile.mkdirs() }

  private fun popupDraftFile(plugin: OyasaiMenu, popupId: String): File =
      File(plugin.dataFolder, "guimaker/popup/$popupId.yml").also { it.parentFile.mkdirs() }

  private fun liveFile(plugin: OyasaiMenu, menuId: String): File =
      File(plugin.dataFolder, "menus/$menuId.yml")

  private fun popupLiveFile(plugin: OyasaiMenu, popupId: String): File =
      File(plugin.dataFolder, "menus/popup/$popupId.yml")

  private fun draftFile(plugin: OyasaiMenu, session: GuiEditorSession): File =
      if (session.surface == GuiEditableSurface.POPUP) popupDraftFile(plugin, session.menuId)
      else draftFile(plugin, session.menuId)

  private fun liveFile(plugin: OyasaiMenu, session: GuiEditorSession): File =
      if (session.surface == GuiEditableSurface.POPUP) popupLiveFile(plugin, session.menuId)
      else liveFile(plugin, session.menuId)

  // ── 公開 API ──────────────────────────────────────────────

  fun exportDraft(plugin: OyasaiMenu, session: GuiEditorSession) {
    runCatching { writeYaml(draftFile(plugin, session), session) }
        .onFailure { plugin.logger.warning("[GuiMaker] ドラフト保存失敗: ${it.message}") }
  }

  fun hasDraft(plugin: OyasaiMenu, menuId: String): Boolean = draftFile(plugin, menuId).exists()

  fun hasDraft(plugin: OyasaiMenu, session: GuiEditorSession): Boolean =
      draftFile(plugin, session).exists()

  fun hasPopupDraft(plugin: OyasaiMenu, popupId: String): Boolean =
      popupDraftFile(plugin, popupId).exists()

  fun commit(plugin: OyasaiMenu, session: GuiEditorSession): Result<String> = runCatching {
    saveSessionToFile(plugin, session, liveFile(plugin, session))
  }

  fun revertDraft(plugin: OyasaiMenu, session: GuiEditorSession) {
    draftFile(plugin, session).delete()
  }

  fun loadIntoSession(plugin: OyasaiMenu, session: GuiEditorSession): Boolean {
    if (!isEditableMenuId(session.menuId)) return false
    val draft = draftFile(plugin, session.menuId)
    val live = liveFile(plugin, session.menuId)
    val file =
        when {
          draft.exists() -> draft
          live.exists() -> live
          else -> return false
        }
    return loadFileIntoSession(plugin, file, session)
  }

  fun saveSessionToFile(plugin: OyasaiMenu, session: GuiEditorSession, file: File): String {
    file.parentFile.mkdirs()
    writeYaml(file, session)
    return file.relativeTo(plugin.dataFolder.parentFile).path
  }

  fun loadFileIntoSession(plugin: OyasaiMenu, file: File, session: GuiEditorSession): Boolean {
    if (!file.exists()) return false
    parseYamlIntoSession(plugin, file, session)
    return true
  }

  fun listMenuIds(plugin: OyasaiMenu): List<String> {
    val ids = mutableSetOf<String>()
    val draftDir = File(plugin.dataFolder, "guimaker")
    if (draftDir.exists()) {
      draftDir
          .walkTopDown()
          .filter { it.isFile && it.extension.equals("yml", ignoreCase = true) }
          .forEach {
            val id = it.toRelativeString(draftDir).removeYamlSuffix()
            if (isEditableMenuId(id)) ids.add(id)
          }
    }
    val liveDir = File(plugin.dataFolder, "menus")
    if (liveDir.exists()) {
      liveDir
          .walkTopDown()
          .filter { isEditableLiveMenuFile(liveDir, it) }
          .forEach {
            val id = it.toRelativeString(liveDir).removeYamlSuffix()
            if (isEditableMenuId(id)) ids.add(id)
          }
    }
    return ids.sorted()
  }

  fun listPopupIds(plugin: OyasaiMenu): List<String> {
    val ids = mutableSetOf<String>()
    val draftDir = File(plugin.dataFolder, "guimaker/popup")
    if (draftDir.exists()) {
      draftDir
          .listFiles()
          ?.filter { it.isFile && it.extension.equals("yml", ignoreCase = true) }
          ?.forEach { ids.add(it.nameWithoutExtension) }
    }
    val liveDir = File(plugin.dataFolder, "menus/popup")
    if (liveDir.exists()) {
      liveDir
          .listFiles()
          ?.filter { it.isFile && it.extension.equals("yml", ignoreCase = true) }
          ?.forEach { ids.add(it.nameWithoutExtension) }
    }
    plugin.popupMenuLoader.getPopupIds().forEach { ids.add(it) }
    return ids.sorted()
  }

  fun newPopupSession(popupId: String): GuiEditorSession =
      GuiEditorSession(popupId, "&8$popupId", 54).also {
        it.surface = GuiEditableSurface.POPUP
        it.popupMeta = PopupEditorMeta()
        it.canvasInventory = Bukkit.createInventory(null, 54)
      }

  fun loadPopupIntoSession(plugin: OyasaiMenu, session: GuiEditorSession): Boolean {
    session.surface = GuiEditableSurface.POPUP
    val draft = popupDraftFile(plugin, session.menuId)
    val live = popupLiveFile(plugin, session.menuId)
    val file =
        when {
          draft.exists() -> draft
          live.exists() -> live
          else -> return false
        }
    parsePopupYamlIntoSession(plugin, file, session)
    return true
  }

  fun isEditableMenuId(menuId: String): Boolean =
      !menuId.startsWith("popup/") &&
          menuId.split('/').none { it == "." || it == ".." } &&
          "${menuId.substringAfterLast('/')}.yml".lowercase() !in blockedLiveFileNames

  // ── 内部処理 ──────────────────────────────────────────────

  private fun writeYaml(file: File, session: GuiEditorSession) {
    if (session.surface == GuiEditableSurface.POPUP) {
      writePopupYaml(file, session)
      return
    }
    val inv = session.canvasInventory ?: return
    val yaml = YamlConfiguration()
    yaml.set("menu.title", session.menuTitle)
    yaml.set("menu.size", session.menuSize)

    for (slot in 0 until inv.size) {
      val item = inv.getItem(slot)?.takeIf { it.type != Material.AIR } ?: continue
      val material = rawMaterial(item) ?: continue
      val key = "items.item_$slot"
      val def = session.slots[slot]

      yaml.set("$key.slot", slot)
      yaml.set("$key.icon", material.name)

      val name =
          def?.name?.takeIf { it.isNotEmpty() }
              ?: (if (item.hasItemMeta() && item.itemMeta.hasDisplayName())
                  item.itemMeta.displayName()?.let {
                    LegacyComponentSerializer.legacyAmpersand().serialize(it)
                  }
              else null)
              ?: ""
      if (name.isNotEmpty()) yaml.set("$key.name", name)

      val lore: List<String> =
          when {
            def != null && def.lore.isNotEmpty() -> def.lore.toList()
            item.hasItemMeta() && item.itemMeta.hasLore() ->
                item.itemMeta.lore()?.map { c ->
                  LegacyComponentSerializer.legacyAmpersand().serialize(c)
                } ?: emptyList()
            else -> emptyList()
          }
      if (lore.isNotEmpty()) yaml.set("$key.lore", lore)
      def?.permission?.let { yaml.set("$key.permission", it) }
      if (def?.enchanted == true) yaml.set("$key.enchanted", true)

      if (def != null && def.actions.isNotEmpty()) {
        val actionList =
            def.actions.map { action ->
              val map = mutableMapOf<String, Any>("type" to action.type)
              map.putAll(action.params)
              map
            }
        yaml.set("$key.actions", actionList)
      }
    }
    yaml.save(file)
  }

  private fun writePopupYaml(file: File, session: GuiEditorSession) {
    val inv = session.canvasInventory ?: return
    val yaml = YamlConfiguration()
    val meta = session.popupMeta ?: PopupEditorMeta()
    yaml.set("title", session.menuTitle)
    yaml.set("glass", meta.glass)
    yaml.set("nav_active", meta.navActive)

    val usedKeys = mutableSetOf<String>()
    for (slot in 0 until inv.size) {
      if (slot in 45..53) continue
      val item = inv.getItem(slot)?.takeIf { it.type != Material.AIR } ?: continue
      val def = session.slots[slot]
      val key = uniquePopupKey(def?.extras?.get("popup.key"), slot, usedKeys)
      val base = "items.$key"
      val material = rawMaterial(item) ?: continue

      yaml.set("$base.slot", slot)
      yaml.set("$base.icon", popupMaterialName(material, def?.extras?.get("texture")))
      def?.extras?.get("texture")?.takeIf { it.isNotBlank() }?.let { yaml.set("$base.texture", it) }
      def?.name?.takeIf { it.isNotEmpty() }?.let { yaml.set("$base.name", it) }
      def?.lore?.takeIf { it.isNotEmpty() }?.let { yaml.set("$base.lore", it.toList()) }
      if (def?.enchanted == true) yaml.set("$base.enchanted", true)
      def?.permission?.takeIf { it.isNotBlank() }?.let { yaml.set("$base.required_permission", it) }
      if (def?.extras?.get("op_only")?.toBooleanStrictOrNull() == true) {
        yaml.set("$base.op_only", true)
      }
      writeOptionalPopupString(yaml, base, def, "fallback_icon")
      writeOptionalPopupString(yaml, base, def, "fallback_texture")
      writeOptionalPopupString(yaml, base, def, "fallback_name")
      def?.extras
          ?.get("fallback_lore")
          ?.lines()
          ?.filter { it.isNotEmpty() }
          ?.takeIf { it.isNotEmpty() }
          ?.let { yaml.set("$base.fallback_lore", it) }

      def?.actions
          ?.takeIf { it.isNotEmpty() }
          ?.let { yaml.set("$base.actions", it.mapNotNull { action -> popupActionMap(action) }) }
      def?.extras?.get("fallback_actions")?.let { raw ->
        val actions = deserializeActions(raw).mapNotNull { popupActionMap(it) }
        if (actions.isNotEmpty()) yaml.set("$base.fallback_actions", actions)
      }
    }
    yaml.save(file)
  }

  private fun parseYamlIntoSession(plugin: OyasaiMenu, file: File, session: GuiEditorSession) {
    val yaml = YamlConfiguration.loadConfiguration(file)
    session.menuTitle = yaml.getString("menu.title", "&8${session.menuId}") ?: "&8${session.menuId}"
    session.menuSize = (((yaml.getInt("menu.size", 54) + 8) / 9) * 9).coerceIn(9, 54)
    session.slots.clear()

    val tempInv = Bukkit.createInventory(null, session.menuSize)
    yaml.getConfigurationSection("items")?.getKeys(false)?.forEach { key ->
      val sec = yaml.getConfigurationSection("items.$key") ?: return@forEach
      val slot = sec.getInt("slot", 0).takeIf { it < session.menuSize } ?: return@forEach
      val mat =
          sec.getString("icon", "STONE")?.uppercase()?.let {
            runCatching { Material.valueOf(it) }.getOrElse { Material.STONE }
          } ?: Material.STONE
      if (mat == Material.AIR) return@forEach

      @Suppress("UNCHECKED_CAST")
      val actions =
          (sec.getList("actions") ?: emptyList<Any>())
              .filterIsInstance<Map<String, Any>>()
              .map { map ->
                GuiActionDef(
                    type = map["type"]?.toString() ?: "UNKNOWN",
                    params = map.filterKeys { it != "type" }.mapValues { it.value.toString() })
              }
              .toMutableList()

      val def =
          GuiSlotDef(
              name = sec.getString("name", "") ?: "",
              lore = sec.getStringList("lore").toMutableList(),
              permission = sec.getString("permission"),
              enchanted = sec.getBoolean("enchanted", false),
              actions = actions)
      session.slots[slot] = def

      // PDC をアイテムに付与してアイテム本位で追従するようにする
      val item = ItemStack(mat)
      val meta = item.itemMeta
      if (meta != null) {
        if (def.name.isNotEmpty())
            meta.displayName(
                LegacyComponentSerializer.legacyAmpersand()
                    .deserialize(def.name)
                    .decoration(net.kyori.adventure.text.format.TextDecoration.ITALIC, false))
        if (def.lore.isNotEmpty())
            meta.lore(
                def.lore.map {
                  LegacyComponentSerializer.legacyAmpersand()
                      .deserialize(it)
                      .decoration(net.kyori.adventure.text.format.TextDecoration.ITALIC, false)
                })
        ItemVisuals.applyEnchantVisual(meta, def.enchanted)
        val pdc = meta.persistentDataContainer
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_name"),
            org.bukkit.persistence.PersistentDataType.STRING,
            def.name)
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_lore"),
            org.bukkit.persistence.PersistentDataType.STRING,
            def.lore.joinToString("\n"))
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_perm"),
            org.bukkit.persistence.PersistentDataType.STRING,
            def.permission ?: "")
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_enchanted"),
            org.bukkit.persistence.PersistentDataType.STRING,
            if (def.enchanted) "1" else "")
        val actStr =
            def.actions.joinToString("\n") { a ->
              a.type +
                  if (a.params.isEmpty()) ""
                  else
                      " " +
                          a.params.entries.joinToString(" ") { (k, v) ->
                            "$k=${v.replace(" ","\\s")}"
                          }
            }
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_actions"),
            org.bukkit.persistence.PersistentDataType.STRING,
            actStr)
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_extra"),
            org.bukkit.persistence.PersistentDataType.STRING,
            serializeExtras(def.extras))
        item.itemMeta = meta
      }
      tempInv.setItem(slot, item)
    }
    session.canvasInventory = tempInv
  }

  private fun parsePopupYamlIntoSession(plugin: OyasaiMenu, file: File, session: GuiEditorSession) {
    val yaml = YamlConfiguration.loadConfiguration(file)
    session.surface = GuiEditableSurface.POPUP
    session.menuTitle = yaml.getString("title", "&8${session.menuId}") ?: "&8${session.menuId}"
    session.menuSize = 54
    session.popupMeta =
        PopupEditorMeta(
            glass = yaml.getString("glass", "GRAY_STAINED_GLASS_PANE") ?: "GRAY_STAINED_GLASS_PANE",
            navActive = yaml.getInt("nav_active", -1))
    session.slots.clear()

    val tempInv = Bukkit.createInventory(null, 54)
    yaml.getConfigurationSection("items")?.getKeys(false)?.forEach { key ->
      val sec = yaml.getConfigurationSection("items.$key") ?: return@forEach
      val slot = sec.getInt("slot", 0).takeIf { it in 0..44 } ?: return@forEach
      val iconName = sec.getString("icon", "STONE")?.uppercase() ?: "STONE"
      val texture = sec.getString("texture")
      val mat =
          when {
            iconName == "CUSTOM_HEAD" -> Material.PLAYER_HEAD
            iconName == "AIR" -> Material.AIR
            else -> runCatching { Material.valueOf(iconName) }.getOrElse { Material.STONE }
          }
      if (mat == Material.AIR) return@forEach

      val def =
          GuiSlotDef(
              name = sec.getString("name", "") ?: "",
              lore = sec.getStringList("lore").toMutableList(),
              permission = sec.getString("required_permission"),
              enchanted = sec.getBoolean("enchanted", false),
              actions = parsePopupActions(sec.getList("actions")).toMutableList())
      def.extras["popup.key"] = key
      texture?.let { def.extras["texture"] = it }
      if (sec.getBoolean("op_only", false)) def.extras["op_only"] = "true"
      listOf("fallback_icon", "fallback_texture", "fallback_name").forEach { field ->
        sec.getString(field)?.let { def.extras[field] = it }
      }
      val fallbackLore = sec.getStringList("fallback_lore")
      if (fallbackLore.isNotEmpty()) def.extras["fallback_lore"] = fallbackLore.joinToString("\n")
      val fallbackActions = parsePopupActions(sec.getList("fallback_actions"))
      if (fallbackActions.isNotEmpty())
          def.extras["fallback_actions"] = serializeActions(fallbackActions)

      session.slots[slot] = def
      val item = ItemStack(mat)
      val meta = item.itemMeta
      if (meta != null) {
        if (def.name.isNotEmpty())
            meta.displayName(
                LegacyComponentSerializer.legacyAmpersand()
                    .deserialize(def.name)
                    .decoration(net.kyori.adventure.text.format.TextDecoration.ITALIC, false))
        if (def.lore.isNotEmpty())
            meta.lore(
                def.lore.map {
                  LegacyComponentSerializer.legacyAmpersand()
                      .deserialize(it)
                      .decoration(net.kyori.adventure.text.format.TextDecoration.ITALIC, false)
                })
        ItemVisuals.applyEnchantVisual(meta, def.enchanted)
        val pdc = meta.persistentDataContainer
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_name"),
            org.bukkit.persistence.PersistentDataType.STRING,
            def.name)
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_lore"),
            org.bukkit.persistence.PersistentDataType.STRING,
            def.lore.joinToString("\n"))
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_perm"),
            org.bukkit.persistence.PersistentDataType.STRING,
            def.permission ?: "")
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_enchanted"),
            org.bukkit.persistence.PersistentDataType.STRING,
            if (def.enchanted) "1" else "")
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_actions"),
            org.bukkit.persistence.PersistentDataType.STRING,
            serializeActions(def.actions))
        pdc.set(
            org.bukkit.NamespacedKey(plugin, "gm_extra"),
            org.bukkit.persistence.PersistentDataType.STRING,
            serializeExtras(def.extras))
        item.itemMeta = meta
      }
      tempInv.setItem(slot, item)
    }
    session.canvasInventory = tempInv
  }

  private fun rawMaterial(item: ItemStack): Material? = item.type.takeIf { it != Material.AIR }

  private fun popupMaterialName(material: Material, texture: String?): String =
      if (material == Material.PLAYER_HEAD && !texture.isNullOrBlank()) "CUSTOM_HEAD"
      else material.name

  private fun writeOptionalPopupString(
      yaml: YamlConfiguration,
      base: String,
      def: GuiSlotDef?,
      field: String
  ) {
    def?.extras?.get(field)?.takeIf { it.isNotBlank() }?.let { yaml.set("$base.$field", it) }
  }

  private fun uniquePopupKey(preferred: String?, slot: Int, usedKeys: MutableSet<String>): String {
    val base =
        preferred?.takeIf { it.matches(Regex("[a-zA-Z0-9_.-]+")) }?.ifBlank { null } ?: "item_$slot"
    if (usedKeys.add(base)) return base
    var i = 2
    while (!usedKeys.add("${base}_$i")) i++
    return "${base}_$i"
  }

  @Suppress("UNCHECKED_CAST")
  private fun parsePopupActions(raw: List<*>?): List<GuiActionDef> =
      (raw ?: emptyList<Any>()).filterIsInstance<Map<String, Any>>().mapNotNull { map ->
        when {
          map.containsKey("player_cmd") ->
              GuiActionDef("PLAYER_CMD", mapOf("command" to map["player_cmd"].toString()))
          map.containsKey("console_cmd") ->
              GuiActionDef("CONSOLE_CMD", mapOf("command" to map["console_cmd"].toString()))
          map.containsKey("op_player_cmd") ->
              GuiActionDef("OP_PLAYER_CMD", mapOf("command" to map["op_player_cmd"].toString()))
          map.containsKey("url") -> GuiActionDef("URL", mapOf("url" to map["url"].toString()))
          map.containsKey("chat_paste") ->
              GuiActionDef("CHAT_PASTE", mapOf("text" to map["chat_paste"].toString()))
          map.containsKey("suggest_command") ->
              GuiActionDef("SUGGEST_COMMAND", mapOf("command" to map["suggest_command"].toString()))
          map.containsKey("open_popup") ->
              GuiActionDef("OPEN_POPUP", mapOf("target" to map["open_popup"].toString()))
          map.containsKey("open_special") ->
              GuiActionDef("OPEN_SPECIAL", mapOf("target" to map["open_special"].toString()))
          map.containsKey("open_shop") ->
              GuiActionDef("OPEN_SHOP", mapOf("category" to map["open_shop"].toString()))
          map.containsKey("open_sell") -> GuiActionDef("OPEN_SELL")
          map.containsKey("open_macro") -> GuiActionDef("OPEN_MACRO")
          map.containsKey("open_point_shop") ->
              GuiActionDef(
                  "OPEN_POINT_SHOP", mapOf("category" to map["open_point_shop"].toString()))
          map.containsKey("open_menu") ->
              GuiActionDef("OPEN_MENU", mapOf("target" to map["open_menu"].toString()))
          map.containsKey("close") -> GuiActionDef("CLOSE")
          else -> null
        }
      }

  private fun popupActionMap(action: GuiActionDef): Map<String, Any>? =
      when (runCatching { PopupActionType.valueOf(action.type) }.getOrNull()) {
        PopupActionType.PLAYER_CMD -> mapOf("player_cmd" to action.popupCommandValue())
        PopupActionType.CONSOLE_CMD -> mapOf("console_cmd" to action.popupCommandValue())
        PopupActionType.OP_PLAYER_CMD -> mapOf("op_player_cmd" to action.popupCommandValue())
        PopupActionType.URL ->
            mapOf("url" to (action.params["url"] ?: action.params["value"] ?: ""))
        PopupActionType.CHAT_PASTE ->
            mapOf("chat_paste" to (action.params["text"] ?: action.params["value"] ?: ""))
        PopupActionType.SUGGEST_COMMAND -> mapOf("suggest_command" to action.popupCommandValue())
        PopupActionType.OPEN_POPUP -> mapOf("open_popup" to action.popupTargetValue())
        PopupActionType.OPEN_SPECIAL -> mapOf("open_special" to action.popupTargetValue())
        PopupActionType.OPEN_SHOP ->
            mapOf("open_shop" to (action.params["category"] ?: action.popupTargetValue()))
        PopupActionType.OPEN_SELL -> mapOf("open_sell" to true)
        PopupActionType.OPEN_MACRO -> mapOf("open_macro" to true)
        PopupActionType.OPEN_POINT_SHOP ->
            mapOf("open_point_shop" to (action.params["category"] ?: action.popupTargetValue()))
        PopupActionType.OPEN_MENU -> mapOf("open_menu" to action.popupTargetValue())
        PopupActionType.CLOSE -> mapOf("close" to true)
        null -> null
      }

  private fun GuiActionDef.popupCommandValue(): String =
      params["command"] ?: params["value"] ?: params["text"] ?: ""

  private fun GuiActionDef.popupTargetValue(): String =
      params["target"] ?: params["value"] ?: params["category"] ?: ""

  private fun serializeActions(actions: List<GuiActionDef>): String =
      actions.joinToString("\n") { a ->
        a.type +
            if (a.params.isEmpty()) ""
            else
                " " +
                    a.params.entries.joinToString(" ") { (key, value) ->
                      "$key=${value.replace(" ", "\\s").replace("\n", "\\n")}"
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

  private fun isEditableLiveMenuFile(liveDir: File, file: File): Boolean {
    if (!file.isFile || !file.extension.equals("yml", ignoreCase = true)) return false
    if (file.name.lowercase() in blockedLiveFileNames) return false
    val relative = file.toRelativeString(liveDir)
    return !relative.startsWith("popup${File.separator}") && !relative.startsWith("popup/")
  }

  private fun String.removeYamlSuffix(): String =
      removeSuffix(".yml").removeSuffix(".YML").removeSuffix(".yaml").removeSuffix(".YAML")
}
