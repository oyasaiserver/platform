package io.oyasai.survival.spawnlimit;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import org.bukkit.World;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.SpawnCategory;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.world.WorldLoadEvent;
import io.oyasai.survival.SurvivalFeature;
import org.bukkit.plugin.java.JavaPlugin;

public final class SurvivalSpawnLimit extends SurvivalFeature implements Listener {
    public SurvivalSpawnLimit(JavaPlugin owner) { super(owner, "spawnlimit", "SurvivalSpawnLimit", "spawnlimit", "distance"); }

    private static final List<SpawnCategory> CATEGORIES = Arrays.stream(SpawnCategory.values())
            .filter(category -> category != SpawnCategory.MISC).toList();

    private static final List<String> DISTANCES = List.of("view", "simulation");

    @Override
    public void onEnable() {
        saveDefaultConfig();
        registerEvents(this);
        getServer().getWorlds().forEach(this::applySettings);
    }

    @EventHandler
    public void onWorldLoad(WorldLoadEvent event) {
        applySettings(event.getWorld());
    }

    private void applySettings(World world) {
        for (SpawnCategory category : CATEGORIES) {
            String key = category.name().toLowerCase(Locale.ROOT);
            if (!getConfig().contains(key)) {
                continue;
            }
            if (!getConfig().isInt(key) || getConfig().getInt(key) < 0) {
                getLogger().warning("Ignoring invalid spawn limit: " + key);
                continue;
            }
            world.setSpawnLimit(category, getConfig().getInt(key));
        }
        for (String type : DISTANCES) {
            String key = "distance." + type;
            if (!getConfig().contains(key)) {
                continue;
            }
            int distance = getConfig().getInt(key);
            if (!getConfig().isInt(key) || distance < 2 || distance > 32) {
                getLogger().warning("Ignoring invalid distance: " + key);
                continue;
            }
            applyDistance(world, type, distance);
        }
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!sender.hasPermission("survivalspawnlimit.admin")) {
            sender.sendMessage("権限がありません。");
            return true;
        }
        if ("distance".equals(command.getName())) {
            return distanceCommand(sender, args);
        }
        if (args.length == 0) {
            for (World world : getServer().getWorlds()) {
                sender.sendMessage("[" + world.getName() + "]");
                for (SpawnCategory category : CATEGORIES) {
                    sender.sendMessage(category.name().toLowerCase(Locale.ROOT)
                            + ": " + world.getSpawnLimit(category));
                }
            }
            return true;
        }
        if (args.length != 2) {
            return false;
        }
        SpawnCategory category = CATEGORIES.stream()
                .filter(value -> value.name().toLowerCase(Locale.ROOT).equals(args[0]))
                .findFirst().orElse(null);
        int limit;
        try {
            limit = Integer.parseInt(args[1]);
        } catch (NumberFormatException exception) {
            return false;
        }
        if (category == null || limit < 0) {
            return false;
        }
        for (World world : getServer().getWorlds()) {
            world.setSpawnLimit(category, limit);
        }
        getConfig().set(args[0], limit);
        saveConfig();
        sender.sendMessage(args[0] + ": " + limit + "（全ワールドに適用・保存）");
        return true;
    }

    private boolean distanceCommand(CommandSender sender, String[] args) {
        if (args.length == 0) {
            for (World world : getServer().getWorlds()) {
                sender.sendMessage("[" + world.getName() + "] view: " + world.getViewDistance()
                        + ", simulation: " + world.getSimulationDistance());
            }
            return true;
        }
        if (args.length != 2) {
            return false;
        }
        String type = args[0].equals("sim") ? "simulation" : args[0];
        int distance;
        try {
            distance = Integer.parseInt(args[1]);
        } catch (NumberFormatException exception) {
            return false;
        }
        if (!DISTANCES.contains(type) || distance < 2 || distance > 32) {
            return false;
        }
        for (World world : getServer().getWorlds()) {
            applyDistance(world, type, distance);
        }
        getConfig().set("distance." + type, distance);
        saveConfig();
        sender.sendMessage(type + ": " + distance + "（全ワールドに適用・保存）");
        return true;
    }

    private void applyDistance(World world, String type, int distance) {
        if (type.equals("view")) {
            world.setViewDistance(distance);
        } else {
            world.setSimulationDistance(distance);
        }
    }

    @Override
    public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        if (!sender.hasPermission("survivalspawnlimit.admin") || args.length != 1) {
            return List.of();
        }
        if ("distance".equals(command.getName())) {
            return DISTANCES.stream()
                    .filter(name -> name.startsWith(args[0].toLowerCase(Locale.ROOT))).toList();
        }
        return CATEGORIES.stream().map(category -> category.name().toLowerCase(Locale.ROOT))
                .filter(name -> name.startsWith(args[0].toLowerCase(Locale.ROOT))).toList();
    }
}
