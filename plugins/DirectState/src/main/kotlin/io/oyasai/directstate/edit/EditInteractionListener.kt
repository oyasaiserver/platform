package io.oyasai.directstate.edit

import io.oyasai.directstate.Permissions
import io.oyasai.directstate.edit.hand.HandEditor
import io.oyasai.directstate.edit.hand.HandGeometry
import io.oyasai.directstate.edit.hold.HoldEditor
import io.oyasai.directstate.edit.replace.BlockReplacement
import io.oyasai.directstate.edit.replace.TypeReplaceMode
import io.oyasai.directstate.edit.shape.ShapeEditor
import io.oyasai.directstate.integration.BlockEntityAccess
import io.oyasai.directstate.settings.PlayerSettingsStore
import io.papermc.paper.event.player.PlayerStopUsingItemEvent
import kotlin.math.floor
import net.kyori.adventure.text.Component
import org.bukkit.FluidCollisionMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.block.Block
import org.bukkit.block.TileState
import org.bukkit.block.data.type.Door
import org.bukkit.entity.Cushion
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemConsumeEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.inventory.EquipmentSlot

/**
 * Bukkitの操作イベントを、Hand編集・シンプル棒・ホールド棒・素材置換の各処理へ振り分ける。 この層を挟むことで、各EditorはBukkitイベントのキャンセル規則を知らずに済む。
 */
internal class EditInteractionListener(
    private val playerSettings: PlayerSettingsStore,
    private val tools: ToolItems,
    private val holdEditor: HoldEditor,
    private val edits: BlockEditService,
    private val shapeEditor: ShapeEditor,
    private val handEditor: HandEditor,
    private val blockReplacement: BlockReplacement,
    private val ignoredBlockPdcKeys: Set<NamespacedKey> = emptySet(),
    private val canEditEntity: (Player, Location) -> Boolean = { _, _ -> true },
) : Listener {
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun cushion(event: PlayerInteractAtEntityEvent) {
    val cushion = event.rightClicked as? Cushion ?: return
    val player = event.player
    val handTool = tools.isHandTool(player.inventory.itemInMainHand)
    if (!handTool && !wantsHandEditing(player)) return
    val from = cushion.location
    val point = event.clickedPosition.clone().add(from.toVector())
    if (!point.x.isFinite() || !point.y.isFinite() || !point.z.isFinite()) return
    val eye = player.eyeLocation.toVector()
    val direction = point.subtract(eye)
    if (direction.lengthSquared() == 0.0) return
    val box = cushion.boundingBox
    val face = box.rayTrace(eye, direction, 6.0)?.hitBlockFace ?: return
    if (face !in HandGeometry.sixFaces) return
    event.isCancelled = true
    if (event.hand != EquipmentSlot.HAND) return
    if (!Permissions.has(player, if (handTool) Permissions.STICK else Permissions.HAND)) {
      player.sendActionBar(Component.text("権限が必要です"))
      return
    }
    val to =
        from.clone().apply {
          // 押した軸だけ1/8刻みへ揃え、他の座標はそのまま保つ。
          if (face.modX != 0) x = Math.round(x * 8 - face.modX).toDouble() / 8
          if (face.modY != 0) y = Math.round(y * 8 - face.modY).toDouble() / 8
          if (face.modZ != 0) z = Math.round(z * 8 - face.modZ).toDouble() / 8
        }
    val moved = box.clone().shift(to.x - from.x, to.y - from.y, to.z - from.z)
    val world = cushion.world
    if (moved.minY < world.minHeight || moved.maxY > world.maxHeight) return
    if (
        !world.worldBorder.isInside(Location(world, moved.minX, to.y, moved.minZ)) ||
            !world.worldBorder.isInside(
                Location(world, Math.nextDown(moved.maxX), to.y, Math.nextDown(moved.maxZ))
            )
    )
        return
    for (x in (floor(moved.minX).toInt() shr 4)..(floor(Math.nextDown(moved.maxX)).toInt() shr 4)) {
      for (z in
          (floor(moved.minZ).toInt() shr 4)..(floor(Math.nextDown(moved.maxZ)).toInt() shr 4)) {
        if (!world.isChunkLoaded(x, z)) return
      }
    }
    if (
        !player.isOp &&
            player.server.operators.isNotEmpty() &&
            world == player.server.worlds.firstOrNull()
    ) {
      val spawn = world.spawnLocation
      val radius = player.server.spawnRadius
      if (
          radius > 0 &&
              listOf(from, to).any {
                kotlin.math.max(
                    kotlin.math.abs(it.blockX - spawn.blockX),
                    kotlin.math.abs(it.blockZ - spawn.blockZ),
                ) <= radius
              }
      )
          return
    }
    if (!canEditEntity(player, from) || !canEditEntity(player, to)) return
    holdEditor.stop(player.uniqueId)
    if (cushion.teleport(to)) player.swingHand(EquipmentSlot.HAND)
  }

  /** DirectStateが扱う操作だけを受理し、バニラ操作と他プラグインの拒否を尊重して振り分ける。 */
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun interact(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    val item = event.item
    val handTool = tools.isHandTool(item)
    val emptyHandEditing = wantsHandEditing(event)
    if (emptyHandEditing && ignoredBlockPdcKeys.isNotEmpty()) {
      val state = event.clickedBlock?.state
      if (state is TileState && ignoredBlockPdcKeys.any { state.persistentDataContainer.has(it) })
          return
    }
    val handEditing = handTool || emptyHandEditing
    val directReplacement = wantsDirectReplacement(event)
    if (!tools.isTool(item) && !handEditing && !directReplacement) return

    val leftClick = event.action == Action.LEFT_CLICK_BLOCK
    val holdTool = tools.isHoldTool(item)
    if (
        !leftClick &&
            event.action != Action.RIGHT_CLICK_BLOCK &&
            event.action != Action.RIGHT_CLICK_AIR
    )
        return
    val player = event.player
    val permission =
        when {
          holdTool -> Permissions.HOLD_STICK
          handTool -> Permissions.STICK
          tools.isTool(item) -> Permissions.SIMPLE_STICK
          handEditing -> Permissions.HAND
          else -> Permissions.REPLACE
        }
    if (!Permissions.has(player, permission)) {
      event.isCancelled = true
      player.sendActionBar(Component.text("権限が必要です"))
      return
    }

    // 未対応ブロックではイベントを消費せず、チェスト等の通常操作を残す。
    val clickedBlock = event.clickedBlock
    if (handEditing && (clickedBlock == null || !handEditor.supports(clickedBlock.blockData)))
        return
    if (event.clickedBlock != null && event.useInteractedBlock() == Event.Result.DENY) return
    if (!leftClick && event.useItemInHand() == Event.Result.DENY) return

    event.setUseInteractedBlock(Event.Result.DENY)
    event.setUseItemInHand(if (holdTool && !leftClick) Event.Result.ALLOW else Event.Result.DENY)
    if ((holdTool || handTool) && leftClick) return
    if (holdTool && holdEditor.isEditing(player.uniqueId)) return
    editTarget(event, handEditing, directReplacement, holdTool, leftClick)
  }

  /** 素手編集を選ぶ条件。両手が空で、スニークしていない右クリックだけを受け付ける。 */
  private fun wantsHandEditing(event: PlayerInteractEvent): Boolean {
    return event.action == Action.RIGHT_CLICK_BLOCK && wantsHandEditing(event.player)
  }

  private fun wantsHandEditing(player: Player): Boolean {
    val configured = playerSettings.get(player.uniqueId)
    // 素手編集は片方の手にでもアイテムがあれば、通常のMinecraft操作へ譲る。
    val bothHandsEmpty =
        player.inventory.itemInMainHand.type.isAir && player.inventory.itemInOffHand.type.isAir
    return configured.handEnabled &&
        !configured.itemlessModesDisabled &&
        !player.isSneaking &&
        bothHandsEmpty
  }

  /** 手持ちブロックによる置換を選ぶ条件。編集棒は置換用ブロックとして扱わない。 */
  private fun wantsDirectReplacement(event: PlayerInteractEvent): Boolean {
    val item = event.item ?: return false
    val configured = playerSettings.get(event.player.uniqueId)
    return configured.replacementEnabled &&
        !configured.itemlessModesDisabled &&
        !event.player.isSneaking &&
        event.action == Action.RIGHT_CLICK_BLOCK &&
        !tools.isTool(item) &&
        item.type.isBlock &&
        !item.type.isAir &&
        event.clickedBlock != null
  }

  /** イベントのクリック位置をブロック内座標へ直し、選ばれたEditorを一つだけ実行する。 振り分け後に共通のray traceとロック確認を行うため、各モードで判定がずれない。 */
  private fun editTarget(
      event: PlayerInteractEvent,
      handEditing: Boolean,
      directReplacement: Boolean,
      holdTool: Boolean,
      leftClick: Boolean,
  ) {
    val player = event.player
    val ray = player.rayTraceBlocks(6.0, FluidCollisionMode.NEVER) ?: return
    val block = ray.hitBlock ?: return
    if (event.clickedBlock != block) return

    if (directReplacement) {
      val replacement = event.item?.type ?: return
      replace(player, block, replacement, playerSettings.get(player.uniqueId).typeReplacementMode)
      return
    }

    val data = block.blockData
    val supported =
        when {
          holdTool -> holdEditor.supports(data)
          handEditing -> handEditor.supports(data)
          else -> shapeEditor.supports(data)
        }
    if (!supported) return

    if (holdEditor.isLocked(block, player.uniqueId)) {
      player.sendActionBar(Component.text("他のプレイヤーが編集中です"))
      return
    }
    if (holdTool) {
      holdEditor.start(player, block, data, ray.hitPosition, ray.hitBlockFace)
      return
    }

    holdEditor.stop(player.uniqueId)
    val hitInsideBlock = ray.hitPosition.clone().subtract(block.location.toVector())
    if (handEditing) {
      val blockEntityPresent =
          when (data.material.name) {
            "BELL",
            "ENCHANTING_TABLE" -> BlockEntityAccess.hasBody(block)
            else -> true
          }
      val result = handEditor.edit(data, hitInsideBlock, ray.hitBlockFace, blockEntityPresent)
      if (result != null) {
        applyHandEdit(player, block, result)
        player.swingHand(EquipmentSlot.HAND)
      }
    } else {
      val edited = shapeEditor.edit(data, hitInsideBlock, ray.hitBlockFace, !leftClick)
      edits.apply(player, listOf(BlockEdit(block, edited)))
    }
  }

  /** ロック確認後に置換計画を適用し、最終材質をプレイヤーへ表示する。 */
  private fun replace(
      player: Player,
      block: Block,
      sampled: Material,
      typeReplace: TypeReplaceMode,
  ) {
    if (holdEditor.isLocked(block, player.uniqueId)) {
      player.sendActionBar(Component.text("他のプレイヤーが編集中です"))
      return
    }

    val plan = blockReplacement.plan(block, sampled, typeReplace) ?: return
    holdEditor.stop(player.uniqueId)
    edits.apply(player, plan.changes)
    player.sendActionBar(Component.text("素材置換: ${plan.target.key.key}"))
  }

  /** Handの材質変更と複数ブロック変更を整えてから、共通の編集サービスへ渡す。 */
  private fun applyHandEdit(player: Player, block: Block, result: HandEditor.Result) {
    val data =
        if (result.material == null) {
          result.data
        } else {
          blockReplacement.convert(result.data, result.material, TypeReplaceMode.OFF)
        }
    val changedBlocks = mutableListOf(BlockEdit(block, data, result.blockEntityPresent))
    if (data is Door) {
      val other = blockReplacement.counterpart(block)
      if (other != null) {
        val otherData = other.blockData
        if (otherData is Door)
            changedBlocks += BlockEdit(other, otherData.apply { isOpen = data.isOpen })
      }
    }
    edits.apply(player, changedBlocks)
    if (result.sound != null) player.playSound(block.location, result.sound, 0.7f, 1.0f)
  }

  /** ホールド終了時にセッションと、そのプレイヤーの保留ログを確定する。 */
  private fun finishEditing(player: Player) {
    holdEditor.stop(player.uniqueId)
    edits.flush(player.uniqueId)
  }

  /** アイテム使用をやめたら、ドラッグ編集も終了する。 */
  @EventHandler fun stop(event: PlayerStopUsingItemEvent) = finishEditing(event.player)

  /** 切断したプレイヤーのドラッグ状態を残さない。 */
  @EventHandler fun quit(event: PlayerQuitEvent) = finishEditing(event.player)

  /** 選択スロットを変えたら、別の道具で編集が続かないよう終了する。 */
  @EventHandler fun held(event: PlayerItemHeldEvent) = finishEditing(event.player)

  /** 手を入れ替えたら、編集開始時と道具が変わるため終了する。 */
  @EventHandler fun swap(event: PlayerSwapHandItemsEvent) = finishEditing(event.player)

  /** 編集道具を食べ物として消費できないようにする。 */
  @EventHandler
  fun consume(event: PlayerItemConsumeEvent) {
    if (tools.isTool(event.item)) event.isCancelled = true
  }

  /** 編集道具の左クリックで、対象ブロック自体が壊れるのを防ぐ。 */
  @EventHandler
  fun breakBlock(event: BlockBreakEvent) {
    if (tools.isTool(event.player.inventory.itemInMainHand)) event.isCancelled = true
  }
}
