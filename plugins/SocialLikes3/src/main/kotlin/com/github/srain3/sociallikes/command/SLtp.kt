package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.gui.AllBuild
import com.github.srain3.sociallikes.gui.UserBuild
import java.time.LocalDateTime
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.block.BlockFace
import org.bukkit.block.BlockFace.*
import org.bukkit.block.data.type.HangingSign
import org.bukkit.block.data.type.Sign
import org.bukkit.block.data.type.WallHangingSign
import org.bukkit.block.data.type.WallSign
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.scheduler.BukkitRunnable

object SLtp : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "sltp") return false
    if (args.isEmpty()) return false
    if (sender !is Player) return false

    if (!Data.loading) {
      // ファイルのロードが終わっていない場合の処理
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
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
      } else if (args[0] == "next") {
        val time =
          userLastTimeStamp[sender.uniqueId]
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + "&r 一度sltpを行ってください".color())
              return true
            }
        val getID =
          AllBuild.timeToNextID(time)
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + "&e 次の新着Likeは有りませんでした".color())
              return true
            }

        Data.getSLData(getID)
          ?: run {
            sender.sendMessage(Tools.socialLikesLOGO + " &cID:${getID}は存在しません".color())
            return true
          }
      } else if (args[0] == "unext") {
        val time =
          userLastTimeStamp[sender.uniqueId]
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + "&r 一度sltpを行ってください".color())
              return true
            }
        val getOwnerUUID =
          AllBuild.timeToUser(time)
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + "&c 情報が欠けているためユーザーの次の建築を返せませんでした".color())
              return true
            }
        val getID =
          UserBuild.timeToNextID(time, getOwnerUUID)
            ?: run {
              sender.sendMessage(Tools.socialLikesLOGO + "&e 次の新着Likeは有りませんでした".color())
              return true
            }

        Data.getSLData(getID)
          ?: run {
            sender.sendMessage(Tools.socialLikesLOGO + " &cID:${getID}は存在しません".color())
            return true
          }
      } else {
        return true
      }

    userLastTimeStamp[sender.uniqueId] = slData.time

    if (slData.loc.world == null) {
      val world = Bukkit.getServer().getWorld(slData.worldName)
      if (world == null) {
        sender.sendMessage(Tools.socialLikesLOGO + " &cID:${slData.id}のワールドが存在しません".color())
        return true
      } else {
        slData.loc.world = world
      }
    }
    val block = slData.loc.block
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
    val slLoc = slData.loc.clone().add(0.5, 0.1, 0.5).apply { setYaw(yaw) }

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

  /** ユーザーごとの最後のsltp対象の時間保存 */
  private val userLastTimeStamp = mutableMapOf<UUID, LocalDateTime>()

  /** ユーザーごとの最後のsltp対象の時間をファイルへ保存 */
  fun userLastSLTPTimeSave() {
    val yml = CustomYaml("lastSLTP-Time.yml")
    userLastTimeStamp.forEach { (uuid, time) -> yml.set(uuid.toString(), time.toString()) }
    yml.save()
  }

  /** ユーザーごとの最後のsltp対象の時間をファイルからロード */
  fun userLastSLTPTimeLoad() {
    val yml = CustomYaml("lastSLTP-Time.yml")
    yml.getKeys(false).forEach { uuidStr ->
      val uuid = UUID.fromString(uuidStr)
      val time = LocalDateTime.parse(yml.getString(uuidStr))
      userLastTimeStamp[uuid] = time
    }
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
