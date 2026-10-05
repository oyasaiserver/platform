package io.oyasai.worldgen.portal

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import org.bukkit.Bukkit
import org.bukkit.entity.Player

internal object PortalSelection {
  fun current(player: Player): Portal? {
    val region =
        try {
          WorldEdit.getInstance()
              .sessionManager
              .get(BukkitAdapter.adapt(player))
              .getRegionSelector(BukkitAdapter.adapt(player.world))
              .region
        } catch (_: IncompleteRegionException) {
          player.sendMessage("[MVP] 木の斧で2点を選択してください")
          return null
        }
    if (region !is CuboidRegion) {
      player.sendMessage("[MVP] 直方体を選択してください")
      return null
    }
    return Portal(
        "",
        player.world.name,
        region.minimumPoint.x(),
        region.minimumPoint.y(),
        region.minimumPoint.z(),
        region.maximumPoint.x(),
        region.maximumPoint.y(),
        region.maximumPoint.z(),
        "",
    )
  }

  fun select(player: Player, portal: Portal) {
    val world = Bukkit.getWorld(portal.world) ?: return
    val selector =
        WorldEdit.getInstance()
            .sessionManager
            .get(BukkitAdapter.adapt(player))
            .getRegionSelector(BukkitAdapter.adapt(world))
    selector.selectPrimary(BlockVector3.at(portal.minX, portal.minY, portal.minZ), null)
    selector.selectSecondary(BlockVector3.at(portal.maxX, portal.maxY, portal.maxZ), null)
  }
}
