package icu.oyasai.frames

import com.gakubuchilocker.GakubuchiLockerPlugin
import com.github.srain3.painttools.PaintTools
import icu.oyasai.imageonmap.ImageOnMap
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

internal val OWNER_KEY = NamespacedKey("gakubuchi-locker", "owner")
internal val PAINT_ID_KEY = NamespacedKey("painttools", "id")

internal fun frameOwner(dbOwner: UUID?, pdcOwner: String?): UUID? =
    dbOwner ?: pdcOwner?.let { runCatching { UUID.fromString(it) }.getOrNull() }

internal fun mayModify(owner: UUID?, player: UUID, isOp: Boolean): Boolean =
    owner == null || owner == player || isOp
