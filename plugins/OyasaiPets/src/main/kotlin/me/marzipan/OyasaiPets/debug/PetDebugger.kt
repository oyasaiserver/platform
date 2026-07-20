@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** パフォーマンスデバッグ用の集計機能。 有効化中のプレイヤーに対してのみ動作し、無効時はほぼゼロコスト。 */
object PetDebugger {
  private val debugTargets = ConcurrentHashMap.newKeySet<UUID>()

  // ControlTask 統計（UUID ごと）
  private data class ControlStats(
      var tickCount: Int = 0,
      var totalNs: Long = 0L,
      var maxNs: Long = 0L,
      var jumpCount: Int = 0,
      var statWrites: Int = 0,
  )

  private val controlStats = ConcurrentHashMap<UUID, ControlStats>()

  fun disable(playerUuid: UUID) {
    debugTargets.remove(playerUuid)
    controlStats.remove(playerUuid)
  }

  fun isEnabled(playerUuid: UUID): Boolean = playerUuid in debugTargets

  fun hasAnyEnabled(): Boolean = debugTargets.isNotEmpty()

  fun clear() {
    debugTargets.clear()
    controlStats.clear()
  }

  /**
   * startControlTask の毎 tick 末尾から呼ぶ。
   *
   * @param tickNs このtickの処理時間 (nanoseconds)
   * @param jumpOccurred このtickにジャンプが発生したか
   * @param statWriteOccurred このtickにPDC書き込みが発生したか
   */
  fun recordControlTick(
      playerUuid: UUID,
      tickNs: Long,
      jumpOccurred: Boolean,
      statWriteOccurred: Boolean,
  ) {
    val stats = controlStats[playerUuid] ?: return
    stats.tickCount++
    stats.totalNs += tickNs
    if (tickNs > stats.maxNs) stats.maxNs = tickNs
    if (jumpOccurred) stats.jumpCount++
    if (statWriteOccurred) stats.statWrites++
  }

  /** 20 tick ごとに 1 秒サマリーをチャットへ送信してリセット。 */
  fun flushControlSummary(player: Player, food: Int, speed: Double) {
    val uuid = player.uniqueId
    val stats = controlStats[uuid] ?: return
    if (stats.tickCount == 0) return
    val avgMs = stats.totalNs / stats.tickCount / 1_000_000.0
    val maxMs = stats.maxNs / 1_000_000.0
    player.sendMessage(
        Component.text(
            "[PetDebug/Ctrl] ticks=${stats.tickCount} avg=${String.format("%.3f", avgMs)}ms " +
                "max=${String.format("%.3f", maxMs)}ms | " +
                "food=$food speed=${String.format("%.2f", speed)} | " +
                "jumps=${stats.jumpCount} pdcWrites=${stats.statWrites}",
            net.kyori.adventure.text.format.NamedTextColor.AQUA,
        )
    )
    // リセット
    controlStats[uuid] = ControlStats()
  }

  /** startControlTask の毎 tick でアクションバーを更新。 */
  fun updateActionBar(
      player: Player,
      tickNum: Int,
      food: Int,
      speed: Double,
      cachedSkillType: Int,
      jumpOccurred: Boolean,
      tickNs: Long,
  ) {
    val jumpMark = if (jumpOccurred) " jump↑" else ""
    val ms = tickNs / 1_000_000.0
    player.sendActionBar(
        Component.text(
            "[Tick #$tickNum] food=$food spd=${String.format("%.2f", speed)} " +
                "skl=$cachedSkillType${jumpMark} | ${String.format("%.3f", ms)}ms",
            net.kyori.adventure.text.format.NamedTextColor.AQUA,
        )
    )
  }

  /** startGlobalAITask の実行結果を全デバッグ有効プレイヤーへ送信。 */
  fun sendAiTaskResult(petsTotal: Int, atypical: Int, acted: Int, elapsedMs: Double) {
    if (debugTargets.isEmpty()) return
    val msg =
        Component.text(
            "[PetDebug/AI] pets=$petsTotal atypical=$atypical acted=$acted time=${String.format("%.3f", elapsedMs)}ms",
            net.kyori.adventure.text.format.NamedTextColor.YELLOW,
        )
    for (uuid in debugTargets) {
      Bukkit.getPlayer(uuid)?.sendMessage(msg)
    }
  }
}

object PetSynchronizer {
  @Suppress("UnstableApiUsage") private val logger = Bukkit.getLogger()

  private fun snapshotFromEntity(entity: LivingEntity): PetSnapshot? {
    val petId = entity.petId ?: return null
    val ownerUuid =
        entity.ownerId?.let {
          runCatching { UUID.fromString(it) }
              .getOrElse { error ->
                logger.warning("[OyasaiPets] Invalid owner UUID on entity: ${error.message}")
                null
              }
        } ?: return null
    val stats =
        PetStats(
            distance = entity.statDistance,
            jumps = entity.statJumps,
            toys = entity.statToys,
            brushes = entity.statBrushes,
            treats = entity.statTreats,
        )
    val location =
        LocationData(
            world = entity.location.world?.name ?: "world",
            x = entity.location.x,
            y = entity.location.y,
            z = entity.location.z,
        )
    return PetSnapshot(
        petId = petId,
        ownerUuid = ownerUuid,
        type = entity.type,
        customName = entity.customName()?.let { LEGACY_AMP.serialize(it) },
        variant = VariantHandler.getVariantNameFromEntity(entity),
        status = PetStatus.ALIVE,
        lastLocation = location,
        stats = stats,
        skillType = entity.skillType,
        skillUnlockedLevel = entity.skillUnlockedLevel,
        foodLevel = entity.foodLevel,
        particleUnlocked = entity.particleUnlocked,
        breedCount = entity.breedCount,
        originalOwnerId = entity.originalOwnerId,
    )
  }

  fun syncEntityToJson(entity: LivingEntity) {
    val snapshot = snapshotFromEntity(entity) ?: return
    PetDataManager.updateFromSnapshot(snapshot.ownerUuid, snapshot)
  }

  fun syncDataToEntity(ownerUuid: UUID, petData: PetData) {
    val entity =
        ActivePetRegistry.findByPetId(petData.petId)?.takeIf { it.ownerId == ownerUuid.toString() }
            ?: return
    petData.customName?.let { rawName ->
      // デフォルト名に古い番号が埋め込まれている場合、正しいpetNumberで修正して保存
      val corrected = rawName.replace(Regex(""" #\d+$"""), " #${petData.petNumber}")
      if (corrected != rawName) {
        petData.customName = corrected
        PetDataManager.savePet(ownerUuid, petData)
      }
      entity.customName(LEGACY_AMP.deserialize(corrected))
      entity.isCustomNameVisible = true
    }
    entity.foodLevel = petData.foodLevel
    entity.skillType = petData.skillType
    entity.skillUnlockedLevel = petData.skillUnlockedLevel
    entity.statDistance = petData.stats.distance
    entity.statJumps = petData.stats.jumps
    entity.statToys = petData.stats.toys
    entity.statBrushes = petData.stats.brushes
    entity.statTreats = petData.stats.treats
    entity.particleUnlocked = petData.particleUnlocked
    petData.variant?.let { VariantHandler.applyVariant(entity, it) }
  }
}
