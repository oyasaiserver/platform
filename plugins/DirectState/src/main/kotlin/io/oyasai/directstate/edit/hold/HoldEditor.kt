package io.oyasai.directstate.edit.hold

import io.oyasai.directstate.Permissions
import io.oyasai.directstate.edit.shape.SlabGesture
import io.oyasai.directstate.edit.shape.StairGeometry
import io.oyasai.directstate.edit.shape.WallGesture
import java.util.UUID
import kotlin.math.abs
import kotlin.math.max
import net.kyori.adventure.text.Component
import org.bukkit.Server
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.MultipleFacing
import org.bukkit.block.data.type.*
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Vector

/** ホールド棒の開始・継続・終了を管理する。形状計算はedit.shapeに委譲する。 */
internal class HoldEditor(
    private val server: Server,
    private val isHoldTool: (ItemStack?) -> Boolean,
    private val applyEdit: (Player, Block, BlockData) -> Unit,
) {
  private val dragSessions = mutableMapOf<UUID, Drag>()
  private val faces = listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)
  private val shapes =
      listOf(
          Stairs.Shape.STRAIGHT,
          Stairs.Shape.INNER_LEFT,
          Stairs.Shape.INNER_RIGHT,
          Stairs.Shape.OUTER_LEFT,
          Stairs.Shape.OUTER_RIGHT,
      )

  /** 掴んだ瞬間のブロック・視線と、ドラッグ中に選ばれた方向・期待状態を保持する。 */
  private data class Drag(
      val block: Block,
      val original: BlockData,
      /** ブロック左下を原点とする開始打点。 */
      val hit: Vector,
      /** ドラッグ開始時の目のワールド座標。 */
      val eye: Vector,
      /** ドラッグ開始時の視線方向。固定操作平面の法線にも使う。 */
      val normal: Vector,
      /** 目から開始打点までを開始視線へ射影した距離。 */
      val distance: Double,
      /** ドラッグ開始時の打点のワールド座標。 */
      val start: Vector,
      val hitFace: BlockFace?,
      /** 最後に適用したBlockData文字列。外部変更の検出にも使う。 */
      var expected: String = original.asString,
      var ticks: Int = 0,
      var vertical: Boolean? = null,
      var side: BlockFace? = null,
      var wallArmSelected: Boolean = false,
  )

  /** ホールド棒で形をドラッグ編集できるBlockDataか調べる。 */
  fun supports(data: BlockData) =
      data is Fence || data is GlassPane || data is Slab || data is Wall || data is Stairs

  /** 指定プレイヤーが現在ドラッグ中か調べる。 */
  fun isEditing(player: UUID) = dragSessions.containsKey(player)

  /** 別プレイヤーが同じブロックをドラッグ中ならtrue。 */
  fun isLocked(block: Block, player: UUID) =
      dragSessions.any { (id, drag) -> id != player && drag.block == block }

  /** 掴んだ時点のブロック状態・打点・視線平面を保存してドラッグを開始する。 */
  fun start(
      player: Player,
      block: Block,
      data: BlockData,
      hitPosition: Vector,
      hitFace: BlockFace?,
  ) {
    val eye = player.eyeLocation.toVector()
    val normal = player.eyeLocation.direction
    dragSessions[player.uniqueId] =
        Drag(
            block,
            data.clone(),
            hitPosition.clone().subtract(block.location.toVector()),
            eye,
            normal,
            hitPosition.clone().subtract(eye).dot(normal),
            hitPosition.clone(),
            hitFace,
        )
    player.sendActionBar(Component.text("つかんだ"))
  }

  /** 一人分のドラッグを終了する。 */
  fun stop(player: UUID) {
    dragSessions.remove(player)
  }

  /** プラグイン終了時に全ドラッグを破棄する。 */
  fun clear() {
    dragSessions.clear()
  }

  /** 全ドラッグを一tick進め、視線移動から新しい形を計算して変更時だけ適用する。 */
  fun tick() {
    val iterator = dragSessions.iterator()
    while (iterator.hasNext()) {
      val (id, drag) = iterator.next()
      val player = server.getPlayer(id)
      if (player == null || !valid(player, drag)) {
        iterator.remove()
        continue
      }
      drag.ticks++
      if (!player.isHandRaised) {
        if (drag.ticks > 5) iterator.remove()
        continue
      }
      // 視線がブロックを離れた後も、掴んだ時点で固定した画面平面へ射影する。
      val direction = player.eyeLocation.direction
      // 内積は視線が開始時の固定平面へどれだけ正面から入るかを表す。
      // 0.25未満ではほぼ平行になり、交点が遠く飛ぶためドラッグを終了する。
      val denominator = direction.dot(drag.normal)
      if (denominator < 0.25) {
        iterator.remove()
        continue
      }
      // 開始時に保存した視線距離を内積で割り、現在視線と固定平面の交点を得る。
      // deltaはその交点から開始打点を引いた、画面上のドラッグ量になる。
      val delta =
          drag.eye.clone().add(direction.multiply(drag.distance / denominator)).subtract(drag.start)
      val horizontal = Vector(delta.x, 0.0, delta.z)
      if (drag.vertical == null) {
        // 0.18ブロックまでは手ぶれとして無視し、超えた軸で縦/横操作を確定する。
        if (max(horizontal.length(), abs(delta.y)) < 0.18) continue
        if ((drag.original is Fence || drag.original is GlassPane) && horizontal.length() < 0.18)
            continue
        // 縦が横の1.2倍を超えたときだけ縦操作にし、斜めドラッグの誤判定を避ける。
        drag.vertical =
            drag.original is Slab ||
                (drag.original !is Fence &&
                    drag.original !is GlassPane &&
                    abs(delta.y) > horizontal.length() * 1.2)
        val radial = Vector(drag.hit.x - 0.5, 0.0, drag.hit.z - 0.5)
        val onPost = max(abs(radial.x), abs(radial.z)) <= 0.25
        drag.side =
            nearestFace(
                if (drag.original is Wall && onPost) horizontal
                else if (radial.length() > 0.22) radial else horizontal
            )
        if (drag.original is Stairs && drag.vertical == false) {
          // 見えているドラッグ軸を選び、外向きに引く操作と内向きに押す操作を区別する。
          // クリック面がカメラを真正面に向くと、横方向の射影を持たないことがある。
          val movementSide = nearestFace(horizontal)
          drag.side =
              if (radial.dot(movementSide.direction) < -0.15) movementSide.oppositeFace
              else movementSide
        }
      }
      if (drag.original is Wall && !drag.wallArmSelected && horizontal.length() >= 0.25) {
        val onPost = max(abs(drag.hit.x - 0.5), abs(drag.hit.z - 0.5)) <= 0.25
        if (onPost) drag.side = nearestFace(horizontal)
        drag.wallArmSelected = true
      }
      val edited = edit(drag, delta)
      if (edited.asString != drag.expected) {
        applyEdit(player, drag.block, edited)
        drag.expected = edited.asString
      }
    }
  }

  /** プレイヤー・道具・視点・対象ブロックが開始時の前提を保っているか確認する。 */
  private fun valid(player: Player, drag: Drag): Boolean {
    if (!player.isOnline || player.isDead || !Permissions.has(player, Permissions.HOLD_STICK))
        return false
    if (player.world != drag.block.world || !isHoldTool(player.inventory.itemInMainHand))
        return false
    if (!drag.block.world.isChunkLoaded(drag.block.x shr 4, drag.block.z shr 4)) return false
    // 平方距離0.25は実距離0.5ブロック。これ以上の移動は視線ドラッグとして扱わない。
    val stayedAtStart = player.eyeLocation.toVector().distanceSquared(drag.eye) < 0.25
    val blockWasNotChangedElsewhere = drag.block.blockData.asString == drag.expected
    return stayedAtStart && blockWasNotChangedElsewhere
  }

  /** 保存した元状態へ現在のドラッグ量を当てはめ、新しいBlockDataを計算する。 */
  private fun edit(drag: Drag, delta: Vector): BlockData {
    val data = drag.original.clone()
    val side = drag.side ?: return data
    // 面方向との内積で、斜め移動から選択面に沿う成分だけを取り出す。
    val amount = delta.dot(side.direction)
    // 1/4ブロックごとに階段の角を一つ足す/引く。straight→innerなど最大2段階に制限する。
    val steps = (abs(amount) / 0.25).toInt().coerceAtMost(2) * (if (amount >= 0) 1 else -1)
    when (data) {
      is MultipleFacing ->
          if ((data is Fence || data is GlassPane) && steps != 0) data.setFace(side, steps > 0)
      is Slab -> {
        val surface =
            when (drag.hitFace) {
              BlockFace.UP -> SlabGesture.Surface.UP
              BlockFace.DOWN -> SlabGesture.Surface.DOWN
              else -> SlabGesture.Surface.SIDE
            }
        val type = SlabGesture.edit(SlabGesture.Type.valueOf(data.type.name), surface, delta.y)
        data.type = Slab.Type.valueOf(type.name)
        // ダブルスラブは水を保持できない。元のクローンを復元すれば水も復元される。
        if (data.type == Slab.Type.DOUBLE) data.isWaterlogged = false
      }
      is Wall -> {
        val onPost = max(abs(drag.hit.x - 0.5), abs(drag.hit.z - 0.5)) <= 0.25
        val result =
            WallGesture.edit(
                data.getHeight(side).ordinal,
                data.isUp,
                onPost && !drag.wallArmSelected,
                amount,
                delta.y,
            )
        data.setHeight(side, Wall.Height.entries[result.height])
        data.isUp = result.post
      }
      is Stairs ->
          if (drag.vertical == true) {
            if (abs(delta.y) >= 0.25)
                data.half = if (delta.y > 0) Bisected.Half.TOP else Bisected.Half.BOTTOM
          } else {
            val initial =
                StairGeometry.states.first {
                  it.facing == faces.indexOf(data.facing) && it.shape == shapes.indexOf(data.shape)
                }
            val result = StairGeometry.resize(initial, steps, drag.hit.x, drag.hit.z)
            data.facing = faces[result.facing]
            data.shape = shapes[result.shape]
          }
    }
    return data
  }

  /** ベクトルが最も強く向く水平面を返す。 */
  private fun nearestFace(vector: Vector) = faces.maxBy { vector.dot(it.direction) }
}
