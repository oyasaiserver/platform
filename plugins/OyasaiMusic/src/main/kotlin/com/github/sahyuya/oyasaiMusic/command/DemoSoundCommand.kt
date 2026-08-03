package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.audio.InstrumentMapper
import com.github.sahyuya.oyasaiMusic.audio.VanillaSoundCatalog
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.SoundCategory
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/** `/demosound <SoundEvent> <パターン> [ピッチ]` の個人用サウンド試聴コマンド。 */
class DemoSoundCommand : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("このコマンドはプレイヤーのみ実行できます。")
      return true
    }
    if (args.size !in 2..3) {
      sender.sendMessage("§c使い方: /demosound <SoundEvent> <パターン> [ピッチ(0〜24)]")
      return true
    }
    val definition = VanillaSoundCatalog.find(args[0])
    if (definition == null) {
      sender.sendMessage("§cSoundEvent '${args[0]}' は見つかりません。TAB補完から選択してください。")
      return true
    }
    val pattern = args[1].toIntOrNull()
    if (pattern == null || pattern <= 0) {
      sender.sendMessage("§cパターンは1以上の整数で指定してください。")
      return true
    }
    val selection = definition.selectionForPattern(pattern)
    if (selection == null || definition.idPrefix == null) {
      sender.sendMessage("§c${definition.eventKey} は固定パターン指定に対応していません。")
      return true
    }
    val notePitch = if (args.size == 3) args[2].toIntOrNull()?.takeIf { it in 0..24 } else null
    if (args.size == 3 && notePitch == null) {
      sender.sendMessage("§cピッチは0〜24の整数で指定してください。")
      return true
    }
    val playbackPitch =
        notePitch?.let { InstrumentMapper.pitchToPlaybackPitch(it.toByte()) } ?: 1.0f
    val id = "${definition.idPrefix}:$pattern"

    sender.playSound(
        sender.location,
        selection.eventKey,
        SoundCategory.RECORDS,
        1.0f,
        playbackPitch,
        selection.seed,
    )
    sender.sendMessage(
        "§a試聴: §f${definition.eventKey} §7(パターン $pattern${notePitch?.let { ", ピッチ $it" } ?: ""})"
    )
    sender.sendMessage(
        Component.text("ID ", NamedTextColor.YELLOW)
            .append(
                Component.text(id, NamedTextColor.AQUA)
                    .hoverEvent(
                        HoverEvent.showText(Component.text("クリックでコピー", NamedTextColor.GRAY))
                    )
                    .clickEvent(ClickEvent.copyToClipboard(id)),
            ),
    )
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      when (args.size) {
        1 ->
            VanillaSoundCatalog.eventKeys().filter {
              it.contains(args[0].removePrefix("minecraft:"), ignoreCase = true)
            }
        2 ->
            VanillaSoundCatalog.find(args[0])?.availablePatterns()?.map(Int::toString)?.filter {
              it.startsWith(args[1])
            } ?: emptyList()
        3 -> (0..24).map(Int::toString).filter { it.startsWith(args[2]) }
        else -> emptyList()
      }
}
