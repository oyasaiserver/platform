package io.oyasaiserver.anybuilder.carbuilder2.command

import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2BaseCache
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2BaseData
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2BaseDataType
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2Config
import io.oyasaiserver.vehicle.base.VehicleBalanceSettings.sizeLimit
import org.bukkit.command.CommandSender
import org.bukkit.util.Vector
import java.util.Locale

// carbuilder2|cbmenu settings and manager commands
//   delete
//   save <body|wheel|wheel2|headlight> [size]
//   size <type> <value> [auto]
//   offset <type> <index> <x> <y> <z>|del
//   headlight angle <value>|rotateoffset <x> <y> <z>
//   sound <name>
//   spring <value>

 fun CarBuilder2Command.handleCarBuilder2Settings(data: CarBuilder2BaseData?, sender: CommandSender, args: Array<out String>) {
    val name = args[0]
    if (args.size < 2) return
    val subCommand = args[1].lowercase(Locale.ROOT)
    val canManage = sender.canManageCarBuilder2(data)
    val needsManage = subCommand in setOf("delete", "size", "offset", "headlight", "sound", "spring") ||
        (subCommand == "save" && data != null)
    if (needsManage && !canManage) {
        sender.sendMessage(CarBuilder2_PERMISSION_DENIED)
        return
    }

    when (subCommand) {
        "delete" -> {
            if (data?.deleteFiles() == true) {
                CarBuilder2BaseCache.delBaseData(name)
                sender.sendMessage("[CarBuilder2] Deleted $name")
            }
        }
        "save" -> {
            handleCarBuilder2Save(data, sender, args)
        }
        "size" -> {
            val vehicleData = data ?: return
            if (args.size < 4) return
            val baseDataTypeName = args[2].lowercase(Locale.ROOT)
            val baseDataType = parseBaseDataType(baseDataTypeName) ?: run {
                sender.sendMessage("[CarBuilder2] Invalid type! Use body, wheel, wheel2, or headlight")
                return
            }
            val config = vehicleData.config
            val oldSize = config.getSize(baseDataType)
            var size = args[3].toDoubleOrNull() ?: oldSize
            val auto = args.getOrNull(4)?.equals("auto", ignoreCase = true) == true
            if (sizeLimit < size) {
                size = sizeLimit
                sender.sendMessage("[CarBuilder2] Size exceeds limit. Set to $sizeLimit")
            }
            config.setSize(baseDataType, size)
            if (auto && baseDataType == CarBuilder2BaseDataType.Body) {
                scaleAllBodyRelatedValues(config, oldSize, size)
            }
            config.save()
            sender.sendMessage("[CarBuilder2] Set $baseDataTypeName size to $size for $name${if (auto && baseDataType == CarBuilder2BaseDataType.Body) " (auto offset)" else ""}")
        }
        "offset" -> {
            val vehicleData = data ?: return
            if (args.size < 5) return
            val config = vehicleData.config
            val partTypeName = args[2].lowercase(Locale.ROOT)
            val index = args[3].toIntOrNull() ?: 0
            if (args[4].equals("del", ignoreCase = true)) {
                if (!applyCarBuilder2Offset(config, partTypeName, index, null)) return
                config.save()
                sender.sendMessage("[CarBuilder2] Deleted $partTypeName offset $index for $name")
                return
            }

            if (args.size < 7) return
            val x = args[4].toDoubleOrNull() ?: 0.0
            val y = args[5].toDoubleOrNull() ?: 0.0
            val z = args[6].toDoubleOrNull() ?: 0.0
            val offsetVector = Vector(x, y, z)

            if (!applyCarBuilder2Offset(config, partTypeName, index, offsetVector)) return
            config.save()
            sender.sendMessage("[CarBuilder2] Set $partTypeName offset $index: X_$x|Y_$y|Z_$z for $name")
        }
        "headlight" -> {
            val vehicleData = data ?: return
            if (args.size < 3) return
            val config = vehicleData.config
            when (args[2].lowercase(Locale.ROOT)) {
                "angle" -> {
                    if (args.size < 4) return
                    val angle = args[3].toDoubleOrNull() ?: 0.0
                    config.setHeadLightAngle(angle)
                    config.save()
                    sender.sendMessage("[CarBuilder2] Set HeadLightAngle to $angle for $name")
                }

                "rotateoffset" -> {
                    if (args.size < 6) return
                    val x = args[3].toDoubleOrNull() ?: 0.0
                    val y = args[4].toDoubleOrNull() ?: 0.0
                    val z = args[5].toDoubleOrNull() ?: 0.0
                    val offsetVector = Vector(x, y, z)
                    config.setHeadLightRotateOffset(offsetVector)
                    config.save()
                    sender.sendMessage("[CarBuilder2] Set HeadLight rotate offset to X_$x|Y_$y|Z_$z for $name")
                }

                else -> {
                    return
                }
            }
        }
        "sound" -> {
            val vehicleData = data ?: return
            if (args.size < 3) return
            val config = vehicleData.config
            val sound = args[2]
            config.setEGSound(sound)
            config.save()
            sender.sendMessage("[CarBuilder2] Set EGSound to $sound for $name")
        }
        "spring" -> {
            val vehicleData = data ?: return
            if (args.size < 3) return
            val config = vehicleData.config
            val spring = args[2].toDoubleOrNull() ?: 0.05
            config.setSpring(spring)
            config.save()
            sender.sendMessage("[CarBuilder2] Set Spring to $spring for $name")
        }
    }
}

private fun applyCarBuilder2Offset(config: CarBuilder2Config, partTypeName: String, index: Int, offset: Vector?): Boolean {
    when (partTypeName) {
        "body" -> if (offset == null) config.clearBodyOffset() else config.setBodyOffset(offset)
        "seat" -> {
            if (offset == null) config.clearSeatOffset(index) else config.setSeatOffset(index, offset)
        }
        "wheel", "wheel2", "headlight" -> {
            val partType = parseBaseDataType(partTypeName) ?: return false
            if (offset == null) config.clearPartOffset(partType, index) else config.setPartOffset(partType, index, offset)
        }
        else -> return false
    }
    return true
}
