package icu.oyasai.frames

import com.gakubuchilocker.GakubuchiLockerPlugin
import com.github.srain3.painttools.PaintTools
import icu.oyasai.imageonmap.ImageOnMap
import java.io.File
import java.util.UUID
import org.bukkit.NamespacedKey
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType

class OyasaiFrames : ImageOnMap() {
  private var lockerFeature: GakubuchiLockerPlugin? = null
  private var paintFeature: PaintTools? = null

  val ownerKey
    get() = OWNER_KEY

  val paintIdKey
    get() = PAINT_ID_KEY

  fun lockOwner(frame: ItemFrame): UUID? =
      frameOwner(
          lockerFeature?.db?.getOwner(frame.uniqueId),
          frame.persistentDataContainer.get(ownerKey, PersistentDataType.STRING),
      )

  fun canModify(frame: ItemFrame, player: Player): Boolean =
      mayModify(lockOwner(frame), player.uniqueId, player.isOp)

  fun locker(): GakubuchiLockerPlugin? = lockerFeature

  override fun onEnable() {
    try {
      requireMigratedDatabases(dataFolder)
    } catch (e: IllegalStateException) {
      logger.severe(e.message)
      server.pluginManager.disablePlugin(this)
      return
    }

    val locker = GakubuchiLockerPlugin(this)
    try {
      locker.onEnable()
      lockerFeature = locker
    } catch (e: Exception) {
      logger.severe("Frame locking failed to start: ${e.message}")
      runCatching { locker.onDisable() }
    }

    try {
      super.onEnable()
    } catch (e: Exception) {
      logger.severe("Image maps failed to start: ${e.message}")
    }

    try {
      val paint = PaintTools(this)
      paintFeature = paint
      paint.onEnable()
    } catch (e: Exception) {
      logger.severe("Painting failed to start: ${e.message}")
    }

    getCommand("getdye")?.setExecutor { sender, _, _, _ ->
      if (sender is Player) sender.performCommand("painttools dye")
      else sender.sendMessage("このコマンドはプレイヤー専用です。")
      true
    }
  }

  override fun onDisable() {
    runCatching { paintFeature?.onDisable() }
        .onFailure { logger.severe("Painting shutdown failed: ${it.message}") }
    runCatching { super.onDisable() }
        .onFailure { logger.severe("Image maps shutdown failed: ${it.message}") }
    runCatching { lockerFeature?.onDisable() }
        .onFailure { logger.severe("Frame locking shutdown failed: ${it.message}") }
  }
}

internal fun requireMigratedDatabases(dataFolder: File) {
  val plugins = dataFolder.parentFile
  val missingDatabase =
      !dataFolder.resolve("frames.db").exists() || !dataFolder.resolve("pictures.db").exists()
  val legacyData =
      plugins.resolve("ImageOnMap/image.db").exists() ||
          plugins.resolve("Gakubuchi-Locker/gakubuchi.db").exists() ||
          plugins.resolve("PaintTools").exists()
  check(!missingDatabase || !legacyData) {
    "旧データがあるため OyasaiFrames を起動しません。先に移行スクリプト plugins/OyasaiFrames/migration/migrate_frames_pictures.py を実行してください。"
  }
}

internal val OWNER_KEY = NamespacedKey("gakubuchi-locker", "owner")
internal val PAINT_ID_KEY = NamespacedKey("painttools", "id")

internal fun frameOwner(dbOwner: UUID?, pdcOwner: String?): UUID? =
    dbOwner ?: pdcOwner?.let { runCatching { UUID.fromString(it) }.getOrNull() }

internal fun mayModify(owner: UUID?, player: UUID, isOp: Boolean): Boolean =
    owner == null || owner == player || isOp
