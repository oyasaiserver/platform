package icu.oyasai.utilities.skin

import com.destroystokyo.paper.profile.ProfileProperty
import java.util.Locale
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.CompletionException
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.plugin.java.JavaPlugin

class SkinFeature(private val plugin: JavaPlugin) :
    Listener, CommandExecutor, org.bukkit.command.TabCompleter {
  private val store = SkinStore(plugin.dataFolder)
  private val client = MojangSkinClient()
  private val inFlight = ConcurrentHashMap<String, CompletableFuture<SkinTexture>>()

  fun enable() {
    store.loadAsync().whenComplete { _, error ->
      if (error != null) plugin.logger.severe("Could not load skin cache: ${error.message}")
    }
  }

  fun disable() {
    store.close()
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    if (!FloodgateGuard.isFloodgatePlayer(event.player, plugin)) restore(event.player.uniqueId)
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val player = sender as? Player ?: return sender.reply("§cこのコマンドはプレイヤーのみ実行できます。")
    if (!player.hasPermission("oyasai.skin")) return sender.reply("§cこのコマンドを使用する権限がありません。")
    if (FloodgateGuard.isFloodgatePlayer(player, plugin)) {
      return sender.reply("§c統合版プレイヤーはスキン変更を使用できません。")
    }
    if (args.isEmpty()) {
      return sender.reply("§e使用法: /skin <set <MCID>|reset>")
    }
    when (args[0].lowercase(Locale.ROOT)) {
      "set" -> {
        if (args.size != 2) sender.reply("§e使用法: /skin set <MCID>") else set(player, args[1])
      }
      "reset" -> {
        if (args.size != 1) sender.reply("§e使用法: /skin reset") else reset(player)
      }
      else -> sender.reply("§e使用法: /skin <set <MCID>|reset>")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (sender !is Player || !sender.hasPermission("oyasai.skin")) return emptyList()
    return when (args.size) {
      1 -> {
        listOf("set", "reset").filter { it.startsWith(args[0], ignoreCase = true) }
      }
      2 -> {
        if (args[0].equals("set", ignoreCase = true)) {
          Bukkit.getOnlinePlayers()
              .map { it.name }
              .filter { it.startsWith(args[1], ignoreCase = true) }
        } else {
          emptyList()
        }
      }
      else -> emptyList()
    }
  }

  private fun set(player: Player, input: String) {
    val skinName = input.lowercase(Locale.ROOT)
    if (!minecraftId.matches(skinName)) {
      player.sendMessage("§cMinecraft ID は英数字と _ の 3〜16 文字で指定してください。")
      return
    }
    player.sendMessage("§7スキンを取得しています…")
    textureFor(skinName)
        .thenCompose { texture ->
          store.saveAssignment(player.uniqueId, skinName).thenApply { texture }
        }
        .thenCompose { texture -> apply(player.uniqueId, texture) }
        .whenComplete { _, error -> report(player.uniqueId, error, "§aスキンを $input に変更しました。") }
  }

  private fun reset(player: Player) {
    player.sendMessage("§7本来のスキンを取得しています…")
    textureFor(player.name.lowercase(Locale.ROOT))
        .thenCompose { texture -> apply(player.uniqueId, texture) }
        .thenCompose { store.clearAssignment(player.uniqueId) }
        .whenComplete { _, error -> report(player.uniqueId, error, "§a本来のスキンに戻しました。") }
  }

  private fun restore(playerId: UUID) {
    store.assignment(playerId).thenAccept { skinName ->
      if (skinName == null) return@thenAccept
      textureFor(skinName)
          .thenCompose { texture -> apply(playerId, texture) }
          .whenComplete { _, error ->
            if (error != null)
                plugin.logger.warning("Could not restore skin for $playerId: ${error.message}")
          }
    }
  }

  private fun textureFor(skinName: String): CompletableFuture<SkinTexture> {
    val pending = CompletableFuture<SkinTexture>()
    val existing = inFlight.putIfAbsent(skinName, pending)
    if (existing != null) return existing

    store
        .texture(skinName)
        .thenCompose { cached ->
          if (cached != null && SkinCache.isFresh(cached)) CompletableFuture.completedFuture(cached)
          else {
            client.fetch(skinName).thenCompose { fresh ->
              store.saveTexture(skinName, fresh).thenApply { fresh }
            }
          }
        }
        .whenComplete { texture, error ->
          if (error == null) pending.complete(texture) else pending.completeExceptionally(error)
        }
    pending.whenComplete { _, _ -> inFlight.remove(skinName, pending) }
    return pending
  }

  private fun apply(playerId: UUID, texture: SkinTexture): CompletableFuture<Unit> {
    val result = CompletableFuture<Unit>()
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              runCatching {
                    val player = Bukkit.getPlayer(playerId)
                    if (player == null) {
                      result.complete(Unit)
                      return@Runnable
                    }
                    val profile = player.playerProfile.clone()
                    profile.removeProperty("textures")
                    profile.setProperty(
                        ProfileProperty("textures", texture.value, texture.signature)
                    )
                    player.playerProfile = profile
                    Bukkit.getOnlinePlayers()
                        .filter { it != player && it.canSee(player) }
                        .forEach { viewer ->
                          viewer.hidePlayer(plugin, player)
                          viewer.showPlayer(plugin, player)
                        }
                  }
                  .onSuccess { result.complete(Unit) }
                  .onFailure { result.completeExceptionally(it) }
            },
        )
    return result
  }

  private fun report(playerId: UUID, error: Throwable?, success: String) {
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              val player = Bukkit.getPlayer(playerId) ?: return@Runnable
              if (error == null) player.sendMessage(success)
              else
                  player.sendMessage(
                      "§cスキンを変更できませんでした: ${error.rootCause().message ?: "通信に失敗しました"}"
                  )
            },
        )
  }

  private fun CommandSender.reply(message: String): Boolean {
    sendMessage(message)
    return true
  }

  private fun Throwable.rootCause(): Throwable =
      generateSequence(this) { (it as? CompletionException)?.cause }.last()

  private companion object {
    val minecraftId = Regex("[a-z0-9_]{3,16}", RegexOption.IGNORE_CASE)
  }
}

private object FloodgateGuard {
  fun isFloodgatePlayer(player: Player, plugin: JavaPlugin): Boolean {
    val floodgate =
        Bukkit.getPluginManager().getPlugin("floodgate")
            ?: Bukkit.getPluginManager().getPlugin("Floodgate")
            ?: return false
    return runCatching {
          val api = Class.forName("org.geysermc.floodgate.api.FloodgateApi")
          val instance = api.getMethod("getInstance").invoke(null)
          api.getMethod("isFloodgatePlayer", UUID::class.java).invoke(instance, player.uniqueId)
              as Boolean
        }
        .getOrElse {
          plugin.logger.warning(
              "Floodgate is installed but its API could not be used; blocking /skin safely."
          )
          true
        }
  }
}
