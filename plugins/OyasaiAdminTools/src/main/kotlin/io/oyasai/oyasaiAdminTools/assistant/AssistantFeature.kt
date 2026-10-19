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

  fun enable() {
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
    val request = args.joinToString(" ")
    if (request.isBlank() || request.length > 1000) {
      sender.sendMessage("/assistant <依頼>（1000文字以内）")
      return true
    }
    val id = sender.uniqueId
    val now = System.currentTimeMillis()
    if (jobs.containsKey(id) || pending.containsKey(id)) {
      sender.sendMessage("前の依頼または確認待ちの提案があります。")
      return true
    }
    if (now - (lastRequest[id] ?: 0) < cooldown) {
      sender.sendMessage("少し待ってから依頼してください。")
      return true
    }
    lastRequest[id] = now
    val operator = "${sender.name}($id)"
    audit(operator, "request", request)
    sender.sendMessage("調べています。実行が必要なら確認ボタンを表示します。")
    val count = AtomicInteger()
    val progress =
        AssistantProgress(
            onLocalTool = { tool, args -> checkBudget(count, operator, tool, args) },
            onResult = { tool, result -> audit(operator, "tool-result:$tool", result.take(500)) },
        )
    var proposed = false
    val job =
        scope.launch(start = CoroutineStart.LAZY) {
          try {
            withTimeout(timeout) {
              val tools =
                  buildMap<String, AssistantTool> {
                    fun tool(value: AssistantTool) {
                      put(value.name, value)
                    }
                    tool(
                        AssistantTool("get_context", "運営の位置・視線の先のプレイヤー・近くのプレイヤーを調べる", emptyList()) {
                          checkBudget(count, operator, "get_context", "")
                          onMain { context(player(id)) }
                        }
                    )
                    tool(
                        AssistantTool(
                            "run_command",
                            "本人の権限でコマンドを依頼。未許可なら確認待ち。summaryは対象と作用の日本語要約",
                            listOf("command", "summary"),
                        ) { args ->
                          checkBudget(count, operator, "run_command", args.toString())
                          onMain {
                            val result =
                                runCommand(
                                    player(id),
                                    operator,
                                    args["command"].orEmpty(),
                                    args["summary"].orEmpty(),
                                    proposed,
                                )
                            if (pending.containsKey(id)) proposed = true
                            result
                          }
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
              val answer = backend.run(request, maxCalls, tools, progress)
              audit(operator, "answer", answer)
              onMain { player(id).sendMessage(Component.text(answer.take(2000))) }
            }
          } catch (failure: Throwable) {
            audit(operator, "failed", failure.javaClass.simpleName)
            if (currentCoroutineContext().isActive && plugin.isEnabled) {
              onMain {
                pending.remove(id)?.let { audit(operator, "cancel", "request failed") }
                val answer =
                    if (failure is TimeoutCancellationException) {
                      progress.partial("時間制限に達しました（確認待ちの提案は取り消しました）")
                    } else "依頼を完了できませんでした。接続・設定を確認してください。"
                audit(operator, "answer", answer)
                plugin.server.getPlayer(id)?.sendMessage(Component.text(answer.take(2000)))
              }
            }
          }
        }
    jobs[id] = job
    job.invokeOnCompletion { jobs.remove(id, job) }
    job.start()
    return true
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

  private fun runCommand(
      player: Player,
      operator: String,
      text: String,
      summary: String,
      proposed: Boolean,
  ): String {
    val command = resolve(player, operator, text) ?: return "拒否: 禁止項目・権限・コマンドの登録を確認してください。"
    if (summary.isBlank() || summary.length > 500 || summary.any { it.isISOControl() || it == '§' })
        return "拒否: 要約は500文字以内の1行にしてください。"
    if (allows.allows(command.text)) {
      player.sendMessage(Component.text("確認なしで実行: $summary\n/${command.text}"))
      return execute(player, operator, command, false)
    }
    if (proposed || pending.containsKey(player.uniqueId)) return "拒否: 1依頼で確認待ちにできるのは1件だけです。"
    return propose(player, operator, command, summary)
  }

  private fun execute(
      player: Player,
      operator: String,
      command: NormalizedCommand,
      remember: Boolean,
  ): String {
    val fresh = resolve(player, operator, command.text) ?: return "拒否: 実行前の再確認に失敗しました。"
    if (fresh.text != command.text || fresh.registration !== command.registration)
        return "拒否: コマンドの登録が変更されました。"
    audit(operator, "execute", command.text)
    val accepted = player.performCommand(command.text)
    audit(operator, "execution-result", "accepted=$accepted")
    if (!accepted) return "コマンドを受け付けませんでした。出力は運営の画面を確認してください。"
    if (remember && allows.add(command.text, player.name, player.uniqueId)) {
      val scope = AssistantRules.scope(command.text)
      audit(operator, "allow-add", scope)
      player.sendMessage("運営全員の共有許可リストへ追加しました: $scope （以後、この範囲の引数は何でも確認なし）")
    }
    return "本人の権限で実行しました。出力は運営の画面に表示されます。AIは出力本文を取得していません。成功・条件達成は未確認です。"
  }

  private fun propose(
      player: Player,
      operator: String,
      command: NormalizedCommand,
      summary: String,
  ): String {
    val id = player.uniqueId
    val proposal = Pending(command, System.nanoTime() + 60_000_000_000L)
    pending[id] = proposal
    audit(operator, "propose", "${command.text} | $summary")
    fun button(label: String, action: Int): Component =
        Component.text(label, if (action != 0) NamedTextColor.GREEN else NamedTextColor.RED)
            .hoverEvent(
                Component.text(
                    if (action == 2)
                        "共有許可に追加: ${AssistantRules.scope(command.text)}\nこの範囲の引数は何でも確認なしになります。"
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
                                try {
                                  audience.sendMessage(
                                      Component.text(
                                          execute(audience, operator, proposal.command, action == 2)
                                      )
                                  )
                                } catch (failure: Throwable) {
                                  audit(operator, "execution-failed", failure.javaClass.simpleName)
                                  audience.sendMessage("コマンドの実行中にエラーが発生しました。ログを確認してください。")
                                }
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
    player.sendMessage(
        Component.text("$summary\n/${command.text}\n")
            .append(button("[実行]", 1))
            .append(Component.space())
            .append(button("[次から確認しない]", 2))
            .append(Component.space())
            .append(button("[やめる]", 0))
    )
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

  private fun audit(operator: String, event: String, detail: String) {
    plugin.logger.info(
        "Assistant operator=$operator event=$event ${detail.replace(Regex("[\\p{Cntrl}§]"), " ").take(2000)}"
    )
  }

  override fun close() {
    scope.cancel()
    pending.clear()
    agent?.close()
    agent = null
  }

  private data class Pending(val command: NormalizedCommand, val expiresAt: Long)

  companion object {
    const val PERMISSION = "oyasai.admintools.assistant"
  }
}
