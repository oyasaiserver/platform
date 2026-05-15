package io.oyasai.anybuilder.common.event

import io.oyasai.anybuilder.runtime.VehicleEntityData
import java.util.UUID
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.entity.Entity
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.world.EntitiesUnloadEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack

abstract class VehicleEventListenerBase : Listener {
  protected val railList: List<Material> =
      listOf(Material.RAIL, Material.ACTIVATOR_RAIL, Material.DETECTOR_RAIL, Material.POWERED_RAIL)

  @EventHandler
  fun wallDamageCancel(event: EntityDamageEvent) {
    if (event.cause == EntityDamageEvent.DamageCause.FALL ||
        event.cause == EntityDamageEvent.DamageCause.SUFFOCATION) {
      val entity = event.entity
      if (entity is Player && checkSeatPlayerUUID(entity.uniqueId)) {
        event.isCancelled = true
      }
    }
  }

  protected fun markVehicleExit(data: VehicleEntityData) {
    if (!data.exit) {
      data.exit = true
      data.exitTask()
    }
  }

  protected fun <T : VehicleEntityData> handleVehicleQuit(
      event: PlayerQuitEvent,
      getData: (UUID) -> T?,
      onTrackedVehicle: (T, UUID) -> Unit = { data, playerUUID ->
        if (data.summoner?.uniqueId == playerUUID) {
          markVehicleExit(data)
        }
      }
  ) {
    val player = event.player
    val vehicle = player.vehicle ?: return
    val data = getData(vehicle.uniqueId) ?: return
    onTrackedVehicle(data, player.uniqueId)
  }

  protected fun isEmptyDriverSeat(data: VehicleEntityData, armorStandUUID: UUID): Boolean {
    val driverSeat = data.seatArmorStands.keys.firstOrNull { it.first == 0 }?.second ?: return false
    return driverSeat.uniqueId == armorStandUUID && driverSeat.passengers.isEmpty()
  }

  protected fun <T : VehicleEntityData> handleArmorStandDamage(
      event: EntityDamageEvent,
      isVehicleArmorStand: (UUID) -> Boolean,
      getData: (UUID) -> T?,
      shouldMarkExit: (EntityDamageEvent) -> Boolean = { true },
      onEmptyDriverSeat: ((T) -> Unit)? = null
  ) {
    if (event.entity.type != EntityType.ARMOR_STAND) return
    val uuid = event.entity.uniqueId
    if (!isVehicleArmorStand(uuid)) return

    if (shouldMarkExit(event)) {
      val data = getData(uuid)
      if (data != null && isEmptyDriverSeat(data, uuid)) {
        onEmptyDriverSeat?.invoke(data)
        markVehicleExit(data)
      }
    }
    event.isCancelled = true
  }

  protected fun <T> handleVehicleItemRightClick(
      event: PlayerInteractEvent,
      getItem: (PlayerInteractEvent) -> ItemStack?,
      isBuilderItem: (ItemStack) -> Boolean,
      resolveBaseData: (ItemStack) -> T?,
      spawnVehicle: (Location, ItemStack, Player, T, Float) -> Boolean,
      consumeItem: (PlayerInteractEvent, ItemStack) -> Unit
  ) {
    if (event.hand != EquipmentSlot.HAND) return
    if (event.action != Action.RIGHT_CLICK_BLOCK) return

    val item = getItem(event) ?: return
    if (!isBuilderItem(item)) return
    if (event.blockFace != BlockFace.UP) return

    val clickedBlock = event.clickedBlock ?: return
    if (railList.contains(clickedBlock.type)) {
      event.isCancelled = true
    }

    val baseData = resolveBaseData(item) ?: return
    val player = event.player
    val spawnLoc = clickedBlock.location.add(0.5, 1.0, 0.5)
    if (spawnVehicle(spawnLoc, item, player, baseData, player.eyeLocation.yaw)) {
      consumeItem(event, item)
    }
  }

  protected fun <T> handleVehicleItemRightClickWithPermission(
      event: PlayerInteractEvent,
      canRide: (Player) -> Boolean,
      deniedMessage: String,
      getItem: (PlayerInteractEvent) -> ItemStack?,
      isBuilderItem: (ItemStack) -> Boolean,
      resolveBaseData: (ItemStack) -> T?,
      spawnVehicle: (Location, ItemStack, Player, T, Float) -> Boolean,
      consumeItem: (PlayerInteractEvent, ItemStack) -> Unit
  ) {
    val item = getItem(event) ?: return
    if (!isBuilderItem(item)) return
    if (!canRide(event.player)) {
      event.player.sendMessage(deniedMessage)
      return
    }
    handleVehicleItemRightClick(
        event = event,
        getItem = { item },
        isBuilderItem = isBuilderItem,
        resolveBaseData = resolveBaseData,
        spawnVehicle = spawnVehicle,
        consumeItem = consumeItem)
  }

  protected fun <T : VehicleEntityData> handleEntityUnload(
      event: EntitiesUnloadEvent,
      getData: (UUID) -> T?
  ) {
    val dataSet =
        event.entities
            .asSequence()
            .filter { it.type == EntityType.ARMOR_STAND }
            .mapNotNull { getData(it.uniqueId) }
            .toSet()

    dataSet.forEach { markVehicleExit(it) }
  }

  protected fun <T> handleSeatArmorStandRightClick(
      event: PlayerInteractAtEntityEvent,
      isSeatArmorStand: (UUID) -> Boolean,
      getDrivingSeatData: (UUID) -> T?,
      onDrivingSeatMounted: (Player, T) -> Unit
  ) {
    val entity = event.rightClicked
    if (entity.type != EntityType.ARMOR_STAND || entity.passengers.isNotEmpty()) return
    val uuid = entity.uniqueId
    if (!isSeatArmorStand(uuid)) return

    entity.addPassenger(event.player)
    event.isCancelled = true

    val data = getDrivingSeatData(uuid) ?: return
    onDrivingSeatMounted(event.player, data)
  }

  protected fun <T> handleSeatArmorStandRightClickWithPermission(
      event: PlayerInteractAtEntityEvent,
      canRide: (Player) -> Boolean,
      deniedMessage: String,
      isSeatArmorStand: (UUID) -> Boolean,
      getDrivingSeatData: (UUID) -> T?,
      onDrivingSeatMounted: (Player, T) -> Unit
  ) {
    val entity = event.rightClicked
    if (entity.type != EntityType.ARMOR_STAND || !isSeatArmorStand(entity.uniqueId)) return
    if (!canRide(event.player)) {
      event.player.sendMessage(deniedMessage)
      return
    }
    handleSeatArmorStandRightClick(
        event = event,
        isSeatArmorStand = isSeatArmorStand,
        getDrivingSeatData = getDrivingSeatData,
        onDrivingSeatMounted = onDrivingSeatMounted)
  }

  protected abstract fun checkSeatPlayerUUID(uuid: UUID): Boolean
}

fun detachPassengers(entity: Entity) {
  entity.passengers.toList().forEach { passenger -> passenger.leaveVehicle() }
}
