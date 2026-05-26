package io.oyasai.race

import io.oyasai.anybuilder.carbuilder2.CarBuilder2Item
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityList
import io.oyasai.toolbox.CustomYaml
import io.oyasai.toolbox.Tools
import io.oyasai.toolbox.Tools.color
import java.time.LocalDateTime
import java.time.LocalTime
import java.util.*
import org.bukkit.command.BlockCommandSender
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

// timeattack <circuit>                        -> show best times
// timeattack <circuit> start <maxSectors>
// timeattack <circuit> sector <index>
// timeattack <circuit> lap|goal <maxSectors>

data class TimeData(
    val cost: Int,
    val sectorTimes: MutableList<LocalTime> = mutableListOf(),
    val timeNanoLong: MutableList<Long> = mutableListOf(),
) {
  private var finishSwitch: Boolean = false
  private var maxSectorInt: Int = 0

  fun start(maxSI: Int): Boolean {
    if (this.sectorTimes.size == 1) {
      return false
    } else {
      this.sectorTimes.clear()
      this.timeNanoLong.clear()
      this.sectorTimes.add(LocalTime.now())
      this.finishSwitch = false
      this.maxSectorInt = maxSI
      return true
    }
  }

  fun sector(int: Int): LocalTime? {
    if (this.sectorTimes.size != int) {
      return null
    } else {
      val time = LocalTime.now()
      val oldNanoLong = this.sectorTimes.last().toNanoOfDay()
      val newNanoLong = time.toNanoOfDay()
      var sectorNanoLong = newNanoLong - oldNanoLong
      if (sectorNanoLong < 0L) {
        sectorNanoLong = newNanoLong + (86399999999999L - oldNanoLong)
      }

      this.sectorTimes.add(time)
      this.timeNanoLong.add(sectorNanoLong)
      return LocalTime.ofNanoOfDay(sectorNanoLong)
    }
  }

  fun finish(): Pair<LocalTime?, LocalTime?> {
    if (this.sectorTimes.size <= 1) {
      return Pair(null, null)
    } else if (this.finishSwitch) {
      return Pair(null, null)
    } else if (this.maxSectorInt + 1 != this.sectorTimes.size) {
      return Pair(null, null)
    } else {
      val first = this.sector(this.sectorTimes.size)
      val total = LocalTime.ofNanoOfDay(this.timeNanoLong.sum())
      this.finishSwitch = true
      return Pair(first, total)
    }
  }

  fun getTimeNanoList(): List<Long> = this.timeNanoLong.toList()
}

object YamlData {
  private const val dataFolder = "TimeAttackData/"
  private val yamlList = mutableMapOf<Pair<UUID, String>, CustomYaml>()
  val cpList =
      listOf(
          "CP:50",
          "CP:100",
          "CP:200",
          "CP:300",
          "CP:400",
          "CP:500",
          "CP:600",
          "CP:700",
          "CP:800",
          "CP:900",
          "CP:1000",
          "CP:1100",
          "CP:1200",
          "CP:1300",
          "CP:1400",
          "CP:1500",
          "CP:1600",
          "CP:1700",
          "CP:1800",
          "CP:1900",
          "CP:2000",
          "CP:2100",
          "CP:2200",
          "CP:2300",
          "CP:2400",
          "CP:2500",
      )

  fun getCircuitTAData(yaml: CustomYaml, cp: String): List<Long> {
    return yaml.getLongList("$cp.BEST.Time")
  }

  fun getCircuitTABestDay(yaml: CustomYaml, cp: String): String {
    return yaml.getString("$cp.BEST.Day") ?: "None"
  }

  fun getUserYaml(circuit: String, uuid: UUID): CustomYaml {
    return yamlList.getOrPut(Pair(uuid, circuit)) { CustomYaml("$dataFolder$circuit/$uuid.yml") }
  }

  fun setTimeData(circuit: String, uuid: UUID, data: TimeData): Boolean {
    val yaml = getUserYaml(circuit, uuid)
    val cp = TimeAttackCommand.costRateConvert(data.cost)
    val bestTime = getCircuitTAData(yaml, cp)
    val totalBestTime = bestTime.sum()
    val totalCurrentTime = data.getTimeNanoList().sum()

    if (totalBestTime <= totalCurrentTime && totalBestTime != 0L) {
      return false
    } else {
      yaml.set("$cp.BEST.Time", data.getTimeNanoList())
      yaml.set("$cp.BEST.Day", LocalDateTime.now().format(Tools.ldtFormat))
      yaml.save()
      return true
    }
  }

  fun sendBestTimes(player: Player, circuit: String) {
    val yaml = getUserYaml(circuit, player.uniqueId)

    for (cp in cpList) {
      val bestTime = getCircuitTAData(yaml, cp)
      if (bestTime.isNotEmpty()) {
        val day = getCircuitTABestDay(yaml, cp)
        val totalTime = bestTime.sum()

        player.sendMessage(color("[TA] &9$circuit&7:&r$cp ベストタイム [$day]"))
        player.sendMessage(
            color(
                "[TA] &9$circuit&7:&r$cp ベストタイム &a${LocalTime.ofNanoOfDay(totalTime).format(Tools.timeFormat)}"
            )
        )
      }
    }
  }
}

object TimeAttackCommand : CommandExecutor {
  private val taData = mutableMapOf<Pair<Player, String>, TimeData>()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "timeattack") return false

    if (args.size == 1) {
      if (sender is Player) {
        YamlData.sendBestTimes(sender, args[0])
        return true
      }
    }

    if (sender !is BlockCommandSender) return false
    if (args.size != 3) return false

    val circuit = args[0]
    val subCommand = args[1]
    val sectorInt = args[2].toIntOrNull() ?: 0

    val list = CarBuilder2EntityList.getBodyArmorStandList(null)
    val loc = sender.block.location
    val nearbyEntities = Tools.getNearbyEntities(list, loc, 4.0, 5.0, 4.0)

    if (nearbyEntities.isEmpty()) return true

    val activeKeys = mutableListOf<Pair<Player, String>>()

    for (entity in nearbyEntities) {
      val carData = CarBuilder2EntityList.getCarDataByMainArmorStand(entity.uniqueId) ?: continue
      val item = carData.item ?: continue
      val cost = CarBuilder2Item.getCarVCCost(item) ?: continue
      val driver = CarBuilder2EntityList.getControlPlayer(carData) ?: continue

      val key = Pair(driver, circuit)
      val timeData = taData.getOrPut(key) { TimeData(cost) }

      if (timeData.cost != cost) {
        taData[key] = TimeData(cost)
      }
      activeKeys.add(key)
    }

    if (activeKeys.isEmpty()) return true

    when (subCommand) {
      "start" -> {
        for (key in activeKeys) {
          val timeData = taData[key]
          if (timeData != null && timeData.start(sectorInt)) {
            if (key.first.isOnline) {
              key.first.sendMessage(color("[TA] &9$circuit&7:&rタイムアタックSTART!"))
            }
          }
        }
      }
      "sector" -> {
        for (key in activeKeys) {
          val timeData = taData[key]
          if (timeData != null) {
            val sectorTime = timeData.sector(sectorInt)
            if (sectorTime != null && key.first.isOnline) {
              key.first.sendMessage(
                  color("[TA] &9$circuit&7:&rS$sectorInt &a${sectorTime.format(Tools.timeFormat)}")
              )
            }
          }
        }
      }
      "lap",
      "goal" -> {
        for (key in activeKeys) {
          val timeData = taData[key] ?: continue
          val result = timeData.finish()
          val lastSector = result.first
          val totalTime = result.second

          if (lastSector != null && totalTime != null && key.first.isOnline) {
            val player = key.first
            player.sendMessage(
                color("[TA] &9$circuit&7:&rLS &a${lastSector.format(Tools.timeFormat)}")
            )
            player.sendMessage(
                color("[TA] &9$circuit&7:&rTime &d${totalTime.format(Tools.timeFormat)}")
            )

            if (YamlData.setTimeData(circuit, player.uniqueId, timeData)) {
              player.sendMessage(
                  color("[TA] &9$circuit&7:&b${costRateConvert(timeData.cost)}の自己ベスト更新!")
              )
            }
          }

          if (subCommand == "lap") {
            if (timeData.start(sectorInt) && key.first.isOnline) {
              key.first.sendMessage(color("[TA] &9$circuit&7:&rタイムアタックSTART!"))
            }
          }
        }
      }
    }

    return true
  }

  fun costRateConvert(cost: Int): String {
    return when {
      cost in 0..50 -> "CP:50"
      cost in 51..100 -> "CP:100"
      cost in 101..9999 -> "CP:${(cost / 100 + 1) * 100}"
      else -> "CP:Minus"
    }
  }
}
