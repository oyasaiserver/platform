package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.EntityPose
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Tameable
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.PotionMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.EulerAngle

class Entityinfo : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    if (sender !is Player) return true
    if (!sender.hasPermission("entitypose_arrange")) {
      sender.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    val result =
        sender.world.rayTraceEntities(sender.eyeLocation, sender.location.direction, 3.0, 0.5) {
          it != sender
        }
    val target =
        result?.hitEntity ?: return true.also { sender.sendMessage("§6[EntityPose] §cエンティティがいません") }
    if (target is LivingEntity && target.hasAI()) {
      sender.sendMessage("§6[EntityPose] §cこのモブはAIが有効です。")
      return true
    }
    if (args.isNotEmpty() && args[0].equals("set", ignoreCase = true)) {
      openSettingGUI(sender, target)
      return true
    } else {
      val loc = target.location
      val yaw = (loc.yaw % 360 + 360) % 360
      val invincible = if (target.scoreboardTags.contains("custom_invincible")) "§aON" else "§cOFF"

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

        sender.sendMessage("§6---[EntityPose]§bArmorStandの情報§6---")
        sender.sendMessage("頭: §e${formatDeg1(head)}")
        sender.sendMessage("上半身: §e${formatDeg1(body)}")
        sender.sendMessage("左腕: §e${formatDeg1(leftArm)}")
        sender.sendMessage("右腕: §e${formatDeg1(rightArm)}")
        sender.sendMessage("左足: §e${formatDeg1(leftLeg)}")
        sender.sendMessage("右足: §e${formatDeg1(rightLeg)}")
        sender.sendMessage("全体の向き: §e${String.format("%.1f", yaw)}°")
        sender.sendMessage(
            "座標: §eX:${formatLoc(loc.x)} Y:${formatLoc(loc.y)} Z:${formatLoc(loc.z)}")
        sender.sendMessage("ダメージ無効: $invincible")
        sender.sendMessage("重力: $gravity")
        sender.sendMessage("底のプレート: $basePlate")
        sender.sendMessage("透明: $invisible")
      } else {
        val pitch = loc.pitch
        sender.sendMessage("§6---[EntityPose]§b${target.type.name} の情報§6---")
        sender.sendMessage("全体の向き: §e${String.format("%.1f", yaw)}°")
        sender.sendMessage("頭の向き: §e${String.format("%.1f", pitch)}°")
        sender.sendMessage(
            "座標: §eX:${formatLoc(loc.x)} Y:${formatLoc(loc.y)} Z:${formatLoc(loc.z)}")
        sender.sendMessage("ダメージ無効: $invincible")
      }
      return true
    }
  }

  fun openSettingGUI(player: Player, target: Entity) {
    val invs = Bukkit.createInventory(null, 9, "§3エンティティの設定変更")

    val damageItem =
        ItemStack(Material.DIAMOND_SWORD).apply {
          val meta = itemMeta ?: return@apply
          val status = if (target.scoreboardTags.contains("custom_invincible")) "§aON" else "§cOFF"
          meta.setDisplayName("§fダメージ無効: $status")
          itemMeta = meta
        }
    val scaleItem1 =
        ItemStack(Material.POTION).apply { // LEGACYを消す
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.YELLOW
          val scale = (target as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0
          meta.setDisplayName("§fサイズ設定: $scale")
          itemMeta = meta
        }
    val scaleItem2 =
        ItemStack(Material.POTION).apply {
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.YELLOW
          val scale = (target as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0
          meta.setDisplayName("§fサイズ設定: $scale")
          itemMeta = meta
        }
    val lockitem =
        ItemStack(Material.TRIAL_KEY).apply {
          val meta = itemMeta ?: return@apply
          val lockarrange = if (target.scoreboardTags.contains("entity_locked")) "§aON" else "§cOFF"
          meta.setDisplayName("§fアレンジのロック: $lockarrange")
          itemMeta = meta
        }
    if (target is Tameable) {
      val tameItem =
          ItemStack(Material.BONE).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.isTamed) "§aON" else "§cOFF"
            meta.setDisplayName("§f懐き状態: $status")
            itemMeta = meta
          }
      invs.setItem(1, tameItem)
    } else if (target is ArmorStand) {
      val baseItem =
          ItemStack(Material.SMOOTH_STONE_SLAB).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.hasBasePlate()) "§aON" else "§cOFF"
            meta.setDisplayName("§f底のプレート表示: $status")
            itemMeta = meta
          }
      val gravityItem =
          ItemStack(Material.ANVIL).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.hasGravity()) "§aON" else "§cOFF"
            meta.setDisplayName("§f重力: $status")
            itemMeta = meta
          }
      val invisibleItem =
          ItemStack(Material.POTION).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.isInvisible) "§aON" else "§cOFF"
            meta.setDisplayName("§f透明: $status")
            itemMeta = meta
          }
      invs.setItem(1, gravityItem)
      invs.setItem(2, baseItem)
      invs.setItem(3, invisibleItem)
    }
    invs.setItem(0, damageItem)
    invs.setItem(6, scaleItem1)
    invs.setItem(7, scaleItem2)
    invs.setItem(8, lockitem)

    val filler = getFiller()
    for (i in 0 until invs.size) {
      if (invs.getItem(i) == null) invs.setItem(i, filler)
    }
    player.openInventory(invs)
  }

  private fun getFiller(): ItemStack {
    return ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName(" ")
            persistentDataContainer.set(EntityPose.GUI_KEY, PersistentDataType.STRING, "FILLER")
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
  ): List<String> {
    if (args.size == 1) {
      return listOf("set").filter { it.startsWith(args[0], ignoreCase = true) }
    }
    return emptyList()
  }
}
