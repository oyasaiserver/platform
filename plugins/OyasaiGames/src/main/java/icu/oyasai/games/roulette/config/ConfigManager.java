package icu.oyasai.games.roulette.config;

import org.bukkit.Material;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.plugin.Plugin;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

/**
 * config.yml の設定値を読み込み、ルーレットモジュールに提供するクラスです。
 */
public class ConfigManager implements ConfigProvider {
    private final Plugin plugin;
    private final Logger logger;

    private int cooldownSeconds;
    private long chatIntervalTicks;
    private Set<Material> excludedMaterials;
    private Set<Material> forceFullBlocks;
    private Set<Material> forceNonFullBlocks;

    public ConfigManager(Plugin plugin) {
        this.plugin = plugin;
        this.logger = plugin.getLogger();
        reload();
    }

    /**
     * 設定ファイルを再読み込みします。
     */
    public void reload() {
        plugin.saveDefaultConfig();
        plugin.reloadConfig();
        FileConfiguration config = plugin.getConfig();

        // roulette.cooldown-seconds を優先、なければ cooldown-seconds を参照
        this.cooldownSeconds = config.getInt("roulette.cooldown-seconds", config.getInt("cooldown-seconds", 10));
        this.chatIntervalTicks = config.getLong("roulette.chat-interval-ticks", config.getLong("chat-interval-ticks", 16L));

        List<String> excludedList = config.isList("roulette.excluded-materials")
                ? config.getStringList("roulette.excluded-materials")
                : config.getStringList("excluded-materials");
        this.excludedMaterials = parseMaterialSet(excludedList);

        List<String> fullList = config.isList("roulette.force-full-blocks")
                ? config.getStringList("roulette.force-full-blocks")
                : config.getStringList("force-full-blocks");
        this.forceFullBlocks = parseMaterialSet(fullList);

        List<String> nonFullList = config.isList("roulette.force-non-full-blocks")
                ? config.getStringList("roulette.force-non-full-blocks")
                : config.getStringList("force-non-full-blocks");
        this.forceNonFullBlocks = parseMaterialSet(nonFullList);

        logger.info("[Roulette] 設定を読み込みました (クールダウン: " + cooldownSeconds + "秒, チャット間隔: " + chatIntervalTicks + "tick)");
    }

    private Set<Material> parseMaterialSet(List<String> names) {
        if (names == null || names.isEmpty()) {
            return Collections.emptySet();
        }
        Set<Material> set = new HashSet<>();
        for (String name : names) {
            try {
                Material mat = Material.matchMaterial(name.trim());
                if (mat != null) {
                    set.add(mat);
                } else {
                    logger.warning("[Roulette] config.yml内のマテリアル名が無効です: " + name);
                }
            } catch (Exception e) {
                logger.warning("[Roulette] マテリアルの解析に失敗しました: " + name);
            }
        }
        return Collections.unmodifiableSet(set);
    }

    @Override
    public int getCooldownSeconds() {
        return cooldownSeconds;
    }

    @Override
    public long getChatIntervalTicks() {
        return chatIntervalTicks;
    }

    @Override
    public Set<Material> getExcludedMaterials() {
        return excludedMaterials;
    }

    @Override
    public Set<Material> getForceFullBlocks() {
        return forceFullBlocks;
    }

    @Override
    public Set<Material> getForceNonFullBlocks() {
        return forceNonFullBlocks;
    }
}
