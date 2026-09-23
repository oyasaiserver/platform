package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.configuration.ConfigurationSection

/**
 * config.yml の `guidebook.style`（booktuner の書き出しと同じ形）。キーは booktuner の ROLES / TEXTS と揃える。
 * 無い・壊れた値は既定値 （= booktuner の初期値）に戻す。
 */
class GuidebookStyle(section: ConfigurationSection?, warn: (String) -> Unit = {}) {
  data class Role(val color: TextColor, val bold: Boolean, val underline: Boolean)

  val brackets: Boolean = section?.getBoolean("options.brackets", true) ?: true

  private val roles: Map<String, Role> =
      DEFAULT_ROLES.mapValues { (key, default) ->
        val s = section?.getConfigurationSection("roles.$key") ?: return@mapValues default
        val hex = s.getString("color")
        val color =
            hex?.let(TextColor::fromHexString)
                ?: default.color.also {
                  if (hex != null)
                      warn("guidebook.style.roles.$key.color '$hex' は #RRGGBB ではありません。既定値を使います")
                }
        Role(
            color,
            s.getBoolean("bold", default.bold),
            s.getBoolean("underline", default.underline),
        )
      }

  private val texts: Map<String, String> =
      DEFAULT_TEXTS.mapValues { (key, default) -> section?.getString("texts.$key") ?: default }

  fun role(key: String): Role = roles.getValue(key)

  fun text(key: String, vars: Map<String, Any> = emptyMap()): String =
      PLACEHOLDER.replace(texts.getValue(key)) { vars[it.groupValues[1]]?.toString() ?: it.value }

  fun styled(text: String, roleKey: String): Component {
    val r = role(roleKey)
    return Component.text(text, r.color)
        .decoration(TextDecoration.BOLD, r.bold)
        .decoration(TextDecoration.UNDERLINED, r.underline)
  }

  /** ボタンの文言（brackets なら [ ] 付き）。 */
  fun button(key: String): String = text(key).let { if (brackets) "[$it]" else it }

  companion object {
    private val PLACEHOLDER = Regex("\\{(\\w+)}")

    // 最初に使ったときに読む。/sldataop reload で読み直す
    @Volatile private var loaded: GuidebookStyle? = null

    val current: GuidebookStyle
      get() = loaded ?: load()

    fun load(): GuidebookStyle =
        GuidebookStyle(
                Tools.plugin.config.getConfigurationSection("guidebook.style"),
                Tools.plugin.logger::warning,
            )
            .also { loaded = it }

    private fun r(hex: String, bold: Boolean = false, underline: Boolean = false) =
        Role(TextColor.fromHexString(hex)!!, bold, underline)

    val DEFAULT_ROLES: Map<String, Role> =
        mapOf(
            "title" to r("#00AA00", bold = true),
            "progress" to r("#00AA00"),
            "author" to r("#555555"),
            "nextLabel" to r("#00AAAA"),
            "nextName" to r("#00AAAA"),
            "complete" to r("#00AA00", bold = true),
            "desc" to r("#000000"),
            "heading" to r("#00AA00", bold = true),
            "entry" to r("#00AAAA"),
            "liked" to r("#00AA00"),
            "unfound" to r("#AAAAAA"),
            "invalid" to r("#FF5555"),
            "sub" to r("#555555"),
            "eTitle" to r("#00AA00", bold = true),
            "ePublic" to r("#00AA00"),
            "ePrivate" to r("#AAAAAA"),
            "eButton" to r("#5555FF"),
            "eDanger" to r("#FF5555", underline = true),
            "eNote" to r("#AAAAAA"),
            "eEntry" to r("#000000"),
            "eOk" to r("#00AA00"),
            "eNg" to r("#FF5555"),
            "cName" to r("#FFFFFF"),
            "cOfficial" to r("#FFAA00"),
            "cLore" to r("#AAAAAA"),
            "cAction" to r("#55FF55"),
            "cPublic" to r("#55FF55"),
            "cPrivate" to r("#AAAAAA"),
            "hover" to r("#FFFFFF"),
        )

    val DEFAULT_TEXTS: Map<String, String> =
        mapOf(
            "progress" to "進捗: {n}/{m}",
            "author" to "作者: {author}",
            "next" to "Next: ",
            "complete" to "コンプリート！",
            "heading" to "掲載建築",
            "invalid" to "案内不可",
            "entryAuthor" to "作者: {author}",
            "hNext" to "クリックでこの建築へ案内",
            "hEntry" to "クリックでこの建築へ案内",
            "eTitle" to "編集: {title}",
            "ePublic" to "公開中",
            "ePrivate" to "非公開",
            "bAdd" to "建築追加",
            "bToggle" to "非公開にする",
            "bPublish" to "公開する",
            "bDesc" to "説明を書く",
            "bList" to "ガイド一覧へ",
            "bDelete" to "このガイドを削除",
            "eNote" to "次のページから掲載建築を編集できます。",
            "eEmpty" to "掲載建築はありません。",
            "eHeading" to "掲載建築の編集",
            "eOk" to "案内可能",
            "eNg" to "案内不可",
            "bUp" to "↑",
            "bDown" to "↓",
            "bComment" to "コメント",
            "bRemove" to "削除",
            "hAdd" to "",
            "hToggle" to "",
            "hPublish" to "",
            "hDesc" to "",
            "hList" to "",
            "hDelete" to "",
            "hUp" to "",
            "hDown" to "",
            "hComment" to "",
            "hRemove" to "",
            "cOfficialMark" to "★ ",
            "cAuthor" to "作者: {author}",
            "cProgress" to "進捗: {n}/{m}",
            "cGet" to "クリックで入手",
            "cPublic" to "公開中",
            "cPrivate" to "非公開",
            "cGetKey" to "クリックで編集キーを入手",
        )
  }
}
