package me.ankokunsan.entityPose.commands

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class SetumeiCommand : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              return true
            }
    if (!player.hasPermission("entitypose_arrange")) {
      player.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    player.sendMessage("§6---[EntityPose]§bコマンド、操作一覧§6---")
    player.sendMessage("/estick エンティティ棒を手に入れる")
    player.sendMessage("エンティティ棒 デバック棒と同じ使い方、アマスタは選択が多いので注意")
    player.sendMessage("/einfo エンティティの情報を表示")
    player.sendMessage("/einfo set エンティティの情報を変更(アレンジのロック＝エンティティ棒を使えない状態にする")
    player.sendMessage("/ekakudo (0.5~90.0) エンティティの角度の刻みを変更")
    player.sendMessage("/ezahyo (0.01~2.0) エンティティの一回あたりに動く座標の大きさを変更")
    player.sendMessage("/escale (0.5~3.0) エンティティの大きさ変更")
    player.sendMessage("§b---------------------------------------")
    player.sendMessage("/ewand Entity Copy Wandを手に入れる")
    player.sendMessage("Entity Copy Wand WorldEditのエンティティを選択するver")
    player.sendMessage("/ecopy 範囲選択したエンティティをコピー")
    player.sendMessage("/epaste コピーしたエンティティをペースト")
    player.sendMessage("§b-----------------おまけ-----------------")
    player.sendMessage("/ehojo on/off 空中作業のときに足場を出すか否か")
    return true
  }
}
