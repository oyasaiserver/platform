package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.stats.SLDataStatsService
import com.github.srain3.sociallikes.stats.SLDataStatsService.LikeSeries
import com.github.srain3.sociallikes.stats.SLDataStatsService.Period
import io.papermc.paper.connection.PlayerGameConnection
import io.papermc.paper.dialog.Dialog
import io.papermc.paper.event.player.PlayerCustomClickEvent
import io.papermc.paper.registry.data.dialog.ActionButton
import io.papermc.paper.registry.data.dialog.DialogBase
import io.papermc.paper.registry.data.dialog.action.DialogAction
import io.papermc.paper.registry.data.dialog.body.DialogBody
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
import java.time.ZoneId
import java.util.UUID
import kotlin.math.abs
import kotlin.math.ceil
import kotlin.math.max
import net.kyori.adventure.key.Key
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.Style
import net.kyori.adventure.text.format.TextColor
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
  private const val DIALOG_RANK_NAME_COLUMNS = 16
  private const val DIALOG_BAR_WIDTH_CHARS = 1
  private const val DIALOG_BAR_GAP_CHARS = 3
  private const val DIALOG_NBSP = '\u00A0'
  private const val DIALOG_FULL_SPACE = '\u3000'
  private const val DIALOG_CONFIG_FILE_NAME = "sldata-dialog.yml"
  private const val DIALOG_PREVIEW_FILE_NAME = "sldata-dialog-preview.yml"
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
  private val activeDialogStatsTargets = mutableMapOf<UUID, DialogStatsTarget>()
  private val dialogStatsIncludeLifeWorld = mutableMapOf<UUID, Boolean>()
  @Volatile private var dialogRenderConfig: DialogRenderConfig? = null
  @Volatile private var dialogPreviewConfig: DialogPreviewConfig? = null
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
  private val dialogStatsKey = Key.key("sociallikes3", "sldata_stats2")
  private val dialogStatsReloadKey = Key.key("sociallikes3", "sldata_stats2_reload")
  private val dialogStatsWorldFilterKey = Key.key("sociallikes3", "sldata_stats2_world_filter")
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
  // EXPERIMENTAL: per-player display-only palette state; it must not affect statistics or data loading.
  private val dialogExperimentalPalettes = mutableMapOf<UUID, DialogTextPalette>()

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
              args.getOrNull(1)?.equals("reload", ignoreCase = true) == true
      ) {
        val config = reloadDialogRenderConfig()
        val preview = reloadDialogPreviewConfig()
        sender.sendMessage(
            Tools.socialLikesLOGO +
                " dialog設定を再読込しました。style=${config.widthStyle.name.lowercase()} preview='${preview.title}'"
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
          sender.sendMessage(Tools.socialLikesLOGO + " &ffont vanilla: リソースパックなしの既存文字版を開きます。".color())
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
          listOf("font", "slots", "display", "map", "board", "dialog", "server", "lucky")
              .filter { it.startsWith(args[0], ignoreCase = true) }
              .toMutableList()
      2 ->
          when (args[0].lowercase()) {
                "board" -> listOf("place", "remove")
                "display" -> listOf("week", "month", "year")
                "font" -> listOf("pack", "vanilla", "nopack")
                "map" -> listOf("wall", "remove", "home")
                "dialog" ->
                    dialogArgumentSuggestions(emptyList()) + listOf("preview", "ranking", "stats2", "reload")
                else -> emptyList()
              }
              .filter { it.startsWith(args[1], ignoreCase = true) }
              .toMutableList()
      3 ->
          when (args[0].lowercase()) {
                "dialog" ->
                    if (args[1].lowercase() in dialogStatsAliases) {
                      dialogStatsPlayerSuggestions(sender, args[2])
                    } else {
                      dialogArgumentSuggestions(args.drop(1).dropLast(1))
                    }
                else -> emptyList()
              }
              .filter { it.startsWith(args[2], ignoreCase = true) }
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
    player.sendMessage(
        "&7/sldata dialog ranking &f- 今週の制作者別いいね数Top5をヘッド付き横棒で表示".color()
    )
    player.sendMessage(
        "&7/sldata dialog stats2 [プレイヤー名] &f- 交流・応援・一番乗りの詳細統計を表示（他人の統計はOP限定）"
            .color()
    )
    player.sendMessage(
        "&7/sldata server &f- 全員に公開する宣伝効果・掲載回数のサーバー集計を表示".color()
    )
    player.sendMessage("&7/sldata lucky &f- 未いいねの他者建築をランダムに1件案内".color())
    player.sendMessage(
        "&7/sldata dialog reload &f- plugins/SocialLikes3/$DIALOG_CONFIG_FILE_NAME を再読込"
            .color()
    )
  }

  private fun handleDialog(player: Player, args: List<String>) {
    if (args.firstOrNull()?.equals("reload", ignoreCase = true) == true) {
      val config = reloadDialogRenderConfig()
      val preview = reloadDialogPreviewConfig()
      player.sendMessage(
          Tools.socialLikesLOGO +
              " &fdialog設定を再読込しました。style=${config.widthStyle.name.lowercase()} line='${config.lineChar}' empty='${config.emptyChar}' labels=${config.labelStyle.name.lowercase()} preview='${preview.title}'"
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
                            "リポスト ${formatCount(stats.totalReposts)}回 / 通常時 ${formatAverageCount(stats.normalReactionAverage)} / 宣伝後24時間 ${formatAverageCount(stats.publicityReactionAverage)} / 差 ${formatSignedAverage(stats.reactionDelta)}",
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
                  "${index + 1}. #${row.buildId} ${compactDialogText(row.title, 20)} ${formatCount(row.publicityCount)}回"
                },
                "まだ宣伝履歴はありません。",
            ),
            dialogStatsRowsBody(
                palette,
                "複数回宣伝された建築のイベント分析",
                stats.recurringBuilds.map { row ->
                  "#${row.buildId} ${compactDialogText(row.title, 16)}: 通常 ${formatAverageCount(row.normalReactionAverage)} → 宣伝後24h ${formatAverageCount(row.publicityReactionAverage)} (${formatSignedAverage(row.reactionDelta)}) / 間隔 ${row.averageIntervalHours?.let { formatDialogDuration((it * 3_600_000).toLong()) } ?: "-"}"
                },
                "複数回宣伝された建築はまだありません。",
            ),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(Component.text("SocialLikes サーバー統計", NamedTextColor.LIGHT_PURPLE))
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(rows)
                      .build()
              )
              .type(
                  DialogType.multiAction(
                          listOf(dialogButton("閉じる", "閉じます", dialogCloseKey))
                      )
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
    return buildList {
      if (!hasPeriod) addAll(listOf("week", "month", "year"))
    }
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
    val targetName = args.getOrNull(1)
    if (targetName == null) {
      openDialogStats(player)
      return
    }
    if (!player.isOp) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &c他プレイヤーの詳細統計を表示できるのはOPのみです。".color()
      )
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
    val description =
        raw.previewMap("description")?.let { parseDialogPreviewMessage(it, 200) }
    val itemName =
        raw.previewString("item-name")?.let { text ->
          DialogPreviewMessage(
              width = 200,
              segments =
                  listOf(
                      DialogPreviewSegment(
                          text = text,
                          repeat = 1,
                          color = previewColor(raw.previewString("item-name-color"), NamedTextColor.WHITE),
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
      "gray", "grey" -> NamedTextColor.GRAY
      "dark_gray", "dark_grey" -> NamedTextColor.DARK_GRAY
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

  private fun Map<*, *>.previewList(key: String): List<*> = this[key] as? List<*> ?: emptyList<Any>()

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
        #   ascii-hyphen     = 5px cells with - as grid/axis.
        #   ascii-underscore = 5px cells with _ as grid/axis.
        #   fullwidth = 9px cells: labels, fillers, grid, empty cells, and right-axis gap all use 9px glyphs.
        #
        # Deprecated legacy keys (line-char, empty-char, label-style, right-axis-gap) are ignored
        # after style is selected. Mixing 5px and 9px glyphs breaks the Paper dialog layout.
        style: "ascii-underscore"

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
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁_７，５００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁_　　　　　
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▃▃▁▁▁▁▁▁▁▁▁▁▁_６，０００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁_　　　　　
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁▃▃▁▁▁▁▁▁██▁▁▁▁▁▁▃▃▁▁▁▁▁▁██▁▁▁▁▁▁▁▁▁▁▁_４，５００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁▅▅▁▁▁_　　　　　
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁_３，０００
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▆▆▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁_　　　　　
      ▁▁▁▂▂▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁_１，５００
      ▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁▁▁▁██▁▁▁_　　　　　
      ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁_　　　　０
      ６月８日______________________________７月６日______________________________８月３日_
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
      return DialogWidthStyle.ASCII_UNDERSCORE
    }

    val legacyEntries = dialogLegacyWidthEntries(yaml)
    val labelStyle = DialogWidthStyle.parse(yaml.getString("label-style"))
    val selectedStyle =
        labelStyle ?: legacyEntries.firstOrNull()?.style ?: DialogWidthStyle.ASCII_UNDERSCORE
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
    val glyph = parseDialogGlyph(value, '_')
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
      else DialogWidthStyle.ASCII_UNDERSCORE

  private fun parseDialogGlyph(raw: String?, defaultChar: Char): Char {
    val value = raw?.trim().orEmpty()
    return when {
      value.isEmpty() -> defaultChar
      value.equals("underscore", ignoreCase = true) -> '_'
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
      player.sendMessage(Tools.socialLikesLOGO + " &c${home.worldName} が読み込まれていないため、マップを作れません。".color())
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
            " &fホームグラウンド: ${home.worldName} chunk (${home.chunkX}, ${home.chunkZ}) をマップにプロットしました。".color()
    )
  }

  private fun openLuckyBuild(player: Player) {
    val build = SLDatabase.loadLuckyUnlikedBuildBlocking(player.uniqueId.toString())
    if (build == null) {
      player.sendMessage(Tools.socialLikesLOGO + " &e未いいねの他者建築は見つかりませんでした。".color())
      return
    }
    val owner = SLDatabase.loadPlayerNamesBlocking(listOf(build.ownerUuid))[build.ownerUuid] ?: "unknown"
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
            dialogButton("詳細統計", "交流・応援・一番乗りの詳細を表示", dialogStatsKey),
            dialogButton("他の形式で見る", "ランキング、Map、Slots、Display", dialogOtherFormatsKey),
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
        if (preview.useUniformFont) Component.text(preview.body, NamedTextColor.GRAY).font(DIALOG_FONT)
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
            builder.description(
                DialogBody.plainMessage(dialogPreviewComponent(it), it.width)
            )
          }
          builder.build()
        }
      }

  private fun dialogPreviewComponent(message: DialogPreviewMessage): Component {
    var result: Component = Component.empty()
    message.segments.forEach { segment ->
      var part: Component =
          Component.text(segment.text.repeat(segment.repeat), segment.color)
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

  private fun openDialogRanking(player: Player) {
    val stats = SLDataStatsService.loadBoardStats()
    val rows = stats.weeklyOwnerMvp.take(5)
    val maxCount = rows.maxOfOrNull { it.currentCount } ?: 0
    val palette = dialogTextPalette(player)
    val bodyWidth = 520
    val body = mutableListOf<DialogBody>()
    body +=
        DialogBody.plainMessage(
            Component.text(
                    "今週 ／ 制作者別いいね数 Top5 ／ 合計 ${formatDialogCount(stats.weekly.total, DialogLabelStyle.FULLWIDTH)}",
                    dialogTextPalette(player).secondary,
                )
                .font(DIALOG_FONT),
            bodyWidth,
        )
    if (rows.isEmpty()) {
      body +=
          DialogBody.plainMessage(
              Component.text("今週のいいねデータはまだありません。", dialogTextPalette(player).secondary)
                  .font(DIALOG_FONT),
              bodyWidth,
          )
    } else {
      rows.forEachIndexed { index, summary ->
        body += dialogRankingRowBody(index, summary, maxCount, bodyWidth, palette)
      }
    }

    val actions =
        listOf(
            dialogButton("再読込", "ランキングを再表示", dialogRankingKey),
            dialogButton("詳細統計", "交流・応援・一番乗りの詳細を表示", dialogStatsKey),
            dialogButton("通常グラフ", "週次グラフへ戻る", dialogPreviewGraphKey),
            dialogButton("他の形式で見る", "Map、Slots、Displayを選択", dialogOtherFormatsKey),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(Component.text("いいね数 Top5", NamedTextColor.LIGHT_PURPLE))
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
  ) {
    activeDialogStatsTargets[player.uniqueId] = DialogStatsTarget(targetUuid, targetName)
    val includeLifeWorld = dialogStatsIncludeLifeWorld[player.uniqueId] == true
    val stats = SLDataStatsService.loadExtendedStats(targetUuid.toString(), 5, includeLifeWorld)
    val palette = dialogTextPalette(player)
    val bodyWidth = 560
    val body =
        listOf(
            DialogBody.plainMessage(dialogStatsSummaryComponent(stats, targetName, palette), bodyWidth),
            dialogStatsRowsBody(palette,
                "概要ダッシュボード",
                listOf(
                    "応援している作者 ${formatCount(stats.socialOverview.supportedOwnerCount)}人",
                    "応援されている層 ${formatCount(stats.socialOverview.supporterCount)}人",
                ),
                "概要データはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "ワールド別の反応${if (includeLifeWorld) "（ライフ含む）" else "（ライフ除外）"}",
                stats.worldReactions.map { row ->
                  "${compactDialogText(row.worldName, 14)} 受${formatDoublePercent(row.receivedShare)} / 押${formatDoublePercent(row.givenShare)} / 受効率差 ${formatSignedAverage(row.receivedAverageDelta)}"
                },
                "対象ワールドの反応データはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "自分 vs 全体平均",
                dialogTwoBarRows("自分", stats.comparison.ownAverage, "全体", stats.comparison.globalAverage) +
                    listOf(
                        "自作品平均 ${formatAverageCount(stats.comparison.ownAverage)} / 全作品平均 ${formatAverageCount(stats.comparison.globalAverage)}",
                        "いいね効率 ${formatAverageCount(stats.comparison.ownAverage)}/作品（全体平均との差 ${formatSignedAverage(stats.comparison.ownAverage - stats.comparison.globalAverage)}）",
                        "押した作品の平均 ${formatAverageCount(stats.comparison.givenTargetAverage)}（全体平均 ${formatAverageCount(stats.comparison.globalAverage)} / 中央値 ${formatAverageCount(stats.comparison.globalMedian)}） — ${givenLikeDeviationDiagnosis(stats.comparison)}",
                    ),
                "比較できる建築データはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "送った・受け取ったいいねの差分",
                listOf(
                    "送 ${formatCount(stats.balance.given)} / 受 ${formatCount(stats.balance.received)} / 差 ${formatCount(stats.balance.received - stats.balance.given)}",
                    "受÷送 ratio ${formatRatio(stats.balance.receivePerGiven)} — ${stats.balance.diagnosis}",
                ),
                "いいねデータはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "自作品のいいね分布",
                listOf(
                    "平均 ${formatAverageCount(stats.likeDistribution.average)} / 中央値 ${formatAverageCount(stats.likeDistribution.median)} / 最大 ${formatCount(stats.likeDistribution.maximum)}",
                ),
                "自作品データはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "最新建築 vs 過去建築",
                stats.recentBuildComparison?.let { comparison ->
                  dialogTwoBarRows("過去(${comparison.olderCount})", comparison.olderAverage, "最新(${comparison.newerCount})", comparison.newerAverage) +
                      listOf("過去 ${formatAverageCount(comparison.olderAverage)} / 最新 ${formatAverageCount(comparison.newerAverage)}")
                }.orEmpty(),
                "新旧比較には2作品以上必要です。",
            ),
            dialogStatsRowsBody(palette,
                "いいね集中度",
                listOf(
                    "上位${stats.likeConcentration.topCount}作品の占有率 ${formatDoublePercent(stats.likeConcentration.topShare)} / HHI風 ${String.format("%.2f", stats.likeConcentration.hhi)}",
                    stats.likeConcentration.diagnosis,
                ),
                "自作品のいいねデータはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "相互いいねペア ${formatCount(stats.mutualLikes.pairCount)}組",
                listOf(
                    "応援相手ベース ${formatDialogPercent(stats.mutualLikes.pairCount, stats.mutualLikes.likedOwnerCount)} / 応援者ベース ${formatDialogPercent(stats.mutualLikes.pairCount, stats.mutualLikes.likerCount)}",
                ) +
                    stats.mutualLikes.pairs.mapIndexed { index, row ->
                      "${index + 1}. ${dialogPlayerName(row.playerUuid, stats.playerNames)} 送${formatCount(row.likesGiven)} / 受${formatCount(row.likesReceived)}"
                    },
                "まだ相互いいねペアはありません。",
            ),
            dialogStatsRowsBody(palette,
                "お気に入りビルダーの捕捉率",
                stats.favoriteBuilderCapture?.let { capture ->
                  val rate = formatDialogPercent(capture.likedBuildCount, capture.totalBuildCount)
                  listOf(
                      "${dialogPlayerName(capture.ownerUuid, stats.playerNames)} ${formatCount(capture.likedBuildCount)} / ${formatCount(capture.totalBuildCount)}建築 ($rate)",
                      dialogProgressBar(capture.likedBuildCount, capture.totalBuildCount),
                  )
                }.orEmpty(),
                "いいね済みの作者がまだいないため、既定の対象を選べません。",
            ),
            dialogStatsRowsBody(palette,
                "初対面いいね（記録開始 2026/1/14 後）",
                stats.firstEncounters.map { row ->
                  "◆ ${dialogPlayerName(row.ownerUuid, stats.playerNames)}\n　初いいね ${dialogDateLabel(row.firstLikedAt)}"
                },
                "記録開始後の初対面いいねはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "共通の推し・似た好みのプレイヤー",
                stats.similarTastePlayers.mapIndexed { index, row ->
                  dialogPlayerCountLine(index, row.playerUuid, row.count, "人の推しが共通", stats.playerNames)
                },
                "共通の推しを持つプレイヤーはまだ見つかりません。",
            ),
            dialogStatsRowsBody(palette,
                "常連サポーター",
                stats.regularSupporters.mapIndexed { index, row ->
                  "${index + 1}. ${dialogPlayerName(row.playerUuid, stats.playerNames)} ${formatCount(row.likeCount)}いいね / ${formatCount(row.activeWeekCount)}週"
                },
                "$targetName の建築への常連サポーターはまだいません。",
            ),
            dialogStatsRowsBody(palette,
                "リピーター率",
                listOf(
                    "${formatCount(stats.repeaterRate.repeaterCount)} / ${formatCount(stats.repeaterRate.uniqueLikerCount)}人 (${formatDialogPercent(stats.repeaterRate.repeaterCount, stats.repeaterRate.uniqueLikerCount)})",
                    repeaterRateDiagnosis(stats.repeaterRate.repeaterCount, stats.repeaterRate.uniqueLikerCount),
                ),
                "リピーター率データはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "新作最速サポーター",
                stats.fastestSupporters.mapIndexed { index, row ->
                  dialogPlayerCountLine(index, row.playerUuid, row.count, "作品で最速", stats.playerNames)
                },
                "$targetName の新作への最速サポーターデータはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "初速（作品別・初いいねまで）",
                stats.initialLikeSpeed?.let { speed ->
                  listOf(
                      "最短 ${formatDialogDuration(speed.minimumMillis)}",
                      "中央値 ${formatDialogDuration(speed.medianMillis)}",
                      "最長 ${formatDialogDuration(speed.maximumMillis)}",
                      "対象 ${formatCount(speed.buildCount)}作品（いいね未到達は除外）",
                  )
                }.orEmpty(),
                "$targetName の作品で、初いいね時刻を持つデータはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "活動リズム（JST）",
                dialogRhythmRows(stats.activityRhythm),
                "いいねした時刻のデータはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "いいね対象の築年数（いいね時点）",
                stats.buildAgeDistribution.map { bucket ->
                  "${bucket.label} ${formatCount(bucket.count)}件"
                },
                "築年数を計算できるいいねはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "いいね継続日数",
                listOf(
                    "送ったいいね: 現在 ${formatCount(stats.givenStreak.currentDays)}日連続 / 最長 ${formatCount(stats.givenStreak.longestDays)}日 — ${streakTitle(stats.givenStreak)}",
                    "受けいいね: 現在 ${formatCount(stats.receivedStreak.currentDays)}日連続 / 最長 ${formatCount(stats.receivedStreak.longestDays)}日 — ${streakTitle(stats.receivedStreak)}",
                ),
                "日次いいねデータはまだありません。",
            ),
            dialogStatsRowsBody(
                palette,
                "宣伝効果（前後24時間）",
                listOf(
                    "リポスト ${formatCount(stats.publicity.totalReposts)}回 / 通常時 ${formatAverageCount(stats.publicity.normalReactionAverage)} / 宣伝後 ${formatAverageCount(stats.publicity.publicityReactionAverage)} / 差 ${formatSignedAverage(stats.publicity.reactionDelta)}",
                    "掲載直後24時間の反響を、同じ長さの直前24時間と比較しています。",
                ),
                "このプレイヤーの建築には、まだ宣伝履歴がありません。",
            ),
            dialogStatsRowsBody(
                palette,
                "宣伝回数ランキング Top5",
                stats.publicity.topBuilds.mapIndexed { index, row ->
                  "${index + 1}. #${row.buildId} ${compactDialogText(row.title, 18)} ${formatCount(row.publicityCount)}回"
                },
                "まだ宣伝された建築はありません。",
            ),
            dialogStatsRowsBody(
                palette,
                "複数回宣伝の反応変化（イベント分析）",
                stats.publicity.recurringBuilds.map { row ->
                  "#${row.buildId} ${compactDialogText(row.title, 15)}: 通常 ${formatAverageCount(row.normalReactionAverage)} → 宣伝後 ${formatAverageCount(row.publicityReactionAverage)} (${formatSignedAverage(row.reactionDelta)}) / 平均間隔 ${row.averageIntervalHours?.let { formatDialogDuration((it * 3_600_000).toLong()) } ?: "-"}"
                },
                "複数回宣伝された建築はまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "ロングテールいいね（公開30日後以降）",
                listOf(
                    "プレイヤー: ${formatCount(stats.givenLongTail.longTailCount)} / ${formatCount(stats.givenLongTail.totalCount)}件 (${formatDoublePercent(stats.givenLongTail.percentage)}) — 古い作品を掘る人",
                    "作者: ${formatCount(stats.receivedLongTail.longTailCount)} / ${formatCount(stats.receivedLongTail.totalCount)}件 (${formatDoublePercent(stats.receivedLongTail.percentage)}) — 過去作が後から愛された",
                ),
                "ロングテールを計算できるいいねはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "自己ベスト更新履歴（送ったいいね）",
                dialogPersonalBestRows(stats.personalBestHistory),
                "日・週・月の自己ベスト更新はまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "いいねの偏り自己診断",
                dialogDiversityRows(stats.likeDiversity, stats.playerNames),
                "いいねした対象の分散データはまだありません。",
            ),
            dialogStatsRowsBody(
                palette,
                "いいねDNA診断",
                listOf("${stats.likeDna.label} — 活動リズムと偏り自己診断の複合結果") + stats.likeDna.insights,
                "いいねDNAを作るデータはまだありません。",
            ),
            dialogStatsRowsBody(palette,
                "一番乗りランキング",
                stats.globalFirstLikers.mapIndexed { index, row ->
                  dialogPlayerCountLine(index, row.playerUuid, row.count, "回", stats.playerNames)
                },
                "まだ一番乗りデータはありません。",
            ),
            dialogStatsRowsBody(palette,
                "$targetName の建築への一番乗り",
                stats.ownFirstLikers.mapIndexed { index, row ->
                  dialogPlayerCountLine(index, row.playerUuid, row.count, "回", stats.playerNames)
                },
                "$targetName の建築への一番乗りデータはありません。",
            ),
            dialogStatsRowsBody(palette,
                "恩人プレイヤー",
                stats.benefactors.mapIndexed { index, row ->
                  dialogPlayerCountLine(index, row.playerUuid, row.count, "いいね", stats.playerNames)
                },
                "$targetName の建築へいいねしたプレイヤーはまだいません。",
            ),
            dialogStatsRowsBody(palette,
                "今週いいねした制作者",
                stats.weeklyLikedOwners.mapIndexed { index, row ->
                  dialogOwnerCountLine(index, row.ownerUuid, row.count, "いいね", stats.playerNames)
                },
                "今週いいねした制作者データはありません。",
            ),
            dialogStatsRowsBody(palette,
                "$targetName の建築 Top5",
                stats.ownBuilds.mapIndexed { index, row ->
                  "${index + 1}. #${row.buildId} ${compactDialogText(row.title, 18)} ${formatCount(row.likeCount)}いいね"
                },
                "$targetName の登録済み建築データはありません。",
            ),
        )

    val actions =
        listOf(
            dialogButton("再読込", "詳細統計を再表示", dialogStatsReloadKey),
            dialogButton(
                if (includeLifeWorld) "ライフ除外" else "ライフ含む",
                "ワールド別反応のライフワールド表示を切替",
                dialogStatsWorldFilterKey,
            ),
            dialogButton("通常グラフ", "週次グラフへ戻る", dialogPreviewGraphKey),
            dialogButton("Top5", "制作者別いいね数ランキング", dialogRankingKey),
            dialogButton("他の形式で見る", "Map、Slots、Displayを選択", dialogOtherFormatsKey),
        )
    val dialog =
        Dialog.create { builder ->
          builder
              .empty()
              .base(
                  DialogBase.builder(
                          Component.text("SocialLikes 詳細統計: $targetName", NamedTextColor.LIGHT_PURPLE)
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
        Tools.socialLikesLOGO + " &fdialog stats2: $targetName の詳細統計をPaper Dialog APIで送信しました。".color()
    )
  }

  private fun dialogStatsSummaryComponent(
      stats: SLDataStatsService.ExtendedStats,
      targetName: String,
      palette: DialogTextPalette,
  ): Component {
    val peak =
        stats.peakLikeDay?.let {
          "爆発日 ${it.dateLabel} ${formatCount(it.count)}件 平均${formatAverageCount(it.averageCount)}/日"
        } ?: "爆発日はまだありません"
    val personalBest =
        "自己ベスト 日${dialogLatestPersonalBest(stats.personalBestHistory.daily)} / " +
            "週${dialogLatestPersonalBest(stats.personalBestHistory.weekly)} / " +
            "月${dialogLatestPersonalBest(stats.personalBestHistory.monthly)}"
    val week = stats.playerWeek
    return Component.text()
        .style(Style.style().font(DIALOG_FONT).build())
        .append(Component.text("今週 ${week.label}\n", palette.secondary))
        .append(
            Component.text(
                "作成 ${formatCount(week.buildsCreated)} / 送った ${formatCount(week.likesGiven)} / 受けた ${formatCount(week.likesReceived)} / 宣伝 ${formatCount(week.publicityCount)}\n",
                palette.primary,
            )
        )
        .append(Component.text("$peak\n", NamedTextColor.YELLOW))
        .append(Component.text("$personalBest\n", NamedTextColor.GOLD))
        .append(
            Component.text(
                "$targetName の一番乗り回数 ${formatCount(stats.ownFirstLikeCount)} / 週合計 ${formatCount(stats.weekly.total)}いいね",
                NamedTextColor.AQUA,
            )
        )
        .build()
  }

  private fun dialogStatsRowsBody(
      palette: DialogTextPalette,
      title: String,
      rows: List<String>,
      emptyMessage: String,
  ): DialogBody {
    val lines = if (rows.isEmpty()) listOf(emptyMessage) else rows
    val component =
        Component.text()
            .style(Style.style().font(DIALOG_FONT).build())
            .append(Component.text("$title\n", NamedTextColor.LIGHT_PURPLE))
            .append(Component.text(lines.joinToString("\n"), palette.secondary))
            .build()
    return DialogBody.plainMessage(component, 560)
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
      return "■".repeat(filled) + "□".repeat(12 - filled)
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

  private fun streakTitle(streak: SLDataStatsService.StreakStats): String =
      when {
        streak.currentDays >= 30 || streak.longestDays >= 60 -> "称号: 伝説の継続者"
        streak.currentDays >= 14 || streak.longestDays >= 30 -> "称号: 習慣の守り手"
        streak.currentDays >= 7 || streak.longestDays >= 14 -> "称号: 週刊サポーター"
        streak.currentDays >= 3 || streak.longestDays >= 7 -> "称号: 継続の芽"
        streak.longestDays >= 1 -> "称号: はじめの一歩"
        else -> "称号: これから"
      }

  private fun givenLikeDeviationDiagnosis(stats: SLDataStatsService.ComparisonStats): String =
      when {
        stats.givenTargetAverage == 0.0 -> "押した作品はまだありません"
        stats.givenTargetAverage >= stats.globalAverage &&
            stats.givenTargetAverage >= stats.globalMedian -> "人気作を選びがち"
        stats.givenTargetAverage < stats.globalMedian -> "埋もれた作品を掘りがち"
        else -> "全体の中ほどを選ぶ傾向"
      }

  private fun dialogRhythmRows(stats: SLDataStatsService.ActivityRhythmStats): List<String> {
    val shades = charArrayOf('·', '░', '▒', '▓', '█')
    val maxCount = stats.weekdayCounts.flatten().maxOrNull() ?: 0
    val weekdayLabels = listOf("月", "火", "水", "木", "金", "土", "日")
    val graph =
        buildList {
          add("　${stats.timeBandLabels.joinToString(" ")}")
          stats.weekdayCounts.forEachIndexed { day, counts ->
            val cells =
                counts.joinToString("  ") { count ->
                  shades[SLDataStatsService.scaleLevel(count, maxCount, shades.lastIndex)].toString()
                }
            add("${weekdayLabels[day]} $cells")
          }
        }
    return graph + listOf("${stats.rhythmDiagnosis} / ${stats.dayTypeDiagnosis}")
  }

  private fun dialogPersonalBestRows(
      history: SLDataStatsService.PersonalBestHistory
  ): List<String> =
      listOf(
          "日別: ${dialogPersonalBestText(history.daily)}",
          "週別: ${dialogPersonalBestText(history.weekly)}",
          "月別: ${dialogPersonalBestText(history.monthly)}",
      )

  private fun dialogPersonalBestText(
      records: List<SLDataStatsService.PersonalBestRecord>
  ): String =
      if (records.isEmpty()) "なし"
      else records.joinToString(" → ") { "${it.label} ${formatCount(it.count)}件" }

  private fun dialogLatestPersonalBest(
      records: List<SLDataStatsService.PersonalBestRecord>
  ): String = records.lastOrNull()?.let { "${it.count}件" } ?: "なし"

  private fun dialogDiversityRows(
      stats: SLDataStatsService.LikeDiversityStats,
      playerNames: Map<String, String>,
  ): List<String> =
      listOf(
          "多様性スコア ${formatCount(stats.score)} / 100 — ${stats.diagnosis}",
          "制作者 Top3: ${dialogDimensionTopText(stats.ownerTop) { dialogPlayerName(it, playerNames) }}",
          "world Top3: ${dialogDimensionTopText(stats.worldTop) { it }}",
          "chunk Top3: ${dialogDimensionTopText(stats.chunkTop) { it }}",
          "築年数別: ${stats.ageBuckets.joinToString(" / ") { "${it.label} ${formatCount(it.count)}件" }}",
      )

  private fun dialogDimensionTopText(
      rows: List<SLDataStatsService.DimensionTop>,
      label: (String) -> String,
  ): String =
      if (rows.isEmpty()) "なし"
      else rows.joinToString(" / ") { "${label(it.label)} ${formatCount(it.count)}件" }

  private fun formatDialogDuration(millis: Long): String {
    val minutes = (millis / 60_000L).coerceAtLeast(0L)
    val days = minutes / (24L * 60L)
    val hours = (minutes % (24L * 60L)) / 60L
    val remainingMinutes = minutes % 60L
    return when {
      days > 0 -> "${days}日${hours}時間"
      hours > 0 -> "${hours}時間${remainingMinutes}分"
      else -> "${remainingMinutes}分"
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
      dialogFixedRankLine(index, dialogPlayerName(playerUuid, playerNames), "${formatCount(count)}$suffix")

  private fun dialogOwnerCountLine(
      index: Int,
      ownerUuid: String,
      count: Int,
      suffix: String,
      playerNames: Map<String, String>,
  ): String =
      dialogFixedRankLine(index, dialogPlayerName(ownerUuid, playerNames), "${formatCount(count)}$suffix")

  private fun dialogPlayerName(uuidText: String, playerNames: Map<String, String>): String {
    val onlineName = parseUuid(uuidText)?.let { Bukkit.getPlayer(it)?.name }
    return compactDialogText(onlineName ?: playerNames[uuidText] ?: uuidText.take(8), 18)
  }

  private fun compactDialogText(text: String, maxLength: Int): String =
      if (text.length <= maxLength) text else text.take((maxLength - 1).coerceAtLeast(1)) + "…"

  /**
   * Paper Dialog bodies are centre aligned. Keep the name and value in fixed uniform-font blocks
   * so each ranking value begins at the same column even when a player name has a different length.
   */
  private fun dialogFixedRankLine(index: Int, playerName: String, value: String): String {
    val fixedName = compactDialogText(playerName, DIALOG_RANK_NAME_COLUMNS)
    val padding = DIALOG_NBSP.toString().repeat(DIALOG_RANK_NAME_COLUMNS - fixedName.length)
    return "${index + 1}. $fixedName$padding  $value"
  }

  private fun dialogRankingRowBody(
      index: Int,
      summary: SLDatabase.OwnerLikeSummary,
      maxCount: Int,
      bodyWidth: Int,
      palette: DialogTextPalette,
  ): DialogBody {
    val ownerUuid = parseUuid(summary.ownerUuid)
    val owner = ownerUuid?.let { Bukkit.getOfflinePlayer(it) }
    val ownerName = owner?.name ?: summary.ownerUuid.take(8)
    val head = ItemStack(Material.PLAYER_HEAD)
    val meta = head.itemMeta as? SkullMeta
    if (meta != null && owner != null) {
      meta.owningPlayer = owner
      head.itemMeta = meta
    }
    head.addText(
        "&a${index + 1}位 $ownerName",
        mutableListOf(
            "&7今週のいいね: &e${formatCount(summary.currentCount)}",
            "&7制作者UUID: &f${summary.ownerUuid}",
        ),
    )

    val description = dialogRankingRowComponent(index, ownerName, summary.currentCount, maxCount, palette)
    return DialogBody.item(head)
        .description(DialogBody.plainMessage(description, bodyWidth))
        .showTooltip(true)
        .showDecorations(false)
        .width(24)
        .height(32)
        .build()
  }

  private fun dialogRankingRowComponent(
      index: Int,
      ownerName: String,
      count: Int,
      maxCount: Int,
      palette: DialogTextPalette,
  ): Component {
    val rank = toDialogFullWidth("${index + 1}位")
    val filled = horizontalRankingBar(count, maxCount, 24)
    val nameBlock = compactDialogText(ownerName, DIALOG_RANK_NAME_COLUMNS)
    val namePadding = DIALOG_NBSP.toString().repeat(DIALOG_RANK_NAME_COLUMNS - nameBlock.length)
    val countText = formatDialogCount(count, DialogLabelStyle.FULLWIDTH)
    val hover =
        Component.text()
            .append(Component.text("$ownerName\n", NamedTextColor.GREEN))
            .append(Component.text("今週のいいね: ${formatCount(count)}", NamedTextColor.YELLOW))
            .build()
    return Component.text()
        .style(Style.style().font(DIALOG_FONT).build())
        .append(Component.text("$rank　", palette.secondary).hoverEvent(hover))
        .append(Component.text(nameBlock, palette.primary).hoverEvent(hover))
        .append(Component.text("$namePadding　$countText\n", palette.secondary).hoverEvent(hover))
        .append(
            Component.text(filled, if (index == 0) NamedTextColor.GOLD else NamedTextColor.GREEN)
                .hoverEvent(hover)
        )
        .build()
  }

  private fun horizontalRankingBar(count: Int, maxCount: Int, width: Int): String {
    if (count <= 0 || maxCount <= 0) return "█"
    val filled = ceil(count.toDouble() / maxCount.toDouble() * width.toDouble()).toInt().coerceIn(1, width)
    return "█".repeat(filled)
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
      dialogStatsKey -> openDialogStats(player)
      dialogStatsReloadKey -> {
        val target = activeDialogStatsTargets[player.uniqueId]
        if (target == null) openDialogStats(player) else openDialogStats(player, target.uuid, target.name)
      }
      dialogStatsWorldFilterKey -> {
        dialogStatsIncludeLifeWorld[player.uniqueId] = !(dialogStatsIncludeLifeWorld[player.uniqueId] == true)
        val target = activeDialogStatsTargets[player.uniqueId]
        if (target == null) openDialogStats(player) else openDialogStats(player, target.uuid, target.name)
      }
      dialogCloseKey -> {
        activeDialogRequests.remove(player.uniqueId)
        activeDialogStatsTargets.remove(player.uniqueId)
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
    activeDialogStatsTargets.remove(event.player.uniqueId)
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
    if (total <= 0) return "░".repeat(width)
    val filled =
        ceil(current.toDouble() / total.toDouble() * width.toDouble()).toInt().coerceIn(0, width)
    return "█".repeat(filled) + "░".repeat(width - filled)
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
            "ascii", "halfwidth", "half-width" -> ASCII
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
        '-',
        '-',
        '-',
        "-",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_UNDERSCORE(
        DialogLabelStyle.ASCII,
        '_',
        '_',
        '_',
        "_",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_LOW(
        DialogLabelStyle.ASCII,
        '▁',
        '▁',
        '_',
        "_",
        charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'),
        5,
    ),
    ASCII_CLEAN(
        DialogLabelStyle.ASCII,
        '_',
        '_',
        '_',
        "_",
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
            "fullwidth", "full-width", "wide", "9px" -> FULLWIDTH
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
          DialogGlyphMetric('_', 0x005F, 8, 1, 7, 7, 3.5, 5),
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
  ): DialogGraph {
    val axisMax = likeAxisMaxForDisplay(series.peak)
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
    val component = Component.text().style(Style.style().font(DIALOG_FONT).build())
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
    val xLabels = dialogXAxisLabels(series, layout, config)
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
      component.append(Component.text(text).style(Style.style().font(DIALOG_FONT).color(color).build()))
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
    append(config.lineChar.toString().repeat(plotWidth), baseGridColor)
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
        component.build(),
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
    val plotWidth = leftMargin + bucketCount * barWidthChars + (bucketCount - 1) * barGapChars + rightMargin
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
  ): DialogXAxisLabels {
    val chars = CharArray(layout.plotWidth) { config.fillerChar }
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
          uniformDialogAdvance(config.lineChar.toString().repeat(anchor)) +
              cellAdvance / 2.0
      val idealStart =
          when (bucketIndex) {
            0 -> 0
            series.buckets.lastIndex -> ((plotAdvance - labelAdvance + cellAdvance / 2) / cellAdvance)
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
          }
              .let {
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

  private fun dialogYAxisLabels(
      axisMax: Int,
      graphRows: Int,
      verticalScale: Int,
      config: DialogRenderConfig,
  ): List<DialogYAxisLabel> {
    val labelRowOffset = if (config.lineChar == '_') verticalScale / 2 else 0
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

        val all = points + SLDatabase.HomeGroundPoint(home.chunkX, home.chunkZ, home.buildCount, home.receivedLikes)
        val minX = all.minOf { it.chunkX } - 1
        val maxX = all.maxOf { it.chunkX } + 1
        val minZ = all.minOf { it.chunkZ } - 1
        val maxZ = all.maxOf { it.chunkZ } + 1
        fun x(chunkX: Int): Int = 10 + ((chunkX - minX).toDouble() / (maxX - minX).coerceAtLeast(1) * 108).toInt()
        fun y(chunkZ: Int): Int = 110 - ((chunkZ - minZ).toDouble() / (maxZ - minZ).coerceAtLeast(1) * 80).toInt()

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
