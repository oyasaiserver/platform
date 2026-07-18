package com.ququla89.headhunt.command

import com.ququla89.headhunt.manager.GameManager
import com.ququla89.headhunt.manager.StartError
import com.ququla89.headhunt.manager.TeamManager
import com.ququla89.headhunt.manager.TreasureManager
import com.ququla89.headhunt.model.GameMode
import com.ququla89.headhunt.model.TeamMode
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

private const val PREFIX = "§6[HeadHunt] §r"
private const val CONFIRM_TIMEOUT_MILLIS = 30_000L

class HeadHuntCommand(
    private val treasureManager: TreasureManager,
    private val teamManager: TeamManager,
    private val gameManager: GameManager,
) : BasicCommand {

  private val pendingDeleteConfirmations: MutableMap<String, Long> = mutableMapOf()

  override fun execute(commandSourceStack: CommandSourceStack, args: Array<String>) {
    val sender = commandSourceStack.sender
    if (args.isEmpty()) {
      sendUsage(sender)
      return
    }

    when (args[0].lowercase()) {
      "setmode" -> handleSetMode(sender, args)
      "start" -> handleStart(sender, args)
      "reset" -> handleReset(sender)
      "stop" -> handleStop(sender)
      "list" -> handleList(sender)
      "deleteall" -> handleDeleteAll(sender, args)
      "team" -> handleTeam(sender, args)
      else -> sendUsage(sender)
    }
  }

  private fun sendUsage(sender: CommandSender) {
    sender.sendMessage(PREFIX + "/headhunt <setmode|start|reset|stop|list|deleteall|team> ...")
  }

  private fun requireAdmin(sender: CommandSender): Boolean {
    if (!sender.hasPermission("headhunt.admin")) {
      sender.sendMessage(PREFIX + "この操作を行う権限がありません。")
      return false
    }
    return true
  }

  private fun requirePlayer(sender: CommandSender): Player? {
    if (sender !is Player) {
      sender.sendMessage(PREFIX + "このコマンドはプレイヤーのみ実行できます。プレイヤー名を引数で指定してください。")
      return null
    }
    return sender
  }

  private fun resolveTargetPlayer(sender: CommandSender, targetName: String?): Player? {
    if (targetName != null) {
      val target = Bukkit.getPlayer(targetName)
      if (target == null) {
        sender.sendMessage(PREFIX + "プレイヤー $targetName が見つかりません（オンラインである必要があります）。")
        return null
      }
      return target
    }
    return requirePlayer(sender)
  }

  // ---- setmode ----

  private fun handleSetMode(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    when (args.getOrNull(1)?.lowercase()) {
      "on" -> {
        gameManager.setModeEnabled = true
        sender.sendMessage(PREFIX + "宝HEAD設定モードをONにしました。")
      }
      "off" -> {
        gameManager.setModeEnabled = false
        sender.sendMessage(PREFIX + "宝HEAD設定モードをOFFにしました。")
      }
      else -> sender.sendMessage(PREFIX + "使い方: /headhunt setmode <on|off>")
    }
  }

  // ---- start ----

  private fun handleStart(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    val mode =
        when (args.getOrNull(1)?.lowercase()) {
          "solo" -> GameMode.SOLO
          "team" -> GameMode.TEAM
          else -> {
            sender.sendMessage(PREFIX + "使い方: /headhunt start <solo|team> [shared|individual]")
            return
          }
        }

    val teamMode =
        if (mode == GameMode.TEAM) {
          when (args.getOrNull(2)?.lowercase()) {
            null -> TeamMode.SHARED
            "shared" -> TeamMode.SHARED
            "individual" -> TeamMode.INDIVIDUAL
            else -> {
              sender.sendMessage(PREFIX + "使い方: /headhunt start team <shared|individual>")
              return
            }
          }
        } else {
          TeamMode.SHARED
        }

    val error = gameManager.start(mode, teamMode)
    if (error != null) {
      val message =
          when (error) {
            StartError.AlreadyRunning -> "既にイベントが進行中です。"
            StartError.NoTreasures -> "宝HEADが1件も登録されていません。"
            StartError.NotEnoughTeams -> "参加チームが2つ以上必要です。"
          }
      sender.sendMessage(PREFIX + message)
      return
    }

    val modeLabel =
        if (mode == GameMode.SOLO) {
          "個人戦"
        } else {
          "チーム戦 (" + (if (teamMode == TeamMode.SHARED) "共有" else "個人発見") + ")"
        }
    val message =
        PREFIX + "HeadHuntイベントを開始しました！ [" + modeLabel + "] 対象: " + treasureManager.size + "件"
    Bukkit.broadcastMessage(message)
    Bukkit.getConsoleSender().sendMessage(message)
  }

  // ---- reset / stop ----

  private fun handleReset(sender: CommandSender) {
    if (!requireAdmin(sender)) return
    gameManager.resetProgress()
    sender.sendMessage(PREFIX + "発見状況をリセットしました。宝の座標定義はそのまま残っています。")
  }

  private fun handleStop(sender: CommandSender) {
    if (!requireAdmin(sender)) return
    gameManager.stop()
    sender.sendMessage(PREFIX + "HeadHuntイベントを終了しました。")
  }

  // ---- list ----

  private fun handleList(sender: CommandSender) {
    if (!requireAdmin(sender)) return
    val treasures = treasureManager.all()
    if (treasures.isEmpty()) {
      sender.sendMessage(PREFIX + "宝HEADは登録されていません。")
      return
    }
    sender.sendMessage(PREFIX + "登録済み宝HEAD (" + treasures.size + "件):")
    for (treasure in treasures) {
      val line =
          "- " +
              treasure.id +
              " : " +
              treasure.worldName +
              " (" +
              treasure.x +
              ", " +
              treasure.y +
              ", " +
              treasure.z +
              ")"
      sender.sendMessage(line)
    }
  }

  // ---- deleteall ----

  private fun handleDeleteAll(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    if (gameManager.isRunning) {
      sender.sendMessage(PREFIX + "イベント進行中はdeleteallを実行できません。先に /headhunt stop を実行してください。")
      return
    }

    val senderKey = sender.name
    if (args.getOrNull(1)?.lowercase() == "confirm") {
      val requestedAt = pendingDeleteConfirmations[senderKey]
      if (
          requestedAt == null || System.currentTimeMillis() - requestedAt > CONFIRM_TIMEOUT_MILLIS
      ) {
        pendingDeleteConfirmations.remove(senderKey)
        sender.sendMessage(PREFIX + "確認がタイムアウトしました。もう一度 /headhunt deleteall を実行してください。")
        return
      }
      pendingDeleteConfirmations.remove(senderKey)
      treasureManager.clearAll()
      treasureManager.save()
      sender.sendMessage(PREFIX + "全ての宝HEAD情報を削除しました。")
      return
    }

    pendingDeleteConfirmations[senderKey] = System.currentTimeMillis()
    sender.sendMessage(
        PREFIX + "全ての宝HEAD情報を削除します。30秒以内に /headhunt deleteall confirm を実行して確定してください。"
    )
  }

  // ---- team ----

  private fun handleTeam(sender: CommandSender, args: Array<out String>) {
    when (args.getOrNull(1)?.lowercase()) {
      "create" -> handleTeamCreate(sender, args)
      "join" -> handleTeamJoin(sender, args)
      "leave" -> handleTeamLeave(sender, args)
      "delete" -> handleTeamDelete(sender, args)
      "list" -> handleTeamList(sender)
      "info" -> handleTeamInfo(sender, args)
      else ->
          sender.sendMessage(PREFIX + "使い方: /headhunt team <create|join|leave|delete|list|info>")
    }
  }

  private fun requireTeamNameArg(sender: CommandSender, args: Array<out String>): String? {
    val name = args.getOrNull(2)
    if (name.isNullOrBlank()) {
      sender.sendMessage(PREFIX + "チーム名を指定してください。")
      return null
    }
    return name
  }

  private fun requireTeamsUnlocked(sender: CommandSender): Boolean {
    if (gameManager.isRunning) {
      sender.sendMessage(PREFIX + "イベント進行中はチーム編成を変更できません。")
      return false
    }
    return true
  }

  private fun handleTeamCreate(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    if (!requireTeamsUnlocked(sender)) return
    val name = requireTeamNameArg(sender, args) ?: return
    if (!teamManager.create(name)) {
      sender.sendMessage(PREFIX + "チーム " + name + " は既に存在します。")
      return
    }
    sender.sendMessage(PREFIX + "チーム " + name + " を作成しました。")
  }

  private fun handleTeamJoin(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    if (!requireTeamsUnlocked(sender)) return
    val name = requireTeamNameArg(sender, args) ?: return
    val target = resolveTargetPlayer(sender, args.getOrNull(3)) ?: return

    if (teamManager.find(name) == null) {
      sender.sendMessage(PREFIX + "チーム " + name + " は存在しません。")
      return
    }
    val currentTeam = teamManager.teamOf(target.uniqueId)
    if (currentTeam != null) {
      sender.sendMessage(PREFIX + target.name + " は既にチーム " + currentTeam.name + " に所属しています。")
      return
    }
    teamManager.addMember(name, target.uniqueId)
    sender.sendMessage(PREFIX + target.name + " をチーム " + name + " に参加させました。")
  }

  private fun handleTeamLeave(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    if (!requireTeamsUnlocked(sender)) return
    val target = resolveTargetPlayer(sender, args.getOrNull(2)) ?: return
    if (!teamManager.removeMember(target.uniqueId)) {
      sender.sendMessage(PREFIX + target.name + " はどのチームにも所属していません。")
      return
    }
    sender.sendMessage(PREFIX + target.name + " をチームから離脱させました。")
  }

  private fun handleTeamDelete(sender: CommandSender, args: Array<out String>) {
    if (!requireAdmin(sender)) return
    if (!requireTeamsUnlocked(sender)) return
    val name = requireTeamNameArg(sender, args) ?: return
    if (!teamManager.delete(name)) {
      sender.sendMessage(PREFIX + "チーム " + name + " は存在しません。")
      return
    }
    sender.sendMessage(PREFIX + "チーム " + name + " を削除しました。")
  }

  private fun handleTeamList(sender: CommandSender) {
    val teams = teamManager.all()
    if (teams.isEmpty()) {
      sender.sendMessage(PREFIX + "作成されているチームはありません。")
      return
    }
    sender.sendMessage(PREFIX + "チーム一覧 (" + teams.size + "件):")
    for (team in teams) {
      val memberNames =
          team.members.joinToString(", ") { Bukkit.getOfflinePlayer(it).name ?: it.toString() }
      sender.sendMessage("- " + team.name + " [" + team.members.size + "人]: " + memberNames)
    }
  }

  private fun handleTeamInfo(sender: CommandSender, args: Array<out String>) {
    val name = args.getOrNull(2)
    val team =
        if (name != null) {
          teamManager.find(name)
        } else {
          val player = requirePlayer(sender) ?: return
          teamManager.teamOf(player.uniqueId)
        }

    if (team == null) {
      val message = if (name != null) "チーム " + name + " は存在しません。" else "どのチームにも所属していません。"
      sender.sendMessage(PREFIX + message)
      return
    }

    val memberNames =
        team.members.joinToString(", ") { Bukkit.getOfflinePlayer(it).name ?: it.toString() }
    sender.sendMessage(PREFIX + "チーム " + team.name + " [" + team.members.size + "人]")
    sender.sendMessage("メンバー: " + memberNames)
  }

  override fun suggest(
      commandSourceStack: CommandSourceStack,
      args: Array<String>,
  ): Collection<String> {
    return when (args.size) {
      1 ->
          listOf("setmode", "start", "reset", "stop", "list", "deleteall", "team").filter {
            it.startsWith(args[0].lowercase())
          }
      2 ->
          when (args[0].lowercase()) {
            "setmode" -> listOf("on", "off")
            "start" -> listOf("solo", "team")
            "deleteall" -> listOf("confirm")
            "team" -> listOf("create", "join", "leave", "delete", "list", "info")
            else -> emptyList()
          }.filter { it.startsWith(args[1].lowercase()) }
      3 ->
          when {
            args[0].equals("start", true) && args[1].equals("team", true) ->
                listOf("shared", "individual")
            args[0].equals("team", true) && args[1].equals("leave", true) ->
                Bukkit.getOnlinePlayers().map { it.name }
            args[0].equals("team", true) && args[1] in listOf("join", "delete") ->
                teamManager.all().map { it.name }
            else -> emptyList()
          }.filter { it.startsWith(args[2].lowercase()) }
      4 ->
          if (args[0].equals("team", true) && args[1].equals("join", true)) {
            Bukkit.getOnlinePlayers().map { it.name }.filter { it.startsWith(args[3].lowercase()) }
          } else {
            emptyList()
          }
      else -> emptyList()
    }
  }
}
