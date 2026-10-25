package icu.oyasai.games.pvp

import icu.oyasai.games.wholeMoney
import io.oyasai.economy.api.OyasaiEconomyApi
import java.io.File
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player

internal class PvpEconomy(
    private val folder: File,
    private val provider: OyasaiEconomyApi,
) {
  private val file = File(folder, "payments.yml")
  private var busy = false

  private inline fun <T> serialized(action: () -> T): T {
    check(!busy) { "OyasaiEconomyApi transaction is already in progress" }
    busy = true
    try {
      return action()
    } finally {
      busy = false
    }
  }

  private fun ledger() = YamlConfiguration().also { if (file.exists()) it.load(file) }

  fun requireProvider() = Unit

  fun charge(player: Player, amount: Long, key: String = UUID.randomUUID().toString()): String? {
    return serialized {
      require(amount >= 0)
      if (amount == 0L) return null
      val economy = provider
      val y = ledger()
      check(!y.contains("debits.$key")) { "Debit key already exists" }
      y.set("debits.$key.player", player.uniqueId.toString())
      y.set("debits.$key.amount", amount)
      y.set("debits.$key.state", "uncertain")
      saveYaml(file, y)
      val response = economy.withdraw("yen", player.uniqueId, amount)
      if (!response.accepted) {
        y.set("debits.$key", null)
        saveYaml(file, y)
        error("OyasaiEconomyApi withdrawal failed")
      }
      check(response.completion.join() is io.oyasai.economy.api.EconomyResult.Success) {
        "引き落としを保存できません"
      }
      y.set("debits.$key.state", "charged")
      saveYaml(file, y)
      return key
    }
  }

  fun debitState(key: String): String? = ledger().getString("debits.$key.state")

  fun hasUncertain(id: UUID): Boolean {
    val y = ledger()
    return listOf("debits", "credits").any { section ->
      y.getConfigurationSection(section)?.getKeys(false)?.any {
        y.getString("$section.$it.player") == id.toString() &&
            y.getString("$section.$it.state") == "uncertain"
      } == true
    }
  }

  fun consume(key: String?) {
    return serialized {
      if (key == null) return
      val y = ledger()
      y.set("debits.$key.state", "consumed")
      saveYaml(file, y)
    }
  }

  fun settle(key: String?, amount: Long) {
    return serialized {
      if (key == null) return
      val y = ledger()
      val path = "debits.$key"
      if (y.getString("$path.state") != "charged") return
      y.set("$path.state", "settled")
      y.set("credits.$key.player", y.getString("$path.player"))
      y.set("credits.$key.amount", amount)
      y.set("credits.$key.state", "pending")
      saveYaml(file, y)
      deliver(y, key)
    }
  }

  fun refund(key: String?) {
    if (key == null) return
    settle(key, ledger().wholeMoney("debits.$key.amount"))
  }

  fun pay(id: UUID, amount: Long, key: String = UUID.randomUUID().toString()) {
    return serialized {
      require(amount >= 0)
      if (amount == 0L) return
      val y = ledger()
      if (y.contains("credits.$key")) return
      y.set("credits.$key.player", id.toString())
      y.set("credits.$key.amount", amount)
      y.set("credits.$key.state", "pending")
      saveYaml(file, y)
      deliver(y, key)
    }
  }

  // A durable event key also prevents a caller retry from creating another credit.
  // Uncertain 経済API responses deliberately remain blocked for reconciliation.
  fun payOnce(event: String, id: UUID, amount: Long) {
    serialized {
      require(event.isNotBlank() && amount >= 0)
      if (amount == 0L) return
      val key =
          "event-" +
              java.security.MessageDigest.getInstance("SHA-256")
                  .digest(event.toByteArray(Charsets.UTF_8))
                  .joinToString("") { "%02x".format(it) }
      val y = ledger()
      val path = "credits.$key"
      if (y.contains(path)) {
        check(
            y.getString("$path.player") == id.toString() && y.wholeMoney("$path.amount") == amount
        ) {
          "Payment event does not match the existing ledger"
        }
      } else {
        y.set("$path.player", id.toString())
        y.set("$path.amount", amount)
        y.set("$path.state", "pending")
        saveYaml(file, y)
      }
      deliver(y, key)
    }
  }

  private fun deliver(y: YamlConfiguration, key: String) {
    val economy = provider
    val path = "credits.$key"
    if (y.getString("$path.state") != "pending") return
    val amount = y.wholeMoney("$path.amount")
    if (amount == 0L) {
      y.set("$path.state", "paid")
      saveYaml(file, y)
      return
    }
    // 経済API has no idempotent transactions. Keep uncertain debits/credits for
    // administrator reconciliation rather than automatically repeat them.
    y.set("$path.state", "uncertain")
    saveYaml(file, y)
    val response = economy.deposit("yen", UUID.fromString(y.getString("$path.player")!!), amount)
    y.set(
        "$path.state",
        if (response.completion.join() is io.oyasai.economy.api.EconomyResult.Success) "paid"
        else "pending",
    )
    saveYaml(file, y)
  }

  fun retry() {
    return serialized {
      val y = ledger()
      y.getConfigurationSection("debits")?.getKeys(false)?.toList()?.forEach { key ->
        if (y.getString("debits.$key.state") == "charged") {
          y.set("debits.$key.state", "settled")
          y.set("credits.$key.player", y.getString("debits.$key.player"))
          y.set("credits.$key.amount", y.wholeMoney("debits.$key.amount"))
          y.set("credits.$key.state", "pending")
          saveYaml(file, y)
        }
      }
      y.getConfigurationSection("credits")?.getKeys(false)?.toList()?.forEach { deliver(y, it) }
      if (
          listOf("debits", "credits").any { section ->
            y.getConfigurationSection(section)?.getKeys(false)?.any {
              y.getString("$section.$it.state") == "uncertain"
            } == true
          }
      ) {
        java.util.logging.Logger.getLogger("OyasaiGames")
            .warning(
                "PvP economy has uncertain transactions in payments.yml; administrator reconciliation is required"
            )
      }
    }
  }
}
