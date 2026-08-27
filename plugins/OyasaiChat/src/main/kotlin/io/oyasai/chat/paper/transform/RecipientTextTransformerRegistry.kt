package io.oyasai.chat.paper.transform

import io.oyasai.chat.api.ChatTextSurface
import io.oyasai.chat.api.OyasaiChatApi
import io.oyasai.chat.api.RecipientTextTransformRequest
import io.oyasai.chat.api.RecipientTextTransformResult
import io.oyasai.chat.api.RecipientTextTransformer
import io.oyasai.chat.api.TextTransformerDescriptor
import io.oyasai.chat.api.TextTransformerRegistration
import io.oyasai.chat.paper.OyasaiChatPlugin
import java.util.concurrent.CompletionStage
import org.bukkit.plugin.Plugin

internal class RecipientTextTransformerRegistry(
    private val isPrimaryThread: () -> Boolean,
    private val warn: (String) -> Unit,
) : OyasaiChatApi, AutoCloseable {
  constructor(
      plugin: OyasaiChatPlugin
  ) : this(
      isPrimaryThread = { plugin.server.isPrimaryThread },
      warn = plugin.logger::warning,
  )

  private data class Entry(
      val owner: Plugin,
      val descriptor: TextTransformerDescriptor,
      val transformer: RecipientTextTransformer,
      val order: Long,
  )

  private var closed = false
  private var nextOrder = 0L
  private val entries = mutableListOf<Entry>()
  @Volatile private var activeSurfaces = emptySet<ChatTextSurface>()

  override fun registerTextTransformer(
      owner: Plugin,
      descriptor: TextTransformerDescriptor,
      transformer: RecipientTextTransformer,
  ): TextTransformerRegistration {
    checkMainThread("register")
    check(!closed) { "OyasaiChat text transform API is closed" }
    require(owner.isEnabled) { "Transformer owner '${owner.name}' is not enabled" }
    require(entries.none { it.owner === owner && it.descriptor.id == descriptor.id }) {
      "Transformer '${descriptor.id}' is already registered by ${owner.name}"
    }
    val entry =
        Entry(
            owner,
            descriptor.copy(surfaces = descriptor.surfaces.toSet()),
            transformer,
            nextOrder++,
        )
    entries += entry
    entries.sortWith(compareByDescending<Entry> { it.descriptor.priority }.thenBy(Entry::order))
    publishActiveSurfaces()
    return Registration(entry)
  }

  fun hasTransformer(surface: ChatTextSurface): Boolean = surface in activeSurfaces

  fun transform(
      request: RecipientTextTransformRequest,
      isSender: Boolean = false,
  ): CompletionStage<RecipientTextTransformResult>? {
    checkMainThread("transform")
    if (closed) return null
    for (entry in entries.toList()) {
      if (
          !entry.owner.isEnabled ||
              request.surface !in entry.descriptor.surfaces ||
              (isSender && !entry.descriptor.includeSender)
      ) {
        continue
      }
      val claimed =
          runCatching { entry.transformer.transform(request) }
              .onFailure {
                warn(
                    "Text transformer '${entry.descriptor.id}' from ${entry.owner.name} failed to start (${it.javaClass.simpleName}); using the next transformer."
                )
              }
              .getOrNull() ?: continue
      return claimed
    }
    return null
  }

  fun unregisterOwner(owner: Plugin) {
    checkMainThread("unregister")
    entries.removeIf { it.owner === owner }
    publishActiveSurfaces()
  }

  override fun close() {
    checkMainThread("close")
    if (closed) return
    closed = true
    entries.clear()
    activeSurfaces = emptySet()
  }

  private fun publishActiveSurfaces() {
    activeSurfaces =
        entries.filter { it.owner.isEnabled }.flatMap { it.descriptor.surfaces }.toSet()
  }

  private fun checkMainThread(operation: String) {
    check(isPrimaryThread()) {
      "OyasaiChat text transformer $operation must run on the server thread"
    }
  }

  private inner class Registration(private val entry: Entry) : TextTransformerRegistration {
    override val descriptor: TextTransformerDescriptor
      get() = entry.descriptor

    override val owner: Plugin
      get() = entry.owner

    override fun close() {
      checkMainThread("unregister")
      entries.remove(entry)
      publishActiveSurfaces()
    }
  }
}
