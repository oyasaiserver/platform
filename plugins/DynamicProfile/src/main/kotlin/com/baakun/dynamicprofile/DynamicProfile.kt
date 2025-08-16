package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.profile.DProfileCmd
import org.bukkit.plugin.java.JavaPlugin

/** メインクラス */
class DynamicProfile : JavaPlugin() {
  override fun onLoad() {}

  override fun onEnable() {
    server.getPluginCommand("dprofile")?.setExecutor(DProfileCmd)

    server.pluginManager.registerEvents(GuiInventory, this)
  }

  override fun onDisable() {
    GuiInventory.disableTask()
  }
}
