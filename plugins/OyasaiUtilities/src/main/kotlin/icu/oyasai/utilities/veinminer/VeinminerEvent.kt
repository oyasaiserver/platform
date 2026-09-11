package icu.oyasai.utilities.veinminer

import java.util.ArrayDeque
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Particle
import org.bukkit.Tag
import org.bukkit.block.Block
import org.bukkit.entity.ExperienceOrb
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.inventory.ItemStack

object VeinminerEvent : Listener {
  private const val MAX_CHAIN = 100
  private const val COOLDOWN_TICKS = 20
  private val cooldowns = mutableMapOf<UUID, Int>()
  private val miningPlayers = mutableSetOf<UUID>()
  private val ores: Tag<Material>? by lazy {
    Bukkit.getTag(Tag.REGISTRY_BLOCKS, NamespacedKey("c", "ores"), Material::class.java)
  }
  private val directions =
      buildList {
            for (x in -1..1) {
              for (y in -1..1) {
                for (z in -1..1) {
                  if (x != 0 || y != 0 || z != 0) add(Triple(x, y, z))
                }
              }
            }
          }
          .also { check(it.size == 26) }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun onBlockBreak(event: BlockBreakEvent) {
    val player = event.player
    val tool = player.inventory.itemInMainHand
    if (!isVeinmineable(event.block, tool) || !canVeinmine(player)) return
    if (!miningPlayers.add(player.uniqueId)) return

    try {
      cooldowns[player.uniqueId] = Bukkit.getCurrentTick()
      veinmine(event.block, player, tool)
    } finally {
      miningPlayers.remove(player.uniqueId)
    }
  }

  private fun isVeinmineable(block: Block, tool: ItemStack): Boolean =
      ores?.isTagged(block.type) == true &&
          Tag.ITEMS_PICKAXES.isTagged(tool.type) &&
          block.isPreferredTool(tool)

  private fun canVeinmine(player: Player): Boolean =
      cooldowns[player.uniqueId]?.let { Bukkit.getCurrentTick() - it >= COOLDOWN_TICKS } ?: true

  private fun veinmine(origin: Block, player: Player, tool: ItemStack) {
    val queue = ArrayDeque<Block>()
    val visited = mutableSetOf(origin)
    queue.add(origin)
    var mined = 1

    while (queue.isNotEmpty() && mined < MAX_CHAIN && !tool.isEmpty) {
      val current = queue.removeFirst()
      for ((x, y, z) in directions) {
        val target = current.getRelative(x, y, z)
        if (!visited.add(target) || ores?.isTagged(target.type) != true) continue
        if (breakBlock(target, player, tool)) {
          mined++
          queue.add(target)
          if (mined == MAX_CHAIN || tool.isEmpty) break
        }
      }
    }
  }

  private fun breakBlock(block: Block, player: Player, tool: ItemStack): Boolean {
    val breakEvent = BlockBreakEvent(block, player)
    Bukkit.getPluginManager().callEvent(breakEvent)
    if (breakEvent.isCancelled) return false

    val dropEvent =
        VeinmineDropEvent(
            block,
            block.state,
            player,
            if (breakEvent.isDropItems) block.getDrops(tool, player).toMutableList()
            else mutableListOf(),
            breakEvent.expToDrop,
        )
    dropEvent.callEvent()

    val location = block.location.toCenterLocation()
    block.world.playSound(location, block.blockSoundGroup.breakSound, 1f, 1f)
    block.world.spawnParticle(Particle.BLOCK, location, 20, block.blockData)
    block.type = Material.AIR
    dropEvent.items.forEach { block.world.dropItemNaturally(location, it) }
    if (dropEvent.expToDrop > 0) {
      block.world.spawn(location, ExperienceOrb::class.java) { it.experience = dropEvent.expToDrop }
    }
    tool.damage(1, player)
    return true
  }
}
