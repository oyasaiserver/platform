package io.oyasaiserver.milepoint

import io.oyasaiserver.anybuilder.carbuilder2.CarBuilder2SmokeGUI
import io.oyasaiserver.toolbox.CustomYaml
import io.oyasaiserver.toolbox.Tools
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Entity
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector
import java.util.*

data class MileagePointData(
    val playerUUID: UUID,
    val file: CustomYaml,
    var mile: Int,
    var mileage: Double
)

object MileagePoint : Listener {
    private const val FIRST_BONUS = 1000
    val dataList: MutableMap<UUID, MileagePointData> = LinkedHashMap()

    @EventHandler
    fun joinPlayer(event: PlayerJoinEvent) = loadPlayerData(event.player)

    @EventHandler
    fun quitPlayer(event: PlayerQuitEvent) = saveAndRemovePlayerData(event.player)

    private fun loadPlayerData(player: Player) {
        val uuid = player.uniqueId
        val plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
        val file = CustomYaml("MileagePoint/${uuid}.yml", plugin)
        val point = file.getInt("NowPoint", 0)
        val mileage = file.getDouble("Mileage", 0.0)
        val firstBonus = file.getBoolean("FirstBonus", false)

        CarBuilder2SmokeGUI.joinPlayerColorList(file, uuid)
        dataList[uuid] = MileagePointData(uuid, file, point, mileage)

        if (!firstBonus) {
            changePoint(uuid, FIRST_BONUS)
            file.set("FirstBonus", true)
            file.save()
        }
    }

    private fun saveAndRemovePlayerData(player: Player) {
        val uuid = player.uniqueId
        dataList[uuid]?.let { data ->
            CarBuilder2SmokeGUI.quitPlayerColorList(uuid)
            data.file.set("NowPoint", data.mile)
            data.file.set("Mileage", data.mileage)
            data.file.save()
            dataList.remove(uuid)
        }
    }

    fun enableFix(playerList: MutableList<Player>) {
        playerList.filter { it.isOnline }.forEach { loadPlayerData(it) }
    }

    fun disableFix(playerList: MutableList<Player>) {
        playerList.forEach { saveAndRemovePlayerData(it) }
    }

    fun checkPoint(uuid: UUID, checkPoint: Int): Boolean = dataList[uuid]?.let { it.mile >= checkPoint } ?: false
    fun getUserPoint(uuid: UUID): Int = dataList[uuid]?.mile ?: -1
    fun payment(uuid: UUID, point: Int): Boolean {
        if (!checkPoint(uuid, point)) return false
        dataList[uuid]?.let { it.mile -= point; return true }
        return false
    }
    fun changePoint(uuid: UUID, point: Int): Int = dataList[uuid]?.let { it.mile += point; it.mile } ?: -1
}

object MileageTracker {
    private val oldVecMap: MutableMap<Entity, Vector> = mutableMapOf()
    private val mileage: MutableMap<Entity, Double> = mutableMapOf()
    private val mileagePercentMap: MutableMap<Pair<ArmorStand, Entity?>, Double> = mutableMapOf()
    
    data class VehicleData(val seats: MutableSet<Pair<Int, ArmorStand>>, val addMileagePercent: Double)
    private val activeVehicles: MutableMap<ArmorStand, VehicleData> = mutableMapOf()
    
    private var isTaskRunning = false

    private fun ensureTaskRunning() {
        if (isTaskRunning) return
        val plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
        isTaskRunning = true
        object : BukkitRunnable() {
            override fun run() {
                if (activeVehicles.isEmpty()) {
                    isTaskRunning = false
                    this.cancel()
                    return
                }

                val deadVehicles = mutableListOf<ArmorStand>()
                
                for ((mainArmorStand, data) in activeVehicles) {
                    if (mainArmorStand.isDead) {
                        deadVehicles.add(mainArmorStand)
                        continue
                    }
                    
                    val currentVec = mainArmorStand.location.toVector()
                    val playerList = mutableMapOf<Pair<Int, ArmorStand>, Entity?>()
                    
                    for (seatArmorStands in data.seats) {
                        val player = seatArmorStands.second.passengers.firstOrNull { it.type == EntityType.PLAYER }
                        playerList[seatArmorStands] = player
                    }
                    
                    task(currentVec, playerList, data.addMileagePercent)
                }
                
                deadVehicles.forEach { activeVehicles.remove(it) }
            }
        }.runTaskTimer(plugin, 1L, 1L)
    }

    private fun task(newVec: Vector, list: Map<Pair<Int, ArmorStand>, Entity?>, addMileageP: Double) {
        for ((bodyArmorStands, player) in list) {
            if (player != null && player is Player) {
                val currentMileage = mileage.getOrDefault(player, 0.0)
                val lastVec = oldVecMap.getOrDefault(player, newVec)
                
                mileage[player] = currentMileage + lastVec.distance(newVec)
                oldVecMap[player] = newVec
                
                if (mileagePercentMap.keys.none { it.second == player }) {
                    val percent = if (bodyArmorStands.first == 0) 1.0 + addMileageP else addMileageP
                    mileagePercentMap[Pair(bodyArmorStands.second, player)] = percent
                }
            } else {
                val pair = mileagePercentMap.keys.find { it.first.uniqueId == bodyArmorStands.second.uniqueId }
                if (pair != null) {
                    val exitedPlayer = pair.second
                    if (exitedPlayer != null) {
                        vehicleExitTask(exitedPlayer, pair)
                    }
                }
            }
        }
    }

    private fun vehicleExitTask(player: Entity, pairKey: Pair<ArmorStand, Entity?>) {
        val percent = mileagePercentMap.remove(pairKey) ?: return
        val mileage0 = mileage.remove(player) ?: return
        oldVecMap.remove(player)
        
        if (player is Player) {
            if (player.isOnline) {
                player.sendMessage(Tools.color("&9乗車距離&7: &b${mileage0.toInt()}m"))
            }

            val addMileagePoint = (mileage0 / 250.0 * percent).toInt()
            val data = MileagePoint.dataList[player.uniqueId]
            if (data != null) {
                if (addMileagePoint > 0) {
                    data.mile += addMileagePoint
                    if (player.isOnline) {
                        player.sendMessage(Tools.color("&9獲得マイルPoint&7: &b${addMileagePoint}p &a/ &9現在のマイルPoint&7: &b${data.mile}p"))
                    }
                }
                data.mileage += mileage0
            }
        }
    }

    fun start(mainArmorStand: ArmorStand, seatArmorStand: MutableSet<Pair<Int, ArmorStand>>, addMileagePercent: Double) {
        activeVehicles[mainArmorStand] = VehicleData(seatArmorStand, addMileagePercent)
        ensureTaskRunning()
    }

    fun removeSeat(mainArmorStand: ArmorStand, removeSeat: Pair<Int, ArmorStand>) {
        activeVehicles[mainArmorStand]?.seats?.remove(removeSeat)
    }
}
