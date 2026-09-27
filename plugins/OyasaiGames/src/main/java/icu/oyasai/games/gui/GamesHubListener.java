package icu.oyasai.games.gui;

import icu.oyasai.games.roulette.gui.RouletteGui;
import icu.oyasai.games.roulette.model.RouletteSession;
import icu.oyasai.games.roulette.service.RouletteManager;
import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryDragEvent;

/**
 * おやさいゲームズ・ハブメニューのクリックイベントリスナーです。
 */
public class GamesHubListener implements Listener {
    private final RouletteManager rouletteManager;

    public GamesHubListener(RouletteManager rouletteManager) {
        this.rouletteManager = rouletteManager;
    }

    @EventHandler(priority = EventPriority.HIGH)
    public void onInventoryClick(InventoryClickEvent event) {
        if (!(event.getView().getTopInventory().getHolder() instanceof GamesHubHolder)) {
            return;
        }

        event.setCancelled(true);

        if (!(event.getWhoClicked() instanceof Player player)) {
            return;
        }

        if (event.getClickedInventory() != event.getView().getTopInventory()) {
            return;
        }

        int slot = event.getSlot();

        switch (slot) {
            case GamesHubGui.SLOT_ROULETTE -> {
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 1.2f);
                RouletteSession session = rouletteManager.getOrCreateSession(player.getUniqueId());
                RouletteGui.open(player, session);
            }
            case GamesHubGui.SLOT_CLOSE -> {
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 0.8f, 0.8f);
                player.closeInventory();
            }
            default -> {
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGH)
    public void onInventoryDrag(InventoryDragEvent event) {
        if (event.getView().getTopInventory().getHolder() instanceof GamesHubHolder) {
            event.setCancelled(true);
        }
    }
}
