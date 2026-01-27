# BigWolf.kt コード削除計画書

**作成日**: 2026年1月25日
**目的**: BigWolf.ktから重複コード・移行済みコードを削除し、行数を大幅に削減する

---

## 📊 現状分析

### ファイル行数
- **元のBigWolf.kt.bak**: 4,280行
- **現在のBigWolf.kt**: 3,381行
- **削減済み**: 899行（21.0%）
- **目標削減**: さらに1,000-1,500行（合計50%削減を目指す）

### 関数数
- **元の関数数**: 129個
- **現在の関数数**: 95個
- **削除済み**: 34個（26.4%のみ）
- **目標**: さらに30-40個削除

### 分離済みファイル
- **domain/** (6ファイル): 約500行
- **items/** (2ファイル): 約515行
- **systems/** (7ファイル): 約1,240行
- **gui/** (1ファイル): 約392行
- **commands/** (4ファイル): 約512行
- **listeners/** (2ファイル): 約182行
- **合計**: 22ファイル、約3,341行

---

## 🎯 削除対象コードの分類

### カテゴリA: システムに完全移行済みの関数【最優先】

これらの関数は既にSystemsファイルに実装されており、BigWolf.kt内では不要。

#### A1. PetSpawnSystem関連（行番号: 2385-2491）
- ✅ **移行先**: `PetSpawnSystem.kt`
- **削除対象**:
  - `setupPetEntity()` (2385行) - 約38行
  - `countActivePets()` (2423行) - 約13行
  - `spawnAndMountEntity()` (2436行) - 約56行
- **削減見込み**: 約107行

#### A2. FetchSystem関連（行番号: 1704-2598）
- ✅ **移行先**: `FetchSystem.kt`
- **削除対象**:
  - `handleThrowToy()` (1704行) - 約34行
  - `handleFishingToy()` (1750行) - 約28行
  - `startFetchTask()` (2492行) - 約94行
  - `stopFetchTask()` (2586行) - 約13行
- **削減見込み**: 約169行

#### A3. BreedingSystem関連（行番号: 1013-1086, 2166-2375）
- ✅ **移行先**: `BreedingSystem.kt`
- **削除対象**:
  - `handleBreedCommand()` (1013行) - 約35行
  - `openBreedGui()` (1048行) - 約39行
  - `executeBreeding()` (2166行) - 約210行
- **削減見込み**: 約284行

#### A4. PetControlSystem関連（行番号: 2835-3056）
- ✅ **移行先**: `PetControlSystem.kt`
- **削除対象**:
  - `startControlTask()` (2835行) - 約222行
- **削減見込み**: 約222行

#### A5. TransferSystem関連（行番号: 1158-1347）
- ✅ **移行先**: `TransferSystem.kt`
- **削除対象**:
  - `handleTransferCommand()` (1158行) - 約88行
  - `executePetTransfer()` (1246行) - 約102行
- **削減見込み**: 約190行

#### A6. ShopSystem関連（行番号: 3288-3328）
- ✅ **移行先**: `ShopSystem.kt`
- **削除対象**:
  - `spawnShopMob()` (3288行) - 約41行
- **削減見込み**: 約41行

**カテゴリA合計削減見込み**: **約1,013行**

---

### カテゴリB: Commands層に移行可能な関数【高優先度】

これらの関数はコマンド処理ロジックで、PlayerCommands/OpCommandsに移行可能。

#### B1. OP専用コマンド処理（行番号: 188-383）
- ✅ **移行先**: `OpCommands.kt`
- **削除対象**:
  - `handleOpCommand()` (188行) - 約49行
  - `handleOpItemCommand()` (237行) - 約73行
  - `handleOpShopCommand()` (310行) - 約27行
  - `handleOpShopRemove()` (337行) - 約18行
  - `handleOpShopRemoveAll()` (355行) - 約29行
- **削減見込み**: 約196行

#### B2. プレイヤーコマンド処理（行番号: 384-426, 531-574）
- ✅ **移行先**: `PlayerCommands.kt`
- **削除対象**:
  - `handlePlayerCommand()` (384行) - 約43行
  - `handleExperimentalSummon()` (531行) - 約18行
  - `handleNormalSummon()` (549行) - 約26行
- **削減見込み**: 約87行

#### B3. その他コマンド処理（行番号: 575-1157）
- **削除対象**:
  - `handleRevivePet()` (575行) - 約162行（復活システム）
  - `handleDeadPetsList()` (737行) - 約23行
  - `handlePetHistory()` (760行) - 約121行
  - `handleLocatePet()` (881行) - 約37行
  - `handleRecoverEgg()` (918行) - 約41行
  - `handleRenameCommand()` (1087行) - 約71行
- **削減見込み**: 約455行

**カテゴリB合計削減見込み**: **約738行**

---

### カテゴリC: Listeners層に移行可能なイベントハンドラー【中優先度】

#### C1. ペットインタラクション関連
- ✅ **移行先**: `PetInteractionListener.kt`（新規作成必要）
- **削除対象**:
  - `onEntityInteract()` (1550行) - 約68行
  - `onPlayerInteract()` (1680行) - 約24行
  - `onPlayerFish()` (1738行) - 約12行
- **削減見込み**: 約104行

#### C2. GUI/インベントリ関連
- ✅ **移行先**: `InventoryListener.kt`（新規作成必要）
- **削除対象**:
  - `onInventoryClick()` (1796行) - 約314行
  - `onBreedGuiClick()` (2110行) - 約56行
  - `onInventoryClose()` (2376行) - 約9行
- **削減見込み**: 約379行

#### C3. その他イベント
- **削除対象**:
  - `onPlayerDropItem()` (1512行) - 約5行
  - `onEntityTeleport()` (1517行) - 約7行
  - `onEntityDismount()` (1524行) - 約26行
  - `onPlayerSkillTrigger()` (1778行) - 約18行
  - `onVoucherUse()` (3353行) - 約28行
- **削減見込み**: 約84行

**カテゴリC合計削減見込み**: **約567行**

---

### カテゴリD: GUI層に移行可能な関数【低優先度】

#### D1. GUI関連
- ✅ **移行先**: `GuiManager.kt`（一部既に実装済み）
- **削除対象**:
  - `openMainMenu()` (1357行) - 約72行（既にGuiManagerに実装済み）
- **削減見込み**: 約72行

---

### カテゴリE: ヘルパー関数・ユーティリティ【保留】

以下の関数は複数箇所から呼ばれているため、慎重に判断が必要：

- `getPlayerTokens()` (124行) - TokenManager連携
- `consumeTokens()` (139行) - ポイント消費
- `isOwner()` (3116行) - 所有権チェック
- `checkAndMigrateOwner()` (3108行) - 所有権移行
- `updateStats()` (3101行) - ステータス更新
- `spawnParticles()` (3057行) - パーティクル表示
- `giveFood()` (3078行) - フード付与
- `useBrush()` (3142行) - ブラシ使用
- `giveTreat()` (3166行) - おやつ付与

これらは共通ユーティリティとして別ファイル（`PetUtilities.kt`など）に移行を検討。

---

## ⚠️ 重要な前提条件

### 削除可能性の検証結果

以下の確認により、**BigWolf.kt内にまだ直接呼び出しが残っている**ことが判明：

#### 検証結果
- `setupPetEntity()`: BigWolf.kt内で4箇所が直接呼び出し中
- `spawnAndMountEntity()`: BigWolf.kt内で1箇所が直接呼び出し中（1936行）
- `executeBreeding()`: BigWolf.kt内で呼び出し中
- その他多数の関数も同様

### ❗ 結論
**計画の実行前に、必ずPhase 0（呼び出し箇所の置き換え）を完了させる必要がある**

---

## 📋 削除実行計画（フェーズ別）

### Phase 0: 呼び出し箇所の置き換え【必須・最優先】
**目的**: BigWolf.kt内の直接呼び出しを全てSystem経由に置き換える
**削減見込み**: 0行（準備フェーズ）

**実行内容**:
1. `setupPetEntity()` の4箇所を `petSpawnSystem.setupPetEntity()` に置き換え
   - 635行（復活処理）
   - 2242行（executeBreeding内）
   - 2450行（spawnAndMountEntity内）
   - 2772行（restorePetFromItem内）

2. `spawnAndMountEntity()` の1936行を `petSpawnSystem.spawnAndMountEntity()` に置き換え

3. その他の関数も同様に全置き換え

4. `nix develop -c gradle :plugins:OyasaiPets:compileKotlin` でビルド確認

**Phase 0完了チェックリスト**:
- [ ] 全ての直接呼び出しがSystem経由に置き換えられた
- [ ] ビルドが成功する
- [ ] バックアップが作成されている

---

### Phase 1: システム関連の削除【Phase 0完了後のみ】
**対象**: カテゴリA（A1-A6）
**削減見込み**: 約1,013行
**実行順序**:
1. PetSpawnSystem関連（107行）
2. FetchSystem関連（169行）
3. PetControlSystem関連（222行）
4. BreedingSystem関連（284行）
5. TransferSystem関連（190行）
6. ShopSystem関連（41行）

**実行前確認事項**:
- [ ] 各System内に対応する関数が実装されているか確認
- [ ] BigWolf.kt内の呼び出しが全てSystem経由になっているか確認
- [ ] ビルドが通るか確認

### Phase 2: コマンド処理の削除【高優先度】
**対象**: カテゴリB（B1-B3）
**削減見込み**: 約738行
**実行順序**:
1. OP専用コマンド処理（196行）
2. プレイヤーコマンド処理（87行）
3. その他コマンド処理（455行）

**実行前確認事項**:
- [ ] CommandManagerが正しく機能しているか確認
- [ ] PlayerCommands/OpCommandsに対応機能があるか確認

### Phase 3: イベントハンドラーの削除【中優先度】
**対象**: カテゴリC（C1-C3）
**削減見込み**: 約567行
**実行順序**:
1. 新規Listener作成（PetInteractionListener.kt、InventoryListener.kt）
2. イベントハンドラー移行
3. BigWolf.ktから削除

### Phase 4: GUI・その他の削除【低優先度】
**対象**: カテゴリD
**削減見込み**: 約72行

---

## 🎯 最終目標

### 削減目標
| Phase | 削減見込み |
|-------|----------|
| Phase 1 | 1,013行 |
| Phase 2 | 738行 |
| Phase 3 | 567行 |
| Phase 4 | 72行 |
| **合計** | **2,390行** |

### 最終予想
- **現在**: 3,381行
- **Phase 1-4完了後**: 約991行（**71%削減**）
- **元から**: 4,280行 → 991行（**77%削減**）

---

## ⚠️ 注意事項

### 削除前の必須チェックリスト
1. [ ] 対応するSystemファイルに実装が存在する
2. [ ] BigWolf.kt内の呼び出しが全て置き換えられている
3. [ ] バックアップが作成されている
4. [ ] `nix develop -c gradle :plugins:OyasaiPets:compileKotlin`が成功する
5. [ ] 各Phaseごとにバックアップを作成する

### リスク管理
- **高リスク**: Phase 1（システム関連） - 依存関係が複雑
- **中リスク**: Phase 2（コマンド処理） - 多数のコマンドが影響
- **低リスク**: Phase 3-4 - 独立性が高い

### ロールバック手順
問題が発生した場合:
```bash
cp /Users/aa/platform/plugins/OyasaiPets/backup/_backup/phase{X}_start_BigWolf.kt \
   /Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/BigWolf.kt
```

---

## 📝 削除実行ログ

### Phase 1 実行記録
- [ ] A1: PetSpawnSystem関連削除
- [ ] A2: FetchSystem関連削除
- [ ] A3: BreedingSystem関連削除
- [ ] A4: PetControlSystem関連削除
- [ ] A5: TransferSystem関連削除
- [ ] A6: ShopSystem関連削除

### Phase 2 実行記録
- [ ] B1: OP専用コマンド削除
- [ ] B2: プレイヤーコマンド削除
- [ ] B3: その他コマンド削除

### Phase 3 実行記録
- [ ] C1: PetInteractionListener作成・移行
- [ ] C2: InventoryListener作成・移行
- [ ] C3: その他イベント移行

### Phase 4 実行記録
- [ ] D1: GUI関連削除

---

**承認待ち**: この計画書の内容を確認し、実行を承認してください。

