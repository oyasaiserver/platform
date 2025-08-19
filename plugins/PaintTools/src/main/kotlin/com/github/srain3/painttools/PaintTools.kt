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
import java.util.*
import kotlin.concurrent.scheduleAtFixedRate
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

/** メインクラス */
class PaintTools : JavaPlugin() {
  /** プラグインが有効化する時に呼ばれる所 */
  override fun onEnable() {
    ToolBox.pl = this

    MapIdList.loadMapIdConfig()
    PaintToolsCmd.createDyeSet()

    getCommand("painttools")?.setExecutor(PaintToolsCmd)
    getCommand("painttools")?.tabCompleter = PaintToolsCmdTab
    getCommand("toumeigakubuti")?.setExecutor(ToumeiGakubutiCmd)

    server.pluginManager.registerEvents(ClickFrameMapEvent, this)
    server.pluginManager.registerEvents(LoadChunkEvent, this)
    server.pluginManager.registerEvents(PlayerClickEvent, this)
    server.pluginManager.registerEvents(AnvilEdit, this)

    timerSave()
    undoSaveTask()
  }

  /** プラグインが無効化するときに呼ばれる所 */
  override fun onDisable() {
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
