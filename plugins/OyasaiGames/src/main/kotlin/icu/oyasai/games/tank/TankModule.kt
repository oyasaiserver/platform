package icu.oyasai.games.tank

import icu.oyasai.games.OyasaiGamesPlugin
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.FluidCollisionMode
import org.bukkit.Location
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.World
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

/**
 * 戦車バトルの試作。`/tank spawn` で自分が乗る戦車、`/tank dummy` で動かない標的を出す。
 * 左右クリックで主砲を撃つ。降りる（Shift）と戦車は消える。試合・チーム・報酬はまだない。
 */
class TankModule(private val plugin: OyasaiGamesPlugin) : Listener, CommandExecutor, TabCompleter {
  private class Shell(
      var pos: Vector,
      var vel: Vector,
      val shooter: Tank,
      val world: World,
      var life: Int = TankRules.SHELL_LIFE_TICKS,
  )

  private val tanks = mutableListOf<Tank>()
  private val shells = mutableListOf<Shell>()
  private var task: BukkitTask? = null
  private val legacy = LegacyComponentSerializer.legacySection()

  fun enable() {
    val command = plugin.getCommand("tank") ?: error("tank command is missing")
    command.setExecutor(this)
    command.tabCompleter = this
    plugin.server.pluginManager.registerEvents(this, plugin)
    task = plugin.server.scheduler.runTaskTimer(plugin, Runnable { tick() }, 1L, 1L)
  }

  fun disable() {
    task?.cancel()
    task = null
    tanks.toList().forEach(::destroy)
    shells.clear()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val player = sender as? Player ?: return true.also { sender.sendMessage("プレイヤーのみ使えます。") }
    when (args.firstOrNull()?.lowercase()) {
      "spawn" -> spawn(player, driven = true)
      "dummy" -> spawn(player, driven = false)
      "clear" -> {
        tanks.toList().forEach(::destroy)
        player.sendMessage("戦車をすべて片付けました。")
      }
      else -> player.sendMessage("/tank spawn（乗る） | /tank dummy（標的） | /tank clear")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      if (args.size == 1) listOf("spawn", "dummy", "clear").filter { it.startsWith(args[0]) }
      else emptyList()

  private fun spawn(player: Player, driven: Boolean) {
    if (driven && tanks.any { it.driver == player }) {
      player.sendMessage("すでに戦車に乗っています。")
      return
    }
    val look = player.location.direction.setY(0).normalize().multiply(if (driven) 0.0 else 8.0)
    val at = player.location.clone().add(look)
    at.yaw = if (driven) player.location.yaw else player.location.yaw + 180f
    val tank = Tank(player.world, at, if (driven) player else null)
    if (!tank.mount()) {
      tank.remove()
      player.sendMessage("戦車に乗れませんでした。")
      return
    }
    tanks += tank
    if (driven) player.sendMessage("左右クリックで発砲、Shift で降ります。W/S で前後、A/D で旋回、視線が砲塔の向きです。")
  }

  private fun destroy(tank: Tank) {
    tanks.remove(tank)
    tank.remove()
  }

  private fun explode(tank: Tank) {
    val at = Location(tank.world, tank.x, tank.y + 1.0, tank.z)
    tank.world.spawnParticle(Particle.EXPLOSION_EMITTER, at, 1)
    tank.world.playSound(at, Sound.ENTITY_GENERIC_EXPLODE, 2.0f, 0.8f)
    destroy(tank)
  }

  @EventHandler
  fun onClick(event: PlayerInteractEvent) {
    val tank = tanks.firstOrNull { it.driver == event.player } ?: return
    // 運転中はブロックの破壊・設置・アイテム使用をさせない。
    event.isCancelled = true
    if (event.hand != EquipmentSlot.HAND || event.action == Action.PHYSICAL) return
    fire(tank)
  }

  private fun fire(tank: Tank) {
    if (tank.reload > 0) return
    tank.reload = TankRules.RELOAD_TICKS
    val (origin, dir) = tank.muzzle()
    shells += Shell(origin, dir.multiply(TankRules.SHELL_SPEED), tank, tank.world)
    tank.world.playSound(origin.toLocation(tank.world), Sound.ENTITY_GENERIC_EXPLODE, 1.5f, 1.4f)
    tank.world.spawnParticle(Particle.FLAME, origin.toLocation(tank.world), 10, 0.1, 0.1, 0.1, 0.05)
  }

  private fun tick() {
    for (tank in tanks.toList()) {
      if (!tank.isSeated()) {
        destroy(tank)
        continue
      }
      tank.tick()
      tank.driver?.let { hud(it, tank) }
    }
    val iterator = shells.iterator()
    while (iterator.hasNext()) {
      if (!stepShell(iterator.next())) iterator.remove()
    }
  }

  private fun hud(player: Player, tank: Tank) {
    val loaded = TankRules.RELOAD_TICKS - tank.reload
    val bar = "■".repeat(loaded * 10 / TankRules.RELOAD_TICKS).padEnd(10, '□')
    player.sendActionBar(
        legacy.deserialize("§aHP ${tank.hp.toInt()}/${TankRules.MAX_HP.toInt()} §7| §e装填 $bar")
    )
  }

  /** 砲弾を 1 tick 進める。当たった・寿命が尽きたら false。 */
  private fun stepShell(shell: Shell): Boolean {
    val world = shell.world
    val length = shell.vel.length()
    val dir = shell.vel.clone().normalize()
    var best = length
    var target: Tank? = null
    val block =
        world.rayTraceBlocks(
            shell.pos.toLocation(world),
            dir,
            length,
            FluidCollisionMode.NEVER,
            true,
        )
    if (block != null) best = block.hitPosition.distance(shell.pos)
    for (tank in tanks) {
      if (tank === shell.shooter || tank.world != world) continue
      val hit = tank.box().rayTrace(shell.pos, dir, best) ?: continue
      best = hit.hitPosition.distance(shell.pos)
      target = tank
    }
    if (target != null || block != null) {
      val at = shell.pos.clone().add(dir.multiply(best))
      world.spawnParticle(Particle.EXPLOSION, at.toLocation(world), 1)
      world.playSound(at.toLocation(world), Sound.ENTITY_GENERIC_EXPLODE, 1.5f, 1.0f)
      target?.let { hit(it, shell) }
      return false
    }
    shell.pos.add(shell.vel)
    shell.vel.y -= TankRules.SHELL_GRAVITY
    world.spawnParticle(Particle.SMOKE, shell.pos.toLocation(world), 1, 0.0, 0.0, 0.0, 0.0)
    return --shell.life > 0
  }

  private fun hit(target: Tank, shell: Shell) {
    val multiplier = TankRules.armorMultiplier(shell.vel.x, shell.vel.z, target.hullYaw)
    val damage = TankRules.SHELL_DAMAGE * multiplier
    target.hp -= damage
    val side = if (multiplier < 1.0) "正面" else if (multiplier > 1.0) "背面" else "側面"
    val message = legacy.deserialize("§e${side}に命中 -${damage.toInt()}")
    shell.shooter.driver?.sendActionBar(message)
    target.driver?.sendMessage(message)
    if (target.hp <= 0.0) explode(target)
  }
}
