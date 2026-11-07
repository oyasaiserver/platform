package io.oyasai.survival.pull;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.TextComponent;
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.NamespacedKey;
import org.bukkit.Server;
import org.bukkit.entity.Player;
import org.bukkit.event.inventory.ClickType;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.inventory.InventoryDragEvent;
import org.bukkit.event.inventory.PrepareAnvilEvent;
import org.bukkit.inventory.AnvilInventory;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.InventoryView;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.view.AnvilView;
import org.bukkit.persistence.PersistentDataContainer;
import org.bukkit.persistence.PersistentDataType;
import org.bukkit.scheduler.BukkitScheduler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.EnumSource;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PullGuiTest {
    private final SurvivalPull plugin = mock(SurvivalPull.class);
    private final Server server = mock(Server.class);
    private final BukkitScheduler scheduler = mock(BukkitScheduler.class);
    private final Player player = mock(Player.class);
    private final ItemNames names = mock(ItemNames.class);
    private final List<Runnable> tasks = new ArrayList<>();
    private PullGui gui;

    @BeforeEach
    void setUp() {
        when(plugin.getServer()).thenReturn(server);
        when(server.getScheduler()).thenReturn(scheduler);
        when(scheduler.runTask(eq(plugin.owner()), any(Runnable.class))).thenAnswer(call -> {
            tasks.add(call.getArgument(1));
            return null;
        });
        when(player.isOnline()).thenReturn(true);
        when(names.name(any())).thenAnswer(call -> ((Material) call.getArgument(0)).name());
        when(names.filter(anyList(), anyString())).thenAnswer(call -> call.getArgument(0));
        when(plugin.scopeName(player)).thenReturn("周囲 16マス");
        AsyncTestSupport.immediateLists(plugin);
        when(plugin.work()).thenReturn(mock(WorkPipeline.class));
        gui = new PullGui(plugin, names);
    }

    private PullGui.ListScreen listScreen(InventoryView view, List<SurvivalPull.Stock> stock) {
        var screen = new PullGui.ListScreen(stock, "");
        screen.filtered = stock;
        screen.inventory = mock(Inventory.class);
        when(screen.inventory.getHolder()).thenReturn(screen);
        when(view.getTopInventory()).thenReturn(screen.inventory);
        when(player.getOpenInventory()).thenReturn(view);
        return screen;
    }

    private InventoryClickEvent click(InventoryView view, int slot, ClickType click) {
        var event = mock(InventoryClickEvent.class);
        when(event.getView()).thenReturn(view);
        when(event.getWhoClicked()).thenReturn(player);
        when(event.getRawSlot()).thenReturn(slot);
        when(event.getClick()).thenReturn(click);
        return event;
    }

    private PullGui.SearchScreen searchScreen(AnvilView view) {
        when(view.getPlayer()).thenReturn(player);
        when(view.getTopInventory()).thenReturn(mock(AnvilInventory.class));
        var screen = new PullGui.SearchScreen(view,
                List.of(new SurvivalPull.Stock(Material.STONE, 99, List.of())), "");
        gui.searches.put(view, screen);
        when(player.getOpenInventory()).thenReturn(view);
        return screen;
    }

    @ParameterizedTest
    @EnumSource(ClickType.class)
    void cancelsEveryClickTypeInBothInventoriesAndOutside(ClickType click) {
        InventoryView view = mock(InventoryView.class);
        listScreen(view, List.of());
        for (int slot : new int[] {-999, 0, 45, 54, 89}) {
            var event = click(view, slot, click);
            gui.onClick(event);
            verify(event).setCancelled(true);
        }
        verify(plugin, never()).pull(any(), any(), anyString(), anyInt());
    }

    @ParameterizedTest
    @EnumSource(ClickType.class)
    void cancelsEveryAnvilClickAndNeverLetsResultMove(ClickType click) {
        AnvilView view = mock(AnvilView.class);
        searchScreen(view);
        for (int slot : new int[] {-999, 0, 1, 2, 3, 38}) {
            var event = click(view, slot, click);
            gui.onClick(event);
            verify(event).setCancelled(true);
        }
        verify(player, never()).give(any(ItemStack.class));
        verify(player, never()).openInventory(any(Inventory.class));
        verify(view, never()).setCursor(any());
    }

    @Test
    void cancelsDragsAndLeavesOtherScreensAloneEvenWithSameTitle() {
        InventoryView view = mock(InventoryView.class);
        listScreen(view, List.of());
        var drag = mock(InventoryDragEvent.class);
        when(drag.getView()).thenReturn(view);
        gui.onDrag(drag);
        verify(drag).setCancelled(true);
        AnvilView anvil = mock(AnvilView.class);
        searchScreen(anvil);
        when(drag.getView()).thenReturn(anvil);
        gui.onDrag(drag);
        verify(drag, times(2)).setCancelled(true);

        InventoryView other = mock(InventoryView.class);
        when(other.getTopInventory()).thenReturn(mock(Inventory.class));
        when(other.getTitle()).thenReturn("周囲の容器");
        var event = click(other, 0, ClickType.LEFT);
        gui.onClick(event);
        verify(event, never()).setCancelled(anyBoolean());
        when(drag.getView()).thenReturn(other);
        gui.onDrag(drag);
        verify(drag, times(2)).setCancelled(true);
        assertFalse(gui.owns(mockOtherAnvil()));
    }

    private AnvilView mockOtherAnvil() {
        AnvilView other = mock(AnvilView.class);
        when(other.getTopInventory()).thenReturn(mock(AnvilInventory.class));
        return other;
    }

    @ParameterizedTest
    @CsvSource({"LEFT,64", "SHIFT_LEFT,2147483647", "RIGHT,1"})
    void queuesOnlyOnePullPerTickAndRefreshesAfterPull(ClickType click, int amount) {
        InventoryView view = mock(InventoryView.class);
        Material stone = mock(Material.class);
        when(stone.getMaxStackSize()).thenReturn(64);
        var screen = listScreen(view, List.of(new SurvivalPull.Stock(stone, 100, List.of())));
        try (var items = mockConstruction(ItemStack.class, (item, context) -> prepareItem(item))) {
            gui.onClick(click(view, 0, click));
            gui.onClick(click(view, 0, click));
            assertEquals(1, tasks.size());
            verify(plugin, never()).pull(any(), any(), anyString(), anyInt());
            // 空の世界へ再集計し、古い表示を消す。
            var world = mock(org.bukkit.World.class);
            when(player.getLocation()).thenReturn(new org.bukkit.Location(world, 0, 64, 0));
            tasks.removeFirst().run();
            verify(plugin).pull(player, stone, "", amount);
            assertTrue(screen.stock.isEmpty());
            assertFalse(screen.pending);
            verify(screen.inventory).clear();
        }
    }

    @ParameterizedTest
    @EnumSource(value = ClickType.class, names = {"LEFT", "SHIFT_LEFT", "RIGHT"}, mode = EnumSource.Mode.EXCLUDE)
    void unsupportedClicksNeverRequestItems(ClickType click) {
        assertEquals(0, PullGui.requestedAmount(click, 64));
        InventoryView view = mock(InventoryView.class);
        Material stone = mock(Material.class);
        when(stone.getMaxStackSize()).thenReturn(64);
        listScreen(view, List.of(new SurvivalPull.Stock(stone, 100, List.of())));
        gui.onClick(click(view, 0, click));
        assertTrue(tasks.isEmpty());
    }

    @Test
    void staleScheduledClickCannotCollectAfterClosingOrSwitchingScreens() {
        InventoryView view = mock(InventoryView.class);
        Material stone = mock(Material.class);
        when(stone.getMaxStackSize()).thenReturn(64);
        listScreen(view, List.of(new SurvivalPull.Stock(stone, 100, List.of())));
        gui.onClick(click(view, 0, ClickType.LEFT));
        when(player.getOpenInventory()).thenReturn(mock(InventoryView.class));
        tasks.removeFirst().run();
        verify(plugin, never()).pull(any(), any(), anyString(), anyInt());
    }

    @Test
    void pageButtonsAndClearUseSnapshotAndCloseIsDeferred() {
        InventoryView view = mock(InventoryView.class);
        var stock = java.util.Collections.nCopies(46, new SurvivalPull.Stock(Material.STONE, 100, List.of()));
        var screen = listScreen(view, stock);
        screen.page = 1;
        screen.query = "石";
        try (var items = mockConstruction(ItemStack.class, (item, context) -> prepareItem(item))) {
            gui.onClick(click(view, 45, ClickType.LEFT));
            assertEquals(1, screen.page);
            tasks.removeFirst().run();
            assertEquals(0, screen.page);
            gui.onClick(click(view, 46, ClickType.LEFT));
            tasks.removeFirst().run();
            assertEquals(1, screen.page);
            gui.onClick(click(view, 50, ClickType.LEFT));
            tasks.removeFirst().run();
            assertEquals("", screen.query);
            assertEquals(0, screen.page);
            verify(player, never()).getLocation();
            gui.onClick(click(view, 53, ClickType.LEFT));
            verify(player, never()).closeInventory();
            tasks.removeFirst().run();
            verify(player).closeInventory();
        }
    }

    @Test
    void searchConfirmationAppliesLatestQueryAndRescansWhenReopeningList() {
        AnvilView view = mock(AnvilView.class);
        var search = searchScreen(view);
        when(view.getRenameText()).thenReturn("いし");
        var world = mock(org.bukkit.World.class);
        when(player.getLocation()).thenReturn(new org.bukkit.Location(world, 0, 64, 0));
        Inventory inventory = mock(Inventory.class);
        try (var bukkit = mockStatic(Bukkit.class);
             var items = mockConstruction(ItemStack.class, (item, context) -> prepareItem(item))) {
            bukkit.when(() -> Bukkit.createInventory(any(org.bukkit.inventory.InventoryHolder.class),
                    eq(54), any(Component.class))).thenReturn(inventory);
            gui.onClick(click(view, 2, ClickType.LEFT));
            gui.onClick(click(view, 2, ClickType.LEFT));
            assertEquals(1, tasks.size());
            verify(player, never()).getLocation();
            tasks.removeFirst().run();
            assertEquals("いし", search.query);
            verify(names).filter(List.of(), "いし");
            verify(player).openInventory(inventory);
            verify(player, never()).setLevel(anyInt());
        }
    }

    private void prepareItem(ItemStack item) {
        ItemMeta meta = mock(ItemMeta.class);
        PersistentDataContainer pdc = mock(PersistentDataContainer.class);
        var data = new HashMap<NamespacedKey, String>();
        when(item.getType()).thenReturn(Material.PAPER);
        when(item.getItemMeta()).thenReturn(meta);
        when(meta.getPersistentDataContainer()).thenReturn(pdc);
        doAnswer(call -> {
            data.put(call.getArgument(0), call.getArgument(2));
            return null;
        }).when(pdc).set(any(NamespacedKey.class), eq(PersistentDataType.STRING), anyString());
        when(pdc.get(any(NamespacedKey.class), eq(PersistentDataType.STRING)))
                .thenAnswer(call -> data.get(call.getArgument(0)));
        doAnswer(call -> {
            when(meta.displayName()).thenReturn(call.getArgument(0));
            return null;
        }).when(meta).displayName(any(Component.class));
        doAnswer(call -> {
            when(meta.lore()).thenReturn(call.getArgument(0));
            return null;
        }).when(meta).lore(anyList());
    }

    @Test
    void individualIconKeepsOriginalTooltipAndClickPassesItsKey() {
        var snapshotIcon = mock(ItemStack.class);
        var displayCopy = mock(ItemStack.class);
        var meta = mock(org.bukkit.inventory.meta.Damageable.class);
        when(snapshotIcon.clone()).thenReturn(displayCopy);
        when(displayCopy.getItemMeta()).thenReturn(meta);
        when(meta.customName()).thenReturn(Component.text("勇者の剣"));
        when(meta.getDamage()).thenReturn(123);
        when(meta.hasEnchants()).thenReturn(true);
        List<Component> originalLore = List.of(Component.text("既存の説明"));
        when(meta.lore()).thenReturn(originalLore);
        String key = "0123456789abcdef"; // gitleaks:allow
        var variant = new ItemVariant(Material.DIAMOND_SWORD, key, "bytes", snapshotIcon, "勇者の剣", List.of());
        InventoryView view = mock(InventoryView.class);
        var screen = listScreen(view, List.of(new SurvivalPull.Stock(variant, 2, List.of())));
        try (var items = mockConstruction(ItemStack.class, (item, context) -> prepareItem(item))) {
            gui.render(screen);
            verify(screen.inventory).setItem(0, displayCopy);
            verify(displayCopy).setAmount(1);
            verify(displayCopy).setItemMeta(meta);
            org.mockito.ArgumentCaptor<List<Component>> lore = org.mockito.ArgumentCaptor.captor();
            verify(meta).lore(lore.capture());
            assertEquals(originalLore.getFirst(), lore.getValue().getFirst());
            assertEquals("合計 2個", ((TextComponent) lore.getValue().get(1)).content());
            assertEquals(4, lore.getValue().size());
            assertEquals(123, meta.getDamage());
            assertTrue(meta.hasEnchants());
            verify(meta, never()).displayName(any(Component.class));
            verify(meta, never()).customName(any(Component.class));
            verify(snapshotIcon, never()).setItemMeta(any());
            gui.onClick(click(view, 0, ClickType.RIGHT));
            tasks.removeFirst().run();
            verify(plugin).pull(player, Material.DIAMOND_SWORD, key, 1);
        }
    }

    private String title(ItemStack item) {
        return ((TextComponent) item.getItemMeta().displayName()).content();
    }

    @Test
    void renders45ItemsOneEachTopThreeLocationsAndClampsPage() {
        InventoryView view = mock(InventoryView.class);
        List<SurvivalPull.Source> sources = java.util.stream.IntStream.range(0, 4)
                .mapToObj(i -> new SurvivalPull.Source(Material.CHEST,
                        new SurvivalPull.Position(i, 64, 0), 4 - i)).toList();
        var stock = java.util.Arrays.stream(Material.values()).limit(46)
                .map(material -> new SurvivalPull.Stock(material, 10, sources)).toList();
        var screen = listScreen(view, stock);
        var rendered = new HashMap<Integer, ItemStack>();
        doAnswer(call -> {
            rendered.put(call.getArgument(0), call.getArgument(1));
            return null;
        }).when(screen.inventory).setItem(anyInt(), any());
        try (var items = mockConstruction(ItemStack.class, (item, context) -> {
            assertEquals(1, context.arguments().get(1));
            prepareItem(item);
        })) {
            gui.render(screen);
            assertEquals(51, rendered.size());
            assertTrue(rendered.keySet().containsAll(java.util.stream.IntStream.range(0, 45).boxed().toList()));
            var lore = rendered.get(0).getItemMeta().lore().stream()
                    .map(line -> ((TextComponent) line).content()).toList();
            assertEquals("合計 10個", lore.get(0));
            assertEquals("主な場所", lore.get(1));
            assertEquals("CHEST (2, 64, 0): 2個", lore.get(4));
            assertEquals(6, lore.size());
            assertEquals("前ページ", title(rendered.get(45)));
            assertEquals("次ページ", title(rendered.get(46)));
            assertEquals("検索", title(rendered.get(48)));
            assertEquals("検索解除", title(rendered.get(50)));
            assertEquals("閉じる", title(rendered.get(53)));
            screen.page = 99;
            rendered.clear();
            gui.render(screen);
            assertEquals(1, screen.page);
            assertEquals(7, rendered.size());
            when(names.filter(stock, "なし")).thenReturn(List.of());
            screen.query = "なし";
            screen.filtered = List.of();
            gui.render(screen);
            assertEquals(0, screen.page);
            assertEquals("検索: なし", title(rendered.get(49)));
        }
    }

    @Test
    void prepareUpdatesHitCountAndCandidatesOnEveryInputWithoutRescanningOrExperienceCost() {
        AnvilView view = mock(AnvilView.class);
        var search = searchScreen(view);
        var event = mock(PrepareAnvilEvent.class);
        when(event.getView()).thenReturn(view);
        when(names.name(Material.STONE)).thenReturn("石");
        try (var items = mockConstruction(ItemStack.class, (item, context) -> prepareItem(item))) {
            for (String query : new String[] {"石", "stone", "ない"}) {
                when(view.getRenameText()).thenReturn(query);
                when(names.filter(search.stock, query)).thenReturn(query.equals("ない") ? List.of() : search.stock);
                gui.onPrepare(event);
                assertEquals(query, search.query);
                ItemStack result = items.constructed().getLast();
                assertTrue(title(result).startsWith(query.equals("ない") ? "0種類" : "1種類"));
                if (!query.equals("ない")) assertEquals("石 — 合計 99個",
                        ((TextComponent) result.getItemMeta().lore().getFirst()).content());
                verify(event, atLeastOnce()).setResult(null);
                verify(view.getTopInventory()).setItem(2, result);
            }
        }
        verify(view, times(3)).setRepairCost(0);
        verify(view, times(3)).setRepairItemCountCost(0);
        verify(player, never()).getLocation();
        verify(player, never()).setLevel(anyInt());
    }

    @ParameterizedTest
    @CsvSource({"0,1", "1,0"})
    void closeRemovesOnlyGuiPaperAndResultAndLeavesRealInputsForVanillaReturn(int ghostSlot, int realSlot) {
        AnvilView view = mock(AnvilView.class);
        var search = searchScreen(view);
        ItemStack ghost = mock(ItemStack.class);
        prepareItem(ghost);
        ghost.getItemMeta().getPersistentDataContainer().set(new NamespacedKey("survivalpull", "search-paper"),
                PersistentDataType.STRING, search.token);
        ItemStack real = mock(ItemStack.class);
        prepareItem(real);
        when(view.getTopInventory().getItem(ghostSlot)).thenReturn(ghost);
        when(view.getTopInventory().getItem(realSlot)).thenReturn(real);
        gui.onClose(new InventoryCloseEvent(view));
        verify(view.getTopInventory()).setItem(ghostSlot, null);
        verify(view.getTopInventory()).setItem(2, null);
        verify(view.getTopInventory(), never()).setItem(eq(realSlot), any());
        assertFalse(gui.searches.containsKey(view));
        assertFalse(gui.owns(view));
        verify(player).getUniqueId();
        verifyNoMoreInteractions(player);
    }

    @Test
    void disableCleansAnvilBeforeClosingAndDoesNotCloseOtherInventories() {
        AnvilView view = mock(AnvilView.class);
        searchScreen(view);
        Player other = mock(Player.class);
        AnvilView otherView = mockOtherAnvil();
        when(other.getOpenInventory()).thenReturn(otherView);
        doReturn(List.of(player, other)).when(server).getOnlinePlayers();
        gui.closeAll();
        var order = inOrder(view.getTopInventory(), player);
        order.verify(view.getTopInventory()).setItem(2, null);
        order.verify(player).closeInventory();
        verify(other, never()).closeInventory();
        assertTrue(gui.searches.isEmpty());
    }
}
