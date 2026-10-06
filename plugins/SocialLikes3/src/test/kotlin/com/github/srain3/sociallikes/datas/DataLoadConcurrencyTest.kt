package com.github.srain3.sociallikes.datas

import java.time.LocalDateTime
import java.util.UUID
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.bukkit.Location

class DataLoadConcurrencyTest {
  private val owner = UUID(0, 1)
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
  private val buildNearIndex =
      Data::class.java.getDeclaredMethod("slNearLoadTask").apply { isAccessible = true }

  @Suppress("UNCHECKED_CAST")
  private val buckets =
      Data::class.java.getDeclaredField("dataMap").let {
        it.isAccessible = true
        it.get(Data) as MutableMap<String, MutableList<SLData>>
      }

  @Suppress("UNCHECKED_CAST")
  private val nearIndex =
      Data::class.java.getDeclaredField("slNearData").let {
        it.isAccessible = true
        it.get(Data) as MutableMap<String, MutableMap<Int, MutableMap<Int, MutableList<SLData>>>>
      }

  @BeforeTest
  @AfterTest
  fun clearCache() {
    buckets.clear()
    nearIndex.clear()
    Data.userLikesInt.clear()
    Data.lastID = 0
    Data.loading = false
  }

  @Test
  fun iteratorsSurviveStartupWritesToOuterMapsAndInnerLists() {
    load(build(1))
    val bucketIterator = buckets.values.iterator()
    val buildIterator = buckets.getValue(Data.getDirName(1)).iterator()
    val likesIterator = Data.userLikesInt.values.iterator()

    // Same bucket, new bucket and new owner: each level previously used fail-fast iterators.
    load(build(2))
    load(build(50, UUID(0, 2)))
    bucketIterator.forEachRemaining { it.forEach { data -> assertTrue(data.id > 0) } }
    assertEquals(listOf(1), buildIterator.asSequence().map { it.id }.toList())
    likesIterator.forEachRemaining { assertTrue(it >= 0) }
    assertEquals(3, Data.getBuildingInt())
    assertEquals(3, Data.getSLDataAll().size)
    assertEquals(3, Data.userLikesInt.values.sum())
  }

  @Test
  fun readsRemainSafeDuringStartupLoadAndNearIndexConstruction() {
    val executor = Executors.newFixedThreadPool(2)
    val halfLoaded = CountDownLatch(1)
    val readerStarted = CountDownLatch(1)
    val finished = CountDownLatch(1)
    try {
      val writer =
          executor.submit {
            try {
              val ids = mutableSetOf<Int>()
              for (id in 1..2000) {
                load(build(id, UUID(0, (id % 40).toLong())), ids)
                if (id == 1000) {
                  halfLoaded.countDown()
                  check(readerStarted.await(10, TimeUnit.SECONDS))
                }
              }
              buildNearIndex.invoke(Data)
            } finally {
              finished.countDown()
            }
          }
      val reader =
          executor.submit {
            check(halfLoaded.await(10, TimeUnit.SECONDS))
            readerStarted.countDown()
            do {
              assertTrue(Data.getBuildingInt() in 1000..2000)
              assertTrue(Data.getSLDataAll().size in 1000..2000)
              assertTrue(Data.getSLDataAllIncludingDeleted().size in 1000..2000)
              assertTrue(Data.userLikesInt.values.sum() in 1000..2000)
              assertEquals(1, Data.getSLData(1)?.id)
              // Walk all nested levels, as near lookup and vacant teleport do.
              nearIndex.values.forEach { world ->
                world.toMap().values.forEach { x ->
                  x.values.forEach { builds -> builds.forEach { assertTrue(it.id > 0) } }
                }
              }
            } while (finished.count != 0L)
          }
      writer.get(20, TimeUnit.SECONDS)
      reader.get(20, TimeUnit.SECONDS)
      assertEquals(2000, Data.getBuildingInt())
      assertEquals(2000, Data.getSLDataAll().size)
      assertEquals(2000, Data.userLikesInt.values.sum())
      assertEquals(2000, Data.lastID)
      assertEquals(
          2000,
          nearIndex.values.sumOf { w -> w.values.sumOf { x -> x.values.sumOf { it.size } } },
      )
    } finally {
      executor.shutdownNow()
      assertTrue(executor.awaitTermination(10, TimeUnit.SECONDS))
    }
  }

  @Test
  fun nearBucketIteratorsSurviveRuntimeReplacementAndRemoval() {
    val addRuntime =
        Data::class.java.getDeclaredMethod("addToCacheInMemory", SLData::class.java).apply {
          isAccessible = true
        }
    val first = build(1)
    addRuntime.invoke(Data, first)
    val nearBucket = nearIndex.getValue("world").getValue(0).getValue(0)
    val iterator = nearBucket.iterator()
    addRuntime.invoke(Data, first.copy(title = "Updated"))
    addRuntime.invoke(Data, build(2))
    Data.removeFromCache(first)
    assertEquals(listOf(1), iterator.asSequence().map { it.id }.toList())
    assertEquals(listOf(2), nearBucket.map { it.id })
    assertEquals(setOf(2), Data.getSLDataAll().map { it.id }.toSet())
  }

  @Test
  fun likeUpdatesFromMultipleWritersAreNotLost() {
    val executor = Executors.newFixedThreadPool(4)
    val start = CountDownLatch(1)
    try {
      val writers =
          (1..4).map {
            executor.submit {
              check(start.await(10, TimeUnit.SECONDS))
              repeat(1000) { Data.changeUserLikesInt(owner, 1) }
            }
          }
      start.countDown()
      writers.forEach { it.get(10, TimeUnit.SECONDS) }
      assertEquals(4000, Data.userLikesInt[owner])
    } finally {
      executor.shutdownNow()
      assertTrue(executor.awaitTermination(10, TimeUnit.SECONDS))
    }
  }

  @Test
  fun emptyAndDeletedDataKeepExistingReadSemantics() {
    assertEquals(0, Data.getBuildingInt())
    assertTrue(Data.getSLDataAll().isEmpty())
    assertEquals(0, Data.userLikesInt.values.sum())
    load(build(1))
    load(build(2).copy(deletedAt = LocalDateTime.of(2026, 1, 2, 0, 0)))
    assertEquals(1, Data.getBuildingInt())
    assertEquals(setOf(1), Data.getSLDataAll().map { it.id }.toSet())
    assertEquals(setOf(1, 2), Data.getSLDataAllIncludingDeleted().map { it.id }.toSet())
    assertEquals(null, Data.getSLData(2))
    assertEquals(2, Data.getSLDataDirect(2)?.id)
    assertEquals(1, Data.userLikesInt.values.sum())
  }

  private fun load(data: SLData, ids: MutableSet<Int> = mutableSetOf()) {
    addLoaded.invoke(Data, data, Data.getDirName(data.id), ids)
  }

  private fun build(id: Int, buildOwner: UUID = owner) =
      SLData(
          id = id,
          loc = Location(null, id.toDouble(), 64.0, 0.0),
          time = LocalDateTime.of(2026, 1, 1, 0, 0),
          owner = buildOwner,
          title = "Build $id",
          likes = mutableListOf(UUID(0, 100)),
          check = false,
          comment = "",
          worldName = "world",
          discordTextID = 0,
      )
}
