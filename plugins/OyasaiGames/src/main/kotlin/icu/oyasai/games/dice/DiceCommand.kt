package icu.oyasai.games.dice

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Sound
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class DiceCommand(
    private val diceItem: DiceItem,
    private val diceManager: DiceManager,
) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage(Component.text("このコマンドはプレイヤーのみ実行可能です。", NamedTextColor.RED))
      return true
    }

    if (args.isEmpty()) {
      giveDice(sender, DiceMode.ONE_D6)
      return true
    }

    when (args[0].lowercase()) {
      "help" -> {
        sender.sendMessage(
            Component.text("------- [ 🎲 おやさいサイコロ ヘルプ ] -------", NamedTextColor.GOLD)
        )
        sender.sendMessage(Component.text("/dice - サイコロを入手します", NamedTextColor.YELLOW))
        sender.sendMessage(
            Component.text("/dice get [1d6|2d6|1d100|...] - 指定したモードのサイコロを入手", NamedTextColor.YELLOW)
        )
        sender.sendMessage(Component.text("右クリック長押しで投げる強さをチャージして投擲できます！", NamedTextColor.AQUA))
        sender.sendMessage(
            Component.text("スニーク＋右クリックでモード（1D6/2D6/1D100等）を変更できます。", NamedTextColor.AQUA)
        )
        return true
      }
      "get" -> {
        val mode = if (args.size > 1) DiceMode.fromId(args[1]) else DiceMode.ONE_D6
        giveDice(sender, mode)
        return true
      }
      else -> {
        sender.sendMessage(Component.text("不明な引数です。/dice help で確認してください。", NamedTextColor.RED))
        return true
      }
    }
  }

  private fun giveDice(player: Player, mode: DiceMode) {
    if (diceManager.hasActiveDice(player)) {
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.8f, 1.0f)
      player.sendMessage(
          Component.text("[おやさいサイコロ] 🎲 現在サイコロを投擲中です！拾うか回収（15秒）されるまでお待ちください。", NamedTextColor.RED)
      )
      return
    }

    if (diceItem.hasDice(player)) {
      diceItem.sanitizePlayerDice(player)
      for (item in player.inventory.contents) {
        val dice = item ?: continue
        if (diceItem.isDice(dice)) {
          diceItem.updateDiceSettings(dice, newMode = mode)
          player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.8f, 1.2f)
          player.sendMessage(
              Component.text("[おやさいサイコロ] 🎲 手持ちのサイコロのモードを ", NamedTextColor.GOLD)
                  .append(Component.text(mode.displayName, NamedTextColor.GREEN))
                  .append(Component.text(" に切り替えました！（サイコロは1人1個までです）", NamedTextColor.GOLD))
          )
          return
        }
      }
    }

    diceManager.giveDiceSafely(player, mode)
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (args.size == 1) {
      return listOf("get", "help").filter { it.startsWith(args[0].lowercase()) }
    }
    if (args.size == 2 && args[0].equals("get", ignoreCase = true)) {
      val candidates = DiceMode.allIds + listOf("d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100")
      return candidates.filter { it.startsWith(args[1].lowercase()) }.distinct()
    }
    return emptyList()
  }
}
