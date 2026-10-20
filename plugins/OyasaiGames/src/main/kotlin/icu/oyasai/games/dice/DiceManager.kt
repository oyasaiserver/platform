package icu.oyasai.games.dice

import java.util.UUID
import java.util.concurrent.CopyOnWriteArrayList
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin
import org.bukkit.util.Vector

class DiceManager(val plugin: Plugin, val diceItem: DiceItem) {
  companion object {
    /** 投擲初速の基本速度 */
    const val SPEED_BASE = 0.45

    /** チャージ比率に応じた初速加算係数 */
    const val SPEED_RATIO_MULTIPLIER = 1.15

    /** 基本の上向き射出仰角 */
    const val LAUNCH_PITCH_BASE = 0.15

    /** チャージ比率に応じた上向き射出仰角加算係数 */
    const val LAUNCH_PITCH_RATIO = 0.1

    /** プレイヤー慣性の水平反映倍率 */
    const val INERTIA_XZ_MULTIPLIER = 1.0

    /** プレイヤージャンプ上昇慣性の反映倍率 */
    const val INERTIA_Y_JUMP = 0.8

    /** プレイヤー落下慣性の反映倍率 */
    const val INERTIA_Y_FALL = 0.3

    /** サイコロ生成時の視線前方オフセット距離 */
    const val SPAWN_FORWARD_OFFSET = 0.4

    /** クリック先ブロック近傍の手動回収判定半径二乗 (2.5ブロック) */
    const val NEARBY_TARGET_RADIUS_SQ = 6.25

    /** プレイヤー近傍の手動回収判定半径二乗 (4.0ブロック) */
    const val NEARBY_PLAYER_RADIUS_SQ = 16.0
  }

  var chargeManager: DiceChargeManager? = null
  private val activeGroups = CopyOnWriteArrayList<DiceGroup>()
  val chatReceiveKey = NamespacedKey(plugin, "dice_chat_receive")

  /** 他人のサイコロ結果をチャットで受信するかどうか（デフォルト: true） */
  fun isChatReceiveEnabled(player: Player): Boolean {
    val value = player.persistentDataContainer.get(chatReceiveKey, PersistentDataType.BYTE)
    return value == null || value == 1.toByte()
  }

  /** 他人のサイコロ結果のチャット受信を設定 */
  fun setChatReceiveEnabled(player: Player, enabled: Boolean) {
    player.persistentDataContainer.set(
        chatReceiveKey,
        PersistentDataType.BYTE,
        if (enabled) 1.toByte() else 0.toByte(),
    )
  }

  /** 他人のサイコロ結果のチャット受信設定を反転切り替え */
  fun toggleChatReceive(player: Player): Boolean {
    val next = !isChatReceiveEnabled(player)
    setChatReceiveEnabled(player, next)
    return next
  }

  /** 指定したプレイヤーが投げたサイコロがフィールド上に現在存在するか（投擲中〜回収前） */
  fun hasActiveDice(player: Player): Boolean {
    return hasActiveDice(player.uniqueId)
  }

  fun hasActiveDice(uuid: UUID): Boolean {
    return activeGroups.any { it.ownerUuid == uuid }
  }

  /** サイコロを新しく入手できるかチェック（1人1個まで） */
  fun canGiveDice(player: Player): Boolean {
    if (hasActiveDice(player)) return false
    if (diceItem.hasDice(player)) return false
    return true
  }

  /**
   * サイコロを安全に配布、またはすでに所持している場合はモードを更新する
   *
   * @return 処理が正常に行われたら true、投擲中など不可の場合は false
   */
  @JvmOverloads
  fun giveOrUpdateDice(player: Player, mode: DiceMode = DiceMode.ONE_D6): Boolean {
    // 1. すでにフィールド上に投げている場合
    if (hasActiveDice(player)) {
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.8f, 1.0f)
      player.sendMessage(
          Component.text("[おやさいサイコロ] 🎲 現在サイコロを投擲中です！拾うか回収（15秒）されるまでお待ちください。", NamedTextColor.RED)
      )
      return false
    }

    // 2. すでにインベントリに持っている場合: モードを更新
    if (diceItem.hasDice(player)) {
      diceItem.sanitizePlayerDice(player)
      for (item in player.inventory.contents) {
        val dice = item ?: continue
        if (diceItem.isDice(dice)) {
          diceItem.updateDiceSettings(dice, newMode = mode)
          player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.8f, 1.2f)
          player.sendMessage(
              Component.text("[おやさいサイコロ] 🎲 手持ちのサイコロのモードを ", NamedTextColor.GOLD)
                  .append(Component.text(mode.displayName, NamedTextColor.GREEN))
                  .append(Component.text(" に切り替えました！（サイコロは1人1個までです）", NamedTextColor.GOLD))
          )
          return true
        }
      }
      val offHand = player.inventory.itemInOffHand
      if (diceItem.isDice(offHand)) {
        diceItem.updateDiceSettings(offHand, newMode = mode)
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.8f, 1.2f)
        player.sendMessage(
            Component.text("[おやさいサイコロ] 🎲 手持ちのサイコロのモードを ", NamedTextColor.GOLD)
                .append(Component.text(mode.displayName, NamedTextColor.GREEN))
                .append(Component.text(" に切り替えました！（サイコロは1人1個までです）", NamedTextColor.GOLD))
        )
        return true
      }
    }

    // 3. 未所持の場合: 新規配布
    val item = diceItem.createDice(mode)
    val leftOver = player.inventory.addItem(item)
    if (leftOver.isNotEmpty()) {
      leftOver.values.forEach { player.world.dropItem(player.location, it) }
    }
    player.playSound(player.location, Sound.ENTITY_ITEM_PICKUP, 0.8f, 1.2f)
    player.sendMessage(
        Component.text("[おやさいサイコロ] 🎲 サイコロ (", NamedTextColor.GREEN)
            .append(Component.text(mode.displayName, NamedTextColor.YELLOW))
            .append(Component.text(") を手に入れました！右クリック長押しで投げてみよう！", NamedTextColor.GREEN))
    )
    return true
  }

  /**
   * 安全にサイコロを1個配布する（重複入手・投擲中の不正入手防止）
   *
   * @return 配布成功なら true、すでに所持・投擲中なら false
   */
  @JvmOverloads
  fun giveDiceSafely(player: Player, mode: DiceMode = DiceMode.ONE_D6): Boolean {
    // 1. すでにフィールド上に投げている場合
    if (hasActiveDice(player)) {
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.8f, 1.0f)
      player.sendMessage(
          Component.text("[おやさいサイコロ] 🎲 現在サイコロを投擲中です！拾うか回収（15秒）されるまでお待ちください。", NamedTextColor.RED)
      )
      return false
    }

    // 2. すでにインベントリに持っている場合
    if (diceItem.hasDice(player)) {
      diceItem.sanitizePlayerDice(player)
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.8f, 1.0f)
      player.sendMessage(
          Component.text(
              "[おやさいサイコロ] 🎲 サイコロはすでに持っています！（スニーク＋右クリックでいつでもモード変更できます）",
              NamedTextColor.YELLOW,
          )
      )
      return false
    }

    // 3. 配布
    val item = diceItem.createDice(mode)
    val leftOver = player.inventory.addItem(item)
    if (leftOver.isNotEmpty()) {
      leftOver.values.forEach { player.world.dropItem(player.location, it) }
    }
    player.playSound(player.location, Sound.ENTITY_ITEM_PICKUP, 0.8f, 1.2f)
    player.sendMessage(
        Component.text("[おやさいサイコロ] 🎲 サイコロ (", NamedTextColor.GREEN)
            .append(Component.text(mode.displayName, NamedTextColor.YELLOW))
            .append(Component.text(") を手に入れました！右クリック長押しで投げてみよう！", NamedTextColor.GREEN))
    )
    return true
  }

  @JvmOverloads
  fun throwDice(
      player: Player,
      powerRatio: Double,
      mode: DiceMode,
      isBroadcast: Boolean = true,
      playerInertia: Vector? = null,
  ) {
    // プレイヤーの視線方向ベクトル
    val eyeLoc = player.eyeLocation
    val direction = eyeLoc.direction.normalize()

    // パワー係数 (最小0.45, 最大1.6)
    val speed = SPEED_BASE + powerRatio * SPEED_RATIO_MULTIPLIER

    // 基本の初速（視線方向＋少し上向き放物線）
    val baseVelocity =
        direction
            .multiply(speed)
            .add(Vector(0.0, LAUNCH_PITCH_BASE + powerRatio * LAUNCH_PITCH_RATIO, 0.0))

    // 走った分・ジャンプした分の移動慣性をサイコロ初速度に上乗せ
    val velocity =
        if (playerInertia != null && playerInertia.lengthSquared() > 0.0001) {
          // 水平方向は走った勢いをそのまま加算 (1.0倍)
          // 垂直方向(Y)は、ジャンプ中の上昇力(0.8倍)を反映し、落下時は下がりすぎないよう抑える(0.3倍)
          val inertiaY =
              if (playerInertia.y > 0) playerInertia.y * INERTIA_Y_JUMP
              else playerInertia.y * INERTIA_Y_FALL
          val inertia =
              Vector(
                  playerInertia.x * INERTIA_XZ_MULTIPLIER,
                  inertiaY,
                  playerInertia.z * INERTIA_XZ_MULTIPLIER,
              )
          baseVelocity.add(inertia)
        } else {
          baseVelocity
        }

    val spawnLoc = eyeLoc.clone().add(direction.clone().multiply(SPAWN_FORWARD_OFFSET))

    val group = DiceGroup(plugin, this, player.uniqueId, mode, spawnLoc, velocity, isBroadcast)
    activeGroups.add(group)
    group.start()

    // 投擲音
    player.world.playSound(spawnLoc, Sound.ENTITY_SNOWBALL_THROW, 0.8f, 0.9f)
  }

  @JvmOverloads
  fun returnDiceItem(player: Player, mode: DiceMode, isBroadcast: Boolean = true) {
    // すでにインベントリにサイコロを持っている場合は重複付与せず設定のみ更新
    if (diceItem.hasDice(player)) {
      diceItem.sanitizePlayerDice(player)
      for (item in player.inventory.contents) {
        val dice = item ?: continue
        if (diceItem.isDice(dice)) {
          diceItem.updateDiceSettings(dice, newMode = mode, newBroadcast = isBroadcast)
          break
        }
      }
      return
    }

    val item = diceItem.createDice(mode, isBroadcast)
    val leftOver = player.inventory.addItem(item)
    if (leftOver.isNotEmpty()) {
      // インベントリ満杯時は足元に安全にドロップ
      leftOver.values.forEach { player.world.dropItem(player.location, it) }
    }
  }

  fun handleEntityInteract(player: Player, entityId: Int): Boolean {
    for (group in activeGroups) {
      if (group.containsEntity(entityId)) {
        return group.collect(player)
      }
    }
    return false
  }

  fun tryCollectNearby(player: Player, targetLoc: org.bukkit.Location?): Boolean {
    for (group in activeGroups) {
      if (group.ownerUuid != player.uniqueId) continue
      val isNearTarget = targetLoc != null && group.isNear(targetLoc, NEARBY_TARGET_RADIUS_SQ)
      val isNearPlayer = group.isNear(player.location, NEARBY_PLAYER_RADIUS_SQ)
      if (isNearTarget || isNearPlayer) {
        return group.collect(player)
      }
    }
    return false
  }

  fun handlePlayerQuit(player: Player) {
    for (group in activeGroups) {
      if (group.ownerUuid == player.uniqueId) {
        group.collect(player)
      }
    }
  }

  fun updatePlayerVisibility(player: Player) {
    for (group in activeGroups) {
      group.updatePlayerVisibility(player)
    }
  }

  fun removeGroup(group: DiceGroup) {
    activeGroups.remove(group)
  }

  fun shutdown() {
    for (group in activeGroups) {
      group.forceCleanup()
      // オンラインの持ち主にアイテムを安全返却
      val owner = plugin.server.getPlayer(group.ownerUuid)
      if (owner != null && owner.isOnline) {
        returnDiceItem(owner, group.mode, group.isBroadcast)
      }
    }
    activeGroups.clear()
  }
}
