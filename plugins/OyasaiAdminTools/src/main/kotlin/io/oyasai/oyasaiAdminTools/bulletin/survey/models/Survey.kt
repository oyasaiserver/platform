package io.oyasai.oyasaiAdminTools.bulletin.survey.models

data class Survey(
    val id: String = "",
    val title: String = "",
    val broadcastMessages: List<String> = emptyList(),
    val broadcastInterval: Long = 60,
    val questions: List<Question> = emptyList(),
    val rewardCommands: List<String> = emptyList(),
    val enabled: Boolean = true,
    val respondedPlayers: MutableMap<String, Int> = mutableMapOf(), // UUID to response cnt
    val maxResponses: Int = 1,
    val rewardedPlayers: MutableMap<String, Int> = mutableMapOf(), // UUID to reward cnt
    val maxRewards: Int = 1,
    val targetGroups: List<String> = emptyList(),
    val discordWebhookUrl: String? = null,
    val sound: String? = null,
    val expiresAt: Long? = null,
)

data class Question(
    val text: String = "",
    val type: QuestionType = QuestionType.CLICK_TO_ANSWER,
    val options: List<String> = emptyList(),
)

enum class QuestionType {
  CLICK_TO_ANSWER,
  WRITE_IN_BOOK,
  CHAT_CHOICE,
}

data class SurveyProgress(
    val surveyId: String,
    val answers: MutableList<String> = mutableListOf(),
    var currentQuestionIndex: Int = 0,
)

data class SurveyResult(
    val uuid: String,
    val name: String,
    val timestamp: Long,
    val answers: List<String>,
)
