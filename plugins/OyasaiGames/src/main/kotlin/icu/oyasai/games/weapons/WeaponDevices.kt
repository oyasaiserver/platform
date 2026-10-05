package icu.oyasai.games.weapons

import java.io.File
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.block.Sign
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.*
import org.bukkit.event.entity.*
import org.bukkit.event.inventory.InventoryOpenEvent
import org.bukkit.event.player.*
import org.bukkit.event.vehicle.VehicleDamageEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.Damageable
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin

internal data class DeviceInfo(
    val type: String,
    val limit: Int = 0,
    val speed: Double = 0.0,
    val before: String = "",
    val after: String = "",
    val flags: List<Boolean> = emptyList(),
) {
  companion object {
    fun parse(type: String, value: String): DeviceInfo {
      return when (type) {
        "landmine" -> {
          val p = value.split(',', '-')
          require(p.size == 2 && p[1] == "MINECART")
          DeviceInfo(type, before = p[0])
        }
        "remote" -> {
          val p = value.split('-', limit = 3)
          require(p.size == 3 && p[0].toInt() > 0 && p[1].length == 2)
          DeviceInfo(type, limit = p[0].toInt(), before = p[1].lowercase(), after = p[2])
        }
        "itembomb" -> {
          val p = value.split(',')
          require(p.size == 4 && p[0].toInt() > 0 && p[1].toDouble() >= 0)
          DeviceInfo(type, p[0].toInt(), p[1].toDouble(), p[2], p[3])
        }
        "trap" -> {
          val p = value.split('-')
          require(p.size == 5)
          DeviceInfo(type, flags = p.map { it.toBooleanStrict() })
        }
        else -> error("Unknown explosive device type")
      }
    }

    fun canDeploy(active: Int, pending: Int, limit: Int): Boolean =
        active >= 0 && pending >= 0 && limit > 0 && active.toLong() + pending < limit

    fun price(value: String): Pair<String, Int>? {
      val p = value.split('-')
      if (p.size != 2 || p[0].isEmpty()) return null
      val amount = p[1].toIntOrNull()?.takeIf { it > 0 } ?: return null
      return p[0] to amount
    }

    fun signId(line: String): Int? =
        Regex("^\\[CS](\\d{1,3})$").matchEntire(line)?.groupValues?.get(1)?.toIntOrNull()?.takeIf {
          it in 1..999
        }

    fun blocksFromFront(
        facingX: Double,
        facingZ: Double,
        attackX: Double,
        attackZ: Double,
    ): Boolean = facingX * attackX + facingZ * attackZ >= 0
  }
}

/** Device ownership is stored on entities/items; placed heads use a runtime-only journal. */
internal class WeaponDevices(
    private val plugin: JavaPlugin,
    private val catalog: WeaponCatalog,
    private val effects: WeaponEffects,
    private val schedule: (Long, () -> Unit) -> Unit,
) : Listener {
  private val ownerKey = NamespacedKey(plugin, "device_owner")
  private val deviceKey = NamespacedKey(plugin, "device_weapon")
  private val remoteKey = NamespacedKey(plugin, "remote_nonce")
  private val bombKey = NamespacedKey(plugin, "item_bomb")
  private val sessionKey = NamespacedKey(plugin, "device_session")
  private val sessions = mutableMapOf<UUID, String>()
  private val file = File(plugin.dataFolder, "weapons-devices.yml")
  private val journal = YamlConfiguration().apply { if (file.exists()) load(file) }

  private data class Remote(
      val weapon: String,
      val owner: UUID,
      val location: Location,
      val nonce: String = UUID.randomUUID().toString(),
  )

  private val remotes = mutableListOf<Remote>()
  private val pendingRemote = mutableMapOf<Pair<UUID, String>, Int>()

  private data class Bomb(val weapon: String, val owner: UUID, var location: Location)

  private val bombs = mutableMapOf<UUID, Bomb>()
  private val dormant = mutableListOf<Map<String, Any>>()
  private var open = true

  init {
    journal.getConfigurationSection("devices")?.getKeys(false)?.forEach { key ->
      val path = "devices.$key"
      val world = journal.getString("$path.world")?.let { Bukkit.getWorld(UUID.fromString(it)) }
      if (world != null)
          remotes +=
              Remote(
                  journal.getString("$path.weapon")!!,
                  UUID.fromString(journal.getString("$path.owner")),
                  Location(
                      world,
                      journal.getDouble("$path.x"),
                      journal.getDouble("$path.y"),
                      journal.getDouble("$path.z"),
                  ),
                  journal.getString("$path.nonce") ?: UUID.randomUUID().toString(),
              )
      else journal.getConfigurationSection(path)?.getValues(false)?.let { dormant += it }
    }
    removeBombs()
    poll()
  }

  @EventHandler
  fun worldLoaded(event: org.bukkit.event.world.WorldLoadEvent) {
    dormant
        .filter { it["world"] == event.world.uid.toString() }
        .toList()
        .forEach { data ->
          remotes +=
              Remote(
                  data["weapon"].toString(),
                  UUID.fromString(data["owner"].toString()),
                  Location(
                      event.world,
                      (data["x"] as Number).toDouble(),
                      (data["y"] as Number).toDouble(),
                      (data["z"] as Number).toDouble(),
                  ),
                  data["nonce"]?.toString() ?: UUID.randomUUID().toString(),
              )
          dormant.remove(data)
        }
  }

  private fun disabled(world: org.bukkit.World): Boolean =
      world.name in catalog.general.getStringList("Disabled_Worlds")

  private fun info(w: WeaponDefinition) =
      DeviceInfo.parse(w.s("Explosive_Devices.Device_Type"), w.s("Explosive_Devices.Device_Info"))

  private fun owned(item: ItemStack): UUID? =
      item.itemMeta?.persistentDataContainer?.get(ownerKey, PersistentDataType.STRING)?.let {
        runCatching { UUID.fromString(it) }.getOrNull()
      }

  private fun mark(entity: Entity, w: WeaponDefinition, owner: Player) {
    entity.persistentDataContainer.set(
        ownerKey,
        PersistentDataType.STRING,
        owner.uniqueId.toString(),
    )
    entity.persistentDataContainer.set(deviceKey, PersistentDataType.STRING, w.id)
  }

  private fun save() {
    journal.set("devices", null)
    remotes.forEachIndexed { index, r ->
      val p = "devices.$index"
      journal.set("$p.weapon", r.weapon)
      journal.set("$p.owner", r.owner.toString())
      journal.set("$p.nonce", r.nonce)
      journal.set("$p.world", r.location.world.uid.toString())
      journal.set("$p.x", r.location.x)
      journal.set("$p.y", r.location.y)
      journal.set("$p.z", r.location.z)
    }
    dormant.forEachIndexed { index, data ->
      journal.createSection("devices.${remotes.size + index}", data)
    }
    file.parentFile.mkdirs()
    val temporary = Files.createTempFile(file.parentFile.toPath(), "devices-", ".tmp")
    try {
      Files.writeString(temporary, journal.saveToString())
      try {
        Files.move(
            temporary,
            file.toPath(),
            StandardCopyOption.ATOMIC_MOVE,
            StandardCopyOption.REPLACE_EXISTING,
        )
      } catch (_: AtomicMoveNotSupportedException) {
        Files.move(temporary, file.toPath(), StandardCopyOption.REPLACE_EXISTING)
      }
    } finally {
      Files.deleteIfExists(temporary)
    }
  }

  private fun trigger(
      w: WeaponDefinition,
      ownerId: UUID,
      location: Location,
      victim: LivingEntity? = null,
  ): Boolean {
    if (disabled(location.world)) return false
    val owner = Bukkit.getPlayer(ownerId)
    effects.sounds(w.s("Explosive_Devices.Sounds_Trigger"), location)
    if (owner != null) {
      effects.sounds(w.s("Explosive_Devices.Sounds_Alert_Placer"), owner.location)
      fun message(path: String): String =
          org.bukkit.ChatColor.translateAlternateColorCodes(
              '&',
              w.s(path).replace("<shooter>", owner.name).replace("<victim>", victim?.name ?: ""),
          )
      if (w.s("Explosive_Devices.Message_Trigger_Placer").isNotEmpty())
          owner.sendMessage(message("Explosive_Devices.Message_Trigger_Placer"))
      if (victim is Player && w.s("Explosive_Devices.Message_Trigger_Victim").isNotEmpty())
          victim.sendMessage(message("Explosive_Devices.Message_Trigger_Victim"))
    }
    effects.impactDevice(w, ownerId, location)
    return true
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun interact(event: PlayerInteractEvent) {
    if (disabled(event.player.world)) return
    if (
        event.hand != EquipmentSlot.HAND ||
            event.useItemInHand() == org.bukkit.event.Event.Result.DENY
    )
        return
    val sign = event.clickedBlock?.state as? Sign
    if (event.action == Action.RIGHT_CLICK_BLOCK && sign != null) {
      val id = DeviceInfo.signId(sign.getLine(0))
      val w =
          catalog.definitions.values.singleOrNull {
            it.b("SignShops.Enable") && it.i("SignShops.Sign_Gun_ID") == id
          }
      if (w != null) {
        event.isCancelled = true
        buy(event.player, w)
        return
      }
    }
    val item = event.item ?: return
    val w = catalog.identify(item) ?: return
    if (!w.b("Explosive_Devices.Enable")) return
    val left = event.action == Action.LEFT_CLICK_AIR || event.action == Action.LEFT_CLICK_BLOCK
    val right = event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK
    if (!left && !right) return
    val info = info(w)
    val player = event.player
    when (info.type) {
      "trap" ->
          if (left) {
            val meta = item.itemMeta
            meta.persistentDataContainer.set(
                ownerKey,
                PersistentDataType.STRING,
                player.uniqueId.toString(),
            )
            item.itemMeta = meta
            player.inventory.setItemInMainHand(item)
            event.isCancelled = true
            effects.sounds(w.s("Explosive_Devices.Sounds_Deploy"), player.location)
          }
      "landmine" ->
          if (right && event.clickedBlock != null) {
            event.isCancelled = true
            val location =
                event.clickedBlock!!.getRelative(event.blockFace).location.add(0.5, 0.1, 0.5)
            val cart = location.world.spawn(location, Minecart::class.java)
            // Region plugins receive the same cancellable placement hook as ordinary minecarts.
            val place =
                EntityPlaceEvent(
                    cart,
                    player,
                    event.clickedBlock!!,
                    event.blockFace,
                    EquipmentSlot.HAND,
                )
            Bukkit.getPluginManager().callEvent(place)
            if (place.isCancelled) {
              cart.remove()
              return
            }
            mark(cart, w, player)
            val fuse =
                location.world.dropItem(
                    location,
                    ItemStack(WeaponMaterials.resolve(info.before) ?: Material.TNT),
                )
            fuse.pickupDelay = Int.MAX_VALUE
            fuse.isUnlimitedLifetime = true
            fuse.isPersistent = true
            fuse.isInvulnerable = true
            cart.addPassenger(fuse)
            event.isCancelled = true
            deployed(w, player, item)
          }
      "remote" ->
          if (left) {
            event.isCancelled = true
            remotes
                .filter { it.owner == player.uniqueId && it.weapon == w.id }
                .toList()
                .forEach { r ->
                  if (!isRemote(r)) remotes.remove(r)
                  else if (trigger(w, r.owner, r.location)) {
                    triggeredHead(w, r)
                    remotes.remove(r)
                  }
                }
            save()
          } // Right-click placement proceeds through BlockPlaceEvent so protection plugins can veto
      // it.
      "itembomb" -> {
        event.isCancelled = true
        bombs.entries.removeIf { (id, state) ->
          Bukkit.getEntity(id) == null &&
              state.location.world.isChunkLoaded(
                  state.location.blockX shr 4,
                  state.location.blockZ shr 4,
              )
        }
        val ownedBombs =
            bombs.filterValues { it.owner == player.uniqueId && it.weapon == w.id }.toMap()
        if (left)
            ownedBombs.forEach { (id, state) ->
              val bomb = loadedBomb(id, state)
              if (bomb == null) {
                bombs.remove(id)
                return@forEach
              }
              if (
                  disabled(bomb.world) ||
                      bomb.persistentDataContainer.get(bombKey, PersistentDataType.BYTE) !=
                          1.toByte()
              )
                  return@forEach
              bomb.persistentDataContainer.set(bombKey, PersistentDataType.BYTE, 2)
              bomb.itemStack =
                  ItemStack(WeaponMaterials.resolve(info.after) ?: Material.RED_TERRACOTTA)
              trigger(w, player.uniqueId, bomb.location)
              schedule(w.i("Explosions.Explosion_Delay").toLong()) {
                loadedBomb(id, state)?.remove()
                bombs.remove(id)
              }
            }
        else if (right && DeviceInfo.canDeploy(ownedBombs.size, 0, info.limit)) {
          val bomb =
              player.world.dropItem(
                  player.eyeLocation,
                  ItemStack(WeaponMaterials.resolve(info.before) ?: Material.WHITE_TERRACOTTA),
              )
          bombs[bomb.uniqueId] = Bomb(w.id, player.uniqueId, bomb.location.clone())
          mark(bomb, w, player)
          bomb.persistentDataContainer.set(bombKey, PersistentDataType.BYTE, 1)
          bomb.persistentDataContainer.set(
              sessionKey,
              PersistentDataType.STRING,
              sessions.getOrPut(player.uniqueId) { UUID.randomUUID().toString() },
          )
          bomb.isPersistent = true
          bomb.isUnlimitedLifetime = true
          bomb.pickupDelay = Int.MAX_VALUE
          bomb.velocity =
              player.eyeLocation.direction.multiply(
                  info.speed *
                      plugin.config.getDouble("weapons.compatibility.projectile-speed-scale", 0.1)
              )
          deployed(w, player, item)
        }
      }
    }
  }

  private fun loadedBomb(id: UUID, state: Bomb): Item? {
    val existing = Bukkit.getEntity(id) as? Item
    if (existing != null) {
      state.location = existing.location.clone()
      return existing
    }
    state.location.chunk.load()
    return (Bukkit.getEntity(id) as? Item)?.takeIf {
      it.persistentDataContainer.get(deviceKey, PersistentDataType.STRING) == state.weapon
    }
  }

  private fun isRemote(r: Remote): Boolean {
    val skull = r.location.block.state as? org.bukkit.block.Skull ?: return false
    return skull.persistentDataContainer.get(deviceKey, PersistentDataType.STRING) == r.weapon &&
        skull.persistentDataContainer.get(ownerKey, PersistentDataType.STRING) ==
            r.owner.toString() &&
        skull.persistentDataContainer.get(remoteKey, PersistentDataType.STRING) == r.nonce
  }

  private fun deployed(w: WeaponDefinition, player: Player, item: ItemStack) {
    effects.sounds(w.s("Explosive_Devices.Sounds_Deploy"), player.location)
    if (w.b("Extras.One_Time_Use")) {
      item.amount -= 1
      player.inventory.setItemInMainHand(item)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun place(event: BlockPlaceEvent) {
    val w = catalog.identify(event.itemInHand) ?: return
    if (!w.b("Explosive_Devices.Enable") || info(w).type != "remote") return
    if (disabled(event.block.world)) {
      event.isCancelled = true
      return
    }
    val info = info(w)
    val owner = event.player.uniqueId
    val key = owner to w.id
    val active =
        remotes.count { it.owner == owner && it.weapon == w.id } +
            dormant.count { it["owner"] == owner.toString() && it["weapon"] == w.id }
    if (!DeviceInfo.canDeploy(active, pendingRemote[key] ?: 0, info.limit)) {
      event.isCancelled = true
      return
    }
    pendingRemote[key] = (pendingRemote[key] ?: 0) + 1
    val controller = event.itemInHand.clone().apply { amount = 1 }
    // Keep journal creation after all protection listeners have accepted this block.
    schedule(1) {
      pendingRemote[key] = (pendingRemote[key] ?: 1) - 1
      if (!event.isCancelled && event.block.type == w.material) {
        event.block.type = Material.PLAYER_HEAD
        val remote = Remote(w.id, owner, event.block.location)
        val skull = event.block.state as org.bukkit.block.Skull
        skull.persistentDataContainer.set(deviceKey, PersistentDataType.STRING, w.id)
        skull.persistentDataContainer.set(ownerKey, PersistentDataType.STRING, owner.toString())
        skull.persistentDataContainer.set(remoteKey, PersistentDataType.STRING, remote.nonce)
        skull.update()
        remotes += remote
        save()
        if (!w.b("Extras.One_Time_Use") && event.player.gameMode != GameMode.CREATIVE) {
          event.player.inventory.addItem(controller).values.forEach {
            event.player.world.dropItemNaturally(event.player.location, it)
          }
        }
        effects.sounds(w.s("Explosive_Devices.Sounds_Deploy"), event.block.location)
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun breakBlock(event: BlockBreakEvent) {
    val sign = event.block.state as? Sign
    if (
        sign != null &&
            DeviceInfo.signId(sign.getLine(0)) != null &&
            (event.player.gameMode != GameMode.CREATIVE ||
                !event.player.hasPermission("oyasaigames.weapons.admin"))
    ) {
      event.isCancelled = true
      return
    }
    val r = remotes.firstOrNull { it.location == event.block.location } ?: return
    val w = catalog.definitions[r.weapon.lowercase()] ?: return
    if (!isRemote(r)) {
      remotes.remove(r)
      save()
      return
    }
    if (r.owner == event.player.uniqueId) {
      event.isDropItems = false
      schedule(1) {
        if (!event.isCancelled) {
          remotes.remove(r)
          save()
          event.player.sendMessage(
              org.bukkit.ChatColor.translateAlternateColorCodes(
                  '&',
                  w.s("Explosive_Devices.Message_Disarm"),
              )
          )
        }
      }
    } else {
      event.isCancelled = true
      if (trigger(w, r.owner, r.location, event.player)) {
        triggeredHead(w, r)
        remotes.remove(r)
        save()
      }
    }
  }

  private fun triggeredHead(w: WeaponDefinition, r: Remote) {
    val skull = r.location.block.state as? org.bukkit.block.Skull
    if (skull != null) {
      skull.setOwningPlayer(Bukkit.getOfflinePlayer(info(w).after))
      skull.persistentDataContainer.set(deviceKey, PersistentDataType.STRING, w.id)
      skull.update()
    }
    schedule(w.i("Explosions.Explosion_Delay").toLong()) {
      if (isRemote(r)) r.location.block.type = Material.AIR
    }
  }

  private fun poll() {
    if (!open) return
    // ponytail: scans loaded minecarts; index by chunk if deployed mine counts become large.
    Bukkit.getWorlds().forEach { world ->
      world.getEntitiesByClass(Minecart::class.java).forEach { cart ->
        val w =
            cart.persistentDataContainer.get(deviceKey, PersistentDataType.STRING)?.let {
              catalog.definitions[it.lowercase()]
            } ?: return@forEach
        val owner =
            cart.persistentDataContainer.get(ownerKey, PersistentDataType.STRING)?.let {
              UUID.fromString(it)
            } ?: return@forEach
        val victim =
            cart.getNearbyEntities(0.6, 0.8, 0.6).filterIsInstance<LivingEntity>().firstOrNull {
              it.uniqueId != owner
            }
        if (victim != null && trigger(w, owner, cart.location, victim)) removeMine(cart)
      }
    }
    schedule(2) { poll() }
  }

  private fun removeMine(cart: Vehicle) {
    cart.passengers.forEach { it.remove() }
    cart.remove()
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun mineDamage(event: VehicleDamageEvent) {
    if (disabled(event.vehicle.world) || !event.vehicle.persistentDataContainer.has(deviceKey))
        return
    event.damage = 0.0
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun mineDamageAccepted(event: VehicleDamageEvent) {
    if (disabled(event.vehicle.world)) return
    val w =
        event.vehicle.persistentDataContainer.get(deviceKey, PersistentDataType.STRING)?.let {
          catalog.definitions[it.lowercase()]
        } ?: return
    val owner =
        event.vehicle.persistentDataContainer.get(ownerKey, PersistentDataType.STRING)?.let {
          UUID.fromString(it)
        } ?: return
    if (trigger(w, owner, event.vehicle.location, event.attacker as? LivingEntity))
        removeMine(event.vehicle)
  }

  private fun trap(
      item: ItemStack,
      location: Location,
      flag: Int,
      victim: LivingEntity? = null,
  ): Boolean {
    val w = catalog.identify(item) ?: return false
    if (!w.b("Explosive_Devices.Enable") || w.s("Explosive_Devices.Device_Type") != "trap")
        return false
    val owner = owned(item) ?: return false
    val info = info(w)
    if (!info.flags[flag] || victim?.uniqueId == owner || !trigger(w, owner, location, victim))
        return false
    if (!info.flags[3] && flag != 2) item.amount -= 1
    return true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun pickup(event: EntityPickupItemEvent) {
    val item = event.item.itemStack
    if (trap(item, event.item.location, 1, event.entity)) {
      event.isCancelled = true
      if (item.amount == 0) event.item.remove() else event.item.itemStack = item
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun chest(event: InventoryOpenEvent) {
    val location = event.inventory.location ?: return
    for (slot in 0 until event.inventory.size) {
      val item = event.inventory.getItem(slot) ?: continue
      if (trap(item, location, 0, event.player as? LivingEntity)) {
        event.isCancelled = true
        event.inventory.setItem(slot, item)
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun dispense(event: BlockDispenseEvent) {
    if (trap(event.item, event.block.location, 2)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun plate(event: PlayerInteractEvent) {
    val block = event.clickedBlock ?: return
    if (event.action != Action.PHYSICAL || !block.type.name.endsWith("PRESSURE_PLATE")) return
    pressurePlate(block, event.player)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun mobPlate(event: EntityInteractEvent) {
    if (event.block.type.name.endsWith("PRESSURE_PLATE"))
        pressurePlate(event.block, event.entity as? LivingEntity)
  }

  private fun pressurePlate(block: org.bukkit.block.Block, victim: LivingEntity?) {
    block.world
        .getNearbyEntities(block.location, 4.0, 4.0, 4.0)
        .filterIsInstance<ItemFrame>()
        .forEach { frame ->
          if (
              frame.location.distanceSquared(block.location) <= 16 &&
                  trap(frame.item, block.location, 2, victim) &&
                  !info(catalog.identify(frame.item)!!).flags[3]
          )
              frame.setItem(ItemStack(Material.AIR))
        }
  }

  @EventHandler(ignoreCancelled = true)
  fun despawn(event: ItemDespawnEvent) {
    val w = catalog.identify(event.entity.itemStack) ?: return
    if (
        w.b("Explosive_Devices.Enable") &&
            w.s("Explosive_Devices.Device_Type") == "trap" &&
            owned(event.entity.itemStack) != null &&
            info(w).flags[4]
    )
        event.isCancelled = true
  }

  @EventHandler
  fun entitiesUnloaded(event: org.bukkit.event.world.EntitiesUnloadEvent) {
    event.entities.forEach { entity -> bombs[entity.uniqueId]?.location = entity.location.clone() }
  }

  @EventHandler
  fun entitiesLoaded(event: org.bukkit.event.world.EntitiesLoadEvent) {
    event.entities
        .filter { entity ->
          val owner =
              entity.persistentDataContainer.get(ownerKey, PersistentDataType.STRING)?.let {
                UUID.fromString(it)
              }
          entity.persistentDataContainer.has(bombKey) &&
              (entity.persistentDataContainer.get(sessionKey, PersistentDataType.STRING) !=
                  sessions[owner] || entity.uniqueId !in bombs)
        }
        .forEach { it.remove() }
  }

  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    sessions.remove(event.player.uniqueId)
    removeBombs(event.player.uniqueId)
  }

  private fun removeBombs(owner: UUID? = null) {
    bombs
        .filterValues { owner == null || it.owner == owner }
        .toMap()
        .forEach { (id, state) ->
          loadedBomb(id, state)?.remove()
          bombs.remove(id)
        }
    Bukkit.getWorlds().forEach {
      it.getEntitiesByClass(Item::class.java)
          .filter { entity ->
            entity.persistentDataContainer.has(bombKey) &&
                (owner == null ||
                    entity.persistentDataContainer.get(ownerKey, PersistentDataType.STRING) ==
                        owner.toString())
          }
          .forEach { entity -> entity.remove() }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun shield(event: EntityDamageByEntityEvent) {
    if (disabled(event.entity.world)) return
    val player = event.entity as? Player ?: return
    val item = player.inventory.itemInMainHand
    val w = catalog.identify(item) ?: return
    if (!w.b("Riot_Shield.Enable")) return
    if (
        event.cause !in
            setOf(
                EntityDamageEvent.DamageCause.ENTITY_ATTACK,
                EntityDamageEvent.DamageCause.ENTITY_SWEEP_ATTACK,
                EntityDamageEvent.DamageCause.PROJECTILE,
            )
    )
        return
    val projectile = event.damager is Projectile
    if (!projectile && event.damager !is LivingEntity) return
    val direction = player.location.direction
    val attack = event.damager.location.toVector().subtract(player.location.toVector())
    if (!DeviceInfo.blocksFromFront(direction.x, direction.z, attack.x, attack.z)) return
    event.isCancelled = true
    effects.sounds(w.s("Riot_Shield.Sounds_Blocked"), player.location)
    val meta = item.itemMeta as? Damageable ?: return
    meta.damage += (w.d("Riot_Shield.Durability_Loss_Per_Hit")).toInt()
    if (meta.damage >= item.type.maxDurability) {
      item.amount -= 1
      effects.sounds(w.s("Riot_Shield.Sounds_Break"), player.location)
    } else item.itemMeta = meta
    player.inventory.setItemInMainHand(item)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun sign(event: SignChangeEvent) {
    val id = DeviceInfo.signId(event.getLine(0) ?: "") ?: return
    if (
        catalog.definitions.values.none {
          it.b("SignShops.Enable") && it.i("SignShops.Sign_Gun_ID") == id
        }
    )
        return
    if (disabled(event.block.world) || !event.player.hasPermission("oyasaigames.weapons.admin"))
        event.isCancelled = true
  }

  private fun buy(player: Player, w: WeaponDefinition) {
    if (disabled(player.world) || player.gameMode == GameMode.CREATIVE) return
    val (id, amount) = DeviceInfo.price(w.s("SignShops.Price")) ?: return
    val material = WeaponMaterials.resolve(id) ?: return
    val price = ItemStack(material, amount)
    if (!player.inventory.containsAtLeast(price, amount) || player.inventory.firstEmpty() < 0)
        return
    player.inventory.removeItem(price)
    player.inventory.addItem(catalog.create(w))
  }

  fun close() {
    open = false
    removeBombs()
    save()
  }
}
