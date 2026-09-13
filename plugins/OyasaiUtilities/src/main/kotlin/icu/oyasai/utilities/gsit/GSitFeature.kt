package icu.oyasai.utilities.gsit

import icu.oyasai.utilities.OyasaiUtilities
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Tag
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.type.Slab
import org.bukkit.block.data.type.Snow
import org.bukkit.block.data.type.Stairs
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.entity.Pose
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.Vector

enum class SeatMode(
    val pose: Pose?,
    val locksPosition: Boolean,
    val usesSeatEntity: Boolean,
) {
  SIT(null, true, true),
  LAY(Pose.SLEEPING, true, false),
  LAYBACK(Pose.SLEEPING, true, false),
  BELLYFLOP(Pose.SWIMMING, true, false),
  SPIN(Pose.SPIN_ATTACK, true, false),
  CRAWL(Pose.SWIMMING, false, false),
}

data class SeatSession(
    val mode: SeatMode,
    val seatUniqueId: UUID? = null,
    val worldId: UUID,
    val blockX: Int,
    val blockY: Int,
    val blockZ: Int,
    val freezeX: Double? = null,
    val freezeY: Double? = null,
    val freezeZ: Double? = null,
)

object GSitFeature {
  const val SEAT_TAG = "oyasai_gsit_seat"
  val seatKey by lazy { NamespacedKey(OyasaiUtilities.plugin, "gsit-seat") }
  val seatOwnerKey by lazy { NamespacedKey(OyasaiUtilities.plugin, "gsit-seat-owner") }

  private val sessions = ConcurrentHashMap<UUID, SeatSession>()
  private val releasingPlayers = ConcurrentHashMap.newKeySet<UUID>()
  private val releasingSeats = ConcurrentHashMap.newKeySet<UUID>()

  fun onEnable() {
    GSitConfig.load()
    removeLeftoverSeats()
  }

  fun onDisable() {
    Bukkit.getOnlinePlayers().forEach { player -> stop(player, silent = true) }
    sessions.clear()
    removeLeftoverSeats()
  }

  fun reload() {
    GSitConfig.load()
  }

  fun sessionOf(player: Player): SeatSession? = sessions[player.uniqueId]

  fun isBusy(player: Player): Boolean = sessions.containsKey(player.uniqueId)

  fun toggle(player: Player, mode: SeatMode): Boolean {
    val existing = sessions[player.uniqueId]
    if (existing != null) {
      val was = existing.mode
      stop(player)
      if (was == mode) return true
    }
    return start(player, mode)
  }

  fun stop(player: Player, silent: Boolean = false) {
    val session = sessions.remove(player.uniqueId) ?: return
    releasingPlayers.add(player.uniqueId)
    try {
      if (session.mode.usesSeatEntity) {
        val seat = session.seatUniqueId?.let { Bukkit.getEntity(it) }
        if (seat != null && seat.isValid) {
          removeSeatEntity(seat)
        } else if (player.vehicle != null && isSeat(player.vehicle!!)) {
          removeSeatEntity(player.vehicle!!)
        } else {
          player.leaveVehicle()
        }
      }
      clearPose(player)
      player.velocity = Vector()
    } finally {
      releasingPlayers.remove(player.uniqueId)
    }
    if (!silent) player.sendMessage("§a起立しました。")
  }

  fun start(player: Player, mode: SeatMode): Boolean {
    if (!player.hasPermission("gsit.sit")) {
      player.sendMessage("§c権限がありません。")
      return false
    }
    if (player.gameMode == GameMode.SPECTATOR) {
      player.sendMessage("§cここではできません。")
      return false
    }
    if (GSitConfig.worldBlacklist.contains(player.world.name)) {
      player.sendMessage("§cこのワールドでは使えません。")
      return false
    }
    if (mode == SeatMode.SIT) return startSit(player)
    return startPose(player, mode)
  }

  fun startSitOn(player: Player, block: Block): Boolean {
    if (!player.hasPermission("gsit.sit")) return false
    if (player.gameMode == GameMode.SPECTATOR) return false
    if (GSitConfig.worldBlacklist.contains(player.world.name)) return false
    if (sessions.containsKey(player.uniqueId)) return false
    if (!isValidSitBlock(block)) return false
    if (!isSafe(block)) {
      player.sendMessage("§cここでは座れません。")
      return false
    }
    return spawnSeat(player, block)
  }

  fun isSeat(entity: Entity): Boolean {
    if (entity.scoreboardTags.contains(SEAT_TAG)) return true
    return entity.persistentDataContainer.has(seatKey, PersistentDataType.BYTE)
  }

  fun isReleasing(player: Player): Boolean = releasingPlayers.contains(player.uniqueId)

  fun isBlacklistedCommand(message: String): Boolean {
    val name = message.removePrefix("/").substringBefore(' ').substringAfter(':').lowercase()
    return name in GSitConfig.commandBlacklist
  }

  fun removeLeftoverSeats() {
    Bukkit.getWorlds().forEach { world ->
      world.entities.filter(::isSeat).forEach(::removeSeatEntity)
    }
  }

  fun unloadSeatsInChunk(entities: Array<Entity>, worldId: UUID, chunkX: Int, chunkZ: Int) {
    entities.filter(::isSeat).forEach { entity ->
      entity.passengers.filterIsInstance<Player>().forEach { stop(it, silent = true) }
      if (entity.isValid) removeSeatEntity(entity)
    }
    val victims =
        sessions.entries.filter { (_, session) ->
          (session.mode.locksPosition || session.mode.usesSeatEntity) &&
              session.worldId == worldId &&
              (session.blockX shr 4) == chunkX &&
              (session.blockZ shr 4) == chunkZ
        }
    victims.forEach { (uuid, _) -> Bukkit.getPlayer(uuid)?.let { stop(it, silent = true) } }
  }

  fun removeOrphanSeats(entities: Array<Entity>) {
    entities.filter(::isSeat).forEach { entity ->
      val riders = entity.passengers.filterIsInstance<Player>()
      if (riders.any { sessions.containsKey(it.uniqueId) }) return@forEach
      riders.forEach { stop(it, silent = true) }
      if (entity.isValid) removeSeatEntity(entity)
    }
  }

  fun stopIfSeatBlock(block: Block) {
    if (!GSitConfig.getUpBreak) return
    val victims =
        sessions.entries.filter { (_, session) ->
          session.worldId == block.world.uid &&
              session.blockX == block.x &&
              session.blockY == block.y &&
              session.blockZ == block.z
        }
    victims.forEach { (uuid, _) -> Bukkit.getPlayer(uuid)?.let { stop(it) } }
  }

  fun freezeIfNeeded(player: Player, from: Location, to: Location): Location? {
    val session = sessions[player.uniqueId] ?: return null
    if (!session.mode.locksPosition || session.mode.usesSeatEntity) return null
    if (from.x == to.x && from.y == to.y && from.z == to.z) return null
    val x = session.freezeX ?: from.x
    val y = session.freezeY ?: from.y
    val z = session.freezeZ ?: from.z
    return to.clone().apply {
      this.x = x
      this.y = y
      this.z = z
    }
  }

  fun isValidSitBlock(block: Block): Boolean {
    if (!GSitConfig.isSitMaterial(block.type)) return false
    if (!GSitConfig.bottomPartOnly) return true
    val data = block.blockData
    if (data is Stairs && data.half != Bisected.Half.BOTTOM) return false
    if (data is Slab && data.type == Slab.Type.TOP) return false
    return true
  }

  private fun startSit(player: Player): Boolean {
    val targeted = player.getTargetBlockExact(5)
    val block =
        if (targeted != null && isValidSitBlock(targeted)) targeted
        else player.location.clone().subtract(0.0, 0.1, 0.0).block
    if (block.type.isAir) {
      player.sendMessage("§c座れる場所がありません。")
      return false
    }
    if (!isSafe(block)) {
      player.sendMessage("§cここでは座れません。")
      return false
    }
    return spawnSeat(player, block)
  }

  private fun startPose(player: Player, mode: SeatMode): Boolean {
    val loc = player.location
    val pose = mode.pose
    if (pose == null) return false
    if (mode == SeatMode.LAYBACK) player.setRotation(loc.yaw + 180f, loc.pitch)
    // Crawl/lay/spin use Paper's fixed pose API (Pose.SWIMMING is the crawl hitbox). No NMS.
    player.setPose(pose, true)
    val floor = loc.clone().subtract(0.0, 0.1, 0.0).block
    sessions[player.uniqueId] =
        SeatSession(
            mode = mode,
            worldId = player.world.uid,
            blockX = floor.x,
            blockY = floor.y,
            blockZ = floor.z,
            freezeX = loc.x,
            freezeY = loc.y,
            freezeZ = loc.z,
        )
    player.sendMessage(startMessage(mode))
    return true
  }

  private fun spawnSeat(player: Player, block: Block): Boolean {
    val world = block.world
    val yaw = sitYaw(player, block)
    val x = if (GSitConfig.centerBlock) block.x + 0.5 else player.location.x
    val z = if (GSitConfig.centerBlock) block.z + 0.5 else player.location.z
    val loc = Location(world, x, sitHeight(block), z, yaw, 0f)
    releasingPlayers.add(player.uniqueId)
    try {
      val stand = world.spawn(loc, ArmorStand::class.java) { seat -> configureSeat(seat, player) }
      if (!stand.addPassenger(player)) {
        removeSeatEntity(stand)
        player.sendMessage("§c座れませんでした。")
        return false
      }
      sessions[player.uniqueId] =
          SeatSession(
              mode = SeatMode.SIT,
              seatUniqueId = stand.uniqueId,
              worldId = world.uid,
              blockX = block.x,
              blockY = block.y,
              blockZ = block.z,
          )
    } finally {
      releasingPlayers.remove(player.uniqueId)
    }
    player.sendMessage(startMessage(SeatMode.SIT))
    return true
  }

  private fun configureSeat(seat: ArmorStand, player: Player) {
    seat.isVisible = false
    seat.isInvisible = true
    seat.isMarker = true
    seat.setGravity(false)
    seat.isInvulnerable = true
    seat.isSilent = true
    seat.setBasePlate(false)
    seat.setArms(false)
    seat.setCanTick(false)
    seat.isPersistent = false
    seat.isCollidable = false
    seat.isCustomNameVisible = false
    seat.setDisabledSlots(*EquipmentSlot.entries.toTypedArray())
    seat.addScoreboardTag(SEAT_TAG)
    seat.persistentDataContainer.set(seatKey, PersistentDataType.BYTE, 1)
    seat.persistentDataContainer.set(
        seatOwnerKey,
        PersistentDataType.STRING,
        player.uniqueId.toString(),
    )
  }

  private fun sitHeight(block: Block): Double {
    val data = block.blockData
    val offset =
        when {
          data is Snow -> data.layers * 0.125
          Tag.WOOL_CARPETS.isTagged(block.type) ||
              block.type == Material.MOSS_CARPET ||
              block.type == Material.PALE_MOSS_CARPET -> 0.0625
          Tag.SLABS.isTagged(block.type) -> 0.5
          Tag.STAIRS.isTagged(block.type) -> 0.5
          else -> (block.boundingBox.maxY - block.y).coerceAtLeast(0.0)
        }
    return block.y + offset
  }

  private fun sitYaw(player: Player, block: Block): Float {
    val data = block.blockData
    if (data is Stairs) {
      return when (data.facing) {
        BlockFace.SOUTH -> 0f
        BlockFace.WEST -> 90f
        BlockFace.NORTH -> 180f
        BlockFace.EAST -> -90f
        else -> player.location.yaw
      }
    }
    return player.location.yaw
  }

  private fun isSafe(block: Block): Boolean {
    if (block.type == Material.LAVA || block.type == Material.FIRE) return false
    val above = block.getRelative(BlockFace.UP)
    return !above.type.isOccluding
  }

  private fun clearPose(player: Player) {
    if (!player.hasFixedPose()) return
    player.unsetFixedPose()
  }

  private fun removeSeatEntity(entity: Entity) {
    releasingSeats.add(entity.uniqueId)
    entity.eject()
    entity.remove()
  }

  private fun startMessage(mode: SeatMode): String =
      when (mode) {
        SeatMode.SIT -> "§a座りました。スニークで起立します。"
        SeatMode.LAY,
        SeatMode.LAYBACK -> "§a寝そべりました。スニークで起立します。"
        SeatMode.BELLYFLOP -> "§aうつ伏せになりました。スニークで起立します。"
        SeatMode.SPIN -> "§a回転ポーズになりました。スニークで起立します。"
        SeatMode.CRAWL -> "§a這いました。スニークで起立します。"
      }
}
