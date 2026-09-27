package icu.oyasai.games.roulette.model;

import java.util.UUID;

/**
 * プレイヤーごとのGUI操作状態（セッション）を保持するデータクラスです。
 * 
 * 複数プレイヤーが同時にGUIを開いても、お互いの選択内容が干渉しないように
 * プレイヤーごとにインスタンスを生成して管理します。
 */
public class RouletteSession {
    private final UUID playerUuid;
    private RouletteMode selectedMode;
    private int selectedCount;
    private boolean broadcastToAll;

    public RouletteSession(UUID playerUuid) {
        this.playerUuid = playerUuid;
        // 初期値：全建築用アイテム、1回、全体公開
        this.selectedMode = RouletteMode.ALL;
        this.selectedCount = 1;
        this.broadcastToAll = true;
    }

    public UUID getPlayerUuid() {
        return playerUuid;
    }

    public RouletteMode getSelectedMode() {
        return selectedMode;
    }

    public void setSelectedMode(RouletteMode selectedMode) {
        this.selectedMode = selectedMode;
    }

    public int getSelectedCount() {
        return selectedCount;
    }

    public void setSelectedCount(int selectedCount) {
        this.selectedCount = selectedCount;
    }

    public boolean isBroadcastToAll() {
        return broadcastToAll;
    }

    public void setBroadcastToAll(boolean broadcastToAll) {
        this.broadcastToAll = broadcastToAll;
    }

    public void toggleBroadcast() {
        this.broadcastToAll = !this.broadcastToAll;
    }
}
