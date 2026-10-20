package icu.oyasai.games.dice

import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Location
import org.bukkit.Sound
import org.bukkit.entity.Display
import org.bukkit.entity.Player
import org.bukkit.entity.TextDisplay
import org.bukkit.plugin.Plugin
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.AxisAngle4f
import org.joml.Vector3f

class DiceGroup(
    val plugin: Plugin,
    val diceManager: DiceManager,
    val ownerUuid: UUID,
    val mode: DiceMode,
    val origin: Location,
    val baseVelocity: Vector,
    val isBroadcast: Boolean = true,
) {
  companion object {
    /** 投擲完了（出目確定）後の自動回収待機時間（15秒 = 300 tick） */
    const val AUTO_COLLECT_DELAY_TICKS = 15 * 20L

    /** 投擲開始からの全体フェールセーフ回収時間（25秒 = 500 tick） */
    const val GLOBAL_FAILSAFE_DELAY_TICKS = 25 * 20L

    /** 周囲プレイヤーへのチャット通知最大半径（ブロック） */
    const val BROADCAST_RADIUS = 30.0

    /** 手動回収（右クリック）を許可するデフォルト距離の二乗（2.5ブロック = 6.25） */
    const val DEFAULT_COLLECT_RADIUS_SQ = 6.25

    /** 複数ダイス投擲時の散布幅基準（ブロック） */
    const val SPREAD_WIDTH_BASE = 0.55

    /** ダイス個数増加に伴う散布幅加算係数 */
    const val SPREAD_WIDTH_FACTOR_PER_DICE = 0.12

    /** 複数ダイス投擲時の初速ばらつき係数 */
    const val SPREAD_VELOCITY_RATIO = 0.25

    /** 合計ホログラムのY軸オフセット（ダイス群の最上部からの高さ） */
    const val TOTAL_HOLO_Y_OFFSET = 1.25

    /** 回収時の誤爆防止クールダウンtick数 */
    const val COLLECT_COOLDOWN_TICKS = 20

    /** 回収後の誤設置防止時間（ミリ秒） */
    const val COLLECT_PREVENT_MS = 2000L
  }

  val dices = mutableListOf<DiceInstance>()
  private var totalHologramJava: TextDisplay? = null
  private var totalHologramBedrock: TextDisplay? = null
  private var autoCollectTask: BukkitTask? = null
  private var globalFailsafeTask: BukkitTask? = null
  private var isFinished = false
  private var isCollected = false

  fun start() {
    // 全体フェールセーフ（万が一チャンクアンロード等の異常があっても確実に回収を保証）
    globalFailsafeTask =
        plugin.server.scheduler.runTaskLater(
            plugin,
            Runnable { collect(null) },
            GLOBAL_FAILSAFE_DELAY_TICKS,
        )

    val count = mode.diceCount
    if (count > 1) {
      val rightDir = baseVelocity.clone().crossProduct(Vector(0, 1, 0)).normalize()
      if (rightDir.lengthSquared() < 0.01) {
        rightDir.setX(1.0)
      }

      for (i in 0 until count) {
        val spreadFactor = (i.toDouble() / (count - 1)) - 0.5
        val spreadWidth = SPREAD_WIDTH_BASE * (1.0 + (count - 2) * SPREAD_WIDTH_FACTOR_PER_DICE)
        val spreadOffset = rightDir.clone().multiply(spreadFactor * spreadWidth)
        val velocityOffset = rightDir.clone().multiply(spreadFactor * SPREAD_VELOCITY_RATIO)
        val jitter =
            Vector(
                (Math.random() - 0.5) * 0.05,
                (Math.random() - 0.5) * 0.03,
                (Math.random() - 0.5) * 0.05,
            )

        val loc = origin.clone().add(spreadOffset)
        val vel = baseVelocity.clone().add(velocityOffset).add(jitter)

        val dice = DiceInstance(plugin, ownerUuid, loc, vel, mode, i + 1, this::onDiceSettled)
        dices.add(dice)
        dice.spawnAndRoll()
      }
    } else {
      val dice =
          DiceInstance(
              plugin,
              ownerUuid,
              origin.clone(),
              baseVelocity.clone(),
              mode,
              1,
              this::onDiceSettled,
          )
      dices.add(dice)
      dice.spawnAndRoll()
    }
  }

  private fun onDiceSettled(dice: DiceInstance) {
    if (dices.all { it.isSettled }) {
      onAllSettled()
    }
  }

  private fun onAllSettled() {
    if (isFinished) return
    isFinished = true

    val player = plugin.server.getPlayer(ownerUuid)
    val playerName = player?.name ?: "プレイヤー"

    val prefix =
        if (isBroadcast) {
          Component.text("[おやさいサイコロ] ", NamedTextColor.GOLD, TextDecoration.BOLD)
        } else {
          Component.text("[おやさいサイコロ(非公開)] ", NamedTextColor.DARK_AQUA, TextDecoration.BOLD)
        }

    val message =
        if (mode.diceCount > 1) {
          val sum = dices.sumOf { it.resultEye }
          val formula = dices.joinToString(" + ") { it.resultEye.toString() }
          spawnTotalHologram(sum)
          prefix
              .append(Component.text(playerName, NamedTextColor.WHITE))
              .append(Component.text(" が${mode.displayName}を振って ", NamedTextColor.GRAY))
              .append(
                  Component.text(
                      "【 $formula = $sum 】",
                      NamedTextColor.YELLOW,
                      TextDecoration.BOLD,
                  )
              )
              .append(Component.text(" を出しました！", NamedTextColor.GRAY))
        } else {
          when (mode.maxEyes) {
            2 -> {
              val eye = dices[0].resultEye
              val label = if (eye == 1) "表 (1)" else "裏 (2)"
              prefix
                  .append(Component.text(playerName, NamedTextColor.WHITE))
                  .append(Component.text(" がコインを投げて ", NamedTextColor.GRAY))
                  .append(Component.text("【 $label 】", NamedTextColor.GOLD, TextDecoration.BOLD))
                  .append(Component.text(" が出ました！", NamedTextColor.GRAY))
            }
            6 -> {
              val eye = dices[0].resultEye
              prefix
                  .append(Component.text(playerName, NamedTextColor.WHITE))
                  .append(Component.text(" がサイコロを振って ", NamedTextColor.GRAY))
                  .append(Component.text("【 $eye 】", NamedTextColor.YELLOW, TextDecoration.BOLD))
                  .append(Component.text(" を出しました！", NamedTextColor.GRAY))
            }
            20 -> {
              val eye = dices[0].resultEye
              val (eyeText, eyeColor) =
                  when (eye) {
                    20 -> "20 (Critical!)" to NamedTextColor.GOLD
                    1 -> "1 (Fumble...)" to NamedTextColor.RED
                    else -> "$eye" to NamedTextColor.YELLOW
                  }
              prefix
                  .append(Component.text(playerName, NamedTextColor.WHITE))
                  .append(Component.text(" が20面ダイス(1D20)を振って ", NamedTextColor.GRAY))
                  .append(Component.text("【 $eyeText 】", eyeColor, TextDecoration.BOLD))
                  .append(Component.text(" を出しました！", NamedTextColor.GRAY))
            }
            else -> {
              val eye = dices[0].resultEye
              prefix
                  .append(Component.text(playerName, NamedTextColor.WHITE))
                  .append(Component.text(" が${mode.displayName}を振って ", NamedTextColor.GRAY))
                  .append(Component.text("【 $eye 】", NamedTextColor.YELLOW, TextDecoration.BOLD))
                  .append(Component.text(" を出しました！", NamedTextColor.GRAY))
            }
          }
        }

    sendMessage(player, message)

    // 投擲完了後の自動回収（フェールセーフ）
    autoCollectTask =
        plugin.server.scheduler.runTaskLater(
            plugin,
            Runnable {
              collect(null) // 自動回収
            },
            AUTO_COLLECT_DELAY_TICKS,
        )
  }

  private fun spawnTotalHologram(sum: Int) {
    if (dices.isEmpty()) return
    val world = dices[0].startLoc.world ?: return

    var avgX = 0.0
    var maxY = Double.NEGATIVE_INFINITY
    var avgZ = 0.0
    for (d in dices) {
      avgX += d.startLoc.x
      if (d.startLoc.y > maxY) maxY = d.startLoc.y
      avgZ += d.startLoc.z
    }
    avgX /= dices.size
    avgZ /= dices.size

    val midLoc = Location(world, avgX, maxY + TOTAL_HOLO_Y_OFFSET, avgZ)
    val formula = dices.joinToString(" + ") { it.resultEye.toString() }

    val textJava = DiceDisplayFormatter.formatTotalTextJava(sum, formula)
    val textBedrock = DiceDisplayFormatter.formatTotalTextBedrock(sum, formula)

    val holoJava =
        world.spawn(midLoc, TextDisplay::class.java) { entity ->
          configureTotalHologram(entity, textJava)
        }
    val holoBedrock =
        world.spawn(midLoc, TextDisplay::class.java) { entity ->
          configureTotalHologram(entity, textBedrock)
        }

    this.totalHologramJava = holoJava
    this.totalHologramBedrock = holoBedrock

    BedrockSupport.separateHologramVisibility(plugin, holoJava, holoBedrock)
  }

  private fun configureTotalHologram(entity: TextDisplay, text: Component) {
    entity.text(text)
    entity.billboard = Display.Billboard.CENTER
    entity.isSeeThrough = false
    entity.isShadowed = true
    entity.backgroundColor = org.bukkit.Color.fromARGB(180, 0, 0, 0)
    entity.isPersistent = false
    entity.transformation =
        Transformation(
            Vector3f(0f, 0f, 0f),
            AxisAngle4f(0f, 0f, 1f, 0f),
            Vector3f(1.1f, 1.1f, 1.1f),
            AxisAngle4f(0f, 0f, 1f, 0f),
        )
  }

  private fun sendMessage(sourcePlayer: Player?, message: Component) {
    if (!isBroadcast) {
      sourcePlayer?.sendMessage(message)
      return
    }
    val center = sourcePlayer?.location ?: origin
    val world = center.world ?: return

    val maxDistSq = BROADCAST_RADIUS * BROADCAST_RADIUS
    for (p in world.players) {
      if (p.location.distanceSquared(center) <= maxDistSq) {
        // 投げた本人、または他人のサイコロ結果のチャット受信を有効にしているプレイヤーにのみ送信
        if (p == sourcePlayer || diceManager.isChatReceiveEnabled(p)) {
          p.sendMessage(message)
        }
      }
    }
  }

  fun containsEntity(entityId: Int): Boolean {
    if (totalHologramJava?.entityId == entityId || totalHologramBedrock?.entityId == entityId)
        return true
    return dices.any { it.matchesEntity(entityId) }
  }

  fun isNear(targetLoc: Location, maxDistSq: Double = DEFAULT_COLLECT_RADIUS_SQ): Boolean {
    if (dices.isEmpty()) return false
    return dices.any { it.getDistanceSquared(targetLoc) <= maxDistSq }
  }

  fun updatePlayerVisibility(player: Player) {
    for (dice in dices) {
      dice.bedrockItem?.let { bItem ->
        if (!BedrockSupport.isBedrockPlayer(player)) {
          player.hideEntity(plugin, bItem)
        }
      }
      BedrockSupport.updatePlayerHologramVisibility(
          plugin,
          player,
          dice.textDisplayJava,
          dice.textDisplayBedrock,
      )
    }
    BedrockSupport.updatePlayerHologramVisibility(
        plugin,
        player,
        totalHologramJava,
        totalHologramBedrock,
    )
  }

  fun collect(collector: Player?): Boolean {
    if (isCollected) return false

    if (collector != null && collector.uniqueId != ownerUuid) {
      collector.sendMessage(Component.text("このサイコロは他のプレイヤーのものです。", NamedTextColor.RED))
      return false
    }

    isCollected = true

    globalFailsafeTask?.cancel()
    globalFailsafeTask = null
    autoCollectTask?.cancel()
    autoCollectTask = null

    // エンティティ消去
    dices.forEach { it.remove() }
    dices.clear()
    totalHologramJava?.remove()
    totalHologramJava = null
    totalHologramBedrock?.remove()
    totalHologramBedrock = null

    // アイテム返却
    val owner = plugin.server.getPlayer(ownerUuid)
    if (owner != null && owner.isOnline) {
      diceManager.returnDiceItem(owner, mode, isBroadcast)
      // 回収時の画面タップ連打による誤設置を防止するためクールダウンと設置遮断を設定
      DiceType.entries.forEach { owner.setCooldown(it.material, COLLECT_COOLDOWN_TICKS) }
      diceManager.chargeManager?.recordRecentAction(owner, COLLECT_PREVENT_MS)

      if (collector != null) {
        owner.playSound(owner.location, Sound.ENTITY_ITEM_PICKUP, 0.7f, 1.2f)
        owner.sendMessage(Component.text("サイコロを回収しました。", NamedTextColor.GREEN))
      } else {
        owner.sendMessage(Component.text("サイコロが手元に戻りました。", NamedTextColor.GRAY))
      }
    }

    diceManager.removeGroup(this)
    return true
  }

  fun forceCleanup() {
    isCollected = true
    globalFailsafeTask?.cancel()
    globalFailsafeTask = null
    autoCollectTask?.cancel()
    autoCollectTask = null
    dices.forEach { it.remove() }
    dices.clear()
    totalHologramJava?.remove()
    totalHologramJava = null
    totalHologramBedrock?.remove()
    totalHologramBedrock = null
  }
}
