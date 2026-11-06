package io.oyasai.survival.pull;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import org.bukkit.Location;
import org.bukkit.Material;
import java.util.EnumSet;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import org.bukkit.World;
import org.bukkit.block.Container;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerQuitEvent;

final class WarehouseManager implements Listener {
    private final SurvivalPull plugin;
    final Map<UUID, Warehouse> warehouses = new LinkedHashMap<>();
    private final Map<UUID, Location[]> selections = new HashMap<>();
    private final WarehouseInput input;

    WarehouseManager(SurvivalPull plugin) {
        this.plugin = plugin;
        input = new WarehouseInput(plugin, this);
    }

    WarehouseInput input() { return input; }

    Warehouse at(Location location) {
        return warehouses.values().stream().filter(w -> w.contains(location)).findFirst().orElse(null);
    }

    Warehouse scope(Player player) {
        Warehouse wh = at(player.getLocation());
        return wh != null && wh.isMember(player.getUniqueId()) ? wh : null;
    }

    /** /pull 用: 範囲の外でも、どの軸も range マス以内に使える倉庫があれば、いちばん近いものを選ぶ。 */
    Warehouse near(Player player, int range) {
        var l = player.getLocation();
        UUID world = l.getWorld().getUID();
        int x = l.getBlockX(), y = l.getBlockY(), z = l.getBlockZ();
        Warehouse best = null; int bestGap = Integer.MAX_VALUE;
        for (var w : warehouses.values()) {
            if (!w.world().equals(world) || !w.isMember(player.getUniqueId())) continue;
            int gap = Math.max(gap(x, w.minX(), w.maxX()), Math.max(gap(y, w.minY(), w.maxY()), gap(z, w.minZ(), w.maxZ())));
            if (gap <= range && gap < bestGap) { best = w; bestGap = gap; }
        }
        return best;
    }

    private static int gap(int v, int min, int max) { return Math.max(0, Math.max(min - v, v - max)); }

    void load() throws Exception {
        var file = plugin.getDataFolder().toPath().resolve("warehouses.yml");
        if (!Files.exists(file)) return;
        var yaml = new YamlConfiguration();
        yaml.load(file.toFile());
        var root = yaml.getConfigurationSection("warehouses");
        if (root == null) throw new IOException("warehouses セクションがありません");
        for (String key : root.getKeys(false)) {
            var c = root.getConfigurationSection(key);
            if (c == null) throw new IOException("倉庫の形式が不正です: " + key);
            var members = new java.util.HashSet<UUID>();
            for (String value : c.getStringList("members")) members.add(UUID.fromString(value));
            for (String coordinate : List.of("min-x", "min-y", "min-z", "max-x", "max-y", "max-z")) {
                if (!c.isInt(coordinate)) throw new IOException("座標が不正です: " + key);
            }
            var wh = new Warehouse(UUID.fromString(key), c.getString("name"), UUID.fromString(c.getString("world")),
                    UUID.fromString(c.getString("owner")), members, c.getInt("min-x"), c.getInt("min-y"), c.getInt("min-z"),
                    c.getInt("max-x"), c.getInt("max-y"), c.getInt("max-z"), EnumSet.noneOf(Material.class), new LinkedHashSet<>());
            if (c.contains("links") && !c.isList("links")) throw new IOException("リンクの形式が不正です: " + key);
            for (Object entry : c.getList("links", List.of())) {
                if (!(entry instanceof Map<?, ?> link) || !(link.get("blocks") instanceof List<?> blocks)
                        || blocks.isEmpty() || blocks.size() > 2 || !(link.get("type") instanceof String type)
                        || !List.of("CHEST", "TRAPPED_CHEST", "BARREL").contains(type))
                    throw new IOException("リンクの形式が不正です: " + key);
                var positions = new ArrayList<SurvivalPull.Position>();
                for (Object block : blocks) {
                    if (!(block instanceof Map<?, ?> p) || !(p.get("x") instanceof Integer x)
                            || !(p.get("y") instanceof Integer y) || !(p.get("z") instanceof Integer z))
                        throw new IOException("リンクの座標が不正です: " + key);
                    var position = new SurvivalPull.Position(x, y, z);
                    if (positions.contains(position) || java.util.stream.Stream.concat(warehouses.values().stream(), java.util.stream.Stream.of(wh))
                            .filter(w -> w.world().equals(wh.world())).flatMap(w -> w.links().stream())
                            .anyMatch(l -> l.blocks().contains(position))) throw new IOException("リンクの座標が重複しています: " + key);
                    positions.add(position);
                }
                positions.sort(WarehouseContainers.POSITIONS);
                wh.links().add(new Warehouse.Link(positions, Material.valueOf(type)));
            }
            for (String value : c.getStringList("excluded")) {
                Material material = Material.getMaterial(value);
                if (material == null || material.isAir() || material.isLegacy() || !material.isItem())
                    throw new IOException("除外アイテムが不正です: " + value);
                wh.excluded().add(material);
            }
            if (wh.name() == null || wh.name().isBlank() || wh.minX() > wh.maxX() || wh.minY() > wh.maxY() || wh.minZ() > wh.maxZ()
                    || warehouses.values().stream().anyMatch(w -> w.overlaps(wh) || w.name().equalsIgnoreCase(wh.name()))) {
                throw new IOException("倉庫名または範囲が不正です: " + key);
            }
            warehouses.put(wh.id(), wh);
        }
    }

    void save() throws IOException {
        var yaml = new YamlConfiguration();
        yaml.createSection("warehouses");
        for (Warehouse w : warehouses.values()) {
            String p = "warehouses." + w.id() + ".";
            yaml.set(p + "name", w.name());
            yaml.set(p + "world", w.world().toString());
            yaml.set(p + "owner", w.owner().toString());
            yaml.set(p + "excluded", w.excluded().stream().map(Material::name).sorted().toList());
            yaml.set(p + "members", w.members().stream().map(UUID::toString).sorted().toList());
            yaml.set(p + "links", w.links().stream().map(l -> Map.of("type", l.type().name(), "blocks",
                    l.blocks().stream().map(b -> Map.of("x", b.x(), "y", b.y(), "z", b.z())).toList())).toList());
            yaml.set(p + "min-x", w.minX()); yaml.set(p + "min-y", w.minY()); yaml.set(p + "min-z", w.minZ());
            yaml.set(p + "max-x", w.maxX()); yaml.set(p + "max-y", w.maxY()); yaml.set(p + "max-z", w.maxZ());
        }
        var directory = plugin.getDataFolder().toPath();
        Files.createDirectories(directory);
        var temp = Files.createTempFile(directory, "warehouses-", ".tmp");
        try {
            yaml.save(temp.toFile());
            Files.move(temp, directory.resolve("warehouses.yml"), StandardCopyOption.ATOMIC_MOVE, StandardCopyOption.REPLACE_EXISTING);
        } finally {
            Files.deleteIfExists(temp);
        }
    }

    void validateNew(Warehouse wh) {
        var others = warehouses.values().stream().filter(w -> !w.id().equals(wh.id())).toList();
        if (others.stream().anyMatch(w -> w.name().equalsIgnoreCase(wh.name())))
            throw new IllegalArgumentException("その倉庫名は使用済みです。");
        if (wh.volume() > plugin.getConfig().getLong("warehouse.max-volume", 64L * 64 * 32))
            throw new IllegalArgumentException("倉庫の体積が上限を超えています。");
        if (!warehouses.containsKey(wh.id()) && others.stream().filter(w -> w.owner().equals(wh.owner())).count()
                >= plugin.getConfig().getInt("warehouse.max-per-player", 3))
            throw new IllegalArgumentException("持てる倉庫数の上限です。");
        if (warehouses.values().stream().filter(w -> w.world().equals(wh.world())).flatMap(w -> w.links().stream())
                .flatMap(l -> l.blocks().stream()).anyMatch(p -> wh.contains(p.x(), p.y(), p.z())))
            throw new IllegalArgumentException("リンクされた投入口を含む範囲は登録できません。先にリンクを外してください。");
        if (others.stream().anyMatch(w -> w.overlaps(wh)))
            throw new IllegalArgumentException("既存の倉庫と範囲が重なっています。");
    }

    boolean command(CommandSender sender, String[] args) {
        if (!(sender instanceof Player player)) {
            sender.sendMessage("プレイヤーから実行してください。");
            return true;
        }
        try {
            if (args.length == 0) throw new IllegalArgumentException(usage());
            String action = args[0].toLowerCase(Locale.ROOT);
            if (action.equals("pos1") || action.equals("pos2")) {
                Location location;
                if (args.length == 1) {
                    var block = player.getTargetBlockExact(5);
                    location = block == null ? player.getLocation().toBlockLocation() : block.getLocation();
                } else if (args.length == 4) {
                    var base = player.getLocation();
                    location = new Location(base.getWorld(), coordinate(args[1], base.getBlockX()),
                            coordinate(args[2], base.getBlockY()), coordinate(args[3], base.getBlockZ()));
                } else throw new IllegalArgumentException("/wh " + action + " [x y z]");
                var corners = selections.computeIfAbsent(player.getUniqueId(), ignored -> new Location[2]);
                corners[action.equals("pos1") ? 0 : 1] = location;
                player.sendMessage(action + " を (" + location.getBlockX() + ", " + location.getBlockY() + ", " + location.getBlockZ() + ") にしました");
                if (corners[0] != null && corners[1] != null) {
                    Warehouse bounds = Warehouse.create("", player.getUniqueId(), corners[0], corners[1]);
                    player.sendMessage("範囲の大きさ: " + ((long) bounds.maxX() - bounds.minX() + 1) + "×"
                            + ((long) bounds.maxY() - bounds.minY() + 1) + "×" + ((long) bounds.maxZ() - bounds.minZ() + 1)
                            + " / 体積: " + bounds.volume() + "ブロック");
                }
            } else if (action.equals("link") && args.length == 2) {
                Warehouse wh = named(args[1]);
                requireLinkMember(player, wh); requireIdle(wh);
                var block = player.getTargetBlockExact(5);
                if (block == null) throw new IllegalArgumentException("5マス以内のチェスト・トラップチェスト・樽を見てください。");
                if (!wh.world().equals(block.getLocation().getWorld().getUID()))
                    throw new IllegalArgumentException("倉庫と同じワールドの容器を指定してください。");
                var state = block.getState(false);
                if (!WarehouseContainers.linkable(state))
                    throw new IllegalArgumentException("5マス以内のチェスト・トラップチェスト・樽を見てください。");
                var positions = WarehouseContainers.linkedBlocks((Container) state);
                if (positions.stream().anyMatch(p -> warehouses.values().stream().anyMatch(w -> w.world().equals(wh.world()) && w.contains(p.x(), p.y(), p.z()))))
                    throw new IllegalArgumentException("投入口は倉庫の外に置いてください");
                int distance = Math.max(0, plugin.getConfig().getInt("warehouse.link-distance", 64));
                if (positions.stream().noneMatch(p -> (long) p.x() >= (long) wh.minX() - distance && (long) p.x() <= (long) wh.maxX() + distance
                        && (long) p.y() >= (long) wh.minY() - distance && (long) p.y() <= (long) wh.maxY() + distance
                        && (long) p.z() >= (long) wh.minZ() - distance && (long) p.z() <= (long) wh.maxZ() + distance))
                    throw new IllegalArgumentException("リンクできる距離を超えています。");
                pruneLinks(player, wh, block.getLocation().getWorld());
                if (warehouses.values().stream().filter(w -> w.world().equals(wh.world())).flatMap(w -> w.links().stream())
                        .anyMatch(l -> l.blocks().stream().anyMatch(positions::contains)))
                    throw new IllegalArgumentException("その容器はすでにリンクされています。");
                if (wh.links().size() >= plugin.getConfig().getInt("warehouse.max-links", 4))
                    throw new IllegalArgumentException("リンクされた投入口の上限です。");
                var link = new Warehouse.Link(positions, state.getType());
                if (WarehouseContainers.linked(block.getLocation().getWorld(), link) == null)
                    throw new IllegalArgumentException("容器の両側のチャンクをロードしてからリンクしてください。");
                wh.links().add(link);
                try { save(); } catch (IOException error) { wh.links().remove(link); throw error; }

                player.sendMessage("投入口をリンクしました: " + wh.name());
            } else if (action.equals("unlink") && args.length == 1) {
                var block = player.getTargetBlockExact(5);
                Warehouse wh = block == null ? null : linkedAt(block.getLocation());
                if (wh == null) throw new IllegalArgumentException("リンクされた容器を5マス以内で見てください。");
                requireLinkMember(player, wh); requireIdle(wh);
                pruneLinks(player, wh, block.getLocation().getWorld());
                var position = position(block.getLocation());
                var link = wh.links().stream().filter(l -> l.blocks().contains(position)).findFirst().orElse(null);
                if (link != null) {
                    wh.links().remove(link);
                    try { save(); } catch (IOException error) { wh.links().add(link); throw error; }

                    player.sendMessage("投入口のリンクを外しました: " + wh.name());
                }
            } else if (action.equals("create") && args.length == 2) {
                if (args[1].isBlank() || args[1].length() > 32) throw new IllegalArgumentException("名前は1〜32文字で指定してください。");
                Location[] corners = selections.get(player.getUniqueId());
                if (corners == null || corners[0] == null || corners[1] == null) throw new IllegalArgumentException("先に /wh pos1 と /wh pos2 を指定してください。");
                Warehouse wh = Warehouse.create(args[1], player.getUniqueId(), corners[0], corners[1]);
                validateNew(wh);
                warehouses.put(wh.id(), wh);
                try { save(); } catch (IOException error) { warehouses.remove(wh.id()); throw error; }

                indexChanged(wh);
                player.sendMessage("倉庫を登録しました: " + wh.name());
            } else if (action.equals("resize") && args.length == 2) {
                Warehouse old = named(args[1]);
                requireOwner(player, old); requireIdle(old);
                Location[] corners = selections.get(player.getUniqueId());
                if (corners == null || corners[0] == null || corners[1] == null)
                    throw new IllegalArgumentException("先に /wh pos1 と /wh pos2 を指定してください。");
                Warehouse updated = old.resized(corners[0], corners[1]);
                validateNew(updated);
                replace(old, updated);
                player.sendMessage("倉庫の範囲を変更しました: " + updated.name());
            } else if (action.equals("rename") && args.length == 3) {
                Warehouse old = named(args[1]);
                requireOwner(player, old); requireIdle(old);
                if (args[2].isBlank() || args[2].length() > 32) throw new IllegalArgumentException("名前は1〜32文字で指定してください。");
                if (warehouses.values().stream().anyMatch(w -> !w.id().equals(old.id()) && w.name().equalsIgnoreCase(args[2])))
                    throw new IllegalArgumentException("その倉庫名は使用済みです。");
                replace(old, old.renamed(args[2]));
                player.sendMessage("倉庫名を変更しました: " + args[2]);
            } else if (action.equals("exclude")) {
                Warehouse wh = scope(player);
                if (wh == null) throw new IllegalArgumentException("今いる倉庫のメンバーだけが変更できます。");
                if (args.length == 2 && args[1].equalsIgnoreCase("list")) {
                    player.sendMessage("除外の種類: " + exclusions(wh));
                } else if (args.length == 3 && (args[1].equalsIgnoreCase("add") || args[1].equalsIgnoreCase("remove"))) {
                    requireIdle(wh);
                    Material material = args[2].equalsIgnoreCase("hand") ? player.getInventory().getItemInMainHand().getType()
                            : Material.matchMaterial(args[2].toLowerCase(Locale.ROOT));
                    if (material == null || material.isAir() || material.isLegacy() || !material.isItem())
                        throw new IllegalArgumentException("アイテム名が無効か、メインハンドにアイテムがありません。");
                    boolean wasExcluded = wh.excluded().contains(material);
                    if (args[1].equalsIgnoreCase("add")) wh.excluded().add(material); else wh.excluded().remove(material);
                    try { save(); } catch (IOException error) {
                        if (wasExcluded) wh.excluded().add(material); else wh.excluded().remove(material);
                        throw error;
                    }
                    player.sendMessage("除外の種類: " + exclusions(wh));
                } else throw new IllegalArgumentException(usage());
            } else if (action.equals("list") && args.length == 1) {
                var visible = warehouses.values().stream().filter(w -> w.isMember(player.getUniqueId()) || player.isOp()).toList();
                player.sendMessage("倉庫一覧 (" + visible.size() + "件)");
                visible.forEach(w -> player.sendMessage("- " + w.name() + " (" + w.volume() + "ブロック)"));
            } else if (action.equals("info") && args.length == 1) {
                Warehouse wh = at(player.getLocation());
                if (wh == null) throw new IllegalArgumentException("今いる場所は倉庫ではありません。");
                pruneLinks(player, wh, player.getWorld());
                showInfo(player, wh);
            } else if (action.equals("delete") && args.length == 2) {
                Warehouse wh = named(args[1]);
                requireOwner(player, wh);
                requireIdle(wh);
                warehouses.remove(wh.id());
                try { save(); } catch (IOException error) { warehouses.put(wh.id(), wh); throw error; }

                indexChanged(wh);
                player.sendMessage("倉庫を削除しました: " + wh.name());
            } else if (action.equals("member") && args.length == 4 && (args[1].equalsIgnoreCase("add") || args[1].equalsIgnoreCase("remove"))) {
                Warehouse wh = named(args[2]);
                requireOwner(player, wh);
                requireIdle(wh);
                boolean everyone = args[3].equals("*");
                if (!everyone && !args[3].matches("[A-Za-z0-9_]{1,16}")) throw new IllegalArgumentException("プレイヤー名が不正です。");
                UUID uuid = everyone ? Warehouse.EVERYONE : plugin.getServer().getOfflinePlayer(args[3]).getUniqueId();
                if (uuid.equals(wh.owner())) throw new IllegalArgumentException("持ち主は常にメンバーです。");
                boolean wasMember = wh.members().contains(uuid);
                if (args[1].equalsIgnoreCase("add")) wh.members().add(uuid); else wh.members().remove(uuid);
                try { save(); } catch (IOException error) {
                    if (wasMember) wh.members().add(uuid); else wh.members().remove(uuid);
                    throw error;
                }
                player.sendMessage("メンバーを変更しました: " + wh.name());
            } else throw new IllegalArgumentException(usage());
        } catch (IllegalArgumentException error) {
            sender.sendMessage(error.getMessage());
        } catch (IOException error) {
            plugin.getLogger().severe("倉庫を保存できませんでした: " + error);
            sender.sendMessage("保存に失敗したため、変更を取り消しました。");
        }
        return true;
    }

    private Warehouse named(String name) {
        return warehouses.values().stream().filter(w -> w.name().equalsIgnoreCase(name)).findFirst()
                .orElseThrow(() -> new IllegalArgumentException("その倉庫はありません。"));
    }

    private static SurvivalPull.Position position(Location location) {
        return new SurvivalPull.Position(location.getBlockX(), location.getBlockY(), location.getBlockZ());
    }

    Warehouse linkedAt(Location location) {
        return warehouses.values().stream().filter(w -> w.world().equals(location.getWorld().getUID()))
                .filter(w -> w.links().stream().anyMatch(l -> l.blocks().contains(position(location)))).findFirst().orElse(null);
    }

    void pruneLinks(Player player, Warehouse wh, World world) throws IOException {
        var broken = wh.links().stream().filter(l -> l.blocks().stream().allMatch(p -> world.isChunkLoaded(p.x() >> 4, p.z() >> 4)))
                .filter(l -> WarehouseContainers.linked(world, l) == null).toList();
        if (broken.isEmpty()) return;
        var previous = new LinkedHashSet<>(wh.links());
        wh.links().removeAll(broken);
        try { save(); } catch (IOException error) { wh.links().clear(); wh.links().addAll(previous); throw error; }

        broken.forEach(l -> player.sendMessage("壊れたリンクを削除しました: " + wh.name() + " " + linkCoordinates(l)));
    }

    private static String linkCoordinates(Warehouse.Link link) {
        return String.join(" + ", link.blocks().stream().map(p -> "(" + p.x() + ", " + p.y() + ", " + p.z() + ")").toList());
    }

    private static void requireLinkMember(Player player, Warehouse wh) {
        if (!wh.isMember(player.getUniqueId())) throw new IllegalArgumentException("倉庫のメンバーだけがリンクを変更できます。");
    }

    private static int coordinate(String value, int base) {
        try {
            if (value.equals("~")) return base;
            if (value.startsWith("~")) return Math.addExact(base, Integer.parseInt(value.substring(1)));
            return Integer.parseInt(value);
        } catch (NumberFormatException | ArithmeticException error) {
            throw new IllegalArgumentException("座標は整数または ~、~5 の形式で指定してください。");
        }
    }

    private void requireOwner(Player player, Warehouse wh) {
        if (!player.isOp() && !wh.owner().equals(player.getUniqueId())) throw new IllegalArgumentException("持ち主または op だけが変更できます。");
    }

    private void requireIdle(Warehouse wh) {
        if (input.busy(wh)) throw new IllegalArgumentException("処理が終わってから変更してください。");
    }

    private void replace(Warehouse old, Warehouse updated) throws IOException {
        warehouses.put(old.id(), updated);
        try { save(); } catch (IOException error) { warehouses.put(old.id(), old); throw error; }
        if (!old.world().equals(updated.world()) || old.minX() != updated.minX() || old.maxX() != updated.maxX()
                || old.minY() != updated.minY() || old.maxY() != updated.maxY() || old.minZ() != updated.minZ() || old.maxZ() != updated.maxZ()) indexChanged(updated);
    }

    private void indexChanged(Warehouse wh) {
        if (plugin.index() != null) plugin.index().rebuild(wh.id());
    }

    private static String exclusions(Warehouse wh) {
        return wh.excluded().isEmpty() ? "なし" : String.join(", ", wh.excluded().stream().map(Material::name).sorted().toList());
    }

    private void showInfo(Player player, Warehouse wh) {
        var op = plugin.work().start();
        Runnable show = () -> {
            var snapshot = plugin.index().snapshot(wh);
            if (player.isOnline()) {
                info(wh, snapshot).forEach(player::sendMessage);
                if (player.isOp()) player.sendMessage("索引: " + snapshot.capacity().containers() + "容器 / " + snapshot.parts()
                        + "ブロック / " + snapshot.capacity().slots() + "枠 / メモリ目安 " + snapshot.estimatedBytes() + " bytes / 版 " + snapshot.version());
            }
            op.cancel();
        };
        if (plugin.index().ready(wh)) show.run();
        else op.read(() -> {
            if (!player.isOnline() || !warehouses.containsKey(wh.id())) { op.cancel(); return false; }
            return plugin.index().ready(wh);
        }, show);
    }

    static List<String> info(Warehouse wh, WarehouseSnapshot snapshot) {
        var c = snapshot.capacity();
        var lines = new ArrayList<String>();
        lines.add("倉庫: " + wh.name() + " / 持ち主: " + wh.owner() + " / メンバー: "
                + (wh.members().contains(Warehouse.EVERYONE) ? "全員" : wh.members()));
        lines.add("範囲: (" + wh.minX() + ", " + wh.minY() + ", " + wh.minZ() + ") 〜 ("
                + wh.maxX() + ", " + wh.maxY() + ", " + wh.maxZ() + ") / 体積: " + wh.volume());
        lines.add("容量: 全" + c.slots() + "枠 / 使用" + c.used() + "枠 / 空き" + c.free() + "枠 / 種類数 " + snapshot.stock().size());
        lines.add("除外の種類: " + exclusions(wh));
        lines.add("リンクされた投入口: " + (wh.links().isEmpty() ? "なし" : wh.links().size() + "件"));
        wh.links().forEach(l -> lines.add("- " + linkCoordinates(l)));
        return lines;
    }

    private String usage() { return "/wh pos1|pos2 [x y z]|link <名前>|unlink|create <名前>|resize <名前>|rename <旧> <新>|delete <名前>|list|info|exclude add|remove <item|hand>|exclude list|member add|remove <名前> <プレイヤー>"; }

    List<String> complete(String[] args) {
        List<String> values = args.length == 1 ? List.of("pos1", "pos2", "link", "unlink", "create", "resize", "rename", "delete", "list", "info", "member", "exclude")
                : args.length == 2 && args[0].equalsIgnoreCase("member") ? List.of("add", "remove")
                : args.length == 2 && args[0].equalsIgnoreCase("exclude") ? List.of("add", "remove", "list")
                : (args.length == 2 && List.of("delete", "resize", "rename", "link").contains(args[0].toLowerCase(Locale.ROOT))
                    || args.length == 3 && args[0].equalsIgnoreCase("member"))
                    ? warehouses.values().stream().map(Warehouse::name).toList() : List.of();
        String prefix = args.length == 0 ? "" : args[args.length - 1].toLowerCase(Locale.ROOT);
        if (args.length == 3 && args[0].equalsIgnoreCase("exclude")
                && (args[1].equalsIgnoreCase("add") || args[1].equalsIgnoreCase("remove"))) {
            values = new ArrayList<>(List.of("hand"));
            for (Material material : Material.values()) {
                if (!material.isLegacy() && !material.isAir() && material.isItem())
                    values.add((prefix.startsWith("minecraft:") ? "minecraft:" : "") + material.name().toLowerCase(Locale.ROOT));
            }
        }
        return values.stream().filter(s -> s.toLowerCase(Locale.ROOT).startsWith(prefix)).sorted().toList();
    }

    @EventHandler
    public void onQuit(PlayerQuitEvent event) { selections.remove(event.getPlayer().getUniqueId()); }
}
