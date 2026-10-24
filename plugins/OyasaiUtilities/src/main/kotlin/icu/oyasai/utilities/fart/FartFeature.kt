package icu.oyasai.utilities.fart

import java.util.UUID
import kotlin.math.cos
import kotlin.math.min
import kotlin.math.sin
import kotlin.random.Random
import org.bukkit.Color
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.player.PlayerToggleSneakEvent

// しゃがむとおならの音と硫黄色の煙を出すモード。/fart でプレイヤーごとに切り替える
object FartFeature : Listener, CommandExecutor {
  enum class Mode {
    NORMAL,
    STAY,
    FLY,
  }

  private const val LIFT = 0.3
  private const val MAX_UP = 0.6

  // shortcut: 状態はメモリのみ、再起動後も残すなら永続化する
  private val modes = mutableMapOf<UUID, Mode>()

  fun toggle(id: UUID, mode: Mode = Mode.NORMAL): Mode? {
    if (modes[id] == mode || (mode == Mode.NORMAL && isOn(id))) {
      modes.remove(id)
      return null
    }
    modes[id] = mode
    return mode
  }

  fun isOn(id: UUID): Boolean = id in modes

  fun staysOnHead(p: Player): Boolean = modes[p.uniqueId] == Mode.STAY && p.vehicle is Player

  fun lifted(vy: Double): Double = min(vy + LIFT, MAX_UP)

  @EventHandler(priority = EventPriority.LOW, ignoreCancelled = true)
  fun onDismount(event: EntityDismountEvent) {
    val player = event.entity as? Player ?: return
    if (staysOnHead(player) && player.isSneaking && event.isCancellable) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = true)
  fun onDamage(event: EntityDamageEvent) {
    val player = event.entity as? Player ?: return
    if (event.cause == EntityDamageEvent.DamageCause.FALL && modes[player.uniqueId] == Mode.FLY)
        event.isCancelled = true
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("プレイヤーだけが使えます")
      return true
    }
    val mode =
        when {
          args.isEmpty() -> Mode.NORMAL
          args.size != 1 -> return false
          args[0].equals("stay", true) -> Mode.STAY
          args[0].equals("fly", true) -> Mode.FLY
          else -> return false
        }
    val next = toggle(sender.uniqueId, mode)
    sender.sendMessage(
        when (next) {
          Mode.NORMAL -> "おならモード ON: しゃがむと出ます"
          Mode.STAY -> "おならモード ON(居座り): 頭に乗ってしゃがんでも降りずにおならだけ出ます。降りるには /fart で OFF"
          Mode.FLY -> "おならモード ON(飛行): しゃがみ連打で少しずつ浮きます。落下ダメージは受けません"
          null -> "おならモード OFF"
        }
    )
    return true
  }

  // ponytail: クールダウンなし。連打で連発するので、うるさくなったら時刻マップを足す
  @EventHandler(ignoreCancelled = true)
  fun onSneak(event: PlayerToggleSneakEvent) {
    if (!event.isSneaking || !isOn(event.player.uniqueId)) return
    if (modes[event.player.uniqueId] == Mode.FLY) {
      val velocity = event.player.velocity
      velocity.y = lifted(velocity.y)
      event.player.velocity = velocity
      event.player.fallDistance = 0f
    }
    val world = event.player.world
    val at = event.player.location
    world.playSound(at, Sound.ENTITY_PUFFER_FISH_BLOW_OUT, 1f, 0.5f + Random.nextFloat() * 0.5f)
    // 視線と逆向きに0.5ブロック、おしりの高さから出す（yaw 0 = 南向きで前方は (-sin, cos)）
    val rad = Math.toRadians(at.yaw.toDouble())
    val behind = at.clone().add(sin(rad) * 0.5, 0.4, -cos(rad) * 0.5)
    world.spawnParticle(
        Particle.DUST,
        behind,
        12,
        0.15,
        0.1,
        0.15,
        0.0,
        Particle.DustOptions(Color.fromRGB(0xCC, 0xB8, 0x00), 1.0f),
    )
  }
}
