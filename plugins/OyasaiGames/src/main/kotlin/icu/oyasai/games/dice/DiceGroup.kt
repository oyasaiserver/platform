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
  val dices = mutableListOf<DiceInstance>()
  private var totalHologramJava: TextDisplay? = null
  private var totalHologramBedrock: TextDisplay? = null
  private var autoCollectTask: BukkitTask? = null
  private var globalFailsafeTask: BukkitTask? = null
  private var isFinished = false

  fun start() {
    // 25秒後の全体フェールセーフ（万が一チャンクアンロード等の異常があっても確実に回収を保証）
    globalFailsafeTask =
        plugin.server.scheduler.runTaskLater(
            plugin,
            Runnable { collect(null) },
            25 * 20L,
        )

    val count = mode.diceCount
    if (count > 1) {
      val rightDir = baseVelocity.clone().crossProduct(Vector(0, 1, 0)).normalize()
      if (rightDir.lengthSquared() < 0.01) {
        rightDir.setX(1.0)
      }

      for (i in 0 until count) {
        val spreadFactor = (i.toDouble() / (count - 1)) - 0.5
        val spreadWidth = 0.55 * (1.0 + (count - 2) * 0.12)
        val spreadOffset = rightDir.clone().multiply(spreadFactor * spreadWidth)
        val velocityOffset = rightDir.clone().multiply(spreadFactor * 0.25)
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

    // 15秒後に自動回収（フェールセーフ）
    autoCollectTask =
        plugin.server.scheduler.runTaskLater(
            plugin,
            Runnable {
              collect(null) // 自動回収
            },
            15 * 20L,
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

    val midLoc = Location(world, avgX, maxY + 1.25, avgZ)
    val formula = dices.joinToString(" + ") { it.resultEye.toString() }

    val textJava =
        Component.text("🎲 ", NamedTextColor.GOLD)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("合計: ", NamedTextColor.GRAY))
            .append(Component.text("$sum", NamedTextColor.GREEN, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" 🎲", NamedTextColor.GOLD))
            .append(Component.newline())
            .append(Component.text("( $formula )", NamedTextColor.GRAY))

    val textBedrock =
        Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD)
            .append(Component.text("合計: ", NamedTextColor.GRAY))
            .append(Component.text("$sum", NamedTextColor.GREEN, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.newline())
            .append(Component.text("( $formula )", NamedTextColor.GRAY))

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

    // 半径30ブロック以内のプレイヤーにメッセージを届ける
    for (p in world.players) {
      if (p.location.distanceSquared(center) <= 30.0 * 30.0) {
        p.sendMessage(message)
      }
    }
  }

  fun containsEntity(entityId: Int): Boolean {
    if (totalHologramJava?.entityId == entityId || totalHologramBedrock?.entityId == entityId)
        return true
    return dices.any { it.matchesEntity(entityId) }
  }

  fun isNear(targetLoc: Location, maxDistSq: Double = 6.25): Boolean {
    if (dices.isEmpty()) return false
    return dices.any { it.isSettled && it.getDistanceSquared(targetLoc) <= maxDistSq }
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
    if (collector != null && collector.uniqueId != ownerUuid) {
      collector.sendMessage(Component.text("このサイコロは他のプレイヤーのものです。", NamedTextColor.RED))
      return false
    }

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
