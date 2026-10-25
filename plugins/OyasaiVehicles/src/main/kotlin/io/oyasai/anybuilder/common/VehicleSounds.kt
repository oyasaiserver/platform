package io.oyasai.anybuilder.common

import org.bukkit.Location
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.World

internal fun playVehicleStepSounds(
    world: World,
    loc: Location,
    speedVolumeBase: Float,
    speedPitchBase: Float,
    speedPitchRpm: Float,
) {
  world.playSound(
      loc,
      Sound.ENTITY_COW_STEP,
      SoundCategory.PLAYERS,
      0.15f + speedVolumeBase,
      0.5f + speedPitchBase,
  )
  world.playSound(
      loc,
      Sound.ENTITY_HORSE_STEP_WOOD,
      SoundCategory.PLAYERS,
      0.375f + speedVolumeBase,
      0.5f + speedPitchRpm,
  )
}
