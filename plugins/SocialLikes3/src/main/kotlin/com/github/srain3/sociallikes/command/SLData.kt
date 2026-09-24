package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.stats.SLDataLogger
import com.github.srain3.sociallikes.stats.SLDataStatsService
import com.github.srain3.sociallikes.stats.SLDataStatsService.LikeSeries
import com.github.srain3.sociallikes.stats.SLDataStatsService.Period
import com.github.srain3.sociallikes.stats.SLDataStatsService.RankingPeriod
import io.papermc.paper.connection.PlayerGameConnection
import io.papermc.paper.dialog.Dialog
import io.papermc.paper.event.player.PlayerCustomClickEvent
import io.papermc.paper.registry.data.dialog.ActionButton
import io.papermc.paper.registry.data.dialog.DialogBase
import io.papermc.paper.registry.data.dialog.action.DialogAction
import io.papermc.paper.registry.data.dialog.body.DialogBody
import io.papermc.paper.registry.data.dialog.body.PlainMessageDialogBody
import io.papermc.paper.registry.data.dialog.type.DialogType
import java.io.File
import java.time.LocalDate
import java.util.UUID
import kotlin.math.abs
import kotlin.math.ceil
import kotlin.math.max
import net.kyori.adventure.key.Key
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.TextComponent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.Style
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

@Suppress("UnstableApiUsage")
object SLData : CommandExecutor, TabCompleter, Listener {
  private const val DIALOG_AXIS_MAX = 7500
  private const val DIALOG_AXIS_DIVISIONS = 5
  private const val DIALOG_GRAPH_ROWS = DIALOG_AXIS_DIVISIONS
  private const val DIALOG_BODY_WIDTH = 520
  private const val DIALOG_BUTTON_WIDTH = 130
  private const val DIALOG_ACTION_COLUMNS = 2
  private const val DIALOG_RANKING_NAME_COLUMNS = 10
  private const val DIALOG_BUILD_TITLE_COLUMNS = 10
  private const val DIALOG_RANK_BAR_COLUMNS = 24
  // Weekly graph layout constants; unrelated to the 24-cell ranking bar above.
  private const val DIALOG_BAR_WIDTH_CHARS = 1
  // A 2x vertical graph needs enough horizontal room for its Japanese X-axis labels.  Four base
  // cells become eight cells at 2x, which gives each categorical label its own column.
  private const val DIALOG_BAR_GAP_CHARS = 4
  private const val DIALOG_NBSP = '\u00A0'
  // 2026-08-17:
  // \u53F3\u8EF8\u306E\u4F59\u767D\u306F\u5143\u3005"\u2581\u2581\u2581"(hiddenColor\u3067\u5857\u3063\u3066\u898B\u3048\u306A\u304F\u3059\u308B\u60F3\u5B9A)\u3060\u3063\u305F\u304C\u3001\u5B9F\u6A5F\u3067\u306F
  // \u2581\u306E\u898B\u305F\u76EE\u306E\u7DDA\u304ChiddenColor\u3067\u3082\u8584\u304F\u898B\u3048\u3066\u3057\u307E\u3063\u3066\u3044\u305F(\u30E6\u30FC\u30B6\u30FC\u6307\u6458)\u3002NBSP\u306F\u4E2D\u8EAB\u304C\u7A7A\u306E\u30B0\u30EA\u30D5
  // \u306A\u306E\u3067\u8272\u306B\u95A2\u4FC2\u306A\u304F\u672C\u5F53\u306B\u4F55\u3082\u63CF\u753B\u3055\u308C\u306A\u3044\u3002
  private const val DIALOG_NBSP_X3 = "\u00A0\u00A0\u00A0"
  private const val DIALOG_FULL_SPACE = '\u3000'
  // U+2B1B\u3002\u5B9F\u6E2Cadvance=8px(dialogMeasuredGlyphMetrics\u53C2\u7167)\u3002\u6D3B\u52D5\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7\u306F\u6587\u5B57\u3092\u56FA\u5B9A\u3057
  // \u8272\u3060\u3051\u3067\u6FC3\u6DE1\u3092\u8868\u3059(DIALOG_STYLE.md\u300C\u4F7F\u3046\u6587\u5B57\u300D\u53C2\u7167\u3001`\u2581\u2591\u2592\u2593\u2588`\u306E\u9001\u308A\u5E45\u4E0D\u4E00\u81F4\u3092\u56DE\u907F)\u3002
  private const val ACTIVITY_HEATMAP_CELL = '\u2B1B'
  private const val DIALOG_CONFIG_FILE_NAME = "sldata-dialog.yml"
  private const val DIALOG_STATS_TEXT_FILE_NAME = "sldata-stats2-text.md"
  private const val DIALOG_STATS_DUMP_FILE_NAME = "sldata-stats2-dump.txt"
  private val dialogStatsAliases = setOf("stats2", "stats", "detail", "details")
  private val activeDialogRequests = mutableMapOf<UUID, DialogRequest>()
  private val activeDialogRankingPeriods = mutableMapOf<UUID, RankingPeriod>()
  private val activeDialogStatsTargets = mutableMapOf<UUID, DialogStatsTarget>()
  private val activeDialogStatsCategories = mutableMapOf<UUID, DialogStatsCategory>()
  private val dialogStatsIncludeLifeWorld = mutableMapOf<UUID, Boolean>()
  @Volatile private var dialogRenderConfig: DialogRenderConfig? = null
  @Volatile private var dialogStatsText: DialogStatsText? = null
  private val dialogStatsPlainTextSerializer = PlainTextComponentSerializer.plainText()
  private val dialogWeekKey = Key.key("sociallikes3", "sldata_week")
  private val dialogMonthKey = Key.key("sociallikes3", "sldata_month")
  private val dialogYearKey = Key.key("sociallikes3", "sldata_year")
  private val dialogOtherFormatsKey = Key.key("sociallikes3", "sldata_other_formats")
  private val dialogOtherFormatsBackKey = Key.key("sociallikes3", "sldata_other_formats_back")
  private val dialogPreviewGraphKey = Key.key("sociallikes3", "sldata_preview_graph")
  private val dialogRankingKey = Key.key("sociallikes3", "sldata_ranking")
  private val dialogRankingWeekKey = Key.key("sociallikes3", "sldata_ranking_week")
  private val dialogRankingMonthKey = Key.key("sociallikes3", "sldata_ranking_month")
  private val dialogRankingYearKey = Key.key("sociallikes3", "sldata_ranking_year")
  private val dialogRankingAllKey = Key.key("sociallikes3", "sldata_ranking_all")
  private val dialogStatsKey = Key.key("sociallikes3", "sldata_stats2")
  private val dialogStatsReloadKey = Key.key("sociallikes3", "sldata_stats2_reload")
  private val dialogStatsPeriodKey = Key.key("sociallikes3", "sldata_stats2_period")
  private val activeDialogStatsPeriods =
      java.util.concurrent.ConcurrentHashMap<UUID, RankingPeriod>()
  private val dialogStatsWorldFilterKey = Key.key("sociallikes3", "sldata_stats2_world_filter")
  private val dialogStatsSettingsKey = Key.key("sociallikes3", "sldata_stats2_settings")
  private val dialogStatsSettingsBackKey = Key.key("sociallikes3", "sldata_stats2_settings_back")
  private val dialogStatsOverviewKey = Key.key("sociallikes3", "sldata_stats2_overview")
  private val dialogStatsPersonalKey = Key.key("sociallikes3", "sldata_stats2_personal")
  private val dialogStatsSocialKey = Key.key("sociallikes3", "sldata_stats2_social")
  private val dialogStatsServerKey = Key.key("sociallikes3", "sldata_stats2_server")
  private val dialogCloseKey = Key.key("sociallikes3", "sldata_close")
  private val DIALOG_FONT = Key.key("minecraft", "uniform")

  /**
   * Loads the editable stats2 copy on enable so syntax errors are visible before a player opens it.
   */
  fun init() {
    reloadDialogStatsText()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!command.name.equals("sldata", ignoreCase = true)) return false

    if (sender !is Player) {
      // コンソールからの実行はダンプまたはリロードのみ許可
      if (
          args.getOrNull(0)?.equals("dialog", ignoreCase = true) == true &&
              args.getOrNull(1)?.lowercase() in dialogStatsAliases &&
              args.getOrNull(2)?.equals("dump", ignoreCase = true) == true
      ) {
        dumpDialogStatsFromConsole(sender, args)
        SLDataLogger.log(sender, label, args.toList(), 0, true, "Console dump")
        return true
      }
      if (args.firstOrNull()?.lowercase() in setOf("reload", "dump")) {
        sender.sendMessage(Tools.socialLikesLOGO + " &c管理コマンドは /sldataop を使用してください。".color())
        SLDataLogger.log(sender, label, args.toList(), 0, false, "Redirected to /sldataop")
        return true
      }
      sender.sendMessage(
          Tools.socialLikesLOGO + " &c/sldata はプレイヤー専用です。管理用は /sldataop を使用してください。".color()
      )
      SLDataLogger.log(sender, label, args.toList(), 0, false, "Console execution blocked")
      return true
    }

    val t0 = System.currentTimeMillis()
    val sub = args.firstOrNull()?.lowercase()

    when (sub) {
      null,
      "",
      "stats",
      "stats2",
      "fast",
      "speed",
      "overview" -> {
        // デフォルト: 自身の総合統計ダイアログ（タブ切り替え対応）を即座に開く
        openDialogStats(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "Dialog stats opened",
        )
      }
      "ranking",
      "rank",
      "top",
      "top5",
      "leaders" -> {
        openDialogRanking(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "Ranking dialog opened",
        )
      }
      "server" -> {
        openServerPublicityStats(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "Server stats dialog opened",
        )
      }
      "week",
      "month",
      "year" -> {
        openDialog(sender, parseDialogRequest(args.toList()))
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "Period dialog: $sub",
        )
      }
      "dialog" -> {
        handleDialog(sender, args.drop(1))
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "Legacy dialog command",
        )
      }
      "help" -> {
        sendModeList(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "help",
        )
      }
      else -> {
        if (sender.isOp) {
          sender.sendMessage(Tools.socialLikesLOGO + " &e管理・デバッグ機能は &f/sldataop &eに移行しました。".color())
        }
        sender.sendMessage(
            Tools.socialLikesLOGO + " &c不明な引数です。&f/sldata &cで総合統計ダイアログを開きます。".color()
        )
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            false,
            "Unknown arg: ${args[0]}",
        )
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String> {
    if (!command.name.equals("sldata", ignoreCase = true)) return mutableListOf()
    return when (args.size) {
      1 ->
          listOf("ranking", "server", "week", "month", "year")
              .filter { it.startsWith(args[0], ignoreCase = true) }
              .toMutableList()
      else -> mutableListOf()
    }
  }

  private fun sendModeList(player: Player) {
    player.sendMessage(Tools.socialLikesLOGO + " &f/sldata コマンド一覧".color())
    player.sendMessage("&7/sldata &f- あなたの総合統計ダイアログを開く".color())
    player.sendMessage("&7/sldata ranking &f- 今週の制作者別いいね数Top5を表示".color())
    player.sendMessage("&7/sldata server &f- 全員に公開する宣伝効果・掲載回数のサーバー集計を表示".color())
    if (player.isOp) {
      player.sendMessage("&e/sldataop &7- 管理者用コマンド（他プレイヤー統計等）".color())
    }
  }

  private fun handleDialog(player: Player, args: List<String>) {
    if (args.firstOrNull()?.equals("reload", ignoreCase = true) == true) {
      val config = reloadDialogRenderConfig()
      val statsText = reloadDialogStatsText()
      player.sendMessage(
          Tools.socialLikesLOGO +
              " &fdialog設定を再読込しました。style=${config.widthStyle.name.lowercase()} line='${config.lineChar}' empty='${config.emptyChar}' labels=${config.labelStyle.name.lowercase()} stats2-text=${statsText.loadedEntryCount}項目"
                  .color()
      )
      return
    }
    if (args.firstOrNull()?.lowercase() in setOf("ranking", "rank", "top", "top5", "leaders")) {
      openDialogRanking(player)
      return
    }
    if (args.firstOrNull()?.lowercase() in dialogStatsAliases) {
      handleDialogStats(player, args)
      return
    }
    openDialog(player, parseDialogRequest(args))
  }

  /**
   * Public, friction-free aggregate. Unlike /sldata dialog stats2 it contains no player-specific
   * behavioural ranking, so every player may open it.
   */
  private fun openServerPublicityStats(player: Player) {
    val stats = SLDataStatsService.loadServerPublicityStats(5)
    val palette = dialogTextPalette(player)
    val rows =
        listOf(
            DialogBody.plainMessage(
                Component.text()
                    .style(Style.style().font(DIALOG_FONT).build())
                    .append(Component.text("サーバー公開統計: 宣伝効果\n", NamedTextColor.LIGHT_PURPLE))
                    .append(
                        Component.text(
                            "対象: いいね時刻が揃った建築 ${formatCount(stats.targetBuildCount)}件・リポスト ${formatCount(stats.totalReposts)}回\nリポスト前平均 ${formatAverageCount(stats.normalReactionAverage)}件 → リポスト後平均 ${formatAverageCount(stats.publicityReactionAverage)}件（${formatSignedAverage(stats.reactionDelta)}件）",
                            palette.secondary,
                        )
                    )
                    .build(),
                560,
            ),
            dialogStatsRowsBody(
                palette,
                "宣伝回数ランキング Top5",
                stats.topBuilds.mapIndexed { index, row ->
                  "${index + 1}. ${dialogBuildTitleLabel(row.title, 20)} ${formatCount(row.publicityCount)}回"
                },
                "まだ宣伝履歴はありません。",
            ),
            dialogStatsRowsBody(
                palette,
                "複数回宣伝された建築のイベント分析",
                stats.recurringBuilds.map { row ->
                  "${dialogBuildTitleLabel(row.title, 16)}: リポスト前平均 ${formatAverageCount(row.normalReactionAverage)}件 → リポスト後平均 ${formatAverageCount(row.publicityReactionAverage)}件（${formatSignedAverage(row.reactionDelta)}件）"
                },
                "複数回宣伝された建築はまだありません。",
            ),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(
                          Component.text("SocialLikes サーバー統計", NamedTextColor.LIGHT_PURPLE)
                      )
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(rows)
                      .build()
              )
              .type(
                  DialogType.multiAction(listOf(dialogButton("閉じる", "閉じます", dialogCloseKey)))
                      .columns(1)
                      .build()
              )
        }
    player.showDialog(dialog)
    player.sendMessage(Tools.socialLikesLOGO + " &fserver: 宣伝の公開集計を送信しました。".color())
  }

  private fun parseDialogRequest(args: List<String>): DialogRequest {
    var period = Period.WEEK
    args.forEach { arg ->
      dialogPeriod(arg)?.let {
        period = it
        return@forEach
      }
    }
    return DialogRequest(period)
  }

  private fun dialogArgumentSuggestions(previousArgs: List<String>): List<String> {
    val hasPeriod = previousArgs.any { dialogPeriod(it) != null }
    return buildList { if (!hasPeriod) addAll(listOf("week", "month", "year")) }
  }

  private fun dialogStatsPlayerSuggestions(sender: CommandSender, input: String): List<String> {
    if (sender !is Player || !sender.isOp) return emptyList()
    return buildSet {
          Bukkit.getOnlinePlayers().mapTo(this) { it.name }
          Bukkit.getOfflinePlayers().mapNotNullTo(this) { it.name }
        }
        .filter { it.startsWith(input, ignoreCase = true) }
        .sortedBy { it.lowercase() }
  }

  private fun handleDialogStats(player: Player, args: List<String>) {
    if (args.getOrNull(1)?.equals("dump", ignoreCase = true) == true) {
      dumpDialogStats(player, args)
      return
    }
    if (args.getOrNull(1)?.equals("tab", ignoreCase = true) == true) {
      val category = args.getOrNull(2)?.let { DialogStatsCategory.parse(it) }
      if (category == null || args.size != 3) {
        player.sendMessage(
            Tools.socialLikesLOGO +
                " &c使い方: /sldata dialog stats2 tab <overview|personal|social|server>".color()
        )
        return
      }
      openDialogStats(player, category = category)
      return
    }
    val targetName = args.getOrNull(1)
    if (targetName == null) {
      openDialogStats(player)
      return
    }
    if (!player.isOp) {
      player.sendMessage(Tools.socialLikesLOGO + " &c他プレイヤーの詳細統計を表示できるのはOPのみです。".color())
      return
    }
    if (args.size > 2) {
      player.sendMessage(Tools.socialLikesLOGO + " &c使い方: /sldata dialog stats2 [プレイヤー名]".color())
      return
    }

    val target = Bukkit.getOfflinePlayer(targetName)
    if (!target.isOnline && !target.hasPlayedBefore()) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &cプレイヤー「$targetName」が見つかりません。参加済みのプレイヤー名を指定してください。".color()
      )
      return
    }
    openDialogStats(player, target.uniqueId, target.name ?: targetName)
  }

  private fun dumpDialogStats(player: Player, args: List<String>) {
    dumpDialogStatsFromPlayer(player, args.drop(2).toTypedArray())
  }

  internal fun dumpDialogStatsFromPlayer(player: Player, args: Array<out String>) {
    if (!player.isOp) {
      player.sendMessage(Tools.socialLikesLOGO + " &c詳細統計dumpを実行できるのはOPのみです。".color())
      return
    }
    val targetName = args.firstOrNull()
    val target =
        if (targetName == null) DialogStatsTarget(player.uniqueId, player.name)
        else {
          val dbUuid = SLDatabase.findUuidByNameBlocking(targetName)
          val offlinePlayer = Bukkit.getOfflinePlayer(targetName)
          val uuid =
              dbUuid
                  ?: if (
                      offlinePlayer.isOnline ||
                          offlinePlayer.hasPlayedBefore() ||
                          targetName.contains("dummy")
                  )
                      offlinePlayer.uniqueId
                  else null
          if (uuid == null) {
            player.sendMessage(
                Tools.socialLikesLOGO +
                    " &cプレイヤー「$targetName」が見つかりません。参加済みのプレイヤー名を指定してください。".color()
            )
            return
          }
          DialogStatsTarget(uuid, offlinePlayer.name ?: targetName)
        }
    val outputFile = writeDialogStatsDump(player, target.uuid, target.name)
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &fdialog stats2 dump: ${target.name} の詳細統計を書き出しました: ${outputFile.path}".color()
    )
  }

  internal fun dumpDialogStatsFromConsole(sender: CommandSender, args: Array<out String>) {
    val targetName = args.lastOrNull()
    if (targetName == null || targetName.equals("dump", ignoreCase = true)) {
      sender.sendMessage(Tools.socialLikesLOGO + " &c使い方: /sldataop dump <プレイヤー名>".color())
      return
    }
    val dbUuid = SLDatabase.findUuidByNameBlocking(targetName)
    val offlinePlayer = Bukkit.getOfflinePlayer(targetName)
    val uuid =
        dbUuid
            ?: if (offlinePlayer.isOnline || offlinePlayer.hasPlayedBefore()) offlinePlayer.uniqueId
            else null
    if (uuid == null) {
      sender.sendMessage(
          Tools.socialLikesLOGO + " &cプレイヤー「$targetName」が見つかりません。参加済みのプレイヤー名を指定してください。".color()
      )
      return
    }
    val outputFile = writeDialogStatsDump(null, uuid, offlinePlayer.name ?: targetName)
    sender.sendMessage(
        Tools.socialLikesLOGO +
            " &fdialog stats2 dump: ${offlinePlayer.name ?: targetName} の詳細統計を書き出しました: ${outputFile.path}"
                .color()
    )
  }

  private fun dialogPeriod(raw: String?): Period? =
      when (raw?.lowercase()) {
        "week",
        "weekly",
        "w" -> Period.WEEK
        "month",
        "monthly",
        "m" -> Period.MONTH
        "year",
        "yearly",
        "y" -> Period.YEAR
        else -> null
      }

  private fun currentDialogRenderConfig(): DialogRenderConfig =
      dialogRenderConfig ?: reloadDialogRenderConfig()

  internal fun reloadDialogRenderConfig(): DialogRenderConfig {
    val configFile = File(Tools.plugin.dataFolder, DIALOG_CONFIG_FILE_NAME)
    writeDefaultDialogConfigIfMissing(configFile)
    val yaml = YamlConfiguration.loadConfiguration(configFile)
    val style = parseDialogWidthStyle(yaml)
    val config =
        DialogRenderConfig(
            widthStyle = style,
            lineChar = style.lineChar,
            emptyChar = style.emptyChar,
            fillerChar = style.fillerChar,
            labelStyle = style.labelStyle,
            rightAxisGap = style.rightAxisGap,
            normalHorizontalScale = yaml.getInt("normal.horizontal-scale", 1).coerceIn(1, 4),
            normalVerticalScale = yaml.getInt("normal.vertical-scale", 1).coerceIn(1, 4),
            largeHorizontalScale = yaml.getInt("large.horizontal-scale", 2).coerceIn(1, 4),
            largeVerticalScale = yaml.getInt("large.vertical-scale", 2).coerceIn(1, 4),
        )
    dialogRenderConfig = config
    Tools.plugin.logger.info(
        "[SLData] Dialog config loaded file=${configFile.absolutePath} style=${config.widthStyle.name.lowercase()}" +
            " line='${config.lineChar}' empty='${config.emptyChar}' filler='${config.fillerChar}'" +
            " labels=${config.labelStyle.name.lowercase()} rightAxisGapAdvance=${uniformDialogAdvance(config.rightAxisGap)}"
    )
    return config
  }

  private fun currentDialogStatsText(): DialogStatsText = dialogStatsText ?: reloadDialogStatsText()

  internal fun reloadDialogStatsText(): DialogStatsText {
    val textFile = File(Tools.plugin.dataFolder, DIALOG_STATS_TEXT_FILE_NAME)
    writeDefaultDialogStatsTextIfMissing(textFile)
    val entries = mutableMapOf<String, String>()
    var section: String? = null
    var row: String? = null
    var awaitingConfigBlock = false
    var inConfigBlock = false
    var awaitingDisplayImageBlock = false
    var inDisplayImageBlock = false

    textFile.readLines(Charsets.UTF_8).forEachIndexed { index, sourceLine ->
      val lineNumber = index + 1
      val line = sourceLine.trim()
      when {
        line.startsWith("### ") -> {
          val value = line.removePrefix("### ").trim()
          if (section == null || value.isBlank()) {
            Tools.plugin.logger.warning(
                "[SLData] stats2 text ${textFile.name}:$lineNumber has a row heading without a section; ignoring it"
            )
            row = null
          } else {
            row = value
            awaitingConfigBlock = true
          }
          inConfigBlock = false
        }
        line.startsWith("## ") -> {
          val value = line.removePrefix("## ").trim()
          if (value.isBlank()) {
            Tools.plugin.logger.warning(
                "[SLData] stats2 text ${textFile.name}:$lineNumber has an empty section heading; ignoring it"
            )
            section = null
            row = null
          } else {
            section = value
            row = null
            awaitingConfigBlock = true
          }
          inConfigBlock = false
        }
        line == "表示イメージ（例。実データではない）:" -> {
          awaitingConfigBlock = false
          awaitingDisplayImageBlock = true
        }
        awaitingDisplayImageBlock && line == "```" -> {
          awaitingDisplayImageBlock = false
          inDisplayImageBlock = true
        }
        inDisplayImageBlock && line == "```" -> inDisplayImageBlock = false
        awaitingDisplayImageBlock || inDisplayImageBlock -> Unit
        awaitingConfigBlock && line == "```" -> {
          awaitingConfigBlock = false
          inConfigBlock = true
        }
        inConfigBlock && line == "```" -> inConfigBlock = false
        line.isEmpty() || !inConfigBlock -> Unit
        ':' !in line || section == null ->
            Tools.plugin.logger.warning(
                "[SLData] stats2 text ${textFile.name}:$lineNumber is not 'key: value' inside a section; ignoring it"
            )
        else -> {
          val property = line.substringBefore(':').trim()
          val value = line.substringAfter(':').trim().replace("\\n", "\n")
          if (property.isBlank() || value.isBlank()) {
            Tools.plugin.logger.warning(
                "[SLData] stats2 text ${textFile.name}:$lineNumber has an empty key or value; using the built-in default for it"
            )
          } else {
            val key = listOfNotNull(section, row).joinToString(".") + ".${property}"
            if (entries.put(key, value) != null) {
              Tools.plugin.logger.warning(
                  "[SLData] stats2 text ${textFile.name}:$lineNumber duplicates '$key'; the last valid value wins"
              )
            }
          }
        }
      }
    }
    return DialogStatsText(textFile, entries).also {
      dialogStatsText = it
      Tools.plugin.logger.info(
          "[SLData] stats2 text loaded file=${textFile.absolutePath} entries=${it.loadedEntryCount}"
      )
    }
  }

  private fun writeDefaultDialogStatsTextIfMissing(textFile: File) {
    if (textFile.isFile) return
    textFile.parentFile?.mkdirs()
    val defaults =
        Tools.plugin.getResource(DIALOG_STATS_TEXT_FILE_NAME)?.bufferedReader(Charsets.UTF_8)?.use {
          it.readText()
        }
            ?: run {
              Tools.plugin.logger.warning(
                  "[SLData] Missing bundled $DIALOG_STATS_TEXT_FILE_NAME; stats2 uses Kotlin fallback text"
              )
              "# /sldata dialog stats2 文言定義\n"
            }
    textFile.writeText(defaults, Charsets.UTF_8)
    Tools.plugin.logger.info("[SLData] Created default stats2 text file=${textFile.absolutePath}")
  }

  private fun stats2Text(
      key: String,
      fallback: String,
      variables: Map<String, Any?> = emptyMap(),
  ): String {
    val template = currentDialogStatsText().entries[key] ?: fallback
    val unresolved = Regex("\\{([a-z_]+)}").findAll(template).map { it.groupValues[1] }.toSet()
    if (unresolved.any { it !in variables }) {
      Tools.plugin.logger.warning(
          "[SLData] stats2 text '$key' has an unknown placeholder; using its built-in default"
      )
      return fallback
    }
    return unresolved.fold(template) { text, variable ->
      text.replace("{$variable}", variables.getValue(variable).toString())
    }
  }

  private fun writeDefaultDialogConfigIfMissing(configFile: File) {
    if (configFile.isFile) return
    configFile.parentFile?.mkdirs()
    configFile.writeText(
        """
        # SocialLikes3 /sldata dialog text renderer.
        # Change this file, then run /sldata dialog reload. No plugin rebuild is needed.
        #
        # style chooses one width family for every graph character.
        #   ascii-low = 5px cells with ▁ as grid/axis.
        #   fullwidth = 9px cells: labels, fillers, grid, empty cells, and right-axis gap all use 9px glyphs.
        #
        # Deprecated legacy keys (line-char, empty-char, label-style, right-axis-gap) are ignored
        # after style is selected. Mixing 5px and 9px glyphs breaks the Paper dialog layout.
        style: "ascii-low"

        normal:
          horizontal-scale: 1
          vertical-scale: 1

        large:
          horizontal-scale: 2
          vertical-scale: 2
        """
            .trimIndent() + "\n"
    )
  }

  private fun parseDialogWidthStyle(yaml: YamlConfiguration): DialogWidthStyle {
    val explicitStyle = yaml.getString("style")?.trim()?.takeIf { it.isNotEmpty() }
    if (explicitStyle != null) {
      val parsed = DialogWidthStyle.parse(explicitStyle)
      if (parsed != null) {
        warnIgnoredLegacyDialogWidthKeys(yaml, parsed)
        return parsed
      }
      Tools.plugin.logger.warning(
          "[SLData] Dialog config has invalid style='$explicitStyle'; falling back to style=ascii-underscore"
      )
      return DialogWidthStyle.ASCII_LOW
    }

    val legacyEntries = dialogLegacyWidthEntries(yaml)
    val labelStyle = DialogWidthStyle.parse(yaml.getString("label-style"))
    val selectedStyle =
        labelStyle ?: legacyEntries.firstOrNull()?.style ?: DialogWidthStyle.ASCII_LOW
    val mixedStyles = (legacyEntries.map { it.style } + listOfNotNull(labelStyle)).distinct()
    if (legacyEntries.isNotEmpty() || yaml.contains("label-style")) {
      val details =
          (legacyEntries.map { "${it.key}='${it.value}'=>${it.style.name.lowercase()}" } +
                  listOfNotNull(
                      yaml.getString("label-style")?.let {
                        "label-style='$it'=>${selectedStyle.name.lowercase()}"
                      }
                  ))
              .joinToString(", ")
      val levelMessage =
          if (mixedStyles.size > 1) "mixed legacy width settings" else "legacy width settings"
      Tools.plugin.logger.warning(
          "[SLData] Dialog config uses $levelMessage ($details); selected style=${selectedStyle.name.lowercase()} and ignored individual width glyphs"
      )
    }
    return selectedStyle
  }

  private fun warnIgnoredLegacyDialogWidthKeys(
      yaml: YamlConfiguration,
      selectedStyle: DialogWidthStyle,
  ) {
    val keys =
        listOf("line-char", "empty-char", "label-style", "right-axis-gap").filter {
          yaml.contains(it)
        }
    if (keys.isEmpty()) return
    Tools.plugin.logger.warning(
        "[SLData] Dialog config style=${selectedStyle.name.lowercase()} is authoritative; ignored legacy width keys: ${keys.joinToString(",")}"
    )
  }

  private data class DialogLegacyWidthEntry(
      val key: String,
      val value: String,
      val style: DialogWidthStyle,
  )

  private fun dialogLegacyWidthEntries(yaml: YamlConfiguration): List<DialogLegacyWidthEntry> =
      listOfNotNull(
          dialogGlyphWidthEntry(yaml, "line-char"),
          dialogGlyphWidthEntry(yaml, "empty-char"),
          dialogGapWidthEntry(yaml, "right-axis-gap"),
      )

  private fun dialogGlyphWidthEntry(
      yaml: YamlConfiguration,
      key: String,
  ): DialogLegacyWidthEntry? {
    if (!yaml.contains(key)) return null
    val value = yaml.getString(key) ?: return null
    val glyph = parseDialogGlyph(value, '▁')
    val style = dialogWidthStyleForAdvance(uniformDialogAdvance(glyph))
    return DialogLegacyWidthEntry(key, value, style)
  }

  private fun dialogGapWidthEntry(
      yaml: YamlConfiguration,
      key: String,
  ): DialogLegacyWidthEntry? {
    if (!yaml.contains(key)) return null
    val value = yaml.getString(key) ?: return null
    val gap = parseDialogGap(value)
    val advance = uniformDialogAdvance(gap).let { if (gap.isEmpty()) 5 else it / gap.length }
    val style = dialogWidthStyleForAdvance(advance)
    return DialogLegacyWidthEntry(key, value, style)
  }

  private fun dialogWidthStyleForAdvance(advance: Int): DialogWidthStyle =
      if (advance >= DialogWidthStyle.FULLWIDTH.cellAdvancePx) DialogWidthStyle.FULLWIDTH
      else DialogWidthStyle.ASCII_LOW

  private fun parseDialogGlyph(raw: String?, defaultChar: Char): Char {
    val value = raw?.trim().orEmpty()
    return when {
      value.isEmpty() -> defaultChar
      value.equals("underscore", ignoreCase = true) -> '▁'
      value.equals("dash", ignoreCase = true) -> '─'
      value.equals("fullwidth-underscore", ignoreCase = true) -> '＿'
      else -> value.first()
    }
  }

  private fun parseDialogGap(raw: String?): String =
      when (val value = raw ?: "") {
        "" -> fullSpace(1)
        "\\s",
        "space" -> nbsp(1)
        "\\u00A0",
        "nbsp" -> nbsp(1)
        "\\u3000",
        "fullspace",
        "full-space" -> fullSpace(1)
        else -> value.replace(' ', DIALOG_NBSP)
      }

  private fun openDialog(player: Player, request: DialogRequest) {
    openDialog(player, request.period)
  }

  private fun openDialog(player: Player, period: Period) {
    // The dialog graph is intentionally fixed at 2x with the low-block axis.
    val size = DialogGraphSize.LARGE
    val config = currentDialogRenderConfig().withWidthStyle(DialogWidthStyle.ASCII_LOW)
    activeDialogRequests[player.uniqueId] = DialogRequest(period)
    val palette = dialogTextPalette(player)
    val series = SLDataStatsService.loadSeries(period, 9)
    val subtitle = dialogSubtitle(series, size, config)
    val graph = buildDialogGraph(series, size, config)
    val bodyWidth = dialogBodyWidth(graph)
    val playerHeadBody = dialogPlayerHeadBody(player, series, bodyWidth, 32, 32)
    logDialogGraphPreview(period, size, graph, subtitle)

    val actions =
        listOf(
            dialogButton("週間", "週次に切替", dialogWeekKey),
            dialogButton("月間", "月次に切替", dialogMonthKey),
            dialogButton("年間", "年次に切替", dialogYearKey),
            dialogButton(
                stats2Text("Section.stats2.actions.details_label", "詳細統計"),
                stats2Text(
                    "Section.stats2.actions.details_tooltip",
                    "交流・応援・一番乗りの詳細を表示",
                ),
                dialogStatsKey,
            ),
            dialogButton(
                stats2Text("Section.stats2.actions.other_formats_label", "他の形式で見る"),
                "ランキング",
                dialogOtherFormatsKey,
            ),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(
                          Component.text(summaryTitle(series), NamedTextColor.LIGHT_PURPLE)
                      )
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(
                          listOf(
                              playerHeadBody,
                              DialogBody.plainMessage(
                                  Component.text(
                                          subtitle,
                                          palette.secondary,
                                      )
                                      .font(DIALOG_FONT),
                                  bodyWidth,
                              ),
                              DialogBody.plainMessage(
                                  graph.component,
                                  bodyWidth,
                              ),
                          )
                      )
                      .build()
              )
              .type(
                  DialogType.multiAction(actions)
                      .columns(2)
                      .exitAction(dialogButton("閉じる", "閉じます", dialogCloseKey))
                      .build()
              )
        }
    player.showDialog(dialog)
    player.sendMessage(
        Tools.socialLikesLOGO + " &fdialog: Paper Dialog APIで送信しました。統合版は不可見込みです。".color()
    )
  }

  private fun dialogTextPalette(player: Player): DialogTextPalette = DialogTextPalette.DEFAULT

  private fun openDialogOtherFormats(player: Player) {
    val actions =
        listOf(
            dialogButton("ランキング", "制作者別いいね数 Top5", dialogRankingKey),
            dialogButton("グラフへ戻る", "通常のグラフへ戻る", dialogOtherFormatsBackKey),
        )
    player.showDialog(
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(Component.text("他の形式で見る", NamedTextColor.LIGHT_PURPLE))
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(
                          listOf(
                              DialogBody.plainMessage(
                                  Component.text(
                                          "ランキングや別の表示方式を選べます。",
                                          dialogTextPalette(player).secondary,
                                      )
                                      .font(DIALOG_FONT),
                                  DIALOG_BODY_WIDTH,
                              )
                          )
                      )
                      .build()
              )
              .type(
                  DialogType.multiAction(actions)
                      .columns(2)
                      .exitAction(dialogButton("閉じる", "閉じます", dialogCloseKey))
                      .build()
              )
        }
    )
  }

  private fun openDialogRanking(
      player: Player,
      period: RankingPeriod = activeDialogRankingPeriods[player.uniqueId] ?: RankingPeriod.WEEK,
  ) {
    activeDialogRankingPeriods[player.uniqueId] = period
    val ranking = SLDataStatsService.loadOwnerLikeRanking(period)
    val rows = ranking.leaders
    val playerNames = SLDatabase.loadPlayerNamesBlocking(rows.map { it.ownerUuid })
    val maxCount = rows.maxOfOrNull { it.currentCount } ?: 0
    val palette = dialogTextPalette(player)
    val bodyWidth = 250
    val body = mutableListOf<DialogBody>()
    body +=
        DialogBody.plainMessage(
            Component.text(
                    "${dialogRankingPeriodLabel(ranking.period, ranking.startDate)}に押された全いいね ／ 合計 ${formatDialogCount(ranking.total, DialogLabelStyle.FULLWIDTH)}",
                    dialogTextPalette(player).secondary,
                )
                .font(DIALOG_FONT),
            bodyWidth,
        )
    body +=
        DialogBody.plainMessage(
            Component.text("制作者ごとの受信いいね数", palette.secondary).font(DIALOG_FONT),
            bodyWidth,
        )
    if (rows.isEmpty()) {
      body +=
          DialogBody.plainMessage(
              Component.text(
                      "${ranking.period.label}のいいねデータはまだありません。",
                      dialogTextPalette(player).secondary,
                  )
                  .font(DIALOG_FONT),
              bodyWidth,
          )
    } else {
      rows.forEachIndexed { index, summary ->
        body +=
            dialogRankingRowBody(
                index,
                summary,
                playerNames,
                maxCount,
                bodyWidth,
            )
      }
    }

    val actions =
        listOf(
            dialogButton("週間", "今週の制作者別いいね数", dialogRankingWeekKey),
            dialogButton("月間", "今月の制作者別いいね数", dialogRankingMonthKey),
            dialogButton("年間", "今年の制作者別いいね数", dialogRankingYearKey),
            dialogButton("全期間", "全いいね（いいね時刻を問わない）", dialogRankingAllKey),
            dialogButton("再読込", "ランキングを再表示", dialogRankingKey),
            dialogButton(
                stats2Text("Section.stats2.actions.graph_label", "通常グラフ"),
                stats2Text("Section.stats2.actions.graph_tooltip", "週次グラフへ戻る"),
                dialogPreviewGraphKey,
            ),
            dialogButton(
                stats2Text("Section.stats2.actions.details_label", "詳細統計"),
                stats2Text(
                    "Section.stats2.actions.details_tooltip",
                    "交流・応援・一番乗りの詳細を表示",
                ),
                dialogStatsKey,
            ),
            dialogButton(
                stats2Text("Section.stats2.actions.other_formats_label", "他の形式で見る"),
                stats2Text(
                    "Section.stats2.actions.other_formats_tooltip",
                    "ランキングを選択",
                ),
                dialogOtherFormatsKey,
            ),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(
                          Component.text(
                              "いいね数 Top5 — ${ranking.period.label}",
                              NamedTextColor.LIGHT_PURPLE,
                          )
                      )
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(body)
                      .build()
              )
              .type(
                  DialogType.multiAction(actions)
                      .columns(2)
                      .exitAction(dialogButton("閉じる", "閉じます", dialogCloseKey))
                      .build()
              )
        }
    player.showDialog(dialog)
    player.sendMessage(
        Tools.socialLikesLOGO + " &fdialog ranking: ヘッド付きTop5をPaper Dialog APIで送信しました。".color()
    )
  }

  internal fun openDialogStats(
      player: Player,
      targetUuid: UUID = player.uniqueId,
      targetName: String = player.name,
      category: DialogStatsCategory =
          activeDialogStatsCategories[player.uniqueId] ?: DialogStatsCategory.OVERVIEW,
      period: RankingPeriod = activeDialogStatsPeriods[player.uniqueId] ?: RankingPeriod.ALL,
  ) {
    activeDialogStatsTargets[player.uniqueId] = DialogStatsTarget(targetUuid, targetName)
    activeDialogStatsCategories[player.uniqueId] = category
    activeDialogStatsPeriods[player.uniqueId] = period
    val tStart = System.currentTimeMillis()

    Bukkit.getScheduler()
        .runTaskAsynchronously(
            Tools.plugin,
            Runnable {
              val tAsyncStart = System.currentTimeMillis()
              val statsContent =
                  buildDialogStatsContent(player, targetUuid, targetName, category, period)
              val includeLifeWorld = statsContent.includeLifeWorld
              val tContentDone = System.currentTimeMillis()

              val currentPeriod = activeDialogStatsPeriods[player.uniqueId] ?: RankingPeriod.ALL
              val periodLabel =
                  when (currentPeriod) {
                    RankingPeriod.WEEK -> "期間: 今週 ▾"
                    RankingPeriod.MONTH -> "期間: 今月 ▾"
                    RankingPeriod.YEAR -> "期間: 今年 ▾"
                    RankingPeriod.ALL -> "期間: 全期間 ▾"
                  }
              val actions =
                  DialogStatsCategory.entries.map { entry ->
                    dialogButton(
                        dialogStatsCategoryLabel(entry),
                        dialogStatsCategoryTooltip(entry),
                        entry.key,
                    )
                  } +
                      listOf(
                          dialogButton(
                              periodLabel,
                              "集計期間を切り替えます（今週/今月/全期間）",
                              dialogStatsPeriodKey,
                          ),
                          dialogButton(
                              stats2Text("Section.stats2.actions.settings_label", "設定・出力... ▾"),
                              stats2Text(
                                  "Section.stats2.actions.settings_tooltip",
                                  "フィルター設定や別形式での出力を選択",
                              ),
                              dialogStatsSettingsKey,
                          ),
                          dialogButton(
                              stats2Text("Section.stats2.actions.reload_label", "再読込 ⟳"),
                              stats2Text("Section.stats2.actions.reload_tooltip", "詳細統計を再表示"),
                              dialogStatsReloadKey,
                          ),
                      )
              val dialog =
                  Dialog.create { builder ->
                    builder
                        .empty()
                        .base(
                            DialogBase.builder(
                                    Component.text(
                                        statsContent.title,
                                        NamedTextColor.LIGHT_PURPLE,
                                    )
                                )
                                .canCloseWithEscape(true)
                                .afterAction(DialogBase.DialogAfterAction.CLOSE)
                                .body(statsContent.bodies)
                                .build()
                        )
                        .type(
                            DialogType.multiAction(actions)
                                .columns(DIALOG_ACTION_COLUMNS)
                                .exitAction(
                                    dialogButton(
                                        stats2Text("Section.stats2.actions.close_label", "閉じる"),
                                        stats2Text("Section.stats2.actions.close_tooltip", "閉じます"),
                                        dialogCloseKey,
                                    )
                                )
                                .build()
                        )
                  }
              val tDialogCreated = System.currentTimeMillis()
              Bukkit.getScheduler()
                  .runTask(
                      Tools.plugin,
                      Runnable {
                        val tMainThread = System.currentTimeMillis()
                        if (player.isOnline) {
                          player.showDialog(dialog)
                          player.sendMessage(
                              Tools.socialLikesLOGO +
                                  " &fdialog stats2: $targetName の詳細統計をPaper Dialog APIで送信しました。"
                                      .color()
                          )
                        }
                        Tools.plugin.logger.info(
                            "[SLData Profiler] openDialogStats total=${tMainThread - tStart}ms (async_wait=${tAsyncStart - tStart}ms, content=${tContentDone - tAsyncStart}ms, dialog_build=${tDialogCreated - tContentDone}ms, dispatch=${tMainThread - tDialogCreated}ms)"
                        )
                      },
                  )
            },
        )
  }

  private fun openDialogStatsSettings(player: Player) {
    val includeLifeWorld = dialogStatsIncludeLifeWorld[player.uniqueId] == true
    val actions = buildList {
      add(
          dialogButton(
              if (includeLifeWorld)
                  stats2Text("Section.stats2.actions.world_exclude_label", "ライフ: 除外 ▾")
              else stats2Text("Section.stats2.actions.world_include_label", "ライフ: 含む ▾"),
              stats2Text(
                  "Section.stats2.actions.world_filter_tooltip",
                  "ワールド別反応のライフワールド表示を切替",
              ),
              dialogStatsWorldFilterKey,
          )
      )
      add(
          dialogButton(
              "戻る ↩",
              "詳細統計へ戻る",
              dialogStatsSettingsBackKey,
          )
      )
    }
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(Component.text("設定・エクスポート", NamedTextColor.LIGHT_PURPLE))
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(
                          listOf(
                              DialogBody.plainMessage(
                                  Component.text(
                                          "フィルター設定や、別の形式でのデータ出力を選択できます。",
                                          dialogTextPalette(player).secondary,
                                      )
                                      .font(DIALOG_FONT),
                                  DIALOG_BODY_WIDTH,
                              )
                          )
                      )
                      .build()
              )
              .type(
                  DialogType.multiAction(actions)
                      .columns(DIALOG_ACTION_COLUMNS)
                      .exitAction(
                          dialogButton(
                              stats2Text("Section.stats2.actions.close_label", "閉じる"),
                              stats2Text("Section.stats2.actions.close_tooltip", "閉じます"),
                              dialogCloseKey,
                          )
                      )
                      .build()
              )
        }
    player.showDialog(dialog)
  }

  private data class StatsCacheKey(
      val targetUuid: UUID,
      val includeLifeWorld: Boolean,
      val period: RankingPeriod,
  )

  private data class CachedExtendedStats(
      val stats: SLDataStatsService.ExtendedStats,
      val cachedAt: Long,
  )

  private val playerStatsCache =
      java.util.concurrent.ConcurrentHashMap<StatsCacheKey, CachedExtendedStats>()

  private fun getOrLoadExtendedStats(
      targetUuid: UUID,
      includeLifeWorld: Boolean,
      period: RankingPeriod = RankingPeriod.ALL,
      forceReload: Boolean = false,
  ): SLDataStatsService.ExtendedStats {
    val now = System.currentTimeMillis()
    val key = StatsCacheKey(targetUuid, includeLifeWorld, period)
    val cached = playerStatsCache[key]
    if (!forceReload && cached != null && (now - cached.cachedAt) < 30_000L) {
      return cached.stats
    }
    val stats =
        SLDataStatsService.loadExtendedStats(targetUuid.toString(), 5, includeLifeWorld, period)
    playerStatsCache[key] = CachedExtendedStats(stats, now)
    return stats
  }

  private fun buildDialogStatsContent(
      player: Player?,
      targetUuid: UUID,
      targetName: String,
      category: DialogStatsCategory = DialogStatsCategory.OVERVIEW,
      period: RankingPeriod =
          player?.let { activeDialogStatsPeriods[it.uniqueId] } ?: RankingPeriod.ALL,
      forceReload: Boolean = false,
  ): DialogStatsContent {
    val includeLifeWorld = player?.let { dialogStatsIncludeLifeWorld[it.uniqueId] == true } ?: false
    val stats = getOrLoadExtendedStats(targetUuid, includeLifeWorld, period, forceReload)
    val palette = player?.let(::dialogTextPalette) ?: DialogTextPalette.DEFAULT
    val bodyWidth = 560
    fun scopedRows(scope: String?, rows: List<String>, emptyMessage: String): List<String> =
        listOfNotNull(scope) + if (rows.isEmpty()) listOf(emptyMessage) else rows
    val categories =
        linkedMapOf(
            DialogStatsCategory.OVERVIEW to dialogComparisonTableSections(palette, stats),
            DialogStatsCategory.PERSONAL to
                listOf(
                    dialogMemorialSection(stats),
                    dialogStatsVerticalBarSection(
                        palette,
                        "作品ごとのいいね獲得分布 ⏱",
                        "対象: あなたの全建築 ${formatCount(stats.summary.totalOwnBuilds)}件（獲得いいね数ごとの作品数）",
                        dialogDistributionCategoricalSeries(stats.likeDistribution.buckets),
                        null,
                        showAllXAxisLabels = true,
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.builds.top_builds.title", "建築Top5"),
                        null,
                        stats.ownBuilds.map { row ->
                          DialogStatsRankingRow(
                              row.title,
                              row.likeCount,
                              stats2Text(
                                  "Section.stats2.builds.top_builds.value",
                                  "${formatCount(row.likeCount)}いいね",
                                  mapOf("like_count" to formatCount(row.likeCount)),
                              ),
                              "SL ID #${row.buildId} / ${row.title}",
                          )
                        },
                        stats2Text(
                            "Section.stats2.builds.top_builds.empty",
                            "$targetName の建築Top5はまだありません。",
                            mapOf("target_name" to targetName),
                        ),
                        displayNameFormatter = ::dialogBuildTitleDisplayName,
                    ),
                    dialogStatsVerticalBarSection(
                        palette,
                        stats2Text("Section.stats2.builds.age.title", "いいねが付くまでの日数 ⏱"),
                        dialogAgeDistributionScope(stats),
                        dialogAgeCategoricalSeries(stats.ageDistribution.received),
                        stats2Text(
                            "Section.stats2.builds.age.note",
                            "建築の公開時刻から、本人以外が初めていいねした時刻までの日数。「公開から今日まで」の経過日数ではありません。",
                        ),
                        showAllXAxisLabels = true,
                    ),
                    stats.initialLikeSpeed?.let { speed ->
                      dialogStatsVerticalBarSection(
                          palette,
                          stats2Text("Section.stats2.builds.initial_speed.title", "初速（初いいねまで）⏱"),
                          stats2Text(
                              "Section.stats2.builds.initial_speed.range",
                              "最短 ${formatDialogDuration(speed.minimumMillis)} / 中央値 ${formatDialogDuration(speed.medianMillis)} / 最長 ${formatDialogDuration(speed.maximumMillis)} / 平均 ${formatDialogDuration(speed.averageMillis)}",
                              mapOf(
                                  "minimum_duration" to formatDialogDuration(speed.minimumMillis),
                                  "median_duration" to formatDialogDuration(speed.medianMillis),
                                  "maximum_duration" to formatDialogDuration(speed.maximumMillis),
                                  "average_duration" to formatDialogDuration(speed.averageMillis),
                              ),
                          ),
                          dialogInitialSpeedCategoricalSeries(speed.speedBuckets),
                          stats2Text(
                              "Section.stats2.builds.initial_speed.coverage",
                              "対象 ${formatCount(speed.targetBuildCount)}作品 / 計測 ${formatCount(speed.measuredBuildCount)}作品。本人いいねは除外。",
                              mapOf(
                                  "target_build_count" to formatCount(speed.targetBuildCount),
                                  "measured_build_count" to formatCount(speed.measuredBuildCount),
                              ),
                          ),
                          showAllXAxisLabels = true,
                      )
                    }
                        ?: dialogStatsSection(
                            palette,
                            stats2Text("Section.stats2.builds.initial_speed.title", "初速（初いいねまで）⏱"),
                            listOf(
                                stats2Text(
                                    "Section.stats2.builds.initial_speed.empty",
                                    "$targetName の作品で、2026/7/2以降に本人以外の初いいね時刻を持つデータはまだありません。",
                                    mapOf("target_name" to targetName),
                                )
                            ),
                            stats2Text(
                                "Section.stats2.builds.initial_speed.empty",
                                "$targetName の作品で、本人以外の初いいね時刻を持つデータはまだありません。",
                                mapOf("target_name" to targetName),
                            ),
                        ),
                    dialogActivityHeatmapSection(
                        palette,
                        stats2Text("Section.stats2.given.activity_rhythm.title", "活動リズム（JST）⏱"),
                        dialogRhythmScope(stats.activityRhythm),
                        stats.activityRhythm,
                        stats2Text(
                            "Section.stats2.given.activity_rhythm.empty",
                            "いいねした時刻のデータはまだありません。",
                        ),
                    ),
                    dialogStatsVerticalBarSection(
                        palette,
                        stats2Text(
                            "Section.stats2.given.monthly_pace.title",
                            "月別ペース変化（送ったいいね）⏱",
                        ),
                        stats2Text(
                            "Section.stats2.given.monthly_pace.note",
                            "色が違う棒＝集計途中の当月。完了月との比較には使いません。（セルにカーソルを合わせると件数を表示）",
                        ),
                        stats.monthlyGiven.series,
                        incompleteBucketIndices =
                            setOfNotNull(stats.monthlyGiven.incompleteBucketIndex),
                    ),
                    dialogStatsSection(
                        palette,
                        stats2Text("Section.stats2.given.personal_best.title", "自己ベスト（送ったいいね）⏱"),
                        scopedRows(
                            dialogGivenTimestampScope(stats),
                            dialogPersonalBestRows(stats.personalBestHistory),
                            stats2Text(
                                "Section.stats2.given.personal_best.empty",
                                "日・週・月の自己ベスト更新はまだありません。",
                            ),
                        ),
                        stats2Text(
                            "Section.stats2.given.personal_best.empty",
                            "日・週・月の自己ベスト更新はまだありません。",
                        ),
                    ),
                    dialogStatsSection(
                        palette,
                        stats2Text("Section.stats2.given.streak.title", "送ったいいね継続日数⏱"),
                        scopedRows(
                            stats2Text(
                                "Section.stats2.given.streak.subtitle",
                                dialogGivenTimestampScope(stats),
                                mapOf(
                                    "timestamped_given_count" to
                                        formatCount(
                                            stats.activityRhythm.weekdayCounts.flatten().sum()
                                        )
                                ),
                            ),
                            listOf(
                                stats2Text(
                                    "Section.stats2.given.streak.summary",
                                    "現在 ${formatCount(stats.givenStreak.currentDays)}日連続 / 最長 ${formatCount(stats.givenStreak.longestDays)}日 — ${streakTitle(stats.givenStreak)}",
                                    mapOf(
                                        "current_days" to
                                            formatCount(stats.givenStreak.currentDays),
                                        "longest_days" to
                                            formatCount(stats.givenStreak.longestDays),
                                        "streak_title" to streakTitle(stats.givenStreak),
                                    ),
                                ),
                            ),
                            stats2Text("Section.stats2.given.streak.empty", "日次いいねデータはまだありません。"),
                        ),
                        stats2Text("Section.stats2.given.streak.empty", "日次いいねデータはまだありません。"),
                    ),
                ),
            DialogStatsCategory.SOCIAL to
                listOf(
                    dialogStatsBarSection(
                        palette,
                        stats2Text("Section.stats2.social.give_receive.title", "もらった数と返した数"),
                        stats2Text(
                            "Section.stats2.social.give_receive.desc",
                            "全期間。受取寄り（受÷送 ${formatRatio(stats.balance.receivePerGiven)}）。",
                            mapOf(
                                "receive_per_given" to formatRatio(stats.balance.receivePerGiven)
                            ),
                        ),
                        run {
                          val receivedText = formatCount(stats.balance.received)
                          val givenText = formatCount(stats.balance.given)
                          val giveReceiveWidth = maxOf(receivedText.length, givenText.length)
                          val giveReceiveReceivedCountPadded =
                              receivedText.padStart(giveReceiveWidth, '\u3000')
                          val giveReceiveGivenCountPadded =
                              givenText.padStart(giveReceiveWidth, '\u3000')
                          listOf(
                              DialogStatsBarRow(
                                  stats2Text(
                                      "Section.stats2.social.give_receive.received_label",
                                      "受けた",
                                  ),
                                  stats.balance.received.toDouble(),
                                  stats2Text(
                                      "Section.stats2.social.give_receive.received_value",
                                      "${giveReceiveReceivedCountPadded}いいね",
                                      mapOf("received_count" to giveReceiveReceivedCountPadded),
                                  ),
                                  stats2Text(
                                      "Section.stats2.social.give_receive.received_hover",
                                      "$targetName の建築が受けたいいね",
                                      mapOf("target_name" to targetName),
                                  ),
                                  NamedTextColor.AQUA,
                              ),
                              DialogStatsBarRow(
                                  stats2Text(
                                      "Section.stats2.social.give_receive.given_label",
                                      "送った",
                                  ),
                                  stats.balance.given.toDouble(),
                                  stats2Text(
                                      "Section.stats2.social.give_receive.given_value",
                                      "${giveReceiveGivenCountPadded}いいね",
                                      mapOf("given_count" to giveReceiveGivenCountPadded),
                                  ),
                                  stats2Text(
                                      "Section.stats2.social.give_receive.given_hover",
                                      "$targetName が相手の建築へ送ったいいね",
                                      mapOf("target_name" to targetName),
                                  ),
                                  NamedTextColor.GREEN,
                              ),
                          )
                        },
                        stats2Text(
                            "Section.stats2.social.give_receive.empty",
                            "いいねの送受信データはまだありません。",
                        ),
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.social.mutual.title", "送った順の相互いいね"),
                        stats2Text(
                            "Section.stats2.social.mutual.desc",
                            "棒＝あなたが押したいいね。常連サポーター(受けた側)との対比。",
                        ),
                        stats.mutualLikes.pairs
                            .sortedByDescending { it.likesGiven }
                            .map { row ->
                              DialogStatsRankingRow(
                                  dialogPlayerName(row.playerUuid, stats.playerNames),
                                  row.likesGiven,
                                  stats2Text(
                                      "Section.stats2.social.mutual.value",
                                      "${formatCount(row.likesGiven)}いいね",
                                      mapOf("given_count" to formatCount(row.likesGiven)),
                                  ),
                                  stats2Text(
                                      "Section.stats2.social.mutual.hover",
                                      "あなたが送ったいいね",
                                  ),
                              )
                            },
                        stats2Text("Section.stats2.social.mutual.empty", "まだ相互いいねペアはありません。"),
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.social.regular_supporters.title", "常連サポーター"),
                        stats2Text(
                            "Section.stats2.social.regular_supporters.desc",
                            "あなたの建築へ複数回いいねした人。",
                        ),
                        stats.regularSupporters.map { row ->
                          DialogStatsRankingRow(
                              dialogPlayerName(row.playerUuid, stats.playerNames),
                              row.likeCount,
                              stats2Text(
                                  "Section.stats2.social.regular_supporters.value",
                                  "${formatCount(row.likeCount)}いいね",
                                  mapOf("like_count" to formatCount(row.likeCount)),
                              ),
                              stats2Text(
                                  "Section.stats2.social.regular_supporters.hover",
                                  "あなたの建築へ送ったいいね",
                              ),
                          )
                        },
                        stats2Text(
                            "Section.stats2.social.regular_supporters.empty",
                            "$targetName の建築への常連サポーターはまだいません。",
                            mapOf("target_name" to targetName),
                        ),
                    ),
                    dialogStatsVerticalBarSection(
                        palette,
                        stats2Text("Section.stats2.social.repeater.title", "リピーター率"),
                        null,
                        dialogCategoricalSeries(
                            listOf(
                                SLDataStatsService.AgeBucket(
                                    stats2Text(
                                        "Section.stats2.social.repeater.repeater_label",
                                        "リピーター",
                                    ),
                                    stats.repeaterRate.repeaterCount,
                                ),
                                SLDataStatsService.AgeBucket(
                                    stats2Text(
                                        "Section.stats2.social.repeater.first_only_label",
                                        "1回のみ",
                                    ),
                                    (stats.repeaterRate.uniqueLikerCount -
                                            stats.repeaterRate.repeaterCount)
                                        .coerceAtLeast(0),
                                ),
                            )
                        ),
                        stats2Text(
                            "Section.stats2.social.repeater.note",
                            "${formatDialogPercent(stats.repeaterRate.repeaterCount, stats.repeaterRate.uniqueLikerCount)} が2作品以上にいいね。",
                            mapOf(
                                "repeater_rate" to
                                    formatDialogPercent(
                                        stats.repeaterRate.repeaterCount,
                                        stats.repeaterRate.uniqueLikerCount,
                                    )
                            ),
                        ),
                        showAllXAxisLabels = true,
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.social.fastest_supporters.title", "最速サポーター ⏱"),
                        stats2Text(
                            "Section.stats2.social.fastest_supporters.subtitle",
                            "対象: いいね時刻が揃った自作品 ${formatCount(stats.fastestSupporterBuildCount)}作品",
                            mapOf(
                                "fastest_supporter_build_count" to
                                    formatCount(stats.fastestSupporterBuildCount)
                            ),
                        ),
                        stats.fastestSupporters.map { row ->
                          DialogStatsRankingRow(
                              dialogPlayerName(row.playerUuid, stats.playerNames),
                              row.count,
                              stats2Text(
                                  "Section.stats2.social.fastest_supporters.value",
                                  "${formatCount(row.count)}回",
                                  mapOf("fastest_count" to formatCount(row.count)),
                              ),
                              stats2Text(
                                  "Section.stats2.social.fastest_supporters.hover",
                                  "最速でいいねした作品数",
                              ),
                          )
                        },
                        stats2Text(
                            "Section.stats2.social.fastest_supporters.empty",
                            "$targetName の新作への最速サポーターデータはまだありません。",
                            mapOf("target_name" to targetName),
                        ),
                    ),
                    dialogStatsBarSection(
                        palette,
                        stats2Text("Section.stats2.publicity.effect.title", "宣伝効果（前後24時間）⏱"),
                        stats2Text(
                            "Section.stats2.publicity.effect.desc",
                            "あなたの建築のリポスト ${formatCount(stats.publicity.totalReposts)}回。前後24時間平均（差 ${formatSignedAverage(stats.publicity.reactionDelta)}件）。\n宣伝＝10ポイント（P）を消費して建築を再表示する機能。他人のリポスト分も含みます。",
                            mapOf(
                                "total_reposts" to formatCount(stats.publicity.totalReposts),
                                "reaction_delta" to
                                    formatSignedAverage(stats.publicity.reactionDelta),
                            ),
                        ),
                        listOf(
                            DialogStatsBarRow(
                                stats2Text(
                                    "Section.stats2.publicity.effect.after_label",
                                    "宣伝後",
                                ),
                                stats.publicity.publicityReactionAverage,
                                stats2Text(
                                    "Section.stats2.publicity.effect.after_value",
                                    "${formatAverageCount(stats.publicity.publicityReactionAverage)}いいね/回",
                                    mapOf(
                                        "after_average" to
                                            formatAverageCount(
                                                stats.publicity.publicityReactionAverage
                                            )
                                    ),
                                ),
                                stats2Text(
                                    "Section.stats2.publicity.effect.after_hover",
                                    "リポスト後24時間の平均",
                                ),
                                NamedTextColor.GREEN,
                            ),
                            DialogStatsBarRow(
                                stats2Text(
                                    "Section.stats2.publicity.effect.before_label",
                                    "宣伝前",
                                ),
                                stats.publicity.normalReactionAverage,
                                stats2Text(
                                    "Section.stats2.publicity.effect.before_value",
                                    "${formatAverageCount(stats.publicity.normalReactionAverage)}いいね/回",
                                    mapOf(
                                        "before_average" to
                                            formatAverageCount(
                                                stats.publicity.normalReactionAverage
                                            )
                                    ),
                                ),
                                stats2Text(
                                    "Section.stats2.publicity.effect.before_hover",
                                    "リポスト前24時間の平均",
                                ),
                                NamedTextColor.GREEN,
                            ),
                        ),
                        stats2Text(
                            "Section.stats2.publicity.effect.empty",
                            "このプレイヤーの建築には、まだ宣伝履歴がありません。",
                        ),
                    ),
                    dialogStatsBarSection(
                        palette,
                        stats2Text(
                            "Section.stats2.publicity.recurring.title",
                            "複数回宣伝の反応変化（イベント分析）⏱",
                        ),
                        stats2Text(
                            "Section.stats2.publicity.recurring.desc",
                            "反応増加の大きい順。各作品のリポスト前後24時間平均。",
                        ),
                        stats.publicity.recurringBuilds.let { builds ->
                          val recurringMaxAvgLen =
                              builds
                                  .flatMap {
                                    listOf(
                                        formatAverageCount(it.normalReactionAverage).length,
                                        formatAverageCount(it.publicityReactionAverage).length,
                                    )
                                  }
                                  .maxOfOrNull { it } ?: 3
                          builds.flatMap { row ->
                            val titleFull =
                                compactDialogText(toDialogFullWidth(row.title), 8).padEnd(8, '　')
                            val beforeVal =
                                formatAverageCount(row.normalReactionAverage)
                                    .padStart(recurringMaxAvgLen, ' ')
                            val afterVal =
                                formatAverageCount(row.publicityReactionAverage)
                                    .padStart(recurringMaxAvgLen, ' ')
                            listOf(
                                DialogStatsBarRow(
                                    stats2Text(
                                        "Section.stats2.publicity.recurring.before_label",
                                        "${titleFull}　前",
                                        mapOf("build_title" to titleFull),
                                    ),
                                    row.normalReactionAverage,
                                    stats2Text(
                                        "Section.stats2.publicity.recurring.before_value",
                                        "前$beforeVal",
                                        mapOf("before_average" to beforeVal),
                                    ),
                                    "SL ID #${row.buildId} / ${row.title}",
                                    NamedTextColor.GRAY,
                                ),
                                DialogStatsBarRow(
                                    stats2Text(
                                        "Section.stats2.publicity.recurring.after_label",
                                        "${titleFull}　後",
                                        mapOf("build_title" to titleFull),
                                    ),
                                    row.publicityReactionAverage,
                                    stats2Text(
                                        "Section.stats2.publicity.recurring.after_value",
                                        "後$afterVal",
                                        mapOf("after_average" to afterVal),
                                    ),
                                    "SL ID #${row.buildId} / ${row.title}",
                                    NamedTextColor.GREEN,
                                ),
                            )
                          }
                        },
                        stats2Text(
                            "Section.stats2.publicity.recurring.empty",
                            "複数回宣伝された建築はまだありません。",
                        ),
                    ),
                    dialogStatsBarSection(
                        palette,
                        stats2Text("Section.stats2.publicity.top_builds.title", "宣伝回数ランキング Top5"),
                        stats2Text(
                            "Section.stats2.publicity.top_builds.desc",
                            "宣伝回数の多い順。あなたの建築のリポスト履歴。",
                        ),
                        stats.publicity.topBuilds.map { row ->
                          DialogStatsBarRow(
                              dialogBuildTitleLabel(row.title),
                              row.publicityCount.toDouble(),
                              stats2Text(
                                  "Section.stats2.publicity.top_builds.value",
                                  "${formatCount(row.publicityCount)}回",
                                  mapOf("publicity_count" to formatCount(row.publicityCount)),
                              ),
                              "SL ID #${row.buildId} / ${row.title}",
                              NamedTextColor.GREEN,
                          )
                        },
                        stats2Text("Section.stats2.publicity.top_builds.empty", "まだ宣伝された建築はありません。"),
                    ),
                ),
            DialogStatsCategory.SERVER to
                listOf(
                    dialogStatsRankingSection(
                        palette,
                        stats2Text(
                            "Section.stats2.server.top_creators.title",
                            "制作者ランキング Top5（サーバー全体）",
                        ),
                        stats2Text(
                            "Section.stats2.server.top_creators.desc",
                            "全期間で最もいいねを集めている制作者。",
                        ),
                        stats.globalTopCreators.map { row ->
                          DialogStatsRankingRow(
                              dialogPlayerName(row.ownerUuid, stats.playerNames),
                              row.count,
                              stats2Text(
                                  "Section.stats2.server.top_creators.value",
                                  "${formatCount(row.count)}いいね",
                                  mapOf("like_count" to formatCount(row.count)),
                              ),
                              stats2Text(
                                  "Section.stats2.server.top_creators.hover",
                                  "受け取った累計いいね数",
                              ),
                          )
                        },
                        stats2Text(
                            "Section.stats2.server.top_creators.empty",
                            "制作者ランキングデータはまだありません。",
                        ),
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text(
                            "Section.stats2.server.first_likers.title",
                            "全体の一番乗りランキング（押した人）⏱",
                        ),
                        stats2Text(
                            "Section.stats2.server.first_likers.subtitle",
                            "対象: いいね時刻が揃った建築 ${formatCount(stats.reliableTimestampPopulation.completeLikedBuildCount)}件",
                            mapOf(
                                "complete_liked_build_count" to
                                    formatCount(
                                        stats.reliableTimestampPopulation.completeLikedBuildCount
                                    )
                            ),
                        ),
                        stats.globalFirstLikers.map { row ->
                          DialogStatsRankingRow(
                              dialogPlayerName(row.playerUuid, stats.playerNames),
                              row.count,
                              stats2Text(
                                  "Section.stats2.server.first_likers.value",
                                  "${formatCount(row.count)}回",
                                  mapOf("first_like_count" to formatCount(row.count)),
                              ),
                              stats2Text(
                                  "Section.stats2.server.first_likers.hover",
                                  "一番乗り回数",
                              ),
                          )
                        },
                        stats2Text("Section.stats2.server.first_likers.empty", "まだ一番乗りデータはありません。"),
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text(
                            "Section.stats2.server.world_ratio.title",
                            "ワールド別のいいねレシオ${if (includeLifeWorld) "（ライフ含む）" else "（ライフ除外）"}",
                            mapOf(
                                "life_world_suffix" to
                                    if (includeLifeWorld)
                                        stats2Text(
                                            "Section.stats2.server.world_ratio.life_included_suffix",
                                            "（ライフ含む）",
                                        )
                                    else
                                        stats2Text(
                                            "Section.stats2.server.world_ratio.life_excluded_suffix",
                                            "（ライフ除外）",
                                        )
                            ),
                        ),
                        stats2Text(
                            "Section.stats2.server.world_ratio.desc",
                            "ライフ＝生活ワールド（lifeworld）。受÷押の高い順・上位10ワールド。",
                        ),
                        stats.worldReactions.take(10).let { worldRows ->
                          val maxRatioLen =
                              worldRows.maxOfOrNull { formatRatio(it.likeRatio ?: 0.0).length } ?: 5
                          worldRows.map { row ->
                            val ratio = row.likeRatio ?: 0.0
                            val ratioStr = formatRatio(ratio).padStart(maxRatioLen, ' ')
                            DialogStatsRankingRow(
                                row.worldName,
                                (ratio * 100.0).toInt().coerceAtLeast(0),
                                stats2Text(
                                    "Section.stats2.server.world_ratio.value",
                                    "受÷押 $ratioStr",
                                    mapOf("like_ratio" to ratioStr),
                                ),
                                stats2Text(
                                    "Section.stats2.server.world_ratio.hover",
                                    "いいねレシオ",
                                ),
                            )
                          }
                        },
                        stats2Text(
                            "Section.stats2.server.world_ratio.empty",
                            "押したいいねを持つワールドはまだありません。",
                        ),
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.server.weekly_owners.title", "今週いいねした制作者 ⏱"),
                        stats2Text(
                            "Section.stats2.server.weekly_owners.desc",
                            "今週、あなたがいいねした建築の制作者。送ったいいね数の多い順。",
                        ),
                        stats.weeklyLikedOwners.map { row ->
                          DialogStatsRankingRow(
                              dialogPlayerName(row.ownerUuid, stats.playerNames),
                              row.count,
                              stats2Text(
                                  "Section.stats2.server.weekly_owners.value",
                                  "${formatCount(row.count)}いいね",
                                  mapOf("like_count" to formatCount(row.count)),
                              ),
                              stats2Text(
                                  "Section.stats2.server.weekly_owners.hover",
                                  "今週送ったいいね",
                              ),
                          )
                        },
                        stats2Text(
                            "Section.stats2.server.weekly_owners.empty",
                            "今週いいねした制作者データはありません。",
                        ),
                    ),
                    dialogStatsVerticalBarSection(
                        palette,
                        stats2Text("Section.stats2.server.weekly_likes.title", "週次いいね（サーバー全体）"),
                        stats2Text(
                            "Section.stats2.server.weekly_likes.desc",
                            "直近${stats.weekly.buckets.size}週。",
                            mapOf("weekly_bucket_count" to stats.weekly.buckets.size),
                        ),
                        stats.weekly,
                        // 2026-08-17: 週と週の間が広すぎて見づらいというユーザー指摘により、横方向スケールを
                        // 落として棒幅・間隔を縮小(コンパクト化)する。
                        horizontalScaleOverride = 1,
                    ),
                ),
        )
    val sections = categories[category] ?: categories.getValue(DialogStatsCategory.OVERVIEW)

    return DialogStatsContent(
        title =
            stats2Text(
                "Section.stats2.window.title",
                "SocialLikes 詳細統計: $targetName / ${dialogStatsCategoryLabel(category)}",
                mapOf(
                    "target_name" to targetName,
                    "category_label" to dialogStatsCategoryLabel(category),
                ),
            ),
        includeLifeWorld = includeLifeWorld,
        category = category,
        categories = categories,
        sections = sections,
        defaultDumpColorValues =
            setOf(
                palette.primary.value(),
                palette.secondary.value(),
                NamedTextColor.BLACK.value(),
                NamedTextColor.WHITE.value(),
            ),
    )
  }

  private fun dialogStatsSection(
      palette: DialogTextPalette,
      title: String,
      rows: List<String>,
      emptyMessage: String,
  ): DialogStatsSection =
      DialogStatsSection(
          title,
          dialogStatsRowsBody(palette, title, rows, emptyMessage),
          dumpSkipsFirstLine = true,
      )

  private data class DialogStatsRankingRow(
      val name: String,
      val barValue: Int,
      val valueText: String,
      val hoverLabel: String,
  )

  /** A labeled horizontal bar for comparisons, not a ranked list. */
  private data class DialogStatsBarRow(
      val name: String,
      val barValue: Double,
      val valueText: String,
      val hoverLabel: String,
      val color: NamedTextColor,
  )

  private data class DialogComparisonTableRow(
      val title: String,
      val description: String,
      val values: List<DialogComparisonValue>,
      val unit: String,
      val valueFormat: DialogComparisonValueFormat,
  )

  private enum class DialogComparisonValueFormat {
    COUNT,
    DECIMAL,
    THREE_DECIMAL,
    PERCENT,
  }

  private fun dialogStatsBarSection(
      palette: DialogTextPalette,
      title: String,
      scope: String?,
      rows: List<DialogStatsBarRow>,
      emptyMessage: String,
  ): DialogStatsSection {
    if (rows.isEmpty())
        return dialogStatsSection(palette, title, listOf(emptyMessage), emptyMessage)
    val maximum = rows.maxOf { it.barValue }.coerceAtLeast(0.0)
    val labelWidth = rows.maxOf { uniformDialogAdvance(it.name) }
    val fullWidthValues = rows.map { toDialogFullWidthKeepDot(it.valueText) }
    val maxValueWidth = fullWidthValues.maxOf { it.length }
    val paddedValues = fullWidthValues.map { it.padStart(maxValueWidth, DIALOG_FULL_SPACE) }
    var component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
    if (scope != null) component = component.append(Component.text("$scope\n", palette.secondary))
    rows.forEachIndexed { index, row ->
      val paddedRow = row.copy(valueText = paddedValues[index])
      component =
          component
              .append(dialogStatsBarRowComponent(paddedRow, maximum, labelWidth))
              .append(Component.newline())
    }
    return DialogStatsSection(
        title,
        DialogBody.plainMessage(component, 560),
        dumpSkipsFirstLine = true,
    )
  }

  private fun dialogStatsRankingSection(
      palette: DialogTextPalette,
      title: String,
      scope: String?,
      rows: List<DialogStatsRankingRow>,
      emptyMessage: String,
      displayNameFormatter: (String) -> DialogRankingDisplayName = ::dialogRankingDisplayName,
  ): DialogStatsSection {
    if (rows.isEmpty())
        return dialogStatsSection(palette, title, listOf(emptyMessage), emptyMessage)
    val maximum = rows.maxOf { it.barValue }.coerceAtLeast(1)
    val fullWidthValues = rows.map { toDialogFullWidthKeepDot(it.valueText) }
    val maxValueWidth = fullWidthValues.maxOf { it.length }
    val paddedValues = fullWidthValues.map { it.padStart(maxValueWidth, DIALOG_FULL_SPACE) }
    var component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
    if (scope != null) component = component.append(Component.text("$scope\n", palette.secondary))
    rows.forEachIndexed { index, row ->
      component =
          component
              .append(
                  dialogRankingRowComponent(
                      index,
                      displayNameFormatter(row.name),
                      row.barValue,
                      maximum,
                      paddedValues[index],
                      row.hoverLabel,
                  )
              )
              .append(Component.newline())
    }
    return DialogStatsSection(
        title,
        DialogBody.plainMessage(component, 560),
        dumpSkipsFirstLine = true,
    )
  }

  private fun dialogStatsVerticalBarSection(
      palette: DialogTextPalette,
      title: String,
      scope: String?,
      series: LikeSeries,
      note: String? = null,
      incompleteBucketIndices: Set<Int> = emptySet(),
      showAllXAxisLabels: Boolean = false,
      horizontalScaleOverride: Int? = null,
  ): DialogStatsSection {
    var renderConfig = currentDialogRenderConfig().withWidthStyle(DialogWidthStyle.ASCII_LOW)
    if (horizontalScaleOverride != null) {
      renderConfig = renderConfig.withLargeHorizontalScale(horizontalScaleOverride)
    }
    val graph =
        buildDialogGraph(
            series,
            DialogGraphSize.LARGE,
            renderConfig,
            incompleteBucketIndices,
            showAllXAxisLabels = showAllXAxisLabels,
            axisMaxOverride = SLDataStatsService.niceMax(series.peak),
        )
    var component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
    if (scope != null) component = component.append(Component.text("$scope\n", palette.secondary))
    component = component.append(graph.component)
    if (note != null) component = component.append(Component.text("\n$note", palette.secondary))
    return DialogStatsSection(
        title,
        DialogBody.plainMessage(component, 560),
        dumpSkipsFirstLine = true,
    )
  }

  private fun dialogCategoricalSeries(buckets: List<SLDataStatsService.AgeBucket>): LikeSeries =
      LikeSeries(
          Period.MONTH,
          buckets.mapIndexed { index, bucket ->
            SLDataStatsService.LikeBucket(
                bucket.label,
                LocalDate.of(2000, 1, 1).plusDays(index.toLong()),
                bucket.count,
            )
          },
      )

  private fun dialogAgeCategoricalSeries(buckets: List<SLDataStatsService.AgeBucket>): LikeSeries =
      dialogCategoricalSeries(buckets)

  // 2026-08-17: 初速をテキストからグラフへ変更(ユーザー要望)。
  // 2026-08-17: 初速のバケット境界は実データの最大値に応じて動的に決まる(SLDataStatsService.kt
  // bucketInitialLikeSpeed参照)ため、固定の翻訳キーには対応させられない。ラベルはそのまま使う。
  private fun dialogInitialSpeedCategoricalSeries(
      buckets: List<SLDataStatsService.AgeBucket>
  ): LikeSeries = dialogCategoricalSeries(buckets)

  // 2026-08-17: 半角英数字タイトルが全角化されず「宣伝」系セクションだけ日本語と幅が揃っていなかった
  // (ユーザー指摘)。dialogBuildTitleDisplayName(建築Top5側)と同じくtoDialogFullWidthを適用する。
  private fun dialogBuildTitleLabel(
      title: String,
      maxLength: Int = DIALOG_RANKING_NAME_COLUMNS,
  ): String = compactDialogText(toDialogFullWidth(title), maxLength)

  /**
   * Keeps build titles verbatim (apart from compacting) and pads them to a full-width-based column.
   * Player-only MCID normalization (uppercase, I→1) must never be applied here: case and Japanese
   * are meaningful parts of a build title. Half-width ASCII is converted to full-width (2026-08-17,
   * user request) so alphanumeric titles visually match the weight of Japanese titles in the same
   * column.
   */
  private fun dialogBuildTitleDisplayName(title: String): DialogRankingDisplayName {
    val fixed = compactDialogText(toDialogFullWidth(title), DIALOG_BUILD_TITLE_COLUMNS)
    val targetAdvance = DIALOG_BUILD_TITLE_COLUMNS * uniformDialogAdvance('建')
    return dialogFixedLabel(fixed, targetAdvance, fillChar = DIALOG_FULL_SPACE)
        .copy(original = title)
  }

  private fun writeDialogStatsDump(player: Player?, targetUuid: UUID, targetName: String): File {
    val statsContent = buildDialogStatsContent(player, targetUuid, targetName)
    Tools.plugin.dataFolder.mkdirs()
    val outputFile = File(Tools.plugin.dataFolder, DIALOG_STATS_DUMP_FILE_NAME)
    outputFile.writeText(dialogStatsDumpText(statsContent), Charsets.UTF_8)
    return outputFile
  }

  private fun dialogStatsDumpText(statsContent: DialogStatsContent): String =
      buildString {
            appendLine("=== ${statsContent.title.substringBefore(" / ")} ===")
            statsContent.categories.forEach { (category, sections) ->
              appendLine()
              appendLine("## ${dialogStatsCategoryLabel(category)}")
              sections.forEach { section ->
                appendLine()
                appendLine("[${section.title}]")
                val plainLines =
                    dialogStatsPlainTextSerializer.serialize(section.body.contents()).lines()
                val colors =
                    dialogComponentLineColors(
                        section.body.contents(),
                        statsContent.defaultDumpColorValues,
                    )
                val startIndex = if (section.dumpSkipsFirstLine) 1 else 0
                plainLines.drop(startIndex).forEachIndexed { index, line ->
                  val colorName = colors.getOrNull(startIndex + index)?.let(::dialogDumpColorName)
                  appendLine(if (colorName == null) line else "($colorName) $line")
                }
              }
            }
          }
          .trimEnd() + "\n"

  private fun dialogComponentLineColors(
      component: Component,
      defaultColorValues: Set<Int>,
  ): List<TextColor?> {
    val lineColors = mutableListOf<TextColor?>()
    var currentLineColor: TextColor? = null

    fun appendText(text: String, color: TextColor?) {
      text.forEach { character ->
        if (character == '\n') {
          lineColors += currentLineColor
          currentLineColor = null
        } else if (
            currentLineColor == null &&
                color != null &&
                color.value() !in defaultColorValues &&
                !character.isWhitespace()
        ) {
          currentLineColor = color
        }
      }
    }

    fun visit(part: Component, inheritedColor: TextColor?) {
      val color = part.color() ?: inheritedColor
      if (part is TextComponent) appendText(part.content(), color)
      part.children().forEach { child -> visit(child, color) }
    }

    visit(component, null)
    lineColors += currentLineColor
    return lineColors
  }

  private fun dialogDumpColorName(color: TextColor): String =
      when (color.value()) {
        NamedTextColor.BLACK.value() -> "black"
        NamedTextColor.DARK_BLUE.value() -> "dark_blue"
        NamedTextColor.DARK_GREEN.value() -> "dark_green"
        NamedTextColor.DARK_AQUA.value() -> "dark_aqua"
        NamedTextColor.DARK_RED.value() -> "dark_red"
        NamedTextColor.DARK_PURPLE.value() -> "dark_purple"
        NamedTextColor.GOLD.value() -> "gold"
        NamedTextColor.GRAY.value() -> "gray"
        NamedTextColor.DARK_GRAY.value() -> "dark_gray"
        NamedTextColor.BLUE.value() -> "blue"
        NamedTextColor.GREEN.value() -> "green"
        NamedTextColor.AQUA.value() -> "aqua"
        NamedTextColor.RED.value() -> "red"
        NamedTextColor.LIGHT_PURPLE.value() -> "light_purple"
        NamedTextColor.YELLOW.value() -> "yellow"
        NamedTextColor.WHITE.value() -> "white"
        else -> String.format("#%06x", color.value())
      }

  private fun dialogStatsSummaryComponent(
      stats: SLDataStatsService.ExtendedStats,
      targetName: String,
      palette: DialogTextPalette,
  ): Component {
    val peak =
        stats.peakLikeDay?.let {
          "全体の受けいいね最多日 ${it.dateLabel} ${formatCount(it.count)}件 / 直近12週平均${formatAverageCount(it.averageCount)}件/日"
        } ?: "全体の受けいいね最多日はまだありません"
    val personalBest =
        "送ったいいね自己ベスト 日${dialogLatestPersonalBest(stats.personalBestHistory.daily)} / " +
            "週${dialogLatestPersonalBest(stats.personalBestHistory.weekly)} / " +
            "月${dialogLatestPersonalBest(stats.personalBestHistory.monthly)}"
    val week = stats.playerWeek
    return Component.empty()
        .font(DIALOG_FONT)
        .append(Component.text("今週 ${week.label}\n", palette.secondary))
        .append(
            Component.text(
                "作成 ${formatCount(week.buildsCreated)} / 送った ${formatCount(week.likesGiven)} / 受けた ${formatCount(week.likesReceived)} / 宣伝 ${formatCount(week.publicityCount)}\n",
                palette.primary,
            )
        )
        .append(Component.text("これまでの記録\n", palette.secondary))
        .append(Component.text("$peak\n", NamedTextColor.YELLOW))
        .append(Component.text("$personalBest\n", NamedTextColor.GOLD))
        .append(
            Component.text(
                "一番乗り ${formatCount(stats.ownFirstLikeCount)}回\n",
                NamedTextColor.AQUA,
            )
        )
        .append(
            Component.text(
                "※ 時系列指標は全いいねに時刻がある建築だけを対象（${reliablePublishedScope(stats)}）",
                NamedTextColor.GRAY,
            )
        )
  }

  private fun dialogStatsRowsBody(
      palette: DialogTextPalette,
      title: String,
      rows: List<String>,
      emptyMessage: String,
  ): PlainMessageDialogBody {
    val lines = if (rows.isEmpty()) listOf(emptyMessage) else rows
    val component =
        Component.empty()
            .font(DIALOG_FONT)
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
            .append(dialogStatsText(lines.joinToString("\n"), palette.secondary))
    return DialogBody.plainMessage(component, 560)
  }

  private fun dialogStatsText(text: String, color: TextColor): Component {
    return Component.text(text, color)
  }

  private fun dialogComparisonTableSections(
      palette: DialogTextPalette,
      stats: SLDataStatsService.ExtendedStats,
  ): List<DialogStatsSection> {
    fun ordered(
        first: DialogComparisonValue,
        second: DialogComparisonValue,
    ): List<DialogComparisonValue> =
        if (second.value > first.value) listOf(second, first) else listOf(first, second)

    val comparisonRows = buildList {
      add(
          DialogComparisonTableRow(
              stats2Text(
                  "Section.stats2.overview.comparison.row.avg_per_build.label",
                  "1作品あたりのいいね（平均）",
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.avg_per_build.desc",
                  "作品がどれだけ反応を集めたか",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.avg_per_build.own_label",
                          "あなた",
                      ),
                      stats.comparison.ownAverage,
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.avg_per_build.global_label",
                          "全体平均",
                      ),
                      stats.comparison.globalAverage,
                  ),
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.avg_per_build.unit",
                  "いいね/作品",
              ),
              DialogComparisonValueFormat.DECIMAL,
          )
      )
      add(
          DialogComparisonTableRow(
              stats2Text(
                  "Section.stats2.overview.comparison.row.median_per_build.label",
                  "1作品あたりのいいね（中央値）",
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.median_per_build.desc",
                  "突出した1作品に引っ張られない実力",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.median_per_build.own_label",
                          "あなた",
                      ),
                      stats.comparison.ownMedian,
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.median_per_build.global_label",
                          "全体中央値",
                      ),
                      stats.comparison.globalMedian,
                  ),
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.median_per_build.unit",
                  "いいね/作品",
              ),
              DialogComparisonValueFormat.DECIMAL,
          )
      )
      add(
          DialogComparisonTableRow(
              stats2Text(
                  "Section.stats2.overview.comparison.row.given_build_popularity.label",
                  "押した作品の人気",
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.given_build_popularity.desc",
                  "自分が選ぶ作品は人気寄りか",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.given_build_popularity.given_label",
                          "あなたが押した作品",
                      ),
                      stats.comparison.givenTargetAverage,
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.given_build_popularity.global_label",
                          "全体平均",
                      ),
                      stats.comparison.globalAverage,
                  ),
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.given_build_popularity.unit",
                  "いいね/作品",
              ),
              DialogComparisonValueFormat.DECIMAL,
          )
      )
      add(
          DialogComparisonTableRow(
              stats2Text(
                  "Section.stats2.overview.comparison.row.give_receive.label",
                  "送ったいいねと受けたいいね",
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.give_receive.desc",
                  "応援する側か、される側か",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.give_receive.received_label",
                          "受けた",
                      ),
                      stats.balance.received.toDouble(),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.give_receive.given_label",
                          "送った",
                      ),
                      stats.balance.given.toDouble(),
                  ),
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.give_receive.unit",
                  "いいね",
              ),
              DialogComparisonValueFormat.COUNT,
          )
      )
      val supportingTotalStr = formatCount(stats.mutualLikes.likedOwnerCount)
      val supportedTotalStr = formatCount(stats.mutualLikes.likerCount)
      val maxTotalLen = maxOf(supportingTotalStr.length, supportedTotalStr.length)
      val supportingTotalPadded = supportingTotalStr.padStart(maxTotalLen, ' ')
      val supportedTotalPadded = supportedTotalStr.padStart(maxTotalLen, ' ')
      val mutualCountStr = formatCount(stats.mutualLikes.pairCount)
      add(
          DialogComparisonTableRow(
              stats2Text("Section.stats2.overview.comparison.row.mutual_rate.label", "相互になっている割合"),
              stats2Text(
                  "Section.stats2.overview.comparison.row.mutual_rate.desc",
                  "片思いか、応え合えているか",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.mutual_rate.supporting_label",
                          "応援している側",
                      ),
                      dialogPercentValue(
                          stats.mutualLikes.pairCount,
                          stats.mutualLikes.likedOwnerCount,
                      ),
                      "(${mutualCountStr}/${supportingTotalPadded}人)",
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.mutual_rate.supported_label",
                          "されている側",
                      ),
                      dialogPercentValue(stats.mutualLikes.pairCount, stats.mutualLikes.likerCount),
                      "(${mutualCountStr}/${supportedTotalPadded}人)",
                  ),
              ),
              stats2Text("Section.stats2.overview.comparison.row.mutual_rate.unit", "%"),
              DialogComparisonValueFormat.PERCENT,
          )
      )
      val serverReposts = formatCount(stats.comparisonPublicity.reposts)
      val ownReposts = formatCount(stats.publicity.totalReposts)
      val maxRepostLen = maxOf(serverReposts.length, ownReposts.length)
      val serverRepostsPadded = serverReposts.padStart(maxRepostLen, ' ')
      val ownRepostsPadded = ownReposts.padStart(maxRepostLen, ' ')
      add(
          DialogComparisonTableRow(
              stats2Text(
                  "Section.stats2.overview.comparison.row.server_publicity.label",
                  "宣伝の伸び幅：サーバー全体 vs あなた",
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.server_publicity.desc",
                  "宣伝前後24時間の平均いいね差(伸び幅)を、サーバー全体と比べてどうか",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.server_publicity.server_label",
                          "サーバー全体の伸び",
                      ),
                      stats.comparisonPublicity.reactionDelta,
                      "(${serverRepostsPadded}回)",
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.server_publicity.own_label",
                          "あなたの伸び",
                      ),
                      stats.publicity.reactionDelta,
                      "(${ownRepostsPadded}回)",
                  ),
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.server_publicity.unit",
                  "いいね/回",
              ),
              DialogComparisonValueFormat.DECIMAL,
          )
      )
    }

    if (comparisonRows.isEmpty())
        return listOf(
            dialogStatsSection(
                palette,
                stats2Text("Section.stats2.overview.comparison.title", "比較表"),
                listOf(
                    stats2Text("Section.stats2.overview.comparison.empty", "比較できる建築データはまだありません。")
                ),
                stats2Text("Section.stats2.overview.comparison.empty", "比較できる建築データはまだありません。"),
            )
        )

    val s = stats.summary
    val summaryComp =
        Component.text()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("§d◆ あなたの基本サマリー\n"))
            .append(
                Component.text(
                    "§f建築: §e${s.totalOwnBuilds}件 §7| 獲得: §e${formatCount(s.totalReceivedLikes)} §7| 送信: §e${formatCount(s.totalGivenLikes)}\n"
                )
            )
            .append(
                Component.text(
                    "§7直近7日: 獲得 §e+${s.weekReceivedLikes} §7(送った §e+${s.weekGivenLikes}§7) ｜ 直近30日: 獲得 §e+${s.monthReceivedLikes}"
                )
            )
            .hoverEvent(
                net.kyori.adventure.text.event.HoverEvent.showText(
                    Component.text(
                        "§e【累計基本データ】\n§7建築総数: §f${s.totalOwnBuilds}件\n§7累計獲得いいね: §f${s.totalReceivedLikes}\n§7累計送信いいね: §f${s.totalGivenLikes}"
                    )
                )
            )

    val summarySection =
        DialogStatsSection(
            "基本サマリー",
            DialogBody.plainMessage(summaryComp.build(), 560),
            dumpSkipsFirstLine = false,
        )

    val globalMaxLabelAdvance =
        comparisonRows.flatMap { it.values }.maxOf { uniformDialogAdvance(it.label) }
    val compSections =
        comparisonRows.map { row ->
          val maximum = row.values.maxOfOrNull { it.value } ?: 0.0
          val maxValueWidth = row.values.maxOf { formatComparisonValue(it.value, row).length }

          val component =
              Component.text()
                  .style(Style.style().font(DIALOG_FONT).build())
                  .append(
                      Component.text("§d◆ ${row.title}\n")
                          .hoverEvent(
                              net.kyori.adventure.text.event.HoverEvent.showText(
                                  Component.text("§e${row.title}\n§7${row.description}")
                              )
                          )
                  )

          row.values.forEachIndexed { index, value ->
            val totalBlocks = 20
            val filledCount =
                if (maximum <= 0.0) 0
                else
                    ((value.value / maximum) * totalBlocks.toDouble())
                        .toInt()
                        .coerceIn(0, totalBlocks)
            val remainingCount = totalBlocks - filledCount
            val percent =
                if (maximum <= 0.0) 0 else (value.value / maximum * 100.0).toInt().coerceIn(0, 100)
            val label = dialogFixedLabel(value.label, globalMaxLabelAdvance, fillChar = '　')
            val paddedPercent = percent.toString().padStart(3, ' ')
            val rawValueText = formatComparisonValue(value.value, row)
            val valueText =
                if (maxValueWidth > 0) rawValueText.padStart(maxValueWidth, ' ') else rawValueText

            val isOwn =
                value.label.contains("あなた") ||
                    value.label.contains("受けた") ||
                    value.label.contains("応援") ||
                    value.label.contains("自")
            val labelColor = if (isOwn) "§f" else "§7"
            val valColor = if (isOwn) "§e" else "§7"

            val rowString =
                "${labelColor}${label.fixed}${label.padding} §a${"█".repeat(filledCount)}§8${"█".repeat(remainingCount)} §7${paddedPercent}% §8= ${valColor}${valueText}" +
                    (if (value.sample != null) " §7${value.sample}" else "")

            component.append(
                Component.text(rowString)
                    .hoverEvent(
                        net.kyori.adventure.text.event.HoverEvent.showText(
                            Component.text(
                                "§e${value.label}: §f${rawValueText} (${paddedPercent.trim()}%)"
                            )
                        )
                    )
            )
            if (index < row.values.lastIndex) {
              component.append(Component.newline())
            }
          }

          DialogStatsSection(
              row.title,
              DialogBody.plainMessage(component.build(), 560),
              dumpSkipsFirstLine = true,
          )
        }

    return listOf(summarySection) + compSections
  }

  private fun dialogMemorialSection(
      stats: SLDataStatsService.ExtendedStats,
  ): DialogStatsSection {
    val m = stats.memorial
    val firstLikerName = m.firstLikerUuid?.let { stats.playerNames[it] ?: it } ?: "未記録"
    val firstMutualName = m.firstMutualPlayerUuid?.let { stats.playerNames[it] ?: it } ?: "なし"

    val firstBuildText =
        if (m.firstBuildId != null)
            "#${m.firstBuildId} 『${m.firstBuildTitle ?: "無題"}』 (${m.firstBuildCreated ?: "初期"})"
        else "なし"

    val longTailText =
        if (m.longTailBuildId != null)
            "#${m.longTailBuildId} 『${m.longTailBuildTitle ?: "無題"}』 (築${m.longTailDays}日後)"
        else "なし"

    val comp =
        Component.text()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("§d◆ 原点の足跡・メモリアル\n"))
            .append(Component.text("§7第1号建築: §f$firstBuildText\n"))
            .append(Component.text("§7最初のファン: §e$firstLikerName §7(初いいね)\n"))
            .append(Component.text("§7最初の盟友: §e$firstMutualName §7(初相互)\n"))
            .append(Component.text("§7ロングセラー殿堂: §a$longTailText §7(直近30日にも反応)"))
            .hoverEvent(
                net.kyori.adventure.text.event.HoverEvent.showText(
                    Component.text("§e【原点の足跡】\n§7あなたの最古の建築や、初めていいねを交わした記念すべき記録です。")
                )
            )

    return DialogStatsSection(
        "メモリアル",
        DialogBody.plainMessage(comp.build(), 560),
        dumpSkipsFirstLine = false,
    )
  }

  private fun dialogDistributionCategoricalSeries(
      buckets: List<SLDataStatsService.AgeBucket>,
  ): LikeSeries =
      LikeSeries(
          Period.MONTH,
          buckets.mapIndexed { index, bucket ->
            SLDataStatsService.LikeBucket(
                bucket.label,
                LocalDate.of(2000, 1, 1).plusDays(index.toLong()),
                bucket.count,
            )
          },
      )

  private fun formatComparisonValue(value: Double, row: DialogComparisonTableRow): String =
      when (row.valueFormat) {
        DialogComparisonValueFormat.PERCENT -> "${formatAverageCount(value)}${row.unit}"
        DialogComparisonValueFormat.COUNT -> "${formatCount(value.toInt())}${row.unit}"
        DialogComparisonValueFormat.THREE_DECIMAL ->
            String.format(java.util.Locale.ROOT, "%.3f%s", value, row.unit)
        DialogComparisonValueFormat.DECIMAL -> "${formatAverageCount(value)}${row.unit}"
      }

  private fun dialogPercentValue(numerator: Int, denominator: Int): Double =
      if (denominator <= 0) 0.0 else numerator.toDouble() * 100.0 / denominator.toDouble()

  private fun formatSignedAverage(value: Double): String =
      (if (value >= 0.0) "+" else "") + formatAverageCount(value)

  private fun formatRatio(value: Double): String =
      if (value.isFinite()) String.format("%.2f", value) else "-"

  private fun streakTitle(streak: SLDataStatsService.StreakStats): String =
      when {
        streak.currentDays >= 30 || streak.longestDays >= 60 ->
            stats2Text(
                "Section.stats2.given.streak.legendary_title",
                "称号: 伝説の継続者",
            )
        streak.currentDays >= 14 || streak.longestDays >= 30 ->
            stats2Text(
                "Section.stats2.given.streak.habit_keeper_title",
                "称号: 習慣の守り手",
            )
        streak.currentDays >= 7 || streak.longestDays >= 14 ->
            stats2Text(
                "Section.stats2.given.streak.weekly_supporter_title",
                "称号: 週刊サポーター",
            )
        streak.currentDays >= 3 || streak.longestDays >= 7 ->
            stats2Text("Section.stats2.given.streak.sprout_title", "称号: 継続の芽")
        streak.longestDays >= 1 ->
            stats2Text(
                "Section.stats2.given.streak.first_step_title",
                "称号: はじめの一歩",
            )
        else -> stats2Text("Section.stats2.given.streak.future_title", "称号: これから")
      }

  private fun reliablePublishedScope(stats: SLDataStatsService.ExtendedStats): String {
    val population = stats.reliableTimestampPopulation
    val excluded = population.postCutoffBuildCount - population.postCutoffCompleteBuildCount
    val suffix = if (excluded > 0) "（時刻欠落 ${formatCount(excluded)}件は除外）" else ""
    return stats2Text(
        "Section.stats2.builds.age.subtitle",
        "対象: 2026/7/2以降に公開した建築 ${formatCount(population.postCutoffBuildCount)}件$suffix",
        mapOf(
            "age_target_count" to formatCount(population.postCutoffBuildCount),
            "age_missing_suffix" to suffix,
        ),
    )
  }

  /**
   * 2026-08-17: `reliablePublishedScope`はサーバー全体の建築数を返すため、この対象プレイヤーだけの
   * `stats.ageDistribution.received`(棒グラフの実データ)の件数と食い違っていた(ユーザー指摘)。
   * グラフの合計と一致する母集団(このプレイヤーの建築が受けたいいねの件数)を返す。
   */
  private fun dialogAgeDistributionScope(stats: SLDataStatsService.ExtendedStats): String {
    val count = stats.ageDistribution.received.sumOf { it.count }
    return stats2Text(
        "Section.stats2.builds.age.subtitle",
        "対象: 2026/7/2以降に公開したあなたの建築が受けたいいね ${formatCount(count)}件",
        mapOf("age_target_count" to formatCount(count)),
    )
  }

  private fun dialogRhythmScope(stats: SLDataStatsService.ActivityRhythmStats): String =
      stats2Text(
          "Section.stats2.given.activity_rhythm.subtitle",
          "対象: いいね時刻がある送ったいいね ${formatCount(stats.weekdayCounts.flatten().sum())}件",
          mapOf("timestamped_given_count" to formatCount(stats.weekdayCounts.flatten().sum())),
      )

  private fun dialogGivenTimestampScope(stats: SLDataStatsService.ExtendedStats): String =
      stats2Text(
          "Section.stats2.given.personal_best.subtitle",
          dialogRhythmScope(stats.activityRhythm),
          mapOf(
              "timestamped_given_count" to
                  formatCount(stats.activityRhythm.weekdayCounts.flatten().sum())
          ),
      )

  // 2026-08-17: `▁░▒▓█`の文字差し替え方式(送り幅が`░`だけ1px狭く列がずれる、DIALOG_STYLE.md
  // 「未解決」参照)をやめ、`⬛`1種類の色分けに変更した。文字を変えないので列ズレが原理的に起きない。
  private val activityHeatmapColorStops =
      listOf(
          TextColor.color(45, 49, 56), // 0: 活動なし
          TextColor.color(46, 90, 58),
          TextColor.color(64, 140, 79),
          TextColor.color(108, 205, 117), // buildDialogGraphのbarColorと合わせる
          TextColor.color(150, 255, 160), // 最多
      )

  private fun activityHeatmapCellColor(level: Int): TextColor =
      activityHeatmapColorStops[level.coerceIn(0, activityHeatmapColorStops.lastIndex)]

  /** `▁0件/░少/▒中/▓多/█最多`のような文字差し替えを使わず、送り幅px単位で空白を埋める。 */
  private fun dialogHeatmapAdvancePad(px: Int): String {
    if (px <= 0) return ""
    var bestText = ""
    var bestTotal = -1
    for (nbspCount in 0..(px / 5)) {
      val remaining = px - nbspCount * 5
      for (spaceCount in 0..(remaining / 4)) {
        val total = nbspCount * 5 + spaceCount * 4
        if (total in (bestTotal + 1)..px) {
          bestText = nbsp(nbspCount) + " ".repeat(spaceCount)
          bestTotal = total
        }
      }
    }
    return bestText
  }

  private fun dialogActivityHeatmapComponent(
      stats: SLDataStatsService.ActivityRhythmStats
  ): Component {
    val hours = stats.weekdayCounts.firstOrNull()?.size ?: 24
    val cellAdvance = uniformDialogAdvance(ACTIVITY_HEATMAP_CELL)
    val labelColumnPx = cellAdvance + 1 // ⬛=8pxの1セル分より広い、漢字(9px)がちょうど収まる幅
    val weekdayLabels =
        listOf(
            stats2Text("Section.stats2.given.activity_rhythm.monday_label", "月"),
            stats2Text("Section.stats2.given.activity_rhythm.tuesday_label", "火"),
            stats2Text("Section.stats2.given.activity_rhythm.wednesday_label", "水"),
            stats2Text("Section.stats2.given.activity_rhythm.thursday_label", "木"),
            stats2Text("Section.stats2.given.activity_rhythm.friday_label", "金"),
            stats2Text("Section.stats2.given.activity_rhythm.saturday_label", "土"),
            stats2Text("Section.stats2.given.activity_rhythm.sunday_label", "日"),
        )
    val shownDayLabels = setOf(0, 2, 4, 6) // 月・水・金・日を表示(Apple/GitHub式の間引き、2026-08-17: 日を追加)
    val shownHours = setOf(0, 6, 12, 18)
    val maxCount = stats.weekdayCounts.flatten().maxOrNull() ?: 0
    fun blankLabel() = dialogHeatmapAdvancePad(labelColumnPx)

    val headerText = StringBuilder(blankLabel())
    var headerPos = 0
    for (h in 0 until hours) {
      if (h in shownHours) {
        val label = h.toString()
        headerText.append(label)
        headerPos += uniformDialogAdvance(label)
      }
      val target = (h + 1) * cellAdvance
      if (headerPos < target) {
        val filler = dialogHeatmapAdvancePad(target - headerPos)
        headerText.append(filler)
        headerPos += uniformDialogAdvance(filler)
      }
    }
    headerText.append(hours.toString()) // 右端の境界ラベル(24)

    var component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$headerText\n", NamedTextColor.GRAY))
    val lineAdvances = mutableListOf<DialogLineAdvance>()

    weekdayLabels.forEachIndexed { day, label ->
      val displayLabel = if (day in shownDayLabels) label else blankLabel()
      var rowComponent = Component.text(displayLabel, NamedTextColor.GRAY)
      val counts = stats.weekdayCounts.getOrElse(day) { List(hours) { 0 } }
      counts.forEachIndexed { hourIndex, count ->
        val level =
            SLDataStatsService.scaleLevel(count, maxCount, activityHeatmapColorStops.lastIndex)
        val color = activityHeatmapCellColor(level)
        // 2026-08-17: ロアの1行目は「曜日/時」表記に、色は濃淡を付けず固定色にする(ユーザー要望)。
        val hover =
            Component.text()
                .append(Component.text("${label}曜/${hourIndex}時\n", NamedTextColor.GRAY))
                .append(Component.text("${formatCount(count)}件", NamedTextColor.YELLOW))
                .build()
        rowComponent =
            rowComponent.append(
                Component.text(ACTIVITY_HEATMAP_CELL.toString(), color).hoverEvent(hover)
            )
      }
      val plainLine = displayLabel + ACTIVITY_HEATMAP_CELL.toString().repeat(hours)
      lineAdvances +=
          DialogLineAdvance(
              "heatmap-$label",
              plainLine.length,
              uniformDialogAdvance(plainLine),
              plainLine.contains(' '),
          )
      component = component.append(rowComponent).append(Component.newline())
    }

    validateDialogLineAdvanceInvariant(
        DialogGraphSize.NORMAL,
        currentDialogRenderConfig(),
        lineAdvances,
    )
    return component
  }

  private fun dialogActivityHeatmapSection(
      palette: DialogTextPalette,
      title: String,
      scope: String,
      stats: SLDataStatsService.ActivityRhythmStats,
      emptyMessage: String,
  ): DialogStatsSection {
    if (stats.weekdayCounts.flatten().sum() == 0)
        return dialogStatsSection(palette, title, listOf(emptyMessage), emptyMessage)
    val component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
            .append(Component.text("$scope\n", palette.secondary))
            .append(dialogActivityHeatmapComponent(stats))
            .append(
                Component.text(
                    "${dialogRhythmTypeText(stats.rhythmDiagnosis)} / ${dialogDayTypeText(stats.dayTypeDiagnosis)}。反応する時間帯がこの範囲に寄っています。（セルにカーソルを合わせると件数を表示）",
                    palette.secondary,
                )
            )
    return DialogStatsSection(
        title,
        DialogBody.plainMessage(component, 560),
        dumpSkipsFirstLine = true,
    )
  }

  private fun dialogRhythmTypeText(diagnosis: String): String =
      when (diagnosis) {
        "あなたは夜型です" ->
            stats2Text(
                "Section.stats2.given.activity_rhythm.night_type",
                "あなたは夜型です",
            )
        "あなたは朝型です" ->
            stats2Text(
                "Section.stats2.given.activity_rhythm.morning_type",
                "あなたは朝型です",
            )
        else -> diagnosis
      }

  private fun dialogDayTypeText(diagnosis: String): String =
      when (diagnosis) {
        "週末型です" -> stats2Text("Section.stats2.given.activity_rhythm.weekend_type", "週末型です")
        "平日型です" -> stats2Text("Section.stats2.given.activity_rhythm.weekday_type", "平日型です")
        else -> diagnosis
      }

  // 2026-08-17: 「更新履歴」(→で連結した複数件)ではなく「現在の自己ベスト」の表に変更(ユーザー要望)。
  // 各粒度の最後の更新(=現在の最高値)だけを表示する。calculatePersonalBestHistory自体は変更不要
  // (履歴リストの最後の要素がそのまま現在の自己ベストになるため)。
  private fun dialogPersonalBestRows(
      history: SLDataStatsService.PersonalBestHistory
  ): List<String> =
      listOf(
          stats2Text(
              "Section.stats2.given.personal_best.daily_row",
              "日別: ${dialogCurrentBestText(history.daily)}",
              mapOf("best_record" to dialogCurrentBestText(history.daily)),
          ),
          stats2Text(
              "Section.stats2.given.personal_best.weekly_row",
              "週別: ${dialogCurrentBestText(history.weekly)}",
              mapOf("best_record" to dialogCurrentBestText(history.weekly)),
          ),
          stats2Text(
              "Section.stats2.given.personal_best.monthly_row",
              "月別: ${dialogCurrentBestText(history.monthly)}",
              mapOf("best_record" to dialogCurrentBestText(history.monthly)),
          ),
      )

  private fun dialogCurrentBestText(records: List<SLDataStatsService.PersonalBestRecord>): String {
    val best =
        records.lastOrNull()
            ?: return stats2Text("Section.stats2.given.personal_best.no_record", "なし")
    return stats2Text(
        "Section.stats2.given.personal_best.record",
        "${best.label} ${formatCount(best.count)}件",
        mapOf("period_label" to best.label, "like_count" to formatCount(best.count)),
    )
  }

  private fun dialogLatestPersonalBest(
      records: List<SLDataStatsService.PersonalBestRecord>
  ): String = records.lastOrNull()?.let { "${it.count}件" } ?: "なし"

  private fun formatDialogDuration(millis: Long): String {
    val nonNegativeMillis = millis.coerceAtLeast(0L)
    if (nonNegativeMillis < 60_000L) {
      val seconds = String.format(java.util.Locale.ROOT, "%.1f", nonNegativeMillis / 1_000.0)
      return stats2Text(
          "Section.stats2.builds.initial_speed.seconds_duration",
          "${seconds}秒",
          mapOf("seconds" to seconds),
      )
    }
    val seconds = (nonNegativeMillis + 500L) / 1_000L
    val minutes = seconds / 60L
    val days = minutes / (24L * 60L)
    val hours = (minutes % (24L * 60L)) / 60L
    val remainingMinutes = minutes % 60L
    return when {
      days > 0 ->
          stats2Text(
              "Section.stats2.builds.initial_speed.days_duration",
              "${days}日${hours}時間",
              mapOf("days" to days, "hours" to hours),
          )
      hours > 0 ->
          stats2Text(
              "Section.stats2.builds.initial_speed.hours_duration",
              "${hours}時間${remainingMinutes}分",
              mapOf("hours" to hours, "minutes" to remainingMinutes),
          )
      else ->
          stats2Text(
              "Section.stats2.builds.initial_speed.minutes_duration",
              "${remainingMinutes}分",
              mapOf("minutes" to remainingMinutes),
          )
    }
  }

  private fun dialogPlayerName(uuidText: String, playerNames: Map<String, String>): String {
    val uuid = parseUuid(uuidText)
    val resolvedName =
        uuid?.let { Bukkit.getPlayer(it)?.name }
            ?: playerNames[uuidText]
            ?: uuid?.let { runCatching { Bukkit.getOfflinePlayer(it).name }.getOrNull() }
            ?: uuidText.take(8)
    return compactDialogText(
        resolvedName.removePrefix("."),
        18,
    )
  }

  // 2026-08-17: 省略記号`…`を付けず、そのまま切り詰めるだけに変更(ユーザー判断)。
  // プレイヤー名の切り詰め(dialogRankingDisplayName)と同じ挙動に揃える。
  private fun compactDialogText(text: String, maxLength: Int): String = text.take(maxLength)

  private fun dialogRankingRowBody(
      index: Int,
      summary: SLDatabase.OwnerLikeSummary,
      playerNames: Map<String, String>,
      maxCount: Int,
      bodyWidth: Int,
  ): DialogBody {
    val ownerUuid = parseUuid(summary.ownerUuid)
    val owner = ownerUuid?.let { Bukkit.getOfflinePlayer(it) }
    val ownerName = playerNames[summary.ownerUuid] ?: summary.ownerUuid.take(8)
    val displayName = dialogRankingDisplayName(ownerName)
    val rankColor = if (index == 0) NamedTextColor.GOLD else NamedTextColor.GREEN
    val head = ItemStack(Material.PLAYER_HEAD)
    val meta = head.itemMeta as? SkullMeta
    if (meta != null) {
      if (owner != null) meta.owningPlayer = owner
      meta.displayName(
          Component.text(
              "${toDialogFullWidth("${index + 1}位")} ${displayName.original}",
              rankColor,
          )
      )
      meta.lore(
          listOf(
              Component.text("今週のいいね：${formatCount(summary.currentCount)}", NamedTextColor.YELLOW),
              Component.text("製作者UUID：${summary.ownerUuid}", NamedTextColor.GRAY),
          )
      )
      head.itemMeta = meta
    }

    val description = dialogRankingRowComponent(index, displayName, summary.currentCount, maxCount)
    return DialogBody.item(head)
        .description(DialogBody.plainMessage(description, bodyWidth))
        .showTooltip(true)
        .showDecorations(false)
        .width(16)
        .height(16)
        .build()
  }

  private fun dialogStatsBarRowComponent(
      row: DialogStatsBarRow,
      maximum: Double,
      labelWidth: Int,
  ): Component {
    // 2026-08-17: 名前欄のパディングは▁だと目立って見えたため全角スペースに変更(比較表と同様)。
    // 名前とバーの間の区切りも▁→全角スペースに、値の変換も小数点を半角のまま残す方に変更。
    val displayName = dialogFixedLabel(row.name, labelWidth, fillChar = '　')
    val filledCount = horizontalBarFilledCount(row.barValue, maximum, DIALOG_RANK_BAR_COLUMNS)
    val remainingCount = DIALOG_RANK_BAR_COLUMNS - filledCount
    val hover =
        Component.text()
            .append(Component.text("${row.hoverLabel}\n", row.color))
            .append(Component.text(row.valueText, NamedTextColor.YELLOW))
            .build()
    return Component.text()
        .style(Style.style().font(DIALOG_FONT).build())
        .append(
            Component.text()
                .append(Component.text(displayName.fixed, NamedTextColor.WHITE))
                .append(Component.text(displayName.padding, NamedTextColor.GRAY))
                .build()
        )
        .append(Component.text("　", NamedTextColor.GRAY))
        .append(Component.text("█".repeat(filledCount), row.color).hoverEvent(hover))
        .append(
            Component.text("█".repeat(remainingCount), NamedTextColor.DARK_GRAY).hoverEvent(hover)
        )
        .append(Component.text("　${toDialogFullWidthKeepDot(row.valueText)}", NamedTextColor.GRAY))
        .build()
  }

  private fun dialogRankingRowComponent(
      index: Int,
      displayName: DialogRankingDisplayName,
      count: Int,
      maxCount: Int,
      valueText: String = formatDialogCount(count, DialogLabelStyle.FULLWIDTH),
      hoverLabel: String = "今週のいいね",
  ): Component {
    val rank = toDialogFullWidth("${index + 1}位")
    val filledCount = horizontalRankingBarFilledCount(count, maxCount, DIALOG_RANK_BAR_COLUMNS)
    val remainingCount = DIALOG_RANK_BAR_COLUMNS - filledCount
    val rankColor = if (index == 0) NamedTextColor.GOLD else NamedTextColor.GREEN
    val hover =
        Component.text()
            .append(Component.text("${displayName.original}\n", rankColor))
            .append(Component.text("$hoverLabel：${formatCount(count)}", NamedTextColor.YELLOW))
            .build()
    val nameComponent =
        Component.text()
            .append(Component.text(displayName.fixed, NamedTextColor.WHITE))
            .append(Component.text(displayName.padding, NamedTextColor.GRAY))
    if (displayName.finePadding.isNotEmpty()) {
      nameComponent.append(Component.text(displayName.finePadding, NamedTextColor.GRAY))
    }
    return Component.text()
        .style(Style.style().font(DIALOG_FONT).build())
        .append(Component.text("$rank　", NamedTextColor.GRAY))
        .append(nameComponent.build())
        // 2026-08-17: 名前欄とバーの間に区切りが無かったためユーザー指摘で全角スペースを追加。
        .append(Component.text("　", NamedTextColor.GRAY))
        .append(Component.text("█".repeat(filledCount), rankColor).hoverEvent(hover))
        .append(
            Component.text("█".repeat(remainingCount), NamedTextColor.DARK_GRAY).hoverEvent(hover)
        )
        .append(
            Component.text(
                "　$valueText",
                NamedTextColor.GRAY,
            )
        )
        .build()
  }

  private fun dialogRankingPeriodLabel(
      period: RankingPeriod,
      startDate: java.time.LocalDate?,
  ): String =
      when (period) {
        RankingPeriod.ALL -> "全期間（いいね時刻を問わない）"
        else ->
            "${period.label}（${startDate?.year}/${startDate?.monthValue}/${startDate?.dayOfMonth}〜）"
      }

  /**
   * The two ranking-bar segments must always add up to [width]. A zero result is intentionally an
   * all-dark bar; positive results get one visible colored cell at minimum.
   */
  private fun horizontalRankingBarFilledCount(count: Int, maxCount: Int, width: Int): Int {
    if (count <= 0 || maxCount <= 0) return 0
    return ceil(count.toDouble() / maxCount.toDouble() * width.toDouble())
        .toInt()
        .coerceIn(1, width)
  }

  private fun horizontalBarFilledCount(value: Double, maximum: Double, width: Int): Int {
    if (value <= 0.0 || maximum <= 0.0) return 0
    return ceil(value / maximum * width.toDouble()).toInt().coerceIn(1, width)
  }

  private fun dialogComparisonValueRowComponent(
      value: DialogComparisonValue,
      maximum: Double,
      row: DialogComparisonTableRow,
      labelWidth: Int,
      maxValueWidth: Int = 0,
  ): Component {
    val filledCount =
        if (maximum <= 0.0) 0 else ((value.value / maximum) * 10.0).toInt().coerceIn(0, 10)
    val remainingCount = 10 - filledCount
    val percent =
        if (maximum <= 0.0) 0 else (value.value / maximum * 100.0).toInt().coerceIn(0, 100)
    val label = dialogFixedLabel(value.label, labelWidth, fillChar = '　')
    val paddedPercent = percent.toString().padStart(3, ' ')
    val rawValueText = formatComparisonValue(value.value, row)
    val valueText =
        if (maxValueWidth > 0) rawValueText.padStart(maxValueWidth, ' ') else rawValueText

    val rowString =
        "§f${label.fixed}${label.padding} §a${"█".repeat(filledCount)}§8${"█".repeat(remainingCount)} §7${paddedPercent}% §8= §e${valueText}" +
            (if (value.sample != null) " §7${value.sample}" else "")

    return Component.text(rowString)
        .font(DIALOG_FONT)
        .hoverEvent(
            net.kyori.adventure.text.event.HoverEvent.showText(
                Component.text("§e${value.label}: §f${rawValueText} (${paddedPercent.trim()}%)")
            )
        )
  }

  private fun dialogFixedLabel(
      label: String,
      width: Int,
      fillChar: Char = '▁',
  ): DialogRankingDisplayName {
    val paddingWidth = (width - uniformDialogAdvance(label)).coerceAtLeast(0)
    val fillAdvance = uniformDialogAdvance(fillChar)
    return DialogRankingDisplayName(
        original = label,
        fixed = label,
        padding = fillChar.toString().repeat((paddingWidth + fillAdvance - 1) / fillAdvance),
    )
  }

  private data class DialogRankingDisplayName(
      val original: String,
      val fixed: String,
      val padding: String,
      val finePadding: String = "",
  )

  private fun dialogRankingDisplayName(original: String): DialogRankingDisplayName {
    val plain = original.removePrefix(".").replace(" ", "")
    val normalized =
        plain.uppercase(java.util.Locale.ROOT).replace('I', '1').take(DIALOG_RANKING_NAME_COLUMNS)
    // 2026-08-17: Unihex(minecraft:uniform)では'1'と'I'はadvance=3px、その他英大文字・数字・'_'は4px。
    // 目標幅40px(4px×10文字)に対して不足するpx数を計算し、'_'(4px,灰色)と'\u07F2'(1px極小ドット,灰色)で完全等幅化。
    val nameAdvance = normalized.sumOf { if (it == '1' || it == 'I') 3 else 4 }
    val remainingPx = (DIALOG_RANKING_NAME_COLUMNS * 4 - nameAdvance).coerceAtLeast(0)
    val underCount = remainingPx / 4
    val fineCount = remainingPx % 4
    return DialogRankingDisplayName(
        original = plain,
        fixed = normalized,
        padding = "_".repeat(underCount),
        finePadding = "\u07F2".repeat(fineCount),
    )
  }

  private fun logDialogGraphPreview(
      period: Period,
      size: DialogGraphSize,
      graph: DialogGraph,
      subtitle: String,
  ) {
    val buttonColumnWidth = DIALOG_BUTTON_WIDTH * DIALOG_ACTION_COLUMNS
    val bodyWidth = dialogBodyWidth(graph)
    val subtitleAdvance = uniformDialogAdvance(subtitle)
    Tools.plugin.logger.info(
        "[SLData] Dialog ${period.name.lowercase()} graph preview style=${graph.widthStyle.name.lowercase()} size=${size.arg}" +
            " cellAdvancePx=${graph.cellAdvancePx} axisMax=${graph.axisMax} ticks=${graph.ticks.joinToString("/")}" +
            " bodyWidthPx=$bodyWidth baseBodyWidthPx=$DIALOG_BODY_WIDTH graphWidthPx=${graph.width}" +
            " plotWidthChars=${graph.plotWidthChars} plotWidthPx=${graph.plotWidthAdvance}" +
            " rightAxisWidthChars=${graph.rightAxisWidthChars} graphRowChars=${graph.graphRowChars}" +
            " xAxisRowChars=${graph.xAxisRowChars}" +
            " buttonColumnPx=$buttonColumnWidth buttonDeltaPx=${graph.width - buttonColumnWidth}" +
            " rows=${graph.graphRows} barChars=${graph.barWidthChars} gapChars=${graph.barGapChars}" +
            " glyphAdvances=${graph.glyphAdvances.entries.joinToString(",") { "${it.key}=${it.value}" }}" +
            " rowAdvances=${graph.rowAdvances.joinToString("/")}" +
            " aligned=${graph.rowAdvances.distinct().size == 1}" +
            " subtitleAdvance=$subtitleAdvance" +
            " latestBarColumn=${graph.latestBarColumn} latestMarkerColumn=${graph.latestMarkerColumn ?: "none"}" +
            " latestMarkerRow=${formatDialogMarkerRow(graph.latestMarkerRow)}" +
            " latestAligned=${graph.latestMarkerColumn == null || graph.latestMarkerColumn == graph.latestBarColumn}\n${graph.plain}"
    )
    Tools.plugin.logger.info(
        "[SLData] Dialog ${period.name.lowercase()} geometry size=${size.arg} " +
            "scale=${graph.diagnostics.horizontalScale}x${graph.diagnostics.verticalScale} " +
            "plotChars=${graph.plotWidthChars} plotMarginLeft=${graph.diagnostics.plotMarginLeftChars} " +
            "plotMarginRight=${graph.diagnostics.plotMarginRightChars} marginDelta=${graph.diagnostics.plotMarginDeltaChars} " +
            "plotRange=${graph.diagnostics.plotStartColumn}..${graph.diagnostics.plotEndColumn} " +
            "rightAxisStart=${graph.diagnostics.rightAxisStartColumn} rightAxisWidth=${graph.rightAxisWidthChars} " +
            "graphRowChars=${graph.graphRowChars} xAxisRowChars=${graph.xAxisRowChars} " +
            "barGaps=${graph.diagnostics.barGaps.joinToString("/")}"
    )
    Tools.plugin.logger.info(
        "[SLData] Dialog ${period.name.lowercase()} line-advances size=${size.arg} " +
            graph.lineAdvances.joinToString("; ") {
              "${it.name}=chars:${it.chars},advance:${it.advancePx},asciiSpace:${it.hasAsciiSpace}"
            } +
            "; subtitle=chars:${subtitle.length},advance:$subtitleAdvance,asciiSpace:${subtitle.contains(' ')}"
    )
    Tools.plugin.logger.info(
        "[SLData] Dialog ${period.name.lowercase()} bars size=${size.arg} " +
            graph.diagnostics.bars.joinToString("; ") {
              "#${it.index + 1} ${it.label}:${it.count} center=${it.centerColumn} " +
                  "drawn=${it.startColumn}..${it.endColumn}"
            }
    )
    Tools.plugin.logger.info(
        "[SLData] Dialog ${period.name.lowercase()} x-axis size=${size.arg} " +
            graph.diagnostics.xLabels.joinToString("; ") {
              "${it.label}@bucket#${it.bucketIndex + 1} barCenterRow=${it.barCenterColumn} " +
                  "labelStartRow=${it.labelStartColumn} labelCenterRow=${it.labelCenterColumn} " +
                  "idealStartRow=${it.idealStartColumn} delta=${it.deltaColumns} " +
                  "barCenterPx=${formatDialogPx(it.barCenterPx)} labelStartPx=${formatDialogPx(it.labelStartPx.toDouble())} " +
                  "labelCenterPx=${formatDialogPx(it.labelCenterPx)} deltaPx=${formatDialogPx(it.deltaPx)}"
            }
    )
    Tools.plugin.logger.info(
        "[SLData] Dialog ${period.name.lowercase()} y-axis size=${size.arg} " +
            graph.diagnostics.yLabels.joinToString("; ") {
              "${it.value}=labelRow:${it.labelRow},tickRow:${it.tickRow},delta:${it.deltaRows}"
            }
    )
    Tools.plugin.logger.info(
        "[SLData] Dialog measured unifont glyphs source=minecraft/font/unifont.zip " +
            "metrics=" +
            graph.glyphMetrics.joinToString("; ") {
              "${it.char}(U+%04X raw=%d left=%s right=%s paintedRaw=%d drawnPx=%.1f advance=%d repeatGap=%.1f connects=%s)"
                  .format(
                      it.codePoint,
                      it.sourceWidth,
                      it.paintedLeft?.toString() ?: "none",
                      it.paintedRight?.toString() ?: "none",
                      it.paintedWidth,
                      it.drawnWidth,
                      it.advance,
                      it.repeatGap,
                      it.connectsWhenRepeated,
                  )
            }
    )
  }

  private fun dialogBodyWidth(graph: DialogGraph): Int = max(DIALOG_BODY_WIDTH, graph.width)

  private fun dialogButton(label: String, tooltip: String, key: Key): ActionButton =
      ActionButton.builder(Component.text(label))
          .tooltip(Component.text(tooltip))
          .width(DIALOG_BUTTON_WIDTH)
          .action(DialogAction.customClick(key, null))
          .build()

  private fun dialogPlayerHeadBody(
      player: Player,
      series: LikeSeries,
      bodyWidth: Int,
      iconWidth: Int,
      iconHeight: Int,
  ): DialogBody {
    val head = ItemStack(Material.PLAYER_HEAD)
    val meta = head.itemMeta as? SkullMeta
    if (meta != null) {
      meta.owningPlayer = player
      head.itemMeta = meta
    }
    val latest = series.latest?.count ?: 0
    val description =
        Component.text(
                "${player.name} ／ ${iconWidth}x${iconHeight} ／ 合計 ${formatDialogCount(series.total, DialogLabelStyle.FULLWIDTH)} ／ 最新 ${formatDialogCount(latest, DialogLabelStyle.FULLWIDTH)}",
                NamedTextColor.GRAY,
            )
            .font(DIALOG_FONT)
    return DialogBody.item(head)
        .description(DialogBody.plainMessage(description, bodyWidth))
        .showTooltip(true)
        .showDecorations(false)
        .width(iconWidth.coerceIn(1, 256))
        .height(iconHeight)
        .build()
  }

  @EventHandler(ignoreCancelled = false)
  fun onDialogClick(event: PlayerCustomClickEvent) {
    val player = (event.commonConnection as? PlayerGameConnection)?.player ?: return
    val current = activeDialogRequests[player.uniqueId] ?: DialogRequest(Period.WEEK)
    DialogStatsCategory.byKey(event.identifier)?.let { category ->
      val target = activeDialogStatsTargets[player.uniqueId]
      if (target == null) openDialogStats(player, category = category)
      else openDialogStats(player, target.uuid, target.name, category)
      return
    }
    when (event.identifier) {
      dialogWeekKey -> openDialog(player, Period.WEEK)
      dialogMonthKey -> openDialog(player, Period.MONTH)
      dialogYearKey -> openDialog(player, Period.YEAR)
      dialogOtherFormatsKey -> openDialogOtherFormats(player)
      dialogOtherFormatsBackKey -> openDialog(player, current.period)
      dialogPreviewGraphKey -> openDialog(player, current)
      dialogRankingWeekKey -> openDialogRanking(player, RankingPeriod.WEEK)
      dialogRankingMonthKey -> openDialogRanking(player, RankingPeriod.MONTH)
      dialogRankingYearKey -> openDialogRanking(player, RankingPeriod.YEAR)
      dialogRankingAllKey -> openDialogRanking(player, RankingPeriod.ALL)
      dialogRankingKey -> openDialogRanking(player)
      dialogStatsKey -> openDialogStats(player)
      dialogStatsSettingsKey -> openDialogStatsSettings(player)
      dialogStatsSettingsBackKey -> {
        val target = activeDialogStatsTargets[player.uniqueId]
        val category = activeDialogStatsCategories[player.uniqueId] ?: DialogStatsCategory.OVERVIEW
        if (target == null) openDialogStats(player, category = category)
        else openDialogStats(player, target.uuid, target.name, category)
      }
      dialogStatsReloadKey -> {
        val target = activeDialogStatsTargets[player.uniqueId]
        val category = activeDialogStatsCategories[player.uniqueId] ?: DialogStatsCategory.OVERVIEW
        if (target == null) openDialogStats(player, category = category)
        else openDialogStats(player, target.uuid, target.name, category)
      }
      dialogStatsPeriodKey -> {
        val currentPeriod = activeDialogStatsPeriods[player.uniqueId] ?: RankingPeriod.ALL
        val nextPeriod =
            when (currentPeriod) {
              RankingPeriod.ALL -> RankingPeriod.WEEK
              RankingPeriod.WEEK -> RankingPeriod.MONTH
              RankingPeriod.MONTH -> RankingPeriod.ALL
              RankingPeriod.YEAR -> RankingPeriod.ALL
            }
        activeDialogStatsPeriods[player.uniqueId] = nextPeriod
        val target = activeDialogStatsTargets[player.uniqueId]
        val category = activeDialogStatsCategories[player.uniqueId] ?: DialogStatsCategory.OVERVIEW
        if (target == null) openDialogStats(player, category = category, period = nextPeriod)
        else openDialogStats(player, target.uuid, target.name, category, nextPeriod)
      }
      dialogStatsWorldFilterKey -> {
        dialogStatsIncludeLifeWorld[player.uniqueId] =
            !(dialogStatsIncludeLifeWorld[player.uniqueId] == true)
        openDialogStatsSettings(player)
      }
      dialogCloseKey -> {
        activeDialogRequests.remove(player.uniqueId)
        activeDialogRankingPeriods.remove(player.uniqueId)
        activeDialogStatsTargets.remove(player.uniqueId)
        activeDialogStatsCategories.remove(player.uniqueId)
        dialogStatsIncludeLifeWorld.remove(player.uniqueId)
        player.closeInventory()
      }
    }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    activeDialogRequests.remove(event.player.uniqueId)
    activeDialogRankingPeriods.remove(event.player.uniqueId)
    activeDialogStatsTargets.remove(event.player.uniqueId)
    activeDialogStatsCategories.remove(event.player.uniqueId)
    dialogStatsIncludeLifeWorld.remove(event.player.uniqueId)
  }

  private fun likeAxisMaxForDisplay(peak: Int): Int =
      if (peak <= DIALOG_AXIS_MAX) DIALOG_AXIS_MAX else SLDataStatsService.niceMax(peak)

  private fun parseUuid(raw: String): UUID? =
      try {
        UUID.fromString(raw)
      } catch (_: IllegalArgumentException) {
        null
      }

  private fun formatCount(value: Int): String = String.format("%,d", value)

  private fun formatDialogPercent(numerator: Int, denominator: Int): String {
    if (denominator <= 0) return "0.0%"
    return String.format("%.1f%%", numerator.toDouble() * 100.0 / denominator.toDouble())
  }

  private fun formatAverageCount(value: Double): String = String.format("%.1f", value)

  private fun formatDialogCount(value: Int, labelStyle: DialogLabelStyle): String =
      when (labelStyle) {
        DialogLabelStyle.FULLWIDTH -> toDialogFullWidth(formatCount(value))
        DialogLabelStyle.ASCII -> formatCount(value)
      }

  private fun formatDialogAxisCount(value: Int): String = toDialogFullWidth(formatCount(value))

  private fun formatDelta(value: Int): String =
      when {
        value > 0 -> "+${formatCount(value)}"
        value < 0 -> "−${formatCount(abs(value))}"
        else -> "±0"
      }

  private fun summaryTitle(series: LikeSeries): String {
    val latest = series.latest
    val latestCount = latest?.count ?: 0
    val previousCount = series.buckets.getOrNull(series.buckets.lastIndex - 1)?.count ?: 0
    val currentLabel =
        when (series.period) {
          Period.WEEK -> "今週"
          Period.MONTH -> "今月"
          Period.YEAR -> "今年"
        }
    val deltaLabel =
        when (series.period) {
          Period.WEEK -> "先週比"
          Period.MONTH -> "前月比"
          Period.YEAR -> "前年比"
        }
    val averageUnit =
        when (series.period) {
          Period.WEEK -> "週"
          Period.MONTH -> "か月"
          Period.YEAR -> "年"
        }
    return "$currentLabel ${formatCount(latestCount)} いいね（$deltaLabel ${formatDelta(latestCount - previousCount)} / ${series.buckets.size}$averageUnit 平均 ${String.format("%,.0f", series.average)}）"
  }

  private enum class DialogGraphSize(
      val label: String,
      val arg: String,
      val horizontalScale: Int,
      val verticalScale: Int,
  ) {
    NORMAL("通常", "normal", 1, 1),
    LARGE("2倍", "large", 2, 2);

    companion object {
      fun parse(raw: String?): DialogGraphSize? =
          when (raw?.lowercase()) {
            "normal",
            "default",
            "1x" -> NORMAL
            "large",
            "big",
            "2x",
            "double" -> LARGE
            else -> null
          }
    }
  }

  private data class DialogRequest(
      val period: Period,
  )

  private data class DialogStatsTarget(
      val uuid: UUID,
      val name: String,
  )

  internal enum class DialogStatsCategory(
      val textId: String,
      val defaultLabel: String,
      val defaultTooltip: String,
      val key: Key,
  ) {
    OVERVIEW("overview", "概要", "主要指標の比較表を見る", dialogStatsOverviewKey),
    PERSONAL("personal", "あなたのデータ", "建築Top5、築日数、活動リズム、継続日数", dialogStatsPersonalKey),
    SOCIAL("social", "交流と宣伝", "相互、リピーター、最速サポーター、宣伝効果", dialogStatsSocialKey),
    SERVER("server", "サーバー全体", "ワールド別比率、週次推移、全体一番乗り", dialogStatsServerKey);

    companion object {
      fun byKey(key: Key): DialogStatsCategory? = entries.firstOrNull { it.key == key }

      fun parse(raw: String?): DialogStatsCategory? =
          when (raw?.lowercase(java.util.Locale.ROOT)) {
            "overview",
            "0",
            "top" -> OVERVIEW
            "personal",
            "builds",
            "given",
            "1",
            "my",
            "own",
            "me" -> PERSONAL
            "social",
            "publicity",
            "2",
            "community",
            "share" -> SOCIAL
            "server",
            "global",
            "3",
            "all" -> SERVER
            else -> entries.firstOrNull { it.name.equals(raw, ignoreCase = true) }
          }
    }
  }

  private fun dialogStatsCategoryLabel(category: DialogStatsCategory): String =
      stats2Text(
          "Section.stats2.category.${category.textId}.label",
          category.defaultLabel,
      )

  private fun dialogStatsCategoryTooltip(category: DialogStatsCategory): String =
      stats2Text(
          "Section.stats2.category.${category.textId}.tooltip",
          category.defaultTooltip,
      )

  private data class DialogStatsContent(
      val title: String,
      val includeLifeWorld: Boolean,
      val category: DialogStatsCategory,
      val categories: Map<DialogStatsCategory, List<DialogStatsSection>>,
      val sections: List<DialogStatsSection>,
      val defaultDumpColorValues: Set<Int>,
  ) {
    val bodies: List<DialogBody> = sections.map { it.body }
  }

  private data class DialogStatsSection(
      val title: String,
      val body: PlainMessageDialogBody,
      val dumpSkipsFirstLine: Boolean,
  )

  internal data class DialogStatsText(
      val source: File,
      val entries: Map<String, String>,
  ) {
    val loadedEntryCount: Int = entries.size
  }

  private data class DialogComparisonValue(
      val label: String,
      val value: Double,
      val sample: String? = null,
  )

  private enum class DialogTextPalette(
      val primary: TextColor,
      val secondary: TextColor,
  ) {
    DEFAULT(NamedTextColor.WHITE, TextColor.color(205, 214, 229)),
  }

  internal enum class DialogLabelStyle {
    FULLWIDTH,
    ASCII;

    companion object {
      fun parse(raw: String?): DialogLabelStyle =
          when (raw?.lowercase()) {
            "ascii",
            "halfwidth",
            "half-width" -> ASCII
            else -> FULLWIDTH
          }
    }
  }

  internal enum class DialogWidthStyle(
      val labelStyle: DialogLabelStyle,
      val lineChar: Char,
      val emptyChar: Char,
      val fillerChar: Char,
      val rightAxisGap: String,
      val barBlocks: CharArray,
      val cellAdvancePx: Int,
      val gridVisible: Boolean = true,
  ) {
    ASCII_HYPHEN(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_UNDERSCORE(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_LOW(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_CLEAN(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
        false,
    ),
    FULLWIDTH(
        DialogLabelStyle.FULLWIDTH,
        '＿',
        DIALOG_FULL_SPACE,
        DIALOG_FULL_SPACE,
        DIALOG_FULL_SPACE.toString(),
        CharArray(8) { '⬛' },
        9,
    );

    companion object {
      fun parse(raw: String?): DialogWidthStyle? =
          when (raw?.trim()?.lowercase()) {
            "ascii",
            "hyphen",
            "hyphen-axis",
            "minus",
            "ascii-hyphen",
            "halfwidth",
            "half-width",
            "5px" -> ASCII_HYPHEN
            "underscore",
            "under",
            "under-axis",
            "ascii-underscore" -> ASCII_UNDERSCORE
            "low",
            "lowline",
            "low-line",
            "low-axis",
            "blockline",
            "ascii-low" -> ASCII_LOW
            "clean",
            "nogrid",
            "no-grid",
            "gridless",
            "ascii-clean" -> ASCII_CLEAN
            "fullwidth",
            "full-width",
            "wide",
            "9px" -> FULLWIDTH
            else -> null
          }
    }
  }

  internal data class DialogRenderConfig(
      val widthStyle: DialogWidthStyle,
      val lineChar: Char,
      val emptyChar: Char,
      val fillerChar: Char,
      val labelStyle: DialogLabelStyle,
      val rightAxisGap: String,
      val normalHorizontalScale: Int,
      val normalVerticalScale: Int,
      val largeHorizontalScale: Int,
      val largeVerticalScale: Int,
  ) {
    fun withWidthStyle(style: DialogWidthStyle): DialogRenderConfig =
        copy(
            widthStyle = style,
            lineChar = style.lineChar,
            emptyChar = style.emptyChar,
            fillerChar = style.fillerChar,
            labelStyle = style.labelStyle,
            rightAxisGap = style.rightAxisGap,
        )

    // 2026-08-17: 週次いいねグラフの棒間隔が広すぎて見づらいというユーザー指摘に対応するため、
    // このグラフだけ横方向スケールを落とせるようにする(棒幅・間隔とも比例して縮む)。
    fun withLargeHorizontalScale(scale: Int): DialogRenderConfig =
        copy(largeHorizontalScale = scale.coerceIn(1, 4))
  }

  private data class DialogGraph(
      val component: Component,
      val plain: String,
      val axisMax: Int,
      val ticks: List<Int>,
      val widthStyle: DialogWidthStyle,
      val cellAdvancePx: Int,
      val width: Int,
      val plotWidthChars: Int,
      val plotWidthAdvance: Int,
      val rightAxisWidthChars: Int,
      val graphRowChars: Int,
      val xAxisRowChars: Int,
      val graphRows: Int,
      val barWidthChars: Int,
      val barGapChars: Int,
      val rowAdvances: List<Int>,
      val lineAdvances: List<DialogLineAdvance>,
      val glyphAdvances: Map<Char, Int>,
      val latestBarColumn: Int,
      val latestMarkerColumn: Int?,
      val latestMarkerRow: Int?,
      val glyphMetrics: List<DialogGlyphMetric>,
      val diagnostics: DialogGraphDiagnostics,
  )

  private data class DialogLineAdvance(
      val name: String,
      val chars: Int,
      val advancePx: Int,
      val hasAsciiSpace: Boolean,
  )

  private data class DialogGraphDiagnostics(
      val horizontalScale: Int,
      val verticalScale: Int,
      val plotStartColumn: Int,
      val plotEndColumn: Int,
      val rightAxisStartColumn: Int,
      val plotMarginLeftChars: Int,
      val plotMarginRightChars: Int,
      val bars: List<DialogBarDiagnostics>,
      val xLabels: List<DialogXAxisDiagnostics>,
      val yLabels: List<DialogYAxisDiagnostics>,
  ) {
    val plotMarginDeltaChars: Int
      get() = plotMarginRightChars - plotMarginLeftChars

    val barGaps: List<Int>
      get() = bars.zipWithNext { left, right -> right.startColumn - left.endColumn - 1 }
  }

  private data class DialogBarDiagnostics(
      val index: Int,
      val label: String,
      val count: Int,
      val startColumn: Int,
      val endColumn: Int,
      val centerColumn: Int,
  )

  private data class DialogXAxisDiagnostics(
      val bucketIndex: Int,
      val label: String,
      val barCenterColumn: Int,
      val labelStartColumn: Int,
      val labelCenterColumn: Int,
      val idealStartColumn: Int,
      val barCenterPx: Double,
      val labelStartPx: Int,
      val labelCenterPx: Double,
  ) {
    val deltaColumns: Int
      get() = labelCenterColumn - barCenterColumn

    val deltaPx: Double
      get() = labelCenterPx - barCenterPx
  }

  private data class DialogYAxisDiagnostics(
      val value: Int,
      val labelRow: Int,
      val tickRow: Int,
  ) {
    val deltaRows: Int
      get() = labelRow - tickRow
  }

  private data class DialogGlyphMetric(
      val char: Char,
      val codePoint: Int,
      val sourceWidth: Int,
      val paintedLeft: Int?,
      val paintedRight: Int?,
      val paintedWidth: Int,
      val drawnWidth: Double,
      val advance: Int,
  ) {
    val repeatGap: Double
      get() = advance - drawnWidth

    val connectsWhenRepeated: Boolean
      get() = repeatGap <= 0.0
  }

  // 2026-08-17: advanceの値を UnihexFont$UnicodeTextureGlyph.getAdvance() の実式
  // ( advance = (right - left + 1) / 2 + 1, int除算 ) で再計算し、
  // 従来の一律5px/9pxだったものを修正した（Cogito Vault
  // Knowledge/minecraft-unihex-advance-width-formula.md 参照）。
  // left/right/paintedWidth は元々正しかったため変更していない。
  private val dialogMeasuredGlyphMetrics =
      listOf(
          DialogGlyphMetric('█', 0x2588, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('-', 0x002D, 8, 2, 5, 4, 2.0, 3),
          DialogGlyphMetric('▉', 0x2589, 8, 0, 6, 7, 3.5, 4),
          DialogGlyphMetric('▊', 0x258A, 8, 0, 5, 6, 3.0, 4),
          DialogGlyphMetric('▋', 0x258B, 8, 0, 4, 5, 2.5, 3),
          DialogGlyphMetric('▌', 0x258C, 8, 0, 3, 4, 2.0, 3),
          DialogGlyphMetric('▐', 0x2590, 8, 4, 7, 4, 2.0, 3),
          DialogGlyphMetric('▀', 0x2580, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▄', 0x2584, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▁', 0x2581, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▂', 0x2582, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▃', 0x2583, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▅', 0x2585, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▆', 0x2586, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▇', 0x2587, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('■', 0x25A0, 8, 1, 7, 7, 3.5, 4),
          DialogGlyphMetric('▮', 0x25AE, 8, 2, 5, 4, 2.0, 3),
          DialogGlyphMetric('▯', 0x25AF, 8, 2, 5, 4, 2.0, 3),
          DialogGlyphMetric('▰', 0x25B0, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▱', 0x25B1, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('⬛', 0x2B1B, 16, 1, 14, 14, 7.0, 8),
          DialogGlyphMetric('⬜', 0x2B1C, 16, 1, 14, 14, 7.0, 8),
          DialogGlyphMetric('◼', 0x25FC, 8, 1, 6, 6, 3.0, 4),
          DialogGlyphMetric('▔', 0x2594, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('─', 0x2500, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('│', 0x2502, 8, 4, 4, 1, 0.5, 1),
          DialogGlyphMetric('▼', 0x25BC, 8, 1, 6, 6, 3.0, 4),
          // 以下3件は前回のテーブルに存在せず uniformUnifontAdvance() のフォールバック(一律5px)に
          // 頼っていたため、`░` だけ実際には1px狭いことが未反映だった（活動ヒートマップの列ズレの原因）。
          DialogGlyphMetric('░', 0x2591, 8, 0, 6, 7, 3.5, 4),
          DialogGlyphMetric('▒', 0x2592, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▓', 0x2593, 8, 0, 7, 8, 4.0, 5),
          // 2026-08-17: `…`(U+2026)もフォールバックの一律5px扱いだったが実際は4px。
          // compactDialogText()で文字を切り詰めるときに付与されるため、ランキング・建築タイトル等
          // 名前が切り詰められた行だけ1pxずれる原因になっていた（ユーザー指摘、現在は省略記号自体を
          // 使わない方式に変更したため実際には使われないが、記録として残す）。
          DialogGlyphMetric('…', 0x2026, 8, 1, 7, 7, 3.5, 4),
          // 2026-08-17: 半角`_`(U+005F、名前に含まれうる)もフォールバックの一律5px扱いだったが実際は
          // 4px。プレイヤー名のパディング計算自体は文字数ベースなので影響しないが、幅計算に
          // uniformDialogAdvanceを経由する箇所のために正しい値を登録しておく。
          DialogGlyphMetric('_', 0x005F, 8, 1, 7, 7, 3.5, 4),
      )

  private val dialogGlyphMetricByChar = dialogMeasuredGlyphMetrics.associateBy { it.char }

  private val dialogFullWidthAdvanceRanges =
      listOf(
          0x3000..0x30FF,
          0x3200..0x9FFF,
          0x1100..0x11FF,
          0x3130..0x318F,
          0xA960..0xA97F,
          0xAC00..0xD7FF,
          0xF900..0xFAFF,
          0xFF01..0xFF5E,
      )

  private val dialogFullWidthMeasuredGlyphMetrics =
      listOf(
          DialogGlyphMetric('　', 0x3000, 16, null, null, 0, 0.0, 9),
          DialogGlyphMetric('＿', 0xFF3F, 16, 0, 15, 16, 8.0, 9),
          DialogGlyphMetric('％', 0xFF05, 16, 2, 13, 12, 6.0, 9),
          DialogGlyphMetric('＃', 0xFF03, 16, 2, 12, 11, 5.5, 9),
          DialogGlyphMetric('＠', 0xFF20, 16, 2, 13, 12, 6.0, 9),
      )

  private fun buildDialogGraph(
      series: LikeSeries,
      size: DialogGraphSize,
      config: DialogRenderConfig,
      incompleteBucketIndices: Set<Int> = emptySet(),
      showAllXAxisLabels: Boolean = false,
      axisMaxOverride: Int = likeAxisMaxForDisplay(series.peak),
  ): DialogGraph {
    val axisMax = axisMaxOverride
    val ticks = SLDataStatsService.axisTicks(axisMax, DIALOG_AXIS_DIVISIONS)
    val blocks = config.widthStyle.barBlocks
    val horizontalScale =
        when (size) {
          DialogGraphSize.NORMAL -> config.normalHorizontalScale
          DialogGraphSize.LARGE -> config.largeHorizontalScale
        }
    val verticalScale =
        when (size) {
          DialogGraphSize.NORMAL -> config.normalVerticalScale
          DialogGraphSize.LARGE -> config.largeVerticalScale
        }
    val graphRows = DIALOG_AXIS_DIVISIONS * verticalScale + 1
    val bucketCount = series.buckets.size
    val (barWidthChars, barGapChars) =
        when (size) {
          DialogGraphSize.NORMAL ->
              max(1, DIALOG_BAR_WIDTH_CHARS * horizontalScale) to
                  max(0, DIALOG_BAR_GAP_CHARS * horizontalScale)
          DialogGraphSize.LARGE -> {
            val barWidth = max(1, DIALOG_BAR_WIDTH_CHARS * horizontalScale)
            val baseGap = max(0, DIALOG_BAR_GAP_CHARS * horizontalScale)
            if (bucketCount <= 5) {
              barWidth to baseGap
            } else {
              // バケット数が多い場合、全体のプロット幅が標準（50セル程度）に収まるよう隙間を自動調整
              val targetWidth = 50
              val gap = max(1, (targetWidth - 1 - bucketCount * barWidth) / bucketCount)
              barWidth to gap
            }
          }
        }
    val maxUnits = (graphRows - 1) * blocks.size
    val values =
        series.buckets.map { bucket ->
          if (bucket.count <= 0 || axisMax <= 0) 0
          else
              ceil(bucket.count.toDouble() / axisMax.toDouble() * maxUnits.toDouble())
                  .toInt()
                  .coerceIn(1, maxUnits)
        }
    val plain = StringBuilder()
    var component = Component.empty().font(DIALOG_FONT)
    val gridColor = TextColor.color(104, 112, 124)
    val hiddenColor = TextColor.color(0, 0, 0)
    val barColor = TextColor.color(108, 205, 117)
    val latestColor = TextColor.color(247, 188, 72)
    val peakColor = TextColor.color(126, 224, 142)
    // 2026-08-17: 集計途中の当月を`░`(送り幅が他のブロック文字と1px違い列がずれる)で表す方式をやめ、
    // 文字は他と同じブロック文字のまま色だけで区別する(ユーザー要望、DIALOG_STYLE.md「使う文字」参照)。
    val incompleteColor = TextColor.color(130, 170, 210)
    val baseGridColor = if (config.widthStyle.gridVisible) gridColor else hiddenColor
    val rowAdvances = mutableListOf<Int>()
    val lineAdvances = mutableListOf<DialogLineAdvance>()
    val usedGlyphs = sortedSetOf<Char>()
    val rightLabelWidth = ticks.maxOf { formatDialogAxisCount(it).length }
    val layout = dialogPlotLayout(series.buckets.size, barWidthChars, barGapChars)
    val plotWidth = layout.plotWidth
    val plotStartColumn = 0
    val rightAxisWidthChars = config.rightAxisGap.length + rightLabelWidth
    val graphRowChars = plotWidth + rightAxisWidthChars
    val xLabels = dialogXAxisLabels(series, layout, config, showAllXAxisLabels)
    val xAxisRowChars = xLabels.text.length + rightAxisWidthChars
    val yAxisLabels = dialogYAxisLabels(axisMax, graphRows, verticalScale, config)
    val latestIndex = series.buckets.lastIndex
    val latestUnits = values.getOrElse(latestIndex) { 0 }
    val latestBarColumn =
        if (latestIndex >= 0) layout.bars.getOrNull(latestIndex)?.centerColumn ?: -1 else -1
    val latestMarkerColumn: Int? = null
    val latestMarkerRow: Int? = null

    fun append(text: String, color: TextColor) {
      plain.append(text)
      component = component.append(Component.text(text, color).font(DIALOG_FONT))
      text.forEach { if (it != '\n') usedGlyphs += it }
    }

    fun appendWithHover(text: String, color: TextColor, hover: Component?) {
      plain.append(text)
      val piece = Component.text(text, color).font(DIALOG_FONT)
      component = component.append(if (hover != null) piece.hoverEvent(hover) else piece)
      text.forEach { if (it != '\n') usedGlyphs += it }
    }

    fun appendRightAxisLabel(value: Int?) {
      append(config.rightAxisGap, hiddenColor)
      val label = value?.let { formatDialogAxisCount(it) } ?: ""
      val padding = (rightLabelWidth - label.length).coerceAtLeast(0)
      append(fullSpace(padding), hiddenColor)
      append(label, gridColor)
    }

    fun recordLineAdvance(name: String) {
      val line = plain.lines().last()
      val advance = uniformDialogAdvance(line)
      rowAdvances += advance
      lineAdvances += DialogLineAdvance(name, line.length, advance, line.contains(' '))
    }

    (0 until graphRows).forEach { row ->
      val chars = CharArray(plotWidth) { config.lineChar }
      val colors = MutableList(plotWidth) { baseGridColor }
      val hovers = MutableList<Component?>(plotWidth) { null }
      series.buckets.forEachIndexed { index, bucket ->
        val rowBottomUnits = (graphRows - row - 1) * blocks.size
        val cellUnits = (values[index] - rowBottomUnits).coerceIn(0, blocks.size)
        val bar = layout.bars[index]
        val char =
            when {
              row == latestMarkerRow && index == latestIndex -> null
              cellUnits >= blocks.size -> blocks.last()
              cellUnits > 0 -> blocks[cellUnits - 1]
              else -> config.emptyChar
            }
        val cellHover =
            if (cellUnits > 0)
                Component.text()
                    .append(Component.text("${bucket.label}\n", NamedTextColor.GRAY))
                    .append(Component.text("${formatCount(bucket.count)}件", NamedTextColor.YELLOW))
                    .build()
            else null
        if (row == latestMarkerRow && index == latestIndex) {
          buildDialogMarkedBarCell(bar.width).forEachIndexed { offset, markedChar ->
            val column = bar.startColumn + offset
            if (column in chars.indices) {
              chars[column] = markedChar
              colors[column] = latestColor
              hovers[column] = cellHover
            }
          }
        } else if (cellUnits >= blocks.size) {
          val color =
              when {
                index in incompleteBucketIndices -> incompleteColor
                index == series.buckets.lastIndex -> latestColor
                bucket.count == series.peak -> peakColor
                else -> barColor
              }
          (bar.startColumn..bar.endColumn).forEach { column ->
            chars[column] = char ?: blocks.last()
            colors[column] = color
            hovers[column] = cellHover
          }
        } else if (cellUnits > 0) {
          val color =
              when {
                index in incompleteBucketIndices -> incompleteColor
                index == series.buckets.lastIndex -> latestColor
                bucket.count == series.peak -> peakColor
                else -> barColor
              }
          (bar.startColumn..bar.endColumn).forEach { column ->
            chars[column] = char ?: blocks[cellUnits - 1]
            colors[column] = color
            hovers[column] = cellHover
          }
        } else {
          (bar.startColumn..bar.endColumn).forEach { column ->
            chars[column] = config.emptyChar
            colors[column] = baseGridColor
          }
        }
      }
      appendColoredCharsWithHover(chars, colors, hovers, ::appendWithHover)
      appendRightAxisLabel(yAxisLabels.firstOrNull { it.labelRow == row }?.value)
      recordLineAdvance("graph-row-${row + 1}")
      append("\n", gridColor)
    }

    val xAxisColors = MutableList(xLabels.text.length) { hiddenColor }
    xLabels.labels.forEach { label ->
      label.label.indices.forEach { offset ->
        val column = label.startColumn + offset
        if (column in xAxisColors.indices) xAxisColors[column] = gridColor
      }
    }
    appendColoredChars(xLabels.text.toCharArray(), xAxisColors, ::append)
    append(config.rightAxisGap, hiddenColor)
    validateDialogLineAdvanceInvariant(size, config, lineAdvances)
    append(fullSpace(rightLabelWidth), hiddenColor)
    recordLineAdvance("x-axis")

    return DialogGraph(
        component,
        plain.toString().trimEnd(),
        axisMax,
        ticks,
        config.widthStyle,
        config.widthStyle.cellAdvancePx,
        rowAdvances.maxOrNull() ?: 0,
        plotWidth,
        uniformDialogAdvance(config.lineChar.toString().repeat(plotWidth)),
        rightAxisWidthChars,
        graphRowChars,
        xAxisRowChars,
        graphRows,
        barWidthChars,
        barGapChars,
        rowAdvances,
        lineAdvances,
        usedGlyphs.associateWith { uniformDialogAdvance(it.toString()) },
        latestBarColumn,
        latestMarkerColumn,
        latestMarkerRow,
        dialogMeasuredGlyphMetrics + dialogFullWidthMeasuredGlyphMetrics,
        DialogGraphDiagnostics(
            horizontalScale,
            verticalScale,
            plotStartColumn,
            (plotStartColumn + plotWidth - 1).coerceAtLeast(plotStartColumn),
            plotStartColumn + plotWidth,
            layout.leftMargin,
            layout.rightMargin,
            layout.bars.map { bar ->
              DialogBarDiagnostics(
                  bar.index,
                  series.buckets[bar.index].label,
                  series.buckets[bar.index].count,
                  bar.startColumn,
                  bar.endColumn,
                  bar.centerColumn,
              )
            },
            xLabels.labels.map {
              DialogXAxisDiagnostics(
                  it.bucketIndex,
                  it.label,
                  plotStartColumn + it.anchorColumn,
                  plotStartColumn + it.startColumn,
                  plotStartColumn + it.centerColumn,
                  plotStartColumn + it.idealStartColumn,
                  it.barCenterPx,
                  it.labelStartPx,
                  it.labelCenterPx,
              )
            },
            yAxisLabels.map { DialogYAxisDiagnostics(it.value, it.labelRow, it.tickRow) },
        ),
    )
  }

  private fun appendColoredChars(
      chars: CharArray,
      colors: List<TextColor>,
      append: (String, TextColor) -> Unit,
  ) {
    if (chars.isEmpty()) return
    var start = 0
    var color = colors.first()
    for (index in 1..chars.lastIndex) {
      if (colors[index] != color) {
        append(String(chars, start, index - start), color)
        start = index
        color = colors[index]
      }
    }
    append(String(chars, start, chars.size - start), color)
  }

  /**
   * [appendColoredChars]のホバー対応版。色に加えてホバーが変わったところでも区切って追加する (2026-08-17:
   * 棒グラフのセルにカーソルを合わせると件数を表示できるようにするため追加)。
   */
  private fun appendColoredCharsWithHover(
      chars: CharArray,
      colors: List<TextColor>,
      hovers: List<Component?>,
      append: (String, TextColor, Component?) -> Unit,
  ) {
    if (chars.isEmpty()) return
    var start = 0
    var color = colors.first()
    var hover = hovers.first()
    for (index in 1..chars.lastIndex) {
      if (colors[index] != color || hovers[index] !== hover) {
        append(String(chars, start, index - start), color, hover)
        start = index
        color = colors[index]
        hover = hovers[index]
      }
    }
    append(String(chars, start, chars.size - start), color, hover)
  }

  private fun validateDialogLineAdvanceInvariant(
      size: DialogGraphSize,
      config: DialogRenderConfig,
      lineAdvances: List<DialogLineAdvance>,
  ) {
    val distinctAdvances = lineAdvances.map { it.advancePx }.distinct()
    if (distinctAdvances.size <= 1) return
    val details =
        lineAdvances.joinToString("; ") {
          "${it.name}=chars:${it.chars},advance:${it.advancePx},asciiSpace:${it.hasAsciiSpace}"
        }
    val message =
        "[SLData] ERROR Dialog line advance invariant failed style=${config.widthStyle.name.lowercase()}" +
            " size=${size.arg} expectedSingleAdvance=true advances=${distinctAdvances.joinToString("/")}" +
            " lines=[$details]"
    Tools.plugin.logger.severe(message)
    if (java.lang.Boolean.getBoolean("sociallikes3.sldata.dialog.strictWidth")) {
      error(message)
    }
  }

  private fun formatDialogMarkerRow(row: Int?): String =
      when (row) {
        null -> "none"
        -1 -> "abovePlot"
        else -> row.toString()
      }

  private fun dialogSubtitle(
      series: LikeSeries,
      size: DialogGraphSize,
      config: DialogRenderConfig,
  ): String =
      "${series.period.label} ／ ${size.label} ／ 合計 ${formatDialogCount(series.total, config.labelStyle)} ／ ピーク ${formatDialogCount(series.peak, config.labelStyle)}"

  private fun formatDialogPx(value: Double): String =
      if (value % 1.0 == 0.0) value.toInt().toString() else "%.1f".format(value)

  private fun uniformDialogAdvance(text: String): Int = text.sumOf { uniformDialogAdvance(it) }

  private fun uniformDialogAdvance(char: Char): Int =
      when (char) {
        ' ' -> 4
        else -> dialogGlyphMetricByChar[char]?.advance ?: uniformUnifontAdvance(char)
      }

  private fun uniformUnifontAdvance(char: Char): Int {
    val codePoint = char.code
    return if (dialogFullWidthAdvanceRanges.any { codePoint in it }) 9 else 5
  }

  private fun nbsp(count: Int): String = DIALOG_NBSP.toString().repeat(count.coerceAtLeast(0))

  private fun fullSpace(count: Int): String =
      DIALOG_FULL_SPACE.toString().repeat(count.coerceAtLeast(0))

  private fun String.padStartNbsp(length: Int): String =
      if (this.length >= length) this else nbsp(length - this.length) + this

  private fun String.padStartFullWidth(length: Int): String =
      if (this.length >= length) this else fullSpace(length - this.length) + this

  private fun toDialogFullWidth(text: String): String =
      buildString(text.length) {
        text.forEach { char ->
          append(
              when (char) {
                ' ' -> DIALOG_FULL_SPACE
                in '!'..'~' -> (char.code + 0xFEE0).toChar()
                else -> char
              }
          )
        }
      }

  /**
   * [toDialogFullWidth]と同じだが、小数点`.`だけ半角のまま残す(2026-08-17ユーザー判断: "３８．５"では
   * なく"３８.５"にする)。ドット自体は幅計算に使われないため(数値の末尾に付く自由テキストとして扱う)、 固定幅グリッドの一部では使わないこと。
   */
  private fun toDialogFullWidthKeepDot(text: String): String =
      buildString(text.length) {
        text.forEach { char ->
          append(
              when (char) {
                '.' -> '.'
                ' ' -> DIALOG_FULL_SPACE
                in '!'..'~' -> (char.code + 0xFEE0).toChar()
                else -> char
              }
          )
        }
      }

  private fun formatDialogXAxisLabel(period: Period, rawLabel: String): String {
    val compact = compactBucketLabel(period, rawLabel)
    if (period == Period.MONTH) return toDialogFullWidth("${compact}月")
    if (period != Period.WEEK) return toDialogFullWidth(compact)
    val parts = compact.split("/")
    if (parts.size != 2) return toDialogFullWidth(compact)
    val month = parts[0].toIntOrNull() ?: return toDialogFullWidth(compact)
    val day = parts[1].toIntOrNull() ?: return toDialogFullWidth(compact)
    return toDialogFullWidth("${month}月${day}日")
  }

  private data class DialogPlotLayout(
      val plotWidth: Int,
      val leftMargin: Int,
      val rightMargin: Int,
      val bars: List<DialogBarLayout>,
  )

  private data class DialogBarLayout(
      val index: Int,
      val startColumn: Int,
      val width: Int,
  ) {
    val endColumn: Int
      get() = startColumn + width - 1

    val centerColumn: Int
      get() = startColumn + width / 2
  }

  private fun dialogPlotLayout(
      bucketCount: Int,
      barWidthChars: Int,
      barGapChars: Int,
  ): DialogPlotLayout {
    if (bucketCount <= 0) return DialogPlotLayout(0, 0, 0, emptyList())
    val slotWidth = barWidthChars + barGapChars
    val leftMargin = (barGapChars + 1) / 2
    val rightMargin = leftMargin
    val bars =
        (0 until bucketCount).map { index ->
          DialogBarLayout(index, index * slotWidth + leftMargin, barWidthChars)
        }
    val plotWidth =
        leftMargin + bucketCount * barWidthChars + (bucketCount - 1) * barGapChars + rightMargin
    return DialogPlotLayout(plotWidth, leftMargin, rightMargin, bars)
  }

  private fun dialogTopBarRow(valueUnits: Int, unitsPerRow: Int, graphRows: Int): Int =
      if (valueUnits <= 0) graphRows
      else graphRows - ceil(valueUnits.toDouble() / unitsPerRow.toDouble()).toInt()

  private fun buildDialogLatestMarker(width: Int, markerIndex: Int): String {
    if (width <= 0) return ""
    val chars = CharArray(width) { DIALOG_NBSP }
    chars[markerIndex.coerceIn(0, width - 1)] = '▼'
    return String(chars)
  }

  private fun buildDialogMarkedBarCell(barWidthChars: Int): String {
    if (barWidthChars <= 1) return "▼"
    val chars = CharArray(barWidthChars) { '─' }
    chars[(barWidthChars / 2).coerceIn(0, barWidthChars - 1)] = '▼'
    return String(chars)
  }

  private data class DialogXAxisLabels(
      val text: String,
      val labels: List<DialogXAxisLabel>,
  )

  private data class DialogXAxisLabel(
      val bucketIndex: Int,
      val label: String,
      val anchorColumn: Int,
      val startColumn: Int,
      val centerColumn: Int,
      val idealStartColumn: Int,
      val barCenterPx: Double,
      val labelStartPx: Int,
      val labelCenterPx: Double,
  )

  private data class DialogYAxisLabel(
      val value: Int,
      val tickRow: Int,
      val labelRow: Int,
  )

  private fun dialogXAxisLabels(
      series: LikeSeries,
      layout: DialogPlotLayout,
      config: DialogRenderConfig,
      showAllBuckets: Boolean = false,
  ): DialogXAxisLabels {
    if (showAllBuckets) return dialogAllBucketXAxisLabels(series, layout, config)
    // 2026-08-17: ラベルの無い箇所はhiddenColorで塗って見えなくする想定だったが、▁の線がうっすら
    // 見えてしまっていた(ユーザー指摘)。NBSPは送り幅が▁と同じ(5px)なので、以降の位置計算
    // (config.lineChar基準)はそのままで、実際に印字される文字だけ本当に空のグリフに差し替える。
    val chars = DIALOG_NBSP.toString().repeat(layout.plotWidth).toCharArray()
    val placed = mutableListOf<DialogXAxisLabel>()
    val targets =
        listOf(0, series.buckets.lastIndex / 2, series.buckets.lastIndex).distinct().mapNotNull {
            index ->
          series.buckets.getOrNull(index)?.let {
            val label = formatDialogXAxisLabel(series.period, it.label)
            index to label
          }
        }

    targets.forEach { (bucketIndex, label) ->
      val anchor = layout.bars.getOrNull(bucketIndex)?.centerColumn ?: return@forEach
      val plotAdvance = uniformDialogAdvance(config.lineChar.toString().repeat(layout.plotWidth))
      val cellAdvance = uniformDialogAdvance(config.lineChar)
      val labelAdvance = uniformDialogAdvance(label)
      val maxStart = (layout.plotWidth - label.length).coerceAtLeast(0)
      val barCenterPx =
          uniformDialogAdvance(config.lineChar.toString().repeat(anchor)) + cellAdvance / 2.0
      val idealStart =
          when (bucketIndex) {
            0 -> 0
            series.buckets.lastIndex ->
                ((plotAdvance - labelAdvance + cellAdvance / 2) / cellAdvance)
            else -> anchor - label.length / 2
          }
      val start =
          when (bucketIndex) {
            0 -> 0
            series.buckets.lastIndex -> idealStart.coerceIn(0, maxStart)
            else ->
                (0..maxStart).minByOrNull { candidate ->
                  val labelCenterPx =
                      uniformDialogAdvance(config.lineChar.toString().repeat(candidate)) +
                          labelAdvance / 2.0
                  abs(labelCenterPx - barCenterPx)
                } ?: idealStart.coerceIn(0, maxStart)
          }.let {
            val cumulativeGapCells = placed.size * (placed.size + 1) / 2
            (it + cumulativeGapCells).coerceIn(0, maxStart)
          }
      val labelStartPx = uniformDialogAdvance(config.lineChar.toString().repeat(start))
      val labelCenterPx = labelStartPx + labelAdvance / 2.0
      label.forEachIndexed { offset, char ->
        val column = start + offset
        if (column in chars.indices) chars[column] = char
      }
      placed +=
          DialogXAxisLabel(
              bucketIndex,
              label,
              anchor,
              start,
              start + label.length / 2,
              idealStart,
              barCenterPx,
              labelStartPx,
              labelCenterPx,
          )
    }
    return DialogXAxisLabels(String(chars), placed)
  }

  /**
   * Categorical charts have no redundant labels: every bucket needs its own X-axis label. Unlike
   * dates, Japanese labels have a 9px advance while the graph grid uses 5px low blocks. Compose
   * this row in pixel advance order so labels stay inside their own enlarged slots instead of
   * overwriting neighbouring labels by character index.
   */
  private fun dialogAllBucketXAxisLabels(
      series: LikeSeries,
      layout: DialogPlotLayout,
      config: DialogRenderConfig,
  ): DialogXAxisLabels {
    val cellAdvance = uniformDialogAdvance(config.lineChar)
    val plotAdvance = layout.plotWidth * cellAdvance
    val text = StringBuilder()
    val placed = mutableListOf<DialogXAxisLabel>()
    var cursorPx = 0

    series.buckets.forEachIndexed { bucketIndex, bucket ->
      val bar = layout.bars.getOrNull(bucketIndex) ?: return@forEachIndexed
      // These labels are not dates; adding the period suffix ("月") both changes their meaning and
      // consumes the next column's width.
      val label = bucket.label
      val labelAdvance = uniformDialogAdvance(label)
      val barCenterPx = bar.startColumn * cellAdvance + (bar.width * cellAdvance) / 2.0
      val desiredStartPx = (barCenterPx - labelAdvance / 2.0).coerceAtLeast(cursorPx.toDouble())
      val fillerCount =
          kotlin.math
              .round((desiredStartPx - cursorPx) / cellAdvance.toDouble())
              .toInt()
              .coerceAtLeast(0)
      text.append(dialogInvisibleAxisFill(config, fillerCount))
      cursorPx += fillerCount * cellAdvance
      val labelStartChar = text.length
      val labelStartPx = cursorPx
      text.append(label)
      cursorPx += labelAdvance
      placed +=
          DialogXAxisLabel(
              bucketIndex = bucketIndex,
              label = label,
              anchorColumn = bar.centerColumn,
              startColumn = labelStartChar,
              centerColumn = labelStartChar + label.length / 2,
              idealStartColumn = (desiredStartPx / cellAdvance).toInt(),
              barCenterPx = barCenterPx,
              labelStartPx = labelStartPx,
              labelCenterPx = labelStartPx + labelAdvance / 2.0,
          )
    }
    val trailingFillers = ((plotAdvance - cursorPx) / cellAdvance).coerceAtLeast(0)
    text.append(dialogInvisibleAxisFill(config, trailingFillers))
    return DialogXAxisLabels(text.toString(), placed)
  }

  /** Uses the exact same low-block glyph for graph axes and X-axis label gaps. */
  private fun dialogAxisFill(config: DialogRenderConfig, count: Int): String =
      config.lineChar.toString().repeat(count.coerceAtLeast(0))

  /**
   * X軸ラベル行の「ラベルの無い区間」専用の埋め文字。[dialogAxisFill]と同じ送り幅(▁基準)だが、 実際に印字するのはNBSP(本当に空のグリフ)にする。2026-08-17:
   * ▁をhiddenColorで塗る方式は 実機でうっすら見えてしまっていた(ユーザー指摘)。
   */
  private fun dialogInvisibleAxisFill(config: DialogRenderConfig, count: Int): String =
      DIALOG_NBSP.toString().repeat(count.coerceAtLeast(0))

  private fun dialogYAxisLabels(
      axisMax: Int,
      graphRows: Int,
      verticalScale: Int,
      config: DialogRenderConfig,
  ): List<DialogYAxisLabel> {
    val labels = mutableListOf<DialogYAxisLabel>()
    (0..DIALOG_AXIS_DIVISIONS).forEach { division ->
      val lineRow = division * verticalScale
      val value = axisMax - axisMax * division / DIALOG_AXIS_DIVISIONS
      labels += DialogYAxisLabel(value, lineRow, lineRow)
    }
    return labels
  }

  private fun compactBucketLabel(period: Period, label: String): String =
      when (period) {
        Period.WEEK -> label.replace("週", "")
        Period.MONTH -> label.substringAfter("/", label)
        Period.YEAR -> label.takeLast(2)
      }.let { if (it.length <= 4) it else it.take(4) }

  private fun centerCell(label: String, width: Int): String {
    if (label.isBlank()) return " ".repeat(width)
    val clipped = if (label.length > width) label.take(width) else label
    val left = (width - clipped.length) / 2
    val right = width - clipped.length - left
    return " ".repeat(left) + clipped + " ".repeat(right)
  }
}
