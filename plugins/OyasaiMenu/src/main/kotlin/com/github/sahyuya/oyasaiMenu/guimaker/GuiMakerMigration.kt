package com.github.sahyuya.oyasaiMenu.guimaker

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption

object GuiMakerMigration {
  fun migrateFromCitiesSkyMine(plugin: OyasaiMenu) {
    val sourceRoot = File(plugin.dataFolder.parentFile, "CitiesSkyMine")
    if (!sourceRoot.exists()) return

    val copied =
        copyDirectory(sourceRoot.resolve("menus"), plugin.dataFolder.resolve("menus")) +
            copyDirectory(sourceRoot.resolve("guimaker"), plugin.dataFolder.resolve("guimaker")) +
            copyDirectory(sourceRoot.resolve("favorites"), plugin.dataFolder.resolve("favorites")) +
            copyDirectory(sourceRoot.resolve("ui-skin"), plugin.dataFolder.resolve("ui-skin")) +
            copyFileIfMissing(
                sourceRoot.resolve("gui-maker-ui-screens.yml"),
                plugin.dataFolder.resolve("gui-maker-ui-screens.yml"),
            )

    if (copied > 0) {
      plugin.logger.info("GuiMaker: CitiesSkyMine から $copied 件の既存データを OyasaiMenu へ移行しました。")
    }
  }

  private fun copyDirectory(source: File, destination: File): Int {
    if (!source.exists() || !source.isDirectory) return 0
    var copied = 0
    source
        .walkTopDown()
        .filter { it.isFile }
        .forEach { file ->
          val target = destination.resolve(file.relativeTo(source).path)
          if (!target.exists()) {
            target.parentFile.mkdirs()
            Files.copy(file.toPath(), target.toPath(), StandardCopyOption.COPY_ATTRIBUTES)
            copied++
          }
        }
    return copied
  }

  private fun copyFileIfMissing(source: File, destination: File): Int {
    if (!source.exists() || destination.exists()) return 0
    destination.parentFile.mkdirs()
    Files.copy(source.toPath(), destination.toPath(), StandardCopyOption.COPY_ATTRIBUTES)
    return 1
  }
}
