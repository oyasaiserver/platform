package icu.oyasai.utilities.debugonbe.display

import com.mojang.datafixers.util.Pair as MojangPair
import icu.oyasai.utilities.debugonbe.model.ArmorStandPlacement
import it.unimi.dsi.fastutil.shorts.ShortOpenHashSet
import java.util.logging.Logger
import net.minecraft.core.BlockPos
import net.minecraft.core.Rotations
import net.minecraft.core.SectionPos
import net.minecraft.network.protocol.game.ClientboundAddEntityPacket
import net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket
import net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket
import net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket
import net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket
import net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket
import net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket
import net.minecraft.world.entity.EquipmentSlot
import net.minecraft.world.entity.ai.attributes.Attributes
import net.minecraft.world.level.block.Block as NmsBlock
import net.minecraft.world.level.block.Blocks
import net.minecraft.world.level.block.LightBlock
import net.minecraft.world.level.block.state.BlockState
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.craftbukkit.CraftWorld
import org.bukkit.craftbukkit.entity.CraftPlayer
import org.bukkit.craftbukkit.inventory.CraftItemStack
import org.bukkit.craftbukkit.util.CraftMagicNumbers
import org.bukkit.entity.Player

/**
 * Paperweight の NMS アクセスを使い、クライアント側のブロック表示・光データをパケットで制御する。
 *
 * サーバー側のブロックデータは一切変更せず、クライアント側にのみ適用される。
 *
 * ## Moonrise（Starlight 後継）対応
 * Paper 1.21 以降では LevelLightEngine の実装が Moonrise（StarLightInterface）に 差し替えられており、vanilla の
 * visibleSectionData フィールドが存在しない。 このため光データパケットは LevelLightEngine を経由せず、
 * [ClientboundLightUpdatePacketData] をリフレクションで直接構築して送信する。
 */
class PacketBlockHider(private val plugin: org.bukkit.plugin.Plugin) {

  private val logger = Logger.getLogger("CustomBlockModels")

  // ────────────────────────────────────────────────────────────────
  // ブロック表示パケット
  // ────────────────────────────────────────────────────────────────

  fun hideBlock(player: Player, block: Block, replacementMaterial: Material = Material.AIR) {
    val replacementState =
        if (replacementMaterial.isAir) {
          Blocks.AIR.defaultBlockState()
        } else {
          CraftMagicNumbers.getBlock(replacementMaterial).defaultBlockState()
        }
    sendBlockPacket(player, block.location, replacementState)
  }

  fun restoreBlock(player: Player, block: Block) {
    val nmsWorld = (block.world as CraftWorld).handle
    val pos = BlockPos(block.x, block.y, block.z)
    val actualState = nmsWorld.getBlockState(pos)
    sendBlockPacket(player, block.location, actualState)
  }

  fun showLightBlock(player: Player, block: Block) {
    val lightState: BlockState = Blocks.LIGHT.defaultBlockState().setValue(LightBlock.LEVEL, 15)
    sendBlockPacket(player, block.location, lightState)
  }

  fun restoreLightBlock(player: Player, block: Block) {
    restoreBlock(player, block)
  }

  fun hideBlocks(player: Player, blocks: List<Block>) {
    val craftPlayer = player as CraftPlayer
    val bySectionPos =
        blocks.groupBy { block -> SectionPos.of(BlockPos(block.x, block.y, block.z)) }
    for ((sectionPos, sectionBlocks) in bySectionPos) {
      if (sectionBlocks.size == 1) {
        hideBlock(player, sectionBlocks.first())
        continue
      }
      val shortSet = ShortOpenHashSet()
      val stateList = mutableListOf<BlockState>()
      for (block in sectionBlocks) {
        val localX = block.x and 0xF
        val localY = block.y and 0xF
        val localZ = block.z and 0xF
        val packed = ((localX shl 8) or (localZ shl 4) or localY).toShort()
        shortSet.add(packed)
        stateList.add(Blocks.AIR.defaultBlockState())
      }
      val packet =
          ClientboundSectionBlocksUpdatePacket(sectionPos, shortSet, stateList.toTypedArray())
      craftPlayer.handle.connection.send(packet)
    }
  }

  // ────────────────────────────────────────────────────────────────
  // 光データパケット（Bedrock 暗黒化問題の修正用）
  // ────────────────────────────────────────────────────────────────

  // 状態を管理するデータクラス
  private data class FakeBlockState(
      var active: Boolean = true,
      var entityId: Int? = null,
      var task: org.bukkit.scheduler.BukkitTask? = null,
  )

  // プレイヤーごと・ブロック位置（"worldName:x,y,z"）ごとの状態マップ
  private val fakeBlocks =
      java.util.concurrent.ConcurrentHashMap<Player, MutableMap<String, FakeBlockState>>()

  private fun getBlockKey(block: Block): String {
    return "${block.world.name}:${block.x},${block.y},${block.z}"
  }

  /**
   * 指定ブロック位置を空気ブロックに偽装しつつ、 元のブロックの見た目を持った FallingBlock を被せることで 統合版の「不透過ブロック内のエンティティが真っ黒になる」問題を解決する。
   */
  fun sendFakeLightLevel(player: Player, footBlock: Block, mainBlock: Block) {
    val craftPlayer = player as CraftPlayer
    val nmsWorld = (footBlock.world as CraftWorld).handle
    val pos = BlockPos(footBlock.x, footBlock.y, footBlock.z)
    val actualState = nmsWorld.getBlockState(pos)

    val key = getBlockKey(footBlock)
    val playerMap = fakeBlocks.computeIfAbsent(player) { java.util.concurrent.ConcurrentHashMap() }

    // 既存のフェイクブロック状態があれば一旦解除
    val oldState = playerMap.remove(key)
    if (oldState != null) {
      oldState.active = false
      oldState.task?.cancel()
      val oldEntityId = oldState.entityId
      if (oldEntityId != null) {
        val removePacket = ClientboundRemoveEntitiesPacket(oldEntityId)
        craftPlayer.handle.connection.send(removePacket)
      }
    }

    // 新しい状態を作成
    val state = FakeBlockState(active = true)
    playerMap[key] = state

    // 1. footBlockが完全に塞がれているか（周囲6面がすべてフルブロックか）を判定
    val faces =
        arrayOf(
            org.bukkit.block.BlockFace.UP,
            org.bukkit.block.BlockFace.DOWN,
            org.bukkit.block.BlockFace.NORTH,
            org.bukkit.block.BlockFace.SOUTH,
            org.bukkit.block.BlockFace.EAST,
            org.bukkit.block.BlockFace.WEST,
        )
    val isEnclosed = faces.all { face -> footBlock.getRelative(face).type.isOccluding }

    // 2. mainBlockの周囲の明るさを取得（最大値）
    val ambientLight =
        faces.maxOf { face -> mainBlock.getRelative(face).lightLevel.toInt() }.coerceIn(0, 15)

    if (isEnclosed) {
      // 完全に塞がれている場合: LIGHTブロック(透明)を送信するのみ。FallingBlockは出さない。
      val lightState = Blocks.LIGHT.defaultBlockState().setValue(LightBlock.LEVEL, ambientLight)
      sendBlockPacket(player, footBlock.location, lightState)
    } else {
      // 塞がれていない場合: 光を通すAIRを送信し、FallingBlockを被せる
      sendBlockPacket(player, footBlock.location, Blocks.AIR.defaultBlockState())

      // Bedrockクライアントの物理演算によるズレを防ぐため、AIRへの置き換えが完了してから数ティック後にFallingBlockを送信する
      val bukkitTask =
          org.bukkit.Bukkit.getScheduler()
              .runTaskLater(
                  plugin,
                  Runnable {
                    if (!player.isOnline || !state.active) return@Runnable

                    // 2. 元の見た目を維持するための FallingBlock エンティティを生成
                    val fallingBlock =
                        net.minecraft.world.entity.item.FallingBlockEntity(
                            nmsWorld,
                            footBlock.x + 0.5,
                            footBlock.y.toDouble() + 0.5,
                            footBlock.z + 0.5,
                            actualState,
                        )
                    // 落下しないように無重力化、時間経過で消えないように Time を 1 に設定
                    fallingBlock.setNoGravity(true)
                    fallingBlock.time = 1

                    // 3. FallingBlockのスポーンパケットとメタデータ（無重力等の情報）を送信
                    val blockStateId = NmsBlock.getId(actualState)
                    val addPacket =
                        ClientboundAddEntityPacket(
                            fallingBlock.id,
                            fallingBlock.uuid,
                            footBlock.x + 0.5,
                            footBlock.y.toDouble() + 0.5,
                            footBlock.z + 0.5,
                            0f,
                            0f,
                            net.minecraft.world.entity.EntityTypes.FALLING_BLOCK,
                            blockStateId,
                            net.minecraft.world.phys.Vec3.ZERO,
                            0.0,
                        )

                    val metaPacket =
                        ClientboundSetEntityDataPacket(
                            fallingBlock.id,
                            fallingBlock.entityData.nonDefaultValues ?: emptyList(),
                        )

                    val connection = (player as CraftPlayer).handle.connection
                    connection.send(addPacket)
                    connection.send(metaPacket)

                    // エンティティIDを保存
                    state.entityId = fallingBlock.id
                  },
                  2L,
              )

      state.task = bukkitTask
    }
  }

  /** 指定ブロック位置の偽装を解除し、元のブロックに戻す。 */
  fun restoreRealLightLevel(player: Player, block: Block) {
    val key = getBlockKey(block)
    val playerMap = fakeBlocks[player]
    val state = playerMap?.remove(key)
    if (state != null) {
      state.active = false
      state.task?.cancel()
      val entityId = state.entityId
      if (entityId != null) {
        val removePacket = ClientboundRemoveEntitiesPacket(entityId)
        (player as CraftPlayer).handle.connection.send(removePacket)
      }
    }

    // 実際のブロック情報を送信
    restoreBlock(player, block)
  }

  /** プレイヤーがログアウトした時などのクリーンアップ */
  fun clearPlayer(player: Player) {
    val playerMap = fakeBlocks.remove(player) ?: return
    for ((_, state) in playerMap) {
      state.active = false
      state.task?.cancel()
    }
  }

  /** プラグイン終了時やリロード時の全クリーンアップ */
  fun clearAll() {
    for ((player, playerMap) in fakeBlocks) {
      if (player.isOnline) {
        val craftPlayer = player as CraftPlayer
        for ((key, state) in playerMap) {
          state.active = false
          state.task?.cancel()
          val entityId = state.entityId
          if (entityId != null) {
            val removePacket = ClientboundRemoveEntitiesPacket(entityId)
            craftPlayer.handle.connection.send(removePacket)
          }
          val parts = key.split(":")
          if (parts.size >= 2) {
            val worldName = parts[0]
            val coords = parts[1].split(",")
            if (coords.size == 3) {
              val x = coords[0].toInt()
              val y = coords[1].toInt()
              val z = coords[2].toInt()
              val world = org.bukkit.Bukkit.getWorld(worldName)
              if (world != null) {
                val block = world.getBlockAt(x, y, z)
                restoreBlock(player, block)
              }
            }
          }
        }
      } else {
        for ((_, state) in playerMap) {
          state.active = false
          state.task?.cancel()
        }
      }
    }
    fakeBlocks.clear()
  }

  fun spawnFakeArmorStand(player: Player, location: Location, placement: ArmorStandPlacement): Int {
    val craftPlayer = player as CraftPlayer
    val nmsWorld = (location.world as CraftWorld).handle

    // 1. ArmorStand インスタンスを作成（ただしワールドには登録しない）
    val stand =
        net.minecraft.world.entity.decoration.ArmorStand(
            nmsWorld,
            location.x,
            location.y,
            location.z,
        )

    // 向きを設定
    stand.setYRot(location.yaw)
    stand.setXRot(0f)
    stand.yHeadRot = location.yaw
    stand.yBodyRot = location.yaw

    // プロパティ設定
    stand.setSmall(placement.isSmall)
    stand.setInvisible(!placement.visible)
    stand.setInvulnerable(true)
    stand.setNoGravity(true)
    stand.setSilent(true)
    stand.setNoBasePlate(true)
    stand.setMarker(true)

    // ポーズ設定
    stand.headPose = toNmsRotations(placement.headPose)
    stand.bodyPose = toNmsRotations(placement.bodyPose)
    stand.leftArmPose = toNmsRotations(placement.leftArmPose)
    stand.rightArmPose = toNmsRotations(placement.rightArmPose)
    stand.leftLegPose = toNmsRotations(placement.leftLegPose)
    stand.rightLegPose = toNmsRotations(placement.rightLegPose)

    // 2. スポーンパケット送信
    val addPacket =
        ClientboundAddEntityPacket(
            stand.id,
            stand.uuid,
            location.x,
            location.y,
            location.z,
            0f, // xRot (pitch)
            location.yaw, // yRot (yaw)
            net.minecraft.world.entity.EntityTypes.ARMOR_STAND,
            0,
            net.minecraft.world.phys.Vec3.ZERO,
            location.yaw.toDouble(),
        )
    craftPlayer.handle.connection.send(addPacket)

    // 3. メタデータパケット送信
    val metaPacket =
        ClientboundSetEntityDataPacket(stand.id, stand.entityData.nonDefaultValues ?: emptyList())
    craftPlayer.handle.connection.send(metaPacket)

    // 4. スケール属性パケット送信 (スケールが 1.0 以外の場合)
    if (placement.scale != 1.0) {
      val scaleAttr = stand.getAttribute(Attributes.SCALE)
      if (scaleAttr != null) {
        scaleAttr.baseValue = placement.scale
        val attrPacket = ClientboundUpdateAttributesPacket(stand.id, listOf(scaleAttr))
        craftPlayer.handle.connection.send(attrPacket)
      }
    }

    // 5. 装備品パケット送信
    val equipmentList =
        mutableListOf<MojangPair<EquipmentSlot, net.minecraft.world.item.ItemStack>>()

    placement.headItem?.let {
      equipmentList.add(MojangPair(EquipmentSlot.HEAD, CraftItemStack.asNMSCopy(it)))
    }
    placement.chestItem?.let {
      equipmentList.add(MojangPair(EquipmentSlot.CHEST, CraftItemStack.asNMSCopy(it)))
    }
    placement.legsItem?.let {
      equipmentList.add(MojangPair(EquipmentSlot.LEGS, CraftItemStack.asNMSCopy(it)))
    }
    placement.feetItem?.let {
      equipmentList.add(MojangPair(EquipmentSlot.FEET, CraftItemStack.asNMSCopy(it)))
    }
    placement.mainHandItem?.let {
      equipmentList.add(MojangPair(EquipmentSlot.MAINHAND, CraftItemStack.asNMSCopy(it)))
    }
    placement.offHandItem?.let {
      equipmentList.add(MojangPair(EquipmentSlot.OFFHAND, CraftItemStack.asNMSCopy(it)))
    }

    if (equipmentList.isNotEmpty()) {
      val equipmentPacket = ClientboundSetEquipmentPacket(stand.id, equipmentList)
      craftPlayer.handle.connection.send(equipmentPacket)
    }

    return stand.id
  }

  fun removeFakeArmorStands(player: Player, standIds: List<Int>) {
    if (standIds.isEmpty()) return
    val craftPlayer = player as CraftPlayer
    val removePacket = ClientboundRemoveEntitiesPacket(*standIds.toIntArray())
    craftPlayer.handle.connection.send(removePacket)
  }

  private fun toNmsRotations(eulerAngle: org.bukkit.util.EulerAngle): Rotations {
    return Rotations(
        Math.toDegrees(eulerAngle.x).toFloat(),
        Math.toDegrees(eulerAngle.y).toFloat(),
        Math.toDegrees(eulerAngle.z).toFloat(),
    )
  }

  private fun sendBlockPacket(player: Player, location: Location, state: BlockState) {
    val craftPlayer = player as CraftPlayer
    val pos = BlockPos(location.blockX, location.blockY, location.blockZ)
    val packet = ClientboundBlockUpdatePacket(pos, state)
    craftPlayer.handle.connection.send(packet)
  }
}
