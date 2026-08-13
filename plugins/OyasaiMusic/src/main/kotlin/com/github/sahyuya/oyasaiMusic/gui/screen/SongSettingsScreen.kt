package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.CircuitRecorder
import com.github.sahyuya.oyasaiMusic.audio.GridRecorder
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
import com.github.sahyuya.oyasaiMusic.audio.RecordingReplacementTarget
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.model.SongStatus
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import java.io.File
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent

/**
 * ⑦ 楽曲設定画面（作者・OP専用、UI/UX設計書 8章、参照画像7枚目）。 設定可能項目: 公開、題名、BPM、レコードの種類、レコード価格、参考URL、オリジナル審査提出、楽曲削除。
 *
 * 【スロット配置】 slot11: 現在のレコードのプレビュー（クリックで再生） slot12: 公開切替（トグル。ライム/グレー染料） slot14:
 * 参考URLを設定（本、Book-and-Quill入力） slot15:
 * オリジナル審査を提出（OPへ通知＋[com.github.sahyuya.oyasaiMusic.db.SongRepository.requestReview]で
 * 審査キューに登録され、OP専用「審査・履歴管理GUI」([AdminReviewScreen])に表示される） slot20: 題名（サイン、Anvil入力） slot21:
 * BPM（ロケット花火、Anvil数値入力） slot22: レコードの種類（クリックで循環） slot23: レコード価格（エメラルド、Anvil数値入力） slot24:
 * 録音方式を選んで音源を再読み込み／再録音 slot37: 戻る（矢、サヒュヤ氏指定の座標(1,4)＝コンテンツ領域左下） slot44: 楽曲削除（TNT、2回クリックで確定）
 *
 * 【公開とオリジナル審査の関係（サヒュヤ氏の指示により確定）】 「公開」は`songs.published`という審査ステータス(`status`)とは独立したカラムで管理する。
 * プレイヤーは`published`を自由にON/OFFでき、一覧・検索・ランキング等は`published=true`のみを対象とする。
 * `status`(下書き/仮OK/永続OK/却下)はOPによる「オリジナル審査」の結果として引き続き別管理し、
 * 収益化（視聴ポイント・レコード売上還元）の可否にのみ使用する（[Song.isMonetizationEligible]）。
 */
class SongSettingsScreen(
    private val plugin: OyasaiMusic,
    private val menuManager: MenuManager,
    viewer: Player,
    initialSong: Song,
) : BaseGridMenu(viewer, Component.text("楽曲設定")), SongUpdateAware {

  private val previewSlot = 11
  private val publishSlot = 12
  private val urlSlot = 14
  private val submitReviewSlot = 15
  private val titleSlot = 20
  private val bpmSlot = 21
  private val recordTypeSlot = 22
  private val priceSlot = 23
  private val reloadClipboardSlot = 24
  private val backSlot = 37
  private val deleteSlot = 44

  private var song: Song = initialSong
  private var pendingDeleteConfirm = false

  companion object {
    // vanilla音楽レコードの循環候補。存在しないバージョンでは自動的に読み飛ばす。
    private val RECORD_MATERIAL_CYCLE =
        listOf(
            "MUSIC_DISC_13",
            "MUSIC_DISC_CAT",
            "MUSIC_DISC_BLOCKS",
            "MUSIC_DISC_CHIRP",
            "MUSIC_DISC_FAR",
            "MUSIC_DISC_MALL",
            "MUSIC_DISC_MELLOHI",
            "MUSIC_DISC_STAL",
            "MUSIC_DISC_STRAD",
            "MUSIC_DISC_WARD",
            "MUSIC_DISC_11",
            "MUSIC_DISC_WAIT",
            "MUSIC_DISC_PIGSTEP",
            "MUSIC_DISC_OTHERSIDE",
            "MUSIC_DISC_5",
            "MUSIC_DISC_RELIC",
            "MUSIC_DISC_CREATOR",
            "MUSIC_DISC_CREATOR_MUSIC_BOX",
            "MUSIC_DISC_PRECIPICE",
            "MUSIC_DISC_TEARS",
            "MUSIC_DISC_LAVA_CHICKEN",
        )
  }

  init {
    render()
  }

  override fun refresh() = render()

  override fun onSongUpdated(updatedSong: Song) {
    if (song.id == updatedSong.id) {
      song = updatedSong
      render()
    }
  }

  private fun hasAccess(): Boolean =
      song.authorUuid == viewer.uniqueId || viewer.hasPermission("oyasaimusic.admin")

  private fun render() {
    val state = plugin.controllerStateService.stateFor(viewer.uniqueId)
    GuiChrome.render(
        inventory,
        null,
        state,
        sortLabel = "-",
        viewer = viewer,
        plugin = plugin,
        actionModeCategory = ActionModeCategory.SONG_SETTINGS,
    )

    if (!hasAccess()) {
      inventory.setItem(
          previewSlot,
          GuiItemBuilder(Material.BARRIER)
              .name(Component.text("編集権限がありません", NamedTextColor.RED))
              .build(),
      )
      inventory.setItem(backSlot, backButton())
      ContentGrid.fillBorderIfEmpty(inventory, Material.LIGHT_BLUE_STAINED_GLASS_PANE)
      return
    }

    inventory.setItem(previewSlot, previewItem())
    inventory.setItem(publishSlot, publishItem())
    inventory.setItem(
        urlSlot,
        GuiItemBuilder(Material.WRITTEN_BOOK)
            .name(Component.text("参考URLを設定", NamedTextColor.YELLOW))
            .lore(Component.text("現在: ${song.referenceUrl ?: "未設定"}", NamedTextColor.GRAY))
            .build(),
    )
    inventory.setItem(submitReviewSlot, submitReviewItem())
    inventory.setItem(
        titleSlot,
        GuiItemBuilder(Material.NAME_TAG)
            .name(Component.text("題名を変更", NamedTextColor.YELLOW))
            .lore(Component.text("現在: ", NamedTextColor.GRAY).append(songTitle(song)))
            .build(),
    )
    inventory.setItem(
        bpmSlot,
        GuiItemBuilder(Material.REPEATER)
            .name(Component.text("BPM(再生速度)を変更", NamedTextColor.YELLOW))
            .lore(
                Component.text("現在: ${song.bpm}", NamedTextColor.GRAY),
                Component.text("クリックで金床入力", NamedTextColor.GOLD),
            )
            .build(),
    )
    inventory.setItem(recordTypeSlot, recordTypeItem())
    inventory.setItem(
        priceSlot,
        GuiItemBuilder(Material.EMERALD)
            .name(Component.text("レコード価格を変更", NamedTextColor.YELLOW))
            .lore(Component.text("現在: ${song.price}円", NamedTextColor.GRAY))
            .build(),
    )
    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    inventory.setItem(
        reloadClipboardSlot,
        GuiItemBuilder(Material.IRON_NAUTILUS_ARMOR)
            .name(Component.text("FAWEクリップボードを再読み込み", NamedTextColor.YELLOW))
            .lore(
                Component.text("現在の音源ファイルを上書きします", NamedTextColor.RED),
                *ActionLoreBuilder.build(
                        viewer,
                        prefix,
                        ActionModeCategory.SONG_SETTINGS,
                        "/rec we grid",
                        "/rec live",
                        "/rec we start",
                        "/rec we default",
                    )
                    .toTypedArray(),
            )
            .build(),
    )
    inventory.setItem(backSlot, backButton())
    inventory.setItem(deleteSlot, deleteItem())
    ContentGrid.fillBorderIfEmpty(inventory, Material.LIME_STAINED_GLASS_PANE)
  }

  private fun previewItem() =
      GuiItemBuilder(Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13)
          .name(songTitle(song))
          .lore(
              Component.text("ステータス: ${statusLabel(song.status)}", NamedTextColor.GRAY),
              SongLoreComponents.statistics(song.likes, song.views),
          )
          .build()

  private fun submitReviewItem() =
      when {
        song.status == SongStatus.TEMP_OK && song.reviewRequestedAt != null ->
            GuiItemBuilder(Material.BARRIER)
                .name(Component.text("審査申請を取り消す", NamedTextColor.RED))
                .lore(Component.text("クリックでOP審査への申請を取り消します", NamedTextColor.GRAY))
                .build()
        !song.published ->
            GuiItemBuilder(Material.GRAY_DYE)
                .name(Component.text("オリジナル審査を提出", NamedTextColor.DARK_GRAY))
                .lore(Component.text("公開後に審査へ提出できます", NamedTextColor.GRAY))
                .build()
        else ->
            GuiItemBuilder(Material.PAPER)
                .name(Component.text("オリジナル審査を提出", NamedTextColor.LIGHT_PURPLE))
                .lore(
                    Component.text("クリックでOPへ審査依頼を通知します", NamedTextColor.GRAY),
                    Component.text("結果は「審査・履歴管理GUI」で確認できます", NamedTextColor.DARK_GRAY),
                )
                .build()
      }

  private fun recordTypeItem(): org.bukkit.inventory.ItemStack {
    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    return GuiItemBuilder(Material.matchMaterial(song.recordMaterial) ?: Material.MUSIC_DISC_13)
        .name(Component.text("レコードの種類を変更", NamedTextColor.YELLOW))
        .lore(
            Component.text("現在: ${song.recordMaterial}", NamedTextColor.GRAY),
            *ActionLoreBuilder.build(
                    viewer,
                    prefix,
                    ActionModeCategory.SONG_SETTINGS,
                    "次の種類",
                    "-",
                    "前の種類",
                    "-",
                )
                .toTypedArray(),
        )
        .build()
  }

  private fun publishItem(): org.bukkit.inventory.ItemStack {
    return GuiItemBuilder(if (song.published) Material.LIME_DYE else Material.GRAY_DYE)
        .name(
            Component.text(
                if (song.published) "公開中" else "非公開(下書き)",
                if (song.published) NamedTextColor.GREEN else NamedTextColor.GRAY,
            )
        )
        .lore(Component.text("クリックで切替", NamedTextColor.DARK_GRAY))
        .glint(song.published)
        .build()
  }

  private fun backButton() = GuiChrome.contentBackButton()

  private fun deleteItem(): org.bukkit.inventory.ItemStack {
    val builder = GuiItemBuilder(Material.TNT)
    return if (pendingDeleteConfirm) {
      builder
          .name(Component.text("本当に削除しますか？", NamedTextColor.RED))
          .lore(Component.text("もう一度クリックで削除確定", NamedTextColor.RED))
          .glint(true)
          .build()
    } else {
      builder
          .name(Component.text("楽曲を削除", NamedTextColor.RED))
          .lore(Component.text("クリックで削除確認へ", NamedTextColor.GRAY))
          .build()
    }
  }

  private fun statusLabel(status: SongStatus): String =
      when (status) {
        SongStatus.DRAFT -> "下書き"
        SongStatus.TEMP_OK -> "仮OK"
        SongStatus.PERMANENT_OK -> "永続OK"
        SongStatus.REJECTED -> "却下"
      }

  override fun onClick(event: InventoryClickEvent) {
    if (!hasAccess()) {
      if (event.rawSlot == backSlot) menuManager.openPrevious(viewer)
      return
    }
    val slot = event.rawSlot
    if (slot != deleteSlot) pendingDeleteConfirm = false
    if (
        NavTabRouter.handle(
            slot,
            null,
            ActionModeCategory.SONG_SETTINGS,
            plugin,
            menuManager,
            viewer,
        )
    )
        return
    if (plugin.playbackController.handleControllerClick(slot, viewer)) return

    when (slot) {
      previewSlot -> plugin.playbackController.play(viewer, song)
      backSlot -> menuManager.openPrevious(viewer)
      submitReviewSlot -> submitForReview()
      titleSlot -> editTitle()
      bpmSlot -> editBpm()
      recordTypeSlot ->
          when (resolveAction(event)) {
            ActionMode.PRIMARY -> cycleRecordType(1)
            ActionMode.TERTIARY -> cycleRecordType(-1)
            else -> GuiFeedback.invalid(viewer, "この操作は割り当てられていません")
          }
      priceSlot -> editPrice()
      reloadClipboardSlot ->
          when (resolveAction(event)) {
            ActionMode.PRIMARY -> reloadFromClipboard(grid = true)
            ActionMode.SECONDARY -> startLiveReplacement()
            ActionMode.TERTIARY -> startCircuitReplacement()
            ActionMode.QUATERNARY -> reloadFromClipboard(grid = false)
          }
      urlSlot -> editUrl()
      publishSlot -> togglePublish()
      deleteSlot -> handleDeleteClick()
    }
  }

  private fun resolveAction(event: InventoryClickEvent): ActionMode {
    val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    return resolveActionMode(viewer, event, ActionModeCategory.SONG_SETTINGS, prefix)
  }

  private fun editTitle() {
    AnvilTextInputSession.open(plugin, viewer, Component.text("題名を変更"), initialText = song.title) {
        newTitle ->
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                plugin.songRepository.updateSettings(id = requireNotNull(song.id), title = newTitle)
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          applyUpdatedSong(song.copy(title = newTitle), "題名を変更しました: $newTitle")
                        },
                    )
              },
          )
    }
  }

  private fun editBpm() {
    AnvilTextInputSession.open(
        plugin,
        viewer,
        Component.text("BPMを変更"),
        initialText = song.bpm.toString(),
    ) { text ->
      val bpm = text.toIntOrNull()
      if (bpm == null || bpm <= 0) {
        Bukkit.getScheduler()
            .runTask(
                plugin,
                Runnable {
                  viewer.sendMessage("§cBPMは正の整数で入力してください。")
                  menuManager.open(viewer, this, rememberAsPrevious = false)
                },
            )
        return@open
      }
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                // 音源ファイルの相対時刻も変更する。DBのBPMだけを更新しても、保存済みの
                // NoteEvent時刻は変化しないため、実際の再生速度は変わらなかった。
                val sourceFile = File(plugin.audioDirectory, song.fileName)
                val audio = SongAudioFile.read(sourceFile)
                val scale = song.bpm.toDouble() / bpm
                val rescaled =
                    audio.notes.map { note -> note.copy(timeMs = (note.timeMs * scale).toInt()) }
                SongAudioFile.write(sourceFile, rescaled)
                plugin.songRepository.updateSettings(id = requireNotNull(song.id), bpm = bpm)
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable { applyUpdatedSong(song.copy(bpm = bpm), "BPMを変更しました: $bpm") },
                    )
              },
          )
    }
  }

  private fun editPrice() {
    AnvilTextInputSession.open(
        plugin,
        viewer,
        Component.text("レコード価格を変更"),
        initialText = song.price.toString(),
    ) { text ->
      val price = text.toIntOrNull()
      if (price == null || price < 0) {
        Bukkit.getScheduler()
            .runTask(
                plugin,
                Runnable {
                  viewer.sendMessage("§c価格は0以上の整数で入力してください。")
                  menuManager.open(viewer, this, rememberAsPrevious = false)
                },
            )
        return@open
      }
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                plugin.songRepository.updateSettings(id = requireNotNull(song.id), price = price)
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          applyUpdatedSong(song.copy(price = price), "価格を変更しました: $price 円")
                        },
                    )
              },
          )
    }
  }

  private fun editUrl() {
    BookQuillUrlInput.open(plugin, viewer) { url ->
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                plugin.songRepository.updateSettings(
                    id = requireNotNull(song.id),
                    referenceUrl = url,
                )
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          applyUpdatedSong(song.copy(referenceUrl = url), "参考URLを設定しました。")
                        },
                    )
              },
          )
    }
  }

  /** 現在のFAWEクリップボードを、既存曲の音源ファイルへ安全に上書きする。 */
  private fun reloadFromClipboard(grid: Boolean) {
    val clipboard = currentClipboard() ?: return
    val notes =
        try {
          if (grid) {
            GridRecorder.record(
                clipboard = clipboard,
                bpm = song.bpm,
                timeAxisFacing = GridRecorder.horizontalFacingFromYaw(viewer.location.yaw),
                world = viewer.world,
            )
          } else {
            CircuitRecorder.record(clipboard, viewer.world)
          }
        } catch (error: Exception) {
          plugin.logger.warning("楽曲ID ${song.id} のクリップボード再読み込みに失敗しました: ${error.message}")
          viewer.sendMessage("§cクリップボードの解析中にエラーが発生しました。")
          return
        }
    if (notes.isEmpty()) {
      viewer.sendMessage("§c録音対象のノートブロックが見つかりませんでした。")
      return
    }
    val songId = requireNotNull(song.id)
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              try {
                SongAudioFile.write(File(plugin.audioDirectory, song.fileName), notes)
                plugin.songRepository.updateAudioProperties(songId, notes.any { it.pan != 0 })
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          applyUpdatedSong(
                              song.copy(supportsPositional = notes.any { it.pan != 0 }),
                              "FAWEクリップボードから${notes.size}音を再読み込みしました。",
                          )
                        },
                    )
              } catch (error: Exception) {
                plugin.logger.warning("楽曲ID $songId の音源上書きに失敗しました: ${error.message}")
                Bukkit.getScheduler()
                    .runTask(plugin, Runnable { viewer.sendMessage("§c音源ファイルの上書きに失敗しました。") })
              }
            },
        )
  }

  /** `/rec live` 相当: 実際に鳴らしたノートを、停止時にこの楽曲へ上書きする。 */
  private fun startLiveReplacement() {
    if (plugin.recordingSessionManager.isRecording(viewer.uniqueId)) {
      GuiFeedback.invalid(viewer, "既に録音中です。先に /rec stop で終了してください")
      return
    }
    plugin.recordingSessionManager.startDynamic(viewer.uniqueId, replacementTarget())
    viewer.sendMessage("§a生演奏録音を開始しました。§7終了時にこの楽曲の音源を更新します。終了は /rec stop")
  }

  /** `/rec we start` 相当: コピー元の現地回路を実演奏で録音して、この楽曲へ上書きする。 */
  private fun startCircuitReplacement() {
    if (plugin.recordingSessionManager.isRecording(viewer.uniqueId)) {
      GuiFeedback.invalid(viewer, "既に録音中です。先に /rec stop で終了してください")
      return
    }
    val clipboard = currentClipboard() ?: return
    val region = clipboard.region
    val copiedWorld = runCatching { BukkitAdapter.adapt(region.world) }.getOrNull()
    if (copiedWorld != null && copiedWorld.uid != viewer.world.uid) {
      GuiFeedback.invalid(viewer, "コピー元のワールド（${copiedWorld.name}）へ移動してから実行してください")
      return
    }
    val quantizationMs =
        plugin.recordingSessionManager.preferredCircuitQuantization(viewer.uniqueId) ?: 100
    plugin.recordingSessionManager.startLiveCircuit(
        playerUuid = viewer.uniqueId,
        worldUuid = viewer.world.uid,
        minimum = region.minimumPoint,
        maximum = region.maximumPoint,
        quantizationMs = quantizationMs,
        replacement = replacementTarget(),
    )
    viewer.sendMessage(
        "§a現地回路録音を開始しました。§eコピー元の回路を起動してください。" +
            "§7現在${quantizationMs / 100.0}RStick。起動前なら /rec we start <RStick> で変更できます。終了は /rec stop"
    )
  }

  private fun replacementTarget(): RecordingReplacementTarget =
      RecordingReplacementTarget(requireNotNull(song.id), song.fileName)

  private fun currentClipboard(): Clipboard? =
      try {
        WorldEdit.getInstance().sessionManager.get(BukkitAdapter.adapt(viewer)).clipboard.clipboard
      } catch (_: Exception) {
        viewer.sendMessage("§cFAWE/WorldEditのクリップボードが見つかりません。先に //copy を実行してください。")
        null
      }

  private fun cycleRecordType(direction: Int) {
    val validMaterials = RECORD_MATERIAL_CYCLE.filter { Material.matchMaterial(it) != null }
    if (validMaterials.isEmpty()) return
    val currentIndex = validMaterials.indexOf(song.recordMaterial)
    val next =
        when {
          currentIndex < 0 && direction < 0 -> validMaterials.last()
          currentIndex < 0 -> validMaterials.first()
          else ->
              validMaterials[(currentIndex + direction + validMaterials.size) % validMaterials.size]
        }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              plugin.songRepository.updateSettings(
                  id = requireNotNull(song.id),
                  recordMaterial = next,
              )
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable { applyUpdatedSong(song.copy(recordMaterial = next), null) },
                  )
            },
        )
  }

  /** 新曲公開時は通知権限を持つプレイヤーへチャット通知を行い、クリックで即座に その曲の詳細GUIを開いて再生できる。通知対象と効果音の対象は同じ権限で統一する。 */
  private fun togglePublish() {
    val newPublished = !song.published
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val notifyFirstPublish =
                  plugin.songRepository.setPublishedAndClaimFirstAnnouncement(
                      requireNotNull(song.id),
                      newPublished,
                  )
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        applyUpdatedSong(
                            song.copy(published = newPublished),
                            if (newPublished) "公開しました。" else "非公開(下書き)に戻しました。",
                        )
                        if (notifyFirstPublish) broadcastNewSong()
                      },
                  )
            },
        )
  }

  private fun broadcastNewSong() {
    val authorName = viewer.name
    val message =
        Component.text("♪ 新曲公開: ", NamedTextColor.LIGHT_PURPLE)
            .append(Component.text("「${song.title}」", NamedTextColor.AQUA))
            .append(Component.text(" by $authorName ", NamedTextColor.GRAY))
            .append(
                Component.text("[クリックで再生]", NamedTextColor.GREEN)
                    .clickEvent(
                        net.kyori.adventure.text.event.ClickEvent.runCommand("/mm open ${song.id}")
                    ),
            )
            .append(Component.text("  /mm open ${song.id}", NamedTextColor.GRAY))
    val recipients =
        Bukkit.getOnlinePlayers().filter { it.hasPermission("oyasaimusic.newsong.notify") }
    recipients.forEach { it.sendMessage(message) }
    plugin.soundEffectService.play(PluginSoundEffect.NEW_SONG, recipients)
  }

  private fun submitForReview() {
    val songId = song.id ?: return
    val cancelling = song.status == SongStatus.TEMP_OK && song.reviewRequestedAt != null
    if (!song.published && !cancelling) {
      GuiFeedback.invalid(viewer, "公開後にオリジナル審査へ提出できます")
      return
    }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val changed =
                  if (cancelling) plugin.songRepository.cancelReviewRequest(songId)
                  else plugin.songRepository.requestReview(songId)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!changed) {
                          GuiFeedback.invalid(viewer, "審査申請の状態が変更されているため、画面を更新してください")
                          render()
                          return@Runnable
                        }
                        if (cancelling) {
                          applyUpdatedSong(
                              song.copy(status = SongStatus.DRAFT, reviewRequestedAt = null),
                              "OP審査への申請を取り消しました。",
                          )
                        } else {
                          viewer.sendMessage("§aOPへ審査依頼を送信しました: ${song.title}")
                          val notice =
                              "§d[OyasaiMusic] §f${viewer.name} が「${song.title}」の審査を依頼しました。(楽曲ID: $songId)"
                          Bukkit.getOnlinePlayers()
                              .filter { it.hasPermission("oyasaimusic.admin") }
                              .forEach { it.sendMessage(notice) }
                          applyUpdatedSong(
                              song.copy(
                                  status = SongStatus.TEMP_OK,
                                  reviewRequestedAt = System.currentTimeMillis() / 1000,
                              ),
                              null,
                          )
                        }
                      },
                  )
            },
        )
  }

  private fun handleDeleteClick() {
    if (!pendingDeleteConfirm) {
      pendingDeleteConfirm = true
      render()
      return
    }
    val songId = requireNotNull(song.id)
    val fileName = song.fileName
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              plugin.songRepository.delete(songId)
              runCatching { File(plugin.audioDirectory, fileName).delete() }
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        viewer.sendMessage("§a楽曲を削除しました: ${song.title}")
                        menuManager.openPrevious(viewer)
                      },
                  )
            },
        )
  }

  /** DB保存済みの更新を、編集画面・他プレイヤーのGUI・再生中ボスバーへ即時配信する。 */
  private fun applyUpdatedSong(updatedSong: Song, message: String?) {
    song = updatedSong
    if (message != null) viewer.sendMessage("§a$message")
    plugin.applySongUpdate(updatedSong)
    // 金床入力では元のインベントリが閉じるため、保存完了後にこの設定画面を再表示する。
    menuManager.open(viewer, this, rememberAsPrevious = false)
  }
}
