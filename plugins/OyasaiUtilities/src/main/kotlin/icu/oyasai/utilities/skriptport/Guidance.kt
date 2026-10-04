package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.Main
import java.io.File
import java.text.DateFormat
import java.util.Date
import java.util.UUID
import java.util.logging.Level
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent

internal fun canGuide(hasPermission: (String) -> Boolean): Boolean =
    hasPermission("group.default") && !hasPermission("group.chukyu")

class Guidance(private val plugin: Main) : CommandExecutor, Listener {
  private val store = GuidanceStore(File(plugin.dataFolder, "guidance.db"))
  private val modes = mutableSetOf<UUID>()
  private val pairs = mutableMapOf<UUID, UUID>()
  private val pairNames = mutableMapOf<UUID, String>()
  private val guiding = mutableMapOf<UUID, UUID>()
  private val clickTicks = mutableMapOf<UUID, Int>()
  private var ready = false

  fun enable() {
    listOf("annaimode", "guidecheck", "annai", "annai-en").forEach {
      requireNotNull(plugin.getCommand(it)).setExecutor(this)
    }
    try {
      store.open()
      // 一時的な取り込み。本番で全件取り込み済みを確認したら CSV 読込とこの分岐を撤去する。
      val legacy = File(plugin.dataFolder.parentFile, "Skript/guide_data.csv")
      if (legacy.isFile && store.canImport()) {
        val data = readGuidanceCsv(legacy)
        if (store.importLegacy(data))
            plugin.logger.info(
                "Guidance import: clicked=${data.clicked.size}, guidedby=${data.guides.size}, guidedbyname=${data.names.size}, guidedat=${data.dates.size}"
            )
      }
      ready = true
      plugin.server.pluginManager.registerEvents(this, plugin)
    } catch (failure: Exception) {
      plugin.logger.log(Level.SEVERE, "Guidance storage failed to start.", failure)
      store.close()
    }
  }

  fun disable() {
    modes.clear()
    pairs.clear()
    pairNames.clear()
    guiding.clear()
    clickTicks.clear()
    ready = false
    store.close()
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
              sender.sendMessage("このコマンドはプレイヤー専用です。")
              return true
            }
    if (command.name == "annai" || command.name == "annai-en") {
      val section = args.joinToString(" ").lowercase()
      GuidanceMessages.menus.getValue(command.name)[section]?.forEach {
        player.sendMessage(GuidanceMessages.component(it))
      }
      return true
    }
    if (!ready) return true
    if (command.name == "guidecheck") {
      if (args.size != 1) return false
      val target = plugin.server.getPlayer(args[0]) ?: return false
      val record = store.record(target.uniqueId)
      if (record?.guide == null) {
        player.sendMessage("§e${target.name}さんはまだ案内を受けていません")
        return true
      }
      player.sendMessage("§a${target.name}さんの案内情報:")
      player.sendMessage("§7 案内者: §f${record.name ?: "<none>"}")
      val at =
          record.at?.let {
            DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT).format(Date(it))
          } ?: "<none>"
      player.sendMessage("§7 完了日時: §f$at")
      return true
    }
    if (args.size > 1) return false
    if (args.isEmpty()) {
      if (player.uniqueId !in modes) player.sendMessage("§c現在案内モードはオフです")
      else {
        turnOff(player)
        player.sendMessage("§c【システム】案内人モードを§lオフ§cにしました。")
      }
      return true
    }
    if (!player.hasPermission("group.jokyu")) {
      player.sendMessage("§cこのコマンドを使うには上級ランク(jokyu)が必要です")
      return true
    }
    if (player.uniqueId in modes) {
      player.sendMessage("§cすでに案内モードがオンです。先に /annaimode で解除してください")
      return true
    }
    val target = plugin.server.getPlayer(args[0]) ?: return false
    if (target == player) {
      player.sendMessage("§c自分自身を登録することはできません")
      return true
    }
    if (!canGuide(target::hasPermission)) {
      player.sendMessage("§c${target.name}さんは初心者グループではありません")
      return true
    }
    modes.add(player.uniqueId)
    pairs[target.uniqueId] = player.uniqueId
    pairNames[target.uniqueId] = player.name
    guiding[player.uniqueId] = target.uniqueId
    console("lp user ${player.uniqueId} parent add guide")
    player.displayName(
        LegacyComponentSerializer.legacyAmpersand().deserialize("${player.name}&7>&a${target.name}")
    )
    player.sendMessage("§a【システム】案内人モードを§lオン§aにしました。チャットに【案内人】と表示されます。")
    player.sendMessage("§a${target.name}さんの案内を開始しました！")
    target.sendMessage("§a${player.name}さんが案内してくれます！各エリアの看板をクリックしてください")
    return true
  }

  private fun turnOff(player: Player) {
    modes.remove(player.uniqueId)
    guiding.remove(player.uniqueId)?.let {
      pairs.remove(it)
      pairNames.remove(it)
    }
    pairs.remove(player.uniqueId)
    console("lp user ${player.uniqueId} parent remove guide")
    player.displayName(Component.text(player.name))
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    if (event.player.uniqueId in modes) turnOff(event.player)
    clickTicks.remove(event.player.uniqueId)
  }

  @EventHandler(ignoreCancelled = true)
  fun onBreak(event: BlockBreakEvent) {
    val sign = event.block.state as? Sign ?: return
    if (line(sign, 0) != "[案内完了]" || event.player.hasPermission("group.admin")) return
    event.isCancelled = true
    event.player.sendMessage("§cこの看板は保護されています")
  }

  @EventHandler(ignoreCancelled = true)
  fun onClick(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_BLOCK && event.action != Action.RIGHT_CLICK_AIR) return
    // Skript の click event と同様、同 tick の両手の通知を最初の 1 回だけ扱う。
    if (clickTicks.put(event.player.uniqueId, Bukkit.getCurrentTick()) == Bukkit.getCurrentTick())
        return
    val sign = event.clickedBlock?.state as? Sign ?: return
    if (line(sign, 0) != "[案内完了]") return
    val player = event.player
    val signId = line(sign, 1)
    if (signId.isEmpty()) {
      player.sendMessage("§cこの看板にはIDが設定されていません")
      return
    }
    // クリック時は元 Skript と同じく group.default だけを確認する。
    if (!player.hasPermission("group.default")) {
      player.sendMessage("§cこの看板は初心者専用です")
      return
    }
    val guide = pairs[player.uniqueId]
    if (guide == null) {
      player.sendMessage("§c案内者が登録されていません。案内者に /annaimode であなたを登録してもらってください")
      return
    }
    if (store.clicked(player.uniqueId, signId)) {
      player.sendMessage("§c${signId}エリアはすでにクリック済みです")
      return
    }
    val name = pairNames[player.uniqueId] ?: "<none>"
    console("token add $name 10")
    store.complete(player.uniqueId, signId, guide, name, System.currentTimeMillis())
    player.sendMessage("§a${signId}エリアの案内完了！ありがとうございました！")
    plugin.server
        .getPlayer(guide)
        ?.sendMessage("§a${player.name}さんが${signId}エリアの案内を完了しました！10トークンを獲得しました！")
  }

  private fun line(sign: Sign, index: Int): String =
      PlainTextComponentSerializer.plainText().serialize(sign.getSide(Side.FRONT).line(index))

  private fun console(command: String) {
    plugin.server.dispatchCommand(plugin.server.consoleSender, command)
  }
}
