package com.baakun.dynamicprofile

import com.baakun.dynamicprofile.DynamicProfile.Companion.allTitles
import com.baakun.dynamicprofile.Tools.getStats
import com.baakun.dynamicprofile.Tools.levelGroups
import com.baakun.dynamicprofile.Tools.plugin
import com.baakun.dynamicprofile.Tools.rewardReceiveStatus
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.exp.BehType
import com.baakun.dynamicprofile.exp.Calculator
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.loadWeeklyLB
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.weeklyUpdate
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.createNewTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.deTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.giveTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.loadTitles
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.removeTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.saveTitles
import com.github.srain3.sociallikes.datas.Data
import com.google.gson.GsonBuilder
import java.io.File
import java.io.FileWriter
import java.nio.charset.StandardCharsets
import java.util.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.ComponentLike
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

object OperatorCommand : CommandExecutor {
  var last = 0L
  private val gson =
    GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create()

  private fun processUserStats(
    userList: List<UUID>,
    start: Int,
    end: Int,
    blocks: List<Material>,
    userLikes: Map<UUID, Int>,
    userReceiveLikes: Map<UUID, Int>,
    threadName: String,
    player: Player,
  ) {
    var num = 0
    for (i in start until end) {
      val uuid = userList[i]
      num++
      val statsData = getStats(uuid)
      val pl = Bukkit.getOfflinePlayer(uuid)
      statsData.exp = 0

      statsData.setCount(BehType.LIKE, 0)
      statsData.setCount(BehType.RECEIVE_LIKE, 0)

      statsData.addCount(BehType.LIKE, userLikes.getOrDefault(uuid, 0))
      statsData.addCount(BehType.RECEIVE_LIKE, userReceiveLikes.getOrDefault(uuid, 0))

      var blockNum = 0
      for (material in blocks) {
        blockNum += pl.getStatistic(Statistic.USE_ITEM, material)
      }
      statsData.setCount(BehType.PLACE_BLOCK, 0)
      statsData.addCount(BehType.PLACE_BLOCK, blockNum)

      var move = 0
      move += (pl.getStatistic(Statistic.WALK_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.SPRINT_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.FALL_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.CROUCH_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.BOAT_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.WALK_ON_WATER_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.WALK_UNDER_WATER_ONE_CM) / 100)
      move += (pl.getStatistic(Statistic.AVIATE_ONE_CM) / 100)
      statsData.distance += move
      statsData.setCount(BehType.MOVE, 0)
      statsData.addCount(BehType.MOVE, move)

      val fly = ((pl.getStatistic(Statistic.FLY_ONE_CM) / 100))
      statsData.distance += fly
      statsData.setCount(BehType.FLY, 0)
      statsData.addCount(BehType.FLY, fly)

      statsData.setCount(BehType.JUMP, 0)
      statsData.addCount(BehType.JUMP, pl.getStatistic(Statistic.JUMP))

      val exp =
        Calculator.expAmount(BehType.PLAY_TIME) *
          ((pl.getStatistic(Statistic.PLAY_ONE_MINUTE) / 20) / 60)
      statsData.exp += exp

      val file = File(plugin.dataFolder.absolutePath + "/UserStatsJSON/${uuid}.json")
      try {
        file.parentFile?.mkdirs()
        if (!file.exists()) file.createNewFile()
        FileWriter(file).use { writer -> gson.toJson(statsData, writer) }
      } catch (e: Exception) {
        plugin.logger.warning("[$threadName] ${pl.name} の保存失敗: ${e.message}")
      }

      // 100人ごと、または最後の1人のみ進捗ログを出力
      if (num % 100 == 0 || num == userList.size) {
        plugin.logger.info("$threadName: [$num/${userList.size}] ${pl.name} $exp")
      }
    }
  }

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>?,
  ): Boolean {
    if (sender !is Player) return false
    val player: Player = sender
    if (!args.isNullOrEmpty()) {
      when (args[0]) {
        "updateLB" -> {
          weeklyUpdate()
          loadWeeklyLB()
        }
        "reloadConfig" -> {
          plugin.reloadConfig()
          rewardReceiveStatus.reload()
          levelGroups.reload()
          player.sendMessage("dpをコンフィグにリロードがしたよ。（日本語不自由）")
        }
        "save" -> {
          val statsData = getStats(player.uniqueId)
          Bukkit.getScheduler()
            .runTaskAsynchronously(
              plugin,
              Runnable {
                val file =
                  File(plugin.dataFolder.absolutePath + "/UserStatsJSON/${player.uniqueId}.json")
                try {
                  file.parentFile?.mkdirs()
                  if (!file.exists()) file.createNewFile()
                  FileWriter(file).use { writer -> gson.toJson(statsData, writer) }
                } catch (e: Exception) {
                  plugin.logger.warning("保存失敗: ${e.message}")
                }
              },
            )
        }
        "kakonoEXP" -> {
          if (args[1] == "kakutei") {
            Bukkit.getScheduler()
              .runTaskAsynchronously(
                plugin,
                Runnable {
                  try {
                    val allUser: MutableList<UUID> = mutableListOf()
                    val slDatas = Data.getSLDataAll()
                    val userLikes = mutableMapOf<UUID, Int>()
                    val userReceiveLikes = mutableMapOf<UUID, Int>()
                    val allUserLock = Any()
                    val userLikesLock = Any()
                    val userReceiveLikesLock = Any()

                    for (data in slDatas) {
                      for (likeuser in data.likes) {
                        synchronized(allUserLock) {
                          if (!allUser.contains(likeuser)) {
                            allUser.add(likeuser)
                            if (System.currentTimeMillis() - last > 1000) {
                              last = System.currentTimeMillis()
                              plugin.logger.info("working")
                            }
                          }
                        }
                        synchronized(userLikesLock) {
                          userLikes[likeuser] = userLikes.getOrDefault(likeuser, 0) + 1
                        }
                        synchronized(userReceiveLikesLock) {
                          userReceiveLikes[data.owner] =
                            userReceiveLikes.getOrDefault(data.owner, 0) + 1
                        }
                      }
                      synchronized(allUserLock) {
                        if (!allUser.contains(data.owner)) {
                          allUser.add(data.owner)
                          if (System.currentTimeMillis() - last > 1000) {
                            last = System.currentTimeMillis()
                            plugin.logger.info("working.")
                          }
                        }
                      }
                    }
                    player.sendMessage("allUserのサイズ" + allUser.size)

                    val blocks: MutableList<Material> = mutableListOf()
                    for (material in Material.entries) {
                      if (material.isBlock) {
                        blocks.add(material)
                      }
                    }
                    val alllUserSize = allUser.size
                    val half = (alllUserSize + 1) / 2 // 奇数時は切り上げ

                    Bukkit.getScheduler()
                      .runTaskAsynchronously(
                        plugin,
                        Runnable {
                          processUserStats(
                            allUser,
                            0,
                            half,
                            blocks,
                            userLikes,
                            userReceiveLikes,
                            "Thread 1",
                            player,
                          )
                          plugin.server.logger.info("1ブロック目完了しました。")
                          player.sendMessage("1ブロック目かんりょうしました。")
                        },
                      )
                    Bukkit.getScheduler()
                      .runTaskAsynchronously(
                        plugin,
                        Runnable {
                          processUserStats(
                            allUser,
                            half,
                            alllUserSize,
                            blocks,
                            userLikes,
                            userReceiveLikes,
                            "Thread 2",
                            player,
                          )
                          plugin.server.logger.info("2ブロック目完了しました。")
                          player.sendMessage("2ブロック目かんりょうしました。")
                        },
                      )
                  } catch (e: Exception) {
                    e.printStackTrace()
                  }
                },
              )
          }
        }
        "receiveStatus" -> {
          when (args[1]) {
            "*" -> {
              for (key in rewardReceiveStatus.getKeys(false)) {
                rewardReceiveStatus.set(key, mutableListOf<String>())
                player.sendMessage(Component.text("レベル $key の報酬の受け取り状況をリセットしました。"))
              }
            }
            else -> {
              rewardReceiveStatus.set(args[1], mutableListOf<String>())
              player.sendMessage(Component.text("レベル ${args[1]} の報酬の受け取り状況をリセットしました。"))
            }
          }
          rewardReceiveStatus.save()
        }
        "required" -> {
          plugin.config.set("basicRequired", args[1].toInt())
          plugin.saveConfig()
          player.sendMessage(Component.text("レベルアップに必要な基本経験値を ${args[1]} に設定しました"))
        }
        "noticeLvs" -> {
          val lvs = plugin.config.getIntegerList("noticeLvs")
          if (lvs.contains(args[1].toInt())) {
            lvs.remove(args[1].toInt())
            player.sendMessage(Component.text("レベル ${args[1]} を、サーバー内に通知するレベルから削除しました"))
          } else {
            lvs.add(args[1].toInt())
            player.sendMessage(Component.text("レベル ${args[1]} を、サーバー内に通知するレベルに追加しました"))
          }
          plugin.config.set("noticeLvs", lvs)
          plugin.saveConfig()
        }
        "chest" -> {
          if (
            player.getTargetBlock(null, 3).isEmpty ||
              player.getTargetBlock(null, 3).type != Material.CHEST
          )
            return false
          plugin.config.set(
            "RewardChestXYZ",
            arrayListOf(
              player.getTargetBlock(null, 3).x,
              player.getTargetBlock(null, 3).y,
              player.getTargetBlock(null, 3).z,
            ),
          )
          plugin.config.set("RewardChestWorld", player.world.name)
          plugin.saveConfig()
          player.sendMessage(Component.text("報酬用チェストを設定しました"))
        }
        "beh" -> {
          when (args[1]) {
            "Move",
            "Vehicle",
            "Fly",
            "Jump",
            "Block",
            "Vote",
            "Like",
            "ReceiveLike",
            "Join" -> {
              plugin.config.set(args[1], args[2].toInt())
              plugin.saveConfig()
              player.sendMessage(Component.text("${args[1]} をした際に得られる経験値を、${args[2]}に設定しました"))
            }
          }
        }
        "title" -> {
          val arg: String = if (args.size >= 2) args[1] else "list"

          when (arg) {
            "list" -> {
              val titles = allTitles.values.toList()
              val spl = 5
              var page = 0
              if (args.size >= 3) page = (args[2].toIntOrNull()?.minus(1)) ?: 0
              val messages = mutableListOf<ComponentLike>()

              val hes = ItemStack(Material.PAPER)

              hes.addItemFlags(ItemFlag.HIDE_ITEM_SPECIFICS)

              for (i in 0..<spl) {
                val cr = spl * page + i
                if (titles.size <= cr) break

                val title = titles.get(cr)
                val message =
                  Component.text(" - ${title.id} - ${title.title}")
                    .hoverEvent(
                      Component.text("&6[称号] ${title.title}")
                        .appendNewline()
                        .append(Component.text("&a所有者数: &7${title.owners.size}"))
                        .appendNewline()
                        .append(Component.text("&aバリュー(表示優先度): &7${title.rarity}"))
                    )
                messages.add(message)
              }
              player.sendMessage("-------->>すべての称号<<--------")
              messages.forEach { u -> player.sendMessage(u) }
              player.sendMessage("-----------------------------")
            }
            "give" -> {
              player.sendMessage(
                giveTitle(Bukkit.getOfflinePlayer(args[2]).uniqueId, Integer.parseInt(args[3]))
              )
            }
            "add" -> {
              player.sendMessage(createNewTitle(args[2], args[3].toInt()))
            }
            "remove" -> {
              player.sendMessage(removeTitle(Integer.parseInt(args[2])))
            }
            "deprive" -> {
              player.sendMessage(
                deTitle(Bukkit.getOfflinePlayer(args[2]).uniqueId, Integer.parseInt(args[3]))
              )
            }
            "reload" -> {
              saveTitles()
              loadTitles()
              player.sendMessage("リロードしました")
            }
            "edit" -> {
              val title = allTitles.get(Integer.parseInt(args[2]))
              if (title != null) {
                title.title = args[3]
              }
            }
            "get" -> {
              val title = getTitleFromId(Integer.parseInt(args[2]))
              player.sendMessage(title.title)
            }
          }
        }
        "setCount" -> {
          val stats = getStats(UUID.fromString(args[1]))
          stats.set(BehType.valueOf(args[2]), Integer.parseInt(args[3]))
        }
        "repair" -> {
          val uuid = UUID.fromString(args[1])
          val currentStats = getStats(uuid)
          val recoverFile = File(plugin.dataFolder.absolutePath + "/recoverfiles/${uuid}.json")
          val recoverStats: Stats =
            gson.fromJson(recoverFile.readText(StandardCharsets.UTF_8), Stats::class.java)
          currentStats.addAllCounts(recoverStats)
        }
      }
    }

    return true
  }
}

object OperatorCommandCompleter : TabCompleter {
  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>?,
  ): MutableList<String>? {

    if (args != null) {
      when (args.size) {
        1 ->
          return mutableListOf(
            "required",
            "chest",
            "beh",
            "noticeLvs",
            "receiveStatus",
            "reloadConfig",
            "title",
            "setCount",
            "repair",
          )
        2 -> {
          when (args[0]) {
            "required" -> return mutableListOf("100000", "50000")
            "beh" ->
              return mutableListOf(
                "Move",
                "Vehicle",
                "Fly",
                "Jump",
                "Block",
                "Vote",
                "Like",
                "ReceiveLike",
                "Join",
                "Chat",
                "PlayTime",
              )
            "noticeLvs" -> return plugin.config.getStringList("noticeLvs")
            "receiveStatus" -> {
              val list = rewardReceiveStatus.getKeys(false).toMutableList()
              list.add(0, "*")
              return list
            }
            "title" ->
              return mutableListOf("list", "add", "remove", "give", "deprive", "reload", "edit")
            "repair",
            "setCount" -> return mutableListOf("<UUID>")
          }
        }
        3 -> {
          when (args[0]) {
            "title" -> {
              when (args[1]) {
                "add" -> return mutableListOf("<新しい称号の名前>")
                "edit",
                "remove" ->
                  return allTitles.keys.toList().map { i: Int -> i.toString() }.toMutableList()
                "give",
                "deprive" -> return Bukkit.getOnlinePlayers().map { it.name }.toMutableList()
              }
            }
            "setCount" -> return BehType.entries.map { it.name }.toMutableList()
          }
        }
        4 -> {
          when (args[0]) {
            "title" -> {
              when (args[1]) {
                "add" -> {
                  return mutableListOf("<選択画面での表示優先順位>")
                }
                "give",
                "deprive" -> {
                  return allTitles.keys.toList().map { i: Int -> i.toString() }.toMutableList()
                }
                "edit" -> {
                  return mutableListOf("新しい称号名")
                }
              }
            }
            "setCount" -> return mutableListOf("<Number>")
          }
        }
      }
    }

    return null
  }
}
