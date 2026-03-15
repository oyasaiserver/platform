package me.ankokunsan.entityPose

import java.net.URL
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

object CustomHead {
  @Suppress("DEPRECATION")
  fun get(textureId: String): ItemStack {
    val head = ItemStack(Material.PLAYER_HEAD)
    val meta = head.itemMeta as? SkullMeta ?: return head

    // IDだけ渡された場合にフルURLに補完する
    val urlString =
        if (textureId.startsWith("http")) textureId
        else "http://textures.minecraft.net/texture/$textureId"

    val profile = Bukkit.createPlayerProfile(UUID.randomUUID())
    val textures = profile.textures
    try {
      textures.skin = URL(urlString)
      profile.setTextures(textures)
    } catch (e: Exception) {
      e.printStackTrace()
    }

    meta.ownerProfile = profile
    head.itemMeta = meta
    return head
  }
}
