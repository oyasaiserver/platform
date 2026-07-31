package com.github.sahyuya.oyasaiMusic.util

import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.OfflinePlayer
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.plugin.Plugin
import java.util.UUID

/**
 * UI/UX設計書全体で使われる「モブヘッドのプレースホルダー」を
 * 実際のプレイヤースキンヘッドに置換するためのユーティリティ。
 *
 * [org.bukkit.profile.PlayerProfile.update] はスキンテクスチャ解決のためMojang APIへ
 * 問い合わせることがあり得るため、必ず非同期スレッドから呼び出す。
 */
object HeadTextureUtil {

    /** 即時に返せる範囲（ローカルにキャッシュ済みのプロフィール）でひとまずヘッドを作る。 */
    fun placeholderHead(uuid: UUID, name: String?): ItemStack {
        val item = ItemStack(Material.PLAYER_HEAD)
        item.editMeta { meta ->
            meta as SkullMeta
            meta.playerProfile = Bukkit.createProfile(uuid, name)
        }
        return item
    }

    fun headFor(offlinePlayer: OfflinePlayer): ItemStack =
        placeholderHead(offlinePlayer.uniqueId, offlinePlayer.name)

    /**
     * テクスチャ（スキン）を確実に反映させたい場合に使う非同期版。
     * まずキャッシュ状態のヘッドを即時 [onReady] へ渡し、Mojang APIから完全なプロフィールが
     * 取得でき次第、テクスチャ入りのヘッドで再度 [onReady] を呼び出す（呼び出し側は複数回
     * 呼ばれても安全なようにInventoryへの再setItemだけを行うこと）。
     *
     * @param onReady 完成したItemStackを受け取るコールバック（メインスレッドで実行される）
     */
    fun resolveAsync(plugin: Plugin, uuid: UUID, name: String?, onReady: (ItemStack) -> Unit) {
        onReady(placeholderHead(uuid, name))

        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            try {
                val profile = Bukkit.createProfile(uuid, name)
                profile.update().thenAccept { completed ->
                    Bukkit.getScheduler().runTask(plugin, Runnable {
                        val item = ItemStack(Material.PLAYER_HEAD)
                        item.editMeta { meta -> (meta as SkullMeta).playerProfile = completed }
                        onReady(item)
                    })
                }
            } catch (_: Exception) {
                // テクスチャ解決に失敗してもプレースホルダーのまま続行する
            }
        })
    }
}
