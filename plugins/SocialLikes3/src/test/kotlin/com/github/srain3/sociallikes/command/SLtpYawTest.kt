package com.github.srain3.sociallikes.command

import kotlin.test.Test
import kotlin.test.assertEquals
import org.bukkit.block.BlockFace

class SLtpYawTest {
  @Test
  fun allSixteenDirectionsKeepTheirYawMapping() {
    val expected =
        mapOf(
            BlockFace.NORTH to 0F,
            BlockFace.NORTH_NORTH_EAST to 22.5F,
            BlockFace.NORTH_EAST to 45F,
            BlockFace.EAST_NORTH_EAST to 67.5F,
            BlockFace.EAST to 90F,
            BlockFace.EAST_SOUTH_EAST to 112.5F,
            BlockFace.SOUTH_EAST to 135F,
            BlockFace.SOUTH_SOUTH_EAST to 157.5F,
            BlockFace.SOUTH to 180F,
            BlockFace.SOUTH_SOUTH_WEST to -157.5F,
            BlockFace.SOUTH_WEST to -135F,
            BlockFace.WEST_SOUTH_WEST to -112.5F,
            BlockFace.WEST to -90F,
            BlockFace.WEST_NORTH_WEST to -67.5F,
            BlockFace.NORTH_WEST to -45F,
            BlockFace.NORTH_NORTH_WEST to -22.5F,
        )
    expected.forEach { (face, yaw) -> assertEquals(yaw, SLtp.run { face.toYaw() }, face.name) }
  }
}
