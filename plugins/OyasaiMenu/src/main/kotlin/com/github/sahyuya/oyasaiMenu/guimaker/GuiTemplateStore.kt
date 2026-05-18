package com.github.sahyuya.oyasaiMenu.guimaker

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.ItemVisuals
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

enum class GuiTemplateKind(val dirName: String, val displayName: String) {
  MENU("menus", "GUI"),
  BLOCK("blocks", "ブロック");

  companion object {
    fun parse(raw: String?): GuiTemplateKind? =
        entries.firstOrNull {
          it.name.equals(raw, ignoreCase = true) || it.dirName.equals(raw, ignoreCase = true)
        }
  }
}

enum class GuiTemplateScope(val displayName: String) {
  PERSONAL("個人"),
  SHARED("公式")
}

data class GuiTemplateEntry(
    val id: String,
    val kind: GuiTemplateKind,
    val scope: GuiTemplateScope,
    val file: File
)

data class GuiBlockTemplate(val material: Material, val def: GuiSlotDef)

object GuiTemplateStore {
  private val idPattern = Regex("[a-zA-Z0-9_.-]+(?:/[a-zA-Z0-9_.-]+)*")

  fun saveMenuTemplate(
      plugin: OyasaiMenu,
      player: Player,
      session: GuiEditorSession
  ): Result<String> = runCatching {
    val id = sanitizeId(session.menuId)
    val file = personalFile(plugin, player.uniqueId, GuiTemplateKind.MENU, id)
    GuiMakerExporter.saveSessionToFile(plugin, session, file)
  }

  fun saveBlockTemplate(
      plugin: OyasaiMenu,
      player: Player,
      session: GuiEditorSession,
      slot: Int
  ): Result<String> = runCatching {
    val inv = session.canvasInventory ?: error("編集キャンバスがありません。")
    val item = inv.getItem(slot)?.takeIf { it.type != Material.AIR } ?: error("スロット $slot は空です。")
    val id = sanitizeId("${session.menuId}/slot_$slot")
    val file = personalFile(plugin, player.uniqueId, GuiTemplateKind.BLOCK, id)
    saveBlockTemplateToFile(plugin, file, session, slot, item)
  }

  fun approvePersonalTemplate(
      plugin: OyasaiMenu,
      owner: UUID,
      kind: GuiTemplateKind,
      sourceId: String,
      officialId: String
  ): Result<String> = runCatching {
    val safeSourceId = sanitizeId(sourceId)
    val safeOfficialId = sanitizeId(officialId)
    val source = personalFile(plugin, owner, kind, safeSourceId)
    require(source.exists()) { "個人テンプレートが見つかりません: ${kind.displayName} $safeSourceId" }
    val destination = sharedFile(plugin, kind, safeOfficialId)
    destination.parentFile.mkdirs()
    Files.copy(source.toPath(), destination.toPath(), StandardCopyOption.REPLACE_EXISTING)
    destination.relativeTo(plugin.dataFolder.parentFile).path
  }

  fun saveEditedTemplate(
      plugin: OyasaiMenu,
      session: GuiEditorSession,
      entry: GuiTemplateEntry,
      blockSlot: Int?
  ): Result<String> = runCatching {
    when (entry.kind) {
      GuiTemplateKind.MENU -> GuiMakerExporter.saveSessionToFile(plugin, session, entry.file)
      GuiTemplateKind.BLOCK -> {
        val inv = session.canvasInventory ?: error("編集キャンバスがありません。")
        val slot =
            blockSlot?.takeIf { it in 0 until inv.size }
                ?: (0 until inv.size).firstOrNull {
                  inv.getItem(it)?.takeIf { item -> item.type != Material.AIR } != null
                }
                ?: error("保存できるブロックがありません。")
        val item =
            inv.getItem(slot)?.takeIf { it.type != Material.AIR } ?: error("スロット $slot は空です。")
        saveBlockTemplateToFile(plugin, entry.file, session, slot, item)
      }
    }
  }

  fun deleteTemplate(plugin: OyasaiMenu, entry: GuiTemplateEntry): Result<String> = runCatching {
    require(entry.file.exists()) { "テンプレートが見つかりません: ${entry.id}" }
    val path = entry.file.relativeTo(plugin.dataFolder.parentFile).path
    require(entry.file.delete()) { "テンプレートを削除できませんでした: ${entry.id}" }
    path
  }

  fun ensureSharedBlockTemplate(
      plugin: OyasaiMenu,
      id: String,
      material: Material,
      def: GuiSlotDef
  ): Result<String> = runCatching {
    val safeId = sanitizeId(id)
    val file = sharedFile(plugin, GuiTemplateKind.BLOCK, safeId)
    if (file.exists()) return@runCatching file.relativeTo(plugin.dataFolder.parentFile).path
    val session = GuiEditorSession("official/$safeId", "&8公式ブロック", 54)
    val inv = Bukkit.createInventory(null, 54)
    inv.setItem(0, buildBlockItem(material, def))
    session.canvasInventory = inv
    session.slots[0] =
        def.copy(
            lore = def.lore.toMutableList(),
            actions = def.actions.toMutableList(),
            extras = def.extras.toMutableMap())
    saveBlockTemplateToFile(plugin, file, session, 0, inv.getItem(0) ?: ItemStack(material))
  }

  fun listTemplates(plugin: OyasaiMenu, player: Player): List<GuiTemplateEntry> =
      listOf(
              listEntries(
                  personalDir(plugin, player.uniqueId, GuiTemplateKind.MENU),
                  GuiTemplateKind.MENU,
                  GuiTemplateScope.PERSONAL),
              listEntries(
                  personalDir(plugin, player.uniqueId, GuiTemplateKind.BLOCK),
                  GuiTemplateKind.BLOCK,
                  GuiTemplateScope.PERSONAL),
              listEntries(
                  sharedDir(plugin, GuiTemplateKind.MENU),
                  GuiTemplateKind.MENU,
                  GuiTemplateScope.SHARED),
              listEntries(
                  sharedDir(plugin, GuiTemplateKind.BLOCK),
                  GuiTemplateKind.BLOCK,
                  GuiTemplateScope.SHARED))
          .flatten()
          .sortedWith(
              compareBy<GuiTemplateEntry> { it.scope.ordinal }
                  .thenBy { it.kind.ordinal }
                  .thenBy { it.id })

  fun loadBlockTemplate(file: File): GuiBlockTemplate {
    val yaml = YamlConfiguration.loadConfiguration(file)
    val section = yaml.getConfigurationSection("item") ?: error("item セクションがありません。")
    val material =
        section.getString("icon", "STONE")?.uppercase()?.let {
          runCatching { Material.valueOf(it) }.getOrDefault(Material.STONE)
        } ?: Material.STONE
    val def =
        GuiSlotDef(
            name = section.getString("name", "") ?: "",
            lore = section.getStringList("lore").toMutableList(),
            permission = section.getString("permission"),
            enchanted = section.getBoolean("enchanted", false),
            actions = parseActions(section).toMutableList())
    return GuiBlockTemplate(material, def)
  }

  private fun writeBlockTemplate(
      file: File,
      session: GuiEditorSession,
      slot: Int,
      item: ItemStack
  ) {
    file.parentFile.mkdirs()
    val yaml = YamlConfiguration()
    val def = session.slots[slot]
    yaml.set("template.kind", "block")
    yaml.set("template.source-menu", session.menuId)
    yaml.set("template.source-slot", slot)
    yaml.set("item.icon", item.type.name)

    val name =
        def?.name?.takeIf { it.isNotEmpty() }
            ?: item.itemMeta
                ?.takeIf { it.hasDisplayName() }
                ?.displayName()
                ?.let { LegacyComponentSerializer.legacyAmpersand().serialize(it) }
            ?: ""
    if (name.isNotEmpty()) yaml.set("item.name", name)

    val lore =
        when {
          def != null && def.lore.isNotEmpty() -> def.lore
          item.itemMeta?.hasLore() == true ->
              item.itemMeta?.lore()?.map {
                LegacyComponentSerializer.legacyAmpersand().serialize(it)
              } ?: emptyList()
          else -> emptyList()
        }
    if (lore.isNotEmpty()) yaml.set("item.lore", lore)
    def?.permission?.let { yaml.set("item.permission", it) }
    if (def?.enchanted == true) yaml.set("item.enchanted", true)
    if (def != null && def.actions.isNotEmpty()) {
      yaml.set(
          "item.actions",
          def.actions.map { action ->
            val map = mutableMapOf<String, Any>("type" to action.type)
            map.putAll(action.params)
            map
          })
    }
    yaml.save(file)
  }

  private fun saveBlockTemplateToFile(
      plugin: OyasaiMenu,
      file: File,
      session: GuiEditorSession,
      slot: Int,
      item: ItemStack
  ): String {
    writeBlockTemplate(file, session, slot, item)
    return file.relativeTo(plugin.dataFolder.parentFile).path
  }

  fun buildBlockItem(material: Material, def: GuiSlotDef): ItemStack {
    val item = ItemStack(material)
    val meta = item.itemMeta ?: return item
    if (def.name.isNotEmpty()) {
      meta.displayName(
          LegacyComponentSerializer.legacyAmpersand()
              .deserialize(def.name)
              .decoration(TextDecoration.ITALIC, false))
    }
    if (def.lore.isNotEmpty()) {
      meta.lore(
          def.lore.map {
            LegacyComponentSerializer.legacyAmpersand()
                .deserialize(it)
                .decoration(TextDecoration.ITALIC, false)
          })
    }
    ItemVisuals.applyEnchantVisual(meta, def.enchanted)
    item.itemMeta = meta
    return item
  }

  private fun parseActions(section: ConfigurationSection): List<GuiActionDef> =
      (section.getList("actions") ?: emptyList<Any>()).filterIsInstance<Map<String, Any>>().map {
          map ->
        GuiActionDef(
            type = map["type"]?.toString() ?: "UNKNOWN",
            params = map.filterKeys { it != "type" }.mapValues { it.value.toString() })
      }

  private fun listEntries(
      dir: File,
      kind: GuiTemplateKind,
      scope: GuiTemplateScope
  ): List<GuiTemplateEntry> {
    if (!dir.exists()) return emptyList()
    return dir.walkTopDown()
        .filter { it.isFile && it.extension == "yml" }
        .map { file ->
          GuiTemplateEntry(file.toRelativeString(dir).removeSuffix(".yml"), kind, scope, file)
        }
        .toList()
  }

  private fun personalFile(
      plugin: OyasaiMenu,
      owner: UUID,
      kind: GuiTemplateKind,
      id: String
  ): File = personalDir(plugin, owner, kind).resolve("$id.yml")

  private fun sharedFile(plugin: OyasaiMenu, kind: GuiTemplateKind, id: String): File =
      sharedDir(plugin, kind).resolve("$id.yml")

  private fun personalDir(plugin: OyasaiMenu, owner: UUID, kind: GuiTemplateKind): File =
      plugin.dataFolder.resolve("guimaker-templates/players/$owner/${kind.dirName}")

  private fun sharedDir(plugin: OyasaiMenu, kind: GuiTemplateKind): File =
      plugin.dataFolder.resolve("guimaker-templates/shared/${kind.dirName}")

  fun sanitizeId(id: String): String {
    val value = id.trim().replace('\\', '/').trim('/')
    require(value.matches(idPattern) && value.split('/').none { it == "." || it == ".." }) {
      "テンプレートIDには英数字・_・-・. と階層用の / のみ使用できます。"
    }
    return value
  }
}
