package com.github.sahyuya.oyasaiMusic

import com.github.sahyuya.oyasaiMusic.audio.AmbientPlaybackRegistry
import com.github.sahyuya.oyasaiMusic.audio.NotePlayListener
import com.github.sahyuya.oyasaiMusic.audio.PlaybackEngine
import com.github.sahyuya.oyasaiMusic.audio.PlaybackMode
import com.github.sahyuya.oyasaiMusic.audio.PlaybackModeService
import com.github.sahyuya.oyasaiMusic.audio.PlaybackParticleService
import com.github.sahyuya.oyasaiMusic.audio.RecordingSessionManager
import com.github.sahyuya.oyasaiMusic.audio.SoundEffectService
import com.github.sahyuya.oyasaiMusic.audio.VanillaSoundCatalog
import com.github.sahyuya.oyasaiMusic.command.GetMusicPlayerCommand
import com.github.sahyuya.oyasaiMusic.command.DemoSoundCommand
import com.github.sahyuya.oyasaiMusic.command.MusicMenuCommand
import com.github.sahyuya.oyasaiMusic.command.OyasaiMusicCommand
import com.github.sahyuya.oyasaiMusic.command.RecordCommand
import com.github.sahyuya.oyasaiMusic.db.DatabaseManager
import com.github.sahyuya.oyasaiMusic.db.LikeService
import com.github.sahyuya.oyasaiMusic.db.PlaybackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.db.PlaylistRepository
import com.github.sahyuya.oyasaiMusic.db.RankingCacheService
import com.github.sahyuya.oyasaiMusic.db.RankingRepository
import com.github.sahyuya.oyasaiMusic.db.SocialRepository
import com.github.sahyuya.oyasaiMusic.db.SongRepository
import com.github.sahyuya.oyasaiMusic.db.UserRepository
import com.github.sahyuya.oyasaiMusic.db.ViewCountService
import com.github.sahyuya.oyasaiMusic.economy.EconomyService
import com.github.sahyuya.oyasaiMusic.gui.MenuManager
import com.github.sahyuya.oyasaiMusic.gui.PlaybackController
import com.github.sahyuya.oyasaiMusic.gui.PlayerControllerStateService
import com.github.sahyuya.oyasaiMusic.gui.ToastNotificationService
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.item.PhysicalMusicPlayerItem
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordListener
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin
import java.io.File

/**
 * OyasaiMusic プラグインのエントリーポイント。
 *
 * このクラスは設定・永続化・再生・GUI・コマンドを初期化し、依存関係を配線する。
 * 楽曲処理の実装は各サービスへ委譲し、ここにはゲームロジックを置かない。
 */
class OyasaiMusic : JavaPlugin() {

    lateinit var databaseManager: DatabaseManager
        private set
    lateinit var songRepository: SongRepository
        private set
    lateinit var userRepository: UserRepository
        private set
    lateinit var socialRepository: SocialRepository
        private set
    lateinit var playlistRepository: PlaylistRepository
        private set
    lateinit var playbackPreferenceRepository: PlaybackPreferenceRepository
        private set
    lateinit var playbackModeService: PlaybackModeService
        private set
    lateinit var likeService: LikeService
        private set
    lateinit var viewCountService: ViewCountService
        private set
    lateinit var recordingSessionManager: RecordingSessionManager
        private set
    lateinit var playbackEngine: PlaybackEngine
        private set
    lateinit var audioDirectory: File
        private set

    lateinit var rankingRepository: RankingRepository
        private set
    lateinit var rankingCacheService: RankingCacheService
        private set
    lateinit var controllerStateService: PlayerControllerStateService
        private set
    lateinit var menuManager: MenuManager
        private set
    lateinit var playbackController: PlaybackController
        private set
    lateinit var ambientPlaybackRegistry: AmbientPlaybackRegistry
        private set
    lateinit var economyService: EconomyService
        private set
    lateinit var soundEffectService: SoundEffectService
        private set
    lateinit var toastNotificationService: ToastNotificationService
        private set

    override fun onEnable() {
        // --- FAWE必須依存チェック（plugin.ymlのdependでも保証されるが、明示的なメッセージを出すため二重チェック） ---
        if (server.pluginManager.getPlugin("FastAsyncWorldEdit") == null) {
            logger.severe("FastAsyncWorldEdit(FAWE)が見つかりません。OyasaiMusicはFAWEを必須依存としています。")
            server.pluginManager.disablePlugin(this)
            return
        }

        saveDefaultConfig()
        reloadConfig()

        audioDirectory = File(dataFolder, config.getString("storage.audio-directory", "audio") ?: "audio")
        audioDirectory.mkdirs()
        val soundCatalogCount = VanillaSoundCatalog.initialize(this)
        logger.info("サウンドカタログを読み込みました: $soundCatalogCount SoundEvent")

        // --- DB初期化 ---
        databaseManager = DatabaseManager(this, config.getString("storage.database-file", "database.db") ?: "database.db")
        databaseManager.connect()
        songRepository = SongRepository(databaseManager)
        userRepository = UserRepository(databaseManager)
        socialRepository = SocialRepository(databaseManager)
        playlistRepository = PlaylistRepository(databaseManager)
        playbackPreferenceRepository = PlaybackPreferenceRepository(databaseManager)
        playbackModeService = PlaybackModeService(playbackPreferenceRepository)
        rankingRepository = RankingRepository(databaseManager)

        // --- サービス層 ---
        configureRuntimeServices()

        // 録音完了時に設定画面を開くため、録音コマンドより先にGUI基盤を初期化する。
        controllerStateService = PlayerControllerStateService()
        rankingCacheService = RankingCacheService(this, rankingRepository)
        rankingCacheService.start()
        menuManager = MenuManager(this)
        server.pluginManager.registerEvents(menuManager, this)
        playbackController = PlaybackController(this, menuManager)
        server.pluginManager.registerEvents(PhysicalMusicPlayerItem(this, menuManager), this)
        // ============================================================================

        // --- 録音システム ---
        recordingSessionManager = RecordingSessionManager()
        server.pluginManager.registerEvents(
            NotePlayListener(
                sessionManager = recordingSessionManager,
            ),
            this,
        )

        getCommand("record")?.let { cmd ->
            val executor = RecordCommand(
                plugin = this,
                songRepository = songRepository,
                sessionManager = recordingSessionManager,
                audioDirectory = audioDirectory,
                defaultRecordMaterial = config.getString("recording.default-record-material", "MUSIC_DISC_13") ?: "MUSIC_DISC_13",
                defaultPrice = config.getInt("recording.default-price", 1000),
                menuManager = menuManager,
            )
            cmd.setExecutor(executor)
            cmd.tabCompleter = executor
        } ?: logger.warning("recordコマンドの登録に失敗しました（plugin.ymlを確認してください）。")

        playbackEngine = createPlaybackEngine()
        soundEffectService = SoundEffectService(this)
        soundEffectService.initialize()
        toastNotificationService = ToastNotificationService(this)

        getCommand("musicmenu")?.let { cmd ->
            val executor = MusicMenuCommand(this)
            cmd.setExecutor(executor)
            cmd.tabCompleter = executor
        } ?: logger.warning("musicmenuコマンドの登録に失敗しました（plugin.ymlを確認してください）。")

        getCommand("getmusicplayer")?.let { cmd ->
            val executor = GetMusicPlayerCommand()
            cmd.setExecutor(executor)
            cmd.tabCompleter = executor
        } ?: logger.warning("getmusicplayerコマンドの登録に失敗しました（plugin.ymlを確認してください）。")

        getCommand("oyasaimusic")?.let { cmd ->
            val executor = OyasaiMusicCommand(this)
            cmd.setExecutor(executor)
            cmd.tabCompleter = executor
        } ?: logger.warning("oyasaimusicコマンドの登録に失敗しました（plugin.ymlを確認してください）。")

        getCommand("demosound")?.let { cmd ->
            val executor = DemoSoundCommand()
            cmd.setExecutor(executor)
            cmd.tabCompleter = executor
        } ?: logger.warning("demosoundコマンドの登録に失敗しました（plugin.ymlを確認してください）。")

        // 環境BGMレコードのトリガー監視。
        ambientPlaybackRegistry = AmbientPlaybackRegistry(this)
        server.pluginManager.registerEvents(PhysicalRecordListener(this), this)
        // RSトリガーの短いパルスも取りこぼさないよう、0.1秒ごとに状態を確認する。
        Bukkit.getScheduler().runTaskTimer(this, Runnable { ambientPlaybackRegistry.tick() }, 2L, 2L)
        val playbackParticleService = PlaybackParticleService(this)
        Bukkit.getScheduler().runTaskTimer(this, Runnable { playbackParticleService.tick() }, 20L, 20L)
        logger.info("OyasaiMusic を有効化しました。")
    }

    override fun onDisable() {
        if (::ambientPlaybackRegistry.isInitialized) ambientPlaybackRegistry.stopAll()
        if (::playbackEngine.isInitialized) playbackEngine.shutdown()
        if (::databaseManager.isInitialized) databaseManager.close()
        logger.info("OyasaiMusicを無効化しました。")
    }

    /** `/oyasaimusic reload` 用。設定値を参照するサービスを現在のconfigで再構成する。 */
    fun reloadRuntimeConfiguration() {
        reloadConfig()
        val soundCatalogCount = VanillaSoundCatalog.reload(this)
        logger.info("サウンドカタログを再読み込みしました: $soundCatalogCount SoundEvent")
        configureRuntimeServices()
        if (::playbackEngine.isInitialized) {
            val previous = playbackEngine
            playbackEngine = createPlaybackEngine()
            previous.shutdown()
        }
    }

    /** 楽曲設定の保存直後に、再生中表示と全プレイヤーの開いているGUIへ最新値を反映する。 */
    fun applySongUpdate(updatedSong: Song) {
        playbackController.applySongMetadataUpdate(updatedSong)
        menuManager.refreshForSongUpdate(updatedSong)
    }

    private fun configureRuntimeServices() {
        likeService = LikeService(
            socialRepository = socialRepository,
            likeRewardMoney = config.getLong("economy.like-reward-money", 1000),
            likeRewardPoints = config.getLong("economy.like-reward-points", 2),
        )
        viewCountService = ViewCountService(
            plugin = this,
            socialRepository = socialRepository,
            hourLimit = config.getInt("playback.view-limit-per-hour", 3),
            dayLimit = config.getInt("playback.view-limit-per-day", 10),
            viewsPerPoint = config.getInt("playback.views-per-point", 10),
        )
        // 既存のconfig.ymlが空欄のままでも、標準のTokenManagerコマンドでポイントを付与する。
        val pointCommand = config.getString("economy.points-command", "").orEmpty()
            .ifBlank { "tokenmanager add %player% %points%" }
        economyService = EconomyService(this, pointCommand)
    }

    private fun createPlaybackEngine(): PlaybackEngine {
        val defaultMode = when (config.getString("playback.default-mode", "default")?.lowercase()) {
            "positional" -> PlaybackMode.POSITIONAL
            else -> PlaybackMode.DEFAULT
        }
        return PlaybackEngine(
            plugin = this,
            bedrockPrefix = config.getString("bedrock.name-prefix", ".") ?: ".",
            chordLimit = config.getInt("bedrock.chord-limit", 3),
            defaultMode = defaultMode,
        )
    }
}
