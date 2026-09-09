package io.oyasai.directstate.update

import java.util.UUID
import org.bukkit.*
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.BlockState
import org.bukkit.block.data.*
import org.bukkit.block.data.type.*
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Vehicle
import org.bukkit.event.*
import org.bukkit.event.block.BlockCanBuildEvent
import org.bukkit.event.block.BlockMultiPlaceEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BannerMeta
import org.bukkit.inventory.meta.BlockDataMeta
import org.bukkit.inventory.meta.BlockStateMeta
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.util.Vector

/** 強制配置。通常の有効な配置はバニラのパイプラインに残す。 */
internal class ForcePlacement(
    private val plugin: JavaPlugin,
    private val protectPlacement: (Player, Map<Block, BlockData>) -> Unit,
) : Listener {
  /** 複数ブロック配置を構成する、一つの座標と配置後状態。 */
  private data class Part(val block: Block, val data: BlockData)

  /** 同じクリックから届く逆の手のイベントを重複処理しないための記録。 */
  private data class HandledClick(val tick: Int, val hand: EquipmentSlot)

  private val horizontal = setOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)
  private val handled = mutableMapOf<UUID, HandledClick>()

  /** バニラが支持不足で拒否する配置だけを再現する。 trueはこの層がイベントを処理済み、falseはバニラ配置へ譲ることを表す。 */
  fun tryPlace(event: PlayerInteractEvent): Boolean {
    val player = event.player
    val hand = event.hand ?: return false
    val clicked = event.clickedBlock ?: return false
    val previousClick = handled[player.uniqueId]
    if (
        previousClick != null &&
            previousClick.tick == Bukkit.getCurrentTick() &&
            previousClick.hand != hand
    ) {
      event.isCancelled = true
      return true
    }
    val item = event.item ?: return false
    if (!allowed(player) || item.amount <= 0 || event.useItemInHand() == Event.Result.DENY)
        return false
    // ボタンやチェストなどの通常の使用と配置の挙動を維持する。それらに向けてしゃがむと配置する。
    if (
        prefersVanillaInteraction(clicked) &&
            !player.isSneaking &&
            !(clicked.type == Material.REDSTONE_WIRE && item.type == Material.REDSTONE)
    )
        return false
    val material = placementMaterial(item) ?: return false
    val signMaterial = material.name.endsWith("_SIGN")
    // 上下クリックの吊り看板だけは、バニラでは支持判定前に拒否されるため強制配置する。
    val forcedHangingSign =
        material.name.endsWith("_HANGING_SIGN") &&
            !material.name.endsWith("_WALL_HANGING_SIGN") &&
            faceIsFloorOrCeiling(event.blockFace)
    // 看板は強制配置後にBlockStateMetaを配置先へコピーする。それ以外のブロックエンティティはネイティブ配置に任せる。
    val meta = item.itemMeta
    if ((meta is BlockStateMeta || meta is SkullMeta || meta is BannerMeta) && !signMaterial)
        return false
    val face = event.blockFace
    val target = placementTarget(clicked, material, face)
    if (!withinBounds(player, target) || !target.isReplaceable) return false
    val point =
        event.interactionPoint?.toVector()?.subtract(target.location.toVector()) ?: return false
    val state =
        placementState(
            material,
            item,
            face,
            player.facing,
            player.eyeLocation.direction,
            point,
            target,
        ) ?: return false
    val parts = parts(target, state)
    if (parts.any { !withinBounds(player, it.block) || !it.block.isReplaceable || collides(it) })
        return false
    // BlockCanBuildEventの前に失敗する例 (ボタン/フック) はここに到達する。
    // 上半分はまだ配置されていない下半分に依存するため、根元の支持だけを調べる。
    // Kelpは特殊例で、アイテム配置は水ブロックを置き換えるが、配置前の支持確認では
    // 置換可能な液体を見て支持済みと報告する。update modeではネイティブ経路が優先され、
    // 抑制ガードが編集を管理する前に配置を拒否されることがある。両方のkelp状態では
    // 明示的な強制配置経路を維持する。　らしい。
    val needsForcedPlacement =
        material == Material.KELP ||
            material == Material.SEAGRASS ||
            forcedHangingSign ||
            (signMaterial && clicked.isReplaceable)
    if (state.isSupported(target) && !needsForcedPlacement) return false

    event.isCancelled = true
    handled[player.uniqueId] = HandledClick(Bukkit.getCurrentTick(), hand)
    val originalItem = player.inventory.getItem(hand).clone()
    if (!originalItem.isSimilar(item) || originalItem.amount < 1) return true
    // previousStatesは合成イベントが拒否された場合に戻す、仮配置前の全状態。
    val previousStates = parts.map { it.block.state }
    val canBuild = BlockCanBuildEvent(target, player, state, true, hand)
    plugin.server.pluginManager.callEvent(canBuild)
    if (!canBuild.isBuildable) return true

    // 別でいじってないか確認
    if (previousStates.any { it.block.blockData.asString != it.blockData.asString }) return true
    val checkedItem = player.inventory.getItem(hand)
    if (!checkedItem.isSimilar(originalItem) || checkedItem.amount != originalItem.amount)
        return true
    protectPlacement(player, parts.associate { it.block to it.data })
    parts.forEach { it.block.setBlockData(it.data, false) }
    if (signMaterial) copySignState(item, target)
    val placeEvent =
        if (parts.size == 1) {
          BlockPlaceEvent(
              target,
              previousStates.single(),
              clicked,
              originalItem.clone(),
              player,
              true,
              hand,
          )
        } else {
          BlockMultiPlaceEvent(previousStates, clicked, originalItem.clone(), player, true, hand)
        }
    plugin.server.pluginManager.callEvent(placeEvent)
    if (placeEvent.isCancelled || !placeEvent.canBuild()) {
      restore(player, previousStates)
      return true
    }
    protectPlacement(player, parts.associate { it.block to it.block.blockData })
    if (player.gameMode != GameMode.CREATIVE) {
      val current = player.inventory.getItem(hand)
      if (!current.isSimilar(originalItem) || current.amount != originalItem.amount) {
        restore(player, previousStates)
        plugin.logger.warning(
            "Force placement reverted because a placement listener changed ${player.name}'s held item."
        )
        return true
      }
      player.inventory.setItem(
          hand,
          if (current.amount == 1) ItemStack(Material.AIR) else current.clone().apply { amount-- },
      )
    }
    player.swingHand(hand)
    target.world.playSound(target.location, state.soundGroup.placeSound, 1f, 0.8f)
    // CoreProtectは受理されたBlockPlaceEventを監視するため、明示的なAPI記録も送らない。
    return true
  }

  /** 強制配置をサバイバルとクリエイティブのプレイヤーだけに限定する。 */
  private fun allowed(player: Player) =
      player.gameMode == GameMode.SURVIVAL || player.gameMode == GameMode.CREATIVE

  /** 看板は花などの置換可能ブロックを置き換えず、クリック面の隣へ配置する。 */
  private fun placementTarget(clicked: Block, material: Material, face: BlockFace): Block =
      if (
          material.name.endsWith("_SIGN") ||
              !PlacementGeometry.replaceClicked(clicked.isReplaceable, clicked.type == material)
      )
          clicked.getRelative(face)
      else clicked

  /** 高さ・読込チャンク・ワールド境界・スポーン保護の内側か確認する。 */
  private fun withinBounds(player: Player, block: Block): Boolean {
    val world = block.world
    if (
        block.y !in world.minHeight until world.maxHeight ||
            !world.isChunkLoaded(block.x shr 4, block.z shr 4) ||
            !world.worldBorder.isInside(block.location.add(0.5, 0.5, 0.5))
    )
        return false
    // 合成イベントでサーバー自身のスポーン保護確認を迂回してはならない。
    if (
        !player.isOp &&
            plugin.server.operators.isNotEmpty() &&
            world == plugin.server.worlds.firstOrNull()
    ) {
      val spawn = world.spawnLocation
      val radius = plugin.server.spawnRadius
      if (
          radius > 0 &&
              kotlin.math.max(
                  kotlin.math.abs(block.x - spawn.blockX),
                  kotlin.math.abs(block.z - spawn.blockZ),
              ) <= radius
      )
          return false
    }
    return true
  }

  /** 配置後の当たり判定が、観戦者以外の生物・乗り物と重なるか調べる。 */
  private fun collides(part: Part): Boolean {
    val boxes =
        part.data.getCollisionShape(part.block.location).boundingBoxes.map {
          it.clone()
              .shift(part.block.x.toDouble(), part.block.y.toDouble(), part.block.z.toDouble())
        }
    return boxes.any { box ->
      part.block.world.getNearbyEntities(box).any {
        (it is LivingEntity || it is Vehicle) &&
            (it !is Player || it.gameMode != GameMode.SPECTATOR) &&
            it.boundingBox.overlaps(box)
      }
    }
  }

  /** アイテムから配置ブロック材質を取得し、RedstoneとStringの特殊名も補う。 */
  private fun placementMaterial(item: ItemStack): Material? =
      when (item.type) {
        Material.REDSTONE -> Material.REDSTONE_WIRE
        Material.STRING -> Material.TRIPWIRE
        else ->
            item.type
                .asItemType()
                ?.takeIf { it.hasBlockType() }
                ?.blockType
                ?.key
                ?.asString()
                ?.let(Material::matchMaterial)
      }

  /** 通常の右クリック動作を持つブロックなら、強制配置よりバニラ操作を優先する。 Paperには正確な代替APIがないため、非推奨呼び出しをここだけに限定する。 */
  @Suppress("DEPRECATION")
  private fun prefersVanillaInteraction(block: Block) = block.type.isInteractable

  /** アイテム・クリック面・視線から、強制配置後のBlockDataを組み立てる。 */
  private fun placementState(
      material: Material,
      item: ItemStack,
      face: BlockFace,
      playerFacing: BlockFace,
      lookDirection: Vector,
      hit: Vector,
      target: Block,
  ): BlockData? {
    val wallOrTorch =
        if (face in horizontal)
            when (material) {
              Material.TORCH -> Material.WALL_TORCH
              Material.SOUL_TORCH -> Material.SOUL_WALL_TORCH
              Material.REDSTONE_TORCH -> Material.REDSTONE_WALL_TORCH
              else -> wallSignVariant(material)
            }
        else material
    val actual = hangingSignVariant(wallOrTorch, face)
    val data = actual.createBlockData()
    if (data is Directional) {
      val direction =
          when (data) {
            is Switch -> if (face in horizontal) face else playerFacing
            is TripwireHook,
            is Ladder -> if (face in horizontal) face else playerFacing.oppositeFace
            is AmethystCluster -> face
            is WallHangingSign -> wallHangingSignFacing(face, playerFacing, lookDirection)
            is WallSign -> if (face in horizontal) face else playerFacing.oppositeFace
            is Door,
            is Bed,
            is Stairs -> playerFacing
            else -> if (actual.name.endsWith("WALL_TORCH")) face else playerFacing.oppositeFace
          }
      if (direction in data.faces) data.facing = direction
    }
    if (data is FaceAttachable) {
      data.attachedFace =
          FaceAttachable.AttachedFace.valueOf(
              PlacementGeometry.attachment(
                      PlacementGeometry.Face.valueOf(face.name),
                      PlacementGeometry.Face.valueOf(playerFacing.name),
                  )
                  .mount
                  .name
          )
    }
    if (data is Lantern) data.isHanging = face == BlockFace.DOWN
    // 下面、または側面の上半分へのクリックでは、階段・トラップドア・スラブを上付きにする。
    val placeInUpperHalf = face == BlockFace.DOWN || (face != BlockFace.UP && hit.y > 0.5)
    if (data is Bisected) {
      data.half =
          if ((data is Stairs || data is TrapDoor) && placeInUpperHalf) Bisected.Half.TOP
          else Bisected.Half.BOTTOM
    }
    if (data is Slab) data.type = if (placeInUpperHalf) Slab.Type.TOP else Slab.Type.BOTTOM
    if (data is Orientable && face != BlockFace.SELF) {
      data.axis =
          when (face) {
            BlockFace.UP,
            BlockFace.DOWN -> Axis.Y
            BlockFace.EAST,
            BlockFace.WEST -> Axis.X
            else -> Axis.Z
          }
    }
    if (data is Rotatable) {
      data.rotation =
          if (data is HangingSign && face == BlockFace.DOWN) {
            PlacementGeometry.hangingSignRotation(lookDirection, playerFacing)
          } else playerFacing.oppositeFace
    }
    if (data is Waterlogged) data.isWaterlogged = target.type == Material.WATER
    val meta = item.itemMeta
    if (meta is BlockDataMeta && meta.hasBlockData()) meta.getBlockData(actual).copyTo(data)
    if (
        data is MultipleFacing &&
            actual.name in setOf("VINE", "GLOW_LICHEN", "SCULK_VEIN", "RESIN_CLUMP")
    ) {
      // これらのフラグは、ボタンの外向き方向とは異なり、支持ブロックの方を指す。
      // フラグのないツタは十字/全側面として描画されるため、既定の空状態を残さない。
      val allowed = data.allowedFaces.map { PlacementGeometry.Face.valueOf(it.name) }.toSet()
      val support =
          PlacementGeometry.surface(
              PlacementGeometry.Face.valueOf(face.name),
              allowed,
              PlacementGeometry.Face.valueOf(playerFacing.name),
          ) ?: return null
      val existing =
          (target.blockData as? MultipleFacing)?.takeIf { it.material == actual }?.faces.orEmpty()
      data.allowedFaces.forEach { data.setFace(it, it.name == support.name || it in existing) }
    }
    return data
  }

  /** 壁吊り看板をクリック面と直交させ、視線側へ正面を向ける。 */
  private fun wallHangingSignFacing(
      face: BlockFace,
      playerFacing: BlockFace,
      look: Vector,
  ): BlockFace =
      when (face) {
        BlockFace.EAST,
        BlockFace.WEST -> if (look.z > 0.0) BlockFace.NORTH else BlockFace.SOUTH
        BlockFace.NORTH,
        BlockFace.SOUTH -> if (look.x > 0.0) BlockFace.WEST else BlockFace.EAST
        else -> playerFacing.oppositeFace
      }

  /** 吊り看板をクリック面に応じて天井型または壁型の材質へ変える。 */
  private fun hangingSignVariant(material: Material, face: BlockFace): Material {
    if (!material.name.endsWith("_HANGING_SIGN") || material.name.endsWith("_WALL_HANGING_SIGN"))
        return material
    if (face == BlockFace.DOWN) return material
    return Material.matchMaterial(
        material.name.removeSuffix("_HANGING_SIGN") + "_WALL_HANGING_SIGN"
    ) ?: material
  }

  /** 通常看板を横面用の壁看板へ変える。 */
  private fun wallSignVariant(material: Material): Material {
    if (
        !material.name.endsWith("_SIGN") ||
            material.name.endsWith("_WALL_SIGN") ||
            material.name.endsWith("_HANGING_SIGN")
    )
        return material
    return Material.matchMaterial(material.name.removeSuffix("_SIGN") + "_WALL_SIGN") ?: material
  }

  /** 上面または下面へのクリックか調べる。 */
  private fun faceIsFloorOrCeiling(face: BlockFace) = face == BlockFace.UP || face == BlockFace.DOWN

  /** BlockStateMetaが持つ看板の文字・色・発光・編集状態を配置先へコピーする。 */
  private fun copySignState(item: ItemStack, target: Block) {
    val meta = item.itemMeta as? BlockStateMeta ?: return
    if (!meta.hasBlockState()) return
    val source = meta.blockState as? org.bukkit.block.Sign ?: return
    val destination = target.state as? org.bukkit.block.Sign ?: return
    for (side in org.bukkit.block.sign.Side.entries) {
      val sourceSide = source.getSide(side)
      val destinationSide = destination.getSide(side)
      for (line in 0 until 4) destinationSide.line(line, sourceSide.line(line))
      destinationSide.color = sourceSide.color
      destinationSide.isGlowingText = sourceSide.isGlowingText
    }
    destination.isWaxed = source.isWaxed
    destination.update(true, false)
  }

  /** ベッド・二段ブロックを全パーツへ展開し、単体ブロックは一件だけ返す。 */
  private fun parts(target: Block, data: BlockData): List<Part> {
    if (data is Bed) {
      data.part = Bed.Part.FOOT
      val head = data.clone() as Bed
      head.part = Bed.Part.HEAD
      return listOf(Part(target, data), Part(target.getRelative(data.facing), head))
    }
    if (data is Bisected && data !is Stairs && data !is TrapDoor && data !is Ageable) {
      data.half = Bisected.Half.BOTTOM
      val top = data.clone() as Bisected
      top.half = Bisected.Half.TOP
      return listOf(Part(target, data), Part(target.getRelative(BlockFace.UP), top))
    }
    return listOf(Part(target, data))
  }

  /** 合成配置が拒否されたとき、全パーツと更新ガードを配置前へ戻す。 */
  private fun restore(player: Player, previous: List<BlockState>) {
    // 拒否された配置は、リスナーが変更した部分も含めて仮配置全体をロールバックする。
    // ガードのスナップショットも置き換えないと、同材質のロールバックが次のtickで取り消される。
    protectPlacement(player, previous.associate { it.block to it.blockData })
    previous.forEach { it.update(true, false) }
  }

  /** 切断したプレイヤーの重複クリック・バニラ配置待ちを破棄する。 */
  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    handled.remove(event.player.uniqueId)
  }
}
