package icu.oyasai.games.weapons

import java.util.IdentityHashMap
import java.util.Locale
import java.util.UUID
import kotlin.math.ceil
import kotlin.math.max
import kotlin.math.min
import kotlin.random.Random
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Particle
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockDamageEvent
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.entity.ProjectileHitEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.*
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.potion.PotionEffect
import org.bukkit.potion.PotionEffectType
import org.bukkit.util.Vector

/** Only server ticks govern firing and reloading; wall-clock time never changes PvP rates. */
internal class WeaponCombat(
    private val plugin: JavaPlugin,
    private val catalog: WeaponCatalog,
    private val effects: WeaponEffects,
    private val schedule: (Long, () -> Unit) -> Unit,
) : Listener {
  private data class Bullet(val weapon: WeaponDefinition, val player: Player, val born: Int)

  private val bullets = mutableMapOf<UUID, Bullet>()
  private val thrown = mutableListOf<Item>()
  private val cooldown = mutableMapOf<String, Int>()
  private val busy = mutableMapOf<UUID, Int>()
  private val firingGeneration = mutableMapOf<UUID, Int>()
  private val zoomed = mutableMapOf<UUID, Pair<PotionEffect?, PotionEffect?>>()
  private val auto = mutableMapOf<String, Int>()
  private val autoStarted = mutableSetOf<String>()
  private val inventoryDropping = mutableSetOf<UUID>()
  private val leftAmmoKey = NamespacedKey(plugin, "weapon_left_ammo")
  private val attachmentKey = NamespacedKey(plugin, "weapon_attachment")
  private val attachmentAmmoKey = NamespacedKey(plugin, "weapon_attachment_ammo")
  private val pendingDamage = mutableMapOf<UUID, WeaponHit>()
  private val pendingEvents = IdentityHashMap<EntityDamageByEntityEvent, WeaponHit>()

  private fun weapon(player: Player): WeaponDefinition? {
    val item = player.inventory.itemInMainHand
    val main = catalog.identify(item) ?: return null
    val active = item.itemMeta.persistentDataContainer.get(attachmentKey, PersistentDataType.STRING)
    return if (active != null && main.s("Item_Information.Attachments.Info").equals(active, true))
        catalog.definitions[active.lowercase(Locale.ROOT)] ?: main
    else main
  }

  private var generation = 0
  private var applyingDamage = false
  private var closed = false

  private fun now() = Bukkit.getCurrentTick()

  private fun token(player: Player, w: WeaponDefinition, side: Boolean = false) =
      "${player.uniqueId}:${w.id}:${if (side) "left" else "right"}"

  @EventHandler(priority = EventPriority.HIGH)
  fun interact(event: PlayerInteractEvent) {
    if (
        closed ||
            event.hand != EquipmentSlot.HAND ||
            event.useItemInHand() == org.bukkit.event.Event.Result.DENY
    )
        return
    val player = event.player
    val main = catalog.identify(event.item) ?: return
    if (player.world.name in catalog.general.getStringList("Disabled_Worlds")) return
    val w = weapon(player) ?: return
    if (w.b("Explosive_Devices.Enable") || w.b("Riot_Shield.Enable")) return
    val right = event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK
    val left = event.action == Action.LEFT_CLICK_AIR || event.action == Action.LEFT_CLICK_BLOCK
    if (!right && !left) return
    if (right && w.b("Shooting.Cancel_Right_Click_Interactions")) {
      event.setUseInteractedBlock(org.bukkit.event.Event.Result.DENY)
      event.setUseItemInHand(org.bukkit.event.Event.Result.DENY)
    }
    if (left && w.b("Shooting.Cancel_Left_Click_Block_Damage")) event.isCancelled = true
    if (w.b("Item_Information.Melee_Mode")) return
    val dual = w.b("Shooting.Dual_Wield")
    if (!dual && right != main.b("Shooting.Right_Click_To_Shoot")) {
      if (main.s("Item_Information.Attachments.Type").equals("main", true)) {
        toggleAttachment(player, main)
        return
      }
      if (w.b("Scope.Enable")) toggleScope(player, w)
      return
    }
    if (w.b("Fully_Automatic.Enable") && !w.b("Burstfire.Enable")) {
      val key = token(player, w, dual && left)
      val observed = WeaponObservedOverrides.forWeapon(w.id)
      auto[key] = now() + (observed?.inputHoldTicks ?: 5)
      if (autoStarted.add(key)) {
        val stamp = firingGeneration[player.uniqueId] ?: 0
        if (observed == null) automatic(player, w, dual && left, key, 0, stamp)
        else schedule(observed.firstShotDelay) { automatic(player, w, dual && left, key, 0, stamp) }
      }
    } else trigger(player, w, dual && left)
  }

  private fun automatic(
      player: Player,
      w: WeaponDefinition,
      side: Boolean,
      key: String,
      shot: Int,
      firingStamp: Int,
  ) {
    // A cancelled sequence must not remove a newer sequence for the same weapon.
    if ((firingGeneration[player.uniqueId] ?: 0) != firingStamp) return
    if (closed || !player.isOnline || (auto[key] ?: -1) < now() || weapon(player)?.id != w.id) {
      auto.remove(key)
      autoStarted.remove(key)
      return
    }
    val observed = WeaponObservedOverrides.forWeapon(w.id)
    if (observed != null) {
      if (observed.shotDue(now())) trigger(player, w, side)
      schedule(1) { automatic(player, w, side, key, shot + 1, firingStamp) }
      return
    }
    trigger(player, w, side)
    val delay =
        automaticShotTick(shot + 1, w.i("Fully_Automatic.Fire_Rate")) -
            automaticShotTick(shot, w.i("Fully_Automatic.Fire_Rate"))
    schedule(delay.toLong()) { automatic(player, w, side, key, shot + 1, firingStamp) }
  }

  private fun trigger(player: Player, w: WeaponDefinition, side: Boolean = false) {
    val key = token(player, w, side)
    if (now() < (cooldown[key] ?: 0) || busy.containsKey(player.uniqueId)) return
    if (!ready(player, w)) return
    val count = if (w.b("Burstfire.Enable")) max(1, w.i("Burstfire.Shots_Per_Burst")) else 1
    val burstDelay = max(0, w.i("Burstfire.Delay_Between_Shots_In_Burst"))
    cooldown[key] = now() + max(1, shotDelay(w))
    val firingStamp = firingGeneration[player.uniqueId] ?: 0
    val slot = player.inventory.heldItemSlot
    repeat(count) { index ->
      val fire = {
        if (
            !closed &&
                player.isOnline &&
                sameFiringSequence(
                    firingStamp,
                    firingGeneration[player.uniqueId] ?: 0,
                    slot,
                    player.inventory.heldItemSlot,
                ) &&
                !busy.containsKey(player.uniqueId) &&
                weapon(player)?.id == w.id &&
                ready(player, w)
        ) {
          if (consume(player, w, side)) {
            shoot(player, w)
            actionAfterShot(player, w, side)
          }
        }
      }
      if (index == 0 || burstDelay == 0) fire() else schedule((index * burstDelay).toLong(), fire)
    }
  }

  private fun ready(player: Player, w: WeaponDefinition): Boolean {
    if (player.world.name in catalog.general.getStringList("Disabled_Worlds")) return false
    val main = catalog.identify(player.inventory.itemInMainHand) ?: return false
    for (group in
        main
            .s("Item_Information.Inventory_Control")
            .split(',')
            .map(String::trim)
            .filter(String::isNotEmpty)) {
      val settings = catalog.general.getConfigurationSection("Inventory_Control.$group") ?: continue
      val count =
          (0..8).count { slot ->
            catalog
                .identify(player.inventory.getItem(slot))
                ?.s("Item_Information.Inventory_Control")
                ?.split(',')
                ?.map(String::trim)
                ?.contains(group) == true
          }
      if (count > settings.getInt("Limit")) {
        player.sendMessage(color(settings.getString("Message_Exceeded").orEmpty()))
        effects.sounds(settings.getString("Sounds_Exceeded").orEmpty(), player.location)
        return false
      }
    }
    if (w.b("Extras.Disable_Underwater") && player.eyeLocation.block.type == Material.WATER)
        return false
    if (
        !w.b("Shooting.Dual_Wield") &&
            w.b("Scope.Enable") &&
            w.b("Scope.Zoom_Before_Shooting") &&
            !zoomed.containsKey(player.uniqueId)
    )
        return false
    return true
  }

  private fun rounds(item: ItemStack, w: WeaponDefinition, side: Boolean = false): Int {
    val key = if (w.accessory) attachmentAmmoKey else if (side) leftAmmoKey else catalog.ammoKey
    return item.itemMeta.persistentDataContainer.get(key, PersistentDataType.INTEGER)
        ?: (if (!w.accessory) WeaponNames.rounds(item.itemMeta.displayName, side) else null)
        ?: if (w.config.contains("Reload.Starting_Amount")) w.i("Reload.Starting_Amount")
        else w.i("Reload.Reload_Amount")
  }

  private fun setRounds(
      item: ItemStack,
      w: WeaponDefinition,
      count: Int,
      side: Boolean = false,
      reloading: Boolean = false,
  ) {
    val meta = item.itemMeta
    meta.persistentDataContainer.set(
        if (w.accessory) attachmentAmmoKey else if (side) leftAmmoKey else catalog.ammoKey,
        PersistentDataType.INTEGER,
        max(0, count),
    )
    val main = catalog.identify(item) ?: w
    meta.persistentDataContainer.set(catalog.key, PersistentDataType.STRING, main.id)
    val name = color(main.s("Item_Information.Item_Name"))
    val action =
        meta.persistentDataContainer.get(catalog.actionKey, PersistentDataType.STRING)
            ?: if (main.s("Firearm_Action.Type").isNotEmpty())
                WeaponNames.actionMarker(meta.displayName) ?: "▪"
            else null
    if (action != null)
        meta.persistentDataContainer.set(catalog.actionKey, PersistentDataType.STRING, action)
    meta.setDisplayName(
        weaponAmmoName(
            name,
            action,
            count,
            if (w.b("Shooting.Dual_Wield")) (if (side) count else rounds(item, w, true)) else null,
            if (w.b("Shooting.Dual_Wield") && side) rounds(item, w) else count,
            reloading,
        )
    )
    item.itemMeta = meta
  }

  private fun setAction(
      item: ItemStack,
      w: WeaponDefinition,
      value: String,
      reloading: Boolean = false,
  ) {
    val meta = item.itemMeta
    meta.persistentDataContainer.set(catalog.actionKey, PersistentDataType.STRING, value)
    item.itemMeta = meta
    if (w.b("Reload.Enable")) setRounds(item, w, rounds(item, w), reloading = reloading)
  }

  private fun consume(player: Player, w: WeaponDefinition, side: Boolean): Boolean {
    val item = player.inventory.itemInMainHand
    if (
        requiresInventoryAmmo(
            w.b("Ammo.Enable"),
            w.b("Reload.Enable"),
            w.b("Reload.Take_Ammo_On_Reload"),
        )
    ) {
      if (ammoCount(player, w) == 0) {
        effects.sounds(w.s("Ammo.Sounds_Shoot_With_No_Ammo"), player.location)
        return false
      }
    }
    if (w.b("Reload.Enable")) {
      val count = rounds(item, w, side)
      if (count <= 0) {
        effects.sounds(w.s("Reload.Dual_Wield.Sounds_Shoot_With_No_Ammo"), player.location)
        reload(player, w)
        return false
      }
      setRounds(item, w, count - (WeaponObservedOverrides.forWeapon(w.id)?.ammoPerShot ?: 1), side)
      if (count == 1) {
        effects.sounds(w.s("Reload.Sounds_Out_Of_Ammo"), player.location)
      }
    }
    if (w.b("Extras.One_Time_Use")) item.amount--
    player.inventory.setItemInMainHand(item)
    return true
  }

  private fun ammoCount(player: Player, w: WeaponDefinition): Int =
      player.inventory.storageContents.filterNotNull().filter { isAmmo(it, w) }.sumOf { it.amount }

  private fun isAmmo(item: ItemStack, w: WeaponDefinition): Boolean =
      item.type == WeaponMaterials.resolve(w.s("Ammo.Ammo_Item_ID"))

  private fun takeAmmo(player: Player, w: WeaponDefinition, amount: Int): Int {
    var remaining = amount
    val contents = player.inventory.storageContents
    for (slot in contents.indices) {
      val item = contents[slot]
      if (item == null || !isAmmo(item, w)) continue
      val take = min(remaining, item.amount)
      item.amount -= take
      player.inventory.setItem(slot, if (item.amount == 0) null else item)
      remaining -= take
      if (remaining == 0) break
    }
    if (ammoCount(player, w) == 0) effects.sounds(w.s("Ammo.Sounds_Out_Of_Ammo"), player.location)
    return amount - remaining
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun drop(event: PlayerDropItemEvent) {
    // Clicking outside an open inventory is a normal drop, not the Q reload gesture.
    if (
        event.player.uniqueId in inventoryDropping ||
            event.player.openInventory.type != org.bukkit.event.inventory.InventoryType.CRAFTING
    )
        return
    val main = catalog.identify(event.itemDrop.itemStack) ?: return
    val active =
        event.itemDrop.itemStack.itemMeta.persistentDataContainer.get(
            attachmentKey,
            PersistentDataType.STRING,
        )
    val w = if (active == null) main else catalog.definitions[active.lowercase(Locale.ROOT)] ?: main
    if (!w.b("Reload.Enable")) return
    event.isCancelled = true
    // Inventory restoration from a cancelled Q drop happens after the event returns.
    schedule(1) { if (!closed) reload(event.player, w) }
  }

  fun reload(player: Player) {
    weapon(player)?.let { reload(player, it) }
  }

  fun reload(player: Player, w: WeaponDefinition) {
    if (closed || !w.b("Reload.Enable") || busy.containsKey(player.uniqueId)) return
    val item = player.inventory.itemInMainHand
    if (
        weapon(player)?.id != w.id ||
            player.world.name in catalog.general.getStringList("Disabled_Worlds")
    )
        return
    if (item.amount > 1 && catalog.general.getBoolean("Merged_Reload.Disable")) {
      player.sendMessage(color(catalog.general.getString("Merged_Reload.Message_Denied").orEmpty()))
      effects.sounds(
          catalog.general.getString("Merged_Reload.Sounds_Denied").orEmpty(),
          player.location,
      )
      return
    }
    val capacity = w.i("Reload.Reload_Amount")
    val dual = w.b("Shooting.Dual_Wield")
    val rightNeeded = capacity - rounds(item, w)
    val leftNeeded = if (dual) capacity - rounds(item, w, true) else 0
    if (rightNeeded <= 0 && leftNeeded <= 0) return
    val physical = w.b("Ammo.Enable") && w.b("Reload.Take_Ammo_On_Reload")
    if (physical && ammoCount(player, w) <= 0) {
      effects.sounds(w.s("Ammo.Sounds_Shoot_With_No_Ammo"), player.location)
      return
    }
    unzoom(player)
    cancelFiring(player)
    val stamp = ++generation
    busy[player.uniqueId] = stamp
    val slot = player.inventory.heldItemSlot
    val action =
        if (dual || w.accessory || w.b("Item_Information.Melee_Mode")) ""
        else reloadActionType(w.s("Firearm_Action.Type"))
    val open = if (action.isEmpty()) 0 else w.i("Firearm_Action.Open_Duration")
    val close = if (action.isEmpty()) 0 else w.i("Firearm_Action.Close_Duration")
    val single = dual && (rightNeeded <= 0 || leftNeeded <= 0)
    val duration =
        if (single) w.i("Reload.Dual_Wield.Single_Reload_Duration")
        else w.i("Reload.Reload_Duration")
    markReloading(item, true)
    if (action.isNotEmpty()) {
      val current =
          item.itemMeta.persistentDataContainer.get(catalog.actionKey, PersistentDataType.STRING)
              ?: "▪"
      setAction(item, w, reloadOpenSymbol(action, current), reloading = true)
      effects.sounds(w.s("Firearm_Action.Sound_Open"), player.location)
    }
    fun valid(): Boolean =
        !closed &&
            player.isOnline &&
            busy[player.uniqueId] == stamp &&
            player.inventory.heldItemSlot == slot &&
            weapon(player)?.id == w.id
    fun finish() {
      if (!valid()) return
      if (action.isNotEmpty()) {
        effects.sounds(w.s("Firearm_Action.Sound_Close"), player.location)
        setAction(player.inventory.itemInMainHand, w, "▪", reloading = true)
      }
      schedule(close.toLong()) {
        if (valid()) {
          busy.remove(player.uniqueId)
          markReloading(player.inventory.itemInMainHand, false)
          cooldown[token(player, w)] = now() + w.i("Firearm_Action.Close_Shoot_Delay")
          effects.reload(w, player)
        }
      }
    }
    fun load(side: Boolean): Boolean {
      val held = player.inventory.itemInMainHand
      val needed = capacity - rounds(held, w, side)
      if (needed <= 0) return false
      val count =
          reloadTransfer(
              needed,
              if (physical) ammoCount(player, w) else needed,
              physical && w.b("Reload.Take_Ammo_As_Magazine"),
              w.b("Reload.Reload_Bullets_Individually"),
          )
      if (count <= 0) return false
      if (physical) takeAmmo(player, w, if (w.b("Reload.Take_Ammo_As_Magazine")) 1 else count)
      setRounds(held, w, rounds(held, w, side) + count, side, reloading = true)
      player.inventory.setItemInMainHand(held)
      return true
    }
    fun step() {
      if (!valid()) return
      effects.sounds(
          w.s(if (single) "Reload.Dual_Wield.Sounds_Single_Reload" else "Reload.Sounds_Reloading"),
          player.location,
      )
      schedule(duration.toLong()) {
        if (valid()) {
          val loaded = load(false) or (dual && load(true))
          val held = player.inventory.itemInMainHand
          if (
              loaded &&
                  w.b("Reload.Reload_Bullets_Individually") &&
                  rounds(held, w) < capacity &&
                  (!physical || ammoCount(player, w) > 0)
          )
              step()
          else finish()
        }
      }
    }
    schedule(open.toLong()) { if (valid()) step() }
  }

  private fun actionAfterShot(player: Player, w: WeaponDefinition, side: Boolean) {
    if (w.b("Shooting.Dual_Wield") || w.accessory || w.b("Item_Information.Melee_Mode")) return
    val action = w.s("Firearm_Action.Type").lowercase()
    val item = player.inventory.itemInMainHand
    if (action == "slide" && rounds(item, w, side) == 0) setAction(item, w, "□")
    if (action !in setOf("bolt", "lever", "pump")) return
    val open = w.i("Firearm_Action.Open_Duration")
    val firingStamp = firingGeneration[player.uniqueId] ?: 0
    val slot = player.inventory.heldItemSlot
    fun valid(): Boolean =
        !closed &&
            player.isOnline &&
            weapon(player)?.id == w.id &&
            sameFiringSequence(
                firingStamp,
                firingGeneration[player.uniqueId] ?: 0,
                slot,
                player.inventory.heldItemSlot,
            )
    setAction(item, w, "□")
    effects.sounds(w.s("Firearm_Action.Sound_Open"), player.location)
    schedule(open.toLong()) {
      if (valid()) {
        setAction(player.inventory.itemInMainHand, w, "_")
        effects.sounds(w.s("Firearm_Action.Sound_Close"), player.location)
        schedule(w.i("Firearm_Action.Close_Duration").toLong()) {
          if (valid()) setAction(player.inventory.itemInMainHand, w, "▪")
        }
      }
    }
  }

  private fun shotDelay(w: WeaponDefinition): Int =
      firearmShotDelay(
          w.s("Firearm_Action.Type"),
          w.i("Shooting.Delay_Between_Shots"),
          w.i("Firearm_Action.Open_Duration"),
          w.i("Firearm_Action.Close_Duration"),
          w.i("Firearm_Action.Close_Shoot_Delay"),
          w.b("Shooting.Dual_Wield") || w.accessory,
      )

  private fun shoot(player: Player, w: WeaponDefinition) {
    thrown.removeAll { !it.isValid }
    effects.shoot(w, player)
    if (w.b("Shooting.Reset_Fall_Distance")) player.fallDistance = 0f
    if (!(player.isSneaking && w.b("Sneak.Enable") && w.b("Sneak.No_Recoil"))) {
      val observed = WeaponObservedOverrides.forWeapon(w.id)
      val dash = observed?.recoil(player.eyeLocation.direction)
      if (dash != null) player.velocity = dash
      else {
        val recoil =
            player.eyeLocation.direction.multiply(
                -w.d("Shooting.Recoil_Amount") *
                    plugin.config.getDouble("weapons.compatibility.recoil-scale", 0.1)
            )
        if (w.b("Abilities.No_Vertical_Recoil")) recoil.y = 0.0
        player.velocity = player.velocity.add(recoil)
      }
    }
    val spread =
        when {
          zoomed.containsKey(player.uniqueId) -> w.d("Scope.Zoom_Bullet_Spread")
          player.isSneaking && w.b("Sneak.Enable") -> w.d("Sneak.Bullet_Spread")
          else -> w.d("Shooting.Bullet_Spread")
        }
    repeat(max(0, w.i("Shooting.Projectile_Amount"))) {
      val direction =
          player.eyeLocation.direction
              .add(
                  Vector(
                      (Random.nextDouble() - .5) *
                          spread *
                          plugin.config.getDouble("weapons.compatibility.spread-scale", 0.1),
                      (Random.nextDouble() - .5) *
                          spread *
                          plugin.config.getDouble("weapons.compatibility.spread-scale", 0.1),
                      (Random.nextDouble() - .5) *
                          spread *
                          plugin.config.getDouble("weapons.compatibility.spread-scale", 0.1),
                  )
              )
              .normalize()
      val kind = w.s("Shooting.Projectile_Type").lowercase()
      if (kind == "energy") {
        energy(player, w, direction)
        return@repeat
      }
      if (kind == "grenade" || kind == "flare") {
        val material = WeaponMaterials.resolve(w.s("Shooting.Projectile_Subtype")) ?: return@repeat
        val item = player.world.dropItem(player.eyeLocation, ItemStack(material))
        item.pickupDelay = Int.MAX_VALUE
        item.velocity =
            direction.multiply(
                w.d("Shooting.Projectile_Speed") *
                    plugin.config.getDouble("weapons.compatibility.projectile-speed-scale", 0.1)
            )
        thrown.add(item)
        effects.sounds(w.s("Shooting.Sounds_Projectile"), item.location)
        effects.thrown(w, player, item)
        return@repeat
      }
      val type: Class<out Projectile> =
          when (kind) {
            "egg" -> Egg::class.java
            "fireball" -> SmallFireball::class.java
            else -> Snowball::class.java
          }
      val projectile = player.world.spawn(player.eyeLocation, type)
      projectile.shooter = player
      projectile.velocity =
          direction
              .clone()
              .multiply(
                  w.d("Shooting.Projectile_Speed") *
                      plugin.config.getDouble("weapons.compatibility.projectile-speed-scale", 0.1)
              )
      if (projectile is Snowball || projectile is Egg) projectile.setGravity(true)
      if (projectile is Fireball) {
        projectile.direction = direction
        projectile.yield = 0f
        projectile.setIsIncendiary(false)
      }
      if (w.b("Shooting.Projectile_Flames")) projectile.fireTicks = 1200
      projectile.persistentDataContainer.set(
          NamespacedKey(plugin, "weapon_projectile"),
          PersistentDataType.BYTE,
          1,
      )
      bullets[projectile.uniqueId] = Bullet(w, player, now())
      effects.sounds(w.s("Shooting.Sounds_Projectile"), projectile.location)
      val removal = w.s("Shooting.Removal_Or_Drag_Delay").split('-')
      if (removal.size == 2)
          schedule((removal[0].toLongOrNull() ?: 0)) {
            if (projectile.isValid) {
              if (removal[1].equals("true", true)) {
                bullets.remove(projectile.uniqueId)
                projectile.remove()
              } else projectile.velocity = projectile.velocity.multiply(.1)
            }
          }
      schedule(1200) {
        bullets.remove(projectile.uniqueId)
        if (projectile.isValid) projectile.remove()
      }
    }
  }

  private fun energy(player: Player, w: WeaponDefinition, direction: Vector) {
    val parts = w.s("Shooting.Projectile_Subtype").split('-')
    if (parts.size != 4) return
    val range = parts[0].toDoubleOrNull() ?: return
    val radius = parts[1].toDoubleOrNull() ?: return
    if (range <= 0) return
    val origin = player.eyeLocation
    val start = origin.toVector()
    var reachable = range
    if (!parts[2].equals("ALL", true)) {
      val allowance = parts[2].toIntOrNull() ?: 0
      var walls = 0
      var lastBlock: org.bukkit.block.Block? = null
      // A bounded centre-ray scan counts distinct solid blocks, not repeated samples of one block.
      var distance = 0.0
      while (distance <= range) {
        val block = origin.clone().add(direction.clone().multiply(distance)).block
        if (!block.isPassable && block != lastBlock) {
          walls++
          if (walls > allowance) {
            reachable = distance
            break
          }
        }
        lastBlock = block
        distance += .1
      }
    }
    val observed = WeaponObservedOverrides.forWeapon(w.id)
    val bounds = range + radius + if (observed?.blockEnergy == true) .5 else 0.0
    val candidates =
        player.world
            .getNearbyEntities(origin, bounds, bounds, bounds)
            .filter {
              (it is LivingEntity ||
                  (it is Minecart &&
                      it.persistentDataContainer.has(NamespacedKey(plugin, "device_weapon")))) &&
                  it != player &&
                  !it.isDead
            }
            .mapNotNull { entity ->
              val box = entity.boundingBox
              val center = box.center.subtract(start)
              val intersection =
                  if (observed?.blockEnergy == true) WeaponObservedOverrides::energyIntersection
                  else ::energyIntersection
              intersection(
                      center,
                      Vector(box.widthX / 2, box.height / 2, box.widthZ / 2),
                      direction,
                      radius,
                      reachable,
                  )
                  ?.let { entity to it }
            }
            .sortedBy { it.second }
    if (candidates.isEmpty() || reachable < range)
        effects.impact(w, player, origin.clone().add(direction.clone().multiply(reachable)), false)
    val limit = parts[3].toIntOrNull() ?: 0
    for ((victim, distance) in if (limit > 0) candidates.take(limit) else candidates) {
      val point = origin.clone().add(direction.clone().multiply(distance))
      if (victim is LivingEntity)
          damage(w, player, victim, point, 0, point.y >= victim.eyeLocation.y - .25)
      else hitMine(victim, player)
      effects.impact(w, player, point)
    }
  }

  private fun damage(
      w: WeaponDefinition,
      player: Player,
      victim: LivingEntity,
      location: Location,
      flight: Int = 0,
      headshot: Boolean = false,
      melee: Boolean = false,
  ) {
    val originalPlan = effects.planHit(w, player, victim, location, flight, headshot, melee)
    val observed = WeaponObservedOverrides.forWeapon(w.id)
    val plan =
        if (observed != null && !melee) originalPlan.copy(damage = observed.projectileDamage)
        else originalPlan
    if (plan.damage <= 0) {
      // Zero-damage utility beams still need protection plugins to approve their hit effects.
      val check =
          EntityDamageByEntityEvent(
              player,
              victim,
              EntityDamageEvent.DamageCause.ENTITY_ATTACK,
              0.0,
          )
      applyingDamage = true
      try {
        plugin.server.pluginManager.callEvent(check)
      } finally {
        applyingDamage = false
      }
      if (!check.isCancelled) plan.apply()
      return
    }
    val previousImmunity = victim.noDamageTicks
    val resetCooldown = w.b("Abilities.Reset_Hit_Cooldown")
    if (observed == null && resetCooldown) victim.noDamageTicks = 0
    var acceptedHit = false
    val accepted =
        WeaponHit(plan.damage) {
          acceptedHit = true
          plan.apply()
          if (w.b("Shooting.Projectile_Incendiary.Enable"))
              victim.fireTicks = w.i("Shooting.Projectile_Incendiary.Duration")
        }
    pendingDamage[victim.uniqueId] = accepted
    applyingDamage = true
    try {
      victim.damage(plan.damage, player)
    } finally {
      applyingDamage = false
      val pending = pendingDamage.remove(victim.uniqueId)
      if (observed != null) {
        victim.noDamageTicks =
            observed.immunityAfterHit(victim.noDamageTicks, resetCooldown, acceptedHit)
      } else if (pending != null) victim.noDamageTicks = previousImmunity
    }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun projectileHit(event: ProjectileHitEvent) {
    val bullet = bullets.remove(event.entity.uniqueId) ?: return
    val victim = event.hitEntity as? LivingEntity
    event.hitEntity?.takeIf { it !is LivingEntity }?.let { hitMine(it, bullet.player) }
    val point = event.entity.location
    if (victim != null && victim != bullet.player) {
      damage(
          bullet.weapon,
          bullet.player,
          victim,
          point,
          now() - bullet.born,
          point.y >= victim.eyeLocation.y - .25,
      )
    }
    effects.impact(
        bullet.weapon,
        bullet.player,
        point,
        projectileImpactTriggers(bullet.weapon.s("Shooting.Projectile_Type"), victim != null),
        now() - bullet.born,
    )
    if (
        event.hitBlock != null &&
            bullet.weapon.b("Particles.Enable") &&
            bullet.weapon.b("Particles.Particle_Terrain")
    )
        point.world.spawnParticle(Particle.BLOCK, point, 20, event.hitBlock!!.blockData)
    event.isCancelled = true
    event.entity.remove()
  }

  private fun hitMine(entity: Entity, shooter: Player) {
    val vehicle = entity as? org.bukkit.entity.Vehicle ?: return
    if (vehicle.persistentDataContainer.has(NamespacedKey(plugin, "device_weapon"))) {
      plugin.server.pluginManager.callEvent(
          org.bukkit.event.vehicle.VehicleDamageEvent(
              vehicle,
              org.bukkit.damage.DamageSource.builder(org.bukkit.damage.DamageType.PLAYER_ATTACK)
                  .withCausingEntity(shooter)
                  .withDirectEntity(shooter)
                  .build(),
              shooter,
              0.0,
          )
      )
    }
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun projectileDamage(event: EntityDamageByEntityEvent) {
    if (bullets.containsKey(event.damager.uniqueId)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun melee(event: EntityDamageByEntityEvent) {
    if (closed || applyingDamage || event.cause != EntityDamageEvent.DamageCause.ENTITY_ATTACK)
        return
    val player = event.damager as? Player ?: return
    val victim = event.entity as? LivingEntity ?: return
    val held = catalog.identify(player.inventory.itemInMainHand) ?: return
    val w =
        if (held.b("Item_Information.Melee_Mode")) held
        else
            catalog.definitions[
                    held.s("Item_Information.Melee_Attachment").lowercase(java.util.Locale.ROOT)]
                ?: return
    if (!w.b("Item_Information.Melee_Mode")) return
    val key = token(player, w)
    if (now() < (cooldown[key] ?: 0) || busy.containsKey(player.uniqueId) || !ready(player, w)) {
      event.isCancelled = true
      return
    }
    if (!consume(player, w, false)) {
      event.isCancelled = true
      return
    }
    cooldown[key] = now() + max(1, w.i("Shooting.Delay_Between_Shots"))
    effects.shoot(w, player)
    val plan = effects.planHit(w, player, victim, victim.location, melee = true)
    event.damage = plan.damage
    pendingEvents[event] =
        WeaponHit(plan.damage) {
          plan.apply()
          if (w.b("Abilities.Reset_Hit_Cooldown"))
              schedule(1) { if (victim.isValid) victim.noDamageTicks = 0 }
          effects.impact(w, player, victim.location)
        }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun acceptedDamage(event: EntityDamageByEntityEvent) {
    val plan =
        pendingEvents.remove(event)
            ?: if (applyingDamage && event.damager is Player) pendingDamage[event.entity.uniqueId]
            else null
    if (!event.isCancelled && plan != null) {
      pendingDamage.remove(event.entity.uniqueId)
      plan.apply()
    }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun fall(event: EntityDamageEvent) {
    val player = event.entity as? Player ?: return
    if (
        event.cause == EntityDamageEvent.DamageCause.FALL &&
            catalog.identify(player.inventory.itemInMainHand)?.b("Abilities.No_Fall_Damage") == true
    )
        event.isCancelled = true
  }

  @EventHandler
  fun egg(event: PlayerEggThrowEvent) {
    if (event.egg.persistentDataContainer.has(NamespacedKey(plugin, "weapon_projectile")))
        event.isHatching = false
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun explosion(event: EntityExplodeEvent) {
    if (bullets.containsKey(event.entity.uniqueId)) {
      event.isCancelled = true
      event.blockList().clear()
    }
  }

  private fun toggleAttachment(player: Player, main: WeaponDefinition) {
    val item = player.inventory.itemInMainHand
    val w = weapon(player) ?: return
    if (busy.containsKey(player.uniqueId) || now() < (cooldown[token(player, w)] ?: 0)) return
    val meta = item.itemMeta
    meta.persistentDataContainer.set(catalog.key, PersistentDataType.STRING, main.id)
    if (!meta.persistentDataContainer.has(catalog.ammoKey, PersistentDataType.INTEGER))
        meta.persistentDataContainer.set(
            catalog.ammoKey,
            PersistentDataType.INTEGER,
            rounds(item, main),
        )
    if (w.accessory) meta.persistentDataContainer.remove(attachmentKey)
    else
        meta.persistentDataContainer.set(
            attachmentKey,
            PersistentDataType.STRING,
            main.s("Item_Information.Attachments.Info"),
        )
    item.itemMeta = meta
    val next = weapon(player) ?: return
    unzoom(player)
    val delay = next.i("Item_Information.Attachments.Toggle_Delay")
    cooldown[token(player, main)] = now() + delay
    cooldown[token(player, next)] = now() + delay
    effects.sounds(next.s("Item_Information.Attachments.Sounds_Toggle"), player.location)
    if (next.b("Reload.Enable")) setRounds(item, next, rounds(item, next))
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun blockDamage(event: BlockDamageEvent) {
    if (catalog.identify(event.itemInHand)?.b("Shooting.Cancel_Left_Click_Block_Damage") == true)
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun blockBreak(event: BlockBreakEvent) {
    if (
        catalog
            .identify(event.player.inventory.itemInMainHand)
            ?.b("Shooting.Cancel_Left_Click_Block_Damage") == true
    )
        event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun death(event: PlayerDeathEvent) {
    val keep = event.drops.filter { catalog.identify(it)?.b("Abilities.Death_No_Drop") == true }
    if (keep.isNotEmpty() && !event.keepInventory) {
      event.itemsToKeep.addAll(keep.map(ItemStack::clone))
      event.drops.removeAll(keep.toSet())
    }
    cancel(event.entity)
  }

  private fun toggleScope(player: Player, w: WeaponDefinition) {
    if (zoomed.containsKey(player.uniqueId)) unzoom(player)
    else {
      zoomed[player.uniqueId] =
          player.getPotionEffect(PotionEffectType.SLOWNESS) to
              player.getPotionEffect(PotionEffectType.NIGHT_VISION)
      player.addPotionEffect(
          PotionEffect(
              PotionEffectType.SLOWNESS,
              Int.MAX_VALUE,
              max(0, w.i("Scope.Zoom_Amount") - 1),
              false,
              false,
          )
      )
      if (w.b("Scope.Night_Vision"))
          player.addPotionEffect(
              PotionEffect(PotionEffectType.NIGHT_VISION, Int.MAX_VALUE, 0, false, false)
          )
      effects.sounds(w.s("Scope.Sounds_Toggle_Zoom"), player.location)
    }
  }

  private fun unzoom(player: Player) {
    val previous = zoomed.remove(player.uniqueId) ?: return
    player.removePotionEffect(PotionEffectType.SLOWNESS)
    player.removePotionEffect(PotionEffectType.NIGHT_VISION)
    previous.first?.let { player.addPotionEffect(it) }
    previous.second?.let { player.addPotionEffect(it) }
  }

  private fun cancelFiring(player: Player) {
    val id = player.uniqueId
    firingGeneration[id] = (firingGeneration[id] ?: 0) + 1
    val prefix = "$id:"
    auto.keys.removeAll { it.startsWith(prefix) }
    autoStarted.removeAll { it.startsWith(prefix) }
  }

  private fun markReloading(item: ItemStack, loading: Boolean) {
    val meta = item.itemMeta ?: return
    if (!meta.hasDisplayName()) return
    meta.setDisplayName(meta.displayName.removeSuffix("ᴿ") + if (loading) "ᴿ" else "")
    item.itemMeta = meta
  }

  private fun clearReloadMarks(player: Player) {
    for (item in player.inventory.contents.filterNotNull()) {
      if (item.itemMeta?.displayName?.endsWith("ᴿ") == true && catalog.identify(item) != null)
          markReloading(item, false)
    }
  }

  private fun cancel(player: Player) {
    clearReloadMarks(player)
    cancelFiring(player)
    busy.remove(player.uniqueId)
    unzoom(player)
  }

  @EventHandler fun held(event: PlayerItemHeldEvent) = cancel(event.player)

  @EventHandler fun swap(event: PlayerSwapHandItemsEvent) = cancel(event.player)

  @EventHandler fun quit(event: PlayerQuitEvent) = cancel(event.player)

  @EventHandler
  fun inventory(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    cancel(player)
    if (event.action.name.startsWith("DROP_")) {
      inventoryDropping.add(player.uniqueId)
      schedule(1) { inventoryDropping.remove(player.uniqueId) }
    }
  }

  fun close() {
    closed = true
    Bukkit.getOnlinePlayers().forEach {
      clearReloadMarks(it)
      unzoom(it)
    }
    bullets.keys.forEach { Bukkit.getEntity(it)?.remove() }
    thrown.forEach { if (it.isValid) it.remove() }
    bullets.clear()
    thrown.clear()
    busy.clear()
    firingGeneration.clear()
    auto.clear()
    autoStarted.clear()
    cooldown.clear()
  }
}

internal fun automaticShotTick(shot: Int, rate: Int): Int =
    ceil(shot * 1200.0 / (240 + 60 * rate.coerceIn(1, 16))).toInt()

internal fun reloadTransfer(
    needed: Int,
    available: Int,
    magazine: Boolean,
    individual: Boolean,
): Int =
    if (needed <= 0 || available <= 0) 0
    else if (magazine) needed else min(if (individual) 1 else needed, available)

/** Oriented cuboid against a victim bounding box, returning distance along the beam. */
internal fun energyIntersection(
    center: Vector,
    half: Vector,
    direction: Vector,
    radius: Double,
    range: Double,
): Double? {
  val up = if (kotlin.math.abs(direction.y) > .99) Vector(1.0, 0.0, 0.0) else Vector(0.0, 1.0, 0.0)
  val horizontal = direction.clone().crossProduct(up).normalize()
  val vertical = horizontal.clone().crossProduct(direction).normalize()
  fun bound(axis: Vector) =
      kotlin.math.abs(axis.x) * half.x +
          kotlin.math.abs(axis.y) * half.y +
          kotlin.math.abs(axis.z) * half.z
  val along = center.dot(direction)
  return if (
      along + bound(direction) < 0 ||
          along - bound(direction) > range ||
          kotlin.math.abs(center.dot(horizontal)) > radius + bound(horizontal) ||
          kotlin.math.abs(center.dot(vertical)) > radius + bound(vertical)
  )
      null
  else max(0.0, along - bound(direction))
}

internal fun firearmShotDelay(
    action: String,
    delay: Int,
    open: Int,
    close: Int,
    after: Int,
    ignoreAction: Boolean,
): Int =
    if (!ignoreAction && action.lowercase(Locale.ROOT) in setOf("bolt", "pump", "lever"))
        open + close + after
    else delay

internal fun requiresInventoryAmmo(
    enabled: Boolean,
    reload: Boolean,
    takeOnReload: Boolean,
): Boolean = enabled && (!reload || !takeOnReload)

// Fireballs explode on terrain too; ordinary bullets require the configured impact-anything flag.
internal fun projectileImpactTriggers(kind: String, livingHit: Boolean): Boolean =
    livingHit || kind.equals("fireball", true)

/** Pump reloads insert shells without opening or closing the chamber. */
internal fun reloadActionType(action: String): String =
    if (action.equals("pump", true)) "" else action.lowercase(Locale.ROOT)

/** The generation distinguishes switching away and back to the same weapon in the same slot. */
internal fun sameFiringSequence(
    startedGeneration: Int,
    currentGeneration: Int,
    startedSlot: Int,
    currentSlot: Int,
): Boolean = startedGeneration == currentGeneration && startedSlot == currentSlot

internal fun reloadOpenSymbol(action: String, current: String): String =
    when (action.lowercase(Locale.ROOT)) {
      "break",
      "revolver" -> "▫"
      "bolt",
      "lever" -> "_"
      else -> current
    }

internal fun weaponAmmoName(
    name: String,
    action: String?,
    count: Int,
    left: Int? = null,
    right: Int = count,
    reloading: Boolean = false,
): String =
    name +
        (if (left == null) (if (action == null) "" else " $action") + " «$count»"
        else " «$left | $right»") +
        if (reloading) "ᴿ" else ""
