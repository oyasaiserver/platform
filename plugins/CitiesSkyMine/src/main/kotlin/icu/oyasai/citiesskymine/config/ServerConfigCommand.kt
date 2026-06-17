package icu.oyasai.citiesskymine.config

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

class ServerConfigCommand(private val plugin: Main) : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (!requireConfigEditor(sender)) return true

    when (args.getOrNull(0)?.lowercase()) {
      null,
      "help" -> sendHelp(sender, "/$label")
      "reload" -> {
        plugin.reloadConfig()
        MessageUtil.success(sender, "config.yml を再読み込みしました。")
      }
      "access" -> handleAccess(sender, "/$label", args.drop(1))
      else -> {
        MessageUtil.error(sender, "不明な設定項目です: ${args[0]}")
        sendHelp(sender, "/$label")
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (args.isEmpty()) return emptyList()
    if (args.size == 1) return filter(args[0], listOf("access", "reload", "help"))
    if (!args[0].equals("access", ignoreCase = true)) return emptyList()

    val accessArgs = args.drop(1)
    return completeAccess(accessArgs)
  }

  fun sendHelp(sender: CommandSender, base: String) {
    MessageUtil.header(sender, "CitiesSkyMine Config")
    MessageUtil.helpEntry(sender, "$base access status", "権限設定の現在値を表示")
    MessageUtil.helpEntry(
        sender,
        "$base access set <enabled|op-bypass|console-bypass|legacy-permissions-bypass> <true|false>",
        "権限判定の基本スイッチを変更",
    )
    MessageUtil.helpEntry(
        sender,
        "$base access command <command> <role...|none>",
        "コマンドを使用できるロールを設定",
    )
    MessageUtil.helpEntry(
        sender,
        "$base access role <role> permission <permission>",
        "ロールに対応する権限ノードを設定",
    )
    MessageUtil.helpEntry(
        sender,
        "$base access role <role> inherits <role...|none>",
        "ロールの継承関係を設定",
    )
    MessageUtil.helpEntry(
        sender,
        "$base access command-blocks <command...|none>",
        "コマンドブロックから許可する CSM コマンドを設定",
    )
    MessageUtil.helpEntry(
        sender,
        "$base access non-player <command...|none>",
        "コンソール以外の非プレイヤー送信者に許可する CSM コマンドを設定",
    )
    MessageUtil.helpEntry(sender, "$base reload", "config.yml を再読み込み")
  }

  private fun handleAccess(sender: CommandSender, base: String, args: List<String>) {
    when (args.getOrNull(0)?.lowercase()) {
      null,
      "status" -> showAccessStatus(sender)
      "set" -> setAccessBoolean(sender, args)
      "command" -> setCommandRoles(sender, args)
      "role" -> setRole(sender, args)
      "command-blocks" ->
          setCommandList(
              sender,
              "access.command-blocks.allowed-commands",
              args.drop(1),
              "command-blocks",
          )
      "non-player" ->
          setCommandList(sender, "access.non-player.allowed-commands", args.drop(1), "non-player")
      "help" -> sendHelp(sender, base)
      else -> {
        MessageUtil.error(sender, "不明な access 操作です: ${args[0]}")
        sendHelp(sender, base)
      }
    }
  }

  private fun showAccessStatus(sender: CommandSender) {
    MessageUtil.header(sender, "Access Config")
    for (key in BOOLEAN_KEYS) {
      MessageUtil.info(sender, "$key: <white>${plugin.config.getBoolean("access.$key")}</white>")
    }
    MessageUtil.info(
        sender,
        "command-blocks: <white>${commandList("access.command-blocks.allowed-commands")}</white>",
    )
    MessageUtil.info(
        sender,
        "non-player: <white>${commandList("access.non-player.allowed-commands")}</white>",
    )
    MessageUtil.header(sender, "Command Roles")
    for (command in commandIds()) {
      val roles = plugin.config.getStringList("access.commands.$command")
      MessageUtil.info(
          sender,
          "$command: <white>${roles.ifEmpty { listOf("none") }.joinToString(", ")}</white>",
      )
    }
  }

  private fun setAccessBoolean(sender: CommandSender, args: List<String>) {
    val key = args.getOrNull(1)?.lowercase()
    val value = args.getOrNull(2)?.lowercase()
    if (key == null || key !in BOOLEAN_KEYS || value !in listOf("true", "false")) {
      MessageUtil.error(
          sender,
          "使い方: /csm config access set <${BOOLEAN_KEYS.joinToString("|")}> <true|false>",
      )
      return
    }
    val path = "access.$key"
    saveConfigValue(path, value == "true")
    MessageUtil.success(sender, "$path を $value に変更しました。")
  }

  private fun setCommandRoles(sender: CommandSender, args: List<String>) {
    val command = args.getOrNull(1)?.lowercase()
    if (command !in commandIds()) {
      MessageUtil.error(sender, "コマンド名を指定してください: ${commandIds().joinToString(", ")}")
      return
    }
    val roles = normalizeValues(args.drop(2), allowWildcard = true)
    if (roles == null) {
      MessageUtil.error(sender, "ロール名は英数字・ハイフン・アンダースコア、または * / none を指定してください。")
      return
    }
    saveConfigValue("access.commands.$command", roles)
    MessageUtil.success(
        sender,
        "access.commands.$command を ${roles.ifEmpty { listOf("none") }.joinToString(", ")} に変更しました。",
    )
  }

  private fun setRole(sender: CommandSender, args: List<String>) {
    val role = args.getOrNull(1)?.lowercase()
    val field = args.getOrNull(2)?.lowercase()
    if (!isSafeId(role) || field !in listOf("permission", "inherits")) {
      MessageUtil.error(
          sender,
          "使い方: /csm config access role <role> <permission|inherits> <value...>",
      )
      return
    }
    when (field) {
      "permission" -> {
        val permission = args.getOrNull(3)
        if (permission.isNullOrBlank()) {
          MessageUtil.error(sender, "権限ノードを指定してください。")
          return
        }
        saveConfigValue("access.roles.$role.permission", permission)
        MessageUtil.success(sender, "access.roles.$role.permission を $permission に変更しました。")
      }
      "inherits" -> {
        val inherits = normalizeValues(args.drop(3), allowWildcard = false)
        if (inherits == null) {
          MessageUtil.error(sender, "継承ロールは英数字・ハイフン・アンダースコア、または none を指定してください。")
          return
        }
        saveConfigValue("access.roles.$role.inherits", inherits)
        MessageUtil.success(
            sender,
            "access.roles.$role.inherits を ${inherits.ifEmpty { listOf("none") }.joinToString(", ")} に変更しました。",
        )
      }
    }
  }

  private fun setCommandList(
      sender: CommandSender,
      path: String,
      rawValues: List<String>,
      label: String,
  ) {
    val values = normalizeValues(rawValues, allowWildcard = true)
    if (values == null || values.any { it != "*" && it !in commandIds() }) {
      MessageUtil.error(sender, "$label には CSM コマンド名、*、または none を指定してください。")
      return
    }
    saveConfigValue(path, values)
    MessageUtil.success(
        sender,
        "$path を ${values.ifEmpty { listOf("none") }.joinToString(", ")} に変更しました。",
    )
  }

  private fun saveConfigValue(path: String, value: Any) {
    plugin.config.set(path, value)
    plugin.saveConfig()
  }

  private fun requireConfigEditor(sender: CommandSender): Boolean {
    if (
        sender.isOp ||
            sender.hasPermission(CommandKey.CONFIG.legacyPermission) ||
            sender.hasPermission("citiesskymine.admin") ||
            sender.hasPermission("citiesskymine.role.admin")
    ) {
      return true
    }
    MessageUtil.error(sender, "config.yml の編集には admin 権限が必要です。")
    return false
  }

  private fun commandList(path: String): String =
      plugin.config.getStringList(path).ifEmpty { listOf("none") }.joinToString(", ")

  private fun completeAccess(args: List<String>): List<String> {
    if (args.isEmpty()) return emptyList()
    if (args.size == 1) {
      return filter(
          args[0],
          listOf("status", "set", "command", "role", "command-blocks", "non-player", "help"),
      )
    }
    return when (args[0].lowercase()) {
      "set" ->
          when (args.size) {
            2 -> filter(args[1], BOOLEAN_KEYS)
            3 -> filter(args[2], listOf("true", "false"))
            else -> emptyList()
          }
      "command" ->
          when (args.size) {
            2 -> filter(args[1], commandIds())
            else -> filter(args.last(), roleIds() + listOf("*", "none"))
          }
      "role" ->
          when (args.size) {
            2 -> filter(args[1], roleIds())
            3 -> filter(args[2], listOf("permission", "inherits"))
            else ->
                if (args[2].equals("inherits", ignoreCase = true)) {
                  filter(args.last(), roleIds() + listOf("none"))
                } else {
                  emptyList()
                }
          }
      "command-blocks",
      "non-player" -> filter(args.last(), commandIds() + listOf("*", "none"))
      else -> emptyList()
    }
  }

  private fun commandIds(): List<String> = CommandKey.values().map { it.id }.sorted()

  private fun roleIds(): List<String> {
    val configured = plugin.config.getConfigurationSection("access.roles")?.getKeys(false).orEmpty()
    return (configured + DEFAULT_ROLES).map { it.lowercase() }.distinct().sorted()
  }

  private fun normalizeValues(values: List<String>, allowWildcard: Boolean): List<String>? {
    if (values.isEmpty()) return null
    if (values.size == 1 && values[0].equals("none", ignoreCase = true)) return emptyList()
    val normalized =
        values.flatMap { it.split(",") }.map { it.trim().lowercase() }.filter { it.isNotEmpty() }
    if (normalized.isEmpty()) return null
    if (normalized.any { it == "*" && !allowWildcard }) return null
    if (normalized.any { it != "*" && !isSafeId(it) }) return null
    return normalized.distinct()
  }

  private fun filter(prefix: String, values: List<String>): List<String> =
      values.filter { it.startsWith(prefix, ignoreCase = true) }

  private fun isSafeId(value: String?): Boolean = value?.matches(SAFE_ID) == true

  companion object {
    private val BOOLEAN_KEYS =
        listOf("enabled", "op-bypass", "console-bypass", "legacy-permissions-bypass")
    private val DEFAULT_ROLES = listOf("admin", "takumi", "builder")
    private val SAFE_ID = Regex("[a-z0-9_-]+")
  }
}
