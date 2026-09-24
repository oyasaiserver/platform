package com.github.srain3.sociallikes.discord

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.datas.SLData
import java.awt.Color
import java.time.format.DateTimeFormatter
import org.bukkit.Bukkit
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
        .thenAccept { discordApi = it }
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
    val textChannel = textChannelOrWarn() ?: return 0L
    val message = textChannel.sendMessage(slEmbed(slData)).join()
    message.addReaction("👍")
    return message.id
  }

  private fun blueMapURL(slData: SLData): String {
    val address = config.getString("Server_IP") ?: return "none"
    val loc = slData.loc
    return "http://$address/#${slData.worldName}:${loc.x.toInt()}:${loc.y.toInt()}:${loc.z.toInt()}:40:0:0:0:0:perspective"
  }

  fun deleteSLToMsg(slData: SLData) {
    if (slData.discordTextID == 0L) return
    Thread {
          try {
            val textChannel = textChannelOrWarn() ?: return@Thread
            val embed =
                EmbedBuilder()
                    .setTitle("【削除済み】【SocialLikes】" + slData.title)
                    .setDescription("ID:${slData.id} (この看板は削除されました)")
                    .addField(
                        "Author: " +
                            (Bukkit.getOfflinePlayer(slData.owner).name ?: "Unknown") +
                            " | ${slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"))}",
                        "Status: 削除済み",
                    )
                    .setColor(Color.GRAY)
            val message = textChannel.getMessageById(slData.discordTextID)
            message.join().edit(embed).join()
          } catch (e: Exception) {
            Tools.plugin.logger.warning("[SL3] Discord deleteSLToMsg edit failed: ${e.message}")
          }
        }
        .start()
  }

  fun changeSLDataToMsg(slData: SLData) {
    if (slData.discordTextID == 0L) return
    Thread {
          val textChannel = textChannelOrWarn() ?: return@Thread
          val message = textChannel.getMessageById(slData.discordTextID)
          message.join().edit(slEmbed(slData)).join()
          return@Thread
        }
        .start()
  }

  private fun textChannelOrWarn() =
      textChID
          ?.let { discordApi?.getTextChannelById(it)?.get() }
          .also {
            if (it == null) {
              Bukkit.getLogger().warning("[SL3] sendSLEmbedMsgのtextChannelがnullです")
            }
          }

  private fun slEmbed(slData: SLData) =
      EmbedBuilder()
          .setTitle("【SocialLikes】" + slData.title)
          .setDescription("ID:${slData.id}")
          .addField(
              "Author: " +
                  Bukkit.getPlayer(slData.owner)?.name +
                  " | ${slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"))}",
              "BlueMap: ${blueMapURL(slData)}",
          )
          .setColor(Color.PINK)
}
