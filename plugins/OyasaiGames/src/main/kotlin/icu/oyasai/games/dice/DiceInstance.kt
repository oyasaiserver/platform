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
import org.bukkit.entity.Item
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
    /** サイコロの ItemDisplay 描画スケール */
    const val DICE_SCALE = 0.65f

    /** サイコロの接地時におけるY軸中心オフセット */
    const val DICE_Y_OFFSET = 0.325f

    /** 頭上ホログラムのY軸オフセット（サイコロ上面からの高さ） */
    const val HOLO_Y_OFFSET = 0.85

    // --- 物理シミュレーション定数 ---
    /** 毎tick加算される重力加速度 (ブロック/tick^2) */
    const val GRAVITY_ACCELERATION = 0.04

    /** 水平方向(X/Z)の毎tick空気抵抗減衰率 */
    const val AIR_RESISTANCE_XZ = 0.985

    /** 床面衝突時の垂直(Y)反発係数 */
    const val FLOOR_BOUNCE_RESTITUTION = 0.42

    /** 床面衝突時の水平(X/Z)摩擦減衰率 */
    const val FLOOR_FRICTION_XZ = 0.75

    /** 壁面衝突時の反発・速度減衰率 */
    const val WALL_BOUNCE_RESTITUTION = 0.55

    /** 床面での微小バウンドを0に収束させて速やかに静止させる速度閾値 */
    const val BOUNCE_DAMPING_THRESHOLD = 0.035

    /** 足元ブロック判定で下方を探索するYオフセット */
    const val GROUND_CHECK_OFFSET_Y = 0.15

    /** 足元衝突検知レイキャストの最大探索距離 */
    const val GROUND_CHECK_RAY_DISTANCE = 0.25

    /** 静止判定（停止カウンター加算）に入る速度の二乗閾値 */
    const val REST_VELOCITY_SQ_THRESHOLD = 0.005

    /** 静止確定（出目確定）に必要な連続接地静止tick数 */
    const val REQUIRED_REST_TICKS = 4

    /** 万が一斜面等で転がり続けた場合の強制停止タイムアウト（100tick = 5秒） */
    const val PHYSICS_TIMEOUT_TICKS = 100

    /** 回転アニメーションを適用する最低移動速度 */
    const val MIN_ROTATION_SPEED = 0.02
  }

  var isSettled: Boolean = false
    private set

  var resultEye: Int = 0
    private set

  private val ownerKey = NamespacedKey(plugin, "dice_owner")
  private val diceItemIdKey = NamespacedKey(plugin, "dice_item_id")
  private var itemDisplay: ItemDisplay? = null
  var textDisplayJava: TextDisplay? = null
    private set

  var textDisplayBedrock: TextDisplay? = null
    private set

  private var interactionEntity: Interaction? = null
  var bedrockItem: Item? = null
    private set

  private var physicsTask: BukkitTask? = null
  private var settleStayTask: BukkitTask? = null

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

    // 統合版（Bedrock / Floodgate）用エンティティの生成
    // ※ ホログラムはGeyserがTextDisplayを描画するため、customNameは設定せず本体ブロックのみ同期表示する
    val diceItem = ItemStack(mode.material)
    diceItem.editMeta { meta ->
      meta.persistentDataContainer.set(
          diceItemIdKey,
          PersistentDataType.STRING,
          UUID.randomUUID().toString(),
      )
    }

    val bItem =
        world.spawn(startLoc, Item::class.java) { entity ->
          entity.itemStack = diceItem
          entity.pickupDelay = 32767
          entity.setCanMobPickup(false)
          entity.setCanPlayerPickup(false)
          entity.isPersistent = false
          entity.setWillAge(false)
          entity.setGravity(false)
          entity.persistentDataContainer.set(
              ownerKey,
              PersistentDataType.STRING,
              ownerUuid.toString(),
          )
        }
    this.bedrockItem = bItem

    // Java版プレイヤーにはBedrock用エンティティを非表示にする（二重表示防止）
    BedrockSupport.hideBedrockEntityFromJava(plugin, bItem)

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

                // タイムアウト保護（一定時間以上転がり続けた場合強制停止・確定）
                if (tickCount > PHYSICS_TIMEOUT_TICKS) {
                  settle()
                  cancel()
                  return
                }

                // 重力と空気抵抗
                velocity.y -= GRAVITY_ACCELERATION
                velocity.x *= AIR_RESISTANCE_XZ
                velocity.z *= AIR_RESISTANCE_XZ

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
                      // 床面衝突: バウンド＆摩擦（微小反発は0に収束させて速やかに静止）
                      val bounceY = -reflection.y * FLOOR_BOUNCE_RESTITUTION
                      reflection.y =
                          if (Math.abs(bounceY) < BOUNCE_DAMPING_THRESHOLD) 0.0 else bounceY
                      reflection.x *= FLOOR_FRICTION_XZ
                      reflection.z *= FLOOR_FRICTION_XZ
                    } else {
                      // 壁面衝突
                      reflection.multiply(WALL_BOUNCE_RESTITUTION)
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

                // 接地・足元衝突判定（PLAYER_HEAD, SLAB, ANVIL 等の非フルブロックも正確に判定）
                val blockAtLoc = currentLocation.block
                val blockBelow =
                    currentLocation.clone().subtract(0.0, GROUND_CHECK_OFFSET_Y, 0.0).block

                // 通り抜け不可ブロック判定 (isPassable == false: ヘッド、スラブ、金床、チェスト等を含む)
                val isGroundBlock =
                    (!blockBelow.type.isAir && !blockBelow.isPassable) ||
                        (!blockAtLoc.type.isAir && !blockAtLoc.isPassable)

                // 真下方向への短いレイキャスト衝突判定（ヘッドやスラブ等の表面を確実に検知）
                val hasCollisionBelow =
                    isGroundBlock ||
                        (world.rayTraceBlocks(
                            currentLocation,
                            Vector(0.0, -1.0, 0.0),
                            GROUND_CHECK_RAY_DISTANCE,
                            FluidCollisionMode.NEVER,
                            true,
                        ) != null)

                val isOnGround = hasCollisionBelow

                if (isOnGround && velocity.lengthSquared() < REST_VELOCITY_SQ_THRESHOLD) {
                  velocity.zero()
                  restTickCount++
                  if (restTickCount >= REQUIRED_REST_TICKS) {
                    settle()
                    cancel()
                    return
                  }
                } else {
                  restTickCount = 0
                }

                // 回転更新
                if (speed > MIN_ROTATION_SPEED) {
                  rotYaw += (velocity.x * 60).toFloat()
                  rotPitch += (velocity.z * 60).toFloat()
                  rotRoll += (speed * 40).toFloat()
                }

                // Entity位置更新
                display.teleport(currentLocation)
                bedrockItem?.let { bItem ->
                  if (bItem.isValid) {
                    bItem.teleport(currentLocation)
                    bItem.velocity = Vector(0.0, 0.0, 0.0)
                  }
                }
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

    // 統合版アイテムの最終位置固定と慣性速度の完全消去
    bedrockItem?.let { bItem ->
      if (bItem.isValid) {
        bItem.teleport(currentLocation)
        bItem.velocity = Vector(0.0, 0.0, 0.0)
      }
    }

    // 停止後の位置ロックタスク（プレイヤーの接触やバニラ物理によるスライドを完全防止）
    settleStayTask =
        plugin.server.scheduler.runTaskTimer(
            plugin,
            Runnable {
              val bItem = bedrockItem
              if (bItem != null && bItem.isValid) {
                if (bItem.location.distanceSquared(currentLocation) > 0.005) {
                  bItem.teleport(currentLocation)
                  bItem.velocity = Vector(0.0, 0.0, 0.0)
                }
              } else {
                settleStayTask?.cancel()
                settleStayTask = null
              }
            },
            1L,
            2L,
        )

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
    val holoLoc = currentLocation.clone().add(0.0, HOLO_Y_OFFSET, 0.0)

    val textJava = formatTextJava()
    val textBedrock = formatTextBedrock()

    val displayJava =
        world.spawn(holoLoc, TextDisplay::class.java) { entity ->
          configureTextDisplay(entity, textJava)
        }
    val displayBedrock =
        world.spawn(holoLoc, TextDisplay::class.java) { entity ->
          configureTextDisplay(entity, textBedrock)
        }

    this.textDisplayJava = displayJava
    this.textDisplayBedrock = displayBedrock

    BedrockSupport.separateHologramVisibility(plugin, displayJava, displayBedrock)

    // 1tick後に元の位置へふわっと上昇させる
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          applyHologramFloatingAnimation(displayJava)
          applyHologramFloatingAnimation(displayBedrock)
        },
        1L,
    )
  }

  private fun configureTextDisplay(entity: TextDisplay, text: Component) {
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

  private fun applyHologramFloatingAnimation(display: TextDisplay?) {
    if (display != null && display.isValid) {
      display.transformation =
          Transformation(
              Vector3f(0f, 0f, 0f),
              AxisAngle4f(0f, 0f, 1f, 0f),
              Vector3f(1.0f, 1.0f, 1.0f),
              AxisAngle4f(0f, 0f, 1f, 0f),
          )
    }
  }

  private fun formatTextJava(): Component {
    return when (mode.maxEyes) {
      2 -> formatD2TextJava(resultEye)
      6 -> formatD6TextJava(resultEye)
      20 -> formatD20TextJava(resultEye)
      else -> formatPolyhedralTextJava(mode, resultEye)
    }
  }

  private fun formatTextBedrock(): Component {
    return when (mode.maxEyes) {
      2 -> formatD2TextBedrock(resultEye)
      6 -> formatD6TextBedrock(resultEye)
      20 -> formatD20TextBedrock(resultEye)
      else -> formatPolyhedralTextBedrock(mode, resultEye)
    }
  }

  // --- Java版フォーマット（リソースパックのサイコロ🎲やコイン🪙を復元。Javaで豆腐になる⚀〜⚅は使用しない） ---
  private fun formatD6TextJava(eye: Int): Component {
    val color =
        when (eye) {
          1 -> NamedTextColor.RED
          6 -> NamedTextColor.GOLD
          else -> NamedTextColor.YELLOW
        }

    return Component.text("🎲 ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$eye", color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.GOLD))
  }

  private fun formatD2TextJava(eye: Int): Component {
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

  private fun formatD20TextJava(eye: Int): Component {
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

  private fun formatPolyhedralTextJava(mode: DiceMode, eye: Int): Component {
    val tag = "D${mode.maxEyes}"
    return Component.text("🎲 ", NamedTextColor.AQUA)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$tag: ", NamedTextColor.GRAY))
        .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.AQUA))
  }

  // --- 統合版（Bedrock）フォーマット（🎲などの豆腐化絵文字を避け、Bedrock標準で描画可能な⚀〜⚅等を使用） ---
  private fun formatD6TextBedrock(eye: Int): Component {
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

    return Component.text("$symbol ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$eye", color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" $symbol", NamedTextColor.GOLD))
  }

  private fun formatD2TextBedrock(eye: Int): Component {
    val isHead = eye == 1
    val label = if (isHead) "表 (1)" else "裏 (2)"
    val color = if (isHead) NamedTextColor.GOLD else NamedTextColor.WHITE

    return Component.text("◆ ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("コイン: ", NamedTextColor.GRAY))
        .append(Component.text(label, color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" ◆", NamedTextColor.GOLD))
  }

  private fun formatD20TextBedrock(eye: Int): Component {
    return when (eye) {
      20 -> {
        Component.text("★ ", NamedTextColor.GOLD)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 20 (Critical!)", NamedTextColor.GOLD, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ★", NamedTextColor.GOLD))
      }
      1 -> {
        Component.text("✖ ", NamedTextColor.RED)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 1 (Fumble)", NamedTextColor.DARK_RED, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ✖", NamedTextColor.RED))
      }
      else -> {
        Component.text("⚅ ", NamedTextColor.AQUA)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: ", NamedTextColor.GRAY))
            .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ⚅", NamedTextColor.AQUA))
      }
    }
  }

  private fun formatPolyhedralTextBedrock(mode: DiceMode, eye: Int): Component {
    val tag = "D${mode.maxEyes}"
    return Component.text("⚅ ", NamedTextColor.AQUA)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$tag: ", NamedTextColor.GRAY))
        .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" ⚅", NamedTextColor.AQUA))
  }

  fun matchesEntity(entityId: Int): Boolean {
    return itemDisplay?.entityId == entityId ||
        textDisplayJava?.entityId == entityId ||
        textDisplayBedrock?.entityId == entityId ||
        interactionEntity?.entityId == entityId ||
        bedrockItem?.entityId == entityId
  }

  fun getDistanceSquared(loc: Location): Double {
    if (loc.world != currentLocation.world) return Double.MAX_VALUE
    return currentLocation.distanceSquared(loc)
  }

  fun remove() {
    physicsTask?.cancel()
    physicsTask = null
    settleStayTask?.cancel()
    settleStayTask = null
    interactionEntity?.remove()
    interactionEntity = null
    itemDisplay?.remove()
    itemDisplay = null
    textDisplayJava?.remove()
    textDisplayJava = null
    textDisplayBedrock?.remove()
    textDisplayBedrock = null
    bedrockItem?.remove()
    bedrockItem = null
  }
}
