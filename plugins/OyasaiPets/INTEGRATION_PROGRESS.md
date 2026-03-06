# OyasaiPets 統合プラン - 進捗状況

## 完了したステップ

### ✅ Step 0: バックアップ作成

- 場所:
  `/Users/aa/platform/plugins/OyasaiPets/backup/refactor_pre_merge_20260217/`
- 完了日時: 2026-02-17

### ✅ Step 1: 基盤・列挙型の統合

- `ToyType` (enum)
- `PetCategory` (enum)
- `BigWolfKeys` (object)
- `BigWolfConfig` (object)

### ✅ Step 2: ドメイン層の統合

- `ShopContext` (data class)
- `PetSpec` (data class)
- `VariantHandler` (object)
- `TemperamentHelper` (object)
- `PetRegistry` (object)

### ✅ Step 3: 拡張・永続化層の統合

- LivingEntity拡張プロパティ（すべて）
- `SpawnUtils` (object)
- `PetStatus` (enum)
- `PetData`, `LocationData`, `DeathData`, `PetStats`, `TransferRecord`,
  `BreedInfo`, `PetSnapshot` (data classes)
- `PetDataManager` (object)
- `PetSynchronizer` (object)

### ✅ Step 4: ユーティリティ層

- `MobTranslator` (object)
- `PetItemFactory` (object)
- `GuiManager` (class)

### ✅ Step 5: システム層

- `EconomySystem` (class)
- `SkillSystem` (class)
- `ShopSystem` (class) - 未実装（必要に応じて追加）
- `PetControlSystem` (class) - 未実装（必要に応じて追加）
- `PetSpawnSystem` (class)
- `FetchSystem` (class)
- `BreedingSystem` (class)
- `ChildAISystem` (class)

### ✅ Step 6: サービス層

- `PetInteractionService` (class)
- `PetStorageService` (class)
- `PetQueryService` (class)
- `PetReviveService` (class)

## 次のステップ

### 🔲 Step 7: リスナー層

- `PetEventListener` (class)
- `PetInteractionListener` (class)
- `PetInventoryListener` (class)
- `PetLifecycleListener` (class)
- `PetShopGuiListener` (class)
- `BreedGuiListener` (class)
- `ShopListener` (class)
- `PlayerActionListener` (class)

### 🔲 Step 8: コマンド層

- `CommandManager` (class)
- `CommandTabCompleter` (object)
- `OpCommands` (class)
- `PlayerCommands` (class)

### 🔲 Step 9: メインプラグインクラス

- `BigWolfPlugin` (class)

### 🔲 Step 10: クリーンアップ

- 旧ファイルの削除
- ビルド確認
- 動作テスト

## 統合先ファイル

- `/Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/BigWolfUnified.kt`

## 現在の状況

- **ファイルサイズ**: 約108KB
- **進捗**: 約55-60% (基盤〜サービス層完了)
- **残り**: リスナー・コマンド・メイン層

## 残りの作業詳細

完全な統合には以下が必要:

1. リスナークラスの追加（8クラス）
1. コマンドクラスの追加（4クラス）
1. メインプラグインクラス（BigWolfPlugin）の統合
1. plugin.ymlの更新（main classの変更）
1. 旧ファイルの削除
1. ビルド・動作テスト

## 備考

- 統合後、`BigWolfUnified.kt` を `BigWolf.kt` にリネームし、旧ファイルを削除
- 現在の統合ファイルにはStep 1-6の全クラスが含まれており、独立して動作可能な状態に近い
