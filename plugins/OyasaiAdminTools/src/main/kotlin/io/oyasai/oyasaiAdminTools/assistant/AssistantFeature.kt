package io.oyasai.oyasaiAdminTools.assistant

import ai.koog.agents.core.tools.ToolRegistry
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
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
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
  private val allowed = settings?.getStringList("allowed-commands").orEmpty()
  private val readOnly = settings?.getStringList("read-only-commands").orEmpty()
  private val maxCalls = (settings?.getInt("max-tool-calls", 8) ?: 8).coerceIn(1, 32)
  private val timeout = (settings?.getLong("timeout-seconds", 45) ?: 45).coerceIn(1, 180) * 1000
  private val cooldown = (settings?.getLong("cooldown-seconds", 10) ?: 10).coerceIn(0, 3600) * 1000
  private var agent: AssistantAgent? = null

  fun enable() {
    val key = System.getenv(settings?.getString("api-key-env") ?: "OYASAI_ASSISTANT_API_KEY")
    if (settings?.getBoolean("enabled", false) == true && !key.isNullOrBlank()) {
      agent =
          AssistantAgent(
              settings.getString("provider", "openrouter")!!.lowercase(java.util.Locale.ROOT),
              settings.getString("model", "deepseek/deepseek-v4.1-flash")!!.also {
                require(it.isNotBlank())
              },
              key,
          )
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
    var proposed = false
    val job =
        scope.launch(start = CoroutineStart.LAZY) {
          try {
            withTimeout(timeout) {
              val tools = ToolRegistry {
                tool(
                    AssistantTool("get_context", "運営の位置・視線の先のプレイヤー・近くのプレイヤーを調べる", emptyList()) {
                      checkBudget(count, operator, "get_context", "")
                      onMain { context(player(id)) }
                    }
                )
                tool(
                    AssistantTool(
                        "run_query",
                        "読み取り専用。syokaku iscandidate または seeplayerinfo とプレイヤー名1つ",
                        listOf("command"),
                    ) { args ->
                      val text = args["command"].orEmpty()
                      checkBudget(count, operator, "run_query", text)
                      query(id, text)
                    }
                )
                tool(
                    AssistantTool(
                        "propose_command",
                        "実行せず本人に確認を求める。summaryは対象と作用の日本語要約",
                        listOf("command", "summary"),
                    ) { args ->
                      checkBudget(count, operator, "propose_command", args.toString())
                      onMain {
                        if (proposed) return@onMain "拒否: 1依頼につき提案は1件です。"
                        val result =
                            propose(
                                player(id),
                                operator,
                                args["command"].orEmpty(),
                                args["summary"].orEmpty(),
                            )
                        if (pending.containsKey(id)) proposed = true
                        result
                      }
                    }
                )
              }
              val answer = backend.run(request, maxCalls, tools, allowed)
              onMain { player(id).sendMessage(Component.text(answer.take(2000))) }
            }
          } catch (failure: Throwable) {
            audit(operator, "failed", failure.javaClass.simpleName)
            if (currentCoroutineContext().isActive && plugin.isEnabled) {
              onMain {
                pending.remove(id)?.let { audit(operator, "cancel", "request failed") }
                plugin.server.getPlayer(id)?.sendMessage("依頼を完了できませんでした。時間制限・接続・設定を確認してください。")
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

  private suspend fun query(id: UUID, text: String): String {
    if (!AssistantRules.allowsQuery(text, readOnly)) return "拒否: 読み取り許可は既知のsyokaku照会とプレイヤー名1つだけです。"
    val command = AssistantRules.normalize(text)!!
    val output = StringBuffer()
    val lastOutput = java.util.concurrent.atomic.AtomicLong()
    val dispatched = onMain {
      val player = player(id)
      val registered = plugin.server.getPluginCommand("dynamicprofile:syokaku")
      if (
          registered == null ||
              registered.plugin.name != "DynamicProfile" ||
              !registered.testPermissionSilent(player)
      )
          return@onMain false
      val capture =
          plugin.server.createCommandSender { component ->
            synchronized(output) {
              if (output.length < 8000)
                  output
                      .append(
                          PlainTextComponentSerializer.plainText().serialize(component).take(2000)
                      )
                      .append('\n')
              lastOutput.set(System.nanoTime())
            }
          }
      plugin.server.dispatchCommand(capture, "dynamicprofile:$command")
    }
    if (!dispatched) return "拒否: 照会コマンドが未導入、または運営の権限がありません。"
    // shortcut: 完了通知のない外部コマンドは最大5秒・無出力500msで収集、完了APIができたら置き換える。
    val deadline = System.nanoTime() + 5_000_000_000L
    while (System.nanoTime() < deadline) {
      delay(50)
      if (lastOutput.get() != 0L && System.nanoTime() - lastOutput.get() >= 500_000_000L) break
    }
    return output.toString().ifBlank { "出力なし。条件達成は未確認です。" } +
        "\n（最大5秒の出力収集。出力が不完全なら条件達成と判断しないでください。）"
  }

  private fun propose(player: Player, operator: String, text: String, summary: String): String {
    if (!AssistantRules.allows(text, allowed)) return "拒否: 許可リスト外、無効な形式、またはGOOD特例の昇格です。"
    if (summary.isBlank() || summary.length > 500 || summary.any { it.isISOControl() })
        return "拒否: 要約は500文字以内の1行にしてください。"
    val id = player.uniqueId
    if (pending.containsKey(id)) return "拒否: 確認待ちの提案があります。"
    val proposal = Pending(AssistantRules.normalize(text)!!, System.nanoTime() + 60_000_000_000L)
    pending[id] = proposal
    audit(operator, "propose", "${proposal.command} | $summary")
    fun button(label: String, execute: Boolean): Component =
        Component.text(label, if (execute) NamedTextColor.GREEN else NamedTextColor.RED)
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
                              } else if (
                                  execute && AssistantRules.allows(proposal.command, allowed)
                              ) {
                                audit(operator, "execute", proposal.command)
                                try {
                                  val accepted = audience.performCommand(proposal.command)
                                  audit(operator, "execution-result", "accepted=$accepted")
                                } catch (failure: Throwable) {
                                  audit(operator, "execution-failed", failure.javaClass.simpleName)
                                  audience.sendMessage("コマンドの実行中にエラーが発生しました。ログを確認してください。")
                                }
                              } else {
                                audit(operator, "cancel", proposal.command)
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
        Component.text("$summary\n/${proposal.command}\n")
            .append(button("[実行]", true))
            .append(Component.space())
            .append(button("[やめる]", false))
    )
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          if (pending[id] === proposal) {
            pending.remove(id)
            audit(operator, "cancel", "expired: ${proposal.command}")
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

  private data class Pending(val command: String, val expiresAt: Long)

  companion object {
    const val PERMISSION = "oyasai.admintools.assistant"
  }
}
