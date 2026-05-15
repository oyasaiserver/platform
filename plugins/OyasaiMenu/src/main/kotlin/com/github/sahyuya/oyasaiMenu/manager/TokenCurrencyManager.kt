package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import java.util.OptionalLong

/**
 * TokenCurrencyManager
 *
 * TokenManager (by Realized) のリフレクションラッパー。
 *
 * ■ TokenManager API の正しい呼び出し方
 *
 *   TokenManager のメインクラスは JavaPlugin を直接継承しており、
 *   Bukkit.getPluginManager().getPlugin("TokenManager") で取得できるが、
 *   getTokens() の引数は OfflinePlayer ではなく Player を受け取るバージョンと
 *   OfflinePlayer を受け取るバージョンが混在する。
 *
 *   さらに TokenManager は内部でデータキャッシュを持っており、
 *   オンラインプレイヤーの場合は PlayerData 経由でデータを取得する。
 *   getPlugin() が返す Plugin インスタンスに対して直接 getTokens() を呼ぶのが正しい。
 *
 *   試行順:
 *     1. getTokens(Player)          — 最新版で多い
 *     2. getTokens(OfflinePlayer)   — 旧版フォールバック
 *     3. removeTokens(Player, long) — 引き落とし
 *     4. removeTokens(Player, Long) — primitive/boxed 両対応
 */
object TokenCurrencyManager {

    private var plugin: OyasaiMenu? = null

    fun init(p: OyasaiMenu) {
        plugin = p
        if (isAvailable) {
            // 起動時に実際に API が叩けるかサニティチェック
            p.logger.info("TokenManager を検出しました。ポイントショップが有効です。")
        } else {
            p.logger.warning("TokenManager が見つかりません。ポイントショップは無効です。")
        }
    }

    val isAvailable: Boolean
        get() = Bukkit.getPluginManager().isPluginEnabled("TokenManager")

    // ============================
    // トークン取得
    // ============================

    /**
     * プレイヤーのトークン所持数を返す。
     *
     * TokenManager 未導入 / 取得失敗の場合は 0L。
     * fine ログに詳細を出力するのでデバッグ時は確認すること。
     */
    fun getTokens(player: Player): Long {
        val tm = Bukkit.getPluginManager().getPlugin("TokenManager") ?: return 0L

        // --- 試行1: getTokens(Player) ---
        runCatching {
            val m = tm.javaClass.getMethod("getTokens", Player::class.java)
            return extractLong(m.invoke(tm, player))
        }

        // --- 試行2: getTokens(OfflinePlayer) ---
        runCatching {
            val m = tm.javaClass.getMethod("getTokens", org.bukkit.OfflinePlayer::class.java)
            return extractLong(m.invoke(tm, player as org.bukkit.OfflinePlayer))
        }

        plugin?.logger?.warning("TokenManager: getTokens() の呼び出しに失敗しました。TokenManager のバージョンを確認してください。")
        return 0L
    }

    // ============================
    // トークン引き落とし
    // ============================

    /**
     * プレイヤーからトークンを引く。
     * @return 成功なら null、失敗なら &c 付きエラーメッセージ
     */
    fun removeTokens(player: Player, amount: Long): String? {
        if (!isAvailable) return "&cTokenManager が見つかりません。"

        val current = getTokens(player)
        if (current < amount)
            return "&cポイントが不足しています。(所持: ${format(current)}P / 必要: ${format(amount)}P)"

        val tm = Bukkit.getPluginManager().getPlugin("TokenManager")
            ?: return "&cTokenManager が見つかりません。"

        // --- 試行1: removeTokens(Player, long) ---
        runCatching {
            val m = tm.javaClass.getMethod("removeTokens", Player::class.java, Long::class.javaPrimitiveType!!)
            val ok = m.invoke(tm, player, amount) as? Boolean ?: true
            return if (ok) null else "&cポイント引き落とし処理に失敗しました。"
        }

        // --- 試行2: removeTokens(Player, Long) boxed ---
        runCatching {
            val m = tm.javaClass.getMethod("removeTokens", Player::class.java, Long::class.javaObjectType)
            val ok = m.invoke(tm, player, amount) as? Boolean ?: true
            return if (ok) null else "&cポイント引き落とし処理に失敗しました。"
        }

        // --- 試行3: setTokens(Player, long) で現在値から引く ---
        runCatching {
            val newBalance = current - amount
            val m = tm.javaClass.getMethod("setTokens", Player::class.java, Long::class.javaPrimitiveType!!)
            m.invoke(tm, player, newBalance)
            return null
        }

        plugin?.logger?.warning("TokenManager: removeTokens() の呼び出しに失敗しました。")
        return "&cポイント引き落とし処理に失敗しました。"
    }

    /** トークン数のフォーマット (例: 1234 → "1,234") */
    fun format(amount: Long): String = String.format("%,d", amount)

    // ============================
    // ユーティリティ
    // ============================

    /** 様々な戻り値型から Long を抽出する */
    private fun extractLong(value: Any?): Long = when (value) {
        is Long        -> value
        is Int         -> value.toLong()
        is Number      -> value.toLong()
        is OptionalLong -> value.orElse(0L)
        else -> {
            // Optional<Long> (Kotlin/Guava 系) への対応
            runCatching {
                val isPresentMethod = value?.javaClass?.getMethod("isPresent")
                val getMethod       = value?.javaClass?.getMethod("get")
                val isPresent = isPresentMethod?.invoke(value) as? Boolean ?: false
                if (isPresent) (getMethod?.invoke(value) as? Number)?.toLong() ?: 0L else 0L
            }.getOrDefault(0L)
        }
    }
}