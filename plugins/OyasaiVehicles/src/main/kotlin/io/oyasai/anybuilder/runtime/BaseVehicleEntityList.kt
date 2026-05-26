package io.oyasai.anybuilder.runtime

import io.oyasai.toolbox.Tools
import java.io.File
import java.util.*
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import org.bukkit.Bukkit
import org.bukkit.boss.BossBar
import org.bukkit.entity.Player

abstract class BaseVehicleEntityList<T : VehicleEntityData> {
  protected abstract val cache: MutableSet<T>

  private fun matchesEntityUuid(data: T, uuid: UUID): Boolean {
    return data.seatArmorStands.keys.any { it.second.uniqueId == uuid } ||
        data.bodyArmorStands.any { it.uniqueId == uuid }
  }

  fun addEntity(data: T) {
    cache.add(data)
    data.displayList.forEach { EntityRuntime.displayEntityIds.add(it.entityId) }
  }

  fun removeEntity(data: T) {
    cache.remove(data)
    data.displayList.forEach { EntityRuntime.displayEntityIds.remove(it.entityId) }
  }

  fun checkArmorStandUUID(uuid: UUID): Boolean = cache.any { matchesEntityUuid(it, uuid) }

  fun checkDrivingSeat(uuid: UUID): T? =
      cache.firstOrNull { data ->
        data.seatArmorStands.keys.any { it.first == 0 && it.second.uniqueId == uuid }
      }

  fun checkSeatArmorStand(uuid: UUID): Boolean =
      cache.any { data -> data.seatArmorStands.keys.any { it.second.uniqueId == uuid } }

  fun checkSeatPlayerUUID(uuid: UUID): Boolean =
      cache.any { data -> data.getCarPlayers().any { it.uniqueId == uuid } }

  fun getData(uuid: UUID): T? = cache.firstOrNull { matchesEntityUuid(it, uuid) }

  fun allExit() {
    cache
        .filter { !it.exit }
        .forEach { data ->
          data.exit = true
          data.exitTask()
        }
  }

  fun breakUserVehicles(userUuid: UUID): Int {
    var count = 0
    cache
        .filter { it.summoner?.uniqueId == userUuid && !it.exit }
        .forEach { data ->
          data.exit = true
          data.exitTask()
          count++
        }
    return count
  }

  fun countOwnedVehicles(uuid: UUID): Int = cache.count { !it.exit && it.owner == uuid }

  fun getControlPlayer(data: T): Player? {
    val driverSeat = data.seatArmorStands.keys.firstOrNull { it.first == 0 }?.second ?: return null
    return driverSeat.passengers.filterIsInstance<Player>().firstOrNull()
  }

  fun updateBarPlayer(player: Player?, bossBar: BossBar) {
    if (player != null) {
      if (!bossBar.players.contains(player)) {
        bossBar.addPlayer(player)
      }
    } else {
      bossBar.removeAll()
    }
  }
}

abstract class BaseVehicleCache<T : VehicleBaseData>(
    private val folderName: String,
    private val logPrefix: String,
) {
  protected val cache: SortedMap<String, T> = TreeMap()

  protected abstract fun createBaseData(name: String): T

  fun reloadCache() {
    cache.clear()
    Bukkit.getLogger().info("[$logPrefix] Load ${folderName}...")
    val plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
    Thread(
            {
              val dir = File(plugin.dataFolder, folderName)
              if (dir.isDirectory) {
                val tp = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors())
                dir.listFiles()
                    ?.filter { it.isDirectory }
                    ?.forEach { file ->
                      tp.execute {
                        val data = createBaseData(file.name)
                        if (!data.isEmpty()) cache[file.name] = data
                      }
                    }
                tp.shutdown()
                try {
                  tp.awaitTermination(7L, TimeUnit.DAYS)
                } catch (_: InterruptedException) {}
              }
              Bukkit.getLogger().info("[$logPrefix] Load $folderName completion!")
            },
            "$logPrefix-reloadCache",
        )
        .start()
  }

  fun getBaseData(name: String): T? = cache[name]

  fun delBaseData(name: String): Boolean = cache.remove(name) != null

  fun addBaseData(baseData: T) {
    cache[baseData.name] = baseData
  }

  fun getNameList(): List<String> = cache.keys.toList()
}
