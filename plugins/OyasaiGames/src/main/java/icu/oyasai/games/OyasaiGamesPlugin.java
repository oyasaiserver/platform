package icu.oyasai.games;

import icu.oyasai.games.command.GamesCommand;
import icu.oyasai.games.gui.GamesHubListener;
import icu.oyasai.games.headhunt.HeadHuntModule;
import icu.oyasai.games.kimodameshi.KimodameshiModule;
import icu.oyasai.games.toys.ToysModule;
import icu.oyasai.games.roulette.command.RouletteCommand;
import icu.oyasai.games.roulette.config.ConfigManager;
import icu.oyasai.games.roulette.gui.RouletteGuiListener;
import icu.oyasai.games.roulette.service.BlockClassifier;
import icu.oyasai.games.roulette.service.RouletteManager;
import org.bukkit.command.PluginCommand;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * おやさい鯖 ミニゲーム統合プラットフォーム（OyasaiGames）メインクラスです。
 * 
 * 各ミニゲーム（ルーレット等）の初期化、ライフサイクル管理、
 * および共通ゲームハブ機能を提供します。
 */
public class OyasaiGamesPlugin extends JavaPlugin {
    private static OyasaiGamesPlugin instance;

    // ルーレットモジュール
    private ConfigManager rouletteConfig;
    private BlockClassifier blockClassifier;
    private RouletteManager rouletteManager;
    private HeadHuntModule headHuntModule;
    private KimodameshiModule kimodameshiModule;
    private ToysModule toysModule;

    @Override
    public void onEnable() {
        instance = this;
        saveDefaultConfig();

        getLogger().info("==========================================");
        getLogger().info("  OyasaiGames (おやさいゲームズ) を起動中...  ");
        getLogger().info("==========================================");

        // 1. ルーレットモジュールの初期化
        initializeRouletteModule();

        headHuntModule = new HeadHuntModule(this);
        try {
            headHuntModule.enable();
        } catch (Exception exception) {
            getLogger().log(java.util.logging.Level.SEVERE, "HeadHuntの初期化に失敗しました。", exception);
        }

        kimodameshiModule = new KimodameshiModule(this);
        kimodameshiModule.enable();
        toysModule = new ToysModule(this);
        toysModule.enable();

        // 2. おやさいゲームズ共通ハブコマンド & リスナーの登録
        registerGamesHub();

        getLogger().info("OyasaiGames が正常に起動しました！");
    }

    @Override
    public void onDisable() {
        getLogger().info("OyasaiGames を停止中...");

        // ルーレットモジュールのクリーンアップ（タスク・セッション解放）
        if (rouletteManager != null) {
            rouletteManager.shutdown();
        }
        if (headHuntModule != null) {
            headHuntModule.disable();
        }

        if (kimodameshiModule != null) kimodameshiModule.disable();
        if (toysModule != null) toysModule.disable();

        getLogger().info("OyasaiGames を安全に停止しました。");
        instance = null;
    }

    /**
     * ルーレットモジュールの初期化と登録を行います。
     */
    private void initializeRouletteModule() {
        this.rouletteConfig = new ConfigManager(this);
        this.blockClassifier = new BlockClassifier(getLogger(), rouletteConfig);
        this.blockClassifier.initialize();
        this.rouletteManager = new RouletteManager(this, rouletteConfig, blockClassifier);

        // /roulette コマンド登録
        PluginCommand rouletteCmd = getCommand("roulette");
        if (rouletteCmd != null) {
            RouletteCommand cmd = new RouletteCommand(rouletteConfig, blockClassifier, rouletteManager);
            rouletteCmd.setExecutor(cmd);
            rouletteCmd.setTabCompleter(cmd);
        }

        // ルーレットGUIイベントリスナー登録
        getServer().getPluginManager().registerEvents(new RouletteGuiListener(rouletteManager), this);
    }

    /**
     * /games コマンドおよび共通ハブGUIリスナーを登録します。
     */
    private void registerGamesHub() {
        PluginCommand gamesCmd = getCommand("oyasaigames");
        if (gamesCmd != null) {
            GamesCommand cmd = new GamesCommand(this);
            gamesCmd.setExecutor(cmd);
            gamesCmd.setTabCompleter(cmd);
        }

        getServer().getPluginManager().registerEvents(new GamesHubListener(rouletteManager), this);
    }

    /**
     * 全ゲームモジュールの設定を再読み込みします。
     */
    public void reloadAll() {
        reloadConfig();
        if (rouletteConfig != null) {
            rouletteConfig.reload();
        }
        if (blockClassifier != null) {
            blockClassifier.initialize();
        }
    }

    public static OyasaiGamesPlugin getInstance() {
        return instance;
    }

    public RouletteManager getRouletteManager() {
        return rouletteManager;
    }

    public BlockClassifier getBlockClassifier() {
        return blockClassifier;
    }
}
