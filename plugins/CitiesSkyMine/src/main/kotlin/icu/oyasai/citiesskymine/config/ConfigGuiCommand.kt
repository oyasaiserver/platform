package icu.oyasai.citiesskymine.config

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import kotlin.math.roundToInt
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

class ConfigGuiCommand(private val plugin: Main) : CommandExecutor, TabCompleter, Listener {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.CONFIG)) return true
    when (args.getOrNull(0)?.lowercase()) {
      "road" -> openRoad(sender)
      "window",
      "win" -> openWindow(sender)
      "intersection",
      "ri" -> openIntersection(sender)
      "payload",
      "pl" -> openPayload(sender)
      else -> openHome(sender)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (args.size != 1) return emptyList()
    return listOf("road", "win", "ri", "pl").filter { it.startsWith(args[0], ignoreCase = true) }
  }

  @EventHandler
  fun onClick(event: InventoryClickEvent) {
    val holder = event.inventory.holder as? Holder ?: return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (!plugin.access.canUse(player, CommandKey.CONFIG)) return
    if (event.rawSlot !in 0 until event.inventory.size) return

    when (holder.page) {
      "home" -> handleHomeClick(player, event.rawSlot)
      "road" -> handleRoadClick(player, event.rawSlot)
      "window" -> handleWindowClick(player, event.rawSlot)
      "intersection" -> handleIntersectionClick(player, event.rawSlot)
      "payload" -> handlePayloadClick(player, event.rawSlot)
    }
  }

  // ──────────────────────────────────────────────────
  // Home  (27 slots / 3 rows)
  //  .  .  .  .  .  .  .  .  .
  //  .  Road .  Win .  Int .  Pay .
  //  .  .  .  .  Close  .  .  .  .
  // ──────────────────────────────────────────────────

  private fun openHome(player: Player) {
    val inv = createInv("home", 27, "CSM Config")
    inv.setItem(10, item(Material.STONE_BRICKS, "Road", "道路カーブの個人設定"))
    inv.setItem(12, item(Material.WHITE_STAINED_GLASS, "Window", "窓生成の個人設定"))
    inv.setItem(14, item(Material.MAP, "Intersection", "交差点生成の個人設定"))
    inv.setItem(16, item(Material.CHEST, "Payload", "CSM payload の個人設定"))
    inv.setItem(22, item(Material.BARRIER, "Close", "閉じる"))
    player.openInventory(inv)
  }

  private fun handleHomeClick(player: Player, slot: Int) {
    when (slot) {
      10 -> openRoad(player)
      12 -> openWindow(player)
      14 -> openIntersection(player)
      16 -> openPayload(player)
      22 -> player.closeInventory()
    }
  }

  // ──────────────────────────────────────────────────
  // Road  (27 slots / 3 rows)
  //  Ra-  Ra  Ra+  .  La-  La  La+  .  .
  //  Sw-  Sw  Sw+  .  Tr-  Tr  Tr+  .  .
  //  .    .   .    .  .    .   .   Back Close
  // ──────────────────────────────────────────────────

  private fun openRoad(player: Player) {
    val inv = createInv("road", 27, "CSM Config — Road")
    val road = plugin.getSession(player).settings
    inv.setItem(0, item(Material.REDSTONE_TORCH, "Radius -5", "現在: ${road.radius.roundToInt()}"))
    inv.setItem(1, item(Material.COMPASS, "Radius", "${road.radius.roundToInt()} blocks"))
    inv.setItem(2, item(Material.TORCH, "Radius +5", "現在: ${road.radius.roundToInt()}"))
    inv.setItem(4, item(Material.REDSTONE_TORCH, "Lane -1", "現在: ${road.laneWidth}"))
    inv.setItem(5, item(Material.GRAY_CONCRETE, "Lane Width", "${road.laneWidth} blocks"))
    inv.setItem(6, item(Material.TORCH, "Lane +1", "現在: ${road.laneWidth}"))
    inv.setItem(9, item(Material.REDSTONE_TORCH, "Sidewalk -1", "現在: ${road.sidewalkWidth}"))
    inv.setItem(10, item(Material.SMOOTH_STONE, "Sidewalk", "${road.sidewalkWidth} blocks"))
    inv.setItem(11, item(Material.TORCH, "Sidewalk +1", "現在: ${road.sidewalkWidth}"))
    inv.setItem(
        13,
        item(Material.REDSTONE_TORCH, "Transition -5", "現在: ${road.transitionLength.roundToInt()}"),
    )
    inv.setItem(
        14,
        item(Material.RAIL, "Transition", "${road.transitionLength.roundToInt()} blocks"),
    )
    inv.setItem(
        15,
        item(Material.TORCH, "Transition +5", "現在: ${road.transitionLength.roundToInt()}"),
    )
    inv.setItem(25, item(Material.ARROW, "← Back", "ホームに戻る"))
    inv.setItem(26, item(Material.BARRIER, "Close", "閉じる"))
    player.openInventory(inv)
  }

  private fun handleRoadClick(player: Player, slot: Int) {
    when (slot) {
      0 -> adjustRoadRadius(player, -5.0)
      2 -> adjustRoadRadius(player, 5.0)
      4 -> adjustRoadLane(player, -1)
      6 -> adjustRoadLane(player, 1)
      9 -> adjustRoadSidewalk(player, -1)
      11 -> adjustRoadSidewalk(player, 1)
      13 -> adjustRoadTransition(player, -5.0)
      15 -> adjustRoadTransition(player, 5.0)
      25 -> {
        openHome(player)
        return
      }
      26 -> {
        player.closeInventory()
        return
      }
      else -> return
    }
    openRoad(player)
  }

  // ──────────────────────────────────────────────────
  // Window  (18 slots / 2 rows)
  //  Wi-  Wi  Wi+  .  He-  He  He+  .  .
  //  .    .   .    .  .    .   .   Back Close
  // ──────────────────────────────────────────────────

  private fun openWindow(player: Player) {
    val inv = createInv("window", 18, "CSM Config — Window")
    val width =
        plugin.playerDataStore.getInt(player, "window.width")
            ?: plugin.config.getInt("window.default-width", 2)
    val height =
        plugin.playerDataStore.getInt(player, "window.height")
            ?: plugin.config.getInt("window.default-height", 3)
    inv.setItem(0, item(Material.REDSTONE_TORCH, "Width -1", "現在: $width"))
    inv.setItem(1, item(Material.WHITE_STAINED_GLASS, "Window Width", "$width blocks"))
    inv.setItem(2, item(Material.TORCH, "Width +1", "現在: $width"))
    inv.setItem(4, item(Material.REDSTONE_TORCH, "Height -1", "現在: $height"))
    inv.setItem(5, item(Material.IRON_TRAPDOOR, "Window Height", "$height blocks"))
    inv.setItem(6, item(Material.TORCH, "Height +1", "現在: $height"))
    inv.setItem(16, item(Material.ARROW, "← Back", "ホームに戻る"))
    inv.setItem(17, item(Material.BARRIER, "Close", "閉じる"))
    player.openInventory(inv)
  }

  private fun handleWindowClick(player: Player, slot: Int) {
    when (slot) {
      0 -> adjustWindowWidth(player, -1)
      2 -> adjustWindowWidth(player, 1)
      4 -> adjustWindowHeight(player, -1)
      6 -> adjustWindowHeight(player, 1)
      16 -> {
        openHome(player)
        return
      }
      17 -> {
        player.closeInventory()
        return
      }
      else -> return
    }
    openWindow(player)
  }

  // ──────────────────────────────────────────────────
  // Intersection  (27 slots / 3 rows)
  //  Ar-  Ar  Ar+  .  AL-  AL  AL+  .  .
  //  .    Cr- Cr   Cr+ .   .   .    .  .
  //  .    .   .    .   .   .   .   Back Close
  // ──────────────────────────────────────────────────

  private fun openIntersection(player: Player) {
    val inv = createInv("intersection", 27, "CSM Config — Intersection")
    val session = plugin.getIntersectionSession(player)
    inv.setItem(0, item(Material.REDSTONE_TORCH, "Arms -1", "現在: ${session.arms}"))
    inv.setItem(1, item(Material.CROSSBOW, "Arms", "${session.arms} arms"))
    inv.setItem(2, item(Material.TORCH, "Arms +1", "現在: ${session.arms}"))
    inv.setItem(4, item(Material.REDSTONE_TORCH, "Arm Length -2", "現在: ${session.armLength}"))
    inv.setItem(5, item(Material.POWERED_RAIL, "Arm Length", "${session.armLength} blocks"))
    inv.setItem(6, item(Material.TORCH, "Arm Length +2", "現在: ${session.armLength}"))
    inv.setItem(
        10,
        item(Material.REDSTONE_TORCH, "Corner Radius -1", "現在: ${session.cornerRadius}"),
    )
    inv.setItem(11, item(Material.STONE_BUTTON, "Corner Radius", "${session.cornerRadius} blocks"))
    inv.setItem(12, item(Material.TORCH, "Corner Radius +1", "現在: ${session.cornerRadius}"))
    inv.setItem(25, item(Material.ARROW, "← Back", "ホームに戻る"))
    inv.setItem(26, item(Material.BARRIER, "Close", "閉じる"))
    player.openInventory(inv)
  }

  private fun handleIntersectionClick(player: Player, slot: Int) {
    when (slot) {
      0 -> adjustIntersectionArms(player, -1)
      2 -> adjustIntersectionArms(player, 1)
      4 -> adjustIntersectionArmLength(player, -2)
      6 -> adjustIntersectionArmLength(player, 2)
      10 -> adjustIntersectionCorner(player, -1)
      12 -> adjustIntersectionCorner(player, 1)
      25 -> {
        openHome(player)
        return
      }
      26 -> {
        player.closeInventory()
        return
      }
      else -> return
    }
    openIntersection(player)
  }

  // ──────────────────────────────────────────────────
  // Payload  (18 slots / 2 rows)
  //  Side  .  Hollow  .  Rotation  .  .  .  .
  //  .     .  .       .  .         .  .  Back Close
  // ──────────────────────────────────────────────────

  private fun openPayload(player: Player) {
    val inv = createInv("payload", 18, "CSM Config — Payload")
    val side = payloadSide(player)
    val hollow = payloadHollow(player)
    val rotation = payloadRotation(player)
    inv.setItem(0, item(Material.ARROW, "Side: $side", "クリックで L/R 切替"))
    inv.setItem(2, item(Material.HOPPER, "Hollow: ${if (hollow) "ON" else "OFF"}", "クリックで切替"))
    inv.setItem(4, item(Material.REPEATER, "Rotation: $rotation", "クリックで 0 → 1 → 2 → 3"))
    inv.setItem(16, item(Material.ARROW, "← Back", "ホームに戻る"))
    inv.setItem(17, item(Material.BARRIER, "Close", "閉じる"))
    player.openInventory(inv)
  }

  private fun handlePayloadClick(player: Player, slot: Int) {
    when (slot) {
      0 -> togglePayloadSide(player)
      2 -> togglePayloadHollow(player)
      4 -> cyclePayloadRotation(player)
      16 -> {
        openHome(player)
        return
      }
      17 -> {
        player.closeInventory()
        return
      }
      else -> return
    }
    openPayload(player)
  }

  // ──────────────────────────────────────────────────
  // Shared helpers
  // ──────────────────────────────────────────────────

  private fun createInv(page: String, size: Int, title: String): Inventory =
      Bukkit.createInventory(Holder(page), size, Component.text(title))

  private fun item(material: Material, name: String, vararg lore: String): ItemStack {
    val stack = ItemStack(material)
    val meta = stack.itemMeta
    meta.displayName(Component.text(name))
    meta.lore(lore.map { Component.text(it) })
    stack.itemMeta = meta
    return stack
  }

  private fun adjustRoadRadius(player: Player, delta: Double) {
    val settings = plugin.getSession(player).settings
    settings.radius = (settings.radius + delta).coerceIn(1.0, 200.0)
    plugin.saveRoadSettings(player, settings)
    plugin.updatePreview(player)
  }

  private fun adjustRoadTransition(player: Player, delta: Double) {
    val settings = plugin.getSession(player).settings
    settings.transitionLength = (settings.transitionLength + delta).coerceIn(0.0, 100.0)
    plugin.saveRoadSettings(player, settings)
    plugin.updatePreview(player)
  }

  private fun adjustRoadLane(player: Player, delta: Int) {
    val settings = plugin.getSession(player).settings
    settings.laneWidth = (settings.laneWidth + delta).coerceIn(1, 12)
    plugin.saveRoadSettings(player, settings)
    plugin.updatePreview(player)
  }

  private fun adjustRoadSidewalk(player: Player, delta: Int) {
    val settings = plugin.getSession(player).settings
    settings.sidewalkWidth = (settings.sidewalkWidth + delta).coerceIn(0, 8)
    plugin.saveRoadSettings(player, settings)
    plugin.updatePreview(player)
  }

  private fun adjustWindowWidth(player: Player, delta: Int) {
    val current =
        plugin.playerDataStore.getInt(player, "window.width")
            ?: plugin.config.getInt("window.default-width", 2)
    plugin.playerDataStore.set(player, "window.width", (current + delta).coerceIn(1, 16))
  }

  private fun adjustWindowHeight(player: Player, delta: Int) {
    val current =
        plugin.playerDataStore.getInt(player, "window.height")
            ?: plugin.config.getInt("window.default-height", 3)
    plugin.playerDataStore.set(player, "window.height", (current + delta).coerceIn(1, 16))
  }

  private fun adjustIntersectionArms(player: Player, delta: Int) {
    val session = plugin.getIntersectionSession(player)
    session.arms = (session.arms + delta).coerceIn(3, 6)
    plugin.saveIntersectionSettings(player, session)
    plugin.updateIntersectionPreview(player)
  }

  private fun adjustIntersectionArmLength(player: Player, delta: Int) {
    val session = plugin.getIntersectionSession(player)
    session.armLength = (session.armLength + delta).coerceIn(2, 128)
    plugin.saveIntersectionSettings(player, session)
    plugin.updateIntersectionPreview(player)
  }

  private fun adjustIntersectionCorner(player: Player, delta: Int) {
    val session = plugin.getIntersectionSession(player)
    session.cornerRadius = (session.cornerRadius + delta).coerceIn(0, 32)
    plugin.saveIntersectionSettings(player, session)
    plugin.updateIntersectionPreview(player)
  }

  private fun togglePayloadSide(player: Player) {
    val next = if (payloadSide(player) == "L") "R" else "L"
    plugin.playerDataStore.set(player, "payload.side", next)
  }

  private fun togglePayloadHollow(player: Player) {
    plugin.playerDataStore.set(player, "payload.hollow", !payloadHollow(player))
  }

  private fun cyclePayloadRotation(player: Player) {
    plugin.playerDataStore.set(
        player,
        "payload.rotation",
        (payloadRotation(player) + 1).floorMod(4),
    )
  }

  private fun payloadSide(player: Player): String =
      plugin.playerDataStore.getString(player, "payload.side")
          ?: plugin.config.getString("csm.default-side")
          ?: "R"

  private fun payloadHollow(player: Player): Boolean =
      plugin.playerDataStore.getBoolean(player, "payload.hollow")
          ?: plugin.config.getBoolean("csm.hollow-on-load", true)

  private fun payloadRotation(player: Player): Int =
      (plugin.playerDataStore.getInt(player, "payload.rotation")
              ?: plugin.config.getInt("csm.default-rotation", 0))
          .floorMod(4)

  private fun Int.floorMod(mod: Int): Int = Math.floorMod(this, mod)

  private class Holder(val page: String) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 27)
  }
}
