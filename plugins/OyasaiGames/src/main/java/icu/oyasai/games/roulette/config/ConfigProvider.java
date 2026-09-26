package icu.oyasai.games.roulette.config;

import org.bukkit.Material;

import java.util.Set;

/**
 * 設定値の取得インターフェースです。
 * プラグイン実行時は ConfigManager が実装し、
 * テスト時はモックやダミークラスに差し替えることができます。
 */
public interface ConfigProvider {
    int getCooldownSeconds();

    long getChatIntervalTicks();

    Set<Material> getExcludedMaterials();

    Set<Material> getForceFullBlocks();

    Set<Material> getForceNonFullBlocks();
}
