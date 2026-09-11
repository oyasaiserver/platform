package io.oyasai.directstate.edit

import io.oyasai.directstate.Permissions
import io.oyasai.directstate.edit.hand.HandEditor
import io.oyasai.directstate.edit.hold.HoldEditor
import io.oyasai.directstate.edit.replace.BlockReplacement
import io.oyasai.directstate.edit.replace.TypeReplaceMode
import io.oyasai.directstate.edit.shape.ShapeEditor
import io.oyasai.directstate.integration.BlockEntityAccess
import io.oyasai.directstate.settings.PlayerSettingsStore
import io.papermc.paper.event.player.PlayerStopUsingItemEvent
import net.kyori.adventure.text.Component
import org.bukkit.FluidCollisionMode
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.data.type.Door
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
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
) : Listener {
  /** DirectStateが扱う操作だけを受理し、バニラ操作と他プラグインの拒否を尊重して振り分ける。 */
  @EventHandler(priority = EventPriority.HIGHEST)
  fun interact(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    val item = event.item
    val handTool = tools.isHandTool(item)
    val handEditing = handTool || wantsHandEditing(event)
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
    val player = event.player
    val configured = playerSettings.get(player.uniqueId)
    // 素手編集は片方の手にでもアイテムがあれば、通常のMinecraft操作へ譲る。
    val bothHandsEmpty =
        player.inventory.itemInMainHand.type.isAir && player.inventory.itemInOffHand.type.isAir
    return configured.handEnabled &&
        !configured.itemlessModesDisabled &&
        !player.isSneaking &&
        bothHandsEmpty &&
        event.action == Action.RIGHT_CLICK_BLOCK
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
