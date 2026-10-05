package icu.oyasai.games.weapons

/** Name-only legacy items have no trustworthy identifier: ambiguous matches stay unrecognized. */
internal object WeaponNames {
  private val colors = Regex("[§&][0-9a-fk-orx]", RegexOption.IGNORE_CASE)
  private val magazine = Regex("\\s*«(\\d+|×)(?:\\s*\\|\\s*(\\d+|×))?»$")
  private val action = Regex("\\s+[▪■□▫_]$")

  fun plain(name: String): String = colors.replace(name.replace('§', '&'), "").trim()

  private fun withoutReload(name: String): String = plain(name).removeSuffix("ᴿ").trim()

  fun base(name: String): String =
      action.replace(magazine.replace(withoutReload(name), "").trim(), "").trim()

  fun actionMarker(name: String): String? =
      action.find(magazine.replace(withoutReload(name), "").trim())?.value?.trim()

  fun rounds(name: String, left: Boolean = false): Int? {
    val groups = magazine.find(withoutReload(name))?.groupValues ?: return null
    return groups[if (!left && groups.getOrNull(2)?.isNotEmpty() == true) 2 else 1].toIntOrNull()
  }

  fun <T> match(name: String, candidates: Iterable<T>, names: (T) -> List<String>): T? {
    val base = base(name)
    if (base.isEmpty()) return null
    return candidates
        .filter { candidate -> names(candidate).any { base(it) == base } }
        .singleOrNull()
  }
}
