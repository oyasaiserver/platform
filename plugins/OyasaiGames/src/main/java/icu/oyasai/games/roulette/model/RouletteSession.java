package icu.oyasai.games.roulette.model;

import java.util.UUID;

/**
 * プレイヤーごとのGUI操作状態（セッション）を保持するデータクラスです。
 * 
 * 複数プレイヤーが同時にGUIを開いても、お互いの選択内容が干渉しないように
 * プレイヤーごとにインスタンスを生成して管理します。
 */
public class RouletteSession {
    /** 分けて引くモードで、1種類あたりに選べる最大回数。 */
    public static final int MAX_COUNT_PER_MODE = 10;
    /** 全建築用アイテムを単独で引くときの最大回数。 */
    public static final int MAX_COUNT_ALL = 10;
    /** 1回の抽選で引ける合計回数の上限。 */
    public static final int MAX_TOTAL_COUNT = 10;

    private final UUID playerUuid;
    private RouletteMode selectedMode;
    private int selectedCount;
    private int fullBlockCount;
    private int nonFullBlockCount;
    private boolean broadcastToAll;
    private boolean hasSpecialAccess;

    public RouletteSession(UUID playerUuid) {
        this.playerUuid = playerUuid;
        // 初期値：全建築用アイテム、1回、全体公開、特殊アクセスなし
        this.selectedMode = RouletteMode.ALL;
        this.selectedCount = 1;
        this.broadcastToAll = true;
        this.hasSpecialAccess = false;
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

    /**
     * 「分けて引くモード」（フルブロックと装飾を別々の回数で引く）かどうかを返します。
     * 全建築用以外のモードが選ばれている間は分けて引くモードです。
     */
    public boolean isSplitMode() {
        return selectedMode != RouletteMode.ALL;
    }

    public int getFullBlockCount() {
        return fullBlockCount;
    }

    public int getNonFullBlockCount() {
        return nonFullBlockCount;
    }

    /**
     * 指定モードの回数を1つ増やします（上限の次は0に戻ります）。
     */
    public void cycleCount(RouletteMode mode) {
        int current = getCount(mode);
        setCount(mode, current >= getMaxCount(mode) ? 0 : current + 1);
    }

    /**
     * 指定モードの回数を1つ減らします（0の次は最大回数に進みます）。
     */
    public void decreaseCount(RouletteMode mode) {
        int current = getCount(mode);
        setCount(mode, current <= 0 ? getMaxCount(mode) : current - 1);
    }

    /**
     * 指定モードで選べる最大回数を返します。
     */
    public int getMaxCount(RouletteMode mode) {
        return mode == RouletteMode.ALL ? MAX_COUNT_ALL : MAX_COUNT_PER_MODE;
    }

    private int getCount(RouletteMode mode) {
        return switch (mode) {
            case ALL -> selectedCount;
            case FULL_BLOCK -> fullBlockCount;
            case NON_FULL_BLOCK -> nonFullBlockCount;
        };
    }

    private void setCount(RouletteMode mode, int count) {
        switch (mode) {
            case ALL -> this.selectedCount = count;
            case FULL_BLOCK -> {
                this.fullBlockCount = count;
                // 合計が上限を超えたら、反対側の回数を自動で減らす
                this.nonFullBlockCount = Math.min(nonFullBlockCount, MAX_TOTAL_COUNT - count);
            }
            case NON_FULL_BLOCK -> {
                this.nonFullBlockCount = count;
                this.fullBlockCount = Math.min(fullBlockCount, MAX_TOTAL_COUNT - count);
            }
        }
    }

    /**
     * 実際に抽選する合計回数を返します。
     * 全建築用は選択した回数、分けて引くモードは2種類の回数の合計です。
     */
    public int getTotalCount() {
        return isSplitMode() ? fullBlockCount + nonFullBlockCount : selectedCount;
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

    public boolean hasSpecialAccess() {
        return hasSpecialAccess;
    }

    public void setSpecialAccess(boolean hasSpecialAccess) {
        this.hasSpecialAccess = hasSpecialAccess;
    }
}
