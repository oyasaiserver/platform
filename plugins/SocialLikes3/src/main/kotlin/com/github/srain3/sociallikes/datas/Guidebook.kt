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
    val published: Boolean,
    val createdAt: Long,
)

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
