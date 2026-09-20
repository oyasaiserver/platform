package icu.oyasai.utilities.veinminer

import java.util.ArrayDeque
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Tag
import org.bukkit.block.Block
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.Damageable

object VeinminerEvent : Listener {
  private val cooldowns = mutableMapOf<UUID, Int>()
  private val miningPlayers = mutableSetOf<UUID>()
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

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onBlockBreak(event: BlockBreakEvent) {
    val player = event.player
    if (player.uniqueId in miningPlayers) return

    val tool = player.inventory.itemInMainHand
    val group = VeinminerConfig.groupOf(event.block.type) ?: return
    if (
        (VeinminerConfig.requireSneak && !player.isSneaking) || player.gameMode == GameMode.CREATIVE
    )
        return
    if (!isVeinmineable(event.block, tool) || !canVeinmine(player)) return
    if (!miningPlayers.add(player.uniqueId)) return

    try {
      cooldowns[player.uniqueId] = Bukkit.getCurrentTick()
      veinmine(event.block, player, group)
    } finally {
      miningPlayers.remove(player.uniqueId)
    }
  }

  private fun isVeinmineable(block: Block, tool: ItemStack): Boolean =
      Tag.ITEMS_PICKAXES.isTagged(tool.type) && block.isPreferredTool(tool)

  private fun canVeinmine(player: Player): Boolean =
      cooldowns[player.uniqueId]?.let {
        Bukkit.getCurrentTick() - it >= VeinminerConfig.cooldownTicks
      } ?: true

  private fun veinmine(origin: Block, player: Player, group: String) {
    val queue = ArrayDeque<Block>()
    val visited = mutableSetOf(origin)
    queue.add(origin)
    var mined = 1

    while (queue.isNotEmpty() && mined < VeinminerConfig.maxChain) {
      val current = queue.removeFirst()
      for ((x, y, z) in directions) {
        val targetX = current.x + x
        val targetY = current.y + y
        val targetZ = current.z + z
        if (targetY !in current.world.minHeight until current.world.maxHeight) continue
        if (!current.world.isChunkLoaded(targetX shr 4, targetZ shr 4)) continue

        val target = current.world.getBlockAt(targetX, targetY, targetZ)
        if (!visited.add(target) || VeinminerConfig.groupOf(target.type) != group) continue

        val tool = player.inventory.itemInMainHand
        if (!canBreak(target, tool)) return
        if (player.breakBlock(target)) {
          mined++
          queue.add(target)
          if (mined == VeinminerConfig.maxChain) break
        }
      }
    }
  }

  private fun canBreak(block: Block, tool: ItemStack): Boolean {
    if (tool.isEmpty || !Tag.ITEMS_PICKAXES.isTagged(tool.type) || !block.isPreferredTool(tool)) {
      return false
    }

    val meta = tool.itemMeta
    if (meta !is Damageable || meta.isUnbreakable) return true
    val maxDamage = if (meta.hasMaxDamage()) meta.maxDamage else tool.type.maxDurability.toInt()
    return maxDamage <= 0 || maxDamage - meta.damage > 1
  }
}
