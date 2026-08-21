package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
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
import java.awt.BasicStroke
import java.awt.Color
import java.awt.Font
import java.awt.FontMetrics
import java.awt.Graphics2D
import java.awt.RenderingHints
import java.awt.Shape
import java.awt.image.BufferedImage
import java.io.File
import java.time.Instant
import java.time.LocalDate
import java.time.ZoneId
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
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Rotation
import org.bukkit.Sound
import org.bukkit.block.BlockFace
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.BlockDisplay
import org.bukkit.entity.Display
import org.bukkit.entity.Entity
import org.bukkit.entity.Interaction
import org.bukkit.entity.ItemDisplay
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.entity.TextDisplay
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.hanging.HangingBreakByEntityEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCreativeEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerChangedWorldEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapRenderer
import org.bukkit.map.MapView
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.AxisAngle4f
import org.joml.Vector3f

@Suppress("UnstableApiUsage")
object SLData : CommandExecutor, TabCompleter, Listener {
  private const val GRAPH_COLUMNS = 9
  private const val GRAPH_ROWS = 5
  private const val DISPLAY_LIFETIME_TICKS = 20L * 90L
  private const val DISPLAY_BACKGROUND_Z = 0.000
  private const val DISPLAY_GRID_Z = 0.005
  private const val DISPLAY_BAR_Z = 0.010
  private const val DISPLAY_TEXT_Z = 0.020
  private const val DISPLAY_BUTTON_BACK_Z = 0.030
  private const val DISPLAY_BUTTON_FACE_Z = 0.035
  private const val DISPLAY_BUTTON_TEXT_Z = 0.045
  private const val DISPLAY_BUTTON_HIT_Z = 0.055
  private const val DISPLAY_RENDER_MAX_Z = DISPLAY_BUTTON_TEXT_Z
  private const val DISPLAY_PANEL_WIDTH = 3.8
  private const val DISPLAY_PANEL_HEIGHT = 2.55
  private const val DISPLAY_CHART_WIDTH = 2.85
  private const val DISPLAY_CHART_HEIGHT = 1.35
  private const val DISPLAY_BAR_WIDTH = 0.18
  private const val DIALOG_AXIS_MAX = 7500
  private const val DIALOG_AXIS_DIVISIONS = 5
  private const val DIALOG_GRAPH_ROWS = DIALOG_AXIS_DIVISIONS
  private const val DIALOG_BODY_WIDTH = 520
  private const val DIALOG_BUTTON_WIDTH = 130
  private const val DIALOG_ACTION_COLUMNS = 2
  private const val DIALOG_FIXED_RANK_NAME_COLUMNS = 16
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
  private const val DIALOG_PREVIEW_FILE_NAME = "sldata-dialog-preview.yml"
  private const val DIALOG_STATS_TEXT_FILE_NAME = "sldata-stats2-text.md"
  private const val DIALOG_STATS_DUMP_FILE_NAME = "sldata-stats2-dump.txt"
  private val dialogStatsAliases = setOf("stats2", "stats", "detail", "details")
  private const val BOARD_COLUMNS = 2
  private const val BOARD_ROWS = 2
  private const val WALL_MAP_COLUMNS = 2
  private const val WALL_MAP_ROWS = 3
  private val displayPanelKey = NamespacedKey(Tools.plugin, "sldata_display_panel")
  private val displayOwnerKey = NamespacedKey(Tools.plugin, "sldata_display_owner")
  private val displayActionKey = NamespacedKey(Tools.plugin, "sldata_display_action")
  private val mapItemKey = NamespacedKey(Tools.plugin, "sldata_map_item")
  private val boardFrameKey = NamespacedKey(Tools.plugin, "sldata_board_frame")
  private val wallMapFrameKey = NamespacedKey(Tools.plugin, "sldata_wall_map_frame")
  private val activeDisplays = mutableMapOf<UUID, DisplaySession>()
  private val activeDialogRequests = mutableMapOf<UUID, DialogRequest>()
  private val activeDialogRankingPeriods = mutableMapOf<UUID, RankingPeriod>()
  private val activeDialogStatsTargets = mutableMapOf<UUID, DialogStatsTarget>()
  private val activeDialogStatsCategories = mutableMapOf<UUID, DialogStatsCategory>()
  private val dialogStatsIncludeLifeWorld = mutableMapOf<UUID, Boolean>()
  @Volatile private var dialogRenderConfig: DialogRenderConfig? = null
  @Volatile private var dialogPreviewConfig: DialogPreviewConfig? = null
  @Volatile private var dialogStatsText: DialogStatsText? = null
  private val dialogStatsPlainTextSerializer = PlainTextComponentSerializer.plainText()
  private val dialogWeekKey = Key.key("sociallikes3", "sldata_week")
  private val dialogMonthKey = Key.key("sociallikes3", "sldata_month")
  private val dialogYearKey = Key.key("sociallikes3", "sldata_year")
  private val dialogOtherFormatsKey = Key.key("sociallikes3", "sldata_other_formats")
  private val dialogOtherFormatsBackKey = Key.key("sociallikes3", "sldata_other_formats_back")
  private val dialogMapKey = Key.key("sociallikes3", "sldata_map")
  private val dialogSlotsKey = Key.key("sociallikes3", "sldata_slots")
  private val dialogDisplayKey = Key.key("sociallikes3", "sldata_display")
  private val dialogPreviewReloadKey = Key.key("sociallikes3", "sldata_preview_reload")
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
  // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
  private val dialogExperimentalColorPickerKey =
      Key.key("sociallikes3", "sldata_experimental_color_picker")
  // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
  private val dialogExperimentalDefaultColorsKey =
      Key.key("sociallikes3", "sldata_experimental_colors_default")
  // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
  private val dialogExperimentalHighContrastColorsKey =
      Key.key("sociallikes3", "sldata_experimental_colors_high_contrast")
  // EXPERIMENTAL: per-player display-only palette state; it must not affect statistics or data
  // loading.
  private val dialogExperimentalPalettes = mutableMapOf<UUID, DialogTextPalette>()

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
      "lucky" -> {
        sender.sendMessage(Tools.socialLikesLOGO + " &7※ /lucky または /sllucky でも直接実行できます。".color())
        SLLucky.onCommand(sender, command, "sllucky", args.drop(1).toTypedArray())
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

  fun cleanupLingeringDisplays() {
    Bukkit.getWorlds().forEach { world ->
      world.entities
          .filter { it.persistentDataContainer.has(displayPanelKey, PersistentDataType.STRING) }
          .forEach { it.remove() }
    }
    activeDisplays.clear()
  }

  private fun sendModeList(player: Player) {
    player.sendMessage(Tools.socialLikesLOGO + " &f/sldata コマンド一覧".color())
    player.sendMessage("&7/sldata &f- あなたの総合統計ダイアログを開く".color())
    player.sendMessage("&7/sldata ranking &f- 今週の制作者別いいね数Top5を表示".color())
    player.sendMessage("&7/sldata server &f- 全員に公開する宣伝効果・掲載回数のサーバー集計を表示".color())
    player.sendMessage("&7/sldata lucky &f- 未いいねの他者建築をランダムに1件案内".color())
    if (player.isOp || player.hasPermission("sociallikes.admin")) {
      player.sendMessage("&e/sldataop &7- 管理者用コマンド（マップ・ボード・他プレイヤー統計等）".color())
    }
  }

  private fun handleDialog(player: Player, args: List<String>) {
    if (args.firstOrNull()?.equals("reload", ignoreCase = true) == true) {
      val config = reloadDialogRenderConfig()
      val preview = reloadDialogPreviewConfig()
      val statsText = reloadDialogStatsText()
      player.sendMessage(
          Tools.socialLikesLOGO +
              " &fdialog設定を再読込しました。style=${config.widthStyle.name.lowercase()} line='${config.lineChar}' empty='${config.emptyChar}' labels=${config.labelStyle.name.lowercase()} preview='${preview.title}' stats2-text=${statsText.loadedEntryCount}項目"
                  .color()
      )
      return
    }
    if (args.firstOrNull()?.lowercase() in setOf("ranking", "rank", "top", "top5", "leaders")) {
      openDialogRanking(player)
      return
    }
    if (args.firstOrNull()?.lowercase() in setOf("fast", "test", "speed", "light")) {
      handleDialogFast(player, args)
      return
    }
    if (args.firstOrNull()?.lowercase() in dialogStatsAliases) {
      handleDialogStats(player, args)
      return
    }
    if (args.firstOrNull()?.lowercase() in setOf("preview", "file", "yaml")) {
      openDialogPreview(player)
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

  private fun handleDialogFast(player: Player, args: List<String>) {
    val targetName = args.getOrNull(1)
    if (targetName == null) {
      openDialogFast(player)
      return
    }
    if (!player.isOp) {
      player.sendMessage(Tools.socialLikesLOGO + " &c他プレイヤーの詳細統計を表示できるのはOPのみです。".color())
      return
    }
    val target = Bukkit.getOfflinePlayer(targetName)
    if (!target.isOnline && !target.hasPlayedBefore()) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &cプレイヤー「$targetName」が見つかりません。参加済みのプレイヤー名を指定してください。".color()
      )
      return
    }
    openDialogFast(player, target.uniqueId, target.name ?: targetName)
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

  private fun currentDialogPreviewConfig(): DialogPreviewConfig =
      dialogPreviewConfig ?: reloadDialogPreviewConfig()

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

  internal fun reloadDialogPreviewConfig(): DialogPreviewConfig {
    val configFile = File(Tools.plugin.dataFolder, DIALOG_PREVIEW_FILE_NAME)
    writeDefaultDialogPreviewConfigIfMissing(configFile)
    val yaml = YamlConfiguration.loadConfiguration(configFile)
    val title = yaml.getString("title")?.takeIf { it.isNotBlank() } ?: "SocialLikes3 Dialog Preview"
    val subtitle = yaml.getString("subtitle") ?: ""
    val body = readDialogPreviewBody(yaml)
    val elements = parseDialogPreviewElements(yaml)
    val config =
        DialogPreviewConfig(
            title = title,
            subtitle = subtitle,
            body = body,
            elements = elements,
            bodyWidth = yaml.getInt("body-width", DIALOG_BODY_WIDTH).coerceIn(160, 720),
            useUniformFont = yaml.getBoolean("use-uniform-font", true),
            showPlayerHead = yaml.getBoolean("show-player-head", true),
            playerHeadWidth = yaml.getInt("player-head-width", 32).coerceIn(1, 256),
            playerHeadHeight = yaml.getInt("player-head-height", 32).coerceIn(1, 256),
            playerHeadAlign = DialogPreviewItemAlign.parse(yaml.getString("player-head-align")),
            playerHeadSizes =
                yaml
                    .getIntegerList("player-head-sizes")
                    .map { it.coerceIn(1, 256) }
                    .distinct()
                    .takeIf { it.isNotEmpty() },
            columns = yaml.getInt("columns", 2).coerceIn(1, 4),
        )
    dialogPreviewConfig = config
    Tools.plugin.logger.info(
        "[SLData] Dialog preview loaded file=${configFile.absolutePath} title='${config.title}'" +
            " bodyChars=${config.body.length} elements=${config.elements.size} width=${config.bodyWidth}"
    )
    return config
  }

  private fun parseDialogPreviewElements(yaml: YamlConfiguration): List<DialogPreviewElement> =
      yaml.getMapList("elements").mapIndexedNotNull { index, raw ->
        when (raw.previewString("type")?.trim()?.lowercase()) {
          "plain-message",
          "plain_message",
          "message",
          "text" ->
              parseDialogPreviewMessage(raw, yaml.getInt("body-width", DIALOG_BODY_WIDTH))
                  ?.let(DialogPreviewElement::Message)
          "item",
          "player-head",
          "player_head" -> parseDialogPreviewItem(raw)
          else -> {
            Tools.plugin.logger.warning(
                "[SLData] Dialog preview element #${index + 1} has an unknown type='${raw["type"]}'"
            )
            null
          }
        }
      }

  private fun parseDialogPreviewItem(raw: Map<*, *>): DialogPreviewElement.Item {
    val materialName = raw.previewString("material") ?: "PLAYER_HEAD"
    val material = Material.matchMaterial(materialName) ?: Material.PLAYER_HEAD
    val description = raw.previewMap("description")?.let { parseDialogPreviewMessage(it, 200) }
    val itemName =
        raw.previewString("item-name")?.let { text ->
          DialogPreviewMessage(
              width = 200,
              segments =
                  listOf(
                      DialogPreviewSegment(
                          text = text,
                          repeat = 1,
                          color =
                              previewColor(
                                  raw.previewString("item-name-color"),
                                  NamedTextColor.WHITE,
                              ),
                          font = parseDialogPreviewFont(raw.previewString("item-name-font")),
                          hover = null,
                          hoverColor = NamedTextColor.YELLOW,
                      )
                  ),
          )
        }
    val lore =
        raw.previewList("lore").mapNotNull { entry ->
          when (entry) {
            is Map<*, *> -> parseDialogPreviewMessage(entry, 200)
            null -> null
            else ->
                DialogPreviewMessage(
                    width = 200,
                    segments =
                        listOf(
                            DialogPreviewSegment(
                                text = entry.toString(),
                                repeat = 1,
                                color = NamedTextColor.GRAY,
                                font = DIALOG_FONT,
                                hover = null,
                                hoverColor = NamedTextColor.YELLOW,
                            )
                        ),
                )
          }
        }
    return DialogPreviewElement.Item(
        material = material,
        playerUuid = raw.previewString("player-uuid"),
        playerName = raw.previewString("player-name"),
        itemName = itemName,
        lore = lore,
        description = description,
        showTooltip = raw.previewBoolean("show-tooltip", true),
        showDecorations = raw.previewBoolean("show-decorations", false),
        width = raw.previewInt("width", 16).coerceIn(1, 256),
        height = raw.previewInt("height", 16).coerceIn(1, 256),
    )
  }

  private fun parseDialogPreviewMessage(
      raw: Map<*, *>,
      defaultWidth: Int,
  ): DialogPreviewMessage? {
    val segmentEntries = raw.previewList("segments")
    val segments =
        if (segmentEntries.isNotEmpty()) {
          segmentEntries.mapNotNull { entry ->
            when (entry) {
              is Map<*, *> -> parseDialogPreviewSegment(entry)
              null -> null
              else ->
                  DialogPreviewSegment(
                      text = entry.toString(),
                      repeat = 1,
                      color = NamedTextColor.GRAY,
                      font = DIALOG_FONT,
                      hover = null,
                      hoverColor = NamedTextColor.YELLOW,
                  )
            }
          }
        } else {
          val text = raw.previewString("text") ?: raw.previewString("contents") ?: return null
          listOf(
              DialogPreviewSegment(
                  text = text,
                  repeat = raw.previewInt("repeat", 1).coerceIn(0, 512),
                  color = previewColor(raw.previewString("color"), NamedTextColor.GRAY),
                  font = parseDialogPreviewFont(raw.previewString("font")),
                  hover = raw.previewString("hover"),
                  hoverColor =
                      previewColor(raw.previewString("hover-color"), NamedTextColor.YELLOW),
              )
          )
        }
    if (segments.isEmpty()) return null
    return DialogPreviewMessage(
        width = raw.previewInt("width", defaultWidth).coerceIn(1, 1024),
        segments = segments,
    )
  }

  private fun parseDialogPreviewSegment(raw: Map<*, *>): DialogPreviewSegment? {
    val text = raw.previewString("text") ?: return null
    return DialogPreviewSegment(
        text = text,
        repeat = raw.previewInt("repeat", 1).coerceIn(0, 512),
        color = previewColor(raw.previewString("color"), NamedTextColor.GRAY),
        font = parseDialogPreviewFont(raw.previewString("font")),
        hover = raw.previewString("hover"),
        hoverColor = previewColor(raw.previewString("hover-color"), NamedTextColor.YELLOW),
    )
  }

  private fun parseDialogPreviewFont(raw: String?): Key? {
    val normalized = raw?.trim()?.lowercase()
    if (normalized in setOf("default", "none", "vanilla")) return null
    if (normalized.isNullOrEmpty() || normalized == "uniform") return DIALOG_FONT
    return runCatching { Key.key(if (':' in normalized) normalized else "minecraft:$normalized") }
        .getOrDefault(DIALOG_FONT)
  }

  private fun previewColor(raw: String?, fallback: TextColor): TextColor {
    val normalized = raw?.trim()?.lowercase() ?: return fallback
    return when (normalized) {
      "black" -> NamedTextColor.BLACK
      "dark_blue" -> NamedTextColor.DARK_BLUE
      "dark_green" -> NamedTextColor.DARK_GREEN
      "dark_aqua" -> NamedTextColor.DARK_AQUA
      "dark_red" -> NamedTextColor.DARK_RED
      "dark_purple" -> NamedTextColor.DARK_PURPLE
      "gold" -> NamedTextColor.GOLD
      "gray",
      "grey" -> NamedTextColor.GRAY
      "dark_gray",
      "dark_grey" -> NamedTextColor.DARK_GRAY
      "blue" -> NamedTextColor.BLUE
      "green" -> NamedTextColor.GREEN
      "aqua" -> NamedTextColor.AQUA
      "red" -> NamedTextColor.RED
      "light_purple" -> NamedTextColor.LIGHT_PURPLE
      "yellow" -> NamedTextColor.YELLOW
      "white" -> NamedTextColor.WHITE
      else ->
          if (normalized.matches(Regex("#[0-9a-f]{6}"))) {
            TextColor.color(normalized.drop(1).toInt(16))
          } else {
            fallback
          }
    }
  }

  private fun Map<*, *>.previewString(key: String): String? =
      this[key]?.toString()?.takeIf { it.isNotBlank() }

  private fun Map<*, *>.previewInt(key: String, fallback: Int): Int =
      when (val value = this[key]) {
        is Number -> value.toInt()
        else -> value?.toString()?.toIntOrNull() ?: fallback
      }

  private fun Map<*, *>.previewBoolean(key: String, fallback: Boolean): Boolean =
      when (val value = this[key]) {
        is Boolean -> value
        else -> value?.toString()?.toBooleanStrictOrNull() ?: fallback
      }

  private fun Map<*, *>.previewMap(key: String): Map<*, *>? = this[key] as? Map<*, *>

  private fun Map<*, *>.previewList(key: String): List<*> =
      this[key] as? List<*> ?: emptyList<Any>()

  private fun readDialogPreviewBody(yaml: YamlConfiguration): String {
    val stringBody = yaml.getString("body")
    if (stringBody != null) return stringBody
    val listBody = yaml.getStringList("body")
    if (listBody.isNotEmpty()) return listBody.joinToString("\n")
    return defaultDialogPreviewBody()
  }

  private fun writeDefaultDialogPreviewConfigIfMissing(configFile: File) {
    if (configFile.isFile) return
    configFile.parentFile?.mkdirs()
    configFile.writeText(
        """
        # SocialLikes3 /sldata dialog preview.
        # Change this file, then run /sldata dialog reload and /sldata dialog preview.
        # This is rendered by the SocialLikes3 plugin through Paper Dialog API, not by a datapack.
        title: "SocialLikes3 JSON/YAML Preview"
        subtitle: "週間 ／ ２倍 ／ 合計 33,378 ／ ピーク 6,093"
        body-width: 520
        use-uniform-font: true
        show-player-head: true
        player-head-width: 32
        player-head-height: 32
        player-head-align: "left"
        # player-head-sizes: [16, 32, 48, 64, 96, 128, 192, 256]
        columns: 2
        body: |-
        ${defaultDialogPreviewBody().prependIndent("  ")}
        """
            .trimIndent() + "\n"
    )
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

  private fun defaultDialogPreviewBody(): String =
      """
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁７，５００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁６，０００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁３，０００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁　　　　　
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁１，５００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁　　　　　
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁　　　　０
      ６月８日▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁７月６日▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁８月３日▁
      """
          .trimIndent()

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

  private fun loadWeekly(): SLDataStatsService.LikeSeries =
      SLDataStatsService.loadWeeklySeries(GRAPH_COLUMNS)

  internal fun openSlots(player: Player) {
    if (!player.isOp && !player.hasPermission("sociallikes.admin")) {
      player.sendMessage(Tools.socialLikesLOGO + " &cスロット表示は管理者専用です。/sldata をご利用ください。".color())
      return
    }
    val series = loadWeekly()
    val holder = SlotsInventoryHolder()
    val inventory =
        Bukkit.createInventory(
            holder,
            54,
            Component.text(
                "SL ${series.sparkline} ${series.total} likes",
                NamedTextColor.LIGHT_PURPLE,
            ),
        )
    holder.bind(inventory)

    val niceMax = SLDataStatsService.niceMax(series.peak)
    series.buckets.take(GRAPH_COLUMNS).forEachIndexed { column, bucket ->
      val height = SLDataStatsService.scaleLevel(bucket.count, niceMax, GRAPH_ROWS)
      (0 until GRAPH_ROWS).forEach { rowFromTop ->
        val filled = GRAPH_ROWS - rowFromTop <= height
        val material =
            if (!filled) {
              Material.GRAY_STAINED_GLASS_PANE
            } else {
              when (rowFromTop) {
                0 -> Material.LIME_CONCRETE
                1 -> Material.GREEN_CONCRETE
                2 -> Material.LIME_WOOL
                3 -> Material.YELLOW_STAINED_GLASS_PANE
                else -> Material.ORANGE_STAINED_GLASS_PANE
              }
            }
        inventory.setItem(
            column + rowFromTop * GRAPH_COLUMNS,
            ItemStack(material)
                .allFlag()
                .addText(
                    "&f${bucket.label}",
                    mutableListOf(
                        "&7いいね: &e${bucket.count}",
                        "&7表示高: $height/$GRAPH_ROWS",
                        "&7最大目盛: $niceMax",
                    ),
                ),
        )
      }
    }

    listOf(
            45 to
                ItemStack(Material.ARROW)
                    .allFlag()
                    .addText("&f前へ", mutableListOf("&7実験POC: 直近9週固定")),
            49 to
                ItemStack(Material.CLOCK).allFlag().addText("&e週間", mutableListOf("&7期間切替の見た目確認用")),
            53 to
                ItemStack(Material.ARROW)
                    .allFlag()
                    .addText("&f次へ", mutableListOf("&7実験POC: 直近9週固定")),
            48 to
                ItemStack(Material.PAPER)
                    .allFlag()
                    .addText("&b合計", mutableListOf("&7${series.total} likes")),
            50 to
                ItemStack(Material.EMERALD)
                    .allFlag()
                    .addText("&aピーク", mutableListOf("&7${series.peak} likes")),
            52 to
                ItemStack(Material.BARRIER)
                    .allFlag()
                    .addText("&c閉じる", mutableListOf("&7クリックで閉じます")),
        )
        .forEach { (slot, item) -> inventory.setItem(slot, item) }

    player.openInventory(inventory)
    player.sendMessage(Tools.socialLikesLOGO + " &fslots: 統合版でも見える想定のバニラスロットGUIです。".color())
  }

  internal fun openDisplay(player: Player, period: Period = Period.WEEK) {
    if (!player.isOp && !player.hasPermission("sociallikes.admin")) {
      player.sendMessage(Tools.socialLikesLOGO + " &cディスプレイ表示は管理者専用です。/sldata をご利用ください。".color())
      return
    }
    val eye = player.eyeLocation
    val forward =
        eye.direction.clone().setY(0).let {
          if (it.lengthSquared() <= 0.0001) Vector(0, 0, 1) else it.normalize()
        }
    val base = eye.clone().add(forward.clone().multiply(2.8))
    base.y -= 0.35
    base.yaw = normalizeYaw(eye.yaw + 180f)
    base.pitch = 0f
    openDisplayAt(
        player,
        period,
        DisplayGeometry(
            base,
            forward,
            forward.clone().crossProduct(Vector(0, 1, 0)).normalize(),
            Vector(0, 1, 0),
        ),
    )
  }

  private fun openDisplayAt(player: Player, period: Period, geometry: DisplayGeometry) {
    val series = SLDataStatsService.loadSeries(period, GRAPH_COLUMNS)
    clearDisplay(player.uniqueId)

    val base = geometry.base.clone()
    val forward = geometry.forward.clone()
    val right = geometry.right.clone()
    val up = geometry.up.clone()
    val ids = mutableSetOf<UUID>()
    val niceMax = SLDataStatsService.niceMax(series.peak)
    val ticks = SLDataStatsService.axisTicks(niceMax)
    val chartLeft = -1.32
    val chartBottom = -0.42
    val title = summaryTitle(series)
    val buttonHitLogs = mutableListOf<String>()
    Tools.plugin.logger.info(
        "[SLData] Display ${period.name.lowercase()} bucketOrder(oldToNew)=" +
            series.buckets.joinToString(" -> ") { "${it.label}:${it.count}" }
    )
    Tools.plugin.logger.info(
        "[SLData] Display ${period.name.lowercase()} layers z background=$DISPLAY_BACKGROUND_Z grid=$DISPLAY_GRID_Z" +
            " bar=$DISPLAY_BAR_Z text=$DISPLAY_TEXT_Z buttonBack=$DISPLAY_BUTTON_BACK_Z" +
            " buttonFace=$DISPLAY_BUTTON_FACE_Z buttonText=$DISPLAY_BUTTON_TEXT_Z hit=$DISPLAY_BUTTON_HIT_Z" +
            " hitAhead=${DISPLAY_BUTTON_HIT_Z > DISPLAY_RENDER_MAX_Z}"
    )

    fun track(entity: Entity) {
      entity.persistentDataContainer.set(displayPanelKey, PersistentDataType.STRING, "1")
      entity.persistentDataContainer.set(
          displayOwnerKey,
          PersistentDataType.STRING,
          player.uniqueId.toString(),
      )
      ids += entity.uniqueId
    }

    fun panelLoc(x: Double, y: Double, z: Double): Location =
        base
            .clone()
            .add(right.clone().multiply(x))
            .add(up.clone().multiply(y))
            .add(forward.clone().multiply(-z))

    fun prepareDisplay(entity: Display) {
      entity.setBillboard(Display.Billboard.FIXED)
      entity.setRotation(base.yaw, 0f)
      entity.setBrightness(Display.Brightness(15, 15))
      track(entity)
    }

    fun spawnBlock(
        x: Double,
        y: Double,
        z: Double,
        width: Float,
        height: Float,
        depth: Float,
        material: Material,
    ) {
      player.world.spawn(panelLoc(x, y, z), BlockDisplay::class.java) {
        it.setBlock(material.createBlockData())
        prepareDisplay(it)
        it.setTransformation(centeredBlockTransform(width, height, depth))
      }
    }

    fun spawnText(
        x: Double,
        y: Double,
        z: Double,
        text: Component,
        scale: Float,
        lineWidth: Int,
        alignment: TextDisplay.TextAlignment = TextDisplay.TextAlignment.CENTER,
    ) {
      player.world.spawn(panelLoc(x, y, z), TextDisplay::class.java) {
        it.text(text)
        prepareDisplay(it)
        it.setAlignment(alignment)
        it.setBackgroundColor(org.bukkit.Color.fromARGB(0, 0, 0, 0))
        it.setShadowed(true)
        it.setLineWidth(lineWidth)
        it.setTransformation(scaleTransform(scale, scale, scale))
      }
    }

    fun spawnButton(x: Double, label: String, action: String, selected: Boolean = false) {
      val y = -1.03
      spawnBlock(x, y, DISPLAY_BUTTON_BACK_Z, 0.78f, 0.32f, 0.001f, Material.WHITE_CONCRETE)
      spawnBlock(
          x,
          y,
          DISPLAY_BUTTON_FACE_Z,
          0.72f,
          0.26f,
          0.001f,
          if (selected) Material.LIME_CONCRETE else Material.GRAY_CONCRETE,
      )
      spawnText(
          x,
          y - 0.045,
          DISPLAY_BUTTON_TEXT_Z,
          Component.text(label, if (selected) NamedTextColor.BLACK else NamedTextColor.WHITE),
          0.30f,
          78,
      )
      player.world.spawn(panelLoc(x, y, DISPLAY_BUTTON_HIT_Z), Interaction::class.java) {
        it.setInteractionWidth(0.82f)
        it.setInteractionHeight(0.38f)
        it.setResponsive(true)
        it.persistentDataContainer.set(displayActionKey, PersistentDataType.STRING, action)
        track(it)
      }
      buttonHitLogs +=
          "$action=center(${String.format("%.2f", x)},${String.format("%.2f", y)},z=$DISPLAY_BUTTON_HIT_Z)" +
              " size(0.82x0.38) renderMaxZ=$DISPLAY_RENDER_MAX_Z"
    }

    player.world.spawn(panelLoc(0.0, 0.0, DISPLAY_BACKGROUND_Z), BlockDisplay::class.java) {
      it.setBlock(Material.BLACK_CONCRETE.createBlockData())
      prepareDisplay(it)
      it.setTransformation(
          centeredBlockTransform(
              DISPLAY_PANEL_WIDTH.toFloat(),
              DISPLAY_PANEL_HEIGHT.toFloat(),
              0.001f,
          )
      )
    }

    spawnText(
        0.0,
        0.92,
        DISPLAY_TEXT_Z,
        Component.text(title, NamedTextColor.WHITE),
        0.55f,
        320,
    )
    spawnText(
        0.0,
        0.72,
        DISPLAY_TEXT_Z,
        Component.text(
            "${series.period.label} / 合計 ${formatCount(series.total)} / ピーク ${formatCount(series.peak)}",
            NamedTextColor.GRAY,
        ),
        0.42f,
        320,
    )

    ticks.forEach { tick ->
      val y = chartBottom + DISPLAY_CHART_HEIGHT * tick.toDouble() / niceMax.toDouble()
      spawnBlock(
          0.0,
          y,
          DISPLAY_GRID_Z,
          DISPLAY_CHART_WIDTH.toFloat(),
          if (tick == 0) 0.018f else 0.010f,
          0.001f,
          Material.GRAY_CONCRETE,
      )
      spawnText(
          1.62,
          y - 0.035,
          DISPLAY_TEXT_Z,
          Component.text(formatCount(tick), NamedTextColor.GRAY),
          0.30f,
          60,
          TextDisplay.TextAlignment.LEFT,
      )
    }

    series.buckets.forEachIndexed { index, bucket ->
      val x = chartLeft + index * (DISPLAY_CHART_WIDTH / (GRAPH_COLUMNS - 1))
      val height = bucket.count.toDouble() / niceMax.toDouble() * DISPLAY_CHART_HEIGHT
      if (bucket.count > 0) {
        spawnBlock(
            x,
            chartBottom + height / 2.0,
            DISPLAY_BAR_Z,
            DISPLAY_BAR_WIDTH.toFloat(),
            height.toFloat(),
            0.001f,
            Material.LIME_CONCRETE,
        )
      }

      if (
          index == 0 || index == series.buckets.lastIndex || index == series.buckets.lastIndex / 2
      ) {
        spawnText(
            x,
            chartBottom - 0.20,
            DISPLAY_TEXT_Z,
            Component.text(bucket.label.replace("週", ""), NamedTextColor.GRAY),
            0.28f,
            52,
        )
      }

      if (bucket.count == series.peak) {
        spawnText(
            x,
            chartBottom + height + 0.08,
            DISPLAY_TEXT_Z,
            Component.text(formatCount(bucket.count), NamedTextColor.YELLOW),
            0.28f,
            64,
        )
      }
    }

    player.world.spawn(panelLoc(-1.68, 0.92, DISPLAY_TEXT_Z), ItemDisplay::class.java) {
      it.setItemStack(ItemStack(Material.EMERALD))
      prepareDisplay(it)
      it.setTransformation(scaleTransform(0.45f, 0.45f, 0.45f))
    }

    spawnButton(-1.23, "週間", "week", period == Period.WEEK)
    spawnButton(-0.41, "月間", "month", period == Period.MONTH)
    spawnButton(0.41, "年間", "year", period == Period.YEAR)
    spawnButton(1.23, "閉じる", "close")
    Tools.plugin.logger.info(
        "[SLData] Display ${period.name.lowercase()} interactionHitboxes " +
            buttonHitLogs.joinToString("; ")
    )

    val session = DisplaySession(ids.toMutableSet(), DisplayGeometry(base, forward, right, up))
    activeDisplays[player.uniqueId] = session
    Bukkit.getScheduler()
        .runTaskLater(
            Tools.plugin,
            Runnable { clearDisplay(player.uniqueId, expectedIds = session.ids.toSet()) },
            DISPLAY_LIFETIME_TICKS,
        )
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &fdisplay: ${series.period.label}パネルを90秒表示しました。Geyser統合版は不可見込みです。".color()
    )
  }

  private fun giveMap(player: Player) {
    if (!player.isOp && !player.hasPermission("sociallikes.admin")) {
      player.sendMessage(Tools.socialLikesLOGO + " &cマップ表示は管理者専用です。/sldata をご利用ください。".color())
      return
    }
    val series = loadWeekly()
    GraphImageRenderer.logTextFit("handheld", series, "SL Weekly - ${player.name}", 128, 128)
    val item = findReusableMap(player) ?: ItemStack(Material.FILLED_MAP)
    val mapView = Bukkit.createMap(player.world)
    mapView.setTrackingPosition(false)
    mapView.setUnlimitedTracking(false)
    mapView.setLocked(true)
    mapView.renderers.toList().forEach { mapView.removeRenderer(it) }
    mapView.addRenderer(SeriesMapRenderer(series, "SL Weekly - ${player.name}", 128, 128, 0, 0))

    val meta = item.itemMeta as MapMeta
    meta.setMapView(mapView)
    meta.persistentDataContainer.set(mapItemKey, PersistentDataType.STRING, "1")
    meta.setDisplayName("&dSocialLikes 統計マップ".color())
    meta.lore = listOf("&7直近9週 / ${series.total} likes".color(), "&7/sldata map で再利用更新".color())
    item.itemMeta = meta

    if (!player.inventory.contents.any { it === item }) {
      val leftover = player.inventory.addItem(item)
      leftover.values.forEach { player.world.dropItemNaturally(player.location, it) }
    }
    player.sendMessage(Tools.socialLikesLOGO + " &fmap: 手持ちマップを渡しました。統合版でも見える想定です。".color())
  }

  internal fun handleMap(player: Player, args: List<String>) {
    when (args.firstOrNull()?.lowercase()) {
      "wall" -> placeWallMap(player)
      "remove" -> removeWallMap(player)
      "home" -> giveHomeGroundMap(player)
      else -> giveMap(player)
    }
  }

  private fun giveHomeGroundMap(player: Player) {
    val home = SLDatabase.loadHomeGroundBlocking(player.uniqueId.toString())
    if (home == null) {
      player.sendMessage(Tools.socialLikesLOGO + " &e自分の登録済み建築がないため、ホームグラウンドを描けません。".color())
      return
    }
    val world = Bukkit.getWorld(home.worldName)
    if (world == null) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &c${home.worldName} が読み込まれていないため、マップを作れません。".color()
      )
      return
    }
    val points = SLDatabase.loadHomeGroundPointsBlocking(player.uniqueId.toString(), home.worldName)
    val item = findReusableMap(player) ?: ItemStack(Material.FILLED_MAP)
    val mapView = Bukkit.createMap(world)
    mapView.setTrackingPosition(false)
    mapView.setUnlimitedTracking(false)
    mapView.setLocked(true)
    mapView.renderers.toList().forEach { mapView.removeRenderer(it) }
    mapView.addRenderer(HomeGroundMapRenderer(home, points))

    val meta = item.itemMeta as MapMeta
    meta.setMapView(mapView)
    meta.persistentDataContainer.set(mapItemKey, PersistentDataType.STRING, "1")
    meta.setDisplayName("&dSocialLikes ホームグラウンド".color())
    meta.lore =
        listOf(
            "&7${home.worldName} chunk (${home.chunkX}, ${home.chunkZ})".color(),
            "&7建築 ${home.buildCount} / 受けたいいね ${home.receivedLikes}".color(),
            "&7紫=自作品 / 赤=ホームグラウンド".color(),
        )
    item.itemMeta = meta
    if (!player.inventory.contents.any { it === item }) {
      val leftover = player.inventory.addItem(item)
      leftover.values.forEach { player.world.dropItemNaturally(player.location, it) }
    }
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &fホームグラウンド: ${home.worldName} chunk (${home.chunkX}, ${home.chunkZ}) をマップにプロットしました。"
                .color()
    )
  }

  private fun openLuckyBuild(player: Player) {
    val build = SLDatabase.loadLuckyUnlikedBuildBlocking(player.uniqueId.toString())
    if (build == null) {
      player.sendMessage(Tools.socialLikesLOGO + " &e未いいねの他者建築は見つかりませんでした。".color())
      return
    }
    val owner =
        SLDatabase.loadPlayerNamesBlocking(listOf(build.ownerUuid))[build.ownerUuid] ?: "unknown"
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &dLucky! &f${owner}さんの「${build.title}」(ID:${build.id}) を案内します。".color()
    )
    Bukkit.dispatchCommand(player, "sltp ${build.id}")
  }

  private fun placeWallMap(player: Player) {
    val trace = player.world.rayTraceBlocks(player.eyeLocation, player.eyeLocation.direction, 6.0)
    val hitBlock = trace?.hitBlock
    val face = trace?.hitBlockFace
    if (hitBlock == null || face == null || face == BlockFace.UP || face == BlockFace.DOWN) {
      player.sendMessage(Tools.socialLikesLOGO + " &c設置先の壁を6ブロック以内で見てください。".color())
      return
    }

    val horizontal = horizontalForWall(face)
    val origin = hitBlock.getRelative(face).location
    val frameLocations =
        (0 until WALL_MAP_ROWS).flatMap { row ->
          (0 until WALL_MAP_COLUMNS).map { column ->
            origin.clone().add(horizontal.clone().multiply(column)).add(0.0, -row.toDouble(), 0.0)
          }
        }
    val blocked =
        frameLocations.firstOrNull { location ->
          val frameBlock = location.block
          val support = frameBlock.getRelative(face.oppositeFace)
          !support.type.isSolid || !(frameBlock.type.isAir || frameBlock.isPassable)
        }
    if (blocked != null) {
      player.sendMessage(
          Tools.socialLikesLOGO +
              " &c2x3の設置空間が足りません: ${blocked.blockX},${blocked.blockY},${blocked.blockZ}".color()
      )
      return
    }

    removeWallMap(player, silent = true)
    val stats = SLDataStatsService.loadBoardStats()
    val image = WallMapImageRenderer.render(stats, "SL Weekly - ${player.name}", 256, 384)
    WallMapImageRenderer.logTextFit("wall", stats, "SL Weekly - ${player.name}", 256, 384)
    var placed = 0

    for (row in 0 until WALL_MAP_ROWS) {
      for (column in 0 until WALL_MAP_COLUMNS) {
        val frameLocation =
            origin.clone().add(horizontal.clone().multiply(column)).add(0.0, -row.toDouble(), 0.0)
        val mapView = Bukkit.createMap(player.world)
        mapView.setTrackingPosition(false)
        mapView.setUnlimitedTracking(false)
        mapView.setLocked(true)
        mapView.renderers.toList().forEach { mapView.removeRenderer(it) }
        mapView.addRenderer(ImageTileMapRenderer(image, column * 128, row * 128))

        val mapItem = ItemStack(Material.FILLED_MAP)
        val meta = mapItem.itemMeta as MapMeta
        meta.setMapView(mapView)
        meta.setDisplayName("&dSocialLikes 壁掛け統計マップ".color())
        mapItem.itemMeta = meta

        val frame =
            player.world.spawn(frameLocation, ItemFrame::class.java) {
              it.setFacingDirection(face, true)
              it.setItem(mapItem, false)
              it.setRotation(Rotation.NONE)
              it.setFixed(true)
              it.setVisible(false)
              it.persistentDataContainer.set(wallMapFrameKey, PersistentDataType.STRING, "1")
            }
        placed += if (frame.isValid) 1 else 0
      }
    }

    player.sendMessage(Tools.socialLikesLOGO + " &fmap wall: 2x3の壁掛けマップを${placed}枚で設置しました。".color())
  }

  private fun removeWallMap(player: Player, silent: Boolean = false) {
    val removed =
        player.location
            .getNearbyEntities(12.0, 8.0, 12.0)
            .filter { it.persistentDataContainer.has(wallMapFrameKey, PersistentDataType.STRING) }
            .onEach { it.remove() }
            .size
    if (!silent) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &fmap wall: 近くの壁掛けマップを${removed}件撤去しました。".color()
      )
    }
  }

  internal fun handleBoard(player: Player, args: List<String>) {
    when (args.firstOrNull()?.lowercase()) {
      "remove" -> removeBoard(player)
      else -> placeBoard(player)
    }
  }

  private fun placeBoard(player: Player) {
    val trace = player.world.rayTraceBlocks(player.eyeLocation, player.eyeLocation.direction, 6.0)
    val hitBlock = trace?.hitBlock
    val face = trace?.hitBlockFace
    if (hitBlock == null || face == null || face == BlockFace.UP || face == BlockFace.DOWN) {
      player.sendMessage(Tools.socialLikesLOGO + " &c設置先の壁を6ブロック以内で見てください。".color())
      return
    }

    removeBoard(player, silent = true)
    val stats = SLDataStatsService.loadBoardStats()
    val image = BoardImageRenderer.render(stats, 256, 256)
    val horizontal = horizontalForWall(face)
    val origin = hitBlock.getRelative(face).location
    var placed = 0

    for (row in 0 until BOARD_ROWS) {
      for (column in 0 until BOARD_COLUMNS) {
        val frameLocation =
            origin.clone().add(horizontal.clone().multiply(column)).add(0.0, -row.toDouble(), 0.0)
        val mapView = Bukkit.createMap(player.world)
        mapView.setTrackingPosition(false)
        mapView.setUnlimitedTracking(false)
        mapView.setLocked(true)
        mapView.renderers.toList().forEach { mapView.removeRenderer(it) }
        mapView.addRenderer(ImageTileMapRenderer(image, column * 128, row * 128))

        val mapItem = ItemStack(Material.FILLED_MAP)
        val meta = mapItem.itemMeta as MapMeta
        meta.setMapView(mapView)
        meta.setDisplayName("&dSocialLikes 公共統計ボード".color())
        mapItem.itemMeta = meta

        val frame =
            player.world.spawn(frameLocation, ItemFrame::class.java) {
              it.setFacingDirection(face, true)
              it.setItem(mapItem, false)
              it.setRotation(Rotation.NONE)
              it.setFixed(true)
              it.setVisible(false)
              it.persistentDataContainer.set(boardFrameKey, PersistentDataType.STRING, "1")
            }
        placed += if (frame.isValid) 1 else 0
      }
    }

    player.sendMessage(
        Tools.socialLikesLOGO + " &fboard: ${placed}枚のマップで公共統計ボードを設置しました。統合版でも見える想定です。".color()
    )
  }

  private fun removeBoard(player: Player, silent: Boolean = false) {
    val removed =
        player.location
            .getNearbyEntities(12.0, 8.0, 12.0)
            .filter { it.persistentDataContainer.has(boardFrameKey, PersistentDataType.STRING) }
            .onEach { it.remove() }
            .size
    if (!silent) {
      player.sendMessage(Tools.socialLikesLOGO + " &fboard: 近くの実験ボードを${removed}件撤去しました。".color())
    }
  }

  private fun horizontalForWall(face: BlockFace): Vector =
      when (face) {
        BlockFace.NORTH,
        BlockFace.SOUTH -> Vector(1, 0, 0)
        else -> Vector(0, 0, 1)
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
    val playerHeadBody =
        dialogPlayerHeadBody(player, series, bodyWidth, 32, 32, DialogPreviewItemAlign.LEFT)
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
                "ランキング、Map、Slots、Display",
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

  internal fun openDialogPreview(player: Player) {
    val preview = currentDialogPreviewConfig()
    val series = loadWeekly()
    val bodyText =
        if (preview.useUniformFont)
            Component.text(preview.body, NamedTextColor.GRAY).font(DIALOG_FONT)
        else Component.text(preview.body, NamedTextColor.GRAY)
    val body = mutableListOf<DialogBody>()
    if (preview.subtitle.isNotBlank()) {
      val subtitle =
          if (preview.useUniformFont) {
            Component.text(preview.subtitle, NamedTextColor.GRAY).font(DIALOG_FONT)
          } else {
            Component.text(preview.subtitle, NamedTextColor.GRAY)
          }
      body += DialogBody.plainMessage(subtitle, preview.bodyWidth)
    }
    if (preview.elements.isNotEmpty()) {
      body += preview.elements.map { renderDialogPreviewElement(it, player) }
    } else {
      if (preview.showPlayerHead) {
        body += dialogPlayerHeadBodies(player, series, preview)
      }
      body += DialogBody.plainMessage(bodyText, preview.bodyWidth)
    }

    val actions =
        listOf(
            dialogButton("再読込", "$DIALOG_PREVIEW_FILE_NAME を再読込", dialogPreviewReloadKey),
            dialogButton("通常グラフ", "生成済み統計グラフへ戻る", dialogPreviewGraphKey),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(Component.text(preview.title, NamedTextColor.LIGHT_PURPLE))
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(body)
                      .build()
              )
              .type(
                  DialogType.multiAction(actions)
                      .columns(preview.columns)
                      .exitAction(dialogButton("閉じる", "閉じます", dialogCloseKey))
                      .build()
              )
        }
    player.showDialog(dialog)
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &fdialog preview: $DIALOG_PREVIEW_FILE_NAME をPaper Dialog APIで送信しました。".color()
    )
  }

  private fun renderDialogPreviewElement(
      element: DialogPreviewElement,
      player: Player,
  ): DialogBody =
      when (element) {
        is DialogPreviewElement.Message ->
            DialogBody.plainMessage(
                dialogPreviewComponent(element.message),
                element.message.width,
            )
        is DialogPreviewElement.Item -> {
          val item = ItemStack(element.material)
          val meta = item.itemMeta
          if (meta is SkullMeta && element.material == Material.PLAYER_HEAD) {
            val owner =
                element.playerUuid?.let(::parseUuid)?.let(Bukkit::getOfflinePlayer)
                    ?: element.playerName?.let(Bukkit::getOfflinePlayer)
                    ?: player
            meta.owningPlayer = owner
          }
          element.itemName?.let { meta.displayName(dialogPreviewComponent(it)) }
          if (element.lore.isNotEmpty()) {
            meta.lore(element.lore.map(::dialogPreviewComponent))
          }
          item.itemMeta = meta

          val builder =
              DialogBody.item(item)
                  .showTooltip(element.showTooltip)
                  .showDecorations(element.showDecorations)
                  .width(element.width)
                  .height(element.height)
          element.description?.let {
            builder.description(DialogBody.plainMessage(dialogPreviewComponent(it), it.width))
          }
          builder.build()
        }
      }

  private fun dialogPreviewComponent(message: DialogPreviewMessage): Component {
    var result: Component = Component.empty()
    message.segments.forEach { segment ->
      var part: Component = Component.text(segment.text.repeat(segment.repeat), segment.color)
      segment.font?.let { part = part.font(it) }
      segment.hover?.let { hover ->
        var hoverComponent: Component = Component.text(hover, segment.hoverColor)
        segment.font?.let { hoverComponent = hoverComponent.font(it) }
        part = part.hoverEvent(hoverComponent)
      }
      result = result.append(part)
    }
    return result
  }

  // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
  // This presentation-only layer deliberately has no access to statistics or database code.
  private fun dialogTextPalette(player: Player): DialogTextPalette =
      dialogExperimentalPalettes[player.uniqueId] ?: DialogTextPalette.DEFAULT

  private fun openDialogOtherFormats(player: Player) {
    val isOp = player.isOp || player.hasPermission("sociallikes.admin")
    val actions = buildList {
      add(dialogButton("ランキング", "制作者別いいね数 Top5", dialogRankingKey))
      if (isOp) {
        add(dialogButton("Mapで見る", "/sldataop map を実行", dialogMapKey))
        add(dialogButton("Slotsで見る", "/sldataop slots を実行", dialogSlotsKey))
        add(dialogButton("Displayで見る", "/sldataop display を実行", dialogDisplayKey))
        // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
        add(dialogButton("実験: 文字色", "UIチューニング用。採用未定", dialogExperimentalColorPickerKey))
      }
      add(dialogButton("グラフへ戻る", "通常のグラフへ戻る", dialogOtherFormatsBackKey))
    }
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

  // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
  private fun openDialogExperimentalColorPicker(player: Player) {
    val selected = dialogTextPalette(player)
    val actions =
        listOf(
            dialogButton("標準（明るい）", "現在の標準配色", dialogExperimentalDefaultColorsKey),
            dialogButton("高コントラスト", "白と黄を強めた検証配色", dialogExperimentalHighContrastColorsKey),
            dialogButton("戻る", "他の形式で見るへ戻る", dialogOtherFormatsKey),
        )
    player.showDialog(
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(Component.text("実験: 文字色チューニング", NamedTextColor.YELLOW))
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(
                          listOf(
                              DialogBody.plainMessage(
                                  Component.text(
                                          "この画面は UI 調整専用です（採用未定）。現在: ${selected.label}",
                                          selected.primary,
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
                    "Map、Slots、Displayを選択",
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

  private fun openDialogFast(
      player: Player,
      targetUuid: UUID = player.uniqueId,
      targetName: String = player.name,
  ) {
    val tStart = System.currentTimeMillis()

    Bukkit.getScheduler()
        .runTaskAsynchronously(
            Tools.plugin,
            Runnable {
              val tAsyncStart = System.currentTimeMillis()
              val stats = getOrLoadExtendedStats(targetUuid, false)
              val tStatsDone = System.currentTimeMillis()

              val bodies = buildDialogFastBodies(stats, targetName)
              val tContentDone = System.currentTimeMillis()

              val actions =
                  listOf(
                      dialogButton("閉じる", "閉じます", dialogCloseKey),
                      dialogButton("通常版 (stats2)", "従来のstats2を開く", dialogStatsReloadKey),
                  )
              val dialog =
                  Dialog.create { builder ->
                    builder
                        .empty()
                        .base(
                            DialogBase.builder(
                                    Component.text(
                                        "SocialLikes 高速統計: $targetName",
                                        NamedTextColor.LIGHT_PURPLE,
                                    )
                                )
                                .canCloseWithEscape(true)
                                .afterAction(DialogBase.DialogAfterAction.CLOSE)
                                .body(bodies)
                                .build()
                        )
                        .type(
                            DialogType.multiAction(actions)
                                .columns(2)
                                .exitAction(dialogButton("閉じる", "閉じます", dialogCloseKey))
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
                                  " &a[Fast Dialog]&f $targetName の高速版統計を送信しました。(集計: ${tStatsDone - tAsyncStart}ms, 構築: ${tDialogCreated - tStatsDone}ms, 総計: ${tMainThread - tStart}ms)"
                                      .color()
                          )
                        }
                      },
                  )
            },
        )
  }

  private fun buildDialogFastBodies(
      stats: SLDataStatsService.ExtendedStats,
      targetName: String,
  ): List<DialogBody> {
    fun formatBar(
        label: String,
        value: Double,
        max: Double,
        unit: String,
        isCount: Boolean = false,
    ): Component {
      val filled = if (max <= 0.0) 0 else ((value / max) * 10.0).toInt().coerceIn(0, 10)
      val remaining = 10 - filled
      val percent = if (max <= 0.0) 0 else (value / max * 100.0).toInt().coerceIn(0, 100)
      val valStr =
          if (isCount) "${value.toInt()}$unit"
          else String.format(java.util.Locale.ROOT, "%.1f%s", value, unit)
      val paddedLabel = label.padEnd(5, '　')
      val percentStr = percent.toString().padStart(3, ' ')

      return Component.text(
              "§f${paddedLabel} §a${"█".repeat(filled)}§8${"█".repeat(remaining)} §7${percentStr}% §8= §e${valStr}"
          )
          .hoverEvent(
              net.kyori.adventure.text.event.HoverEvent.showText(
                  Component.text("§e${label}: §f${valStr} (§a${percentStr}%§f)")
              )
          )
    }

    val maxAvg = maxOf(stats.comparison.ownAverage, stats.comparison.globalAverage, 1.0)
    val maxMedian = maxOf(stats.comparison.ownMedian, stats.comparison.globalMedian, 1.0)
    val maxGiveReceive =
        maxOf(stats.balance.received.toDouble(), stats.balance.given.toDouble(), 1.0)
    val maxMutual = 100.0
    val maxDelta =
        maxOf(
            stats.publicity.reactionDelta,
            stats.serverPublicity.publicityReactionAverage -
                stats.serverPublicity.normalReactionAverage,
            1.0,
        )

    val comp1 =
        Component.text()
            .append(Component.text("§d【1作品あたりのいいね（平均）】\n§7作品がどれだけ反応を集めたか\n"))
            .append(formatBar("あなた", stats.comparison.ownAverage, maxAvg, "いいね/作品"))
            .append(Component.newline())
            .append(formatBar("全体平均", stats.comparison.globalAverage, maxAvg, "いいね/作品"))
            .build()

    val comp2 =
        Component.text()
            .append(Component.text("§d【1作品あたりのいいね（中央値）】\n§7突出した1作に引っ張られない実力\n"))
            .append(formatBar("あなた", stats.comparison.ownMedian, maxMedian, "いいね/作品"))
            .append(Component.newline())
            .append(formatBar("全体中央値", stats.comparison.globalMedian, maxMedian, "いいね/作品"))
            .build()

    val comp3 =
        Component.text()
            .append(Component.text("§d【もらった数と送った数】\n§7受け取る側か、応援する側か\n"))
            .append(
                formatBar(
                    "もらった",
                    stats.balance.received.toDouble(),
                    maxGiveReceive,
                    "いいね",
                    isCount = true,
                )
            )
            .append(Component.newline())
            .append(
                formatBar(
                    "送った",
                    stats.balance.given.toDouble(),
                    maxGiveReceive,
                    "いいね",
                    isCount = true,
                )
            )
            .build()

    val comp4 =
        Component.text()
            .append(Component.text("§d【相互になっている割合】\n§7片思いか、応え合えているか\n"))
            .append(
                formatBar(
                    "応援側",
                    if (stats.mutualLikes.likedOwnerCount > 0)
                        (stats.mutualLikes.pairCount * 100.0 / stats.mutualLikes.likedOwnerCount)
                    else 0.0,
                    maxMutual,
                    "%",
                )
            )
            .append(Component.newline())
            .append(
                formatBar(
                    "受取側",
                    if (stats.mutualLikes.likerCount > 0)
                        (stats.mutualLikes.pairCount * 100.0 / stats.mutualLikes.likerCount)
                    else 0.0,
                    maxMutual,
                    "%",
                )
            )
            .build()

    val comp5 =
        Component.text()
            .append(Component.text("§d【宣伝による伸び】\n§7宣伝1回あたりの効果\n"))
            .append(formatBar("あなた", stats.publicity.reactionDelta, maxDelta, "いいね/回"))
            .append(Component.newline())
            .append(
                formatBar(
                    "全体平均",
                    stats.serverPublicity.publicityReactionAverage -
                        stats.serverPublicity.normalReactionAverage,
                    maxDelta,
                    "いいね/回",
                )
            )
            .build()

    return listOf(
        DialogBody.plainMessage(comp1, 560),
        DialogBody.plainMessage(comp2, 560),
        DialogBody.plainMessage(comp3, 560),
        DialogBody.plainMessage(comp4, 560),
        DialogBody.plainMessage(comp5, 560),
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
    val isOp = player.isOp || player.hasPermission("sociallikes.admin")
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
      if (isOp) {
        add(
            dialogButton(
                "Mapで見る",
                "/sldataop map を実行",
                dialogMapKey,
            )
        )
        add(
            dialogButton(
                "Slotsで見る",
                "/sldataop slots を実行",
                dialogSlotsKey,
            )
        )
        add(
            dialogButton(
                "Displayで見る",
                "/sldataop display を実行",
                dialogDisplayKey,
            )
        )
      }
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

  private fun dialogBuildAgeRows(stats: SLDataStatsService.AgeDistributionStats): List<String> =
      listOf("受けたいいね: ${dialogAgeBucketText(stats.received)}")

  private fun dialogGiveReceiveRows(
      stats: SLDataStatsService.ExtendedStats,
      targetName: String,
  ): List<String> =
      listOf(
          "受けた ${formatCount(stats.balance.received)} / 送った ${formatCount(stats.balance.given)} / 差 ${formatCount(stats.balance.received - stats.balance.given)} / 受÷送 ${formatRatio(stats.balance.receivePerGiven)} — ${stats.balance.diagnosis}",
          "$targetName の建築へ押してくれた人 Top5:",
      ) +
          stats.benefactors.mapIndexed { index, row ->
            dialogPlayerCountLine(index, row.playerUuid, row.count, "いいね", stats.playerNames)
          }

  private fun dialogTwoBarRows(
      firstLabel: String,
      first: Double,
      secondLabel: String,
      second: Double,
  ): List<String> {
    val maximum = max(first, second).coerceAtLeast(1.0)
    fun bar(value: Double): String {
      val filled = ceil(value / maximum * 12.0).toInt().coerceIn(0, 12)
      return "█".repeat(filled) + "█".repeat(12 - filled)
    }
    return listOf(
        "$firstLabel ${bar(first)} ${formatAverageCount(first)}",
        "$secondLabel ${bar(second)} ${formatAverageCount(second)}",
    )
  }

  private fun formatSignedAverage(value: Double): String =
      (if (value >= 0.0) "+" else "") + formatAverageCount(value)

  private fun formatRatio(value: Double): String =
      if (value.isFinite()) String.format("%.2f", value) else "-"

  private fun dialogLikeTimestampCoverage(stats: SLDataStatsService.ExtendedStats): String {
    val coverage = stats.likeTimestampCoverage
    return "${formatCount(coverage.timestampedLikes)} / ${formatCount(coverage.totalLikes)}件"
  }

  private fun comparisonDiagnosis(stats: SLDataStatsService.ComparisonStats): String {
    val delta = stats.ownAverage - stats.globalAverage
    return when {
      stats.ownAverage == 0.0 && stats.globalAverage == 0.0 -> "まだ平均との差を読めるだけのデータがありません。"
      delta >= 1.0 -> "全体平均より高く、自作品は平均より反応を集めています。"
      delta <= -1.0 -> "全体平均より低く、反応は伸びしろがあります。"
      else -> "全体平均に近く、反応はサーバー標準的です。"
    }
  }

  private fun balanceDiagnosis(stats: SLDataStatsService.GiveReceiveBalance): String =
      when (stats.diagnosis) {
        "受取寄り" -> "受け取る反応が送る反応より多い状態です。"
        "応援寄り" -> "自分から応援している比重が高い状態です。"
        "バランス型" -> "送る量と受け取る量が近い状態です。"
        else -> stats.diagnosis
      }

  private fun likeConcentrationDiagnosis(stats: SLDataStatsService.LikeConcentration): String =
      if (stats.hhi >= 0.25) "人気が一部の作品に強く集まっています。" else "人気が複数の作品に分散しています。"

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

  private fun givenLikeDeviationDiagnosis(stats: SLDataStatsService.ComparisonStats): String =
      when {
        stats.givenTargetAverage == 0.0 -> "押した作品はまだありません"
        stats.givenTargetAverage >= stats.globalAverage &&
            stats.givenTargetAverage >= stats.globalMedian -> "人気作を選びがち"
        stats.givenTargetAverage < stats.globalMedian -> "埋もれた作品を掘りがち"
        else -> "全体の中ほどを選ぶ傾向"
      }

  private fun dialogOverviewDashboardRows(
      stats: SLDataStatsService.ExtendedStats,
      targetName: String,
  ): List<String> {
    val favoriteOwner =
        stats.likeDiversity.ownerTop.firstOrNull()?.let {
          "${dialogPlayerName(it.label, stats.playerNames)} ${formatCount(it.count)}件"
        } ?: "なし"
    val topBuilds =
        stats.ownBuilds.take(5).joinToString(" / ") { row ->
          "${dialogBuildTitleLabel(row.title, 10)} ${formatCount(row.likeCount)}"
        }
    return listOf(
        "あなたがいいねした作者 ${formatCount(stats.socialOverview.supportedOwnerCount)}人 / あなたにいいねした人数 ${formatCount(stats.socialOverview.supporterCount)}人",
        "送 ${formatCount(stats.balance.given)} / 受 ${formatCount(stats.balance.received)} / 差 ${formatCount(stats.balance.received - stats.balance.given)} / 受÷送 ${formatRatio(stats.balance.receivePerGiven)} — ${stats.balance.diagnosis}",
        "自作品いいね 平均 ${formatAverageCount(stats.likeDistribution.average)} / 中央値 ${formatAverageCount(stats.likeDistribution.median)} / 最大 ${formatCount(stats.likeDistribution.maximum)}",
        "集中度 上位${stats.likeConcentration.topCount}作品 ${formatDoublePercent(stats.likeConcentration.topShare)} / 偏り ${String.format("%.2f", stats.likeConcentration.hhi)} — ${stats.likeConcentration.diagnosis}",
        "応援先の偏り ${stats.likeDiversity.diagnosis}（スコア ${stats.likeDiversity.score}/100） / 最多 ${favoriteOwner}",
        if (topBuilds.isBlank()) "$targetName の建築Top5: なし" else "$targetName の建築Top5: $topBuilds",
    )
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

  private fun dialogAgeDistributionRows(
      stats: SLDataStatsService.AgeDistributionStats
  ): List<String> =
      listOf(
          "受けたいいね: ${dialogAgeBucketText(stats.received)}",
          "押したいいね: ${dialogAgeBucketText(stats.given)}",
      )

  private fun dialogAgeBucketText(buckets: List<SLDataStatsService.AgeBucket>): String {
    val total = buckets.sumOf { it.count }
    return buckets.joinToString(" / ") { bucket ->
      "${bucket.label} ${formatCount(bucket.count)}件 (${formatDialogPercent(bucket.count, total)})"
    }
  }

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

  private fun dialogDiversityRows(
      stats: SLDataStatsService.LikeDiversityStats,
      playerNames: Map<String, String>,
  ): List<String> =
      listOf(
          "多様性スコア ${formatCount(stats.score)} / 100 — ${stats.diagnosis}",
          if (stats.diagnosis == "分散型") {
            "応援先が広く、特定の作者や場所だけに偏っていません。"
          } else {
            "応援先が絞られており、よく見る作者や場所がはっきりしています。"
          },
          "制作者 Top3: ${dialogDimensionTopText(stats.ownerTop) { dialogPlayerName(it, playerNames) }}",
          "world Top3: ${dialogDimensionTopText(stats.worldTop) { it }}",
          "chunk Top3: ${dialogDimensionTopText(stats.chunkTop) { it }}",
      )

  private fun dialogDimensionTopText(
      rows: List<SLDataStatsService.DimensionTop>,
      label: (String) -> String,
  ): String =
      if (rows.isEmpty()) "なし"
      else rows.joinToString(" / ") { "${label(it.label)} ${formatCount(it.count)}件" }

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

  private fun formatDoublePercent(value: Double): String =
      "${"%.1f".format(java.util.Locale.ROOT, value)}%"

  private fun dialogPlayerCountLine(
      index: Int,
      playerUuid: String,
      count: Int,
      suffix: String,
      playerNames: Map<String, String>,
  ): String =
      dialogFixedRankLine(
          index,
          dialogPlayerName(playerUuid, playerNames),
          "${formatCount(count)}$suffix",
      )

  private fun dialogOwnerCountLine(
      index: Int,
      ownerUuid: String,
      count: Int,
      suffix: String,
      playerNames: Map<String, String>,
  ): String =
      dialogFixedRankLine(
          index,
          dialogPlayerName(ownerUuid, playerNames),
          "${formatCount(count)}$suffix",
      )

  private fun dialogPlayerName(uuidText: String, playerNames: Map<String, String>): String {
    val onlineName = parseUuid(uuidText)?.let { Bukkit.getPlayer(it)?.name }
    return compactDialogText(
        (onlineName ?: playerNames[uuidText] ?: uuidText.take(8)).removePrefix("."),
        18,
    )
  }

  // 2026-08-17: 省略記号`…`を付けず、そのまま切り詰めるだけに変更(ユーザー判断)。
  // プレイヤー名の切り詰め(dialogRankingDisplayName)と同じ挙動に揃える。
  private fun compactDialogText(text: String, maxLength: Int): String = text.take(maxLength)

  /**
   * Paper Dialog bodies are centre aligned. Keep the name and value in fixed uniform-font blocks so
   * each ranking value begins at the same column even when a player name has a different length.
   */
  private fun dialogFixedRankLine(index: Int, playerName: String, value: String): String {
    val fixedName = compactDialogText(playerName, DIALOG_FIXED_RANK_NAME_COLUMNS)
    val padding = DIALOG_NBSP.toString().repeat(DIALOG_FIXED_RANK_NAME_COLUMNS - fixedName.length)
    return "${index + 1}. $fixedName$padding  $value"
  }

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

  fun logWeeklyDialogGraphPreview() {
    val series = loadWeekly()
    val config = currentDialogRenderConfig()
    DialogGraphSize.entries.forEach { size ->
      logDialogGraphPreview(
          Period.WEEK,
          size,
          buildDialogGraph(series, size, config),
          dialogSubtitle(series, size, config),
      )
    }
    Tools.plugin.logger.info(
        "[SLData] Display week expected bucketOrder(oldToNew)=" +
            series.buckets.joinToString(" -> ") { "${it.label}:${it.count}" }
    )
    logDisplayInteractionGeometryPreview()
    GraphImageRenderer.logTextFit("handheld-startup", series, "SL Weekly - marzipan99", 128, 128)
    WallMapImageRenderer.logTextFit(
        "wall-startup",
        SLDataStatsService.loadBoardStats(),
        "SL Weekly - marzipan99",
        256,
        384,
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

  private fun logDisplayInteractionGeometryPreview() {
    val buttonY = -1.03
    val hitboxes =
        listOf(-1.23 to "week", -0.41 to "month", 0.41 to "year", 1.23 to "close").joinToString(
            "; "
        ) { (x, action) ->
          "$action=center(${String.format("%.2f", x)},${String.format("%.2f", buttonY)},z=$DISPLAY_BUTTON_HIT_Z)" +
              " size(0.82x0.38)"
        }
    Tools.plugin.logger.info(
        "[SLData] Display interactionRoutes right=PlayerInteractEntityEvent left=EntityDamageByEntityEvent" +
            " leftDamageCancelled=true interactionResponsive=true"
    )
    Tools.plugin.logger.info(
        "[SLData] Display expectedLayers z background=$DISPLAY_BACKGROUND_Z grid=$DISPLAY_GRID_Z" +
            " bar=$DISPLAY_BAR_Z text=$DISPLAY_TEXT_Z buttonBack=$DISPLAY_BUTTON_BACK_Z" +
            " buttonFace=$DISPLAY_BUTTON_FACE_Z buttonText=$DISPLAY_BUTTON_TEXT_Z hit=$DISPLAY_BUTTON_HIT_Z" +
            " hitAhead=${DISPLAY_BUTTON_HIT_Z > DISPLAY_RENDER_MAX_Z}"
    )
    Tools.plugin.logger.info(
        "[SLData] Display expectedHitboxes $hitboxes renderMaxZ=$DISPLAY_RENDER_MAX_Z"
    )
  }

  private fun dialogButton(label: String, tooltip: String, key: Key): ActionButton =
      ActionButton.builder(Component.text(label))
          .tooltip(Component.text(tooltip))
          .width(DIALOG_BUTTON_WIDTH)
          .action(DialogAction.customClick(key, null))
          .build()

  private fun dialogPlayerHeadBodies(
      player: Player,
      series: LikeSeries,
      preview: DialogPreviewConfig,
  ): List<DialogBody> {
    val sizes =
        preview.playerHeadSizes?.map { it to it }
            ?: listOf(preview.playerHeadWidth to preview.playerHeadHeight)
    return sizes.map { (width, height) ->
      dialogPlayerHeadBody(
          player,
          series,
          preview.bodyWidth,
          width,
          height,
          preview.playerHeadAlign,
      )
    }
  }

  private fun dialogPlayerHeadBody(
      player: Player,
      series: LikeSeries,
      bodyWidth: Int,
      iconWidth: Int,
      iconHeight: Int,
      align: DialogPreviewItemAlign,
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
    val itemWidth =
        when (align) {
          DialogPreviewItemAlign.LEFT -> iconWidth
          DialogPreviewItemAlign.CENTER -> bodyWidth
        }
    return DialogBody.item(head)
        .description(DialogBody.plainMessage(description, bodyWidth))
        .showTooltip(true)
        .showDecorations(false)
        .width(itemWidth.coerceIn(1, 256))
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
      dialogMapKey -> giveMap(player)
      dialogSlotsKey -> openSlots(player)
      dialogDisplayKey -> openDisplay(player)
      // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
      dialogExperimentalColorPickerKey -> openDialogExperimentalColorPicker(player)
      // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
      dialogExperimentalDefaultColorsKey -> {
        dialogExperimentalPalettes[player.uniqueId] = DialogTextPalette.DEFAULT
        openDialogExperimentalColorPicker(player)
      }
      // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
      dialogExperimentalHighContrastColorsKey -> {
        dialogExperimentalPalettes[player.uniqueId] = DialogTextPalette.HIGH_CONTRAST
        openDialogExperimentalColorPicker(player)
      }
      dialogPreviewReloadKey -> {
        reloadDialogPreviewConfig()
        openDialogPreview(player)
      }
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
        dialogExperimentalPalettes.remove(player.uniqueId)
        player.closeInventory()
      }
    }
  }

  @EventHandler(ignoreCancelled = false)
  fun onSlotsClick(event: InventoryClickEvent) {
    if (event.view.topInventory.holder is SlotsInventoryHolder) {
      event.isCancelled = true
      if (event.rawSlot == 52) event.whoClicked.closeInventory()
    }
  }

  @EventHandler(ignoreCancelled = false)
  fun onSlotsDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is SlotsInventoryHolder) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = false)
  fun onSlotsCreative(event: InventoryCreativeEvent) {
    if (event.view.topInventory.holder is SlotsInventoryHolder) event.isCancelled = true
  }

  @EventHandler(ignoreCancelled = false)
  fun onInteraction(event: PlayerInteractEntityEvent) {
    val entity = event.rightClicked
    if (!entity.persistentDataContainer.has(displayPanelKey, PersistentDataType.STRING)) return
    event.isCancelled = true
    handleDisplayInteraction(event.player, entity, "right")
  }

  @EventHandler(ignoreCancelled = false)
  fun onInteractionDamage(event: EntityDamageByEntityEvent) {
    val entity = event.entity
    if (!entity.persistentDataContainer.has(displayPanelKey, PersistentDataType.STRING)) return
    event.isCancelled = true
    val player = event.damager as? Player ?: return
    handleDisplayInteraction(player, entity, "left")
    Tools.plugin.logger.info(
        "[SLData] Display left-click damage cancelled entity=${entity.uniqueId} type=${entity.type}" +
            " validAfterCancel=${entity.isValid} dead=${entity.isDead}" +
            " activeInteractions=${activeDisplayInteractionCount(player.uniqueId)}"
    )
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    clearDisplay(event.player.uniqueId)
    activeDialogRequests.remove(event.player.uniqueId)
    activeDialogRankingPeriods.remove(event.player.uniqueId)
    activeDialogStatsTargets.remove(event.player.uniqueId)
    activeDialogStatsCategories.remove(event.player.uniqueId)
    dialogStatsIncludeLifeWorld.remove(event.player.uniqueId)
    dialogExperimentalPalettes.remove(event.player.uniqueId)
  }

  @EventHandler
  fun onWorldChange(event: PlayerChangedWorldEvent) {
    clearDisplay(event.player.uniqueId)
  }

  @EventHandler
  fun onDeath(event: PlayerDeathEvent) {
    clearDisplay(event.player.uniqueId)
  }

  @EventHandler(ignoreCancelled = false)
  fun onBoardBreak(event: HangingBreakByEntityEvent) {
    if (
        event.entity.persistentDataContainer.has(boardFrameKey, PersistentDataType.STRING) ||
            event.entity.persistentDataContainer.has(wallMapFrameKey, PersistentDataType.STRING)
    ) {
      event.isCancelled = true
    }
  }

  private fun redrawDisplay(player: Player, period: Period) {
    val geometry = activeDisplays[player.uniqueId]?.geometry ?: return openDisplay(player, period)
    openDisplayAt(player, period, geometry)
  }

  private fun handleDisplayInteraction(player: Player, entity: Entity, input: String) {
    val owner = entity.persistentDataContainer.get(displayOwnerKey, PersistentDataType.STRING)
    if (owner != player.uniqueId.toString()) return

    val action =
        entity.persistentDataContainer.get(displayActionKey, PersistentDataType.STRING) ?: return
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 0.65f, 1.15f)
    Tools.plugin.logger.info(
        "[SLData] Display button input=$input action=$action player=${player.name}"
    )
    when (action) {
      "week" -> redrawDisplay(player, Period.WEEK)
      "month" -> redrawDisplay(player, Period.MONTH)
      "year" -> redrawDisplay(player, Period.YEAR)
      "close" -> {
        clearDisplay(player.uniqueId)
        player.sendMessage(Tools.socialLikesLOGO + " &fdisplay: パネルを閉じました。".color())
      }
    }
  }

  private fun activeDisplayInteractionCount(playerId: UUID): Int =
      activeDisplays[playerId]?.ids?.count { Bukkit.getEntity(it) is Interaction } ?: 0

  private fun likeAxisMaxForDisplay(peak: Int): Int =
      if (peak <= DIALOG_AXIS_MAX) DIALOG_AXIS_MAX else SLDataStatsService.niceMax(peak)

  private fun parseUuid(raw: String): UUID? =
      try {
        UUID.fromString(raw)
      } catch (_: IllegalArgumentException) {
        null
      }

  private fun clearDisplay(playerId: UUID, expectedIds: Set<UUID>? = null) {
    val current = activeDisplays[playerId]
    if (expectedIds != null && current != null && current.ids.toSet() != expectedIds) return
    activeDisplays.remove(playerId)?.ids?.forEach { id -> Bukkit.getEntity(id)?.remove() }
    Bukkit.getWorlds().forEach { world ->
      world.entities
          .filter {
            it.persistentDataContainer.get(displayOwnerKey, PersistentDataType.STRING) ==
                playerId.toString()
          }
          .forEach { it.remove() }
    }
  }

  private fun scaleTransform(x: Float, y: Float, z: Float): Transformation =
      Transformation(Vector3f(0f, 0f, 0f), AxisAngle4f(), Vector3f(x, y, z), AxisAngle4f())

  private fun centeredBlockTransform(x: Float, y: Float, z: Float): Transformation =
      Transformation(
          Vector3f(-x / 2f, -y / 2f, -z / 2f),
          AxisAngle4f(),
          Vector3f(x, y, z),
          AxisAngle4f(),
      )

  private fun normalizeYaw(yaw: Float): Float {
    var normalized = yaw % 360f
    if (normalized < -180f) normalized += 360f
    if (normalized > 180f) normalized -= 360f
    return normalized
  }

  private fun formatCount(value: Int): String = String.format("%,d", value)

  private fun formatDialogPercent(numerator: Int, denominator: Int): String {
    if (denominator <= 0) return "0.0%"
    return String.format("%.1f%%", numerator.toDouble() * 100.0 / denominator.toDouble())
  }

  private fun dialogProgressBar(current: Int, total: Int, width: Int = 16): String {
    if (total <= 0) return "█".repeat(width)
    val filled =
        ceil(current.toDouble() / total.toDouble() * width.toDouble()).toInt().coerceIn(0, width)
    return "█".repeat(filled) + "█".repeat(width - filled)
  }

  private fun dialogDateLabel(epochMillis: Long): String {
    val date = Instant.ofEpochMilli(epochMillis).atZone(ZoneId.of("UTC")).toLocalDate()
    return "${date.year}/${date.monthValue}/${date.dayOfMonth}"
  }

  private fun repeaterRateDiagnosis(repeaterCount: Int, uniqueLikerCount: Int): String {
    if (uniqueLikerCount <= 0) return "まだ診断できるだけのいいねがありません。"
    val rate = repeaterCount.toDouble() / uniqueLikerCount.toDouble()
    return when {
      rate >= 0.7 -> "常連の輪がしっかり育っています。"
      rate >= 0.35 -> "リピーターが育ちつつあります。"
      else -> "新しい応援者が中心です。"
    }
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

  private data class DisplayGeometry(
      val base: Location,
      val forward: Vector,
      val right: Vector,
      val up: Vector,
  )

  private data class DisplaySession(
      val ids: MutableSet<UUID>,
      val geometry: DisplayGeometry,
  )

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

  // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
  private enum class DialogTextPalette(
      val label: String,
      val primary: TextColor,
      val secondary: TextColor,
  ) {
    DEFAULT("標準（明るい）", NamedTextColor.WHITE, TextColor.color(205, 214, 229)),
    HIGH_CONTRAST("高コントラスト", NamedTextColor.WHITE, NamedTextColor.YELLOW),
  }

  internal data class DialogPreviewConfig(
      val title: String,
      val subtitle: String,
      val body: String,
      val elements: List<DialogPreviewElement>,
      val bodyWidth: Int,
      val useUniformFont: Boolean,
      val showPlayerHead: Boolean,
      val playerHeadWidth: Int,
      val playerHeadHeight: Int,
      val playerHeadAlign: DialogPreviewItemAlign,
      val playerHeadSizes: List<Int>?,
      val columns: Int,
  )

  internal sealed interface DialogPreviewElement {
    data class Message(val message: DialogPreviewMessage) : DialogPreviewElement

    data class Item(
        val material: Material,
        val playerUuid: String?,
        val playerName: String?,
        val itemName: DialogPreviewMessage?,
        val lore: List<DialogPreviewMessage>,
        val description: DialogPreviewMessage?,
        val showTooltip: Boolean,
        val showDecorations: Boolean,
        val width: Int,
        val height: Int,
    ) : DialogPreviewElement
  }

  internal data class DialogPreviewMessage(
      val width: Int,
      val segments: List<DialogPreviewSegment>,
  )

  internal data class DialogPreviewSegment(
      val text: String,
      val repeat: Int,
      val color: TextColor,
      val font: Key?,
      val hover: String?,
      val hoverColor: TextColor,
  )

  internal enum class DialogPreviewItemAlign {
    LEFT,
    CENTER;

    companion object {
      fun parse(raw: String?): DialogPreviewItemAlign =
          when (raw?.trim()?.lowercase()) {
            "center",
            "centre",
            "middle" -> CENTER
            else -> LEFT
          }
    }
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

  private data class TextFitCheck(val name: String, val width: Int, val maxWidth: Int) {
    val fits: Boolean = width <= maxWidth
  }

  private data class TextDrawCheck(
      val name: String,
      val text: String,
      val width: Int,
      val maxWidth: Int,
  ) {
    val fits: Boolean = width <= maxWidth
  }

  private data class PixelRect(
      val name: String,
      val x: Int,
      val y: Int,
      val width: Int,
      val height: Int,
  ) {
    val right: Int
      get() = x + width

    val bottom: Int
      get() = y + height

    override fun toString(): String = "$name=($x,$y ${width}x$height)"
  }

  private data class WallMapLayout(
      val title: PixelRect,
      val chart: PixelRect,
      val plot: PixelRect,
      val lists: PixelRect,
      val weeklyMvp: PixelRect,
      val growing: PixelRect,
  )

  private fun fitText(metrics: FontMetrics, text: String, maxWidth: Int): String {
    if (metrics.stringWidth(text) <= maxWidth) return text
    var clipped = text
    while (clipped.isNotEmpty() && metrics.stringWidth("$clipped...") > maxWidth) {
      clipped = clipped.dropLast(1)
    }
    return if (clipped.isEmpty()) "" else "$clipped..."
  }

  private fun fitTextEllipsis(metrics: FontMetrics, text: String, maxWidth: Int): String {
    if (metrics.stringWidth(text) <= maxWidth) return text
    var clipped = text
    while (clipped.isNotEmpty() && metrics.stringWidth("$clipped…") > maxWidth) {
      clipped = clipped.dropLast(1)
    }
    return if (clipped.isEmpty()) "" else "$clipped…"
  }

  private inline fun withClip(g: Graphics2D, rect: PixelRect, block: () -> Unit) {
    val previousClip: Shape? = g.clip
    g.clipRect(rect.x, rect.y, rect.width, rect.height)
    try {
      block()
    } finally {
      g.clip = previousClip
    }
  }

  private fun compactCount(value: Int): String =
      if (value >= 1000) String.format("%.1fk", value.toDouble() / 1000.0) else value.toString()

  private fun drawCenteredClamped(
      g: Graphics2D,
      text: String,
      centerX: Int,
      y: Int,
      minX: Int,
      maxX: Int,
  ) {
    val width = g.fontMetrics.stringWidth(text)
    val x = (centerX - width / 2).coerceIn(minX, maxX - width)
    g.drawString(text, x, y)
  }

  private fun findReusableMap(player: Player): ItemStack? =
      player.inventory.contents.firstOrNull {
        it != null &&
            it.type == Material.FILLED_MAP &&
            it.itemMeta?.persistentDataContainer?.has(mapItemKey, PersistentDataType.STRING) == true
      }

  private class SlotsInventoryHolder : InventoryHolder {
    private lateinit var backingInventory: Inventory

    fun bind(inventory: Inventory) {
      backingInventory = inventory
    }

    override fun getInventory(): Inventory = backingInventory
  }

  private class SeriesMapRenderer(
      private val series: LikeSeries,
      private val title: String,
      private val width: Int,
      private val height: Int,
      private val offsetX: Int,
      private val offsetY: Int,
  ) : MapRenderer(true) {
    override fun render(map: MapView, canvas: MapCanvas, player: Player) {
      val image = GraphImageRenderer.render(series, title, width, height)
      canvas.drawImage(0, 0, image.getSubimage(offsetX, offsetY, 128, 128))
    }

    override fun isExplorerMap(): Boolean = false
  }

  /** A compact coordinate plot using the same per-map MapRenderer pattern as the weekly graph. */
  private class HomeGroundMapRenderer(
      private val home: SLDatabase.HomeGround,
      private val points: List<SLDatabase.HomeGroundPoint>,
  ) : MapRenderer(true) {
    override fun render(map: MapView, canvas: MapCanvas, player: Player) {
      canvas.drawImage(0, 0, HomeGroundMapImageRenderer.render(home, points))
    }

    override fun isExplorerMap(): Boolean = false
  }

  private object HomeGroundMapImageRenderer {
    fun render(
        home: SLDatabase.HomeGround,
        points: List<SLDatabase.HomeGroundPoint>,
    ): BufferedImage {
      val image = BufferedImage(128, 128, BufferedImage.TYPE_INT_RGB)
      val g = image.createGraphics()
      try {
        g.color = Color(25, 22, 38)
        g.fillRect(0, 0, 128, 128)
        g.color = Color(68, 61, 92)
        g.fillRect(8, 28, 112, 84)
        g.color = Color(124, 106, 169)
        g.drawRect(8, 28, 111, 83)
        g.font = Font(Font.SANS_SERIF, Font.BOLD, 10)
        g.color = Color(243, 236, 255)
        g.drawString("HOME GROUND", 10, 14)
        g.font = Font(Font.MONOSPACED, Font.PLAIN, 8)
        g.color = Color(206, 194, 237)
        g.drawString(compactMapText(home.worldName, 17), 10, 24)

        val all =
            points +
                SLDatabase.HomeGroundPoint(
                    home.chunkX,
                    home.chunkZ,
                    home.buildCount,
                    home.receivedLikes,
                )
        val minX = all.minOf { it.chunkX } - 1
        val maxX = all.maxOf { it.chunkX } + 1
        val minZ = all.minOf { it.chunkZ } - 1
        val maxZ = all.maxOf { it.chunkZ } + 1
        fun x(chunkX: Int): Int =
            10 + ((chunkX - minX).toDouble() / (maxX - minX).coerceAtLeast(1) * 108).toInt()
        fun y(chunkZ: Int): Int =
            110 - ((chunkZ - minZ).toDouble() / (maxZ - minZ).coerceAtLeast(1) * 80).toInt()

        points.forEach { point ->
          g.color = Color(181, 124, 255)
          val size = (2 + point.buildCount.coerceAtMost(3)).coerceAtMost(5)
          g.fillOval(x(point.chunkX) - size / 2, y(point.chunkZ) - size / 2, size, size)
        }
        g.color = Color(255, 81, 99)
        g.fillOval(x(home.chunkX) - 4, y(home.chunkZ) - 4, 9, 9)
        g.color = Color.WHITE
        g.drawOval(x(home.chunkX) - 5, y(home.chunkZ) - 5, 10, 10)
        g.font = Font(Font.MONOSPACED, Font.PLAIN, 8)
        g.color = Color(243, 236, 255)
        g.drawString("(${home.chunkX}, ${home.chunkZ})", 10, 122)
      } finally {
        g.dispose()
      }
      return image
    }

    private fun compactMapText(value: String, maxLength: Int): String =
        if (value.length <= maxLength) value else value.take(maxLength - 1) + "…"
  }

  private class ImageTileMapRenderer(
      private val image: BufferedImage,
      private val offsetX: Int,
      private val offsetY: Int,
  ) : MapRenderer(false) {
    override fun render(map: MapView, canvas: MapCanvas, player: Player) {
      canvas.drawImage(0, 0, image.getSubimage(offsetX, offsetY, 128, 128))
    }

    override fun isExplorerMap(): Boolean = false
  }

  private object GraphImageRenderer {
    fun render(series: LikeSeries, title: String, width: Int, height: Int): BufferedImage {
      return if (width <= 128 && height <= 128) renderCompact(series, title, width, height)
      else renderDetailed(series, title, width, height)
    }

    fun logTextFit(label: String, series: LikeSeries, title: String, width: Int, height: Int) {
      val image = BufferedImage(width, height, BufferedImage.TYPE_INT_RGB)
      val g = image.createGraphics()
      val checks =
          if (width <= 128 && height <= 128) compactTextChecks(g, series, title, width)
          else detailedTextChecks(g, series, title, width)
      Tools.plugin.logger.info(
          "[SLData] Map $label textFit " +
              checks.joinToString("; ") { "${it.name}=${it.width}/${it.maxWidth}:${it.fits}" }
      )
      g.dispose()
    }

    private fun renderCompact(
        series: LikeSeries,
        title: String,
        width: Int,
        height: Int,
    ): BufferedImage {
      val image = BufferedImage(width, height, BufferedImage.TYPE_INT_RGB)
      val g = image.createGraphics()
      g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON)
      g.color = Color(24, 28, 33)
      g.fillRect(0, 0, width, height)

      g.font = Font(Font.SANS_SERIF, Font.BOLD, 10)
      g.color = Color(238, 242, 247)
      g.drawString(fitText(g.fontMetrics, title, width - 16), 8, 12)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 8)
      g.color = Color(180, 226, 120)
      g.drawString(
          fitText(
              g.fontMetrics,
              "total ${compactCount(series.total)}  peak ${compactCount(series.peak)}",
              width - 16,
          ),
          8,
          23,
      )

      val left = 8
      val top = 32
      val right = width - 8
      val bottom = height - 17
      val chartW = right - left
      val chartH = bottom - top
      val niceMax = SLDataStatsService.niceMax(series.peak)

      g.stroke = BasicStroke(1f)
      g.color = Color(220, 220, 220)
      g.drawLine(left, bottom, right, bottom)

      val gap = max(2, chartW / (series.buckets.size * 5))
      val barW = max(3, (chartW - gap * (series.buckets.size + 1)) / series.buckets.size)
      series.buckets.forEachIndexed { index, bucket ->
        val barH =
            if (niceMax <= 0) 0 else (bucket.count.toDouble() / niceMax.toDouble() * chartH).toInt()
        val x = left + gap + index * (barW + gap)
        val y = bottom - barH
        g.color = Color(108, 205, 117)
        g.fillRect(x, y, barW, barH)
        if (bucket.count == series.peak) {
          g.font = Font(Font.SANS_SERIF, Font.BOLD, 7)
          g.color = Color(247, 188, 72)
          drawCenteredClamped(
              g,
              formatCount(bucket.count),
              x + barW / 2,
              max(top + 8, y - 2),
              2,
              width - 2,
          )
        }
        if (
            index == 0 || index == series.buckets.lastIndex || index == series.buckets.lastIndex / 2
        ) {
          g.font = Font(Font.SANS_SERIF, Font.PLAIN, 7)
          g.color = Color(180, 188, 198)
          drawCenteredClamped(
              g,
              bucket.label.replace("週", ""),
              x + barW / 2,
              bottom + 10,
              2,
              width - 2,
          )
        }
      }
      g.dispose()
      return image
    }

    private fun renderDetailed(
        series: LikeSeries,
        title: String,
        width: Int,
        height: Int,
    ): BufferedImage {
      val image = BufferedImage(width, height, BufferedImage.TYPE_INT_RGB)
      val g = image.createGraphics()
      g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON)
      g.color = Color(24, 28, 33)
      g.fillRect(0, 0, width, height)
      g.font = Font(Font.SANS_SERIF, Font.BOLD, 18)
      g.color = Color(238, 242, 247)
      g.drawString(fitText(g.fontMetrics, title, width - 16), 8, 24)
      g.font = Font(Font.MONOSPACED, Font.PLAIN, 14)
      g.color = Color(180, 226, 120)
      g.drawString(
          fitText(
              g.fontMetrics,
              "${series.sparkline} total=${series.total} peak=${series.peak}",
              width - 16,
          ),
          8,
          44,
      )

      val left = 30
      val top = 58
      val right = width - 36
      val bottom = height - 42
      val chartW = right - left
      val chartH = bottom - top
      val niceMax = SLDataStatsService.niceMax(series.peak)
      g.stroke = BasicStroke(1f)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 10)
      for (i in 0..4) {
        val y = bottom - (chartH * i / 4)
        val value = niceMax * i / 4
        g.color = if (i == 0) Color(220, 220, 220) else Color(66, 75, 86)
        g.drawLine(left, y, right, y)
        g.color = Color(180, 188, 198)
        g.drawString(value.toString(), right + 5, y + 3)
      }

      val gap = max(3, chartW / (series.buckets.size * 5))
      val barW = max(5, (chartW - gap * (series.buckets.size + 1)) / series.buckets.size)
      series.buckets.forEachIndexed { index, bucket ->
        val barH =
            if (niceMax <= 0) 0 else (bucket.count.toDouble() / niceMax.toDouble() * chartH).toInt()
        val x = left + gap + index * (barW + gap)
        val y = bottom - barH
        g.color = Color(108, 205, 117)
        g.fillRect(x, y, barW, barH)
        if (bucket.count == series.peak) {
          g.color = Color(247, 188, 72)
          g.drawString(formatCount(bucket.count), x - 4, max(top + 10, y - 3))
        }
        if (
            index == 0 || index == series.buckets.lastIndex || index == series.buckets.lastIndex / 2
        ) {
          g.color = Color(180, 188, 198)
          g.drawString(bucket.label.replace("週", ""), x - 1, bottom + 16)
        }
      }
      g.dispose()
      return image
    }

    private fun compactTextChecks(
        g: Graphics2D,
        series: LikeSeries,
        title: String,
        width: Int,
    ): List<TextFitCheck> {
      g.font = Font(Font.SANS_SERIF, Font.BOLD, 10)
      val titleText = fitText(g.fontMetrics, title, width - 16)
      val titleCheck = TextFitCheck("title", g.fontMetrics.stringWidth(titleText), width - 16)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 8)
      val summary =
          fitText(
              g.fontMetrics,
              "total ${compactCount(series.total)}  peak ${compactCount(series.peak)}",
              width - 16,
          )
      return listOf(
          titleCheck,
          TextFitCheck("summary", g.fontMetrics.stringWidth(summary), width - 16),
      )
    }

    private fun detailedTextChecks(
        g: Graphics2D,
        series: LikeSeries,
        title: String,
        width: Int,
    ): List<TextFitCheck> {
      g.font = Font(Font.SANS_SERIF, Font.BOLD, 18)
      val titleText = fitText(g.fontMetrics, title, width - 16)
      val titleCheck = TextFitCheck("title", g.fontMetrics.stringWidth(titleText), width - 16)
      g.font = Font(Font.MONOSPACED, Font.PLAIN, 14)
      val summary =
          fitText(
              g.fontMetrics,
              "${series.sparkline} total=${series.total} peak=${series.peak}",
              width - 16,
          )
      return listOf(
          titleCheck,
          TextFitCheck("summary", g.fontMetrics.stringWidth(summary), width - 16),
      )
    }
  }

  private object WallMapImageRenderer {
    fun render(
        stats: SLDataStatsService.BoardStats,
        title: String,
        width: Int,
        height: Int,
    ): BufferedImage {
      val series = stats.weekly
      val layout = layout(width, height)
      val image = BufferedImage(width, height, BufferedImage.TYPE_INT_RGB)
      val g = image.createGraphics()
      g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON)
      g.color = Color(24, 28, 33)
      g.fillRect(0, 0, width, height)

      withClip(g, layout.title) {
        g.font = Font(Font.SANS_SERIF, Font.BOLD, 16)
        g.color = Color(238, 242, 247)
        g.drawString(
            fitTextEllipsis(g.fontMetrics, title, layout.title.width),
            layout.title.x,
            layout.title.y + 18,
        )
        g.font = Font(Font.SANS_SERIF, Font.PLAIN, 11)
        g.color = Color(180, 226, 120)
        val summary =
            "total=${formatCount(series.total)} latest=${formatCount(series.latest?.count ?: 0)} peak=${formatCount(series.peak)}"
        g.drawString(
            fitTextEllipsis(g.fontMetrics, summary, layout.title.width),
            layout.title.x,
            layout.title.y + 36,
        )
      }

      withClip(g, layout.chart) {
        val axisMax = likeAxisMaxForDisplay(series.peak)
        val ticks = SLDataStatsService.axisTicks(axisMax, DIALOG_AXIS_DIVISIONS)
        val left = layout.plot.x
        val top = layout.plot.y
        val right = layout.plot.right
        val bottom = layout.plot.bottom
        val chartW = layout.plot.width
        val chartH = layout.plot.height
        g.stroke = BasicStroke(1f)
        g.font = Font(Font.SANS_SERIF, Font.PLAIN, 10)
        ticks.forEach { value ->
          val y = bottom - (chartH * value / axisMax)
          g.color = if (value == 0) Color(220, 220, 220) else Color(66, 75, 86)
          g.drawLine(left, y, right, y)
          g.color = Color(180, 188, 198)
          g.drawString(formatCount(value), right + 7, y + 4)
        }

        val gap = max(4, chartW / (series.buckets.size * 6))
        val barW = max(8, (chartW - gap * (series.buckets.size + 1)) / series.buckets.size)
        series.buckets.forEachIndexed { index, bucket ->
          val barH =
              if (axisMax <= 0) 0
              else (bucket.count.toDouble() / axisMax.toDouble() * chartH).toInt()
          val x = left + gap + index * (barW + gap)
          val y = bottom - barH
          g.color = if (bucket.count == series.peak) Color(126, 224, 142) else Color(108, 205, 117)
          if (barH > 0) g.fillRect(x, y, barW, barH)
          if (bucket.count == series.peak) {
            g.font = Font(Font.SANS_SERIF, Font.BOLD, 10)
            g.color = Color(247, 188, 72)
            drawCenteredClamped(
                g,
                formatCount(bucket.count),
                x + barW / 2,
                max(top + 10, y - 4),
                left,
                right,
            )
          }
          if (
              index == 0 ||
                  index == series.buckets.lastIndex ||
                  index == series.buckets.lastIndex / 2
          ) {
            g.font = Font(Font.SANS_SERIF, Font.PLAIN, 10)
            g.color = Color(180, 188, 198)
            drawCenteredClamped(
                g,
                compactBucketLabel(series.period, bucket.label),
                x + barW / 2,
                bottom + 16,
                left,
                right,
            )
          }
        }
      }

      withClip(g, layout.lists) {
        g.color = Color(34, 40, 48)
        g.fillRoundRect(
            layout.lists.x,
            layout.lists.y,
            layout.lists.width,
            layout.lists.height,
            6,
            6,
        )
      }
      drawSummaryColumn(g, layout.weeklyMvp, "Weekly MVP", stats.weeklyMvp.take(3)) { index, summary
        ->
        "${index + 1}. #${summary.buildId} ${summary.title} ${summary.currentCount}"
      }
      drawSummaryColumn(g, layout.growing, "Growing", stats.growingBuilds.take(3)) { _, summary ->
        "#${summary.buildId} ${summary.title} ${formatDelta(summary.delta)} (${summary.currentCount})"
      }

      g.dispose()
      return image
    }

    fun logTextFit(
        label: String,
        stats: SLDataStatsService.BoardStats,
        title: String,
        width: Int,
        height: Int,
    ) {
      val image = BufferedImage(width, height, BufferedImage.TYPE_INT_RGB)
      val g = image.createGraphics()
      val layout = layout(width, height)
      val checks = textChecks(g, stats, title, layout)
      Tools.plugin.logger.info(
          "[SLData] Map $label layout ${layout.title}; ${layout.chart}; ${layout.plot}; ${layout.lists};" +
              " ${layout.weeklyMvp}; ${layout.growing}"
      )
      Tools.plugin.logger.info(
          "[SLData] Map $label textFit " +
              checks.joinToString("; ") {
                "${it.name}=${it.width}/${it.maxWidth}:${it.fits} text='${it.text}'"
              }
      )
      g.dispose()
    }

    private fun layout(width: Int, height: Int): WallMapLayout {
      val title = PixelRect("title", 12, 8, width - 24, 46)
      val chart = PixelRect("chart", 12, 64, width - 24, 214)
      val plot = PixelRect("plot", 22, 84, 166, 162)
      val lists = PixelRect("lists", 12, height - 90, width - 24, 78)
      val columnWidth = (lists.width - 22) / 2
      val weeklyMvp =
          PixelRect("weeklyMvp", lists.x + 8, lists.y + 10, columnWidth, lists.height - 18)
      val growing =
          PixelRect("growing", weeklyMvp.right + 10, weeklyMvp.y, columnWidth, weeklyMvp.height)
      return WallMapLayout(title, chart, plot, lists, weeklyMvp, growing)
    }

    private fun drawSummaryColumn(
        g: Graphics2D,
        rect: PixelRect,
        heading: String,
        rows: List<com.github.srain3.sociallikes.datas.SLDatabase.BuildLikeSummary>,
        rowText: (Int, com.github.srain3.sociallikes.datas.SLDatabase.BuildLikeSummary) -> String,
    ) {
      withClip(g, rect) {
        g.font = Font(Font.SANS_SERIF, Font.BOLD, 12)
        g.color = Color(238, 242, 247)
        g.drawString(fitTextEllipsis(g.fontMetrics, heading, rect.width), rect.x, rect.y + 12)
        g.font = Font(Font.SANS_SERIF, Font.PLAIN, 10)
        g.color = Color(180, 188, 198)
        rows.forEachIndexed { index, summary ->
          g.drawString(
              fitTextEllipsis(g.fontMetrics, rowText(index, summary), rect.width),
              rect.x,
              rect.y + 28 + index * 14,
          )
        }
      }
    }

    private fun textChecks(
        g: Graphics2D,
        stats: SLDataStatsService.BoardStats,
        title: String,
        layout: WallMapLayout,
    ): List<TextDrawCheck> {
      val series = stats.weekly
      val checks = mutableListOf<TextDrawCheck>()
      fun add(name: String, text: String, maxWidth: Int) {
        val fitted = fitTextEllipsis(g.fontMetrics, text, maxWidth)
        checks += TextDrawCheck(name, fitted, g.fontMetrics.stringWidth(fitted), maxWidth)
      }

      g.font = Font(Font.SANS_SERIF, Font.BOLD, 16)
      add("title", title, layout.title.width)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 11)
      add(
          "summary",
          "total=${formatCount(series.total)} latest=${formatCount(series.latest?.count ?: 0)} peak=${formatCount(series.peak)}",
          layout.title.width,
      )
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 10)
      SLDataStatsService.axisTicks(likeAxisMaxForDisplay(series.peak), DIALOG_AXIS_DIVISIONS)
          .forEach {
            add("yLabel-$it", formatCount(it), layout.chart.right - layout.plot.right - 7)
          }
      listOf(0, series.buckets.lastIndex / 2, series.buckets.lastIndex).distinct().forEach { index
        ->
        series.buckets.getOrNull(index)?.let {
          add("xLabel-$index", compactBucketLabel(series.period, it.label), 34)
        }
      }
      g.font = Font(Font.SANS_SERIF, Font.BOLD, 12)
      add("weeklyMvp-heading", "Weekly MVP", layout.weeklyMvp.width)
      add("growing-heading", "Growing", layout.growing.width)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 10)
      stats.weeklyMvp.take(3).forEachIndexed { index, summary ->
        add(
            "weeklyMvp-${index + 1}",
            "${index + 1}. #${summary.buildId} ${summary.title} ${summary.currentCount}",
            layout.weeklyMvp.width,
        )
      }
      stats.growingBuilds.take(3).forEachIndexed { index, summary ->
        add(
            "growing-${index + 1}",
            "#${summary.buildId} ${summary.title} ${formatDelta(summary.delta)} (${summary.currentCount})",
            layout.growing.width,
        )
      }
      return checks
    }
  }

  private object BoardImageRenderer {
    fun render(stats: SLDataStatsService.BoardStats, width: Int, height: Int): BufferedImage {
      val image = GraphImageRenderer.render(stats.weekly, "SocialLikes Public Board", width, height)
      val g = image.createGraphics()
      g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON)
      g.color = Color(18, 22, 27, 220)
      g.fillRoundRect(14, 154, 228, 86, 8, 8)
      g.color = Color(238, 242, 247)
      g.font = Font(Font.SANS_SERIF, Font.BOLD, 13)
      g.drawString("Weekly MVP", 24, 174)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 11)
      stats.weeklyMvp.take(3).forEachIndexed { index, summary ->
        g.drawString(
            "${index + 1}. #${summary.buildId} ${summary.title.take(14)} ${summary.currentCount}",
            24,
            192 + index * 14,
        )
      }
      g.font = Font(Font.SANS_SERIF, Font.BOLD, 13)
      g.drawString("Growing", 140, 174)
      g.font = Font(Font.SANS_SERIF, Font.PLAIN, 11)
      stats.growingBuilds.take(3).forEachIndexed { index, summary ->
        g.drawString(
            "#${summary.buildId} +${summary.delta} (${summary.currentCount})",
            140,
            192 + index * 14,
        )
      }
      g.dispose()
      return image
    }
  }
}
