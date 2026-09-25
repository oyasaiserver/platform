package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.BuildTimestamps
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.srain3.sociallikes.gui.AllBuild
import com.github.srain3.sociallikes.gui.UserBuild
import com.github.srain3.sociallikes.resolveWorld
import java.time.LocalDateTime
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.block.BlockFace
import org.bukkit.block.BlockFace.*
import org.bukkit.block.data.type.HangingSign
import org.bukkit.block.data.type.Sign
import org.bukkit.block.data.type.WallHangingSign
import org.bukkit.block.data.type.WallSign
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.scheduler.BukkitRunnable

object SLtp : CommandExecutor, TabCompleter {
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String> =
      when {
        command.name == "sla" ->
            if (args.size == 1) completions(args[0], emptyList(), "[1-10]") else mutableListOf()
        args.size == 1 ->
            completions(args[0], listOf("next", "back", "unext", "uback", "new"), "<ID>")
        args.size == 2 ->
            if (args[0] == "new") completions(args[1], emptyList(), "[1-10]") else mutableListOf()
        else -> mutableListOf()
      }

  private const val MAX_HISTORY = 10

  private data class SignEvent(val time: LocalDateTime, val signId: Int)

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "sltp" && command.name != "sla") return false
    if (command.name == "sltp" && args.isEmpty()) return false
    if (sender !is Player) return false

    if (!Data.loading) {
      // ファイルのロードが終わっていない場合の処理
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }

    // /sla（/alw）は統合版で打ちやすい /sltp new の短縮形
    if (command.name == "sla") {
      teleportRecent(sender, args.toList())
      return true
    }
    if (args[0] == "new") {
      teleportRecent(sender, args.drop(1))
      return true
    }

    val id = args[0].toIntOrNull()

    val slData =
        if (id != null) {
          Data.getSLData(id)
              ?: run {
                sender.sendMessage(Tools.socialLikesLOGO + " &cID:${id}は存在しません".color())
                return true
              }
        } else if (
            args[0] == "next" || args[0] == "back" || args[0] == "unext" || args[0] == "uback"
        ) {
          adjacentSlData(sender, args[0]) ?: return true
        } else {
          return true
        }

    userLastTimeStamp[sender.uniqueId] = slData.time

    if (slData.resolveWorld() == null) {
      sender.sendMessage(Tools.socialLikesLOGO + " &cID:${slData.id}のワールドが存在しません".color())
      return true
    }
    val slLoc = signLocation(slData.loc)

    // Bukkit.dispatchCommand(Bukkit.getConsoleSender(), "tp ${sender.name} ~ ~ ~")
    sender.sendMessage("&6テレポートしています…".color())
    object : BukkitRunnable() {
          override fun run() {
            if (sender.teleport(slLoc, PlayerTeleportEvent.TeleportCause.COMMAND)) {
              sender.sendMessage(
                  Tools.socialLikesLOGO + " &r「${slData.title}」へテレポートしました(ID:${slData.id})".color()
              )
            } else {
              sender.sendMessage(
                  Tools.socialLikesLOGO +
                      " &c何らかの理由で「${slData.title}」へテレポート出来ませんでした(ID:${slData.id})".color()
              )
            }
          }
        }
        .runTaskLater(Tools.plugin, 1)

    return true
  }

  private fun adjacentSlData(
      sender: Player,
      mode: String,
  ): com.github.srain3.sociallikes.datas.SLData? {
    val forward = mode == "next" || mode == "unext"
    val userScoped = mode == "unext" || mode == "uback"
    val time =
        userLastTimeStamp[sender.uniqueId]
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + "&r 一度sltpを行ってください".color())
              return null
            }
    val getID =
        if (userScoped) {
          val owner =
              AllBuild.timeToUser(time)
                  ?: run {
                    val missing =
                        if (forward) "&c 情報が欠けているためユーザーの次の建築を返せませんでした"
                        else "&c 情報が欠けているためユーザーの前の建築を返せませんでした"
                    sender.sendMessage(Tools.socialLikesLOGO + missing.color())
                    return null
                  }
          if (forward) UserBuild.timeToNextID(time, owner) else UserBuild.timeToPrevID(time, owner)
        } else {
          if (forward) AllBuild.timeToNextID(time) else AllBuild.timeToPrevID(time)
        }
            ?: run {
              val missing = if (forward) "&e 次の新着Likeは有りませんでした" else "&e 前の新着Likeは有りませんでした"
              sender.sendMessage(Tools.socialLikesLOGO + missing.color())
              return null
            }
    return Data.getSLData(getID)
        ?: run {
          sender.sendMessage(Tools.socialLikesLOGO + " &cID:${getID}は存在しません".color())
          null
        }
  }

  /** /sltp new [1-10]: 直近に設置・宣伝されたSL看板へテレポートする */
  private fun teleportRecent(sender: Player, args: List<String>) {
    val historyNumber =
        when {
          args.isEmpty() -> 1
          args.size > 1 -> {
            sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /sltp new [1-10]".color())
            return
          }
          else ->
              args[0].toIntOrNull()
                  ?: run {
                    sender.sendMessage(Tools.socialLikesLOGO + " &e使い方: /sltp new [1-10]".color())
                    return
                  }
        }
    if (historyNumber !in 1..MAX_HISTORY) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e指定できる履歴は1〜10です。".color())
      return
    }

    val signEvents =
        buildList {
              Data.getSLDataAll().forEach { add(SignEvent(it.time, it.id)) }
              PublicityHistory.getData().values.forEach { add(SignEvent(it.timeStamp, it.slid)) }
            }
            .mapNotNull { event -> Data.getSLData(event.signId)?.let { event } }
            .sortedByDescending { it.time }
            .take(MAX_HISTORY)

    val event =
        signEvents.getOrNull(historyNumber - 1)
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + " &e指定された履歴の看板はありません。".color())
              return
            }

    Bukkit.dispatchCommand(sender, "sltp ${event.signId}")
  }

  /** 看板の位置に、看板の向きを向いて立つ場所。/sltp とガイドブック案内で共用 */
  fun signLocation(loc: Location): Location {
    val block = loc.block
    val yaw =
        if (!block.isEmpty) {
          when (val blockData = block.blockData) {
            is Sign -> {
              blockData.rotation.toYaw()
            }
            is WallSign -> {
              blockData.facing.toYaw()
            }
            is HangingSign -> {
              blockData.rotation.toYaw()
            }
            is WallHangingSign -> {
              blockData.facing.toYaw()
            }
            else -> {
              0F
            }
          }
        } else {
          0F
        }
    return loc.clone().add(0.5, 0.1, 0.5).apply { setYaw(yaw) }
  }

  /** ユーザーごとの最後のsltp対象の時間保存 */
  private val userLastTimeStamp = mutableMapOf<UUID, LocalDateTime>()
  private var userLastTimeStampLoaded = false

  /** ユーザーごとの最後のsltp対象の時間をファイルへ保存 */
  fun userLastSLTPTimeSave() {
    if (!userLastTimeStampLoaded) return

    val yml = CustomYaml("lastSLTP-Time.yml")
    userLastTimeStamp.forEach { (uuid, time) ->
      yml.set(uuid.toString(), BuildTimestamps.toStored(time))
    }
    yml.save()
  }

  /** ユーザーごとの最後のsltp対象の時間をファイルからロード */
  fun userLastSLTPTimeLoad() {
    userLastTimeStampLoaded = false
    val yml = CustomYaml("lastSLTP-Time.yml")
    val loadedTimeStamps = mutableMapOf<UUID, LocalDateTime>()
    yml.getKeys(false).forEach { uuidStr ->
      val uuid = UUID.fromString(uuidStr)
      val raw = yml.getString(uuidStr) ?: return@forEach
      val time = BuildTimestamps.parseStored(raw) ?: return@forEach
      loadedTimeStamps[uuid] = time
    }
    userLastTimeStamp.clear()
    userLastTimeStamp.putAll(loadedTimeStamps)
    userLastTimeStampLoaded = true
  }

  /** BlockFaceをYawに変換 */
  fun BlockFace.toYaw(): Float {
    return when (this) {
      NORTH -> {
        0F
      }
      EAST -> {
        90F
      }
      SOUTH -> {
        180F
      }
      WEST -> {
        -90F
      }
      NORTH_EAST -> {
        45F
      }
      NORTH_WEST -> {
        -45F
      }
      SOUTH_EAST -> {
        135F
      }
      SOUTH_WEST -> {
        -135F
      }
      WEST_NORTH_WEST -> {
        67.5F
      }
      NORTH_NORTH_WEST -> {
        -22.5F
      }
      NORTH_NORTH_EAST -> {
        22.5F
      }
      EAST_NORTH_EAST -> {
        67.5F
      }
      EAST_SOUTH_EAST -> {
        112.5F
      }
      SOUTH_SOUTH_EAST -> {
        157.5F
      }
      SOUTH_SOUTH_WEST -> {
        -157.5F
      }
      WEST_SOUTH_WEST -> {
        -112.5F
      }
      else -> {
        0F
      }
    }
  }
}
