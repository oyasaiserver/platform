package io.oyasai.anybuilder.aircraftbuilder

import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseData
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderEntityData
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderEntityList
import io.oyasai.anybuilder.common.spawn.BuilderSpawnSupport
import io.oyasai.anybuilder.runtime.ArmorStandSpawner
import io.oyasai.getEntityLimitByPermission
import java.util.*
import kotlin.math.roundToInt
import org.bukkit.Location
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Vector

object AircraftBuilderSpawn {
  private val oldSpawnCarData: MutableMap<UUID, AircraftBuilderEntityData> = LinkedHashMap()

  fun spawn(
      loc: Location,
      item: ItemStack,
      owner: Player?,
      spawnPlayer: Player?,
      data: AircraftBuilderBaseData,
      yaw: Float = loc.yaw
  ): Boolean {
    val limitSender = spawnPlayer ?: owner ?: return false
    val entityLimit = limitSender.getEntityLimitByPermission()
    if (data.totalEntity() > entityLimit && !(spawnPlayer?.isOp ?: false)) {
      limitSender.sendMessage(
          "[AircraftBuilder] エンティティ数が${entityLimit}を超えています (${data.totalEntity()})")
      return false
    } else {
      BuilderSpawnSupport.beginTrialSpawn(owner, spawnPlayer, oldSpawnCarData)

      val seatList = data.config.getSeatList()
      val finalSeatList = if (seatList.isEmpty()) listOf(0 to Vector(0.0, 0.0, 0.0)) else seatList
      val seatMap = BuilderSpawnSupport.spawnSeat(loc, finalSeatList, yaw, indexedName = false)
      val bodyArmorStandInt: Int = (data.totalEntity().toDouble() / 100.0).roundToInt() + 1
      val bodyArmorStandList =
          BuilderSpawnSupport.spawnBodyArmorStands(
              loc, bodyArmorStandInt, yaw, createFirst = { ArmorStandSpawner.spawn(loc, 0.6, 1.2) })

      val blockDisplayMap = LinkedHashMap<Pair<Int, Vector>, MutableSet<BlockDisplay>>()
      blockDisplayMap[Pair(0, Vector().zero())] =
          BuilderSpawnSupport.spawnBlockDisplay(
              loc, bodyArmorStandList, data.body, data.config.getBodySize(), data.boxSize)

      val cEntity =
          AircraftBuilderEntityData(
              seatMap,
              bodyArmorStandList,
              blockDisplayMap,
              AircraftBuilderItem.getACNormalVehicle(item.itemMeta),
              owner?.uniqueId,
              spawnPlayer,
              data,
              yaw,
              item)
      AircraftBuilderEntityList.addEntity(cEntity)
      BuilderSpawnSupport.rememberTrialSpawn(owner, spawnPlayer, oldSpawnCarData, cEntity)
      return true
    }
  }
}
