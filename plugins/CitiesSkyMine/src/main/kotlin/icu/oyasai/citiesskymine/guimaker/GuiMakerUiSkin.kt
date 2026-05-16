package icu.oyasai.citiesskymine.guimaker

import icu.oyasai.citiesskymine.Main
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration

data class UiSkinData(
    val positions: Map<String, Int> = emptyMap(),
    val icons: Map<Int, Material> = emptyMap(),
    val enabledLabels: Set<String>? = null
)

object GuiMakerUiSkinDefinitions {
  const val SCHEMA_VERSION = 2
  const val ITEM_PREVIEW_LABEL = "アイテムプレビュー"
  val restoreSlots = listOf(47, 48, 50, 51)

  // 画面ごとのデフォルトスロット定義 (slot -> label to default Material)
  val screenDefs: Map<String, Map<Int, Pair<String, Material>>> = mapOf(
      "context" to mapOf(
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          9  to ("表示カテゴリ"       to Material.CYAN_CANDLE),
          10 to ("名前を設定"         to Material.NAME_TAG),
          11 to ("ロアを追加"         to Material.BOOK),
          12 to ("ロア編集"           to Material.WRITABLE_BOOK),
          18 to ("条件と動作カテゴリ" to Material.BLUE_CANDLE),
          19 to ("権限を設定"         to Material.IRON_DOOR),
          20 to ("アクションを追加"   to Material.LIME_DYE),
          21 to ("アクション管理"     to Material.COMMAND_BLOCK),
          27 to ("危険操作カテゴリ"   to Material.RED_CANDLE),
          28 to ("スロットをクリア"   to Material.BARRIER),
          36 to ("お気に入りカテゴリ" to Material.ORANGE_CANDLE),
          37 to ("お気に入りを管理"   to Material.PAPER)
      ),
      "action_type" to mapOf(
          0  to ("アクション追加 (情報)" to Material.LIME_DYE),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          9  to ("メニュー系カテゴリ"   to Material.ENDER_CHEST),
          10 to ("メニューを開く"       to Material.ENDER_CHEST),
          11 to ("ポップアップ"         to Material.CHORUS_FRUIT),
          12 to ("メニューを閉じる"     to Material.OAK_DOOR),
          18 to ("コマンド系カテゴリ"   to Material.COMMAND_BLOCK),
          19 to ("プレイヤーコマンド"   to Material.COMMAND_BLOCK),
          20 to ("コンソールコマンド"   to Material.COMPARATOR),
          21 to ("OPコマンド"           to Material.NETHER_STAR),
          22 to ("コマンドを提案"       to Material.BOOK),
          27 to ("メッセージ系カテゴリ" to Material.PAPER),
          28 to ("メッセージ送信"       to Material.PAPER),
          29 to ("ブロードキャスト"     to Material.BEACON),
          30 to ("URL"                   to Material.MAP),
          31 to ("チャットペースト"     to Material.WRITABLE_BOOK),
          36 to ("サウンド系カテゴリ"   to Material.NOTE_BLOCK),
          37 to ("サウンドを再生"       to Material.NOTE_BLOCK)
      ),
      "action_manage" to mapOf(
          0  to ("アクション管理 (情報)" to Material.COMMAND_BLOCK),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          37 to ("アクションを追加"     to Material.LIME_DYE),
          43 to ("全アクション削除"     to Material.TNT)
      ),
      "action_edit" to mapOf(
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          10 to ("値を編集"             to Material.WRITABLE_BOOK),
          12 to ("上へ移動"             to Material.ARROW),
          14 to ("下へ移動"             to Material.ARROW),
          22 to ("現在の値"             to Material.BOOK),
          37 to ("アクションを追加"     to Material.COMMAND_BLOCK),
          43 to ("このアクションを削除" to Material.BARRIER)
      ),
      "lore_manage" to mapOf(
          0  to ("ロア編集 (情報)" to Material.WRITABLE_BOOK),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          37 to ("ロアを追加"     to Material.BOOK),
          43 to ("ロアを全削除"   to Material.TNT)
      ),
      "lore_edit" to mapOf(
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          10 to ("本文を編集"   to Material.WRITABLE_BOOK),
          12 to ("上へ移動"     to Material.ARROW),
          14 to ("下へ移動"     to Material.ARROW),
          37 to ("ロアを追加"   to Material.BOOK),
          43 to ("この行を削除" to Material.BARRIER)
      ),
      "permission" to mapOf(
          0  to ("権限を設定 (情報)"      to Material.IRON_DOOR),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          9  to ("プレイヤーランク"        to Material.EMERALD),
          18 to ("建築ランク / 特別ロール" to Material.BRICKS),
          27 to ("スタッフ / その他"       to Material.NETHER_STAR),
          40 to ("権限をクリア"            to Material.BARRIER),
          42 to ("手入力"                  to Material.WRITABLE_BOOK)
      ),
      "sound_category" to mapOf(
          0  to ("効果音 (情報)" to Material.NOTE_BLOCK),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          10 to ("ui"         to Material.NOTE_BLOCK),
          11 to ("entity"     to Material.PLAYER_HEAD),
          12 to ("block"      to Material.STONE),
          13 to ("item"       to Material.CHEST),
          14 to ("music"      to Material.JUKEBOX),
          15 to ("ambient"    to Material.AMETHYST_BLOCK),
          16 to ("weather"    to Material.WATER_BUCKET),
          19 to ("event"      to Material.BELL),
          37 to ("音量 -0.25" to Material.REDSTONE_TORCH),
          39 to ("音量"       to Material.NOTE_BLOCK),
          41 to ("音量 +0.25" to Material.TORCH),
          42 to ("手入力"     to Material.WRITABLE_BOOK),
          43 to ("音量リセット" to Material.LEVER)
      ),
      "sound_pick" to mapOf(
          0  to ("効果音 (情報)"  to Material.NOTE_BLOCK),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          36 to ("前のページ"     to Material.ARROW),
          37 to ("音量 -0.25"     to Material.REDSTONE_TORCH),
          39 to ("音量"           to Material.NOTE_BLOCK),
          40 to ("カテゴリへ戻る" to Material.BOOK),
          41 to ("音量 +0.25"     to Material.TORCH),
          42 to ("手入力"         to Material.WRITABLE_BOOK),
          43 to ("音量リセット"   to Material.LEVER),
          44 to ("次のページ"     to Material.ARROW)
      ),
      "color" to mapOf(
          0  to ("カラー (情報)"       to Material.LIGHT_BLUE_CANDLE),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          10 to ("黒 &0"               to Material.BLACK_WOOL),
          11 to ("濃紺 &1"             to Material.BLUE_WOOL),
          12 to ("緑 &2"               to Material.GREEN_WOOL),
          13 to ("シアン &3"           to Material.CYAN_WOOL),
          14 to ("濃赤 &4"             to Material.RED_WOOL),
          15 to ("紫 &5"               to Material.PURPLE_WOOL),
          16 to ("金色 &6"             to Material.ORANGE_WOOL),
          17 to ("灰色 &7"             to Material.LIGHT_GRAY_WOOL),
          19 to ("暗灰 &8"             to Material.GRAY_WOOL),
          20 to ("青 &9"               to Material.LIGHT_BLUE_WOOL),
          21 to ("黄緑 &a"             to Material.LIME_WOOL),
          22 to ("水色 &b"             to Material.CYAN_WOOL),
          23 to ("赤 &c"               to Material.PINK_WOOL),
          24 to ("ピンク &d"           to Material.MAGENTA_WOOL),
          25 to ("黄色 &e"             to Material.YELLOW_WOOL),
          26 to ("白 &f"               to Material.WHITE_WOOL),
          40 to ("カラーなし / 手動入力" to Material.PAPER)
      ),
      "popup_pick" to mapOf(
          0  to ("ポップアップ (情報)" to Material.CHORUS_FRUIT),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          10 to ("shopindex"           to Material.CHEST),
          11 to ("utility"             to Material.CRAFTING_TABLE),
          12 to ("channel"             to Material.JUKEBOX),
          19 to ("sociallikes"         to Material.HEART_OF_THE_SEA),
          20 to ("carbuilder"          to Material.MINECART),
          21 to ("links"               to Material.MAP),
          44 to ("IDを手入力"          to Material.WRITABLE_BOOK)
      ),
      "menu_pick" to mapOf(
          0  to ("通常メニュー (情報)" to Material.ENDER_CHEST),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          44 to ("IDを手入力"         to Material.WRITABLE_BOOK)
      ),
      "favorites" to mapOf(
          0  to ("お気に入り管理 (情報)" to Material.GOLD_NUGGET),
          4  to (ITEM_PREVIEW_LABEL to Material.ITEM_FRAME),
          37 to ("お気に入りを追加"     to Material.PAPER),
          43 to ("全削除"               to Material.TNT)
      ),
      "confirm" to mapOf(
          13 to ("実行内容"   to Material.TNT),
          20 to ("実行する"   to Material.LIME_CONCRETE),
          24 to ("キャンセル" to Material.RED_CONCRETE)
      )
  )

  fun screenDefaultGlass(screenName: String): Material = when (screenName) {
    "context", "action_type"                                  -> Material.BLUE_STAINED_GLASS_PANE
    "action_manage", "action_edit", "popup_pick"              -> Material.PURPLE_STAINED_GLASS_PANE
    "lore_manage", "lore_edit", "favorites"                   -> Material.YELLOW_STAINED_GLASS_PANE
    "permission", "sound_category", "sound_pick", "color"     -> Material.LIGHT_BLUE_STAINED_GLASS_PANE
    "menu_pick"                                               -> Material.LIME_STAINED_GLASS_PANE
    "confirm"                                                 -> Material.RED_STAINED_GLASS_PANE
    else                                                      -> Material.GRAY_STAINED_GLASS_PANE
  }

  fun legacyEnabledAdditions(screenName: String): Set<String> =
      screenDefs[screenName]
          ?.filter { (slot, pair) -> slot == 0 || pair.first == ITEM_PREVIEW_LABEL }
          ?.values
          ?.map { it.first }
          ?.toSet()
          .orEmpty()
}

class GuiMakerUiSkinStore(private val plugin: Main) {
  private val cache: MutableMap<String, UiSkinData> = mutableMapOf()

  private fun file(screenName: String) =
      java.io.File(plugin.dataFolder, "ui-skin/$screenName.yml")

  fun load(screenName: String): UiSkinData {
    cache[screenName]?.let { return it }
    val file = file(screenName)
    if (!file.exists()) return UiSkinData().also { cache[screenName] = it }
    val result = runCatching {
      val yaml = YamlConfiguration.loadConfiguration(file)
      val schema = yaml.getInt("schema", 1)
      val positions = mutableMapOf<String, Int>()
      yaml.getConfigurationSection("positions")?.getKeys(false)?.forEach { key ->
        val path = "positions.$key"
        val section = yaml.getConfigurationSection(path)
        if (section != null && section.contains("label") && section.contains("slot")) {
          val label = section.getString("label") ?: return@forEach
          positions[label] = section.getInt("slot")
        } else if (section != null) {
          val childKey = section.getKeys(false).singleOrNull()
          val value = childKey?.let { section.get(it) }
          if (childKey != null && value is Number) positions["$key.$childKey"] = value.toInt()
        } else {
          val value = yaml.get(path)
          if (value is Number) positions[key] = value.toInt()
        }
      }
      val icons = yaml.getConfigurationSection("icons")?.getKeys(false)?.mapNotNull { key ->
        val slot = key.toIntOrNull() ?: return@mapNotNull null
        val mat = yaml.getString("icons.$key")?.uppercase()
            ?.let { runCatching { Material.valueOf(it) }.getOrNull() } ?: return@mapNotNull null
        slot to mat
      }?.toMap()
          ?: yaml.getKeys(false).mapNotNull { key ->
            val slot = key.toIntOrNull() ?: return@mapNotNull null
            val mat = yaml.getString(key)?.uppercase()
                ?.let { runCatching { Material.valueOf(it) }.getOrNull() } ?: return@mapNotNull null
            slot to mat
          }.toMap()
      val allLabels = GuiMakerUiSkinDefinitions.screenDefs[screenName]?.values?.map { it.first }?.toSet().orEmpty()
      val loadedEnabledLabels = when {
        yaml.contains("enabled") -> yaml.getStringList("enabled").filter { it in allLabels }.toSet()
        yaml.contains("hidden") -> allLabels - yaml.getStringList("hidden").toSet()
        else -> null
      }
      val enabledLabels = if (loadedEnabledLabels != null && schema < GuiMakerUiSkinDefinitions.SCHEMA_VERSION) {
        loadedEnabledLabels + GuiMakerUiSkinDefinitions.legacyEnabledAdditions(screenName)
      } else {
        loadedEnabledLabels
      }
      UiSkinData(positions, icons, enabledLabels)
    }.getOrElse { UiSkinData() }
    cache[screenName] = result
    return result
  }

  fun save(screenName: String, data: UiSkinData) {
    val file = file(screenName).also { it.parentFile.mkdirs() }
    val yaml = YamlConfiguration()
    yaml.set("schema", GuiMakerUiSkinDefinitions.SCHEMA_VERSION)
    data.positions.entries.sortedWith(compareBy({ it.value }, { it.key })).forEachIndexed { index, (label, slot) ->
      yaml.set("positions.$index.label", label)
      yaml.set("positions.$index.slot", slot)
    }
    data.icons.toSortedMap().forEach { (slot, mat) -> yaml.set("icons.$slot", mat.name) }
    data.enabledLabels?.let { enabled -> yaml.set("enabled", enabled.sorted()) }
    yaml.save(file)
    cache[screenName] = data
  }
}
