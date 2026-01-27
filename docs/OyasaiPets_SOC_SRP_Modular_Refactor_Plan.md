# OyasaiPets SOC/SRP準拠 完全モジュール化リファクタリングプラン

## 目的
- `BigWolf.kt` (2,967行) を約800-1,000行に削減し、プラグインのエントリーポイントに特化
- SOC/SRP/DIP に基づいた8層クリーンアーキテクチャへ整理
- 既存機能の挙動維持と段階的ビルド確認

## 現状
- 既存モジュール: 22ファイル / 3,317行
- `BigWolf.kt`: 2,967行
- `BigWolf.kt` が `Listener` / `CommandExecutor` / `TabCompleter` を実装

## 新アーキテクチャ（8層クリーンアーキテクチャ）
```
Layer 1: Plugin Entry Point (BigWolf.kt - 800行目標)
  - プラグインライフサイクル管理のみ
  - onEnable/onDisable/依存性注入

Layer 2: Core Infrastructure (既存)
  - BigWolfKeys, BigWolfConfig, PetDataManager

Layer 3: Domain Layer (既存 - 6ファイル)
  - PetSpec, PetRegistry, PetCategory
  - VariantHandler, ShopContext, ToyType

Layer 4: Business Logic - Systems (既存 + 新規)
  [既存] SkillSystem, PetSpawnSystem, FetchSystem...
  [新規] ItemManagementSystem, EconomySystem

Layer 5: Service Layer (新規 - 3ファイル)
  - PetInteractionService (10関数を統合)
  - PetStorageService (8関数を統合)
  - BreedingService (executeBreeding等)

Layer 6: Presentation - Listeners (既存 + 新規4ファイル)
  [既存] PetLifecycleListener, ShopListener
  [新規] PetInteractionListener (onEntityInteract等)
  [新規] PetInventoryListener (onInventoryClick等)
  [新規] PetEventListener (onDropItem等)
  [新規] PlayerActionListener (onPlayerInteract等)

Layer 7: Presentation - Commands (部分的に既存)
  [改善] CommandManager, PlayerCommands, OpCommands
  [新規] TabCompleterRegistry

Layer 8: Presentation - GUI (既存)
  - GuiManager
```

## 新規作成モジュール（10ファイル）

### Service層（約600行削減）
1. `services/PetInteractionService.kt`
   - ペットとの直接インタラクション処理
   - 移行対象: 10関数
     - handleSkillUnlock
     - handleParticleUnlock
     - spawnParticles
     - giveFood
     - updateStats
     - checkAndMigrateOwner
     - isOwner
     - useBrush
     - giveTreat
     - tryPlayLevelUp

2. `services/PetStorageService.kt`
   - ペットのストレージ（アイテム化）管理
   - 移行対象: 8関数 + 重複統合
     - createStoredPetItem
     - storePetToItem
     - storeAllPets
     - restorePetFromItem
     - createRecoveredStoredPetItem
     - getPetFileName
     - setupPetEntity
     - spawnAndMountEntity

3. `services/BreedingService.kt`
   - 繁殖システムの高レベル制御
   - 移行対象:
     - executeBreeding
     - openBreedGui

### Listener層（約800行削減）
4. `listeners/PetInteractionListener.kt`
   - ペットとのエンティティインタラクション
   - 移行対象: onEntityInteract

5. `listeners/PetInventoryListener.kt`
   - GUI/インベントリイベント
   - 移行対象:
     - onInventoryClick（メイン/パーティクル/ステータス/ショップ）
     - onBreedGuiClick
     - onInventoryClose

6. `listeners/PetEventListener.kt`
   - ペット関連の基本イベント
   - 移行対象:
     - onPlayerDropItem
     - onEntityTeleport
     - onEntityDismount

7. `listeners/PlayerActionListener.kt`
   - プレイヤーアクション（右クリック等）
   - 移行対象:
     - onPlayerInteract（復元/おもちゃ投げ）
     - onPlayerFish
     - onPlayerSkillTrigger
     - onVoucherUse

### Systems層（約150行削減）
8. `systems/ItemManagementSystem.kt`
   - アイテム生成・検証の統合管理
   - 移行対象: 8関数
     - createSkillUnlockItem
     - getUnlockItemLevel
     - createParticleUnlockItem
     - isParticleUnlockItem
     - getParticleUnlockId
     - isPetFood
     - isPetBrush
     - isPetTreat

9. `systems/EconomySystem.kt`
   - 経済システムとの連携
   - 移行対象:
     - getPlayerTokens
     - consumeTokens
     - addTokens

### Commands層（約100行削減）
10. `commands/TabCompleterRegistry.kt`
    - タブ補完の統合管理
    - 移行対象:
      - onTabCompleteOp
      - onTabCompletePlayer

## 削減見込み
| カテゴリ | 移行先 | 削減行数 |
| --- | --- | --- |
| Service層関数 | 3ファイル | ~600行 |
| イベントハンドラー | 4ファイル | ~800行 |
| アイテム管理 | ItemManagementSystem | ~100行 |
| 経済システム | EconomySystem | ~50行 |
| タブ補完 | TabCompleterRegistry | ~100行 |
| コマンド処理改善 | Commands層強化 | ~300行 |
| コメント・空行削除 | - | ~100行 |
| 合計 | - | ~2,050行 |

### 削減後の予測
- 現在: 2,967行
- 削減後: 約900-950行（68%削減）
- 元から: 4,280行 → 950行（78%削減）

## 実行フェーズ

### Phase 1: Service層の構築（優先度: 最高）
- `PetInteractionService` 作成 → 10関数移行
- `PetStorageService` 作成 → 8関数移行
- `BreedingService` 作成 → executeBreeding等移行
- ビルド確認

### Phase 2: Systems層の拡張（優先度: 高）
- `ItemManagementSystem` 作成 → アイテム関数8個移行
- `EconomySystem` 作成 → 経済関数移行
- ビルド確認

### Phase 3: Listener層の完全分離（優先度: 最高）
- `PetInteractionListener` 作成 → onEntityInteract移行
- `PetInventoryListener` 作成 → onInventoryClick等3個移行
- `PetEventListener` 作成 → 基本イベント3個移行
- `PlayerActionListener` 作成 → onPlayerInteract等4個移行
- `BigWolf.kt` から Listener 実装を削除
- ビルド確認

### Phase 4: Commands層の改善（優先度: 中）
- `TabCompleterRegistry` 作成
- コマンド処理を Commands に完全移譲
- `BigWolf.kt` から `CommandExecutor` / `TabCompleter` 実装を削除
- ビルド確認

### Phase 5: BigWolf.kt の最終整理（優先度: 中）
- 残存する状態変数を Service に移動
- 初期化処理の最適化
- コメント・空行整理
- 最終ビルド確認

## 理想形の BigWolf.kt（概略）
```kotlin
class BigWolfPlugin : JavaPlugin() {
    // === Infrastructure ===
    private lateinit var economySystem: EconomySystem
    private lateinit var itemManagement: ItemManagementSystem

    // === Services ===
    private lateinit var interactionService: PetInteractionService
    private lateinit var storageService: PetStorageService
    private lateinit var breedingService: BreedingService

    // === Systems ===
    private lateinit var skillSystem: SkillSystem
    private lateinit var petSpawnSystem: PetSpawnSystem
    private lateinit var fetchSystem: FetchSystem
    private lateinit var breedingSystem: BreedingSystem
    private lateinit var transferSystem: TransferSystem
    private lateinit var shopSystem: ShopSystem
    private lateinit var petControlSystem: PetControlSystem

    // === Presentation ===
    private lateinit var guiManager: GuiManager
    private lateinit var commandManager: CommandManager

    override fun onEnable() {
        if (!checkDependencies()) return
        initializeInfrastructure()
        initializeSystems()
        initializeServices()
        initializePresentation()
        registerListeners()
        registerCommands()
        logger.info("OyasaiPets enabled successfully!")
    }

    override fun onDisable() {
        cleanup()
        logger.info("OyasaiPets disabled!")
    }
}
```

## 設計原則の遵守
- SOC: プラグイン層はライフサイクル管理のみに集約
- SRP: 各クラスは単一責務に限定
- DIP: Listener → Service → System → Domain の依存方向を維持

## リスク管理
高リスク領域:
- `onInventoryClick` の巨大関数（約350行）
- 状態変数の移行（例: activeFetchTasks, openedGuis）
- 循環依存の回避（Service層設計が重要）

対策:
- Phase 3-1: onInventoryClick を最初に独立テスト
- 各Phaseでバックアップ作成
- 1ファイルずつビルド確認

## 成果指標
| 指標 | 現在 | 目標 | 改善率 |
| --- | --- | --- | --- |
| BigWolf.kt行数 | 2,967 | 950 | -68% |
| 総ファイル数 | 26 | 36 | +38% |
| 最大関数サイズ | ~350行 | ~100行 | -71% |
| BigWolf.kt責務 | 4個 | 1個 | -75% |

## 完了条件
- `BigWolf.kt` が 950行以下
- `BigWolf.kt` が `Listener` / `CommandExecutor` / `TabCompleter` を実装しない
- 全Phaseでビルド成功
- 既存機能の動作確認完了
- 各モジュールが単一責任を持つ
