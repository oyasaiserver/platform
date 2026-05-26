package io.oyasai.anybuilder.schematic

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import com.sk89q.worldedit.extent.clipboard.io.BuiltInClipboardFormat
import com.sk89q.worldedit.session.SessionOwner
import com.sk89q.worldedit.util.formatting.text.TextComponent
import io.oyasai.toolbox.Tools
import java.io.File
import java.io.FileOutputStream
import org.bukkit.entity.Player

object BuilderSchematic {
  fun saveFile(
      sender: Player,
      dataName: String,
      builderPath: String,
      fileName: String,
      onSaved: ((Clipboard) -> Unit)? = null,
  ) {
    val we = WorldEdit.getInstance()
    if (we == null) {
      sender.sendMessage("WorldEdit読み込み失敗")
      return
    }

    val actor = BukkitAdapter.adapt(sender)
    val localSession = we.sessionManager.get(actor as SessionOwner)

    val clipboardHolder =
        localSession.getExistingClipboard()
            ?: run {
              actor.printError(TextComponent.of("Your clipboard is empty."))
              return
            }

    val clipboard =
        clipboardHolder.getClipboards().firstOrNull()
            ?: run {
              actor.printError(TextComponent.of("Your clipboard is empty."))
              return
            }
    val region = clipboard.region
    sender.sendMessage("${region.width}x${region.height}x${region.length}")

    val plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
    val dir = File(plugin.dataFolder, "$builderPath/$dataName")
    if (!dir.exists()) {
      dir.mkdirs()
    }

    val file = File(dir, fileName)

    FileOutputStream(file).use { fos ->
      BuiltInClipboardFormat.SPONGE_V3_SCHEMATIC.getWriter(fos).use { writer ->
        writer.write(clipboard)
      }
    }

    onSaved?.invoke(clipboard)
  }
}
