package io.oyasaiserver.anybuilder.aircraftbuilder.layout

import io.oyasaiserver.VehicleGarageService
import io.oyasaiserver.anybuilder.common.EntityLifecycleCommon
import io.oyasaiserver.anybuilder.runtime.EntityRuntime
import io.oyasaiserver.milepoint.MileageTracker
import io.oyasaiserver.toolbox.Tools
import io.oyasaiserver.anybuilder.aircraftbuilder.data.AircraftBuilderEntityData
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Transformation
import org.joml.Vector3f
import java.util.LinkedHashMap
import java.util.UUID

 fun AircraftBuilderEntityData.saveDefImpl() {
    this.displayDef.clear()
    for (displaySet in this.display.values) {
        for (blockDisplay in displaySet) {
            this.displayDef[blockDisplay] = blockDisplay.transformation
        }
    }
}

 fun AircraftBuilderEntityData.reOffsetDisplayImpl(newOffset: MutableMap<Int, org.bukkit.util.Vector>) {
    val hit = mutableListOf<Pair<Int, org.bukkit.util.Vector>>()

    for (entry in this.display.entries) {
        val data = entry.key
        val newOffsetVec = newOffset[data.first]
        if (newOffsetVec != null) {
            hit.add(data)
            val addVec = newOffsetVec.clone().subtract(data.second)
            this.bodyReOffset.add(addVec)

            for (allDisplay in this.display.values) {
                for (blockDisplay in allDisplay) {
                    blockDisplay.setTransformation(
                        Transformation(
                            Vector3f(blockDisplay.transformation.translation).add(addVec.toVector3f()),
                            blockDisplay.transformation.leftRotation,
                            blockDisplay.transformation.scale,
                            blockDisplay.transformation.rightRotation
                        )
                    )
                }
            }
        }
    }

    for (p in hit) {
        val displaySet = this.display.remove(p)
        if (displaySet != null) {
            newOffset[p.first]?.let { offset ->
                this.display[p.first to offset] = displaySet
            }
        }
    }
}

