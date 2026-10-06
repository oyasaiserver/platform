package icu.oyasai.utilities.workstation

import com.google.gson.JsonParser
import java.util.Base64

/**
 * Compatibility rules from EssentialsX 776f709; kept independent of the server for regression
 * tests.
 */
internal object WorkstationRules {
  val aliases =
      linkedMapOf(
          "workbench" to listOf("craft", "wb"),
          "enderchest" to listOf("ec"),
          "disposal" to listOf("trash"),
          "anvil" to emptyList(),
          "loom" to emptyList(),
          "grindstone" to emptyList(),
          "stonecutter" to emptyList(),
          "smithingtable" to emptyList(),
          "hat" to listOf("head"),
          "skull" to listOf("eskull", "playerskull"),
      )

  fun removeHat(arg: String?): Boolean =
      arg != null && (arg.contains("rem") || arg.contains("off") || arg.equals("0", true))

  fun preventHat(wildcard: Boolean?, material: Boolean?): Boolean =
      if (wildcard == true) material != false else material == true

  // Essentials only recognizes a recipient when there are exactly two arguments.
  fun skullRecipient(args: Array<out String>): String? = if (args.size == 2) args[1] else null

  private val name = Regex("^[A-Za-z0-9_]+$")
  private val texture = Regex("^[0-9a-fA-F]{64}$")
  private val base64 = Regex("^[A-Za-z0-9+/=]{180}$")

  fun isTexture(owner: String): Boolean = texture.matches(owner)

  fun skullOwner(arg: String?, senderName: String, recipientCanUseOthers: Boolean): String {
    if (arg == null || !recipientCanUseOthers) return senderName
    if (base64.matches(arg)) {
      val hash =
          try {
            val json = JsonParser.parseString(String(Base64.getDecoder().decode(arg))).asJsonObject
            json
                .getAsJsonObject("textures")
                .getAsJsonObject("SKIN")
                .get("url")
                .asString
                .substringAfterLast('/')
          } catch (_: Exception) {
            throw IllegalArgumentException("頭のテクスチャの Base64 が不正です。")
          }
      require(isTexture(hash)) { "頭のテクスチャの Base64 が不正です。" }
      return hash
    }
    require(name.matches(arg)) { "プレイヤー名は英数字とアンダースコアで指定してください。" }
    return arg
  }
}
