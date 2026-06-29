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
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.PRESET)) return true

    val sub = args.getOrNull(0)?.lowercase()
    return when (sub) {
      null,
      "help" -> {
        showHelp(sender, label)
        true
      }
      "save" -> handleSave(sender, label, args)
      "load" -> handleLoad(sender, label, args.getOrNull(1))
      "list" -> handleList(sender)
      "delete",
      "del",
      "remove" -> handleDelete(sender, label, args.getOrNull(1))
      else -> handleLoad(sender, label, args[0])
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (sender !is Player) return emptyList()
    return when (args.size) {
      1 ->
          (listOf("save", "load", "list", "delete", "help") + presetNames(sender)).filter {
            it.startsWith(args[0], ignoreCase = true)
          }
      2 ->
          when (args[0].lowercase()) {
            "save" ->
                (presetNames(sender) + listOf("[name]", "road", "stone", "smooth")).filter {
                  it.startsWith(args[1], ignoreCase = true)
                }
            "load",
            "delete",
            "del",
            "remove" -> presetNames(sender).filter { it.startsWith(args[1], ignoreCase = true) }
            else -> emptyList()
          }
      else ->
          when (args[0].lowercase()) {
            "save" ->
                brushPresetSaveSuggestions(args).filter {
                  it.startsWith(args.last(), ignoreCase = true)
                }
            else -> emptyList()
          }
    }
  }

  private fun handleSave(player: Player, label: String, args: Array<String>): Boolean {
    val rawName = args.getOrNull(1)
    if (rawName == null || args.size < 3) {
      MessageUtil.error(
          player,
          "使い方: /$label save <名前> \"<brush>\" [-m \"<mask>\"] [-g \"<global mask>\"]",
      )
      return true
    }

    val key =
        normalizeName(rawName)
            ?: run {
              MessageUtil.error(player, "プリセット名は英数字・_・- の1-32文字で指定してください。")
              return true
            }

    val preset =
        parsePresetDefinition(args.drop(2))
            ?: run {
              MessageUtil.error(
                  player,
                  "使い方: /$label save <名前> \"<brush>\" [-m \"<mask>\"] [-g \"<global mask>\"]",
              )
              return true
            }
    val validationError = validatePreset(preset)
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
    yaml.set("presets.$key.command", preset.command)
    yaml.set("presets.$key.mask", preset.mask)
    yaml.set("presets.$key.gmask", preset.gmask)
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
    val preset = readPreset(yaml, key)
    if (preset == null) {
      MessageUtil.error(player, "プリセットが見つかりません: $rawName")
      return true
    }

    if (isCoolingDown(player)) {
      MessageUtil.warn(player, "少し待ってから再実行してください。")
      return true
    }

    val validationError = validatePreset(preset)
    if (validationError != null) {
      MessageUtil.error(player, "保存済みコマンドが現在の許可リストに一致しません。")
      return true
    }

    cooldowns[player.uniqueId] = System.currentTimeMillis()
    for (presetCommand in preset.commandsInExecutionOrder()) {
      val accepted = player.performCommand(presetCommand.removePrefix("/"))
      if (!accepted) {
        MessageUtil.error(player, "保存済みコマンドを実行できませんでした: $presetCommand")
        return true
      }
    }
    MessageUtil.success(player, "ブラシプリセットを読み込みました: <white>${displayName(yaml, key)}</white>")
    return true
  }

  private fun parsePresetDefinition(rawArgs: List<String>): BrushPresetDefinition? {
    if (rawArgs.isEmpty()) return null
    val command = ArrayList<String>()
    val mask = ArrayList<String>()
    val gmask = ArrayList<String>()
    var target = command
    for (raw in rawArgs) {
      when (raw.lowercase()) {
        "-m",
        "--mask",
        "mask" -> target = mask
        "-g",
        "--gmask",
        "gmask" -> target = gmask
        else -> target += raw
      }
    }
    val brushCommand = command.joinToString(" ").trim().stripSurroundingDoubleQuotes()
    if (brushCommand.isBlank()) return null
    return BrushPresetDefinition(
        command = brushCommand,
        mask =
            normalizeMaskCommand(
                mask.joinToString(" ").trim().stripSurroundingDoubleQuotes(),
                "//mask ",
            ),
        gmask =
            normalizeMaskCommand(
                gmask.joinToString(" ").trim().stripSurroundingDoubleQuotes(),
                "//gmask ",
            ),
    )
  }

  private fun normalizeMaskCommand(raw: String, prefix: String): String? {
    if (raw.isBlank()) return null
    if (raw.startsWith("//", ignoreCase = true)) return raw
    return "$prefix$raw"
  }

  private fun readPreset(yaml: YamlConfiguration, key: String): BrushPresetDefinition? {
    val command = yaml.getString("presets.$key.command") ?: return null
    return BrushPresetDefinition(
        command = command,
        mask = yaml.getString("presets.$key.mask"),
        gmask = yaml.getString("presets.$key.gmask"),
    )
  }

  private fun validatePreset(preset: BrushPresetDefinition): String? {
    val allowedCommands = allowedCommandPrefixes()
    validateBrushCommand(preset.command, allowedCommands)?.let {
      return it
    }
    preset.mask?.let { mask ->
      validateMaskCommand(mask, "//mask ", allowedCommands)?.let {
        return it
      }
    }
    preset.gmask?.let { gmask ->
      validateMaskCommand(gmask, "//gmask ", allowedCommands)?.let {
        return it
      }
    }
    val totalLength = preset.commandsInExecutionOrder().sumOf { it.length }
    val maxLength = plugin.config.getInt("brush-preset.max-command-length", 200)
    if (maxLength > 0 && totalLength > maxLength) {
      return "コマンド長が上限 ($maxLength) を超えています。"
    }
    return null
  }

  private fun validateBrushCommand(command: String, allowedCommands: List<String>): String? {
    validateCommandBasics(command)?.let {
      return it
    }
    if (!matchesAllowedCommand(command, "//br ") && !matchesAllowedCommand(command, "//brush ")) {
      return "ブラシプリセットには //br または //brush を指定してください。"
    }
    if (allowedCommands.none { allowed -> matchesAllowedCommand(command, allowed) }) {
      return "許可されていないブラシコマンドです。"
    }
    return null
  }

  private fun validateMaskCommand(
      command: String,
      expectedPrefix: String,
      allowedCommands: List<String>,
  ): String? {
    validateCommandBasics(command)?.let {
      return it
    }
    if (!matchesAllowedCommand(command, expectedPrefix)) {
      return "mask は $expectedPrefix で始まるコマンドを指定してください。"
    }
    if (allowedCommands.none { allowed -> matchesAllowedCommand(command, allowed) }) {
      return "許可されていない mask コマンドです。"
    }
    return null
  }

  private fun validateCommandBasics(command: String): String? {
    if (command.isBlank()) return "コマンドを指定してください。"
    if (command.any { it == '\n' || it == '\r' || it.code < 0x20 }) {
      return "コマンドに制御文字は使用できません。"
    }
    return null
  }

  private data class BrushPresetDefinition(
      val command: String,
      val mask: String?,
      val gmask: String?,
  ) {
    fun commandsInExecutionOrder(): List<String> {
      val commands = ArrayList<String>()
      gmask?.let { commands += it }
      mask?.let { commands += it }
      commands += command
      return commands
    }
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

  private fun matchesAllowedCommand(command: String, allowed: String): Boolean {
    val normalizedAllowed = allowed.trimStart()
    if (normalizedAllowed.isBlank()) return false
    val exact = normalizedAllowed.trimEnd()
    return command.equals(exact, ignoreCase = true) ||
        command.startsWith(normalizedAllowed, ignoreCase = true)
  }

  private fun allowedCommandPrefixes(): List<String> =
      plugin.config.getStringList("brush-preset.allowed-commands").ifEmpty {
        DEFAULT_ALLOWED_COMMANDS
      }

  private fun String.stripSurroundingDoubleQuotes(): String =
      if (length >= 2 && first() == '"' && last() == '"') {
        substring(1, lastIndex).trim()
      } else {
        this
      }

  private fun brushPresetSaveSuggestions(args: Array<String>): List<String> {
    val usedMask =
        args.any { it.equals("-m", true) || it.equals("--mask", true) || it.equals("mask", true) }
    val usedGmask =
        args.any { it.equals("-g", true) || it.equals("--gmask", true) || it.equals("gmask", true) }
    val suggestions =
        mutableListOf(
            "\"//br sphere -h andesite 3\"",
            "\"//brush sphere -h andesite 3\"",
            "//br",
            "//brush",
        )
    if (!usedMask) suggestions += listOf("-m", "--mask", "mask")
    if (!usedGmask) suggestions += listOf("-g", "--gmask", "gmask")
    suggestions += listOf("\">0 smoothquartz\"", "\"<global mask>\"")
    return suggestions
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
    MessageUtil.helpEntry(
        sender,
        "/$label save <名前> \"<brush>\" [-m \"<mask>\"] [-g \"<global mask>\"]",
        "ブラシとマスクを保存",
    )
    MessageUtil.helpEntry(
        sender,
        "/$label save stone \"//br sphere -h andesite 3\" -m \">0 smoothquartz\" -g \"<global mask>\"",
        "quoted chunk の保存例",
    )
    MessageUtil.helpEntry(sender, "/$label load <名前>", "保存済みプリセットを実行")
    MessageUtil.helpEntry(sender, "/$label <名前>", "保存済みプリセットを短縮実行")
    MessageUtil.helpEntry(sender, "/$label list", "保存済みプリセットを表示")
    MessageUtil.helpEntry(sender, "/$label delete <名前>", "保存済みプリセットを削除")
  }

  companion object {
    private val DEFAULT_ALLOWED_COMMANDS = listOf("//br ", "//brush ", "//mask ", "//gmask ")
  }
}
