package icu.oyasai.games.dice

import java.util.UUID
import kotlin.random.Random
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.FluidCollisionMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Display
import org.bukkit.entity.Interaction
import org.bukkit.entity.ItemDisplay
import org.bukkit.entity.TextDisplay
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.AxisAngle4f
import org.joml.Quaternionf
import org.joml.Vector3f

class DiceInstance(
    val plugin: Plugin,
    val ownerUuid: UUID,
    val startLoc: Location,
    private val initialVelocity: Vector,
    val mode: DiceMode,
    val diceIndex: Int = 1,
    private val onSettledCallback: (DiceInstance) -> Unit,
) {
  companion object {
    const val DICE_SCALE = 0.65f
    const val DICE_Y_OFFSET = 0.325f
    const val HOLO_Y_OFFSET = 0.85
  }

  var isSettled: Boolean = false
    private set

  var resultEye: Int = 0
    private set

  private val ownerKey = NamespacedKey(plugin, "dice_owner")
  private var itemDisplay: ItemDisplay? = null
  private var textDisplay: TextDisplay? = null
  private var interactionEntity: Interaction? = null
  private var physicsTask: BukkitTask? = null

  private val currentLocation = startLoc.clone()
  private val velocity = initialVelocity.clone()
  private var restTickCount = 0

  private var rotYaw = Random.nextFloat() * 360f
  private var rotPitch = Random.nextFloat() * 360f
  private var rotRoll = Random.nextFloat() * 360f

  fun spawnAndRoll() {
    val world = startLoc.world ?: return

    val display =
        world.spawn(startLoc, ItemDisplay::class.java) { entity ->
          entity.setItemStack(ItemStack(mode.material))
          entity.itemDisplayTransform = ItemDisplay.ItemDisplayTransform.FIXED
          entity.transformation =
              Transformation(
                  Vector3f(0f, DICE_Y_OFFSET, 0f),
                  Quaternionf(),
                  Vector3f(DICE_SCALE, DICE_SCALE, DICE_SCALE),
                  Quaternionf(),
              )
          entity.interpolationDuration = 1
          entity.interpolationDelay = 0
          entity.brightness = Display.Brightness(15, 15)
          entity.isPersistent = false
          entity.persistentDataContainer.set(
              ownerKey,
              PersistentDataType.STRING,
              ownerUuid.toString(),
          )
        }
    this.itemDisplay = display

    startPhysicsLoop()
  }

  private fun startPhysicsLoop() {
    physicsTask =
        object : BukkitRunnable() {
              var tickCount = 0

              override fun run() {
                tickCount++
                val display = itemDisplay
                if (display == null || !display.isValid) {
                  settle()
                  cancel()
                  return
                }

                val world = currentLocation.world
                if (world == null) {
                  settle()
                  cancel()
                  return
                }

                // フェールセーフ: 奈落または溶岩
                if (currentLocation.y < -64 || currentLocation.block.type == Material.LAVA) {
                  settleEmergency()
                  cancel()
                  return
                }

                // タイムアウト保護（10秒以上転がり続けた場合強制停止）
                if (tickCount > 200) {
                  settle()
                  cancel()
                  return
                }

                // 重力と空気抵抗
                velocity.y -= 0.04
                velocity.x *= 0.985
                velocity.z *= 0.985

                val speed = velocity.length()
                if (speed > 0.001) {
                  val dir = velocity.clone().normalize()
                  val ray =
                      world.rayTraceBlocks(
                          currentLocation,
                          dir,
                          speed,
                          FluidCollisionMode.NEVER,
                          true,
                      )

                  if (ray != null) {
                    // 衝突手前まで移動
                    currentLocation.set(ray.hitPosition.x, ray.hitPosition.y, ray.hitPosition.z)

                    val normal = ray.hitBlockFace?.direction ?: Vector(0.0, 1.0, 0.0)
                    // 反射ベクトル: v' = v - 2 * (v . n) * n
                    val dot = velocity.dot(normal)
                    val reflection = velocity.clone().subtract(normal.clone().multiply(2.0 * dot))

                    if (normal.y > 0.4) {
                      // 床面衝突: バウンド＆摩擦
                      reflection.y = -reflection.y * 0.42
                      reflection.x *= 0.75
                      reflection.z *= 0.75
                    } else {
                      // 壁面衝突
                      reflection.multiply(0.55)
                    }

                    // 衝突音
                    playBounceSound(speed)

                    velocity.x = reflection.x
                    velocity.y = reflection.y
                    velocity.z = reflection.z
                  } else {
                    currentLocation.add(velocity)
                  }
                }

                // 接地・停止判定
                val blockBelow = currentLocation.clone().subtract(0.0, 0.1, 0.0).block
                val isOnGround = !blockBelow.type.isAir && blockBelow.type.isSolid

                if (isOnGround && velocity.lengthSquared() < 0.003) {
                  velocity.zero()
                  restTickCount++
                  if (restTickCount >= 4) {
                    settle()
                    cancel()
                    return
                  }
                } else {
                  restTickCount = 0
                }

                // 回転更新
                if (speed > 0.02) {
                  rotYaw += (velocity.x * 60).toFloat()
                  rotPitch += (velocity.z * 60).toFloat()
                  rotRoll += (speed * 40).toFloat()
                }

                // Entity位置更新
                display.teleport(currentLocation)
                val rotQuat =
                    Quaternionf()
                        .rotateY(Math.toRadians(rotYaw.toDouble()).toFloat())
                        .rotateX(Math.toRadians(rotPitch.toDouble()).toFloat())
                        .rotateZ(Math.toRadians(rotRoll.toDouble()).toFloat())

                display.transformation =
                    Transformation(
                        Vector3f(0f, DICE_Y_OFFSET, 0f),
                        rotQuat,
                        Vector3f(DICE_SCALE, DICE_SCALE, DICE_SCALE),
                        Quaternionf(),
                    )
              }
            }
            .runTaskTimer(plugin, 1L, 1L)
  }

  private fun playBounceSound(speed: Double) {
    val world = currentLocation.world ?: return
    val volume = (speed * 1.5).toFloat().coerceIn(0.2f, 0.85f)
    val pitch = 1.1f + Random.nextFloat() * 0.3f

    // 骨ブロック（コトッ）とアメジスト（カチャッ）のリアルなダイス着地音
    world.playSound(currentLocation, Sound.BLOCK_BONE_BLOCK_HIT, volume, pitch)
    world.playSound(currentLocation, Sound.BLOCK_AMETHYST_BLOCK_HIT, volume * 0.5f, pitch + 0.2f)
  }

  private fun settleEmergency() {
    val player = plugin.server.getPlayer(ownerUuid)
    if (player != null && player.isOnline) {
      currentLocation.set(player.location.x, player.location.y, player.location.z)
    } else {
      currentLocation.y = startLoc.y
    }
    settle()
  }

  private fun settle() {
    if (isSettled) return
    isSettled = true

    // 出目の決定
    resultEye = Random.nextInt(1, mode.maxEyes + 1)

    // サイコロの表示を確定＆正面上向きに姿勢を整える
    val display = itemDisplay
    if (display != null && display.isValid) {
      display.setItemStack(ItemStack(mode.material))

      val rotQuat =
          if (mode.type == DiceType.D2 && resultEye == 2) {
            // コインの裏: 180度反転
            Quaternionf().rotateX(Math.toRadians(180.0).toFloat())
          } else {
            Quaternionf()
          }

      // 水平に安定して置かれた状態にする
      display.transformation =
          Transformation(
              Vector3f(0f, DICE_Y_OFFSET, 0f),
              rotQuat,
              Vector3f(DICE_SCALE, DICE_SCALE, DICE_SCALE),
              Quaternionf(),
          )
    }

    // 頭上ホログラム（TextDisplay）のスポーン
    spawnHologram()

    // 手動回収用インタラクション判定（広めの当たり判定）のスポーン
    spawnInteraction()

    onSettledCallback(this)
  }

  private fun spawnInteraction() {
    val world = currentLocation.world ?: return
    // サイコロの周囲1ブロック四方のゆったりしたクリック判定
    val interLoc = currentLocation.clone().subtract(0.0, 0.2, 0.0)
    val inter =
        world.spawn(interLoc, Interaction::class.java) { entity ->
          entity.interactionWidth = 1.4f
          entity.interactionHeight = 1.3f
          entity.isResponsive = true
          entity.isPersistent = false
          entity.persistentDataContainer.set(
              ownerKey,
              PersistentDataType.STRING,
              ownerUuid.toString(),
          )
        }
    this.interactionEntity = inter
  }

  private fun spawnHologram() {
    val world = currentLocation.world ?: return

    // 止まったサイコロの頭上にふわっと浮き上がる位置
    val holoLoc = currentLocation.clone().add(0.0, HOLO_Y_OFFSET, 0.0)

    val text =
        when (mode.maxEyes) {
          2 -> formatD2Text(resultEye)
          6 -> formatD6Text(resultEye)
          20 -> formatD20Text(resultEye)
          else -> formatPolyhedralText(mode, resultEye)
        }

    val display =
        world.spawn(holoLoc, TextDisplay::class.java) { entity ->
          entity.text(text)
          entity.billboard = Display.Billboard.CENTER
          entity.isSeeThrough = false
          entity.isShadowed = true
          entity.backgroundColor = org.bukkit.Color.fromARGB(160, 0, 0, 0)
          entity.isPersistent = false
          entity.persistentDataContainer.set(
              ownerKey,
              PersistentDataType.STRING,
              ownerUuid.toString(),
          )

          // ふわっと浮き上がるアニメーション設定
          entity.transformation =
              Transformation(
                  Vector3f(0f, -0.1f, 0f),
                  AxisAngle4f(0f, 0f, 1f, 0f),
                  Vector3f(0.85f, 0.85f, 0.85f),
                  AxisAngle4f(0f, 0f, 1f, 0f),
              )
          entity.interpolationDuration = 10
          entity.interpolationDelay = 0
        }

    this.textDisplay = display

    // 1tick後に元の位置へふわっと上昇させる
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          if (display.isValid) {
            display.transformation =
                Transformation(
                    Vector3f(0f, 0f, 0f),
                    AxisAngle4f(0f, 0f, 1f, 0f),
                    Vector3f(1.0f, 1.0f, 1.0f),
                    AxisAngle4f(0f, 0f, 1f, 0f),
                )
          }
        },
        1L,
    )
  }

  private fun formatD2Text(eye: Int): Component {
    val isHead = eye == 1
    val label = if (isHead) "表 (1)" else "裏 (2)"
    val color = if (isHead) NamedTextColor.GOLD else NamedTextColor.WHITE

    return Component.text("🪙 ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("コイン: ", NamedTextColor.GRAY))
        .append(Component.text(label, color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🪙", NamedTextColor.GOLD))
  }

  private fun formatD6Text(eye: Int): Component {
    val (symbol, color) =
        when (eye) {
          1 -> "⚀" to NamedTextColor.RED
          2 -> "⚁" to NamedTextColor.YELLOW
          3 -> "⚂" to NamedTextColor.YELLOW
          4 -> "⚃" to NamedTextColor.YELLOW
          5 -> "⚄" to NamedTextColor.YELLOW
          6 -> "⚅" to NamedTextColor.GOLD
          else -> "⚀" to NamedTextColor.WHITE
        }

    return Component.text("🎲 ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$symbol $eye", color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.GOLD))
  }

  private fun formatD20Text(eye: Int): Component {
    return when (eye) {
      20 -> {
        Component.text("⭐ ", NamedTextColor.GOLD)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 20 (Critical!)", NamedTextColor.GOLD, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ⭐", NamedTextColor.GOLD))
      }
      1 -> {
        Component.text("💀 ", NamedTextColor.RED)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 1 (Fumble)", NamedTextColor.DARK_RED, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" 💀", NamedTextColor.RED))
      }
      else -> {
        Component.text("🎲 ", NamedTextColor.AQUA)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: ", NamedTextColor.GRAY))
            .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" 🎲", NamedTextColor.AQUA))
      }
    }
  }

  private fun formatPolyhedralText(mode: DiceMode, eye: Int): Component {
    val tag = "D${mode.maxEyes}"
    return Component.text("🎲 ", NamedTextColor.AQUA)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$tag: ", NamedTextColor.GRAY))
        .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.AQUA))
  }

  fun matchesEntity(entityId: Int): Boolean {
    return itemDisplay?.entityId == entityId ||
        textDisplay?.entityId == entityId ||
        interactionEntity?.entityId == entityId
  }

  fun getDistanceSquared(loc: Location): Double {
    if (loc.world != currentLocation.world) return Double.MAX_VALUE
    return currentLocation.distanceSquared(loc)
  }

  fun remove() {
    physicsTask?.cancel()
    physicsTask = null
    interactionEntity?.remove()
    interactionEntity = null
    itemDisplay?.remove()
    itemDisplay = null
    textDisplay?.remove()
    textDisplay = null
  }
}
