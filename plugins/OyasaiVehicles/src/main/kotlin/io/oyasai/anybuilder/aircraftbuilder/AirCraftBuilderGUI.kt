package io.oyasai.anybuilder.aircraftbuilder

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderBaseCache
import io.oyasai.anybuilder.common.BuilderMenuSupport
import io.oyasai.milepoint.MileagePoint
import io.oyasai.toolbox.OyasaiMenu
import io.oyasai.toolbox.PaginatedOyasaiMenu
import io.oyasai.vehicle.base.VehicleBalanceSettings
import java.util.*
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object AircraftBuilderGUI {
  private val clickItem: MutableMap<UUID, ItemStack> = LinkedHashMap()
  private val maxCostList: MutableMap<UUID, Int> = LinkedHashMap()
  private val eventCarList: MutableMap<UUID, Boolean> = LinkedHashMap()

  fun menu(): OyasaiMenu {
    return BuilderMenuSupport.createRootMenu(
        title = "AircraftBuilder",
        onTrialClick = { listMenu(false).open(it) },
        onBuyClick = { listMenu(true).open(it) },
        onCustomClick = { vehicleCustomMenu().open(it) },
    )
  }

  fun listMenu(buySwitch: Boolean): PaginatedOyasaiMenu {
    val systemUUID = UUID.nameUUIDFromBytes("System".toByteArray())
    return BuilderMenuSupport.buildVehicleListMenu(
        buySwitch = buySwitch,
        source = AircraftBuilderBaseCache.getNameList(),
        resolveRow = resolveRow@{ name ->
              val data = AircraftBuilderBaseCache.getBaseData(name) ?: return@resolveRow null
              val ownerUUID = data.config.getOwnerUUID() ?: systemUUID
              BuilderMenuSupport.vehicleListRow(
                  ownerUUID,
                  name,
                  data.getBlock().material,
                  data.totalEntity(),
                  buySwitch,
              )
            },
        onSelection = { player, name, buy ->
          BuilderMenuSupport.selectVehicle(
              player,
              name,
              buy,
              AircraftBuilderItem::buyItem,
              "[AircraftBuilder] インベントリに空きがありません",
              "[AircraftBuilder] $name を購入しました",
              "[AircraftBuilder] ポイント不足です",
              "acmenu $name spawn",
          )
        },
    )
  }

  fun vehicleCustomMenu(): OyasaiMenu {
    val gui = OyasaiMenu(54, "&9AC Custom Menu")
    BuilderMenuSupport.setupVehicleSelectionMenu(
        gui,
        BuilderMenuSupport.VehicleSelectionMenuSpec(
            promptText = "&aカスタムしたい飛行機を直接クリックして選択してください",
            itemChecker = AircraftBuilderItem::checkItem,
            selectedItemMap = clickItem,
            maxCostMap = maxCostList,
            eventVehicleMap = eventCarList,
            getCostLimit = AircraftBuilderItem::getCarCostLimit,
            resolveUnlimitedCost = { player ->
              val configLimit = VehicleBalanceSettings.upgradeCostLimit
              if (configLimit >= 0) {
                configLimit
              } else {
                val mileage = MileagePoint.dataList[player.uniqueId]?.mileage ?: 0.0
                (mileage / 1000.0).toInt() + 10
              }
            },
            setupButtons = ::setupCustomButtons,
            refresh = ::vehicleCustomRePane,
        ),
    )
    return gui
  }

  private fun setupCustomButtons(gui: OyasaiMenu) {
    BuilderMenuSupport.bindVehicleStatButtons(
        gui = gui,
        statNames = listOf("最高速", "パワー", "ブレーキ"),
        getCurrentItem = { uuid -> clickItem[uuid] },
        changeStat = AircraftBuilderItem::changeCarVehicleInt,
        getCurrentCost = AircraftBuilderItem::getCarVCCost,
        getCostLimit = { uuid -> maxCostList[uuid] ?: 0 },
        isEventVehicle = { uuid -> eventCarList[uuid] == true },
        payCost = { uuid, cost -> MileagePoint.payment(uuid, cost) },
        onRefresh = { targetGui, currentItem, player ->
          vehicleCustomRePane(targetGui, currentItem, player)
        },
    )
  }

  private fun vehicleCustomRePane(gui: OyasaiMenu, item: ItemStack, player: Player) {
    if (!AircraftBuilderItem.checkItem(item)) return

    BuilderMenuSupport.renderVehicleStatDigits(
        gui,
        AircraftBuilderItem.getCarVehicleIntList(item),
        BuilderMenuSupport.commonStatRows,
    )

    val cost = AircraftBuilderItem.getCarVCCost(item) ?: 0
    val limit = maxCostList[player.uniqueId] ?: 0
    val points = MileagePoint.getUserPoint(player.uniqueId)

    val colorCode = if (cost >= limit) "&c" else "&e"
    gui.updateTitle("&9Point&7:&b${points}p &7|${colorCode}Cost:$cost/$limit", player)
  }
}
