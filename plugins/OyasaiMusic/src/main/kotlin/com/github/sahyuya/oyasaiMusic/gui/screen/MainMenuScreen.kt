package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
import com.github.sahyuya.oyasaiMusic.db.RankingEntryDto
import com.github.sahyuya.oyasaiMusic.db.RankingMetric
import com.github.sahyuya.oyasaiMusic.db.RankingSnapshot
import com.github.sahyuya.oyasaiMusic.economy.PayoutResult
import com.github.sahyuya.oyasaiMusic.model.UserRewardData
import com.github.sahyuya.oyasaiMusic.util.HeadTextureUtil
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack

/**
 * ⓪ メインメニュー（UI/UX設計書 2章、参照画像1枚目）。 左列タブを何も選んでいない初期状態、および物理アイテム「音楽プレイヤー」の Shift+右クリックで表示される。
 *
 * ランキング表示（サヒュヤ氏の指示に基づく仕様）:
 * - 3枠(額縁, slot 21,22,23) = 左から 日間 / 週間 / 総合 ランキング。
 * - 各枠は独立して現在の指標(いいね/再生数/お気に入り/フォロワー)を持ち、 既定はいいね数順。クリックで自分の枠だけ指標を切替（いいね→再生数→お気に入り→フォロワー→…）。
 * - 各枠のアイテム名=期間+現在の指標、Loreに1〜7位を列挙する （楽曲系: "{順位} {mcid} - 「{題名}」 {回数}回" / フォロワー: "{順位} {mcid} -
 *   {人数}フォロワー"）。
 * - 実データは [OyasaiMusic.rankingCacheService] のキャッシュ済みスナップショットをそのまま読む
 *   （日間=毎日0時に前日分、週間=毎週月曜0時に前週分、総合=30分ごとに再集計）。
 */
class MainMenuScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
) : BaseGridMenu(viewer, Component.text("メインメニュー")) {

  companion object {
    /** 二重クリックによる二重送金を防ぐ。 */
    private val claimsInProgress = ConcurrentHashMap.newKeySet<java.util.UUID>()
  }

  private enum class RankingColumn(val slot: Int, val label: String) {
    DAILY(21, "日間"),
    WEEKLY(22, "週間"),
    TOTAL(23, "総合"),
  }

  // 各列は独立して現在の指標を保持する（既定=いいね数）。
  private val columnMetric =
      mutableMapOf(
          RankingColumn.DAILY to RankingMetric.LIKES,
          RankingColumn.WEEKLY to RankingMetric.LIKES,
          RankingColumn.TOTAL to RankingMetric.LIKES,
      )

  private val claimSlot = 24
  private val adminEntrySlot = 26
  private var rewards = UserRewardData(viewer.uniqueId)

  init {
    render()
    reloadRewards()
  }

  private fun render() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
        inventory,
        null,
        state,
        sortLabel = "-",
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = null,
    )
    renderRankingRow()
    ContentGrid.fillBorderIfEmpty(inventory, Material.WHITE_STAINED_GLASS_PANE)
  }

  override fun refresh() = render()

  private fun renderRankingRow() {
    for (column in RankingColumn.entries) {
      val snapshot = snapshotFor(column)
      val metric = columnMetric.getValue(column)
      inventory.setItem(column.slot, rankingItem(column, metric, snapshot))
    }

    inventory.setItem(
        claimSlot,
        GuiItemBuilder(Material.BUNDLE)
            .name(Component.text("未受け取り報酬を受け取る", NamedTextColor.GREEN))
            .lore(
                pendingRewardLine(),
                totalRewardLine(),
                Component.text("クリックで一括受取", NamedTextColor.GRAY),
            )
            .build(),
    )

    if (viewer.hasPermission("oyasaimusic.admin")) {
      inventory.setItem(
          adminEntrySlot,
          GuiItemBuilder(Material.WRITABLE_BOOK)
              .name(Component.text("審査・履歴管理", NamedTextColor.LIGHT_PURPLE))
              .lore(Component.text("【OP専用】クリックで開く", NamedTextColor.GRAY))
              .build(),
      )
    } else {
      inventory.setItem(adminEntrySlot, null)
    }
  }

  private fun reloadRewards() {
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val loaded = plugin.userRepository.get(viewer.uniqueId)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        rewards = loaded
                        render()
                      },
                  )
            },
        )
  }

  private fun snapshotFor(column: RankingColumn): RankingSnapshot? =
      when (column) {
        RankingColumn.DAILY -> plugin.rankingCacheService.dailySnapshot
        RankingColumn.WEEKLY -> plugin.rankingCacheService.weeklySnapshot
        RankingColumn.TOTAL -> plugin.rankingCacheService.totalSnapshot
      }

  private fun rankingItem(
      column: RankingColumn,
      metric: RankingMetric,
      snapshot: RankingSnapshot?,
  ): ItemStack {
    val metricLabel =
        when (metric) {
          RankingMetric.LIKES -> "いいね数"
          RankingMetric.VIEWS -> "再生数"
          RankingMetric.FAVORITES -> "お気に入り数"
          RankingMetric.FOLLOWERS -> "フォロワー数"
        }
    val entries: List<RankingEntryDto> = snapshot?.entries?.get(metric).orEmpty()

    val lore =
        mutableListOf(
            Component.text("指標: $metricLabel", NamedTextColor.GRAY),
        )
    if (snapshot != null) {
      lore += Component.text("(${snapshot.periodLabel} 時点)", NamedTextColor.DARK_GRAY)
    }
    if (entries.isEmpty()) {
      lore += Component.text("データがありません", NamedTextColor.DARK_GRAY)
    } else {
      entries.forEach { entry ->
        val rankColor =
            when (entry.rank) {
              1 -> NamedTextColor.YELLOW
              2 -> NamedTextColor.GRAY
              3 -> NamedTextColor.GOLD
              else -> NamedTextColor.WHITE
            }
        val rankAndAuthor = Component.text("${entry.rank} ${entry.authorName}", rankColor)
        val line =
            if (metric == RankingMetric.FOLLOWERS) {
              rankAndAuthor.append(Component.text(" - ${entry.score}フォロワー", NamedTextColor.WHITE))
            } else {
              rankAndAuthor.append(
                  Component.text(" - 「${entry.title}」 ${entry.score}回", NamedTextColor.WHITE)
              )
            }
        lore += line
      }
    }
    lore += Component.text("クリックで指標を切替", NamedTextColor.DARK_GRAY)

    val name = Component.text("${column.label}ランキング ($metricLabel)", NamedTextColor.GOLD)

    // フォロワーランキングは1位作者のプレイヤーヘッドを、それ以外は1位の楽曲のレコード種類を
    // アイコンにする（recordMaterialが取得できない古いキャッシュ等では汎用ディスクにフォールバック）。
    if (metric == RankingMetric.FOLLOWERS) {
      val topAuthorUuid =
          entries.firstOrNull()?.let {
            runCatching { java.util.UUID.fromString(it.authorUuid) }.getOrNull()
          }
      val head =
          if (topAuthorUuid != null) {
            HeadTextureUtil.placeholderHead(topAuthorUuid, entries.first().authorName)
          } else {
            ItemStack(Material.PLAYER_HEAD)
          }
      head.editMeta { meta ->
        meta.displayName(name)
        meta.lore(lore)
      }
      if (topAuthorUuid != null) {
        val topAuthorName = entries.first().authorName
        HeadTextureUtil.resolveAsync(plugin, topAuthorUuid, topAuthorName) { resolved ->
          if (columnMetric[column] != metric || !viewer.isOnline) return@resolveAsync
          resolved.editMeta { meta ->
            meta.displayName(name)
            meta.lore(lore)
          }
          inventory.setItem(column.slot, resolved)
        }
      }
      return head
    }

    val icon =
        entries.firstOrNull()?.recordMaterial?.let { Material.matchMaterial(it) }
            ?: if (entries.isEmpty()) Material.ITEM_FRAME else Material.MUSIC_DISC_13

    return GuiItemBuilder(icon).name(name).lore(lore).build()
  }

  override fun onClick(event: InventoryClickEvent) {
    val slot = event.rawSlot
    val column = RankingColumn.entries.firstOrNull { it.slot == slot }
    if (column != null) {
      cycleMetric(column)
      return
    }
    if (NavTabRouter.handle(slot, null, null, plugin, menuManager, viewer)) return
    if (plugin.playbackController.handleControllerClick(slot, viewer)) return
    when (slot) {
      claimSlot -> claimRewards()
      adminEntrySlot ->
          if (viewer.hasPermission("oyasaimusic.admin")) {
            menuManager.open(viewer, AdminReviewScreen(plugin, menuManager, viewer))
          }
    }
  }

  private fun cycleMetric(column: RankingColumn) {
    val values = RankingMetric.entries
    val current = columnMetric.getValue(column)
    columnMetric[column] = values[(values.indexOf(current) + 1) % values.size]
    render()
  }

  private fun claimRewards() {
    if (!claimsInProgress.add(viewer.uniqueId)) {
      viewer.sendMessage("§7報酬を受け取り中です。")
      return
    }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val pending = plugin.userRepository.get(viewer.uniqueId)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (pending.pendingMoney == 0L && pending.pendingPoints == 0L) {
                          viewer.sendMessage("§7受け取れる報酬はありません。")
                          claimsInProgress.remove(viewer.uniqueId)
                          return@Runnable
                        }

                        val moneyResult =
                            plugin.economyService.deposit(viewer, pending.pendingMoney)
                        val pointResult =
                            plugin.economyService.grantPoints(viewer, pending.pendingPoints)
                        Bukkit.getScheduler()
                            .runTaskAsynchronously(
                                plugin,
                                Runnable {
                                  if (
                                      moneyResult is PayoutResult.Success &&
                                          pending.pendingMoney > 0
                                  ) {
                                    plugin.userRepository.consumePending(
                                        viewer.uniqueId,
                                        money = pending.pendingMoney,
                                    )
                                  }
                                  if (
                                      pointResult is PayoutResult.Success &&
                                          pending.pendingPoints > 0
                                  ) {
                                    plugin.userRepository.consumePending(
                                        viewer.uniqueId,
                                        points = pending.pendingPoints,
                                    )
                                  }
                                  Bukkit.getScheduler()
                                      .runTask(
                                          plugin,
                                          Runnable {
                                            val messages = mutableListOf<String>()
                                            if (pending.pendingMoney > 0)
                                                messages +=
                                                    if (moneyResult is PayoutResult.Success)
                                                        "${pending.pendingMoney}円"
                                                    else "お金: ${payoutFailure(moneyResult)}"
                                            if (pending.pendingPoints > 0)
                                                messages +=
                                                    if (pointResult is PayoutResult.Success)
                                                        "${pending.pendingPoints}pt"
                                                    else "ポイント: ${payoutFailure(pointResult)}"
                                            viewer.sendMessage(
                                                "§a受取結果: §f${messages.joinToString(" / ")}"
                                            )
                                            if (
                                                (pending.pendingMoney > 0 &&
                                                    moneyResult is PayoutResult.Success) ||
                                                    (pending.pendingPoints > 0 &&
                                                        pointResult is PayoutResult.Success)
                                            ) {
                                              plugin.soundEffectService.play(
                                                  PluginSoundEffect.REWARD_CLAIM,
                                                  listOf(viewer),
                                              )
                                            }
                                            claimsInProgress.remove(viewer.uniqueId)
                                            reloadRewards()
                                          },
                                      )
                                },
                            )
                      },
                  )
            },
        )
  }

  private fun payoutFailure(result: PayoutResult): String =
      when (result) {
        PayoutResult.Success -> ""
        is PayoutResult.Unavailable -> "${result.reason}（残高は保持）"
        is PayoutResult.Failed -> "${result.reason}（残高は保持）"
      }

  private fun pendingRewardLine(): Component {
    val hasPending = rewards.pendingMoney > 0 || rewards.pendingPoints > 0
    return Component.text("受取: ", if (hasPending) NamedTextColor.GREEN else NamedTextColor.GRAY)
        .append(
            Component.text(
                "${rewards.pendingMoney}円",
                if (rewards.pendingMoney > 0) NamedTextColor.YELLOW else NamedTextColor.GRAY,
            )
        )
        .append(Component.text(" / ", NamedTextColor.GRAY))
        .append(
            Component.text(
                "${rewards.pendingPoints}pt",
                if (rewards.pendingPoints > 0) NamedTextColor.AQUA else NamedTextColor.GRAY,
            )
        )
  }

  private fun totalRewardLine(): Component =
      Component.text("総収入: ", NamedTextColor.GRAY)
          .append(Component.text("${rewards.totalMoney}円", NamedTextColor.GOLD))
          .append(Component.text(" / ", NamedTextColor.GRAY))
          .append(Component.text("${rewards.totalPoints}pt", NamedTextColor.AQUA))
}
