package io.oyasai.oyasaiAdminTools.assistant

import java.util.UUID
import org.bukkit.entity.Player

/** All access, including expiry and restoration, runs on the server thread. */
internal class AssistantSelectionLock(
    private val maxBlocks: Long,
    private val minutes: Long,
    private val create: (Player) -> Mask = { FaweSelectionMask(it) },
    private val now: () -> Long = System::nanoTime,
) {
  /** A cuboid in the operator's current world, inclusive on both corners. */
  data class Area(val min: List<Int>, val max: List<Int>) {
    val volume
      get() = (0..2).fold(1L) { volume, axis -> volume * (max[axis] - min[axis] + 1) }

    fun contains(x: Int, y: Int, z: Int) =
        listOf(x, y, z).withIndex().all { (axis, value) -> value in min[axis]..max[axis] }

    override fun toString() = "${min.joinToString(",")}..${max.joinToString(",")}"

    companion object {
      fun parse(text: String): Area {
        val numbers = text.trim().split(Regex("[\\s,]+")).map { it.toIntOrNull() }
        require(numbers.size == 6 && numbers.all { it != null }) {
          "拒否: area は x1 y1 z1 x2 y2 z2 の整数6個にしてください。"
        }
        val corners = numbers.map { it!! }
        return Area(
            (0..2).map { minOf(corners[it], corners[it + 3]) },
            (0..2).map { maxOf(corners[it], corners[it + 3]) },
        )
      }
    }
  }

  interface Mask {
    /** The locked cuboid, once [lock] has succeeded. */
    val area: Area?

    fun validate(player: Player, maxBlocks: Long)

    /** Describes [area] for the confirmation card; checks size and FAWE, not air. */
    fun survey(player: Player, area: Area, maxBlocks: Long): String

    /** With [area], selects it first and skips the air check: the operator confirmed it. */
    fun lock(player: Player, maxBlocks: Long, area: Area?): String

    fun intact(player: Player): Boolean

    fun execute(player: Player, command: String, output: (String) -> Unit): Boolean

    fun restore()
  }

  private data class Entry(val player: Player, val mask: Mask, val expires: Long)

  private val durationMinutes = minutes.coerceIn(1, 1440)
  private val entries = mutableMapOf<UUID, Entry>()

  fun lock(player: Player, area: Area? = null): String {
    active(player)
    val existing = entries[player.uniqueId]
    val mask = existing?.mask ?: create(player)
    val result = mask.lock(player, maxBlocks.coerceAtLeast(1), area)
    entries[player.uniqueId] = Entry(player, mask, now() + durationMinutes * 60_000_000_000L)
    player.sendMessage("選択範囲のマスクを固定しました（最大$durationMinutes 分）。本人の手作業にも効きます。")
    return result
  }

  fun validate(player: Player) {
    (entries[player.uniqueId]?.mask ?: create(player)).validate(player, maxBlocks.coerceAtLeast(1))
  }

  fun survey(player: Player, area: Area): String =
      (entries[player.uniqueId]?.mask ?: create(player)).survey(
          player,
          area,
          maxBlocks.coerceAtLeast(1),
      ) + "、最大$durationMinutes 分"

  /** Vanilla edits whose absolute corners all lie in the locked cuboid. */
  fun inside(player: Player, command: String): Boolean {
    if (!active(player)) return false
    return AssistantBatch.vanillaInside(
        command,
        entries.getValue(player.uniqueId).mask.area ?: return false,
    )
  }

  fun active(player: Player): Boolean {
    val entry = entries[player.uniqueId] ?: return false
    if (now() >= entry.expires || !entry.mask.intact(player)) {
      unlock(player.uniqueId)
      return false
    }
    return true
  }

  fun execute(player: Player, command: String, output: (String) -> Unit = {}): Boolean {
    check(active(player)) { "Selection lock expired" }
    return entries.getValue(player.uniqueId).mask.execute(player, command, output)
  }

  fun unlock(id: UUID): String {
    val entry = entries[id] ?: return "選択範囲は固定されていません。"
    // Retain the entry if restoration fails, so expiry/close can retry it.
    entry.mask.restore()
    entries.remove(id)
    entry.player.sendMessage("選択範囲の固定を解除し、元のマスクに戻しました。本人の手作業にも元のマスクが効きます。")
    return "選択範囲の固定を解除し、元のマスクに戻しました。"
  }

  fun tick(enabled: Boolean) {
    entries.values.toList().forEach {
      if (!enabled || !it.player.isOnline) unlock(it.player.uniqueId) else active(it.player)
    }
  }

  fun close() {
    entries.keys.toList().forEach(::unlock)
  }
}
