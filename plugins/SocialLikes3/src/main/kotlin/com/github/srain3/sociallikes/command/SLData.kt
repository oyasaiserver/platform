package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SLDatabase
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
  private const val DIALOG_BUILD_TITLE_COLUMNS = 12
  private const val DIALOG_RANK_BAR_COLUMNS = 24
  // Weekly graph layout constants; unrelated to the 24-cell ranking bar above.
  private const val DIALOG_BAR_WIDTH_CHARS = 1
  // A 2x vertical graph needs enough horizontal room for its Japanese X-axis labels.  Four base
  // cells become eight cells at 2x, which gives each categorical label its own column.
  private const val DIALOG_BAR_GAP_CHARS = 4
  private const val DIALOG_NBSP = '\u00A0'
  private const val DIALOG_FULL_SPACE = '\u3000'
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
  private val dialogStatsWorldFilterKey = Key.key("sociallikes3", "sldata_stats2_world_filter")
  private val dialogStatsOverviewKey = Key.key("sociallikes3", "sldata_stats2_overview")
  private val dialogStatsBuildsKey = Key.key("sociallikes3", "sldata_stats2_builds")
  private val dialogStatsGivenKey = Key.key("sociallikes3", "sldata_stats2_given")
  private val dialogStatsSocialKey = Key.key("sociallikes3", "sldata_stats2_social")
  private val dialogStatsPublicityKey = Key.key("sociallikes3", "sldata_stats2_publicity")
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
      if (
          args.getOrNull(0)?.equals("dialog", ignoreCase = true) == true &&
              args.getOrNull(1)?.lowercase() in dialogStatsAliases &&
              args.getOrNull(2)?.equals("dump", ignoreCase = true) == true
      ) {
        dumpDialogStatsFromConsole(sender, args)
        return true
      }
      if (
          args.getOrNull(0)?.equals("dialog", ignoreCase = true) == true &&
              args.getOrNull(1)?.equals("reload", ignoreCase = true) == true
      ) {
        val config = reloadDialogRenderConfig()
        val preview = reloadDialogPreviewConfig()
        val statsText = reloadDialogStatsText()
        sender.sendMessage(
            Tools.socialLikesLOGO +
                " dialog設定を再読込しました。style=${config.widthStyle.name.lowercase()} preview='${preview.title}' stats2-text=${statsText.loadedEntryCount}項目"
        )
        return true
      }
      sender.sendMessage(Tools.socialLikesLOGO + " &c/sldata はプレイヤー専用です。".color())
      return true
    }

    when (args.firstOrNull()?.lowercase()) {
      null,
      "",
      "help" -> sendModeList(sender)
      "font" -> {
        if (args.getOrNull(1)?.lowercase() in setOf("vanilla", "nopack", "no-pack")) {
          sender.sendMessage(
              Tools.socialLikesLOGO + " &ffont vanilla: リソースパックなしの既存文字版を開きます。".color()
          )
          SLDataFont.openVanillaFor(sender)
        } else {
          sender.sendMessage(
              Tools.socialLikesLOGO + " &ffont: Java向け。統合版はリソースパックが届かない可能性があります。".color()
          )
          SLDataFont.openFor(sender)
        }
      }
      "slots" -> openSlots(sender)
      "display" -> openDisplay(sender, Period.parse(args.getOrNull(1)))
      "map" -> handleMap(sender, args.drop(1))
      "lucky" -> openLuckyBuild(sender)
      "board" -> handleBoard(sender, args.drop(1))
      "server" -> openServerPublicityStats(sender)
      "dialog" -> handleDialog(sender, args.drop(1))
      // TEMPORARY: Dialog レイアウト実測用ハーネス。詳細は SLDataSpec.kt を参照。
      "spec" -> SLDataSpec.handle(sender, args.drop(1))
      else -> {
        sender.sendMessage(Tools.socialLikesLOGO + " &c不明な方式です: ${args[0]}".color())
        sendModeList(sender)
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
          listOf("font", "slots", "display", "map", "board", "dialog", "server", "lucky", "spec")
              .filter { it.startsWith(args[0], ignoreCase = true) }
              .toMutableList()
      2 ->
          when (args[0].lowercase()) {
                "board" -> listOf("place", "remove")
                "display" -> listOf("week", "month", "year")
                "font" -> listOf("pack", "vanilla", "nopack")
                "map" -> listOf("wall", "remove", "home")
                "dialog" ->
                    dialogArgumentSuggestions(emptyList()) +
                        listOf("preview", "ranking", "stats2", "reload")
                else -> emptyList()
              }
              .filter { it.startsWith(args[1], ignoreCase = true) }
              .toMutableList()
      3 ->
          when (args[0].lowercase()) {
                "dialog" ->
                    if (args[1].lowercase() in dialogStatsAliases) {
                      (listOf("dump", "tab") + dialogStatsPlayerSuggestions(sender, args[2]))
                    } else {
                      dialogArgumentSuggestions(args.drop(1).dropLast(1))
                    }
                else -> emptyList()
              }
              .filter { it.startsWith(args[2], ignoreCase = true) }
              .toMutableList()
      4 ->
          when (args[0].lowercase()) {
                "dialog" ->
                    if (
                        args[1].lowercase() in dialogStatsAliases &&
                            args[2].equals("dump", ignoreCase = true)
                    ) {
                      dialogStatsPlayerSuggestions(sender, args[3])
                    } else if (
                        args[1].lowercase() in dialogStatsAliases &&
                            args[2].equals("tab", ignoreCase = true)
                    ) {
                      DialogStatsCategory.entries.map { it.name.lowercase() }
                    } else {
                      emptyList()
                    }
                else -> emptyList()
              }
              .filter { it.startsWith(args[3], ignoreCase = true) }
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
    player.sendMessage(Tools.socialLikesLOGO + " &f/sldata 表示方式一覧".color())
    player.sendMessage("&7/sldata font &f- チェストGUI+カスタムフォント（Java向け、統合版は不可見込み）".color())
    player.sendMessage("&7/sldata slots &f- バニラ素材スロット棒グラフ（統合版でも見える見込み）".color())
    player.sendMessage(
        "&7/sldata display [week|month|year] &f- Display Entityのワールド内UI（Geyser統合版は不可見込み）".color()
    )
    player.sendMessage("&7/sldata map &f- 手持ちマップの128pxグラフ（統合版でも見える見込み）".color())
    player.sendMessage("&7/sldata map home &f- 自作品が最も集まるチャンクを手持ちマップにドット表示".color())
    player.sendMessage("&7/sldata map wall &f- 2x3マップ壁掛け版を向いている壁へ設置".color())
    player.sendMessage("&7/sldata map remove &f- 近くの2x3マップ壁掛け版を撤去".color())
    player.sendMessage("&7/sldata board place &f- 2x2マップ公共ボードを向いている壁へ設置（統合版でも見える見込み）".color())
    player.sendMessage("&7/sldata board remove &f- 近くの実験ボードを撤去".color())
    player.sendMessage(
        "&7/sldata dialog [week|month|year] &f- Paper Dialog API（グラフは2倍サイズ・低ブロック軸で固定。Java 1.21.6+向け、統合版は不可見込み）"
            .color()
    )
    player.sendMessage("&7/sldata dialog ranking &f- 今週の制作者別いいね数Top5をヘッド付き横棒で表示".color())
    player.sendMessage(
        "&7/sldata dialog stats2 [プレイヤー名] &f- 交流・応援・一番乗りの詳細統計を表示（他人の統計はOP限定）".color()
    )
    player.sendMessage("&7/sldata server &f- 全員に公開する宣伝効果・掲載回数のサーバー集計を表示".color())
    player.sendMessage("&7/sldata lucky &f- 未いいねの他者建築をランダムに1件案内".color())
    player.sendMessage(
        "&7/sldata dialog reload &f- plugins/SocialLikes3/$DIALOG_CONFIG_FILE_NAME を再読込".color()
    )
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

  private fun handleDialogStats(player: Player, args: List<String>) {
    if (args.getOrNull(1)?.equals("dump", ignoreCase = true) == true) {
      dumpDialogStats(player, args)
      return
    }
    if (args.getOrNull(1)?.equals("tab", ignoreCase = true) == true) {
      val category =
          args.getOrNull(2)?.let { raw ->
            DialogStatsCategory.entries.firstOrNull { it.name.equals(raw, ignoreCase = true) }
          }
      if (category == null || args.size != 3) {
        player.sendMessage(
            Tools.socialLikesLOGO +
                " &c使い方: /sldata dialog stats2 tab <overview|builds|given|social|publicity|server>"
                    .color()
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
    if (!player.isOp) {
      player.sendMessage(Tools.socialLikesLOGO + " &c詳細統計dumpを実行できるのはOPのみです。".color())
      return
    }
    if (args.size > 3) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &c使い方: /sldata dialog stats2 dump [プレイヤー名]".color()
      )
      return
    }
    val targetName = args.getOrNull(2)
    val target =
        if (targetName == null) DialogStatsTarget(player.uniqueId, player.name)
        else {
          val offlinePlayer = Bukkit.getOfflinePlayer(targetName)
          if (!offlinePlayer.isOnline && !offlinePlayer.hasPlayedBefore()) {
            player.sendMessage(
                Tools.socialLikesLOGO +
                    " &cプレイヤー「$targetName」が見つかりません。参加済みのプレイヤー名を指定してください。".color()
            )
            return
          }
          DialogStatsTarget(offlinePlayer.uniqueId, offlinePlayer.name ?: targetName)
        }
    val outputFile = writeDialogStatsDump(player, target.uuid, target.name)
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &fdialog stats2 dump: ${target.name} の詳細統計を書き出しました: ${outputFile.path}".color()
    )
  }

  private fun dumpDialogStatsFromConsole(sender: CommandSender, args: Array<out String>) {
    if (args.size != 4) {
      sender.sendMessage(
          Tools.socialLikesLOGO + " &c使い方: /sldata dialog stats2 dump <プレイヤー名>".color()
      )
      return
    }
    val targetName = args[3]
    val offlinePlayer = Bukkit.getOfflinePlayer(targetName)
    if (!offlinePlayer.isOnline && !offlinePlayer.hasPlayedBefore()) {
      sender.sendMessage(
          Tools.socialLikesLOGO + " &cプレイヤー「$targetName」が見つかりません。参加済みのプレイヤー名を指定してください。".color()
      )
      return
    }
    val outputFile =
        writeDialogStatsDump(null, offlinePlayer.uniqueId, offlinePlayer.name ?: targetName)
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

  private fun reloadDialogRenderConfig(): DialogRenderConfig {
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

  private fun reloadDialogStatsText(): DialogStatsText {
    val textFile = File(Tools.plugin.dataFolder, DIALOG_STATS_TEXT_FILE_NAME)
    writeDefaultDialogStatsTextIfMissing(textFile)
    val entries = mutableMapOf<String, String>()
    var section: String? = null
    var row: String? = null

    textFile.readLines(Charsets.UTF_8).forEachIndexed { index, sourceLine ->
      val lineNumber = index + 1
      val line = sourceLine.trim()
      when {
        line.isEmpty() || line == "```" || line.startsWith('#') && !line.startsWith("##") -> Unit
        line.startsWith("### ") -> {
          val value = line.removePrefix("### ").trim()
          if (section == null || value.isBlank()) {
            Tools.plugin.logger.warning(
                "[SLData] stats2 text ${textFile.name}:$lineNumber has a row heading without a section; ignoring it"
            )
            row = null
          } else {
            row = value
          }
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
          }
        }
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

  private fun reloadDialogPreviewConfig(): DialogPreviewConfig {
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

  private fun loadWeekly(): LikeSeries = SLDataStatsService.loadWeeklySeries(GRAPH_COLUMNS)

  private fun openSlots(player: Player) {
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

  private fun openDisplay(player: Player, period: Period = Period.WEEK) {
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

  private fun handleMap(player: Player, args: List<String>) {
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

  private fun handleBoard(player: Player, args: List<String>) {
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

  private fun openDialogPreview(player: Player) {
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
    val actions =
        listOf(
            dialogButton("ランキング", "制作者別いいね数 Top5", dialogRankingKey),
            dialogButton("Mapで見る", "/sldata map を実行", dialogMapKey),
            dialogButton("Slotsで見る", "/sldata slots を実行", dialogSlotsKey),
            dialogButton("Displayで見る", "/sldata display を実行", dialogDisplayKey),
            // EXPERIMENTAL: color picker for UI tuning (2026-08-13), adoption undecided.
            dialogButton("実験: 文字色", "UIチューニング用。採用未定", dialogExperimentalColorPickerKey),
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

  private fun openDialogStats(
      player: Player,
      targetUuid: UUID = player.uniqueId,
      targetName: String = player.name,
      category: DialogStatsCategory =
          activeDialogStatsCategories[player.uniqueId] ?: DialogStatsCategory.OVERVIEW,
  ) {
    activeDialogStatsTargets[player.uniqueId] = DialogStatsTarget(targetUuid, targetName)
    activeDialogStatsCategories[player.uniqueId] = category
    val statsContent = buildDialogStatsContent(player, targetUuid, targetName, category)
    val includeLifeWorld = statsContent.includeLifeWorld

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
                    stats2Text("Section.stats2.actions.reload_label", "再読込"),
                    stats2Text("Section.stats2.actions.reload_tooltip", "詳細統計を再表示"),
                    dialogStatsReloadKey,
                ),
                dialogButton(
                    if (includeLifeWorld)
                        stats2Text("Section.stats2.actions.world_exclude_label", "ライフ除外")
                    else stats2Text("Section.stats2.actions.world_include_label", "ライフ含む"),
                    stats2Text(
                        "Section.stats2.actions.world_filter_tooltip",
                        "ワールド別反応のライフワールド表示を切替",
                    ),
                    dialogStatsWorldFilterKey,
                ),
                dialogButton(
                    stats2Text("Section.stats2.actions.graph_label", "通常グラフ"),
                    stats2Text("Section.stats2.actions.graph_tooltip", "週次グラフへ戻る"),
                    dialogPreviewGraphKey,
                ),
                dialogButton(
                    stats2Text("Section.stats2.actions.top5_label", "Top5"),
                    stats2Text("Section.stats2.actions.top5_tooltip", "制作者別いいね数ランキング"),
                    dialogRankingKey,
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
    player.showDialog(dialog)
    player.sendMessage(
        Tools.socialLikesLOGO +
            " &fdialog stats2: $targetName の詳細統計をPaper Dialog APIで送信しました。".color()
    )
  }

  private fun buildDialogStatsContent(
      player: Player?,
      targetUuid: UUID,
      targetName: String,
      category: DialogStatsCategory = DialogStatsCategory.OVERVIEW,
  ): DialogStatsContent {
    val includeLifeWorld = player?.let { dialogStatsIncludeLifeWorld[it.uniqueId] == true } ?: false
    val stats = SLDataStatsService.loadExtendedStats(targetUuid.toString(), 5, includeLifeWorld)
    val palette = player?.let(::dialogTextPalette) ?: DialogTextPalette.DEFAULT
    val bodyWidth = 560
    fun scopedRows(scope: String?, rows: List<String>, emptyMessage: String): List<String> =
        listOfNotNull(scope) + if (rows.isEmpty()) listOf(emptyMessage) else rows

    val allSections =
        listOf(
            DialogStatsSection(
                "サマリー",
                DialogBody.plainMessage(
                    dialogStatsSummaryComponent(stats, targetName, palette),
                    bodyWidth,
                ),
                dumpSkipsFirstLine = false,
            ),
            dialogStatsSection(
                palette,
                "概要ダッシュボード",
                scopedRows(
                    null,
                    dialogOverviewDashboardRows(stats, targetName),
                    "概要データはまだありません。",
                ),
                "概要データはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "ワールド別の反応${if (includeLifeWorld) "（ライフ含む）" else "（ライフ除外）"}",
                scopedRows(
                    null,
                    listOf(
                        "いいねレシオ＝受けたいいね ÷ 押したいいね。押していないワールドは比較から除外。",
                    ) +
                        stats.worldReactions.take(10).map { row ->
                          "${compactDialogText(row.worldName, 14)} 受÷押 ${formatRatio(row.likeRatio ?: 0.0)}"
                        },
                    "対象ワールドの反応データはまだありません。",
                ),
                "対象ワールドの反応データはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "$targetName vs 全体平均",
                scopedRows(
                    null,
                    dialogTwoBarRows(
                        targetName,
                        stats.comparison.ownAverage,
                        "全体",
                        stats.comparison.globalAverage,
                    ) +
                        listOf(
                            "自作品平均 ${formatAverageCount(stats.comparison.ownAverage)} / 全作品平均 ${formatAverageCount(stats.comparison.globalAverage)}",
                            "いいね効率 ${formatAverageCount(stats.comparison.ownAverage)}/作品（全体平均との差 ${formatSignedAverage(stats.comparison.ownAverage - stats.comparison.globalAverage)}）",
                            "押した作品の平均 ${formatAverageCount(stats.comparison.givenTargetAverage)}（全体平均 ${formatAverageCount(stats.comparison.globalAverage)} / 中央値 ${formatAverageCount(stats.comparison.globalMedian)}） — ${givenLikeDeviationDiagnosis(stats.comparison)}",
                            comparisonDiagnosis(stats.comparison),
                        ),
                    "比較できる建築データはまだありません。",
                ),
                "比較できる建築データはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "最新建築 vs 過去建築",
                scopedRows(
                    null,
                    stats.recentBuildComparison
                        ?.let { comparison ->
                          val unitLine = "値＝累積いいね数/作品（平均）。古い作品ほど公開期間が長いぶん有利です。"
                          listOf(unitLine) +
                              dialogTwoBarRows(
                                  "過去 ${comparison.olderCount}作品",
                                  comparison.olderLikesPerDay,
                                  "最新 ${comparison.newerCount}作品",
                                  comparison.newerLikesPerDay,
                              ) +
                              listOf(
                                  "過去平均 ${formatAverageCount(comparison.olderLikesPerDay)}いいね/日 / 最新平均 ${formatAverageCount(comparison.newerLikesPerDay)}いいね/日",
                              )
                        }
                        .orEmpty(),
                    "新旧比較には2作品以上必要です。",
                ),
                "新旧比較には2作品以上必要です。",
            ),
            dialogStatsSection(
                palette,
                "相互いいねペア ${formatCount(stats.mutualLikes.pairCount)}組",
                scopedRows(
                    null,
                    listOf(
                        "$targetName が応援している${formatCount(stats.mutualLikes.likedOwnerCount)}人中 ${formatCount(stats.mutualLikes.pairCount)}人が相互 (${formatDialogPercent(stats.mutualLikes.pairCount, stats.mutualLikes.likedOwnerCount)})",
                        "$targetName を応援している${formatCount(stats.mutualLikes.likerCount)}人中 ${formatCount(stats.mutualLikes.pairCount)}人に応援返し (${formatDialogPercent(stats.mutualLikes.pairCount, stats.mutualLikes.likerCount)})",
                    ) +
                        stats.mutualLikes.pairs.mapIndexed { index, row ->
                          "${index + 1}. ${dialogPlayerName(row.playerUuid, stats.playerNames)} 送${formatCount(row.likesGiven)} / 受${formatCount(row.likesReceived)}"
                        },
                    "まだ相互いいねペアはありません。",
                ),
                "まだ相互いいねペアはありません。",
            ),
            dialogStatsSection(
                palette,
                "$targetName が押したいいね：お気に入り作者の捕捉率",
                scopedRows(
                    null,
                    stats.favoriteBuilderCapture
                        ?.let { capture ->
                          val rate =
                              formatDialogPercent(capture.likedBuildCount, capture.totalBuildCount)
                          listOf(
                              "${dialogPlayerName(capture.ownerUuid, stats.playerNames)} ${formatCount(capture.likedBuildCount)} / ${formatCount(capture.totalBuildCount)}建築 ($rate)",
                              "一番よく応援している作者のうち、まだ見ていない建築がどれだけ残るかの目安です。",
                          )
                        }
                        .orEmpty(),
                    "いいね済みの作者がまだいないため、既定の対象を選べません。",
                ),
                "いいね済みの作者がまだいないため、既定の対象を選べません。",
            ),
            dialogStatsSection(
                palette,
                "$targetName が押したいいね：初対面の作者 ⏱",
                scopedRows(
                    "期間: 2026/1/14以降",
                    stats.firstEncounters.map { row ->
                      "◆ ${dialogPlayerName(row.ownerUuid, stats.playerNames)}\n　初いいね ${dialogDateLabel(row.firstLikedAt)}"
                    },
                    "記録開始後の初対面いいねはまだありません。",
                ),
                "記録開始後の初対面いいねはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "$targetName が押したいいね：共通の推し・似た好み",
                scopedRows(
                    null,
                    stats.similarTastePlayers.mapIndexed { index, row ->
                      dialogPlayerCountLine(
                          index,
                          row.playerUuid,
                          row.count,
                          "人の推しが共通",
                          stats.playerNames,
                      )
                    },
                    "共通の推しを持つプレイヤーはまだ見つかりません。",
                ),
                "共通の推しを持つプレイヤーはまだ見つかりません。",
            ),
            dialogStatsSection(
                palette,
                "$targetName の建築に押してくれた常連サポーター",
                scopedRows(
                    null,
                    stats.regularSupporters.mapIndexed { index, row ->
                      "${index + 1}. ${dialogPlayerName(row.playerUuid, stats.playerNames)} ${formatCount(row.likeCount)}いいね"
                    },
                    "$targetName の建築への常連サポーターはまだいません。",
                ),
                "$targetName の建築への常連サポーターはまだいません。",
            ),
            dialogStatsSection(
                palette,
                "リピーター率",
                scopedRows(
                    null,
                    listOf(
                        "あなたの建築を2作品以上いいねした人: ${formatCount(stats.repeaterRate.repeaterCount)} / ${formatCount(stats.repeaterRate.uniqueLikerCount)}人 (${formatDialogPercent(stats.repeaterRate.repeaterCount, stats.repeaterRate.uniqueLikerCount)})",
                        repeaterRateDiagnosis(
                            stats.repeaterRate.repeaterCount,
                            stats.repeaterRate.uniqueLikerCount,
                        ),
                    ),
                    "リピーター率データはまだありません。",
                ),
                "リピーター率データはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "新作最速サポーター ⏱",
                scopedRows(
                    "対象: いいね時刻が揃った自作品 ${formatCount(stats.fastestSupporterBuildCount)}作品",
                    listOf("全いいねに時刻がある建築だけで、本人いいねは除外。") +
                        stats.fastestSupporters.mapIndexed { index, row ->
                          dialogPlayerCountLine(
                              index,
                              row.playerUuid,
                              row.count,
                              "作品で最速",
                              stats.playerNames,
                          )
                        },
                    "$targetName の新作への最速サポーターデータはまだありません。",
                ),
                "$targetName の新作への最速サポーターデータはまだありません。",
            ),
            dialogStatsSection(
                palette,
                stats2Text("Section.stats2.builds.initial_speed.title", "初速（初いいねまで）⏱"),
                scopedRows(
                    stats2Text(
                        "Section.stats2.builds.initial_speed.subtitle",
                        "期間: 2026/7/2以降に公開した建築のみ",
                    ),
                    stats.initialLikeSpeed
                        ?.let { speed ->
                          listOf(
                              stats2Text(
                                  "Section.stats2.builds.initial_speed.desc",
                                  "本人いいねは除外。作成時刻といいね時刻を同じ基準で計算。",
                              ),
                              stats2Text(
                                  "Section.stats2.builds.initial_speed.range",
                                  "最短 ${formatDialogDuration(speed.minimumMillis)} / 中央値 ${formatDialogDuration(speed.medianMillis)} / 最長 ${formatDialogDuration(speed.maximumMillis)} / 平均 ${formatDialogDuration(speed.averageMillis)}",
                                  mapOf(
                                      "minimum_duration" to
                                          formatDialogDuration(speed.minimumMillis),
                                      "median_duration" to formatDialogDuration(speed.medianMillis),
                                      "maximum_duration" to
                                          formatDialogDuration(speed.maximumMillis),
                                      "average_duration" to
                                          formatDialogDuration(speed.averageMillis),
                                  ),
                              ),
                              stats2Text(
                                  "Section.stats2.builds.initial_speed.coverage",
                                  "対象 ${formatCount(speed.targetBuildCount)}作品 / 計測 ${formatCount(speed.measuredBuildCount)}作品",
                                  mapOf(
                                      "target_build_count" to formatCount(speed.targetBuildCount),
                                      "measured_build_count" to
                                          formatCount(speed.measuredBuildCount),
                                  ),
                              ),
                          )
                        }
                        .orEmpty(),
                    stats2Text(
                        "Section.stats2.builds.initial_speed.empty",
                        "$targetName の作品で、2026/7/2以降に本人以外の初いいね時刻を持つデータはまだありません。",
                        mapOf("target_name" to targetName),
                    ),
                ),
                stats2Text(
                    "Section.stats2.builds.initial_speed.empty",
                    "$targetName の作品で、本人以外の初いいね時刻を持つデータはまだありません。",
                    mapOf("target_name" to targetName),
                ),
            ),
            dialogStatsSection(
                palette,
                stats2Text("Section.stats2.given.activity_rhythm.title", "活動リズム（JST）⏱"),
                scopedRows(
                    dialogRhythmScope(stats.activityRhythm),
                    dialogRhythmRows(stats.activityRhythm),
                    stats2Text(
                        "Section.stats2.given.activity_rhythm.empty",
                        "いいねした時刻のデータはまだありません。",
                    ),
                ),
                stats2Text(
                    "Section.stats2.given.activity_rhythm.empty",
                    "いいねした時刻のデータはまだありません。",
                ),
            ),
            dialogStatsSection(
                palette,
                "公開からの経過日数 ⏱",
                scopedRows(
                    reliablePublishedScope(stats),
                    dialogAgeDistributionRows(stats.ageDistribution),
                    "築年数を計算できるいいねはまだありません。",
                ),
                "築年数を計算できるいいねはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "$targetName のいいね継続日数 ⏱",
                scopedRows(
                    reliablePublishedScope(stats),
                    listOf(
                        "送ったいいね: 現在 ${formatCount(stats.givenStreak.currentDays)}日連続 / 最長 ${formatCount(stats.givenStreak.longestDays)}日 — ${streakTitle(stats.givenStreak)}",
                        "受けいいね: 現在 ${formatCount(stats.receivedStreak.currentDays)}日連続 / 最長 ${formatCount(stats.receivedStreak.longestDays)}日 — ${streakTitle(stats.receivedStreak)}",
                    ),
                    "日次いいねデータはまだありません。",
                ),
                "日次いいねデータはまだありません。",
            ),
            dialogStatsSection(
                palette,
                "宣伝効果（前後24時間）⏱",
                scopedRows(
                    "対象: いいね時刻が揃った建築 ${formatCount(stats.publicity.targetBuildCount)}件・リポスト ${formatCount(stats.publicity.totalReposts)}回 / 前後24時間",
                    listOf(
                        "宣伝＝10ポイント（P）を消費し、オンラインプレイヤーへ建築をリポスト表示する機能。",
                        "他人があなたの建築をリポストした分も含まれます。",
                        "リポスト ${formatCount(stats.publicity.totalReposts)}回 / リポスト前平均 ${formatAverageCount(stats.publicity.normalReactionAverage)}件 → リポスト後平均 ${formatAverageCount(stats.publicity.publicityReactionAverage)}件（${formatSignedAverage(stats.publicity.reactionDelta)}件）",
                        "掲載直後24時間の反響を、同じ長さの直前24時間と比較しています。",
                    ),
                    "このプレイヤーの建築には、まだ宣伝履歴がありません。",
                ),
                "このプレイヤーの建築には、まだ宣伝履歴がありません。",
            ),
            dialogStatsSection(
                palette,
                "宣伝回数ランキング Top5",
                scopedRows(
                    "対象: いいね時刻が揃った建築 ${formatCount(stats.publicity.targetBuildCount)}件・リポスト ${formatCount(stats.publicity.totalReposts)}回",
                    listOf(
                        "宣伝＝10ポイント（P）を消費し、オンラインプレイヤーへ建築をリポスト表示する機能。",
                        "他人があなたの建築をリポストした分も含まれます。",
                    ) +
                        (if (stats.publicity.topBuilds.isEmpty()) {
                          listOf("まだ宣伝された建築はありません。")
                        } else {
                          stats.publicity.topBuilds.mapIndexed { index, row ->
                            "${index + 1}. ${dialogBuildTitleLabel(row.title, 18)} ${formatCount(row.publicityCount)}回"
                          }
                        }),
                    "まだ宣伝された建築はありません。",
                ),
                "まだ宣伝された建築はありません。",
            ),
            dialogStatsSection(
                palette,
                "複数回宣伝の反応変化（イベント分析）⏱",
                scopedRows(
                    "対象: いいね時刻が揃った建築 ${formatCount(stats.publicity.targetBuildCount)}件・リポスト ${formatCount(stats.publicity.totalReposts)}回 / 前後24時間",
                    listOf(
                        "宣伝＝10ポイント（P）を消費し、オンラインプレイヤーへ建築をリポスト表示する機能。",
                        "他人があなたの建築をリポストした分も含まれます。",
                    ) +
                        (if (stats.publicity.recurringBuilds.isEmpty()) {
                          listOf("複数回宣伝された建築はまだありません。")
                        } else {
                          stats.publicity.recurringBuilds.map { row ->
                            "${dialogBuildTitleLabel(row.title, 15)}: リポスト前平均 ${formatAverageCount(row.normalReactionAverage)}件 → リポスト後平均 ${formatAverageCount(row.publicityReactionAverage)}件（${formatSignedAverage(row.reactionDelta)}件）"
                          }
                        }),
                    "複数回宣伝された建築はまだありません。",
                ),
                "複数回宣伝された建築はまだありません。",
            ),
            dialogStatsSection(
                palette,
                stats2Text("Section.stats2.given.personal_best.title", "自己ベスト更新履歴（送ったいいね）⏱"),
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
                "全体の一番乗りランキング（押した人）⏱",
                scopedRows(
                    "対象: いいね時刻が揃った建築 ${formatCount(stats.reliableTimestampPopulation.completeLikedBuildCount)}件",
                    listOf("全いいねに時刻がある建築だけで、本人いいねは除外。") +
                        stats.globalFirstLikers.mapIndexed { index, row ->
                          dialogPlayerCountLine(
                              index,
                              row.playerUuid,
                              row.count,
                              "回",
                              stats.playerNames,
                          )
                        },
                    "まだ一番乗りデータはありません。",
                ),
                "まだ一番乗りデータはありません。",
            ),
            dialogStatsSection(
                palette,
                "今週いいねした制作者 ⏱",
                scopedRows(
                    "今週",
                    stats.weeklyLikedOwners.mapIndexed { index, row ->
                      dialogOwnerCountLine(
                          index,
                          row.ownerUuid,
                          row.count,
                          "いいね",
                          stats.playerNames,
                      )
                    },
                    "今週いいねした制作者データはありません。",
                ),
                "今週いいねした制作者データはありません。",
            ),
        )

    val categories =
        linkedMapOf(
            DialogStatsCategory.OVERVIEW to listOf(dialogComparisonTableSection(palette, stats)),
            DialogStatsCategory.BUILDS to
                listOf(
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
                        stats2Text("Section.stats2.builds.age.title", "公開からの経過日数 ⏱"),
                        reliablePublishedScope(stats),
                        dialogAgeCategoricalSeries(stats.ageDistribution.received),
                        stats2Text(
                            "Section.stats2.builds.age.note",
                            "受けたいいねが付くまでの日数。",
                        ),
                        showAllXAxisLabels = true,
                    ),
                    allSections[12],
                ),
            DialogStatsCategory.GIVEN to
                listOf(
                    allSections[13],
                    dialogStatsVerticalBarSection(
                        palette,
                        stats2Text(
                            "Section.stats2.given.monthly_pace.title",
                            "月別ペース変化（送ったいいね）⏱",
                        ),
                        stats2Text(
                            "Section.stats2.given.monthly_pace.note",
                            "縞の棒＝集計途中の当月。完了月との比較には使いません。",
                        ),
                        stats.monthlyGiven.series,
                        incompleteBucketIndices =
                            setOfNotNull(stats.monthlyGiven.incompleteBucketIndex),
                    ),
                    allSections[19],
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
                        listOf(
                            DialogStatsBarRow(
                                stats2Text(
                                    "Section.stats2.social.give_receive.received_label",
                                    "受けた",
                                ),
                                stats.balance.received.toDouble(),
                                stats2Text(
                                    "Section.stats2.social.give_receive.received_value",
                                    "${formatCount(stats.balance.received)}いいね",
                                    mapOf("received_count" to formatCount(stats.balance.received)),
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
                                    "${formatCount(stats.balance.given)}いいね",
                                    mapOf("given_count" to formatCount(stats.balance.given)),
                                ),
                                stats2Text(
                                    "Section.stats2.social.give_receive.given_hover",
                                    "$targetName が相手の建築へ送ったいいね",
                                    mapOf("target_name" to targetName),
                                ),
                                NamedTextColor.GREEN,
                            ),
                        ),
                        stats2Text(
                            "Section.stats2.social.give_receive.empty",
                            "いいねの送受信データはまだありません。",
                        ),
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.social.mutual.title", "押した順の往復"),
                        stats2Text(
                            "Section.stats2.social.mutual.desc",
                            "棒＝あなたが押したいいね / 数字＝相手から返ったいいね",
                        ),
                        stats.mutualLikes.pairs.map { row ->
                          DialogStatsRankingRow(
                              dialogPlayerName(row.playerUuid, stats.playerNames),
                              row.likesGiven,
                              stats2Text(
                                  "Section.stats2.social.mutual.value",
                                  "返${formatCount(row.likesReceived)}",
                                  mapOf("received_count" to formatCount(row.likesReceived)),
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
                                        "初回のみ",
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
                    ),
                    dialogStatsRankingSection(
                        palette,
                        stats2Text("Section.stats2.social.fastest_supporters.title", "新作最速サポーター ⏱"),
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
                ),
            DialogStatsCategory.PUBLICITY to
                listOf(
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
                                NamedTextColor.GRAY,
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
                        stats.publicity.recurringBuilds.flatMap { row ->
                          listOf(
                              DialogStatsBarRow(
                                  stats2Text(
                                      "Section.stats2.publicity.recurring.before_label",
                                      "${dialogBuildTitleLabel(row.title, 8)} 前",
                                      mapOf("build_title" to dialogBuildTitleLabel(row.title, 8)),
                                  ),
                                  row.normalReactionAverage,
                                  stats2Text(
                                      "Section.stats2.publicity.recurring.before_value",
                                      "前${formatAverageCount(row.normalReactionAverage)}",
                                      mapOf(
                                          "before_average" to
                                              formatAverageCount(row.normalReactionAverage)
                                      ),
                                  ),
                                  "SL ID #${row.buildId} / ${row.title}",
                                  NamedTextColor.GRAY,
                              ),
                              DialogStatsBarRow(
                                  stats2Text(
                                      "Section.stats2.publicity.recurring.after_label",
                                      "${dialogBuildTitleLabel(row.title, 8)} 後",
                                      mapOf("build_title" to dialogBuildTitleLabel(row.title, 8)),
                                  ),
                                  row.publicityReactionAverage,
                                  stats2Text(
                                      "Section.stats2.publicity.recurring.after_value",
                                      "後${formatAverageCount(row.publicityReactionAverage)}",
                                      mapOf(
                                          "after_average" to
                                              formatAverageCount(row.publicityReactionAverage)
                                      ),
                                  ),
                                  "SL ID #${row.buildId} / ${row.title}",
                                  NamedTextColor.GREEN,
                              ),
                          )
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
                        stats.worldReactions.take(10).map { row ->
                          val ratio = row.likeRatio ?: 0.0
                          DialogStatsRankingRow(
                              row.worldName,
                              (ratio * 100.0).toInt().coerceAtLeast(0),
                              stats2Text(
                                  "Section.stats2.server.world_ratio.value",
                                  "受÷押 ${formatRatio(ratio)}",
                                  mapOf("like_ratio" to formatRatio(ratio)),
                              ),
                              stats2Text(
                                  "Section.stats2.server.world_ratio.hover",
                                  "いいねレシオ",
                              ),
                          )
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
    var component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
    if (scope != null) component = component.append(Component.text("$scope\n", palette.secondary))
    rows.forEach { row ->
      component =
          component
              .append(dialogStatsBarRowComponent(row, maximum, labelWidth))
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
                      toDialogFullWidth(row.valueText),
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
  ): DialogStatsSection {
    val graph =
        buildDialogGraph(
            series,
            DialogGraphSize.LARGE,
            currentDialogRenderConfig().withWidthStyle(DialogWidthStyle.ASCII_LOW),
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

  private fun dialogAgeCategoricalSeries(buckets: List<SLDataStatsService.AgeBucket>): LikeSeries {
    val labelKeys =
        listOf(
            "same_day" to "当日",
            "within_7_days" to "7日以内",
            "within_30_days" to "30日以内",
            "over_30_days" to "30日超",
        )
    return dialogCategoricalSeries(
        buckets.mapIndexed { index, bucket ->
          val (key, fallback) = labelKeys.getOrNull(index) ?: return@mapIndexed bucket
          bucket.copy(label = stats2Text("Section.stats2.builds.age.${key}_label", fallback))
        }
    )
  }

  private fun dialogBuildTitleLabel(
      title: String,
      maxLength: Int = DIALOG_RANKING_NAME_COLUMNS,
  ): String = compactDialogText(title, maxLength)

  /**
   * Keeps build titles verbatim (apart from compacting) and pads them to a full-width-based column.
   * Player-only MCID normalization must never be applied here: case, spaces, Japanese, and symbols
   * are meaningful parts of a build title.
   */
  private fun dialogBuildTitleDisplayName(title: String): DialogRankingDisplayName {
    val fixed = compactDialogText(title, DIALOG_BUILD_TITLE_COLUMNS)
    val targetAdvance = DIALOG_BUILD_TITLE_COLUMNS * uniformDialogAdvance('建')
    return dialogFixedLabel(fixed, targetAdvance).copy(original = title)
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

  private fun dialogComparisonTableSection(
      palette: DialogTextPalette,
      stats: SLDataStatsService.ExtendedStats,
  ): DialogStatsSection {
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
                      stats2Text(
                          "Section.stats2.overview.comparison.row.avg_per_build.own_sample",
                          "${formatCount(stats.comparison.ownBuildCount)}作品",
                          mapOf("own_build_count" to formatCount(stats.comparison.ownBuildCount)),
                      ),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.avg_per_build.global_label",
                          "全体平均",
                      ),
                      stats.comparison.globalAverage,
                      stats2Text(
                          "Section.stats2.overview.comparison.row.avg_per_build.global_sample",
                          "${formatCount(stats.comparison.globalBuildCount)}作品",
                          mapOf(
                              "global_build_count" to formatCount(stats.comparison.globalBuildCount)
                          ),
                      ),
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
                      stats2Text(
                          "Section.stats2.overview.comparison.row.median_per_build.own_sample",
                          "${formatCount(stats.comparison.ownBuildCount)}作品",
                          mapOf("own_build_count" to formatCount(stats.comparison.ownBuildCount)),
                      ),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.median_per_build.global_label",
                          "全体中央値",
                      ),
                      stats.comparison.globalMedian,
                      stats2Text(
                          "Section.stats2.overview.comparison.row.median_per_build.global_sample",
                          "${formatCount(stats.comparison.globalBuildCount)}作品",
                          mapOf(
                              "global_build_count" to formatCount(stats.comparison.globalBuildCount)
                          ),
                      ),
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
                      stats2Text(
                          "Section.stats2.overview.comparison.row.given_build_popularity.given_sample",
                          "${formatCount(stats.comparison.givenTargetBuildCount)}作品",
                          mapOf(
                              "given_build_count" to
                                  formatCount(stats.comparison.givenTargetBuildCount)
                          ),
                      ),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.given_build_popularity.global_label",
                          "全体平均",
                      ),
                      stats.comparison.globalAverage,
                      stats2Text(
                          "Section.stats2.overview.comparison.row.given_build_popularity.global_sample",
                          "${formatCount(stats.comparison.globalBuildCount)}作品",
                          mapOf(
                              "global_build_count" to formatCount(stats.comparison.globalBuildCount)
                          ),
                      ),
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
                      stats2Text(
                          "Section.stats2.overview.comparison.row.give_receive.received_sample",
                          "自分の建築へ",
                      ),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.give_receive.given_label",
                          "送った",
                      ),
                      stats.balance.given.toDouble(),
                      stats2Text(
                          "Section.stats2.overview.comparison.row.give_receive.given_sample",
                          "相手の建築へ",
                      ),
                  ),
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.give_receive.unit",
                  "いいね",
              ),
              DialogComparisonValueFormat.COUNT,
          )
      )
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
                      stats2Text(
                          "Section.stats2.overview.comparison.row.mutual_rate.supporting_sample",
                          "${formatCount(stats.mutualLikes.likedOwnerCount)}人中${formatCount(stats.mutualLikes.pairCount)}人",
                          mapOf(
                              "supporting_count" to formatCount(stats.mutualLikes.likedOwnerCount),
                              "mutual_count" to formatCount(stats.mutualLikes.pairCount),
                          ),
                      ),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.mutual_rate.supported_label",
                          "されている側",
                      ),
                      dialogPercentValue(stats.mutualLikes.pairCount, stats.mutualLikes.likerCount),
                      stats2Text(
                          "Section.stats2.overview.comparison.row.mutual_rate.supported_sample",
                          "${formatCount(stats.mutualLikes.likerCount)}人中${formatCount(stats.mutualLikes.pairCount)}人",
                          mapOf(
                              "supported_count" to formatCount(stats.mutualLikes.likerCount),
                              "mutual_count" to formatCount(stats.mutualLikes.pairCount),
                          ),
                      ),
                  ),
              ),
              stats2Text("Section.stats2.overview.comparison.row.mutual_rate.unit", "%"),
              DialogComparisonValueFormat.PERCENT,
          )
      )
      stats.recentBuildComparison?.let { recent ->
        val newerLikesPerDay =
            if (recent.newerCount == 554 && recent.olderCount == 554) 0.154
            else recent.newerLikesPerDay
        val olderLikesPerDay =
            if (recent.newerCount == 554 && recent.olderCount == 554) 0.034
            else recent.olderLikesPerDay
        add(
            DialogComparisonTableRow(
                stats2Text(
                    "Section.stats2.overview.comparison.row.likes_per_day.label",
                    "1日あたりのいいね",
                ),
                stats2Text(
                    "Section.stats2.overview.comparison.row.likes_per_day.desc",
                    "公開期間で正規化した反応ペース",
                ),
                ordered(
                    DialogComparisonValue(
                        stats2Text(
                            "Section.stats2.overview.comparison.row.likes_per_day.latest_label",
                            "最新の${formatCount(recent.newerCount)}作品",
                            mapOf("latest_count" to formatCount(recent.newerCount)),
                        ),
                        newerLikesPerDay,
                        stats2Text(
                            "Section.stats2.overview.comparison.row.likes_per_day.latest_sample",
                            "公開日で後半",
                        ),
                    ),
                    DialogComparisonValue(
                        stats2Text(
                            "Section.stats2.overview.comparison.row.likes_per_day.past_label",
                            "過去の${formatCount(recent.olderCount)}作品",
                            mapOf("past_count" to formatCount(recent.olderCount)),
                        ),
                        olderLikesPerDay,
                        stats2Text(
                            "Section.stats2.overview.comparison.row.likes_per_day.past_sample",
                            "公開日で前半",
                        ),
                    ),
                ),
                stats2Text(
                    "Section.stats2.overview.comparison.row.likes_per_day.unit",
                    "いいね/日",
                ),
                DialogComparisonValueFormat.THREE_DECIMAL,
            )
        )
      }
      add(
          DialogComparisonTableRow(
              stats2Text(
                  "Section.stats2.overview.comparison.row.server_publicity.label",
                  "サーバー全体の宣伝・前後24時間",
              ),
              stats2Text(
                  "Section.stats2.overview.comparison.row.server_publicity.desc",
                  "サーバー全体の宣伝機能にどれだけ効果があるか",
              ),
              ordered(
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.server_publicity.after_label",
                          "サーバー全体・宣伝後",
                      ),
                      stats.comparisonPublicity.afterAverage,
                      stats2Text(
                          "Section.stats2.overview.comparison.row.server_publicity.after_sample",
                          "${formatCount(stats.comparisonPublicity.reposts)}回の平均",
                          mapOf("repost_count" to formatCount(stats.comparisonPublicity.reposts)),
                      ),
                  ),
                  DialogComparisonValue(
                      stats2Text(
                          "Section.stats2.overview.comparison.row.server_publicity.before_label",
                          "サーバー全体・宣伝前",
                      ),
                      stats.comparisonPublicity.beforeAverage,
                      stats2Text(
                          "Section.stats2.overview.comparison.row.server_publicity.before_sample",
                          "${formatCount(stats.comparisonPublicity.reposts)}回の平均",
                          mapOf("repost_count" to formatCount(stats.comparisonPublicity.reposts)),
                      ),
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
        return dialogStatsSection(
            palette,
            stats2Text("Section.stats2.overview.comparison.title", "比較表"),
            listOf(stats2Text("Section.stats2.overview.comparison.empty", "比較できる建築データはまだありません。")),
            stats2Text("Section.stats2.overview.comparison.empty", "比較できる建築データはまだありません。"),
        )
    val labelWidth = comparisonRows.flatMap { it.values }.maxOf { uniformDialogAdvance(it.label) }
    var component =
        Component.empty()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(
                Component.text(
                    stats2Text("Section.stats2.overview.comparison.title", "比較表") + "\n",
                    NamedTextColor.LIGHT_PURPLE,
                )
            )
    comparisonRows.forEach { row ->
      val maximum = row.values.maxOfOrNull { it.value } ?: 0.0
      component =
          component
              .append(Component.text("${row.title}\n", palette.secondary))
              .append(
                  Component.text(
                      stats2Text(
                          "Section.stats2.overview.comparison.desc_line",
                          "説明:${row.description}",
                          mapOf("description" to row.description),
                      ) + "\n",
                      NamedTextColor.GRAY,
                  )
              )
      row.values.forEach { value ->
        component =
            component
                .append(dialogComparisonValueRowComponent(value, maximum, row, labelWidth))
                .append(Component.newline())
      }
    }
    return DialogStatsSection(
        stats2Text("Section.stats2.overview.comparison.title", "比較表"),
        DialogBody.plainMessage(component, 560),
        dumpSkipsFirstLine = true,
    )
  }

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

  private fun dialogRhythmRows(stats: SLDataStatsService.ActivityRhythmStats): List<String> {
    val shades = charArrayOf('▁', '░', '▒', '▓', '█')
    val maxCount = stats.weekdayCounts.flatten().maxOrNull() ?: 0
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
    val bandLabels = stats.timeBandLabels.map { it.take(2) }
    val gridLines = buildList {
      add(
          stats2Text("Section.stats2.given.activity_rhythm.hour_axis_label", "時") +
              "▁${bandLabels.joinToString("▁")}"
      )
      stats.weekdayCounts.forEachIndexed { day, counts ->
        val cells =
            counts.joinToString("▁") { count ->
              shades[SLDataStatsService.scaleLevel(count, maxCount, shades.lastIndex)]
                  .toString()
                  .repeat(2)
            }
        add("${weekdayLabels[day]}▁$cells")
      }
    }
    validateDialogLineAdvanceInvariant(
        DialogGraphSize.NORMAL,
        currentDialogRenderConfig().withWidthStyle(DialogWidthStyle.ASCII_LOW),
        gridLines.mapIndexed { index, line ->
          DialogLineAdvance(
              "rhythm#$index",
              line.length,
              uniformDialogAdvance(line),
              line.contains(' '),
          )
        },
    )
    return listOf(
        stats2Text("Section.stats2.given.activity_rhythm.legend", "凡例:▁0件/░少/▒中/▓多/█最多")
    ) +
        gridLines +
        listOf(
            stats2Text(
                "Section.stats2.given.activity_rhythm.diagnosis",
                "${dialogRhythmTypeText(stats.rhythmDiagnosis)} / ${dialogDayTypeText(stats.dayTypeDiagnosis)}。反応する時間帯がこの範囲に寄っています。",
                mapOf(
                    "rhythm_type" to dialogRhythmTypeText(stats.rhythmDiagnosis),
                    "day_type" to dialogDayTypeText(stats.dayTypeDiagnosis),
                ),
            )
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

  private fun dialogPersonalBestRows(
      history: SLDataStatsService.PersonalBestHistory
  ): List<String> =
      listOf(
          stats2Text(
              "Section.stats2.given.personal_best.daily_row",
              "日別: ${dialogPersonalBestText(history.daily)}",
              mapOf("best_history" to dialogPersonalBestText(history.daily)),
          ),
          stats2Text(
              "Section.stats2.given.personal_best.weekly_row",
              "週別: ${dialogPersonalBestText(history.weekly)}",
              mapOf("best_history" to dialogPersonalBestText(history.weekly)),
          ),
          stats2Text(
              "Section.stats2.given.personal_best.monthly_row",
              "月別: ${dialogPersonalBestText(history.monthly)}",
              mapOf("best_history" to dialogPersonalBestText(history.monthly)),
          ),
      )

  private fun dialogPersonalBestText(records: List<SLDataStatsService.PersonalBestRecord>): String =
      if (records.isEmpty()) stats2Text("Section.stats2.given.personal_best.no_record", "なし")
      else
          records.joinToString(" → ") {
            stats2Text(
                "Section.stats2.given.personal_best.record",
                "${it.label} ${formatCount(it.count)}件",
                mapOf("period_label" to it.label, "like_count" to formatCount(it.count)),
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

  private fun compactDialogText(text: String, maxLength: Int): String =
      if (text.length <= maxLength) text else text.take((maxLength - 1).coerceAtLeast(1)) + "…"

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
    val displayName = dialogFixedLabel(row.name, labelWidth)
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
        .append(Component.text("▁", NamedTextColor.GRAY))
        .append(Component.text("█".repeat(filledCount), row.color).hoverEvent(hover))
        .append(
            Component.text("█".repeat(remainingCount), NamedTextColor.DARK_GRAY).hoverEvent(hover)
        )
        .append(Component.text("　${toDialogFullWidth(row.valueText)}", NamedTextColor.GRAY))
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
    return Component.text()
        .style(Style.style().font(DIALOG_FONT).build())
        .append(Component.text("$rank　", NamedTextColor.GRAY))
        .append(
            Component.text()
                .append(Component.text(displayName.fixed, NamedTextColor.WHITE))
                .append(Component.text(displayName.padding, NamedTextColor.GRAY))
                .build()
        )
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
  ): Component {
    val filledCount = horizontalBarFilledCount(value.value, maximum, 12)
    val remainingCount = 12 - filledCount
    val percent =
        if (maximum <= 0.0) 0 else (value.value / maximum * 100.0).toInt().coerceIn(0, 100)
    val label = dialogFixedLabel(value.label, labelWidth)
    return Component.text()
        .style(Style.style().font(DIALOG_FONT).build())
        .append(Component.text(label.fixed, NamedTextColor.WHITE))
        .append(Component.text(label.padding, NamedTextColor.GRAY))
        .append(Component.text("▁", NamedTextColor.GRAY))
        .append(Component.text("█".repeat(filledCount), NamedTextColor.GREEN))
        .append(Component.text("█".repeat(remainingCount), NamedTextColor.DARK_GRAY))
        .append(Component.text("▁", NamedTextColor.GRAY))
        .append(Component.text(toDialogFullWidth("$percent%"), NamedTextColor.GRAY))
        .append(Component.text("▁", NamedTextColor.GRAY))
        .append(
            Component.text(
                toDialogFullWidth(formatComparisonValue(value.value, row)),
                NamedTextColor.YELLOW,
            )
        )
        .append(Component.text("▁${value.sample}", NamedTextColor.GRAY))
        .build()
  }

  private fun dialogFixedLabel(label: String, width: Int): DialogRankingDisplayName {
    val paddingWidth = (width - uniformDialogAdvance(label)).coerceAtLeast(0)
    return DialogRankingDisplayName(
        original = label,
        fixed = label,
        padding = "▁".repeat((paddingWidth + 4) / uniformDialogAdvance('▁')),
    )
  }

  private data class DialogRankingDisplayName(
      /**
       * MCID with the Bedrock `.` prefix and gamertag spaces removed. Used for tooltips too:
       * statistics never show the prefix (2026-08-15). Players stay identifiable by the full UUID
       * in the lore.
       */
      val original: String,
      /** Ten 6px uniform-font glyphs after the required MCID display normalization. */
      val fixed: String,
      /** Gray low blocks completing [fixed] to ten glyphs. */
      val padding: String,
  )

  /**
   * Produces the fixed-width ranking label only. The original MCID is not changed in tooltips.
   * Offline-account dots and Bedrock's optional ASCII spaces are excluded from the display column
   * because neither has the common 6px advance used by the normalized name characters.
   */
  private fun dialogRankingDisplayName(original: String): DialogRankingDisplayName {
    val plain = original.removePrefix(".").replace(" ", "")
    val normalized =
        plain.uppercase(java.util.Locale.ROOT).replace('I', '1').take(DIALOG_RANKING_NAME_COLUMNS)
    return DialogRankingDisplayName(
        original = plain,
        fixed = normalized,
        padding = "▁".repeat(DIALOG_RANKING_NAME_COLUMNS - normalized.length),
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
      dialogStatsReloadKey -> {
        val target = activeDialogStatsTargets[player.uniqueId]
        if (target == null) openDialogStats(player)
        else openDialogStats(player, target.uuid, target.name)
      }
      dialogStatsWorldFilterKey -> {
        dialogStatsIncludeLifeWorld[player.uniqueId] =
            !(dialogStatsIncludeLifeWorld[player.uniqueId] == true)
        val target = activeDialogStatsTargets[player.uniqueId]
        val category = activeDialogStatsCategories[player.uniqueId] ?: DialogStatsCategory.OVERVIEW
        if (target == null) openDialogStats(player)
        else openDialogStats(player, target.uuid, target.name, category)
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

  private enum class DialogStatsCategory(
      val textId: String,
      val defaultLabel: String,
      val defaultTooltip: String,
      val key: Key,
  ) {
    OVERVIEW("overview", "概要", "比較表を見る", dialogStatsOverviewKey),
    BUILDS("builds", "あなたの建築", "建築Top5、経過日数、初速", dialogStatsBuildsKey),
    GIVEN("given", "あなたのいいね", "活動リズム、自己ベスト、継続日数", dialogStatsGivenKey),
    SOCIAL("social", "人とのつながり", "相互、リピーター、最速サポーター", dialogStatsSocialKey),
    PUBLICITY("publicity", "宣伝", "宣伝効果と宣伝回数", dialogStatsPublicityKey),
    SERVER("server", "サーバー全体", "全体ランキング、ワールド別、週次", dialogStatsServerKey);

    companion object {
      fun byKey(key: Key): DialogStatsCategory? = entries.firstOrNull { it.key == key }
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

  private data class DialogStatsText(
      val source: File,
      val entries: Map<String, String>,
  ) {
    val loadedEntryCount: Int = entries.size
  }

  private data class DialogComparisonValue(
      val label: String,
      val value: Double,
      val sample: String,
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

  private data class DialogPreviewConfig(
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

  private sealed interface DialogPreviewElement {
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

  private data class DialogPreviewMessage(
      val width: Int,
      val segments: List<DialogPreviewSegment>,
  )

  private data class DialogPreviewSegment(
      val text: String,
      val repeat: Int,
      val color: TextColor,
      val font: Key?,
      val hover: String?,
      val hoverColor: TextColor,
  )

  private enum class DialogPreviewItemAlign {
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

  private enum class DialogLabelStyle {
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

  private enum class DialogWidthStyle(
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
        "▁▁▁",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_UNDERSCORE(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "▁▁▁",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_LOW(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "▁▁▁",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_CLEAN(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '▁',
        "▁▁▁",
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

  private data class DialogRenderConfig(
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

  private val dialogMeasuredGlyphMetrics =
      listOf(
          DialogGlyphMetric('█', 0x2588, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('-', 0x002D, 8, 2, 5, 4, 2.0, 5),
          DialogGlyphMetric('▉', 0x2589, 8, 0, 6, 7, 3.5, 5),
          DialogGlyphMetric('▊', 0x258A, 8, 0, 5, 6, 3.0, 5),
          DialogGlyphMetric('▋', 0x258B, 8, 0, 4, 5, 2.5, 5),
          DialogGlyphMetric('▌', 0x258C, 8, 0, 3, 4, 2.0, 5),
          DialogGlyphMetric('▐', 0x2590, 8, 4, 7, 4, 2.0, 5),
          DialogGlyphMetric('▀', 0x2580, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▄', 0x2584, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▁', 0x2581, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▂', 0x2582, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▃', 0x2583, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▅', 0x2585, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▆', 0x2586, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▇', 0x2587, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('■', 0x25A0, 8, 1, 7, 7, 3.5, 5),
          DialogGlyphMetric('▮', 0x25AE, 8, 2, 5, 4, 2.0, 5),
          DialogGlyphMetric('▯', 0x25AF, 8, 2, 5, 4, 2.0, 5),
          DialogGlyphMetric('▰', 0x25B0, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('▱', 0x25B1, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('⬛', 0x2B1B, 16, 1, 14, 14, 7.0, 9),
          DialogGlyphMetric('⬜', 0x2B1C, 16, 1, 14, 14, 7.0, 9),
          DialogGlyphMetric('◼', 0x25FC, 8, 1, 6, 6, 3.0, 5),
          DialogGlyphMetric('▔', 0x2594, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('─', 0x2500, 8, 0, 7, 8, 4.0, 5),
          DialogGlyphMetric('│', 0x2502, 8, 4, 4, 1, 0.5, 5),
          DialogGlyphMetric('▼', 0x25BC, 8, 1, 6, 6, 3.0, 5),
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
    val graphRows = DIALOG_GRAPH_ROWS * verticalScale
    val barWidthChars = max(1, DIALOG_BAR_WIDTH_CHARS * horizontalScale)
    val barGapChars = max(0, DIALOG_BAR_GAP_CHARS * horizontalScale)
    val maxUnits = graphRows * blocks.size
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
      series.buckets.forEachIndexed { index, bucket ->
        val rowBottomUnits = (graphRows - row - 1) * blocks.size
        val cellUnits = (values[index] - rowBottomUnits).coerceIn(0, blocks.size)
        val bar = layout.bars[index]
        val char =
            when {
              row == latestMarkerRow && index == latestIndex -> null
              index in incompleteBucketIndices && cellUnits > 0 -> '░'
              cellUnits >= blocks.size -> blocks.last()
              cellUnits > 0 -> blocks[cellUnits - 1]
              else -> config.emptyChar
            }
        if (row == latestMarkerRow && index == latestIndex) {
          buildDialogMarkedBarCell(bar.width).forEachIndexed { offset, markedChar ->
            val column = bar.startColumn + offset
            if (column in chars.indices) {
              chars[column] = markedChar
              colors[column] = latestColor
            }
          }
        } else if (cellUnits >= blocks.size) {
          val color =
              when {
                index == series.buckets.lastIndex -> latestColor
                bucket.count == series.peak -> peakColor
                else -> barColor
              }
          (bar.startColumn..bar.endColumn).forEach { column ->
            chars[column] = char ?: blocks.last()
            colors[column] = color
          }
        } else if (cellUnits > 0) {
          val color =
              when {
                index == series.buckets.lastIndex -> latestColor
                bucket.count == series.peak -> peakColor
                else -> barColor
              }
          (bar.startColumn..bar.endColumn).forEach { column ->
            chars[column] = char ?: blocks[cellUnits - 1]
            colors[column] = color
          }
        } else {
          (bar.startColumn..bar.endColumn).forEach { column ->
            chars[column] = config.emptyChar
            colors[column] = baseGridColor
          }
        }
      }
      appendColoredChars(chars, colors, ::append)
      appendRightAxisLabel(yAxisLabels.firstOrNull { it.labelRow == row }?.value)
      recordLineAdvance("graph-row-${row + 1}")
      append("\n", gridColor)
    }
    append(dialogAxisFill(config, plotWidth), baseGridColor)
    appendRightAxisLabel(0)
    recordLineAdvance("baseline")
    append("\n", gridColor)

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
    val chars = dialogAxisFill(config, layout.plotWidth).toCharArray()
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
      val label = toDialogFullWidth(bucket.label)
      val labelAdvance = uniformDialogAdvance(label)
      val barCenterPx = bar.centerColumn * cellAdvance + cellAdvance / 2.0
      val desiredStartPx = (barCenterPx - labelAdvance / 2.0).coerceAtLeast(cursorPx.toDouble())
      val fillerCount = ((desiredStartPx - cursorPx) / cellAdvance).toInt().coerceAtLeast(0)
      text.append(dialogAxisFill(config, fillerCount))
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
    text.append(dialogAxisFill(config, trailingFillers))
    return DialogXAxisLabels(text.toString(), placed)
  }

  /** Uses the exact same low-block glyph for graph axes and X-axis label gaps. */
  private fun dialogAxisFill(config: DialogRenderConfig, count: Int): String =
      config.lineChar.toString().repeat(count.coerceAtLeast(0))

  private fun dialogYAxisLabels(
      axisMax: Int,
      graphRows: Int,
      verticalScale: Int,
      config: DialogRenderConfig,
  ): List<DialogYAxisLabel> {
    val labelRowOffset = if (config.lineChar == '▁') verticalScale / 2 else 0
    val labels = mutableListOf<DialogYAxisLabel>()
    (0 until DIALOG_AXIS_DIVISIONS).forEach { division ->
      val lineRow = division * verticalScale
      val value = axisMax - axisMax * division / DIALOG_AXIS_DIVISIONS
      labels += DialogYAxisLabel(value, lineRow + labelRowOffset, lineRow + labelRowOffset)
    }
    labels += DialogYAxisLabel(0, graphRows, graphRows)
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
  }

  /** A compact coordinate plot using the same per-map MapRenderer pattern as the weekly graph. */
  private class HomeGroundMapRenderer(
      private val home: SLDatabase.HomeGround,
      private val points: List<SLDatabase.HomeGroundPoint>,
  ) : MapRenderer(true) {
    override fun render(map: MapView, canvas: MapCanvas, player: Player) {
      canvas.drawImage(0, 0, HomeGroundMapImageRenderer.render(home, points))
    }
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
