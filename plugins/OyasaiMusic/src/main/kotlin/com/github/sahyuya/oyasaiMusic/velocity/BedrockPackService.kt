package com.github.sahyuya.oyasaiMusic.velocity

import com.github.sahyuya.oyasaiMusic.interop.BedrockTransferCodec
import com.velocitypowered.api.event.connection.PluginMessageEvent
import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.ServerConnection
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import java.nio.file.Files
import java.nio.file.Path
import java.security.MessageDigest
import java.util.Properties
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicBoolean
import org.geysermc.geyser.api.GeyserApi
import org.geysermc.geyser.api.event.EventRegistrar
import org.geysermc.geyser.api.event.bedrock.SessionLoadResourcePacksEvent
import org.geysermc.geyser.api.pack.PackCodec
import org.geysermc.geyser.api.pack.ResourcePack
import org.slf4j.Logger

/**
 * Minimal Bedrock pack service for Velocity.
 *
 * Paper owns all decisions and persisted state; this side only tracks the pack-enabled
 * set in memory, executes Transfer, and injects the locally hosted .mcpack at Bedrock
 * login. The pack file lives in this plugin's data `packs/` directory (never inside
 * Geyser's auto-apply packs directory) and is loaded lazily on first need so an idle
 * proxy keeps no pack bytes resident.
 */
class BedrockPackService(
    private val proxy: ProxyServer,
    private val logger: Logger,
    private val dataDirectory: Path,
) {
  companion object {
    val TRANSFER_CHANNEL: MinecraftChannelIdentifier =
        MinecraftChannelIdentifier.from(BedrockTransferCodec.CHANNEL)
    private const val MAIN_SERVER = "main"
    private const val PACKS_DIR = "packs"
    private const val CONFIG_FILE = "bedrock-pack.properties"
    private const val DEFAULT_PACK_FILE = "OyasaiMusic-26.2-extended.mcpack"
    private const val DEFAULT_HOST = "oyasai.io"
    private const val DEFAULT_PORT = 19132
  }

  private val packEnabled = ConcurrentHashMap<UUID, Boolean>()
  @Volatile private var cachedPack: ResourcePack? = null
  private val subscribed = AtomicBoolean(false)
  @Volatile private var packFile = DEFAULT_PACK_FILE
  @Volatile private var transferHost = DEFAULT_HOST
  @Volatile private var transferPort = DEFAULT_PORT

  fun load() {
    try {
      Files.createDirectories(dataDirectory.resolve(PACKS_DIR))
      val configPath = dataDirectory.resolve(CONFIG_FILE)
      if (!Files.isRegularFile(configPath)) {
        Files.writeString(
            configPath,
            "# Bedrock pack for OyasaiMusic (Velocity side).\n" +
                "# Place the .mcpack (see tools/ommt-pack-builder/Build-OmmtMcpack.ps1) under ./packs/.\n" +
                "pack-file=$DEFAULT_PACK_FILE\n" +
                "transfer-host=$DEFAULT_HOST\n" +
                "transfer-port=$DEFAULT_PORT\n",
        )
        logger.info("Wrote default {}. Place the .mcpack under ./packs/.", CONFIG_FILE)
      }
      Properties().apply { Files.newInputStream(configPath).use(::load) }.let { props ->
        packFile = props.getProperty("pack-file", DEFAULT_PACK_FILE).trim().ifBlank { DEFAULT_PACK_FILE }
        transferHost = props.getProperty("transfer-host", DEFAULT_HOST).trim().ifBlank { DEFAULT_HOST }
        transferPort = props.getProperty("transfer-port", DEFAULT_PORT.toString()).trim().toIntOrNull()
            ?.coerceIn(1, 65535) ?: DEFAULT_PORT
      }
      val file = dataDirectory.resolve(PACKS_DIR).resolve(packFile)
      if (Files.isRegularFile(file)) {
        logger.info("Bedrock pack configured: {} ({} bytes, sha1 {})", file.fileName, Files.size(file), sha1Hex(file))
      } else {
        logger.warn("Bedrock pack missing: {}. Transfer requests will be accepted but pack injection skipped.", file)
      }
    } catch (error: Exception) {
      logger.warn("Failed to load bedrock pack config, pack injection disabled.", error)
    }
  }

  fun handleTransferMessage(event: PluginMessageEvent) {
    // Backend main -> proxy only. The player UUID travels inside the payload.
    val source = event.source as? ServerConnection ?: return
    if (source.serverInfo.name != MAIN_SERVER) return
    val request = BedrockTransferCodec.decode(event.data) ?: return
    // Deny unloads at the next natural login: flag removal only, no forced reconnect.
    if (!request.allow) {
      packEnabled.remove(request.playerId)
      logger.info("Bedrock pack disabled for {} (packId {})", request.playerId, request.packId)
      return
    }
    packEnabled[request.playerId] = true
    logger.info("Bedrock pack enabled for {} (packId {})", request.playerId, request.packId)
    ensureSubscribed()
    // Force a re-login so the pack takes effect immediately.
    transfer(request.playerId)
  }

  fun onSessionLoadPacks(event: SessionLoadResourcePacksEvent) {
    val uuid = runCatching { event.connection().javaUuid() }.getOrNull() ?: return
    if (packEnabled[uuid] != true) return
    val pack = packOrNull() ?: return
    try {
      event.register(pack)
    } catch (error: Exception) {
      logger.warn("Failed to register Bedrock pack for {}", uuid, error)
    }
  }

  private fun ensureSubscribed() {
    if (subscribed.get()) return
    val api = GeyserApi.api() ?: run {
      logger.warn("Geyser API unavailable; Bedrock pack injection deferred until Geyser enables.")
      return
    }
    try {
      api.eventBus().subscribe(EventRegistrar.of(this), SessionLoadResourcePacksEvent::class.java, this::onSessionLoadPacks)
      subscribed.set(true)
    } catch (error: Exception) {
      logger.warn("Failed to subscribe SessionLoadResourcePacksEvent.", error)
    }
  }

  private fun transfer(playerId: UUID) {
    val api = GeyserApi.api() ?: run {
      logger.warn("Geyser API unavailable; cannot transfer {}.", playerId)
      return
    }
    val connection = api.connectionByUuid(playerId) ?: run {
      logger.info("No Geyser session for {}; skipping transfer.", playerId)
      return
    }
    try {
      connection.transfer(transferHost, transferPort)
    } catch (error: Exception) {
      logger.warn("Transfer failed for {}.", playerId, error)
    }
  }

  private fun packOrNull(): ResourcePack? {
    cachedPack?.let { return it }
    synchronized(this) {
      cachedPack?.let { return it }
      val file = dataDirectory.resolve(PACKS_DIR).resolve(packFile)
      if (!Files.isRegularFile(file)) {
        logger.warn("Bedrock pack missing: {}; skipping injection.", file)
        return null
      }
      return try {
        ResourcePack.create(PackCodec.path(file)).also {
          cachedPack = it
          logger.info("Bedrock pack cached: {} ({} bytes).", file.fileName, Files.size(file))
        }
      } catch (error: Exception) {
        logger.warn("Failed to load Bedrock pack {}.", file, error)
        null
      }
    }
  }

  private fun sha1Hex(path: Path): String =
      runCatching {
        val digest = MessageDigest.getInstance("SHA-1")
        Files.newInputStream(path).use { input ->
          val buffer = ByteArray(65536)
          while (true) {
            val read = input.read(buffer)
            if (read <= 0) break
            digest.update(buffer, 0, read)
          }
        }
        digest.digest().joinToString("") { "%02x".format(it) }
      }.getOrDefault("unknown")
}
