package io.oyasai.anybuilder.carbuilder2.model

import io.oyasai.anybuilder.runtime.BaseVehicleEntityDataCore
import io.oyasai.anybuilder.carbuilder2.controller.startImpl
import io.oyasai.anybuilder.carbuilder2.layout.reOffsetDisplayImpl
import io.oyasai.anybuilder.carbuilder2.layout.reOffsetDisplayMapImpl
import io.oyasai.anybuilder.carbuilder2.layout.saveDefImpl
import io.oyasai.anybuilder.carbuilder2.layout.wheelZImpl
import io.oyasai.anybuilder.carbuilder2.lifecycle.autoSitStartImpl
import io.oyasai.anybuilder.carbuilder2.lifecycle.exitTaskImpl
import io.oyasai.anybuilder.carbuilder2.presentation.bodyLightTaskImpl
import io.oyasai.anybuilder.carbuilder2.presentation.headLightTaskImpl
import io.oyasai.anybuilder.carbuilder2.presentation.isLightBlockToListImpl
import io.oyasai.anybuilder.carbuilder2.presentation.retractableTaskImpl
import io.oyasai.anybuilder.carbuilder2.presentation.setBodyRotateImpl
import io.oyasai.anybuilder.carbuilder2.presentation.smokeParticleImpl
import io.oyasai.anybuilder.carbuilder2.presentation.soundTaskImpl
import io.oyasai.anybuilder.carbuilder2.presentation.updateBarImpl
import io.oyasai.anybuilder.carbuilder2.presentation.wheelTaskImpl
import io.oyasai.toolbox.ControlKey
import io.oyasai.toolbox.Tools
import io.oyasai.vehicle.car.CarVehicle
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.boss.BarColor
import org.bukkit.boss.BarStyle
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Display
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import java.util.ArrayList
import java.util.LinkedHashMap
import java.util.UUID

data class CarBuilder2EntityData(
  val seatArmorStandOffsets: MutableMap<Pair<Int, ArmorStand>, Vector>,
  val vehicleBodyArmorStands: MutableList<ArmorStand>,
  val display: MutableMap<CarBuilder2EntityType, MutableMap<Pair<Int, Vector>, MutableSet<BlockDisplay>>>,
  val vehicle: CarVehicle,
  override var owner: UUID?,
  val summonerData: Player?,
  val baseData: CarBuilder2BaseData,
  val realMode: Boolean,
  var setYaw: Float,
  val item: ItemStack? = null,
  private val pluginRef: Plugin = requireNotNull(Tools.pl) { "Plugin is not initialized" }
) : BaseVehicleEntityDataCore(
    seatArmorStandOffsets,
    vehicleBodyArmorStands,
    summonerData,
    pluginRef,
    NamespacedKey(pluginRef, vehicleBodyArmorStands[0].uniqueId.toString()),
    Bukkit.createBossBar(
        NamespacedKey(pluginRef, vehicleBodyArmorStands[0].uniqueId.toString()),
        "| 1速 0km/h |",
        BarColor.WHITE,
        BarStyle.SEGMENTED_10
    )
) {
    var pitch: Float = 0f
    override var exit: Boolean = false
    var driveStartSwitch: Boolean = false

    val displayTypeList: MutableMap<CarBuilder2DisplayType, MutableSet<BlockDisplay>> = LinkedHashMap()
    val displayDef: MutableMap<CarBuilder2EntityType, MutableMap<BlockDisplay, Transformation>> = LinkedHashMap()
    var newPlayerSlot: Boolean = true
    var oldSlotInt: Int = 4
    var lightSwitch: Boolean = true
    var wheelRPM: Double = 0.0
    var bodyPitch: Float = 0f
    var headlightAngle: Float = 0f
    var winkerSwitch: Pair<Boolean, Boolean> = false to false
    var winkerCount: Int = 0

     var turboDouble: Double = 0.0
     var turboSwitch: Boolean = false
     var turboSlotChange: Int = 1
     val lightBlockList: MutableList<Location> = ArrayList()
     val bodyReOffset: Vector = Vector(0.0, 0.0, 0.0)
     var wheelZ: Float = 0f
     var handleAddYawFix: Float = 0f

    init {
        this.autoSitStart()

        for (type in CarBuilder2EntityType.entries) {
            this.saveDef(type)
        }

        this.setYaw = -this.setYaw
        this.reOffsetDisplay(CarBuilder2EntityType.Body, mutableMapOf(0 to this.baseData.config.getOffsetBody()))
        this.reOffsetDisplayMap(CarBuilder2EntityType.Wheel, this.baseData.config.getOffset(CarBuilder2BaseDataType.Wheel))
        this.reOffsetDisplayMap(CarBuilder2EntityType.Wheel2, this.baseData.config.getOffset(CarBuilder2BaseDataType.Wheel2))
        this.reOffsetDisplayMap(CarBuilder2EntityType.HeadLight, this.baseData.config.getOffset(CarBuilder2BaseDataType.HeadLight))
        this.wheelTask(0.001, 0.0f)
        this.isLightBlockToList()
        this.bodyLightTask(0, null)
        this.refreshDisplayList()
        this.refreshDisplayEntityID()
    }

    override fun displayGroups(): Iterable<Iterable<Display>> = this.display.values.flatMap { it.values }

     fun reOffsetDisplayMap(type: CarBuilder2EntityType, newOffset: Map<Int, Vector>) = reOffsetDisplayMapImpl(type, newOffset)
     fun saveDef(type: CarBuilder2EntityType) = saveDefImpl(type)
    fun reOffsetDisplay(type: CarBuilder2EntityType, newOffset: MutableMap<Int, Vector>) = reOffsetDisplayImpl(type, newOffset)
     fun wheelZ() = wheelZImpl()
     fun autoSitStart() = autoSitStartImpl()
     fun start() = startImpl()
    override fun exitTask() = exitTaskImpl()
     fun wheelTask(speed: Double, handleAngle: Float?) = wheelTaskImpl(speed, handleAngle)
     fun setBodyRotate(oldSpeed: Double) = setBodyRotateImpl(oldSpeed)
     fun soundTask(wasd: ControlKey?) = soundTaskImpl(wasd)
     fun updateBar(slipstream: Boolean) = updateBarImpl(slipstream)
     fun bodyLightTask(slot: Int, wasd: ControlKey?) = bodyLightTaskImpl(slot, wasd)
     fun retractableTask(switch: Boolean) = retractableTaskImpl(switch)
     fun headLightTask(yaw: Float) = headLightTaskImpl(yaw)
     fun smokeParticle(speed: Double, slipAngle: Float, yaw: Float, player: Player?) = smokeParticleImpl(speed, slipAngle, yaw, player)
    fun isLightBlockToList() = isLightBlockToListImpl()
}
