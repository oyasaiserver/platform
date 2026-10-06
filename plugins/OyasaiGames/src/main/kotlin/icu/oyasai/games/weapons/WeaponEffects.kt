package icu.oyasai.games.weapons

import icu.oyasai.games.OyasaiGamesPlugin
import java.util.UUID
import kotlin.math.abs
import kotlin.random.Random
import org.bukkit.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.*
import org.bukkit.potion.PotionEffect
import org.bukkit.util.Vector

internal data class WeaponHit(val damage: Double, val apply: () -> Unit)

internal data class WeaponPotion(val name: String, val duration: Int, val amplifier: Int)

internal data class WeaponSound(
    val name: String,
    val volume: Float,
    val pitch: Float,
    val delay: Long,
)

/** Pure format conversion kept separate so legacy defaults and malformed values are testable. */
internal object WeaponEffectValues {
  fun sound(value: String): WeaponSound? {
    val parts = value.trim().split('-')
    if (parts.size !in 1..4 || parts[0].isBlank()) return null
    fun number(index: Int, default: Float): Float? =
        parts.getOrNull(index)?.takeIf { it.isNotEmpty() }?.toFloatOrNull()
            ?: if (parts.getOrNull(index).isNullOrEmpty()) default else null
    val volume = number(1, 1f) ?: return null
    val pitch = number(2, 1f) ?: return null
    val delay = parts.getOrNull(3)?.toLongOrNull() ?: if (parts.size < 4) 0L else return null
    if (!volume.isFinite() || !pitch.isFinite() || volume < 0 || pitch < 0 || delay < 0) return null
    return WeaponSound(parts[0].uppercase(), volume, pitch, delay)
  }

  fun chance(percent: Double, roll: Double): Boolean =
      percent.isFinite() && roll >= 0 && roll < 100 && roll < percent

  fun potion(value: String): WeaponPotion? {
    val parts = value.trim().uppercase().split('-')
    val duration = parts.getOrNull(1)?.toIntOrNull()
    val level = parts.getOrNull(2)?.toIntOrNull()
    if (
        parts.size != 3 ||
            parts[0].isBlank() ||
            duration == null ||
            duration < 0 ||
            level == null ||
            level < 1
    )
        return null
    val aliases =
        mapOf(
            "SLOW" to "SLOWNESS",
            "FAST_DIGGING" to "HASTE",
            "INCREASE_DAMAGE" to "STRENGTH",
            "JUMP" to "JUMP_BOOST",
            "CONFUSION" to "NAUSEA",
        )
    return WeaponPotion((aliases[parts[0]] ?: parts[0]).lowercase(), duration, level - 1)
  }

  fun flightBonus(ticks: Int, perTick: Double, maximum: Double): Double {
    if (ticks <= 0) return 0.0
    val bonus = ticks * perTick
    return if (perTick < 0) bonus.coerceAtLeast(-abs(maximum)) else bonus.coerceAtMost(abs(maximum))
  }

  fun multiplier(value: String, type: String): Double =
      value.split(',').firstNotNullOfOrNull {
        val parts = it.trim().split('-')
        if (parts.size == 2 && parts[0].equals(type, true)) parts[1].toDoubleOrNull() else null
      } ?: 1.0

  val soundAliases =
      mapOf(
          "ANVIL_LAND" to "BLOCK_ANVIL_LAND",
          "BAT_TAKEOFF" to "ENTITY_BAT_TAKEOFF",
          "BLAZE_HIT" to "ENTITY_BLAZE_HURT",
          "BURP" to "ENTITY_PLAYER_BURP",
          "CHICKEN_EGG_POP" to "ENTITY_CHICKEN_EGG",
          "CLICK" to "UI_BUTTON_CLICK",
          "DOOR_CLOSE" to "BLOCK_WOODEN_DOOR_CLOSE",
          "DOOR_OPEN" to "BLOCK_WOODEN_DOOR_OPEN",
          "EAT" to "ENTITY_GENERIC_EAT",
          "ENDERDRAGON_HIT" to "ENTITY_ENDER_DRAGON_HURT",
          "ENDERDRAGON_WINGS" to "ENTITY_ENDER_DRAGON_FLAP",
          "ENDERMAN_STARE" to "ENTITY_ENDERMAN_STARE",
          "EXPLODE" to "ENTITY_GENERIC_EXPLODE",
          "FIRE" to "BLOCK_FIRE_AMBIENT",
          "FIRE_IGNITE" to "ITEM_FLINTANDSTEEL_USE",
          "FIZZ" to "BLOCK_FIRE_EXTINGUISH",
          "GHAST_FIREBALL" to "ENTITY_GHAST_SHOOT",
          "GLASS" to "BLOCK_GLASS_BREAK",
          "HURT_FLESH" to "ENTITY_PLAYER_HURT",
          "IRONGOLEM_HIT" to "ENTITY_IRON_GOLEM_HURT",
          "IRONGOLEM_THROW" to "ENTITY_IRON_GOLEM_ATTACK",
          "ITEM_BREAK" to "ENTITY_ITEM_BREAK",
          "ITEM_PICKUP" to "ENTITY_ITEM_PICKUP",
          "LEVEL_UP" to "ENTITY_PLAYER_LEVELUP",
          "NOTE_PIANO" to "BLOCK_NOTE_BLOCK_HARP",
          "NOTE_PLING" to "BLOCK_NOTE_BLOCK_PLING",
          "NOTE_SNARE_DRUM" to "BLOCK_NOTE_BLOCK_SNARE",
          "NOTE_STICKS" to "BLOCK_NOTE_BLOCK_HAT",
          "NOTE_BLOCK_BASS" to "BLOCK_NOTE_BLOCK_BASS",
          "ORB_PICKUP" to "ENTITY_EXPERIENCE_ORB_PICKUP",
          "PISTON_EXTEND" to "BLOCK_PISTON_EXTEND",
          "PISTON_RETRACT" to "BLOCK_PISTON_CONTRACT",
          "SHEEP_IDLE" to "ENTITY_SHEEP_AMBIENT",
          "SHEEP_SHEAR" to "ENTITY_SHEEP_SHEAR",
          "SHOOT_ARROW" to "ENTITY_ARROW_SHOOT",
          "SKELETON_HURT" to "ENTITY_SKELETON_HURT",
          "SKELETON_IDLE" to "ENTITY_SKELETON_AMBIENT",
          "SKELETON_WALK" to "ENTITY_SKELETON_STEP",
          "SLIME_WALK" to "ENTITY_SLIME_SQUISH",
          "VILLAGER_DEATH" to "ENTITY_VILLAGER_DEATH",
          "WITHER_SHOOT" to "ENTITY_WITHER_SHOOT",
          "ZOMBIE_METAL" to "ENTITY_ZOMBIE_ATTACK_IRON_DOOR",
          "ZOMBIE_UNFECT" to "ENTITY_ZOMBIE_VILLAGER_CURE",
          "ZOMBIE_WOOD" to "ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR",
          "ZOMBIE_WOODBREAK" to "ENTITY_ZOMBIE_BREAK_WOODEN_DOOR",
          "ENTITY_EVOCATION_FANGS_ATTACK" to "ENTITY_EVOKER_FANGS_ATTACK",
          "ENTITY_EVOCATION_ILLAGER_PREPARE_SUMMON" to "ENTITY_EVOKER_PREPARE_SUMMON",
          "BLOCK_NOTE_FLUTE" to "BLOCK_NOTE_BLOCK_FLUTE",
          "BLOCK_NOTE_GUITAR" to "BLOCK_NOTE_BLOCK_GUITAR",
          "BLOCK_NOTE_HAT" to "BLOCK_NOTE_BLOCK_HAT",
          "LAVA_POP" to "BLOCK_LAVA_POP",
          "VILLAGER_NO" to "ENTITY_VILLAGER_NO",
      )
}

internal class WeaponEffects(
    private val plugin: OyasaiGamesPlugin,
    private val schedule: (Long, () -> Unit) -> Unit,
) : Listener {
  private data class Blast(val weapon: WeaponDefinition, val shooter: Player?, val owner: UUID?)

  private val blasts = mutableMapOf<UUID, Blast>()
  private val entities = mutableSetOf<Entity>()
  private val noDrops = mutableSetOf<UUID>()
  private val warned = mutableSetOf<String>()
  private val blastEffects = mutableMapOf<EntityDamageByEntityEvent, () -> Unit>()
  private val kills = mutableMapOf<UUID, Pair<WeaponDefinition, Player>>()

  private fun warn(value: String) {
    if (warned.add(value)) plugin.logger.warning("weapons: unsupported or invalid effect: $value")
  }

  fun sounds(value: String, location: Location) {
    for (entry in value.split(',').filter { it.isNotBlank() }) {
      val parsed = WeaponEffectValues.sound(entry)
      if (parsed == null) {
        warn(entry)
        continue
      }
      val name = WeaponEffectValues.soundAliases[parsed.name] ?: parsed.name
      val sound = runCatching { Sound.valueOf(name) }.getOrNull()
      if (sound == null) {
        warn(entry)
        continue
      }
      val at = location.clone()
      schedule(parsed.delay) { at.world.playSound(at, sound, parsed.volume, parsed.pitch) }
    }
  }

  fun particles(value: String, location: Location) {
    for (entry in value.split(',').filter { it.isNotBlank() }) {
      val parts = entry.trim().lowercase().split('-')
      when (parts[0]) {
        "smoke" -> location.world.spawnParticle(Particle.SMOKE, location, 8, .15, .15, .15, 0.0)
        "flames" -> location.world.spawnParticle(Particle.FLAME, location, 8, .15, .15, .15, 0.0)
        "explosion" -> location.world.spawnParticle(Particle.EXPLOSION, location, 1)
        "lightning" -> location.world.strikeLightningEffect(location)
        "block_break" -> {
          val material = parts.getOrNull(1)?.let(WeaponMaterials::resolve)
          if (material != null && material.isBlock)
              location.world.spawnParticle(
                  Particle.BLOCK,
                  location,
                  20,
                  .2,
                  .2,
                  .2,
                  material.createBlockData(),
              )
          else warn(entry)
        }
        else -> warn(entry)
      }
    }
  }

  private fun potions(value: String, target: LivingEntity) {
    for (entry in value.split(',').filter { it.isNotBlank() }) {
      val potion = WeaponEffectValues.potion(entry)
      val type = potion?.let { Registry.EFFECT.get(NamespacedKey.minecraft(it.name)) }
      if (potion == null || type == null) {
        warn(entry)
        continue
      }
      target.addPotionEffect(PotionEffect(type, potion.duration, potion.amplifier))
    }
  }

  private fun activation(
      w: WeaponDefinition,
      action: String,
      shooter: Player,
      victim: LivingEntity? = null,
  ) {
    if (action in w.s("Potion_Effects.Activation").lowercase().split(',').map { it.trim() }) {
      potions(w.s("Potion_Effects.Potion_Effect_Shooter"), shooter)
      victim?.let { potions(w.s("Potion_Effects.Potion_Effect_Victim"), it) }
    }
  }

  fun reload(w: WeaponDefinition, player: Player) = activation(w, "reload", player)

  fun shoot(w: WeaponDefinition, player: Player) {
    sounds(w.s("Shooting.Sounds_Shoot"), player.location)
    if (w.b("Particles.Enable")) particles(w.s("Particles.Particle_Player_Shoot"), player.location)
    activation(w, "shoot", player)
    for (command in w.config.getStringList("Extras.Run_Command")) {
      val expanded = command.replace("<shooter>", player.name)
      if (expanded.startsWith('@'))
          Bukkit.dispatchCommand(Bukkit.getConsoleSender(), expanded.substring(1))
      else player.performCommand(expanded)
    }
  }

  private fun messages(
      w: WeaponDefinition,
      section: String,
      shooter: Player?,
      victim: LivingEntity?,
  ) {
    fun expand(value: String) =
        ChatColor.translateAlternateColorCodes('&', value)
            .replace("<shooter>", shooter?.name.orEmpty())
            .replace("<victim>", victim?.name ?: "")
    w.s("$section.Message_Shooter")
        .takeIf { it.isNotBlank() }
        ?.let { shooter?.sendMessage(expand(it)) }
    if (victim is Player)
        w.s("$section.Message_Victim")
            .takeIf { it.isNotBlank() }
            ?.let { victim.sendMessage(expand(it)) }
    shooter?.let { sounds(w.s("$section.Sounds_Shooter"), it.location) }
    victim?.let { sounds(w.s("$section.Sounds_Victim"), it.location) }
  }

  private fun special(
      w: WeaponDefinition,
      section: String,
      action: String,
      particle: String,
      shooter: Player,
      victim: LivingEntity,
      location: Location,
  ) {
    messages(w, section, shooter, victim)
    activation(w, action, shooter, victim)
    if (w.b("Particles.Enable")) particles(w.s("Particles.Particle_$particle"), location)
    if (w.b("Fireworks.Enable")) fireworks(w.s("Fireworks.Firework_$particle"), location)
  }

  fun planHit(
      w: WeaponDefinition,
      player: Player,
      victim: LivingEntity,
      location: Location,
      flight: Int = 0,
      headshot: Boolean = false,
      melee: Boolean = false,
  ): WeaponHit {
    val actions = mutableListOf<() -> Unit>()
    if (!melee && headshot && w.b("Headshot.Enable")) {
      actions.add { special(w, "Headshot", "head", "Headshot", player, victim, location) }
    }
    val behind =
        victim.location.direction.dot(
            player.location.toVector().subtract(victim.location.toVector())
        ) < 0
    if (behind && w.b("Backstab.Enable")) {
      actions.add { special(w, "Backstab", "back", "Backstab", player, victim, location) }
    }
    val critical = WeaponEffectValues.chance(w.d("Critical_Hits.Chance"), Random.nextDouble(100.0))
    if (w.b("Critical_Hits.Enable") && critical) {
      actions.add { special(w, "Critical_Hits", "crit", "Critical", player, victim, location) }
    }
    val damage = hitDamage(w, flight, headshot, behind, melee, critical, victim.type.name)
    actions.add {
      if (w.b("Abilities.Reset_Hit_Cooldown")) victim.noDamageTicks = 0
      if (w.config.contains("Abilities.Knockback"))
          knockback(victim, player.location, w.d("Abilities.Knockback"))
      if (w.b("Hit_Events.Enable")) messages(w, "Hit_Events", player, victim)
      activation(w, "hit", player, victim)
      if (w.b("Particles.Enable")) particles(w.s("Particles.Particle_Hit"), location)
      summon(w, player, victim, location)
      kills[victim.uniqueId] = w to player
      schedule(1) { kills.remove(victim.uniqueId) }
    }
    return WeaponHit(damage.coerceAtLeast(0.0)) { actions.forEach { it() } }
  }

  private fun knockback(victim: LivingEntity, origin: Location, amount: Double) {
    val direction = victim.location.toVector().subtract(origin.toVector())
    if (direction.lengthSquared() > 0)
        direction
            .normalize()
            .multiply(
                amount * plugin.config.getDouble("weapons.compatibility.knockback-scale", 0.1)
            )
    schedule(1) { if (victim.isValid) victim.velocity = direction }
  }

  fun impact(
      w: WeaponDefinition,
      player: Player?,
      location: Location,
      hit: Boolean = true,
      flight: Int = 0,
      owner: UUID? = player?.uniqueId,
  ) {
    if (w.b("Particles.Enable")) particles(w.s("Particles.Particle_Impact_Anything"), location)
    if (w.b("Hit_Events.Enable")) sounds(w.s("Hit_Events.Sounds_Impact"), location)
    if (w.b("Lightning.Enable") && (hit || w.b("Lightning.On_Impact_With_Anything"))) {
      if (w.b("Lightning.No_Damage")) location.world.strikeLightningEffect(location)
      else location.world.strikeLightning(location)
    }
    if (w.b("Airstrikes.Enable") && hit) airstrike(w, player, location)
    if (
        w.b("Explosions.Enable") &&
            (hit || w.b("Explosions.On_Impact_With_Anything")) &&
            flight >= w.i("Explosions.Projectile_Activation_Time")
    ) {
      schedule(w.i("Explosions.Explosion_Delay").toLong()) {
        explode(w, player, location, owner = owner)
      }
    }
  }

  fun impactDevice(w: WeaponDefinition, owner: UUID, location: Location) =
      impact(w, Bukkit.getPlayer(owner), location, owner = owner)

  fun thrown(w: WeaponDefinition, player: Player, item: Item) {
    entities.add(item)
    when {
      w.s("Shooting.Projectile_Type").equals("flare", true) ->
          schedule(w.i("Airstrikes.Flare_Activation_Delay").toLong()) {
            val at = item.location
            item.remove()
            entities.remove(item)
            airstrike(w, player, at)
          }
      w.b("Cluster_Bombs.Enable") ->
          split(w, player, item, w.config.getInt("Cluster_Bombs.Number_Of_Splits", 1))
      else ->
          schedule(w.i("Explosions.Explosion_Delay").toLong()) {
            val at = item.location
            item.remove()
            entities.remove(item)
            explode(w, player, at)
          }
    }
  }

  private fun split(w: WeaponDefinition, player: Player?, item: Item, remaining: Int) {
    schedule(w.i("Cluster_Bombs.Delay_Before_Split").toLong()) {
      if (!item.isValid) return@schedule
      val at = item.location
      item.remove()
      entities.remove(item)
      particles(w.s("Cluster_Bombs.Particle_Release"), at)
      sounds(w.s("Cluster_Bombs.Sounds_Release"), at)
      val material = WeaponMaterials.resolve(w.s("Cluster_Bombs.Bomblet_Type")) ?: return@schedule
      repeat(w.i("Cluster_Bombs.Number_Of_Bomblets")) {
        val bomblet = at.world.dropItem(at, org.bukkit.inventory.ItemStack(material))
        bomblet.pickupDelay = Int.MAX_VALUE
        bomblet.velocity =
            Vector(Random.nextDouble(-1.0, 1.0), Random.nextDouble(), Random.nextDouble(-1.0, 1.0))
                .multiply(
                    w.d("Cluster_Bombs.Speed_Of_Bomblets") *
                        plugin.config.getDouble("weapons.compatibility.projectile-speed-scale", 0.1)
                )
        entities.add(bomblet)
        if (remaining > 1) split(w, player, bomblet, remaining - 1)
        else {
          val variation = w.i("Cluster_Bombs.Detonation_Delay_Variation").coerceAtLeast(0)
          val delay =
              (w.i("Cluster_Bombs.Delay_Before_Detonation") +
                      Random.nextInt(-variation, variation + 1))
                  .coerceAtLeast(0)
          schedule(delay.toLong()) {
            val there = bomblet.location
            bomblet.remove()
            entities.remove(bomblet)
            explode(w, player, there, false)
          }
        }
      }
    }
  }

  private fun explode(
      w: WeaponDefinition,
      player: Player?,
      at: Location,
      cluster: Boolean = true,
      owner: UUID? = player?.uniqueId,
  ) {
    // The public guide applies Lightning to grenade detonation, including released bomblets.
    if (grenadeDetonationLightning(w.s("Shooting.Projectile_Type"), w.b("Lightning.Enable"))) {
      if (w.b("Lightning.No_Damage")) at.world.strikeLightningEffect(at)
      else at.world.strikeLightning(at)
    }
    if (!w.b("Explosions.Enable")) return
    val tnt = at.world.spawn(at, TNTPrimed::class.java)
    tnt.source = player
    tnt.yield = w.config.getDouble("Explosions.Explosion_Radius", 4.0).toFloat()
    tnt.fuseTicks = 0
    blasts[tnt.uniqueId] = Blast(w, player, owner)
    entities.add(tnt)
    sounds(w.s("Explosions.Sounds_Explode"), at)
    if (w.b("Shrapnel.Enable")) {
      val material = WeaponMaterials.resolve(w.s("Shrapnel.Block_Type"))
      if (material != null && material.isBlock)
          repeat(w.i("Shrapnel.Amount")) {
            val block = at.world.spawnFallingBlock(at, material.createBlockData())
            block.dropItem = false
            block.setHurtEntities(false)
            block.velocity =
                Vector(
                        Random.nextDouble(-1.0, 1.0),
                        Random.nextDouble(),
                        Random.nextDouble(-1.0, 1.0),
                    )
                    .multiply(
                        w.d("Shrapnel.Speed") *
                            plugin.config.getDouble(
                                "weapons.compatibility.projectile-speed-scale",
                                0.1,
                            )
                    )
            entities.add(block)
            schedule(200) {
              block.remove()
              entities.remove(block)
            }
          }
    }
    if (cluster && w.b("Cluster_Bombs.Enable")) {
      val material = WeaponMaterials.resolve(w.s("Cluster_Bombs.Bomblet_Type")) ?: return
      val item = at.world.dropItem(at, org.bukkit.inventory.ItemStack(material))
      item.pickupDelay = Int.MAX_VALUE
      entities.add(item)
      split(w, player, item, w.config.getInt("Cluster_Bombs.Number_Of_Splits", 1))
    }
    schedule(2) {
      if (tnt.isValid) tnt.remove()
      blasts.remove(tnt.uniqueId)
      entities.remove(tnt)
    }
  }

  private fun airstrike(w: WeaponDefinition, player: Player?, at: Location) {
    particles(w.s("Airstrikes.Particle_Call_Airstrike"), at)
    w.s("Airstrikes.Message_Call_Airstrike")
        .takeIf { it.isNotBlank() }
        ?.let {
          player?.sendMessage(
              ChatColor.translateAlternateColorCodes('&', it).replace("<shooter>", player.name)
          )
        }
    sounds(w.s("Airstrikes.Sounds_Airstrike"), at)
    val strikes =
        if (w.b("Airstrikes.Multiple_Strikes.Enable"))
            w.config.getInt("Airstrikes.Multiple_Strikes.Number_Of_Strikes", 1)
        else 1
    val area = w.config.getInt("Airstrikes.Area", 1)
    val material = WeaponMaterials.resolve(w.s("Airstrikes.Block_Type")) ?: return
    repeat(strikes) { strike ->
      schedule((strike * w.i("Airstrikes.Multiple_Strikes.Delay_Between_Strikes")).toLong()) {
        for (x in 0 until area) for (z in 0 until area) {
          fun variation(key: String): Double {
            val amount = abs(w.d("Airstrikes.$key"))
            return if (amount == 0.0) 0.0 else Random.nextDouble(-amount, amount)
          }
          val spacing = w.d("Airstrikes.Distance_Between_Bombs") + 1.0
          val location =
              at.clone()
                  .add(
                      (x - (area - 1) / 2.0) * spacing + variation("Horizontal_Variation"),
                      w.d("Airstrikes.Height_Dropped") + variation("Vertical_Variation"),
                      (z - (area - 1) / 2.0) * spacing + variation("Horizontal_Variation"),
                  )
          val block = at.world.spawnFallingBlock(location, material.createBlockData())
          block.dropItem = false
          block.setHurtEntities(false)
          entities.add(block)
          fallingBomb(w, player, block, 0)
        }
      }
    }
  }

  private fun fallingBomb(w: WeaponDefinition, player: Player?, block: FallingBlock, age: Int) {
    schedule(1) {
      if (!block.isValid || block.isOnGround || age >= 200) {
        val at = block.location
        block.remove()
        entities.remove(block)
        explode(w, player, at, false)
      } else fallingBomb(w, player, block, age + 1)
    }
  }

  private fun summon(w: WeaponDefinition, player: Player?, victim: LivingEntity, at: Location) {
    if (
        !w.b("Spawn_Entity_On_Hit.Enable") ||
            !WeaponEffectValues.chance(w.d("Spawn_Entity_On_Hit.Chance"), Random.nextDouble(100.0))
    )
        return
    for (entry in w.s("Spawn_Entity_On_Hit.EntityType_Baby_Explode_Amount").split(',')) {
      val parts = entry.trim().split('-')
      val type =
          parts.getOrNull(0)?.let { runCatching { EntityType.valueOf(it.uppercase()) }.getOrNull() }
      val amount = parts.getOrNull(3)?.toIntOrNull()
      if (parts.size != 4 || type == null || amount == null || amount < 0) {
        warn(entry)
        continue
      }
      repeat(amount) {
        val mob = at.world.spawnEntity(at, type) as? LivingEntity ?: return@repeat
        entities.add(mob)
        w.s("Spawn_Entity_On_Hit.Mob_Name")
            .takeIf { it.isNotBlank() }
            ?.let { mob.customName = ChatColor.translateAlternateColorCodes('&', it) }
        if (w.b("Spawn_Entity_On_Hit.Entity_Disable_Drops")) noDrops.add(mob.uniqueId)
        if (parts[1].equals("true", true) && mob is Ageable) mob.setBaby()
        val lifetime = w.i("Spawn_Entity_On_Hit.Timed_Death")
        if (lifetime > 0)
            schedule(lifetime.toLong()) {
              if (mob.isValid) mob.health = 0.0
              noDrops.remove(mob.uniqueId)
              entities.remove(mob)
            }
      }
    }
    messages(w, "Spawn_Entity_On_Hit", player, victim)
  }

  private fun fireworks(value: String, at: Location) {
    for (entry in value.split(',').filter { it.isNotBlank() }) {
      val p = entry.split('-')
      val effect =
          runCatching {
                require(p.size == 6)
                FireworkEffect.builder()
                    .with(FireworkEffect.Type.valueOf(p[0].uppercase()))
                    .trail(p[1].lowercase().toBooleanStrict())
                    .flicker(p[2].lowercase().toBooleanStrict())
                    .withColor(Color.fromRGB(p[3].toInt(), p[4].toInt(), p[5].toInt()))
                    .build()
              }
              .getOrNull()
      if (effect == null) {
        warn(entry)
        continue
      }
      val rocket = at.world.spawn(at, Firework::class.java)
      rocket.fireworkMeta = rocket.fireworkMeta.apply { addEffect(effect) }
      entities.add(rocket)
      rocket.detonate()
      schedule(2) {
        rocket.remove()
        entities.remove(rocket)
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun explosion(event: EntityExplodeEvent) {
    val blast = blasts[event.entity.uniqueId] ?: return
    if (blast.weapon.b("Explosions.Explosion_No_Grief")) event.blockList().clear()
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun damage(event: EntityDamageByEntityEvent) {
    if (event.damager is Firework && event.damager in entities) {
      event.isCancelled = true
      return
    }
    val blast = blasts[event.damager.uniqueId] ?: return
    val w = blast.weapon
    val victim = event.entity as? LivingEntity
    if (victim == null) {
      if (w.b("Explosions.Explosion_No_Grief")) event.isCancelled = true
      return
    }
    if (victim.uniqueId == blast.owner && w.b("Explosions.Enable_Owner_Immunity")) {
      event.isCancelled = true
      return
    }
    if (w.b("Explosions.Explosion_No_Damage")) event.damage = 0.0
    else
        event.damage =
            event.damage * w.config.getDouble("Explosions.Damage_Multiplier", 100.0) / 100.0 *
                WeaponEffectValues.multiplier(w.s("Abilities.Super_Effective"), victim.type.name)
    val origin = event.damager.location.clone()
    blastEffects[event] = {
      potions(w.s("Explosions.Explosion_Potion_Effect"), victim)
      if (w.i("Explosions.Ignite_Victims") > 0) victim.fireTicks = w.i("Explosions.Ignite_Victims")
      if (w.config.contains("Explosions.Knockback"))
          knockback(victim, origin, w.d("Explosions.Knockback"))
      messages(w, "Explosions", blast.shooter, victim)
      summon(w, blast.shooter, victim, victim.location)
      blast.shooter?.let { kills[victim.uniqueId] = w to it }
      schedule(1) { kills.remove(victim.uniqueId) }
    }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun appliedBlast(event: EntityDamageByEntityEvent) {
    val apply = blastEffects.remove(event) ?: return
    if (!event.isCancelled) apply()
  }

  @EventHandler
  fun landing(event: EntityChangeBlockEvent) {
    if (event.entity is FallingBlock && event.entity in entities) event.isCancelled = true
  }

  @EventHandler
  fun death(event: EntityDeathEvent) {
    entities.remove(event.entity)
    if (noDrops.remove(event.entity.uniqueId)) {
      event.drops.clear()
      event.droppedExp = 0
    }
    if (event is PlayerDeathEvent) {
      val (w, shooter) = kills.remove(event.entity.uniqueId) ?: return
      w.s("Custom_Death_Message.Normal")
          .takeIf { it.isNotBlank() }
          ?.let {
            event.deathMessage =
                ChatColor.translateAlternateColorCodes('&', it)
                    .replace("<shooter>", shooter.name)
                    .replace("<victim>", event.entity.name)
          }
    }
  }

  fun close() {
    entities.toList().forEach(Entity::remove)
    entities.clear()
    blasts.clear()
    noDrops.clear()
    kills.clear()
    blastEffects.clear()
  }
}

/**
 * Damage decisions shared by projectile and melee hits, before Bukkit armor/protection handling.
 */
internal fun hitDamage(
    w: WeaponDefinition,
    flight: Int,
    headshot: Boolean,
    behind: Boolean,
    melee: Boolean,
    critical: Boolean,
    victimType: String,
): Double {
  var damage = w.d("Shooting.Projectile_Damage")
  if (!melee && w.b("Damage_Based_On_Flight_Time.Enable"))
      damage +=
          WeaponEffectValues.flightBonus(
              flight,
              w.d("Damage_Based_On_Flight_Time.Bonus_Damage_Per_Tick"),
              w.config.getDouble("Damage_Based_On_Flight_Time.Maximum_Damage", Double.MAX_VALUE),
          )
  if (!melee && headshot && w.b("Headshot.Enable")) damage += w.d("Headshot.Bonus_Damage")
  if (behind && w.b("Backstab.Enable")) damage += w.d("Backstab.Bonus_Damage")
  if (critical && w.b("Critical_Hits.Enable")) damage += w.d("Critical_Hits.Bonus_Damage")
  return (damage * WeaponEffectValues.multiplier(w.s("Abilities.Super_Effective"), victimType))
      .coerceAtLeast(0.0)
}

/** Grenades use lightning at detonation rather than the ordinary projectile collision gate. */
internal fun grenadeDetonationLightning(projectileType: String, enabled: Boolean): Boolean =
    enabled && projectileType.equals("grenade", true)
