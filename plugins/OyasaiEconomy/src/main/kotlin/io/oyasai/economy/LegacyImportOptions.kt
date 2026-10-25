package io.oyasai.economy

import java.io.File
import java.util.UUID
import org.yaml.snakeyaml.Yaml

internal data class LegacyCorrection(val amount: Long, val reason: String)

internal data class LegacyImportOptions(
    val excludedNames: Set<String> = emptySet(),
    val corrections: Map<String, LegacyCorrection> = emptyMap(),
) {
  companion object {
    fun fromFiles(exclusions: File? = null, corrections: File? = null): LegacyImportOptions {
      fun entries(file: File?, key: String): List<Map<*, *>> {
        if (file == null) return emptyList()
        val root = file.reader().use { Yaml().load<Any?>(it) }
        require(root is Map<*, *> && root.keys == setOf(key)) { "Invalid migration policy file" }
        val rows = root[key]
        require(rows is List<*>) { "Invalid migration policy list" }
        return rows.map {
          require(it is Map<*, *>) { "Invalid migration policy entry" }
          it
        }
      }
      val names =
          entries(exclusions, "exclude").map {
            require(it.keys == setOf("name")) { "Invalid exclusion entry" }
            val name = it["name"]
            require(name is String && name.isNotBlank()) { "Invalid exclusion name" }
            name
          }
      require(names.distinct().size == names.size) { "Duplicate exclusion name" }
      val values =
          entries(corrections, "corrections").map {
            require(it.keys == setOf("uuid", "amount", "reason")) { "Invalid correction entry" }
            val uuid = it["uuid"]
            require(uuid is String && UUID.fromString(uuid).toString() == uuid) {
              "Invalid correction UUID"
            }
            val amount = it["amount"]
            require(amount is Int || amount is Long) { "Correction amount must be an integer" }
            val reason = it["reason"]
            require(reason is String && reason.isNotBlank()) { "Correction reason is empty" }
            val correction = LegacyCorrection((amount as Number).toLong(), reason)
            require(correction.amount != 0L) { "Correction amount is zero" }
            uuid to correction
          }
      require(values.map { it.first }.distinct().size == values.size) {
        "Duplicate correction UUID"
      }
      return LegacyImportOptions(names.toSet(), values.toMap())
    }
  }
}
