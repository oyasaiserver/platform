package io.oyasai.oyasaiban

import com.google.inject.Inject
import com.velocitypowered.api.event.EventTask
import com.velocitypowered.api.event.ResultedEvent
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.LoginEvent
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent
import com.velocitypowered.api.event.proxy.ProxyShutdownEvent
import com.velocitypowered.api.plugin.Dependency
import com.velocitypowered.api.plugin.Plugin
import com.velocitypowered.api.plugin.annotation.DataDirectory
import com.velocitypowered.api.proxy.ProxyServer
import java.nio.file.Files
import java.nio.file.Path
import java.util.UUID
import java.util.concurrent.CompletionException
import net.kyori.adventure.key.Key
import net.kyori.adventure.sound.Sound
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.slf4j.Logger

@Plugin(
    id = "oyasaiban",
    name = "OyasaiBan",
    version = "0.1.0",
    description = "Velocity-wide BAN management",
    authors = ["OyasaiServer"],
    dependencies = [Dependency(id = "floodgate", optional = true)],
)
class OyasaiBanPlugin
@Inject
constructor(
    internal val proxy: ProxyServer,
    private val logger: Logger,
    @DataDirectory private val dataDirectory: Path,
) {
  internal lateinit var database: PunishmentDatabase
  internal lateinit var nameResolver: NameResolver
  @Volatile private lateinit var notifier: DiscordNotifier

  @Subscribe
  fun onProxyInitialization(event: ProxyInitializeEvent) {
    database = PunishmentDatabase(dataDirectory.resolve("punishments.db"))
    nameResolver = NameResolver(proxy, database, logger)
    reloadConfig()
    BanCommandKind.entries.forEach { kind ->
      val name = kind.name.lowercase()
      proxy.commandManager.register(
          proxy.commandManager.metaBuilder(name).plugin(this).build(),
          BanCommand(this, kind, logger),
      )
    }
    proxy.commandManager.register(
        proxy.commandManager.metaBuilder("oyasaiban").plugin(this).build(),
        OyasaiBanAdminCommand(this, logger),
    )
    logger.info("OyasaiBan enabled.")
  }

  @Subscribe
  fun onLogin(event: LoginEvent): EventTask =
      EventTask.withContinuation { continuation ->
        database
            .login(event.player.uniqueId, event.player.username, System.currentTimeMillis())
            .whenComplete { lookup, error ->
              try {
                if (error != null) {
                  logger.error("BAN lookup failed during login", error.unwrap())
                  event.result =
                      ResultedEvent.ComponentResult.denied(
                          Component.text("BAN情報の確認に失敗しました。時間をおいて再接続してください。")
                      )
                } else if (lookup.punishment != null) {
                  event.result = ResultedEvent.ComponentResult.denied(denial(lookup.punishment))
                }
              } finally {
                continuation.resume()
              }
            }
      }

  @Subscribe
  fun onProxyShutdown(event: ProxyShutdownEvent): EventTask = EventTask.async { database.close() }

  internal fun afterBan(record: PunishmentRecord, duration: String, notificationReason: String) {
    proxy.getPlayer(record.uuid).ifPresent { it.disconnect(denial(record)) }
    proxy.allPlayers.forEach { player ->
      player.sendMessage(legacy.deserialize("§4§l[ＢＡＮ] §f§l${record.name} §fが§c§lBAN§fされました。"))
      player.playSound(banSound, Sound.Emitter.self())
    }
    notifier.sendBan(record.name, record.operator, notificationReason, duration)
  }

  /** 設定を読み直し、webhook が設定されているかを返す（URL そのものは返さない）。 */
  internal fun reloadConfig(): Boolean {
    val url = OyasaiBanConfig.load(dataDirectory, javaClass.classLoader).webhookBanUrl
    notifier = DiscordNotifier(url, logger)
    return url.isNotBlank()
  }

  internal fun resolveDataPath(configured: String): Path =
      Path.of(configured).let { if (it.isAbsolute) it else dataDirectory.resolve(it) }.normalize()

  internal fun loadUsercache(path: Path): Map<String, UUID> {
    if (!Files.exists(path)) return emptyMap()
    return runCatching {
          com.google.gson.JsonParser.parseString(Files.readString(path)).asJsonArray.associate {
              entry ->
            val obj = entry.asJsonObject
            obj["name"].asString.lowercase() to UUID.fromString(obj["uuid"].asString)
          }
        }
        .getOrElse {
          logger.warn("usercache.json could not be read: {}", it.message)
          emptyMap()
        }
  }

  private fun denial(record: PunishmentRecord): Component =
      Component.text(
          "あなたはOyasaiServerからBANされています。\n理由: ${record.reason}\n残り期間: ${remaining(record.end)}"
      )

  companion object {
    const val PERMISSION = "oyasai.ban"
    private val legacy = LegacyComponentSerializer.legacySection()
    private val banSound =
        Sound.sound(
            Key.key("minecraft:item.mace.smash_ground_heavy"),
            Sound.Source.MASTER,
            0.5f,
            2.0f,
        )

    private fun remaining(end: Long?): String {
      if (end == null) return "永久"
      var seconds = ((end - System.currentTimeMillis()).coerceAtLeast(0) + 999) / 1000
      val days = seconds / 86_400
      seconds %= 86_400
      val hours = seconds / 3_600
      seconds %= 3_600
      val minutes = seconds / 60
      seconds %= 60
      return buildList {
            if (days > 0) add("${days}日")
            if (hours > 0) add("${hours}時間")
            if (minutes > 0) add("${minutes}分")
            if (seconds > 0 || isEmpty()) add("${seconds}秒")
          }
          .joinToString(" ")
    }

    private fun Throwable.unwrap(): Throwable = (this as? CompletionException)?.cause ?: this
  }
}
