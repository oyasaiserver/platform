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
import com.github.sahyuya.oyasaiMusic.command.DemoSoundCommand
import com.github.sahyuya.oyasaiMusic.command.GetMusicPlayerCommand
import com.github.sahyuya.oyasaiMusic.command.MusicMenuCommand
import com.github.sahyuya.oyasaiMusic.command.OyasaiMusicCommand
import com.github.sahyuya.oyasaiMusic.command.RecordCommand
import com.github.sahyuya.oyasaiMusic.db.DatabaseManager
import com.github.sahyuya.oyasaiMusic.db.LikeService
import com.github.sahyuya.oyasaiMusic.db.PlaybackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.db.PlaylistRepository
import com.github.sahyuya.oyasaiMusic.db.RankingCacheService
import com.github.sahyuya.oyasaiMusic.db.RankingRepository
import com.github.sahyuya.oyasaiMusic.db.RecordSaleRepository
import com.github.sahyuya.oyasaiMusic.db.ResourcePackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.db.SocialRepository
import com.github.sahyuya.oyasaiMusic.db.SongRepository
import com.github.sahyuya.oyasaiMusic.db.UserRepository
import com.github.sahyuya.oyasaiMusic.db.ViewCountService
import com.github.sahyuya.oyasaiMusic.economy.EconomyService
import com.github.sahyuya.oyasaiMusic.gui.MenuManager
import com.github.sahyuya.oyasaiMusic.gui.PlaybackController
import com.github.sahyuya.oyasaiMusic.gui.PlayerControllerStateService
import com.github.sahyuya.oyasaiMusic.gui.ToastNotificationService
import com.github.sahyuya.oyasaiMusic.importing.OyasaiImportService
import com.github.sahyuya.oyasaiMusic.interop.OyasaiPluginMessaging
import com.github.sahyuya.oyasaiMusic.interop.OmmtPlaybackClientRegistry
import com.github.sahyuya.oyasaiMusic.interop.OmmtUploadService
import com.github.sahyuya.oyasaiMusic.item.PhysicalMusicPlayerItem
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordListener
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.resourcepack.BedrockTransferService
import com.github.sahyuya.oyasaiMusic.resourcepack.OyasaiResourcePackService
import java.io.File
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

/**
 * OyasaiMusic プラグインのエントリーポイント。
 *
 * このクラスは設定・永続化・再生・GUI・コマンドを初期化し、依存関係を配線する。 楽曲処理の実装は各サービスへ委譲し、ここにはゲームロジックを置かない。
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

  lateinit var recordSaleRepository: RecordSaleRepository
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

  lateinit var oyasaiImportService: OyasaiImportService
    private set

  lateinit var ommtUploadService: OmmtUploadService
    private set

  lateinit var ommtPlaybackClientRegistry: OmmtPlaybackClientRegistry
    private set

  lateinit var pluginMessaging: OyasaiPluginMessaging
    private set

  lateinit var resourcePackPreferenceRepository: ResourcePackPreferenceRepository
    private set

  lateinit var resourcePackService: OyasaiResourcePackService
  lateinit var bedrockTransferService: BedrockTransferService
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
    migrateBundledResourcePackConfig()

    audioDirectory =
        File(dataFolder, config.getString("storage.audio-directory", "audio") ?: "audio")
    audioDirectory.mkdirs()
    val soundCatalogCount = VanillaSoundCatalog.initialize(this)
    logger.info("サウンドカタログを読み込みました: $soundCatalogCount SoundEvent")

    // --- DB初期化 ---
    databaseManager =
        DatabaseManager(
            this,
            config.getString("storage.database-file", "database.db") ?: "database.db",
        )
    databaseManager.connect()
    songRepository = SongRepository(databaseManager)
    userRepository = UserRepository(databaseManager)
    socialRepository = SocialRepository(databaseManager)
    playlistRepository = PlaylistRepository(databaseManager)
    playbackPreferenceRepository = PlaybackPreferenceRepository(databaseManager)
    resourcePackPreferenceRepository = ResourcePackPreferenceRepository(databaseManager)
    resourcePackService = OyasaiResourcePackService(this, resourcePackPreferenceRepository)
    bedrockTransferService = BedrockTransferService(this, resourcePackPreferenceRepository)
    playbackModeService = PlaybackModeService(playbackPreferenceRepository)
    rankingRepository = RankingRepository(databaseManager)
    recordSaleRepository = RecordSaleRepository(databaseManager)
    oyasaiImportService = OyasaiImportService(this)
    ommtUploadService = OmmtUploadService(this)
    ommtPlaybackClientRegistry = OmmtPlaybackClientRegistry(this)
    pluginMessaging = OyasaiPluginMessaging(this, ommtUploadService, ommtPlaybackClientRegistry)
    pluginMessaging.enable()
    server.pluginManager.registerEvents(ommtUploadService, this)
    server.pluginManager.registerEvents(ommtPlaybackClientRegistry, this)
    server.pluginManager.registerEvents(resourcePackService, this)
    server.pluginManager.registerEvents(bedrockTransferService, this)
    Bukkit.getScheduler()
        .runTaskTimer(
            this,
            Runnable { ommtUploadService.expire() },
            20L * 15,
            20L * 15,
        )

    // --- サービス層 ---
    configureRuntimeServices()

    // 録音完了時に設定画面を開くため、録音コマンドより先にGUI基盤を初期化する。
    controllerStateService = PlayerControllerStateService()
    rankingCacheService = RankingCacheService(this, rankingRepository)
    rankingCacheService.start()
    menuManager = MenuManager(this)
    server.pluginManager.registerEvents(menuManager, this)
    playbackController = PlaybackController(this, menuManager)
    server.pluginManager.registerEvents(playbackController, this)
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
      val executor =
          RecordCommand(
              plugin = this,
              songRepository = songRepository,
              sessionManager = recordingSessionManager,
              audioDirectory = audioDirectory,
              defaultRecordMaterial =
                  config.getString("recording.default-record-material", "MUSIC_DISC_13")
                      ?: "MUSIC_DISC_13",
              defaultPrice = config.getInt("recording.default-price", 1000),
              menuManager = menuManager,
          )
      cmd.setExecutor(executor)
      cmd.tabCompleter = executor
    } ?: logger.warning("recordコマンドの登録に失敗しました（plugin.ymlを確認してください）。")

    playbackEngine = createPlaybackEngine()
    ommtPlaybackClientRegistry.bindFailureHandler(playbackEngine::handleClientPlaybackFailure)
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
    // Import jobs that already crossed the persistence boundary must drain before DB close.
    val uploadsDrained = !::ommtUploadService.isInitialized || ommtUploadService.shutdown()
    if (::ambientPlaybackRegistry.isInitialized) ambientPlaybackRegistry.stopAll()
    // Buffered sessions receive STOP while the outgoing channel is still registered.
    if (::playbackEngine.isInitialized) playbackEngine.shutdown()
    if (::ommtPlaybackClientRegistry.isInitialized) {
      ommtPlaybackClientRegistry.bindFailureHandler(null)
      ommtPlaybackClientRegistry.clear()
    }
    if (::resourcePackService.isInitialized) resourcePackService.shutdown()
    if (::pluginMessaging.isInitialized) pluginMessaging.disable()
    if (::databaseManager.isInitialized) {
      if (uploadsDrained) databaseManager.close()
      else logger.severe("DB close skipped because an OMMT import is still running")
    }
    logger.info("OyasaiMusicを無効化しました。")
  }

  /** `/oyasaimusic reload` 用。設定値を参照するサービスを現在のconfigで再構成する。 */
  fun reloadRuntimeConfiguration() {
    if (::ommtUploadService.isInitialized) ommtUploadService.reloadReset()
    reloadConfig()
    if (::resourcePackService.isInitialized) resourcePackService.reload()
    val soundCatalogCount = VanillaSoundCatalog.reload(this)
    logger.info("サウンドカタログを再読み込みしました: $soundCatalogCount SoundEvent")
    if (::pluginMessaging.isInitialized) pluginMessaging.broadcastServerCapabilities()
    configureRuntimeServices()
    if (::playbackEngine.isInitialized) {
      val previous = playbackEngine
      playbackEngine = createPlaybackEngine()
      ommtPlaybackClientRegistry.bindFailureHandler(playbackEngine::handleClientPlaybackFailure)
      previous.shutdown()
      if (::ommtPlaybackClientRegistry.isInitialized) ommtPlaybackClientRegistry.invalidateCapabilities()
    }
  }

  /**
   * Upgrades the old disabled placeholder and the known obsolete bundled pack. An operator's
   * unrelated custom pack is never overwritten.
   */
  private fun migrateBundledResourcePackConfig() {
    val prefix = "resource-pack."
    val id = config.getString(prefix + "id").orEmpty()
    val url = config.getString(prefix + "url").orEmpty()
    val sha1 = config.getString(prefix + "sha1").orEmpty()
    val manifest = config.getString(prefix + "bank-manifest-sha256").orEmpty()
    val isPlaceholder =
        (id.isBlank() || id == "00000000-0000-0000-0000-000000000000") &&
            url.isBlank() &&
            sha1.isBlank() &&
            manifest.isBlank()
    val obsoleteBundledSha1 = "af57205743d4d573bcb2dea2f81b745d30eb6eb3"
    val isObsoleteBundledPack =
        sha1.equals(obsoleteBundledSha1, ignoreCase = true) ||
            url.contains(obsoleteBundledSha1, ignoreCase = true)
    if (!isPlaceholder && !isObsoleteBundledPack) return
    config.set(prefix + "enabled", true)
    config.set(prefix + "id", "8be1eaab-ca07-4f47-9957-40d29505e320")
    config.set(
        prefix + "url",
        "https://download.mc-packs.net/pack/73e0fc6020a2b160eb8d5f5b27b9e5579a773d9d.zip",
    )
    config.set(prefix + "sha1", "73e0fc6020a2b160eb8d5f5b27b9e5579a773d9d")
    config.set(
        prefix + "bank-manifest-sha256",
        "5aa68f33eea756ca43244751605924095dff18c5a01fd18767b3f1e51cd19506",
    )
    config.set(prefix + "prompt", "おやさいサーバーの拡張音域リソースパックを読み込みますか？")
    config.set(
        prefix + "instrument-bank-event-template",
        "oyasaimusic:bank/i/{instrument}/a/{anchor}",
    )
    saveConfig()
    logger.info("旧リソースパック設定をOyasaiMusic 26.2拡張音域パックへ更新しました。")
  }

  /** 楽曲設定の保存直後に、再生中表示と全プレイヤーの開いているGUIへ最新値を反映する。 */
  fun applySongUpdate(updatedSong: Song) {
    playbackController.applySongMetadataUpdate(updatedSong)
    menuManager.refreshForSongUpdate(updatedSong)
  }

  private fun configureRuntimeServices() {
    likeService =
        LikeService(
            socialRepository = socialRepository,
            likeRewardMoney = config.getLong("economy.like-reward-money", 1000),
            likeRewardPoints = config.getLong("economy.like-reward-points", 2),
        )
    viewCountService =
        ViewCountService(
            plugin = this,
            socialRepository = socialRepository,
            hourLimit = config.getInt("playback.view-limit-per-hour", 3),
            dayLimit = config.getInt("playback.view-limit-per-day", 10),
            viewsPerPoint = config.getInt("playback.views-per-point", 10),
        )
    // 既存のconfig.ymlが空欄のままでも、標準のTokenManagerコマンドでポイントを付与する。
    val pointCommand =
        config.getString("economy.points-command", "").orEmpty().ifBlank {
          "tokenmanager add %player% %points%"
        }
    economyService = EconomyService(this, pointCommand)
  }

  private fun createPlaybackEngine(): PlaybackEngine {
    val defaultMode =
        when (config.getString("playback.default-mode", "default")?.lowercase()) {
          "positional" -> PlaybackMode.POSITIONAL
          else -> PlaybackMode.DEFAULT
        }
    return PlaybackEngine(
        plugin = this,
        bedrockPrefix = config.getString("bedrock.name-prefix", ".") ?: ".",
        chordLimit = config.getInt("bedrock.chord-limit", 3),
        lookaheadMs = config.getLong("playback.lookahead-ms", 35L).coerceIn(0L, 50L),
        defaultMode = defaultMode,
    )
  }
}
