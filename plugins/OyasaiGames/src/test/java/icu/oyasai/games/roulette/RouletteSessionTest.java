package icu.oyasai.games.roulette;

import icu.oyasai.games.roulette.model.RouletteMode;
import icu.oyasai.games.roulette.model.RouletteSession;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

public class RouletteSessionTest {

    private RouletteSession session;

    @BeforeEach
    public void setup() {
        session = new RouletteSession(UUID.randomUUID());
    }

    @Test
    @DisplayName("初期状態は全建築用アイテム1回で、分けて引くモードではない")
    public void defaultIsAllMode() {
        assertFalse(session.isSplitMode());
        assertEquals(1, session.getTotalCount());
    }

    @Test
    @DisplayName("全建築用は選択した回数がそのまま合計になる")
    public void allModeTotalIsSelectedCount() {
        session.setSelectedCount(5);
        assertEquals(5, session.getTotalCount());
    }

    @Test
    @DisplayName("分けて引くモードの合計はフルブロックとそれ以外の和になる")
    public void splitModeTotalIsSum() {
        session.setSelectedMode(RouletteMode.FULL_BLOCK);
        session.cycleCount(RouletteMode.FULL_BLOCK);
        session.cycleCount(RouletteMode.FULL_BLOCK);
        for (int i = 0; i < 3; i++) {
            session.cycleCount(RouletteMode.NON_FULL_BLOCK);
        }

        assertTrue(session.isSplitMode());
        assertEquals(2, session.getFullBlockCount());
        assertEquals(3, session.getNonFullBlockCount());
        assertEquals(5, session.getTotalCount());
    }

    @Test
    @DisplayName("上限の次のクリックで0回に戻る")
    public void cycleWrapsToZeroAfterMax() {
        for (int i = 0; i < RouletteSession.MAX_COUNT_PER_MODE; i++) {
            session.cycleCount(RouletteMode.FULL_BLOCK);
        }
        assertEquals(RouletteSession.MAX_COUNT_PER_MODE, session.getFullBlockCount());

        session.cycleCount(RouletteMode.FULL_BLOCK);
        assertEquals(0, session.getFullBlockCount());
    }

    @Test
    @DisplayName("0回から減らすと最大回数に進む")
    public void decreaseWrapsToMaxFromZero() {
        session.decreaseCount(RouletteMode.NON_FULL_BLOCK);
        assertEquals(RouletteSession.MAX_COUNT_PER_MODE, session.getNonFullBlockCount());

        session.decreaseCount(RouletteMode.NON_FULL_BLOCK);
        assertEquals(RouletteSession.MAX_COUNT_PER_MODE - 1, session.getNonFullBlockCount());

        session.decreaseCount(RouletteMode.ALL);
        session.decreaseCount(RouletteMode.ALL);
        assertEquals(RouletteSession.MAX_COUNT_ALL, session.getTotalCount());
    }

    @Test
    @DisplayName("全建築用は単独で10回まで選べ、その次は0回に戻る")
    public void allModeReachesTwentyThenWraps() {
        // 初期値は1回なので、あと9回クリックすると10回になる
        for (int i = 0; i < RouletteSession.MAX_COUNT_ALL - 1; i++) {
            session.cycleCount(RouletteMode.ALL);
        }
        assertEquals(RouletteSession.MAX_COUNT_ALL, session.getTotalCount());

        session.cycleCount(RouletteMode.ALL);
        assertEquals(0, session.getTotalCount());
    }

    @Test
    @DisplayName("フルブロックと装飾は単独なら10回まで選べる")
    public void splitModeAloneReachesTen() {
        session.setSelectedMode(RouletteMode.FULL_BLOCK);
        for (int i = 0; i < 10; i++) {
            session.cycleCount(RouletteMode.NON_FULL_BLOCK);
        }
        assertEquals(10, session.getNonFullBlockCount());
        assertEquals(10, session.getTotalCount());

        session.cycleCount(RouletteMode.NON_FULL_BLOCK);
        assertEquals(0, session.getNonFullBlockCount());
    }

    @Test
    @DisplayName("2種類の合計が上限を超えたら反対側の回数が自動で減る")
    public void oppositeCountShrinksWhenTotalExceedsLimit() {
        session.setSelectedMode(RouletteMode.FULL_BLOCK);
        for (int i = 0; i < 4; i++) {
            session.cycleCount(RouletteMode.FULL_BLOCK);
        }

        // 装飾を6回まではそのまま増える
        for (int i = 0; i < 6; i++) {
            session.cycleCount(RouletteMode.NON_FULL_BLOCK);
        }
        assertEquals(4, session.getFullBlockCount());
        assertEquals(6, session.getNonFullBlockCount());

        // 7回にすると合計が11回になるので、フルブロックが3回に減る
        session.cycleCount(RouletteMode.NON_FULL_BLOCK);
        assertEquals(3, session.getFullBlockCount());
        assertEquals(7, session.getNonFullBlockCount());

        // 10回にするとフルブロックは0回になる
        for (int i = 0; i < 3; i++) {
            session.cycleCount(RouletteMode.NON_FULL_BLOCK);
        }
        assertEquals(0, session.getFullBlockCount());
        assertEquals(10, session.getNonFullBlockCount());
    }

    @Test
    @DisplayName("0回から減らして最大回数にしたときも反対側が自動で減る")
    public void decreaseFromZeroAlsoShrinksOpposite() {
        session.setSelectedMode(RouletteMode.FULL_BLOCK);
        for (int i = 0; i < 4; i++) {
            session.cycleCount(RouletteMode.FULL_BLOCK);
        }

        session.decreaseCount(RouletteMode.NON_FULL_BLOCK);
        assertEquals(10, session.getNonFullBlockCount());
        assertEquals(0, session.getFullBlockCount());
        assertEquals(RouletteSession.MAX_TOTAL_COUNT, session.getTotalCount());
    }
}