package io.oyasai.anybuilder.carbuilder2

import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasai.anybuilder.common.BuilderMenuSupport
import io.oyasai.milepoint.MileagePoint
import io.oyasai.toolbox.*
import io.oyasai.toolbox.Tools.addText
import io.oyasai.toolbox.Tools.allHide
import io.oyasai.toolbox.Tools.color
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object CarBuilder2GUI {
  private val clickItem: MutableMap<UUID, ItemStack> = LinkedHashMap()
  private val maxCostList: MutableMap<UUID, Int> = LinkedHashMap()
  private val eventCarList: MutableMap<UUID, Boolean> = LinkedHashMap()

  fun menu(): OyasaiMenu {
    return BuilderMenuSupport.createRootMenu(
        title = "CarBuilder2",
        onTrialClick = { listMenu(false).open(it) },
        onBuyClick = { listMenu(true).open(it) },
        onCustomClick = { vehicleCustomMenu().open(it) })
  }

  fun listMenu(buySwitch: Boolean): PaginatedOyasaiMenu {
    val line4 = if (buySwitch) "&7クリックすると&9マイルポイント&b100P&7で車両を購入する" else "&7クリックで無料の試乗車両をスポーンさせます"
    val systemUUID = UUID.nameUUIDFromBytes("System".toByteArray())
    return BuilderMenuSupport.buildVehicleListMenu(
        buySwitch = buySwitch,
        source = CarBuilder2BaseCache.getNameList(),
        resolveRow = resolveRow@{ name ->
              val data = CarBuilder2BaseCache.getBaseData(name) ?: return@resolveRow null
              val ownerUUID = data.config.getOwnerUUID() ?: systemUUID
              BuilderMenuSupport.VehicleListRow(
                  ownerUUID,
                  name,
                  data.getBlock().material,
                  listOf(
                      "&aエンティティ数&7: &a${data.totalEntity()}",
                      "&3作者&7: &b${Bukkit.getOfflinePlayer(ownerUUID).name ?: "Unknown"}",
                      line4))
            },
        onSelection = onSelection@{ player, name, buy ->
              if (buy) {
                if (player.inventory.firstEmpty() == -1) {
                  player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
                  player.sendMessage("[CarBuilder2] インベントリを開けてください!")
                  return@onSelection
                }
                if (MileagePoint.payment(player.uniqueId, 100)) {
                  player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
                  val boughtItem =
                      CarBuilder2Item.buyCarItem(name, player.name) ?: return@onSelection
                  player.inventory.addItem(boughtItem)
                  player.sendMessage("[CarBuilder2] ${name}を購入しました!")
                } else {
                  player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
                  player.sendMessage("[CarBuilder2] ポイント不足です!")
                }
              } else {
                player.performCommand("cbmenu $name spawn")
              }
            })
  }

  fun vehicleCustomMenu(): OyasaiMenu {
    val gui = OyasaiMenu(54, color("&9Car Custom Menu"))
    BuilderMenuSupport.setupVehicleSelectionMenu(
        gui,
        BuilderMenuSupport.VehicleSelectionMenuSpec(
            promptText = "&aカスタムしたい車を直接クリックして選択してください",
            itemChecker = CarBuilder2Item::checkCarItem,
            selectedItemMap = clickItem,
            maxCostMap = maxCostList,
            eventVehicleMap = eventCarList,
            getCostLimit = CarBuilder2Item::getCarCostLimit,
            resolveUnlimitedCost = { player ->
              val mileage = MileagePoint.dataList[player.uniqueId]?.mileage ?: 0.0
              (mileage / 1000.0).toInt() + 10
            },
            setupButtons = ::setupCustomButtons,
            refresh = ::vehicleCustomRePane))
    return gui
  }

  private fun setupCustomButtons(gui: OyasaiMenu) {
    BuilderMenuSupport.bindVehicleStatButtons(
        gui = gui,
        statNames = listOf("最高速", "パワー", "ブレーキ", "ギア数", "タイヤ"),
        getCurrentItem = { uuid -> clickItem[uuid] },
        changeStat = CarBuilder2Item::changeCarVehicleInt,
        getCurrentCost = CarBuilder2Item::getCarVCCost,
        getCostLimit = { uuid -> maxCostList[uuid] ?: 0 },
        isEventVehicle = { uuid -> eventCarList[uuid] == true },
        payCost = { uuid, cost -> MileagePoint.payment(uuid, cost) },
        onRefresh = { targetGui, currentItem, player ->
          vehicleCustomRePane(targetGui, currentItem, player)
        })

    gui.setItem(
        8,
        ItemStack(Material.CRAFTING_TABLE)
            .addText("&fMT切り替え", listOf("&7MTかATかを切り替えます"))
            .allHide()) { event ->
          event.isCancelled = true
          val p = event.whoClicked as Player
          val currentItem = clickItem[p.uniqueId] ?: return@setItem
          CarBuilder2Item.changeCarIsMT(currentItem)
          p.playSound(p.location, Sound.UI_BUTTON_CLICK, 0.5f, 1.0f)
          vehicleCustomRePane(gui, currentItem, p)
        }

    gui.setItem(
        7,
        ItemStack(Material.SADDLE)
            .addText(
                "&fMode切り替え",
                listOf(
                    "&7操作性に関するModeをワンクリックで切り替えます",
                    "&7Normal=従来の操作感、運転しやすいモード",
                    "&7Normal_Race=従来の操作に加え、路面のブロックで速度が変わります",
                    "&7Pro=路面のブロックの変化に加え、操作感もよくあるレースゲームのようで楽しくなります",
                    "&7Pro+=操作性がよりリアルで難しくなります",
                    "&7Real=ハンドル操作が完全にリアルでドリフトは未実装です"))
            .allHide()) { event ->
          event.isCancelled = true
          val p = event.whoClicked as Player
          val currentItem = clickItem[p.uniqueId] ?: return@setItem
          CarBuilder2Item.changeCarMode(currentItem)
          p.playSound(p.location, Sound.UI_BUTTON_CLICK, 0.5f, 1.0f)
          vehicleCustomRePane(gui, currentItem, p)
        }
  }

  private fun vehicleCustomRePane(gui: OyasaiMenu, item: ItemStack, player: Player) {
    if (!CarBuilder2Item.checkCarItem(item)) return

    BuilderMenuSupport.renderVehicleStatDigits(
        gui,
        CarBuilder2Item.getCarVehicleIntList(item),
        listOf(
            BuilderMenuSupport.VehicleStatRow("&f最高速", "&7上限:180"),
            BuilderMenuSupport.VehicleStatRow("&fパワー", "&7上限:1000"),
            BuilderMenuSupport.VehicleStatRow("&fブレーキ", "&7上限:1000"),
            BuilderMenuSupport.VehicleStatRow("&fギア数", "&7上限:100"),
            BuilderMenuSupport.VehicleStatRow("&fタイヤ", "&7上限:200")))

    val cost = CarBuilder2Item.getCarVCCost(item) ?: 0
    val limit = maxCostList[player.uniqueId] ?: 0
    val points = MileagePoint.getUserPoint(player.uniqueId)

    val colorCode = if (cost >= limit) "&c" else "&e"
    gui.updateTitle(color("&9Point&7:&b${points}p &7|${colorCode}Cost:$cost/$limit"), player)
  }
}
