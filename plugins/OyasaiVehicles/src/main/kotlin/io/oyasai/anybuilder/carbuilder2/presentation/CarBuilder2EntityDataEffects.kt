package io.oyasai.anybuilder.carbuilder2.presentation

import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityData
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityType
import io.oyasai.toolbox.ControlKey
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.AxisAngle4f
import org.joml.Quaternionf
import org.joml.Vector3f

fun CarBuilder2EntityData.wheelTaskImpl(speed: Double, handleAngle: Float?) {
  val bodyOffset = this.baseData.config.getOffsetBody()
  this.wheelRPM += speed * 62.8
  this.wheelRPM %= 360.0
  val rpmRad = Math.toRadians(this.wheelRPM)
  val haRad = Math.toRadians(-(handleAngle?.toDouble() ?: 0.0) * (if (this.realMode) 1.0 else 6.3))

  val wheelRotation =
      Quaternionf(AxisAngle4f(haRad.toFloat(), 0f, 1f, 0f))
          .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat())
          .rotateX(rpmRad.toFloat())
  val wheelRotationSimple =
      Quaternionf()
          .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat())
          .rotateX(rpmRad.toFloat())

  fun updateWheelGroup(
      type: CarBuilder2EntityType,
      rotation: Quaternionf,
      rotationWithHa: Quaternionf
  ) {
    val typeMap = this.display[type] ?: return
    val defMap = this.displayDef[type] ?: return

    for ((offset, displays) in typeMap) {
      val isFront = offset.second.z >= 0.0
      val currentRotation = if (isFront) rotationWithHa else rotation

      for (display in displays) {
        val defTrans = defMap[display] ?: continue
        val translation =
            Vector(
                defTrans.translation.x.toDouble(),
                defTrans.translation.y.toDouble(),
                defTrans.translation.z.toDouble())

        val finalTranslation =
            if (isFront) {
              translation.rotateAroundX(rpmRad).rotateAroundY(haRad)
            } else {
              translation.rotateAroundX(rpmRad)
            }

        display.transformation =
            Transformation(
                finalTranslation
                    .add(offset.second)
                    .add(bodyOffset)
                    .toVector3f()
                    .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
                currentRotation,
                display.transformation.scale,
                Quaternionf())
      }
    }
  }

  updateWheelGroup(CarBuilder2EntityType.Wheel, wheelRotationSimple, wheelRotation)
  updateWheelGroup(CarBuilder2EntityType.Wheel2, wheelRotationSimple, wheelRotation)
}

fun CarBuilder2EntityData.setBodyRotateImpl(oldSpeed: Double) {
  val spring = this.baseData.config.getSpring()
  val maxPitch = 0.04f * max(spring / 1.5f, 1.0f)
  this.bodyPitch += (this.vehicle.speed.z.toFloat() - oldSpeed.toFloat()) * spring
  this.bodyPitch *= 0.75f
  this.bodyPitch = this.bodyPitch.coerceIn(-maxPitch, maxPitch)
  if (abs(this.bodyPitch) < 5.0E-4f) this.bodyPitch = 0.0f

  this.pitch = -this.bodyPitch * 50.0f

  val bodyMap = this.display[CarBuilder2EntityType.Body] ?: return
  val bodyDef = this.displayDef[CarBuilder2EntityType.Body] ?: return

  for (displaySet in bodyMap.values) {
    for (blockDisplay in displaySet) {
      val defTrans = bodyDef[blockDisplay] ?: continue
      blockDisplay.transformation =
          Transformation(
              Vector3f(defTrans.translation)
                  .add(this.bodyReOffset.toVector3f())
                  .rotateX(Math.toRadians(this.pitch.toDouble()).toFloat())
                  .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
              Quaternionf()
                  .rotationY(Math.toRadians(this.setYaw.toDouble()).toFloat())
                  .rotateX(Math.toRadians(this.pitch.toDouble()).toFloat()),
              defTrans.scale,
              defTrans.rightRotation)
    }
  }
}

fun CarBuilder2EntityData.soundTaskImpl(wasd: ControlKey?) {
  val world = this.bodyArmorStands[0].world
  val loc = this.bodyArmorStands[0].location
  val roadNoise = min(this.vehicle.speed.z * 0.66, 2.0).toFloat()
  world.playSound(
      loc,
      Sound.ENTITY_WARDEN_AMBIENT,
      SoundCategory.PLAYERS,
      roadNoise * 0.25f,
      0.5f + roadNoise * 0.18f)

  val egSound = this.baseData.config.getEGSound()
  when (egSound) {
    "EV" -> {
      world.playSound(
          loc,
          Sound.BLOCK_AMETHYST_BLOCK_CHIME,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 1.5f,
          0.5f + this.bossBar.progress.toFloat() * 1.5f)
      return
    }
    "Turbo" -> {
      world.playSound(
          loc,
          Sound.ENTITY_BLAZE_SHOOT,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 0.45f + 0.1f,
          0.5f + this.bossBar.progress.toFloat() * 0.7f)
      world.playSound(
          loc,
          Sound.BLOCK_BARREL_CLOSE,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 0.75f + 0.2f,
          0.5f + this.bossBar.progress.toFloat() * 0.4f)

      if (wasd == ControlKey.W || wasd == ControlKey.WA || wasd == ControlKey.WD) {
        this.turboSwitch = true
        this.turboDouble = min(this.turboDouble + 0.03, 2.0)
        world.playSound(
            loc,
            Sound.BLOCK_FIRE_EXTINGUISH,
            SoundCategory.PLAYERS,
            this.turboDouble.toFloat() * 0.125f,
            0.5f + this.turboDouble.toFloat() * 0.35f)

        if (this.vehicle.nowGear != this.turboSlotChange) {
          world.playSound(
              loc,
              Sound.ENTITY_ALLAY_DEATH,
              SoundCategory.PLAYERS,
              this.turboDouble.toFloat(),
              1.75f)
          this.turboDouble *= 0.35
          this.turboSlotChange = this.vehicle.nowGear
        }
        return
      } else {
        if (this.turboSwitch) {
          world.playSound(
              loc,
              Sound.ENTITY_ALLAY_DEATH,
              SoundCategory.PLAYERS,
              this.turboDouble.toFloat(),
              1.75f)
        }
        this.turboSwitch = false
        world.playSound(
            loc,
            Sound.BLOCK_FIRE_EXTINGUISH,
            SoundCategory.PLAYERS,
            this.turboDouble.toFloat() * 0.125f,
            0.5f + this.turboDouble.toFloat() * 0.35f)
        this.turboDouble = if (this.turboDouble <= 0.1) 0.0 else this.turboDouble * 0.75
        return
      }
    }
    "Default2" -> {
      world.playSound(
          loc,
          Sound.ENTITY_BLAZE_SHOOT,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 0.45f + 0.1f,
          0.5f + this.bossBar.progress.toFloat() * 0.7f)
      world.playSound(
          loc,
          Sound.BLOCK_BARREL_CLOSE,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 0.75f + 0.2f,
          0.5f + this.bossBar.progress.toFloat() * 0.4f)
      return
    }
    "Default3" -> {
      world.playSound(
          loc,
          Sound.ENTITY_HORSE_ANGRY,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 0.75f + 0.2f,
          0.8f + this.bossBar.progress.toFloat() * 1.2f)
      world.playSound(
          loc,
          Sound.BLOCK_BARREL_CLOSE,
          SoundCategory.PLAYERS,
          this.bossBar.progress.toFloat() * 0.45f + 0.2f,
          0.5f + this.bossBar.progress.toFloat() * 0.4f)
      return
    }
  }

  world.playSound(
      loc,
      Sound.ENTITY_COW_STEP,
      SoundCategory.PLAYERS,
      this.bossBar.progress.toFloat() * 1.3f + 0.2f,
      0.5f + this.bossBar.progress.toFloat() * 1.5f)
  val speedPitchBase = min(this.vehicle.speed.z * 0.4, 0.5).toFloat()
  val speedVolumeBase = speedPitchBase * 0.4f
  val speedPitchRpm = min(this.vehicle.speed.z * 0.4, 1.0).toFloat()
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
