package icu.oyasai.citiesskymine.unconnect

import com.sk89q.worldedit.bukkit.BukkitAdapter
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.util.selectedCuboid
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

class UnconnectCommand(private val plugin: Main) : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (!MessageUtil.requirePlayer(sender)) return true
    if (!plugin.access.require(sender, CommandKey.UNCONNECT)) return true
    if (args.size == 1 && args[0].equals("help", ignoreCase = true)) {
      sendHelp(sender, "/$label")
      return true
    }
    if (args.isNotEmpty()) {
      MessageUtil.error(sender, "不明な引数: ${args[0]}")
      sendHelp(sender, "/$label")
      return true
    }

    val region = selectedCuboid(sender, "unconnect は cuboid 選択にだけ対応しています。") ?: return true
    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-unconnect",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    val min = region.minimumPoint
    val max = region.maximumPoint
    val width = max.x().toLong() - min.x() + 1
    val height = max.y().toLong() - min.y() + 1
    val depth = max.z().toLong() - min.z() + 1
    // 積を作らず比較して、大きな選択でもオーバーフローさせない。
    if (maxBlocks > 0 && width > maxBlocks / height / depth) {
      MessageUtil.error(sender, "選択範囲のブロック数が上限 ($maxBlocks) を超えています。")
      return true
    }

    var changed = 0L
    val result =
        try {
          CsmEditSession.run(sender, plugin.logger) { editSession ->
            for (pos in region) {
              val data = BukkitAdapter.adapt(editSession.getBlock(pos))
              val replacement = unconnected(data) ?: continue
              if (editSession.setBlock(pos, BukkitAdapter.adapt(replacement))) changed++
            }
            changed > 0
          }
        } catch (e: Exception) {
          MessageUtil.error(sender, "接続の解除に失敗しました: ${e.message}")
          return true
        }
    if (changed == 0L) {
      MessageUtil.info(sender, "接続を変更したブロックはありません (0 blocks)。")
      return true
    }
    MessageUtil.success(sender, "接続を解除しました: $changed blocks")
    MessageUtil.undoResult(
        sender,
        result.undoRecorded,
        "FAWE の //undo でこの変更を取り消せます。",
        "変更は完了しましたが、FAWE undo 履歴への登録に失敗しました。",
    )
    return true
  }

  fun sendHelp(sender: CommandSender, base: String) {
    MessageUtil.helpEntry(sender, base, "直方体選択内のフェンス・板ガラス・鉄格子・壁・チョルスプラントの接続を全部外す")
    MessageUtil.info(sender, "壁は単独の柱の形になります。取り消しは FAWE の //undo を使ってください。")
    MessageUtil.info(sender, "隣のブロックを後から置く・壊すと、接続が再計算されることがあります。")
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> =
      if (args.size == 1) listOf("help").filter { it.startsWith(args[0], ignoreCase = true) }
      else emptyList()
}
