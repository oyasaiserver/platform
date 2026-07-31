package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PlaybackSession
import com.github.sahyuya.oyasaiMusic.model.Song
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/** 左列ナビゲーションタブ（UI/UX設計書 2章）。値の`slot`は6×9グリッドでの列0の行位置。 */
enum class NavTab(val slot: Int) {
    MY_SONGS(0),             // ① プレイヤースキン頭：自作楽曲一覧
    SEARCH(9),                // ② 赤色ブロック：検索メニュー
    ALL_SONGS(18),             // ③ 黄色ブロック：全楽曲一覧
    FAVORITES_PLAYLISTS(27),    // ④ 緑色ブロック：お気に入り＆プレイリスト
    ACTION_MODE(36),            // ⑤ 水色ブロック：アクションモード切り替え（主に統合版用）
}

/** コンテンツ領域（5×8=40スロット）: 各行の1〜8列目。 */
object ContentGrid {
    val SLOTS: List<Int> = (0..4).flatMap { row -> (1..8).map { col -> row * 9 + col } }

    /**
     * 5×8ディスプレイの外枠(外周)スロット一覧（サヒュヤ氏の指示による）。
     * 上端(row0)全体・下端(row4)全体・左右端(row1〜3の列1,8)のみ。中央部分は含まない。
     */
    val BORDER_SLOTS: List<Int> = listOf(
        1, 2, 3, 4, 5, 6, 7, 8,
        10, 17,
        19, 26,
        28, 35,
        37, 38, 39, 40, 41, 42, 43, 44,
    )

    /**
     * 外枠スロットのうち、まだ何も置かれていない(null)スロットのみを板ガラスで埋める
     * （サヒュヤ氏の指示: 「空き枠であったら置いて」）。実際のコンテンツは必ずこれより先に
     * 描画してから呼び出すこと。
     */
    fun fillBorderIfEmpty(inventory: Inventory, material: Material) {
        val pane = GuiItemBuilder.filler(material)
        BORDER_SLOTS.forEach { slot -> if (inventory.getItem(slot) == null) inventory.setItem(slot, pane) }
    }
}

/** 下段メディアコントローラーのスロット（UI/UX設計書 3章）。 */
object ControllerSlots {
    const val SORT = 45
    const val PAGE_PREV = 46
    const val PAGE_NEXT = 47
    const val NOW_PLAYING = 48
    const val PLAY_PAUSE = 49
    const val PREV_SONG = 50
    const val NEXT_SONG = 51
    const val LOOP = 52
    const val SHUFFLE = 53
}

/** ループモード（UI/UX設計書 3章：OFF / リスト全体 / 1曲）。 */
enum class LoopMode { OFF, LIST, SINGLE }

/**
 * 全画面共通のコントローラー状態（再生中情報・ループ・シャッフル）。
 * [nowPlayingSong] / [activeSession] は実際に鳴っている楽曲・再生セッションそのものを保持し、
 * 下段コントローラーの表示・一時停止/再開・「再生中の曲の詳細を開く」操作の基点になる
 * （[com.github.sahyuya.oyasaiMusic.gui.PlaybackController] が一元的に更新する。
 * 各画面から直接この状態を書き換えないこと＝更新後の再描画漏れが不具合の温床になっていたため）。
 */
data class PlayerControllerState(
    var nowPlayingSong: Song? = null,
    var activeSession: PlaybackSession? = null,
    var isPlaying: Boolean = false,
    var loopMode: LoopMode = LoopMode.OFF,
    var shuffle: Boolean = false,
    /**
     * プレイリスト以外（一覧・詳細・コマンド試聴）から開始した曲にも前後移動を提供するための
     * プレイヤー単位の試聴履歴。現在位置より後ろは、新しい曲を選んだ時点で破棄する。
     */
    val listeningHistory: MutableList<Song> = mutableListOf(),
    var listeningHistoryIndex: Int = -1,
)

/** [PlayerControllerState] をプレイヤーごとに保持する簡易ストア。 */
class PlayerControllerStateService {
    private val states = ConcurrentHashMap<UUID, PlayerControllerState>()
    fun stateFor(playerUuid: UUID): PlayerControllerState = states.getOrPut(playerUuid) { PlayerControllerState() }
}

/**
 * 左列ナビゲーションと下段メディアコントローラーを描画する共通処理（UI/UX設計書 1〜3章）。
 * 各画面は必ずこれを呼び出してから、コンテンツ領域([ContentGrid.SLOTS])を自分で描画すること。
 *
 * @param viewer 表示対象のプレイヤー（⑤アクションモードタブの現在状態表示に使用）
 * @param actionModeCategory この画面のアクションモードカテゴリ（[ActionModeCategory]参照）。
 *        nullの場合はアクションモードを使わない画面として、タブに現在値を表示しない。
 */
object GuiChrome {

    fun render(
        inventory: Inventory,
        activeTab: NavTab?,
        controllerState: PlayerControllerState,
        sortLabel: String,
        viewer: Player,
        plugin: OyasaiMusic,
        actionModeCategory: String? = null,
    ) {
        renderNav(inventory, activeTab, viewer, plugin, actionModeCategory)
        renderController(inventory, controllerState, sortLabel)
    }

    private fun renderNav(inventory: Inventory, activeTab: NavTab?, viewer: Player, plugin: OyasaiMusic, actionModeCategory: String?) {
        inventory.setItem(NavTab.MY_SONGS.slot, mySongsNavItem(viewer, plugin, NavTab.MY_SONGS == activeTab))
        inventory.setItem(NavTab.SEARCH.slot, navItem(Material.RED_CONCRETE_POWDER, "検索", NamedTextColor.RED, NavTab.SEARCH == activeTab))
        inventory.setItem(NavTab.ALL_SONGS.slot, navItem(Material.YELLOW_CONCRETE_POWDER, "全楽曲一覧", NamedTextColor.YELLOW, NavTab.ALL_SONGS == activeTab))
        inventory.setItem(
            NavTab.FAVORITES_PLAYLISTS.slot,
            navItem(Material.LIME_CONCRETE_POWDER, "お気に入り・プレイリスト", NamedTextColor.GREEN, NavTab.FAVORITES_PLAYLISTS == activeTab),
        )

        // ⑤アクションモードタブ: サヒュヤ氏の指示「左タブのアクションモードの切り替え状況」表示に対応。
        val actionModeLore = if (actionModeCategory != null) {
            val current = BedrockActionModeService.get(viewer.uniqueId, actionModeCategory)
            BedrockActionModeService.availableModes(actionModeCategory)
                .chunked(2)
                .map { row ->
                    row.map { actionModeLabel(it, current) }
                        .reduce { combined, label ->
                            combined.append(Component.text("  ", NamedTextColor.DARK_GRAY)).append(label)
                        }
                }
        } else {
            listOf(Component.text("この画面では未使用", NamedTextColor.DARK_GRAY))
        }
        inventory.setItem(
            NavTab.ACTION_MODE.slot,
            GuiItemBuilder(Material.CYAN_CONCRETE_POWDER)
                .name(navTitle("アクションモード切り替え", NamedTextColor.AQUA))
                .lore(actionModeLore)
                .glint(NavTab.ACTION_MODE == activeTab)
                .build(),
        )
    }

    private fun actionModeLabel(mode: ActionMode, selected: ActionMode): Component =
        Component.text(mode.displayName, if (mode == selected) NamedTextColor.GREEN else NamedTextColor.GRAY)

    /**
     * ①タブ: サヒュヤ氏の指示により、スティーブ固定ヘッドではなく開いたプレイヤー自身のスキンを使い、
     * ホバーで自分の統計（UI/UX設計書2章）を表示する。オンラインプレイヤーの
     * [Player.getPlayerProfile] はテクスチャ解決済みのため同期的に組み立てられる。
     */
    private fun mySongsNavItem(viewer: Player, plugin: OyasaiMusic, active: Boolean): ItemStack {
        val stats = AuthorStatsCache.get(plugin, viewer.uniqueId)
        val lore = mutableListOf<Component>()
        if (active) lore += Component.text("選択中", NamedTextColor.GRAY)
        if (stats != null) {
            lore += profileStat("総いいね数", stats.totalLikes)
            lore += profileStat("総お気に入り数", stats.totalFavorites)
            lore += profileStat("総再生回数", stats.totalViews)
            lore += profileStat("総フォロワー数", stats.totalFollowers)
        } else {
            lore += Component.text("統計を読み込み中...", NamedTextColor.DARK_GRAY)
        }

        val item = ItemStack(Material.PLAYER_HEAD)
        item.editMeta { meta ->
            meta as SkullMeta
            meta.playerProfile = viewer.playerProfile
            meta.displayName(navTitle("マイプロフィール", NamedTextColor.WHITE))
            meta.lore(lore.map { it.decoration(TextDecoration.ITALIC, false) })
            meta.setEnchantmentGlintOverride(if (active) true else null)
        }
        return item
    }

    private fun navItem(material: Material, label: String, color: NamedTextColor, active: Boolean): ItemStack =
        GuiItemBuilder(material)
            .name(navTitle(label, color))
            .lore(if (active) listOf(Component.text("選択中", NamedTextColor.GRAY)) else emptyList())
            .glint(active)
            .build()

    /** 左タブの5項目だけに使う、色付き・太字・非イタリックの表示名。 */
    private fun navTitle(label: String, color: NamedTextColor): Component =
        Component.text(label, color)
            .decoration(TextDecoration.BOLD, true)
            .decoration(TextDecoration.ITALIC, false)

    private fun profileStat(label: String, value: Long): Component =
        Component.text("$label: ", NamedTextColor.GRAY)
            .append(Component.text(value.toString(), NamedTextColor.AQUA))

    /** 40枠をコンテンツで使い切る画面用。1ページ目の「前のページ」欄を戻る操作に置換する。 */
    fun backControllerButton(): ItemStack =
        GuiItemBuilder(Material.COPPER_SPEAR).name(Component.text("戻る", NamedTextColor.WHITE)).build()

    /** ディスプレイ内に配置する戻る操作。下段コントローラー用とは素材を分けて視認性を保つ。 */
    fun contentBackButton(): ItemStack =
        GuiItemBuilder(Material.ARROW).name(Component.text("戻る", NamedTextColor.WHITE)).build()

    private fun renderController(inventory: Inventory, state: PlayerControllerState, sortLabel: String) {
        inventory.setItem(
            ControllerSlots.SORT,
            GuiItemBuilder(Material.HOPPER)
                .name(Component.text("並び替え", NamedTextColor.GOLD))
                .lore(
                    Component.text("現在: $sortLabel", NamedTextColor.GRAY),
                    Component.text("クリックで切替", NamedTextColor.DARK_GRAY),
                )
                .build(),
        )
        inventory.setItem(ControllerSlots.PAGE_PREV, GuiItemBuilder(Material.RED_DYE).name(Component.text("前のページ", NamedTextColor.RED)).build())
        inventory.setItem(ControllerSlots.PAGE_NEXT, GuiItemBuilder(Material.LIME_DYE).name(Component.text("次のページ", NamedTextColor.GREEN)).build())

        val nowPlayingName = state.nowPlayingSong?.let(::songTitle)
            ?: Component.text("再生中の曲はありません", NamedTextColor.AQUA)
        inventory.setItem(
            ControllerSlots.NOW_PLAYING,
            GuiItemBuilder(state.nowPlayingSong?.let { Material.matchMaterial(it.recordMaterial) } ?: Material.MUSIC_DISC_13)
                .name(nowPlayingName)
                .lore(Component.text("クリックで詳細を開く", NamedTextColor.GRAY))
                .glint(state.isPlaying)
                .build(),
        )
        inventory.setItem(
            ControllerSlots.PLAY_PAUSE,
            GuiItemBuilder(Material.JUKEBOX)
                .name(Component.text(if (state.isPlaying) "一時停止" else "再生", NamedTextColor.GOLD))
                .lore(
                    if (state.activeSession == null) listOf(Component.text("再生中の曲を選ぶとここから一時停止できます", NamedTextColor.DARK_GRAY))
                    else emptyList(),
                )
                .glint(state.isPlaying)
                .build(),
        )
        inventory.setItem(ControllerSlots.PREV_SONG, GuiItemBuilder(Material.YELLOW_DYE).name(Component.text("前の曲", NamedTextColor.YELLOW)).build())
        inventory.setItem(ControllerSlots.NEXT_SONG, GuiItemBuilder(Material.LIGHT_BLUE_DYE).name(Component.text("次の曲", NamedTextColor.AQUA)).build())

        val loopLabel = when (state.loopMode) {
            LoopMode.OFF -> "OFF"
            LoopMode.LIST -> "リスト全体"
            LoopMode.SINGLE -> "1曲"
        }
        inventory.setItem(
            ControllerSlots.LOOP,
            GuiItemBuilder(Material.LEAD)
                .name(Component.text("ループ: $loopLabel", NamedTextColor.LIGHT_PURPLE))
                .glint(state.loopMode != LoopMode.OFF)
                .build(),
        )
        inventory.setItem(
            ControllerSlots.SHUFFLE,
            GuiItemBuilder(Material.WIND_CHARGE)
                .name(Component.text("シャッフル: ${if (state.shuffle) "ON" else "OFF"}", NamedTextColor.BLUE))
                .glint(state.shuffle)
                .build(),
        )
    }
}
