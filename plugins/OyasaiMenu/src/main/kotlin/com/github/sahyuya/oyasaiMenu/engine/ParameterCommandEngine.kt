package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.MenuAction
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import java.util.Locale
import java.util.UUID
import kotlin.math.roundToInt
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.AsyncPlayerChatEvent
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

class ParameterCommandEngine(private val plugin: OyasaiMenu) : Listener {

  private val placeholderPattern = Regex("\\{([A-Za-z][A-Za-z0-9_.-]*)}")
  private val pendingTextInput: MutableMap<UUID, PendingTextInput> = mutableMapOf()

  fun open(player: Player, action: MenuAction) {
    if (!player.isOp) {
      player.sendMessage(c("&cこの可変コマンドはOP限定です。"))
      return
    }

    val template = action.getString("command", action.getString("template"))
    if (template.isBlank()) {
      player.sendMessage(c("&c可変コマンドに command が設定されていません。"))
      return
    }
    val specs = buildSpecs(action, template)
    if (specs.isEmpty()) {
      player.sendMessage(c("&c可変コマンドに {amount} のような入力枠がありません。"))
      return
    }
    val values = specs.associate { it.name to it.defaultValue(player) }.toMutableMap()
    openSession(player, ParamCommandSession(template, specs, values, action))
  }

  private fun openSession(player: Player, session: ParamCommandSession) {
    val inv = Bukkit.createInventory(ParamCommandHolder(session), 54, comp("&8可変コマンド"))
    render(inv, player, session)
    player.openInventory(inv)
  }

  private fun render(inv: Inventory, player: Player, session: ParamCommandSession) {
    inv.clear()
    fill(inv, Material.GRAY_STAINED_GLASS_PANE)
    inv.setItem(
        0,
        item(
            Material.COMMAND_BLOCK,
            "&b可変コマンド",
            "&7OP限定で実行します",
            "&7左/右クリック: 値を増減・切替",
            "&7Shiftクリックまたは中クリック: 手入力"))
    inv.setItem(
        4,
        item(
            Material.PAPER,
            "&f実行内容",
            "&7テンプレート: &f${session.template}",
            "&7現在: &e${expandCommand(player, session)}"))

    val slots = valueSlots()
    session.specs.take(slots.size).forEachIndexed { index, spec ->
      inv.setItem(slots[index], paramItem(spec, session.values[spec.name] ?: ""))
    }
    inv.setItem(45, item(Material.LIME_CONCRETE, "&a実行", "&7現在の値でコマンドを実行します"))
    inv.setItem(49, item(Material.LEVER, "&e初期値に戻す", "&7すべての値をデフォルトへ戻します"))
    inv.setItem(53, item(Material.BARRIER, "&c閉じる", "&7何も実行せず閉じます"))
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val holder = event.inventory.holder as? ParamCommandHolder ?: return
    val player = event.whoClicked as? Player ?: return
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (!player.isOp) {
      player.closeInventory()
      player.sendMessage(c("&cこの可変コマンドはOP限定です。"))
      return
    }

    val session = holder.session
    when (event.rawSlot) {
      45 -> {
        val command = expandCommand(player, session)
        if (session.action.getString("confirm", "false").toBoolean()) {
          plugin.specialMenuEngine.openConfirmCommand(
              player, command, executionMode(session.action))
        } else {
          player.closeInventory()
          executeCommand(player, command, executionMode(session.action))
        }
      }
      49 -> {
        session.specs.forEach { session.values[it.name] = it.defaultValue(player) }
        render(event.inventory, player, session)
      }
      53 -> player.closeInventory()
      else -> {
        val index = valueSlots().indexOf(event.rawSlot)
        val spec = session.specs.getOrNull(index) ?: return
        if (event.click == ClickType.MIDDLE ||
            event.click == ClickType.SHIFT_LEFT ||
            event.click == ClickType.SHIFT_RIGHT) {
          startTextInput(player, session, spec)
          return
        }
        adjustValue(player, session, spec, event.click)
        render(event.inventory, player, session)
      }
    }
  }

  @EventHandler
  fun onCommandWhilePendingInput(event: PlayerCommandPreprocessEvent) {
    val pending = pendingTextInput[event.player.uniqueId] ?: return
    event.isCancelled = true
    finishTextInput(event.player, pending, event.message)
  }

  @EventHandler
  fun onChat(event: AsyncPlayerChatEvent) {
    val player = event.player
    val pending = pendingTextInput[player.uniqueId] ?: return
    event.isCancelled = true
    finishTextInput(player, pending, event.message)
  }

  private fun finishTextInput(player: Player, pending: PendingTextInput, rawText: String) {
    val text = normalizeTypedInput(rawText)
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (text.equals("cancel", ignoreCase = true) || text == "キャンセル") {
                player.sendMessage(c("&e入力をキャンセルしました。"))
              } else {
                val normalized = pending.spec.normalizeInput(text)
                if (normalized == null) {
                  player.sendMessage(c("&c値の形式が正しくありません: $text"))
                } else {
                  pending.session.values[pending.spec.name] = normalized
                  player.sendMessage(c("&a${pending.spec.name} = $normalized"))
                }
              }
              pendingTextInput.remove(player.uniqueId)
              openSession(player, pending.session)
            })
  }

  private fun startTextInput(player: Player, session: ParamCommandSession, spec: ParamSpec) {
    pendingTextInput[player.uniqueId] = PendingTextInput(session, spec)
    player.closeInventory()
    player.sendMessage(c("&e${spec.name} の値をチャットに入力してください。cancel で中止。"))
  }

  private fun adjustValue(
      player: Player,
      session: ParamCommandSession,
      spec: ParamSpec,
      click: ClickType
  ) {
    val current = session.values[spec.name] ?: spec.defaultValue(player)
    val direction =
        when (click) {
          ClickType.RIGHT -> -1
          else -> 1
        }
    when (spec.type) {
      ParamType.INT,
      ParamType.FLOAT -> {
        val base = current.toDoubleOrNull() ?: spec.defaultNumber
        val multiplier =
            if (click == ClickType.SHIFT_LEFT || click == ClickType.SHIFT_RIGHT) 10.0 else 1.0
        val next = spec.clamp(base + spec.step * multiplier * direction)
        session.values[spec.name] = spec.formatNumber(next)
      }
      ParamType.PLAYER,
      ParamType.ENUM,
      ParamType.MATERIAL,
      ParamType.TEXT -> {
        val options = spec.options(player)
        if (options.isEmpty()) return
        val currentIndex = options.indexOf(current).takeIf { it >= 0 } ?: 0
        val nextIndex = Math.floorMod(currentIndex + direction, options.size)
        session.values[spec.name] = options[nextIndex]
      }
    }
  }

  fun executeCommand(player: Player, rawCommand: String, mode: String) {
    if (!player.isOp) {
      player.sendMessage(c("&cこのコマンドはOP限定です。"))
      return
    }
    val command = normalizeCommand(rawCommand)
    if (command.isBlank()) return
    when (mode.lowercase(Locale.ROOT)) {
      "console" -> Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command)
      "op" -> {
        val wasOp = player.isOp
        try {
          player.isOp = true
          player.performCommand(command)
        } finally {
          player.isOp = wasOp
        }
      }
      else -> player.performCommand(command)
    }
  }

  private fun normalizeCommand(rawCommand: String): String =
      normalizeTypedInput(rawCommand).let { if (it.startsWith("/")) it.removePrefix("/") else it }

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

  private fun expandCommand(player: Player, session: ParamCommandSession): String {
    var result = plugin.menuEngine.applyPlaceholders(player, session.template)
    session.values.forEach { (key, value) -> result = result.replace("{$key}", value) }
    return result
  }

  private fun buildSpecs(action: MenuAction, template: String): List<ParamSpec> {
    val nested = action.params["params"] as? Map<*, *>
    return placeholderPattern
        .findAll(template)
        .map { it.groupValues[1] }
        .distinct()
        .map { name ->
          val nestedSpec = nested?.get(name) as? Map<*, *>
          ParamSpec(
              name = name,
              type = paramType(stringValue(action, nestedSpec, name, "type") ?: inferType(name)),
              min = doubleValue(action, nestedSpec, name, "min"),
              max = doubleValue(action, nestedSpec, name, "max"),
              step = doubleValue(action, nestedSpec, name, "step") ?: 1.0,
              defaultRaw = stringValue(action, nestedSpec, name, "default"),
              enumOptions = listValue(action, nestedSpec, name, "options"))
        }
        .toList()
  }

  private fun stringValue(
      action: MenuAction,
      nestedSpec: Map<*, *>?,
      name: String,
      key: String
  ): String? =
      nestedSpec?.get(key)?.toString()
          ?: action.params["param.$name.$key"]?.toString()
          ?: action.params["${name}_$key"]?.toString()

  private fun doubleValue(
      action: MenuAction,
      nestedSpec: Map<*, *>?,
      name: String,
      key: String
  ): Double? = stringValue(action, nestedSpec, name, key)?.toDoubleOrNull()

  private fun listValue(
      action: MenuAction,
      nestedSpec: Map<*, *>?,
      name: String,
      key: String
  ): List<String> {
    val raw = nestedSpec?.get(key) ?: action.params["param.$name.$key"] ?: return emptyList()
    return when (raw) {
      is List<*> -> raw.mapNotNull { it?.toString() }
      else -> raw.toString().split(',').map { it.trim() }.filter { it.isNotEmpty() }
    }
  }

  private fun inferType(name: String): String {
    val lower = name.lowercase(Locale.ROOT)
    return when {
      lower in setOf("player", "target", "user") -> "player"
      lower.contains("block") || lower.contains("material") || lower.contains("item") -> "material"
      lower.contains("radius") || lower.contains("scale") || lower.contains("speed") -> "float"
      else -> "int"
    }
  }

  private fun paramType(raw: String): ParamType =
      runCatching { ParamType.valueOf(raw.uppercase(Locale.ROOT)) }.getOrDefault(ParamType.TEXT)

  private fun executionMode(action: MenuAction): String =
      action.getString("execution", action.getString("mode", "player"))

  private fun valueSlots(): List<Int> = (10..16).toList() + (19..25).toList() + (28..34).toList()

  private fun paramItem(spec: ParamSpec, value: String): ItemStack {
    val material =
        when (spec.type) {
          ParamType.INT -> Material.REPEATER
          ParamType.FLOAT -> Material.COMPARATOR
          ParamType.MATERIAL -> Material.STONE
          ParamType.PLAYER -> Material.PLAYER_HEAD
          ParamType.ENUM -> Material.BOOK
          ParamType.TEXT -> Material.NAME_TAG
        }
    return item(
        material,
        "&e${spec.name}",
        "&7型: &f${spec.type.name.lowercase(Locale.ROOT)}",
        "&7現在: &a$value",
        "&7左クリック: + / 次へ",
        "&7右クリック: - / 前へ",
        "&7Shift・中クリック: 手入力")
  }

  private fun fill(inv: Inventory, mat: Material) {
    val glass = item(mat, " ")
    for (i in 0 until inv.size) inv.setItem(i, glass)
  }

  private fun item(mat: Material, name: String, vararg lore: String): ItemStack {
    val item = ItemStack(mat)
    val meta = item.itemMeta ?: return item
    meta.displayName(comp(name))
    if (lore.isNotEmpty()) meta.lore(lore.map { comp(it) })
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    item.itemMeta = meta
    return item
  }

  private data class ParamCommandSession(
      val template: String,
      val specs: List<ParamSpec>,
      val values: MutableMap<String, String>,
      val action: MenuAction
  )

  private data class PendingTextInput(val session: ParamCommandSession, val spec: ParamSpec)

  private class ParamCommandHolder(val session: ParamCommandSession) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  private enum class ParamType {
    INT,
    FLOAT,
    TEXT,
    MATERIAL,
    PLAYER,
    ENUM
  }

  private data class ParamSpec(
      val name: String,
      val type: ParamType,
      val min: Double?,
      val max: Double?,
      val step: Double,
      val defaultRaw: String?,
      val enumOptions: List<String>
  ) {
    val defaultNumber: Double =
        defaultRaw?.toDoubleOrNull() ?: if (type == ParamType.FLOAT) 1.0 else 1.0

    fun defaultValue(player: Player): String =
        defaultRaw
            ?: when (type) {
              ParamType.INT -> "1"
              ParamType.FLOAT -> "1.0"
              ParamType.MATERIAL -> "stone"
              ParamType.PLAYER -> player.name
              ParamType.ENUM -> enumOptions.firstOrNull() ?: ""
              ParamType.TEXT -> ""
            }

    fun normalizeInput(raw: String): String? =
        when (type) {
          ParamType.INT -> raw.toIntOrNull()?.let { formatNumber(clamp(it.toDouble())) }
          ParamType.FLOAT -> raw.toDoubleOrNull()?.let { formatNumber(clamp(it)) }
          else -> raw.takeIf { it.isNotBlank() }
        }

    fun options(player: Player): List<String> =
        when (type) {
          ParamType.PLAYER -> Bukkit.getOnlinePlayers().map { it.name }.sorted()
          ParamType.MATERIAL ->
              listOf("stone", "oak_planks", "glass", "air", "dirt", "grass_block", "water")
          ParamType.ENUM -> enumOptions
          else -> enumOptions
        }

    fun clamp(value: Double): Double {
      var result = value
      if (min != null) result = result.coerceAtLeast(min)
      if (max != null) result = result.coerceAtMost(max)
      return result
    }

    fun formatNumber(value: Double): String =
        when (type) {
          ParamType.INT -> value.roundToInt().toString()
          else -> "%.4f".format(Locale.US, value).trimEnd('0').trimEnd('.').ifEmpty { "0" }
        }
  }
}
