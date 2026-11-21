package icu.oyasai.games.toys

import icu.oyasai.games.OyasaiGamesPlugin
import java.util.UUID
import kotlin.random.Random
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.ChatColor
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.PrepareAnvilEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitTask

/** Toys.sk の線香花火と自決用ナイフ。着火中のプレイヤーだけを毎 tick 処理する。 */
class ToysModule(private val plugin: OyasaiGamesPlugin) : Listener {
  private val burning = mutableMapOf<UUID, Int>()
  private var task: BukkitTask? = null
  private val legacy = LegacyComponentSerializer.legacySection()
  private val toyKey = NamespacedKey(plugin, "oyasai_toy")
  private val anvilRenamedKey = NamespacedKey(plugin, "anvil_renamed")

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
  fun onPrepareAnvil(event: PrepareAnvilEvent) {
    val result = event.result ?: return
    val first = event.inventory.firstItem
    val firstName = first?.let(::itemName) ?: ""
    val resultName = itemName(result)
    if (resultName == firstName) return
    val meta = result.itemMeta ?: return
    val hasToyTag = meta.persistentDataContainer.has(toyKey, PersistentDataType.STRING)
    val stripped = ChatColor.stripColor(resultName) ?: resultName
    if (!hasToyTag && (stripped.contains("自決用ナイフ") || stripped.contains("線香花火"))) {
      event.result = null
      return
    }
    meta.persistentDataContainer.set(anvilRenamedKey, PersistentDataType.BYTE, 1.toByte())
    result.itemMeta = meta
    event.result = result
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
    if (validKnife(item)) {
      player.health = 0.0
    }
    if (validFirework(item) && player.uniqueId !in burning) {
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

  private fun validKnife(item: ItemStack): Boolean {
    if (item.type != Material.IRON_SWORD) return false
    val meta = item.itemMeta ?: return false
    if (meta.persistentDataContainer.has(anvilRenamedKey, PersistentDataType.BYTE)) return false
    val pdcType = meta.persistentDataContainer.get(toyKey, PersistentDataType.STRING)
    return pdcType == "suicide_knife" || itemName(item) == "§c自決用ナイフ"
  }

  private fun validFirework(item: ItemStack): Boolean {
    if (item.type != Material.TIPPED_ARROW) return false
    val meta = item.itemMeta ?: return false
    if (meta.persistentDataContainer.has(anvilRenamedKey, PersistentDataType.BYTE)) return false
    val pdcType = meta.persistentDataContainer.get(toyKey, PersistentDataType.STRING)
    val hasLore = meta.lore()?.any { legacy.serialize(it) == "§8クリックで着火" } == true
    return fireworkPhase(uncoloredName(item), 1) != null && (pdcType == "firework" || hasLore)
  }
}
