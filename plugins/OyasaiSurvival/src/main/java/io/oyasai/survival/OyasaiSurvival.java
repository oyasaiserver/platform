package io.oyasai.survival;

import io.oyasai.survival.harvest.SurvivalHarvest;
import io.oyasai.survival.pull.SurvivalPull;
import io.oyasai.survival.spawnlimit.SurvivalSpawnLimit;
import io.oyasai.survival.enderkeep.SurvivalEnderKeep;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;
import java.util.logging.Level;
import org.bukkit.plugin.java.JavaPlugin;

public final class OyasaiSurvival extends JavaPlugin {
    private final List<SurvivalFeature> features = new ArrayList<>();

    @Override public void onEnable() {
        enable("harvest", () -> new SurvivalHarvest(this));
        enable("pull", () -> new SurvivalPull(this));
        enable("spawnlimit", () -> new SurvivalSpawnLimit(this));
        enable("enderkeep", () -> new SurvivalEnderKeep(this));
    }

    private void enable(String name, Supplier<SurvivalFeature> factory) {
        try {
            var feature = factory.get();
            features.add(feature);
            feature.start();
        } catch (Exception | LinkageError error) {
            getLogger().log(Level.SEVERE, "Could not initialize " + name + "; other features will continue", error);
        }
    }

    @Override public void onDisable() {
        for (var feature : features.reversed()) {
            try {
                feature.stop();
            } catch (Exception | LinkageError error) {
                getLogger().log(Level.SEVERE, "Could not clean up " + feature.getClass().getSimpleName(), error);
            }
        }
    }
}
