package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.Treasure
import java.io.File
import java.io.FileOutputStream
import java.io.OutputStreamWriter
import java.nio.charset.StandardCharsets
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import java.util.logging.Level
import java.util.logging.Logger
import org.bukkit.configuration.file.YamlConfiguration

class TreasureFileStore(
    private val dataFile: File,
    private val logger: Logger,
) {
  fun load(): LinkedHashMap<UUID, Treasure> {
    val treasures = linkedMapOf<UUID, Treasure>()
    if (!dataFile.exists()) return treasures

    val yaml = YamlConfiguration.loadConfiguration(dataFile)
    val section = yaml.getConfigurationSection("treasures") ?: return treasures
    for (key in section.getKeys(false)) {
      val entry = section.getConfigurationSection(key)
      if (entry == null) {
        logger.warning("宝HEAD $key のYAMLエントリがセクションではないため読み込みませんでした。")
        continue
      }
      val id = runCatching { UUID.fromString(key) }.getOrNull()
      if (id == null) {
        logger.warning("宝HEAD $key のIDが有効なUUIDではないため読み込みませんでした。")
        continue
      }
      val world = entry.getString("world")?.takeIf { it.isNotBlank() }
      if (world == null) {
        logger.warning("宝HEAD $key のワールドが指定されていないため読み込みませんでした。")
        continue
      }
      if (!entry.isInt("x") || !entry.isInt("y") || !entry.isInt("z")) {
        logger.warning("宝HEAD $key の座標が不足しているか不正なため読み込みませんでした。")
        continue
      }
      treasures[id] = Treasure(id, world, entry.getInt("x"), entry.getInt("y"), entry.getInt("z"))
    }
    return treasures
  }

  fun save(treasures: Collection<Treasure>): Boolean {
    val yaml = YamlConfiguration()
    val section = yaml.createSection("treasures")
    for (treasure in treasures) {
      val entry = section.createSection(treasure.id.toString())
      entry.set("world", treasure.worldName)
      entry.set("x", treasure.x)
      entry.set("y", treasure.y)
      entry.set("z", treasure.z)
    }

    val parent = dataFile.parentFile ?: return false
    val tempFile = File(parent, dataFile.name + ".tmp")
    val backupFile = File(parent, dataFile.name + ".bak")
    return try {
      Files.createDirectories(parent.toPath())
      FileOutputStream(tempFile).use { output ->
        val writer = OutputStreamWriter(output, StandardCharsets.UTF_8)
        writer.write(yaml.saveToString())
        writer.flush()
        output.fd.sync()
      }
      if (dataFile.exists()) {
        Files.copy(dataFile.toPath(), backupFile.toPath(), StandardCopyOption.REPLACE_EXISTING)
      }
      try {
        Files.move(
            tempFile.toPath(),
            dataFile.toPath(),
            StandardCopyOption.ATOMIC_MOVE,
            StandardCopyOption.REPLACE_EXISTING,
        )
      } catch (_: AtomicMoveNotSupportedException) {
        Files.move(tempFile.toPath(), dataFile.toPath(), StandardCopyOption.REPLACE_EXISTING)
      }
      true
    } catch (exception: Exception) {
      runCatching { Files.deleteIfExists(tempFile.toPath()) }
      logger.log(Level.SEVERE, "${dataFile.name}を安全に保存できませんでした。", exception)
      false
    }
  }
}
