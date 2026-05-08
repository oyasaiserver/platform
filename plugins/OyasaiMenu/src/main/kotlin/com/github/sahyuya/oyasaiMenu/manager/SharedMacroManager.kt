package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PlayerMacro
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File
import java.util.UUID

/**
 * SharedMacroManager
 *
 * ■ 共有フロー
 *   1. publishMacro() → shared-macros/<shareId>.yml に保存し共有IDを返す
 *   2. importMacro()  → 共有IDから取り込む
 *
 * ■ 再確認機能
 *   - findSharesByAuthor()   → 自分が共有したマクロを全件返す
 *   - findSharesForMacro()   → 特定マクロ名に紐づく自分の共有IDを返す
 *   これにより「/macro shares」や詳細画面の「共有コード確認」ボタンが実現できる
 *
 * ■ ファイル構造
 *   shared-macros/<shareId>.yml
 *     share_id:    "abc12345"
 *     macro_name:  "ホーム設定"
 *     description: "作者: sahyuya"
 *     author:      "sahyuya"
 *     author_uuid: "<uuid>"
 *     created_at:  1234567890
 *     commands:
 *       - "warp home"
 */
class SharedMacroManager(private val plugin: OyasaiMenu) {

    data class SharedMacro(
        val shareId:    String,
        val macroName:  String,
        val description: String,
        val author:     String,
        val authorUUID: String,
        val createdAt:  Long,
        val commands:   List<String>
    )

    private val shareDir: File
        get() = File(plugin.dataFolder, "shared-macros").also { it.mkdirs() }

    // ============================
    // 共有 (publish)
    // ============================

    /**
     * マクロを共有する。
     * @return 生成した共有ID (成功) または null (失敗)
     */
    fun publishMacro(macro: PlayerMacro, authorName: String, authorUUID: UUID): String? {
        if (macro.commands.isEmpty()) return null

        val shareId = generateShareId()
        val file    = File(shareDir, "$shareId.yml")

        val yaml = YamlConfiguration()
        yaml.set("share_id",    shareId)
        yaml.set("macro_name",  macro.name)
        yaml.set("description", "作者: $authorName")
        yaml.set("author",      authorName)
        yaml.set("author_uuid", authorUUID.toString())
        yaml.set("created_at",  System.currentTimeMillis())
        yaml.set("commands",    macro.commands)

        return runCatching {
            yaml.save(file)
            shareId
        }.getOrElse {
            plugin.logger.warning("SharedMacroManager: 保存失敗 $shareId — ${it.message}")
            null
        }
    }

    // ============================
    // 取り込み (import)
    // ============================

    /**
     * 共有IDからマクロを取り込む。
     * @return SharedMacro (成功) または null (IDが見つからない)
     */
    fun importMacro(shareId: String): SharedMacro? {
        val file = File(shareDir, "$shareId.yml")
        if (!file.exists()) return null

        return runCatching {
            val yaml = YamlConfiguration.loadConfiguration(file)
            SharedMacro(
                shareId     = yaml.getString("share_id", shareId) ?: shareId,
                macroName   = yaml.getString("macro_name", "無名マクロ") ?: "無名マクロ",
                description = yaml.getString("description", "") ?: "",
                author      = yaml.getString("author", "不明") ?: "不明",
                authorUUID  = yaml.getString("author_uuid", "") ?: "",
                createdAt   = yaml.getLong("created_at", 0L),
                commands    = yaml.getStringList("commands")
            )
        }.getOrElse {
            plugin.logger.warning("SharedMacroManager: 読み込み失敗 $shareId — ${it.message}")
            null
        }
    }

    // ============================
    // 再確認 (re-check)
    // ============================

    /**
     * 指定プレイヤーが共有したマクロを全件返す。
     * 新しい順 (createdAt 降順) にソート。
     */
    fun findSharesByAuthor(authorUUID: UUID): List<SharedMacro> {
        val uuidStr = authorUUID.toString()
        return shareDir.listFiles()
            ?.filter { it.extension == "yml" }
            ?.mapNotNull { file ->
                runCatching {
                    val yaml = YamlConfiguration.loadConfiguration(file)
                    if (yaml.getString("author_uuid") != uuidStr) return@mapNotNull null
                    SharedMacro(
                        shareId     = yaml.getString("share_id", file.nameWithoutExtension) ?: file.nameWithoutExtension,
                        macroName   = yaml.getString("macro_name", "無名マクロ") ?: "無名マクロ",
                        description = yaml.getString("description", "") ?: "",
                        author      = yaml.getString("author", "") ?: "",
                        authorUUID  = uuidStr,
                        createdAt   = yaml.getLong("created_at", 0L),
                        commands    = yaml.getStringList("commands")
                    )
                }.getOrNull()
            }
            ?.sortedByDescending { it.createdAt }
            ?: emptyList()
    }

    /**
     * 指定プレイヤーが共有した中で、マクロ名が一致するものを返す。
     * 同一マクロを複数回共有している場合は全て返す (新しい順)。
     */
    fun findSharesForMacro(authorUUID: UUID, macroName: String): List<SharedMacro> =
        findSharesByAuthor(authorUUID).filter { it.macroName == macroName }

    // ============================
    // ID 生成
    // ============================

    /** 衝突しないランダム8文字の共有IDを生成する (a-z0-9) */
    private fun generateShareId(): String {
        val chars = "abcdefghijklmnopqrstuvwxyz0123456789"
        var id: String
        do { id = (1..8).map { chars.random() }.joinToString("") }
        while (File(shareDir, "$id.yml").exists())
        return id
    }
}