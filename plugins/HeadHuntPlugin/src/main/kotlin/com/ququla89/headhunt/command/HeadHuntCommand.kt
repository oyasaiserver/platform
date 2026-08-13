package com.ququla89.headhunt.command

import com.ququla89.headhunt.manager.GameManager
import com.ququla89.headhunt.manager.StartError
import com.ququla89.headhunt.manager.TeamManager
import com.ququla89.headhunt.manager.TreasureManager
import com.ququla89.headhunt.model.GameMode
import com.ququla89.headhunt.model.TeamMode
import com.ququla89.headhunt.util.broadcastLegacy
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

  override fun execute(
      commandSourceStack: CommandSourceStack,
      args: Array<String>,
  ) {
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
      "validate" -> handleValidate(sender)
      "repair" -> handleRepair(sender)
      "team" -> handleTeam(sender, args)
      else -> sendUsage(sender)
    }
  }

  private fun sendUsage(sender: CommandSender) {
    sender.sendMessage(
        PREFIX + "/headhunt <setmode|start|reset|stop|list|deleteall|validate|repair|team> ..."
    )
  }

  override fun canUse(sender: CommandSender): Boolean =
      sender.hasPermission("headhunt.use") || sender.hasPermission("headhunt.admin")

  private fun requireAdmin(sender: CommandSender): Boolean {
    if (!sender.hasPermission("headhunt.admin")) {
      sender.sendMessage(PREFIX + "この操作を行う権限がありません。")
      return false
    }
    return true
  }

  private fun requirePlayer(sender: CommandSender): Player? {
    if (sender !is Player) {
      sender.sendMessage(PREFIX + "このコマンドはプレイヤーのみ実行できます。")
      return null
    }
    return sender
  }

  private fun requireUse(sender: CommandSender): Boolean {
    if (!sender.hasPermission("headhunt.use") && !sender.hasPermission("headhunt.admin")) {
      sender.sendMessage(PREFIX + "この操作を行う権限がありません。")
      return false
    }
    return true
  }

  private fun resolveTargetPlayer(
      sender: CommandSender,
      targetName: String?,
  ): Player? {
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

  private fun handleSetMode(
      sender: CommandSender,
      args: Array<out String>,
  ) {
    if (!requireAdmin(sender)) return
    val player = requirePlayer(sender) ?: return
    when (args.getOrNull(1)?.lowercase()) {
      "on" -> {
        gameManager.setSetMode(player.uniqueId, true)
        sender.sendMessage(PREFIX + "宝HEAD設定モードをONにしました。")
      }

      "off" -> {
        gameManager.setSetMode(player.uniqueId, false)
        sender.sendMessage(PREFIX + "宝HEAD設定モードをOFFにしました。")
      }

      else -> {
        sender.sendMessage(PREFIX + "使い方: /headhunt setmode <on|off>")
      }
    }
  }

  // ---- start ----

  private fun handleStart(
      sender: CommandSender,
      args: Array<out String>,
  ) {
    if (!requireAdmin(sender)) return
    val mode =
        when (args.getOrNull(1)?.lowercase()) {
          "solo" -> {
            GameMode.SOLO
          }

          "team" -> {
            GameMode.TEAM
          }

          else -> {
            sender.sendMessage(PREFIX + "使い方: /headhunt start <solo|team> [shared|individual]")
            return
          }
        }

    val teamMode =
        if (mode == GameMode.TEAM) {
          when (args.getOrNull(2)?.lowercase()) {
            null -> {
              TeamMode.SHARED
            }

            "shared" -> {
              TeamMode.SHARED
            }

            "individual" -> {
              TeamMode.INDIVIDUAL
            }

            else -> {
              sender.sendMessage(PREFIX + "使い方: /headhunt start team <shared|individual>")
              return
            }
          }
        } else {
          TeamMode.SHARED
        }

    val validationIssues = treasureManager.validateAll()
    if (validationIssues.isNotEmpty()) {
      sender.sendMessage(PREFIX + "宝HEADの登録情報に${validationIssues.size}件の問題があるため開始できません。")
      sendValidationIssues(sender, validationIssues)
      sender.sendMessage(PREFIX + "/headhunt repair で修復してから再確認してください。")
      return
    }

    val error = gameManager.start(mode, teamMode)
    if (error != null) {
      val message =
          when (error) {
            StartError.AlreadyRunning -> "既にイベントが進行中です。"
            StartError.NoTreasures -> "宝HEADが1件も登録されていません。"
            StartError.NotEnoughTeams -> "メンバーがいる参加チームが2つ以上必要です。"
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
    val participationLabel =
        if (mode == GameMode.TEAM) {
          " / ${gameManager.activeTeamCount}チーム・${gameManager.activeParticipantCount}人"
        } else {
          ""
        }
    val message =
        PREFIX +
            "HeadHuntイベントを開始しました！ [" +
            modeLabel +
            "] 対象: " +
            treasureManager.size +
            "件" +
            participationLabel
    broadcastLegacy(message)
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

  private fun handleDeleteAll(
      sender: CommandSender,
      args: Array<out String>,
  ) {
    if (!requireAdmin(sender)) return
    if (gameManager.isRunning) {
      sender.sendMessage(PREFIX + "イベント進行中はdeleteallを実行できません。先に /headhunt stop を実行してください。")
      return
    }

    val now = System.currentTimeMillis()
    pendingDeleteConfirmations.entries.removeIf { now - it.value > CONFIRM_TIMEOUT_MILLIS }
    val senderKey = if (sender is Player) sender.uniqueId.toString() else "console:${sender.name}"
    if (args.getOrNull(1)?.lowercase() == "confirm") {
      val requestedAt = pendingDeleteConfirmations[senderKey]
      if (requestedAt == null || now - requestedAt > CONFIRM_TIMEOUT_MILLIS) {
        pendingDeleteConfirmations.remove(senderKey)
        sender.sendMessage(PREFIX + "確認がタイムアウトしました。もう一度 /headhunt deleteall を実行してください。")
        return
      }
      pendingDeleteConfirmations.remove(senderKey)
      val result = treasureManager.clearAll()
      val saved = treasureManager.save()
      if (!saved) {
        sender.sendMessage(PREFIX + "§c宝HEAD情報の保存に失敗しました。コンソールを確認してください。")
        return
      }
      sender.sendMessage(PREFIX + "${result.removed}件の宝HEAD情報を削除しました。")
      if (result.retained.isNotEmpty()) {
        sender.sendMessage(PREFIX + "§e${result.retained.size}件はワールドまたはブロックを更新できず保持しました。")
        sendValidationIssues(sender, result.retained)
      }
      return
    }

    pendingDeleteConfirmations[senderKey] = now
    sender.sendMessage(
        PREFIX + "全ての宝HEAD情報を削除します。30秒以内に /headhunt deleteall confirm を実行して確定してください。"
    )
  }

  // ---- validate / repair ----

  private fun handleValidate(sender: CommandSender) {
    if (!requireAdmin(sender)) return
    val issues = treasureManager.validateAll()
    if (issues.isEmpty()) {
      sender.sendMessage(PREFIX + "全ての宝HEAD登録が正常です。")
      return
    }
    sender.sendMessage(PREFIX + "§e宝HEADの登録情報に${issues.size}件の問題があります。")
    sendValidationIssues(sender, issues)
  }

  private fun handleRepair(sender: CommandSender) {
    if (!requireAdmin(sender)) return
    if (gameManager.isRunning) {
      sender.sendMessage(PREFIX + "イベント進行中は修復できません。先に /headhunt stop を実行してください。")
      return
    }
    val result = treasureManager.repairAll()
    val saved = treasureManager.save()
    if (!saved) {
      sender.sendMessage(PREFIX + "§c修復結果の保存に失敗しました。コンソールを確認してください。")
      return
    }
    sender.sendMessage(
        PREFIX + "宝HEAD情報を修復しました。PDC修復: ${result.repaired}件、無効定義削除: ${result.removed}件",
    )
    if (result.unresolved.isNotEmpty()) {
      sender.sendMessage(PREFIX + "§e${result.unresolved.size}件は自動修復できませんでした。")
      sendValidationIssues(sender, result.unresolved)
    }
  }

  private fun sendValidationIssues(
      sender: CommandSender,
      issues: List<com.ququla89.headhunt.manager.TreasureValidationIssue>,
  ) {
    for (issue in issues.take(10)) {
      val treasure = issue.treasure
      sender.sendMessage(
          "- ${treasure.id}: ${treasure.worldName} (${treasure.x}, ${treasure.y}, ${treasure.z}) - ${issue.reason}",
      )
    }
    if (issues.size > 10) {
      sender.sendMessage(PREFIX + "ほか${issues.size - 10}件の問題があります。")
    }
  }

  // ---- team ----

  private fun handleTeam(
      sender: CommandSender,
      args: Array<out String>,
  ) {
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

  private fun requireTeamNameArg(
      sender: CommandSender,
      args: Array<out String>,
  ): String? {
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

  private fun handleTeamCreate(
      sender: CommandSender,
      args: Array<out String>,
  ) {
    if (!requireAdmin(sender)) return
    if (!requireTeamsUnlocked(sender)) return
    val name = requireTeamNameArg(sender, args) ?: return
    if (!teamManager.create(name)) {
      sender.sendMessage(PREFIX + "チーム " + name + " は既に存在します。")
      return
    }
    sender.sendMessage(PREFIX + "チーム " + name + " を作成しました。")
  }

  private fun handleTeamJoin(
      sender: CommandSender,
      args: Array<out String>,
  ) {
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

  private fun handleTeamLeave(
      sender: CommandSender,
      args: Array<out String>,
  ) {
    if (!requireAdmin(sender)) return
    if (!requireTeamsUnlocked(sender)) return
    val target = resolveTargetPlayer(sender, args.getOrNull(2)) ?: return
    if (!teamManager.removeMember(target.uniqueId)) {
      sender.sendMessage(PREFIX + target.name + " はどのチームにも所属していません。")
      return
    }
    sender.sendMessage(PREFIX + target.name + " をチームから離脱させました。")
  }

  private fun handleTeamDelete(
      sender: CommandSender,
      args: Array<out String>,
  ) {
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
    if (!requireUse(sender)) return
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

  private fun handleTeamInfo(
      sender: CommandSender,
      args: Array<out String>,
  ) {
    if (!requireUse(sender)) return
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
    val sender = commandSourceStack.sender
    val isAdmin = sender.hasPermission("headhunt.admin")
    val canUse = sender.hasPermission("headhunt.use") || isAdmin
    return when (args.size) {
      1 -> {
        buildList {
              if (isAdmin)
                  addAll(
                      listOf(
                          "setmode",
                          "start",
                          "reset",
                          "stop",
                          "list",
                          "deleteall",
                          "validate",
                          "repair",
                      )
                  )
              if (canUse) add("team")
            }
            .filter { it.startsWith(args[0].lowercase()) }
      }

      2 -> {
        when (args[0].lowercase()) {
          "setmode" -> if (isAdmin) listOf("on", "off") else emptyList()
          "start" -> if (isAdmin) listOf("solo", "team") else emptyList()
          "deleteall" -> if (isAdmin) listOf("confirm") else emptyList()
          "team" ->
              buildList {
                if (isAdmin) addAll(listOf("create", "join", "leave", "delete"))
                if (canUse) addAll(listOf("list", "info"))
              }
          else -> emptyList()
        }.filter { it.startsWith(args[1].lowercase()) }
      }

      3 -> {
        when {
          isAdmin && args[0].equals("start", true) && args[1].equals("team", true) -> {
            listOf("shared", "individual")
          }

          isAdmin && args[0].equals("team", true) && args[1].equals("leave", true) -> {
            Bukkit.getOnlinePlayers().map { it.name }
          }

          isAdmin &&
              args[0].equals("team", true) &&
              args[1].lowercase() in listOf("join", "delete") -> {
            teamManager.all().map { it.name }
          }

          canUse && args[0].equals("team", true) && args[1].equals("info", true) -> {
            teamManager.all().map { it.name }
          }

          else -> {
            emptyList()
          }
        }.filter { it.startsWith(args[2].lowercase()) }
      }

      4 -> {
        if (isAdmin && args[0].equals("team", true) && args[1].equals("join", true)) {
          Bukkit.getOnlinePlayers().map { it.name }.filter { it.startsWith(args[3].lowercase()) }
        } else {
          emptyList()
        }
      }

      else -> {
        emptyList()
      }
    }
  }
}
