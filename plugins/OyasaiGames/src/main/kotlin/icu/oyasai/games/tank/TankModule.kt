package icu.oyasai.games.tank

import icu.oyasai.games.OyasaiGamesPlugin
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.FluidCollisionMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.World
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

/**
 * 戦車バトルの試作。`/tank spawn [light|medium|heavy]` で自分が乗る戦車、`/tank dummy [種類]` で動かない標的を出す。
 * 左クリックで主砲、右クリック（押し続け）で同軸機銃。降りる（Shift）と戦車は消える。試合・チーム・報酬はまだない。
 *
 * 右クリックは手に何か持っていないとサーバーへ届かないので、乗っている間はホットバーの空き枠に操縦用のアイテムを置いて持たせる。 降りる・消えると取り除き、
 * 落とす・持ち替える・動かすことはできない。クラッシュで残っても参加時に取り除く。
 */
class TankModule(private val plugin: OyasaiGamesPlugin) : Listener, CommandExecutor, TabCompleter {
  private class Shell(
      var pos: Vector,
      var vel: Vector,
      val shooter: Tank,
      val world: World,
      var travelled: Double = 0.0,
      var life: Int = TankRules.SHELL_LIFE_TICKS,
  )

  private val tanks = mutableListOf<Tank>()
  private val shells = mutableListOf<Shell>()
  private var task: BukkitTask? = null
  private var tickCount = 0
  private val legacy = LegacyComponentSerializer.legacySection()
  private val controlKey = NamespacedKey(plugin, "tank_control")

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
    val action = args.firstOrNull()?.lowercase()
    if (action == "clear") {
      tanks.toList().forEach(::destroy)
      player.sendMessage("戦車をすべて片付けました。")
      return true
    }
    val spec = TankRules.spec(args.getOrNull(1)?.lowercase())
    when {
      action != "spawn" && action != "dummy" ->
          player.sendMessage(
              "/tank spawn [${TankRules.SPECS.joinToString("|") { it.key }}]（乗る） | /tank dummy [種類]（標的） | /tank clear"
          )
      spec == null ->
          player.sendMessage(
              "種類は ${TankRules.SPECS.joinToString("・") { "${it.key}（${it.label}: ${it.model}）" }} です。"
          )
      else -> spawn(player, action == "spawn", spec)
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      when (args.size) {
        1 -> listOf("spawn", "dummy", "clear").filter { it.startsWith(args[0]) }
        2 -> TankRules.SPECS.map { it.key }.filter { it.startsWith(args[1]) }
        else -> emptyList()
      }

  private fun spawn(player: Player, driven: Boolean, spec: TankSpec) {
    if (driven && tanks.any { it.driver == player }) {
      player.sendMessage("すでに戦車に乗っています。")
      return
    }
    val controlSlot = if (driven) freeHotbarSlot(player) else null
    if (driven && controlSlot == null) {
      player.sendMessage("ホットバーに空きを 1 つ作ってから乗ってください（操縦用のアイテムを置きます）。")
      return
    }
    val look = player.location.direction.setY(0).normalize()
    val at = player.location.clone().add(look.multiply(if (driven) 0.0 else spec.length + 6.0))
    at.yaw = if (driven) player.location.yaw else player.location.yaw + 180f
    val tank = Tank(player.world, at, if (driven) player else null, spec, model(spec))
    if (!tank.mount()) {
      tank.remove()
      player.sendMessage("戦車に乗れませんでした。")
      return
    }
    tanks += tank
    if (controlSlot != null) {
      player.inventory.setItem(controlSlot, controlItem())
      player.inventory.heldItemSlot = controlSlot
      player.sendMessage(
          "${spec.label}: ${spec.model}（${spec.gunName}、最高 ${spec.maxSpeedKmh.toInt()} km/h）。" +
              "左クリックで主砲、右クリック長押しで機銃、W/S で前後、A/D で旋回、視線の方へ砲塔が回ります。Shift で降ります。"
      )
    }
  }

  /** サーバーの tank-models/<車種>.json があればその見た目、なければ組み込みの簡易モデル。読めなければ簡易モデルにして記録する。 */
  private fun model(spec: TankSpec): TankModel {
    val file = plugin.dataFolder.resolve("tank-models/${spec.key}.json")
    if (!file.isFile) return TankModels.create(spec)
    return try {
      TankModels.load(file)
    } catch (exception: Exception) {
      plugin.logger.warning("戦車のモデル ${file.name} を読めませんでした (${exception.message})。簡易モデルを使います。")
      TankModels.create(spec)
    }
  }

  private fun freeHotbarSlot(player: Player): Int? {
    val held = player.inventory.heldItemSlot
    if (player.inventory.getItem(held)?.type?.isAir != false) return held
    return (0..8).firstOrNull { player.inventory.getItem(it)?.type?.isAir != false }
  }

  private fun controlItem(): ItemStack =
      ItemStack(Material.STICK).apply {
        editMeta {
          it.displayName(legacy.deserialize("§6戦車の操縦（左: 主砲 / 右: 機銃）"))
          it.persistentDataContainer.set(controlKey, PersistentDataType.BYTE, 1)
        }
      }

  private fun isControl(item: ItemStack?): Boolean =
      item?.persistentDataContainer?.has(controlKey) == true

  private fun removeControl(player: Player) {
    for (slot in 0 until player.inventory.size) {
      if (isControl(player.inventory.getItem(slot))) player.inventory.setItem(slot, null)
    }
  }

  private fun destroy(tank: Tank) {
    tanks.remove(tank)
    tank.driver?.let(::removeControl)
    tank.remove()
  }

  private fun explode(tank: Tank) {
    val at = Location(tank.world, tank.x, tank.y + 1.0, tank.z)
    tank.world.spawnParticle(Particle.EXPLOSION_EMITTER, at, 1)
    tank.world.playSound(at, Sound.ENTITY_GENERIC_EXPLODE, 2.0f, 0.8f)
    destroy(tank)
  }

  private fun driving(player: Player): Tank? = tanks.firstOrNull { it.driver == player }

  @EventHandler
  fun onClick(event: PlayerInteractEvent) {
    val tank = driving(event.player) ?: return
    // 運転中はブロックの破壊・設置・アイテム使用をさせない。
    event.isCancelled = true
    if (event.hand != EquipmentSlot.HAND) return
    when (event.action) {
      Action.LEFT_CLICK_AIR,
      Action.LEFT_CLICK_BLOCK -> fire(tank)
      Action.RIGHT_CLICK_AIR,
      Action.RIGHT_CLICK_BLOCK -> tank.mgUntil = tickCount + 6
      else -> Unit
    }
  }

  @EventHandler
  fun onHeld(event: PlayerItemHeldEvent) {
    if (driving(event.player) != null) event.isCancelled = true
  }

  @EventHandler
  fun onDrop(event: PlayerDropItemEvent) {
    if (isControl(event.itemDrop.itemStack)) event.isCancelled = true
  }

  @EventHandler
  fun onSwap(event: PlayerSwapHandItemsEvent) {
    if (driving(event.player) != null) event.isCancelled = true
  }

  @EventHandler
  fun onInventory(event: InventoryClickEvent) {
    if (isControl(event.currentItem) || isControl(event.cursor)) event.isCancelled = true
    if (
        event.hotbarButton >= 0 && isControl(event.whoClicked.inventory.getItem(event.hotbarButton))
    )
        event.isCancelled = true
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    removeControl(event.player)
  }

  private fun fire(tank: Tank) {
    if (tank.reload > 0) return
    if (tank.ammo <= 0) {
      tank.driver?.sendActionBar(legacy.deserialize("§c主砲の弾がありません"))
      return
    }
    tank.reload = (tank.spec.reloadSeconds * 20).toInt()
    tank.ammo--
    val origin = tank.muzzle()
    val dir = tank.gunDirection()
    shells += Shell(origin, dir.multiply(tank.spec.muzzleVelocity / 20.0), tank, tank.world)
    val at = origin.toLocation(tank.world)
    tank.world.playSound(at, Sound.ENTITY_GENERIC_EXPLODE, 3.0f, 1.3f)
    tank.world.spawnParticle(Particle.FLAME, at, 12, 0.15, 0.15, 0.15, 0.05)
    tank.world.spawnParticle(Particle.LARGE_SMOKE, at, 8, 0.2, 0.2, 0.2, 0.02)
  }

  private fun tick() {
    tickCount++
    for (tank in tanks.toList()) {
      if (!tank.isSeated()) {
        destroy(tank)
        continue
      }
      tank.tick()
      engineSound(tank)
      if (tank.mgUntil >= tickCount) machineGun(tank)
      tank.driver?.let { hud(it, tank) }
    }
    val iterator = shells.iterator()
    while (iterator.hasNext()) {
      if (!stepShell(iterator.next())) iterator.remove()
    }
  }

  /**
   * エンジンのうなりと履帯の音。重い車種ほど低く、速いほど高く大きくする。 ponytail: バニラの音の流用。音色は実機で聞いて差し替える（resource pack
   * を使えば実車の録音も鳴らせる）。
   */
  private fun engineSound(tank: Tank) {
    val ratio = minOf(1.0, kotlin.math.abs(tank.speed) / TankRules.maxSpeed(tank.spec)).toFloat()
    val base = (0.75 - tank.spec.tonnes / 200.0).toFloat()
    val at = Location(tank.world, tank.x, tank.y + 1.0, tank.z)
    if (tickCount % 4 == 0)
        tank.world.playSound(
            at,
            Sound.ENTITY_WARDEN_AMBIENT,
            0.5f + ratio * 0.5f,
            base + ratio * 0.35f,
        )
    if (ratio > 0.05f && tickCount % 5 == 0)
        tank.world.playSound(
            at,
            Sound.ENTITY_IRON_GOLEM_STEP,
            0.3f + ratio * 0.4f,
            0.5f + ratio * 0.5f,
        )
  }

  private fun hud(player: Player, tank: Tank) {
    val total = (tank.spec.reloadSeconds * 20).toInt()
    val bar = "■".repeat((total - tank.reload) * 10 / total).padEnd(10, '□')
    player.sendActionBar(
        legacy.deserialize(
            "§a${tank.spec.model} 耐久 ${tank.hp.toInt()} §7| §e主砲 $bar 残 ${tank.ammo} §7| §f${(tank.speed * 72).toInt()} km/h"
        )
    )
  }

  /** 射線上で最も近い戦車（[except] を除く）。 */
  private fun nearestTank(
      world: World,
      start: Vector,
      dir: Vector,
      maxDistance: Double,
      except: Tank?,
  ): Pair<Tank, TankHit>? =
      tanks
          .filter { it !== except && it.world == world }
          .mapNotNull { tank -> tank.hitTest(start, dir, maxDistance)?.let { tank to it } }
          .minByOrNull { it.second.distance }

  /** 同軸機銃。毎分の発射数どおりに 1 tick あたりの弾数を出し、弾は即着（ヒットスキャン）。 */
  private fun machineGun(tank: Tank) {
    val driver = tank.driver ?: return
    tank.mgCarry += tank.spec.mgRoundsPerMinute / 1200.0
    while (tank.mgCarry >= 1.0) {
      tank.mgCarry -= 1.0
      val start = tank.coaxialMuzzle()
      val dir = tank.gunDirection()
      val hit =
          tank.world.rayTrace(
              start.toLocation(tank.world),
              dir,
              TankRules.MG_RANGE,
              FluidCollisionMode.NEVER,
              true,
              0.1,
          ) {
            it is LivingEntity && it != driver
          }
      var distance = hit?.hitPosition?.distance(start) ?: TankRules.MG_RANGE
      val armored = nearestTank(tank.world, start, dir, distance, tank)
      if (armored != null) distance = armored.second.distance
      else (hit?.hitEntity as? LivingEntity)?.damage(TankRules.MG_DAMAGE, driver)
      val end = start.clone().add(dir.clone().multiply(distance))
      val step = maxOf(1.5, distance / 20.0)
      var d = 1.0
      while (d < distance) {
        tank.world.spawnParticle(
            Particle.CRIT,
            start.clone().add(dir.clone().multiply(d)).toLocation(tank.world),
            1,
            0.0,
            0.0,
            0.0,
            0.0,
        )
        d += step
      }
      if (hit != null || armored != null)
          tank.world.spawnParticle(
              Particle.SMALL_FLAME,
              end.toLocation(tank.world),
              2,
              0.05,
              0.05,
              0.05,
              0.01,
          )
      tank.world.playSound(start.toLocation(tank.world), Sound.BLOCK_NOTE_BLOCK_SNARE, 1.5f, 0.6f)
    }
  }

  /** 砲弾を 1 tick 進める。当たった・寿命が尽きたら false。 */
  private fun stepShell(shell: Shell): Boolean {
    val world = shell.world
    val length = shell.vel.length()
    val dir = shell.vel.clone().normalize()
    var best = length
    val block =
        world.rayTraceBlocks(
            shell.pos.toLocation(world),
            dir,
            length,
            FluidCollisionMode.NEVER,
            true,
        )
    if (block != null) best = block.hitPosition.distance(shell.pos)
    val target = nearestTank(world, shell.pos, dir, best, shell.shooter)
    if (target != null) best = target.second.distance
    if (target != null || block != null) {
      val at = shell.pos.clone().add(dir.multiply(best))
      world.spawnParticle(Particle.EXPLOSION, at.toLocation(world), 1)
      world.playSound(at.toLocation(world), Sound.ENTITY_GENERIC_EXPLODE, 2.0f, 1.0f)
      target?.let { (tank, hit) -> hit(tank, hit, shell, shell.travelled + best) }
      return false
    }
    shell.pos.add(shell.vel)
    shell.travelled += length
    shell.vel.y -= TankRules.GRAVITY
    world.spawnParticle(Particle.SMOKE, shell.pos.toLocation(world), 2, 0.0, 0.0, 0.0, 0.0)
    return --shell.life > 0
  }

  /** 当たった面の装甲を、傾斜と入射角で実質の厚さにして貫通力と比べる。 */
  private fun hit(target: Tank, hit: TankHit, shell: Shell, distance: Double) {
    val armor = target.spec.armor
    val cos =
        TankRules.impactCos(
            hit.localDir.x,
            hit.localDir.y,
            hit.localDir.z,
            TankRules.normal(armor, hit.face),
        )
    val plate = TankRules.thickness(armor, hit.face)
    val effective = plate / maxOf(cos, 1.0e-3)
    val penetration = TankRules.penetration(shell.shooter.spec, distance)
    val result =
        when {
          cos < TankRules.RICOCHET_COS -> "§7跳弾"
          penetration >= effective -> {
            target.hp -= shell.shooter.spec.damage
            "§c貫通 -${shell.shooter.spec.damage.toInt()}"
          }
          else -> "§7非貫通"
        }
    val message =
        legacy.deserialize(
            "$result §f${hit.face.label} ${plate.toInt()}mm（実質 ${effective.toInt()}mm）/ 貫通力 ${penetration.toInt()}mm・${distance.toInt()}m"
        )
    // アクションバーは毎 tick の表示で上書きされるので、命中結果はチャットへ出す。
    shell.shooter.driver?.sendMessage(message)
    target.driver?.sendMessage(message)
    if (target.hp <= 0.0) explode(target)
  }
}
