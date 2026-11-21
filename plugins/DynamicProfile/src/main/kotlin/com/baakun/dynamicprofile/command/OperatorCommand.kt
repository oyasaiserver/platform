package com.baakun.dynamicprofile.command

import com.baakun.dynamicprofile.DynamicProfile.Companion.allTitles
import com.baakun.dynamicprofile.DynamicProfile.Companion.allUser
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.loadWeeklyLB
import com.baakun.dynamicprofile.leaderBoard.LeaderBoardUtils.weeklyUpdate
import com.baakun.dynamicprofile.model.BehType
import com.baakun.dynamicprofile.model.Calculator
import com.baakun.dynamicprofile.profile.playerTitle.TitleGui
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.createNewTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.deTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.getTitleFromId
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.giveTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.loadTitles
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.removeTitle
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils.saveTitles
import com.baakun.dynamicprofile.util.JsonUtils.gson
import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.util.Tools.levelGroups
import com.baakun.dynamicprofile.util.Tools.plugin
import com.baakun.dynamicprofile.util.Tools.rewardReceiveStatus
import com.baakun.dynamicprofile.util.Tools.saveStats
import com.github.srain3.sociallikes.datas.Data
import java.io.File
import java.nio.charset.StandardCharsets
import java.util.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Statistic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object OperatorCommand : CommandExecutor {

  private fun processUserStats(
      userList: List<UUID>,
      start: Int,
      end: Int,
      blocks: List<Material>,
      userLikes: Map<UUID, Int>,
      userReceiveLikes: Map<UUID, Int>,
      threadName: String,
  ) {
    var num = 0
    for (i in start until end) {
      try {
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
        move += (pl.getStatistic(Statistic.WALK_ON_WATER_ONE_CM) / 100)
        move += (pl.getStatistic(Statistic.WALK_UNDER_WATER_ONE_CM) / 100)
        move += (pl.getStatistic(Statistic.AVIATE_ONE_CM) / 100)
        statsData.distance += move
        statsData.setCount(BehType.MOVE, 0)
        statsData.addCount(BehType.MOVE, move)

        // VEHICLEの移動距離を計算（各種乗り物を含む）
        var vehicle = 0
        vehicle += (pl.getStatistic(Statistic.BOAT_ONE_CM) / 100)
        vehicle += (pl.getStatistic(Statistic.HORSE_ONE_CM) / 100)
        vehicle += (pl.getStatistic(Statistic.PIG_ONE_CM) / 100)
        vehicle += (pl.getStatistic(Statistic.MINECART_ONE_CM) / 100)
        vehicle += (pl.getStatistic(Statistic.STRIDER_ONE_CM) / 100)
        statsData.distance += vehicle
        statsData.setCount(BehType.VEHICLE, 0)
        statsData.addCount(BehType.VEHICLE, vehicle)

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

        val chatCount = statsData.get(BehType.CHAT)
        val chatExp = Calculator.expAmount(BehType.CHAT) * chatCount
        statsData.exp += chatExp

        val voteCount = statsData.get(BehType.VOTE)
        val voteExp = Calculator.expAmount(BehType.VOTE) * voteCount
        statsData.exp += voteExp

        // 既存のVEHICLE数を取得
        val vehicleCount = statsData.get(BehType.VEHICLE)

        // VEHICLE数に応じた経験値を加算
        val vehicleExp = Calculator.expAmount(BehType.VEHICLE) * vehicleCount
        statsData.exp += vehicleExp

        try {
          saveStats(uuid)
        } catch (e: Exception) {
          plugin.logger.warning("[$threadName] ${pl.name} の保存失敗: ${e.message}")
        }

        plugin.logger.info("$threadName: [$num/${userList.size}] ${pl.name} $exp")
      } catch (e: Exception) {
        plugin.logger.severe("[$threadName] ユーザー統計処理エラー (index: $i): ${e.message}")
        e.printStackTrace()
      }
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    // Allow non-player senders; only block commands that require Player-specific APIs.
    val player: Player? = if (sender is Player) sender as Player else null
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
          sender.sendMessage("dpをコンフィグにリロードがしたよ。（日本語不自由）")
        }
        "save" -> {
          if (player == null) {
            sender.sendMessage("このコマンドはプレイヤーから実行してください。")
            return true
          }
          saveStats(player.uniqueId)
        }

        "kakonoEXP" -> {
          if (player == null) {
            sender.sendMessage("このコマンドはプレイヤーから実行してください。")
            return true
          }
          if (args.getOrNull(1) == "kakutei") {
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
          val targetLv = args.getOrNull(1)
          if (targetLv == null) {
            sender.sendMessage(Component.text("使用法: /dpmanager receiveStatus <*|レベル>"))
            return true
          }
          when (targetLv) {
            "*" -> {
              for (key in rewardReceiveStatus.getKeys(false)) {
                rewardReceiveStatus.set(key, mutableListOf<String>())
                sender.sendMessage(Component.text("レベル $key の報酬の受け取り状況をリセットしました。"))
              }
            }
            else -> {
              rewardReceiveStatus.set(targetLv, mutableListOf<String>())
              sender.sendMessage(Component.text("レベル $targetLv の報酬の受け取り状況をリセットしました。"))
            }
          }
          rewardReceiveStatus.save()
        }
        "required" -> {
          val req = args.getOrNull(1)?.toIntOrNull()
          if (req == null || req < 1) {
            sender.sendMessage(Component.text("基本経験値は1以上の整数で指定してください"))
            return true
          }
          plugin.config.set("basicRequired", req)
          plugin.saveConfig()
          sender.sendMessage(Component.text("レベルアップに必要な基本経験値を $req に設定しました"))
        }
        "noticeLvs" -> {
          val lv = args.getOrNull(1)?.toIntOrNull()
          if (lv == null) {
            sender.sendMessage(Component.text("レベルを整数で指定してください"))
            return true
          }
          val lvs = plugin.config.getIntegerList("noticeLvs")
          if (lvs.contains(lv)) {
            lvs.remove(lv)
            sender.sendMessage(Component.text("レベル $lv を、サーバー内に通知するレベルから削除しました"))
          } else {
            lvs.add(lv)
            sender.sendMessage(Component.text("レベル $lv を、サーバー内に通知するレベルに追加しました"))
          }
          plugin.config.set("noticeLvs", lvs)
          plugin.saveConfig()
        }
        "chest" -> {
          if (player == null) {
            sender.sendMessage("このコマンドはプレイヤーから実行してください。")
            return true
          }
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
          sender.sendMessage(Component.text("報酬用チェストを設定しました"))
        }
        "beh" -> {
          val behKey = args.getOrNull(1)
          val amount = args.getOrNull(2)?.toIntOrNull()
          if (behKey == null || amount == null) {
            sender.sendMessage(Component.text("使用法: /dpmanager beh <動作> <経験値(整数)>"))
            return true
          }
          when (behKey) {
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
            "PlayTime" -> {
              plugin.config.set(behKey, amount)
              plugin.saveConfig()
              sender.sendMessage(Component.text("$behKey をした際に得られる経験値を、${amount}に設定しました"))
            }
          }
        }
        "title" -> {
          val arg: String = if (args.size >= 2) args[1] else "list"

          when (arg) {
            "list" -> {
              if (player == null) {
                sender.sendMessage("このコマンドはプレイヤーから実行してください。")
                return true
              }
              TitleGui.showAllTitlesGui(player)
            }
            "owners" -> {
              if (args.size < 3) {
                sender.sendMessage(
                    Component.text("使用法: /op title owners <称号ID>").color(NamedTextColor.RED)
                )
                return true
              }
              val titleId = args[2].toIntOrNull()
              if (titleId == null) {
                sender.sendMessage(Component.text("無効な称号IDです").color(NamedTextColor.RED))
                return true
              }
              if (player == null) {
                sender.sendMessage("このコマンドはプレイヤーから実行してください。")
                return true
              }
              TitleGui.showTitleOwnersGui(player, titleId)
            }
            "player" -> {
              if (player == null) {
                sender.sendMessage("このコマンドはプレイヤーから実行してください。")
                return true
              }
              val targetPlayerName = if (args.size >= 3) args[2] else player.name
              TitleGui.showPlayerTitlesGui(player, targetPlayerName)
            }
            "give" -> {
              val targetName = args.getOrNull(2)
              val titleId = args.getOrNull(3)?.toIntOrNull()
              if (targetName == null || titleId == null) {
                sender.sendMessage("使用法: /dpmanager title give <プレイヤー名> <称号ID>")
                return true
              }
              sender.sendMessage(giveTitle(Bukkit.getOfflinePlayer(targetName).uniqueId, titleId))
            }
            "add" -> {
              val titleName = args.getOrNull(2)
              val rarity = args.getOrNull(3)?.toIntOrNull()
              if (titleName == null || rarity == null) {
                sender.sendMessage("使用法: /dpmanager title add <称号名> <優先度(整数)>")
                return true
              }
              sender.sendMessage(createNewTitle(titleName, rarity))
            }
            "remove" -> {
              val titleId = args.getOrNull(2)?.toIntOrNull()
              if (titleId == null) {
                sender.sendMessage("使用法: /dpmanager title remove <称号ID>")
                return true
              }
              sender.sendMessage(removeTitle(titleId))
            }
            "deprive" -> {
              val targetName = args.getOrNull(2)
              val titleId = args.getOrNull(3)?.toIntOrNull()
              if (targetName == null || titleId == null) {
                sender.sendMessage("使用法: /dpmanager title deprive <プレイヤー名> <称号ID>")
                return true
              }
              sender.sendMessage(deTitle(Bukkit.getOfflinePlayer(targetName).uniqueId, titleId))
            }
            "reload" -> {
              saveTitles()
              loadTitles()
              sender.sendMessage("リロードしました")
            }
            "edit" -> {
              val titleId = args.getOrNull(2)?.toIntOrNull()
              val newName = args.getOrNull(3)
              if (titleId == null || newName == null) {
                sender.sendMessage("使用法: /dpmanager title edit <称号ID> <新しい称号名>")
                return true
              }
              val title = allTitles.get(titleId)
              if (title != null) {
                title.title = newName
                saveTitles()
                sender.sendMessage("称号名を更新しました")
              } else {
                sender.sendMessage("称号が見つかりません")
              }
            }
            "editDesc" -> {
              val titleId = args.getOrNull(2)?.toIntOrNull()
              if (titleId == null || args.size < 4) {
                sender.sendMessage("使用法: /dpmanager title editDesc <称号ID> <説明文...>")
                return true
              }
              val title = allTitles.get(titleId)
              if (title != null) {
                val descList = args.drop(3).toMutableList()
                title.description = descList
                saveTitles()
                sender.sendMessage("称号の説明を更新しました")
              } else {
                sender.sendMessage("称号が見つかりません")
              }
            }
            "get" -> {
              val titleId = args.getOrNull(2)?.toIntOrNull()
              if (titleId == null) {
                sender.sendMessage("使用法: /dpmanager title get <称号ID>")
                return true
              }
              val title = getTitleFromId(titleId)
              sender.sendMessage(title.title)
            }
          }
        }
        "setCount" -> {
          if (args.size < 4) {
            sender.sendMessage("使用法: /dpmanager setCount <UUID> <BehType> <回数>")
            return true
          }
          val uuid = runCatching { UUID.fromString(args[1]) }.getOrNull()
          if (uuid == null) {
            sender.sendMessage("無効なUUIDです: ${args[1]}")
            return true
          }
          val behType =
              runCatching { BehType.valueOf(args[2]) }
                  .getOrElse { runCatching { BehType.valueOf(args[2].uppercase()) }.getOrNull() }
          if (behType == null) {
            sender.sendMessage("無効な動作タイプです: ${args[2]}")
            return true
          }
          val count = args[3].toIntOrNull()
          if (count == null) {
            sender.sendMessage("回数は整数で指定してください: ${args[3]}")
            return true
          }
          val stats = getStats(uuid)
          stats.set(behType, count)
          if (plugin.statsReady) saveStats(uuid)
        }
        "repair" -> {
          val rawUuid = args.getOrNull(1)
          val uuid = rawUuid?.let { runCatching { UUID.fromString(it) }.getOrNull() }
          if (uuid == null) {
            sender.sendMessage("有効なUUIDを指定してください")
            return true
          }
          val recoverFile = File(plugin.dataFolder, "recoverfiles/${uuid}.json")
          if (!recoverFile.exists()) {
            sender.sendMessage("復旧ファイルが見つかりません: ${recoverFile.name}")
            return true
          }
          val currentStats = getStats(uuid)
          val recoverStats: Stats =
              gson.fromJson(recoverFile.readText(StandardCharsets.UTF_8), Stats::class.java)
          currentStats.addAllCounts(recoverStats)
          if (plugin.statsReady) saveStats(uuid)
        }
        "recommendInterval" -> {
          if (args.size == 1) {
            val seconds = plugin.config.getInt("RecommendBroadcastIntervalSeconds", 600)
            sender.sendMessage("現在のおすすめ建築宣伝インターバル: ${seconds}秒")
          } else if (args.size == 2) {
            val newSeconds = args[1].toIntOrNull()
            if (newSeconds == null || newSeconds < 1) {
              sender.sendMessage("インターバルは1分以上の整数で指定してください。")
              return true
            }
            plugin.config.set("RecommendBroadcastIntervalSeconds", newSeconds)
            plugin.saveConfig()
            plugin.reloadConfig()
            val intervalTicks = (newSeconds.coerceAtLeast(1)) * 20L
            plugin.restartRecommendBroadcaster(intervalTicks)
            sender.sendMessage("おすすめ建築宣伝インターバルを${newSeconds}秒に設定しました。")
          } else {
            sender.sendMessage("/dpmanager recommendInterval [秒]")
          }
        }
        "recommendMode" -> {
          if (args.size == 1) {
            val modeConfig = plugin.config.getInt("RecommendBroadcastMode", 0)
            val mode =
                when (modeConfig) {
                  0 -> com.baakun.dynamicprofile.RecommendMode.BUILDING_FIRST
                  1 -> com.baakun.dynamicprofile.RecommendMode.PLAYER_FIRST
                  2 -> com.baakun.dynamicprofile.RecommendMode.HYBRID
                  else -> com.baakun.dynamicprofile.RecommendMode.BUILDING_FIRST
                }
            sender.sendMessage("現在のおすすめ建築モード: ${mode.name}")
            return true
          }
          if (args.size == 2) {
            val modeArg = args[1].uppercase()
            val modeValue =
                when (modeArg) {
                  "BUILDING_FIRST" -> 0
                  "PLAYER_FIRST" -> 1
                  "HYBRID" -> 2
                  else -> null
                }
            if (modeValue != null) {
              plugin.config.set("RecommendBroadcastMode", modeValue)
              plugin.saveConfig()
              plugin.reloadConfig()
              sender.sendMessage("おすすめ建築モードを${modeArg}に設定しました。")
              return true
            } else {
              sender.sendMessage("/dpmanager recommendMode [BUILDING_FIRST|PLAYER_FIRST|HYBRID]")
              return true
            }
          }
        }
        "setEmpty" -> {
          allUser.forEach {
            val recStats = getStats(it)
            var changed = false
            recStats.recommends.forEach { (t, u) ->
              if ((u == 0 || u == -1)) {
                recStats.recommends[t] = Integer.MIN_VALUE
                changed = true
              }
            }
            if (changed) {
              try {
                saveStats(it)
              } catch (e: Exception) {
                plugin.logger.warning("Failed to save data for ${it}: ${e.message}")
                e.printStackTrace()
              }
            }
          }
          plugin.logger.info("Updated all users' empty recommends.")
        }
        "setSpecialFrameInterval" -> {
          if (args.size == 1) {
            val interval = plugin.config.getInt("specialFrameInterval", 3)
            sender.sendMessage("現在の特別枠インターバル: ${interval}回ごと")
          } else if (args.size == 2) {
            val newInterval = args[1].toIntOrNull()
            if (newInterval == null || newInterval < 1) {
              sender.sendMessage("特別枠インターバルは1以上の整数で指定してください。")
              return true
            }
            plugin.config.set("specialFrameInterval", newInterval)
            plugin.saveConfig()
            sender.sendMessage("特別枠インターバルを${newInterval}回ごとに設定しました")
          } else {
            sender.sendMessage("/dpmanager setSpecialFrameInterval [回数]")
          }
          return true
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
      args: Array<out String>,
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
                "recommendInterval",
                "recommendMode",
                "updateLB",
                "save",
                //            "kakonoEXP",
                "setEmpty",
                "setSpecialFrameInterval",
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
                return mutableListOf(
                    "list",
                    "add",
                    "remove",
                    "give",
                    "deprive",
                    "reload",
                    "edit",
                    "owners",
                    "player",
                    "editDesc",
                )
            "repair",
            "setCount" -> return mutableListOf("<UUID>")
            "recommendInterval" -> return mutableListOf("<秒>")
            "recommendMode" -> return mutableListOf("PLAYER_FIRST", "BUILDING_FIRST", "HYBRID")
            "setSpecialFrameInterval" -> return mutableListOf("<回数>")
          //            "kakonoEXP" -> return mutableListOf("kakutei")
          }
        }
        3 -> {
          when (args[0]) {
            "title" -> {
              when (args[1]) {
                "add" -> return mutableListOf("<新しい称号の名前>")
                "edit",
                "remove",
                "owners" -> {
                  val titleId =
                      args[2].toIntOrNull()
                          ?: return allTitles.keys
                              .toList()
                              .map { i: Int -> i.toString() }
                              .toMutableList()
                  val titleText =
                      getTitleFromId(titleId)
                          .title
                          .replace(Regex("&x.{12}"), "")
                          .replace(Regex("&."), "")
                  return mutableListOf(titleText)
                }
                "give",
                "deprive" -> return Bukkit.getOnlinePlayers().map { it.name }.toMutableList()
                "player" -> return Bukkit.getOnlinePlayers().map { it.name }.toMutableList()
                "editDesc" -> {
                  val titleId =
                      args[2].toIntOrNull()
                          ?: return allTitles.keys
                              .toList()
                              .map { i: Int -> i.toString() }
                              .toMutableList()
                  val titleText =
                      getTitleFromId(titleId)
                          .title
                          .replace(Regex("&x.{12}"), "")
                          .replace(Regex("&."), "")
                  return mutableListOf(titleText)
                }
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
                  val titleId =
                      args[2].toIntOrNull()
                          ?: return allTitles.keys
                              .toList()
                              .map { i: Int -> i.toString() }
                              .toMutableList()
                  val titleText =
                      getTitleFromId(titleId)
                          .title
                          .replace(Regex("&x.{12}"), "")
                          .replace(Regex("&."), "")
                  return mutableListOf(titleText)
                }
                "edit" -> {
                  return mutableListOf("新しい称号名")
                }
                "editDesc" -> {
                  val titleId = args[2].toIntOrNull()
                  if (titleId != null && allTitles.containsKey(titleId)) {
                    val title = getTitleFromId(titleId)
                    val description = title.description
                    if (description.isNotEmpty()) {
                      return mutableListOf(description[0])
                    }
                  }
                  return mutableListOf("<説明文の1行目>")
                }
              }
            }
            "setCount" -> return mutableListOf("<Number>")
          }
        }
      }
    }

    if (args != null && args.size >= 5 && args[0] == "title" && args[1] == "editDesc") {
      val titleId = args[2].toIntOrNull()
      if (titleId != null && allTitles.containsKey(titleId)) {
        val title = getTitleFromId(titleId)
        val description = title.description
        val lineNumber = args.size - 4
        if (lineNumber < description.size) {
          return mutableListOf(description[lineNumber])
        }
      }
      val lineNumber = args.size - 3
      return mutableListOf("<説明文の${lineNumber}行目>")
    }

    return null
  }
}
