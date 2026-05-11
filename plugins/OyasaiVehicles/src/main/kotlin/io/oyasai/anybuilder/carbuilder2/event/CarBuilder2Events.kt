package io.oyasai.anybuilder.carbuilder2.event

import io.oyasai.VehicleGarageService
import io.oyasai.anybuilder.carbuilder2.CarBuilder2Item
import io.oyasai.anybuilder.carbuilder2.CarBuilder2Spawn
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2EntityList
import io.oyasai.anybuilder.common.event.VehicleEventListenerBase
import io.oyasai.canRideCarBuilder2OrAdmin
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

object CarBuilder2Events : VehicleEventListenerBase() {

  override fun checkSeatPlayerUUID(uuid: UUID): Boolean =
      CarBuilder2EntityList.checkSeatPlayerUUID(uuid)

  @EventHandler
  fun bodyArmorStandsDamageEvent(event: EntityDamageEvent) {
    handleArmorStandDamage(
        event = event,
        isVehicleArmorStand = CarBuilder2EntityList::checkArmorStandUUID,
        getData = CarBuilder2EntityList::getData,
        shouldMarkExit = { it.cause == DamageCause.ENTITY_ATTACK },
        onEmptyDriverSeat = { data ->
          Bukkit.getLogger()
              .info(
                  "[CarBuilder2] Car ${data.baseData.name} despawned due to ENTITY_ATTACK on empty driver seat.")
        })
  }

  @EventHandler
  fun unloadEntity(event: EntitiesUnloadEvent) {
    handleEntityUnload(event) { uuid -> CarBuilder2EntityList.getData(uuid) }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun playerRightClickEvent(event: PlayerInteractEvent) {
    val item = event.item?.clone() ?: return
    handleVehicleItemRightClickWithPermission(
        event = event,
        canRide = { it.canRideCarBuilder2OrAdmin() },
        deniedMessage = "[CarBuilder2] 実行権限がありません。",
        getItem = { item },
        isBuilderItem = { stack -> event.hasBlock() && CarBuilder2Item.checkCarItem(stack) },
        resolveBaseData = { stack ->
          val carName = CarBuilder2Item.getCarName(stack.itemMeta)
          if (carName == null) null else CarBuilder2BaseCache.getBaseData(carName)
        },
        spawnVehicle = { spawnLoc, vehicleItem, owner, baseData, yaw ->
          if (!VehicleGarageService.canSpawnPurchasedVehicle(owner)) {
            owner.sendMessage("[CarBuilder2] 同時に出せる購入車両は6台までです。")
            false
          } else {
            CarBuilder2Spawn.spawn(spawnLoc, vehicleItem, owner, owner, baseData, yaw)
          }
        },
        consumeItem = { clickEvent, _ -> clickEvent.player.inventory.itemInMainHand.amount = 0 })
  }

  @EventHandler
  fun playerArmorStandRightClick(event: PlayerInteractAtEntityEvent) {
    handleSeatArmorStandRightClickWithPermission(
        event = event,
        canRide = { it.canRideCarBuilder2OrAdmin() },
        deniedMessage = "[CarBuilder2] 実行権限がありません。",
        isSeatArmorStand = CarBuilder2EntityList::checkSeatArmorStand,
        getDrivingSeatData = CarBuilder2EntityList::checkDrivingSeat) { player, data ->
          player.sendMessage("[CarBuilder2] ホットバースロットで操作:")
          val mtStr = if (data.vehicle.manualTransmission) "４：シフトダウン, ６：シフトアップ | " else ""
          player.sendMessage(
              "[CarBuilder2] １：左ウインカー, ２：ハザード, ３：右ウインカー | ${mtStr} ８：ライト, ９：クルーズモード切替")
        }
  }

  @EventHandler
  fun playerQuitEvent(event: PlayerQuitEvent) {
    handleVehicleQuit(event, { uuid -> CarBuilder2EntityList.getData(uuid) }) { data, playerUUID ->
      data.removeTrackedPlayer(playerUUID)
      event.player.leaveVehicle()
      if (data.summoner?.uniqueId == playerUUID) {
        markVehicleExit(data)
      }
    }
  }
}
