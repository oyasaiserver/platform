package io.oyasai.directstate.edit.hand

import io.oyasai.directstate.integration.ItemFrameAccess
import io.oyasai.directstate.update.HangingSupport
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import kotlin.math.abs
import org.bukkit.Art
import org.bukkit.block.BlockFace
import org.bukkit.entity.Entity
import org.bukkit.entity.GlowItemFrame
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Painting
import org.bukkit.util.Vector

internal object HangingEditor {
  sealed interface State {
    val locked: Boolean

    data class Frame(
        val visible: Boolean,
        val glowing: Boolean,
        override val locked: Boolean = false,
    ) : State

    data class Picture(val art: Art, override val locked: Boolean = false) : State
  }

  fun snapshot(entity: Entity): State? =
      when (entity) {
        is ItemFrame ->
            State.Frame(entity.isVisible, entity is GlowItemFrame, HangingSupport.isLocked(entity))
        is Painting -> State.Picture(entity.art, HangingSupport.isLocked(entity))
        else -> null
      }

  fun restore(entity: Entity, state: State): Boolean =
      when {
        entity is ItemFrame && state is State.Frame -> {
          val frame =
              if ((entity is GlowItemFrame) != state.glowing) ItemFrameAccess.switchGlowing(entity)
              else entity
          if (frame != null) {
            frame.isVisible = state.visible
            HangingSupport.setLocked(frame, state.locked)
          }
          frame != null
        }
        entity is Painting && state is State.Picture ->
            entity.setArt(state.art, true).also {
              if (it) HangingSupport.setLocked(entity, state.locked)
            }
        else -> false
      }

  fun edit(entity: Entity, point: Vector, face: BlockFace): Entity? =
      when (entity) {
        is ItemFrame -> {
          if (isBorder(entity, point, face)) {
            entity.isVisible = !entity.isVisible
            entity
          } else if (entity.item.type.isAir) ItemFrameAccess.switchGlowing(entity) else null
        }
        is Painting -> {
          val current = entity.art
          val variants =
              RegistryAccess.registryAccess().getRegistry(RegistryKey.PAINTING_VARIANT).filter {
                it.blockWidth == current.blockWidth && it.blockHeight == current.blockHeight
              }
          val next =
              variants.getOrNull((variants.indexOf(current) + 1) % variants.size.coerceAtLeast(1))
          if (next != null && next != current && entity.setArt(next, true)) entity else null
        }
        else -> null
      }

  /** 額縁の外寸は12px。表面の外周1pxと、裏面を含む側面を扱う。 */
  fun isBorder(frame: ItemFrame, point: Vector, face: BlockFace): Boolean {
    val facing = frame.facing
    if (face != facing) return true
    val box = frame.boundingBox
    val center = box.center
    val innerHalf = 5.0 / 16.0
    return (facing.modX == 0 && abs(point.x - center.x) >= innerHalf) ||
        (facing.modY == 0 && abs(point.y - center.y) >= innerHalf) ||
        (facing.modZ == 0 && abs(point.z - center.z) >= innerHalf)
  }
}
