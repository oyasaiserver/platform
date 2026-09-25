package icu.oyasai.imageonmap

import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.net.URI
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors
import java.util.concurrent.Semaphore
import javax.imageio.ImageIO
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabExecutor
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityPickupItemEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.event.server.MapInitializeEvent
import org.bukkit.event.world.EntitiesLoadEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapRenderer
import org.bukkit.map.MapView
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin

internal enum class TomapAction {
  CREATE,
  LIST,
  ALL,
  INFO,
  GIVE,
  DELETE,
  USAGE,
}

internal fun tomapAction(args: List<String>): TomapAction =
    when {
      args.firstOrNull()?.startsWith("http://") == true ||
          args.firstOrNull()?.startsWith("https://") == true -> TomapAction.CREATE
      args.firstOrNull() == "list" -> TomapAction.LIST
      args.firstOrNull() == "all" -> TomapAction.ALL
      args.firstOrNull() == "info" -> TomapAction.INFO
      args.firstOrNull() == "give" -> TomapAction.GIVE
      args.firstOrNull() == "delete" -> TomapAction.DELETE
      else -> TomapAction.USAGE
    }

class ImageOnMap : JavaPlugin(), Listener, TabExecutor {
  private val dbThread = Executors.newSingleThreadExecutor { r -> Thread(r, "imageonmap-db") }
  private val imageThreads = Executors.newFixedThreadPool(2) { r -> Thread(r, "imageonmap-image") }
  private val permits = Semaphore(2)
  private val active = mutableSetOf<UUID>()
  private val pendingMaps = mutableSetOf<Int>()
  private val gui = mutableMapOf<UUID, Gui>()
  private lateinit var store: MapStore
  private lateinit var marker: NamespacedKey
  private var ready = false

  private data class Gui(
      val inventory: Inventory,
      val page: Int,
      val entries: List<Listing>,
      val owner: UUID? = null,
      val admin: Boolean = false,
      val all: Boolean = false,
      val confirm: Long? = null,
      val deleteStage: Int = 0,
  )

  override fun onEnable() {
    marker = NamespacedKey("imageonmap", "splatter")
    try {
      ImageSource.registerWebp()
      store = MapStore(dataFolder.resolve("image.db"))
      dbThread.submit { store.open() }.get()
      ready = true
    } catch (e: Exception) {
      logger.severe("ImageOnMap disabled: ${e.cause?.message ?: e.message}")
      server.pluginManager.disablePlugin(this)
      return
    }
    server.pluginManager.registerEvents(this, this)
    getCommand("tomap")?.setExecutor(this)
    server.worlds.forEach { world ->
      world.loadedChunks.forEach { chunk ->
        chunk.entities.filterIsInstance<ItemFrame>().forEach { attachItem(it.item) }
      }
    }
    server.onlinePlayers.forEach { inspectInventory(it) }
  }

  override fun onDisable() {
    ready = false
    imageThreads.shutdownNow()
    ImageSource.close()
    if (::store.isInitialized) runCatching { dbThread.submit { store.close() }.get() }
    dbThread.shutdown()
  }

  private fun <T> database(block: () -> T): CompletableFuture<T> =
      CompletableFuture.supplyAsync(block, dbThread)

  private fun main(block: () -> Unit) {
    if (isEnabled) server.scheduler.runTask(this, Runnable(block))
  }

  private fun error(e: Throwable): String = (e.cause ?: e).message?.take(100) ?: "処理に失敗しました"

  private fun message(sender: CommandSender, text: String) = sender.sendMessage(text)

  private class OnceRenderer(private var picture: BufferedImage?) : MapRenderer(false) {
    override fun isExplorerMap(): Boolean = false

    override fun render(view: MapView, canvas: MapCanvas, player: Player) {
      val image = picture ?: return
      canvas.drawImage(0, 0, image)
      picture = null
    }
  }

  private class BlankRenderer : MapRenderer(false) {
    private var drawn = false

    override fun isExplorerMap(): Boolean = false

    override fun render(view: MapView, canvas: MapCanvas, player: Player) {
      if (drawn) return
      val clear = java.awt.Color(0, 0, 0, 0)
      for (x in 0 until 128) for (y in 0 until 128) canvas.setPixelColor(x, y, clear)
      drawn = true
    }
  }

  private fun attach(view: MapView) {
    val id = view.id
    if (
        !ready ||
            view.renderers.any { it is OnceRenderer || it is BlankRenderer } ||
            !pendingMaps.add(id)
    )
        return
    database { store.png(id)?.let { ImageIO.read(ByteArrayInputStream(it)) } }
        .whenComplete { image, failure ->
          main {
            pendingMaps.remove(id)
            if (failure != null) logger.warning("Map $id: ${error(failure)}")
            else if (
                image != null &&
                    image.width == 128 &&
                    image.height == 128 &&
                    view.renderers.none { it is OnceRenderer || it is BlankRenderer }
            ) {
              view.renderers.toList().forEach(view::removeRenderer)
              view.addRenderer(OnceRenderer(image))
            }
          }
        }
  }

  private fun attachItem(item: ItemStack?) {
    val meta = item?.itemMeta as? MapMeta ?: return
    if (meta.hasMapId()) server.getMap(meta.mapId)?.let(::attach)
  }

  private fun blank(ids: List<Int>) {
    ids.forEach { id ->
      val view = server.getMap(id) ?: return@forEach
      view.renderers.toList().forEach(view::removeRenderer)
      view.addRenderer(BlankRenderer())
      view.setLocked(true)
      server.onlinePlayers.forEach { it.sendMap(view) }
    }
  }

  private fun inspectInventory(player: Player) {
    player.inventory.contents.forEach(::attachItem)
  }

  @EventHandler fun mapInit(e: MapInitializeEvent) = attach(e.map)

  @EventHandler
  fun entitiesLoad(e: EntitiesLoadEvent) {
    e.entities.filterIsInstance<ItemFrame>().forEach { attachItem(it.item) }
  }

  @EventHandler fun join(e: PlayerJoinEvent) = inspectInventory(e.player)

  @EventHandler
  fun quit(e: PlayerQuitEvent) {
    gui.remove(e.player.uniqueId)
  }

  @EventHandler
  fun inventoryClose(e: InventoryCloseEvent) {
    val player = e.player as? Player ?: return
    if (gui[player.uniqueId]?.inventory === e.inventory) gui.remove(player.uniqueId)
  }

  @EventHandler
  fun held(e: PlayerItemHeldEvent) {
    main { attachItem(e.player.inventory.getItem(e.newSlot)) }
  }

  @EventHandler
  fun pickup(e: EntityPickupItemEvent) {
    if (e.entity is Player) attachItem(e.item.itemStack)
  }

  @EventHandler
  fun swap(e: PlayerSwapHandItemsEvent) {
    attachItem(e.mainHandItem)
    attachItem(e.offHandItem)
  }

  @EventHandler
  fun inventoryClick(e: InventoryClickEvent) {
    val player = e.whoClicked as? Player ?: return
    val state = gui[player.uniqueId]
    if (state != null && e.view.topInventory === state.inventory) {
      e.isCancelled = true
      if (e.clickedInventory !== state.inventory) return
      if (state.confirm != null) {
        if (state.deleteStage > 0) {
          if (!player.hasPermission("imageonmap.deleteother")) return
          if (state.deleteStage == 1 && e.rawSlot == 22) openDeleteStage2(player, state)
          else if (state.deleteStage == 2 && e.rawSlot == 40) deleteImage(player, state)
          else if (e.rawSlot == 31) returnFromConfirm(player, state)
        } else if (e.rawSlot == 22) {
          val owner = player.uniqueId
          database { store.hide(owner, state.confirm) }
              .whenComplete { _, failure ->
                main {
                  if (gui[player.uniqueId] !== state) return@main
                  if (failure != null) message(player, "非表示にできません: ${error(failure)}")
                  else openList(player, state.page, owner, false, false)
                }
              }
        } else if (e.rawSlot == 31) returnFromConfirm(player, state)
      } else if (e.rawSlot in 0 until state.entries.size) {
        val entry = state.entries[e.rawSlot]
        if (e.isRightClick) {
          if (state.admin) {
            if (player.hasPermission("imageonmap.deleteother"))
                openDeleteConfirm(player, entry.id, state)
          } else openConfirm(player, state, entry.id)
        } else if (
            player.hasPermission(if (state.admin) "imageonmap.getother" else "imageonmap.get")
        )
            givePoster(player, entry.id)
      } else if (e.rawSlot == 45 && state.page > 0)
          openList(player, state.page - 1, state.owner, state.admin, state.all)
      else if (e.rawSlot == 53 && state.entries.size == 45)
          openList(player, state.page + 1, state.owner, state.admin, state.all)
      return
    }
    main { inspectInventory(player) }
  }

  @EventHandler
  fun inventoryDrag(e: InventoryDragEvent) {
    val p = e.whoClicked as? Player ?: return
    gui[p.uniqueId]?.let { if (e.view.topInventory === it.inventory) e.isCancelled = true }
    main { inspectInventory(p) }
  }

  private fun item(id: Int): ItemStack =
      ItemStack(Material.FILLED_MAP).also {
        val meta = it.itemMeta as MapMeta
        meta.mapId = id
        it.itemMeta = meta
        attachItem(it)
      }

  private fun splatter(poster: Poster): ItemStack =
      item(poster.ids[0]).also {
        if (poster.ids.size == 1) return@also
        val meta = it.itemMeta as MapMeta
        meta.persistentDataContainer.set(marker, PersistentDataType.BYTE, 1)
        meta.setEnchantmentGlintOverride(true)
        meta.displayName(Component.text("ポスター ${poster.columns}×${poster.rows}"))
        meta.lore(listOf(Component.text("空の額縁を並べて左下を右クリック"), Component.text("スニークして1枚を叩くと全体を外す")))
        it.itemMeta = meta
      }

  private fun deliver(player: Player, item: ItemStack) {
    player.inventory.addItem(item).values.forEach {
      player.world.dropItemNaturally(player.location, it)
    }
  }

  private fun icon(material: Material, name: String): ItemStack =
      ItemStack(material).also {
        val meta = it.itemMeta
        meta.displayName(Component.text(name))
        it.itemMeta = meta
      }

  private fun givePoster(player: Player, id: Long) {
    database { store.poster(id) }
        .whenComplete { poster, failure ->
          main {
            if (failure != null || poster == null) message(player, "画像の索引を読めません")
            else {
              deliver(player, splatter(poster))
              message(player, "画像を渡しました")
            }
          }
        }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!ready) return true
    when (tomapAction(args.toList())) {
      TomapAction.CREATE -> {
        if (!sender.hasPermission("imageonmap.new")) return denied(sender)
        val player = sender as? Player ?: return playerOnly(sender)
        val resize =
            when {
              args.size == 1 -> null
              args.size == 2 && args[1] == "resize" -> 1 to 1
              args.size == 4 && args[1] == "resize" -> {
                val w = args[2].toIntOrNull()
                val h = args[3].toIntOrNull()
                if (w == null || h == null || w <= 0 || h <= 0) {
                  message(sender, "使えない引数です")
                  return true
                }
                w to h
              }
              else -> {
                message(sender, "使えない引数です")
                return true
              }
            }
        create(player, args[0], resize)
      }
      TomapAction.LIST -> {
        val player = sender as? Player ?: return playerOnly(sender)
        if (args.size == 1) {
          if (!sender.hasPermission("imageonmap.list")) return denied(sender)
          openList(player, 0, player.uniqueId, false, false)
        } else if (args.size == 2) {
          if (!sender.hasPermission("imageonmap.listother")) return denied(sender)
          val target = Bukkit.getOfflinePlayer(args[1])
          if (!target.hasPlayedBefore() && !target.isOnline) message(sender, "プレイヤーが見つかりません")
          else openList(player, 0, target.uniqueId, true, false)
        } else usage(sender)
      }
      TomapAction.ALL -> {
        if (!sender.hasPermission("imageonmap.listother")) return denied(sender)
        val player = sender as? Player ?: return playerOnly(sender)
        if (args.size == 1) openList(player, 0, null, true, true) else usage(sender)
      }
      TomapAction.INFO -> {
        if (!sender.hasPermission("imageonmap.listother")) return denied(sender)
        val player = sender as? Player ?: return playerOnly(sender)
        if (args.size == 1) showInfo(player) else usage(sender)
      }
      TomapAction.GIVE -> {
        if (!sender.hasPermission("imageonmap.give")) return denied(sender)
        val target = args.getOrNull(1)?.let(server::getPlayerExact)
        val id = args.getOrNull(2)?.toLongOrNull()
        if (args.size != 3 || target == null || id == null) usage(sender)
        else givePoster(target, id)
      }
      TomapAction.DELETE -> {
        if (!sender.hasPermission("imageonmap.deleteother")) return denied(sender)
        val player = sender as? Player ?: return playerOnly(sender)
        val id = args.getOrNull(1)?.toLongOrNull()
        if (args.size != 2 || id == null) usage(sender) else openDeleteConfirm(player, id, null)
      }
      TomapAction.USAGE -> usage(sender)
    }
    return true
  }

  private fun denied(sender: CommandSender): Boolean {
    message(sender, "権限がありません")
    return true
  }

  private fun playerOnly(sender: CommandSender): Boolean {
    message(sender, "プレイヤー専用です")
    return true
  }

  private fun usage(sender: CommandSender) {
    message(sender, "使い方:")
    if (sender.hasPermission("imageonmap.new")) message(sender, "/tomap <URL> [resize [幅 高さ]]")
    if (sender.hasPermission("imageonmap.list")) message(sender, "/tomap list")
    if (sender.hasPermission("imageonmap.listother")) {
      message(sender, "/tomap list <プレイヤー> / all / info")
    }
    if (sender.hasPermission("imageonmap.give")) message(sender, "/tomap give <プレイヤー> <画像ID>")
    if (sender.hasPermission("imageonmap.deleteother")) message(sender, "/tomap delete <画像ID>")
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    val options =
        when {
          args.size == 1 ->
              buildList {
                if (sender.hasPermission("imageonmap.list")) add("list")
                if (sender.hasPermission("imageonmap.listother")) {
                  add("all")
                  add("info")
                }
                if (sender.hasPermission("imageonmap.give")) add("give")
                if (sender.hasPermission("imageonmap.deleteother")) add("delete")
              }
          args.size == 2 && args[0] == "list" && sender.hasPermission("imageonmap.listother") ->
              server.onlinePlayers.map { it.name }
          args.size == 2 && args[0] == "give" && sender.hasPermission("imageonmap.give") ->
              server.onlinePlayers.map { it.name }
          args.size == 2 && args[0].startsWith("http") && sender.hasPermission("imageonmap.new") ->
              listOf("resize")
          else -> emptyList()
        }
    return options.filter { it.startsWith(args.last(), ignoreCase = true) }
  }

  private fun create(player: Player, url: String, resize: Pair<Int, Int>?) {
    val bypass = player.hasPermission("imageonmap.bypasssize")
    if (resize != null && !bypass && resize.first.toLong() * resize.second > 100) {
      message(player, "100 枚を超えています")
      return
    }
    if (player.uniqueId in active || !permits.tryAcquire()) {
      message(player, "混雑しています")
      return
    }
    active.add(player.uniqueId)
    val owner = player.uniqueId
    player.sendActionBar(Component.text("画像を読み込み中…"))
    CompletableFuture.supplyAsync(
            {
              ImageSource.tiles(
                  ImageSource.fetch(url),
                  resize,
                  bypass,
              )
            },
            imageThreads,
        )
        .whenComplete { tiles, failure ->
          main {
            if (failure != null) {
              failCreate(player, url, failure)
              return@main
            }
            if (!player.isOnline) {
              failCreate(player, url, IllegalStateException("プレイヤーが退出しました"))
              return@main
            }
            val ids =
                try {
                  List(tiles.pngs.size) { Bukkit.createMap(player.world).id }
                } catch (e: Exception) {
                  failCreate(player, url, e)
                  return@main
                }
            database { store.create(owner, tiles.columns, tiles.rows, ids, tiles.pngs) }
                .whenComplete { id, saveFailure ->
                  main {
                    if (saveFailure != null) failCreate(player, url, saveFailure)
                    else {
                      database { store.poster(id) }
                          .whenComplete { poster, readFailure ->
                            main {
                              active.remove(player.uniqueId)
                              permits.release()
                              if (readFailure != null || poster == null)
                                  message(player, "保存後の索引を読めません")
                              else {
                                deliver(player, splatter(poster))
                                message(player, "画像を作成しました (${tiles.columns}×${tiles.rows})")
                              }
                            }
                          }
                    }
                  }
                }
          }
        }
  }

  private fun failCreate(player: Player, url: String, failure: Throwable) {
    active.remove(player.uniqueId)
    permits.release()
    val host = runCatching { URI(url).host }.getOrNull() ?: "unknown"
    val raw = error(failure)
    val reason =
        if (raw.any { it in 'ぁ'..'ん' || it in '一'..'龯' }) raw.replace(url, "[URL]")
        else "通信または保存に失敗しました"
    logger.warning("Image request player=${player.name} host=$host reason=$reason")
    message(player, "画像を作成できません: $reason")
  }

  private fun show(player: Player, state: Gui) {
    player.openInventory(state.inventory)
    gui[player.uniqueId] = state
  }

  private fun ownerName(id: UUID): String = Bukkit.getOfflinePlayer(id).name ?: id.toString()

  private fun openList(player: Player, page: Int, owner: UUID?, admin: Boolean, all: Boolean) {
    database { store.listings(owner, page * 45, admin) }
        .whenComplete { entries, failure ->
          main {
            if (!player.isOnline) return@main
            if (failure != null) {
              message(player, "一覧を読めません: ${error(failure)}")
              return@main
            }
            val inv =
                server.createInventory(
                    null,
                    54,
                    "${if (all) "全員" else if (admin) "指定プレイヤー" else "自分"}の画像 ${page+1}",
                )
            entries.forEachIndexed { i, entry ->
              val icon = entry.firstMap?.let(::item) ?: icon(Material.PAPER, "地図なし")
              val meta = icon.itemMeta
              meta.displayName(Component.text(entry.name ?: "画像 #${entry.id}"))
              meta.lore(
                  buildList {
                    add(Component.text("${entry.columns}×${entry.rows}"))
                    if (admin) add(Component.text("作成者: ${ownerName(entry.owner)}"))
                    if (entry.hidden) add(Component.text("隠し中"))
                    add(Component.text(if (admin) "左: 受け取る / 右: 削除" else "左: 受け取る / 右: 非表示"))
                  }
              )
              icon.itemMeta = meta
              inv.setItem(i, icon)
            }
            if (page > 0) inv.setItem(45, icon(Material.ARROW, "前のページ"))
            if (entries.size == 45) inv.setItem(53, icon(Material.ARROW, "次のページ"))
            show(player, Gui(inv, page, entries, owner, admin, all))
          }
        }
  }

  private fun openConfirm(player: Player, state: Gui, id: Long) {
    val inv = server.createInventory(null, 54, "画像を一覧から隠す")
    inv.setItem(22, icon(Material.LIME_WOOL, "非表示にする"))
    inv.setItem(31, icon(Material.RED_WOOL, "戻る"))
    show(player, state.copy(inventory = inv, confirm = id))
  }

  private fun returnFromConfirm(player: Player, state: Gui) {
    if (state.entries.isEmpty()) player.closeInventory()
    else openList(player, state.page, state.owner, state.admin, state.all)
  }

  private fun openDeleteConfirm(player: Player, id: Long, back: Gui?) {
    val previous = player.openInventory.topInventory
    database { store.details(id) }
        .whenComplete { details, failure ->
          main {
            if (
                !player.isOnline ||
                    player.openInventory.topInventory !== previous ||
                    (back != null && gui[player.uniqueId] !== back)
            )
                return@main
            if (failure != null) {
              message(player, "画像を読めません: ${error(failure)}")
              return@main
            }
            if (details == null) {
              message(player, "画像が見つかりません")
              return@main
            }
            val inv = server.createInventory(null, 54, "画像 #$id を削除")
            val preview = details.mapIds.firstOrNull()?.let(::item) ?: icon(Material.PAPER, "地図なし")
            val meta = preview.itemMeta
            meta.displayName(Component.text("画像 #$id"))
            meta.lore(
                listOf(
                    Component.text("作成者: ${ownerName(details.owner)}"),
                    Component.text("${details.columns}×${details.rows} / ${details.mapIds.size}枚"),
                )
            )
            preview.itemMeta = meta
            inv.setItem(13, preview)
            inv.setItem(22, icon(Material.LIME_WOOL, "削除する"))
            inv.setItem(31, icon(Material.RED_WOOL, "やめる"))
            show(
                player,
                (back ?: Gui(inv, 0, emptyList(), admin = true)).copy(
                    inventory = inv,
                    confirm = id,
                    deleteStage = 1,
                ),
            )
          }
        }
  }

  private fun openDeleteStage2(player: Player, state: Gui) {
    val inv = server.createInventory(null, 54, "削除の最終確認")
    inv.setItem(40, icon(Material.RED_WOOL, "本当に削除（取り消せません。額縁に飾った絵も消えます）"))
    inv.setItem(31, icon(Material.LIME_WOOL, "やめる"))
    show(player, state.copy(inventory = inv, deleteStage = 2))
  }

  private fun deleteImage(player: Player, state: Gui) {
    val id = state.confirm ?: return
    gui.remove(player.uniqueId)
    player.closeInventory()
    database { store.delete(id) }
        .whenComplete { deleted, failure ->
          main {
            if (failure != null) {
              message(player, "削除できません: ${error(failure)}")
              return@main
            }
            if (deleted == null) {
              message(player, "画像は既にありません")
              return@main
            }
            blank(deleted.mapIds)
            logger.info(
                "Image deleted by=${player.uniqueId} image=$id owner=${deleted.owner} size=${deleted.columns}x${deleted.rows} maps=${deleted.mapIds.size}"
            )
            message(player, "画像 #$id を削除しました")
          }
        }
  }

  private fun showInfo(player: Player) {
    val hand = player.inventory.itemInMainHand.itemMeta as? MapMeta
    val frame = if (hand?.hasMapId() == true) null else player.getTargetEntity(5) as? ItemFrame
    val frameMap = frame?.item?.itemMeta as? MapMeta
    val id =
        when {
          hand?.hasMapId() == true -> hand.mapId
          frameMap?.hasMapId() == true -> frameMap.mapId
          else -> {
            message(player, "ImageOnMap の地図ではありません")
            return
          }
        }
    database { store.detailsByMap(id) to (store.png(id) != null) }
        .whenComplete { result, failure ->
          main {
            if (failure != null) {
              message(player, "索引を読めません: ${error(failure)}")
              return@main
            }
            val found = result.first
            if (found == null) {
              message(player, if (result.second) "索引なし（map ID $id）" else "ImageOnMap の地図ではありません")
              return@main
            }
            val (details, index) = found
            val date = details.createdAt?.let { DATE.format(Instant.ofEpochMilli(it)) } ?: "不明（移行前）"
            message(
                player,
                "画像ID: ${details.id} / 作成者: ${ownerName(details.owner)} / ${details.columns}×${details.rows} / 作成日時: $date / ${if (details.hidden) "隠し中" else "表示中"} / idx: $index",
            )
          }
        }
  }

  private companion object {
    val DATE: DateTimeFormatter =
        DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").withZone(ZoneId.of("Asia/Tokyo"))
  }

  private fun marked(item: ItemStack): Int? {
    val meta = item.itemMeta as? MapMeta ?: return null
    if (
        !meta.hasMapId() ||
            meta.persistentDataContainer.get(marker, PersistentDataType.BYTE) != 1.toByte()
    )
        return null
    return meta.mapId
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun place(e: PlayerInteractEntityEvent) {
    if (e.hand != EquipmentSlot.HAND) return
    val frame = e.rightClicked as? ItemFrame ?: return
    val player = e.player
    val id = marked(player.inventory.itemInMainHand) ?: return
    val up = player.facing
    e.isCancelled = true
    if (!player.hasPermission("imageonmap.placesplattermap")) {
      message(player, "権限がありません")
      return
    }
    if (frame.item.type != Material.AIR) return
    database { store.mapIndex(id) }
        .whenComplete { found, failure ->
          main {
            val poster = found?.first
            val held = player.inventory.itemInMainHand
            if (!player.isOnline || marked(held) != id || frame.item.type != Material.AIR)
                return@main
            if (failure != null || poster == null || found.second != 0 || poster.ids.size == 1) {
              message(player, "ポスターの索引を読めません")
              return@main
            }
            if (!PosterFrames.place(frame, up, poster))
                message(player, "額縁が ${poster.columns}×${poster.rows} 必要です")
            else {
              if (player.gameMode != org.bukkit.GameMode.CREATIVE) held.amount -= 1
              poster.ids.forEach { server.getMap(it)?.let(::attach) }
            }
          }
        }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun remove(e: EntityDamageByEntityEvent) {
    val player = e.damager as? Player ?: return
    val frame = e.entity as? ItemFrame ?: return
    if (frame.isFixed) return
    if (!player.isSneaking || !player.hasPermission("imageonmap.removesplattermap")) return
    val meta = frame.item.itemMeta as? MapMeta ?: return
    if (!meta.hasMapId()) return
    val id = meta.mapId
    e.isCancelled = true
    val original = frame.item.clone()
    database { store.mapIndex(id) }
        .whenComplete { found, failure ->
          main {
            val current = frame.item.itemMeta as? MapMeta ?: return@main
            if (!current.hasMapId() || current.mapId != id) return@main
            if (failure != null) {
              message(player, "画像の索引を読めません")
              return@main
            }
            if (found == null || found.first.ids.size == 1) {
              frame.setItem(ItemStack(Material.AIR), false)
              frame.world.dropItemNaturally(frame.location, original)
            } else if (PosterFrames.remove(frame, found.first, found.second) > 0)
                deliver(player, splatter(found.first))
          }
        }
  }
}
