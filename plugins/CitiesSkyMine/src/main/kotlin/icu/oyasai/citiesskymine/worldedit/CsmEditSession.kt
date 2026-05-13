package icu.oyasai.citiesskymine.worldedit

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.function.operation.Operations
import java.util.logging.Logger
import org.bukkit.World
import org.bukkit.entity.Player

object CsmEditSession {
  data class Result(val changed: Boolean, val undoRecorded: Boolean)

  fun run(
      world: World,
      player: Player?,
      logger: Logger? = null,
      edit: (EditSession) -> Boolean
  ): Result {
    var changed = false
    var undoRecorded = false
    WorldEdit.getInstance()
        .newEditSessionBuilder()
        .apply {
          world(BukkitAdapter.adapt(world))
          if (player != null) {
            actor(BukkitAdapter.adapt(player))
          }
        }
        .build()
        .use { editSession ->
          changed = edit(editSession)
          if (changed) {
            Operations.complete(editSession.commit())
            undoRecorded = player?.let { FaweUndo.remember(it, editSession, logger) } ?: false
          }
        }
    return Result(changed, undoRecorded)
  }

  fun run(player: Player, logger: Logger? = null, edit: (EditSession) -> Boolean): Result =
      run(player.world, player, logger, edit)
}
