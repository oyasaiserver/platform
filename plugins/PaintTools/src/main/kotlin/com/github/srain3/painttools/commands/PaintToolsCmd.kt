package com.github.srain3.painttools.commands

import com.github.srain3.painttools.events.PlayerClickEvent
import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.MapData
import com.github.srain3.painttools.tools.configs.MapIdList
import com.github.srain3.painttools.tools.configs.MapIdList.checkID
import com.github.srain3.painttools.tools.configs.MapIdList.saveID
import com.github.srain3.painttools.tools.configs.MapIdList.saveMapIdConfig
import kotlin.math.PI
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.block.ShulkerBox
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryType
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BlockStateMeta
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapRenderer
import org.bukkit.map.MapView
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.Vector

/** コマンド「/painttools」を処理する */
object PaintToolsCmd : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "painttools") return false
    if (!sender.hasPermission("painttools.command.painttools")) return false

    if (args.isEmpty()) return false
    when (args[0]) {
      // 白紙のキャンバスを取得させる
      "canvas" -> {
        if (sender !is Player) {
          if (args.size == 2) {
            Bukkit.getServer().onlinePlayers.forEach {
              if (it.name == args[1]) {
                val mapView = Bukkit.createMap(it.world)
                val id = getID()
                it.inventory.addItem(createMap(mapView, id))
                saveID(id)
                saveMapIdConfig()
              }
            }
          }
          return false
        } else {
          if (!sender.hasPermission("painttools.command.painttools.canvas")) return false
          val mapView = Bukkit.createMap(sender.world)
          var id = getID()
          if (args.size == 2) {
            if (args[1].toIntOrNull() != null) {
              id = args[1].toInt()
            } else {
              saveID(id)
              saveMapIdConfig()
            }
          } else {
            saveID(id)
            saveMapIdConfig()
          }
          sender.inventory.addItem(createMap(mapView, id))
        }

        return true
      }
      // キャンバスのロックをする
      "lock" -> {
        if (sender !is Player) return false
        if (!sender.hasPermission("painttools.canvas.use")) return false
        if (args.size == 2) {
          if (args[1].toIntOrNull() == null) return false
          val id = args[1].toInt()
          if (checkID(id)) {
            // 存在するIDが
            if (MapIdList.checkLockID(id)) {
              // ロックされている場合
              sender.sendMessage(ToolBox.colorMessage("[PaintTools] &e既にLockされているIDです。"))
            } else {
              // ロックされていない場合
              MapIdList.setLockID(id)
              sender.sendMessage(ToolBox.colorMessage("[PaintTools] &6${id}&aをLockしました!"))
            }
          } else {
            // 存在しないIDの場合
            sender.sendMessage(ToolBox.colorMessage("[PaintTools] &cそのIDは存在しません!"))
          }
        }
        return true
      }
      // キャンバスをアンロックする
      "unlock" -> {
        if (sender !is Player) return false
        if (!sender.hasPermission("painttools.canvas.use")) return false
        if (args.size == 2) {
          if (args[1].toIntOrNull() == null) return false
          val id = args[1].toInt()
          if (checkID(id)) {
            // 存在するIDが
            if (MapIdList.removeLockID(id)) {
              // アンロック出来た場合
              sender.sendMessage(ToolBox.colorMessage("[PaintTools] &6${id}&aをunLockしました!"))
            } else {
              // アンロック出来なかった場合
              sender.sendMessage(ToolBox.colorMessage("[PaintTools] &eこのIDはLockされていません。"))
            }
          } else {
            // 存在しないIDの場合
            sender.sendMessage(ToolBox.colorMessage("[PaintTools] &cそのIDは存在しません!"))
          }
        }
        return true
      }
      // Dyeを詰めたシュルカーインベントリを開かせる
      "dye" -> {
        if (sender is Player) {
          if (!sender.hasPermission("painttools.command.painttools.dye")) return false
          if (args.size == 2) {
            if (!sender.isOp) return false
            Bukkit.getServer().onlinePlayers.forEach {
              if (it.name == args[1]) {
                it.openInventory(giveDyeInv() ?: return true)
                sender.sendMessage(
                    ToolBox.colorMessage("[PaintTools] &6${it.name}&aにDyeBoxを開かせました")
                )
              }
            }
          } else {
            sender.openInventory(giveDyeInv() ?: return true)
            sender.sendMessage(ToolBox.colorMessage("[PaintTools] &aDyeBoxを開きました"))
          }
        } else {
          if (args.size == 2) {
            Bukkit.getServer().onlinePlayers.forEach {
              if (it.name == args[1]) {
                it.openInventory(giveDyeInv() ?: return true)
                sender.sendMessage(
                    ToolBox.colorMessage("[PaintTools] &6${it.name}&aにDyeBoxを開かせました")
                )
              }
            }
          }
        }
      }
      // ブラシサイズ変更
      "brushsize" -> {
        if (sender !is Player) return false
        if (!sender.hasPermission("painttools.canvas.use")) return false
        if (args.size == 2) {
          val size = args[1].toIntOrNull() ?: return false
          if ((0..20).contains(size)) {
            PlayerClickEvent.setBrushSize(sender.uniqueId, size)
            sender.sendMessage(ToolBox.colorMessage("[PaintTools] &aサイズを&6${size}&aに変更しました!"))
          } else {
            sender.sendMessage(ToolBox.colorMessage("[PaintTools] &c0~20で指定して下さい!"))
          }
        }
      }
      // 1~3分前の状態にキャンバスを戻す
      "undo" -> {
        if (sender !is Player) return false
        if (!sender.hasPermission("painttools.canvas.use")) return false
        if (args.size == 2) {
          when (val num = args[1].toIntOrNull()) {
            null -> {
              sender.sendMessage(ToolBox.colorMessage("[PaintTools] &c1~3で指定して下さい!"))
            }

            in 1..3 -> {
              // 1~3分前に戻す
              undoCommand(sender, num)
            }
          }
        } else {
          // 1分前に戻す
          undoCommand(sender, 1)
        }
        return true
      }
    }
    return false
  }

  private fun createMap(mapView: MapView, id: Int): ItemStack {
    mapView.renderers.clear()
    mapView.isTrackingPosition = false
    mapView.isUnlimitedTracking = false

    val mapRenderer =
        object : MapRenderer() {
          override fun render(map: MapView, canvas: MapCanvas, player: Player) {}

          override fun isExplorerMap(): Boolean = false
        }
    mapView.addRenderer(mapRenderer)

    val mapItem = ItemStack(Material.FILLED_MAP)
    val mapMeta = mapItem.itemMeta as MapMeta

    mapMeta.mapView = mapView
    mapMeta.setDisplayName("Canvas: $id")
    mapMeta.lore =
        mutableListOf(
            ToolBox.colorMessage("&a額縁に飾ってから"),
            ToolBox.colorMessage("&a各種染料で右クリックすると描けます"),
        )
    mapMeta.persistentDataContainer.set(
        NamespacedKey(ToolBox.pl, "ID"),
        PersistentDataType.INTEGER,
        id,
    )
    mapItem.itemMeta = mapMeta

    return mapItem
  }

  /** かぶりのないIDを出す */
  private fun getID(): Int {
    var id = MapIdList.getLastID().plus(1)
    while (checkID(id)) { // 重複IDの場合whileで使われてないIDを探す
      id++
    }
    return id
  }

  private val boxItem = ItemStack(Material.SHULKER_BOX)

  /** Dyeを詰めたシュルカーボックスアイテムを作る */
  fun createDyeSet() {
    val meta = boxItem.itemMeta
    val sBox = (meta as BlockStateMeta).blockState as ShulkerBox
    val inv = Bukkit.createInventory(null, InventoryType.SHULKER_BOX, "Dye Box")
    ToolBox.dyeList.forEach { inv.addItem(ItemStack(it, 1)) }
    val paper = ItemStack(Material.PAPER, 1)
    val pMeta = paper.itemMeta
    pMeta?.lore = mutableListOf("canvas用の消しゴムアイテム")
    paper.itemMeta = pMeta
    inv.addItem(paper)

    val feather = ItemStack(Material.FEATHER, 1)
    val fMeta = feather.itemMeta
    fMeta?.setDisplayName("255,255,255")
    fMeta?.lore =
        mutableListOf(
            "canvas用 色が自由なペン(非推奨)",
            "左クリックで名前決定用AnvilGUIを開く",
            "[255,255,255]か[#FFFFFF]で指定して下さい",
            "1,1,1の色だと透過します",
            "マイクラのマップカラーにない色は描けませんが",
            "データは正確に残ります",
        )
    fMeta?.setCustomModelData(831)
    feather.itemMeta = fMeta
    inv.addItem(feather)

    val inkSac = ItemStack(Material.INK_SAC, 1)
    val inkMeta = inkSac.itemMeta
    inkMeta?.lore = mutableListOf("canvas用 色を暗くさせるアイテム")
    inkSac.itemMeta = inkMeta
    inv.addItem(inkSac)

    val sugar = ItemStack(Material.SUGAR, 1)
    val sugarMeta = sugar.itemMeta
    sugarMeta?.lore = mutableListOf("canvas用 色を明るくさせるアイテム")
    sugar.itemMeta = sugarMeta
    inv.addItem(sugar)

    sBox.inventory.contents = inv.contents
    meta.blockState = sBox
    boxItem.itemMeta = meta
    return
  }

  private fun giveDyeInv(): Inventory? {
    val meta = boxItem.itemMeta ?: return null
    val box = (meta as BlockStateMeta).blockState as ShulkerBox
    val inv = Bukkit.createInventory(null, InventoryType.SHULKER_BOX)
    inv.contents = box.inventory.contents.clone()
    return inv
  }

  /** undo処理 */
  private fun undoCommand(sender: Player, num: Int) {
    val vec = Vector(0.0, 0.0, 1.0)
    vec.rotateAroundX(PI / 180 * sender.eyeLocation.pitch)
    vec.rotateAroundY(PI / 180 * -sender.eyeLocation.yaw)

    val entity =
        sender.world
            .rayTraceEntities(sender.eyeLocation, vec, 8.0, 0.025) { it is ItemFrame }
            ?.hitEntity
    if (entity is ItemFrame) {
      val mapMeta = entity.item.itemMeta as MapMeta
      val id =
          mapMeta.persistentDataContainer.get(
              NamespacedKey(ToolBox.pl, "ID"),
              PersistentDataType.INTEGER,
          ) ?: return
      if (!checkID(id)) return
      val data = MapData.undoCash?.get(num, id) ?: return
      val view = mapMeta.mapView ?: return
      val mMap = MapData.loadMapData(id)
      mMap.cash = data
      for (render in view.renderers) {
        view.removeRenderer(render)
      }
      view.addRenderer(mMap.render())
      sender.sendMessage(ToolBox.colorMessage("[PaintTools] &6ID:${id} &aを&6${num}分前&aに戻しました!"))
    }
    return
  }
}
