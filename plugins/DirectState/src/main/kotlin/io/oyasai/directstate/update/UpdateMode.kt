package io.oyasai.directstate.update

import com.destroystokyo.paper.event.block.BlockDestroyEvent
import io.oyasai.directstate.Permissions
import io.papermc.paper.event.player.PlayerOpenSignEvent
import java.util.UUID
import org.bukkit.Tag
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Openable
import org.bukkit.block.data.type.Bed
import org.bukkit.block.data.type.Door
import org.bukkit.block.data.type.Switch
import org.bukkit.entity.FallingBlock
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.block.*
import org.bukkit.event.entity.EntityChangeBlockEvent
import org.bukkit.event.hanging.HangingBreakEvent
import org.bukkit.event.player.*
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin

// AI生成
/** 編集直後の周辺更新を短時間だけ止め、Update Mode中の操作を安全な直接編集へ変える。 */
internal class UpdateMode(
    private val plugin: JavaPlugin,
    private val isTool: (ItemStack?) -> Boolean,
    private val regionRule: PlayerUpdateRule,
    private val personalSetting: (Player) -> Boolean,
    private val writePersonalSetting: (Player, Boolean) -> Unit,
    private val write: (Player, Block, BlockData) -> Unit,
) : Listener {
  /** UpdateGuardのキーに使う、ワールドとブロック座標。 */
  private data class Position(val world: UUID, val x: Int, val y: Int, val z: Int)

  /** 周辺更新で変わった場合に復元するブロックと状態。 */
  private data class Saved(val block: Block, val data: BlockData)

  /** ボタンを戻すプレイヤー・元状態・押下後状態・実行tick。　押されたちょっと後にボタンを戻す。 */
  private data class ButtonReset(
      val player: Player,
      val saved: Saved,
      val expected: String,
      val at: Long,
  )

  private val guard = UpdateGuard<Position, Saved>()
  private val buttons = mutableMapOf<Position, ButtonReset>()
  private var tick = 0L
  private val forcePlacement = ForcePlacement(plugin, ::protectPlacement)

  init {
    plugin.server.pluginManager.registerEvents(forcePlacement, plugin)
    plugin.server.scheduler.runTaskTimer(plugin, Runnable { tick() }, 1L, 1L)
  }

  /** 個人のUpdate Modeを現在値の反対へ切り替える。 */
  fun toggle(player: Player) {
    setPersonal(player, !personalEnabled(player))
  }

  /** 個人設定を保存し、個人設定とリージョン設定の両方を表示する。 */
  fun setPersonal(player: Player, value: Boolean) {
    writePersonalSetting(player, value)
    player.sendMessage("更新抑制: ${if (value) "ON" else "OFF"}")
  }

  /** 権限があり、保存済みの個人設定が有効か調べる。 */
  fun personalEnabled(player: Player) =
      Permissions.has(player, Permissions.UPDATE) && personalSetting(player)

  /** 個人設定またはWorldGuard領域設定のどちらかが有効か調べる。 */
  private fun enabled(player: Player) = personalEnabled(player) || regionRule.suppress(player)

  /** Bukkit BlockをUpdateGuard用の不変な座標へ変換する。 */
  private fun position(block: Block) = Position(block.world.uid, block.x, block.y, block.z)

  /** ブロックのチャンクが現在読み込まれているか調べる。 */
  private fun loaded(block: Block) = block.world.isChunkLoaded(block.x shr 4, block.z shr 4)

  /** ベッドの相を返す。 */
  private fun bedCounterpart(block: Block): Block? {
    val data = block.blockData as? Bed ?: return null
    val other =
        block.getRelative(if (data.part == Bed.Part.FOOT) data.facing else data.facing.oppositeFace)
    return other.takeIf {
      (it.blockData as? Bed)?.let { otherData -> otherData.part != data.part } == true
    }
  }

  /** 強制配置する全パーツをガードへ登録し、配置後の状態を復元候補として残す。 */
  private fun protectPlacement(player: Player, parts: Map<Block, BlockData>) {
    beforeEdit(player, parts.keys.toList())
    parts.forEach { (block, data) ->
      guard.retain(position(block), Saved(block, data.clone()), tick)
    }
  }

  /** 編集元の周囲2ブロックを保存し、短時間の更新抑制対象として登録する。 */
  fun beforeEdit(player: Player, roots: List<Block>) {
    roots.forEach { guard.forget(position(it)) }
    if (!enabled(player)) return
    val nearby = mutableMapOf<Position, Saved>()
    for (root in roots) for (x in -2..2) for (y in -2..2) for (z in -2..2) {
      if (root.y + y !in root.world.minHeight until root.world.maxHeight) continue
      if (!root.world.isChunkLoaded((root.x + x) shr 4, (root.z + z) shr 4)) continue
      val block = root.getRelative(x, y, z)
      if (!block.type.isAir) nearby[position(block)] = Saved(block, block.blockData.clone())
    }
    guard.mark(roots.map(::position).toSet(), nearby, tick)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  /** 破壊前に周囲を保護し、Update Mode中は消えたベッドの相方を次tickに戻す。 */
  fun breakBlock(event: BlockBreakEvent) {
    beforeEdit(event.player, listOf(event.block))
    if (!enabled(event.player)) return
    val counterpart = bedCounterpart(event.block) ?: return
    val saved = counterpart.blockData.clone()
    plugin.server.scheduler.runTask(
        plugin,
        Runnable {
          if (loaded(counterpart) && counterpart.type.isAir) write(event.player, counterpart, saved)
        },
    )
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  /** 通常配置・複数ブロック配置の全変更位置を保護する。 */
  fun place(event: BlockPlaceEvent) {
    if (!event.canBuild()) return
    val blocks =
        if (event is BlockMultiPlaceEvent) event.replacedBlockStates.map { it.block }
        else listOf(event.blockPlaced)
    beforeEdit(event.player, blocks)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** Update Mode中の看板配置で、直後の編集画面が開かないようにする。 */
  fun signOpen(event: PlayerOpenSignEvent) {
    if (event.cause == PlayerOpenSignEvent.Cause.PLACE && enabled(event.player))
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  /** 感圧操作を止め、右クリックのボタン・ドア等を更新なしの直接編集へ変える。 */
  fun interact(event: PlayerInteractEvent) {
    val player = event.player
    if (!enabled(player)) return
    val block = event.clickedBlock ?: return
    if (event.useInteractedBlock() == Event.Result.DENY) return
    if (event.action == Action.PHYSICAL) {
      // 信号が発生する前に、プレイヤー位置を起点とするプレート作動・トリップワイヤー・踏み荒らしを防ぐ。
      event.setUseInteractedBlock(Event.Result.DENY)
      return
    }
    if (isTool(event.item)) return
    if (event.action != Action.RIGHT_CLICK_BLOCK) return
    if (forcePlacement.tryPlace(event)) return
    val data = block.blockData
    val holdingItemWhileSneaking =
        player.isSneaking &&
            (!player.inventory.itemInMainHand.type.isAir ||
                !player.inventory.itemInOffHand.type.isAir)
    val directlyToggleable = (data is Switch || data is Openable) && !holdingItemWhileSneaking
    if (directlyToggleable) {
      event.setUseInteractedBlock(Event.Result.DENY)
      if (event.hand != EquipmentSlot.HAND) return
      event.setUseItemInHand(Event.Result.DENY)
      if (data is Switch) {
        val button = Tag.BUTTONS.isTagged(block.type)
        if (button && data.isPowered) return
        val previous = data.clone()
        data.isPowered = !data.isPowered
        write(player, block, data)
        if (button)
            buttons[position(block)] =
                ButtonReset(
                    player,
                    Saved(block, previous),
                    data.asString,
                    tick + if (Tag.WOODEN_BUTTONS.isTagged(block.type)) 30 else 20,
                )
      } else if (data is Openable) {
        data.isOpen = !data.isOpen
        val parts = mutableListOf(block to data)
        if (data is Door) {
          val other =
              block.getRelative(
                  if (data.half == Bisected.Half.BOTTOM) BlockFace.UP else BlockFace.DOWN
              )
          val otherData = other.blockData
          if (other.type == block.type && otherData is Door && otherData.half != data.half) {
            otherData.isOpen = data.isOpen
            parts += other to otherData
          }
        }
        parts.forEach { (part, state) -> write(player, part, state) }
      }
    } else {
      // 例: クワ/斧の操作。通常の対象ブロック変更は維持する。
      beforeEdit(player, listOf(block))
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  /** バケツで液体を置く前に周囲を保護する。 */
  fun bucketEmpty(event: PlayerBucketEmptyEvent) {
    beforeEdit(event.player, listOf(event.block))
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  /** バケツで液体を取る前に周囲を保護する。 */
  fun bucketFill(event: PlayerBucketFillEvent) {
    beforeEdit(event.player, listOf(event.block))
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** 編集元または周辺から発生した物理更新を止める。 */
  fun physics(event: BlockPhysicsEvent) {
    if (
        guard.active(position(event.block), tick) || guard.active(position(event.sourceBlock), tick)
    )
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード中ブロックの破壊イベントを止める。 */
  fun destroy(event: BlockDestroyEvent) {
    if (guard.active(position(event.block), tick)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード中座標で砂・砂利等が落下ブロックへ変わるのを止める。 */
  fun falling(event: EntityChangeBlockEvent) {
    if (event.entity is FallingBlock && guard.active(position(event.block), tick))
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  /** 周辺ブロックのレッドストーン出力を現在値に固定する。 */
  fun redstone(event: BlockRedstoneEvent) {
    if (guard.neighbor(position(event.block), tick)) event.newCurrent = event.oldCurrent
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード中ブロックから、またはガード中周辺への液体移動を止める。 */
  fun flow(event: BlockFromToEvent) {
    if (guard.active(position(event.block), tick) || guard.neighbor(position(event.toBlock), tick))
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード範囲を動かすピストン伸長を止める。 */
  fun piston(event: BlockPistonExtendEvent) {
    if (
        guard.active(position(event.block), tick) ||
            event.blocks.any { guard.neighbor(position(it), tick) }
    )
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード範囲を動かすピストン収縮を止める。 */
  fun retract(event: BlockPistonRetractEvent) {
    if (
        guard.active(position(event.block), tick) ||
            event.blocks.any { guard.neighbor(position(it), tick) }
    )
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード中周辺のディスペンサー作動を止める。 */
  fun dispense(event: BlockDispenseEvent) {
    if (guard.neighbor(position(event.block), tick)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** Update Modeのプレイヤーまたはガード範囲が起こす振動を止める。 */
  fun vibration(event: BlockReceiveGameEvent) {
    val player = event.entity as? Player
    if ((player != null && enabled(player)) || guard.active(position(event.block), tick))
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード範囲でブロックが燃え尽きるのを止める。 */
  fun burn(event: BlockBurnEvent) {
    if (
        guard.active(position(event.block), tick) ||
            event.ignitingBlock?.let { guard.active(position(it), tick) } == true
    )
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** プレイヤー着火は保護し、自然着火はガード範囲なら止める。 */
  fun ignite(event: BlockIgniteEvent) {
    val player = event.player
    if (player != null) {
      beforeEdit(player, listOf(event.block))
    } else if (
        guard.neighbor(position(event.block), tick) ||
            event.ignitingBlock?.let { guard.active(position(it), tick) } == true
    ) {
      event.isCancelled = true
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** ガード元から周辺への延焼・成長を止める。 */
  fun spread(event: BlockSpreadEvent) {
    if (guard.active(position(event.source), tick) || guard.neighbor(position(event.block), tick))
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** 周辺座標でのブロック生成を止める。 */
  fun form(event: BlockFormEvent) {
    if (guard.neighbor(position(event.block), tick)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** 周辺座標での融解・消滅を止める。 */
  fun fade(event: BlockFadeEvent) {
    if (guard.neighbor(position(event.block), tick)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** 周辺座標での植物成長を止める。 */
  fun grow(event: BlockGrowEvent) {
    if (guard.neighbor(position(event.block), tick)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** 周辺座標での葉の自然消滅を止める。 */
  fun decay(event: LeavesDecayEvent) {
    if (guard.neighbor(position(event.block), tick)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  /** プレイヤーの骨粉操作前に対象周辺を保護する。 */
  fun fertilize(event: BlockFertilizeEvent) {
    event.player?.let { beforeEdit(it, listOf(event.block)) }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** Update Modeのプレイヤーまたはガード範囲によるTNT着火を止める。 */
  fun tnt(event: TNTPrimeEvent) {
    val player = event.primingEntity as? Player
    if (
        (player != null && enabled(player)) ||
            guard.active(position(event.block), tick) ||
            event.primingBlock?.let { guard.active(position(it), tick) } == true
    )
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  /** 物理・閉塞による額縁等の破壊を、ガード範囲では止める。 */
  fun hanging(event: HangingBreakEvent) {
    if (
        event.cause != HangingBreakEvent.RemoveCause.PHYSICS &&
            event.cause != HangingBreakEvent.RemoveCause.OBSTRUCTION
    )
        return
    val block = event.entity.location.block
    if (
        guard.active(position(block), tick) ||
            guard.active(position(block.getRelative(event.entity.attachedFace)), tick)
    )
        event.isCancelled = true
  }

  /** 保存状態を復元し、ボタンの戻し時刻とガード期限を一tick進める。 */
  private fun tick() {
    // バニラが物理イベントなしで行える、同材質の隣接ブロックの形状変更を修復する。
    // 空気を復活させたり別の材質に置き換えたりしない。ドロップの重複や編集の上書きにつながるため。
    for ((_, saved) in guard.snapshots(tick)) {
      if (
          loaded(saved.block) &&
              saved.block.type == saved.data.material &&
              saved.block.blockData.asString != saved.data.asString
      ) {
        saved.block.setBlockData(saved.data, false)
      }
    }
    val due = buttons.filterValues { it.at <= tick }.keys.toList()
    for (key in due) buttons.remove(key)?.let(::resetButton)
    tick++
    guard.expire(tick)
  }

  /** 押下後の状態が保たれているボタンだけを、保存した状態へ戻す。 */
  private fun resetButton(reset: ButtonReset) {
    val saved = reset.saved
    if (loaded(saved.block) && saved.block.blockData.asString == reset.expected)
        write(reset.player, saved.block, saved.data)
  }

  /** 停止時にボタンを戻し、すべての保留状態を破棄する。 */
  fun close() {
    buttons.values.toList().forEach(::resetButton)
    buttons.clear()
    guard.clear()
  }
}
