package icu.oyasai.citiesskymine.worldedit

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import java.util.logging.Logger
import org.bukkit.entity.Player

object FaweUndo {
  fun remember(player: Player, editSession: EditSession, logger: Logger? = null): Boolean {
    return try {
      val actor = BukkitAdapter.adapt(player)
      WorldEdit.getInstance().sessionManager.get(actor).remember(editSession)
      true
    } catch (e: Exception) {
      logger?.warning("FAWE undo registration failed: ${e.message}")
      false
    }
  }
}
