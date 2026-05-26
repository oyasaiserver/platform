package me.ankokunsan.entityPose.commands

import me.ankokunsan.entityPose.EntityCopyClick.Companion.clipboard
import me.ankokunsan.entityPose.EntityPose
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Ageable
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Cat
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Parrot
import org.bukkit.entity.Player
import org.bukkit.entity.Rabbit
import org.bukkit.entity.Sittable
import org.bukkit.entity.Tameable
import org.bukkit.entity.Wolf
import org.bukkit.persistence.PersistentDataType

class EntityPaste : CommandExecutor {

  private fun applyVariant(entity: LivingEntity, variantStr: String?) {
    if (variantStr == null) return
    when (entity) {
      is Wolf -> {
        val key = NamespacedKey.fromString(variantStr)
        if (key != null) {
          entity.variant = Registry.WOLF_VARIANT.get(key) ?: entity.variant
        }
      }
      is Cat -> {
        val key = NamespacedKey.fromString(variantStr)
        if (key != null) {
          entity.catType = Registry.CAT_VARIANT.get(key) ?: entity.catType
        }
      }
      is Rabbit -> {
        try {
          entity.rabbitType = Rabbit.Type.valueOf(variantStr)
        } catch (_: Exception) {}
      }
      is Parrot -> {
        try {
          entity.variant = Parrot.Variant.valueOf(variantStr)
        } catch (_: Exception) {}
      }
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val player = sender as Player
    val uuid = player.uniqueId
    val snapshot1 = clipboard[uuid]
    if (snapshot1 == null) {
      player.sendMessage("§6[EntityPose] §cクリップボードが空です。先にコピーしてください")
      return true
    }
    player.sendMessage("§6[EntityPose] §a${snapshot1.size}体のエンティティを貼り付けます")
    val loc = player.location.block.location
    val world = player.world
    snapshot1.forEach { data ->
      val spawnLoc = loc.clone().add(data.offset)

      spawnLoc.yaw = data.yaw
      spawnLoc.pitch = data.pitch

      world.spawnEntity(spawnLoc, data.type).apply {
        setGravity(data.hasGravity)
        val container = this.persistentDataContainer

        if (this is LivingEntity) {
          setAI(false)
          isSilent = true
          this.getAttribute(Attribute.SCALE)?.baseValue = data.scale
          if (data.hanten) {
            customName = "Dinnerbone"
            isCustomNameVisible = true
            val board = Bukkit.getScoreboardManager()!!.mainScoreboard
            val team = board.getTeam("animal_things_hide_name")
            team?.addEntry(this.uniqueId.toString())
          }
          if (data.isInvincible) {
            container.set(EntityPose.INVINCIBLE, PersistentDataType.BYTE, 1.toByte())
          }
          if (data.isArrangeLocked) {
            container.set(EntityPose.ARRANGELOCK, PersistentDataType.BYTE, 1.toByte())
          }
          if (data.isItemLocked) {
            container.set(EntityPose.ITEMLOCK, PersistentDataType.BYTE, 1.toByte())
          }

          data.equipment.forEach { (slot, item) -> this.equipment?.setItem(slot, item) }
          applyVariant(this, data.variant)
          if (this is Ageable) {
            if (data.isMini) setBaby() else setAdult()
          }
          if (this is Sittable) {
            this.isSitting = data.isSitting
          }

          if (this is ArmorStand) {
            setBasePlate(data.hasBasePlate)
            isInvisible = data.isInvisible
            isSmall = data.isSmall
            setArms(data.hasArms)

            data.headPose?.let { headPose = it }
            data.bodyPose?.let { bodyPose = it }
            data.leftArmPose?.let { leftArmPose = it }
            data.rightArmPose?.let { rightArmPose = it }
            data.leftLegPose?.let { leftLegPose = it }
            data.rightLegPose?.let { rightLegPose = it }
          }
          if (this is Tameable) {
            isTamed = data.isTamed
          }
        }
      }
    }
    player.sendMessage("§6[EntityPose] §a貼り付けが完了しました！")
    return true
  }
}
