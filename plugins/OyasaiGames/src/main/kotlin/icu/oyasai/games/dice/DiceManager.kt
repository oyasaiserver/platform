package icu.oyasai.games.dice

import java.util.UUID
import java.util.concurrent.CopyOnWriteArrayList
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin
import org.bukkit.util.Vector

class DiceManager(val plugin: Plugin, val diceItem: DiceItem) {
  var chargeManager: DiceChargeManager? = null
  private val activeGroups = CopyOnWriteArrayList<DiceGroup>()

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
  fun throwDice(player: Player, powerRatio: Double, mode: DiceMode, isBroadcast: Boolean = true) {
    // プレイヤーの視線方向ベクトル
    val eyeLoc = player.eyeLocation
    val direction = eyeLoc.direction.normalize()

    // パワー係数 (最小0.45, 最大1.6)
    val speed = 0.45 + powerRatio * 1.15

    // 少し上向きに放物線を描かせる
    val velocity = direction.multiply(speed).add(Vector(0.0, 0.15 + powerRatio * 0.1, 0.0))

    val spawnLoc = eyeLoc.clone().add(direction.clone().multiply(0.4))

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
      val isNearTarget = targetLoc != null && group.isNear(targetLoc, 6.25)
      val isNearPlayer = group.isNear(player.location, 16.0)
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

  fun hideBedrockEntitiesFor(player: Player) {
    updatePlayerVisibility(player)
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
