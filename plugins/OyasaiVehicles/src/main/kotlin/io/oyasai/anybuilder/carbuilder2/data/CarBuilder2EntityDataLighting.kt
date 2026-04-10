package io.oyasai.anybuilder.carbuilder2.data

import io.oyasai.VehicleMenuCommand
import io.oyasai.toolbox.ControlKey
import io.oyasai.toolbox.Tools
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.boss.BarColor
import org.bukkit.entity.Display.Brightness
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.Quaternionf

fun CarBuilder2EntityData.updateBarImpl(slipstream: Boolean) {
  val speedKmH = (this.vehicle.speed.z * 100.0).roundToInt()
  val leftWinker = if (this.winkerSwitch.first) "§e◀" else ""
  val rightWinker = if (this.winkerSwitch.second) "§e▶" else ""

  if (this.vehicle.nowGear == 0) {
    this.bossBar.progress = max(this.bossBar.progress * 0.975, 0.1)
    val barColorVal =
        if (this.vehicle.speed.z > 0.0) (if (slipstream) BarColor.YELLOW else BarColor.GREEN)
        else BarColor.RED
    this.bossBar.color = barColorVal
    val title = "$leftWinker| §r§lN速 $speedKmH§r§akm/h §r|$rightWinker"
    this.bossBar.setTitle(Tools.color(title))
  } else {
    var progress =
        this.vehicle.speed.z /
            (if (this.vehicle.nowGear > 0) this.vehicle.gearSpeedList[this.vehicle.nowGear]
            else this.vehicle.speedLimit0 * 0.33)
    progress = progress.coerceIn(-1.0, 1.0)

    val gearStr = if (this.vehicle.nowGear == -1) "R" else this.vehicle.nowGear.toString()
    var cruiseStr = ""

    if (abs(progress) <= 0.1) {
      progress = abs(progress)
      this.bossBar.color = BarColor.WHITE
      val title = "$leftWinker| &r&l${gearStr}速 $speedKmH km/h &r|$rightWinker"
      this.bossBar.setTitle(Tools.color(title))
    } else {
      val isReverse = progress < 0
      progress = abs(progress)

      if (isReverse) {
        this.bossBar.color = BarColor.RED
        val title = "$leftWinker| &r&lR速 &c$speedKmH&r&ckm/h &r|$rightWinker"
        this.bossBar.setTitle(Tools.color(title))
      } else {
        val barColorVal =
            when {
              slipstream -> BarColor.YELLOW
              this.vehicle.cruiseMode -> {
                cruiseStr = " &9[CL ${(this.vehicle.cruiseSpeed * 100.0).roundToInt()}km/h]&r"
                BarColor.BLUE
              }
              progress >= 0.925 -> BarColor.RED
              else -> BarColor.GREEN
            }
        this.bossBar.color = barColorVal
        val title = "$leftWinker| &r&l${gearStr}速 &a$speedKmH&r&akm/h$cruiseStr &r|$rightWinker"
        this.bossBar.setTitle(Tools.color(title))
      }
    }
    this.bossBar.progress = progress
  }
}

fun CarBuilder2EntityData.bodyLightTaskImpl(slot: Int, wasd: ControlKey?) {
  val block = this.bodyArmorStands[0].eyeLocation.block
  val skyLight = block.lightFromSky.toInt()
  val blockLight = min(8, block.lightFromBlocks.toInt())
  val brightness = Brightness(blockLight, skyLight)

  if (!VehicleMenuCommand.eventMode) {
    for ((_, map) in this.display) {
      val firstDisplay = map.values.firstOrNull()?.firstOrNull() ?: continue
      if (firstDisplay.brightness != brightness) {
        for (displaySet in map.values) {
          for (display in displaySet) {
            if (displayTypeList[CarBuilder2DisplayType.LightBlock]?.contains(display) == true)
                continue
            if (displayTypeList[CarBuilder2DisplayType.BrakeBlock]?.contains(display) == true)
                continue
            if (displayTypeList[CarBuilder2DisplayType.WinkerLeft]?.contains(display) == true)
                continue
            if (displayTypeList[CarBuilder2DisplayType.WinkerRight]?.contains(display) == true)
                continue
            display.brightness = brightness
          }
        }
      }
    }
  }

  if (slot == 3) {
    this.lightSwitch = !this.lightSwitch
  }

  val lightBrightness = if (this.lightSwitch) Brightness(15, 15) else brightness
  displayTypeList[CarBuilder2DisplayType.LightBlock]?.forEach { it.brightness = lightBrightness }

  this.retractableTask(this.lightSwitch)

  val time = this.bodyArmorStands[0].world.time
  val isNight = time in 12500..23500
  val brakeBaseLight = if (skyLight > 8 && !isNight && !this.lightSwitch) 3 else 6
  val brakeSkyLight = min(6, skyLight)

  val isBraking = wasd == ControlKey.S || wasd == ControlKey.SA || wasd == ControlKey.SD
  val brakeBrightness =
      if (isBraking) Brightness(15, 15)
      else {
        if (this.lightSwitch) Brightness(brakeBaseLight, 6)
        else Brightness(brakeBaseLight, brakeSkyLight)
      }
  displayTypeList[CarBuilder2DisplayType.BrakeBlock]?.forEach { it.brightness = brakeBrightness }

  when (slot) {
    -4 -> this.winkerSwitch = !this.winkerSwitch.first to false
    -3 ->
        this.winkerSwitch =
            if (this.winkerSwitch.first && this.winkerSwitch.second) false to false
            else true to true
    -2 -> this.winkerSwitch = false to !this.winkerSwitch.second
  }

  this.winkerCount = (this.winkerCount + 1) % 16
  val winkerOffBrightness = Brightness(brakeBaseLight, brakeSkyLight)
  val winkerOnBrightness = Brightness(15, 15)

  val leftOn = this.winkerSwitch.first && this.winkerCount >= 8
  val rightOn = this.winkerSwitch.second && this.winkerCount >= 8

  displayTypeList[CarBuilder2DisplayType.WinkerLeft]?.forEach {
    it.brightness = if (leftOn) winkerOnBrightness else winkerOffBrightness
  }
  displayTypeList[CarBuilder2DisplayType.WinkerRight]?.forEach {
    it.brightness = if (rightOn) winkerOnBrightness else winkerOffBrightness
  }

  if ((this.winkerSwitch.first || this.winkerSwitch.second)) {
    val world = this.bodyArmorStands[0].world
    val loc = this.bodyArmorStands[0].location
    if (this.winkerCount == 0) world.playSound(loc, Sound.BLOCK_TRIPWIRE_CLICK_OFF, 1.0f, 0.75f)
    if (this.winkerCount == 8) world.playSound(loc, Sound.BLOCK_TRIPWIRE_CLICK_ON, 1.0f, 1.25f)
  }
}

fun CarBuilder2EntityData.retractableTaskImpl(switch: Boolean) {
  val config = this.baseData.config
  val bodyOffset = config.getOffsetBody()
  val maxAngle = config.getHeadLightAngle().toFloat()
  val rotateOffset = config.getHeadLightRotateOffset()

  if (switch) {
    this.headlightAngle = max(this.headlightAngle - 2.25f, 0f)
  } else {
    this.headlightAngle = min(this.headlightAngle + 2.25f, maxAngle)
  }

  val angleRad = Math.toRadians(this.headlightAngle.toDouble())
  val rotation =
      Quaternionf()
          .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat())
          .rotateX(angleRad.toFloat())

  val headlightMap = this.display[CarBuilder2EntityType.HeadLight] ?: return
  val headlightDef = this.displayDef[CarBuilder2EntityType.HeadLight] ?: return

  for ((offset, displays) in headlightMap) {
    for (display in displays) {
      val defTrans = headlightDef[display] ?: continue
      val translation =
          Vector(
              defTrans.translation.x.toDouble(),
              defTrans.translation.y.toDouble(),
              defTrans.translation.z.toDouble())

      display.transformation =
          Transformation(
              translation
                  .add(rotateOffset)
                  .rotateAroundX(angleRad)
                  .subtract(rotateOffset)
                  .add(offset.second)
                  .add(bodyOffset)
                  .toVector3f()
                  .rotateX(Math.toRadians(this.pitch.toDouble()).toFloat())
                  .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
              rotation,
              display.transformation.scale,
              Quaternionf())
    }
  }
}

fun CarBuilder2EntityData.headLightTaskImpl(yaw: Float) {
  for (loc in this.lightBlockList) {
    if (loc.block.type == Material.LIGHT) {
      loc.block.setType(Material.AIR, false)
    }
  }
  this.lightBlockList.clear()

  if (this.lightSwitch) {
    val loc0 = this.bodyArmorStands[0].location.clone().add(0.0, 0.5, 0.0)
    val skyLight = loc0.block.lightFromSky.toInt()
    val time = this.bodyArmorStands[0].world.time

    if (skyLight <= 8 || time in 12500..23500) {
      val yawRad = Math.toRadians(-yaw.toDouble())
      for (x in -1..1) {
        val sideOffset = Vector(x.toDouble(), 1.03, 0.0).rotateAroundY(yawRad)
        val forward = Vector(x.toDouble() * 0.25, 0.0, 1.0).rotateAroundY(yawRad)
        val start = this.bodyArmorStands[0].location.clone().add(sideOffset)

        var count = 0
        val current = start.clone()
        while (current.add(forward).block.isPassable) {
          count++
          if (count == 15 && current.block.type == Material.AIR) {
            val block = current.block
            block.setBlockData(
                Material.LIGHT.createBlockData {
                  (it as org.bukkit.block.data.type.Light).level = 15
                },
                false)
            this.lightBlockList.add(current.clone())
          }
          if (count > 25) {
            break
          }
        }

        if (count > 1) {
          current.subtract(forward)
          if (current.block.type == Material.AIR) {
            val level = max(8, min(15, count))
            current.block.setBlockData(
                Material.LIGHT.createBlockData {
                  (it as org.bukkit.block.data.type.Light).level = level
                },
                false)
            this.lightBlockList.add(current.clone())
          }
        }
      }
    }
  }
}
