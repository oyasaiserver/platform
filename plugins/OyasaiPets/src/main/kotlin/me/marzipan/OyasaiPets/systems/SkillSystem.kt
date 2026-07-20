@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** ペットのスキルシステムを管理 咆哮、突進、ホバリング/水面走行などのスキル発動ロジック */
class SkillSystem {

  // スキルクールダウン管理
  private val skillCooldowns = mutableMapOf<UUID, Long>()

  private var dashCallback: ((Player, Long) -> Unit)? = null

  fun setDashCallback(callback: (Player, Long) -> Unit) {
    dashCallback = callback
  }

  /**
   * スキル発動を試みる
   *
   * @return スキルが発動された場合true
   */
  fun tryActivateSkill(player: Player, entity: LivingEntity): Boolean {
    val skill = entity.skillType
    if (skill == 0) return false

    // スキル3（特殊）はトグル式なので別処理
    if (skill == 3) {
      return handleSpecialSkill(player, entity)
    }

    // クールダウンチェック
    val now = System.currentTimeMillis()
    val lastUsed = skillCooldowns[player.uniqueId] ?: 0L
    if (now - lastUsed < BigWolfConfig.SKILL_COOLDOWN_MS) {
      val remain = "%.1f".format((BigWolfConfig.SKILL_COOLDOWN_MS - (now - lastUsed)) / 1000.0)
      player.sendActionBar(Component.text("スキル準備中... 残り $remain 秒", RED))
      return false
    }

    skillCooldowns[player.uniqueId] = now

    when (skill) {
      1 -> activateRoarSkill(player, entity)
      2 -> activateDashSkill(player, entity)
    }
    return true
  }

  /** 特殊スキル（ホバリング/水面走行）のトグル処理 */
  private fun handleSpecialSkill(player: Player, entity: LivingEntity): Boolean {
    val spec = PetRegistry.get(entity.type)

    // 飛行または水生ならトグル式
    if (spec.category == PetCategory.FLYING || spec.category == PetCategory.WATER) {
      val newState = !entity.isHovering
      entity.isHovering = newState
      val status = if (newState) "ON" else "OFF"
      val color = if (newState) GREEN else RED

      val skillName = if (spec.category == PetCategory.FLYING) "ホバリング" else "水面走行"
      player.sendActionBar(Component.text("$skillName: $status", color))
      entity.world.playSound(entity.location, Sound.UI_BUTTON_CLICK, 1f, 2f)
      return true
    }
    return false
  }

  /** 咆哮スキルを発動 */
  private fun activateRoarSkill(player: Player, entity: LivingEntity) {
    // 音量を半分に
    entity.world.playSound(entity.location, Sound.ENTITY_ENDER_DRAGON_GROWL, 0.75f, 0.8f)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.25f, 1.2f)

    entity.world.spawnParticle(Particle.EXPLOSION_EMITTER, entity.location.add(0.0, 1.0, 0.0), 1)
    entity.getNearbyEntities(8.0, 4.0, 8.0).forEach { target ->
      if (
          target is LivingEntity &&
              target != player &&
              target != entity &&
              target !in entity.passengers
      ) {
        val vec =
            target.location
                .toVector()
                .subtract(entity.location.toVector())
                .normalize()
                .multiply(1.5)
                .setY(0.8)
        target.velocity = vec
        target.damage(2.0, entity)
      }
    }
    player.sendActionBar(Component.text(">>> 咆哮スキル発動！! <<<", GOLD))
  }

  /** 突進スキルを発動 */
  private fun activateDashSkill(player: Player, entity: LivingEntity) {
    val direction = player.location.direction.clone().normalize()
    direction.multiply(4.0).setY(0.6)
    entity.velocity = direction
    val endTime = System.currentTimeMillis() + 800
    dashCallback?.invoke(player, endTime)
    entity.world.playSound(entity.location, Sound.ENTITY_HORSE_JUMP, 2.0f, 0.5f)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 1.0f, 2.0f)
    entity.world.spawnParticle(Particle.CLOUD, entity.location, 30, 0.5, 0.5, 0.5, 0.2)
    player.sendActionBar(Component.text(">>> 突進！ <<<", AQUA))
  }

  /** プレイヤー切断時のクリーンアップ */
  fun cleanup(playerId: UUID) {
    skillCooldowns.remove(playerId)
  }
}
