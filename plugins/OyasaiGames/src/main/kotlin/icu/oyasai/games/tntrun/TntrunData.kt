package icu.oyasai.games.tntrun

import icu.oyasai.games.pvp.PvpEconomy
import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.util.UUID

internal class RunData(private val folder: File) {
  val file = File(folder, "records.yml")
  var records = readYaml(file)
    private set

  private val oldPlayers = readYaml(File(folder, "players.yml"))
  private val oldStats = readYaml(File(folder, "stats.yml")).getConfigurationSection("stats")

  init {
    records.getConfigurationSection("players")?.getKeys(false)?.forEach { key ->
      for (field in listOf("jumps", "played", "wins")) {
        check(records.isInt("players.$key.$field") && records.getInt("players.$key.$field") >= 0) {
          "Invalid TNTRun player record; administrator inspection is required"
        }
      }
    }
  }

  fun enlist(id: UUID, name: String) {
    val key = id.toString()
    if (records.contains("players.$key")) return
    // UUID data takes priority; exact legacy name matching only, never substring matching.
    val old =
        if (oldPlayers.isConfigurationSection(key)) key
        else arenaName(name, oldPlayers.getKeys(false))
    if (old != null && oldPlayers.contains("$old.doublejumps"))
        check(oldPlayers.isInt("$old.doublejumps") && oldPlayers.getInt("$old.doublejumps") >= 0)
    records.set("players.$key.jumps", old?.let { oldPlayers.getInt("$it.doublejumps") } ?: 0)
    val statsKey =
        if (oldStats?.isConfigurationSection(key) == true) key
        else arenaName(name, oldStats?.getKeys(false) ?: emptySet())
    for (k in listOf("played", "wins")) records.set(
        "players.$key.$k",
        statsKey?.let { oldStats!!.getInt("$it.$k") } ?: 0,
    )
    save()
  }

  fun jumps(id: UUID) = records.getInt("players.$id.jumps")

  fun setJumps(id: UUID, value: Int) {
    require(value >= 0)
    records.set("players.$id.jumps", value)
    save()
  }

  fun purchased(id: UUID, key: String, after: Int) {
    if (records.getBoolean("purchases.$key")) return
    records.set("players.$id.jumps", after)
    records.set("purchases.$key", true)
    save()
  }

  fun stats(id: UUID) =
      "${records.getInt("players.$id.played")} games / ${records.getInt("players.$id.wins")} wins"

  fun played(match: UUID, ids: Set<UUID>) {
    if (records.getBoolean("played.$match")) return
    ids.forEach { records.set("players.$it.played", records.getInt("players.$it.played") + 1) }
    records.set("played.$match", true)
    save()
  }

  fun won(match: UUID, id: UUID) {
    if (records.getBoolean("won.$match")) return
    records.set("players.$id.wins", records.getInt("players.$id.wins") + 1)
    records.set("won.$match", true)
    save()
  }

  private fun save() {
    try {
      saveYaml(file, records)
    } catch (e: Exception) {
      records = readYaml(file)
      throw e
    }
  }
}

internal fun rewardXp(snapshot: File, match: String, award: Int) {
  if (award == 0) return
  val y = readYaml(snapshot)
  check(snapshot.exists()) { "Reward inventory recovery snapshot is missing" }
  if (y.getString("tntrun-reward") == match) return
  val (level, fraction) = xpProgress(y.getInt("level"), y.getDouble("exp").toFloat(), award)
  y.set("level", level)
  y.set("exp", fraction.toDouble())
  y.set(
      "total-exp",
      (y.getInt("total-exp").toLong() + award).coerceAtMost(Int.MAX_VALUE.toLong()).toInt(),
  )
  y.set("tntrun-reward", match)
  saveYaml(snapshot, y)
}

// Write the decision before delivering anything. Replays use stable ledger keys and replacement XP.
internal fun deliverResult(file: File, folder: File, data: RunData, bank: PvpEconomy?) {
  val y = readYaml(file)
  val match = y.getString("match") ?: error("Missing result match")
  val winner = UUID.fromString(y.getString("winner"))
  if (y.getBoolean("stats")) data.won(UUID.fromString(match), winner)
  if (!y.getBoolean("xp-applied")) {
    rewardXp(File(folder, "players/$winner.yml"), match, y.getInt("xp"))
    y.set("xp-applied", true)
    saveYaml(file, y)
  }
  val money = y.getDouble("money")
  if (money > 0) {
    check(bank != null) { "Reward economy provider is unavailable" }
    bank.pay(
        winner,
        money,
        UUID.nameUUIDFromBytes("tntrun:$match:$winner".toByteArray()).toString(),
    )
  }
  y.set("delivered", true)
  saveYaml(file, y)
}

internal fun recoverPurchase(file: File, data: RunData, bank: PvpEconomy) {
  val y = readYaml(file)
  val key = y.getString("key") ?: error("Missing purchase key")
  when (bank.debitState(key)) {
    "charged",
    "consumed" -> {
      bank.consume(key)
      data.purchased(UUID.fromString(y.getString("player")), key, y.getInt("after"))
      java.nio.file.Files.delete(file.toPath())
    }
    null -> java.nio.file.Files.delete(file.toPath()) // No debit ever published.
    else -> error("Purchase transaction requires administrator reconciliation")
  }
}

internal fun guardedRecovery(inProgress: MutableSet<UUID>, id: UUID, action: () -> Unit) {
  if (!inProgress.add(id)) return
  try {
    action()
  } finally {
    inProgress.remove(id)
  }
}
