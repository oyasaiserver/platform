package io.oyasai.anybuilder.aircraftbuilder.data

import io.oyasai.anybuilder.runtime.BaseVehicleEntityDataCore
import io.oyasai.toolbox.Tools
import io.oyasai.vehicle.air.AircraftVehicle
import java.util.LinkedHashMap
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.boss.BarColor
import org.bukkit.boss.BarStyle
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Transformation
import org.bukkit.util.Vector

data class AircraftBuilderEntityData(
    val seatArmorStandOffsets: MutableMap<Pair<Int, ArmorStand>, Vector>,
    val vehicleBodyArmorStands: MutableList<ArmorStand>,
    val display: MutableMap<Pair<Int, Vector>, MutableSet<BlockDisplay>>,
    val vehicle: AircraftVehicle,
    var owner: UUID?,
    val summonerData: Player?,
    val baseData: AircraftBuilderBaseData,
    var setYaw: Float,
    val item: ItemStack? = null,
    private val pluginRef: org.bukkit.plugin.Plugin =
        requireNotNull(Tools.pl) { "Plugin is not initialized" }
) :
    BaseVehicleEntityDataCore(
        seatArmorStandOffsets,
        vehicleBodyArmorStands,
        summonerData,
        pluginRef,
        NamespacedKey(pluginRef, vehicleBodyArmorStands[0].uniqueId.toString()),
        Bukkit.createBossBar(
            NamespacedKey(pluginRef, vehicleBodyArmorStands[0].uniqueId.toString()),
            "| 0km/h |",
            BarColor.WHITE,
            BarStyle.SOLID)) {
  var pitch: Float = 0f

  override var exit: Boolean = false
  var driveStartSwitch: Boolean = false

  val displayDef: MutableMap<BlockDisplay, Transformation> = LinkedHashMap()

  var gasDouble: Double = 0.0

  val bodyReOffset: Vector = Vector(0.0, 0.0, 0.0)

  init {
    this.autoSitStart()
    this.saveDef()
    this.setYaw = -this.setYaw
    this.reOffsetDisplay(mutableMapOf(0 to this.baseData.config.getOffsetBody()))
    this.bodyLightTask()
    this.refreshDisplayList()
    this.refreshDisplayEntityID()
    this.setDisplayRotate()
  }

  override fun displayGroups(): Iterable<Iterable<org.bukkit.entity.Display>> = this.display.values

  fun saveDef() = saveDefImpl()

  fun reOffsetDisplay(newOffset: MutableMap<Int, Vector>) = reOffsetDisplayImpl(newOffset)

  fun autoSitStart() = autoSitStartImpl()

  fun start() = startImpl()

  override fun exitTask() = exitTaskImpl()

  fun soundTask(wasd: io.oyasai.toolbox.ControlKey?) = soundTaskImpl(wasd)

  fun updateBar() = updateBarImpl()

  fun bodyLightTask() = bodyLightTaskImpl()

  fun setDisplayRotate() = setDisplayRotateImpl()
}
