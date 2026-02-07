# OyasaiPets 冗長コード・不要ロジック調査レポート

**調査日時**: 2026-02-02
**調査対象**: `/Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/`

---

## 1. 調査サマリー

| カテゴリ | 問題数 | 深刻度 |
|----------|--------|--------|
| 重複コード（同一機能の複数実装） | 3件 | 🔴 高 |
| 冗長定義（同じデータの複数定義） | 2件 | 🟠 中 |
| 未使用の関数・変数 | 0件 | ✅ なし |
| 後方互換性のため残されたコード | 2件 | 🟢 許容 |

---

## 2. 重複コード（同一機能の複数実装）

### 2.1 🔴 `particleTypes` 定義の3重重複

**問題**: パーティクルタイプの定義が3ファイルで重複

| ファイル | 行数 |
|----------|------|
| `items/PetItemFactory.kt` | 23-35行 |
| `systems/ItemManagementSystem.kt` | 105-117行 |
| `services/PetInteractionService.kt` | 28-40行 |

**現在の状態**:
```kotlin
// 3ファイルで同一の定義が存在
private val particleTypes = listOf(
    0 to ("なし" to Material.BARRIER),
    1 to ("電気" to Material.LIGHTNING_ROD),
    2 to ("炎" to Material.BLAZE_POWDER),
    3 to ("青炎" to Material.SOUL_CAMPFIRE),
    4 to ("ハート" to Material.RED_DYE),
    5 to ("星" to Material.NETHER_STAR),
    6 to ("音符" to Material.NOTE_BLOCK),
    7 to ("雪" to Material.SNOWBALL),
    8 to ("桜" to Material.CHERRY_LEAVES),
    9 to ("エンド" to Material.ENDER_PEARL),
    10 to ("スライム" to Material.SLIME_BALL)
)
```

**推奨対応**:
- `PetItemFactory.particleTypes` を唯一の定義として使用（既に `val` で公開済み）
- 他2箇所は `PetItemFactory.particleTypes` を参照するよう変更

---

### 2.2 🔴 `isPetFood`, `isPetBrush`, `isPetTreat` 等の2重実装

**問題**: アイテム判定関数が `ItemManagementSystem` と `PetItemFactory` の両方に存在

| 関数名 | ItemManagementSystem | PetItemFactory |
|--------|---------------------|----------------|
| `isPetFood()` | 23-27行 | 55-59行 |
| `isPetBrush()` | 30-34行 | 78-82行 |
| `isPetTreat()` | 36-40行 | 101-105行 |
| `isPetHeal()` | 42-46行 | - |
| `createPetHealItem()` | 48-60行 | - |
| `createSkillUnlockItem()` | 64-79行 | 117-135行 |
| `getUnlockItemLevel()` | 81-91行 | 142-153行 |
| `createParticleUnlockItem()` | 119-134行 | 162-179行 |
| `isParticleUnlockItem()` | 136-141行 | 184-191行 |
| `getParticleUnlockId()` | 143-146行 | 198-202行 |

**現在の使用状況**:
- `BigWolf.kt` では `itemManagement` (ItemManagementSystem) を使用
- `GuiManager.kt` や他のサービスでは `PetItemFactory` を参照

**推奨対応**:
- **Option A**: `ItemManagementSystem` を削除し、`PetItemFactory` に一本化
- **Option B**: `ItemManagementSystem` を `PetItemFactory` のラッパーとして使用

---

### 2.3 🔴 `setupPetEntity` の2重実装

**問題**: ペットエンティティの初期設定が2ファイルに存在

| ファイル | 行数 | 行数 |
|----------|------|------|
| `systems/PetSpawnSystem.kt` | 101-145行 | 44行 |
| `services/PetStorageService.kt` | 375-428行 | 53行 |

**主な違い**:

| 機能 | PetSpawnSystem | PetStorageService |
|------|----------------|-------------------|
| 基本設定 | ✅ | ✅ |
| Rabbit HP増加 (3→20) | ❌ | ✅ |
| Chicken HP増加 (4→20) | ❌ | ✅ |
| Turtle 陸上速度設定 | ❌ | ✅ |

**現在の使用状況**:
- `BigWolf.kt` の `breedingSystem` は `storageService.setupPetEntity` を使用
- `petSpawnSystem.setupPetEntity` は新規召喚時に使用
- `PetReviveService` は `petSpawnSystem.setupPetEntity` を使用

**推奨対応**:
- `PetStorageService.setupPetEntity` を正規版として採用
- `PetSpawnSystem.setupPetEntity` は `PetStorageService.setupPetEntity` に委譲
- または共通の `PetEntityInitializer` ユーティリティを作成

---

## 3. 冗長定義（同じデータの複数定義）

### 3.1 🟠 `getPetFileName` の2重定義

**問題**: ファイル名生成ロジックが2箇所に存在

| ファイル | 行数 | 可視性 | 用途 |
|----------|------|--------|------|
| `PetDataManager.kt` | 193-196行 | private | 内部使用 |
| `services/PetStorageService.kt` | 366-370行 | public | TransferServiceから呼び出し |

**現在の状態**:
```kotlin
// 両者とも同じロジック
fun getPetFileName(petData: PetData): String {
    val number = petData.petNumber.toString().padStart(3, '0')
    val variant = petData.variant?.let { "_$it" } ?: ""
    return "${number}_${petData.type}${variant}.json"
}
```

**推奨対応**:
- `PetDataManager.getPetFileName` を `public` または `internal` に変更
- `PetStorageService.getPetFileName` を削除
- `TransferService` は `PetDataManager.getPetFileName` を使用

---

### 3.2 🟠 GUIタイトルの重複定義

**問題**: GUIタイトルが `GuiManager` と `BigWolf.kt` の両方で定義

| タイトル | GuiManager | BigWolf.kt |
|----------|------------|------------|
| ペットステータス | `petInfoTitle` (29行) | `guiTitle` (46行) |
| 購入確認 | `shopGuiTitle` (30行) | `shopGuiTitle` (47行) |
| メインメニュー | `mainMenuTitle` (31行) | `mainMenuTitle` (48行) |

**推奨対応**:
- `BigWolf.kt` の定義を削除
- `guiManager.petInfoTitle` 等を参照

---

## 4. 後方互換性のため残されたコード（許容）

### 4.1 🟢 `String.containsDefaultPetMarker()` と `startsWithDefaultPetName()`

**場所**: `PetExtensions.kt` (159-163行)

**目的**: 古いペットの検出（旧命名規則 `の大` や `'s Big` を含む）

**使用箇所**:
- `PetInteractionListener.kt` (61行)
- `PetInteractionService.kt` (178行)

**判断**: 後方互換性のため必要。削除は危険。

---

### 4.2 🟢 `SpawnUtils.findSafeGroundLocation`

**場所**: `PetExtensions.kt` (229-252行)

**コメント**: 「旧式の安全な地上スポーン位置を検索（後方互換性のため残す）」

**使用箇所**:
- `services/PetReviveService.kt` (69行)
- `systems/ShopSystem.kt` (35行)
- `systems/BreedingSystem.kt` (197行)

**判断**: 一部機能で使用中。`findSafeSpawnLocation` への移行を検討。

---

## 5. 推奨アクションプラン

### 優先度: 高 🔴

| # | タスク | 削減行数 | 影響ファイル |
|---|--------|----------|--------------|
| 1 | ItemManagementSystem削除・PetItemFactory統合 | -148行 | BigWolf.kt, OpCommands.kt |
| 2 | setupPetEntity統合 | -44行 | PetSpawnSystem.kt |
| 3 | particleTypes一本化 | -26行 | PetInteractionService.kt, ItemManagementSystem.kt |

### 優先度: 中 🟠

| # | タスク | 削減行数 | 影響ファイル |
|---|--------|----------|--------------|
| 4 | getPetFileName統合 | -5行 | PetStorageService.kt, TransferService.kt |
| 5 | GUIタイトル整理 | -3行 | BigWolf.kt |

### 優先度: 低（保留推奨）🟢

| # | タスク | 備考 |
|---|--------|------|
| 6 | 古いペット検出ロジック | 当面維持 |
| 7 | findSafeGroundLocation | 使用箇所を確認後、移行を検討 |

---

## 6. 想定削減効果

| 項目 | 削減行数 |
|------|----------|
| ItemManagementSystem 統合 | -148行 |
| setupPetEntity 統合 | -44行 |
| particleTypes 統合 | -26行 |
| getPetFileName 統合 | -5行 |
| GUIタイトル整理 | -3行 |
| **合計** | **約 -226行** |

**統合後の推定総行数**: 7,798 - 226 = **7,572行**

---

## 7. 注意事項

1. **バックアップファイル** (`/backup/`) には古いコードが多数残存しているが、本レポートは `src/main/kotlin/` 配下のみを対象としている

2. **統合作業時の注意**:
   - 各変更後にビルドテストを実施すること
   - `nix develop` → `gradle build` で確認

3. **機能テスト推奨項目**:
   - ペット購入フロー
   - ペット収納・復元
   - 交配
   - スキルアンロック
   - パーティクル変更
