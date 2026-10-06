package icu.oyasai.utilities.teleport

import java.util.Calendar
import java.util.GregorianCalendar
import java.util.TimeZone
import java.util.UUID

/** Server-independent Essentials command and confinement rules. */
object TeleportRules {
  enum class JailAction {
    ENTER,
    RELEASE,
    UPDATE,
  }

  fun jailAction(
      jailed: Boolean,
      currentJail: String?,
      requestedJail: String?,
      duration: String?,
  ): JailAction {
    if (!jailed) return JailAction.ENTER
    if (requestedJail == null) return JailAction.RELEASE
    require(requestedJail.equals(currentJail, true)) { "既に別の牢屋に入っています: $currentJail" }
    require(!duration.isNullOrBlank()) { "期限を指定してください" }
    return JailAction.UPDATE
  }

  private val timePattern =
      Regex(
          "(?:([0-9]+)\\s*y[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*mo[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*w[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*d[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*h[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*m[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*(?:s[a-z]*)?)?",
          RegexOption.IGNORE_CASE,
      )

  /** Essentials DateUtil grammar, calendar arithmetic, and ten-year maximum sentence. */
  fun parseJailDuration(
      value: String,
      now: Long = System.currentTimeMillis(),
      emptyEpoch: Boolean = false,
      timeZone: TimeZone = TimeZone.getDefault(),
  ): Long {
    val match =
        timePattern.findAll(value).firstOrNull { it.value.isNotEmpty() }
            ?: throw IllegalArgumentException("期限は 30m、2h、1d などで指定してください")
    val calendar = GregorianCalendar(timeZone).apply { timeInMillis = if (emptyEpoch) 0 else now }
    val fields =
        listOf(
            Calendar.YEAR,
            Calendar.MONTH,
            Calendar.WEEK_OF_YEAR,
            Calendar.DAY_OF_MONTH,
            Calendar.HOUR_OF_DAY,
            Calendar.MINUTE,
            Calendar.SECOND,
        )
    fields.forEachIndexed { index, field ->
      var amount = match.groupValues[index + 1].takeIf { it.isNotEmpty() }?.toInt() ?: 0
      if (field == Calendar.YEAR) amount = amount.coerceAtMost(100_000)
      if (amount > 0) calendar.add(field, amount)
    }
    val maximum =
        GregorianCalendar(timeZone).apply {
          timeInMillis = now
          add(Calendar.YEAR, 10)
        }
    return minOf(calendar.timeInMillis, maximum.timeInMillis)
  }

  val aliases =
      linkedMapOf(
          "home" to listOf("homes"),
          "sethome" to emptyList(),
          "delhome" to listOf("remhome"),
          "warp" to listOf("warps"),
          "tp" to listOf("tp2p"),
          "tphere" to listOf("s"),
          "tpa" to listOf("tpask"),
          "tpaccept" to listOf("tpyes"),
          "tpdeny" to listOf("tpno"),
          "tpacancel" to emptyList(),
          "tpahere" to emptyList(),
          "togglejail" to listOf("jail", "unjail"),
      )

  fun permission(command: String): String = "essentials.$command"

  fun worldAllowed(
      currentWorld: String,
      targetWorld: String,
      hasPermission: (String) -> Boolean,
  ): Boolean = currentWorld == targetWorld || hasPermission("essentials.worlds.$targetWorld")

  fun homeLimit(hasPermission: (String) -> Boolean, limits: Map<String, Int>): Int {
    if (hasPermission("essentials.sethome.multiple.unlimited")) return Int.MAX_VALUE
    if (!hasPermission("essentials.sethome.multiple")) return 1
    return limits.entries
        .filter { it.key == "default" || hasPermission("essentials.sethome.multiple.${it.key}") }
        .maxOfOrNull { it.value } ?: 1
  }

  /**
   * No event cause (including PLUGIN) bypasses confinement. Authorization is destination-specific.
   */
  fun jailAllowsTeleport(
      jailed: Boolean,
      destination: SavedLocation,
      authorizedDestination: SavedLocation?,
  ): Boolean =
      !jailed ||
          (authorizedDestination != null &&
              destination.worldUuid == authorizedDestination.worldUuid &&
              destination.worldName == authorizedDestination.worldName &&
              destination.x == authorizedDestination.x &&
              destination.y == authorizedDestination.y &&
              destination.z == authorizedDestination.z)
}

data class TpaRequest(
    val sender: UUID,
    val recipient: UUID,
    val here: Boolean,
    val location: SavedLocation,
    val time: Long,
)

/** Main-thread, in-memory requests; each sender has at most one request per recipient. */
class TpaRequests(var expirationMillis: Long = 120_000L) {
  private val requests = linkedMapOf<Pair<UUID, UUID>, TpaRequest>()

  fun add(request: TpaRequest) {
    val key = request.sender to request.recipient
    require(key !in requests) { "既に申請しています" }
    requests[key] = request
  }

  fun pending(
      recipient: UUID,
      sender: UUID? = null,
      now: Long = System.currentTimeMillis(),
  ): List<TpaRequest> {
    expire(now)
    return requests.values
        .filter { it.recipient == recipient && (sender == null || it.sender == sender) }
        .sortedByDescending { it.time }
  }

  fun remove(request: TpaRequest): Boolean =
      requests.remove(request.sender to request.recipient, request)

  fun cancel(sender: UUID): List<TpaRequest> {
    val cancelled = requests.values.filter { it.sender == sender }
    cancelled.forEach(::remove)
    return cancelled
  }

  fun outgoing(sender: UUID, now: Long = System.currentTimeMillis()): List<TpaRequest> {
    expire(now)
    return requests.values.filter { it.sender == sender }
  }

  fun clear(player: UUID? = null) {
    if (player == null) {
      requests.clear()
      return
    }
    requests.entries.removeIf { it.value.sender == player || it.value.recipient == player }
  }

  fun expire(now: Long = System.currentTimeMillis()) {
    if (expirationMillis <= 0) return
    requests.entries.removeIf { now - it.value.time >= expirationMillis }
  }
}
