package me.ankokunsan.entityPose

import kotlin.math.round
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityCopyClick.Companion.selection
import me.ankokunsan.entityPose.commands.EntityCopy
import me.ankokunsan.entityPose.commands.EntityPaste
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.ExperienceOrb
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.EulerAngle

class EntityCommands : CommandExecutor, TabCompleter {
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
    if (args.isEmpty()) {
      player.sendMessage("§6---[EntityPose]§bコマンド、操作一覧§6---")
      player.sendMessage("§l/ep stick/st  §rエンティティ棒を手に入れる")
      player.sendMessage("エンティティ棒  §rデバック棒に類似")
      player.sendMessage("§l/ep kakudo/ka (0.5~90.0)  §rｴﾝﾃｨﾃｨの角度の刻みを変更(数字なしでGUI)")
      player.sendMessage("§l/ep zahyo/za (0.01~2.0)  §rｴﾝﾃｨﾃｨの一回あたりに動く座標の大きさを変更(数字なしでGUI)")
      player.sendMessage("/ep kaはｵﾌﾊﾝﾄ持ち替えﾞ、+しゃがみで/ep zaのGUIを開ける")
      player.sendMessage("§l/ep wand/wa  §rEntity Copy Wandを手に入れる")
      player.sendMessage("§lEntity Copy Wand  §rWEのｴﾝﾃｨﾃｨを選択するver(当たり判定難)")
      player.sendMessage("§l/ep clear/cl   §r範囲選択解除 pos1,2も解除(ｵﾌﾊﾝﾄﾞ持ち替えでも可)")
      player.sendMessage("§l/ep copy/co  §r範囲選択したｴﾝﾃｨﾃｨをコピー")
      player.sendMessage("§l/ep paste/pa §rコピーしたｴﾝﾃｨﾃｨをペースト")
      player.sendMessage("§l/ep cut/cu  §r範囲選択したｴﾝﾃｨﾃｨを削除")
      player.sendMessage("§l/ep info/in  §rｴﾝﾃｨﾃｨの情報をチャット欄に表示")
      player.sendMessage("§l/ep infoset/ins  §rｴﾝﾃｨﾃｨの情報を変更するGUIを開く(範囲選択で同時設定可)")
      player.sendMessage("/ep insはエンティティ棒を捨てても開ける(+しゃがみで捨てられる)")
      player.sendMessage("§l/ep scale/sc (0.3~3.0)  §rｴﾝﾃｨﾃｨの大きさ変更(範囲選択で同時設定可)")
      player.sendMessage("範囲選択で[全体],[X,Y,Z座標]を同時に動かせる")
      player.sendMessage("§b-----------------おまけ-----------------")
      player.sendMessage("§l/ep hojo/ho on/off §r空中作業のときに足場を出すか否か §c※本当に周りにブロックがない時だけにしてね")
      return true
    }
    when (args[0].lowercase()) {
      "stick",
      "st" -> boucommand(player)
      "wand",
      "wa" -> entityWand(player)
      "info",
      "in" -> entityinfo(player)
      "infoset",
      "ins" -> entityinfoset(player)
      "scale",
      "sc" -> entityScale(player, args)
      "kakudo",
      "ka" -> kakudoCommand(player, args)
      "zahyo",
      "za" -> zahyoCommand(player, args)
      "copy",
      "co" -> return EntityCopy().onCommand(sender, command, label, args)
      "paste",
      "pa" -> return EntityPaste().onCommand(sender, command, label, args)
      "cut",
      "cu" -> entityCut(player)
      "clear",
      "cl" -> entityclear(player)
      "hojo",
      "ho" -> entityHojo(player, args)
      else -> player.sendMessage("§6[EntityPose] §c不明なコマンドです")
    }
    return true
  }

  private fun boucommand(player: Player) {
    player.inventory.addItem(Bou.create())
    player.sendMessage("§6[EntityPose] §aエンティティ棒を手に入れました!")
  }

  private fun entityWand(player: Player) {
    player.inventory.addItem(CopyWand.create1())
    player.sendMessage("§6[EntityPose] §aEntity Copy Wandを手に入れました!")
  }

  private fun entityinfo(player: Player) {
    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.1) {
          it != player
        }
    val target = result?.hitEntity
    if (target == null) {
      player.sendMessage("§6[EntityPose] §c視線の先にエンティティがいません")
      return
    }
    if (target is Player) {
      player.sendMessage("§6[EntityPose] §cプレイヤーの情報を見たり、いじろうとしないでね")
      return
    }
    if (target is LivingEntity && target.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です")
      return
    }
    val loc = target.location
    val yaw = (loc.yaw % 360 + 360) % 360
    val invincible =
        if (target.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE))
            "§aON"
        else "§cOFF"
    val arrangelock =
        if (target.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE))
            "§aON"
        else "§cOFF"
    val scale = (target as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0

    if (target is ArmorStand) {
      val head = target.headPose
      val body = target.bodyPose
      val leftArm = target.leftArmPose
      val rightArm = target.rightArmPose
      val leftLeg = target.leftLegPose
      val rightLeg = target.rightLegPose
      val gravity = if (target.hasGravity()) "§aON" else "§cOFF"
      val basePlate = if (target.hasBasePlate()) "§aON" else "§cOFF"
      val invisible = if (target.isInvisible) "§aON" else "§cOFF"
      val itemlock =
          if (target.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE))
              "§aON"
          else "§cOFF"

      player.sendMessage("§6---[EntityPose]§bArmorStandの情報§6---")
      player.sendMessage("頭: §e${formatDeg1(head)}")
      player.sendMessage("上半身: §e${formatDeg1(body)}")
      player.sendMessage("左腕: §e${formatDeg1(leftArm)}")
      player.sendMessage("右腕: §e${formatDeg1(rightArm)}")
      player.sendMessage("左足: §e${formatDeg1(leftLeg)}")
      player.sendMessage("右足: §e${formatDeg1(rightLeg)}")
      player.sendMessage("全体の向き: §e${String.format("%.1f", yaw)}°")
      player.sendMessage("座標: §eX:${formatLoc(loc.x)} Y:${formatLoc(loc.y)} Z:${formatLoc(loc.z)}")
      player.sendMessage("ダメージ無効: $invincible")
      player.sendMessage("重力: $gravity")
      player.sendMessage("底のプレート: $basePlate")
      player.sendMessage("透明: $invisible")
      player.sendMessage("スケール: $scale")
      player.sendMessage("アイテムのロック: $itemlock")
      player.sendMessage("アレンジのロック: $arrangelock")
    } else {
      val pitch = loc.pitch
      player.sendMessage("§6---[EntityPose]§b${target.type.name} の情報§6---")
      player.sendMessage("全体の向き: §e${String.format("%.1f", yaw)}°")
      player.sendMessage("頭の向き: §e${String.format("%.1f", pitch)}°")
      player.sendMessage("座標: §eX:${formatLoc(loc.x)} Y:${formatLoc(loc.y)} Z:${formatLoc(loc.z)}")
      player.sendMessage("ダメージ無効: $invincible")
      player.sendMessage("スケール: $scale")
      player.sendMessage("アレンジのロック: $arrangelock")
    }
    return
  }

  private fun entityinfoset(player: Player) {
    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.1) {
          it != player
        }
    val target = result?.hitEntity
    if (target == null) {
      player.sendMessage("§6[EntityPose] §c視線の先にエンティティがいません")
      return
    }
    if (target is Player) {
      player.sendMessage("§6[EntityPose] §cプレイヤーの情報を見たり、いじろうとしないでね")
      return
    }
    if (target is LivingEntity && target.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です")
      return
    }
    val selected = activeselection[player.uniqueId]
    if (selected != null && selected.contains(target)) {
      val targets = selected.filter { it.isValid }
      ChooseGUi.openAllSettingGUI(player, targets)
    } else {
      ChooseGUi.openSettingGUI(player, target)
      return
    }
  }

  private fun entityScale(player: Player, args: Array<out String>) {
    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.1) {
          it != player && it !is ExperienceOrb
        }
    val target = result?.hitEntity
    if (target == null) {
      player.sendMessage("§6[EntityPose] §c視線の先にエンティティがいません")
      return
    }
    if (target is Player) {
      player.sendMessage("§6[EntityPose] §cプレイヤーをいじろうとしないでね")
      return
    }
    val livingEntity = target as? LivingEntity ?: return
    if (livingEntity.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です")
      return
    }
    if (args.size < 2) {
      player.sendMessage("§6[EntityPose] §c数字を入力してください")
      return
    }
    val scale = args[1].toDoubleOrNull()
    if (scale == null) {
      player.sendMessage("§6[EntityPose] §c数字を入力してください")
      return
    }
    val limitedScale = scale.coerceIn(0.3, 3.0)
    val roundedScale = round(limitedScale * 10) / 10.0
    val selected = activeselection[player.uniqueId]
    if (selected != null && selected.contains(target)) {
      val targets = selected.filter { it.isValid }
      targets.forEach { entity ->
        (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.let { attribute ->
          attribute.baseValue = roundedScale
        }
      }
      player.sendMessage("§6[EntityPose] §a範囲選択されているエンティティのスケールを $roundedScale に設定しました")
    } else {
      val attribute = livingEntity.getAttribute(Attribute.SCALE)
      if (attribute != null) {
        attribute.baseValue = roundedScale
        player.sendMessage("§6[EntityPose] §a視線の先にあるエンティティのスケールを $roundedScale に設定しました")
      }
    }
  }

  private fun kakudoCommand(player: Player, args: Array<out String>) {
    if (args.size == 1) {
      ChooseGUi.openKakudoGUI(player)
      player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
      return
    }
    val value = args[1].toDoubleOrNull()
    if (value != null) {
      val limitedValue = value.coerceIn(0.5, 90.0)
      EntityClick.currentStep[player.uniqueId] = limitedValue
      player.sendMessage("§6[EntityPose] §aエンティティの角度の刻みを${limitedValue}度に設定しました")
    } else {
      player.sendMessage("§6[EntityPose] §c有効な数字を入力するか、/epkakudoとだけ打ってGUIを開いてください")
    }
  }

  private fun zahyoCommand(player: Player, args: Array<out String>) {
    if (args.size == 1) {
      ChooseGUi.openZahyoGUI(player)
      player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
      return
    }
    val value1 = args[1].toDoubleOrNull()
    if (value1 != null) {
      val limitedValue1 = value1.coerceIn(0.01, 2.0)
      EntityClick.currentZah[player.uniqueId] = limitedValue1
      player.sendMessage("§6[EntityPose] §aエンティティの一回あたりに動く座標の大きさを${limitedValue1}マスに設定しました")
    } else {
      player.sendMessage("§6[EntityPose] §c有効な数字を入力するか、/epzahyoとだけ打ってGUIを開いてください")
    }
  }

  private fun entityCut(player: Player) {
    val uuid = player.uniqueId
    val targets = activeselection[uuid]?.filter { it.isValid }

    if (targets == null) {
      player.sendMessage("§6[EntityPose] §c範囲選択されているエンティティがいません")
      return
    }
    targets.forEach { entity -> if (entity.isValid) entity.remove() }
    activeselection.remove(uuid)
    selection.remove(uuid)
    stopHighlight(uuid)
    player.sendMessage("§6[EntityPose] §f範囲内の${targets.size}体を削除しました")
  }

  private fun entityclear(player: Player) {
    val uuid = player.uniqueId
    if (selection.contains(uuid)) {
      stopHighlight(uuid)
      activeselection.remove(uuid)
      selection.remove(uuid)
      player.sendMessage("§6[EntityPose] §e範囲選択をリセットしました")
    } else {
      player.sendMessage("§6[EntityPose] §c範囲選択されているエンティティがいません")
      return
    }
  }

  private fun entityHojo(player: Player, args: Array<out String>) {
    if (args.size == 1) {
      player.sendMessage("§6[EntityPose] §c/ehojo onまたはoff と入力してください")
      return
    }
    when (args[1].lowercase()) {
      "on" -> {
        AirBlock.setStatus(player, true)
        player.sendMessage("§6[EntityPose] §b足場自動生成を§a【ON】§bにしました")
      }

      "off" -> {
        AirBlock.setStatus(player, false)
        player.sendMessage("§6[EntityPose] §b足場自動生成を§c【OFF】§bにしました")
      }

      else -> {
        player.sendMessage("§6[EntityPose] §conまたはoff を入力してください")
      }
    }
  }

  private fun formatLoc(value: Double): String {
    return String.format("%.3f", value)
  }

  private fun formatDeg1(angle: EulerAngle): String {
    val rawx = Math.toDegrees(angle.x)
    val rawy = Math.toDegrees(angle.y)
    val rawz = Math.toDegrees(angle.z)
    val x = (rawx % 360 + 360) % 360
    val y = (rawy % 360 + 360) % 360
    val z = (rawz % 360 + 360) % 360
    // 「X:」などを消して 「0, 0, 0」 形式にする
    return String.format("%.1f,%.1f,%.1f", x, y, z)
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>
  ): MutableList<String> {
    val completions = mutableListOf<String>()

    if (args.size == 1) {
      val list =
          listOf(
              "stick",
              "wand",
              "info",
              "infoset",
              "scale",
              "kakudo",
              "zahyo",
              "copy",
              "paste",
              "cut",
              "clear",
              "hojo")
      completions.addAll(list.filter { it.startsWith(args[0], ignoreCase = true) })
      return completions
    }
    if (args.size == 2) {
      val sub = args[0].lowercase()
      val list2 =
          when (sub) {
            "hojo",
            "h" -> listOf("on", "off")
            else -> emptyList()
          }
      completions.addAll(list2.filter { it.startsWith(args[1], ignoreCase = true) })
      return completions
    }
    return mutableListOf()
  }
}
