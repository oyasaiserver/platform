package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.RankUpData
import com.github.srain3.sociallikes.datas.SLData
import java.time.LocalDateTime
import java.util.UUID
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.Location

class SLRankUpTest {
  @Suppress("UNCHECKED_CAST")
  private val rankUpMap =
      SLRankUp::class.java.getDeclaredField("data").let {
        it.isAccessible = true
        it.get(SLRankUp) as MutableMap<UUID, RankUpData>
      }

  @Suppress("UNCHECKED_CAST")
  private val buckets =
      Data::class.java.getDeclaredField("dataMap").let {
        it.isAccessible = true
        it.get(Data) as MutableMap<String, MutableList<SLData>>
      }

  private val addLoaded =
      Data::class
          .java
          .getDeclaredMethod(
              "addToCache",
              SLData::class.java,
              String::class.java,
              MutableSet::class.java,
          )
          .apply { isAccessible = true }

  @BeforeTest
  @AfterTest
  fun clearState() {
    rankUpMap.clear()
    buckets.clear()
    Data.userLikesInt.clear()
    Data.lastID = 0
  }

  @Test
  fun nullLastOnlineTimeDoesNotThrowAndIsFilteredOut() {
    val beforeTime = LocalDateTime.of(2026, 10, 1, 0, 0)
    assertFalse(SLRankUp.isRecentCandidate(null, beforeTime))
    assertFalse(SLRankUp.isRecentCandidate(LocalDateTime.of(2026, 9, 30, 23, 59), beforeTime))
    assertTrue(SLRankUp.isRecentCandidate(LocalDateTime.of(2026, 10, 1, 0, 1), beforeTime))
  }

  @Test
  fun createDataTaskReplacesCountsInsteadOfDoublingOnReload() {
    val owner = UUID(0, 10)
    val build =
        SLData(
            id = 1,
            loc = Location(null, 0.0, 64.0, 0.0),
            time = LocalDateTime.of(2026, 1, 1, 0, 0),
            owner = owner,
            title = "Build 1",
            likes = mutableListOf(),
            check = false,
            comment = "",
            worldName = "world",
            discordTextID = 0,
        )
    addLoaded.invoke(Data, build, Data.getDirName(1), mutableSetOf<Int>())

    SLRankUp.createDataTask()
    assertEquals(1, rankUpMap[owner]?.buildCount)

    SLRankUp.createDataTask()
    assertEquals(1, rankUpMap[owner]?.buildCount)

    SLRankUp.plusBuildTask(owner)
    assertEquals(2, rankUpMap[owner]?.buildCount)
    SLRankUp.minusBuildTask(owner)
    assertEquals(1, rankUpMap[owner]?.buildCount)
  }
}
