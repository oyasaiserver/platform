package io.oyasai.survival.pull;

import java.util.HashMap;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.PlayerInventory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SurvivalPullTest extends ItemStackTestSupport {
    private final World world = mock(World.class);
    private final Inventory destination = mock(Inventory.class);
    private final Location center = new Location(world, 0.5, 64.5, 0.5);

    @BeforeEach
    void setUp() {
        when(destination.addItem(any(ItemStack.class))).thenReturn(new HashMap<>());
    }

    @ParameterizedTest
    @ValueSource(strings = {"0", "-1", "2305", "2147483647", "2147483648", "9999999999999999999", "1.5", "abc"})
    void rejectsInvalidOrExcessiveAmounts(String value) {
        assertThrows(IllegalArgumentException.class, () -> SurvivalPull.parseAmount(value, 64));
    }

    @ParameterizedTest
    @CsvSource({"1,1", "2304,2304"})
    void acceptsAmountBoundaries(String value, int expected) {
        assertEquals(expected, SurvivalPull.parseAmount(value, 64));
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 16, 64})
    void defaultsToOneMaterialStack(int stackSize) {
        assertEquals(stackSize, SurvivalPull.parseAmount(null, stackSize));
    }

    @ParameterizedTest
    @CsvSource({"16,32,16", "64,32,32", "-1,32,0", "16,-1,0", "0,32,0"})
    void clampsRadius(int requested, int maximum, int expected) {
        assertEquals(expected, SurvivalPull.effectiveRadius(requested, maximum));
    }

    @Test
    void reloadRequiresAdminAndAppliesNewConfig() {
        SurvivalPull plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        CommandSender sender = mock(CommandSender.class);
        Command command = mock(Command.class);
        doNothing().when(plugin).reloadConfig();
        plugin.onCommand(sender, command, "pull", new String[] {"reload"});
        verify(plugin, never()).reloadConfig();
        when(sender.isOp()).thenReturn(true);
        var config = new YamlConfiguration();
        config.set("radius", 40);
        config.set("max-radius", 32);
        doReturn(config).when(plugin).getConfig();
        plugin.onCommand(sender, command, "pull", new String[] {"RELOAD"});
        verify(plugin).reloadConfig();
        verify(sender).sendMessage("設定を再読込しました。探索半径: 32");
    }

    @ParameterizedTest
    @ValueSource(strings = {"stone", "STONE", "minecraft:stone", "MINECRAFT:STONE"})
    void acceptsMaterialNamesIgnoringCaseAndMinecraftPrefix(String name) {
        assertSame(Material.STONE, Material.matchMaterial(name.toLowerCase(java.util.Locale.ROOT)));
    }

    @Test
    void commandRejectsInvalidItemAndEmptyHandWithoutAccessingWorld() throws Exception {
        SurvivalPull plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        Player player = mock(Player.class);
        PullTestSupport.nearbyWarehouse(plugin, player);
        PlayerInventory inventory = mock(PlayerInventory.class);
        when(player.getInventory()).thenReturn(inventory);
        Material air = mock(Material.class);
        when(air.isAir()).thenReturn(true);
        ItemStack emptyHand = mock(ItemStack.class); when(emptyHand.getType()).thenReturn(air);
        when(inventory.getItemInMainHand()).thenReturn(emptyHand);
        plugin.onCommand(player, mock(Command.class), "pull", new String[] {"unknown_item"});
        plugin.onCommand(player, mock(Command.class), "pull", new String[] {"hand"});
        verify(player, times(2)).sendMessage("アイテム名が無効か、メインハンドにアイテムがありません。");
        verify(player, never()).getLocation();
    }

    @Test
    void consoleCannotCollect() {
        SurvivalPull plugin = mock(SurvivalPull.class, CALLS_REAL_METHODS);
        CommandSender sender = mock(CommandSender.class);
        Command command = mock(Command.class);
        plugin.onCommand(sender, command, "pull", new String[] {"stone"});
        verify(sender).sendMessage("プレイヤーから実行してください。");
    }
}
