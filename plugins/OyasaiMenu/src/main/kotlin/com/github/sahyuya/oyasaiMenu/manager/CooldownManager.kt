package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/**
 * CooldownManager
 *
 * GUIクリックとコマンド実行のクールダウンを管理する。
 *
 * config.yml:
 *   cooldown:
 *     click-ms: 200       # GUIクリックの最小間隔 (ms)。0 = 無効
 *     command-ms: 300     # コマンド実行の最小間隔 (ms)。0 = 無効
 *
 * ■ 使用箇所
 *   isClickOnCooldown   → 各Engine の onInventoryClick で使用
 *   isCommandOnCooldown → SellCommand (/sell hand, /sell all) で使用
 *                         連続売却コマンドによるスパム防止
 */
object CooldownManager {

    private val clickMap:   ConcurrentHashMap<UUID, Long> = ConcurrentHashMap()
    private val commandMap: ConcurrentHashMap<UUID, Long> = ConcurrentHashMap()

    var clickMs:   Long = 200L
        private set
    var commandMs: Long = 300L
        private set

    fun init(plugin: OyasaiMenu) {
        clickMs   = plugin.config.getInt("cooldown.click-ms",   200).toLong()
        commandMs = plugin.config.getInt("cooldown.command-ms", 300).toLong()
        plugin.logger.info("CooldownManager: click=${clickMs}ms / command=${commandMs}ms")
    }

    /**
     * GUIクリックのクールダウンチェック。
     * @return true = クールダウン中 (無視すべき), false = 実行OK かつ時刻を記録
     */
    fun isClickOnCooldown(uuid: UUID): Boolean {
        if (clickMs <= 0L) return false
        val now  = System.currentTimeMillis()
        val last = clickMap[uuid] ?: 0L
        if (now - last < clickMs) return true
        clickMap[uuid] = now
        return false
    }

    /**
     * コマンド実行のクールダウンチェック。
     * 現在の使用箇所: SellCommand (/sell hand, /sell all)
     *
     * @return true = クールダウン中 (無視すべき), false = 実行OK かつ時刻を記録
     */
    fun isCommandOnCooldown(uuid: UUID): Boolean {
        if (commandMs <= 0L) return false
        val now  = System.currentTimeMillis()
        val last = commandMap[uuid] ?: 0L
        if (now - last < commandMs) return true
        commandMap[uuid] = now
        return false
    }

    fun remove(uuid: UUID) {
        clickMap.remove(uuid)
        commandMap.remove(uuid)
    }

    fun reload(plugin: OyasaiMenu) = init(plugin)
}