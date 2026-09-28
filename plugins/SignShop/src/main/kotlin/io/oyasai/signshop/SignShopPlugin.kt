package io.oyasai.signshop

import com.griefcraft.lwc.LWCPlugin
import java.util.UUID
import java.util.logging.Level
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.Chest
import org.bukkit.block.Container
import org.bukkit.block.Sign
import org.bukkit.block.data.Powerable
import org.bukkit.block.sign.Side
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockBurnEvent
import org.bukkit.event.block.BlockExplodeEvent
import org.bukkit.event.block.BlockPistonExtendEvent
import org.bukkit.event.block.BlockPistonRetractEvent
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.inventory.InventoryOpenEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.world.ChunkLoadEvent
import org.bukkit.event.world.WorldLoadEvent
import org.bukkit.inventory.DoubleChestInventory
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.Inventory
import org.bukkit.plugin.java.JavaPlugin

class SignShopPlugin : JavaPlugin(), Listener {
  private lateinit var store: ShopStore
  private val selected = mutableMapOf<UUID, LinkedHashSet<Point>>()
  private val boxes = mutableMapOf<Point, MutableSet<Shop>>()
  private val signs = mutableMapOf<Point, Shop>()
  private val signSupports = mutableSetOf<Point>()
  private val active = mutableSetOf<Shop>()
  private val activeBoxes = mutableSetOf<Point>()
  private var dbHealthy = true

  override fun onEnable() {
    if (Bukkit.getPluginManager().plugins.count { it.name.equals("SignShop", true) } != 1) {
      logger.severe("別の SignShop が読み込まれています")
      Bukkit.getPluginManager().disablePlugin(this)
      return
    }
    try {
      store =
          ShopStore(
              dataFolder.toPath().resolve("shops.db"),
              dataFolder.toPath().resolve("sellers.yml"),
          )
      reindex()
      store.shops.values.forEach { shop ->
        runCatching { refreshSign(shop) }.onFailure { logger.warning("店 ${shop.key} の表示更新に失敗しました") }
      }
      server.pluginManager.registerEvents(this, this)
      getCommand("signshop")?.setExecutor { sender, _, _, args ->
        if (args.size == 1 && args[0].equals("list", true))
            sender.sendMessage("店の種類: Buy、Sell、iBuy、iSell、Device")
        else sender.sendMessage("使い方: /signshop list")
        true
      }
      logger.info("${store.shops.size} 件の店を読み込みました")
      store.shops.values
          .filter { it.haltReason != null }
          .forEach { notifyOps("店 ${it.key} は停止中: ${it.haltReason}") }
    } catch (e: Exception) {
      logger.log(Level.SEVERE, "SignShop の DB または sellers.yml を読み込めません", e)
      Bukkit.getPluginManager().disablePlugin(this)
    }
  }

  override fun onDisable() {
    if (::store.isInitialized) store.close()
  }

  private fun reindex() {
    boxes.clear()
    signs.clear()
    signSupports.clear()
    store.shops.values.forEach { shop ->
      shop.sign?.let { signPoint ->
        if (signs.containsKey(signPoint)) {
          signs[signPoint]?.haltReason = "同じ看板が複数領域にあります"
          shop.haltReason = "同じ看板が複数領域にあります"
        } else signs[signPoint] = shop
        rememberSupport(signPoint)
      }
      shop.containers.forEach { boxes.getOrPut(it) { mutableSetOf() }.add(shop) }
    }
  }

  @EventHandler
  fun worldLoad(event: WorldLoadEvent) {
    reindex()
  }

  @EventHandler
  fun chunkLoad(event: ChunkLoadEvent) {
    signs.keys
        .filter {
          it.world == event.world.name && it.x shr 4 == event.chunk.x && it.z shr 4 == event.chunk.z
        }
        .forEach {
          rememberSupport(it)
          signs[it]?.let(::refreshSign)
        }
  }

  private fun rememberSupport(signPoint: Point) {
    val signBlock = block(signPoint)?.takeIf { it.state is Sign } ?: return
    val support =
        if (signBlock.type.name.contains("WALL")) {
          (signBlock.blockData as? org.bukkit.block.data.Directional)
              ?.facing
              ?.oppositeFace
              ?.let(signBlock::getRelative)
        } else signBlock.getRelative(org.bukkit.block.BlockFace.DOWN)
    support?.let { signSupports.add(point(it)) }
  }

  private fun point(block: Block) = Point(block.world.name, block.x, block.y, block.z)

  private fun safeContainer(block: Block): Boolean =
      block.type in setOf(Material.CHEST, Material.TRAPPED_CHEST, Material.BARREL) ||
          block.type.name.endsWith("SHULKER_BOX")

  private fun block(point: Point): Block? {
    val world = Bukkit.getWorld(point.world) ?: return null
    if (!world.isChunkLoaded(point.x shr 4, point.z shr 4)) return null
    return world.getBlockAt(point.x, point.y, point.z)
  }

  private fun refreshSign(shop: Shop) {
    val sign = shop.sign?.let(::block)?.state as? Sign ?: return
    val kind = shopKind(sign) ?: return
    val items = if (kind == "Device") emptyList() else shop.items ?: emptyList()
    val available =
        shop.haltReason == null &&
            when (kind) {
              "Buy" ->
                  items.isNotEmpty() &&
                      shop.containers.any { p ->
                        val chest = block(p)?.state as? Container
                        chest != null &&
                            StockPlan.plan(chest.inventory, null, items, false, false) != null
                      }
              "Sell" ->
                  items.isNotEmpty() &&
                      shop.containers.any { p ->
                        val chest = block(p)?.state as? Container
                        chest != null &&
                            StockPlan.plan(null, chest.inventory, items, false, false) != null
                      }
              "iBuy",
              "iSell" -> items.isNotEmpty()
              else ->
                  shop.devices.isNotEmpty() &&
                      shop.devices.all { p ->
                        (block(p)?.blockData as? Powerable)?.isPowered == false
                      }
            }
    val front = sign.getSide(Side.FRONT)
    val back = sign.getSide(Side.BACK)
    val old = front.getLine(0)
    val new = "§${if (available) '1' else '4'}[$kind]"
    if (old == new) return
    front.setLine(0, new)
    if (back.getLine(0) == old) back.setLine(0, new)
    sign.update(false, false)
  }

  private fun admin(player: Player) =
      player.isOp ||
          player.hasPermission("Signshop.Destroy.Others") ||
          player.hasPermission("SignShop.SuperAdmin")

  private fun allowed(player: Player, point: Point) =
      admin(player) || boxes[point].orEmpty().all { it.owner == player.uniqueId }

  private fun lwc(player: Player, block: Block): Boolean {
    val plugin = Bukkit.getPluginManager().getPlugin("LWC") as? LWCPlugin ?: return false
    val lwc = plugin.getLWC()
    return lwc.findProtection(block) == null || lwc.canAccessProtection(player, block)
  }

  private fun shopKind(sign: Sign): String? = kind(sign.getSide(Side.FRONT).getLine(0))

  private fun price(sign: Sign): Long? = priceYen(sign.getSide(Side.FRONT).getLine(3))

  private fun canCreate(player: Player, kind: String) =
      player.isOp ||
          ((player.hasPermission("Signshop.Signs.$kind") ||
              player.hasPermission("Signshop.Signs.*")) &&
              (kind !in listOf("iBuy", "iSell") ||
                  player.hasPermission("SignShop.Admin.$kind") ||
                  player.hasPermission("SignShop.Admin.*")))

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun interact(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    val target = event.clickedBlock ?: return
    val player = event.player
    val location = point(target)
    if (
        event.action == Action.RIGHT_CLICK_BLOCK &&
            boxes.containsKey(location) &&
            !allowed(player, location)
    ) {
      event.isCancelled = true
      player.sendMessage("この店のチェストは店主だけが開けます")
      return
    }
    if (
        event.action == Action.LEFT_CLICK_BLOCK &&
            player.inventory.itemInMainHand.type == Material.REDSTONE
    ) {
      if (target.state is Container || target.type == Material.LEVER) {
        selected.getOrPut(player.uniqueId) { linkedSetOf() }.add(location)
        event.isCancelled = true
        player.sendMessage("対象を選びました。看板を左クリックしてください")
        return
      }
    }
    val sign = target.state as? Sign ?: return
    val type = shopKind(sign) ?: return
    val shop = signs[location]
    if (event.action == Action.LEFT_CLICK_BLOCK) {
      when (player.inventory.itemInMainHand.type) {
        Material.REDSTONE -> {
          event.isCancelled = true
          register(player, target, sign, type, shop, false)
        }
        Material.INK_SAC -> {
          event.isCancelled = true
          register(player, target, sign, type, shop, true)
        }
        Material.GOLDEN_AXE -> player.sendMessage("看板を壊すと店を削除します")
        Material.WRITABLE_BOOK -> {
          event.isCancelled = true
          if (
              shop != null &&
                  (admin(player) ||
                      shop.owner == player.uniqueId &&
                          player.hasPermission("Signshop.Inspect.Own") ||
                      player.hasPermission("Signshop.Inspect.Others"))
          ) {
            player.sendMessage("$type ${shop.key}: ${price(sign)?.let { "${it}円" } ?: "価格不明"}")
          } else player.sendMessage("閲覧権限がありません")
        }
        else -> {
          event.isCancelled = true
          preview(player, shop, sign, type)
        }
      }
    } else if (event.action == Action.RIGHT_CLICK_BLOCK && shop != null) {
      event.isCancelled = true
      trade(player, shop, sign, type)
    }
  }

  private fun preview(player: Player, shop: Shop?, sign: Sign, type: String) {
    val items = if (type == "Device") emptyList() else shop?.items
    val summary =
        if (type == "Device") "レバー"
        else items?.joinToString(", ") { "${it.type} x${it.amount}" } ?: "見本不明"
    val price = price(sign)?.let { "${it}円" } ?: "価格不明"
    val reason =
        when {
          shop == null -> "未登録"
          shop.haltReason != null -> "停止中: ${shop.haltReason}"
          items == null -> "見本を読めません"
          type == "Device" ->
              if (shop.devices.all { (block(it)?.blockData as? Powerable)?.isPowered == false })
                  "取引可能"
              else "レバーを使えません"
          else -> {
            val chests = shop.containers.mapNotNull { block(it)?.state as? Container }
            val possible =
                when (type) {
                  "Buy" ->
                      chests.any {
                        StockPlan.plan(it.inventory, player.inventory, items, false, true) != null
                      }
                  "Sell" ->
                      chests.any {
                        StockPlan.plan(player.inventory, it.inventory, items, true, false) != null
                      }
                  "iBuy" -> StockPlan.plan(null, player.inventory, items, false, true) != null
                  else -> StockPlan.plan(player.inventory, null, items, true, false) != null
                }
            if (possible) "取引可能" else "品物または空き容量が不足"
          }
        }
    player.sendMessage("$type / 商品: $summary / 価格: $price / $reason")
  }

  private fun register(
      player: Player,
      signBlock: Block,
      sign: Sign,
      kind: String,
      old: Shop?,
      update: Boolean,
  ) {
    if (update && old == null) {
      player.sendMessage("登録済みの店ではありません")
      return
    }
    if (old != null && !admin(player) && old.owner != player.uniqueId) {
      player.sendMessage("店主ではありません")
      return
    }
    if (old == null && !canCreate(player, kind)) {
      player.sendMessage("作成権限がありません")
      return
    }
    if (price(sign) == null) {
      player.sendMessage("値段を読めません")
      return
    }
    val links =
        selected[player.uniqueId]?.toList().orEmpty().ifEmpty {
          if (update) old?.containers.orEmpty() + old?.devices.orEmpty() else emptyList()
        }
    if (links.isEmpty() || links.size > 100 || links.any { it.world != signBlock.world.name }) {
      player.sendMessage("対象は同じ世界から100個以下で選んでください")
      return
    }
    val blocks = links.mapNotNull { block(it) }
    if (blocks.size != links.size || blocks.any { !lwc(player, it) }) {
      player.sendMessage("LWC の許可を確認できません")
      return
    }
    val containers = blocks.filter { it.state is Container }
    val devices = blocks.filter { it.type == Material.LEVER }
    if (
        kind == "Device" && devices.isEmpty() ||
            kind != "Device" && containers.isEmpty() ||
            blocks.size != containers.size + devices.size
    ) {
      player.sendMessage("箱またはレバーの選択が正しくありません")
      return
    }
    if (containers.any { !safeContainer(it) }) {
      player.sendMessage("自動で中身が変わる容器は店に使えません")
      return
    }
    val sample =
        if (kind == "Device") emptyList()
        else
            (containers.first().state as Container).inventory.contents.filterNotNull().filter {
              it.type != Material.AIR
            }
    if (kind != "Device" && sample.isEmpty()) {
      player.sendMessage("見本の品がありません")
      return
    }
    try {
      val record = old?.record?.toMutableMap() ?: mutableMapOf()
      record["shopworld"] = signBlock.world.name
      record["owner"] = old?.record?.get("owner") ?: player.uniqueId.toString()
      record["sign"] = point(signBlock).toString()
      record["containables"] = containers.map { point(it).toString() }
      record["activatables"] = devices.map { point(it).toString() }
      record["items"] = sample.map(::encodeItem)
      val next =
          Shop(
              old?.section ?: "sellers",
              old?.key ?: point(signBlock).toString().replace(".", ""),
              record,
              null,
          )
      if (old == null && store.shops.containsKey(next.section to next.key)) {
        player.sendMessage("同じキーの店が既にあります")
        return
      }
      store.save(next)
      reindex()
      refreshSign(next)
      selected.remove(player.uniqueId)
      player.sendMessage(if (old == null) "店を作成しました" else "店を更新しました")
    } catch (e: Exception) {
      dbHealthy = false
      old?.let { halt(it, "店の保存に失敗しました") }
      logger.log(Level.SEVERE, "店の保存に失敗しました", e)
      player.sendMessage("保存に失敗しました。店を点検してください")
    }
  }

  private fun remove(player: Player, shop: Shop): Boolean {
    if (!admin(player) && shop.owner != player.uniqueId) {
      player.sendMessage("削除権限がありません")
      return false
    }
    if (
        player.gameMode == org.bukkit.GameMode.CREATIVE &&
            player.inventory.itemInMainHand.type != Material.GOLDEN_AXE
    )
        return false
    return try {
      store.delete(shop)
      reindex()
      player.sendMessage("店を削除しました")
      true
    } catch (e: Exception) {
      dbHealthy = false
      halt(shop, "削除の保存に失敗しました")
      player.sendMessage("削除できませんでした")
      false
    }
  }

  private fun trade(player: Player, shop: Shop, sign: Sign, type: String) {
    val owner = shop.owner
    if (owner == null) {
      player.sendMessage("店主データを読めません")
      return
    }
    val yen = price(sign)
    val points = shop.containers
    if (
        !dbHealthy ||
            shop.haltReason != null ||
            shop.section != "sellers" ||
            shopKind(sign) != type ||
            shop.sign != point(sign.block) ||
            player.hasPermission("SignShop.DenyUse.$type") ||
            active.contains(shop) ||
            points.any { activeBoxes.contains(it) }
    ) {
      player.sendMessage("この店は現在利用できません")
      return
    }
    fun reject(reason: String) {
      runCatching {
            val id = store.begin(shop, type, player.uniqueId.toString(), owner.toString(), yen ?: 0)
            store.finish(shop, id, "failed", reason)
          }
          .onFailure { halt(shop, "失敗記録を書けません") }
      player.sendMessage(reason)
    }
    if (yen == null) {
      halt(shop, "看板の値段を読めません: ${sign.getSide(Side.FRONT).getLine(3)}")
      reject("値段を読めません。運営に連絡してください")
      return
    }
    val economy = Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider
    if (yen > 0 && economy == null) {
      reject("経済サービスがありません")
      return
    }
    if (Bukkit.getPluginManager().getPlugin("LWC") !is LWCPlugin) {
      reject("LWC を確認できません")
      return
    }
    val items = if (type == "Device") emptyList() else shop.items
    if (items == null || type != "Device" && items.isEmpty()) {
      reject("品物の見本を読めません")
      return
    }
    val inventory = player.inventory
    if (type != "Device" && points.any { p -> block(p)?.let { !safeContainer(it) } == true }) {
      halt(shop, "内部処理で中身が変わる容器です")
      reject("この容器では取引できません")
      return
    }
    val chestInventories =
        points.mapNotNull { block(it)?.state as? Container }.map { it.inventory }.distinct()
    val stock: () -> StockResult
    if (type == "Device") {
      val levers = shop.devices.mapNotNull { block(it) }
      if (
          levers.size != shop.devices.size ||
              levers.isEmpty() ||
              levers.any {
                it.type != Material.LEVER || (it.blockData as? Powerable)?.isPowered != false
              }
      ) {
        reject("レバーを使用できません")
        return
      }
      stock = {
        val powered = mutableListOf<Block>()
        try {
          levers.forEach { lever ->
            val data = lever.blockData as Powerable
            data.isPowered = true
            lever.blockData = data
            powered.add(lever)
            server.scheduler.runTaskLater(
                this,
                Runnable {
                  if (lever.type == Material.LEVER) {
                    val later = lever.blockData as? Powerable
                    if (later?.isPowered == true) {
                      later.isPowered = false
                      lever.blockData = later
                      refreshSign(shop)
                    }
                  }
                },
                200L,
            )
          }
          StockResult.OK
        } catch (_: Exception) {
          var restored = true
          powered.asReversed().forEach { lever ->
            try {
              if (lever.type != Material.LEVER) restored = false
              else {
                val data = lever.blockData as Powerable
                data.isPowered = false
                lever.blockData = data
              }
            } catch (_: Exception) {
              restored = false
            }
          }
          if (restored) StockResult.RESTORED_HALT else StockResult.UNKNOWN
        }
      }
    } else {
      val plans =
          when (type) {
            "Buy" ->
                chestInventories.mapNotNull { StockPlan.plan(it, inventory, items, false, true) }
            "Sell" ->
                chestInventories.mapNotNull { StockPlan.plan(inventory, it, items, true, false) }
            "iBuy" -> listOfNotNull(StockPlan.plan(null, inventory, items, false, true))
            else -> listOfNotNull(StockPlan.plan(inventory, null, items, true, false))
          }
      val plan = plans.firstOrNull()
      if (plan == null) {
        reject("在庫または空き容量が足りません")
        return
      }
      stock = plan::apply
    }
    val payer = if (type == "Sell") owner else player.uniqueId
    if (
        yen > 0 &&
            type != "iSell" &&
            economy?.has(Bukkit.getOfflinePlayer(payer), yen.toDouble()) != true
    ) {
      reject("残高が足りません")
      return
    }
    active.add(shop)
    activeBoxes.addAll(points)
    try {
      val result =
          Trade(
                  object : TradeJournal {
                    override fun begin() =
                        store.begin(shop, type, player.uniqueId.toString(), owner.toString(), yen)

                    override fun finish(id: Long, status: String, detail: String, halt: String?) {
                      try {
                        store.finish(shop, id, status, detail, halt)
                      } catch (e: Exception) {
                        dbHealthy = false
                        throw e
                      }
                    }

                    override fun halt(id: Long, reason: String) {
                      this@SignShopPlugin.halt(shop, "取引 $id: $reason")
                    }
                  },
                  object : TradeFunds {
                    override fun withdraw(account: String, yen: Long) =
                        money(economy!!, account, yen, false)

                    override fun deposit(account: String, yen: Long) =
                        money(economy!!, account, yen, true)
                  },
                  stock,
              )
              .execute(type, player.uniqueId.toString(), owner.toString(), yen)
      player.sendMessage(
          when (result) {
            TradeResult.SUCCESS -> "取引が完了しました"
            TradeResult.FAILED -> "取引できませんでした。取り消し済みです"
            TradeResult.HALTED -> "取引結果の確認が必要です。運営に連絡してください"
          }
      )
      refreshSign(shop)
    } catch (e: Exception) {
      dbHealthy = false
      halt(shop, "取引記録の保存に失敗しました")
      player.sendMessage("取引を開始できませんでした")
    } finally {
      active.remove(shop)
      activeBoxes.removeAll(points.toSet())
    }
  }

  private fun money(economy: Economy, account: String, yen: Long, deposit: Boolean): MoneyResult =
      try {
        val target = Bukkit.getOfflinePlayer(UUID.fromString(account))
        val response =
            if (deposit) economy.depositPlayer(target, yen.toDouble())
            else economy.withdrawPlayer(target, yen.toDouble())
        when {
          response.transactionSuccess() && response.amount == yen.toDouble() -> MoneyResult.OK
          response.type == net.milkbowl.vault.economy.EconomyResponse.ResponseType.FAILURE &&
              response.amount == 0.0 -> MoneyResult.FAILED
          else -> MoneyResult.UNKNOWN
        }
      } catch (_: Exception) {
        MoneyResult.UNKNOWN
      }

  private fun halt(shop: Shop, reason: String): Boolean {
    shop.haltReason = reason
    val saved = runCatching { store.save(shop) }.isSuccess
    if (!saved) dbHealthy = false
    runCatching { refreshSign(shop) }
    notifyOps("店 ${shop.key} を停止: $reason")
    return saved
  }

  private fun notifyOps(message: String) {
    logger.severe(message)
    server.onlinePlayers.filter { it.isOp }.forEach { it.sendMessage("[SignShop] $message") }
  }

  private fun protected(inventory: Inventory): Set<Point> {
    val holder = inventory.holder
    if (inventory is DoubleChestInventory) {
      return listOfNotNull(
              (inventory.leftSide.holder as? Chest)?.block,
              (inventory.rightSide.holder as? Chest)?.block,
          )
          .map(::point)
          .toSet()
    }
    return if (holder is Container) setOf(point(holder.block)) else emptySet()
  }

  private fun linkedShops(block: Block): Set<Shop> {
    val points = (block.state as? Chest)?.inventory?.let(::protected).orEmpty() + point(block)
    return points.flatMap { boxes[it].orEmpty() }.toSet()
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun open(event: InventoryOpenEvent) {
    val player = event.player as? Player ?: return
    if (protected(event.inventory).any { boxes.containsKey(it) && !allowed(player, it) })
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun click(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (protected(event.view.topInventory).any { boxes.containsKey(it) && !allowed(player, it) })
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun drag(event: InventoryDragEvent) {
    val player = event.whoClicked as? Player ?: return
    if (protected(event.view.topInventory).any { boxes.containsKey(it) && !allowed(player, it) })
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun breakBlock(event: BlockBreakEvent) {
    val point = point(event.block)
    val linked = linkedShops(event.block)
    if (point in signSupports) {
      event.isCancelled = true
      return
    }
    val shop = signs[point]
    if (
        shop != null &&
            (!admin(event.player) && shop.owner != event.player.uniqueId ||
                event.player.gameMode == org.bukkit.GameMode.CREATIVE &&
                    event.player.inventory.itemInMainHand.type != Material.GOLDEN_AXE)
    ) {
      event.isCancelled = true
      return
    }
    if (
        linked.isNotEmpty() &&
            (!admin(event.player) && linked.any { it.owner != event.player.uniqueId } ||
                event.player.gameMode == org.bukkit.GameMode.CREATIVE &&
                    event.player.inventory.itemInMainHand.type != Material.GOLDEN_AXE)
    ) {
      event.isCancelled = true
      return
    }
    if (shop != null && !remove(event.player, shop)) {
      event.isCancelled = true
      return
    }
    if (linked.isNotEmpty())
        linked.forEach { shop -> if (!halt(shop, "リンク箱が破壊されました")) event.isCancelled = true }
  }

  private fun protectedBlock(block: Block) =
      point(block).let {
        it in signSupports || signs.containsKey(it) || linkedShops(block).isNotEmpty()
      }

  @EventHandler
  fun burn(event: BlockBurnEvent) {
    if (protectedBlock(event.block)) event.isCancelled = true
  }

  @EventHandler
  fun explode(event: BlockExplodeEvent) {
    event.blockList().removeIf(::protectedBlock)
  }

  @EventHandler
  fun explodeEntity(event: EntityExplodeEvent) {
    event.blockList().removeIf(::protectedBlock)
  }

  @EventHandler
  fun piston(event: BlockPistonExtendEvent) {
    if (event.blocks.any(::protectedBlock)) event.isCancelled = true
  }

  @EventHandler
  fun piston(event: BlockPistonRetractEvent) {
    if (event.blocks.any(::protectedBlock)) event.isCancelled = true
  }
}
