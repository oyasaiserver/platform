package icu.oyasai.utilities.hats

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.YamlConfig
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.potion.PotionEffectType
import org.bukkit.scheduler.BukkitTask

/** `/h` で装備する内製パーティクル帽子。 */
object Hats : Listener, CommandExecutor {
  const val USE_PERMISSION = "oyasai.hats.use"
  const val DONATOR_PERMISSION = "oyasai.hats.donator"
  private const val LEGACY_COMMAND_PERMISSION = "particlehats.command.h"
  private const val LEGACY_ALL_PERMISSION = "particlehats.particle.all"

  private val equipped = ConcurrentHashMap<UUID, List<String>>()
  private var maxHats = 7
  private var tick = 0
  private var task: BukkitTask? = null
  private val playersFile by lazy { YamlConfig("Hats/players.yml") }

  fun onEnable() {
    File(OyasaiUtilities.plugin.dataFolder, "Hats").mkdirs()
    val config = YamlConfig("Hats/config.yml", true)
    config.saveDefault()
    config.reload()
    maxHats = config.getInt("max-hats", 7).coerceIn(1, 28)
    HatsMenu.load()
    Bukkit.getOnlinePlayers().forEach(::loadPlayer)
    val plugin = OyasaiUtilities.plugin
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.server.pluginManager.registerEvents(HatsGui, plugin)
    plugin.server.getPluginCommand("h")?.setExecutor(this)
    task = Bukkit.getScheduler().runTaskTimer(plugin, Runnable { tick() }, 1L, 1L)
  }

  fun onDisable() {
    task?.cancel()
    task = null
    HatsGui.closeAll()
    Bukkit.getOnlinePlayers().forEach(::savePlayer)
    equipped.clear()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              sender.sendMessage("§cこのコマンドはプレイヤーのみ実行できます。")
              return true
            }
    if (!player.hasPermission(USE_PERMISSION) && !player.hasPermission(LEGACY_COMMAND_PERMISSION)) {
      player.sendMessage("§c帽子メニューを開く権限がありません。")
      return true
    }
    HatsGui.open(player)
    return true
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    loadPlayer(event.player)
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    savePlayer(event.player)
    equipped.remove(event.player.uniqueId)
  }

  fun equippedIds(player: Player): List<String> = equipped[player.uniqueId].orEmpty()

  fun isEquipped(player: Player, id: String): Boolean = equippedIds(player).contains(id)

  internal fun toggle(player: Player, hat: HatDefinition): Boolean {
    if (!canEquip(player, hat)) {
      player.sendMessage("§cこのパーティクルを装備する権限がありません。")
      return false
    }
    val current = equippedIds(player).toMutableList()
    if (current.remove(hat.id)) {
      equipped[player.uniqueId] = current
      savePlayer(player)
      player.sendMessage("§7${hat.name}§r §7を外しました。")
      return true
    }
    if (current.size >= maxHats) {
      player.sendMessage("§c同時に装備できるのは ${maxHats} 個までです。")
      return false
    }
    current += hat.id
    equipped[player.uniqueId] = current
    savePlayer(player)
    player.sendMessage("§a${hat.name}§r §aを装備しました。")
    return true
  }

  internal fun canEquip(player: Player, hat: HatDefinition): Boolean {
    if (player.hasPermission(DONATOR_PERMISSION)) return true
    if (player.hasPermission("group.donator")) return true
    if (player.hasPermission(LEGACY_ALL_PERMISSION)) return true
    if (player.hasPermission("oyasai.hats.${hat.id}")) return true
    return player.hasPermission("particlehats.particle.${hat.permission}")
  }

  fun hidden(player: Player): Boolean {
    return player.isInvisible || player.hasPotionEffect(PotionEffectType.INVISIBILITY)
  }

  private fun tick() {
    tick++
    for (player in Bukkit.getOnlinePlayers()) {
      if (!player.isOnline || player.isDead || hidden(player)) continue
      val hats = equipped[player.uniqueId].orEmpty()
      if (hats.isEmpty()) continue
      for (id in hats) {
        val hat = HatsMenu.byId(id) ?: continue
        if (!canEquip(player, hat) || !hat.renders) continue
        if (tick % hat.updateFrequency != 0) continue
        if (!modeActive(player, hat.mode)) continue
        HatsRenderer.render(player, hat, tick)
      }
    }
  }

  private fun modeActive(player: Player, mode: HatMode): Boolean =
      when (mode) {
        HatMode.ALWAYS -> true
        HatMode.SPRINTING -> player.isSprinting
        HatMode.GLIDING -> player.isGliding
        HatMode.FLYING -> player.isFlying
      }

  private fun loadPlayer(player: Player) {
    val ids =
        playersFile.getStringList(player.uniqueId.toString()).filter { HatsMenu.byId(it) != null }
    equipped[player.uniqueId] = ids
  }

  private fun savePlayer(player: Player) {
    playersFile.set(player.uniqueId.toString(), equipped[player.uniqueId].orEmpty())
    playersFile.save()
  }
}
