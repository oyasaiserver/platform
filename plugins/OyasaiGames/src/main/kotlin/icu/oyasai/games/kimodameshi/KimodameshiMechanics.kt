package icu.oyasai.games.kimodameshi

import com.destroystokyo.paper.event.player.PlayerJumpEvent
import java.util.UUID
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.ChatColor
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.block.Chest
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.FoodLevelChangeEvent
import org.bukkit.inventory.ItemStack

/** KimodameshiSystem.sk sections 30 and 40. All food values here use Bukkit's 0..20 scale. */
class KimodameshiMechanics(private val game: KimodameshiModule) : Listener {
  private val stamina = mutableMapOf<UUID, KimodameshiStamina>()
  private val heartbeat = mutableMapOf<UUID, Int>()
  private val sequences = mutableSetOf<UUID>()
  private val radioNoise = mutableSetOf<UUID>()

  fun enable() {
    game.plugin.server.pluginManager.registerEvents(this, game.plugin)
    repeat(60) { regenerate() }
    repeat(8) { updateStamina() }
    repeat(2) {
      game.plugin.server.onlinePlayers
          .filter { it.uniqueId in radioNoise }
          .forEach { sound(it, "block.azalea.hit", 1f, 0.5f) }
    }
  }

  private fun repeat(ticks: Long, action: () -> Unit) {
    game.later(ticks) {
      action()
      repeat(ticks, action)
    }
  }

  fun clear(uuid: UUID) {
    stamina.remove(uuid)
    heartbeat.remove(uuid)
    sequences.remove(uuid)
    radioNoise.remove(uuid)
  }

  fun saveRuntime(data: YamlConfiguration) {
    data.set("mechanics", null)
    stamina.forEach { (uuid, state) ->
      data.set("mechanics.stamina.$uuid.cooldown", state.cooldown)
      data.set("mechanics.stamina.$uuid.exhausted", state.exhausted)
      data.set("mechanics.stamina.$uuid.delay", state.delay)
    }
    heartbeat.forEach { (uuid, count) -> data.set("mechanics.heartbeat.$uuid", count) }
    data.set("mechanics.radio_noise", radioNoise.map(UUID::toString))
    data.set("mechanics.mission_sequence", sequences.map(UUID::toString))
  }

  fun loadRuntime(data: YamlConfiguration) {
    stamina.clear()
    heartbeat.clear()
    radioNoise.clear()
    sequences.clear()
    data.getConfigurationSection("mechanics.stamina")?.getKeys(false)?.forEach { key ->
      stamina[UUID.fromString(key)] =
          KimodameshiStamina().apply {
            cooldown = data.getInt("mechanics.stamina.$key.cooldown")
            exhausted = data.getBoolean("mechanics.stamina.$key.exhausted")
            delay = data.getInt("mechanics.stamina.$key.delay")
          }
    }
    data.getConfigurationSection("mechanics.heartbeat")?.getKeys(false)?.forEach { key ->
      heartbeat[UUID.fromString(key)] = data.getInt("mechanics.heartbeat.$key")
    }
    radioNoise.addAll(data.getStringList("mechanics.radio_noise").map(UUID::fromString))
    sequences.addAll(data.getStringList("mechanics.mission_sequence").map(UUID::fromString))
    // Skript reload cancels the title coroutine but retains these variable flags and radio noise.
    // Resume only the flags, not the interrupted mission title coroutine.
  }

  private fun living(p: Player): Boolean =
      game.active() &&
          game.participant(p) &&
          game.team(p) in listOf("runner", "hunter") &&
          p.health > 0

  @EventHandler
  fun onDamage(event: EntityDamageEvent) {
    val victim = event.entity as? Player ?: return
    if (!game.active() || !game.participant(victim) || game.team(victim) != "runner") return
    if (event.damage < victim.health) return
    event.isCancelled = true
    victim.health = maxHealth(victim)
    game.teams[victim.uniqueId] = "spectator"
    val attacker = (event as? EntityDamageByEntityEvent)?.damager as? Player
    val caught = attacker != null && game.participant(attacker) && game.team(attacker) == "hunter"
    if (caught && attacker != null) {
      game.kills[attacker.uniqueId] = (game.kills[attacker.uniqueId] ?: 0.0) + 3
      attacker.sendMessage("§a探索者を捕まえました。 (+3 Kill Points)")
    }
    victim.activePotionEffects.forEach { victim.removePotionEffect(it.type) }
    game.clearItems(victim)
    victim.gameMode = GameMode.SPECTATOR
    game.later(1) {
      if (victim.isOnline) game.clearItems(victim)
      victim.sendMessage(if (caught) "§c鬼に捕まりました！観戦者になります。" else "§c致命的なダメージを受けたため脱落し、観戦者になります。")
      game.plugin.server.broadcastMessage("§c探索者が一人脱落しました。")
      game.checkRunnerCount()
    }
  }

  private fun maxHealth(p: Player): Double = p.getAttribute(Attribute.MAX_HEALTH)?.value ?: 20.0

  private fun regenerate() {
    game.plugin.server.onlinePlayers.filter(::living).forEach { p ->
      val near =
          game.plugin.server.onlinePlayers.any {
            it != p &&
                it.world == p.world &&
                game.participant(it) &&
                it.health > 0 &&
                game.team(it) == game.team(p) &&
                it.location.distanceSquared(p.location) <= 25
          }
      if (near && p.health < maxHealth(p)) {
        p.health = (p.health + 1).coerceAtMost(maxHealth(p))
        sound(p, "entity.experience_orb.pickup", 0.2f, 1.5f)
      }
    }
  }

  @EventHandler
  fun onHunger(event: FoodLevelChangeEvent) {
    val p = event.entity as? Player ?: return
    if (game.active() && game.participant(p) && game.team(p) in listOf("runner", "hunter")) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onJump(event: PlayerJumpEvent) {
    val p = event.player
    if (!living(p)) return
    val state = stamina.getOrPut(p.uniqueId) { KimodameshiStamina() }
    val change = state.jump(p.foodLevel, game.team(p) == "hunter")
    p.foodLevel = change.food
    if (change.notice == StaminaNotice.EXHAUSTED) exhaust(p, true)
  }

  private fun updateStamina() {
    game.plugin.server.onlinePlayers.filter(::living).forEach { p ->
      if (game.team(p) == "runner") {
        val distance =
            game.plugin.server.onlinePlayers
                .filter { game.participant(it) && game.team(it) == "hunter" && it.world == p.world }
                .minOfOrNull { it.location.distance(p.location) } ?: 999.0
        if (distance <= 30) {
          val count = (heartbeat[p.uniqueId] ?: 0) + 5
          if (count >= distance + 5) {
            heartbeat[p.uniqueId] = 0
            sound(p, "entity.warden.heartbeat", 1f, (1.5 - distance / 60).toFloat())
          } else heartbeat[p.uniqueId] = count
        } else heartbeat[p.uniqueId] = 0
      }
      val state = stamina.getOrPut(p.uniqueId) { KimodameshiStamina() }
      val change = state.tick(p.foodLevel, game.team(p) == "runner" && p.isSprinting)
      p.foodLevel = change.food
      when (change.notice) {
        StaminaNotice.EXHAUSTED -> exhaust(p, false)
        StaminaNotice.RECOVERING -> actionBar(p, "§e[スタミナ回復中]")
        StaminaNotice.FULL -> actionBar(p, "§a[スタミナ全回復]")
        StaminaNotice.NONE -> Unit
      }
    }
  }

  private fun exhaust(p: Player, jump: Boolean) {
    actionBar(p, if (jump) "§c[スタミナ切れ] スタミナが切れました！" else "§c[スタミナ切れ] 走れません")
    sound(p, "block.fire.extinguish", 0.5f, 2f)
  }

  private fun actionBar(p: Player, text: String) {
    p.sendActionBar(LegacyComponentSerializer.legacySection().deserialize(text))
  }

  private fun sound(p: Player, name: String, volume: Float = 1f, pitch: Float = 1f) {
    p.playSound(p.location, name, volume, pitch)
  }

  fun loadMissions(mode: String) {
    game.missions.clear()
    val small = mode == "small"
    game.plugin.server.broadcastMessage(
        if (small) "§e[少人数モード] でミッションを読み込みます..." else "§e[大人数モード] でミッションを読み込みます..."
    )
    for (x in 1237..if (small) 1251 else 1263) {
      val chest = game.location(x.toDouble(), 4.0, -3025.0).block.state as? Chest ?: continue
      val item = chest.inventory.getItem(0) ?: continue
      if (item.type == Material.FILLED_MAP && item.itemMeta.hasDisplayName()) {
        game.missions.add(item.clone())
      }
    }
    game.plugin.server.broadcastMessage("§a${game.missions.size} 個のミッション用地図を読み込みました！")
  }

  fun giveMission(p: Player, last: String) {
    if (!game.active() || !game.participant(p) || game.team(p) != "runner") return
    if (game.missions.isEmpty()) {
      p.sendMessage("§cエラー: ミッションの地図が読み込まれていません。")
      return
    }
    var map = game.missions.random()
    if (game.missions.size > 1) {
      var attempts = 0
      while (plainName(map).equals(ChatColor.stripColor(last), true)) {
        map = game.missions.random()
        attempts++
        if (attempts >= 10) break
      }
    }
    give(p, map.clone())
    p.sendMessage("§eNext Mission：添付マップの目的地へと向かってください。")
    sound(p, "entity.item.pickup")
  }

  private fun give(p: Player, item: ItemStack) {
    p.inventory.addItem(item).values.forEach { p.world.dropItemNaturally(p.location, it) }
  }

  private fun plainName(item: ItemStack): String? =
      if (item.hasItemMeta() && item.itemMeta.hasDisplayName())
          ChatColor.stripColor(item.itemMeta.displayName)
      else null

  fun checkMission(x: Double, y: Double, z: Double, name: String) {
    if (!game.active()) return
    val location = game.location(x, y, z)
    val p =
        game.plugin.server.onlinePlayers
            .filter {
              it.world == location.world &&
                  game.participant(it) &&
                  game.team(it) == "runner" &&
                  it.health > 0 &&
                  it.uniqueId !in sequences &&
                  it.location.distanceSquared(location) <= 100
            }
            .minByOrNull { it.location.distanceSquared(location) } ?: return
    val map =
        p.inventory.contents.filterNotNull().firstOrNull {
          it.type == Material.FILLED_MAP && plainName(it).equals(ChatColor.stripColor(name), true)
        }
    if (map != null) {
      val uuid = p.uniqueId
      sequences.add(uuid)
      val points = (game.discovery[uuid] ?: 0.0) + 1
      game.discovery[uuid] = points
      p.inventory.removeItem(map.clone().apply { amount = 1 })
      sound(p, "entity.player.levelup", 1f, 1.2f)
      val display =
          if (points == points.toLong().toDouble()) points.toLong().toString()
          else points.toString()
      p.sendMessage("§aミッションクリア。発見ポイントを獲得しました。（現在: ${display}p）")
      missionSequence(p, ChatColor.stripColor(name) ?: name)
    } else {
      sound(p, "entity.generic.explode", 20f, 1f)
      p.damage(2.0)
      p.sendMessage("§c目的地が違います！")
    }
  }

  private fun missionSequence(p: Player, last: String) {
    radioNoise.add(p.uniqueId)
    p.sendTitle("", "", 0, 0, 0)
    game.later(60) { typeMessage(p, last, 0, 1) }
  }

  private val messages = listOf("こちら本部。", "目的の部屋の情報を受信した。", "次なる部屋の調査へ向かえ。")

  private fun typeMessage(p: Player, last: String, message: Int, character: Int) {
    if (!p.isOnline) {
      radioNoise.remove(p.uniqueId)
      sequences.remove(p.uniqueId)
      return
    }
    if (message >= messages.size) {
      if (game.active() && game.team(p) == "runner") {
        game.giveMission(p, last)
        game.later(20) { finishSequence(p) }
      } else finishSequence(p)
      return
    }
    val text = messages[message]
    if (character > text.length) {
      game.later(20) { typeMessage(p, last, message + 1, 1) }
      return
    }
    sound(p, "ui.button.click", 0.9f, 1f)
    p.sendTitle("§f${text.take(character)}", "", 0, 10, 0)
    game.later(2) { typeMessage(p, last, message, character + 1) }
  }

  private fun finishSequence(p: Player) {
    radioNoise.remove(p.uniqueId)
    sequences.remove(p.uniqueId)
    if (p.isOnline) {
      p.sendTitle("", "", 0, 0, 0)
      sound(p, "ui.loom.select_pattern", 1f, 0.5f)
    }
  }
}

internal enum class StaminaNotice {
  NONE,
  EXHAUSTED,
  RECOVERING,
  FULL,
}

internal data class StaminaChange(val food: Int, val notice: StaminaNotice = StaminaNotice.NONE)

internal class KimodameshiStamina {
  var cooldown = 0
  var exhausted = false
  var delay = 0

  fun jump(food: Int, hunter: Boolean): StaminaChange {
    if (cooldown > 0 || exhausted || food <= 6) return StaminaChange(food)
    val next = (food - if (hunter) 4 else 2).coerceAtLeast(0)
    delay = 12
    return if (next <= 6) exhaust(next) else StaminaChange(next)
  }

  fun tick(food: Int, sprintingRunner: Boolean): StaminaChange {
    if (cooldown > 0) {
      cooldown--
      return StaminaChange(6, if (cooldown == 0) StaminaNotice.RECOVERING else StaminaNotice.NONE)
    }
    if (exhausted) {
      val next = (food + 2).coerceAtMost(20)
      if (next >= 20) {
        exhausted = false
        return StaminaChange(20, StaminaNotice.FULL)
      }
      return StaminaChange(next)
    }
    if (sprintingRunner) {
      delay = 12
      val next = if (food > 6) food - 1 else food
      return if (next <= 6) exhaust(next) else StaminaChange(next)
    }
    if (delay > 0) {
      delay--
      return StaminaChange(food)
    }
    return StaminaChange((food + 1).coerceAtMost(20))
  }

  private fun exhaust(food: Int): StaminaChange {
    cooldown = 20
    delay = 0
    exhausted = true
    return StaminaChange(food, StaminaNotice.EXHAUSTED)
  }
}
