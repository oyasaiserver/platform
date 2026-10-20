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
  interface Mask {
    fun validate(player: Player, maxBlocks: Long)

    fun lock(player: Player, maxBlocks: Long): String

    fun intact(player: Player): Boolean

    fun execute(player: Player, command: String): Boolean

    fun restore()
  }

  private data class Entry(val player: Player, val mask: Mask, val expires: Long)

  private val durationMinutes = minutes.coerceIn(1, 1440)
  private val entries = mutableMapOf<UUID, Entry>()

  fun lock(player: Player): String {
    active(player)
    val existing = entries[player.uniqueId]
    val mask = existing?.mask ?: create(player)
    val result = mask.lock(player, maxBlocks.coerceAtLeast(1))
    entries[player.uniqueId] = Entry(player, mask, now() + durationMinutes * 60_000_000_000L)
    player.sendMessage("選択範囲のマスクを固定しました（最大$durationMinutes 分）。本人の手作業にも効きます。")
    return result
  }

  fun validate(player: Player) {
    (entries[player.uniqueId]?.mask ?: create(player)).validate(player, maxBlocks.coerceAtLeast(1))
  }

  fun active(player: Player): Boolean {
    val entry = entries[player.uniqueId] ?: return false
    if (now() >= entry.expires || !entry.mask.intact(player)) {
      unlock(player.uniqueId)
      return false
    }
    return true
  }

  fun execute(player: Player, command: String): Boolean {
    check(active(player)) { "Selection lock expired" }
    return entries.getValue(player.uniqueId).mask.execute(player, command)
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
