package icu.oyasai.utilities.ore_reappears

import icu.oyasai.utilities.OyasaiUtilities
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit.getServer
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.scheduler.BukkitRunnable

/** 鉱石再出現 */
object OreReappears : Listener {
  private val worldList = mutableListOf<String>()
  private val blockAndTickList = mutableMapOf<Material, Pair<Int, Double>>()
  private val breakBlockList = mutableSetOf<OreReappearsData>()

  private val eco by lazy { setupEconomy() }
  private var switch = false

  /** トグルスイッチ、trueは無効化/falseは有効化 */
  fun switching(): Boolean {
    switch = !switch
    return switch
  }

  /** Vault連携用 */
  private fun setupEconomy(): Economy? {
    if (getServer().pluginManager.getPlugin("Vault") == null) {
      return null
    }
    val rsp = getServer().servicesManager.getRegistration(Economy::class.java)
    if (rsp == null) {
      return null
    }
    return rsp.provider
  }

  /** PL起動時 */
  fun onEnable() {
    reloadConfig()
    OyasaiUtilities.plugin.server.pluginManager.registerEvents(this, OyasaiUtilities.plugin)
    OyasaiUtilities.plugin.server
        .getPluginCommand("orerepopreload")
        ?.setExecutor(OreReappearsCommand)
    OyasaiUtilities.plugin.server
        .getPluginCommand("orerepopswitch")
        ?.setExecutor(OreReappearsCommand)

    Task.runTaskTimer(OyasaiUtilities.plugin, 1, 1)
  }

  /** PL無効化時 */
  fun onDisable() {
    Task.cancel()
    breakBlockList.forEach { data -> data.reappearBlock() }
  }

  /** コンフィグリロード */
  fun reloadConfig() {
    worldList.clear()
    blockAndTickList.clear()
    OreReappearsConfig.saveDefault()
    OreReappearsConfig.reload()

    worldList.addAll(OreReappearsConfig.getReappearWorldNames())
    blockAndTickList.putAll(OreReappearsConfig.getReappearBlockNames())
  }

  /** 毎Tickの処理 */
  object Task : BukkitRunnable() {
    override fun run() {
      val list = breakBlockList.filter { it.tickCount() }
      list.forEach { data ->
        data.reappearBlock()
        breakBlockList.removeIf { it.loc == data.loc }
      }
    }
  }

  /** ブロック破壊イベント */
  @EventHandler
  fun breakBlockEvent(e: BlockBreakEvent) {
    if (!worldList.contains(e.block.world.name)) return
    if (switch) return
    if (!blockAndTickList.keys.contains(e.block.type)) {
      if (e.player.isOp) return
      e.isCancelled = true
      return
    }
    val p = blockAndTickList[e.block.type]
    if (p == null) {
      if (e.player.isOp) return
      e.isCancelled = true
      return
    }

    if (e.player.isOp) {
      if (e.player.gameMode == GameMode.CREATIVE) {
        return
      }
    }
    breakBlockList.add(OreReappearsData(e.block.location, e.block.blockData.clone(), p.first))
    if (eco != null) {
      var dropCount = 0
      e.block.getDrops(e.player.inventory.itemInMainHand, e.player).forEach {
        dropCount += it.amount
      }
      eco?.depositPlayer(e.player, p.second * dropCount)
    }

    object : BukkitRunnable() {
          override fun run() {
            e.block.world.setBlockData(e.block.location, Material.BEDROCK.createBlockData())
          }
        }
        .runTaskLater(OyasaiUtilities.plugin, 1)
  }

  /** ブロック設置イベント */
  @EventHandler
  fun placeBlockEvent(e: BlockPlaceEvent) {
    if (!worldList.contains(e.block.world.name)) return
    if (switch) return
    if (e.player.isOp) return
    e.isCancelled = true
    return
  }
}
