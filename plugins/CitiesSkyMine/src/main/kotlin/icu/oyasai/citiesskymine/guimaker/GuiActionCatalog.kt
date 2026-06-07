package icu.oyasai.citiesskymine.guimaker

import org.bukkit.Material

object GuiActionCatalog {
  val types =
      listOf(
          "OPEN_MENU",
          "OPEN_POPUP",
          "PLAYER_CMD",
          "CONSOLE_CMD",
          "OP_PLAYER_CMD",
          "MESSAGE",
          "BROADCAST",
          "URL",
          "CHAT_PASTE",
          "SUGGEST_COMMAND",
          "SOUND",
          "CLOSE",
      )

  fun params(type: String, value: String, soundVolume: String? = null): Map<String, String> =
      when (type.uppercase()) {
        "OPEN_MENU",
        "OPEN_POPUP" -> mapOf("target" to value)
        "PLAYER_CMD",
        "CONSOLE_CMD",
        "OP_PLAYER_CMD",
        "SUGGEST_COMMAND" -> mapOf("command" to value)
        "MESSAGE",
        "BROADCAST",
        "CHAT_PASTE" -> mapOf("text" to value)
        "SOUND" ->
            buildMap {
              put("sound", value)
              if (soundVolume != null) put("volume", soundVolume)
            }
        "URL" -> mapOf("url" to value)
        "CLOSE" -> emptyMap()
        else -> mapOf("value" to value)
      }

  fun material(type: String): Material =
      when (type) {
        "OPEN_MENU" -> Material.ENDER_CHEST
        "OPEN_POPUP" -> Material.CHORUS_FRUIT
        "PLAYER_CMD",
        "SUGGEST_COMMAND" -> Material.STICK
        "CONSOLE_CMD" -> Material.REDSTONE
        "OP_PLAYER_CMD" -> Material.NETHER_STAR
        "MESSAGE",
        "BROADCAST",
        "CHAT_PASTE" -> Material.PAPER
        "URL" -> Material.MAP
        "SOUND" -> Material.NOTE_BLOCK
        "CLOSE" -> Material.OAK_DOOR
        else -> Material.COMMAND_BLOCK
      }

  fun paramLabel(type: String): String =
      when (type) {
        "OPEN_MENU",
        "OPEN_POPUP" -> "target"
        "PLAYER_CMD",
        "CONSOLE_CMD",
        "OP_PLAYER_CMD",
        "SUGGEST_COMMAND" -> "command"
        "MESSAGE",
        "BROADCAST",
        "CHAT_PASTE" -> "text"
        "SOUND" -> "sound"
        "URL" -> "url"
        "CLOSE" -> "(なし)"
        else -> "value"
      }

  fun paramPrompt(type: String): String =
      when (type) {
        "PLAYER_CMD" -> "プレイヤーとして実行するコマンドを入力 (/ 不要, %player% 使用可):"
        "CONSOLE_CMD" -> "コンソールとして実行するコマンドを入力 (/ 不要, %player% 使用可):"
        "OP_PLAYER_CMD" -> "OP権限で実行するコマンドを入力 (/ 不要):"
        "SUGGEST_COMMAND" -> "コマンド候補を入力 (/ 不要):"
        "MESSAGE" -> "送信するメッセージを入力 (&カラーコード対応):"
        "BROADCAST" -> "ブロードキャストするメッセージを入力:"
        "URL" -> "URLを入力してください:"
        "CHAT_PASTE" -> "チャット欄に表示するテキストを入力:"
        else -> "${paramLabel(type)} を入力:"
      }

  fun textInputChoice(funcLabel: String?): Pair<String, String>? {
    val type =
        when (funcLabel) {
          "プレイヤーコマンド" -> "PLAYER_CMD"
          "コンソールコマンド" -> "CONSOLE_CMD"
          "OPコマンド" -> "OP_PLAYER_CMD"
          "コマンドを提案",
          "コマンド候補" -> "SUGGEST_COMMAND"
          "メッセージ送信" -> "MESSAGE"
          "ブロードキャスト" -> "BROADCAST"
          "URL" -> "URL"
          "チャットペースト",
          "チャット貼り付け" -> "CHAT_PASTE"
          else -> return null
        }
    return type to paramPrompt(type)
  }
}
