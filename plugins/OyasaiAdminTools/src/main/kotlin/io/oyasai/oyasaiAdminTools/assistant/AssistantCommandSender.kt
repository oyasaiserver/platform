package io.oyasai.oyasaiAdminTools.assistant

import java.util.UUID
import java.util.concurrent.CopyOnWriteArrayList
import net.kyori.adventure.chat.ChatType
import net.kyori.adventure.chat.SignedMessage
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.ComponentLike
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import net.kyori.adventure.util.TriState
import org.bukkit.Server
import org.bukkit.entity.Player
import org.bukkit.permissions.Permission
import org.bukkit.permissions.PermissionAttachment
import org.bukkit.permissions.PermissionAttachmentInfo
import org.bukkit.plugin.Plugin

/** The text [AssistantCommandSender] collected for the AI. */
internal interface AssistantOutput {
  fun messages(): List<String>

  /** Messages not kept because [MAX_COLLECTED] was reached. */
  fun droppedMessages(): Int

  companion object {
    const val MAX_COLLECTED = 32_768
  }
}

/**
 * The sender used when the assistant runs a command as the AI instead of as the operator.
 *
 * Permissions are borrowed from the operator only while they are online: [hasPermission] and
 * [isPermissionSet] return the operator's current result, further limited by the AI-only ceiling
 * (`assistant.sender-permissions`). The sender is never an operator and never the RCON console.
 * Everything sent to it is kept for the AI through [sendMessage] and never reaches the operator's
 * screen. [dispatch] refuses once the operator is gone or has lost the assistant permission.
 *
 * The identity ([AssistantSenderBridge], Java, where `getName()` and `name()` can coexist) and the
 * message text come from the bridge; permissions, collection and dispatch are below.
 */
internal class AssistantCommandSender(
    private val server: Server,
    private val operatorId: UUID,
    private val assistantPermission: String,
    private val operatorName: String,
    ceiling: List<String>,
) : AssistantSenderBridge("Assistant($operatorName)"), AssistantOutput {
  private val lines = CopyOnWriteArrayList<String>()
  private val subscribers = CopyOnWriteArrayList<(String) -> Unit>()
  private var collectedLength = 0
  private var droppedCount = 0

  private val ceilingMode: Ceiling
  private val ceilingNames: Set<String>

  init {
    if (PERMISSIONS_ALL in ceiling || PERMISSIONS_NONE in ceiling) {
      require(ceiling.size == 1) {
        "assistant.sender-permissions: $PERMISSIONS_ALL/$PERMISSIONS_NONE must be alone"
      }
      ceilingMode = if (ceiling.single() == PERMISSIONS_ALL) Ceiling.ALL else Ceiling.NONE
      ceilingNames = emptySet()
    } else {
      ceilingMode = if (ceiling.isEmpty()) Ceiling.ALL else Ceiling.LIST
      ceilingNames = ceiling.toSet()
    }
  }

  override fun isOp(): Boolean = false

  override fun setOp(value: Boolean) {
    // The AI sender is never an operator, even if a command tries to change this.
  }

  override fun isPermissionSet(name: String): Boolean {
    val operator = onlineOperator() ?: return false
    // Inside the AI ceiling the operator's state is borrowed as it is. A node outside the ceiling
    // that the operator holds is reported as "set" with the value false (an explicit denial),
    // instead of falling through to a default that could grant it.
    return if (ceilingAllows(name)) operator.isPermissionSet(name) else true
  }

  override fun isPermissionSet(permission: Permission): Boolean = isPermissionSet(permission.name)

  override fun hasPermission(name: String): Boolean = hasPermission(name, silent = true)

  override fun hasPermission(permission: Permission): Boolean = hasPermission(permission.name)

  /**
   * The operator's current permission first, then the AI-only ceiling. With [silent] false, a
   * denial prints the same message the player would see; it goes to the AI, not the operator.
   */
  fun hasPermission(name: String, silent: Boolean): Boolean {
    val operator = onlineOperator() ?: return false
    if (!operator.hasPermission(name) || !ceilingAllows(name)) {
      // Denials are reported to the AI so that a refused command is visible in its result.
      if (!silent) sendMessage(NOT_ALLOWED)
      return false
    }
    return true
  }

  override fun addAttachment(plugin: Plugin): PermissionAttachment = noAttachments()

  override fun addAttachment(plugin: Plugin, name: String, value: Boolean): PermissionAttachment =
      noAttachments()

  override fun addAttachment(
      plugin: Plugin,
      name: String,
      value: Boolean,
      ticks: Int,
  ): PermissionAttachment = noAttachments()

  override fun addAttachment(plugin: Plugin, ticks: Int): PermissionAttachment = noAttachments()

  override fun removeAttachment(attachment: PermissionAttachment) {
    noAttachments()
  }

  override fun recalculatePermissions() {
    // Borrowed permissions are read from the online operator every time they are asked for.
  }

  override fun getEffectivePermissions(): MutableSet<PermissionAttachmentInfo> {
    val operator = onlineOperator() ?: return mutableSetOf()
    return operator.effectivePermissions.filter { ceilingAllows(it.permission) }.toMutableSet()
  }

  override fun getServer(): Server = server

  /** Called by [AssistantSenderBridge]: records the text and reports the operator's state. */
  override fun accept(text: String): Boolean = record(text)

  override fun sendMessage(message: ComponentLike) {
    record(message.asComponent())
  }

  override fun sendMessage(message: ComponentLike, boundChatType: ChatType.Bound) {
    record(message.asComponent())
  }

  override fun sendMessage(message: SignedMessage, boundChatType: ChatType.Bound) {
    record(message.message())
  }

  /** Same order as [hasPermission]: the operator's current value, then the AI-only ceiling. */
  override fun permissionValue(permission: String): TriState {
    val operator = onlineOperator() ?: return TriState.FALSE
    if (!ceilingAllows(permission)) return TriState.FALSE
    return operator.permissionValue(permission)
  }

  override fun permissionValue(permission: Permission): TriState = permissionValue(permission.name)

  /**
   * Runs the command through the server dispatcher. When the operator is gone this throws, and the
   * caller reports the refusal; nothing runs as console or as another player.
   */
  fun dispatch(command: String): Boolean {
    val operator = checkNotNull(onlineOperator()) { "Operator offline or permission revoked" }
    return server.dispatchCommand(nativeSender(operator), command)
  }

  override fun messages(): List<String> = lines.toList()

  override fun droppedMessages(): Int = droppedCount

  /**
   * Calls [listener] with the text of every later message, on the sending thread. Returns a
   * function that unsubscribes.
   */
  fun subscribe(listener: (String) -> Unit): () -> Unit {
    subscribers += listener
    return { subscribers -= listener }
  }

  /**
   * Records a message and returns whether it was accepted. Paper's asynchronous message handling
   * checks this result, so it is true as long as the operator is still there.
   */
  private fun record(message: Component): Boolean = record(PLAIN.serialize(message))

  private fun record(input: String): Boolean {
    val text = input.replace(Regex("(?i)§[0-9a-fk-orx]"), "")
    if (text.isNotEmpty()) {
      synchronized(this) {
        if (collectedLength < AssistantOutput.MAX_COLLECTED) {
          val kept = text.take(AssistantOutput.MAX_COLLECTED - collectedLength)
          lines += kept
          collectedLength += kept.length
          if (kept.length < text.length) droppedCount++
        } else droppedCount++
      }
    }
    for (subscriber in subscribers) {
      try {
        subscriber(text)
      } catch (_: Throwable) {
        // A failing subscriber must not change what the command receives.
      }
    }
    return onlineOperator() != null
  }

  private fun onlineOperator(): Player? {
    val player = server.getPlayer(operatorId) ?: return null
    return if (player.isOnline && player.hasPermission(assistantPermission)) player else null
  }

  /**
   * The AI-only ceiling on top of the borrow: `*all` (the default) grants exactly what the operator
   * holds; `*none` denies everything; a list grants only those nodes and denies every other known
   * node, while still requiring the operator to hold each requested permission.
   */
  private fun ceilingAllows(permission: String): Boolean =
      when (ceilingMode) {
        Ceiling.NONE -> false
        Ceiling.ALL -> true
        Ceiling.LIST -> permission in ceilingNames
      }

  private fun noAttachments(): Nothing =
      throw UnsupportedOperationException("Assistant sender does not hold permission attachments")

  private enum class Ceiling {
    ALL,
    NONE,
    LIST,
  }

  companion object {
    /** `assistant.sender-permissions`: `*all` alone keeps the operator's permissions unchanged. */
    const val PERMISSIONS_ALL = "*all"

    /** `assistant.sender-permissions`: `*none` alone denies every permission. */
    const val PERMISSIONS_NONE = "*none"
    private const val NOT_ALLOWED = "権限がありません。"
    private val PLAIN = PlainTextComponentSerializer.plainText()

    fun validate(configured: List<String>) {
      require(configured.none { it.isBlank() }) { "assistant.sender-permissions has a blank entry" }
      require(
          configured.none { it == PERMISSIONS_ALL || it == PERMISSIONS_NONE } ||
              configured.size == 1
      ) {
        "assistant.sender-permissions: special ceiling must be alone"
      }
    }
  }
}
