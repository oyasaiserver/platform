package com.github.srain3

import java.util.*
import net.luckperms.api.LuckPermsProvider
import net.luckperms.api.context.ContextManager
import net.luckperms.api.query.QueryOptions
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

@Suppress("DEPRECATION")
class TPswitch : JavaPlugin() {
  override fun onEnable() {
    saveDefaultConfig()
    config
    server.pluginManager.registerEvents(TPevent, this)
    TPevent.playerCmdEvent(this)
  }

  fun onPlayerCheck(targetP: String, senderP: Player): Boolean {
    if (server.getPlayerExact(targetP) != null) {
      val luckperms = LuckPermsProvider.get()
      fun hasPerm(p: Player, permission: String): Boolean {
        if (!p.isOnline) throw IllegalArgumentException("Player is Offile")
        val user = luckperms.userManager.getUser(p.uniqueId)!!
        val contextManager: ContextManager = luckperms.contextManager
        val contextSet = contextManager.getContext(user).orElseGet { contextManager.staticContext }
        val permissionData = user.cachedData.getPermissionData(QueryOptions.contextual(contextSet))
        return permissionData.checkPermission(permission).asBoolean()
      }
      if (!hasPerm(senderP, "tpswitch.tpignore")) {
        if (server.getPlayerExact(targetP) == null) {
          senderP.sendMessage("§e$targetP §6is offline!")
          return true
        }
        if (config.getBoolean("${server.getPlayerExact(targetP)!!.uniqueId}.switch", true)) {
          // TP open (BlackList Check)
          if (config.getBoolean(
              "${server.getPlayerExact(targetP)!!.uniqueId}.BlackList.${senderP.uniqueId}",
              false,
          )) { // BlackList Player!!! TP Cancel!!!
            senderP.sendMessage("§6TPinfo:§e$targetP §6is in closed mode!")
            return true
          } // no BlackList Player
          return false
        } else {
          // TP Close (WhiteList Check)
          if (config.getBoolean(
              "${server.getPlayerExact(targetP)!!.uniqueId}.WhiteList.${senderP.uniqueId}",
              false,
          )) { // WhiteList Player
            return false
          } // no WhiteList Player. TP Cancel!
          senderP.sendMessage("§6TPinfo:§e$targetP §6is in closed mode!")
          return true
        }
      } // ignore permission Player
      return false
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String>? {
    if (sender is Player) {
      if (command.name != "tpset") {
        return mutableListOf()
      }
      when (args.size) {
        1 -> {
          if (args[0].isEmpty()) {
            return Arrays.asList("open", "close", "ok", "ng", "none", "mode", "oklist", "nglist")
          }
          return when (args[0].isNotEmpty()) {
            "ok".startsWith(args[0]) -> {
              Arrays.asList("open", "ok", "oklist")
            }
            "oklist".startsWith(args[0]) -> {
              Arrays.asList("oklist")
            }
            "open".startsWith(args[0]) -> {
              Arrays.asList("open")
            }
            "close".startsWith(args[0]) -> {
              Arrays.asList("close")
            }
            "ng".startsWith(args[0]) -> {
              Arrays.asList("none", "ng", "nglist")
            }
            "nglist".startsWith(args[0]) -> {
              Arrays.asList("nglist")
            }
            "none".startsWith(args[0]) -> {
              Arrays.asList("none")
            }
            "mode".startsWith(args[0]) -> {
              Arrays.asList("mode")
            }
            else -> {
              mutableListOf()
            }
          }
        }
        else -> {}
      }
    }
    return null
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender is Player) {
      val luckperms = LuckPermsProvider.get()
      fun hasPerm(p: Player, permission: String): Boolean {
        if (!p.isOnline) throw IllegalArgumentException("Player is Offile")
        val user = luckperms.userManager.getUser(p.uniqueId)!!
        val contextManager: ContextManager = luckperms.contextManager
        val contextSet = contextManager.getContext(user).orElseGet { contextManager.staticContext }
        val permissionData = user.cachedData.getPermissionData(QueryOptions.contextual(contextSet))
        return permissionData.checkPermission(permission).asBoolean()
      }
      when (args.size) {
        1 -> { // Open|Close to switch
          if (hasPerm(sender, command.permission.toString())) {
            return when (args[0]) {
              "open" -> {
                config.set("${sender.uniqueId}.switch", true)
                sender.sendMessage("§6TPinfo: You teleport mode §9§lOPEN")
                saveConfig()
                true
              }
              "close" -> {
                config.set("${sender.uniqueId}.switch", false)
                sender.sendMessage("§6TPinfo: You teleport mode §c§lCLOSE")
                saveConfig()
                true
              }
              "mode" -> {
                val mode =
                    if (config.getBoolean("${sender.uniqueId}.switch", true)) {
                      "§9§lOPEN"
                    } else {
                      "§c§lCLOSE"
                    }
                sender.sendMessage("§6TPinfo: Your mode is $mode")
                return true
              }
              "oklist" -> {
                val whiteNameList =
                    config
                        .getConfigurationSection("${sender.uniqueId}.WhiteListName")
                        ?.getKeys(false)
                if (whiteNameList == null) {
                  sender.sendMessage("§6TPinfo: Your not WhiteLists")
                  return true
                }
                if (whiteNameList.size == 0) {
                  sender.sendMessage("§6TPinfo: Your not WhiteLists")
                  return true
                } else {
                  val okList = mutableListOf<String>()
                  for (i in 0..whiteNameList.toList().size.minus(1)) {
                    okList += "||§e${whiteNameList.toList()[i]}§r||"
                  }
                  sender.sendMessage(okList.toString())
                  return true
                }
              }
              "nglist" -> {
                val blackNameList =
                    config
                        .getConfigurationSection("${sender.uniqueId}.BlackListName")
                        ?.getKeys(false)
                if (blackNameList == null) {
                  sender.sendMessage("§6TPinfo: Your not BlackLists")
                  return true
                }
                if (blackNameList.size == 0) {
                  sender.sendMessage("§6TPinfo: Your not BlackLists")
                  return true
                } else {
                  val ngList = mutableListOf<String>()
                  for (i in 0..blackNameList.toList().size.minus(1)) {
                    ngList += "||§c${blackNameList.toList()[i]}§r||"
                  }
                  sender.sendMessage(ngList.toString())
                  return true
                }
              }
              else -> {
                sender.sendMessage("§6/tpset <open/close/mode/oklist/nglist>")
                true
              }
            }
          } // 権限ない
          sender.sendMessage("§4No permission!")
          return true
        }
        2 -> { // Black|White to setting
          if (hasPerm(sender, command.permission.toString())) {
            val name = """\.?[a-zA-Z0-9_]*[a-zA-Z0-9_]""".toRegex()
            when {
              args[0] == "ok" -> { // to add WhiteList
                if (name.matches(args[1])) {
                  config.set(
                      "${sender.uniqueId}.WhiteList.${server.getOfflinePlayer(args[1]).uniqueId}",
                      true,
                  )
                  config.set("${sender.uniqueId}.WhiteListName.${args[1]}", true)
                  config.set(
                      "${sender.uniqueId}.BlackList.${server.getOfflinePlayer(args[1]).uniqueId}",
                      null,
                  )
                  config.set("${sender.uniqueId}.BlackListName.${args[1]}", null)
                  sender.sendMessage(
                      "§6TPinfo: You WhiteList add §e${args[1]}\n§6We accept TP from §e${args[1]}")
                  saveConfig()
                  return true
                }
                sender.sendMessage("§cError: §e${args[1]} §6is not supported!")
                return true
              }
              args[0] == "ng" -> { // to add BlackList
                if (name.matches(args[1])) {
                  config.set(
                      "${sender.uniqueId}.BlackList.${server.getOfflinePlayer(args[1]).uniqueId}",
                      true,
                  )
                  config.set("${sender.uniqueId}.BlackListName.${args[1]}", true)
                  config.set(
                      "${sender.uniqueId}.WhiteList.${server.getOfflinePlayer(args[1]).uniqueId}",
                      null,
                  )
                  config.set("${sender.uniqueId}.WhiteListName.${args[1]}", null)
                  sender.sendMessage(
                      "§6TPinfo: You BlackList add §c${args[1]}\n§6We do not accept TP from §c${args[1]}")
                  saveConfig()
                  return true
                }
                sender.sendMessage("§cError: §e${args[1]} §6is not supported!")
                return true
              }
              args[0] == "none" -> { // to remove Black&White Lists
                if (name.matches(args[1])) {
                  config.set(
                      "${sender.uniqueId}.BlackList.${server.getOfflinePlayer(args[1]).uniqueId}",
                      null,
                  )
                  config.set("${sender.uniqueId}.BlackListName.${args[1]}", null)
                  config.set(
                      "${sender.uniqueId}.WhiteList.${server.getOfflinePlayer(args[1]).uniqueId}",
                      null,
                  )
                  config.set("${sender.uniqueId}.WhiteListName.${args[1]}", null)
                  sender.sendMessage(
                      "§6TPinfo: You have removed §e${args[1]} §6from the list\n§e${args[1]} §6is affected by your OPEN/CLOSE")
                  saveConfig()
                  return true
                }
                sender.sendMessage("§cError: §e${args[1]} §6is not supported!")
                return true
              }
              else -> {
                sender.sendMessage("§6/tpset <ok/ng/none> (PlayerName)")
                return true
              }
            }
          } // 権限なし
          sender.sendMessage("§4No permission!")
          return true
        }
      }
    }
    return false
  }

  override fun onDisable() {}
}
