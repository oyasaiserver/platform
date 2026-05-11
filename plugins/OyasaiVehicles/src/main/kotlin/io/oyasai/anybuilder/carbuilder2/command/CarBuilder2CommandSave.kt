package io.oyasaiserver.anybuilder.carbuilder2.command

import com.sk89q.worldedit.WorldEdit
import io.oyasaiserver.canCreateCarBuilder2
import io.oyasaiserver.getEntityLimitByPermission
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2BaseData
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2BaseDataType
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2Config
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2Schematic
import org.bukkit.command.CommandSender
import org.bukkit.util.Vector
import java.util.Locale

// carbuilder2|cbmenu <name> save <body|wheel|wheel2|headlight> [size]

 fun CarBuilder2Command.handleCarBuilder2Save(existingData: CarBuilder2BaseData?, sender: CommandSender, args: Array<out String>) {
    val name = args[0]
    executeSaveFlow(
        sender = sender,
        name = name,
        existingData = existingData,
        deniedMessage = CarBuilder2_PERMISSION_DENIED,
        canCreate = { it.canCreateCarBuilder2() },
        busyMessage = "[CarBuilder2] Saving process is already running. Please wait.",
        invalidNameMessage = "[CarBuilder2] Vehicle name can only contain alphanumeric characters and underscores!",
        resolveData = { vehicleName ->
            existingData ?: CarBuilder2BaseData(vehicleName).also { CarBuilder2BaseCache.addBaseData(it) }
        },
        canEdit = { vehicleData, editor -> vehicleData.config.isOwnerOrAdmin(editor) },
        onReady = { player, vehicleData ->
            if (args.size < 3) {
                player.sendMessage("[CarBuilder2] /cbmenu <name> save <body/wheel/wheel2/headlight> [size]")
                endUserTask(player)
            } else {
                val baseDataTypeName = args[2].lowercase(Locale.ROOT)
                val baseDataType = parseBaseDataType(baseDataTypeName)
                if (baseDataType == null) {
                    player.sendMessage("[CarBuilder2] Invalid type! Use body, wheel, wheel2, or headlight")
                    endUserTask(player)
                } else {
                    val size = if (args.size >= 4) args[3].toDoubleOrNull() ?: vehicleData.config.getSize(baseDataType) else vehicleData.config.getSize(baseDataType)
                    val ownerUUID = vehicleData.config.getOwnerUUID() ?: player.uniqueId

                    player.sendMessage("[CarBuilder2] Saving $baseDataTypeName for $name...")
                    CarBuilder2Schematic.saveFile(player, vehicleData, baseDataType, size)

                    runSaveReloadTask(
                        player = player,
                        reloadTask = { vehicleData.reloadData(baseDataType, WorldEdit.getInstance()) },
                        onComplete = {
                            if (!vehicleData.isEmpty()) {
                                vehicleData.config.set("owner", ownerUUID.toString())
                                vehicleData.config.save()
                                player.sendMessage("[CarBuilder2] Finished saving $baseDataTypeName for $name. Entity count: ${vehicleData.totalEntity()}")
                                val entityLimit = player.getEntityLimitByPermission()
                                 if (vehicleData.totalEntity() > entityLimit) {
                                    player.sendMessage("[CarBuilder2] Total entities exceed $entityLimit! Cannot spawn!")
                                }
                            } else {
                                player.sendMessage("[CarBuilder2] Saving finished. (No block data!)")
                            }
                        }
                    )
                }
            }
        },
    )
}

 fun scaleAllBodyRelatedValues(config: CarBuilder2Config, oldBodySize: Double, newBodySize: Double) {
    val scaleRatio = if (oldBodySize != 0.0) newBodySize / oldBodySize else 1.0

    scaleBodyOffset(config, scaleRatio)
    scaleSeatOffsets(config, scaleRatio)
    scalePartOffsets(config, scaleRatio)
    scalePartSizes(config, scaleRatio)
    scaleHeadLightRotateOffset(config, scaleRatio)
}

private fun scaleBodyOffset(config: CarBuilder2Config, scaleRatio: Double) {
    val scaledOffset = scaleVector(config.getOffsetBody(), scaleRatio)
    config.setBodyOffset(scaledOffset)
}

private fun scaleSeatOffsets(config: CarBuilder2Config, scaleRatio: Double) {
    val seatOffsets = config.getSeatList()
    if (!hasMeaningfulOffset(seatOffsets)) return

    val scaledSeatOffsets = seatOffsets.mapValues { (_, value) -> scaleVector(value, scaleRatio) }
    scaledSeatOffsets.forEach { (index, vector) ->
        config.setSeatOffset(index, vector)
    }
}

private fun scalePartOffsets(config: CarBuilder2Config, scaleRatio: Double) {
    OFFSET_AUTO_SCALE_TYPES.forEach { baseDataType ->
        val offsets = config.getOffset(baseDataType)
        if (!hasMeaningfulOffset(offsets)) return@forEach

        val scaledOffsets = offsets.mapValues { (_, value) -> scaleVector(value, scaleRatio) }
        scaledOffsets.forEach { (index, vector) ->
            config.setPartOffset(baseDataType, index, vector)
        }
    }
}

private fun scalePartSizes(config: CarBuilder2Config, scaleRatio: Double) {
    OFFSET_AUTO_SCALE_TYPES.forEach { baseDataType ->
        if (config.hasSize(baseDataType)) {
            config.setSize(baseDataType, config.getSize(baseDataType) * scaleRatio)
        }
    }
}

private fun scaleHeadLightRotateOffset(config: CarBuilder2Config, scaleRatio: Double) {
    val rotateOffset = config.getHeadLightRotateOffset()
    val hasStoredRotateOffset = config.contains("HeadLight.rOffset")
    if (!hasStoredRotateOffset && !hasMeaningfulOffset(rotateOffset)) return

    val scaled = scaleVector(rotateOffset, scaleRatio)
    config.setHeadLightRotateOffset(scaled)
}

private fun scaleVector(vector: Vector, scaleRatio: Double): Vector {
    return Vector(vector.x * scaleRatio, vector.y * scaleRatio, vector.z * scaleRatio)
}

private fun hasMeaningfulOffset(offsetMap: Map<*, Vector>): Boolean {
    return offsetMap.size > 1 || offsetMap.values.any { hasMeaningfulOffset(it) }
}

private fun hasMeaningfulOffset(offset: Vector): Boolean {
    return offset.x != 0.0 || offset.y != 0.0 || offset.z != 0.0
}

 fun parseBaseDataType(type: String): CarBuilder2BaseDataType? {
    return when (type.lowercase(Locale.ROOT)) {
        "body" -> CarBuilder2BaseDataType.Body
        "wheel" -> CarBuilder2BaseDataType.Wheel
        "wheel2" -> CarBuilder2BaseDataType.Wheel2
        "headlight" -> CarBuilder2BaseDataType.HeadLight
        else -> null
    }
}

 fun setPartOffset(config: CarBuilder2Config, type: CarBuilder2BaseDataType, index: Int, vec: Vector) {
    config.setPartOffset(type, index, vec)
}

 fun clearPartOffset(config: CarBuilder2Config, type: CarBuilder2BaseDataType, index: Int) {
    config.clearPartOffset(type, index)
}
