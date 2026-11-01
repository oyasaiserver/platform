package io.oyasai.economy

import io.oyasai.economy.api.EconomyOperation
import io.oyasai.economy.api.EconomyResult
import java.util.UUID
import java.util.concurrent.CompletableFuture
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginIdentifiableCommand
import org.bukkit.entity.Player

internal class EconomyCommand(
    private val owner: OyasaiEconomyPlugin,
    private val currency: String,
    name: String,
    private val shortcut: String? = null,
) : Command(name), PluginIdentifiableCommand {
  private data class Confirmation(val amount: Long, val silent: Boolean, val expires: Long)

  private val confirmations = mutableMapOf<UUID, Confirmation>()

  override fun getPlugin() = owner

  override fun execute(sender: CommandSender, label: String, args: Array<out String>): Boolean {
    try {
      run(sender, label, args.toList())
    } catch (e: IllegalArgumentException) {
      sender.sendMessage(e.message ?: "入力が正しくありません。")
    }
    return true
  }

  private fun run(sender: CommandSender, label: String, raw: List<String>) {
    val ledger = owner.database.ledgers.getValue(currency)
    val policy = ledger.policy
    require(policy.enabled) { "この通貨は無効です。" }
    val verb = shortcut ?: raw.firstOrNull()?.lowercase() ?: "balance"
    val input = if (shortcut == null && raw.isNotEmpty()) raw.drop(1) else raw
    val action =
        when (verb) {
          "balance",
          "pay",
          "top" -> verb
          "give",
          "take",
          "set",
          "reset",
          "giveall" -> "admin"
          else ->
              throw IllegalArgumentException(
                  "使い方: /${policy.root} balance|pay|top|give|take|set|reset|giveall"
              )
        }
    fun permission(node: String) {
      require(sender.hasPermission("oyasaieconomy.$currency.$node")) {
        "権限がありません: oyasaieconomy.$currency.$node"
      }
    }
    permission(action)
    val silent = input.lastOrNull() == "-s"
    require(!silent || action == "admin") { "-s は管理操作だけで使えます。" }
    val args = if (silent) input.dropLast(1) else input
    fun player(): Player = sender as? Player ?: throw IllegalArgumentException("プレイヤーとして実行してください。")
    fun target(name: String) =
        owner.resolve(ledger, name) ?: throw IllegalArgumentException("既存の口座が見つかりません: $name")
    fun amount(text: String): Long =
        requireNotNull(policy.parse(text)?.takeIf { it >= 1 }) { "金額は1以上の整数で指定してください。小数は使えません。" }
    val actor = (sender as? Player)?.uniqueId
    when (verb) {
      "balance" -> {
        require(args.size <= 1) {
          "使い方: /$label ${if (shortcut == null) "balance " else ""}[player]"
        }
        val uuid = args.firstOrNull()?.let(::target) ?: player().uniqueId
        if (uuid != actor) permission("balance.others")
        val balance = requireNotNull(owner.balance(currency, uuid)) { "口座を利用できません。" }
        sender.sendMessage("${ledger.nameOf(uuid) ?: uuid}さんの残高: ${policy.format(balance)}")
      }
      "pay" -> {
        require(args.size == 2) {
          "使い方: /$label ${if (shortcut == null) "pay " else ""}<player> <amount>"
        }
        val from = player()
        val to = target(args[0])
        val value = amount(args[1])
        require(value in policy.transferMinimum..policy.transferMaximum) {
          "送金額は${policy.format(policy.transferMinimum)}以上、${policy.format(policy.transferMaximum)}以下です。"
        }
        require(from.uniqueId != to) { "自分には送金できません。" }
        respond(
            sender,
            owner.transfer(currency, from.uniqueId, to, value, true),
            "${args[0]}さんへ${policy.format(value)}を送りました。",
        )
      }
      "top" -> {
        require(args.size <= 1) { "使い方: /$label ${if (shortcut == null) "top " else ""}[page]" }
        val page = args.firstOrNull()?.toIntOrNull() ?: if (args.isEmpty()) 1 else 0
        val pages = maxOf(1, (ledger.size() + 9) / 10)
        require(page in 1..pages) { "ページは1〜${pages}で指定してください。" }
        sender.sendMessage("${policy.displayName}の残高ランキング ($page/$pages)")
        ledger.top(10, (page - 1) * 10).forEachIndexed { index, r ->
          sender.sendMessage(
              "${(page - 1) * 10 + index + 1}. ${r.record.name ?: r.uuid}: ${policy.format(r.record.balance)}"
          )
        }
      }
      "give",
      "take",
      "set",
      "reset" -> {
        require(args.size == if (verb == "reset") 1 else 2) {
          "使い方: /$label $verb <player>${if (verb == "reset") "" else " <amount>"} [-s]"
        }
        val uuid = target(args[0])
        val value = if (verb == "reset") policy.initial else amount(args[1])
        val reason = "admin_$verb"
        respond(
            sender,
            owner.change(currency, uuid, value, reason, owner.notifyAdmins(silent), actor),
            "${args[0]}さんの残高を変更しました。",
        )
      }
      "giveall" -> {
        require(args.size in 1..2 && (args.size == 1 || args[1] == "confirm")) {
          "使い方: /$label giveall <amount> [confirm] [-s]"
        }
        val value = amount(args[0])
        if (sender is Player) {
          val now = System.nanoTime()
          confirmations.entries.removeIf { it.value.expires < now }
          if (args.size == 1) {
            confirmations[sender.uniqueId] = Confirmation(value, silent, now + 30_000_000_000L)
            sender.sendMessage(
                "30秒以内に /$label giveall ${args[0]} confirm${if (silent) " -s" else ""} で確定してください。"
            )
            return
          }
          val confirmation = confirmations.remove(sender.uniqueId)
          require(
              confirmation != null &&
                  confirmation.amount == value &&
                  confirmation.silent == silent &&
                  confirmation.expires >= now
          ) {
            "確認が無効か期限切れです。もう一度 giveall を実行してください。"
          }
        }
        val operations =
            owner.server.onlinePlayers.toList().map {
              owner.change(
                  currency,
                  it.uniqueId,
                  value,
                  "admin_give",
                  owner.notifyAdmins(silent),
                  actor,
              )
            }
        CompletableFuture.allOf(*operations.map { it.completion }.toTypedArray()).thenRun {
          val count = operations.count { it.completion.join() is EconomyResult.Success }
          message(sender, "オンラインの${operations.size}人中${count}人に${policy.format(value)}を付与しました。")
        }
      }
    }
  }

  private fun respond(sender: CommandSender, operation: EconomyOperation, success: String) {
    operation.completion.thenAccept { result ->
      message(
          sender,
          when (result) {
            is EconomyResult.Success -> success
            is EconomyResult.InsufficientFunds -> "残高が不足しています。"
            is EconomyResult.Failed -> result.reason
          },
      )
    }
  }

  private fun message(sender: CommandSender, text: String) {
    if (owner.isEnabled)
        owner.server.scheduler.runTask(owner, Runnable { sender.sendMessage(text) })
  }

  override fun tabComplete(
      sender: CommandSender,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    val policy = owner.database.ledgers[currency]?.policy ?: return emptyList()
    if (!policy.enabled) return emptyList()
    if (shortcut == null && args.size == 1)
        return listOf("balance", "pay", "top", "give", "take", "set", "reset", "giveall").filter {
            verb ->
          sender.hasPermission(
              "oyasaieconomy.$currency.${if (verb in listOf("balance", "pay", "top")) verb else "admin"}"
          ) && verb.startsWith(args[0], true)
        }
    val verb = shortcut ?: args.firstOrNull()
    val index = if (shortcut == null) 2 else 1
    if (args.size == index && verb in listOf("balance", "pay", "give", "take", "set", "reset"))
        return owner.database.ledgers
            .getValue(currency)
            .snapshot()
            .values
            .mapNotNull { it.name }
            .distinct()
            .filter { it.startsWith(args.last(), true) }
            .sorted()
    return emptyList()
  }
}
