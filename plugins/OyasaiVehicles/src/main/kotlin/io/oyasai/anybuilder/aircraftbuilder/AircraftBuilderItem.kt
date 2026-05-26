package io.oyasai.anybuilder.aircraftbuilder

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderBaseCache
import io.oyasai.anybuilder.common.BuilderItemSupport
import io.oyasai.vehicle.air.AircraftVehicle
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta

object AircraftBuilderItem {
  const val TOP_SPEED_MAX = 180
  const val POWER_MAX = 1000
  const val BRAKE_MAX = 1000

  private val topSpeedRegex: Regex = Regex("最高速: [0-9]+")
  private val powerMaxRegex: Regex = Regex("パワー: [0-9]+")
  private val brakeMaxRegex: Regex = Regex("ブレーキ: [0-9]+")
  private val carNameRegex: Regex = Regex("AC: .+")
  private val costRegex: Regex = Regex("Cost: -?[0-9]+")
  private val costLimitRegex: Regex = Regex("CostLimit: [0-9]+")

  private val statSpecs =
      listOf(
          BuilderItemSupport.VehicleStatSpec("最高速", topSpeedRegex, 68, strict = true),
          BuilderItemSupport.VehicleStatSpec("パワー", powerMaxRegex, 64, strict = true),
          BuilderItemSupport.VehicleStatSpec("ブレーキ", brakeMaxRegex, 128, strict = true),
      )

  private fun readStats(meta: ItemMeta?): List<Int> {
    val stats = BuilderItemSupport.readVehicleStatValues(meta, statSpecs)
    return listOf(
        stats[0].coerceIn(1, TOP_SPEED_MAX),
        stats[1].coerceIn(1, POWER_MAX),
        stats[2].coerceIn(1, BRAKE_MAX),
    )
  }

  fun buyItem(name: String, playerName: String?): ItemStack? {
    val data = AircraftBuilderBaseCache.getBaseData(name) ?: return null
    return BuilderItemSupport.buildMinecartItem(
        data.name,
        playerName,
        20831,
        listOf("AC: ${data.name}", "Cost: 0", "最高速: 68", "パワー: 64", "ブレーキ: 128", "Mode: Normal"),
    )
  }

  fun eventCarItem(name: String, costLimit: Int): ItemStack? {
    val item = this.buyItem(name, null) ?: return null
    BuilderItemSupport.appendLoreLine(item, "CostLimit: $costLimit")
    BuilderItemSupport.renameItem(item, "Event用の$name")
    return item
  }

  fun setAircraftStats(item: ItemStack, topSpeed: Int, power: Int, brake: Int): Boolean {
    return BuilderItemSupport.replaceLoreLines(
        item,
        listOf(
            BuilderItemSupport.LoreLineReplacement(topSpeedRegex, "最高速: $topSpeed"),
            BuilderItemSupport.LoreLineReplacement(powerMaxRegex, "パワー: $power"),
            BuilderItemSupport.LoreLineReplacement(brakeMaxRegex, "ブレーキ: $brake"),
        ),
        costRegex = costRegex,
        costValue =
            BuilderItemSupport.getCostFromStats(listOf(topSpeed, power, brake), listOf(68, 64, 128))
                ?: 0,
    )
  }

  fun getACNormalVehicle(meta: ItemMeta?): AircraftVehicle {
    val stats = readStats(meta)
    return AircraftVehicle(stats[0] / 100.0, stats[1], stats[2], 3.3333333333333335f)
  }

  fun getName(meta: ItemMeta): String? {
    return BuilderItemSupport.readLoreValue(meta, carNameRegex, "AC: ")
  }

  fun checkItem(item: ItemStack?): Boolean {
    return BuilderItemSupport.checkCustomModelMinecart(item, 20831)
  }

  fun getCarVehicleIntList(item: ItemStack): List<Int> {
    if (!this.checkItem(item)) return emptyList()
    return readStats(item.itemMeta)
  }

  fun getCarCostLimit(item: ItemStack): Int {
    return BuilderItemSupport.getCostLimit(item.itemMeta, costLimitRegex)
  }

  fun getCarVCCost(item: ItemStack): Int? {
    val iList = this.getCarVehicleIntList(item)
    return BuilderItemSupport.getCostFromStats(iList, listOf(68, 64, 128))
  }

  fun changeCarVehicleInt(item: ItemStack, str: String, value: Int): Boolean {
    val rules =
        mapOf(
            "パワー" to BuilderItemSupport.VehicleIntRule(powerMaxRegex, POWER_MAX),
            "最高速" to BuilderItemSupport.VehicleIntRule(topSpeedRegex, TOP_SPEED_MAX),
            "ブレーキ" to BuilderItemSupport.VehicleIntRule(brakeMaxRegex, BRAKE_MAX),
        )
    return BuilderItemSupport.changeVehicleInt(item, str, value, rules, costRegex, ::getCarVCCost)
  }
}
