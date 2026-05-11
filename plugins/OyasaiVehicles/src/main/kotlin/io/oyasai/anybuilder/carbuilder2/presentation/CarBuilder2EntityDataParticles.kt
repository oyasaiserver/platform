package io.oyasaiserver.anybuilder.carbuilder2.presentation

import io.oyasaiserver.anybuilder.carbuilder2.CarBuilder2SmokeGUI
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2DisplayType
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2EntityData
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2EntityType
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.Particle
import org.bukkit.Particle.DustOptions
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.util.Vector
import java.util.LinkedHashSet
import kotlin.math.abs
import kotlin.math.min
import kotlin.math.roundToInt

 fun CarBuilder2EntityData.smokeParticleImpl(speed: Double, slipAngle: Float, yaw: Float, player: Player?) {
    if (player == null) return
    if (abs(slipAngle) < 8.5f || speed <= 0.1) return

    val world = this.bodyArmorStands[0].world
    val speedToCount = (speed * 0.025).roundToInt()
    val angleToCount = (1.0E-4f + abs(slipAngle) * 0.1875f).roundToInt()
    val totalCount = speedToCount + angleToCount

    val yawRad = -Math.toRadians(yaw.toDouble())
    val color = CarBuilder2SmokeGUI.getPlayerColor(player.uniqueId)
    val dustOptions = DustOptions(color, 0.75f + min((speed + 0.001) * 3.0, 1.5).toFloat())

    fun spawnWheelSmoke(type: CarBuilder2EntityType) {
        this.display[type]?.forEach { (offset, _) ->
            if (offset.second.z <= 0.0) {
                val loc = this.bodyArmorStands[0].location.clone().add(Vector(offset.second.x, 0.0, offset.second.z).rotateAroundY(yawRad))
                world.spawnParticle(
                    Particle.DUST,
                    loc,
                    totalCount,
                    kotlin.random.Random.nextDouble(1.1) * 0.1,
                    kotlin.random.Random.nextDouble(0.5) * 0.1,
                    kotlin.random.Random.nextDouble(1.1) * 0.1,
                    dustOptions
                )
            }
        }
    }

    spawnWheelSmoke(CarBuilder2EntityType.Wheel)
    spawnWheelSmoke(CarBuilder2EntityType.Wheel2)

    val volume = min(totalCount.toDouble() * 0.025, 1.0).toFloat()
    val pitch1 = (1.0E-4f + abs(slipAngle) * 0.1875f) * 0.0035f
    val soundPitch1 = (125 + kotlin.random.Random.nextInt(21)) * min(pitch1, 0.01f)
    val soundPitch2 = (95 + kotlin.random.Random.nextInt(21)) * min(pitch1, 0.01f)

    world.playSound(this.bodyArmorStands[0].location, Sound.ENTITY_GHAST_SCREAM, SoundCategory.PLAYERS, volume, soundPitch1)
    world.playSound(this.bodyArmorStands[0].location, Sound.ENTITY_GHAST_SCREAM, SoundCategory.PLAYERS, volume, soundPitch2)
}

 fun CarBuilder2EntityData.isLightBlockToListImpl() {
    val lightMaterials = setOf(Material.OCHRE_FROGLIGHT, Material.VERDANT_FROGLIGHT, Material.PEARLESCENT_FROGLIGHT, Material.LANTERN, Material.SOUL_LANTERN, Material.SEA_LANTERN, Material.END_ROD)
    val brakeMaterials = setOf(Material.REDSTONE_BLOCK, Material.RED_NETHER_BRICKS, Material.RED_NETHER_BRICK_SLAB, Material.RED_NETHER_BRICK_STAIRS, Material.CHISELED_NETHER_BRICKS)
    val winkerMaterials = setOf(Material.ORANGE_TERRACOTTA, Material.YELLOW_TERRACOTTA, Material.ORANGE_SHULKER_BOX, Material.YELLOW_SHULKER_BOX)

    CarBuilder2DisplayType.entries.forEach { displayTypeList[it] = LinkedHashSet() }

    for ((type, map) in this.display) {
        for (displaySet in map.values) {
            for (display in displaySet) {
                val material = display.block.placementMaterial
                if (lightMaterials.contains(material)) {
                    displayTypeList[CarBuilder2DisplayType.LightBlock]?.add(display)
                }

                if (type == CarBuilder2EntityType.Body) {
                    if (brakeMaterials.contains(material)) {
                        displayTypeList[CarBuilder2DisplayType.BrakeBlock]?.add(display)
                    }
                    if (winkerMaterials.contains(material)) {
                        val localX = this.displayDef[type]?.get(display)?.translation?.x
                            ?: display.transformation.translation.x
                        if (localX >= 0f) {
                            displayTypeList[CarBuilder2DisplayType.WinkerLeft]?.add(display)
                        } else {
                            displayTypeList[CarBuilder2DisplayType.WinkerRight]?.add(display)
                        }
                    }
                }
            }
        }
    }
}
