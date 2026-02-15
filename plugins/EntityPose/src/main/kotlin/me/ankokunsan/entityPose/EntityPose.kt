@file:Suppress("DEPRECATION")

package me.ankokunsan.entityPose

import me.ankokunsan.entityPose.commands.Boucommand
import me.ankokunsan.entityPose.commands.Entityinfo
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scoreboard.NameTagVisibility

class EntityPose : JavaPlugin() {

  companion object {
    lateinit var ENTITY_STICK_KEY: NamespacedKey
    lateinit var GUI_KEY: NamespacedKey
    lateinit var WOLF_KEY: NamespacedKey
    lateinit var SIZE_KEY: NamespacedKey
    lateinit var CAT_KEY: NamespacedKey
    lateinit var RABBIT_KEY: NamespacedKey
    lateinit var KAKUDO_KEY: NamespacedKey
    lateinit var ZAHYO_KEY: NamespacedKey
    lateinit var INSTANCE: EntityPose
      private set
  }

  @Suppress("DEPRECATION")
  override fun onEnable() {
    INSTANCE = this
    ENTITY_STICK_KEY = NamespacedKey(this, "entity_stick")
    GUI_KEY = NamespacedKey(this, "gui_action")
    WOLF_KEY = NamespacedKey(this, "wolf_spawn")
    SIZE_KEY = NamespacedKey(this, "size_spawn")
    CAT_KEY = NamespacedKey(this, "cat_spawn")
    RABBIT_KEY = NamespacedKey(this, "rabbit_spawn")
    KAKUDO_KEY = NamespacedKey(this, "angle_set")
    ZAHYO_KEY = NamespacedKey(this, "zahyo_set")

    Bou.create()
    getCommand("entitystick")?.setExecutor(Boucommand())
    getCommand("entityinfo")?.setExecutor(Entityinfo())

    val board = Bukkit.getScoreboardManager()!!.mainScoreboard

    val team =
        board.getTeam("animal_things_hide_name") ?: board.registerNewTeam("animal_things_hide_name")

    team.nameTagVisibility = NameTagVisibility.NEVER
    server.pluginManager.registerEvents(EntityClick(), this)
    server.pluginManager.registerEvents(GUIClick(), this)
  }

  override fun onDisable() {
    logger.info("EntityPose disabled")
  }
}
