package io.oyasai.anybuilder.carbuilder2

import io.oyasai.anybuilder.carbuilder2.data.*
import io.oyasai.anybuilder.common.spawn.BuilderSpawnSupport
import io.oyasai.anybuilder.runtime.ArmorStandSpawner
import io.oyasai.getEntityLimitByPermission
import java.util.*
import kotlin.math.*
import org.bukkit.Location
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Vector

object CarBuilder2Spawn {
  private val oldSpawnCarData: MutableMap<UUID, CarBuilder2EntityData> = mutableMapOf()

  fun spawn(
      loc: Location,
      item: ItemStack,
      owner: Player?,
      spawnPlayer: Player?,
      data: CarBuilder2BaseData,
      yaw: Float = loc.yaw
  ): Boolean {
    val totalEntity = data.totalEntity()
    val limitSender = spawnPlayer ?: owner ?: return false
    val entityLimit = limitSender.getEntityLimitByPermission()
    if (totalEntity > entityLimit && !(spawnPlayer?.isOp ?: false)) {
      limitSender.sendMessage("[CarBuilder2] エンティティ数${entityLimit}を超えています ($totalEntity)")
      return false
    }

    val seatList = data.config.getSeatList()
    if (seatList.isEmpty()) {
      seatList[0] = Vector(0.0, 0.0, 0.0)
    }

    BuilderSpawnSupport.beginTrialSpawn(owner, spawnPlayer, oldSpawnCarData)

    val seatMap =
        BuilderSpawnSupport.spawnSeat(
            loc, seatList.entries.map { it.key to it.value }, yaw, indexedName = false)

    val size = getCarSize(data)
    val x = size.x
    val y = size.y
    val maxSize = sqrt(x * x + x * x)
    val bodyArmorStandInt = (totalEntity.toDouble() / 100.0).roundToInt() + 1
    val bodyArmorStandList =
        BuilderSpawnSupport.spawnBodyArmorStands(
            loc, bodyArmorStandInt, yaw, createFirst = { ArmorStandSpawner.spawn(loc, x, y) })

    val displayMap =
        mutableMapOf<
            CarBuilder2EntityType, MutableMap<Pair<Int, Vector>, MutableSet<BlockDisplay>>>()

    displayMap[CarBuilder2EntityType.Body] =
        mutableMapOf(
            (0 to Vector()) to
                BuilderSpawnSupport.spawnBlockDisplay(
                    loc,
                    bodyArmorStandList,
                    data.body,
                    data.config.getSize(CarBuilder2BaseDataType.Body),
                    data.boxSize[CarBuilder2BaseDataType.Body]))

    displayMap[CarBuilder2EntityType.Wheel] =
        spawnAutoFlip(
            loc,
            bodyArmorStandList,
            data.wheel,
            data.config.getOffset(CarBuilder2BaseDataType.Wheel),
            data.config.getSize(CarBuilder2BaseDataType.Wheel),
            data.boxSize[CarBuilder2BaseDataType.Wheel])

    displayMap[CarBuilder2EntityType.Wheel2] =
        spawnAutoFlip(
            loc,
            bodyArmorStandList,
            data.wheel2,
            data.config.getOffset(CarBuilder2BaseDataType.Wheel2),
            data.config.getSize(CarBuilder2BaseDataType.Wheel2),
            data.boxSize[CarBuilder2BaseDataType.Wheel2])

    displayMap[CarBuilder2EntityType.HeadLight] =
        spawnAutoFlip(
            loc,
            bodyArmorStandList,
            data.headLight,
            data.config.getOffset(CarBuilder2BaseDataType.HeadLight),
            data.config.getSize(CarBuilder2BaseDataType.HeadLight),
            data.boxSize[CarBuilder2BaseDataType.HeadLight])

    val meta = item.itemMeta
    val carMode = CarBuilder2Item.getCarMode(meta)

    val vehicle =
        when (carMode) {
          "Normal",
          "Normal_Race" ->
              CarBuilder2Item.getCarNormalVehicle(meta, maxSize, carMode == "Normal_Race")
          "Pro",
          "Pro+" -> CarBuilder2Item.getCarProVehicle(meta, maxSize, true, carMode == "Pro+")
          "Real" -> CarBuilder2Item.getCarRealVehicle(meta, maxSize)
          else -> return false
        }

    val cEntity =
        CarBuilder2EntityData(
            seatMap,
            bodyArmorStandList,
            displayMap,
            vehicle,
            owner?.uniqueId,
            spawnPlayer,
            data,
            carMode == "Real",
            yaw,
            item)

    CarBuilder2EntityList.addEntity(cEntity)
    BuilderSpawnSupport.rememberTrialSpawn(owner, spawnPlayer, oldSpawnCarData, cEntity)
    return true
  }
}
