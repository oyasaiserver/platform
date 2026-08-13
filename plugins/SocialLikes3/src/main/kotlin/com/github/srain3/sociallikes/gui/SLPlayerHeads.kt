package com.github.srain3.sociallikes.gui

import com.destroystokyo.paper.profile.ProfileProperty
import com.google.gson.JsonParser
import java.net.HttpURLConnection
import java.net.URL
import java.util.Base64
import java.util.Optional
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

object SLPlayerHeads {
  data class ProfileData(val name: String, val textureValue: String?)

  fun isFloodgatePseudoUUID(uuid: UUID): Boolean {
    return uuid.toString().startsWith("00000000-0000-0000-0009-") || isFloodgateId(uuid)
  }

  fun resolveName(uuid: UUID): String? {
    return Bukkit.getPlayer(uuid)?.name
        ?: resolveFloodgateName(uuid)
        ?: try {
          Bukkit.getOfflinePlayer(uuid).name
        } catch (_: Exception) {
          null
        }
  }

  fun createHead(uuid: UUID, profileData: ProfileData): ItemStack {
    return createHead(uuid, profileData.name, profileData.textureValue)
  }

  fun createHead(uuid: UUID, name: String, textureValue: String? = null): ItemStack {
    if (textureValue == null && isFloodgatePseudoUUID(uuid)) {
      return createBedrockFallbackItem(name)
    }

    val item = ItemStack(Material.PLAYER_HEAD)
    val meta = item.itemMeta as SkullMeta
    val onlinePlayer = Bukkit.getPlayer(uuid)

    if (textureValue != null) {
      val profile = Bukkit.createProfile(uuid, profileName(name))
      profile.setProperty(ProfileProperty("textures", textureValue))
      meta.playerProfile = profile
    } else if (onlinePlayer != null) {
      meta.playerProfile = onlinePlayer.playerProfile
    } else {
      try {
        meta.setOwningPlayer(Bukkit.getOfflinePlayer(uuid))
      } catch (_: Exception) {
        val profile = Bukkit.createProfile(uuid, profileName(name))
        meta.playerProfile = profile
      }
    }

    meta.setDisplayName("§f${name} の頭")
    meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
    item.itemMeta = meta
    return item
  }

  fun createOnlineHead(player: Player): ItemStack {
    val item = ItemStack(Material.PLAYER_HEAD)
    val meta = item.itemMeta as SkullMeta
    meta.playerProfile = player.playerProfile
    meta.setDisplayName("§f${player.name} の頭")
    meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
    item.itemMeta = meta
    return item
  }

  fun createUnknownItem(): ItemStack {
    return ItemStack(Material.PLAYER_HEAD).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName("§cUnknown Player")
            addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
          }
    }
  }

  fun createBedrockFallbackItem(name: String? = null): ItemStack {
    return ItemStack(Material.PLAYER_HEAD).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName("§7${name ?: "Bedrock Player"}")
            lore = mutableListOf("§7統合版プレイヤー", "§7スキン情報を取得できませんでした")
            addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
          }
    }
  }

  fun fetchFromSkinsRestorer(uuid: UUID, name: String?): ProfileData? {
    if (name.isNullOrBlank() || !Bukkit.getPluginManager().isPluginEnabled("SkinsRestorer")) {
      return null
    }

    return try {
      val providerClass = Class.forName("net.skinsrestorer.api.SkinsRestorerProvider")
      val api = providerClass.getMethod("get").invoke(null)
      val playerStorage = api.javaClass.getMethod("getPlayerStorage").invoke(api)

      val storedProperty =
          optionalValue(
              playerStorage.javaClass
                  .getMethod("getSkinOfPlayer", UUID::class.java)
                  .invoke(
                      playerStorage,
                      uuid,
                  )
          )
      val property =
          storedProperty
              ?: optionalValue(
                  playerStorage.javaClass
                      .getMethod(
                          "getSkinForPlayer",
                          UUID::class.java,
                          String::class.java,
                          java.lang.Boolean.TYPE,
                      )
                      .invoke(playerStorage, uuid, name, false)
              )
              ?: return null
      val textureValue = property.javaClass.getMethod("getValue").invoke(property) as? String
      textureValue?.let { ProfileData(name, it) }
    } catch (_: Throwable) {
      null
    }
  }

  fun fetchFromPlayerDB(uuid: UUID): ProfileData? {
    return try {
      val cleanUuid = uuid.toString().replace("-", "")
      val url = URL("https://playerdb.co/api/player/minecraft/$cleanUuid")
      val conn = url.openConnection() as HttpURLConnection
      conn.requestMethod = "GET"
      conn.connectTimeout = 3000
      conn.readTimeout = 3000
      conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Minecraft Server / SocialLikes Plugin)")
      conn.setRequestProperty("Accept", "application/json")
      conn.instanceFollowRedirects = true

      if (conn.responseCode != 200) return null

      val response = conn.inputStream.bufferedReader().use { it.readText() }
      val json = JsonParser.parseString(response).asJsonObject

      if (json.get("code")?.asString != "player.found") return null

      val playerObj = json.getAsJsonObject("data").getAsJsonObject("player")
      val username = playerObj.get("username")?.asString ?: return null
      val skinTexture = playerObj.get("skin_texture")?.asString

      ProfileData(username, skinTexture?.let { textureValue(it) })
    } catch (_: Exception) {
      null
    }
  }

  private fun textureValue(texture: String): String {
    if (!texture.startsWith("http://") && !texture.startsWith("https://")) {
      return texture
    }
    val textureJson = """{"textures":{"SKIN":{"url":"$texture"}}}"""
    return Base64.getEncoder().encodeToString(textureJson.toByteArray(Charsets.UTF_8))
  }

  private fun optionalValue(optional: Any?): Any? {
    return (optional as? Optional<*>)?.orElse(null)
  }

  private fun profileName(name: String): String {
    return name.take(16).ifBlank { "Player" }
  }

  private fun isFloodgateId(uuid: UUID): Boolean {
    return try {
      val apiClass = Class.forName("org.geysermc.floodgate.api.FloodgateApi")
      val api = apiClass.getMethod("getInstance").invoke(null)
      api.javaClass.getMethod("isFloodgateId", UUID::class.java).invoke(api, uuid) as? Boolean
          ?: false
    } catch (_: Throwable) {
      false
    }
  }

  private fun resolveFloodgateName(uuid: UUID): String? {
    return try {
      val apiClass = Class.forName("org.geysermc.floodgate.api.FloodgateApi")
      val api = apiClass.getMethod("getInstance").invoke(null)
      val isFloodgatePlayer =
          api.javaClass.getMethod("isFloodgatePlayer", UUID::class.java).invoke(api, uuid)
              as? Boolean ?: false
      if (!isFloodgatePlayer) return null
      val player = api.javaClass.getMethod("getPlayer", UUID::class.java).invoke(api, uuid)
      val correctName = player.javaClass.getMethod("getCorrectUsername").invoke(player) as? String
      correctName ?: player.javaClass.getMethod("getUsername").invoke(player) as? String
    } catch (_: Throwable) {
      null
    }
  }
}
