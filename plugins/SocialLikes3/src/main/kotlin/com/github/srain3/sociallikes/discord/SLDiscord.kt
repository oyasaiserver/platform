package com.github.srain3.sociallikes.discord

import com.fren_gor.ultimateAdvancementAPI.advancement.display.AdvancementFrameType
import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.Events
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.gui.AllBuild
import com.github.srain3.sociallikes.gui.UserBuild
import github.scarsz.discordsrv.DiscordSRV
import java.awt.Color
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable
import org.javacord.api.DiscordApi
import org.javacord.api.DiscordApiBuilder
import org.javacord.api.entity.message.embed.EmbedBuilder

/** Discord関連 */
object SLDiscord {
  private var discordApi: DiscordApi? = null

  private lateinit var config: CustomYaml
  private var textChID: Long? = null

  fun enable() {
    config = CustomYaml("DiscordConfig.yml", fromJar = true)
    val token = config.getString("Bot_Token") ?: return
    if (token.isBlank()) {
      Tools.plugin.logger.warning("DiscordConfig.ymlのTokenが空です！")
      return
    }
    val textIDStr = config.getString("TextCH") ?: return
    if (textIDStr.isBlank()) {
      Tools.plugin.logger.warning("DiscordConfig.ymlのTextCHが空です！")
      return
    }
    textChID =
      textIDStr.toLongOrNull()
        ?: kotlin.run {
          Tools.plugin.logger.warning("DiscordConfig.ymlのTextCHのIDが不明です！")
          return
        }

    DiscordApiBuilder()
      .setToken(token)
      .login()
      .thenAccept {
        discordApi = it
        it.addReactionAddListener { event ->
          if (event.channel.id != textChID) return@addReactionAddListener
          if (!event.emoji.equalsEmoji("👍")) {
            return@addReactionAddListener
          }
          val uuid =
            DiscordSRV.getPlugin().accountLinkManager.linkedAccounts[event.userIdAsString]
              ?: return@addReactionAddListener
          val player = Bukkit.getOfflinePlayer(uuid)

          // いいねを行う処理
          if (!Data.loading) return@addReactionAddListener
          val messageID = event.messageId
          val embed = event.channel.getMessageById(messageID)
          val id = embed.get().embeds.first().description.get().replace("ID:", "").toInt()
          val data = Data.getSLData(id) ?: return@addReactionAddListener

          // 良いねを行っているか判断
          if (!data.likes.none { likeUUID -> likeUUID == uuid }) return@addReactionAddListener
          // いいねを行う
          // データに記録・保存する
          data.likes.add(uuid)
          Data.save(data)
          Data.changeUserLikesInt(data.owner, 1)
          AllBuild.updateSLSignData(data)
          UserBuild.updateSLSignData(data)

          object : BukkitRunnable() {
              override fun run() {
                // 制作者がオンラインの場合通知
                val ownerPlayer = Bukkit.getPlayer(data.owner)
                if (ownerPlayer?.isOnline == true) {
                  /*ownerPlayer.spigot().sendMessage(TextComponent(Tools.socialLikesLOGO + "&r「&a${data.title}&7(ID:${id})&r」が ${e.player.name}さんからイイねされました！".color()).apply {
                      this.clickEvent = ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp $id")
                      this.hoverEvent = HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでその建築へテレポート&rします".color()))
                  })*/
                  Tools.advAPI.displayCustomToast(
                    ownerPlayer,
                    ItemStack(Material.OAK_SIGN),
                    Tools.socialLikesLOGOShort +
                      "&a${data.title}&7ID:${id}&r\n${player.name}&7<&rイイね!".color(),
                    AdvancementFrameType.TASK,
                  )
                  ownerPlayer.playSound(ownerPlayer, Sound.ENTITY_PLAYER_LEVELUP, 1F, 1F)
                  if (uuid != data.owner) {
                    Bukkit.dispatchCommand(
                      Bukkit.getConsoleSender(),
                      "tokenmanager:tm add ${ownerPlayer.name} 2",
                    )
                  }
                } else {
                  Events.offlineLikesPoint[data.owner] =
                    (Events.offlineLikesPoint[data.owner] ?: 0) + 2
                }
                val block = data.loc.block.state
                if (block !is Sign) return
                // 看板ブロックへlike数を反映させる
                if (Events.checkMarkRegex.containsMatchIn(block.getSide(Side.FRONT).getLine(3))) {
                  block
                    .getSide(Side.FRONT)
                    .setLine(3, "&7Likes&8: &6${data.likes.count()} &e✓".color())
                  if (player.isOp) {
                    if (!data.check) {
                      data.check = true
                      Data.save(data)
                    }
                  }
                } else {
                  if (player.isOp) {
                    block
                      .getSide(Side.FRONT)
                      .setLine(3, "&7Likes&8: &6${data.likes.count()} &e✓".color())
                    if (!data.check) {
                      data.check = true
                      Data.save(data)
                    }
                  } else {
                    block
                      .getSide(Side.FRONT)
                      .setLine(3, "&7Likes&8: &6${data.likes.count()}".color())
                  }
                }
                block.update()
              }
            }
            .runTask(Tools.plugin)
        }
      }
      .exceptionally { _: Throwable? ->
        // Log a warning when the login to Discord failed (wrong token?)
        Tools.plugin.logger.warning("Failed to connect to Discord! Disabling plugin!")
        null
      }
  }

  fun disable() {
    discordApi?.disconnect()
    discordApi = null
  }

  fun sendSLEmbedMsg(slData: SLData): Long {
    val textChannel = textChID?.let { discordApi?.getTextChannelById(it)?.get() }
    if (textChannel == null) {
      Bukkit.getLogger().warning("[SL3] sendSLEmbedMsgのtextChannelがnullです")
      return 0L
    }
    val embed =
      EmbedBuilder()
        .setTitle("【SocialLikes】" + slData.title)
        .setDescription("ID:${slData.id}")
        .addField(
          "Author: " +
            Bukkit.getPlayer(slData.owner)?.name +
            " | ${slData.time.atZone(ZoneId.of("Asia/Tokyo")).format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"))}",
          "BlueMap: ${blueMapURL(slData.loc)}",
        )
        .setColor(Color.PINK)
    val message = textChannel.sendMessage(embed).join()
    message.addReaction("👍")
    return message.id
  }

  private fun blueMapURL(loc: Location): String {
    val address = config.getString("Server_IP") ?: return "none"
    return "http://$address/#${loc.world.name}:${loc.x.toInt()}:${loc.y.toInt()}:${loc.z.toInt()}:40:0:0:0:0:perspective"
  }

  fun deleteSLToMsg(slData: SLData) {
    if (slData.discordTextID == 0L) return
    Thread {
        val textChannel = textChID?.let { discordApi?.getTextChannelById(it)?.get() }
        if (textChannel == null) {
          Bukkit.getLogger().warning("[SL3] sendSLEmbedMsgのtextChannelがnullです")
          return@Thread
        }
        val message = textChannel.getMessageById(slData.discordTextID).get()
        message.delete("Server内で看板取り消しが行われた為").join()
        return@Thread
      }
      .start()
  }

  fun changeSLDataToMsg(slData: SLData) {
    if (slData.discordTextID == 0L) return
    Thread {
        val textChannel = textChID?.let { discordApi?.getTextChannelById(it)?.get() }
        if (textChannel == null) {
          Bukkit.getLogger().warning("[SL3] sendSLEmbedMsgのtextChannelがnullです")
          return@Thread
        }
        val embed =
          EmbedBuilder()
            .setTitle("【SocialLikes】" + slData.title)
            .setDescription("ID:${slData.id}")
            .addField(
              "Author: " +
                Bukkit.getPlayer(slData.owner)?.name +
                " | ${slData.time.atZone(ZoneId.of("Asia/Tokyo")).format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"))}",
              "BlueMap: ${blueMapURL(slData.loc)}",
            )
            .setColor(Color.PINK)
        val message = textChannel.getMessageById(slData.discordTextID)
        message.join().edit(embed).join()
        return@Thread
      }
      .start()
  }
}
