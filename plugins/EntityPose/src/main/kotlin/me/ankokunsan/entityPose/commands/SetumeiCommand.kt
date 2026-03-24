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
    player.sendMessage("§l/epstick  §rエンティティ棒を手に入れる")
    player.sendMessage("エンティティ棒  §rデバック棒に類似、ｱﾏｽﾀは選択多いので注意")
    player.sendMessage("§l/epkakudo (0.5~90.0)  §rｴﾝﾃｨﾃｨの角度の刻みを変更(数字なしでGUI)")
    player.sendMessage("§l/epzahyo (0.01~2.0)  §rｴﾝﾃｨﾃｨの一回あたりに動く座標の大きさを変更(数字なしでGUI)")
    player.sendMessage("/epkakudoはｵﾌﾊﾝﾄ持ち替えﾞ、+しゃがみで/epzahyoのGUIを開ける")
    player.sendMessage("§b-------------------------------------")
    player.sendMessage("§l/epwand  §rEntity Copy Wandを手に入れる")
    player.sendMessage("§lEntity Copy Wand  §rWEのｴﾝﾃｨﾃｨを選択するver(当たり判定難)")
    player.sendMessage("§l/epwand -c  §r範囲選択解除 pos1,2も解除(ｵﾌﾊﾝﾄﾞ持ち替えでも可)")
    player.sendMessage("§l/epcopy  §r範囲選択したｴﾝﾃｨﾃｨをコピー")
    player.sendMessage("§l/eppaste  §rコピーしたｴﾝﾃｨﾃｨをペースト")
    player.sendMessage("§l/epcut  §r範囲選択したｴﾝﾃｨﾃｨを削除")
    player.sendMessage("§l/epinfo  §rｴﾝﾃｨﾃｨの情報をチャット欄に表示")
    player.sendMessage("§l/epinfo set  §rｴﾝﾃｨﾃｨの情報を変更するGUIを開く(範囲選択で同時設定可)")
    player.sendMessage("§l/epscale (0.3~3.0)  §rｴﾝﾃｨﾃｨの大きさ変更(範囲選択で同時設定可)")
    player.sendMessage("範囲選択で[全体],[X,Y,Z座標]を同時に動かせる")
    player.sendMessage("§b-----------------おまけ-----------------")
    player.sendMessage("§l/ephojo on/off §r空中作業のときに足場を出すか否か §c※本当に周りにブロックがない時だけにしてね")
    return true
  }
}
