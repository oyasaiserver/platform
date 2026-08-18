package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.Tools.color
import java.net.URI
import java.nio.file.Files
import java.nio.file.Path
import java.security.MessageDigest
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.audience.Audience
import net.kyori.adventure.resource.ResourcePackCallback
import net.kyori.adventure.resource.ResourcePackInfo
import net.kyori.adventure.resource.ResourcePackRequest
import net.kyori.adventure.resource.ResourcePackStatus
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scheduler.BukkitTask

object SLResourcePack : Listener {
  private const val PACK_URL = "http://127.0.0.1:18080/sociallikes-graph-pack.zip"
  private const val PACK_TIMEOUT_TICKS = 600L
  private val PACK_UUID = UUID.fromString("5c1da700-0000-4000-8000-000000000001")
  private val PACK_RELATIVE_PATH =
      Path.of("plugins", "SocialLikes3", "resourcepack-poc", "sociallikes-graph-pack.zip")

  private enum class PackState {
    NOT_SENT,
    PENDING,
    APPLIED,
    REFUSED,
  }

  private data class Sha1Cache(
      val path: Path,
      val lastModifiedMillis: Long,
      val size: Long,
      val sha1: String,
  )

  private val lock = Any()
  private val states = ConcurrentHashMap<UUID, PackState>()
  private val readyCallbacks = ConcurrentHashMap<UUID, MutableList<() -> Unit>>()
  private val timeoutTasks = ConcurrentHashMap<UUID, BukkitTask>()
  @Volatile private var sha1Cache: Sha1Cache? = null

  fun ensureApplied(player: Player, onReady: () -> Unit) {
    var runImmediately = false
    var sendRequest = false
    synchronized(lock) {
      when (states[player.uniqueId] ?: PackState.NOT_SENT) {
        PackState.APPLIED -> runImmediately = true
        PackState.PENDING -> {
          readyCallbacks.getOrPut(player.uniqueId) { mutableListOf() }.add(onReady)
          player.sendMessage(Tools.socialLikesLOGO + " &eリソースパックを読み込み中です。".color())
        }
        PackState.NOT_SENT,
        PackState.REFUSED -> {
          states[player.uniqueId] = PackState.PENDING
          readyCallbacks.getOrPut(player.uniqueId) { mutableListOf() }.add(onReady)
          sendRequest = true
        }
      }
    }

    when {
      runImmediately -> runReadyCallback(onReady)
      sendRequest -> sendPackRequest(player, "リソースパックを送信しました。")
    }
  }

  fun forceResend(player: Player) {
    synchronized(lock) {
      states[player.uniqueId] = PackState.PENDING
      timeoutTasks.remove(player.uniqueId)?.cancel()
    }
    sendPackRequest(player, "リソースパックを再送しました。")
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    synchronized(lock) {
      states.remove(event.player.uniqueId)
      readyCallbacks.remove(event.player.uniqueId)
      timeoutTasks.remove(event.player.uniqueId)?.cancel()
    }
  }

  private fun sendPackRequest(player: Player, sentMessage: String) {
    val info = createPackInfo()
    if (info == null) {
      markRefused(
          player.uniqueId,
          player.name,
          "[SLResourcePack] Resource pack zip not found: $PACK_RELATIVE_PATH",
      )
      return
    }

    val timeoutTask =
        Bukkit.getScheduler()
            .runTaskLater(
                Tools.plugin,
                Runnable { handleTimeout(player.uniqueId, player.name) },
                PACK_TIMEOUT_TICKS,
            )
    synchronized(lock) {
      timeoutTasks.remove(player.uniqueId)?.cancel()
      timeoutTasks[player.uniqueId] = timeoutTask
    }

    val request =
        ResourcePackRequest.resourcePackRequest()
            .packs(info)
            .replace(false)
            .required(false)
            .prompt(promptComponent())
            .callback(
                ResourcePackCallback { packId: UUID, status: ResourcePackStatus, audience: Audience
                  ->
                  handlePackStatus(player.uniqueId, player.name, packId, status, audience)
                }
            )
            .build()

    player.sendResourcePacks(request)
    player.sendMessage(Tools.socialLikesLOGO + " &f$sentMessage".color())
    Tools.plugin.logger.info(
        "[SLResourcePack] Sent resource pack to ${player.name}: $PACK_URL sha1=${info.hash()}"
    )
  }

  private fun createPackInfo(): ResourcePackInfo? {
    val packPath = findPackPath() ?: return null
    return ResourcePackInfo.resourcePackInfo(PACK_UUID, URI.create(PACK_URL), sha1Hex(packPath))
  }

  private fun handlePackStatus(
      playerId: UUID,
      playerName: String,
      packId: UUID,
      status: ResourcePackStatus,
      @Suppress("UNUSED_PARAMETER") audience: Audience,
  ) {
    Tools.plugin.logger.info(
        "[SLResourcePack] Resource pack status from $playerName: id=$packId status=$status"
    )
    if (status.intermediate()) return

    if (status == ResourcePackStatus.SUCCESSFULLY_LOADED) {
      val callbacks =
          synchronized(lock) {
            if ((states[playerId] ?: PackState.NOT_SENT) != PackState.PENDING) {
              return
            }
            states[playerId] = PackState.APPLIED
            timeoutTasks.remove(playerId)?.cancel()
            readyCallbacks.remove(playerId).orEmpty()
          }
      runReadyCallbacks(callbacks)
    } else {
      markRefused(
          playerId,
          playerName,
          "[SLResourcePack] Resource pack rejected for $playerName: status=$status",
      )
    }
  }

  private fun handleTimeout(playerId: UUID, playerName: String) {
    markRefused(
        playerId,
        playerName,
        "[SLResourcePack] Resource pack request timed out for $playerName after $PACK_TIMEOUT_TICKS ticks",
    )
  }

  private fun markRefused(playerId: UUID, playerName: String, logMessage: String) {
    synchronized(lock) {
      states[playerId] = PackState.REFUSED
      readyCallbacks.remove(playerId)
      timeoutTasks.remove(playerId)?.cancel()
    }
    Tools.plugin.logger.warning(logMessage)
    Bukkit.getScheduler()
        .runTask(
            Tools.plugin,
            Runnable {
              Bukkit.getPlayer(playerId)
                  ?.sendMessage(Tools.socialLikesLOGO + " &cリソースパックが有効でないためグラフを表示できません。".color())
            },
        )
  }

  private fun runReadyCallbacks(callbacks: List<() -> Unit>) {
    if (callbacks.isEmpty()) return
    Bukkit.getScheduler()
        .runTask(
            Tools.plugin,
            Runnable {
              callbacks.forEach { callback ->
                runCatching(callback).onFailure { error ->
                  Tools.plugin.logger.warning(
                      "[SLResourcePack] Resource pack ready callback failed: $error"
                  )
                }
              }
            },
        )
  }

  private fun runReadyCallback(callback: () -> Unit) {
    if (Bukkit.isPrimaryThread()) {
      callback()
    } else {
      runReadyCallbacks(listOf(callback))
    }
  }

  private fun findPackPath(): Path? {
    val workingDir = Path.of("").toAbsolutePath().normalize()
    val candidates =
        listOf(
            Path.of("/Users/aa/platform").resolve(PACK_RELATIVE_PATH),
            workingDir.resolve(PACK_RELATIVE_PATH),
            workingDir.parent?.parent?.resolve(PACK_RELATIVE_PATH),
        )

    return candidates.filterNotNull().firstOrNull { Files.isRegularFile(it) }
  }

  private fun sha1Hex(path: Path): String {
    val absolutePath = path.toAbsolutePath().normalize()
    val lastModifiedMillis = Files.getLastModifiedTime(absolutePath).toMillis()
    val size = Files.size(absolutePath)
    sha1Cache
        ?.takeIf {
          it.path == absolutePath && it.lastModifiedMillis == lastModifiedMillis && it.size == size
        }
        ?.let {
          return it.sha1
        }

    val digest = MessageDigest.getInstance("SHA-1")
    Files.newInputStream(absolutePath).use { input ->
      val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
      while (true) {
        val read = input.read(buffer)
        if (read < 0) break
        digest.update(buffer, 0, read)
      }
    }
    val sha1 = digest.digest().joinToString("") { "%02x".format(it) }
    sha1Cache = Sha1Cache(absolutePath, lastModifiedMillis, size, sha1)
    return sha1
  }

  private fun promptComponent(): Component =
      Component.text()
          .append(Component.text("(", NamedTextColor.DARK_GRAY))
          .append(Component.text("Social", NamedTextColor.DARK_PURPLE))
          .append(Component.text("Likes", NamedTextColor.GRAY))
          .append(Component.text(") ", NamedTextColor.DARK_GRAY))
          .append(Component.text("/sldata のグラフ表示に使うフォントを読み込みます", NamedTextColor.WHITE))
          .build()
}
