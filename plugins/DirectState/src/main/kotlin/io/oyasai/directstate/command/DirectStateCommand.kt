package io.oyasai.directstate.command

import io.oyasai.directstate.Permissions
import io.oyasai.directstate.edit.ToolItems
import io.oyasai.directstate.edit.replace.TypeReplaceMode
import io.oyasai.directstate.settings.PlayerSettingsStore
import io.oyasai.directstate.settings.SettingsMenu
import io.oyasai.directstate.update.UpdateMode
import org.bukkit.*
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabExecutor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin

/** コマンドと設定変更。永続化・更新抑制の操作を共通経路へ送る。 */
internal class DirectStateCommand(
    private val plugin: JavaPlugin,
    private val playerSettings: PlayerSettingsStore,
    private val updateMode: UpdateMode,
    private val createTool: (ToolItems.Kind) -> ItemStack,
    private val markTool: (ItemStack, ToolItems.Kind) -> Unit,
) : TabExecutor {
  private val menu =
      SettingsMenu({ playerSettings.get(it.uniqueId) }) { player, slot ->
        when (slot) {
          10 -> writeHandMode(player, !playerSettings.get(player.uniqueId).handEnabled)
          12 -> updateMode.setPersonal(player, !playerSettings.get(player.uniqueId).updateEnabled)
          14 ->
              writeReplacementMode(player, !playerSettings.get(player.uniqueId).replacementEnabled)
          16 ->
              writeTypeReplacementMode(
                  player,
                  playerSettings.get(player.uniqueId).typeReplacementMode.next(),
              )
          22 -> toggleItemlessModes(player)
        }
      }

  /** 設定画面のイベントと、コマンド実行・入力候補をBukkitへ登録する。 */
  fun register() {
    val command =
        checkNotNull(plugin.getCommand("directstate")) {
          "directstate command is missing from plugin.yml"
        }
    plugin.server.pluginManager.registerEvents(menu, plugin)
    command.setExecutor(this)
    command.tabCompleter = this
  }

  /** 短縮コマンドを正式な操作名へ直し、権限確認後に各設定処理へ振り分ける。 */
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    val alias = label.lowercase()
    // 短縮コマンドでは先頭引数が操作名ではないため、引数の読み始めが異なる。
    val commandArgs = if (alias in setOf("dsh", "dsr", "dsu")) args.toList() else args.drop(1)
    val operation =
        when (alias) {
          "dsh" -> "hand"
          "dsr" -> "replace"
          "dsu" -> "update"
          else -> args.firstOrNull()?.lowercase()?.let { if (it == "tgl") "toggle" else it }
        }
    val permission =
        when (operation) {
          "hand" -> Permissions.HAND
          "replace" -> Permissions.REPLACE
          "update" -> Permissions.UPDATE
          "stick",
          "sstick",
          "hstick" -> Permissions.GET_TOOL
          else -> Permissions.ALL
        }
    if (sender !is Player || !Permissions.has(sender, permission)) {
      sender.sendMessage("権限がありません。")
      return true
    }
    if (operation == "help") {
      CommandHelp.send(sender, commandArgs.firstOrNull())
      return true
    }
    // 操作名を含む個数。短縮コマンドでも /ds と同じ引数判定を使う。
    val argumentCount = commandArgs.size + 1
    when (operation) {
      null -> menu.open(sender)
      "toggle" -> toggleItemlessModes(sender)
      "update" -> setUpdateMode(sender, commandArgs.firstOrNull(), argumentCount)
      "hand" -> setHandMode(sender, commandArgs.firstOrNull(), argumentCount)
      "replace" ->
          when {
            commandArgs.isEmpty() ->
                writeReplacementMode(
                    sender,
                    !playerSettings.get(sender.uniqueId).replacementEnabled,
                )
            commandArgs.first().equals("type", true) || commandArgs.first().equals("tp", true) ->
                setTypeReplacementMode(sender, commandArgs.getOrNull(1), argumentCount)
            else -> setReplacementMode(sender, commandArgs.firstOrNull(), argumentCount)
          }
      "stick" -> handleTool(sender, commandArgs, ToolItems.Kind.HAND)
      "sstick" -> handleTool(sender, commandArgs, ToolItems.Kind.SIMPLE)
      "hstick" -> handleTool(sender, commandArgs, ToolItems.Kind.HOLD)
      else -> sender.sendMessage("/ds help でコマンド一覧を表示します。")
    }
    return true
  }

  /** インベントリに空きがあるときだけ、指定された種類の棒を渡す。 */
  private fun giveTool(player: Player, kind: ToolItems.Kind) {
    if (player.inventory.firstEmpty() == -1) {
      player.sendMessage("インベントリに空きを作ってください。")
      return
    }
    player.inventory.addItem(createTool(kind))
    player.sendMessage("${kind.displayName}: ${kind.description}")
  }

  private fun handleTool(player: Player, args: List<String>, kind: ToolItems.Kind) {
    if (args.firstOrNull().equals("set", true)) {
      val item = player.inventory.itemInMainHand
      if (item.type.isAir) {
        player.sendMessage("手にアイテムを持ってください。")
        return
      }
      markTool(item, kind)
      player.inventory.setItemInMainHand(item)
      player.sendMessage("${kind.displayName}を付与しました。")
    } else {
      giveTool(player, kind)
    }
  }

  /** 使用中の別名と引数位置に合わせて、入力候補を絞り込む。 */
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): List<String> {
    val alias = label.lowercase()
    return when {
      alias == "dsh" && args.size == 1 -> matches(args[0], "on", "off", "toggle")
      alias == "dsu" && args.size == 1 -> matches(args[0], "on", "off", "toggle")
      alias == "dsr" && args.size == 1 -> matches(args[0], "on", "off", "toggle", "tp")
      alias == "dsr" && args.size == 2 && args[0].equals("tp", true) -> completeTypeMode(args[1])
      args.size == 1 ->
          matches(
              args[0],
              "help",
              "toggle",
              "tgl",
              "stick",
              "sstick",
              "hstick",
              "hand",
              "update",
              "replace",
          )
      args.size == 2 && args[0].equals("help", true) -> matches(args[1], "1", "2", "3")
      args.size == 2 && args[0].equals("replace", true) ->
          matches(args[1], "on", "off", "toggle", "type")
      args.size == 2 && args[0].lowercase() in setOf("hand", "update") ->
          matches(args[1], "on", "off", "toggle")
      args.size == 3 && args[0].equals("replace", true) && args[1].equals("type", true) ->
          completeTypeMode(args[2])
      else -> emptyList()
    }
  }

  /** 入力済みの文字から始まる候補だけを、大文字小文字を無視して返す。 */
  private fun matches(input: String, vararg choices: String) =
      choices.filter { it.startsWith(input, true) }

  /** Type Replaceで選べる列挙値を、小文字の入力候補にする。 */
  private fun completeTypeMode(input: String) =
      TypeReplaceMode.entries.map { it.name.lowercase() }.filter { it.startsWith(input, true) }

  /** Hand設定を保存し、変更後の状態をプレイヤーへ通知する。 */
  private fun writeHandMode(player: Player, enabled: Boolean) {
    playerSettings.update(player.uniqueId) { it.handEnabled = enabled }
    player.sendMessage("Hand: ${if (enabled) "ON" else "OFF"}")
  }

  /** handの引数をON/OFFへ解釈し、不正なら使用法を表示する。 */
  private fun setHandMode(player: Player, argument: String?, argumentCount: Int) {
    val enabled =
        booleanSetting(playerSettings.get(player.uniqueId).handEnabled, argument, argumentCount)
            ?: run {
              player.sendMessage("/ds hand [on|off|toggle]")
              return
            }
    writeHandMode(player, enabled)
  }

  /** Hand・Update・Replaceを個別設定を変えずにまとめて休止・再開する。 */
  private fun toggleItemlessModes(player: Player) {
    val disabled = !playerSettings.get(player.uniqueId).itemlessModesDisabled
    playerSettings.update(player.uniqueId) { it.itemlessModesDisabled = disabled }
    player.sendMessage(if (disabled) "DSを無効化しました。" else "DSを有効化しました。")
  }

  /** Replace設定を保存し、Type設定を含む現在状態を表示する。 */
  private fun writeReplacementMode(player: Player, enabled: Boolean) {
    playerSettings.update(player.uniqueId) { it.replacementEnabled = enabled }
    showReplacementStatus(player)
  }

  /** replaceの引数をON/OFFへ解釈し、不正なら使用法を表示する。 */
  private fun setReplacementMode(player: Player, argument: String?, argumentCount: Int) {
    val enabled =
        booleanSetting(
            playerSettings.get(player.uniqueId).replacementEnabled,
            argument,
            argumentCount,
        )
            ?: run {
              player.sendMessage("/ds replace [on|off|toggle]")
              return
            }
    writeReplacementMode(player, enabled)
  }

  /** Type Replaceの方式を保存し、Replace全体の状態を表示する。 */
  private fun writeTypeReplacementMode(player: Player, mode: TypeReplaceMode) {
    playerSettings.update(player.uniqueId) { it.typeReplacementMode = mode }
    showReplacementStatus(player)
  }

  /** 引数なしなら次の方式へ進め、引数ありなら方式名として解釈する。 */
  private fun setTypeReplacementMode(player: Player, argument: String?, argumentCount: Int) {
    val mode =
        when {
          argumentCount == 2 -> playerSettings.get(player.uniqueId).typeReplacementMode.next()
          argumentCount == 3 -> TypeReplaceMode.parse(argument ?: "")
          else -> null
        }
            ?: run {
              player.sendMessage("/ds replace type <off|strict|compatible>")
              return
            }
    writeTypeReplacementMode(player, mode)
  }

  /** updateの引数をON/OFFへ解釈し、UpdateModeの共通設定経路へ渡す。 */
  private fun setUpdateMode(player: Player, argument: String?, argumentCount: Int) {
    val enabled =
        booleanSetting(playerSettings.get(player.uniqueId).updateEnabled, argument, argumentCount)
            ?: run {
              player.sendMessage("/ds update [on|off|toggle]")
              return
            }
    updateMode.setPersonal(player, enabled)
  }

  /** on・off・toggleをBooleanへ変換する。on/offは引数一つだけを受理し、toggleは従来どおり後続引数を無視する。 */
  private fun booleanSetting(current: Boolean, argument: String?, argumentCount: Int): Boolean? =
      when {
        argumentCount == 1 || argument.equals("toggle", true) -> !current
        argumentCount == 2 && argument.equals("on", true) -> true
        argumentCount == 2 && argument.equals("off", true) -> false
        else -> null
      }

  /** Replace、Type Replace、一括停止を一行で確認できるようにする。 */
  private fun showReplacementStatus(player: Player) {
    val configured = playerSettings.get(player.uniqueId)
    val replace = configured.replacementEnabled
    val type = configured.typeReplacementMode
    // Type ReplaceはReplaceがOFFか一括停止中なら、設定値があっても動作しない。
    val inactive = if (configured.itemlessModesDisabled || !replace) " (inactive)" else ""
    player.sendMessage("Replace: ${if (replace) "ON" else "OFF"} | Type : ${type.name}$inactive")
  }
}
