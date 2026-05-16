package icu.oyasai.citiesskymine.guimaker

import icu.oyasai.citiesskymine.Main
import java.io.File
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack

object GuiMakerExporter {

  private fun draftFile(plugin: Main, menuId: String): File =
      File(plugin.dataFolder, "guimaker/$menuId.yml").also { it.parentFile.mkdirs() }

  private fun liveFile(plugin: Main, menuId: String): File =
      File(plugin.dataFolder.parentFile, "OyasaiMenu/menus/$menuId.yml")

  // ── 公開 API ──────────────────────────────────────────────

  fun exportDraft(plugin: Main, session: GuiEditorSession) {
    runCatching { writeYaml(draftFile(plugin, session.menuId), session) }
        .onFailure { plugin.logger.warning("[GuiMaker] ドラフト保存失敗: ${it.message}") }
  }

  fun hasDraft(plugin: Main, menuId: String): Boolean = draftFile(plugin, menuId).exists()

  fun commit(plugin: Main, session: GuiEditorSession): Result<String> = runCatching {
    liveFile(plugin, session.menuId).parentFile.mkdirs()
    writeYaml(liveFile(plugin, session.menuId), session)
    "OyasaiMenu/menus/${session.menuId}.yml"
  }

  fun revertDraft(plugin: Main, session: GuiEditorSession) {
    draftFile(plugin, session.menuId).delete()
  }

  fun loadIntoSession(plugin: Main, session: GuiEditorSession): Boolean {
    val draft = draftFile(plugin, session.menuId)
    val live = liveFile(plugin, session.menuId)
    val file =
        when {
          draft.exists() -> draft
          live.exists() -> live
          else -> return false
        }
    parseYamlIntoSession(plugin, file, session)
    return true
  }

  fun listMenuIds(plugin: Main): List<String> {
    val ids = mutableSetOf<String>()
    val draftDir = File(plugin.dataFolder, "guimaker")
    if (draftDir.exists()) {
      draftDir
          .walkTopDown()
          .filter { it.isFile && it.extension == "yml" }
          .forEach { ids.add(it.toRelativeString(draftDir).removeSuffix(".yml")) }
    }
    val liveDir = File(plugin.dataFolder.parentFile, "OyasaiMenu/menus")
    if (liveDir.exists()) {
      liveDir
          .walkTopDown()
          .filter { it.isFile && it.extension == "yml" }
          .forEach { ids.add(it.toRelativeString(liveDir).removeSuffix(".yml")) }
    }
    return ids.sorted()
  }

  // ── 内部処理 ──────────────────────────────────────────────

  private fun writeYaml(file: File, session: GuiEditorSession) {
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

  private fun parseYamlIntoSession(plugin: Main, file: File, session: GuiEditorSession) {
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
        item.itemMeta = meta
      }
      tempInv.setItem(slot, item)
    }
    session.canvasInventory = tempInv
  }

  private fun rawMaterial(item: ItemStack): Material? = item.type.takeIf { it != Material.AIR }
}
