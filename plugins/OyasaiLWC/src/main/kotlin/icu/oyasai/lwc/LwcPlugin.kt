package icu.oyasai.lwc

import com.griefcraft.lwc.LWC
import com.griefcraft.lwc.LWCPlugin
import java.util.UUID
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Block
import org.bukkit.block.BlockState
import org.bukkit.block.DoubleChest
import org.bukkit.block.data.type.Chest
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockBurnEvent
import org.bukkit.event.block.BlockExplodeEvent
import org.bukkit.event.block.BlockPistonExtendEvent
import org.bukkit.event.block.BlockPistonRetractEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.inventory.InventoryMoveItemEvent
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTakeLecternBookEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder

class LwcPlugin : LWCPlugin(), Listener, CommandExecutor {
  private var migrationFailure: Exception? = null
  private lateinit var store: ProtectionStore
  private val compatibility = LWC(this)

  override fun getLWC(): LWC = compatibility

  private data class Pending(val action: String, val args: List<String>, val expires: Long)

  private val pending = mutableMapOf<UUID, Pending>()
  private val auto = mutableMapOf<UUID, Long>()
  private val retired =
      setOf(
          "lwc",
          "cadmin",
          "cpublic",
          "cpassword",
          "cdonation",
          "csupply",
          "cunlock",
          "cremoveall",
          "climits",
          "credstone",
          "cmagnet",
          "cdroptransfer",
          "cpersist",
          "cnolock",
          "cnospam",
          "cexempt",
          "cautoclose",
          "callowexplosions",
          "ctnt",
          "cdefault",
      )

  override fun onLoad() {
    try {
      migrateLegacyData(dataFolder, logger::info)
    } catch (error: Exception) {
      migrationFailure = error
      logger.severe("LWC データのコピーに失敗したため起動を中止します: ${error.message}")
    }
  }

  override fun onEnable() {
    if (migrationFailure != null) {
      server.pluginManager.disablePlugin(this)
      return
    }
    try {
      store = ProtectionStore(this)
    } catch (error: Exception) {
      logger.severe("LWC を有効化できません: ${error.message}")
      server.pluginManager.disablePlugin(this)
      return
    }
    listOf("lock", "cdisplay", "unlock", "cinfo", "cmodify", "chopper").plus(retired).forEach {
      getCommand(it)?.setExecutor(this)
    }
    server.pluginManager.registerEvents(this, this)
    server.scheduler.runTaskTimer(this, Runnable { tickAuto() }, 20L, 20L)
    logger.info("保護 ${store.count()} 件を読み込み、未対応 type ${store.ignoredTypes} 件を読み飛ばしました")
  }

  override fun onDisable() {
    if (::store.isInitialized) store.close()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val name = command.name.lowercase()
    if (name in retired) {
      sender.sendMessage("このコマンドは廃止しました")
      return true
    }
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("プレイヤー専用のコマンドです")
              return true
            }
    if (!player.hasPermission("lwc.protect")) {
      player.sendMessage("権限がありません")
      return true
    }
    if (name == "lock" && args.size == 1 && args[0].equals("auto", true)) {
      pending.remove(player.uniqueId)
      if (auto.remove(player.uniqueId) != null) {
        notifyAutoOff(player)
      } else {
        auto[player.uniqueId] = System.currentTimeMillis() + 60_000
        player.sendMessage("自動保護モードをオンにしました。容器を置くと残り時間を更新します")
      }
      return true
    }
    val action =
        when (name) {
          "lock" -> if (args.isEmpty()) "lock" else null
          "cdisplay",
          "unlock",
          "cinfo" -> if (args.isEmpty()) name else null
          "cmodify" -> if (args.isNotEmpty()) name else null
          "chopper" ->
              if (args.size == 1 && args[0].lowercase() in setOf("on", "off")) name else null
          else -> null
        }
    if (action == null) {
      player.sendMessage(
          "使い方: /$label ${if (name == "cmodify") "<player> [...]" else if (name == "chopper") "on|off" else ""}"
      )
      return true
    }
    pending[player.uniqueId] = Pending(action, args.toList(), System.currentTimeMillis() + 30_000)
    player.sendMessage("対象のブロックを右クリックしてください（30 秒で取り消し）")
    return true
  }

  private fun admin(player: Player) = player.isOp || player.hasPermission("lwc.admin")

  internal fun protection(block: Block): Protection? =
      if (isProtectable(block.type)) relatedKeys(block).firstNotNullOfOrNull { store.get(it) }
      else null

  internal fun canUse(player: Player, protection: Protection) =
      admin(player) || protection.owner == player.uniqueId || player.uniqueId in protection.shared

  private fun canManage(player: Player, protection: Protection) =
      admin(player) || protection.owner == player.uniqueId

  private fun notifyAutoOff(player: Player) {
    player.sendActionBar(Component.empty())
    player.sendMessage("自動保護モードをオフにしました")
    player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_PLING, 1f, 1f)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onInteract(event: PlayerInteractEvent) {
    if (!event.action.isRightClick) return
    val block = event.clickedBlock ?: return
    val player = event.player
    val request = pending.remove(player.uniqueId)
    if (request != null) {
      event.isCancelled = true
      if (request.expires < System.currentTimeMillis()) {
        player.sendMessage("操作の有効時間が切れました")
      } else {
        handleClick(player, block, request)
      }
      return
    }
    val protection = protection(block) ?: return
    if (protection.type == 2 && !canUse(player, protection)) {
      event.isCancelled = true
      player.sendMessage("このブロックは保護されています")
    } else if (
        protection.type == 6 &&
            block.type.name.let {
              it == "COMPOSTER" ||
                  it == "DECORATED_POT" ||
                  it.endsWith("_SHELF") ||
                  it == "CRAFTER" ||
                  isManual(block.type)
            }
    ) {
      event.isCancelled = true
    }
  }

  private fun handleClick(player: Player, block: Block, request: Pending) {
    val existing = protection(block)
    when (request.action) {
      "lock",
      "cdisplay" -> {
        if (!isProtectable(block.type)) {
          player.sendMessage("このブロックは保護できません")
        } else if (existing != null) {
          player.sendMessage("すでに保護されています")
        } else {
          store.add(
              Protection.create(
                  BlockKey.of(block),
                  player.uniqueId,
                  if (request.action == "lock") 2 else 6,
              ),
              block.type,
          )
          player.sendMessage("ブロックを保護しました")
        }
      }
      "cinfo" -> {
        if (existing == null) {
          player.sendMessage("保護されていません")
          return
        }
        val owner = Bukkit.getOfflinePlayer(existing.owner).name ?: existing.owner.toString()
        val shared =
            existing.shared
                .joinToString(", ") { Bukkit.getOfflinePlayer(it).name ?: it.toString() }
                .ifBlank { "なし" }
        player.sendMessage(
            "持ち主: $owner / 種類: ${if (existing.type == 2) "private" else "display"} / 共有: $shared / HOPPER: ${if (existing.hopper) "on" else "off"}"
        )
      }
      else -> {
        if (existing == null) {
          player.sendMessage("保護されていません")
          return
        }
        if (!canManage(player, existing)) {
          player.sendMessage("持ち主か管理者だけが変更できます")
          return
        }
        when (request.action) {
          "unlock" -> {
            store.remove(existing)
            player.sendMessage("保護を外しました")
          }
          "chopper" -> {
            existing.setHopper(request.args[0].equals("on", true))
            store.update(existing)
            player.sendMessage("HOPPER を ${request.args[0]} にしました")
          }
          "cmodify" -> {
            for (arg in request.args) {
              val removing = arg.startsWith("-")
              val name = arg.removePrefix("-")
              val target = Bukkit.getPlayerExact(name) ?: Bukkit.getOfflinePlayerIfCached(name)
              if (target == null) {
                player.sendMessage("プレイヤーが見つかりません: $name")
                continue
              }
              existing.setShared(target.uniqueId, !removing)
            }
            store.update(existing)
            player.sendMessage("共有相手を更新しました")
          }
        }
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBreak(event: BlockBreakEvent) {
    val protection = protection(event.block) ?: return
    if (!canManage(event.player, protection)) {
      event.isCancelled = true
      event.player.sendMessage("持ち主か管理者だけが壊せます")
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onBreakAccepted(event: BlockBreakEvent) {
    val protection = protection(event.block) ?: return
    if (
        canManage(event.player, protection) &&
            (protection.key == BlockKey.of(event.block) || event.block.type.name.endsWith("_DOOR"))
    )
        store.remove(protection)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onPlace(event: BlockPlaceEvent) {
    val block = event.blockPlaced
    if (
        (block.type == Material.CHEST ||
            block.type == Material.TRAPPED_CHEST ||
            (block.type.name == "COPPER_CHEST" || block.type.name.endsWith("_COPPER_CHEST"))) &&
            listOf(
                    block.getRelative(1, 0, 0),
                    block.getRelative(-1, 0, 0),
                    block.getRelative(0, 0, 1),
                    block.getRelative(0, 0, -1),
                )
                .any { neighbor ->
                  neighbor.type == block.type &&
                      (neighbor.blockData as? Chest)?.facing ==
                          (block.blockData as? Chest)?.facing &&
                      ((block.blockData as? Chest)?.type != Chest.Type.SINGLE ||
                          ((neighbor.blockData as? Chest)?.type == Chest.Type.SINGLE &&
                              !event.player.isSneaking)) &&
                      protection(neighbor)?.let { !canManage(event.player, it) } == true
                }
    ) {
      event.isCancelled = true
      event.player.sendMessage("他人の保護チェストの隣には置けません")
      return
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onAutoPlace(event: BlockPlaceEvent) {
    val block = event.blockPlaced
    store.get(BlockKey.of(block))?.let { store.remove(it) }
    if (!isContainer(block.type) || !auto.containsKey(event.player.uniqueId)) return
    if (protection(block) == null)
        store.add(Protection.create(BlockKey.of(block), event.player.uniqueId, 2), block.type)
    auto[event.player.uniqueId] = System.currentTimeMillis() + 60_000
  }

  @EventHandler(ignoreCancelled = true)
  fun onTakeBook(event: PlayerTakeLecternBookEvent) {
    val protection = protection(event.lectern.block) ?: return
    if (protection.type == 6 || !canUse(event.player, protection)) event.isCancelled = true
  }

  private fun inventoryProtection(inventory: Inventory): Protection? {
    val holder: InventoryHolder? = inventory.getHolder(false)
    return when (holder) {
      is DoubleChest ->
          listOfNotNull(holder.leftSide as? BlockState, holder.rightSide as? BlockState)
              .firstNotNullOfOrNull { protection(it.block) }
      is BlockState -> protection(holder.block)
      else -> null
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onInventoryClick(event: InventoryClickEvent) {
    if (inventoryProtection(event.view.topInventory)?.type == 6) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onInventoryDrag(event: InventoryDragEvent) {
    if (
        inventoryProtection(event.view.topInventory)?.type == 6 &&
            event.rawSlots.any { it < event.view.topInventory.size }
    )
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onMoveItem(event: InventoryMoveItemEvent) {
    if (
        listOf(event.source, event.destination).any {
          inventoryProtection(it)?.let { p -> !p.hopper } == true
        }
    )
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onBlockExplode(event: BlockExplodeEvent) {
    event.blockList().removeIf { protection(it) != null }
  }

  @EventHandler(ignoreCancelled = true)
  fun onEntityExplode(event: EntityExplodeEvent) {
    event.blockList().removeIf { protection(it) != null }
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonExtend(event: BlockPistonExtendEvent) {
    if (
        protection(event.block.getRelative(event.direction)) != null ||
            event.blocks.any { protection(it) != null }
    )
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonRetract(event: BlockPistonRetractEvent) {
    if (event.blocks.any { protection(it) != null }) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onBurn(event: BlockBurnEvent) {
    if (protection(event.block) != null) event.isCancelled = true
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    auto.remove(event.player.uniqueId)
    pending.remove(event.player.uniqueId)
  }

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    if (auto.remove(event.player.uniqueId) != null) notifyAutoOff(event.player)
  }

  private fun tickAuto() {
    val now = System.currentTimeMillis()
    for ((id, request) in pending.toMap()) {
      if (request.expires <= now) {
        pending.remove(id)
        server.getPlayer(id)?.sendMessage("ブロック操作を取り消しました（30 秒経過）")
      }
    }
    for ((id, until) in auto.toMap()) {
      val player =
          server.getPlayer(id)
              ?: run {
                auto.remove(id)
                continue
              }
      val seconds = remainingSeconds(until, now)
      if (seconds <= 0) {
        auto.remove(id)
        notifyAutoOff(player)
      } else {
        player.sendActionBar(Component.text("自動保護: 残り ${seconds} 秒"))
      }
    }
  }
}
