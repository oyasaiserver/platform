package com.github.sahyuya.oyasaiMusic.velocity

import com.github.sahyuya.oyasaiMusic.interop.BedrockPackStatusCodec
import com.github.sahyuya.oyasaiMusic.interop.BedrockTransferCodec
import com.velocitypowered.api.event.connection.PluginMessageEvent
import com.velocitypowered.api.proxy.Player
import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.ServerConnection
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import java.nio.charset.StandardCharsets
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardCopyOption
import java.security.MessageDigest
import java.util.Properties
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicLong
import org.geysermc.geyser.api.GeyserApi
import org.geysermc.geyser.api.connection.GeyserConnection
import org.geysermc.geyser.api.event.EventRegistrar
import org.geysermc.geyser.api.event.bedrock.SessionDisconnectEvent
import org.geysermc.geyser.api.event.bedrock.SessionLoadResourcePacksEvent
import org.geysermc.geyser.api.pack.PackCodec
import org.geysermc.geyser.api.pack.ResourcePack
import org.geysermc.geyser.api.pack.option.ResourcePackOption
import org.slf4j.Logger

/**
 * Bedrock pack service for Velocity.
 *
 * Song traffic remains a stateless relay. This service is the deliberately narrow
 * exception: it persists only opted-in Bedrock XUIDs so the pack can be attached during
 * Geyser's initial resource-pack event, before the player reaches backend `main`.
 */
class BedrockPackService(
  private val owner: Any,
  private val proxy: ProxyServer,
  private val logger: Logger,
  private val dataDirectory: Path,
) {
  companion object {
    val TRANSFER_CHANNEL: MinecraftChannelIdentifier =
      MinecraftChannelIdentifier.from(BedrockTransferCodec.CHANNEL)
    val STATUS_CHANNEL: MinecraftChannelIdentifier =
      MinecraftChannelIdentifier.from(BedrockPackStatusCodec.CHANNEL)
    private const val MAIN_SERVER = "main"
    private const val PACKS_DIR = "packs"
    private const val CONFIG_FILE = "bedrock-pack.properties"
    private const val ALLOWLIST_FILE = "bedrock-pack-allowlist.txt"
    private const val MAX_ALLOWED_XUIDS = 100_000
    private const val MAX_ALLOWLIST_BYTES = 4L * 1024L * 1024L
    private val XUID_PATTERN = Regex("[0-9]{1,20}")
  }

  // EventRegistrar.of calls GeyserApi.api(): never invoke it during Velocity construction.
  // Access this pair only under subscriptionLock and retain the API that owns the registration.
  private var registration: Pair<GeyserApi, EventRegistrar>? = null
  private val allowedXuids = ConcurrentHashMap.newKeySet<String>()
  private val registeredSessions = ConcurrentHashMap<String, GeyserConnection>()
  private val subscriptionLock = Any()
  private val allowListMutationLock = Any()
  private val allowListIoLock = Any()
  private val subscribed = AtomicBoolean(false)
  private val retryScheduled = AtomicBoolean(false)
  private val persistScheduled = AtomicBoolean(false)
  private val allowListRevision = AtomicLong()
  private val persistedRevision = AtomicLong()
  @Volatile private var shuttingDown = false
  @Volatile private var cachedPack: ResourcePack? = null
  @Volatile private var packFile = BedrockPackSettingsParser.DEFAULT_PACK_FILE
  @Volatile private var returnHost = BedrockPackSettingsParser.DEFAULT_RETURN_HOST
  @Volatile private var returnPort = BedrockPackSettingsParser.DEFAULT_RETURN_PORT

  fun load() {
    try {
      Files.createDirectories(dataDirectory.resolve(PACKS_DIR))
      val configPath = dataDirectory.resolve(CONFIG_FILE)
      if (!Files.isRegularFile(configPath)) {
        Files.writeString(
          configPath,
          "# Bedrock pack for OyasaiMusic (Velocity side).\n" +
            "# Place the .mcpack (see tools/ommt-pack-builder/Build-OmmtMcpack.ps1) under ./packs/.\n" +
            "# Geyser must use force-resource-packs: false so a declined download does not block joining.\n" +
            "pack-file=${BedrockPackSettingsParser.DEFAULT_PACK_FILE}\n" +
            "# Public Geyser address used only when /mm rp allow requests one reconnect.\n" +
            "return-host=${BedrockPackSettingsParser.DEFAULT_RETURN_HOST}\n" +
            "return-port=${BedrockPackSettingsParser.DEFAULT_RETURN_PORT}\n",
        )
        logger.info("Wrote default {}. Place the .mcpack under ./packs/.", CONFIG_FILE)
      }
      val settings =
        BedrockPackSettingsParser.parse(
          Properties().apply { Files.newInputStream(configPath).use(::load) },
        )
      packFile = settings.packFile
      returnHost = settings.returnHost
      returnPort = settings.returnPort
      if (settings.invalidPackFile) {
        logger.warn("Invalid pack-file in {}; using {}.", CONFIG_FILE, packFile)
      }
      if (settings.invalidReturnHost) {
        logger.warn("Invalid return-host in {}; using {}.", CONFIG_FILE, returnHost)
      }
      if (settings.invalidReturnPort) {
        logger.warn("Invalid return-port in {}; using {}.", CONFIG_FILE, returnPort)
      }
      if (settings.usedLegacyHost || settings.usedLegacyPort) {
        logger.warn(
          "Legacy transfer-host/transfer-port keys are still accepted; migrate {} to return-host/return-port.",
          CONFIG_FILE,
        )
      }
      logger.info("Bedrock Transfer return target: {}:{}.", returnHost, returnPort)
      logger.info(
        "Bedrock pack declines require Geyser force-resource-packs=false; OyasaiMusic cannot override this global Geyser setting.",
      )
      loadAllowedXuids()
      val file = dataDirectory.resolve(PACKS_DIR).resolve(packFile)
      if (Files.isRegularFile(file)) {
        logger.info(
          "Bedrock pack configured: {} ({} bytes, sha1 {})",
          file.fileName,
          Files.size(file),
          sha1Hex(file),
        )
      } else {
        logger.warn(
          "Bedrock pack missing: {}. Pack registration will remain unavailable until the file is installed.",
          file,
        )
      }
    } catch (error: Exception) {
      logger.warn("Failed to load Bedrock pack configuration.", error)
    }

    if (!ensureSubscribed()) {
      logger.warn("Geyser API is not ready; OyasaiMusic will retry its pre-login pack subscription.")
      scheduleSubscriptionRetry()
    }
  }

  fun shutdown() {
    synchronized(subscriptionLock) {
      shuttingDown = true
      registration?.let { (api, registrar) ->
        runCatching { api.eventBus().unregisterAll(registrar) }
          .onFailure { logger.warn("Failed to unregister Geyser resource-pack events.", it) }
      }
      registration = null
      subscribed.set(false)
    }
    if (persistedRevision.get() != allowListRevision.get()) {
      runCatching {
        writeAllowedXuids()
        persistedRevision.set(allowListRevision.get())
      }.onFailure { logger.warn("Failed to flush Bedrock pack allow-list during shutdown.", it) }
    }
    registeredSessions.clear()
  }

  fun handleTransferMessage(event: PluginMessageEvent) {
    val source = event.source as? ServerConnection ?: return
    if (source.serverInfo.name != MAIN_SERVER) return
    val request = BedrockTransferCodec.decode(event.data) ?: return
    val player = source.player
    // The backend message is bound to one live player connection. The payload cannot
    // select another UUID, and XUID is resolved from Geyser instead of trusting input.
    if (request.playerId != player.uniqueId) {
      logger.warn("Rejected Bedrock pack request with mismatched player UUID from backend main.")
      return
    }
    val connection = geyserConnection(request.playerId) ?: run {
      logger.warn("Rejected Bedrock pack request because no matching Geyser session exists.")
      return
    }
    val xuid = normalizeXuid(connection.xuid()) ?: run {
      logger.warn("Rejected Bedrock pack request because Geyser returned an invalid XUID.")
      return
    }

    if (!request.allow) {
      removeAllowedXuid(xuid)
      registeredSessions.remove(xuid, connection)
      sendStatus(player, loaded = false, packId = request.packId)
      logger.info("Bedrock pack disabled for session {} (packId {}).", xuidLabel(xuid), request.packId)
      return
    }

    val pack = packOrNull()
    val actualPackId = pack?.uuid()?.toString().orEmpty()
    if (pack == null || !actualPackId.equals(request.packId, ignoreCase = true)) {
      sendStatus(player, loaded = false, packId = request.packId)
      logger.warn(
        "Rejected Bedrock pack enable for session {} because configured pack UUID {} does not match request {}.",
        xuidLabel(xuid),
        actualPackId.ifBlank { "unavailable" },
        request.packId,
      )
      return
    }
    if (!ensureSubscribed()) {
      sendStatus(player, loaded = false, packId = actualPackId)
      scheduleSubscriptionRetry()
      logger.warn("Rejected Bedrock pack enable because the Geyser pack event is not subscribed.")
      return
    }
    if (!addAllowedXuid(xuid)) {
      sendStatus(player, loaded = false, packId = actualPackId)
      logger.warn("Rejected Bedrock pack enable because the XUID allow-list reached its limit.")
      return
    }

    // An ALLOW repeated after a successful pre-login injection is idempotent. Reporting
    // current status lets Paper clear a speculative evacuation without another transfer.
    if (registeredSessions[xuid] === connection) {
      sendStatus(player, loaded = true, packId = actualPackId)
      logger.info("Bedrock pack already active for session {}; transfer skipped.", xuidLabel(xuid))
      return
    }

    if (transfer(connection)) {
      logger.info(
        "Bedrock pack allow stored for session {}; transferring once for initial application.",
        xuidLabel(xuid),
      )
    } else {
      // Keep the persisted opt-in so the next natural login can still receive the pack.
      sendStatus(player, loaded = false, packId = actualPackId)
      logger.warn(
        "Bedrock transfer was rejected for session {}; opt-in remains stored for next login.",
        xuidLabel(xuid),
      )
    }
  }

  /** Sends current Geyser pack state after the player has reached backend main. */
  fun onBackendConnected(player: Player) {
    val current = player.currentServer.orElse(null) ?: return
    if (current.serverInfo.name != MAIN_SERVER) return
    val connection = geyserConnection(player.uniqueId) ?: return
    val xuid = normalizeXuid(connection.xuid()) ?: return
    if (!allowedXuids.contains(xuid)) return
    val packId = cachedPack?.uuid()?.toString() ?: packOrNull()?.uuid()?.toString().orEmpty()
    sendStatus(player, loaded = registeredSessions[xuid] === connection, packId = packId)
  }

  fun onSessionLoadPacks(event: SessionLoadResourcePacksEvent) {
    val xuid = normalizeXuid(runCatching { event.connection().xuid() }.getOrNull()) ?: return
    if (!allowedXuids.contains(xuid)) return
    val pack = packOrNull() ?: run {
      registeredSessions.remove(xuid, event.connection())
      logger.warn("Could not register the Bedrock pack for allowed session {}: pack unavailable.", xuidLabel(xuid))
      return
    }
    try {
      val alreadyPresent = event.resourcePacks().any { it.uuid() == pack.uuid() }
      if (!alreadyPresent) event.register(pack, *emptyArray<ResourcePackOption<*>>())
      registeredSessions[xuid] = event.connection()
      logger.info(
        "Registered Bedrock pack {} for session {} during initial Geyser connection.",
        pack.uuid(),
        xuidLabel(xuid),
      )
    } catch (error: Exception) {
      registeredSessions.remove(xuid, event.connection())
      logger.warn("Failed to register Bedrock pack for session {}.", xuidLabel(xuid), error)
    }
  }

  fun onSessionDisconnect(event: SessionDisconnectEvent) {
    normalizeXuid(runCatching { event.connection().xuid() }.getOrNull())
      ?.let { registeredSessions.remove(it, event.connection()) }
  }

  private fun ensureSubscribed(): Boolean {
    synchronized(subscriptionLock) {
      if (shuttingDown) return false
      if (subscribed.get()) return true
      val api = runCatching { GeyserApi.api() }.getOrNull() ?: return false
      // Geyser's API and registrar provider may become available after our initialize event.
      // A failed attempt leaves no registrar behind and can be retried by the existing task.
      val registrar = runCatching { EventRegistrar.of(this) }.getOrNull() ?: return false
      return try {
        api.eventBus().subscribe(registrar, SessionLoadResourcePacksEvent::class.java, this::onSessionLoadPacks)
        api.eventBus().subscribe(registrar, SessionDisconnectEvent::class.java, this::onSessionDisconnect)
        registration = api to registrar
        subscribed.set(true)
        logger.info("Subscribed Geyser pre-login pack and disconnect events.")
        true
      } catch (error: Exception) {
        runCatching { api.eventBus().unregisterAll(registrar) }
        logger.warn("Failed to subscribe Geyser resource-pack events.", error)
        false
      }
    }
  }

  private fun scheduleSubscriptionRetry() {
    if (shuttingDown || subscribed.get() || !retryScheduled.compareAndSet(false, true)) return
    try {
      proxy.scheduler
        .buildTask(owner) { task ->
          if (shuttingDown || subscribed.get() || ensureSubscribed()) {
            retryScheduled.set(false)
            task.cancel()
          }
        }
        .delay(1L, TimeUnit.SECONDS)
        .repeat(2L, TimeUnit.SECONDS)
        .schedule()
    } catch (error: Exception) {
      retryScheduled.set(false)
      logger.warn("Failed to schedule Geyser subscription retry.", error)
    }
  }

  private fun geyserConnection(playerId: UUID): GeyserConnection? {
    val api = runCatching { GeyserApi.api() }.getOrNull() ?: return null
    return api.connectionByUuid(playerId)
      ?: api.onlineConnections().firstOrNull { runCatching { it.javaUuid() == playerId }.getOrDefault(false) }
  }

  private fun transfer(connection: GeyserConnection): Boolean =
    try {
      connection.transfer(returnHost, returnPort)
    } catch (error: Exception) {
      logger.warn("Geyser Transfer call failed.", error)
      false
    }

  private fun sendStatus(player: Player, loaded: Boolean, packId: String) {
    val connection = player.currentServer.orElse(null) ?: return
    if (connection.serverInfo.name != MAIN_SERVER) return
    val bytes = runCatching { BedrockPackStatusCodec.encode(player.uniqueId, loaded, packId) }
      .getOrElse {
        logger.warn("Could not encode Bedrock pack status.", it)
        return
      }
    if (!connection.sendPluginMessage(STATUS_CHANNEL, bytes)) {
      logger.warn("Backend main did not accept the Bedrock pack status plugin message.")
    }
  }

  private fun addAllowedXuid(xuid: String): Boolean {
    var changed = false
    synchronized(allowListMutationLock) {
      if (allowedXuids.contains(xuid)) return true
      if (allowedXuids.size >= MAX_ALLOWED_XUIDS) return false
      changed = allowedXuids.add(xuid)
      if (changed) allowListRevision.incrementAndGet()
    }
    if (changed) scheduleAllowListWrite()
    return true
  }

  private fun removeAllowedXuid(xuid: String) {
    val changed = synchronized(allowListMutationLock) {
      allowedXuids.remove(xuid).also { if (it) allowListRevision.incrementAndGet() }
    }
    if (changed) scheduleAllowListWrite()
  }

  private fun loadAllowedXuids() {
    val path = dataDirectory.resolve(ALLOWLIST_FILE)
    if (!Files.isRegularFile(path)) {
      logger.info("Bedrock pack allow-list is empty; it will be created after the first ALLOW.")
      return
    }
    if (Files.size(path) > MAX_ALLOWLIST_BYTES) {
      logger.warn("Rejected oversized Bedrock pack allow-list: {} bytes.", Files.size(path))
      return
    }
    var invalid = 0
    Files.newBufferedReader(path, StandardCharsets.UTF_8).useLines { lines ->
      lines.take(MAX_ALLOWED_XUIDS + 1).forEach { line ->
        val xuid = normalizeXuid(line)
        if (xuid == null) invalid++ else if (allowedXuids.size < MAX_ALLOWED_XUIDS) allowedXuids.add(xuid)
      }
    }
    if (invalid > 0) logger.warn("Ignored {} invalid entries in Bedrock pack allow-list.", invalid)
    logger.info("Loaded {} opted-in Bedrock XUIDs for pre-login pack delivery.", allowedXuids.size)
  }

  private fun scheduleAllowListWrite() {
    if (shuttingDown || !persistScheduled.compareAndSet(false, true)) return
    try {
      proxy.scheduler.buildTask(owner, Runnable {
        var lastWritten = persistedRevision.get()
        try {
          do {
            val target = allowListRevision.get()
            writeAllowedXuids()
            persistedRevision.set(target)
            lastWritten = target
          } while (!shuttingDown && lastWritten != allowListRevision.get())
        } catch (error: Exception) {
          logger.warn("Failed to persist Bedrock pack allow-list.", error)
        } finally {
          persistScheduled.set(false)
          if (!shuttingDown && lastWritten != allowListRevision.get()) scheduleAllowListWrite()
        }
      }).schedule()
    } catch (error: Exception) {
      persistScheduled.set(false)
      logger.warn("Failed to schedule Bedrock pack allow-list persistence.", error)
    }
  }

  private fun writeAllowedXuids() {
    synchronized(allowListIoLock) {
      Files.createDirectories(dataDirectory)
      val path = dataDirectory.resolve(ALLOWLIST_FILE)
      val temporary = dataDirectory.resolve("$ALLOWLIST_FILE.tmp")
      val snapshot = synchronized(allowListMutationLock) { allowedXuids.toList().sorted() }
      val content = if (snapshot.isEmpty()) "" else snapshot.joinToString("\n", postfix = "\n")
      Files.writeString(temporary, content, StandardCharsets.UTF_8)
      try {
        Files.move(
          temporary,
          path,
          StandardCopyOption.ATOMIC_MOVE,
          StandardCopyOption.REPLACE_EXISTING,
        )
      } catch (_: AtomicMoveNotSupportedException) {
        Files.move(temporary, path, StandardCopyOption.REPLACE_EXISTING)
      }
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
          logger.info(
            "Bedrock pack cached: {} ({} bytes, uuid {}).",
            file.fileName,
            Files.size(file),
            it.uuid(),
          )
        }
      } catch (error: Exception) {
        logger.warn("Failed to load Bedrock pack {}.", file, error)
        null
      }
    }
  }

  private fun normalizeXuid(value: String?): String? = value?.trim()?.takeIf(XUID_PATTERN::matches)

  private fun xuidLabel(xuid: String): String = "xuid-…${xuid.takeLast(4)}"

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
