package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.event.platform.CommandEvent
import com.sk89q.worldedit.function.mask.Mask
import com.sk89q.worldedit.function.mask.RegionMask
import com.sk89q.worldedit.regions.CuboidRegion
import com.sk89q.worldedit.regions.Region
import com.sk89q.worldedit.session.request.Request
import org.bukkit.entity.Player

/** Kept separate so missing optional FAWE classes never prevent assistant initialization. */
internal class FaweSelectionMask(private val player: Player) : AssistantSelectionLock.Mask {
  private val worldEdit = WorldEdit.getInstance()
  private val session =
      worldEdit.sessionManager.getIfPresent(BukkitAdapter.adapt(player)) ?: error("拒否: 選択範囲がありません。")
  private val original = session.mask
  private var fixed: Mask? = null
  private var world = player.world.uid

  private fun selection(player: Player): Region {
    check(player.server.pluginManager.isPluginEnabled("FastAsyncWorldEdit")) { "拒否: FAWE が使えません。" }
    check(player.hasPermission("worldedit.global-mask")) { "拒否: グローバルマスクの権限がありません。" }
    val currentWorld = BukkitAdapter.adapt(player.world)
    check(session.selectionWorld == currentWorld) { "拒否: 現在のワールドの選択範囲が必要です。" }
    return session.getSelection(currentWorld)
  }

  override fun validate(player: Player, maxBlocks: Long) {
    validate(selection(player), maxBlocks) { x, y, z ->
      player.world.getBlockAt(x, y, z).type.isAir
    }
  }

  override fun lock(player: Player, maxBlocks: Long): String {
    val region = selection(player)
    val started = System.nanoTime()
    validate(region, maxBlocks) { x, y, z -> player.world.getBlockAt(x, y, z).type.isAir }
    val elapsed = (System.nanoTime() - started) / 1_000_000.0
    val before = session.mask
    try {
      // Run the real command synchronously as its actor; don't race FAWE's asynchronous queue.
      worldEdit.platformManager.platformCommandManager.handleCommandOnCurrentThread(
          CommandEvent(BukkitAdapter.adapt(player), "/gmask #region")
      )
      val applied = session.mask
      check(
          applied is RegionMask &&
              applied !== before &&
              applied.region.minimumPoint == region.minimumPoint &&
              applied.region.maximumPoint == region.maximumPoint
      ) {
        "拒否: マスクを固定できませんでした。"
      }
      fixed = applied
      world = player.world.uid
    } catch (failure: Throwable) {
      session.mask = before
      throw failure
    }
    return "選択範囲のマスクを固定しました。blocks=${region.volume}; 空気の検査=$elapsed ms。本人の手作業にも効きます。"
  }

  override fun intact(player: Player) = player.world.uid == world && session.mask === fixed

  override fun execute(player: Player, command: String): Boolean {
    // Match FAWE's synchronous handler, observing exceptions before it prints and consumes them.
    val platform = worldEdit.platformManager
    // FAWE returns a player wrapper, not the concrete BukkitPlayer inferred from adapt().
    val actor =
        platform.createProxyActor<com.sk89q.worldedit.entity.Player>(BukkitAdapter.adapt(player))
    check(worldEdit.sessionManager.get(actor) === session) { "FAWE session changed" }
    Request.request().session = session
    Request.request().world = actor.world
    val arguments = command.substringAfter(':')
    val event = CommandEvent(actor, arguments)
    val manager = platform.platformCommandManager
    val access = manager.initializeInjectedValues({ arguments }, actor, event, false)
    var failed: Throwable? = null
    manager.handleCommandTask(
        {
          try {
            manager.parseCommand(arguments, access)
          } catch (failure: Throwable) {
            failed = failure
            throw failure
          }
        },
        access,
        session,
        event,
    )
    failed?.let { throw it }
    return event.isCancelled
  }

  override fun restore() {
    if (original == null && player.isOnline && player.hasPermission("worldedit.global-mask"))
        runCatching {
          worldEdit.platformManager.platformCommandManager.handleCommandOnCurrentThread(
              CommandEvent(BukkitAdapter.adapt(player), "/gmask")
          )
        }
    // The saved object is authoritative even after logout, permission loss or FAWE shutdown.
    session.mask = original
  }

  companion object {
    fun validate(region: Region, maxBlocks: Long, isAir: (Int, Int, Int) -> Boolean) {
      require(region is CuboidRegion) { "拒否: キュボイドの選択範囲が必要です。" }
      val min = region.minimumPoint
      val max = region.maximumPoint
      var volume = 1L
      for (size in
          listOf(
              max.x().toLong() - min.x() + 1,
              max.y().toLong() - min.y() + 1,
              max.z().toLong() - min.z() + 1,
          )) {
        require(size > 0 && size <= maxBlocks / volume) { "拒否: 選択範囲がブロック数の上限を超えています。" }
        volume *= size
      }
      for (x in min.x()..max.x()) for (z in min.z()..max.z()) for (y in min.y()..max.y()) {
        require(isAir(x, y, z)) { "拒否: 選択範囲は空気だけにしてください（$x,$y,$z）。" }
      }
    }
  }
}
