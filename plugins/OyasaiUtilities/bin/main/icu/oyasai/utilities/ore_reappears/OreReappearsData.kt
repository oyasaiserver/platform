package icu.oyasai.utilities.ore_reappears

import org.bukkit.Location
import org.bukkit.block.data.BlockData

data class OreReappearsData(val loc: Location, val blockData: BlockData, var tick: Int) {
  /** tickを減らしていき0以下になったらtrueを返す */
  fun tickCount(): Boolean {
    tick -= 1
    return tick <= 0
  }

  fun reappearBlock() {
    loc.world?.setBlockData(loc, blockData)
  }
}
