package icu.oyasai.utilities.sit

import io.papermc.paper.datacomponent.item.ResolvableProfile
import java.io.File
import java.util.UUID
import kotlin.math.floor
import net.kyori.adventure.text.Component
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Statistic
import org.bukkit.Tag
import org.bukkit.attribute.Attribute
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.type.Slab
import org.bukkit.block.data.type.Stairs
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Mannequin
import org.bukkit.entity.Player
import org.bukkit.entity.Pose
import org.bukkit.event.Event
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDeathEvent
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.entity.EntityMountEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerGameModeChangeEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.event.player.PlayerToggleFlightEvent
import org.bukkit.event.player.PlayerToggleSneakEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask

class SitFeature(private val plugin: JavaPlugin) : Listener, CommandExecutor, TabCompleter {
  private enum class Mode {
    SIT,
    LAY,
    BELLYFLOP,
    SPIN,
    CRAWL,
  }

  private data class State(
      val mode: Mode,
      val seat: ArmorStand? = null,
      val standAt: Location? = null,
      val support: Block? = null,
      val clicked: Boolean = false,
      val mannequin: Mannequin? = null,
      val wasInvisible: Boolean = false,
      val wasSleepingIgnored: Boolean = false,
      var barrier: Location? = null,
  )

  private val seatKey = NamespacedKey(plugin, "sit_seat")
  private val states = mutableMapOf<UUID, State>()
  private val playerRides = mutableMapOf<UUID, UUID>()
  private var playerMode = PlayerSitMode.RANK
  private val off = mutableSetOf<UUID>()
  private var store: SitStore? = null
  private var enabled = false
  private var watch: BukkitTask? = null

  fun enable() {
    listOf("sit", "lay", "bellyflop", "spin", "crawl").forEach {
      plugin.getCommand(it)?.setExecutor(this)
    }
    plugin.getCommand("sit")?.tabCompleter = this
    val folder = File(plugin.dataFolder, "Sit")
    if (!folder.isDirectory) {
      plugin.logger.info("Sit disabled: Sit directory is absent")
      return
    }
    enabled = true
    plugin.server.pluginManager.registerEvents(this, plugin)
    val opened = SitStore(File(folder, "sit.db"))
    try {
      opened.open()
      off.addAll(opened.loadOff())
      playerMode = opened.loadPlayerMode()
      store = opened
    } catch (failure: Exception) {
      runCatching { opened.close() }
      store = null
      plugin.logger.severe("Could not open Sit database: ${failure.message}")
    }
    watch = Bukkit.getScheduler().runTaskTimer(plugin, Runnable { sweep() }, 10L, 10L)
  }

  fun disable() {
    watch?.cancel()
    playerRides.keys.toList().forEach { releasePlayerRides(it) }
    states.keys.toList().forEach { id -> Bukkit.getPlayer(id)?.let { stop(it, true) } }
    enabled = false
    states.clear()
    store?.close()
    store = null
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!enabled) return reply(sender, "このサーバーでは使えません。")
    if (command.name.equals("sit", true) && args.firstOrNull().equals("playermode", true)) {
      if (args.size == 1) return reply(sender, "PlayerSit モード: ${playerMode.name.lowercase()}")
      if (!sender.isOp && !sender.hasPermission("oyasai.utilities.sit.admin"))
          return reply(sender, "権限がありません。")
      val next = args.getOrNull(1)?.let { PlayerSitMode.parse(it) }
      if (args.size != 2 || next == null) return reply(sender, "使い方: /sit playermode <rank|all>")
      val database = store ?: return reply(sender, "今は使えません。")
      try {
        database.setPlayerMode(next)
        playerMode = next
        return reply(sender, "PlayerSit モード: ${next.name.lowercase()}")
      } catch (failure: Exception) {
        plugin.logger.severe("Could not update PlayerSit mode: ${failure.message}")
        return reply(sender, "今は使えません。")
      }
    }
    val player = sender as? Player ?: return reply(sender, "プレイヤーのみ使えます。")
    val mode =
        when (command.name.lowercase()) {
          "sit" -> Mode.SIT
          "lay" -> Mode.LAY
          "bellyflop" -> Mode.BELLYFLOP
          "spin" -> Mode.SPIN
          "crawl" -> Mode.CRAWL
          else -> return true
        }
    if (mode == Mode.SIT && args.size == 1 && args[0].equals("toggle", true)) {
      val database = store ?: return reply(player, "今は使えません。")
      val turnOff = player.uniqueId !in off
      try {
        database.setOff(player.uniqueId, turnOff)
        if (turnOff) off.add(player.uniqueId) else off.remove(player.uniqueId)
        return reply(player, "右クリックで座る: ${if (turnOff) "OFF" else "ON"}")
      } catch (failure: Exception) {
        plugin.logger.severe("Could not update Sit preference: ${failure.message}")
        return reply(player, "今は使えません。")
      }
    }
    if (args.isNotEmpty())
        return reply(
            player,
            if (mode == Mode.SIT) "使い方: /sit [toggle|playermode [rank|all]]"
            else "使い方: /${command.name}",
        )
    val previous = states[player.uniqueId]
    if (previous?.mode == mode) {
      stop(player, true)
      return true
    }
    if (previous != null) stop(player, true)
    if (!canStart(player, previous != null)) return reply(player, "今はできません。")
    when (mode) {
      Mode.SIT -> seat(player, player.location, player.location, null, false, mode)
      Mode.CRAWL -> {
        val state = State(mode)
        states[player.uniqueId] = state
        player.setPose(Pose.SWIMMING, true)
        updateBarrier(player, state)
        player.sendActionBar(Component.text("スニークで戻る"))
      }
      else -> seat(player, player.location, player.location, null, false, mode)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      when {
        !command.name.equals("sit", true) -> emptyList()
        args.size == 1 -> listOf("toggle", "playermode").filter { it.startsWith(args[0], true) }
        args.size == 2 && args[0].equals("playermode", true) ->
            listOf("rank", "all").filter { it.startsWith(args[1], true) }
        else -> emptyList()
      }

  private fun reply(sender: CommandSender, message: String): Boolean {
    sender.sendMessage(message)
    return true
  }

  private fun canStart(player: Player, switching: Boolean = false): Boolean =
      player.gameMode != GameMode.SPECTATOR &&
          (switching || player.isOnGround) &&
          !player.isFlying &&
          !player.isGliding &&
          !player.isInWater &&
          player.vehicle == null &&
          !player.isSleeping

  private fun seat(
      player: Player,
      at: Location,
      standAt: Location,
      support: Block?,
      clicked: Boolean,
      mode: Mode,
  ): Boolean {
    val scale = player.getAttribute(Attribute.SCALE)?.value ?: 1.0
    // 乗る位置は台の頭の上になるので、小さい ArmorStand の高さだけ下げる。
    val seatAt = at.clone().add(0.0, SEAT_Y_OFFSET - SMALL_STAND_HEIGHT * scale, 0.0)
    val stand =
        player.world.spawn(seatAt, ArmorStand::class.java) {
          it.isVisible = false
          it.isSmall = true
          it.getAttribute(Attribute.SCALE)?.baseValue = scale
          it.setGravity(false)
          it.isInvulnerable = true
          it.isSilent = true
          it.setBasePlate(false)
          it.isPersistent = false
          it.setCanTick(false)
          it.persistentDataContainer.set(seatKey, PersistentDataType.BYTE, 1)
        }
    if (!stand.addPassenger(player)) {
      stand.remove()
      player.sendMessage("座れませんでした。")
      return false
    }
    var mannequin: Mannequin? = null
    if (mode != Mode.SIT) {
      try {
        val pose =
            when (mode) {
              Mode.LAY -> Pose.SLEEPING
              Mode.BELLYFLOP -> Pose.SWIMMING
              else -> Pose.STANDING
            }
        check(pose in Mannequin.validPoses()) { "Mannequin does not support $pose" }
        val position = at.clone().apply { if (mode == Mode.SPIN) pitch = -90f }
        mannequin =
            player.world.spawn(position, Mannequin::class.java) {
              it.setProfile(ResolvableProfile.resolvableProfile(player.playerProfile))
              it.isImmovable = true
              it.setGravity(false)
              it.isInvulnerable = true
              it.isSilent = true
              it.isPersistent = false
              it.persistentDataContainer.set(seatKey, PersistentDataType.BYTE, 1)
              it.customName = player.name
              it.isCustomNameVisible = true
              it.description = null
              val source = player.equipment
              val target = it.equipment
              target.setHelmet(source.helmet.clone())
              target.setChestplate(source.chestplate.clone())
              target.setLeggings(source.leggings.clone())
              target.setBoots(source.boots.clone())
              target.setItemInMainHand(source.itemInMainHand.clone())
              target.setItemInOffHand(source.itemInOffHand.clone())
              it.setPose(pose, true)
              if (mode == Mode.SPIN) it.isRiptiding = true
            }
      } catch (failure: Exception) {
        mannequin?.remove()
        stand.removePassenger(player)
        stand.remove()
        plugin.logger.warning("Could not start Sit pose: ${failure.message}")
        player.sendMessage("今はできません。")
        return false
      }
    }
    val state =
        State(
            mode,
            stand,
            standAt.clone(),
            support,
            clicked,
            mannequin,
            player.isInvisible,
            player.isSleepingIgnored,
        )
    states[player.uniqueId] = state
    if (mannequin != null) {
      player.isInvisible = true
      Bukkit.getOnlinePlayers().filter { it != player }.forEach { it.hideEntity(plugin, player) }
      if (mode == Mode.LAY) {
        player.isSleepingIgnored = true
        player.setStatistic(Statistic.TIME_SINCE_REST, 0)
      }
    }
    player.sendActionBar(Component.text("スニークで戻る"))
    return true
  }

  private fun stop(player: Player, returnToSeat: Boolean) {
    releasePlayerRides(player.uniqueId)
    val state = states.remove(player.uniqueId) ?: return
    if (state.mode == Mode.CRAWL) {
      player.setPose(Pose.STANDING, false)
      clearBarrier(player, state)
      return
    }
    state.mannequin?.remove()
    if (state.mannequin != null) {
      player.isInvisible = state.wasInvisible
      player.isSleepingIgnored = state.wasSleepingIgnored
      Bukkit.getOnlinePlayers().filter { it != player }.forEach { it.showEntity(plugin, player) }
    }
    state.seat?.removePassenger(player)
    state.seat?.remove()
    if (returnToSeat && player.isOnline && !player.isDead) {
      val destination = state.standAt ?: return
      if (player.world == destination.world) {
        val target =
            destination.clone().apply {
              yaw = player.location.yaw
              pitch = player.location.pitch
            }
        player.teleport(target)
      }
    }
  }

  private fun releasePlayerRides(id: UUID) {
    PlayerSitRules.detach(playerRides, id).forEach { (riderId, carrierId) ->
      val rider = Bukkit.getPlayer(riderId) ?: return@forEach
      rider.vehicle?.takeIf { it.uniqueId == carrierId }?.removePassenger(rider)
    }
  }

  private fun primaryGroup(player: Player): String? {
    if (!plugin.server.pluginManager.isPluginEnabled("LuckPerms")) return null
    return try {
      LuckPermsProvider.get().userManager.getUser(player.uniqueId)?.primaryGroup
    } catch (_: IllegalStateException) {
      null
    } catch (_: LinkageError) {
      null
    }
  }

  @EventHandler(ignoreCancelled = true)
  fun onPlayerClickAt(event: PlayerInteractAtEntityEvent) = playerClick(event)

  private fun playerClick(event: PlayerInteractEntityEvent) {
    val rider = event.player
    val clicked = event.rightClicked as? Player ?: return
    if (
        !enabled ||
            store == null ||
            event.hand != EquipmentSlot.HAND ||
            rider.inventory.itemInMainHand.type != Material.AIR ||
            states.containsKey(rider.uniqueId) ||
            playerRides.containsKey(rider.uniqueId) ||
            !canStart(rider)
    )
        return
    val topId =
        PlayerSitRules.top(rider.uniqueId, clicked.uniqueId) { id ->
          val carrier = Bukkit.getEntity(id) as? Player
          if (
              carrier == null ||
                  !carrier.isOnline ||
                  carrier.isDead ||
                  carrier.world != rider.world ||
                  carrier.passengers.any { it !is Player }
          )
              null
          else carrier.passengers.map { it.uniqueId }
        } ?: return
    val target = Bukkit.getPlayer(topId) ?: return
    if (playerMode == PlayerSitMode.RANK) {
      val riderGroup = primaryGroup(rider)
      val targetGroup = primaryGroup(target)
      if (riderGroup == null || targetGroup == null) {
        rider.sendMessage("階級を確認できないため、今は乗れません。")
        return
      }
      if (!PlayerSitRules.canRide(riderGroup, targetGroup)) {
        rider.sendMessage("自分より階級の低い人にしか乗れません。")
        return
      }
    }
    if (target.addPassenger(rider)) {
      playerRides[rider.uniqueId] = target.uniqueId
      event.isCancelled = true
      rider.sendActionBar(Component.text("スニークで戻る"))
    }
  }

  @EventHandler
  fun onClick(event: PlayerInteractEvent) {
    if (
        event.action != org.bukkit.event.block.Action.RIGHT_CLICK_BLOCK ||
            event.hand != EquipmentSlot.HAND ||
            event.useInteractedBlock() == Event.Result.DENY
    )
        return
    val player = event.player
    val block = event.clickedBlock ?: return
    if (
        store == null ||
            player.uniqueId in off ||
            states.containsKey(player.uniqueId) ||
            player.inventory.itemInMainHand.type != Material.AIR ||
            player.isSneaking ||
            !canStart(player) ||
            !seatBlock(block) ||
            !block.getRelative(BlockFace.UP).isPassable
    )
        return
    val data = block.blockData
    val surface = if (data is Stairs) block.y + 0.5 else block.boundingBox.maxY
    val yaw =
        if (data is Stairs)
            when (data.facing.oppositeFace) {
              BlockFace.SOUTH -> 0f
              BlockFace.WEST -> 90f
              BlockFace.NORTH -> 180f
              BlockFace.EAST -> -90f
              else -> player.location.yaw
            }
        else player.location.yaw
    val at =
        Location(block.world, block.x + 0.5, surface, block.z + 0.5, yaw, player.location.pitch)
    val standAt = at.clone().apply { y = block.boundingBox.maxY }
    if (seat(player, at, standAt, block, true, Mode.SIT)) event.isCancelled = true
  }

  private fun seatBlock(block: Block): Boolean {
    val data = block.blockData
    return (data is Stairs && data.half == org.bukkit.block.data.Bisected.Half.BOTTOM) ||
        (data is Slab && data.type == Slab.Type.BOTTOM) ||
        Tag.WOOL_CARPETS.isTagged(block.type) ||
        block.type == Material.MOSS_CARPET ||
        block.type == Material.PALE_MOSS_CARPET ||
        block.type == Material.SNOW
  }

  @EventHandler
  fun onDismount(event: EntityDismountEvent) {
    val player = event.entity as? Player ?: return
    if (playerRides[player.uniqueId] == event.dismounted.uniqueId) {
      releasePlayerRides(player.uniqueId)
      return
    }
    val state = states[player.uniqueId] ?: return
    if (event.dismounted != state.seat) return
    val seatAt = state.seat.location.clone()
    stop(player, false)
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (
                  player.isOnline &&
                      player.world == seatAt.world &&
                      player.location.distance(seatAt) < 1.5
              ) {
                val target = state.standAt?.clone() ?: return@Runnable
                target.yaw = player.location.yaw
                target.pitch = player.location.pitch
                player.teleport(target)
              }
            },
        )
  }

  @EventHandler fun onTeleport(event: PlayerTeleportEvent) = stop(event.player, false)

  @EventHandler fun onWorldChange(event: PlayerChangedWorldEvent) = stop(event.player, false)

  @EventHandler fun onQuit(event: PlayerQuitEvent) = stop(event.player, false)

  @EventHandler fun onDeath(event: PlayerDeathEvent) = stop(event.entity, false)

  @EventHandler fun onGameMode(event: PlayerGameModeChangeEvent) = stop(event.player, true)

  @EventHandler
  fun onFlight(event: PlayerToggleFlightEvent) {
    if (event.isFlying) stop(event.player, true)
  }

  @EventHandler
  fun onSneak(event: PlayerToggleSneakEvent) {
    if (
        event.isSneaking &&
            (playerRides.containsKey(event.player.uniqueId) ||
                states[event.player.uniqueId]?.mode == Mode.CRAWL)
    )
        stop(event.player, false)
  }

  @EventHandler
  fun onMount(event: EntityMountEvent) {
    val player = event.entity as? Player ?: return
    val state = states[player.uniqueId] ?: return
    if (event.mount != state.seat && state.mode != Mode.SIT) stop(player, false)
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    event.player.vehicle?.let { vehicle ->
      if (vehicle.persistentDataContainer.has(seatKey, PersistentDataType.BYTE)) {
        vehicle.removePassenger(event.player)
        vehicle.remove()
      }
    }
    states.keys.forEach { id ->
      val state = states[id] ?: return@forEach
      val posed = Bukkit.getPlayer(id) ?: return@forEach
      if (state.mannequin != null && posed != event.player) event.player.hideEntity(plugin, posed)
    }
  }

  @EventHandler
  fun onMannequinDeath(event: EntityDeathEvent) {
    states.entries
        .firstOrNull { it.value.mannequin == event.entity }
        ?.key
        ?.let { Bukkit.getPlayer(it)?.let { player -> stop(player, true) } }
  }

  @EventHandler
  fun onMove(event: PlayerMoveEvent) {
    val state = states[event.player.uniqueId] ?: return
    if (state.mode != Mode.CRAWL) return
    val to = event.to
    val from = event.from
    if (
        from.world != to.world ||
            from.blockX != to.blockX ||
            from.blockY != to.blockY ||
            from.blockZ != to.blockZ
    )
        updateBarrier(event.player, state, to)
  }

  private fun barrierAt(loc: Location): Location? {
    if (loc.y - floor(loc.y) > 0.4) return null
    val above = Location(loc.world, floor(loc.x), floor(loc.y) + 1, floor(loc.z))
    return above.takeIf { it.block.type.isAir }
  }

  private fun clearBarrier(player: Player, state: State) {
    state.barrier?.let { player.sendBlockChange(it, it.block.blockData) }
    state.barrier = null
  }

  private fun updateBarrier(player: Player, state: State, location: Location = player.location) {
    val next = barrierAt(location)
    if (next == state.barrier) return
    clearBarrier(player, state)
    if (next != null) {
      player.sendBlockChange(next, Material.BARRIER.createBlockData())
      state.barrier = next
    }
  }

  private fun sweep() {
    playerRides.toMap().forEach { (id, carrierId) ->
      val rider = Bukkit.getPlayer(id)
      val carrier = Bukkit.getPlayer(carrierId)
      if (
          rider == null ||
              carrier == null ||
              rider.isDead ||
              carrier.isDead ||
              rider.world != carrier.world ||
              rider.vehicle != carrier
      )
          releasePlayerRides(id)
    }
    states.keys.toList().forEach { id ->
      val player = Bukkit.getPlayer(id) ?: return@forEach
      val state = states[id] ?: return@forEach
      if (state.mode == Mode.CRAWL) {
        state.barrier?.let {
          if (it.block.type.isAir) player.sendBlockChange(it, Material.BARRIER.createBlockData())
          else state.barrier = null
        }
        return@forEach
      }
      val seat = state.seat
      if (
          seat == null ||
              !seat.isValid ||
              player.vehicle != seat ||
              (state.mannequin != null && !state.mannequin.isValid)
      ) {
        stop(player, true)
        return@forEach
      }
      val support = state.support ?: state.standAt?.clone()?.add(0.0, -0.01, 0.0)?.block
      if (support != null && (if (state.clicked) !seatBlock(support) else support.isPassable))
          stop(player, true)
    }
  }

  private companion object {
    // ローカルで見て調整する。
    const val SEAT_Y_OFFSET = 0.0
    // バニラの小さい ArmorStand の高さ（1.975 の半分）。
    const val SMALL_STAND_HEIGHT = 0.9875
  }
}
