package io.oyasai.vehicle.base

import org.bukkit.configuration.file.FileConfiguration

object VehicleBalanceSettings {
  private const val DEFAULT_UPGRADE_COST_LIMIT = -1
  private const val DEFAULT_CAR_OVERSPEED_FRICTION = 0.995
  private const val DEFAULT_CAR_COAST_FRICTION = 0.6
  private const val DEFAULT_CAR_TURN_FRICTION = 0.9965
  private const val DEFAULT_CAR_BRAKE_MULTIPLIER = 1.12
  private const val DEFAULT_AIRCRAFT_COAST_FRICTION = 0.9925
  private const val DEFAULT_AIRCRAFT_TURN_FRICTION = 0.99
  private const val DEFAULT_AIRCRAFT_BRAKE_MULTIPLIER = 1.15
  private const val DEFAULT_VEHICLE_SIZE_LIMIT = 100

  private const val PATH_UPGRADE_COST_LIMIT = "upgradeCostLimit"
  private const val PATH_CAR_OVERSPEED_FRICTION = "vehicleTuning.car.overspeedFriction"
  private const val PATH_CAR_COAST_FRICTION = "vehicleTuning.car.coastFriction"
  private const val PATH_CAR_TURN_FRICTION = "vehicleTuning.car.turnFriction"
  private const val PATH_CAR_BRAKE_MULTIPLIER = "vehicleTuning.car.brakeMultiplier"
  private const val PATH_AIRCRAFT_COAST_FRICTION = "vehicleTuning.aircraft.coastFriction"
  private const val PATH_AIRCRAFT_TURN_FRICTION = "vehicleTuning.aircraft.turnFriction"
  private const val PATH_AIRCRAFT_BRAKE_MULTIPLIER = "vehicleTuning.aircraft.brakeMultiplier"
  private const val PATH_VEHICLE_SIZE_LIMIT = "vehicleSizeLimit"

  @Volatile
  var carOverspeedFriction: Double = DEFAULT_CAR_OVERSPEED_FRICTION
    private set

  @Volatile
  var carCoastFriction: Double = DEFAULT_CAR_COAST_FRICTION
    private set

  @Volatile
  var carTurnFriction: Double = DEFAULT_CAR_TURN_FRICTION
    private set

  @Volatile
  var carBrakeMultiplier: Double = DEFAULT_CAR_BRAKE_MULTIPLIER
    private set

  @Volatile
  var aircraftCoastFriction: Double = DEFAULT_AIRCRAFT_COAST_FRICTION
    private set

  @Volatile
  var aircraftTurnFriction: Double = DEFAULT_AIRCRAFT_TURN_FRICTION
    private set

  @Volatile
  var aircraftBrakeMultiplier: Double = DEFAULT_AIRCRAFT_BRAKE_MULTIPLIER
    private set

  @Volatile
  var upgradeCostLimit: Int = DEFAULT_UPGRADE_COST_LIMIT
    private set

  @Volatile
  var sizeLimit: Int = DEFAULT_VEHICLE_SIZE_LIMIT
    private set

  fun reload(config: FileConfiguration?) {
    upgradeCostLimit = config.readInt(PATH_UPGRADE_COST_LIMIT, DEFAULT_UPGRADE_COST_LIMIT)
    carOverspeedFriction =
        config.readClampedDouble(
            PATH_CAR_OVERSPEED_FRICTION,
            DEFAULT_CAR_OVERSPEED_FRICTION,
            0.0,
            1.0,
        )
    carCoastFriction =
        config.readClampedDouble(PATH_CAR_COAST_FRICTION, DEFAULT_CAR_COAST_FRICTION, 0.0, 1.0)
    carTurnFriction =
        config.readClampedDouble(PATH_CAR_TURN_FRICTION, DEFAULT_CAR_TURN_FRICTION, 0.0, 1.0)
    carBrakeMultiplier =
        config.readMinimumDouble(PATH_CAR_BRAKE_MULTIPLIER, DEFAULT_CAR_BRAKE_MULTIPLIER, 0.0)
    aircraftCoastFriction =
        config.readClampedDouble(
            PATH_AIRCRAFT_COAST_FRICTION,
            DEFAULT_AIRCRAFT_COAST_FRICTION,
            0.0,
            1.0,
        )
    aircraftTurnFriction =
        config.readClampedDouble(
            PATH_AIRCRAFT_TURN_FRICTION,
            DEFAULT_AIRCRAFT_TURN_FRICTION,
            0.0,
            1.0,
        )
    aircraftBrakeMultiplier =
        config.readMinimumDouble(
            PATH_AIRCRAFT_BRAKE_MULTIPLIER,
            DEFAULT_AIRCRAFT_BRAKE_MULTIPLIER,
            0.0,
        )
    sizeLimit =
        config
            .readMinimumDouble(PATH_VEHICLE_SIZE_LIMIT, DEFAULT_VEHICLE_SIZE_LIMIT.toDouble(), 0.0)
            .toInt()
  }

  private fun FileConfiguration?.readInt(path: String, defaultValue: Int): Int =
      this?.getInt(path, defaultValue) ?: defaultValue

  private fun FileConfiguration?.readClampedDouble(
      path: String,
      defaultValue: Double,
      minimum: Double,
      maximum: Double,
  ): Double = readDouble(path, defaultValue).coerceIn(minimum, maximum)

  private fun FileConfiguration?.readMinimumDouble(
      path: String,
      defaultValue: Double,
      minimum: Double,
  ): Double = readDouble(path, defaultValue).coerceAtLeast(minimum)

  private fun FileConfiguration?.readDouble(path: String, defaultValue: Double): Double =
      this?.getDouble(path, defaultValue) ?: defaultValue
}
