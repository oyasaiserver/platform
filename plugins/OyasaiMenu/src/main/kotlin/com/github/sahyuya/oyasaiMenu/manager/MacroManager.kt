package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.PlayerMacro
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import java.io.File
import java.util.UUID

/**
 * MacroManager
 *
 * ■ スラッシュの扱い
 *   保存時: ユーザーが入力した内容をそのまま保存 (スラッシュを除去しない)
 *   実行時: performCommand() の前に先頭スラッシュを1つだけ除去する
 *     → `warp home`   → performCommand("warp home")   → /warp home
 *     → `/warp home`  → performCommand("warp home")   → /warp home
 *     → `//wand`      → performCommand("/wand")        → //wand (FAWE)
 *
 * ■ リソースファイル
 *   op-macro-templates.yml は JAR 内リソースから saveResource() で展開する。
 *   コード内にデフォルト内容を書かない。
 *
 * ■ 権限別マクロ最大数
 *   config.yml の macro.max-per-permission で権限ごとに設定可能。
 */
class MacroManager(private val plugin: OyasaiMenu) {

    private val cache:     MutableMap<String, MutableList<PlayerMacro>> = mutableMapOf()
    private val cooldowns: MutableMap<String, Long>                     = mutableMapOf()

    private val waitRegex = Regex("""^wait\s+(\d+(?:\.\d+)?)s?$""", RegexOption.IGNORE_CASE)

    private val dataDir: File get() = File(plugin.dataFolder, "userdata").also { it.mkdirs() }

    // ============================
    // 読み書き
    // ============================

    fun loadPlayer(uuid: UUID) {
        val file = playerFile(uuid)
        if (!file.exists()) { cache[uuid.toString()] = mutableListOf(); return }
        val yaml = YamlConfiguration.loadConfiguration(file)
        val list = mutableListOf<PlayerMacro>()
        yaml.getConfigurationSection("macros")?.getKeys(false)?.forEach { id ->
            yaml.getConfigurationSection("macros.$id")?.let { sec ->
                list.add(PlayerMacro(
                    id              = id,
                    name            = sec.getString("name", id) ?: id,
                    ownerUUID       = uuid.toString(),
                    commands        = sec.getStringList("commands"),
                    cooldownSeconds = sec.getInt("cooldown", plugin.config.getInt("macro.cooldown-seconds", 3))
                ))
            }
        }
        cache[uuid.toString()] = list
    }

    fun savePlayer(uuid: UUID) {
        val macros = cache[uuid.toString()] ?: return
        val yaml   = YamlConfiguration()
        macros.forEach { m ->
            yaml.set("macros.${m.id}.name",     m.name)
            yaml.set("macros.${m.id}.commands", m.commands)
            yaml.set("macros.${m.id}.cooldown", m.cooldownSeconds)
        }
        playerFile(uuid).also { it.parentFile.mkdirs() }.let { yaml.save(it) }
    }

    fun unloadPlayer(uuid: UUID) {
        savePlayer(uuid); cache.remove(uuid.toString())
        cooldowns.keys.removeIf { it.startsWith("$uuid:") }
    }

    fun saveAll() {
        cache.keys.forEach { uuidStr ->
            runCatching { savePlayer(UUID.fromString(uuidStr)) }
                .onFailure { plugin.logger.warning("マクロ保存失敗: $uuidStr") }
        }
    }

    // ============================
    // 権限別マクロ最大数
    // ============================

    /**
     * プレイヤーの権限に応じたマクロ最大数を返す。
     * 複数権限を持つ場合は最大値を採用する。
     */
    fun getMaxMacros(player: Player): Int {
        val default     = plugin.config.getInt("macro.max-per-player", 10)
        val permSection = plugin.config.getConfigurationSection("macro.max-per-permission")
            ?: return default

        return permSection.getKeys(false)
            .filter { player.hasPermission(it) }
            .mapNotNull { permSection.getInt(it, 0).takeIf { v -> v > 0 } }
            .maxOrNull() ?: default
    }

    // ============================
    // CRUD
    // ============================

    fun getMacros(uuid: UUID): List<PlayerMacro>   = cache[uuid.toString()]?.toList() ?: emptyList()
    fun getMacro(uuid: UUID, id: String): PlayerMacro? = cache[uuid.toString()]?.find { it.id == id }

    /**
     * @param maxOverride null の場合は config のデフォルト値を使用
     */
    fun addMacro(uuid: UUID, macro: PlayerMacro, maxOverride: Int? = null): String? {
        val list = cache.getOrPut(uuid.toString()) { mutableListOf() }
        val max  = maxOverride ?: plugin.config.getInt("macro.max-per-player", 10)
        if (list.size >= max) return "マクロの上限数 ($max) に達しています。"
        if (list.any { it.id == macro.id }) return "ID '${macro.id}' は既に存在します。"
        validateCommands(macro.commands)?.let { return it }
        list.add(macro); savePlayer(uuid); return null
    }

    fun updateMacro(uuid: UUID, updated: PlayerMacro): String? {
        val list = cache[uuid.toString()] ?: return "データ未ロード。"
        val idx  = list.indexOfFirst { it.id == updated.id }
        if (idx < 0) return "ID '${updated.id}' が見つかりません。"
        list[idx] = updated; savePlayer(uuid); return null
    }

    fun removeMacro(uuid: UUID, macroId: String): Boolean {
        val removed = cache[uuid.toString()]?.removeIf { it.id == macroId } ?: false
        if (removed) savePlayer(uuid); return removed
    }

    fun setCommandAtIndex(uuid: UUID, macroId: String, index: Int, value: String): String? {
        val macro = getMacro(uuid, macroId) ?: return "マクロ '$macroId' が見つかりません。"
        validateCommands(listOf(value))?.let { return it }
        val cmd = if (isWaitCommand(value)) value.trim() else value.trim()
        val commands = macro.commands.toMutableList()
        if (index >= commands.size) commands.add(cmd) else commands[index] = cmd
        return updateMacro(uuid, macro.copy(commands = commands))
    }

    fun removeCommandAtIndex(uuid: UUID, macroId: String, index: Int): String? {
        val macro = getMacro(uuid, macroId) ?: return "マクロ '$macroId' が見つかりません。"
        if (index !in macro.commands.indices)
            return "${index + 1} 番目は存在しません (現在 ${macro.commands.size} 個)。"
        val commands = macro.commands.toMutableList()
        commands.removeAt(index)
        return updateMacro(uuid, macro.copy(commands = commands))
    }

    // ============================
    // OPテンプレートマクロ配布
    // ============================

    /**
     * OPプレイヤーにテンプレートマクロを配布する。
     * op-macro-templates.yml は JAR リソースから saveResource() で展開する。
     * 既に同じIDのマクロを持っているプレイヤーには再配布しない。
     */
    fun distributeOpTemplates(player: Player) {
        if (!player.isOp) return

        val templateFile = File(plugin.dataFolder, "op-macro-templates.yml")
        if (!templateFile.exists()) {
            runCatching { plugin.saveResource("op-macro-templates.yml", false) }
                .onFailure { plugin.logger.warning("op-macro-templates.yml の展開失敗: ${it.message}"); return }
        }
        if (!templateFile.exists()) return

        val yaml         = YamlConfiguration.loadConfiguration(templateFile)
        val templatesSec = yaml.getConfigurationSection("templates") ?: return
        var added        = 0

        templatesSec.getKeys(false).forEach { templateId ->
            val sec      = templatesSec.getConfigurationSection(templateId) ?: return@forEach
            val name     = sec.getString("name", templateId) ?: templateId
            val commands = sec.getStringList("commands")
            val cooldown = sec.getInt("cooldown", plugin.config.getInt("macro.cooldown-seconds", 3))
            val macroId  = "_op_$templateId"
            if (getMacro(player.uniqueId, macroId) != null) return@forEach

            val list = cache.getOrPut(player.uniqueId.toString()) { mutableListOf() }
            list.add(PlayerMacro(
                id              = macroId,
                name            = name,
                ownerUUID       = player.uniqueId.toString(),
                commands        = commands,
                cooldownSeconds = cooldown
            ))
            added++
        }

        if (added > 0) {
            savePlayer(player.uniqueId)
            Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                player.sendMessage(c("&b[OyasaiMenu] &a${added}個のOPマクロテンプレートを追加しました。(&e/macro &aで確認)"))
            }, 20L)
        }
    }

    // ============================
    // 実行 (wait 対応)
    // ============================

    fun executeMacro(player: Player, macroId: String): String? {
        val macro = getMacro(player.uniqueId, macroId) ?: return "マクロ '$macroId' が見つかりません。"
        val key   = "${player.uniqueId}:$macroId"
        val now   = System.currentTimeMillis()
        val cd    = macro.cooldownSeconds * 1000L
        if (now - (cooldowns[key] ?: 0L) < cd) {
            val remaining = (cd - (now - (cooldowns[key] ?: 0L))) / 1000 + 1
            return "クールダウン中。あと ${remaining} 秒。"
        }
        cooldowns[key] = now
        executeCommandsFrom(player, macro.commands, 0)
        return null
    }

    /**
     * コマンドを順に実行する。
     *
     * ■ スラッシュの扱い (実行時)
     *   performCommand() に渡す前に先頭スラッシュを1つだけ除去する。
     *     `warp home`  → performCommand("warp home")  → /warp home
     *     `/warp home` → performCommand("warp home")  → /warp home
     *     `//wand`     → performCommand("/wand")       → //wand (FAWE)
     */
    private fun executeCommandsFrom(player: Player, commands: List<String>, index: Int) {
        if (index >= commands.size) return
        val cmd = commands[index].trim()
        val waitMatch = waitRegex.matchEntire(cmd)
        if (waitMatch != null) {
            val seconds   = waitMatch.groupValues[1].toDoubleOrNull() ?: 0.0
            val delayTick = (seconds * 20.0).toLong().coerceAtLeast(1L)
            Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                executeCommandsFrom(player, commands, index + 1)
            }, delayTick)
        } else {
            val execCmd = if (cmd.startsWith("/")) cmd.removePrefix("/") else cmd
            player.performCommand(execCmd)
            executeCommandsFrom(player, commands, index + 1)
        }
    }

    // ============================
    // バリデーション
    // ============================

    private fun validateCommands(commands: List<String>): String? {
        val whitelist = plugin.config.getStringList("macro.command-whitelist")
        if (whitelist.isEmpty()) return null
        val blocked = commands.filter { !isWaitCommand(it) }.filter { cmd ->
            // 先頭スラッシュを除去してコマンド名を抽出
            val base = cmd.removePrefix("/").removePrefix("/").split(" ").first()
            whitelist.none { it.equals(base, ignoreCase = true) }
        }
        if (blocked.isNotEmpty()) return "許可されていないコマンド: ${blocked.joinToString()}"
        return null
    }

    fun isWaitCommand(cmd: String) = waitRegex.matches(cmd.trim())

    private fun playerFile(uuid: UUID) = File(dataDir, "$uuid.yml")
}