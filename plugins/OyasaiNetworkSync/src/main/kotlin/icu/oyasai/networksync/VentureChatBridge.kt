package icu.oyasai.networksync

import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import com.velocitypowered.api.proxy.server.RegisteredServer
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.serializer.gson.GsonComponentSerializer
import org.slf4j.Logger

class VentureChatBridge(
    private val proxy: ProxyServer,
    private val logger: Logger,
    private val config: NetworkSyncConfig,
    private val channel: MinecraftChannelIdentifier,
    private val serverDiscovery: NetworkServerDiscovery,
) {
  private val recentMessages = ConcurrentHashMap<String, Long>()

  fun handleMessage(sourceServer: String, data: ByteArray) {
    try {
      DataInputStream(ByteArrayInputStream(data)).use { input ->
        when (input.readUTF()) {
          "PlayerNames" -> return
          "Chat" -> handleChatPayload(sourceServer, input)
          else -> debug("Ignored unsupported VentureChat message from $sourceServer")
        }
      }
    } catch (exception: Exception) {
      logger.warn("Could not decode VentureChat message from $sourceServer: ${exception.message}")
    }
  }

  fun sendPlayerNames() {
    val payload =
        ByteArrayOutputStream()
            .also { bytes ->
              DataOutputStream(bytes).use { output ->
                output.writeUTF("PlayerNames")
                output.writeInt(proxy.playerCount)
                proxy.allPlayers.forEach { output.writeUTF(it.username) }
              }
            }
            .toByteArray()
    serverDiscovery.ventureChatServers().forEach { sendToServer(it, payload) }
  }

  private fun handleChatPayload(sourceServer: String, input: DataInputStream) {
    val channelName = input.readUTF()
    val senderName = input.readUTF()
    val senderUuid = input.readUTF()
    val bungeeToggle = input.readBoolean()
    val hash = input.readInt()
    val format = input.readUTF()
    val chat = input.readUTF()
    val json = input.readUTF()
    val primaryGroup = input.readUTF()
    val nickname = input.readUTF()
    val messageKey = "$sourceServer:$senderUuid:$hash"
    val now = System.currentTimeMillis()
    val previous = recentMessages.put(messageKey, now)
    if (previous != null && now - previous < MESSAGE_DEDUPLICATION_MILLIS) return
    recentMessages.entries.removeIf { now - it.value > MESSAGE_DEDUPLICATION_MILLIS }

    val shouldSync =
        config.syncedChannels.any { it.equals(channelName, ignoreCase = true) } || bungeeToggle
    if (!shouldSync) return

    val outgoing =
        ventureChatPayload(
            sourceServer,
            channelName,
            senderName,
            senderUuid,
            hash,
            format,
            chat,
            json,
            primaryGroup,
            nickname,
        )
    serverDiscovery.ventureChatServers().forEach { target ->
      val targetName = target.serverInfo.name
      if (!targetName.equals(sourceServer, ignoreCase = true)) sendToServer(target, outgoing)
    }
    serverDiscovery.directChatServers().forEach { target ->
      sendJsonToPlayersOnServer(target.serverInfo.name, json)
    }
  }

  private fun sendToServer(server: RegisteredServer, payload: ByteArray) {
    if (server.playersConnected.isNotEmpty()) server.sendPluginMessage(channel, payload)
  }

  private fun sendJsonToPlayersOnServer(serverName: String, json: String) {
    val component =
        runCatching { GsonComponentSerializer.gson().deserialize(json) }
            .getOrElse {
              debug("Could not decode VentureChat JSON for $serverName: ${it.message}")
              return
            }
    proxy.allPlayers
        .filter { player ->
          player.currentServer.map { it.serverInfo.name }.orElse("").equals(serverName, true)
        }
        .forEach { it.sendMessage(component) }
  }

  private fun ventureChatPayload(
      sourceServer: String,
      channelName: String,
      senderName: String,
      senderUuid: String,
      hash: Int,
      format: String,
      chat: String,
      json: String,
      primaryGroup: String,
      nickname: String,
  ): ByteArray =
      ByteArrayOutputStream()
          .also { bytes ->
            DataOutputStream(bytes).use { output ->
              output.writeUTF("Chat")
              output.writeUTF(sourceServer)
              output.writeUTF(channelName)
              output.writeUTF(senderName)
              output.writeUTF(senderUuid)
              output.writeInt(hash)
              output.writeUTF(format)
              output.writeUTF(chat)
              output.writeUTF(json)
              output.writeUTF(primaryGroup)
              output.writeUTF(nickname)
            }
          }
          .toByteArray()

  private fun debug(message: String) {
    if (config.debug) logger.info("[debug] $message")
  }

  companion object {
    private const val MESSAGE_DEDUPLICATION_MILLIS = 5_000L
  }
}
