package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.Main
import kotlin.math.abs
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerQuitEvent

internal const val MIN_SCALE_INPUT = -16.0
internal const val MAX_SCALE_INPUT = 16.0
internal const val MIN_SCALE_MULTIPLIER = 1.0 / MAX_SCALE_INPUT
internal const val MAX_SCALE_MULTIPLIER = MAX_SCALE_INPUT

internal fun isValidScaleInput(number: Double): Boolean {
  if (!number.isFinite() || number == 0.0) return false
  if (number < MIN_SCALE_INPUT || number > MAX_SCALE_INPUT) return false
  val raw = if (number < 0) 1.0 / abs(number) else number
  return raw in MIN_SCALE_MULTIPLIER..MAX_SCALE_MULTIPLIER
}

internal fun scaleMultiplier(number: Double): Double {
  if (!number.isFinite() || number == 0.0) return 0.0
  val raw = if (number < 0) 1.0 / abs(number) else number
  return raw.coerceIn(MIN_SCALE_MULTIPLIER, MAX_SCALE_MULTIPLIER)
}

class Scale(private val plugin: Main) : CommandExecutor, Listener {
  fun enable() {
    requireNotNull(plugin.getCommand("scale")).setExecutor(this)
    plugin.server.pluginManager.registerEvents(this, plugin)
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (args.size > 2) return false
    val player = sender as? Player
    if (player?.world?.name == "pvp") {
      sender.sendMessage("§cこのワールドではそのコマンドは使用できません。")
      return true
    }
    val target: Player
    val input: String
    if (args.size == 2) {
      if (player != null && !player.isOp && !player.hasPermission("group.admin")) {
        sender.sendMessage("§c他人のスケールを変更する権限がありません。")
        return true
      }
      target =
          plugin.server.getPlayer(args[0])
              ?: run {
                sender.sendMessage("§cプレイヤー ${args[0]} が見つかりません。")
                return true
              }
      input = args[1]
    } else {
      if (player == null) {
        sender.sendMessage("§cコンソールからはプレイヤー名を指定してください: /scale <プレイヤー名> <数値>")
        return true
      }
      target = player
      input = args.firstOrNull() ?: "1"
    }
    val number = input.toDoubleOrNull()?.takeIf { it.isFinite() }
    if (number == null) {
      sender.sendMessage("§c-16 から 16 の数字を入力してください。（例: /scale 2, /scale -4, /scale 1）")
      return true
    }
    if (number < -16) {
      sender.sendMessage("§c-16 以上の数字を入力してください。（最小: -16）")
      return true
    }
    if (number > 16) {
      sender.sendMessage("§c16 以下の数字を入力してください。（最大: 16）")
      return true
    }
    if (!isValidScaleInput(number)) {
      sender.sendMessage("§c0 以外の有効な数字（-16 〜 -0.0625 または 0.0625 〜 16）を入力してください。")
      return true
    }
    val scale = scaleMultiplier(number)
    target.getAttribute(Attribute.SCALE)?.baseValue = scale
    val setting = "（設定: ${numberText(number)} / 実倍率: ${numberText(scale)}倍）"
    target.sendMessage("§a体の大きさを変更しました。$setting")
    if (player != null && player != target) {
      player.sendMessage("§a${target.name} の体の大きさを変更しました。$setting")
    }
    return true
  }

  @EventHandler fun onQuit(event: PlayerQuitEvent) = reset(event.player)

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    if (event.player.world.name == "pvp") reset(event.player)
  }

  private fun reset(player: Player) {
    player.getAttribute(Attribute.SCALE)?.let { it.baseValue = it.defaultValue }
  }
}
