package icu.oyasai.games.bedwars

import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.util.Locale
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.PotionMeta
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.potion.PotionEffect
import org.bukkit.potion.PotionType

data class BedWarsPrice(val resource: String, val amount: Int)

data class BedWarsShopEntry(
    val stack: Map<String, Any?>,
    val price: BedWarsPrice? = null,
    val properties: List<Map<String, Any?>> = emptyList(),
    val target: String? = null,
    val slot: Int? = null,
    val skip: Int = 0,
) {
  val property: String
    get() = properties.firstOrNull()?.get("name")?.toString()?.lowercase(Locale.ROOT) ?: ""
}

class BedWarsShopCatalog(val pages: Map<String, List<BedWarsShopEntry>>) {
  companion object {
    fun price(text: String): BedWarsPrice? {
      val match =
          Regex("([1-9][0-9]*) of (iron|gold|diamond|emerald)", RegexOption.IGNORE_CASE)
              .matchEntire(text.trim()) ?: return null
      return BedWarsPrice(
          match.groupValues[2].lowercase(Locale.ROOT),
          match.groupValues[1].toIntOrNull() ?: return null,
      )
    }

    fun stack(value: Any?): Map<String, Any?> {
      if (value is Map<*, *>) return value.entries.associate { it.key.toString() to it.value }
      val parts = value.toString().split(';')
      return mapOf(
          "type" to parts[0],
          "amount" to (parts.getOrNull(1)?.toIntOrNull() ?: 1),
          "display-name" to parts.getOrNull(2),
          "lore" to parts.drop(3),
      )
    }

    fun load(file: File, warn: (String) -> Unit): BedWarsShopCatalog {
      val yaml = YamlConfiguration.loadConfiguration(file)
      val pages = linkedMapOf<String, MutableList<BedWarsShopEntry>>()
      fun parse(values: List<*>, page: String) {
        val entries = pages.getOrPut(page) { mutableListOf() }
        values.forEach { value ->
          try {
            val data =
                if (value is String) {
                  val split = value.split(" for ", limit = 2)
                  mapOf("stack" to split[0], "price" to split.getOrNull(1))
                } else value as? Map<*, *> ?: error("entry must be a map or string")
            val nested = data["items"] as? List<*>
            val id = data["id"]?.toString()
            if (nested != null && id != null) {
              parse(nested, id)
              return@forEach
            }
            val rawProperties = data["properties"]
            val properties =
                when (rawProperties) {
                  is String -> listOf(mapOf("name" to rawProperties))
                  is Map<*, *> ->
                      listOf(rawProperties.entries.associate { it.key.toString() to it.value })
                  is List<*> ->
                      rawProperties.map {
                        (it as Map<*, *>).entries.associate { entry ->
                          entry.key.toString() to entry.value
                        }
                      }
                  else -> emptyList()
                }
            val parsedPrice = data["price"]?.let { price(it.toString()) ?: error("invalid price") }
            val definition = stack(data["stack"] ?: error("missing stack")).toMutableMap()
            data["lore"]?.let { definition["lore"] = it }
            require(Material.matchMaterial(definition["type"].toString()) != null) {
              "unknown material"
            }
            require(((definition["amount"] as? Number)?.toInt() ?: 1) in 1..64) {
              "invalid item amount"
            }
            definition.keys
                .filter {
                  it !in
                      setOf(
                          "type",
                          "amount",
                          "display-name",
                          "lore",
                          "enchants",
                          "effects",
                          "potion-type",
                      )
                }
                .forEach { warn("${file.name}: unsupported stack key $it") }
            val entry =
                BedWarsShopEntry(
                    definition,
                    parsedPrice,
                    properties,
                    data["locate"]?.toString()?.removePrefix("$"),
                    if (data["row"] != null || data["column"] != null) {
                      val row = (data["row"] as? Number)?.toInt() ?: 1
                      val column = (data["column"] as? Number)?.toInt() ?: 0
                      require(row in 1..6 && column in 0..8) { "invalid row or column" }
                      (row - 1) * 9 + column
                    } else null,
                    ((data["skip"] as? Number)?.toInt() ?: 0).coerceIn(0, 53),
                )
            entries.add(entry)
            if (nested != null) {
              val child = "${page}_${entries.size}"
              entries[entries.lastIndex] = entry.copy(target = child)
              parse(nested, child)
            }
            data.keys
                .filter {
                  it !in
                      setOf(
                          "stack",
                          "price",
                          "properties",
                          "locate",
                          "row",
                          "column",
                          "skip",
                          "write",
                          "id",
                          "items",
                          "lore",
                      )
                }
                .forEach { warn("${file.name}: unsupported shop key $it") }
          } catch (error: Exception) {
            warn("${file.name}: invalid shop entry: ${error.message}")
          }
        }
      }
      parse(yaml.getList("data") ?: emptyList<Any>(), "main")
      return BedWarsShopCatalog(pages)
    }
  }
}

class BedWarsShop(
    private val plugin: JavaPlugin,
    private val specials: BedWarsSpecials,
    private val quickbuyFolder: File = File(plugin.dataFolder, "bedwars/quickbuy"),
) : Listener {
  private class View(
      val shop: BedWarsShop,
      val catalog: BedWarsShopCatalog,
      val page: String,
      val color: String,
      val canUse: () -> Boolean,
      val upgrade: (Player, BedWarsShopEntry) -> Boolean,
      val purchased: (Player, ItemStack) -> Unit,
      val upgrades: Boolean,
      val quote: (Player, BedWarsShopEntry) -> BedWarsPrice?,
      val replaceSword: Boolean,
  ) : InventoryHolder {
    lateinit var menu: Inventory
    val entries = mutableMapOf<Int, BedWarsShopEntry>()
    val quickbuySlots = mutableMapOf<Int, String>()
    var selecting: String? = null

    override fun getInventory(): Inventory = menu
  }

  fun open(
      player: Player,
      catalog: BedWarsShopCatalog,
      color: String,
      canUse: () -> Boolean,
      upgrade: (Player, BedWarsShopEntry) -> Boolean = { _, _ -> false },
      purchased: (Player, ItemStack) -> Unit = { _, _ -> },
      upgrades: Boolean = false,
      page: String = "main",
      quote: (Player, BedWarsShopEntry) -> BedWarsPrice? = { _, entry -> entry.price },
      replaceSword: Boolean = true,
      selecting: String? = null,
  ) {
    val view =
        View(this, catalog, page, color, canUse, upgrade, purchased, upgrades, quote, replaceSword)
            .also { it.selecting = selecting }
    view.menu = Bukkit.createInventory(view, 54, if (upgrades) "Team upgrades" else "Item shop")
    var next = 0
    val saved = if (!upgrades && selecting == null) loadQuickbuy(player) else null
    catalog.pages[page].orEmpty().take(53).forEach { original ->
      val id =
          if (original.property == "quickbuy")
              original.properties.firstOrNull()?.get("id")?.toString()
          else null
      val entry =
          id?.let { resolveQuickbuy(catalog, saved, it)?.copy(slot = original.slot) } ?: original
      while (view.entries.containsKey(next)) next++
      val slot = entry.slot ?: next
      if (slot > 53) return@forEach
      val item = item(entry, color)
      quote(player, entry)?.let { cost ->
        item.editMeta { meta ->
          meta.lore = (meta.lore ?: emptyList()) + "${cost.amount} ${cost.resource}"
        }
      }
      view.entries[slot] = entry
      if (id != null) view.quickbuySlots[slot] = id
      view.menu.setItem(slot, item)
      next = slot + 1 + original.skip
    }
    view.menu.setItem(
        53,
        ItemStack(Material.ARROW).also { it.editMeta { meta -> meta.setDisplayName("戻る") } },
    )
    player.openInventory(view.menu)
  }

  @EventHandler
  fun drag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is View) event.isCancelled = true
  }

  @EventHandler
  fun click(event: InventoryClickEvent) {
    try {
      handleClick(event)
    } catch (error: Exception) {
      plugin.logger.warning("BedWars shop failed before purchase: ${error.javaClass.simpleName}")
      if ((event.view.topInventory.holder as? View)?.shop === this)
          event.whoClicked.closeInventory()
    }
  }

  private fun handleClick(event: InventoryClickEvent) {
    val view = event.view.topInventory.holder as? View ?: return
    if (view.shop !== this) return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (!view.canUse()) {
      player.closeInventory()
      return
    }
    fun navigate(page: String, selecting: String? = view.selecting) =
        open(
            player,
            view.catalog,
            view.color,
            view.canUse,
            view.upgrade,
            view.purchased,
            view.upgrades,
            page,
            view.quote,
            view.replaceSword,
            selecting,
        )
    if (event.rawSlot == 53) {
      navigate("main", null)
      return
    }
    val entry = view.entries[event.rawSlot] ?: return
    val quickbuyId = view.quickbuySlots[event.rawSlot]
    if (quickbuyId != null && event.isRightClick) {
      navigate("main", quickbuyId)
      player.sendMessage("登録する商品のカテゴリを開き、商品をクリックしてください。")
      return
    }
    entry.target?.let { target ->
      navigate(target)
      return
    }
    if (entry.property == "quickbuy") return
    view.selecting?.let { id ->
      if (entry.price != null) {
        try {
          saveQuickbuy(player, id, entry)
          navigate("main", null)
        } catch (error: Exception) {
          plugin.logger.warning("BedWars quickbuy save failed: ${error.javaClass.simpleName}")
          player.sendMessage("登録に失敗しました。")
        }
      }
      return
    }
    val price = view.quote(player, entry) ?: return
    require(price.amount > 0) { "Invalid quote" }
    if (
        !view.upgrades &&
            isDowngrade(
                entry.stack["type"].toString(),
                player.inventory.contents.filterNotNull().map { it.type.name },
            )
    ) {
      player.sendMessage("現在の装備より低い段階の商品は購入できません。")
      return
    }
    val currency = resource(price.resource)
    val inventory = player.inventory
    val before = inventory.contents.map { it?.clone() }.toTypedArray()
    val storage = inventory.storageContents
    val debits = debitPlan(storage.map { if (it?.type == currency) it.amount else 0 }, price.amount)
    if (debits == null) {
      player.sendMessage("資源が足りません。")
      return
    }
    try {
      storage.forEachIndexed { index, item ->
        if (item != null && item.type == currency)
            inventory.setItem(
                index,
                if (debits[index] == 0) null else item.clone().also { it.amount = debits[index] },
            )
      }
      if (view.upgrades) {
        if (!view.upgrade(player, entry)) {
          inventory.contents = before
          player.sendMessage("この強化は購入できません。")
          return
        }
      } else {
        val item = item(entry, view.color)
        if (item.type.name.endsWith("_BOOTS")) {
          val leggings = Material.matchMaterial(item.type.name.replace("_BOOTS", "_LEGGINGS"))
          inventory.setBoots(item.clone())
          if (leggings != null) inventory.setLeggings(ItemStack(leggings))
        } else {
          if (view.replaceSword && item.type.name.endsWith("_SWORD")) {
            inventory.storageContents.forEachIndexed { index, old ->
              if (old?.type?.name?.endsWith("_SWORD") == true) inventory.setItem(index, null)
            }
          }
          if (inventory.addItem(item).isNotEmpty()) {
            inventory.contents = before
            player.sendMessage("持ち物に空きがありません。")
            return
          }
        }
        view.purchased(player, item)
      }
    } catch (error: Exception) {
      inventory.contents = before
      plugin.logger.warning("BedWars purchase rolled back: ${error.javaClass.simpleName}")
      player.sendMessage("購入に失敗しました。資源を戻しました。")
    }
  }

  fun item(entry: BedWarsShopEntry, color: String): ItemStack {
    var material = Material.matchMaterial(entry.stack["type"].toString()) ?: Material.BARRIER
    if (entry.property == "applycolorbyteam" && material == Material.WHITE_WOOL)
        material = Material.matchMaterial("${color.uppercase(Locale.ROOT)}_WOOL") ?: material
    val item =
        ItemStack(material, (entry.stack["amount"] as? Number)?.toInt()?.coerceIn(1, 64) ?: 1)
    item.editMeta { meta ->
      entry.stack["display-name"]?.let { meta.setDisplayName(it.toString()) }
      entry.stack["lore"]?.let { lore ->
        meta.lore = if (lore is List<*>) lore.map { it.toString() } else listOf(lore.toString())
      }
      (entry.stack["enchants"] as? Map<*, *>)?.forEach { (name, level) ->
        val enchant =
            Registry.ENCHANTMENT.get(
                NamespacedKey.minecraft(name.toString().lowercase(Locale.ROOT))
            )
        if (enchant != null) meta.addEnchant(enchant, (level as Number).toInt(), true)
      }
      if (meta is PotionMeta) {
        entry.stack["potion-type"]?.let { value ->
          meta.basePotionType =
              PotionType.entries.find {
                it.name.equals(value.toString().replace("healing", "instant_heal"), true)
              }
        }
        (entry.stack["effects"] as? List<*>)?.forEach { raw ->
          val effect = raw as? Map<*, *> ?: return@forEach
          val name = effect["effect"].toString().let { if (it == "jump") "jump_boost" else it }
          val type = Registry.EFFECT.get(NamespacedKey.minecraft(name)) ?: return@forEach
          meta.addCustomEffect(
              PotionEffect(
                  type,
                  (effect["duration"] as? Number)?.toInt() ?: 1,
                  (effect["amplifier"] as? Number)?.toInt() ?: 0,
              ),
              true,
          )
        }
      }
    }
    specials.tag(item, entry.properties)
    return item
  }

  private fun loadQuickbuy(player: Player): YamlConfiguration =
      YamlConfiguration.loadConfiguration(File(quickbuyFolder, "${player.uniqueId}.yml"))

  private fun saveQuickbuy(player: Player, id: String, entry: BedWarsShopEntry) {
    val yaml = loadQuickbuy(player)
    yaml.set("$id.material", entry.stack["type"].toString())
    yaml.set("$id.amount", entry.price!!.amount)
    yaml.set("$id.resource", entry.price.resource)
    quickbuyFolder.mkdirs()
    val file = File(quickbuyFolder, "${player.uniqueId}.yml")
    saveYaml(file, yaml)
  }

  fun close() {
    plugin.server.onlinePlayers
        .filter { (it.openInventory.topInventory.holder as? View)?.shop === this }
        .forEach { it.closeInventory() }
    HandlerList.unregisterAll(this)
  }

  companion object {
    fun isMenu(inventory: Inventory): Boolean = inventory.holder is View

    /** Returns remaining stack amounts, or null without mutation when funds are insufficient. */
    fun debitPlan(amounts: List<Int>, cost: Int): List<Int>? {
      require(cost > 0 && amounts.all { it >= 0 })
      if (amounts.sumOf { it.toLong() } < cost) return null
      var remaining = cost
      return amounts.map { amount ->
        val used = minOf(amount, remaining)
        remaining -= used
        amount - used
      }
    }

    private fun tier(material: String): Pair<String, Int>? {
      val split = material.uppercase(Locale.ROOT).split('_', limit = 2)
      if (split.size != 2 || split[1] !in setOf("SWORD", "BOOTS", "LEGGINGS", "PICKAXE", "AXE"))
          return null
      val armor = split[1] in setOf("BOOTS", "LEGGINGS")
      val levels =
          if (armor) listOf("LEATHER", "GOLDEN", "CHAINMAIL", "IRON", "DIAMOND", "NETHERITE")
          else listOf("WOODEN", "STONE", "GOLDEN", "IRON", "DIAMOND", "NETHERITE")
      val level = levels.indexOf(split[0])
      if (level < 0) return null
      return split[1] to level
    }

    fun isDowngrade(material: String, held: List<String>): Boolean {
      val target = tier(material) ?: return false
      return held.any { item ->
        tier(item)?.let { it.first == target.first && it.second > target.second } == true
      }
    }

    fun resolveQuickbuy(
        catalog: BedWarsShopCatalog,
        yaml: YamlConfiguration?,
        id: String,
    ): BedWarsShopEntry? {
      val material = yaml?.getString("$id.material") ?: return null
      val price =
          BedWarsPrice(yaml.getString("$id.resource") ?: return null, yaml.getInt("$id.amount"))
      return catalog.pages.values.flatten().firstOrNull {
        it.property != "quickbuy" &&
            it.target == null &&
            it.stack["type"] == material &&
            it.price == price
      }
    }

    fun resource(name: String): Material =
        when (name.lowercase(Locale.ROOT)) {
          "iron" -> Material.IRON_INGOT
          "gold" -> Material.GOLD_INGOT
          "diamond" -> Material.DIAMOND
          "emerald" -> Material.EMERALD
          else -> error("Unknown resource")
        }
  }
}
