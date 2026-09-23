package io.oyasai.oyasaiban

import com.velocitypowered.api.command.CommandSource
import com.velocitypowered.api.command.SimpleCommand
import com.velocitypowered.api.proxy.ConsoleCommandSource
import com.velocitypowered.api.proxy.Player
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.UUID
import java.util.concurrent.CompletionException
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.slf4j.Logger

enum class BanCommandKind {
  BAN,
  UNBAN,
  CHECK,
  HISTORY,
  BANLIST,
}

class BanCommand(
    private val plugin: OyasaiBanPlugin,
    private val kind: BanCommandKind,
    private val logger: Logger,
) : SimpleCommand {
  override fun execute(invocation: SimpleCommand.Invocation) {
    val source = invocation.source()
    val args = invocation.arguments().toList()
    when (kind) {
      BanCommandKind.BAN -> ban(source, args)
      BanCommandKind.UNBAN -> unban(source, args)
      BanCommandKind.CHECK -> check(source, args)
      BanCommandKind.HISTORY -> history(source, args)
      BanCommandKind.BANLIST -> banList(source, args)
    }
  }

  override fun hasPermission(invocation: SimpleCommand.Invocation): Boolean =
      invocation.source() is ConsoleCommandSource ||
          invocation.source().hasPermission(OyasaiBanPlugin.PERMISSION)

  override fun suggest(invocation: SimpleCommand.Invocation): List<String> {
    if (kind != BanCommandKind.BAN) return emptyList()
    val args = invocation.arguments()
    return when (args.size) {
      1 ->
          plugin.proxy.allPlayers
              .map { it.username }
              .filter { it.startsWith(args[0], ignoreCase = true) }
      2 ->
          listOf("1mo", "2w", "3d", "4h", "5mi", "6s").filter {
            it.startsWith(args[1], ignoreCase = true)
          }
      3 -> listOf("あらし").filter { it.startsWith(args[2]) }
      else -> emptyList()
    }
  }

  private fun ban(source: CommandSource, args: List<String>) {
    if (args.size < 2) return source.reply("§cUsage: /ban <名前> [期間] <理由...>")
    val parsed = BanArguments.parse(args.drop(1))
    if (parsed is BanArguments.Invalid) return source.reply(parsed.message)
    parsed as BanArguments.Valid
    val now = System.currentTimeMillis()
    val end =
        when (val duration = parsed.duration) {
          PunishmentDuration.Permanent -> null
          is PunishmentDuration.Temporary ->
              runCatching { Math.addExact(now, duration.millis) }
                  .getOrElse {
                    return source.reply("§c期間が長すぎます。")
                  }
        }
    plugin.nameResolver
        .resolve(args[0])
        .thenCompose { uuid ->
          if (uuid == null) {
            source.reply("§cプレイヤー '${args[0]}' のUUIDを解決できませんでした。")
            java.util.concurrent.CompletableFuture.completedFuture(null)
          } else {
            val record =
                PunishmentRecord(
                    uuid = uuid,
                    name = args[0],
                    type = if (end == null) PunishmentType.BAN else PunishmentType.TEMP_BAN,
                    reason = parsed.reason,
                    operator = (source as? Player)?.username ?: "CONSOLE",
                    start = now,
                    end = end,
                )
            plugin.database.createBan(record).thenApply { result -> record to result }
          }
        }
        .whenComplete { outcome, error ->
          if (error != null) return@whenComplete failed(source, "BAN登録", error)
          if (outcome == null) return@whenComplete
          val (record, result) = outcome
          if (result == CreateBanResult.AlreadyBanned) {
            source.reply("§c${record.name} はすでにBANされています。")
          } else {
            source.reply("§a${record.name} をBANしました。")
            plugin.afterBan(record, parsed.durationLabel, parsed.notificationReason)
          }
        }
  }

  private fun unban(source: CommandSource, args: List<String>) {
    if (args.size != 1) return source.reply("§cUsage: /unban <名前>")
    plugin.nameResolver
        .resolve(args[0])
        .thenCompose { uuid ->
          if (uuid == null) {
            source.reply("§cプレイヤー '${args[0]}' のUUIDを解決できませんでした。")
            java.util.concurrent.CompletableFuture.completedFuture(null)
          } else plugin.database.unban(uuid)
        }
        .whenComplete { removed, error ->
          if (error != null) return@whenComplete failed(source, "BAN解除", error)
          if (removed == null) return@whenComplete
          source.reply(if (removed) "§a${args[0]} のBANを解除しました。" else "§e有効なBANはありません。")
        }
  }

  private fun check(source: CommandSource, args: List<String>) {
    if (args.size != 1) return source.reply("§cUsage: /check <名前>")
    plugin.nameResolver
        .resolve(args[0])
        .thenCompose { uuid ->
          if (uuid == null) {
            source.reply("§cプレイヤー '${args[0]}' のUUIDを解決できませんでした。")
            java.util.concurrent.CompletableFuture.completedFuture(null)
          } else plugin.database.check(uuid, System.currentTimeMillis()).thenApply { uuid to it }
        }
        .whenComplete { outcome, error ->
          if (error != null) return@whenComplete failed(source, "BAN確認", error)
          if (outcome == null) return@whenComplete
          val (uuid, record) = outcome
          if (record == null)
              source.reply(legacy.deserialize("§a有効なBANはありません。 UUID: ").append(uuid.copyable()))
          else source.reply(record.details())
        }
  }

  private fun history(source: CommandSource, args: List<String>) {
    if (args.size != 1) return source.reply("§cUsage: /history <名前>")
    plugin.nameResolver
        .resolve(args[0])
        .thenCompose { uuid ->
          if (uuid == null) {
            source.reply("§cプレイヤー '${args[0]}' のUUIDを解決できませんでした。")
            java.util.concurrent.CompletableFuture.completedFuture(null)
          } else plugin.database.history(uuid).thenApply { uuid to it }
        }
        .whenComplete { outcome, error ->
          if (error != null) return@whenComplete failed(source, "履歴確認", error)
          if (outcome == null) return@whenComplete
          val (uuid, records) = outcome
          source.reply(
              legacy
                  .deserialize("§6${args[0]} のBAN履歴: ${records.size}件 §7(")
                  .append(uuid.copyable())
                  .append(legacy.deserialize("§7)"))
          )
          records.forEachIndexed { index, record ->
            source.reply(
                "§e${index + 1}. §f${record.type.display()} §7${time.format(Instant.ofEpochMilli(record.start))} §f${record.reason} §7(${record.operator})"
            )
          }
        }
  }

  private fun banList(source: CommandSource, args: List<String>) {
    if (args.size > 1) return source.reply("§cUsage: /banlist [ページ]")
    val page = args.firstOrNull()?.toIntOrNull() ?: 1
    if (page < 1 || (args.isNotEmpty() && args[0].toIntOrNull() == null)) {
      return source.reply("§cページは1以上の整数で指定してください。")
    }
    plugin.database.banList(System.currentTimeMillis()).whenComplete { records, error ->
      if (error != null) return@whenComplete failed(source, "BAN一覧", error)
      if (records.isEmpty()) return@whenComplete source.reply("§a現在BANされているプレイヤーはいません。")
      val pages = (records.size + PAGE_SIZE - 1) / PAGE_SIZE
      if (page > pages) return@whenComplete source.reply("§cページ範囲は 1〜$pages です。")
      source.reply("§6BAN一覧 §f$page/$pages §7(${records.size}件)")
      records.drop((page - 1) * PAGE_SIZE).take(PAGE_SIZE).forEach { record ->
        source.reply(
            legacy
                .deserialize("§e${record.name} ")
                .append(record.uuid.copyable())
                .append(
                    legacy.deserialize(
                        " §f${record.type.display()} §7期限: ${record.end?.let { time.format(Instant.ofEpochMilli(it)) } ?: "永久"}"
                    )
                )
        )
      }
    }
  }

  private fun failed(source: CommandSource, operation: String, error: Throwable) {
    val cause = (error as? CompletionException)?.cause ?: error
    logger.error("{} failed", operation, cause)
    source.reply("§c${operation}に失敗しました。コンソールを確認してください。")
  }

  companion object {
    private const val PAGE_SIZE = 10
    private val legacy = LegacyComponentSerializer.legacySection()
    private val time =
        DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z").withZone(ZoneId.of("Asia/Tokyo"))

    private fun CommandSource.reply(message: String) = sendMessage(legacy.deserialize(message))

    private fun CommandSource.reply(message: Component) = sendMessage(message)

    // マウスを乗せると案内が出て、クリックでクリップボードにコピーされる。
    private fun UUID.copyable(): Component =
        Component.text(toString(), NamedTextColor.YELLOW)
            .hoverEvent(HoverEvent.showText(Component.text("クリックでUUIDをコピー")))
            .clickEvent(ClickEvent.copyToClipboard(toString()))

    private fun PunishmentType.display(): String =
        if (this == PunishmentType.BAN) "永久BAN" else "期間BAN"

    private fun PunishmentRecord.details(): Component =
        legacy
            .deserialize(
                """
                §c有効なBANがあります
                §f種別: §e${type.display()}
                §f理由: §e$reason
                §f執行者: §e$operator
                §f開始: §e${time.format(Instant.ofEpochMilli(start))}
                §f期限: §e${end?.let { time.format(Instant.ofEpochMilli(it)) } ?: "永久"}
                """
                    .trimIndent()
            )
            .append(legacy.deserialize("\n§fUUID: "))
            .append(uuid.copyable())
  }
}
