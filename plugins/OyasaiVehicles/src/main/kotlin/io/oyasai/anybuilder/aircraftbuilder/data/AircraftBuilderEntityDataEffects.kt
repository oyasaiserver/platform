package io.oyasai.anybuilder.aircraftbuilder.data

import io.oyasai.VehicleMenuCommand
import io.oyasai.toolbox.ControlKey
import io.oyasai.toolbox.Tools
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.boss.BarColor
import org.bukkit.entity.Display.Brightness
import org.bukkit.util.Transformation
import org.joml.Quaternionf
import org.joml.Vector3f

fun AircraftBuilderEntityData.soundTaskImpl(wasd: ControlKey?) {
  val world = this.bodyArmorStands[0].world
  val loc = this.bodyArmorStands[0].location
  val speed = this.vehicle.speed.z
  val speedPitchBase = Math.min(speed * 0.4, 0.5).toFloat()
  val speedVolumeBase = speedPitchBase * 0.4f
  val speedPitchRpm = Math.min(speed * 0.4, 1.0).toFloat()
  val roadNoise = Math.min(speed * 0.66, 2.0).toFloat()

  world.playSound(
      loc,
      Sound.ENTITY_WARDEN_AMBIENT,
      SoundCategory.PLAYERS,
      roadNoise * 0.25f,
      0.5f + roadNoise * 0.18f)

  when (wasd) {
    ControlKey.W,
    ControlKey.WA,
    ControlKey.WD -> {
      this.gasDouble += 0.025
      if (this.gasDouble >= 2.0) {
        this.gasDouble = 1.8
      }
    }
    ControlKey.S,
    ControlKey.SA,
    ControlKey.SD -> {
      if (speed <= 0.0) {
        this.gasDouble += 0.0125
        if (this.gasDouble >= 1.2) {
          this.gasDouble = 1.2
        }
      } else {
        this.gasDouble -= 0.05
        if (this.gasDouble <= 0.0) {
          this.gasDouble = 0.0
        }
      }
    }
    else -> {
      this.gasDouble -= 0.05
      if (this.gasDouble <= 0.0) {
        this.gasDouble = 0.0
      }
    }
  }

  world.playSound(
      loc,
      Sound.ENTITY_COW_STEP,
      SoundCategory.PLAYERS,
      this.gasDouble.toFloat() * 0.45f,
      0.5f + this.gasDouble.toFloat())
  world.playSound(
      loc,
      Sound.ENTITY_COW_STEP,
      SoundCategory.PLAYERS,
      0.15f + speedVolumeBase,
      0.5f + speedPitchBase)
  world.playSound(
      loc,
      Sound.ENTITY_HORSE_STEP_WOOD,
      SoundCategory.PLAYERS,
      0.375f + speedVolumeBase,
      0.5f + speedPitchRpm)
}

fun AircraftBuilderEntityData.updateBarImpl() {
  val speed = this.vehicle.speed.z
  var speedString = (speed * 100.0).toInt().toString()
  var per = speed / this.vehicle.speedLimit0
  if (per > 1.0) per = 1.0
  if (per < -1.0) per = -1.0

  if (per in -0.1..0.1) {
    per = Math.abs(per)
    this.bossBar.color = BarColor.WHITE
    speedString = "&r&l$speedString&rkm/h"
  } else if (per >= 0.925) {
    this.bossBar.color = BarColor.RED
    speedString = "&r&l&a$speedString&r&akm/h"
  } else if (per > 0.05) {
    this.bossBar.color = BarColor.GREEN
    speedString = "&r&l&a$speedString&r&akm/h"
  } else if (per < -0.05) {
    per = Math.abs(per)
    this.bossBar.color = BarColor.RED
    speedString = "&r&l&c$speedString&r&ckm/h"
  }

  this.bossBar.progress = per
  this.bossBar.setTitle(Tools.color("| $speedString &r|"))
}

fun AircraftBuilderEntityData.bodyLightTaskImpl() {
  val loc = this.bodyArmorStands[0].eyeLocation
  val sky = loc.block.lightFromSky.toInt()
  val block = Math.min(8, loc.block.lightFromBlocks.toInt())
  val b = Brightness(block, sky)

  if (!VehicleMenuCommand.eventMode) {
    for (displaySet in this.display.values) {
      for (blockDisplay in displaySet) {
        blockDisplay.brightness = b
      }
    }
  }
}

fun AircraftBuilderEntityData.setDisplayRotateImpl() {
  for (displaySet in this.display.values) {
    for (blockDisplay in displaySet) {
      val def = this.displayDef[blockDisplay]
      if (def != null) {
        blockDisplay.setTransformation(
            Transformation(
                Vector3f(def.translation)
                    .add(this.bodyReOffset.toVector3f())
                    .rotateX(Math.toRadians(this.pitch.toDouble()).toFloat())
                    .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
                Quaternionf()
                    .rotationY(Math.toRadians(this.setYaw.toDouble()).toFloat())
                    .rotateX(Math.toRadians(this.pitch.toDouble()).toFloat()),
                def.scale,
                def.rightRotation))
      }
    }
  }
}
