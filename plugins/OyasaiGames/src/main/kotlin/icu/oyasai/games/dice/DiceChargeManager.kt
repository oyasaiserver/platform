package icu.oyasai.games.dice

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.math.min
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Location
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

class DiceChargeManager(
    private val plugin: Plugin,
    private val diceItem: DiceItem,
    private val diceManager: DiceManager,
) {
  companion object {
    /** フルチャージに必要な所要tick数（22tick = 約1.1秒） */
    const val MAX_CHARGE_TICKS = 22.0

    /** 最低投擲パワー比率 */
    const val MIN_CHARGE_RATIO = 0.15

    /** 投擲後のアイテムクールタイム（40tick = 2秒） */
    const val THROW_COOLDOWN_TICKS = 40

    /** 投擲直後のブロック誤設置防止期間（ミリ秒: 2.5秒） */
    const val BLOCK_PLACE_PREVENTION_MS = 2500L

    /** 統合版の画面タップ重複判定tick（4tick未満の連続タップは同一操作とみなす） */
    const val BEDROCK_TAP_DUPLICATE_TICKS = 4L

    /** Java版の長押し離脱検知idle tick（パケット途絶から投擲と判定するまでの猶予） */
    const val JAVA_RELEASE_IDLE_TICKS = 6L

    /** 慣性追跡の指数移動平均 過去値の重み */
    const val EMA_PREVIOUS_WEIGHT = 0.25

    /** 慣性追跡の指数移動平均 最新値の重み */
    const val EMA_CURRENT_WEIGHT = 0.75
  }

  private class ChargeSession(
      val playerUuid: UUID,
      var startTick: Long,
      var lastInteractTick: Long,
      val mode: DiceMode,
      val isBroadcast: Boolean,
      var lastLoc: Location? = null,
      var currentVelocity: Vector = Vector(0.0, 0.0, 0.0),
  )

  private val sessions = ConcurrentHashMap<UUID, ChargeSession>()
  private val recentThrowers = ConcurrentHashMap<UUID, Long>()
  private var tickerTask: BukkitTask? = null
  private var currentTick: Long = 0

  fun start() {
    tickerTask =
        object : BukkitRunnable() {
              override fun run() {
                currentTick++
                tickSessions()
                cleanRecentThrowers()
              }
            }
            .runTaskTimer(plugin, 1L, 1L)
  }

  fun isCharging(player: Player): Boolean {
    return sessions.containsKey(player.uniqueId)
  }

  fun isRecentThrower(player: Player): Boolean {
    val expiry = recentThrowers[player.uniqueId] ?: return false
    return System.currentTimeMillis() < expiry
  }

  fun recordRecentAction(player: Player, durationMs: Long = 2000L) {
    recentThrowers[player.uniqueId] = System.currentTimeMillis() + durationMs
  }

  private fun cleanRecentThrowers() {
    if (currentTick % 20L == 0L && recentThrowers.isNotEmpty()) {
      val now = System.currentTimeMillis()
      recentThrowers.entries.removeIf { it.value < now }
    }
  }

  fun onRightClick(player: Player, item: ItemStack) {
    if (player.hasCooldown(item.type)) {
      player.sendActionBar(Component.text("サイコロは少し時間をおいてから投げられます", NamedTextColor.RED))
      return
    }

    val mode = diceItem.getDiceMode(item)
    val isBroadcast = diceItem.isBroadcast(item)
    val existing = sessions[player.uniqueId]
    val isBedrock = BedrockSupport.isBedrockPlayer(player)

    if (existing == null) {
      // チャージ開始（現在のプレイヤー速度も初期値として取得）
      val initialVelocity = player.velocity.clone()
      if (player.isSprinting) {
        val sprintVector = player.location.direction.setY(0).normalize().multiply(0.28)
        initialVelocity.add(sprintVector)
      }
      sessions[player.uniqueId] =
          ChargeSession(
              player.uniqueId,
              currentTick,
              currentTick,
              mode,
              isBroadcast,
              player.location.clone(),
              initialVelocity,
          )
      playChargeTickSound(player, 0.0)
    } else {
      if (isBedrock) {
        val totalChargeTicks = currentTick - existing.startTick
        // 最初のタップ時のパケット重複（短時間）は同一タップとして無視
        if (totalChargeTicks < BEDROCK_TAP_DUPLICATE_TICKS) {
          existing.lastInteractTick = currentTick
          return
        }

        // 一定tick以上経過後のタップは意図的な2回目のタップ！その瞬間のパワーで投擲！
        val ratio = min(1.0, totalChargeTicks / MAX_CHARGE_TICKS).coerceAtLeast(MIN_CHARGE_RATIO)
        sessions.remove(player.uniqueId)

        val heldItem = player.inventory.itemInMainHand
        val diceToThrow = if (diceItem.isDice(heldItem)) heldItem else item
        val playerInertia = calculatePlayerInertia(player, existing.currentVelocity)
        executeThrow(player, diceToThrow, ratio, existing.mode, existing.isBroadcast, playerInertia)
      } else {
        // Java版: マウス長押しによる継続更新
        existing.lastInteractTick = currentTick
      }
    }
  }

  private fun tickSessions() {
    if (sessions.isEmpty()) return

    val iterator = sessions.entries.iterator()
    while (iterator.hasNext()) {
      val entry = iterator.next()
      val session = entry.value
      val player = plugin.server.getPlayer(session.playerUuid)

      if (player == null || !player.isOnline) {
        iterator.remove()
        continue
      }

      // 手持ちアイテムがサイコロかチェック
      val heldItem = player.inventory.itemInMainHand
      if (!diceItem.isDice(heldItem)) {
        // アイテムを持ち替えた場合はキャンセル
        iterator.remove()
        player.sendActionBar(Component.empty())
        continue
      }

      // 走っている・動いている慣性（移動ベクトル）を毎tick追跡
      val currentLoc = player.location
      val prevLoc = session.lastLoc
      if (prevLoc != null && prevLoc.world == currentLoc.world) {
        val delta = currentLoc.toVector().subtract(prevLoc.toVector())
        if (delta.lengthSquared() < 4.0) {
          // 指数移動平均で滑らかに慣性を更新（パケット遅延やコマ落ちのブレを吸収）
          session.currentVelocity =
              session.currentVelocity
                  .multiply(EMA_PREVIOUS_WEIGHT)
                  .add(delta.multiply(EMA_CURRENT_WEIGHT))
        }
      }
      session.lastLoc = currentLoc

      val isBedrock = BedrockSupport.isBedrockPlayer(player)
      val chargeTicks = currentTick - session.startTick
      val ratio = min(1.0, chargeTicks / MAX_CHARGE_TICKS)

      // アクションバーの描画
      displayActionBar(player, ratio, isBedrock)

      // チャージ音（3tickおき）
      if (chargeTicks % 3L == 0L && ratio < 1.0) {
        playChargeTickSound(player, ratio)
      }

      // リリース判定:
      val idleTicks = currentTick - session.lastInteractTick
      val shouldRelease =
          if (isBedrock) {
            // 統合版: 最大チャージに達したら自動で最高パワー投擲！
            chargeTicks >= MAX_CHARGE_TICKS
          } else {
            // Java版: 長押しを離した（一定tick以上パケット途絶）または最大チャージ到達
            idleTicks >= JAVA_RELEASE_IDLE_TICKS || chargeTicks >= (MAX_CHARGE_TICKS + 4)
          }

      if (shouldRelease) {
        iterator.remove()
        val finalRatio =
            if (chargeTicks >= MAX_CHARGE_TICKS) 1.0 else ratio.coerceAtLeast(MIN_CHARGE_RATIO)
        val playerInertia = calculatePlayerInertia(player, session.currentVelocity)
        executeThrow(player, heldItem, finalRatio, session.mode, session.isBroadcast, playerInertia)
      }
    }
  }

  private fun calculatePlayerInertia(player: Player, trackedVelocity: Vector): Vector {
    val inertia = trackedVelocity.clone()
    // ダッシュ中なのに追跡速度が小さすぎる場合、ダッシュ方向の最低速度を補正
    if (player.isSprinting && inertia.lengthSquared() < 0.04) {
      val sprintDir = player.location.direction.setY(0).normalize().multiply(0.28)
      inertia.add(sprintDir)
    }
    // ジャンプ中の上昇速度を加味
    if (player.velocity.y > 0.05) {
      inertia.setY(player.velocity.y)
    }
    return inertia
  }

  private fun executeThrow(
      player: Player,
      heldItem: ItemStack,
      ratio: Double,
      mode: DiceMode,
      isBroadcast: Boolean,
      playerInertia: Vector? = null,
  ) {
    // 直近投擲者として記録（投擲直後のブロック誤設置を厳重遮断）
    recentThrowers[player.uniqueId] = System.currentTimeMillis() + BLOCK_PLACE_PREVENTION_MS

    // 手持ちアイテムを1個消費
    heldItem.amount = heldItem.amount - 1
    player.updateInventory()

    // 投擲後のクールタイムを設定
    player.setCooldown(heldItem.type, THROW_COOLDOWN_TICKS)
    DiceType.entries.forEach { player.setCooldown(it.material, THROW_COOLDOWN_TICKS) }

    // アクションバー消去
    player.sendActionBar(Component.empty())

    // 投擲実行
    diceManager.throwDice(player, ratio, mode, isBroadcast, playerInertia)
  }

  private fun displayActionBar(player: Player, ratio: Double, isBedrock: Boolean) {
    val totalBars = 10
    val filledBars = (ratio * totalBars).toInt()
    val percent = (ratio * 100).toInt()

    val barColor =
        when {
          ratio >= 0.85 -> NamedTextColor.RED
          ratio >= 0.45 -> NamedTextColor.YELLOW
          else -> NamedTextColor.GREEN
        }

    val filledString = "■".repeat(filledBars)
    val emptyString = "□".repeat(totalBars - filledBars)

    val hintText =
        if (isBedrock) {
          " (タップで投擲)"
        } else {
          ""
        }

    val bar =
        Component.text("投擲パワー: ", NamedTextColor.GOLD, TextDecoration.BOLD)
            .append(Component.text("[", NamedTextColor.GRAY))
            .append(Component.text(filledString, barColor, TextDecoration.BOLD))
            .append(Component.text(emptyString, NamedTextColor.DARK_GRAY))
            .append(Component.text("] ", NamedTextColor.GRAY))
            .append(Component.text("$percent%", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(hintText, NamedTextColor.AQUA))

    player.sendActionBar(bar)
  }

  private fun playChargeTickSound(player: Player, ratio: Double) {
    val pitch = 0.9f + (ratio * 1.1f).toFloat()
    player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_HAT, 0.4f, pitch)
  }

  fun cancel(player: Player) {
    if (sessions.remove(player.uniqueId) != null) {
      player.sendActionBar(Component.empty())
    }
  }

  fun shutdown() {
    tickerTask?.cancel()
    tickerTask = null
    sessions.clear()
    recentThrowers.clear()
  }
}
