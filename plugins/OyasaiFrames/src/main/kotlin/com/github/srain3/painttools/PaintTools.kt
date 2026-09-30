package com.github.srain3.painttools

import com.github.srain3.painttools.commands.PaintToolsCmd
import com.github.srain3.painttools.commands.PaintToolsCmdTab
import com.github.srain3.painttools.commands.ToumeiGakubutiCmd
import com.github.srain3.painttools.events.AnvilEdit
import com.github.srain3.painttools.events.ClickFrameMapEvent
import com.github.srain3.painttools.events.LoadChunkEvent
import com.github.srain3.painttools.events.PlayerClickEvent
import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.MapData
import com.github.srain3.painttools.tools.configs.MapIdList
import icu.oyasai.frames.OyasaiFrames
import java.util.*
import kotlin.concurrent.scheduleAtFixedRate
import org.bukkit.Bukkit

/** メインクラス */
class PaintTools(private val plugin: OyasaiFrames) {
  /** プラグインが有効化する時に呼ばれる所 */
  fun onEnable() {
    ToolBox.pl = plugin
    plugin.legacyFolder("PaintTools").mkdirs()

    MapIdList.loadMapIdConfig()
    PaintToolsCmd.createDyeSet()

    plugin.getCommand("painttools")?.setExecutor(PaintToolsCmd)
    plugin.getCommand("painttools")?.tabCompleter = PaintToolsCmdTab
    plugin.getCommand("toumeigakubuti")?.setExecutor(ToumeiGakubutiCmd)

    plugin.server.pluginManager.registerEvents(ClickFrameMapEvent, plugin)
    plugin.server.pluginManager.registerEvents(LoadChunkEvent, plugin)
    plugin.server.pluginManager.registerEvents(PlayerClickEvent, plugin)
    plugin.server.pluginManager.registerEvents(AnvilEdit, plugin)

    timerSave()
    undoSaveTask()
  }

  /** プラグインが無効化するときに呼ばれる所 */
  fun onDisable() {
    saveTimer.cancel()
    undoSaveTimer.cancel()
    MapData.saveMapDataConfig()
    MapData.disableUnloadMemTask()
  }

  private var saveTimer = Timer("PaintTools-MapID_yml-save")

  private fun timerSave() {
    saveTimer.scheduleAtFixedRate(1000L * 60L * 20L, 1000L * 60L * 20L) {
      Bukkit.getServer().logger.info("[PaintTools] Start saving ID data...")
      MapData.saveMapDataConfig()
      Bukkit.getServer().logger.info("[PaintTools] completion!")
    }
  }

  private val undoSaveTimer = Timer("PaintTools_undoSave")

  private fun undoSaveTask() {
    undoSaveTimer.scheduleAtFixedRate(1000L * 10L, 1000L * 60L) { MapData.savaUndo() }
  }
}
