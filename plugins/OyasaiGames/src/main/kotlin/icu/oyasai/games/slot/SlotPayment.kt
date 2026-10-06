package icu.oyasai.games.slot

import java.io.File
import org.bukkit.configuration.file.YamlConfiguration

/**
 * Vault and console commands have no transaction ID: ambiguous crash states must not be replayed.
 */
internal class SlotPayment(private val file: File) {
  private var yaml = if (file.exists()) loadSlotYaml(file) else YamlConfiguration()
  val phase: String
    get() = yaml.getString("phase", "NEW")!!

  val price: Double
    get() = yaml.getDouble("price")

  val blocked: Boolean
    get() = phase !in setOf("NEW", "COMPLETE", "REFUNDED", "DECLINED")

  private fun save(phase: String) {
    val next =
        YamlConfiguration().apply {
          loadFromString(yaml.saveToString())
          set("phase", phase)
        }
    saveSlotFile(file, next.saveToString())
    yaml = next
  }

  fun charge(price: Double, prizeKey: String? = null, withdraw: (Double) -> Boolean): Boolean {
    check(!blocked) { "Unresolved payment" }
    require(price.isFinite() && price >= 0)
    yaml.set("price", price)
    yaml.set("startedAt", System.currentTimeMillis())
    yaml.set("prize", prizeKey)
    save("CHARGING")
    if (price > 0 && !withdraw(price)) {
      save("DECLINED")
      return false
    }
    // If saving PAID fails, the caller still knows withdrawal succeeded and must refund.
    try {
      save("PAID")
    } catch (failure: Exception) {
      yaml.set("phase", "PAID")
      throw failure
    }
    return true
  }

  fun delivering() {
    check(phase == "PAID")
    save("DELIVERING")
  }

  fun complete() {
    check(phase == "DELIVERING")
    save("COMPLETE")
  }

  fun refund(deposit: (Double) -> Boolean): Boolean {
    if (phase !in setOf("PAID", "DELIVERING", "REFUND_FAILED")) return false
    save("REFUNDING")
    if (price > 0 && !deposit(price)) {
      save("REFUND_FAILED")
      return false
    }
    save("REFUNDED")
    return true
  }
}
