package io.oyasai.chat.paper.chat

import io.oyasai.chat.common.model.ChannelDefinition
import java.util.UUID

// Paper内チャットの配信先計画。
sealed interface LocalChatPlan {
  data class Public(
      val channel: ChannelDefinition,
      val recipientIds: Set<UUID>,
      val presentation: ChatPresentationSnapshot,
  ) : LocalChatPlan

  data class Private(
      val targetId: UUID?,
      val targetName: String?,
      val recipientIds: Set<UUID>,
      val senderPresentation: ChatPresentationSnapshot,
      val pending: Boolean,
  ) : LocalChatPlan

  data class Rejected(val reason: String) : LocalChatPlan
}
