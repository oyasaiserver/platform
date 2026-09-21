package com.github.srain3.sociallikes.datas

import java.util.UUID

enum class GuidebookType {
  PERSONAL,
  OFFICIAL,
}

data class GuidebookData(
    val id: Int,
    val type: GuidebookType,
    val creatorUuid: UUID,
    val title: String,
    val description: String,
    val published: Boolean,
    val createdAt: Long,
)

data class GuidebookDescription(val text: String, val truncated: Boolean)

data class GuidebookProgress(val discovered: Int, val total: Int) {
  val complete: Boolean
    get() = total > 0 && discovered == total
}

enum class GuidebookCompletion {
  NONE,
  FIRST,
  REPEAT,
}

object GuidebookRules {
  private const val BOOK_LINE_WIDTH = 114
  // mcfont-data.js の asciiAdv（半角スペースだけ charAdv と同じ 4px に補正）。
  private const val ASCII_ADVANCES =
      "42466662444626266666666666225656766666666466666666666666666464663666665662653666666646666664247"
  private val colorCode = Regex("(?i)[&§][0-9a-fk-or]")

  fun progress(validBuildIds: Collection<Int>, likedBuildIds: Set<Int>): GuidebookProgress {
    val valid = validBuildIds.toSet()
    return GuidebookProgress(valid.count(likedBuildIds::contains), valid.size)
  }

  fun completion(
      progress: GuidebookProgress,
      alreadyCompleted: Boolean,
      causedByLike: Boolean = true,
  ): GuidebookCompletion {
    if (!causedByLike || !progress.complete) return GuidebookCompletion.NONE
    return if (alreadyCompleted) GuidebookCompletion.REPEAT else GuidebookCompletion.FIRST
  }

  fun canCreatePersonal(currentCount: Int, limit: Int): Boolean = currentCount < limit

  fun canAddEntry(currentCount: Int, limit: Int, alreadyIncluded: Boolean): Boolean =
      !alreadyIncluded && currentCount < limit

  fun isValidTitle(title: String, maxLength: Int): Boolean =
      title.isNotEmpty() &&
          title.length <= maxLength &&
          title.none(Char::isISOControl) &&
          !colorCode.containsMatchIn(title)

  fun description(text: String, maxLines: Int = 8): GuidebookDescription {
    require(maxLines > 0)
    var line = 1
    var width = 0
    var index = 0
    while (index < text.length) {
      val codePoint = text.codePointAt(index)
      val characterLength = Character.charCount(codePoint)
      if (codePoint == '\n'.code || codePoint == '\r'.code) {
        if (line == maxLines) return GuidebookDescription(text.substring(0, index), true)
        line++
        width = 0
        index +=
            if (codePoint == '\r'.code && text.getOrNull(index + 1) == '\n') 2 else characterLength
        continue
      }
      val advance = glyphAdvance(codePoint)
      if (width + advance > BOOK_LINE_WIDTH) {
        if (line == maxLines) return GuidebookDescription(text.substring(0, index), true)
        line++
        width = 0
      }
      width += advance
      index += characterLength
    }
    return GuidebookDescription(text, false)
  }

  private fun glyphAdvance(codePoint: Int): Int =
      when {
        codePoint in 0x20..0x7E -> ASCII_ADVANCES[codePoint - 0x20].digitToInt()
        isFullWidth(codePoint) -> 9
        else -> 5
      }

  private fun isFullWidth(codePoint: Int): Boolean =
      when (Character.UnicodeScript.of(codePoint)) {
        Character.UnicodeScript.HAN,
        Character.UnicodeScript.HANGUL,
        Character.UnicodeScript.HIRAGANA,
        Character.UnicodeScript.KATAKANA,
        Character.UnicodeScript.BOPOMOFO,
        Character.UnicodeScript.YI -> true
        else ->
            codePoint in 0x2E80..0x303F ||
                codePoint in 0x31C0..0x33FF ||
                codePoint in 0xFE10..0xFE6F ||
                codePoint in 0xFF01..0xFF60 ||
                codePoint in 0xFFE0..0xFFE6 ||
                codePoint in 0x1F200..0x1F2FF
      }

  fun isSafeDestination(
      signValid: Boolean,
      worldLoaded: Boolean,
      feetPassable: Boolean,
      headPassable: Boolean,
      supportSolid: Boolean,
      dangerous: Boolean,
  ): Boolean =
      signValid && worldLoaded && feetPassable && headPassable && supportSolid && !dangerous
}
