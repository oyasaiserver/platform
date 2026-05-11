package io.oyasai.anybuilder.carbuilder2

import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasai.anybuilder.common.BuilderItemSupport
import io.oyasai.vehicle.car.CarNormalVehicle
import io.oyasai.vehicle.car.CarProVehicle
import io.oyasai.vehicle.car.CarRealVehicle
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta

object CarBuilder2Item {
  const val TOP_SPEED_MAX = 180
  const val POWER_MAX = 1000
  const val BRAKE_MAX = 1000
  const val GEAR_MAX = 100
  const val GRIP_MAX = 200

  private val topSpeedRegex: Regex = Regex("最高速: [0-9]+")
  private val powerMaxRegex: Regex = Regex("パワー: [0-9]+")
  private val gearMaxRegex: Regex = Regex("ギア数: [0-9]+")
  private val brakeMaxRegex: Regex = Regex("ブレーキ: [0-9]+")
  private val isMTRegex: Regex = Regex("MT車: (true|false)")
  private val gripRegex: Regex = Regex("タイヤ: [0-9]+")
  private val carNameRegex: Regex = Regex("Car: .+")
  private val costRegex: Regex = Regex("Cost: -?[0-9]+")
  private val costLimitRegex: Regex = Regex("CostLimit: [0-9]+")
  private val vModeRegex: Regex = Regex("Mode: (Normal|Normal_Race|Pro|Pro\\+|Real)")
  private val dModeRegex: Regex = Regex("駆動: (AWD|FR|FF)")
  private val statSpecs =
      listOf(
          BuilderItemSupport.VehicleStatSpec("最高速", topSpeedRegex, 68),
          BuilderItemSupport.VehicleStatSpec("パワー", powerMaxRegex, 64),
          BuilderItemSupport.VehicleStatSpec("ギア数", gearMaxRegex, 4),
          BuilderItemSupport.VehicleStatSpec("ブレーキ", brakeMaxRegex, 128),
          BuilderItemSupport.VehicleStatSpec("タイヤ", gripRegex, 100))

  private data class CarStats(
      val topSpeed: Int = 68,
      val power: Int = 64,
      val gears: Int = 4,
      val brake: Int = 128,
      val isMT: Boolean = false,
      val grip: Int = 100
  ) {
    fun clamped(): CarStats {
      return copy(
          topSpeed = topSpeed.coerceIn(1, TOP_SPEED_MAX),
          power = power.coerceIn(1, POWER_MAX),
          gears = gears.coerceIn(1, GEAR_MAX),
          brake = brake.coerceIn(1, BRAKE_MAX),
          grip = grip.coerceIn(1, GRIP_MAX))
    }
  }

  private fun readStats(meta: ItemMeta?): CarStats {
    val stats = BuilderItemSupport.readVehicleStatValues(meta, statSpecs)
    return CarStats(
        topSpeed = stats[0],
        power = stats[1],
        gears = stats[2],
        brake = stats[3],
        isMT = BuilderItemSupport.readLoreBoolean(meta, isMTRegex, "MT車: ", false, fromEnd = true),
        grip = stats[4])
  }

  fun buyCarItem(carName: String, playerName: String?): ItemStack? {
    val data = CarBuilder2BaseCache.getBaseData(carName) ?: return null
    return BuilderItemSupport.buildMinecartItem(
        data.name,
        playerName,
        10831,
        listOf(
            "Car: ${data.name}",
            "Cost: 0",
            "最高速: 68",
            "パワー: 64",
            "ブレーキ: 128",
            "ギア数: 4",
            "MT車: false",
            "タイヤ: 100",
            "Mode: Normal"))
  }

  fun eventCarItem(carName: String, costLimit: Int): ItemStack? {
    val item = buyCarItem(carName, null) ?: return null
    BuilderItemSupport.appendLoreLine(item, "CostLimit: $costLimit")
    BuilderItemSupport.renameItem(item, "Event用の$carName")
    return item
  }

  fun setCarVehicleStats(
      item: ItemStack,
      topSpeed: Int,
      power: Int,
      brake: Int,
      gears: Int,
      grip: Int
  ): Boolean {
    return BuilderItemSupport.replaceLoreLines(
        item,
        listOf(
            BuilderItemSupport.LoreLineReplacement(topSpeedRegex, "最高速: $topSpeed"),
            BuilderItemSupport.LoreLineReplacement(powerMaxRegex, "パワー: $power"),
            BuilderItemSupport.LoreLineReplacement(brakeMaxRegex, "ブレーキ: $brake"),
            BuilderItemSupport.LoreLineReplacement(gearMaxRegex, "ギア数: $gears"),
            BuilderItemSupport.LoreLineReplacement(gripRegex, "タイヤ: $grip")),
        costRegex = costRegex,
        costValue =
            BuilderItemSupport.getCostFromStats(
                listOf(topSpeed, power, brake, gears, grip), listOf(68, 64, 128, 4, 100)) ?: 0)
  }

  fun getCarMode(meta: ItemMeta?): String {
    return BuilderItemSupport.readLoreValue(meta, vModeRegex, "Mode: ") ?: "Normal"
  }

  fun changeCarMode(item: ItemStack): String? {
    var mode = ""
    val updated =
        BuilderItemSupport.rewriteLore(item) { lore ->
          val newLore = mutableListOf<String>()
          lore.forEach { line ->
            if (vModeRegex.matches(line)) {
              val rawStr = line.replace("Mode: ", "")
              mode =
                  when (rawStr) {
                    "Normal" -> "Normal_Race"
                    "Normal_Race" -> "Pro"
                    "Pro" -> "Pro+"
                    "Pro+" -> "Real"
                    "Real" -> "Normal"
                    else -> "Normal_Race"
                  }
              newLore.add("Mode: $mode")
            } else {
              newLore.add(line)
            }
          }
          if (mode.isBlank()) {
            mode = "Normal"
            newLore.add("Mode: Normal")
          }
          newLore
        }
    return if (updated) mode else null
  }

  fun getCarNormalVehicle(meta: ItemMeta?, maxSize: Double, ubc: Boolean): CarNormalVehicle {
    val stats = readStats(meta).clamped()
    return CarNormalVehicle(
        stats.topSpeed / 100.0,
        stats.power,
        stats.brake,
        maxSize,
        ubc,
        stats.gears,
        stats.isMT,
        (200 - stats.grip) / 15.0)
  }

  fun getCarProVehicle(
      meta: ItemMeta?,
      maxSize: Double,
      ubc: Boolean,
      plus: Boolean
  ): CarProVehicle {
    val stats = readStats(meta).clamped()
    return CarProVehicle(
        stats.topSpeed / 100.0,
        stats.power,
        stats.brake,
        maxSize,
        ubc,
        stats.gears,
        stats.isMT,
        stats.grip,
        plus)
  }

  fun getCarRealVehicle(meta: ItemMeta?, maxSize: Double): CarRealVehicle {
    val stats = readStats(meta).clamped()
    return CarRealVehicle(
        stats.topSpeed / 100.0,
        stats.power,
        stats.brake,
        maxSize,
        true,
        stats.gears,
        stats.isMT,
        stats.grip)
  }

  fun getCarName(meta: ItemMeta): String? {
    return BuilderItemSupport.readLoreValue(meta, carNameRegex, "Car: ")
  }

  fun checkCarItem(item: ItemStack?): Boolean {
    return BuilderItemSupport.checkCustomModelMinecart(item, 10831)
  }

  fun getCarVehicleIntList(item: ItemStack): List<Int> {
    if (!checkCarItem(item)) return emptyList()
    val stats = readStats(item.itemMeta)
    return listOf(stats.topSpeed, stats.power, stats.brake, stats.gears, stats.grip)
  }

  fun getCarCostLimit(item: ItemStack): Int {
    return BuilderItemSupport.getCostLimit(item.itemMeta, costLimitRegex)
  }

  fun getCarVCCost(item: ItemStack): Int? {
    val iList = getCarVehicleIntList(item)
    return BuilderItemSupport.getCostFromStats(iList, listOf(68, 64, 128, 4, 100))
  }

  fun changeCarIsMT(item: ItemStack) {
    BuilderItemSupport.rewriteLore(item) { lore ->
      lore
          .map { line ->
            if (isMTRegex.matches(line)) {
              val currentMT = line.replace("MT車: ", "").toBoolean()
              "MT車: ${!currentMT}"
            } else {
              line
            }
          }
          .toMutableList()
    }
  }

  fun changeCarVehicleInt(item: ItemStack, str: String, value: Int): Boolean {
    val rules =
        mapOf(
            "ギア数" to BuilderItemSupport.VehicleIntRule(gearMaxRegex, GEAR_MAX),
            "タイヤ" to BuilderItemSupport.VehicleIntRule(gripRegex, GRIP_MAX),
            "パワー" to BuilderItemSupport.VehicleIntRule(powerMaxRegex, POWER_MAX),
            "最高速" to BuilderItemSupport.VehicleIntRule(topSpeedRegex, TOP_SPEED_MAX),
            "ブレーキ" to BuilderItemSupport.VehicleIntRule(brakeMaxRegex, BRAKE_MAX))
    return BuilderItemSupport.changeVehicleInt(item, str, value, rules, costRegex, ::getCarVCCost)
  }
}
