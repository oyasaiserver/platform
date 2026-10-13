package icu.oyasai.games;

import icu.oyasai.games.command.GamesCommand;
import icu.oyasai.games.dice.DiceModule;
import icu.oyasai.games.gui.GamesHubListener;
import icu.oyasai.games.headhunt.HeadHuntModule;
import icu.oyasai.games.weapons.WeaponsModule;
import icu.oyasai.games.pvp.PvpModule;
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
    private icu.oyasai.games.slot.SlotModule slotModule;
    private WeaponsModule weaponsModule;
    private PvpModule pvpModule;
    private icu.oyasai.games.bedwars.BedWarsModule bedwarsModule;
    private icu.oyasai.games.tntrun.TntrunModule tntrunModule;
    private KimodameshiModule kimodameshiModule;
    private ToysModule toysModule;
    private DiceModule diceModule;

    @Override
    public void onEnable() {
        instance = this;
        saveDefaultConfig();

        getLogger().info("==========================================");
        getLogger().info("  OyasaiGames (おやさいゲームズ) を起動中...  ");
        getLogger().info("==========================================");

        // 1. ルーレットモジュールの初期化
        if (getConfig().getBoolean("games.roulette.enabled", true)) {
            try {
                initializeRouletteModule();
            } catch (Exception | LinkageError exception) {
                getLogger().log(java.util.logging.Level.SEVERE, "Rouletteの初期化に失敗しました。", exception);
                rouletteManager = null;
            }
        }

        headHuntModule = new HeadHuntModule(this);
        try {
            if (getConfig().getBoolean("games.headhunt.enabled", true)) headHuntModule.enable();
        } catch (Exception | LinkageError exception) {
            getLogger().log(java.util.logging.Level.SEVERE, "HeadHuntの初期化に失敗しました。", exception);
        }

        slotModule = new icu.oyasai.games.slot.SlotModule(this);
        try {
            slotModule.enable();
        } catch (Exception | LinkageError exception) {
            shutdownModule("slot", slotModule::disable);
            getLogger().log(java.util.logging.Level.SEVERE, "slotの初期化に失敗しました。", exception);
        }

        weaponsModule = new WeaponsModule(this);
        try {
            weaponsModule.enable();
        } catch (Exception | LinkageError exception) {
            shutdownModule("weapons", weaponsModule::disable);
            getLogger().severe("weaponsの初期化に失敗しました (" + exception.getClass().getSimpleName() + ")。");
        }

        pvpModule = new PvpModule(this);
        try {
            pvpModule.enable();
        } catch (Exception | LinkageError exception) {
            getLogger().log(java.util.logging.Level.SEVERE, "PvPの初期化に失敗しました。", exception);
            shutdownModule("PvP", pvpModule::disable);
        }

        bedwarsModule = new icu.oyasai.games.bedwars.BedWarsModule(this);
        try { bedwarsModule.enable(); }
        catch (Exception | LinkageError exception) {
            try { bedwarsModule.disable(); } catch (Exception | LinkageError cleanup) { getLogger().severe("BedWars recovery remains pending."); }
            getLogger().severe("bedwarsの初期化に失敗しました (" + exception.getClass().getSimpleName() + ")。");
        }

        tntrunModule = new icu.oyasai.games.tntrun.TntrunModule(this);
        try { tntrunModule.enable(); }
        catch (Exception | LinkageError exception) {
            getLogger().log(java.util.logging.Level.SEVERE, "TNTRunの初期化に失敗しました。", exception);
            try { tntrunModule.disable(); }
            catch (Exception | LinkageError cleanup) { getLogger().log(java.util.logging.Level.SEVERE, "TNTRun終了処理に失敗しました。", cleanup); }
        }
        kimodameshiModule = new KimodameshiModule(this);
        kimodameshiModule.enable();
        toysModule = new ToysModule(this);
        toysModule.enable();

        // おやさいサイコロモジュールの初期化
        diceModule = new DiceModule(this);
        try {
            diceModule.enable();
        } catch (Exception | LinkageError exception) {
            shutdownModule("おやさいサイコロ", diceModule::disable);
            getLogger().log(java.util.logging.Level.SEVERE, "おやさいサイコロの初期化に失敗しました。", exception);
        }

        // 2. おやさいゲームズ共通ハブコマンド & リスナーの登録
        registerGamesHub();

        getLogger().info("OyasaiGames が正常に起動しました！");
    }

    @Override
    public void onDisable() {
        getLogger().info("OyasaiGames を停止中...");

        // ルーレットモジュールのクリーンアップ（タスク・セッション解放）
        if (rouletteManager != null) {
            shutdownModule("roulette", rouletteManager::shutdown);
        }
        if (slotModule != null) {
            shutdownModule("slot", slotModule::disable);
        }
        if (headHuntModule != null) {
            shutdownModule("HeadHunt", headHuntModule::disable);
        }

        if (weaponsModule != null) {
            shutdownModule("weapons", weaponsModule::disable);
        }
        if (pvpModule != null) {
            try { pvpModule.disable(); }
            catch (Exception | LinkageError exception) { getLogger().log(java.util.logging.Level.SEVERE, "PvP終了処理に失敗しました。", exception); }
        }

        if (bedwarsModule != null) {
            try { bedwarsModule.disable(); }
            catch (Exception | LinkageError exception) { getLogger().severe("BedWars終了処理に失敗しました。復元記録を保持します。"); }
        }
        if (tntrunModule != null) {
            try { tntrunModule.disable(); }
            catch (Exception | LinkageError exception) { getLogger().log(java.util.logging.Level.SEVERE, "TNTRun終了処理に失敗しました。", exception); }
        }

        if (kimodameshiModule != null) kimodameshiModule.disable();
        if (toysModule != null) toysModule.disable();
        if (diceModule != null) {
            shutdownModule("おやさいサイコロ", diceModule::disable);
        }

        getLogger().info("OyasaiGames を安全に停止しました。");
        instance = null;
    }

    private void shutdownModule(String name, Runnable action) {
        try { action.run(); }
        catch (Exception | LinkageError exception) { getLogger().severe(name + "終了処理に失敗しました (" + exception.getClass().getSimpleName() + ")。"); }
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

        getServer().getPluginManager().registerEvents(new GamesHubListener(rouletteManager, diceModule), this);
    }

    /**
     * 全ゲームモジュールの設定を再読み込みします。
     */
    public void reloadAll() {
        reloadConfig();
        if (slotModule != null) {
            try {
                slotModule.reload();
            } catch (Exception | LinkageError exception) {
                shutdownModule("slot", slotModule::disable);
                getLogger().log(java.util.logging.Level.SEVERE, "slotの再設定に失敗しました。", exception);
            }
        }
        if (weaponsModule != null) {
            try { weaponsModule.reload(); }
            catch (Exception | LinkageError exception) {
                shutdownModule("weapons", weaponsModule::disable);
                getLogger().log(java.util.logging.Level.SEVERE, "weaponsの再設定に失敗しました。", exception);
            }
        }
        if (pvpModule != null) {
            try { pvpModule.disable(); pvpModule.enable(); }
            catch (Exception | LinkageError exception) {
                getLogger().log(java.util.logging.Level.SEVERE, "PvPの再設定に失敗しました。", exception);
            }
        }
        if (bedwarsModule != null) {
            try { bedwarsModule.disable(); bedwarsModule.enable(); }
            catch (Exception | LinkageError exception) { getLogger().severe("BedWarsの再設定に失敗しました。復元記録を保持します。"); }
        }
        if (tntrunModule != null) {
            try { tntrunModule.disable(); tntrunModule.enable(); }
            catch (Exception | LinkageError exception) {
                getLogger().log(java.util.logging.Level.SEVERE, "TNTRunの再設定に失敗しました。", exception);
                try { tntrunModule.disable(); }
                catch (Exception | LinkageError cleanup) { getLogger().log(java.util.logging.Level.SEVERE, "TNTRun終了処理に失敗しました。", cleanup); }
            }
        }
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

    public DiceModule getDiceModule() {
        return diceModule;
    }
}
