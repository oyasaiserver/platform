package com.github.srain3.painttools

import com.github.srain3.painttools.commands.PaintToolsCmd
import com.github.srain3.painttools.commands.PaintToolsCmdTab
import com.github.srain3.painttools.commands.ToumeiGakubutiCmd
import com.github.srain3.painttools.events.AnvilEdit
import com.github.srain3.painttools.events.ClickFrameMapEvent
import com.github.srain3.painttools.events.LoadChunkEvent
import com.github.srain3.painttools.events.PlayerClickEvent
import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.CanvasStore
import com.github.srain3.painttools.tools.configs.MapData
import com.github.srain3.painttools.tools.configs.MapIdList
import icu.oyasai.frames.OyasaiFrames
import org.bukkit.scheduler.BukkitTask

class PaintTools(private val plugin: OyasaiFrames) {
  private lateinit var store: CanvasStore
  private var saveTask: BukkitTask? = null
  private var undoTask: BukkitTask? = null
  private var ready = false

  fun onEnable() {
    ToolBox.pl = plugin
    val blank =
        checkNotNull(plugin.getResource("newPNG.png")) { "missing blank canvas" }
            .use { it.readBytes() }
    store = CanvasStore(plugin.dataFolder.resolve("pictures.db"), blank)
    store
        .submit { store.open() }
        .whenComplete { metadata, failure ->
          if (!plugin.isEnabled) return@whenComplete
          plugin.server.scheduler.runTask(
              plugin,
              Runnable {
                if (failure != null) {
                  plugin.logger.severe("Painting disabled: ${failure.message}")
                  return@Runnable
                }
                MapIdList.load(metadata, store)
                MapData.initialize(store)
                PaintToolsCmd.createDyeSet()
                plugin.getCommand("painttools")?.setExecutor(PaintToolsCmd)
                plugin.getCommand("painttools")?.tabCompleter = PaintToolsCmdTab
                plugin.getCommand("toumeigakubuti")?.setExecutor(ToumeiGakubutiCmd)
                listOf(ClickFrameMapEvent, LoadChunkEvent, PlayerClickEvent, AnvilEdit).forEach {
                  plugin.server.pluginManager.registerEvents(it, plugin)
                }
                saveTask =
                    plugin.server.scheduler.runTaskTimer(
                        plugin,
                        Runnable { MapData.saveMapDataConfig() },
                        1200L,
                        1200L,
                    )
                undoTask =
                    plugin.server.scheduler.runTaskTimer(
                        plugin,
                        Runnable { MapData.savaUndo() },
                        200L,
                        1200L,
                    )
                ready = true
              },
          )
        }
  }

  fun onDisable() {
    saveTask?.cancel()
    undoTask?.cancel()
    if (ready) {
      MapData.flush()
      MapData.disableUnloadMemTask()
    }
    if (::store.isInitialized) store.close()
  }
}
