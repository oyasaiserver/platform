package icu.oyasai.utilities.debugonbe.gui

import icu.oyasai.utilities.OyasaiUtilities.addText
import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.display.BlockDisplayManager
import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.TogoSettings
import icu.oyasai.utilities.debugonbe.model.TogoSettingsLimits
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin

/** /togom から開く DebugOnBE の設定GUI。 */
class TogoGui(
    private val plugin: Plugin,
    private val displayManager: BlockDisplayManager,
    private val store: PlacementDataStore,
) : Listener {

  private enum class NumericSetting(
      val title: String,
      val min: Int,
      val max: Int,
      val steps: IntArray,
  ) {
    MAX_BLOCKS(
        title = "ブロック数制限",
        min = TogoSettingsLimits.MIN_MAX_BLOCKS,
        max = TogoSettingsLimits.MAX_MAX_BLOCKS,
        steps = intArrayOf(100, 10, 1),
    ),
    RADIUS(
        title = "変換半径",
        min = TogoSettingsLimits.MIN_RADIUS,
        max = TogoSettingsLimits.MAX_RADIUS,
        steps = intArrayOf(100, 10, 1),
    ),
    DURATION(
        title = "変換時間(秒)",
        min = TogoSettingsLimits.MIN_DURATION_SECONDS,
        max = TogoSettingsLimits.MAX_DURATION_SECONDS,
        steps = intArrayOf(100, 10, 1),
    ),
  }

  private class TogoGuiHolder(
      val ownerId: UUID,
      val numericSetting: NumericSetting?,
      val shapes: List<BlockShape>,
  ) : InventoryHolder {
    lateinit var guiInventory: Inventory

    override fun getInventory(): Inventory = guiInventory
  }

  private val openInventories = mutableSetOf<Inventory>()

  /** 設定画面を開く。 */
  fun open(player: Player) {
    player.openInventory(createSettingsInventory(player))
  }

  /** プラグイン停止時にGUIを閉じる。 */
  fun closeAll() {
    openInventories.toList().forEach { inventory ->
      inventory.viewers.toList().forEach { it.closeInventory() }
    }
    openInventories.clear()
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val holder = event.view.topInventory.holder as? TogoGuiHolder ?: return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return
    if (player.uniqueId != holder.ownerId) return

    val slot = event.rawSlot
    if (slot !in 0 until event.view.topInventory.size) return

    if (holder.numericSetting == null) {
      handleSettingsClick(player, holder, slot)
    } else {
      handleNumericClick(player, holder, slot)
    }
  }

  @EventHandler
  fun onInventoryDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is TogoGuiHolder) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    if (event.view.topInventory.holder is TogoGuiHolder) {
      openInventories.remove(event.view.topInventory)
    }
  }

  private fun createSettingsInventory(player: Player): Inventory {
    val shapes = supportedShapes()
    val holder = TogoGuiHolder(player.uniqueId, numericSetting = null, shapes = shapes)
    val inventory = createInventory(holder, 36, "§8Togo設定")
    renderSettings(inventory, player, shapes)
    return inventory
  }

  private fun createNumericInventory(player: Player, setting: NumericSetting): Inventory {
    val holder = TogoGuiHolder(player.uniqueId, numericSetting = setting, shapes = emptyList())
    val inventory = createInventory(holder, 27, "§8${setting.title}")
    renderNumeric(inventory, player, setting)
    return inventory
  }

  private fun createInventory(holder: TogoGuiHolder, size: Int, title: String): Inventory {
    val inventory = Bukkit.createInventory(holder, size, title)
    holder.guiInventory = inventory
    openInventories += inventory
    return inventory
  }

  private fun renderSettings(
      inventory: Inventory,
      player: Player,
      shapes: List<BlockShape>,
  ) {
    inventory.clear()

    val settings = displayManager.getSettings(player)
    val enabledShapes = settings.enabledShapes ?: shapes.toSet()
    shapes.forEachIndexed { index, shape ->
      inventory.setItem(index, createShapeItem(shape, shape in enabledShapes))
    }

    inventory.setItem(
        18,
        ItemStack(Material.PAPER)
            .addText(
                "§e有効ブロック: §f${enabledShapes.intersect(shapes.toSet()).size}/${shapes.size}",
                mutableListOf("§7ブロック種類をクリックして切り替え"),
            ),
    )
    inventory.setItem(
        20,
        createSettingItem(
            Material.CHEST,
            "ブロック数制限",
            "${settings.maxBlocks}個",
            "クリックして変更",
        ),
    )
    inventory.setItem(
        22,
        createSettingItem(
            Material.COMPASS,
            "変換半径",
            "${settings.radius}ブロック",
            "クリックして変更",
        ),
    )
    inventory.setItem(
        24,
        createSettingItem(
            Material.CLOCK,
            "変換時間",
            "${settings.durationSeconds}秒",
            "クリックして変更",
        ),
    )
    inventory.setItem(
        35,
        ItemStack(Material.BARRIER).addText("§c閉じる", mutableListOf()),
    )
  }

  private fun renderNumeric(inventory: Inventory, player: Player, setting: NumericSetting) {
    inventory.clear()
    val value = currentValue(displayManager.getSettings(player), setting)

    inventory.setItem(
        21,
        ItemStack(Material.ARROW).addText("§a戻る", mutableListOf("§7設定画面に戻る")),
    )

    setting.steps.forEachIndexed { index, step ->
      inventory.setItem(
          index,
          ItemStack(Material.GREEN_WOOL)
              .addText(
                  "§a+$step",
                  mutableListOf("§7${setting.title}を増やす"),
              ),
      )
      inventory.setItem(
          index + 18,
          ItemStack(Material.RED_WOOL)
              .addText(
                  "§c-$step",
                  mutableListOf("§7${setting.title}を減らす"),
              ),
      )
    }

    val digits = value.toString()
    digits.forEachIndexed { index, digit ->
      inventory.setItem(
          9 + (3 - digits.length) + index,
          TogoNumberBanner.getBannerChar(digit)
              ?.addText(
                  "§e$value",
                  mutableListOf(
                      "§f${setting.title}",
                      "§7範囲: ${setting.min}〜${setting.max}",
                      "§7桁ごとのボタンで変更",
                  ),
              ),
      )
    }
  }

  private fun handleSettingsClick(player: Player, holder: TogoGuiHolder, slot: Int) {
    val shape = holder.shapes.getOrNull(slot)
    if (shape != null) {
      val currentSettings = displayManager.getSettings(player)
      val supported = holder.shapes.toSet()
      val enabled = (currentSettings.enabledShapes ?: supported).toMutableSet()
      if (!enabled.add(shape)) enabled.remove(shape)
      displayManager.setSettings(
          player,
          currentSettings.copy(enabledShapes = if (enabled == supported) null else enabled),
      )
      renderSettings(holder.guiInventory, player, holder.shapes)
      return
    }

    when (slot) {
      20 -> openNumeric(player, NumericSetting.MAX_BLOCKS)
      22 -> openNumeric(player, NumericSetting.RADIUS)
      24 -> openNumeric(player, NumericSetting.DURATION)
      35 -> player.closeInventory()
    }
  }

  private fun handleNumericClick(player: Player, holder: TogoGuiHolder, slot: Int) {
    val setting = holder.numericSetting ?: return
    if (slot == 21) {
      player.openInventory(createSettingsInventory(player))
      return
    }

    val (step, sign) =
        when {
          slot in 0..2 -> setting.steps.getOrNull(slot) to 1
          slot in 18..20 -> setting.steps.getOrNull(slot - 18) to -1
          else -> null to 0
        }
    if (step == null || sign == 0) return

    val currentSettings = displayManager.getSettings(player)
    val currentValue = currentValue(currentSettings, setting)
    val updatedValue =
        (currentValue.toLong() + step.toLong() * sign)
            .coerceIn(setting.min.toLong(), setting.max.toLong())
            .toInt()
    if (updatedValue == currentValue) return

    displayManager.setSettings(player, updateValue(currentSettings, setting, updatedValue))
    renderNumeric(holder.guiInventory, player, setting)
  }

  private fun openNumeric(player: Player, setting: NumericSetting) {
    plugin.server.scheduler.runTask(
        plugin,
        Runnable { player.openInventory(createNumericInventory(player, setting)) },
    )
  }

  private fun currentValue(settings: TogoSettings, setting: NumericSetting): Int =
      when (setting) {
        NumericSetting.MAX_BLOCKS -> settings.maxBlocks
        NumericSetting.RADIUS -> settings.radius
        NumericSetting.DURATION -> settings.durationSeconds
      }

  private fun updateValue(
      settings: TogoSettings,
      setting: NumericSetting,
      value: Int,
  ): TogoSettings =
      when (setting) {
        NumericSetting.MAX_BLOCKS -> settings.copy(maxBlocks = value)
        NumericSetting.RADIUS -> settings.copy(radius = value)
        NumericSetting.DURATION -> settings.copy(durationSeconds = value)
      }

  private fun createShapeItem(shape: BlockShape, enabled: Boolean): ItemStack {
    val item =
        ItemStack(shape.iconMaterial())
            .addText(
                "${if (enabled) "§a" else "§c"}${shape.displayName()}",
                mutableListOf(
                    if (enabled) "§a有効" else "§c無効",
                    "§7クリックして切り替え",
                ),
            )
    if (enabled) {
      item.addUnsafeEnchantment(Enchantment.UNBREAKING, 1)
      item.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    }
    return item
  }

  private fun createSettingItem(
      material: Material,
      title: String,
      value: String,
      action: String,
  ): ItemStack = ItemStack(material).addText("§e$title", mutableListOf("§f$value", "§7$action"))

  private fun supportedShapes(): List<BlockShape> =
      BlockShape.entries.filter { shape ->
        store.get(shape).states.values.any { placements -> placements.isNotEmpty() }
      }

  private fun BlockShape.displayName(): String =
      when (this) {
        BlockShape.STAIRS -> "階段"
        BlockShape.IRON_BARS -> "鉄格子"
        BlockShape.FENCE -> "フェンス"
        BlockShape.WALL -> "壁"
        BlockShape.SLAB -> "ハーフブロック"
        BlockShape.DOOR -> "ドア"
        BlockShape.TRAPDOOR -> "トラップドア"
        BlockShape.GLASS_PANE -> "板ガラス"
      }

  private fun BlockShape.iconMaterial(): Material =
      when (this) {
        BlockShape.STAIRS -> Material.OAK_STAIRS
        BlockShape.IRON_BARS -> Material.IRON_BARS
        BlockShape.FENCE -> Material.OAK_FENCE
        BlockShape.WALL -> Material.STONE_BRICK_WALL
        BlockShape.SLAB -> Material.OAK_SLAB
        BlockShape.DOOR -> Material.OAK_DOOR
        BlockShape.TRAPDOOR -> Material.OAK_TRAPDOOR
        BlockShape.GLASS_PANE -> Material.GLASS_PANE
      }
}
