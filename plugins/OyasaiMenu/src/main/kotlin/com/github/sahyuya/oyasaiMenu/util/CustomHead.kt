package com.github.sahyuya.oyasaiMenu.util

import com.destroystokyo.paper.profile.PlayerProfile
import com.destroystokyo.paper.profile.ProfileProperty
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import java.util.Base64
import java.util.UUID

/**
 * CustomHead
 *
 * カスタムスキンテクスチャ付きのプレイヤーヘッドを生成するユーティリティ。
 *
 * 使い方:
 *   CustomHead.get("c7da319bc006a570c550846c0e8cf6ad88d326ec9f447d5c168228c4d2dd6e27")
 *
 * texture はMinecraftのテクスチャハッシュ文字列 (64文字の16進数)。
 * これはスキンURLの末尾部分: https://textures.minecraft.net/texture/<hash>
 *
 * Paper API の com.destroystokyo.paper.profile.PlayerProfile を使用。
 * pom.xml に paper-api (provided) が宣言されていれば追加依存なし。
 */
object CustomHead {

    /**
     * テクスチャハッシュ指定でプレイヤーヘッドを生成する。
     * @param textureHash Minecraft テクスチャハッシュ (64文字の16進数)
     */
    fun get(textureHash: String): ItemStack {
        val skull = ItemStack(Material.PLAYER_HEAD)
        val meta  = skull.itemMeta as? SkullMeta ?: return skull

        // Base64 エンコードされたテクスチャJSONを構築
        val textureJson = """{"textures":{"SKIN":{"url":"https://textures.minecraft.net/texture/$textureHash"}}}"""
        val textureB64  = Base64.getEncoder().encodeToString(textureJson.toByteArray(Charsets.UTF_8))

        // Paper の PlayerProfile API でテクスチャをセット
        val profile: PlayerProfile = Bukkit.createProfile(UUID.randomUUID())
        profile.setProperty(ProfileProperty("textures", textureB64))
        meta.playerProfile = profile

        skull.itemMeta = meta
        return skull
    }
}