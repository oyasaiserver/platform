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
import org.bukkit.event.block.BlockPhysicsEvent
import org.bukkit.event.block.BlockPistonExtendEvent
import org.bukkit.event.block.BlockPistonRetractEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.block.BlockRedstoneEvent
import org.bukkit.event.entity.EntityChangeBlockEvent
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.inventory.InventoryMoveItemEvent
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTakeLecternBookEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder

class LwcPlugin : LWCPlugin(), Listener, CommandExecutor {
  private lateinit var store: ProtectionStore
  private val compatibility = LWC(this)

  override fun getLWC(): LWC = compatibility

  private data class Pending(val action: String, val args: List<String>, val expires: Long)

  private val pending = mutableMapOf<UUID, Pending>()
  private val auto = mutableMapOf<UUID, Long>()
  private val suppressOffHand = mutableSetOf<UUID>()

  override fun onEnable() {
    try {
      store = ProtectionStore(this)
    } catch (error: Exception) {
      logger.severe("LWC を有効化できません: ${error.message}")
      server.pluginManager.disablePlugin(this)
      return
    }
    listOf("lock", "cdisplay", "unlock", "cinfo", "cmodify", "chopper").forEach {
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
    if (event.hand == EquipmentSlot.OFF_HAND) {
      if (suppressOffHand.remove(player.uniqueId) || pending.containsKey(player.uniqueId)) {
        event.isCancelled = true
        return
      }
    } else {
      suppressOffHand.remove(player.uniqueId)
    }
    val request = pending.remove(player.uniqueId)
    if (request != null) {
      if (event.hand != EquipmentSlot.OFF_HAND) {
        suppressOffHand.add(player.uniqueId)
      }
      event.isCancelled = true
      if (request.expires < System.currentTimeMillis()) {
        player.sendMessage("操作の有効時間が切れました")
      } else {
        handleClick(player, block, request)
      }
      return
    }
    val protection = protection(block) ?: return
    val heldType =
        event.item?.type
            ?: runCatching {
                  when (event.hand) {
                    EquipmentSlot.OFF_HAND -> player.inventory.itemInOffHand.type
                    else -> player.inventory.itemInMainHand.type
                  }
                }
                .getOrNull()
    if (protection.type == 2 && !canUse(player, protection)) {
      event.isCancelled = true
      player.sendMessage("このブロックは保護されています")
    } else if (
        protection.type == 6 &&
            (block.type.name.let {
              it == "COMPOSTER" ||
                  it == "DECORATED_POT" ||
                  it.endsWith("_SHELF") ||
                  it == "CRAFTER" ||
                  isManual(block.type)
            } || isLecternBookInsert(block, heldType) || isCopperChestModify(block.type, heldType))
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

  private fun dependentProtections(block: Block): List<Protection> =
      runCatching {
            val result = mutableListOf<Protection>()
            block.getRelative(0, 1, 0)?.let { up ->
              val upName = up.type.name
              if (
                  upName.endsWith("_DOOR") ||
                      (upName.endsWith("_SIGN") &&
                          !upName.endsWith("_WALL_SIGN") &&
                          !upName.endsWith("_HANGING_SIGN")) ||
                      (upName.endsWith("_BANNER") && !upName.endsWith("_WALL_BANNER"))
              ) {
                protection(up)?.let { result += it }
              }
            }
            block.getRelative(0, -1, 0)?.let { down ->
              val downName = down.type.name
              if (downName.endsWith("_HANGING_SIGN") && !downName.endsWith("_WALL_HANGING_SIGN")) {
                protection(down)?.let { result += it }
              }
            }
            val horizontal =
                listOf(
                    org.bukkit.block.BlockFace.NORTH to (0 to -1),
                    org.bukkit.block.BlockFace.SOUTH to (0 to 1),
                    org.bukkit.block.BlockFace.EAST to (1 to 0),
                    org.bukkit.block.BlockFace.WEST to (-1 to 0),
                )
            for ((face, offset) in horizontal) {
              val side = block.getRelative(offset.first, 0, offset.second) ?: continue
              val sideName = side.type.name
              if (sideName.endsWith("_WALL_SIGN") || sideName.endsWith("_WALL_BANNER")) {
                val facing = (side.blockData as? org.bukkit.block.data.Directional)?.facing
                if (facing == null || facing == face) {
                  protection(side)?.let { result += it }
                }
              } else if (sideName.endsWith("_WALL_HANGING_SIGN")) {
                val facing = (side.blockData as? org.bukkit.block.data.Directional)?.facing
                if (facing == null || (facing != face && facing != face.oppositeFace)) {
                  protection(side)?.let { result += it }
                }
              }
            }
            result.distinct()
          }
          .getOrDefault(emptyList())

  private fun isProtectedOrSupporting(block: Block): Boolean =
      protection(block) != null || dependentProtections(block).isNotEmpty()

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onBreak(event: BlockBreakEvent) {
    val protection = protection(event.block)
    if (protection != null) {
      if (!canManage(event.player, protection)) {
        event.isCancelled = true
        event.player.sendMessage("持ち主か管理者だけが壊せます")
      }
      return
    }
    if (dependentProtections(event.block).isNotEmpty()) {
      event.isCancelled = true
      event.player.sendMessage("保護されたブロックを支えているため壊せません")
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onBreakAccepted(event: BlockBreakEvent) {
    val protection = protection(event.block) ?: return
    if (!canManage(event.player, protection)) return
    val brokenKey = BlockKey.of(event.block)
    if (event.block.type.name.endsWith("_DOOR")) {
      store.remove(protection)
      return
    }
    val remainingKey = relatedKeys(event.block).firstOrNull { it != brokenKey }
    if (remainingKey == null) {
      store.remove(protection)
    } else if (protection.key == brokenKey && store.get(remainingKey) == null) {
      store.relocate(protection, remainingKey)
    }
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
    @Suppress("USELESS_ELVIS") val lectern = (event.lectern as org.bukkit.block.Lectern?) ?: return
    val protection = protection(lectern.block) ?: return
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
    event.blockList().removeIf { isProtectedOrSupporting(it) }
  }

  @EventHandler(ignoreCancelled = true)
  fun onEntityExplode(event: EntityExplodeEvent) {
    event.blockList().removeIf { isProtectedOrSupporting(it) }
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonExtend(event: BlockPistonExtendEvent) {
    if (
        isProtectedOrSupporting(event.block.getRelative(event.direction)) ||
            event.blocks.any { isProtectedOrSupporting(it) }
    )
        event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onPistonRetract(event: BlockPistonRetractEvent) {
    if (event.blocks.any { isProtectedOrSupporting(it) }) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onBurn(event: BlockBurnEvent) {
    if (isProtectedOrSupporting(event.block)) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onEntityChangeBlock(event: EntityChangeBlockEvent) {
    if (isProtectedOrSupporting(event.block)) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onPhysics(event: BlockPhysicsEvent) {
    val block = event.block
    if (protection(block) == null || !isManual(block.type)) return
    val name = block.type.name
    if (
        name.endsWith("_SIGN") ||
            name.endsWith("_WALL_SIGN") ||
            name.endsWith("_BANNER") ||
            name.endsWith("_WALL_BANNER")
    ) {
      event.isCancelled = true
    } else if (name.endsWith("_DOOR")) {
      val below = runCatching { block.getRelative(0, -1, 0) }.getOrNull()
      if (below != null && !below.type.name.endsWith("_DOOR") && !below.type.isSolid) {
        event.isCancelled = true
      }
    }
  }

  @EventHandler
  fun onRedstone(event: BlockRedstoneEvent) {
    if (protection(event.block) != null && isManual(event.block.type)) {
      event.newCurrent = event.oldCurrent
    }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    auto.remove(event.player.uniqueId)
    pending.remove(event.player.uniqueId)
    suppressOffHand.remove(event.player.uniqueId)
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
