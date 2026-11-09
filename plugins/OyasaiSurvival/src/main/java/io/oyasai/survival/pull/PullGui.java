package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.TextDecoration;
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.NamespacedKey;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.ClickType;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.inventory.InventoryDragEvent;
import org.bukkit.event.inventory.PrepareAnvilEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.InventoryHolder;
import org.bukkit.inventory.InventoryView;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.MenuType;
import org.bukkit.inventory.view.AnvilView;
import org.bukkit.persistence.PersistentDataType;

final class PullGui implements Listener {
    static final int PAGE_SIZE = 45;
    private final SurvivalPull plugin;
    private final ItemNames names;
    private final NamespacedKey marker;
    // MenuType の金床は Holder を指定できないので、生成した view 自体を照合する。
    final Map<InventoryView, SearchScreen> searches = new IdentityHashMap<>();

    PullGui(SurvivalPull plugin, ItemNames names) {
        this.plugin = plugin;
        this.names = names;
        // Retain the marker namespace used before the plugin was merged.
        this.marker = new NamespacedKey("survivalpull", "search-paper");
    }

    static final class ListScreen implements InventoryHolder {
        Inventory inventory;
        List<SurvivalPull.Stock> stock;
        List<SurvivalPull.Stock> filtered = List.of();
        String query;
        int page;
        boolean pending;

        ListScreen(List<SurvivalPull.Stock> stock, String query) {
            this.stock = stock;
            this.query = query;
        }

        @Override
        public Inventory getInventory() { return inventory; }
    }

    static final class SearchScreen {
        final AnvilView view;
        final List<SurvivalPull.Stock> stock;
        final String token = UUID.randomUUID().toString();
        String query;
        boolean pending;

        SearchScreen(AnvilView view, List<SurvivalPull.Stock> stock, String query) {
            this.view = view;
            this.stock = stock;
            this.query = query;
        }
    }

    void openList(Player player) {
        openList(player, "");
    }

    private void openList(Player player, String query) {
        InventoryView previous = player.getOpenInventory();
        plugin.requestList(player, names, query, result -> {
            if (player.getOpenInventory() != previous) return;
            var screen = new ListScreen(result.stock(), query);
            screen.filtered = result.filtered();
            screen.inventory = Bukkit.createInventory(screen, 54, Component.text(result.scope()));
            render(screen);
            player.openInventory(screen.inventory);
        });
    }

    void render(ListScreen screen) {
        int pages = Math.max(1, (screen.filtered.size() + PAGE_SIZE - 1) / PAGE_SIZE);
        screen.page = Math.clamp(screen.page, 0, pages - 1);
        screen.inventory.clear();
        int offset = screen.page * PAGE_SIZE;
        for (int i = 0; i < PAGE_SIZE && offset + i < screen.filtered.size(); i++) {
            SurvivalPull.Stock entry = screen.filtered.get(offset + i);
            var lore = new ArrayList<String>();
            lore.add("合計 " + entry.amount() + "個");
            lore.add("主な場所");
            entry.sources().stream().limit(3).forEach(source -> {
                var p = source.position();
                lore.add(names.name(source.type()) + " (" + p.x() + ", " + p.y() + ", "
                        + p.z() + "): " + source.amount() + "個");
            });
            lore.add("左: 1スタック / Shift+左: 入るだけ全部 / 右: 1個");
            screen.inventory.setItem(i, stockIcon(entry, lore));
        }
        screen.inventory.setItem(45, icon(Material.ARROW, "前ページ", List.of()));
        screen.inventory.setItem(46, icon(Material.ARROW, "次ページ", List.of()));
        screen.inventory.setItem(48, icon(Material.ANVIL, "検索", List.of("金床の入力欄で検索")));
        screen.inventory.setItem(49, icon(Material.PAPER,
                "検索: " + (screen.query.isEmpty() ? "すべて" : screen.query),
                List.of(screen.filtered.size() + "種類 / 全" + screen.stock.size() + "種類",
                        (screen.page + 1) + " / " + pages + "ページ")));
        screen.inventory.setItem(50, icon(Material.MILK_BUCKET, "検索解除", List.of()));
        screen.inventory.setItem(53, icon(Material.BARRIER, "閉じる", List.of()));
    }

    private static ItemStack icon(Material material, String title, List<String> lore) {
        var item = new ItemStack(material, 1);
        var meta = item.getItemMeta();
        meta.displayName(text(title));
        meta.lore(lore.stream().map(PullGui::text).toList());
        item.setItemMeta(meta);
        return item;
    }

    private ItemStack stockIcon(SurvivalPull.Stock entry, List<String> extraLore) {
        if (entry.key().isEmpty()) return icon(entry.material(), names.name(entry.material()), extraLore);
        var item = entry.variant().icon();
        item.setAmount(1);
        var meta = item.getItemMeta();
        var lore = new ArrayList<Component>();
        if (meta.lore() != null) lore.addAll(meta.lore());
        extraLore.stream().map(PullGui::text).forEach(lore::add);
        meta.lore(lore);
        item.setItemMeta(meta);
        return item;
    }

    private static Component text(String value) {
        return Component.text(value).decoration(TextDecoration.ITALIC, false);
    }

    private ItemStack searchPaper(SearchScreen search, String title, List<String> lore) {
        var paper = icon(Material.PAPER, title, lore);
        var meta = paper.getItemMeta();
        meta.getPersistentDataContainer().set(marker, PersistentDataType.STRING, search.token);
        paper.setItemMeta(meta);
        return paper;
    }

    private void openSearch(Player player, ListScreen screen) {
        AnvilView view = MenuType.ANVIL.builder().checkReachable(false)
                .title(Component.text("検索 / " + plugin.scopeName(player))).build(player);
        var search = new SearchScreen(view, screen.stock, screen.query);
        searches.put(view, search);
        view.getTopInventory().setItem(0, searchPaper(search, screen.query, List.of("検索語を入力")));
        view.open();
        if (player.getOpenInventory() != view) {
            searches.remove(view);
            cleanSearch(search);
            return;
        }
        updateSearch(search, null);
    }

    void updateSearch(SearchScreen search, PrepareAnvilEvent event) {
        String query = search.view.getRenameText();
        if (query != null) search.query = query;
        if (!(search.view.getPlayer() instanceof Player player)) return;
        String requested = search.query;
        if (event != null) event.setResult(null);
        search.view.getTopInventory().setItem(2, null);
        var stock = search.stock;
        plugin.prepareList(player, () -> names.filter(stock, requested), hits -> {
            if (searches.get(search.view) != search || player.getOpenInventory() != search.view
                    || !search.query.equals(requested)) return;
            var lore = hits.stream().limit(5)
                    .map(entry -> names.name(entry.material()) + " — 合計 " + entry.amount() + "個").toList();
            ItemStack paper = searchPaper(search, hits.size() + "種類のヒット / クリックして一覧", lore);
            search.view.setRepairCost(0);
            search.view.setRepairItemCountCost(0);
            search.view.getTopInventory().setItem(2, paper);
        });
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onPrepare(PrepareAnvilEvent event) {
        SearchScreen search = searches.get(event.getView());
        if (search != null) updateSearch(search, event);
    }

    boolean owns(InventoryView view) {
        return view.getTopInventory().getHolder() instanceof ListScreen || searches.containsKey(view);
    }

    static int requestedAmount(ClickType click, int stackSize) {
        return switch (click) {
            case LEFT -> stackSize;
            case SHIFT_LEFT -> Integer.MAX_VALUE;
            case RIGHT -> 1;
            default -> 0;
        };
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onClick(InventoryClickEvent event) {
        InventoryView view = event.getView();
        if (!owns(view)) return;
        event.setCancelled(true);
        if (!(event.getWhoClicked() instanceof Player player)) return;
        int slot = event.getRawSlot();
        SearchScreen search = searches.get(view);
        if (search != null) {
            if (slot != 2 || search.pending || requestedAmount(event.getClick(), 1) == 0) return;
            search.pending = true;
            String query = search.view.getRenameText();
            if (query != null) search.query = query;
            nextTick(player, view, () -> openList(player, search.query));
            return;
        }
        ListScreen screen = (ListScreen) view.getTopInventory().getHolder();
        if (screen.pending || slot < 0 || slot >= 54 || requestedAmount(event.getClick(), 1) == 0) return;
        int index = screen.page * PAGE_SIZE + slot;
        if (slot < PAGE_SIZE && index >= screen.filtered.size()) return;
        if (slot >= PAGE_SIZE && slot != 45 && slot != 46 && slot != 48 && slot != 50 && slot != 53) return;
        SurvivalPull.Stock entry = slot < PAGE_SIZE ? screen.filtered.get(index) : null;
        int amount = entry == null ? 0 : requestedAmount(event.getClick(), entry.material().getMaxStackSize());
        screen.pending = true;
        nextTick(player, view, () -> {
            screen.pending = false;
            if (entry != null) {
                plugin.pull(player, entry.material(), entry.key(), amount);
                refresh(player, view, screen);
                return;
            } else {
                switch (slot) {
                    case 45 -> screen.page--;
                    case 46 -> screen.page++;
                    case 48 -> { openSearch(player, screen); return; }
                    case 50 -> {
                        screen.query = ""; screen.page = 0;
                        refresh(player, view, screen);
                        return;
                    }
                    case 53 -> { player.closeInventory(); return; }
                    default -> { return; }
                }
            }
            render(screen);
        });
    }

    private void refresh(Player player, InventoryView view, ListScreen screen) {
        plugin.requestList(player, names, screen.query, result -> {
            if (player.getOpenInventory() != view) return;
            screen.stock = result.stock();
            screen.filtered = result.filtered();
            view.setTitle(result.scope());
            render(screen);
        });
    }

    private void nextTick(Player player, InventoryView view, Runnable action) {
        plugin.getServer().getScheduler().runTask(plugin.owner(), () -> {
            if (player.isOnline() && player.getOpenInventory() == view) action.run();
        });
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onDrag(InventoryDragEvent event) {
        if (owns(event.getView())) event.setCancelled(true);
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    public void onClose(InventoryCloseEvent event) {
        if (owns(event.getView()) && event.getPlayer() instanceof Player player) plugin.work().forget(player.getUniqueId());
        SearchScreen search = searches.remove(event.getView());
        if (search != null) cleanSearch(search);
    }

    void cleanSearch(SearchScreen search) {
        Inventory inventory = search.view.getTopInventory();
        for (int slot = 0; slot < 2; slot++) {
            ItemStack item = inventory.getItem(slot);
            if (item != null && !item.isEmpty() && search.token.equals(item.getItemMeta().getPersistentDataContainer()
                    .get(marker, PersistentDataType.STRING))) inventory.setItem(slot, null);
        }
        // 実物の入力アイテムは残し、閉じる際のバニラの返却処理に渡す。
        inventory.setItem(2, null);
    }

    void closeAll() {
        for (Player player : plugin.getServer().getOnlinePlayers()) {
            InventoryView view = player.getOpenInventory();
            if (!owns(view)) continue;
            SearchScreen search = searches.remove(view);
            if (search != null) cleanSearch(search);
            player.closeInventory();
        }
        for (SearchScreen search : List.copyOf(searches.values())) cleanSearch(search);
        searches.clear();
    }
}
