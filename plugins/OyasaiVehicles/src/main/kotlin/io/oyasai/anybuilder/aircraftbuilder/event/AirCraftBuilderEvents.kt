package io.oyasai.anybuilder.aircraftbuilder.event

import io.oyasai.VehicleGarageService
import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderItem
import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderSpawn
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseCache
import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderEntityList
import io.oyasai.anybuilder.common.event.VehicleEventListenerBase
import io.oyasai.canRideAircraftBuilderOrAdmin
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityDamageEvent.DamageCause
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.world.EntitiesUnloadEvent

object AircraftBuilderEvents : VehicleEventListenerBase() {

  override fun checkSeatPlayerUUID(uuid: UUID): Boolean =
      AircraftBuilderEntityList.checkSeatPlayerUUID(uuid)

  @EventHandler
  fun bodyArmorStandsDamageEvent(event: EntityDamageEvent) {
    handleArmorStandDamage(
        event = event,
        isVehicleArmorStand = AircraftBuilderEntityList::checkArmorStandUUID,
        getData = AircraftBuilderEntityList::getData,
        shouldMarkExit = { it.cause == DamageCause.ENTITY_ATTACK },
        onEmptyDriverSeat = { data ->
          Bukkit.getLogger()
              .info(
                  "[AircraftBuilder] Aircraft ${data.baseData.name} despawned due to ENTITY_ATTACK on empty driver seat.")
        })
  }

  @EventHandler
  fun unloadEntity(event: EntitiesUnloadEvent) {
    handleEntityUnload(event) { uuid -> AircraftBuilderEntityList.getData(uuid) }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun playerRightClickEvent(event: PlayerInteractEvent) {
    val item = event.item?.clone() ?: return
    handleVehicleItemRightClickWithPermission(
        event = event,
        canRide = { it.canRideAircraftBuilderOrAdmin() },
        deniedMessage = "[AircraftBuilder] 実行権限がありません。",
        getItem = { item },
        isBuilderItem = AircraftBuilderItem::checkItem,
        resolveBaseData = { stack ->
          val name = AircraftBuilderItem.getName(stack.itemMeta)
          if (name == null) null else AircraftBuilderBaseCache.getBaseData(name)
        },
        spawnVehicle = { spawnLoc, vehicleItem, owner, baseData, yaw ->
          if (!VehicleGarageService.canSpawnPurchasedVehicle(owner)) {
            owner.sendMessage("[AircraftBuilder] 同時に出せる購入車両は6台までです。")
            false
          } else {
            AircraftBuilderSpawn.spawn(spawnLoc, vehicleItem, owner, owner, baseData, yaw)
          }
        },
        consumeItem = { clickEvent, _ -> clickEvent.player.inventory.itemInMainHand.amount = 0 })
  }

  @EventHandler
  fun playerArmorStandRightClick(event: PlayerInteractAtEntityEvent) {
    handleSeatArmorStandRightClickWithPermission(
        event = event,
        canRide = { it.canRideAircraftBuilderOrAdmin() },
        deniedMessage = "[AircraftBuilder] 実行権限がありません。",
        isSeatArmorStand = AircraftBuilderEntityList::checkSeatArmorStand,
        getDrivingSeatData = AircraftBuilderEntityList::checkDrivingSeat) { player, _ ->
          player.sendMessage("[AircraftBuilder] ホットバースロットで特殊操作:")
          player.sendMessage("[AircraftBuilder] １～４：下降, ５：キープ, ６～９：上昇です")
        }
  }

  @EventHandler
  fun playerQuitEvent(event: PlayerQuitEvent) {
    handleVehicleQuit(event, { uuid -> AircraftBuilderEntityList.getData(uuid) }) { data, playerUUID
      ->
      data.removeTrackedPlayer(playerUUID)
      event.player.leaveVehicle()
      if (data.summoner?.uniqueId == playerUUID) {
        markVehicleExit(data)
      }
    }
  }
}
