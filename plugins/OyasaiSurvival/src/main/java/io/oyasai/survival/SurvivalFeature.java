package io.oyasai.survival;

import io.papermc.paper.plugin.configuration.PluginMeta;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.bukkit.Server;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.PluginCommand;
import org.bukkit.command.TabExecutor;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.event.HandlerList;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;

/** Keeps feature configuration and lifecycle separate while sharing one Bukkit owner. */
public abstract class SurvivalFeature implements TabExecutor {
    private final JavaPlugin owner;
    private final String folder;
    private final String legacyName;
    private final List<String> commands;
    private final List<Listener> listeners = new ArrayList<>();
    private FileConfiguration config;
    private volatile boolean enabled;
    private boolean started;

    protected SurvivalFeature(JavaPlugin owner, String folder, String legacyName, String... commands) {
        this.owner = owner;
        this.folder = folder;
        this.legacyName = legacyName;
        this.commands = List.of(commands);
    }

    public final void start() {
        try {
            if (LegacyDataMigration.copy(owner.getDataFolder().toPath().getParent().resolve(legacyName),
                    getDataFolder().toPath())) {
                getLogger().info("Copied " + legacyName + " data to OyasaiSurvival/" + folder);
            }
            started = true;
            enabled = true;
            for (String name : commands) {
                getCommand(name).setExecutor(this);
                getCommand(name).setTabCompleter(this);
            }
            onEnable();
        } catch (Exception | LinkageError error) {
            getLogger().log(Level.SEVERE, "Could not enable " + folder + "; other features will continue", error);
            stop();
        }
    }

    public final void stop() {
        enabled = false;
        for (String name : commands) {
            PluginCommand command = getCommand(name);
            if (command != null) {
                command.setExecutor((sender, ignored, label, args) -> false);
                command.setTabCompleter((sender, ignored, label, args) -> List.of());
            }
        }
        listeners.forEach(HandlerList::unregisterAll);
        listeners.clear();
        if (!started) return;
        started = false;
        try {
            onDisable();
        } catch (Exception | LinkageError error) {
            getLogger().log(Level.SEVERE, "Could not stop " + folder, error);
        }
    }

    public abstract void onEnable();
    public void onDisable() {}

    public JavaPlugin owner() { return owner; }
    public Server getServer() { return owner.getServer(); }
    public Logger getLogger() { return owner.getLogger(); }
    public File getDataFolder() { return new File(owner.getDataFolder(), folder); }
    public PluginCommand getCommand(String name) { return owner.getCommand(name); }
    public PluginMeta getPluginMeta() { return owner.getPluginMeta(); }
    public boolean isEnabled() { return enabled && owner.isEnabled(); }
    public InputStream getResource(String name) { return owner.getResource(folder + "/" + name); }

    public void registerEvents(Listener listener) {
        listeners.add(listener);
        getServer().getPluginManager().registerEvents(listener, owner);
    }

    public FileConfiguration getConfig() {
        if (config == null) reloadConfig();
        return config;
    }

    public void reloadConfig() {
        config = YamlConfiguration.loadConfiguration(new File(getDataFolder(), "config.yml"));
        try (InputStream defaults = getResource("config.yml")) {
            if (defaults != null) config.setDefaults(YamlConfiguration.loadConfiguration(
                    new InputStreamReader(defaults, StandardCharsets.UTF_8)));
        } catch (IOException error) {
            throw new UncheckedIOException(error);
        }
    }

    public void saveDefaultConfig() {
        File file = new File(getDataFolder(), "config.yml");
        if (file.exists()) return;
        try (InputStream defaults = getResource("config.yml")) {
            if (defaults == null) throw new IOException("Missing default config for " + folder);
            Files.createDirectories(getDataFolder().toPath());
            Files.copy(defaults, file.toPath());
        } catch (IOException error) {
            throw new UncheckedIOException(error);
        }
    }

    public void saveConfig() {
        try {
            Files.createDirectories(getDataFolder().toPath());
            getConfig().save(new File(getDataFolder(), "config.yml"));
        } catch (IOException error) {
            throw new UncheckedIOException(error);
        }
    }

    @Override public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        return false;
    }

    @Override public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        return null;
    }
}
