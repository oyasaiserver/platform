package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.interop.PackControlCodec
import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
import com.github.sahyuya.oyasaiMusic.resourcepack.OyasaiResourcePackService.ConnectionState
import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/** 管理操作を集約した `/oyasaimusic` コマンド。 */
class OyasaiMusicCommand(private val plugin: OyasaiMusic) : CommandExecutor, TabCompleter {
  private data class KnownTarget(val playerId: UUID, val displayName: String)

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("oyasaimusic.admin")) {
      sender.sendMessage("§cこのコマンドを実行する権限がありません。")
      return true
    }
    when (args.firstOrNull()?.lowercase()) {
      "reload" -> {
        plugin.reloadRuntimeConfiguration()
        plugin.rankingCacheService.reloadCache()
        sender.sendMessage("§aOyasaiMusicの設定とランキングキャッシュを再読み込みしました。")
      }
      "update" -> {
        plugin.rankingCacheService.refreshPeriodRankings()
        sender.sendMessage("§a日間・週間ランキングの更新を開始しました。")
      }
      "rp", "resourcepack" -> handleResourcePack(sender, args.drop(1))
      else -> sender.sendMessage("§e/oyasaimusic <reload|update|rp>")
    }
    return true
  }

  private fun handleResourcePack(sender: CommandSender, args: List<String>) {
    when (args.firstOrNull()?.lowercase()) {
      "set" -> changeOnlinePreference(sender, args, allow = true)
      "unset" -> changeOnlinePreference(sender, args, allow = false)
      "check" -> checkPreference(sender, args)
      "list" -> listAllowed(sender, args)
      else -> sendResourcePackUsage(sender)
    }
  }

  private fun changeOnlinePreference(sender: CommandSender, args: List<String>, allow: Boolean) {
    if (args.size != 2) {
      sender.sendMessage("§e/oyasaimusic rp ${if (allow) "set" else "unset"} <player|uuid>")
      return
    }
    val target = resolveOnline(args[1])
    if (target == null) {
      val known = resolveKnown(args[1])
      if (known == null) sender.sendMessage("§c記録済みの名前またはUUIDで指定してください。")
      else changeOfflinePreference(sender, known, allow)
      return
    }
    val bedrock = isBedrock(target)
    val completion: (Boolean) -> Unit = { saved ->
      if (sender !is Player || sender.isOnline) {
        if (saved) {
          sender.sendMessage(
            "§a${target.name} の拡張音域設定を ${if (allow) "ALLOW" else "DENY"} に変更しました" +
              "（${if (bedrock) "統合版" else "Java版"}）。",
          )
        } else {
          sender.sendMessage("§c${target.name} の拡張音域設定を保存できませんでした。")
        }
      }
    }
    if (bedrock) {
      if (allow) plugin.bedrockTransferService.allow(target, completion)
      else plugin.bedrockTransferService.deny(target, completion)
    } else {
      if (allow) plugin.resourcePackService.allow(target, completion = completion)
      else plugin.resourcePackService.deny(target, completion)
    }
  }

  private fun changeOfflinePreference(sender: CommandSender, target: KnownTarget, allow: Boolean) {
    val prefix = plugin.config.getString("bedrock.name-prefix", ".").orEmpty()
    val bedrock = target.playerId.mostSignificantBits == 0L ||
      (prefix.isNotEmpty() && target.displayName.startsWith(prefix))
    fun save() {
      Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
        val saved = runCatching {
          plugin.resourcePackPreferenceRepository.set(target.playerId,
            if (allow) ResourcePackPreference.ALLOW else ResourcePackPreference.DENY)
        }.isSuccess
        Bukkit.getScheduler().runTask(plugin, Runnable {
          sender.sendMessage(if (saved)
            "§a${target.displayName} の保存設定を ${if (allow) "ALLOW" else "DENY"} に変更しました。次回参加時に反映されます。"
          else "§cPaperの保存に失敗しました。統合版の場合はVelocity側だけ変更された可能性があります。同じコマンドで再試行してください。")
          if (saved) plugin.resourcePackService.forget(target.playerId)
        })
      })
    }
    if (!bedrock && !plugin.bedrockTransferService.transferEnabled()) {
      save()
      return
    }
    val carrier = Bukkit.getOnlinePlayers().firstOrNull()
    if (carrier == null) {
      if (!bedrock) { save(); return }
      sender.sendMessage("§cVelocityへの連絡にはmainに誰か1人の接続が必要です。対象者本人はオフラインで構いません。設定は変更していません。")
      return
    }
    plugin.bedrockTransferService.requestControl(carrier, target.playerId,
      if (allow) PackControlCodec.SET else PackControlCodec.UNSET) { result ->
      when (result) {
        PackControlCodec.OK -> save()
        PackControlCodec.UNKNOWN -> if (!bedrock) save() else sender.sendMessage("§cVelocityに対象者の統合版ID記録がありません。UUIDを確認してください。旧連携アカウントは管理者による許可リストの確認が必要です。")
        else -> sender.sendMessage("§cVelocity側の更新を確認できませんでした。Paperの設定は未変更です。同じコマンドで再試行してください。")
      }
    }
  }

  private fun checkPreference(sender: CommandSender, args: List<String>) {
    if (args.size != 2) {
      sender.sendMessage("§e/oyasaimusic rp check <player|uuid>")
      return
    }
    val target = resolveKnown(args[1])
    if (target == null) {
      sender.sendMessage("§cオンライン中またはサーバーに記録済みのプレイヤー名、あるいはUUIDを指定してください。")
      return
    }
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      val result = runCatching { plugin.resourcePackPreferenceRepository.get(target.playerId) }
      Bukkit.getScheduler().runTask(plugin, Runnable {
        if (sender is Player && !sender.isOnline) return@Runnable
        val preference = result.getOrElse {
          sender.sendMessage("§cリソースパック設定を読み取れませんでした。")
          return@Runnable
        }
        val online = Bukkit.getPlayer(target.playerId)?.takeIf { it.isOnline }
        val platform = when {
          online == null -> "オフライン"
          isBedrock(online) -> "統合版"
          else -> "Java版"
        }
        sender.sendMessage("§b${target.displayName} §7(${target.playerId})")
        sender.sendMessage(
          "§7保存設定: §f${preference.name} §7/ 種別: §f$platform §7/ 現在: §f${connectionDescription(online)}",
        )
      })
    })
  }

  private fun listAllowed(sender: CommandSender, args: List<String>) {
    if (args.size > 2) {
      sender.sendMessage("§e/oyasaimusic rp list [page]")
      return
    }
    val rawPage = args.getOrNull(1)
    val page = rawPage?.toIntOrNull() ?: if (rawPage == null) 1 else {
      sender.sendMessage("§cページは整数で指定してください。")
      return
    }
    if (page <= 0 || page > MAX_PAGE) {
      sender.sendMessage("§cページは1から${MAX_PAGE}の整数で指定してください。")
      return
    }
    val offset = (page - 1) * PAGE_SIZE
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      val result = runCatching {
        plugin.resourcePackPreferenceRepository.listAllowed(offset, PAGE_SIZE)
      }
      Bukkit.getScheduler().runTask(plugin, Runnable {
        if (sender is Player && !sender.isOnline) return@Runnable
        val allowedPage = result.getOrElse {
          sender.sendMessage("§cALLOW一覧を読み取れませんでした。")
          return@Runnable
        }
        val pages = maxOf(1, (allowedPage.total + PAGE_SIZE - 1) / PAGE_SIZE)
        if (page > pages && allowedPage.total > 0) {
          sender.sendMessage("§cページ${page}はありません。最終ページは${pages}です。")
          return@Runnable
        }
        sender.sendMessage("§b拡張音域 ALLOW 一覧 §7($page/$pages, ${allowedPage.total}人)")
        if (allowedPage.entries.isEmpty()) {
          sender.sendMessage("§7該当するプレイヤーはいません。")
          return@Runnable
        }
        allowedPage.entries.forEachIndexed { index, entry ->
          val online = Bukkit.getPlayer(entry.playerId)?.takeIf { it.isOnline }
          val cachedName = Bukkit.getOfflinePlayer(entry.playerId).name
          val name = online?.name ?: cachedName ?: entry.playerId.toString()
          val platform = when {
            online == null -> "offline"
            isBedrock(online) -> "Bedrock"
            else -> "Java"
          }
          sender.sendMessage("§7${offset + index + 1}. §f$name §8(${entry.playerId}, $platform)")
        }
      })
    })
  }

  private fun connectionDescription(player: Player?): String {
    if (player == null) return "オフライン（接続状態なし）"
    val state = plugin.resourcePackService.connectionState(player.uniqueId)
    if (isBedrock(player) && state == ConnectionState.SUCCESS) {
      return "Geyser登録済み（端末側の受諾完了はAPIで未確認）"
    }
    return when (state) {
      ConnectionState.PREFERENCE_PENDING -> "保存設定を確認中"
      ConnectionState.ALLOWED -> "ALLOW・この接続では未適用"
      ConnectionState.REQUESTED -> "ダウンロード処理中"
      ConnectionState.SUCCESS -> "読み込み済み"
      ConnectionState.DECLINED -> "通常音域"
      ConnectionState.FAILED -> "読み込み失敗・通常音域"
      ConnectionState.TIMED_OUT -> "タイムアウト・通常音域"
      null -> "未確認・通常音域"
    }
  }

  private fun resolveOnline(raw: String): Player? {
    runCatching { UUID.fromString(raw) }.getOrNull()?.let(Bukkit::getPlayer)?.let { return it }
    return Bukkit.getOnlinePlayers().firstOrNull { it.name.equals(raw, ignoreCase = true) }
  }

  private fun resolveKnown(raw: String): KnownTarget? {
    resolveOnline(raw)?.let { return KnownTarget(it.uniqueId, it.name) }
    runCatching { UUID.fromString(raw) }.getOrNull()?.let { id ->
      return KnownTarget(id, Bukkit.getOfflinePlayer(id).name ?: id.toString())
    }
    val cached = Bukkit.getOfflinePlayerIfCached(raw) ?: return null
    return KnownTarget(cached.uniqueId, cached.name ?: raw)
  }

  private fun isBedrock(player: Player): Boolean {
    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    return BedrockUtil.isBedrock(player, prefix)
  }

  private fun sendResourcePackUsage(sender: CommandSender) {
    sender.sendMessage("§e/oyasaimusic rp set <player|uuid>")
    sender.sendMessage("§e/oyasaimusic rp unset <player|uuid>")
    sender.sendMessage("§e/oyasaimusic rp check <player|uuid>")
    sender.sendMessage("§e/oyasaimusic rp list [page]")
  }

  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>,
  ): List<String> =
    when (args.size) {
      1 -> listOf("reload", "update", "rp").filter { it.startsWith(args[0], true) }
      2 ->
        if (args[0].equals("rp", true) || args[0].equals("resourcepack", true)) {
          listOf("set", "unset", "list", "check").filter { it.startsWith(args[1], true) }
        } else emptyList()
      3 ->
        if ((args[0].equals("rp", true) || args[0].equals("resourcepack", true)) &&
          args[1].lowercase() in setOf("set", "unset", "check")) {
          Bukkit.getOnlinePlayers().map { it.name }.filter { it.startsWith(args[2], true) }
        } else emptyList()
      else -> emptyList()
    }

  private companion object {
    const val PAGE_SIZE = 10
    const val MAX_PAGE = 100_000
  }
}
