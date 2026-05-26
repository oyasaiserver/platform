package com.github.sahyuya.oyasaiMenu.guimaker

import org.bukkit.Material

object GuiActionCatalog {
  val types =
      listOf(
          "OPEN_MENU",
          "OPEN_POPUP",
          "OPEN_SPECIAL",
          "OPEN_SHOP",
          "OPEN_POINT_SHOP",
          "OPEN_SELL",
          "OPEN_MACRO",
          "PLAYER_CMD",
          "PARAM_COMMAND",
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
        "OPEN_POPUP",
        "OPEN_SPECIAL" -> mapOf("target" to value)
        "OPEN_SHOP",
        "OPEN_POINT_SHOP" -> mapOf("category" to value)
        "OPEN_SELL",
        "OPEN_MACRO" -> emptyMap()
        "PLAYER_CMD",
        "PARAM_COMMAND",
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
        "OPEN_SPECIAL" -> Material.ENDER_EYE
        "OPEN_SHOP" -> Material.CHEST
        "OPEN_POINT_SHOP" -> Material.NETHER_STAR
        "OPEN_SELL" -> Material.GOLD_INGOT
        "OPEN_MACRO" -> Material.COMMAND_BLOCK
        "PLAYER_CMD",
        "PARAM_COMMAND",
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
        "OPEN_POPUP",
        "OPEN_SPECIAL" -> "target"
        "OPEN_SHOP",
        "OPEN_POINT_SHOP" -> "category"
        "OPEN_SELL",
        "OPEN_MACRO" -> "(なし)"
        "PLAYER_CMD",
        "PARAM_COMMAND",
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
        "PARAM_COMMAND" -> "可変コマンドを入力 ({amount} 使用可。//stack はそのまま、または \"//stack {amount}\" でも可):"
        "OPEN_SPECIAL" -> "特殊メニューIDを入力 (online_players / confirm):"
        "OPEN_SHOP" -> "ショップカテゴリIDを入力:"
        "OPEN_POINT_SHOP" -> "ポイントショップカテゴリIDを入力:"
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
          "可変コマンド" -> "PARAM_COMMAND"
          "特殊メニュー" -> "OPEN_SPECIAL"
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
