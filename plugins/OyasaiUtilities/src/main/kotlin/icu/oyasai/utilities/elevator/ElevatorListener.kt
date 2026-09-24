package icu.oyasai.utilities.elevator

import com.destroystokyo.paper.event.player.PlayerJumpEvent
import java.time.Duration
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.title.Title
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.Tag
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerToggleSneakEvent
import org.bukkit.plugin.java.JavaPlugin

private val emptyBlocks =
    setOf(
        Material.TORCH,
        Material.WALL_TORCH,
        Material.SOUL_TORCH,
        Material.SOUL_WALL_TORCH,
        Material.REDSTONE_TORCH,
        Material.REDSTONE_WALL_TORCH,
        Material.LEVER,
        Material.VINE,
    )

internal class ElevatorListener(private val plugin: JavaPlugin) : Listener {
  @EventHandler(ignoreCancelled = true)
  fun onJump(event: PlayerJumpEvent) = ride(event.player, event.from, true)

  @EventHandler(ignoreCancelled = true)
  fun onSneak(event: PlayerToggleSneakEvent) {
    if (event.isSneaking) ride(event.player, event.player.location, false)
  }

  private fun ride(player: Player, from: Location, up: Boolean) {
    if (player.gameMode == GameMode.SPECTATOR) return
    val block = from.clone().subtract(0.0, 0.01, 0.0).block
    if (!isElevatorFloor(block.type, block.getRelative(0, -1, 0).type)) return

    val world = block.world
    val column =
        (world.minHeight until world.maxHeight).map { y ->
          world.getBlockAt(block.x, y, block.z).type
        }
    when (val floor = findFloor(column, block.y - world.minHeight, up, ::isEmpty)) {
      FloorSearch.Missing -> return
      FloorSearch.TooFar -> {
        player.sendActionBar(Component.text("次の階が遠すぎます（40ブロックまで）", NamedTextColor.RED))
        return
      }
      is FloorSearch.Found -> {
        val destination = world.getBlockAt(block.x, floor.y + world.minHeight, block.z)
        Bukkit.getScheduler()
            .runTask(
                plugin,
                Runnable {
                  if (!player.isOnline) return@Runnable
                  val current = player.location
                  val target =
                      Location(
                          world,
                          destination.x + 0.5,
                          destination.boundingBox.maxY,
                          destination.z + 0.5,
                          current.yaw,
                          current.pitch,
                      )
                  if (!player.teleport(target)) return@Runnable
                  player.playSound(
                      player.location,
                      Sound.ENTITY_EXPERIENCE_ORB_PICKUP,
                      1f,
                      if (up) 0.5f else 1f,
                  )
                  player.showTitle(
                      Title.title(
                          Component.text(
                              if (up) "↑" else "↓",
                              if (up) NamedTextColor.GREEN else NamedTextColor.RED,
                              TextDecoration.BOLD,
                          ),
                          Component.empty(),
                          Title.Times.times(
                              Duration.ofMillis(250),
                              Duration.ofMillis(500),
                              Duration.ofMillis(250),
                          ),
                      )
                  )
                  player.sendActionBar(Component.text("${floor.number}F / ${floor.total}F"))
                },
            )
      }
    }
  }

  private fun isEmpty(material: Material): Boolean =
      material.isAir ||
          material in emptyBlocks ||
          Tag.BUTTONS.isTagged(material) ||
          Tag.ALL_SIGNS.isTagged(material) ||
          Tag.BANNERS.isTagged(material)
}
