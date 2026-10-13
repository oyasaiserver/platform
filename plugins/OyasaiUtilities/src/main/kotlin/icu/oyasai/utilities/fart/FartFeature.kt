package icu.oyasai.utilities.fart

import java.util.UUID
import kotlin.math.cos
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
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerToggleSneakEvent

// しゃがむとおならの音と硫黄色の煙を出すモード。/fart でプレイヤーごとに切り替える
object FartFeature : Listener, CommandExecutor {
  // ponytail: 状態はメモリだけ。再起動でOFFに戻る。残すなら PersistentDataContainer へ
  private val on = mutableSetOf<UUID>()

  // 切り替え後の状態を返す
  fun toggle(id: UUID): Boolean {
    val nowOn = id !in on
    if (nowOn) on.add(id) else on.remove(id)
    return nowOn
  }

  fun isOn(id: UUID): Boolean = id in on

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
    val nowOn = toggle(sender.uniqueId)
    sender.sendMessage(if (nowOn) "おならモード ON: しゃがむと出ます" else "おならモード OFF")
    return true
  }

  // ponytail: クールダウンなし。連打で連発するので、うるさくなったら時刻マップを足す
  @EventHandler(ignoreCancelled = true)
  fun onSneak(event: PlayerToggleSneakEvent) {
    if (!event.isSneaking || !isOn(event.player.uniqueId)) return
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
