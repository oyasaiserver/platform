package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.SongAudioFile
import com.github.sahyuya.oyasaiMusic.audio.CircuitRecorder
import com.github.sahyuya.oyasaiMusic.audio.GridRecorder
import com.github.sahyuya.oyasaiMusic.audio.RecordingSessionManager
import com.github.sahyuya.oyasaiMusic.audio.RecordingReplacementTarget
import com.github.sahyuya.oyasaiMusic.db.SongRepository
import com.github.sahyuya.oyasaiMusic.gui.MenuManager
import com.github.sahyuya.oyasaiMusic.gui.SongSettingsScreen
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import java.io.File
import java.util.UUID

/**
 * `/record` コマンド群（データ・システム設計書 3章）を処理するハンドラ。
 *
 *   /record we grid <BPM>   グリッド型録音
 *   /record we default      回路型(レッドストーン)録音
 *   /record we start <最小RStick> コピー元回路の実演奏録音を開始
 *   /record live            生演奏録音の開始
 *   /record stop            録音を終了・保存
 *
 * 録音完了後は下書きを保存して[SongSettingsScreen]を開き、題名や公開設定を続けて編集できる。
 */
class RecordCommand(
    private val plugin: OyasaiMusic,
    private val songRepository: SongRepository,
    private val sessionManager: RecordingSessionManager,
    private val audioDirectory: File,
    private val defaultRecordMaterial: String,
    private val defaultPrice: Int,
    private val menuManager: MenuManager,
) : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("このコマンドはプレイヤーのみ実行できます。")
            return true
        }
        if (!sender.hasPermission("oyasaimusic.record")) {
            sender.sendMessage("§cこのコマンドを実行する権限がありません。")
            return true
        }
        if (args.isEmpty()) {
            sendUsage(sender)
            return true
        }

        when (args[0].lowercase()) {
            "we" -> handleWorldEdit(sender, args)
            "live" -> handleLivePerformance(sender)
            "stop" -> handleStop(sender)
            else -> sendUsage(sender)
        }
        return true
    }

    // ---------------- /record we ... ----------------

    private fun handleWorldEdit(player: Player, args: Array<out String>) {
        if (args.size < 2) {
            sendUsage(player)
            return
        }
        when (args[1].lowercase()) {
            "grid" -> handleGrid(player, args)
            "default" -> handleCircuit(player)
            "start" -> handleCircuitStart(player, args)
            "inspect" -> inspectCircuitClipboard(player)
            else -> sendUsage(player)
        }
    }

    private fun handleGrid(player: Player, args: Array<out String>) {
        if (args.size < 3) {
            player.sendMessage("§c使い方: /record we grid <BPM>")
            return
        }
        val bpm = args[2].toIntOrNull()
        if (bpm == null || bpm <= 0) {
            player.sendMessage("§cBPMは正の整数で指定してください。")
            return
        }
        val clipboard = getClipboardOrNotify(player) ?: return
        val facing = GridRecorder.horizontalFacingFromYaw(player.location.yaw)

        // クリップボード走査中に看板(ワールドの実ブロック)も読み取るため、ここはメインスレッドで
        // 同期実行する（Bukkitのワールド読み取りは非同期スレッドからだと安全性が保証されないため）。
        // ファイル書き込み・DB登録は finalizeRecording 内で別途非同期化される。
        val notes = try {
            GridRecorder.record(clipboard, bpm, facing, player.world)
        } catch (e: Exception) {
            plugin.logger.warning("グリッド型録音の解析に失敗しました: ${e.message}")
            player.sendMessage("§c録音の解析中にエラーが発生しました。")
            return
        }
        finalizeRecording(player, notes, bpm)
    }

    private fun handleCircuit(player: Player) {
        val clipboard = getClipboardOrNotify(player) ?: return

        // 同上の理由でメインスレッドで同期実行する。
        val notes = try {
            CircuitRecorder.record(clipboard, player.world)
        } catch (e: Exception) {
            plugin.logger.warning("回路型録音の解析に失敗しました: ${e.message}")
            player.sendMessage("§c録音の解析中にエラーが発生しました。")
            return
        }
        // 回路型はBPM概念が無いため、便宜上120を基準BPMとして保存する（再生速度設定はGUIで変更可能）。
        finalizeRecording(player, notes, bpm = 120)
    }

    /**
     * コピー元の回路を実際に作動させ、その範囲で発生したNotePlayEventだけを録音する。
     * 新規ワールド・貼り付け・ブロック操作を一切行わないため、他プラグインのワールド管理対象にならない。
     */
    private fun handleCircuitStart(player: Player, args: Array<out String>) {
        val minimumRedstoneTick = args.getOrNull(2)?.let(SUPPORTED_MINIMUM_REDSTONE_TICKS::get)
        if (minimumRedstoneTick == null) {
            player.sendMessage("§c使い方: /record we start <0.5|1|2|3|4>")
            return
        }
        val quantizationMs = (minimumRedstoneTick * 100.0).toInt()
        if (sessionManager.updateLiveCircuitQuantization(player.uniqueId, quantizationMs)) {
            player.sendMessage("§a待機中の現地回路録音を${args[2]}RStick（${quantizationMs}ms）へ変更しました。回路を起動してください。")
            return
        }
        if (sessionManager.isRecording(player.uniqueId)) {
            player.sendMessage("§c既に録音中です。回路を起動した後はRStickを変更できません。")
            return
        }
        val clipboard = getClipboardOrNotify(player) ?: return
        val region = clipboard.region
        val copiedWorld = runCatching { BukkitAdapter.adapt(region.world) }.getOrNull()
        if (copiedWorld != null && copiedWorld.uid != player.world.uid) {
            player.sendMessage("§cコピー元のワールド（${copiedWorld.name}）へ移動してから実行してください。")
            return
        }
        sessionManager.startLiveCircuit(
            playerUuid = player.uniqueId,
            worldUuid = player.world.uid,
            minimum = region.minimumPoint,
            maximum = region.maximumPoint,
            quantizationMs = quantizationMs,
        )
        player.sendMessage(
            "§a現地回路録音を開始しました。§eコピー元のボタン／レバーを一度作動させてください。" +
                "§7範囲内の実発火を${args[2]}RStick（${quantizationMs}ms）単位で記録します。終了は /record stop"
        )
    }

    /** FAWEクリップボードに回路部品が正しく残っているかを、保存せずに表示する。 */
    private fun inspectCircuitClipboard(player: Player) {
        val clipboard = getClipboardOrNotify(player) ?: return
        val result = runCatching { CircuitRecorder.inspect(clipboard) }.getOrElse { error ->
            plugin.logger.warning("FAWEクリップボードの検査に失敗しました: ${error.message}")
            player.sendMessage("§cクリップボードの検査中にエラーが発生しました。")
            return
        }
        player.sendMessage(
            listOf(
                "§e--- FAWEクリップボード検査 ---",
                "§f大きさ: §b${result.dimensions.x()}×${result.dimensions.y()}×${result.dimensions.z()} §7/ 原点: §b${result.origin}",
                "§f実座標範囲: §b${result.minimum} §7〜 §b${result.maximum}",
                "§f音ブロック: §a${result.noteBlocks} §7/ ダスト: §c${result.wires} §7(接続情報なし: §e${result.wiresWithoutConnectionInfo}§7)",
                "§fリピーター: §d${result.repeaters} §7/ 電源: §6${result.powerSources}",
            ).joinToString("\n")
        )
    }

    private fun getClipboardOrNotify(player: Player): Clipboard? {
        return try {
            val actor = BukkitAdapter.adapt(player)
            val session = WorldEdit.getInstance().sessionManager.get(actor)
            session.clipboard.clipboard
        } catch (e: Exception) {
            player.sendMessage("§cFAWE/WorldEditのクリップボードが見つかりません。先に //copy 等で範囲をコピーしてください。")
            null
        }
    }

    // ---------------- /record we start / /record live / stop ----------------

    private fun handleLivePerformance(player: Player) {
        if (sessionManager.isRecording(player.uniqueId)) {
            player.sendMessage("§c既に録音中です。先に /record stop で終了してください。")
            return
        }
        sessionManager.startDynamic(player.uniqueId)
        player.sendMessage("§a生演奏録音を開始しました。現在地から48ブロック以内の発音を実時間で記録します。終了は /record stop")
    }

    private fun handleStop(player: Player) {
        val dynamicSession = sessionManager.stopDynamic(player.uniqueId)
        if (dynamicSession != null) {
            completeRecording(player, trimLeadingSilence(dynamicSession.notes.toList()), dynamicSession.replacement)
            return
        }
        val liveCircuitSession = sessionManager.stopLiveCircuit(player.uniqueId)
        if (liveCircuitSession != null) {
            completeRecording(player, trimLeadingSilence(liveCircuitSession.notes.toList()), liveCircuitSession.replacement)
            return
        }
        player.sendMessage("§c録音中ではありません。")
    }

    /**
     * 生演奏・現地回路録音は開始してから最初の音を鳴らすまでに間が空くことが多いため、
     * 最初に記録された音符のタイミングを0msとして全体をシフトし、先頭の無音を取り除く。
     * 終了(stop)時点で記録済みの最後の音符がそのまま末尾になる（追加の無音は付与しない）。
     */
    private fun trimLeadingSilence(notes: List<NoteEvent>): List<NoteEvent> {
        if (notes.isEmpty()) return notes
        val minTime = notes.minOf { it.timeMs }
        if (minTime == 0) return notes
        return notes.map { it.copy(timeMs = it.timeMs - minTime) }
    }

    private fun completeRecording(player: Player, notes: List<NoteEvent>, replacement: RecordingReplacementTarget?) {
        if (replacement == null) finalizeRecording(player, notes, bpm = 120)
        else replaceExistingRecording(player, notes, replacement)
    }

    /** 設定画面から開始した生演奏／現地回路録音の保存先を、既存楽曲へ限定する。 */
    private fun replaceExistingRecording(player: Player, notes: List<NoteEvent>, target: RecordingReplacementTarget) {
        if (notes.isEmpty()) {
            player.sendMessage("§c録音対象のノートブロックが見つかりませんでした。")
            return
        }
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            try {
                val song = songRepository.findById(target.songId) ?: run {
                    Bukkit.getScheduler().runTask(plugin, Runnable { player.sendMessage("§c置換先の楽曲が見つかりません。") })
                    return@Runnable
                }
                SongAudioFile.write(File(audioDirectory, target.fileName), notes)
                val supportsPositional = notes.any { it.pan != 0 }
                songRepository.updateAudioProperties(target.songId, supportsPositional)
                Bukkit.getScheduler().runTask(plugin, Runnable {
                    plugin.applySongUpdate(song.copy(supportsPositional = supportsPositional))
                    player.sendMessage("§a楽曲「${song.title}」の音源を${notes.size}音で更新しました。")
                })
            } catch (error: Exception) {
                plugin.logger.warning("楽曲ID ${target.songId} の録音音源更新に失敗しました: ${error.message}")
                Bukkit.getScheduler().runTask(plugin, Runnable { player.sendMessage("§c音源ファイルの上書きに失敗しました。") })
            }
        })
    }

    // ---------------- 共通: 保存処理 ----------------

    private fun finalizeRecording(player: Player, notes: List<NoteEvent>, bpm: Int) {
        if (notes.isEmpty()) {
            player.sendMessage("§c録音対象のノートブロックが見つかりませんでした。")
            return
        }

        // 統合版プレイヤー名の識別用ピリオドは保存フォルダ名には含めない。
        val authorDirectory = player.name.removePrefix(".")
            .replace(Regex("[\\\\/:*?\"<>|]"), "_")
            .ifBlank { player.uniqueId.toString() }
        Bukkit.getScheduler().runTaskAsynchronously(
            plugin,
            Runnable {
                val fileName = "$authorDirectory/${UUID.randomUUID()}.bin"
                val file = File(audioDirectory, fileName)
                try {
                    SongAudioFile.write(file, notes)
                    // Panが一度でも指定された音符があれば、その楽曲は立体音響再生に対応する
                    // （追加項目.txt: 「制作時にPanの指定があった場合は立体音響再生を可能にする」）。
                    val supportsPositional = notes.any { it.pan != 0 }
                    val songId = songRepository.insertDraft(
                        authorUuid = player.uniqueId,
                        title = "無題の楽曲",
                        bpm = bpm,
                        recordMaterial = defaultRecordMaterial,
                        price = defaultPrice,
                        fileName = fileName,
                        supportsPositional = supportsPositional,
                    )
                    // 保存済みの楽曲を読み直して設定画面へ渡す。
                    val savedSong = songRepository.findById(songId)
                    Bukkit.getScheduler().runTask(plugin, Runnable {
                        player.sendMessage(
                            "§a録音が完了しました（音符数: ${notes.size}）。下書きとして保存されました。" +
                                    "§eタイトルや公開設定はこのまま開く楽曲設定画面から行えます。"
                        )
                        if (savedSong != null) {
                            menuManager.open(player, SongSettingsScreen(plugin, menuManager, player, savedSong), rememberAsPrevious = false)
                        }
                    })
                } catch (e: Exception) {
                    plugin.logger.severe("録音の保存に失敗しました: ${e.message}")
                    Bukkit.getScheduler().runTask(plugin, Runnable {
                        player.sendMessage("§c録音の保存中にエラーが発生しました。コンソールログを確認してください。")
                    })
                }
            },
        )
    }

    private fun sendUsage(sender: CommandSender) {
        sender.sendMessage(
            listOf(
                "§e--- OyasaiMusic /record ---",
                "§7/record we grid <BPM>   §fグリッド型録音",
                "§7/record we default      §f回路型(レッドストーン)録音",
                "§7/record we start <RStick> §fコピー元回路を録音（0.5/1/2/3/4）",
                "§7/record we inspect      §fFAWEクリップボードの回路検査",
                "§7/record live            §f生演奏を実時間で録音",
                "§7/record stop            §f録音を終了して下書き保存",
            ).joinToString("\n")
        )
    }

    override fun onTabComplete(
        sender: CommandSender,
        command: Command,
        alias: String,
        args: Array<out String>,
    ): List<String> = when (args.size) {
        1 -> listOf("we", "live", "stop").filter { it.startsWith(args[0].lowercase()) }
        2 -> when (args[0].lowercase()) {
            "we" -> listOf("grid", "default", "start", "inspect").filter { it.startsWith(args[1].lowercase()) }
            else -> emptyList()
        }
        3 -> if (args[0].equals("we", true) && args[1].equals("start", true)) {
            SUPPORTED_MINIMUM_REDSTONE_TICKS.keys
                .filter { it.startsWith(args[2]) }
        } else emptyList()
        else -> emptyList()
    }

    private companion object {
        val SUPPORTED_MINIMUM_REDSTONE_TICKS = linkedMapOf(
            "0.5" to 0.5,
            "1" to 1.0,
            "2" to 2.0,
            "3" to 3.0,
            "4" to 4.0,
        )
    }
}
