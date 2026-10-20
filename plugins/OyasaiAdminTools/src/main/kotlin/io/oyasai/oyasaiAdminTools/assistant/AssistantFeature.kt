package io.oyasai.oyasaiAdminTools.assistant

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.time.Duration
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlinx.coroutines.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickCallback
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.messaging.PluginMessageListener

internal class AssistantFeature(private val plugin: OyasaiAdminTools) :
    CommandExecutor, PluginMessageListener, Listener, AutoCloseable {
  private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
  private val jobs = ConcurrentHashMap<UUID, Job>()
  private val requestIds = mutableMapOf<UUID, String>()
  private val pending = mutableMapOf<UUID, Pending>()
  private val settings = plugin.config.getConfigurationSection("assistant")
  private val rules = AssistantRules(settings?.getStringList("blacklist").orEmpty())
  private lateinit var allows: AssistantAllowStore
  private val calls = AssistantCalls(settings?.getInt("max-tool-calls-per-minute", 30) ?: 30)
  private val senderPermissions = settings?.getStringList("sender-permissions").orEmpty()
  private val playerCommands =
      if (settings?.contains("player-commands") == true) settings.getStringList("player-commands")
      else AssistantSenderChoice.defaults
  private val senderWait = (settings?.getLong("sender-wait-ms", 1500) ?: 1500).coerceIn(100, 10000)
  private val senderQuiet = (settings?.getLong("sender-idle-ms", 300) ?: 300).coerceIn(50, 5000)
  private val memory = AssistantMemory(plugin.dataFolder.resolve("assistant-memory").toPath())
  private val records = ConcurrentHashMap<String, AssistantMemory.Record>()
  private val lastOutput = ConcurrentHashMap<UUID, String>()

  fun enable() {
    AssistantCommandSender.validate(senderPermissions)
    allows = AssistantAllowStore(plugin.db, rules)
    if (
        settings?.contains("allowed-commands") == true ||
            settings?.contains("read-only-commands") == true
    )
        plugin.logger.warning(
            "Assistant: allowed-commands/read-only-commands are obsolete and ignored; use /assistant allow and blacklist."
        )
    plugin.getCommand("assistant")!!.setExecutor(this)
    plugin.getCommand("assistant")!!.tabCompleter =
        org.bukkit.command.TabCompleter { _, _, _, _ -> emptyList() }
    plugin.server.messenger.registerIncomingPluginChannel(plugin, CHANNEL, this)
    plugin.server.messenger.registerOutgoingPluginChannel(plugin, CHANNEL)
    plugin.server.pluginManager.registerEvents(this, plugin)
  }

  override fun onPluginMessageReceived(channel: String, player: Player, message: ByteArray) {
    if (channel != CHANNEL) return
    val id = player.uniqueId
    val operator = "${player.name}($id)"
    if (!player.hasPermission(PERMISSION) || settings?.getBoolean("enabled", false) != true) {
      audit(operator, "denied:message", "disabled or permission")
      return
    }
    val request =
        try {
          AssistantProtocol.decode(message)
        } catch (failure: Exception) {
          audit(operator, "denied:message", failure.message.orEmpty())
          AssistantProtocol.requestId(message)?.let { reply(player, it, "invalid request", true) }
          return
        }
    val rejection = calls.begin(id)
    if (rejection != null) {
      audit(operator, "denied:message", rejection)
      reply(player, request.id, rejection, true)
      return
    }
    requestIds[id] = request.id
    val record = records.computeIfAbsent(operator) { AssistantMemory.Record(player.name) }
    audit(operator, "tool:${request.tool}", request.args.toString())
    val job =
        scope.launch(start = CoroutineStart.LAZY) {
          try {
            val result =
                when (request.tool) {
                  "get_context" ->
                      onMain {
                        context(player(id)) +
                            (lastOutput[id]?.let { "\n直近のコマンド結果（観測データ）: ${it}" } ?: "")
                      }
                  "run_command" ->
                      runCommand(
                          id,
                          operator,
                          request.args.getValue("command"),
                          request.args.getValue("summary"),
                      )
                  "search_memory" ->
                      memory.search(
                          request.args.getValue("query"),
                          request.args.getValue("days").toInt(),
                      )
                  "record_memory" -> {
                    val summary = request.args.getValue("summary")
                    require(summary.length <= 2000 && summary.none { it.isISOControl() })
                    memory.append(record, summary)
                    records.remove(operator, record)
                    "記録しました。"
                  }
                  else -> error("Unknown tool")
                }
            onMain {
              finishCall(id)
              reply(player, request.id, result, false)
            }
          } catch (failure: CancellationException) {
            throw failure
          } catch (failure: Throwable) {
            audit(operator, "failed", failure.javaClass.simpleName)
            onMain {
              finishCall(id)
              reply(player, request.id, "道具の呼び出しに失敗しました。", true)
            }
          }
        }
    jobs[id] = job
    job.start()
  }

  private fun finishCall(id: UUID) {
    pending.remove(id)
    calls.finish(id)
    jobs.remove(id)
    requestIds.remove(id)
  }

  private fun reply(player: Player, requestId: String, value: String, error: Boolean) {
    if (player.isOnline && plugin.isEnabled)
        player.sendPluginMessage(plugin, CHANNEL, AssistantProtocol.encode(requestId, value, error))
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val id = event.player.uniqueId
    requestIds.remove(id)?.let { reply(event.player, it, "拒否: 本人が実行しませんでした", false) }
    pending.remove(id)?.decision?.complete(0)
    jobs.remove(id)?.cancel()
    calls.finish(id)
    // Never replay a disconnected operator's request on rejoin.
    lastOutput.remove(id)
    records.remove("${event.player.name}($id)")
    audit("${event.player.name}($id)", "cancel", "offline")
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission(PERMISSION)) {
      sender.sendMessage("権限がありません。")
      return true
    }
    if (args.firstOrNull()?.equals("allow", true) == true) {
      manageAllows(sender, args.drop(1))
      return true
    }
    sender.sendMessage("クライアントの AI Bridge の /ai を使ってください")
    return true
  }

  private fun player(id: UUID): Player {
    check(plugin.isEnabled)
    val player = plugin.server.getPlayer(id) ?: error("Operator offline")
    check(settings?.getBoolean("enabled", false) == true) { "Assistant disabled" }
    check(player.hasPermission(PERMISSION)) { "Operator permission revoked" }
    return player
  }

  private fun context(player: Player): String {
    val location = player.location
    val nearby =
        player
            .getNearbyEntities(48.0, 48.0, 48.0)
            .filterIsInstance<Player>()
            .filter { player.canSee(it) && it.location.distance(location) <= 48 }
            .sortedBy { it.location.distanceSquared(location) }
            .take(20)
    val target =
        player.world
            .rayTrace(
                player.eyeLocation,
                player.eyeLocation.direction,
                48.0,
                org.bukkit.FluidCollisionMode.NEVER,
                true,
                0.3,
            ) {
              it is Player && it != player && player.canSee(it)
            }
            ?.hitEntity as? Player
    return "運営=${player.name}; world=${player.world.name}; 座標=${location.blockX},${location.blockY},${location.blockZ}; " +
        "視線の先=${target?.name ?: "なし"}; 周囲=" +
        nearby.joinToString {
          "${it.name}(距離=${"%.1f".format(java.util.Locale.ROOT, it.location.distance(location))})"
        }
  }

  private fun manageAllows(sender: CommandSender, args: List<String>) {
    val operator = "${sender.name}(${if (sender is Player) sender.uniqueId else "console"})"
    if (args == listOf("list")) {
      val entries = allows.list()
      sender.sendMessage("共有許可リスト: ${entries.size}件")
      entries.forEach {
        sender.sendMessage(
            "${it.id}: ${it.scope} — ${it.name} (${it.uuid}) / ${java.time.Instant.ofEpochMilli(it.addedAt)}"
        )
      }
    } else if (args.size == 2 && args[0] == "remove" && args[1].toLongOrNull() != null) {
      val removed = allows.remove(args[1].toLong())
      if (removed == null) sender.sendMessage("その番号はありません。")
      else {
        audit(operator, "allow-remove", "${removed.id} ${removed.scope}")
        sender.sendMessage("許可を削除しました: ${removed.scope}")
      }
    } else sender.sendMessage("/assistant allow list | /assistant allow remove <番号>")
  }

  private fun resolve(player: Player, operator: String, text: String): NormalizedCommand? {
    val command = AssistantRules.normalize(text, plugin.server.commandMap)
    val reason =
        when {
          command == null -> "invalid"
          rules.isBlacklisted(command.text) -> "blacklist"
          !command.registered.testPermissionSilent(player) -> "permission"
          else -> return command
        }
    audit(operator, "denied:$reason", command?.text ?: text)
    player.sendMessage("拒否: 禁止項目・権限・コマンドの登録を確認してください。")
    return null
  }

  private suspend fun runCommand(
      id: UUID,
      operator: String,
      text: String,
      summary: String,
  ): String {
    val command =
        onMain { resolve(player(id), operator, text) } ?: return "拒否: 禁止項目・権限・コマンドの登録を確認してください。"
    if (
        summary.isBlank() || summary.length > 500 || summary.any { it.isISOControl() || it == '§' }
    ) {
      audit(operator, "denied:summary", command.text)
      return "拒否: 要約は500文字以内の1行にしてください。"
    }
    if (onMain { allows.allows(command.text) })
        return execute(
            id,
            operator,
            command,
            false,
            AssistantSenderChoice.operator(command.text, playerCommands),
        )
    return propose(
        id,
        operator,
        command,
        summary,
        AssistantSenderChoice.operator(command.text, playerCommands),
    )
  }

  private suspend fun execute(
      id: UUID,
      operator: String,
      command: NormalizedCommand,
      remember: Boolean,
      asOperator: Boolean,
  ): String {
    var collector: AssistantOutputCollector? = null
    try {
      val immediate = onMain {
        val player = player(id)
        val fresh = resolve(player, operator, command.text) ?: return@onMain "拒否: 実行前の再確認に失敗しました。"
        if (fresh.text != command.text || fresh.registration !== command.registration)
            return@onMain "拒否: コマンドの登録が変更されました。"
        val accepted =
            if (asOperator) {
              audit(operator, "execute", "sendAs=operator ${command.text}")
              player.performCommand(command.text)
            } else {
              val sender =
                  AssistantCommandSender(
                      plugin.server,
                      id,
                      PERMISSION,
                      player.name,
                      senderPermissions,
                  )
              if (!command.registered.testPermissionSilent(sender))
                  return@onMain "拒否: AI送り主の権限上限で拒否しました。"
              collector = AssistantOutputCollector(sender, senderQuiet, senderWait)
              audit(operator, "execute", "sendAs=assistant ${command.text}")
              sender.dispatch(command.text)
            }
        audit(
            operator,
            "execution-result",
            "sendAs=${if (asOperator) "operator" else "assistant"} accepted=$accepted",
        )
        if (remember && accepted && allows.add(command.text, player.name, id)) {
          audit(operator, "allow-add", AssistantRules.scope(command.text).orEmpty())
          player.sendMessage("運営全員の共有許可リストへ追加しました: ${AssistantRules.scope(command.text)}")
        }
        if (asOperator) AssistantCommandOutput.playerOnly() else null
      }
      val result = immediate ?: collector!!.collect()
      if (result.startsWith("拒否")) audit(operator, "denied:execution", command.text)
      lastOutput[id] = result.take(8000)
      audit(operator, "sender-output", result.take(500))
      if (!asOperator && AssistantSenderChoice.playerRequired(result)) {
        return propose(id, operator, command, "AI送り主ではプレイヤー専用エラーでした。本人として実行するか確認してください。", true)
      }

      return result
    } finally {
      collector?.close()
    }
  }

  private suspend fun propose(
      id: UUID,
      operator: String,
      command: NormalizedCommand,
      summary: String,
      asOperator: Boolean,
  ): String {
    val proposal = Pending(command, System.nanoTime() + 60_000_000_000L)
    onMain {
      val player = player(id)
      pending[id] = proposal
      audit(
          operator,
          "propose",
          "sendAs=${if (asOperator) "operator" else "assistant"} ${command.text} | $summary",
      )
      fun button(label: String, action: Int): Component =
          Component.text(
                  label,
                  when (action) {
                    1 -> NamedTextColor.GREEN
                    2 -> NamedTextColor.GOLD
                    else -> NamedTextColor.RED
                  },
              )
              .hoverEvent(
                  Component.text(
                      if (action == 2)
                          "運営全員に効く常時許可: ${AssistantRules.scope(command.text)}\n" +
                              if (' ' !in command.text) "引数なしのときだけ確認なしになります。"
                              else "この範囲の引数は何でも確認なしになります。"
                      else "/${command.text}"
                  )
              )
              .clickEvent(
                  ClickEvent.callback(
                      { audience ->
                        if (audience is Player && audience.uniqueId == id && plugin.isEnabled) {
                          plugin.server.scheduler.runTask(
                              plugin,
                              Runnable {
                                if (pending[id] !== proposal) return@Runnable
                                val valid =
                                    audience.isOnline &&
                                        audience.hasPermission(PERMISSION) &&
                                        System.nanoTime() < proposal.expiresAt &&
                                        plugin.isEnabled
                                proposal.decision.complete(if (valid) action else 0)
                              },
                          )
                        }
                      },
                      ClickCallback.Options.builder()
                          .uses(ClickCallback.UNLIMITED_USES)
                          .lifetime(Duration.ofSeconds(60))
                          .build(),
                  )
              )
      proposal.card =
          Component.text(
                  "/${command.text}\n送り主: ${if (asOperator) "運営本人（出力は本人画面）" else "AI専用（出力はAIへ）"}\n"
              )
              .append(button(if (asOperator) "[本人として実行]" else "[実行]", 1))
      if (AssistantRules.scope(command.text) != null)
          proposal.card =
              proposal.card.append(Component.text("   ")).append(button("[次から確認しない]", 2))
      proposal.card = proposal.card.append(Component.text("   ")).append(button("[やめる]", 0))
      plugin.server.scheduler.runTaskLater(
          plugin,
          Runnable {
            if (pending[id] === proposal && proposal.decision.complete(0)) {
              audit(operator, "cancel", "expired: ${command.text}")
            }
          },
          1200L,
      )
      player.sendMessage(Component.text(summary).append(Component.newline()).append(proposal.card))
    }
    val action = withTimeoutOrNull(60_000) { proposal.decision.await() } ?: 0
    onMain { if (pending[id] === proposal) pending.remove(id) }
    if (action == 0) {
      audit(operator, "cancel", command.text)
      return "拒否: 本人が実行しませんでした"
    }
    return execute(id, operator, command, action == 2, asOperator)
  }

  private suspend fun <T> onMain(action: () -> T): T = suspendCancellableCoroutine { continuation ->
    plugin.server.scheduler.runTask(
        plugin,
        Runnable {
          if (continuation.isActive) {
            try {
              continuation.resume(action())
            } catch (failure: Throwable) {
              continuation.resumeWithException(failure)
            }
          }
        },
    )
  }

  private fun audit(operator: String, event: String, detail: String) {
    records[operator]?.add(event, detail)
    plugin.logger.info(
        "Assistant operator=$operator event=$event ${detail.replace(Regex("[\\p{Cntrl}§]"), " ").take(2000)}"
    )
  }

  override fun close() {
    pending.forEach { (_, proposal) -> proposal.decision.complete(0) }
    requestIds.forEach { (id, requestId) ->
      plugin.server.getPlayer(id)?.let { reply(it, requestId, "拒否: 本人が実行しませんでした", false) }
    }
    scope.cancel()
    pending.clear()
    requestIds.clear()
    jobs.clear()
    plugin.server.messenger.unregisterIncomingPluginChannel(plugin, CHANNEL, this)
    plugin.server.messenger.unregisterOutgoingPluginChannel(plugin, CHANNEL)
    HandlerList.unregisterAll(this)
  }

  private data class Pending(
      val command: NormalizedCommand,
      val expiresAt: Long,
      var card: Component = Component.empty(),
      val decision: CompletableDeferred<Int> = CompletableDeferred(),
  )

  companion object {
    const val CHANNEL = "oyasai:assistant"
    const val PERMISSION = "oyasai.admintools.assistant"
  }
}
