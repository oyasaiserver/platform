package io.oyasai.anybuilder.aircraftbuilder

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderBaseCache
import io.oyasai.anybuilder.common.BuilderMenuSupport
import io.oyasai.milepoint.MileagePoint
import io.oyasai.toolbox.OyasaiMenu
import io.oyasai.toolbox.PaginatedOyasaiMenu
import io.oyasai.vehicle.base.VehicleBalanceSettings
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Sound
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
    val line4 = if (buySwitch) "&7クリックすると&9マイルポイント&b100P&7で車両を購入する" else "&7クリックで無料の試乗車両をスポーンさせます"
    val systemUUID = UUID.nameUUIDFromBytes("System".toByteArray())
    return BuilderMenuSupport.buildVehicleListMenu(
        buySwitch = buySwitch,
        source = AircraftBuilderBaseCache.getNameList(),
        resolveRow = resolveRow@{ name ->
              val data = AircraftBuilderBaseCache.getBaseData(name) ?: return@resolveRow null
              val ownerUUID = data.config.getOwnerUUID() ?: systemUUID
              BuilderMenuSupport.VehicleListRow(
                  ownerUUID,
                  name,
                  data.getBlock().material,
                  listOf(
                      "&aエンティティ数&7: &a${data.totalEntity()}",
                      "&3作者&7: &b${Bukkit.getOfflinePlayer(ownerUUID).name ?: "Unknown"}",
                      line4,
                  ),
              )
            },
        onSelection = onSelection@{ player, name, buy ->
              if (buy) {
                if (player.inventory.firstEmpty() == -1) {
                  player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
                  player.sendMessage("[AircraftBuilder] インベントリに空きがありません")
                  return@onSelection
                }
                if (MileagePoint.payment(player.uniqueId, 100)) {
                  player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
                  val boughtItem =
                      AircraftBuilderItem.buyItem(name, player.name) ?: return@onSelection
                  player.inventory.addItem(boughtItem)
                  player.sendMessage("[AircraftBuilder] $name を購入しました")
                } else {
                  player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
                  player.sendMessage("[AircraftBuilder] ポイント不足です")
                }
              } else {
                player.performCommand("acmenu $name spawn")
              }
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
        listOf(
            BuilderMenuSupport.VehicleStatRow("&f最高速", "&7上限:180"),
            BuilderMenuSupport.VehicleStatRow("&fパワー", "&7上限:1000"),
            BuilderMenuSupport.VehicleStatRow("&fブレーキ", "&7上限:1000"),
        ),
    )

    val cost = AircraftBuilderItem.getCarVCCost(item) ?: 0
    val limit = maxCostList[player.uniqueId] ?: 0
    val points = MileagePoint.getUserPoint(player.uniqueId)

    val colorCode = if (cost >= limit) "&c" else "&e"
    gui.updateTitle("&9Point&7:&b${points}p &7|${colorCode}Cost:$cost/$limit", player)
  }
}
