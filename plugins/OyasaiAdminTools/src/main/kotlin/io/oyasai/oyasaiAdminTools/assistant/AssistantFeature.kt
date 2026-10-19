package io.oyasai.oyasaiAdminTools.assistant

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.time.Duration
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicInteger
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

internal class AssistantFeature(private val plugin: OyasaiAdminTools) :
    CommandExecutor, AutoCloseable {
  private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
  private val jobs = ConcurrentHashMap<UUID, Job>()
  private val lastRequest = mutableMapOf<UUID, Long>()
  private val pending = mutableMapOf<UUID, Pending>()
  private val settings = plugin.config.getConfigurationSection("assistant")
  private val rules = AssistantRules(settings?.getStringList("blacklist").orEmpty())
  private lateinit var allows: AssistantAllowStore
  private val docs = AssistantDocs()
  private val maxCalls = (settings?.getInt("max-tool-calls", 12) ?: 12).coerceIn(1, 32)
  private val timeout = (settings?.getLong("timeout-seconds", 45) ?: 45).coerceIn(1, 180) * 1000
  private val cooldown = (settings?.getLong("cooldown-seconds", 10) ?: 10).coerceIn(0, 3600) * 1000
  private var agent: AssistantBackend? = null
  private val senderPermissions = settings?.getStringList("sender-permissions").orEmpty()
  private val playerCommands =
      if (settings?.contains("player-commands") == true) settings.getStringList("player-commands")
      else AssistantSenderChoice.defaults
  private val senderWait = (settings?.getLong("sender-wait-ms", 1500) ?: 1500).coerceIn(100, 10000)
  private val senderQuiet = (settings?.getLong("sender-idle-ms", 300) ?: 300).coerceIn(50, 5000)
  private val executions = ConcurrentHashMap<UUID, Job>()
  private val memory = AssistantMemory(plugin.dataFolder.resolve("assistant-memory").toPath())
  private val records = ConcurrentHashMap<String, AssistantMemory.Record>()
  private val sessionIdle = (settings?.getInt("session-idle-minutes", 10) ?: 10).coerceIn(1, 1440)
  private val sessionMessages =
      (settings?.getInt("session-max-messages", 40) ?: 40).coerceIn(4, 200)
  private val sessionChars =
      (settings?.getInt("session-max-chars", 48000) ?: 48000).coerceIn(2000, 200000)
  private val lastOutput = ConcurrentHashMap<UUID, Pair<Long, String>>()

  fun enable() {
    scope.launch {
      while (isActive) {
        delay(60000)
        lastOutput.entries.removeIf {
          System.currentTimeMillis() - it.value.first >= sessionIdle * 60000L
        }
      }
    }
    AssistantCommandSender.validate(senderPermissions)
    allows = AssistantAllowStore(plugin.db, rules)
    if (
        settings?.contains("allowed-commands") == true ||
            settings?.contains("read-only-commands") == true
    ) {
      plugin.logger.warning(
          "Assistant: allowed-commands/read-only-commands are obsolete and ignored; use /assistant allow and blacklist."
      )
    }
    val key = System.getenv(settings?.getString("api-key-env") ?: "OYASAI_ASSISTANT_API_KEY")
    if (settings?.getBoolean("enabled", false) == true && !key.isNullOrBlank()) {
      agent =
          when (settings.getString("backend", "koog")) {
            "koog" ->
                AssistantAgent(
                    settings.getString("provider", "openrouter")!!.lowercase(java.util.Locale.ROOT),
                    settings.getString("model", "deepseek/deepseek-v4.1-flash")!!.also {
                      require(it.isNotBlank())
                    },
                    key,
                )
            "pi" ->
                AssistantPi(
                    settings.getString("pi.node", "node")!!,
                    settings.getString("pi.script", "packages/oyasai-assistant-pi/dist/main.js")!!,
                    settings.getString(
                        "pi.docs",
                        plugin.dataFolder.resolve("assistant-docs").absolutePath,
                    )!!,
                    settings.getString("pi.model", "deepseek/deepseek-v4.1-flash")!!,
                    key,
                    timeout,
                    plugin.logger,
                    idleMinutes = sessionIdle,
                    maxMessages = sessionMessages,
                    maxChars = sessionChars,
                )
            "pi-container" ->
                AssistantPi(
                    settings.getString("pi-container.podman", "/usr/bin/podman")!!,
                    "",
                    settings.getString(
                        "pi.docs",
                        plugin.dataFolder.resolve("assistant-docs").absolutePath,
                    )!!,
                    settings.getString("pi.model", "deepseek/deepseek-v4.1-flash")!!,
                    key,
                    timeout,
                    plugin.logger,
                    settings.getString(
                        "pi-container.image",
                        "localhost/oyasai-assistant-pi:prototype",
                    )!!,
                    sessionIdle,
                    sessionMessages,
                    sessionChars,
                )
            else -> error("Unknown assistant backend")
          }
    }
    plugin.getCommand("assistant")!!.setExecutor(this)
    plugin.getCommand("assistant")!!.tabCompleter =
        org.bukkit.command.TabCompleter { _, _, _, _ -> emptyList() }
    plugin.logger.info(
        "Assistant ${if (agent == null) "disabled (configuration or missing key)" else "enabled"}"
    )
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
    val backend = agent
    if (backend == null) {
      sender.sendMessage("運営アシスタントは無効です。")
      return true
    }
    if (sender !is Player) {
      sender.sendMessage("ゲーム内のプレイヤーから依頼してください。")
      return true
    }
    if (args.size == 1 && args[0].equals("reset", true)) {
      if (backend !is AssistantPi) {
        sender.sendMessage("このバックエンドは会話の記憶を持ちません。")
        return true
      }
      val id = sender.uniqueId
      val previousExecution = executions[id]
      val reset =
          scope.launch(start = CoroutineStart.LAZY) {
            jobs[id]?.cancelAndJoin()
            previousExecution?.cancelAndJoin()
            onMain {
              pending.remove(id)?.let { audit("${sender.name}($id)", "cancel", it.command.text) }
              lastOutput.remove(id)
            }
            backend.reset(id.toString())
            onMain { player(id).sendMessage("自分の短い記憶を消しました。共有の実行記録は残ります。") }
          }
      executions[id] = reset
      reset.invokeOnCompletion { executions.remove(id, reset) }
      reset.start()
      return true
    }
    val request = args.joinToString(" ")
    if (request.isBlank() || request.length > 1000) {
      sender.sendMessage("/assistant <依頼>（1000文字以内）")
      return true
    }
    val id = sender.uniqueId
    val now = System.currentTimeMillis()
    if (jobs.containsKey(id) || executions.containsKey(id) || pending.containsKey(id)) {
      sender.sendMessage("前の依頼または確認待ちの提案があります。")
      return true
    }
    if (now - (lastRequest[id] ?: 0) < cooldown) {
      sender.sendMessage("少し待ってから依頼してください。")
      return true
    }
    lastRequest[id] = now
    val operator = "${sender.name}($id)"
    val record = AssistantMemory.Record(sender.name, request)
    records[operator] = record
    audit(operator, "request", request)
    sender.sendMessage("調べています。実行が必要なら確認ボタンを表示します。")
    val count = AtomicInteger()
    val progress =
        AssistantProgress(
            onLocalTool = { tool, args -> checkBudget(count, operator, tool, args) },
            onResult = { tool, result -> audit(operator, "tool-result:$tool", result.take(500)) },
        )
    val job =
        scope.launch(start = CoroutineStart.LAZY) {
          try {
            withTimeout(timeout) { respond(id, operator, request, backend, count, progress) }
          } catch (failure: Throwable) {
            audit(
                operator,
                if (failure is CancellationException) "cancel" else "failed",
                failure.javaClass.simpleName,
            )
            if (currentCoroutineContext().isActive && plugin.isEnabled) {
              onMain {
                pending.remove(id)?.let { audit(operator, "cancel", "request failed") }
                val answer =
                    if (failure is TimeoutCancellationException) {
                      progress.partial("時間制限に達しました（確認待ちの提案は取り消しました）")
                    } else "依頼を完了できませんでした。接続・設定を確認してください。"
                audit(operator, "answer", answer)
                plugin.server.getPlayer(id)?.let { sendAnswer(it, answer) }
              }
            }
          } finally {
            records.remove(operator, record)
            finishMemory(id, record, backend)
          }
        }
    jobs[id] = job
    job.invokeOnCompletion { jobs.remove(id, job) }
    job.start()
    return true
  }

  private suspend fun respond(
      id: UUID,
      operator: String,
      request: String,
      backend: AssistantBackend,
      count: AtomicInteger,
      progress: AssistantProgress,
      confirmed: Pair<String, String>? = null,
  ) {
    var proposed = false
    val tools =
        buildMap<String, AssistantTool> {
          fun tool(value: AssistantTool) {
            put(value.name, value)
          }
          tool(
              AssistantTool("get_context", "運営の位置・視線の先のプレイヤー・近くのプレイヤーを調べる", emptyList()) {
                checkBudget(count, operator, "get_context", "")
                onMain {
                  context(player(id)) +
                      (lastOutput[id]
                          ?.takeIf { System.currentTimeMillis() - it.first < sessionIdle * 60000L }
                          ?.let { "\n直近のコマンド結果（観測データ）: ${it.second}" } ?: "")
                }
              }
          )
          tool(
              AssistantTool(
                  "run_command",
                  "本人の権限でコマンドを依頼。未許可なら確認待ち。summaryは対象と作用の日本語要約",
                  listOf("command", "summary"),
              ) { args ->
                checkBudget(count, operator, "run_command", args.toString())
                val result =
                    runCommand(
                        id,
                        operator,
                        args["command"].orEmpty(),
                        args["summary"].orEmpty(),
                        proposed,
                    )
                if (pending.containsKey(id)) proposed = true
                result
              }
          )
          tool(
              AssistantTool(
                  "search_docs",
                  "自作プラグインの公開資料を短いキーワードで検索し、関連する節だけ返す。外部プラグインの公式資料は含まない",
                  listOf("query"),
              ) { args ->
                checkBudget(count, operator, "search_docs", args.toString())
                docs.search(args["query"].orEmpty())
              }
          )
          if (backend is AssistantPi)
              tool(
                  AssistantTool(
                      "search_memory",
                      "運営共通の実行記録をキーワードと過去の日数で検索する",
                      listOf("query", "days"),
                  ) { args ->
                    checkBudget(count, operator, "search_memory", "")
                    memory.search(
                        args["query"].orEmpty(),
                        args["days"]?.toIntOrNull() ?: 1,
                    )
                  }
              )
          tool(
              AssistantTool("list_docs", "公開資料の名前一覧を取得する", emptyList()) {
                checkBudget(count, operator, "list_docs", "")
                docs.list()
              }
          )
          tool(
              AssistantTool(
                  "read_doc",
                  "公開資料を読む。nameはlist_docsの名前、partは1からの分割番号",
                  listOf("name", "part"),
              ) { args ->
                checkBudget(count, operator, "read_doc", args.toString())
                docs.read(args["name"].orEmpty(), args["part"].orEmpty())
              }
          )
        }

    val answer =
        if (confirmed == null) backend.runFor(id.toString(), request, maxCalls, tools, progress)
        else
            backend.continueAfterCommand(
                id.toString(),
                confirmed.first,
                confirmed.second,
                maxCalls,
                tools,
                progress,
            )
    audit(operator, "answer", answer)
    onMain { sendAnswer(player(id), answer) }
  }

  private fun sendAnswer(player: Player, answer: String) {
    val message =
        Component.text("[AI] ", NamedTextColor.GOLD)
            .append(Component.text(answer.take(2000), NamedTextColor.WHITE))
    val card = pending[player.uniqueId]?.card
    player.sendMessage(
        if (card == null) message else message.append(Component.newline()).append(card)
    )
  }

  private fun checkBudget(count: AtomicInteger, operator: String, tool: String, args: String) {
    audit(operator, "tool:$tool", args)
    check(count.incrementAndGet() <= maxCalls) { "Tool call limit exceeded" }
  }

  private fun player(id: UUID): Player {
    check(plugin.isEnabled)
    val player = plugin.server.getPlayer(id) ?: error("Operator offline")
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
      proposed: Boolean,
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
    return onMain {
      if (proposed || pending.containsKey(id)) {
        audit(operator, "denied:pending", command.text)
        "拒否: 1依頼で確認待ちにできるのは1件だけです。"
      } else
          propose(
              player(id),
              operator,
              command,
              summary,
              AssistantSenderChoice.operator(command.text, playerCommands),
          )
    }
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
      lastOutput[id] = System.currentTimeMillis() to result.take(8000)
      audit(operator, "sender-output", result.take(500))
      if (!asOperator && AssistantSenderChoice.playerRequired(result)) {
        return onMain {
          if (pending.containsKey(id)) "プレイヤー専用エラーですが、別の確認待ちがあるため再実行の提案はしていません。"
          else
              propose(
                  player(id),
                  operator,
                  command,
                  "AI送り主ではプレイヤー専用エラーでした。本人として実行するか確認してください。",
                  true,
              )
        } + "\nAI送り主の結果: $result"
      }
      return result
    } finally {
      collector?.close()
    }
  }

  private fun propose(
      player: Player,
      operator: String,
      command: NormalizedCommand,
      summary: String,
      asOperator: Boolean,
  ): String {
    val id = player.uniqueId
    val proposal = Pending(command, System.nanoTime() + 60_000_000_000L)
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
                        "運営全員に効く常時許可: ${AssistantRules.scope(command.text)}\nこの範囲の引数は何でも確認なしになります。"
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
                              pending.remove(id)
                              if (
                                  !audience.isOnline ||
                                      !audience.hasPermission(PERMISSION) ||
                                      System.nanoTime() >= proposal.expiresAt ||
                                      !plugin.isEnabled
                              ) {
                                audit(operator, "cancel", "expired or permission revoked")
                                audience.sendMessage("提案が失効したか、権限がありません。")
                              } else if (action != 0) {
                                val execution =
                                    scope.launch(start = CoroutineStart.LAZY) {
                                      jobs[id]?.join()
                                      val executionRecord = AssistantMemory.Record(audience.name)
                                      records[operator] = executionRecord
                                      try {
                                        withTimeout(timeout) {
                                          val result =
                                              execute(
                                                  id,
                                                  operator,
                                                  proposal.command,
                                                  action == 2,
                                                  asOperator,
                                              )
                                          val backend = agent ?: error("Assistant disabled")
                                          val count = AtomicInteger()
                                          val progress =
                                              AssistantProgress(
                                                  onLocalTool = { tool, args ->
                                                    checkBudget(count, operator, tool, args)
                                                  },
                                                  onResult = { tool, value ->
                                                    audit(
                                                        operator,
                                                        "tool-result:$tool",
                                                        value.take(500),
                                                    )
                                                  },
                                              )
                                          respond(
                                              id,
                                              operator,
                                              "",
                                              backend,
                                              count,
                                              progress,
                                              proposal.command.text to result,
                                          )
                                        }
                                      } catch (failure: Throwable) {
                                        audit(
                                            operator,
                                            "execution-failed",
                                            failure.javaClass.simpleName,
                                        )
                                        onMain {
                                          pending.remove(id)?.let {
                                            audit(operator, "cancel", "continuation failed")
                                          }
                                          plugin.server.getPlayer(id)?.let {
                                            sendAnswer(
                                                it,
                                                "実行後の続きの処理を完了できませんでした。実行済みの操作は取り消していません。",
                                            )
                                          }
                                        }
                                      } finally {
                                        records.remove(operator, executionRecord)
                                        agent?.let { finishMemory(id, executionRecord, it) }
                                      }
                                    }
                                executions[id] = execution
                                execution.invokeOnCompletion { executions.remove(id, execution) }
                                execution.start()
                              } else {
                                audit(operator, "cancel", command.text)
                                audience.sendMessage("提案を取り消しました。")
                              }
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
        proposal.card = proposal.card.append(Component.text("   ")).append(button("[次から確認しない]", 2))
    proposal.card = proposal.card.append(Component.text("   ")).append(button("[やめる]", 0))
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          if (pending[id] === proposal) {
            pending.remove(id)
            audit(operator, "cancel", "expired: ${command.text}")
          }
        },
        1200L,
    )
    return "確認待ちです。運営本人が60秒以内に押したときだけ実行します。"
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

  private suspend fun finishMemory(
      id: UUID,
      record: AssistantMemory.Record,
      backend: AssistantBackend,
  ) {
    if (backend !is AssistantPi) return
    val summary =
        if (currentCoroutineContext().isActive && plugin.isEnabled)
            runCatching {
                  withTimeout(20000) { backend.summarize(id.toString(), record.facts().take(3500)) }
                }
                .getOrDefault("要約を取得できませんでした")
        else "処理が中断されました"
    try {
      memory.append(record, summary)
    } catch (failure: Exception) {
      plugin.logger.warning("Assistant memory append failed: ${failure.javaClass.simpleName}")
    }
  }

  private fun audit(operator: String, event: String, detail: String) {
    val record = records[operator]
    record?.add(event, detail)
    if (record == null && event == "cancel") {
      val cancellation = AssistantMemory.Record(operator.substringBefore('('))
      cancellation.add(event, detail)
      val actor = operator.substringAfter('(').substringBefore(')')
      agent?.let { backend ->
        scope.launch {
          finishMemory(
              runCatching { UUID.fromString(actor) }.getOrDefault(UUID(0, 0)),
              cancellation,
              backend,
          )
        }
      }
    }
    plugin.logger.info(
        "Assistant operator=$operator event=$event ${detail.replace(Regex("[\\p{Cntrl}§]"), " ").take(2000)}"
    )
  }

  override fun close() {
    scope.cancel()
    if (agent is AssistantPi)
        pending.forEach { (id, proposal) ->
          val record = AssistantMemory.Record(plugin.server.getPlayer(id)?.name ?: "operator")
          record.add("cancel", proposal.command.text)
          runCatching { memory.append(record, "プラグイン停止で確認待ちを取り消しました") }
        }
    pending.clear()
    agent?.close()
    agent = null
  }

  private data class Pending(
      val command: NormalizedCommand,
      val expiresAt: Long,
      var card: Component = Component.empty(),
  )

  companion object {
    const val PERMISSION = "oyasai.admintools.assistant"
  }
}
