package icu.oyasai.games.roulette.gui;

import icu.oyasai.games.roulette.model.RouletteSession;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.InventoryHolder;

/**
 * おやさいルーレット専用のインベントリホルダーです。
 * 
 * このホルダーをインベントリに設定することで、
 * 「この画面がおやさいルーレットのGUIであること」を確実に識別でき、
 * 他のプラグインのチェスト画面との誤判定や競合を完全に防ぎます。
 */
public class RouletteGuiHolder implements InventoryHolder {
    public enum State {
        SELECTING,
        ROLLING,
        FINISHED
    }

    private final RouletteSession session;
    private Inventory inventory;
    private State state = State.SELECTING;

    public RouletteGuiHolder(RouletteSession session) {
        this.session = session;
    }

    public RouletteSession getSession() {
        return session;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    @Override
    public Inventory getInventory() {
        return inventory;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }
}
