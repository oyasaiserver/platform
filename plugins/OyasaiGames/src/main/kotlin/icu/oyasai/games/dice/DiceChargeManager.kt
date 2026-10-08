package icu.oyasai.games.dice

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.math.min
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

class DiceChargeManager(
    private val plugin: Plugin,
    private val diceItem: DiceItem,
    private val diceManager: DiceManager,
) {
  private class ChargeSession(
      val playerUuid: UUID,
      var startTick: Long,
      var lastInteractTick: Long,
      val mode: DiceMode,
      val isBroadcast: Boolean,
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
      // チャージ開始
      sessions[player.uniqueId] =
          ChargeSession(player.uniqueId, currentTick, currentTick, mode, isBroadcast)
      playChargeTickSound(player, 0.0)
    } else {
      if (isBedrock) {
        // 統合版（スマホ）: 2回目のタップでその瞬間のパワーで即座に投擲！
        val chargeTicks = currentTick - existing.startTick
        val maxChargeTicks = 22.0
        val ratio = min(1.0, chargeTicks / maxChargeTicks).coerceAtLeast(0.15)
        sessions.remove(player.uniqueId)

        val heldItem = player.inventory.itemInMainHand
        if (diceItem.isDice(heldItem)) {
          executeThrow(player, heldItem, ratio, existing.mode, existing.isBroadcast)
        }
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

      val isBedrock = BedrockSupport.isBedrockPlayer(player)
      val chargeTicks = currentTick - session.startTick
      val maxChargeTicks = 22.0 // 約1.1秒でフルチャージ
      val ratio = min(1.0, chargeTicks / maxChargeTicks)

      // アクションバーの描画
      displayActionBar(player, ratio, isBedrock)

      // チャージ音（3tickおき）
      if (chargeTicks % 3L == 0L && ratio < 1.0) {
        playChargeTickSound(player, ratio)
      }

      // リリース判定:
      val shouldRelease =
          if (isBedrock) {
            // 統合版: 最大チャージに達したら自動で最高パワーで投擲（タップしない場合でも自動発射）
            chargeTicks >= maxChargeTicks
          } else {
            // Java版: 長押しを離した (6tick以上経過) または最大チャージ到達後
            val idleTicks = currentTick - session.lastInteractTick
            idleTicks >= 6L || chargeTicks >= (maxChargeTicks + 4)
          }

      if (shouldRelease) {
        iterator.remove()
        executeThrow(player, heldItem, ratio, session.mode, session.isBroadcast)
      }
    }
  }

  private fun executeThrow(
      player: Player,
      heldItem: ItemStack,
      ratio: Double,
      mode: DiceMode,
      isBroadcast: Boolean,
  ) {
    // 直近投擲者として記録（2.0秒間ブロック設置を厳重遮断）
    recentThrowers[player.uniqueId] = System.currentTimeMillis() + 2000L

    // 手持ちアイテムを1個消費
    heldItem.amount = heldItem.amount - 1

    // 2秒間(40ticks)のクールタイムを設定
    player.setCooldown(heldItem.type, 40)

    // アクションバー消去
    player.sendActionBar(Component.empty())

    // 投擲実行
    diceManager.throwDice(player, ratio, mode, isBroadcast)
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
    sessions.remove(player.uniqueId)
    player.sendActionBar(Component.empty())
  }

  fun shutdown() {
    tickerTask?.cancel()
    tickerTask = null
    sessions.clear()
    recentThrowers.clear()
  }
}
