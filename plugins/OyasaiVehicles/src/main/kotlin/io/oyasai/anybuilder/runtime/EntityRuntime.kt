package io.oyasai.anybuilder.runtime

import io.oyasai.VehicleMenuCommand
import io.oyasai.toolbox.ControlKey
import io.oyasai.toolbox.Tools
import java.lang.reflect.Method
import org.bukkit.Location
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

object EntityRuntime {
  val displayEntityIds: MutableSet<Int> = mutableSetOf()
  private var packetTickIndex: Int = 0

  private val methodCache = mutableMapOf<Class<*>, Method?>()
  private val getHandleCache = mutableMapOf<Class<*>, Method?>()

  private fun getHandleMethod(clazz: Class<*>): Method? {
    return getHandleCache.getOrPut(clazz) {
      runCatching { clazz.getMethod("getHandle") }.getOrNull()
    }
  }

  private fun getMoveMethod(clazz: Class<*>): Method? {
    return methodCache.getOrPut(clazz) {
      val methodNames = listOf("snapTo", "moveTo", "absMoveTo")
      for (methodName in methodNames) {
        val target =
            (clazz.methods.asSequence() + clazz.declaredMethods.asSequence()).firstOrNull { method
              ->
              method.name == methodName &&
                  method.parameterTypes.size >= 3 &&
                  method.parameterTypes[0] == java.lang.Double.TYPE &&
                  method.parameterTypes[1] == java.lang.Double.TYPE &&
                  method.parameterTypes[2] == java.lang.Double.TYPE
            }
        if (target != null) {
          runCatching { target.isAccessible = true }
          return@getOrPut target
        }
      }
      null
    }
  }

  private fun movePos(entity: Entity, loc: Location) {
    val handleMethod = getHandleMethod(entity.javaClass)
    val handle = handleMethod?.let { runCatching { it.invoke(entity) }.getOrNull() }

    if (handle != null) {
      val target = getMoveMethod(handle.javaClass)
      if (target != null) {
        val args = arrayOfNulls<Any>(target.parameterCount)
        args[0] = loc.x
        args[1] = loc.y
        args[2] = loc.z
        val currentLoc = entity.location
        if (target.parameterCount >= 4) args[3] = currentLoc.yaw
        if (target.parameterCount >= 5) args[4] = currentLoc.pitch
        for (i in 5 until target.parameterCount) {
          val type = target.parameterTypes[i]
          args[i] =
              when {
                type == java.lang.Boolean.TYPE -> false
                type == java.lang.Float.TYPE -> 0.0f
                type == java.lang.Double.TYPE -> 0.0
                type.isPrimitive -> 0
                else -> null
              }
        }
        if (runCatching { target.invoke(handle, *args) }.isSuccess) return
      }
    }

    val delta = loc.clone().subtract(entity.location).toVector()
    if (delta.lengthSquared() > 0.0) {
      entity.velocity = delta
    } else {
      entity.teleport(loc)
    }
  }

  fun setYawAndVelocity(
      setVec: Vector,
      setYaw: Float,
      addYaw: Float,
      bodyArmorStand: MutableList<ArmorStand>,
      seatArmorStand: MutableMap<Pair<Int, ArmorStand>, Vector>,
      players: List<Player>
  ) {
    if (bodyArmorStand.isEmpty()) return
    val leadArmorStand = bodyArmorStand[0]
    val leadLocation = leadArmorStand.location

    val appliedVelocity = setVec.clone()
    if (appliedVelocity.x.isNaN()) appliedVelocity.x = 0.0
    if (appliedVelocity.y.isNaN()) appliedVelocity.y = 0.0
    if (appliedVelocity.z.isNaN()) appliedVelocity.z = 0.0

    for (index in bodyArmorStand.indices) {
      val armorStand = bodyArmorStand[index]
      armorStand.velocity = appliedVelocity
      armorStand.setRotation(setYaw, 0.0f)
      if (index != 0) {
        movePos(armorStand, leadLocation)
      }
    }

    for ((pair, seatOffset) in seatArmorStand) {
      val seatArmorStandEntity = pair.second
      seatArmorStandEntity.setRotation(setYaw, 0.0f)

      val flat = seatOffset.clone()
      flat.y = 0.0
      val distance = Vector().distance(flat) * 0.125 + 1.0
      val targetLocation =
          leadLocation
              .clone()
              .add(
                  seatOffset
                      .clone()
                      .rotateAroundY(
                          -Math.toRadians(setYaw.toDouble() + (addYaw.toDouble() * distance))))
      movePos(seatArmorStandEntity, targetLocation)
    }

    if (addYaw != 0.0f) {
      players.forEach { rotatePlayerYaw(addYaw, it) }
    }
  }

  private fun rotatePlayerYaw(addYaw: Float, player: Player) {
    if (VehicleMenuCommand.camera(player.uniqueId)) {
      player.setRotation(player.eyeLocation.yaw + addYaw, player.eyeLocation.pitch)
    }
  }

  fun getWASD(player: Player?): Pair<ControlKey, Vector>? {
    if (player == null) return null
    val movementInput = player.currentInput
    val playerVelocity = player.velocity.clone()

    val verticalAxis =
        when {
          movementInput.isForward -> 1
          movementInput.isBackward -> -1
          else -> 0
        }
    val horizontalAxis =
        when {
          movementInput.isLeft -> 1
          movementInput.isRight -> -1
          else -> 0
        }

    val controlKey =
        when (verticalAxis to horizontalAxis) {
          1 to 1 -> ControlKey.WA
          1 to -1 -> ControlKey.WD
          1 to 0 -> ControlKey.W
          -1 to 1 -> ControlKey.SA
          -1 to -1 -> ControlKey.SD
          -1 to 0 -> ControlKey.S
          0 to 1 -> ControlKey.A
          0 to -1 -> ControlKey.D
          else -> ControlKey.NONE
        }

    return controlKey to playerVelocity
  }

  fun startPacketTickLoop() {
    Tools.pl?.let {
      object : BukkitRunnable() {
            override fun run() {
              if (Tools.pl?.isEnabled == false) {
                this.cancel()
              } else {
                packetTickIndex = (packetTickIndex + 1) % 4
              }
            }
          }
          .runTaskTimer(it, 0L, 1L)
    }
  }

  val packetTick: Int
    get() = packetTickIndex
}
