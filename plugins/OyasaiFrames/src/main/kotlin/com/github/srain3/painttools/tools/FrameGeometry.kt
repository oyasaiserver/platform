package com.github.srain3.painttools.tools

import kotlin.math.PI
import org.bukkit.Location
import org.bukkit.block.BlockFace
import org.bukkit.util.Vector

internal fun faceVec(face: BlockFace): Vector {
  return when (face) {
    BlockFace.NORTH -> Vector(0.0, 0.0, -1.0)
    BlockFace.SOUTH -> Vector(0.0, 0.0, 1.0)
    BlockFace.WEST -> Vector(-1.0, 0.0, 0.0)
    BlockFace.EAST -> Vector(1.0, 0.0, 0.0)
    BlockFace.UP -> Vector(0.0, 1.0, 0.0)
    BlockFace.DOWN -> Vector(0.0, -1.0, 0.0)
    else -> Vector(0.0, 0.0, 0.0)
  }
}

internal fun frameLookVector(eyeLocation: Location): Vector {
  val vec = Vector(0.0, 0.0, 1.0)
  vec.rotateAroundX(PI / 180 * eyeLocation.pitch)
  vec.rotateAroundY(PI / 180 * -eyeLocation.yaw)
  return vec
}
