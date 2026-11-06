package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.event.platform.CommandEvent
import com.sk89q.worldedit.extension.platform.PlayerProxy
import com.sk89q.worldedit.function.mask.Mask
import com.sk89q.worldedit.function.mask.RegionMask
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import com.sk89q.worldedit.regions.Region
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import com.sk89q.worldedit.session.request.Request
import com.sk89q.worldedit.util.formatting.WorldEditText
import com.sk89q.worldedit.util.formatting.text.Component
import org.bukkit.entity.Player

/** Kept separate so missing optional FAWE classes never prevent assistant initialization. */
internal class FaweSelectionMask(private val player: Player) : AssistantSelectionLock.Mask {
  private val worldEdit = WorldEdit.getInstance()
  // A work area selects for the operator, so a session without a selection is fine here.
  private val session = worldEdit.sessionManager.get(BukkitAdapter.adapt(player))
  private val original = session.mask
  private var fixed: Mask? = null
  private var world = player.world.uid
  override var area: AssistantSelectionLock.Area? = null

  private fun usable(player: Player) {
    check(player.server.pluginManager.isPluginEnabled("FastAsyncWorldEdit")) { "拒否: FAWE が使えません。" }
    check(player.hasPermission("worldedit.global-mask")) { "拒否: グローバルマスクの権限がありません。" }
  }

  private fun cuboid(player: Player, area: AssistantSelectionLock.Area) =
      CuboidRegion(
          BukkitAdapter.adapt(player.world),
          BlockVector3.at(area.min[0], area.min[1], area.min[2]),
          BlockVector3.at(area.max[0], area.max[1], area.max[2]),
      )

  private fun selection(player: Player): Region {
    usable(player)
    val currentWorld = BukkitAdapter.adapt(player.world)
    check(session.selectionWorld == currentWorld) { "拒否: 現在のワールドの選択範囲が必要です。" }
    return session.getSelection(currentWorld)
  }

  override fun validate(player: Player, maxBlocks: Long) {
    validate(selection(player), maxBlocks) { x, y, z ->
      player.world.getBlockAt(x, y, z).type.isAir
    }
  }

  override fun survey(player: Player, area: AssistantSelectionLock.Area, maxBlocks: Long): String {
    usable(player)
    var solid = 0L
    validate(cuboid(player, area), maxBlocks) { x, y, z ->
      if (!player.world.getBlockAt(x, y, z).type.isAir) solid++
      true
    }
    return "作業許可: world=${player.world.name} 範囲=$area blocks=${area.volume} 空気以外=$solid"
  }

  override fun lock(player: Player, maxBlocks: Long, area: AssistantSelectionLock.Area?): String {
    if (area != null) {
      usable(player)
      val region = cuboid(player, area)
      validate(region, maxBlocks) { _, _, _ -> true }
      session.setRegionSelector(
          region.world,
          CuboidRegionSelector(region.world, region.minimumPoint, region.maximumPoint),
      )
    }
    val region = selection(player)
    val started = System.nanoTime()
    validate(region, maxBlocks) { x, y, z ->
      area != null || player.world.getBlockAt(x, y, z).type.isAir
    }
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
      this.area =
          AssistantSelectionLock.Area(
              region.minimumPoint.let { listOf(it.x(), it.y(), it.z()) },
              region.maximumPoint.let { listOf(it.x(), it.y(), it.z()) },
          )
    } catch (failure: Throwable) {
      session.mask = before
      throw failure
    }
    return "選択範囲のマスクを固定しました。blocks=${region.volume}; " +
        (if (area != null) "本人の許可で空気の検査なし" else "空気の検査=$elapsed ms") +
        "。本人の手作業にも効きます。"
  }

  override fun intact(player: Player) = player.world.uid == world && session.mask === fixed

  override fun execute(player: Player, command: String, output: (String) -> Unit): Boolean {
    // Match FAWE's synchronous handler, observing exceptions before it prints and consumes them.
    val platform = worldEdit.platformManager
    // FAWE returns a player wrapper, not the concrete BukkitPlayer inferred from adapt().
    val actor =
        Capturing(
            platform.createProxyActor<com.sk89q.worldedit.entity.Player>(
                BukkitAdapter.adapt(player)
            ),
            output,
        )
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

  /** Copies what FAWE prints for the AI; the operator still sees it. */
  private class Capturing(
      base: com.sk89q.worldedit.entity.Player,
      private val output: (String) -> Unit,
  ) : PlayerProxy(base) {
    override fun print(msg: String) {
      output(msg)
      super.print(msg)
    }

    override fun printError(msg: String) {
      output(msg)
      super.printError(msg)
    }

    override fun printDebug(msg: String) {
      output(msg)
      super.printDebug(msg)
    }

    override fun printRaw(msg: String) {
      output(msg)
      super.printRaw(msg)
    }

    override fun print(component: Component) {
      output(WorldEditText.reduceToText(component, locale))
      super.print(component)
    }
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
