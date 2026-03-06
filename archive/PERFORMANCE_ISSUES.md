# OyasaiPets パフォーマンス問題レポート

> **作成経緯**: 本番サーバー（Paper 1.21.8）で「1秒ごとにプチフリーズ」が報告されたため、 Spark
> プロファイラ（フリーズ時・正常時の2本）を解析した結果をまとめたもの。 Step 7〜9 のリファクタリング時に以下の問題を修正すること。

---

## 問題の優先度マップ

| 優先度 | 問題 | 場所 | 影響 | |--------|------|------|------| | 🔴 高 | PDC をホットパスで毎 tick
読む | `startControlTask` | 乗車プレイヤー × 5〜6 PDC reads/tick | | 🔴 高 | `isSilent`
を値変化なく毎 tick 書き込む | `startControlTask` L7738 | 不要なエンティティ更新パケット | | 🟡 中 |
`isAtypical()` が全ペットに PDC read を毎秒発行 | `startGlobalAITask` L6983 | 全ペット数 × 1 PDC
read/秒 | | 🟡 中 | `ownerId` を PDC から毎秒読む | `startGlobalAITask` L6989 | 上に同じ | | 🟢
低 | `statJumps` PDC write がジャンプのたびに entity を dirty にする | `startControlTask`
L7807,7823,7845 | chunk save 圧力 |

---

## 問題1 🔴: PDC をホットパスで毎 tick 読む

### 現状コード（`startControlTask` 内、毎 tick 実行）

```kotlin
val level = entity.foodLevel          // PDC read: FOOD
speed *= entity.speedMultiplier       // PDC read: SPEED_MULTIPLIER
entity.isSilent = entity.isSilentMode // PDC read: SILENT
entity.skillType                      // PDC read: SKILL_TYPE
entity.isHovering                     // PDC read: HOVER_STATE
entity.jumpMultiplier                 // PDC read: JUMP_MULTIPLIER
```

`foodLevel`、`speedMultiplier`、`isSilentMode`、`skillType`、`isHovering`、`jumpMultiplier`
は すべて `PetExtensions.kt` の PDC 拡張プロパティ（`persistentDataContainer.get(...)` 直呼び）。
PDC は HashMap より重い NBT アクセスを伴うため、毎 tick に 5〜6 回 PDC 読みを繰り返すのは非効率。

### 修正方針

**タスク開始時に値を読んでローカル変数にキャッシュし、変更イベント時のみ更新する。**

```kotlin
// startControlTask の冒頭でキャッシュ
var cachedFood        = entity.foodLevel
var cachedSpeed       = entity.speedMultiplier
var cachedSilent      = entity.isSilentMode
var cachedSkillType   = entity.skillType
var cachedIsHovering  = entity.isHovering
var cachedJumpMul     = entity.jumpMultiplier

// ループ内は PDC ではなくキャッシュ変数を参照
// 値が変わりうるのは foodLevel（エサをあげたとき）のみなので、
// 20 tick ごとに再読み込みするか、食事イベントでキャッシュを更新する
```

---

## 問題2 🔴: `isSilent` を値変化なく毎 tick 書き込む

### 現状コード（L7738）

```kotlin
// 乗車中、毎 tick 無条件に実行される
entity.isSilent = entity.isSilentMode
```

Bukkit の `entity.isSilent =` はエンティティの NMS フィールドに書き込む。 値が変わっていなくても毎 tick
書くと、Paper の dirty フラグが立ち続ける可能性がある。

### 修正方針

```kotlin
// 変化があるときだけ書き込む
val shouldBeSilent = cachedSilent  // キャッシュ変数を使用
if (entity.isSilent != shouldBeSilent) {
    entity.isSilent = shouldBeSilent
}
```

---

## 問題3 🟡: `startGlobalAITask` が全ペットに PDC read を毎秒発行

### 現状コード（`ChildAISystem.kt`、毎 20 tick = 1 秒）

```kotlin
// L6982〜6989
for (entity in activePets) {
    if (!entity.isAtypical()) continue   // ← PDC read: TEMPERAMENT（全ペットに毎秒）
    val ownerId = entity.ownerId ?: continue  // ← PDC read: OWNER
    val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: continue
    ...
}
```

**タイミングの一致**: このタスクは毎 20 tick（＝毎 1 秒）実行。 ユーザーが報告した「1 秒ごとのプチフリーズ」の周期と完全に一致する。
Spark の 4ms サンプラーには映らない軽微な処理でも、毎秒の規則的な実行であれば プレイヤーに体感できるスタッターとして現れる。

### 修正方針

`ActivePetRegistry` に `temperament` と `ownerId` をインメモリキャッシュとして持たせる。

```kotlin
object ActivePetRegistry {
    private val byEntityId = ConcurrentHashMap<UUID, LivingEntity>()
    private val byPetId    = ConcurrentHashMap<String, UUID>()

    // ★ 追加: PDC を毎秒読まないためのインメモリキャッシュ
    private val cachedIsAtypical = ConcurrentHashMap<UUID, Boolean>()
    private val cachedOwnerId    = ConcurrentHashMap<UUID, String>()

    fun register(entity: LivingEntity) {
        val petId = entity.petId ?: return
        byEntityId[entity.uniqueId] = entity
        byPetId[petId] = entity.uniqueId
        // 登録時に一度だけ PDC を読んでキャッシュ
        cachedIsAtypical[entity.uniqueId] = entity.isAtypical()
        cachedOwnerId[entity.uniqueId]    = entity.ownerId ?: ""
    }

    fun unregister(entityUuid: UUID) {
        val entity = byEntityId.remove(entityUuid) ?: return
        entity.petId?.let { byPetId.remove(it) }
        cachedIsAtypical.remove(entityUuid)  // ★
        cachedOwnerId.remove(entityUuid)     // ★
    }

    // ★ キャッシュから取得（PDC 不要）
    fun isAtypical(entityUuid: UUID): Boolean = cachedIsAtypical[entityUuid] ?: false
    fun getOwnerId(entityUuid: UUID): String? = cachedOwnerId[entityUuid]?.ifBlank { null }

    // ★ temperament が変わったとき（将来の機能拡張）にキャッシュを更新する
    fun updateTemperament(entityUuid: UUID, isAtypical: Boolean) {
        cachedIsAtypical[entityUuid] = isAtypical
    }
}
```

`ChildAISystem` 側の変更：

```kotlin
for (entity in activePets) {
    // PDC read なし
    if (!ActivePetRegistry.isAtypical(entity.uniqueId)) continue
    val ownerId = ActivePetRegistry.getOwnerId(entity.uniqueId) ?: continue
    ...
}
```

---

## 問題4 🟢: `statJumps` PDC write が entity を dirty にする

### 現状コード

```kotlin
// L7807, L7823, L7845 — ジャンプのたびに PDC read + write
entity.statJumps = entity.statJumps + 1
```

PDC への書き込みはエンティティが属するチャンクを dirty（保存待ち）にする。 多人数が同時に乗車・ジャンプすると dirty チャンクが積み重なり、
autosave（6000 tick ごと）で I/O バーストが発生する。

### 修正方針

`startControlTask` 内のインメモリカウンタを使い、定期的にまとめて PDC に書き込む。

```kotlin
// タスクローカル変数
var localJumps = 0  // インメモリカウンタ

// ジャンプ検出時
if (!lastJumpPressed) {
    localJumps++  // PDC write なし
}

// 200 tick ごとにまとめて書き込む（statDistance の書き込みと同じタイミング）
if (ticks % 200 == 0) {
    if (localJumps > 0) {
        entity.statJumps = entity.statJumps + localJumps  // 200 tick に 1 回だけ write
        localJumps = 0
    }
    if (rideDistance > 0.0) {
        entity.statDistance = entity.statDistance + rideDistance
        rideDistance = 0.0
    }
}
```

---

## 補足: なぜ Spark プロファイラに映らなかったか

Spark のサンプリング間隔は 4ms。OyasaiPets のタスクが 1〜2ms で完了する場合、 プロファイラへの出現確率は 2〜4%
程度となり、ノイズに埋もれて見えなくなる。

しかし `startGlobalAITask` は**毎 1 秒という規則正しい周期**で実行されるため、
各実行が短時間でも、プレイヤーはリズミカルなスタッターとして体感できる。

---

## 参考: Spark で確認されたサーバー全体の課題（OyasaiPets 外）

OyasaiPets 以外にも、サーバー全体として以下の問題が Spark 解析で確認された。
リファクタリングの前後でパフォーマンステストを行う際の参考にすること。

### G1 GC の設定ミス（最大の原因、JVM レベルの問題）

- `-Xmx28G` に対して `G1NewSizePercent=28` → Young Gen 最小 **7.8GB**（推奨の約3倍）
- G1 Young GC 平均停止時間: **191ms**（目標 200ms に肉薄）
- MSPT last5m 最大値: **1097ms**（ほぼ GC 停止と一致）
- **対応**: `-XX:G1NewSizePercent=6 -XX:G1MaxNewSizePercent=20` に変更（サーバー管理者向け）

### MyPet / BKCommonLib によるスポーンイベント割り込み

- `com.bergerkiller.bukkit.common.internal.logic.CreaturePreSpawnHandler_Paper`
  が 全モブスポーン判定にフック → フリーズ時のプロファイルで 0.87% を占有
- OyasaiPets とは無関係だが、スポーン関連のイベント追加時は注意

---

## チェックリスト（リファクタリング時）

- [x] `startControlTask`: `foodLevel` / `speedMultiplier` / `isSilentMode` /
      `skillType` / `isHovering` / `jumpMultiplier` をキャッシュ変数に移行
- [x] `startControlTask`: `entity.isSilent =` を差分書き込みに変更
- [x] `ActivePetRegistry`: `isAtypical` / `ownerId` のインメモリキャッシュ追加
- [x] `ChildAISystem.startGlobalAITask`: PDC 読み取りをキャッシュ参照に置き換え
- [x] `startControlTask`: `statJumps` をローカルカウンタに変更し 200 tick ごとにまとめて PDC write
- [ ] 修正後、本番サーバーで Spark プロファイルを再取得して `startGlobalAITask` の消費時間を確認
