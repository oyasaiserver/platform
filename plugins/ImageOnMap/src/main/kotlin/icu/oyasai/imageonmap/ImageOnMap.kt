package icu.oyasai.imageonmap

import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.net.URI
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
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.event.server.MapInitializeEvent
import org.bukkit.event.world.ChunkLoadEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapRenderer
import org.bukkit.map.MapView
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin

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
      val confirm: Long? = null,
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
    listOf("tomap", "maptool", "maps", "givemap").forEach { getCommand(it)?.setExecutor(this) }
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

  private fun attach(view: MapView) {
    val id = view.id
    if (!ready || view.renderers.any { it is OnceRenderer } || !pendingMaps.add(id)) return
    database { store.png(id)?.let { ImageIO.read(ByteArrayInputStream(it)) } }
        .whenComplete { image, failure ->
          main {
            pendingMaps.remove(id)
            if (failure != null) logger.warning("Map $id: ${error(failure)}")
            else if (
                image != null &&
                    image.width == 128 &&
                    image.height == 128 &&
                    view.renderers.none { it is OnceRenderer }
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

  private fun inspectInventory(player: Player) {
    player.inventory.contents.forEach(::attachItem)
  }

  @EventHandler fun mapInit(e: MapInitializeEvent) = attach(e.map)

  @EventHandler
  fun chunkLoad(e: ChunkLoadEvent) {
    e.chunk.entities.filterIsInstance<ItemFrame>().forEach { attachItem(it.item) }
  }

  @EventHandler fun join(e: PlayerJoinEvent) = inspectInventory(e.player)

  @EventHandler
  fun quit(e: PlayerQuitEvent) {
    gui.remove(e.player.uniqueId)
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
        if (e.rawSlot == 22) {
          val owner = player.uniqueId
          database { store.hide(owner, state.confirm) }
              .whenComplete { _, failure ->
                main {
                  if (failure != null) message(player, "非表示にできません: ${error(failure)}")
                  else openList(player, state.page)
                }
              }
        } else if (e.rawSlot == 31) openList(player, state.page)
      } else if (e.rawSlot in 0 until state.entries.size) {
        val entry = state.entries[e.rawSlot]
        if (e.isRightClick) openConfirm(player, state, entry.id)
        else if (player.hasPermission("imageonmap.get")) givePoster(player, entry.id)
      } else if (e.rawSlot == 45 && state.page > 0) openList(player, state.page - 1)
      else if (e.rawSlot == 53 && state.entries.size == 45) openList(player, state.page + 1)
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
    when (command.name.lowercase()) {
      "tomap",
      "maptool" -> {
        val player =
            sender as? Player
                ?: run {
                  message(sender, "プレイヤー専用です")
                  return true
                }
        if (!player.hasPermission("imageonmap.new")) {
          message(sender, "権限がありません")
          return true
        }
        if (command.name.equals("maptool", true) && args.firstOrNull() != "new") {
          message(sender, "使えない引数です")
          return true
        }
        val parts = if (command.name.equals("maptool", true)) args.drop(1) else args.toList()
        if (parts.isEmpty()) {
          message(sender, "使い方: /tomap <URL> [resize [幅 高さ]]")
          return true
        }
        val resize =
            when {
              parts.size == 1 -> null
              parts.size == 2 && parts[1] == "resize" -> 1 to 1
              parts.size == 4 && parts[1] == "resize" -> {
                val w = parts[2].toIntOrNull()
                val h = parts[3].toIntOrNull()
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
        create(player, parts[0], resize)
      }
      "maps" -> {
        val player = sender as? Player ?: return true
        if (player.hasPermission("imageonmap.list")) openList(player, 0)
        else message(player, "権限がありません")
      }
      "givemap" -> {
        if (!sender.hasPermission("imageonmap.give")) {
          message(sender, "権限がありません")
          return true
        }
        val target = args.getOrNull(0)?.let(server::getPlayerExact)
        val id = args.getOrNull(1)?.toLongOrNull()
        if (target == null || id == null) message(sender, "使い方: /givemap <プレイヤー> <画像ID>")
        else givePoster(target, id)
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> = emptyList()

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

  private fun openList(player: Player, page: Int) {
    val owner = player.uniqueId
    database { store.list(owner, page * 45) }
        .whenComplete { entries, failure ->
          main {
            if (failure != null) {
              message(player, "一覧を読めません: ${error(failure)}")
              return@main
            }
            val inv = server.createInventory(null, 54, "自分の画像 ${page+1}")
            entries.forEachIndexed { i, entry ->
              val icon = item(entry.firstMap)
              val meta = icon.itemMeta as MapMeta
              meta.displayName(Component.text(entry.name ?: "画像 #${entry.id}"))
              meta.lore(
                  listOf(
                      Component.text("${entry.columns}×${entry.rows}"),
                      Component.text("左: 受け取る / 右: 非表示"),
                  )
              )
              icon.itemMeta = meta
              inv.setItem(i, icon)
            }
            if (page > 0) inv.setItem(45, icon(Material.ARROW, "前のページ"))
            if (entries.size == 45) inv.setItem(53, icon(Material.ARROW, "次のページ"))
            gui[player.uniqueId] = Gui(inv, page, entries)
            player.openInventory(inv)
          }
        }
  }

  private fun openConfirm(player: Player, state: Gui, id: Long) {
    val inv = server.createInventory(null, 54, "画像を一覧から隠す")
    inv.setItem(22, icon(Material.LIME_WOOL, "非表示にする"))
    inv.setItem(31, icon(Material.RED_WOOL, "戻る"))
    gui[player.uniqueId] = Gui(inv, state.page, state.entries, id)
    player.openInventory(inv)
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
