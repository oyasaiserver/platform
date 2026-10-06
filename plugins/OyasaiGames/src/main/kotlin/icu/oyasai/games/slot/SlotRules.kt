package icu.oyasai.games.slot

import java.util.UUID

internal fun winChance(
    base: Double,
    luck: Int,
    badLuck: Int,
    conversion: Double,
    badConversion: Double,
): Double {
  require(base.isFinite() && base in 0.0..1.0 && conversion.isFinite() && badConversion.isFinite())
  return (base + (luck * conversion + badLuck * badConversion) / 100.0).coerceIn(0.0, 1.0)
}

internal fun weightedIndex(weights: List<Long>, random: Double): Int {
  require(random in 0.0..<1.0 && weights.isNotEmpty() && weights.all { it in 0..2_000_000_000L })
  val total = weights.sum()
  require(total > 0)
  val target = random * total
  var accumulated = 0L
  return weights.indexOfFirst {
    accumulated += it
    target < accumulated
  }
}

internal fun remainingCooldown(lastUsed: Long, duration: Long, now: Long): Long {
  require(lastUsed >= 0 && duration >= 0 && duration <= Long.MAX_VALUE / 1000)
  val elapsed = (now - lastUsed).coerceAtLeast(0)
  return (duration * 1000 - elapsed).coerceAtLeast(0)
}

internal fun resolveSlotLink(id: UUID, links: Map<UUID, UUID>): UUID {
  val seen = mutableSetOf<UUID>()
  var current = id
  while (links.containsKey(current)) {
    require(seen.add(current)) { "linkTo cycle" }
    current = links.getValue(current)
  }
  return current
}

internal fun matchingSlot(query: String, names: Map<UUID, String>): UUID? {
  names.keys
      .firstOrNull { it.toString().equals(query, true) }
      ?.let {
        return it
      }
  return names.filterValues { it.equals(query, true) }.keys.singleOrNull()
}

internal fun slotText(text: String, values: Map<String, String>): String =
    Regex("\\$(machineName|newline|balance|player|price)").replace(text) {
      values[it.groupValues[1]] ?: it.value
    }

internal fun reelSlots(visual: String): List<Int> =
    when (visual) {
      "SLOTMACHINE" -> listOf(10, 12, 14, 19, 21, 23, 28, 30, 32)
      "CSGOWHEEL" -> (19..25).toList()
      "CSGOWHEEL_VERTICAL" -> listOf(2, 11, 20, 29, 38)
      else -> error("Unsupported visualType")
    }

internal fun winningSlots(visual: String): List<Int> =
    when (visual) {
      "SLOTMACHINE" -> listOf(19, 21, 23)
      "CSGOWHEEL" -> listOf(22)
      "CSGOWHEEL_VERTICAL" -> listOf(20)
      else -> error("Unsupported visualType")
    }

internal fun slotSize(visual: String): Int = if (visual == "CSGOWHEEL") 54 else 45

internal fun leverSlot(visual: String): Int =
    when (visual) {
      "SLOTMACHINE" -> 25
      "CSGOWHEEL_VERTICAL" -> 33
      else -> 43
    }

internal fun previewSlot(visual: String): Int =
    when (visual) {
      "SLOTMACHINE" -> 16
      "CSGOWHEEL_VERTICAL" -> 15
      else -> 37
    }

internal fun emphasisSlots(visual: String): List<Int> =
    when (visual) {
      "SLOTMACHINE" -> listOf(20, 22)
      "CSGOWHEEL_VERTICAL" -> listOf(19, 21)
      else -> listOf(13, 31)
    }

internal fun resultMessage(enabled: Boolean, custom: String): String? =
    custom.takeIf { enabled && it.isNotEmpty() }

internal data class SlotStack(val kind: Int, val amount: Int, val limit: Int)

internal fun packSlotItems(existing: List<SlotStack?>, rewards: List<SlotStack>): List<SlotStack?> {
  val result = existing.toMutableList()
  for (reward in rewards) {
    require(reward.amount > 0 && reward.limit > 0)
    var remaining = reward.amount
    for (index in result.indices) {
      val stack = result[index] ?: continue
      if (stack.kind == reward.kind) {
        val amount = minOf(remaining, (reward.limit - stack.amount).coerceAtLeast(0))
        result[index] = stack.copy(amount = stack.amount + amount)
        remaining -= amount
      }
    }
    for (index in result.indices) {
      if (remaining == 0) break
      if (result[index] == null) {
        val amount = minOf(remaining, reward.limit)
        result[index] = reward.copy(amount = amount)
        remaining -= amount
      }
    }
    check(remaining == 0) { "景品を受け取る空きがありません。" }
  }
  return result
}

internal fun reelColumns(visual: String): List<List<Int>> =
    if (visual == "SLOTMACHINE") listOf(listOf(10, 19, 28), listOf(12, 21, 30), listOf(14, 23, 32))
    else listOf(reelSlots(visual))

internal fun convertLegacyCooldown(
    lastUsed: Long,
    duration: Long,
    timestampUnit: String = "milliseconds",
    durationUnit: String = "seconds",
): Pair<Long, Long> {
  require(lastUsed >= 0 && duration >= 0)
  val timestamp =
      when (timestampUnit) {
        "",
        "milliseconds" -> lastUsed
        "seconds" -> Math.multiplyExact(lastUsed, 1000L)
        else -> error("旧lastUsedの単位を確認して設定してください。")
      }
  val seconds =
      when (durationUnit) {
        "",
        "seconds" -> duration
        "milliseconds" -> {
          require(duration % 1000 == 0L) { "cooldownDurationは秒に正確に変換できません。" }
          duration / 1000
        }
        else -> error("旧cooldownDurationの単位を確認して設定してください。")
      }
  remainingCooldown(timestamp, seconds, timestamp)
  return timestamp to seconds
}

/** Observed wheel cadence: quick frames, eight slowing frames, then a result pause. */
internal fun slotAnimationFrames(visual: String, seconds: Int): List<Int> {
  require(seconds in 1..3600)
  if (visual == "SLOTMACHINE") return (2 until seconds * 20 step 2).toList()
  require(visual in setOf("CSGOWHEEL", "CSGOWHEEL_VERTICAL"))
  val delays = listOf(1) + List(seconds * 10 - 9) { 2 } + listOf(3, 4, 5, 5, 6, 7, 8, 8)
  var tick = 0
  return delays.map {
    tick += it
    tick
  }
}

internal fun slotResultTick(visual: String, seconds: Int): Int =
    if (visual == "SLOTMACHINE") seconds * 20 else slotAnimationFrames(visual, seconds).last() + 13
