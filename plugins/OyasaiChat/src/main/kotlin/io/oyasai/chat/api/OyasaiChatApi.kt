package io.oyasai.chat.api

import java.util.UUID
import java.util.concurrent.CompletionStage
import net.kyori.adventure.text.Component
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

enum class ChatTextSurface {
  PUBLIC_CHAT,
  PRIVATE_MESSAGE,
  EXTERNAL_CHAT,
}

data class ChatTextSender(
    val playerId: UUID?,
    val name: String,
    val locale: String?,
)

data class RecipientTextTransformRequest(
    val messageId: UUID,
    val surface: ChatTextSurface,
    val sender: ChatTextSender,
    val recipient: Player,
    val originalText: String,
)

sealed interface RecipientTextTransformResult {
  data object PassThrough : RecipientTextTransformResult

  data class Replace(val component: Component) : RecipientTextTransformResult
}

data class TextTransformerDescriptor(
    val id: String,
    val surfaces: Set<ChatTextSurface>,
    val priority: Int = 0,
    /** この受信者別変換を送信者本人にも適用できるかどうか。 */
    val includeSender: Boolean = false,
) {
  init {
    require(id.matches(Regex("[a-z0-9][a-z0-9._-]{0,63}"))) {
      "Transformer id must be a lowercase identifier"
    }
    require(surfaces.isNotEmpty()) { "Transformer must declare at least one surface" }
  }
}

fun interface RecipientTextTransformer {
  /**
   * メインスレッドで呼び出されるため、外部I/Oを待たずにStageを返す。
   * `null` は要求を処理せず、次の変換器へ進む。null 以外のFutureは要求を処理する。
   */
  fun transform(
      request: RecipientTextTransformRequest
  ): CompletionStage<RecipientTextTransformResult>?
}

interface TextTransformerRegistration : AutoCloseable {
  val descriptor: TextTransformerDescriptor
  val owner: Plugin

  override fun close()
}

interface OyasaiChatApi {
  /** Paperのメインスレッド限定。優先度の高い順、同じ優先度では先に登録した順に処理する。 */
  fun registerTextTransformer(
      owner: Plugin,
      descriptor: TextTransformerDescriptor,
      transformer: RecipientTextTransformer,
  ): TextTransformerRegistration
}
