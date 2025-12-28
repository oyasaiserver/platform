package icu.oyasai.utilities.oresmelter

import icu.oyasai.utilities.OyasaiUtilities.color
import icu.oyasai.utilities.YamlConfig
import java.util.*
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object OreSmelter : CommandExecutor {
  val toggled = mutableSetOf<UUID>()
  private val config by lazy { YamlConfig("OreSmelter/config.yml", true) }
  private val regex = Regex(""" (to|->) ?""")

  val convertMaterial = mutableMapOf<Material, Material>()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "oresmelter") return false
    if (sender !is Player) return false

    if (args.isEmpty()) {
      sender.sendMessage("&4You must do /oresmelter toggle or status".color())
      return true
    }
    if (args.size == 1) {
      when (args[0]) {
        "toggle" -> {
          if (!sender.hasPermission("ore.smelt.smelt")) return true
          if (toggled.contains(sender.uniqueId)) {
            toggled.remove(sender.uniqueId)
            sender.sendMessage("&2You have toggle ingots drops &coff".color())
          } else {
            toggled.add(sender.uniqueId)
            sender.sendMessage("&2You have toggle ingots drops &aon".color())
          }
          return true
        }
        "status" -> {
          if (toggled.contains(sender.uniqueId)) {
            sender.sendMessage("&2Ingot drops are &aon".color())
          } else {
            sender.sendMessage("&2Ingot drops are &coff".color())
          }
          return true
        }
        "reload" -> {
          if (sender.isOp) {
            reloadConfig()
            sender.sendMessage("&2 config.yml reload.".color())
            return true
          }
        }
      }
    }
    return false
  }

  fun reloadConfig() {
    convertMaterial.clear()
    config.saveDefault()
    config.getStringList("smelter_item_list").forEach { name ->
      val split = name.split(regex)
      if (split.size != 2) return@forEach
      val convertA = Material.getMaterial(split[0].uppercase()) ?: return@forEach
      val convertB = Material.getMaterial(split[1].uppercase()) ?: return@forEach
      convertMaterial[convertA] = convertB
    }
  }
}
