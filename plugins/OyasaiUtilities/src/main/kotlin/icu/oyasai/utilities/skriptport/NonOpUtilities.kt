package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.Main
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.potion.PotionEffect
import org.bukkit.potion.PotionEffectType

internal fun reachLimit(hasPermission: (String) -> Boolean): Int =
    when {
      hasPermission("reach.white") -> 64
      hasPermission("reach.blue") -> 48
      hasPermission("reach.takumi") -> 32
      hasPermission("reach.builder") -> 16
      else -> 0
    }

internal fun validFlySpeed(value: Double): Boolean = value in 0.1..5.0

internal fun numberText(value: Double): String =
    java.math.BigDecimal.valueOf(value).stripTrailingZeros().toPlainString()

class NonOpUtilities(private val plugin: Main) : CommandExecutor, Listener {
  fun enable() {
    listOf("anshi", "sokudo", "reach", "getdebugstick").forEach {
      requireNotNull(plugin.getCommand(it)).setExecutor(this)
    }
    plugin.server.pluginManager.registerEvents(this, plugin)
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("このコマンドはプレイヤー専用です。")
              return true
            }
    when (command.name) {
      "anshi" -> {
        if (args.isNotEmpty()) return false
        if (player.hasPotionEffect(PotionEffectType.NIGHT_VISION)) {
          player.removePotionEffect(PotionEffectType.NIGHT_VISION)
        } else {
          player.addPotionEffect(
              PotionEffect(PotionEffectType.NIGHT_VISION, 999999 * 20, 0, false, false, true)
          )
        }
      }
      "sokudo" -> {
        if (args.size != 1) return false
        val number = args[0].toDoubleOrNull()?.takeIf { it.isFinite() } ?: return false
        if (!validFlySpeed(number)) {
          player.sendMessage(if (number < 0.1) "§c0.1以上を入力してください" else "§c5以下を入力してください")
          return true
        }
        player.flySpeed = (number / 10).toFloat()
        player.sendMessage("§aフライ速度を ${numberText(number)} 倍にしました")
      }
      "reach" -> {
        if (args.size > 1) return false
        if (player.world.name == "pvp") {
          player.sendMessage("§cこのワールドではそのコマンドは使用できません。")
          return true
        }
        if (args.isEmpty()) {
          player.sendMessage("§e使用方法: /reach <数字> または /reach reset")
          return true
        }
        if (args[0].equals("reset", ignoreCase = true)) {
          resetReach(player)
          player.sendMessage("§aリーチを標準値にリセットしました。")
          return true
        }
        val number = args[0].toDoubleOrNull()?.takeIf { it.isFinite() }
        if (number == null) {
          player.sendMessage("§c有効な数字を入力してください。")
          return true
        }
        if (number <= 0) {
          player.sendMessage("§c0より大きい数字を入力してください。")
          return true
        }
        val max = reachLimit(player::hasPermission)
        if (max == 0) {
          player.sendMessage("§cリーチを変更するための権限がありません。")
          return true
        }
        if (number > max) {
          player.sendMessage("§c最大 $max まで設定できます。")
          return true
        }
        player.getAttribute(Attribute.BLOCK_INTERACTION_RANGE)?.baseValue = number
        player.getAttribute(Attribute.ENTITY_INTERACTION_RANGE)?.baseValue = number
        player.sendMessage("§aリーチを ${numberText(number)} に設定しました。")
      }
      "getdebugstick" -> {
        if (args.isNotEmpty()) return false
        if (player.gameMode == GameMode.CREATIVE) {
          giveItem(player, ItemStack(Material.DEBUG_STICK))
        } else {
          player.sendMessage("§cクリエイティブモードの時のみ使用できます。")
        }
      }
    }
    return true
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    if (event.player.hasPermission("reach.use")) resetReach(event.player)
  }

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    if (event.player.world.name == "pvp" && event.player.hasPermission("reach.use"))
        resetReach(event.player)
  }

  private fun resetReach(player: Player) {
    listOf(Attribute.BLOCK_INTERACTION_RANGE, Attribute.ENTITY_INTERACTION_RANGE).forEach {
      player.getAttribute(it)?.let { instance -> instance.baseValue = instance.defaultValue }
    }
  }
}

internal fun giveItem(player: Player, item: ItemStack) {
  player.inventory.addItem(item).values.forEach {
    player.world.dropItemNaturally(player.location, it)
  }
}
