@file:Suppress("DEPRECATION")

package me.ankokunsan.entityPose

import java.util.UUID
import me.ankokunsan.entityPose.EntityCopyClick.Companion.highlightTasks
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scoreboard.NameTagVisibility

fun isEntiStick(item: ItemStack?): Boolean {
  if (item == null || item.type.isAir) return false
  if (!item.hasItemMeta()) return false
  val meta = item.itemMeta ?: return false
  return meta.persistentDataContainer.has(EntityPose.ENTITY_STICK_KEY, PersistentDataType.BYTE)
}

fun isCopyWand(item: ItemStack?): Boolean {
  if (item == null || item.type.isAir) return false
  if (!item.hasItemMeta()) return false
  val meta = item.itemMeta ?: return false
  return meta.persistentDataContainer.has(EntityPose.COPY_STICK_KEY, PersistentDataType.BYTE)
}

fun stopHighlight(uuid: UUID) {
  highlightTasks[uuid]?.cancel()
  highlightTasks.remove(uuid)
}

class EntityPose : JavaPlugin() {

  companion object {
    lateinit var ENTITY_STICK_KEY: NamespacedKey
    lateinit var COPY_STICK_KEY: NamespacedKey
    lateinit var GUI_KEY: NamespacedKey
    lateinit var WOLF_KEY: NamespacedKey
    lateinit var SIZE_KEY: NamespacedKey
    lateinit var CAT_KEY: NamespacedKey
    lateinit var RABBIT_KEY: NamespacedKey
    lateinit var PARROT_KEY: NamespacedKey
    lateinit var KAKUDO_KEY: NamespacedKey
    lateinit var ZAHYO_KEY: NamespacedKey
    lateinit var INVINCIBLE: NamespacedKey
    lateinit var ITEMLOCK: NamespacedKey
    lateinit var ARRANGELOCK: NamespacedKey
    lateinit var INSTANCE: EntityPose
      private set
  }

  @Suppress("DEPRECATION")
  override fun onEnable() {
    INSTANCE = this
    ENTITY_STICK_KEY = NamespacedKey(this, "entity_stick")
    COPY_STICK_KEY = NamespacedKey(this, "copy_brush")
    GUI_KEY = NamespacedKey(this, "gui_action")
    WOLF_KEY = NamespacedKey(this, "wolf_spawn")
    SIZE_KEY = NamespacedKey(this, "size_spawn")
    CAT_KEY = NamespacedKey(this, "cat_spawn")
    RABBIT_KEY = NamespacedKey(this, "rabbit_spawn")
    PARROT_KEY = NamespacedKey(this, "parrot_spawn")
    KAKUDO_KEY = NamespacedKey(this, "angle_set")
    ZAHYO_KEY = NamespacedKey(this, "zahyo_set")
    INVINCIBLE = NamespacedKey(this, "custom_invincible")
    ITEMLOCK = NamespacedKey(this, "item_lock")
    ARRANGELOCK = NamespacedKey(this, "arrange_lock")

    Bou.create()
    CopyWand.create1()
    getCommand("ep")?.setExecutor(EntityCommands())

    val board = Bukkit.getScoreboardManager()!!.mainScoreboard

    val team =
        board.getTeam("animal_things_hide_name") ?: board.registerNewTeam("animal_things_hide_name")
    team.nameTagVisibility = NameTagVisibility.NEVER

    server.pluginManager.registerEvents(EntityClick(), this)
    server.pluginManager.registerEvents(GUIClick(), this)
    server.pluginManager.registerEvents(EntityCopyClick(), this)
  }

  override fun onDisable() {
    logger.info("EntityPose disabled")
  }
}
