package icu.oyasai.games.toys

import icu.oyasai.games.OyasaiGamesPlugin
import java.util.UUID
import kotlin.random.Random
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.ChatColor
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask

/** Toys.sk の線香花火と自決用ナイフ。着火中のプレイヤーだけを毎 tick 処理する。 */
class ToysModule(private val plugin: OyasaiGamesPlugin) : Listener {
  private val burning = mutableMapOf<UUID, Int>()
  private var task: BukkitTask? = null
  private val legacy = LegacyComponentSerializer.legacySection()

  fun enable() {
    plugin.server.pluginManager.registerEvents(this, plugin)
    task = plugin.server.scheduler.runTaskTimer(plugin, Runnable { tick() }, 1L, 1L)
  }

  fun disable() {
    task?.cancel()
    task = null
    burning.clear()
  }

  @EventHandler
  fun onRightClick(event: PlayerInteractEvent) {
    if (
        event.hand != EquipmentSlot.HAND ||
            (event.action != Action.RIGHT_CLICK_AIR && event.action != Action.RIGHT_CLICK_BLOCK)
    )
        return
    val player = event.player
    val item = player.inventory.itemInMainHand
    val name = itemName(item)
    if (item.type == Material.IRON_SWORD && name == "§c自決用ナイフ") {
      player.health = 0.0
    }
    if (item.type == Material.TIPPED_ARROW && validFirework(item) && player.uniqueId !in burning) {
      burning[player.uniqueId] = 200
      player.sendMessage(legacy.deserialize("§c${name}に火をつけました！"))
    }
  }

  private fun tick() {
    val iterator = burning.iterator()
    while (iterator.hasNext()) {
      val entry = iterator.next()
      // 元の loop all players と同様に、ログアウト中は時間を進めない。
      val player = plugin.server.getPlayer(entry.key) ?: continue
      val item = player.inventory.itemInMainHand
      if (!validFirework(item)) {
        iterator.remove()
        player.sendMessage(legacy.deserialize("§7線香花火の火が消えました。"))
        continue
      }
      if (entry.value <= 0) {
        iterator.remove()
        player.sendMessage(legacy.deserialize("§8ぽとっ... 火の玉が落ちてしまった。"))
        continue
      }
      entry.setValue(entry.value - 1)
      val location = player.location
      location.pitch = 0f
      location.add(location.direction).add(0.0, 0.5, 0.0)
      val sparkLocation =
          location
              .clone()
              .add(
                  Random.nextDouble(-0.1, 0.1),
                  Random.nextDouble(-0.3, 0.0),
                  Random.nextDouble(-0.1, 0.1),
              )
      // 元は減算後に elapsed を求めるため、最初が 1、最後が 200。
      val phase = fireworkPhase(uncoloredName(item), 200 - entry.value) ?: continue
      if (Random.nextDouble() < phase.baseChance) draw(location, phase)
      if (Random.nextDouble() < phase.sparkChance) draw(sparkLocation, phase)
    }
  }

  private fun draw(location: Location, phase: FireworkPhase) {
    for (particle in phase.particles) {
      location.world.spawnParticle(particle, location, 1, 0.0, 0.0, 0.0, 0.0)
    }
  }

  private fun itemName(item: ItemStack): String =
      item.itemMeta?.displayName()?.let(legacy::serialize) ?: ""

  private fun uncoloredName(item: ItemStack): String = ChatColor.stripColor(itemName(item)) ?: ""

  private fun validFirework(item: ItemStack): Boolean =
      uncoloredName(item).contains("線香花火") &&
          item.itemMeta?.lore()?.any { legacy.serialize(it) == "§8クリックで着火" } == true
}
