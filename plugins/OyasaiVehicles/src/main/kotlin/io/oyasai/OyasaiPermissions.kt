package io.oyasaiserver

import io.oyasaiserver.toolbox.Tools
import org.bukkit.command.CommandSender

object OyasaiPermissions {
    const val ADMIN = "oyasaivehicles.admin"
    const val VEHICLE_UNLIMITED = "oyasaivehicles.vehicle.unlimited"

    const val CAR_BUILDER2_USE = "oyasaivehicles.carbuilder2.use"
    const val CAR_BUILDER2_CREATE = "oyasaivehicles.carbuilder2.use.create"
    const val CAR_BUILDER2_RIDE = "oyasaivehicles.carbuilder2.use.ride"

    const val AIRCRAFT_BUILDER_USE = "oyasaivehicles.aircraftbuilder.use"
    const val AIRCRAFT_BUILDER_CREATE = "oyasaivehicles.aircraftbuilder.use.create"
    const val AIRCRAFT_BUILDER_RIDE = "oyasaivehicles.aircraftbuilder.use.ride"
}

fun CommandSender.hasOyasaiAdminPermission(): Boolean = isOp || hasPermission(OyasaiPermissions.ADMIN)

private fun CommandSender.hasAdminOrPermission(permission: String): Boolean {
    return hasOyasaiAdminPermission() || hasPermission(permission)
}

fun CommandSender.getEntityLimitByPermission(): Int {
    val section = Tools.pl?.config?.getConfigurationSection("totalEntityLimit") ?: return 1000
    var max = 0
    for (key in section.getKeys(false)) {
        if (hasPermission(key)) {
            val value = section.getInt(key)
            max = max.coerceAtLeast(value)
        }
    }
    return max
}

fun CommandSender.canHaveUnlimitedVehicles(): Boolean = hasAdminOrPermission(OyasaiPermissions.VEHICLE_UNLIMITED)
fun CommandSender.canUseCarBuilder2(): Boolean = hasAdminOrPermission(OyasaiPermissions.CAR_BUILDER2_USE)
fun CommandSender.canCreateCarBuilder2(): Boolean = canUseCarBuilder2() || hasPermission(OyasaiPermissions.CAR_BUILDER2_CREATE)
fun CommandSender.canRideCarBuilder2(): Boolean = canUseCarBuilder2() || hasPermission(OyasaiPermissions.CAR_BUILDER2_RIDE)
fun CommandSender.canRideCarBuilder2OrAdmin(): Boolean = canRideCarBuilder2()
fun CommandSender.canUseAircraftBuilder(): Boolean = hasAdminOrPermission(OyasaiPermissions.AIRCRAFT_BUILDER_USE)
fun CommandSender.canCreateAircraftBuilder(): Boolean = canUseAircraftBuilder() || hasPermission(OyasaiPermissions.AIRCRAFT_BUILDER_CREATE)
fun CommandSender.canRideAircraftBuilder(): Boolean = canUseAircraftBuilder() || hasPermission(OyasaiPermissions.AIRCRAFT_BUILDER_RIDE)
fun CommandSender.canRideAircraftBuilderOrAdmin(): Boolean = canRideAircraftBuilder()
