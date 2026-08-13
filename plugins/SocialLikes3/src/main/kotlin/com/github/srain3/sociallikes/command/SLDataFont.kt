package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.SLResourcePack
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLDatabase
import java.io.File
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import kotlin.math.roundToInt
import net.kyori.adventure.key.Key
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCreativeEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

object SLDataFont : CommandExecutor, Listener {
  private const val DEFAULT_DISPLAY_WEEKS = 9
  private const val DISPLAY_COLUMNS = 9
  private const val DISPLAY_ROWS = 5
  private const val FIRST_CONTROL_SLOT = 45
  private const val DEFAULT_GLYPH_LEVELS = 16
  private const val DEFAULT_BAR_BASE_CODE_POINT = 0xF900
  private const val DEFAULT_BACKGROUND_CODE_POINT = 0xF8F0
  private const val DEFAULT_CURSOR_RESET_CODE_POINT = 0xF8F1
  private const val DEFAULT_BAR_START_OFFSET_CODE_POINT = 0xF8F2
  private const val DEFAULT_GUI_SLOTS = 54
  private val GRAPH_FONT = Key.key("minecraft", "sociallikes_graph")
  private const val CONFIG_FILE_NAME = "sldata-font.yml"
  private val WEEK_LABEL_FORMATTER = DateTimeFormatter.ofPattern("M/d'の週'")

  data class WeeklyLikeCount(val weekStart: LocalDate, val count: Int)

  data class GraphConfig(
      val backgroundCodePoint: Int,
      val cursorResetCodePoint: Int,
      val barStartOffsetCodePoint: Int?,
      val barBaseCodePoint: Int,
      val barLevels: Int,
      val barSeparatorCodePoint: Int?,
      val guiSlots: Int,
      val displayWeeks: Int,
  )

  private data class GraphPayload(
      val config: GraphConfig,
      val weeklyLikes: List<WeeklyLikeCount>,
      val graphText: String,
  )

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "sldatafont") return false

    if (sender !is Player) {
      sender.sendMessage(Tools.socialLikesLOGO + " &cプレイヤーから実行してください。".color())
      return true
    }

    if (!Data.loading) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }

    if (args.firstOrNull()?.lowercase() in setOf("vanilla", "nopack", "no-pack")) {
      openVanillaFor(sender)
    } else {
      openFor(sender)
    }
    return true
  }

  fun openFor(player: Player) {
    SLResourcePack.ensureApplied(player) { openGraphGui(player) }
  }

  fun openVanillaFor(player: Player) {
    val payload = loadGraphPayload()
    player.openInventory(createVanillaInventory(payload.weeklyLikes, payload.config))
    player.sendMessage(Tools.socialLikesLOGO + " &fリソースパックなしの既存文字GUIを開きました。".color())
  }

  private fun openGraphGui(player: Player) {
    val payload = loadGraphPayload()
    player.openInventory(createInventory(payload.graphText, payload.weeklyLikes, payload.config))
    player.sendMessage(Tools.socialLikesLOGO + " &fフォントグラフPOCのGUIを開きました。".color())
  }

  private fun loadGraphPayload(): GraphPayload {
    val graphConfig = loadGraphConfig()
    val weeklyLikes = loadWeeklyLikeCountsFromDatabase(graphConfig.displayWeeks)
    val graphText = buildGraphText(weeklyLikes, graphConfig)
    return GraphPayload(graphConfig, weeklyLikes, graphText)
  }

  private fun loadWeeklyLikeCountsFromDatabase(weeks: Int): List<WeeklyLikeCount> {
    return SLDatabase.loadWeeklyLikeCountsBlocking(weeks).map { weekly ->
      WeeklyLikeCount(weekly.weekStart, weekly.count)
    }
  }

  private fun buildGraphText(weeklyLikes: List<WeeklyLikeCount>, graphConfig: GraphConfig): String {
    val maxCount = weeklyLikes.maxOfOrNull { it.count } ?: 0
    val separator = graphConfig.barSeparatorCodePoint?.let { String(Character.toChars(it)) } ?: ""
    val background = String(Character.toChars(graphConfig.backgroundCodePoint))
    val cursorReset = String(Character.toChars(graphConfig.cursorResetCodePoint))
    val barStartOffset =
        graphConfig.barStartOffsetCodePoint?.let { String(Character.toChars(it)) } ?: ""
    val bars =
        weeklyLikes
            .map { weekly ->
              val level =
                  if (maxCount <= 0) {
                    0
                  } else {
                    ((weekly.count.toDouble() / maxCount.toDouble()) * graphConfig.barLevels)
                        .roundToInt()
                        .coerceIn(0, graphConfig.barLevels)
                  }
              String(Character.toChars(graphConfig.barBaseCodePoint + level))
            }
            .joinToString(separator)

    return background + cursorReset + barStartOffset + bars
  }

  private fun buildVanillaTitle(weeklyLikes: List<WeeklyLikeCount>): String {
    val buckets = weeklyLikes.take(DISPLAY_COLUMNS)
    if (buckets.isEmpty()) return "ＳＬ　データ"
    val blocks = charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█')
    val maxCount = buckets.maxOfOrNull { it.count } ?: 0
    val sparkline =
        buckets.joinToString("") { weekly ->
          val level =
              if (maxCount <= 0 || weekly.count <= 0) 0
              else
                  ((weekly.count.toDouble() / maxCount.toDouble()) * (blocks.size - 1))
                      .roundToInt()
                      .coerceIn(0, blocks.lastIndex)
          blocks[level].toString()
        }
    val firstLabel = toFullWidthDateLabel(buckets.first())
    val lastLabel = toFullWidthDateLabel(buckets.last())
    val total = toFullWidthNumber(buckets.sumOf { it.count })
    return "ＳＬ　$firstLabel　$sparkline　$lastLabel　計$total"
  }

  private fun logDebug(
      weeklyLikes: List<WeeklyLikeCount>,
      graphText: String,
      graphConfig: GraphConfig,
  ) {
    val weeklySummary =
        if (weeklyLikes.isEmpty()) "(no rows)"
        else weeklyLikes.joinToString(", ") { "${it.weekStart}=${it.count}" }
    val codePoints = graphText.codePoints().toArray().joinToString(" ") { "U+%04X".format(it) }

    Tools.plugin.logger.info(
        "[SLDataFont] Config: background=${formatCodePoint(graphConfig.backgroundCodePoint)} " +
            "cursorReset=${formatCodePoint(graphConfig.cursorResetCodePoint)} " +
            "barStartOffset=${graphConfig.barStartOffsetCodePoint?.let(::formatCodePoint) ?: "none"} " +
            "barBase=${formatCodePoint(graphConfig.barBaseCodePoint)} " +
            "barLevels=${graphConfig.barLevels} " +
            "separator=${graphConfig.barSeparatorCodePoint?.let(::formatCodePoint) ?: "none"} " +
            "guiSlots=${graphConfig.guiSlots} displayWeeks=${graphConfig.displayWeeks}"
    )
    Tools.plugin.logger.info("[SLDataFont] Weekly likes: $weeklySummary")
    Tools.plugin.logger.info("[SLDataFont] Graph glyph code points: $codePoints")
    weeklyLikes.firstOrNull()?.let {
      Tools.plugin.logger.info(
          "[SLDataFont] Tooltip sample: slot=0,9,18,27,36 name=${weekLabel(it)} lore=いいね ${it.count}"
      )
    }
  }

  private fun createInventory(
      graphText: String,
      weeklyLikes: List<WeeklyLikeCount>,
      graphConfig: GraphConfig,
  ): Inventory {
    val holder = GraphInventoryHolder()
    val inventory =
        Bukkit.createInventory(
            holder,
            graphConfig.guiSlots,
            Component.text(graphText).font(GRAPH_FONT),
        )
    holder.bind(inventory)

    inventory.apply {
      weeklyLikes.take(DISPLAY_COLUMNS).forEachIndexed { column, weekly ->
        val item = createTooltipItem(weekly)
        (0 until DISPLAY_ROWS).forEach { row ->
          setItem(column + (row * DISPLAY_COLUMNS), item.clone())
        }
      }

      createControlItems(graphConfig).forEachIndexed { index, item ->
        setItem(FIRST_CONTROL_SLOT + index, item)
      }
    }
    return inventory
  }

  private fun createVanillaInventory(
      weeklyLikes: List<WeeklyLikeCount>,
      graphConfig: GraphConfig,
  ): Inventory {
    val holder = GraphInventoryHolder()
    val inventory =
        Bukkit.createInventory(
            holder,
            graphConfig.guiSlots,
            Component.text(buildVanillaTitle(weeklyLikes)),
        )
    holder.bind(inventory)

    inventory.apply {
      val maxCount = weeklyLikes.maxOfOrNull { it.count } ?: 0
      weeklyLikes.take(DISPLAY_COLUMNS).forEachIndexed { column, weekly ->
        val height =
            if (maxCount <= 0) 0
            else
                ((weekly.count.toDouble() / maxCount.toDouble()) * DISPLAY_ROWS)
                    .roundToInt()
                    .coerceIn(1, DISPLAY_ROWS)
        (0 until DISPLAY_ROWS).forEach { rowFromTop ->
          val filled = DISPLAY_ROWS - rowFromTop <= height
          val item =
              if (filled) createVanillaBarItem(weekly, rowFromTop)
              else createVanillaEmptyItem(weekly)
          setItem(column + rowFromTop * DISPLAY_COLUMNS, item)
        }
      }

      createVanillaControlItems(graphConfig).forEachIndexed { index, item ->
        setItem(FIRST_CONTROL_SLOT + index, item)
      }
    }
    return inventory
  }

  private fun createTooltipItem(weekly: WeeklyLikeCount): ItemStack {
    return ItemStack(Material.BLACK_STAINED_GLASS_PANE)
        .allFlag()
        .addText("&f${weekLabel(weekly)}", mutableListOf("&7いいね ${weekly.count}"))
  }

  private fun createVanillaBarItem(weekly: WeeklyLikeCount, rowFromTop: Int): ItemStack {
    val material =
        when (rowFromTop) {
          0 -> Material.LIME_CONCRETE
          1 -> Material.GREEN_CONCRETE
          2 -> Material.LIME_WOOL
          3 -> Material.YELLOW_STAINED_GLASS_PANE
          else -> Material.ORANGE_STAINED_GLASS_PANE
        }
    return ItemStack(material)
        .allFlag()
        .addText("&f${weekLabel(weekly)}", mutableListOf("&7いいね ${weekly.count}", "&7リソースパックなし"))
  }

  private fun createVanillaEmptyItem(weekly: WeeklyLikeCount): ItemStack =
      ItemStack(Material.GRAY_STAINED_GLASS_PANE)
          .allFlag()
          .addText("&7${weekLabel(weekly)}", mutableListOf("&7いいね ${weekly.count}"))

  private fun createControlItems(graphConfig: GraphConfig): List<ItemStack> =
      listOf(
          ItemStack(Material.ARROW).allFlag().addText("&f前へ", mutableListOf("&7ナビゲーション仮置き")),
          ItemStack(Material.COMPASS)
              .allFlag()
              .addText("&f現在位置", mutableListOf("&7直近${graphConfig.displayWeeks}週を表示")),
          ItemStack(Material.CLOCK).allFlag().addText("&e期間", mutableListOf("&7週単位の集計")),
          ItemStack(Material.EMERALD).allFlag().addText("&aピーク", mutableListOf("&7最大週に対する相対棒高")),
          ItemStack(Material.BOOK).allFlag().addText("&b詳細", mutableListOf("&7隠しスロットのツールチップを確認")),
          ItemStack(Material.NAME_TAG).allFlag().addText("&dラベル", mutableListOf("&7各列は1週に対応")),
          ItemStack(Material.PAPER)
              .allFlag()
              .addText("&f設定", mutableListOf("&7plugins/SocialLikes3/$CONFIG_FILE_NAME")),
          ItemStack(Material.REDSTONE_TORCH)
              .allFlag()
              .addText("&c再描画", mutableListOf("&7/sldatafont で再読込")),
          ItemStack(Material.BARRIER).allFlag().addText("&c閉じる", mutableListOf("&7ナビゲーション仮置き")),
      )

  private fun createVanillaControlItems(graphConfig: GraphConfig): List<ItemStack> =
      listOf(
          ItemStack(Material.ARROW).allFlag().addText("&f前へ", mutableListOf("&7ナビゲーション仮置き")),
          ItemStack(Material.COMPASS)
              .allFlag()
              .addText("&f既存文字", mutableListOf("&7リソースパックなし", "&7直近${graphConfig.displayWeeks}週")),
          ItemStack(Material.CLOCK).allFlag().addText("&e期間", mutableListOf("&7週単位の集計")),
          ItemStack(Material.EMERALD).allFlag().addText("&aピーク", mutableListOf("&7スロット棒グラフで表示")),
          ItemStack(Material.BOOK).allFlag().addText("&bタイトル", mutableListOf("&7タイトルは1行スパークラインのみ")),
          ItemStack(Material.NAME_TAG)
              .allFlag()
              .addText("&d比較", mutableListOf("&7/sldatafont はリソースパック版")),
          ItemStack(Material.PAPER).allFlag().addText("&f結論", mutableListOf("&7複数行の文字配置はDialog向き")),
          ItemStack(Material.REDSTONE_TORCH)
              .allFlag()
              .addText("&c再描画", mutableListOf("&7/sldatafont vanilla で再読込")),
          ItemStack(Material.BARRIER).allFlag().addText("&c閉じる", mutableListOf("&7ナビゲーション仮置き")),
      )

  @EventHandler(ignoreCancelled = false)
  fun onInventoryClick(event: InventoryClickEvent) {
    if (isGraphInventory(event.view.topInventory)) {
      event.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = false)
  fun onInventoryDrag(event: InventoryDragEvent) {
    if (isGraphInventory(event.view.topInventory)) {
      event.isCancelled = true
    }
  }

  @EventHandler(ignoreCancelled = false)
  fun onInventoryCreative(event: InventoryCreativeEvent) {
    if (isGraphInventory(event.view.topInventory)) {
      event.isCancelled = true
    }
  }

  private fun loadGraphConfig(): GraphConfig {
    val configFile = File(Tools.plugin.dataFolder, CONFIG_FILE_NAME)
    writeDefaultConfigIfMissing(configFile)
    val yaml = YamlConfiguration.loadConfiguration(configFile)

    return GraphConfig(
        backgroundCodePoint =
            getCodePoint(yaml, "background-code-point", DEFAULT_BACKGROUND_CODE_POINT),
        cursorResetCodePoint =
            getCodePoint(yaml, "cursor-reset-code-point", DEFAULT_CURSOR_RESET_CODE_POINT),
        barStartOffsetCodePoint =
            getCodePoint(yaml, "bar-start-offset-code-point", DEFAULT_BAR_START_OFFSET_CODE_POINT),
        barBaseCodePoint = getCodePoint(yaml, "bar-base-code-point", DEFAULT_BAR_BASE_CODE_POINT),
        barLevels = yaml.getInt("bar-levels", DEFAULT_GLYPH_LEVELS).coerceAtLeast(1),
        barSeparatorCodePoint = getOptionalCodePoint(yaml, "bar-separator-code-point"),
        guiSlots = normalizeInventorySize(yaml.getInt("gui-slots", DEFAULT_GUI_SLOTS)),
        displayWeeks =
            yaml.getInt("display-weeks", DEFAULT_DISPLAY_WEEKS).coerceIn(1, DISPLAY_COLUMNS),
    )
  }

  private fun writeDefaultConfigIfMissing(configFile: File) {
    if (configFile.isFile) return
    configFile.parentFile?.mkdirs()
    configFile.writeText(
        """
        # SocialLikes3 /sldatafont graph title layout.
        # Code points may be written as U+F8F0, 0xF8F0, or decimal integers.
        background-code-point: "U+F8F0"
        cursor-reset-code-point: "U+F8F1"
        # Positive-advance spacer inserted after cursor reset so bars start after the Y-axis labels.
        bar-start-offset-code-point: "U+F8F2"
        bar-base-code-point: "U+F900"
        bar-levels: 16
        # Leave empty/null to rely on the 14px bar canvas instead of inserting spacing glyphs.
        bar-separator-code-point: null
        # Inventory slot count. Use 27 for 3 rows or 54 for a 6-row chest GUI.
        gui-slots: 54
        display-weeks: 9
        """
            .trimIndent() + "\n"
    )
  }

  private fun getCodePoint(yaml: YamlConfiguration, path: String, defaultValue: Int): Int {
    return parseCodePoint(yaml.get(path)) ?: defaultValue
  }

  private fun getOptionalCodePoint(yaml: YamlConfiguration, path: String): Int? {
    return parseCodePoint(yaml.get(path))
  }

  private fun parseCodePoint(raw: Any?): Int? {
    return when (raw) {
      null -> null
      is Number -> raw.toInt()
      is String -> {
        val text = raw.trim()
        if (
            text.isEmpty() ||
                text.equals("null", ignoreCase = true) ||
                text.equals("none", ignoreCase = true)
        ) {
          null
        } else {
          when {
            text.startsWith("U+", ignoreCase = true) -> text.drop(2).toIntOrNull(16)
            text.startsWith("0x", ignoreCase = true) -> text.drop(2).toIntOrNull(16)
            else -> text.toIntOrNull()
          }
        }
      }
      else -> null
    }?.takeIf { Character.isValidCodePoint(it) }
  }

  private fun normalizeInventorySize(rawSlots: Int): Int {
    if (rawSlots != DEFAULT_GUI_SLOTS) {
      Tools.plugin.logger.warning(
          "[SLDataFont] gui-slots=$rawSlots is unsupported by the 6-row graph layout; using $DEFAULT_GUI_SLOTS"
      )
    }
    return DEFAULT_GUI_SLOTS
  }

  private fun weekLabel(weekly: WeeklyLikeCount): String =
      weekly.weekStart.format(WEEK_LABEL_FORMATTER)

  private fun toFullWidthDateLabel(weekly: WeeklyLikeCount): String =
      toFullWidth("${weekly.weekStart.monthValue}/${weekly.weekStart.dayOfMonth}")

  private fun toFullWidthNumber(value: Int): String = toFullWidth(String.format("%,d", value))

  private fun toFullWidth(text: String): String =
      buildString(text.length) {
        text.forEach { char ->
          append(
              when (char) {
                ' ' -> '　'
                in '!'..'~' -> (char.code + 0xFEE0).toChar()
                else -> char
              }
          )
        }
      }

  private fun isGraphInventory(inventory: Inventory): Boolean =
      inventory.holder is GraphInventoryHolder

  private fun formatCodePoint(codePoint: Int): String = "U+%04X".format(codePoint)

  private class GraphInventoryHolder : InventoryHolder {
    private lateinit var backingInventory: Inventory

    fun bind(inventory: Inventory) {
      this.backingInventory = inventory
    }

    override fun getInventory(): Inventory = backingInventory
  }
}
