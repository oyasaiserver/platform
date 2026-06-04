package io.oyasai.oyasaiAdminTools.announcements.models

import java.util.UUID

data class Survey(
    val id: String = "",
    val title: String = "",
    val broadcastMessage: String = "",
    val broadcastInterval: Long = 0,
    val questions: List<Question> = emptyList(),
    val rewardCommands: List<String> = emptyList(),
    val enabled: Boolean = true,
    val respondedPlayers: MutableMap<UUID, Int> = mutableMapOf(), // UUID to response cnt
    val maxResponses: Int = 1,
    val rewardedPlayers: MutableMap<UUID, Int> = mutableMapOf(), // UUID to reward cnt
    val maxRewards: Int = 1,
    val requiredGroups: List<String> = emptyList(),
    val discordWebhookUrl: String? = null,
    val sound: String? = null,
    val expiresAt: Long? = null
)

data class Question(
    val text: String = "",
    val type: QuestionType = QuestionType.CLICK_TO_ANSWER,
    val options: List<String> = emptyList()
)

enum class QuestionType {
    CLICK_TO_ANSWER,
    WRITE_IN_BOOK,
    CHAT_CHOICE
}
