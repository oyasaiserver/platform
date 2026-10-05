package icu.oyasai.games.slot

import java.io.File
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.StandardCopyOption

/** Copy the original YAML bytes, including ItemStack data, without touching the source. */
internal fun importLegacySlot(destination: File, legacy: File): Boolean {
  if (destination.exists() || !File(legacy, "machines").isDirectory) return false
  Files.createDirectories(destination.parentFile.toPath())
  val staging = Files.createTempDirectory(destination.parentFile.toPath(), ".slot-import-").toFile()
  try {
    for (name in listOf("machines", "players")) {
      val source = File(legacy, name)
      if (!source.exists()) continue
      Files.createDirectory(File(staging, name).toPath())
      val files = source.listFiles() ?: error("$name directory cannot be read")
      for (file in files.filter { it.isFile && it.extension == "yml" }) {
        Files.copy(file.toPath(), File(staging, "$name/${file.name}").toPath())
      }
    }
    val config = File(legacy, "config.yml")
    require(config.isFile) { "legacy config.yml is missing" }
    Files.copy(config.toPath(), File(staging, "config.yml").toPath())
    File(staging, "imported.txt").writeText("SlotMachine YAML import completed\n")
    // A partial import must never become visible as playable data.
    Files.move(staging.toPath(), destination.toPath(), StandardCopyOption.ATOMIC_MOVE)
    return true
  } finally {
    if (staging.exists()) staging.deleteRecursively()
  }
}

internal fun saveSlotFile(file: File, text: String) {
  Files.createDirectories(file.parentFile.toPath())
  val temp = Files.createTempFile(file.parentFile.toPath(), ".slot-", ".tmp")
  try {
    FileOutputStream(temp.toFile()).use {
      it.write(text.toByteArray(Charsets.UTF_8))
      it.fd.sync()
    }
    Files.move(
        temp,
        file.toPath(),
        StandardCopyOption.ATOMIC_MOVE,
        StandardCopyOption.REPLACE_EXISTING,
    )
  } finally {
    Files.deleteIfExists(temp)
  }
}

/** Update counters without serializing legacy ItemStacks or their component data. */
internal fun patchMachineCounters(
    text: String,
    timesUsed: Long,
    timesWon: Map<String, Long>,
): String {
  require(timesUsed >= 0 && timesWon.values.all { it >= 0 })
  val newline = if (text.contains("\r\n")) "\r\n" else "\n"
  val lines = text.split(newline).toMutableList()
  var inItems = false
  var itemKey: String? = null
  var inStats = false
  var used = 0
  val won = mutableSetOf<String>()
  val entry = Regex("^  (?:'([^']+)'|\"([^\"]+)\"|([^\\s:][^:]*)):\\s*$")
  val counter = Regex("^(\\s*times(?:Used|Won):\\s*)[0-9]+(\\s*(?:#.*)?)$")
  for (i in lines.indices) {
    val line = lines[i]
    if (line.startsWith("timesUsed:")) {
      val match = counter.matchEntire(line) ?: error("Invalid timesUsed line")
      lines[i] = "${match.groupValues[1]}$timesUsed${match.groupValues[2]}"
      used++
    }
    if (line.isNotBlank() && !line.startsWith(" ") && !line.startsWith("#")) {
      inItems = line.trim() == "items:"
      itemKey = null
      inStats = false
      continue
    }
    if (!inItems) continue
    entry.matchEntire(line)?.let {
      itemKey = it.groupValues.drop(1).first { part -> part.isNotEmpty() }
      inStats = false
    }
    if (
        line.startsWith("    ") &&
            !line.startsWith("     ") &&
            line.trim().isNotEmpty() &&
            !line.trim().startsWith("#")
    ) {
      inStats = line.trim() == "stats:"
    }
    val key = itemKey
    if (inStats && key in timesWon && line.startsWith("      timesWon:")) {
      val match = counter.matchEntire(line) ?: error("Invalid timesWon line")
      check(won.add(key!!)) { "Duplicate timesWon line" }
      lines[i] = "${match.groupValues[1]}${timesWon.getValue(key)}${match.groupValues[2]}"
    }
  }
  check(used == 1 && won == timesWon.keys) { "Counter lines are missing or ambiguous" }
  return lines.joinToString(newline)
}
