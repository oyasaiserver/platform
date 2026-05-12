package icu.oyasai.citiesskymine.preset

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player

class BrushPresetCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  private val cooldowns = ConcurrentHashMap<UUID, Long>()
  private val presetNameRegex = Regex("[A-Za-z0-9_-]{1,32}")

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.PRESET)) return true

    val sub = args.getOrNull(0)?.lowercase()
    return when (sub) {
      null, "help" -> {
        showHelp(sender, label)
        true
      }
      "save" -> handleSave(sender, label, args)
      "load" -> handleLoad(sender, label, args.getOrNull(1))
      "list" -> handleList(sender)
      "delete", "del", "remove" -> handleDelete(sender, label, args.getOrNull(1))
      else -> handleLoad(sender, label, args[0])
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    if (sender !is Player) return emptyList()
    return when (args.size) {
      1 -> (listOf("save", "load", "list", "delete", "help") + presetNames(sender))
          .filter { it.startsWith(args[0], ignoreCase = true) }
      2 -> when (args[0].lowercase()) {
        "load", "delete", "del", "remove" ->
            presetNames(sender).filter { it.startsWith(args[1], ignoreCase = true) }
        else -> emptyList()
      }
      else -> emptyList()
    }
  }

  private fun handleSave(player: Player, label: String, args: Array<String>): Boolean {
    val rawName = args.getOrNull(1)
    if (rawName == null || args.size < 3) {
      MessageUtil.error(player, "使い方: /$label save <名前> <command>")
      return true
    }

    val key = normalizeName(rawName) ?: run {
      MessageUtil.error(player, "プリセット名は英数字・_・- の1-32文字で指定してください。")
      return true
    }

    val command = args.drop(2).joinToString(" ").trimStart()
    val validationError = validateCommand(command)
    if (validationError != null) {
      MessageUtil.error(player, validationError)
      return true
    }

    val yaml = loadYaml(player.uniqueId)
    val existing = presetKeys(yaml)
    val maxPresets = plugin.config.getInt("brush-preset.max-presets-per-player", 20)
    if (!existing.contains(key) && maxPresets > 0 && existing.size >= maxPresets) {
      MessageUtil.error(player, "保存できるプリセット数の上限 ($maxPresets) に達しています。")
      return true
    }

    yaml.set("presets.$key.name", rawName)
    yaml.set("presets.$key.command", command)
    saveYaml(player.uniqueId, yaml)
    MessageUtil.success(player, "ブラシプリセットを保存しました: <white>$rawName</white>")
    return true
  }

  private fun handleLoad(player: Player, label: String, rawName: String?): Boolean {
    val key = normalizeName(rawName)
    if (key == null) {
      MessageUtil.error(player, "使い方: /$label load <名前>")
      return true
    }

    val yaml = loadYaml(player.uniqueId)
    val command = yaml.getString("presets.$key.command")
    if (command == null) {
      MessageUtil.error(player, "プリセットが見つかりません: $rawName")
      return true
    }

    if (isCoolingDown(player)) {
      MessageUtil.warn(player, "少し待ってから再実行してください。")
      return true
    }

    val validationError = validateCommand(command)
    if (validationError != null) {
      MessageUtil.error(player, "保存済みコマンドが現在の許可リストに一致しません。")
      return true
    }

    cooldowns[player.uniqueId] = System.currentTimeMillis()
    val executable = command.removePrefix("/")
    val accepted = player.performCommand(executable)
    if (!accepted) {
      MessageUtil.error(player, "保存済みコマンドを実行できませんでした。")
      return true
    }
    MessageUtil.success(player, "ブラシプリセットを読み込みました: <white>${displayName(yaml, key)}</white>")
    return true
  }

  private fun handleList(player: Player): Boolean {
    val names = presetNames(player)
    if (names.isEmpty()) {
      MessageUtil.info(player, "保存済みプリセットはありません。")
      return true
    }
    MessageUtil.info(player, "保存済みプリセット: <white>${names.joinToString(", ")}</white>")
    return true
  }

  private fun handleDelete(player: Player, label: String, rawName: String?): Boolean {
    val key = normalizeName(rawName)
    if (key == null) {
      MessageUtil.error(player, "使い方: /$label delete <名前>")
      return true
    }

    val yaml = loadYaml(player.uniqueId)
    if (!yaml.contains("presets.$key")) {
      MessageUtil.error(player, "プリセットが見つかりません: $rawName")
      return true
    }

    val name = displayName(yaml, key)
    yaml.set("presets.$key", null)
    saveYaml(player.uniqueId, yaml)
    MessageUtil.success(player, "ブラシプリセットを削除しました: <white>$name</white>")
    return true
  }

  private fun validateCommand(command: String): String? {
    if (command.isBlank()) return "コマンドを指定してください。"
    if (command.any { it == '\n' || it == '\r' || it.code < 0x20 }) {
      return "コマンドに制御文字は使用できません。"
    }

    val maxLength = plugin.config.getInt("brush-preset.max-command-length", 200)
    if (maxLength > 0 && command.length > maxLength) {
      return "コマンド長が上限 ($maxLength) を超えています。"
    }

    val allowedCommands =
        plugin.config
            .getStringList("brush-preset.allowed-commands")
            .ifEmpty { DEFAULT_ALLOWED_COMMANDS }
    if (allowedCommands.none { allowed -> matchesAllowedCommand(command, allowed) }) {
      return "許可されていないコマンドです。"
    }
    return null
  }

  private fun matchesAllowedCommand(command: String, allowed: String): Boolean {
    val normalizedAllowed = allowed.trimStart()
    if (normalizedAllowed.isBlank()) return false
    val exact = normalizedAllowed.trimEnd()
    return command.equals(exact, ignoreCase = true) ||
        command.startsWith(normalizedAllowed, ignoreCase = true)
  }

  private fun isCoolingDown(player: Player): Boolean {
    val cooldownMillis = plugin.config.getLong("brush-preset.load-cooldown-ticks", 20L) * 50L
    if (cooldownMillis <= 0L) return false
    val last = cooldowns[player.uniqueId] ?: return false
    return System.currentTimeMillis() - last < cooldownMillis
  }

  private fun presetNames(player: Player): List<String> {
    val yaml = loadYaml(player.uniqueId)
    return presetKeys(yaml).map { displayName(yaml, it) }.sortedWith(String.CASE_INSENSITIVE_ORDER)
  }

  private fun presetKeys(yaml: YamlConfiguration): Set<String> =
      yaml.getConfigurationSection("presets")?.getKeys(false).orEmpty()

  private fun displayName(yaml: YamlConfiguration, key: String): String =
      yaml.getString("presets.$key.name") ?: key

  private fun normalizeName(rawName: String?): String? {
    val name = rawName?.trim() ?: return null
    if (!presetNameRegex.matches(name)) return null
    return name.lowercase()
  }

  private fun loadYaml(playerId: UUID): YamlConfiguration {
    val file = presetFile(playerId)
    return if (file.exists()) YamlConfiguration.loadConfiguration(file) else YamlConfiguration()
  }

  private fun saveYaml(playerId: UUID, yaml: YamlConfiguration) {
    val file = presetFile(playerId)
    file.parentFile.mkdirs()
    yaml.save(file)
  }

  private fun presetFile(playerId: UUID): File =
      File(plugin.dataFolder, "brush-presets/$playerId.yml")

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "Brush Preset")
    MessageUtil.helpEntry(sender, "/$label save <名前> <command>", "ブラシ系コマンドを保存")
    MessageUtil.helpEntry(sender, "/$label load <名前>", "保存済みプリセットを実行")
    MessageUtil.helpEntry(sender, "/$label <名前>", "保存済みプリセットを短縮実行")
    MessageUtil.helpEntry(sender, "/$label list", "保存済みプリセットを表示")
    MessageUtil.helpEntry(sender, "/$label delete <名前>", "保存済みプリセットを削除")
  }

  companion object {
    private val DEFAULT_ALLOWED_COMMANDS =
        listOf("//br ", "//brush ", "//mask ", "//gmask ", "//replace ")
  }
}
