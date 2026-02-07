# OyasaiPets (BigWolf) アーキテクチャドキュメント

**最終更新**: 2026-02-01
**バージョン**: 1.0-SNAPSHOT

---

## 1. 概要

OyasaiPets (BigWolf) は、モジュラー設計と単一責任原則(SRP)に基づいてリファクタリングされたMinecraftペットプラグインです。
本ドキュメントでは、オブジェクト構造、階層、各ファイルの責務、およびファイル間の依存関係について説明します。

---

## 2. レイヤーアーキテクチャ

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           BigWolfPlugin                                 │
│                      (メインエントリポイント)                            │
│              依存性注入・コマンド登録・リスナー登録                       │
└─────────────────────────────┬───────────────────────────────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│    commands/     │  │    listeners/    │  │      gui/        │
│   コマンド処理    │  │   イベント処理    │  │    GUI管理       │
│  (4ファイル)      │  │   (8ファイル)     │  │   (1ファイル)     │
└──────────────────┘  └──────────────────┘  └──────────────────┘
       │                      │                      │
       └──────────────────────┼──────────────────────┘
                              ▼
                    ┌─────────────────────┐
                    │      services/      │
                    │  ビジネスロジック    │
                    │    (7ファイル)       │
                    └─────────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│     systems/     │  │     domain/      │  │     items/       │
│   システム層      │  │  ドメイン定義     │  │  アイテム生成    │
│   (8ファイル)     │  │   (6ファイル)     │  │   (1ファイル)    │
└──────────────────┘  └──────────────────┘  └──────────────────┘
       │                      │                      │
       └──────────────────────┼──────────────────────┘
                              ▼
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌────────────────┐   ┌────────────────┐   ┌────────────────┐
│  BigWolfKeys   │   │ BigWolfConfig  │   │ PetDataManager │
│ (NamespacedKey │   │   (設定管理)   │   │  (永続化管理)  │
│     定義)      │   │                │   │                │
└────────────────┘   └────────────────┘   └────────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
                     ┌────────────────────┐
                     │   PetExtensions    │
                     │ (拡張プロパティ)   │
                     │   + SpawnUtils     │
                     └────────────────────┘
```

---

## 3. パッケージ構造

```
me.marzipan.OyasaiPets/
├── BigWolf.kt              # メインプラグインクラス
├── BigWolfConfig.kt        # 設定管理オブジェクト
├── BigWolfKeys.kt          # NamespacedKey定義
├── PetDataManager.kt       # JSON永続化管理
├── PetExtensions.kt        # LivingEntity拡張プロパティ + SpawnUtils
│
├── commands/               # コマンド処理層
│   ├── CommandManager.kt       # コマンドルーティング
│   ├── CommandTabCompleter.kt  # タブ補完
│   ├── OpCommands.kt           # OP専用コマンド
│   └── PlayerCommands.kt       # 一般プレイヤーコマンド
│
├── domain/                 # ドメインモデル層
│   ├── PetCategory.kt          # ペットカテゴリ列挙
│   ├── PetRegistry.kt          # ペット仕様レジストリ
│   ├── PetSpec.kt              # ペット仕様データクラス
│   ├── ShopContext.kt          # ショップコンテキスト
│   ├── ToyType.kt              # おもちゃタイプ列挙
│   └── VariantHandler.kt       # バリアント適用・取得
│
├── gui/                    # GUI管理層
│   └── GuiManager.kt           # 全GUI作成・管理
│
├── i18n/                   # 国際化層
│   └── MobTranslator.kt        # MOB名日本語翻訳
│
├── items/                  # アイテム層
│   └── PetItemFactory.kt       # アイテム生成ファクトリ
│
├── listeners/              # イベントリスナー層
│   ├── BreedGuiListener.kt     # 交配GUIイベント
│   ├── PetEventListener.kt     # ペット基本イベント
│   ├── PetInteractionListener.kt  # ペット相互作用
│   ├── PetInventoryListener.kt # インベントリGUIイベント
│   ├── PetLifecycleListener.kt # ペットライフサイクル
│   ├── PetShopGuiListener.kt   # 購入GUIイベント
│   ├── PlayerActionListener.kt # プレイヤーアクション
│   └── ShopListener.kt         # ショップMOBイベント
│
├── services/               # サービス層（ビジネスロジック）
│   ├── PetCommandService.kt    # 交配・名前変更コマンド
│   ├── PetInteractionService.kt # ペット相互作用
│   ├── PetQueryService.kt      # ペット情報照会
│   ├── PetReviveService.kt     # ペット復活処理
│   ├── PetShopGuiService.kt    # 購入GUI管理
│   ├── PetStorageService.kt    # ペット収納・復元
│   └── TransferService.kt      # ペット譲渡処理
│
└── systems/                # システム層
    ├── BreedingSystem.kt       # 交配ロジック
    ├── EconomySystem.kt        # TokenManager連携
    ├── FetchSystem.kt          # おもちゃフェッチ
    ├── ItemManagementSystem.kt # アイテム作成・判定
    ├── PetControlSystem.kt     # 騎乗制御
    ├── PetSpawnSystem.kt       # ペット生成・マウント
    ├── ShopSystem.kt           # ショップMOB管理
    └── SkillSystem.kt          # スキル発動
```

---

## 4. 各ファイルの責務（SRP原則）

### 4.1 コアファイル

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **BigWolf.kt** | 485 | プラグインエントリポイント、依存性注入、コマンド/リスナー登録 | 全サービス・システム |
| **BigWolfConfig.kt** | 174 | 設定値管理（シングルトン） | FileConfiguration |
| **BigWolfKeys.kt** | 139 | NamespacedKey定義（シングルトン） | Plugin |
| **PetDataManager.kt** | 510 | ペットデータのJSON永続化 | Gson |
| **PetExtensions.kt** | 264 | LivingEntity拡張プロパティ、SpawnUtils | BigWolfKeys |

### 4.2 commands/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **CommandManager.kt** | 51 | コマンドルーティング・ディスパッチ | PlayerCommands, OpCommands |
| **CommandTabCompleter.kt** | 130 | タブ補完ロジック | PetRegistry, VariantHandler |
| **OpCommands.kt** | 227 | OP専用コマンド（item, shop, forceなど） | ShopSystem, ItemManagementSystem |
| **PlayerCommands.kt** | 135 | 一般プレイヤーコマンド（buy, breed, menuなど） | サービス関数参照 |

### 4.3 services/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **PetInteractionService.kt** | 282 | ペット相互作用（餌、ブラシ、スキル解放） | BigWolfConfig, PetRegistry |
| **PetStorageService.kt** | 428 | ペット収納・復元（アイテム化） | BigWolfKeys, PetDataManager |
| **PetQueryService.kt** | 276 | ペット情報照会（履歴、位置、recover） | EconomySystem, PetDataManager |
| **PetReviveService.kt** | 214 | ペット復活（演出含む） | EconomySystem, PetSpawnSystem |
| **PetCommandService.kt** | 132 | 交配コマンド、名前変更コマンド | BreedingSystem |
| **PetShopGuiService.kt** | 146 | 購入GUI管理 | GuiManager |
| **TransferService.kt** | 240 | ペット譲渡（2段階確認フロー） | PetStorageService, PetDataManager |

### 4.4 systems/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **PetSpawnSystem.kt** | 145 | ペット生成・初期化・マウント | PetRegistry, VariantHandler |
| **BreedingSystem.kt** | 395 | 交配ロジック（GUI、能力値継承） | PetRegistry, VariantHandler |
| **PetControlSystem.kt** | 232 | 騎乗制御（移動・ジャンプ・パーティクル） | PetRegistry |
| **EconomySystem.kt** | 68 | TokenManager連携（残高取得・消費） | TMAPI |
| **FetchSystem.kt** | 209 | おもちゃフェッチ（投げる・拾う） | PetRegistry |
| **SkillSystem.kt** | 148 | スキル発動（咆哮・突進・ホバリング） | BigWolfConfig, PetRegistry |
| **ShopSystem.kt** | 136 | ショップMOB管理（生成・削除） | BigWolfKeys |
| **ItemManagementSystem.kt** | 147 | アイテム作成・判定 | BigWolfConfig, BigWolfKeys |

### 4.5 domain/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **PetRegistry.kt** | 287 | ペット仕様管理（公式ペット一覧） | PetSpec, ToyType |
| **PetSpec.kt** | 50 | ペット仕様データクラス | PetCategory, ToyType |
| **PetCategory.kt** | 15 | ペットカテゴリ列挙（LAND/WATER/FLYING） | なし |
| **ToyType.kt** | 15 | おもちゃタイプ列挙 | なし |
| **ShopContext.kt** | 14 | ショップコンテキストデータ | EntityType |
| **VariantHandler.kt** | 121 | バリアント適用・取得 | Paper Registry API |

### 4.6 gui/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **GuiManager.kt** | 369 | 全GUI作成・状態管理 | PetRegistry, PetItemFactory |

### 4.7 listeners/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **PetEventListener.kt** | 65 | 基本ペットイベント（ドロップ、テレポート、降車） | PetRegistry |
| **PetInteractionListener.kt** | 132 | ペットへの右クリック相互作用 | GuiManager, FetchSystem |
| **PetInventoryListener.kt** | 400 | インベントリGUIクリックイベント | GuiManager, PetSpawnSystem |
| **BreedGuiListener.kt** | 233 | 交配GUI専用イベント | PetCommandService, BreedingSystem |
| **PetShopGuiListener.kt** | 113 | 購入GUI専用イベント | PetShopGuiService |
| **PlayerActionListener.kt** | 112 | プレイヤーアクション（おもちゃ、収納エッグ使用） | FetchSystem, PetSpawnSystem |
| **PetLifecycleListener.kt** | 127 | ペット死亡・プレイヤー切断 | PetDataManager |
| **ShopListener.kt** | 44 | ショップMOBイベント | ShopSystem |

### 4.8 i18n/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **MobTranslator.kt** | 173 | MOB名・バリアント名の日本語翻訳 | なし（純粋関数） |

### 4.9 items/

| ファイル | 行数 | 責務 | 依存先 |
|----------|------|------|--------|
| **PetItemFactory.kt** | 215 | ペット関連アイテム生成・判定 | BigWolfKeys |

---

## 5. 依存関係図（処理フロー）

### 5.1 ペット購入フロー

```
Player
  │
  ├─ /bigwolf buy ───────────────────> PlayerCommands.handleCommand()
  │                                              │
  │                                              ▼
  │                                    PetShopGuiService.openMainShopGui()
  │                                              │
  │                                              ▼
  │                                    GuiManager.createInventory()
  │                                              │
  ◄─────────────────────────────────── GUI表示 ──┘
  │
  ├─ MOBエッグクリック ────────────> PetShopGuiListener.onInventoryClick()
  │                                              │
  │                            ┌─────────────────┴─────────────────┐
  │                            ▼                                   ▼
  │                   バリアントあり                         バリアントなし
  │                            │                                   │
  │                            ▼                                   │
  │              openVariantSelectionGui()                         │
  │                            │                                   │
  │                            └─────────────────┬─────────────────┘
  │                                              ▼
  │                                    GuiManager.openShopGui()
  │                                      (購入確認GUI)
  │                                              │
  ◄─────────────────────────────────── GUI表示 ──┘
  │
  ├─ 購入ボタンクリック ───────────> PetInventoryListener.onInventoryClick()
  │                                              │
  │                                              ▼
  │                                    EconomySystem.consumeTokens()
  │                                              │
  │                                              ▼
  │                                    PetSpawnSystem.spawnAndMountEntity()
  │                                              │
  │                            ┌─────────────────┴─────────────────┐
  │                            ▼                                   ▼
  │                   setupPetEntity()                   PetDataManager.recordPurchase()
  │                            │                                   │
  │                            ▼                                   │
  │                   VariantHandler.applyVariant()                │
  │                            │                                   │
  │                            └─────────────────┬─────────────────┘
  │                                              ▼
  │                                    PetControlSystem.startControlTask()
  │                                              │
  ◄─────────────────────────────────── ペット騎乗
```

### 5.2 交配フロー

```
Player
  │
  ├─ /bigwolf breed ──────────────> PetCommandService.handleBreedCommand()
  │                                              │
  │                                              ▼
  │                                    BreedingSystem.getBreedablePets()
  │                                              │
  │                                              ▼
  │                                    BreedingSystem.openBreedGui()
  │                                              │
  ◄───────────────────────────────── 交配GUI表示
  │
  ├─ 親1選択 ─────────────────────> BreedGuiListener.handlePetSelection()
  │                                              │
  ├─ 親2選択 ─────────────────────────────────────┤
  │                                              ▼
  │                                    updateGuiSelection()
  │                                              │
  ├─ 決定ボタン ──────────────────> BreedGuiListener.handleConfirmBreed()
  │                                              │
  │                                              ▼
  │                                    BreedingSystem.executeBreeding()
  │                                              │
  │                            ┌─────────────────┴─────────────────┐
  │                            ▼                                   ▼
  │              selectRandomVariant()              EconomySystem.consumeTokens()
  │                            │                                   │
  │                            ▼                                   │
  │              世代・能力値計算                                   │
  │                            │                                   │
  │                            └─────────────────┬─────────────────┘
  │                                              ▼
  │                                    setupPetEntity() + 降臨演出
  │                                              │
  │                                              ▼
  │                                    PetDataManager.recordBreeding()
  │                                              │
  ◄──────────────────────────────────── 子ペット誕生
```

### 5.3 ペット収納・復元フロー

```
【収納】
Player ──> ペットGUI「収納」クリック
           │
           ▼
    PetInventoryListener.onInventoryClick()
           │
           ▼
    PetStorageService.storePetToItem()
           │
           ├──> createStoredPetItem() ──> PDCにデータ保存
           │
           └──> PetDataManager.markAsStored()
                │
                ▼
         entity.remove() + アイテム付与 ──> 収納完了

【復元】
Player ──> スポーンエッグ右クリック
           │
           ▼
    PlayerActionListener.onPlayerInteract()
           │
           ▼
    PetStorageService.restorePetFromItem()
           │
           ├──> PDCからデータ読込
           │
           ├──> countActivePets()チェック
           │
           ├──> spawnEntity() + setupPetEntity()
           │
           └──> VariantHandler.applyVariant()
                │
                ▼
         PetDataManager.markAsAlive() ──> ペット復元
```

---

## 6. 依存性注入パターン

BigWolfPlugin（メインクラス）は、すべてのサービスとシステムを初期化し、関数参照を通じて依存性を注入します。

```kotlin
// BigWolf.kt での依存性注入例

// 1. システム層の初期化
economySystem = EconomySystem(logger)
interactionService = PetInteractionService(this)
storageService = PetStorageService(this)

// 2. サービス層への関数参照注入
petSpawnSystem = PetSpawnSystem(
    this,
    mountCooldowns,
    { player, entity -> petControlSystem.startControlTask(player, entity) },
    { entity, level, spec -> interactionService.updateStats(entity, level, spec) }
)

// 3. リスナーへの関数参照注入
val petInteractionListener = PetInteractionListener(
    guiManager,
    fetchSystem,
    petControlSystem,
    mountCooldowns,
    interactionService::checkAndMigrateOwner,
    interactionService::isOwner,
    itemManagement::isPetFood,
    // ... その他の関数参照
)
```

---

## 7. データフロー

### 7.1 永続化データ

```
plugins/OyasaiPets/
├── config.yml              # プラグイン設定
└── players/
    └── <UUID>/             # プレイヤーごとのフォルダ
        ├── 001_WOLF_pale.json
        ├── 002_CAT_tabby.json
        └── ...
```

### 7.2 ランタイムデータ

| データ | 保存場所 | 用途 |
|--------|----------|------|
| ペット基本情報 | LivingEntity.persistentDataContainer | オーナーID、ペットID、スキル等 |
| ペット履歴 | JSON (players/<UUID>/) | 購入日、死亡日、譲渡履歴 |
| 収納ペット | ItemStack.itemMeta.persistentDataContainer | アイテム化時のステータス保持 |
| GUI状態 | GuiManager.openedXXX | 開いているGUIの追跡 |
| クールダウン | Map<UUID, Long> | スキル・マウント・ブラシ等 |

---

## 8. 設計原則

### 8.1 単一責任原則（SRP）

各クラス/オブジェクトは単一の責務を持ちます：

- **PetStorageService**: ペットの収納と復元のみ
- **EconomySystem**: TokenManagerとの連携のみ
- **VariantHandler**: バリアントの適用と取得のみ
- **MobTranslator**: 翻訳のみ（純粋関数）

### 8.2 依存性逆転原則（DIP）

高レベルモジュール（サービス層）は低レベルモジュール（システム層）に直接依存せず、関数参照を通じて疎結合を実現しています。

### 8.3 開放閉鎖原則（OCP）

新しいペットタイプは `PetRegistry` に追加するだけで対応可能。`VariantHandler` はPaper Registry APIを使用し、バージョンアップに対応しやすい設計です。

---

## 9. ファイル統計

| カテゴリ | ファイル数 | 総行数 |
|----------|------------|--------|
| コア | 5 | 1,572 |
| commands | 4 | 543 |
| services | 7 | 1,718 |
| systems | 8 | 1,480 |
| domain | 6 | 502 |
| gui | 1 | 369 |
| listeners | 8 | 1,226 |
| i18n | 1 | 173 |
| items | 1 | 215 |
| **合計** | **41** | **7,798** |

---

## 10. 今後の拡張ポイント

1. **新規ペット追加**: `PetRegistry.specs` に新しい `PetSpec` を追加
2. **新規スキル追加**: `SkillSystem` に新しいスキルタイプを追加
3. **新規GUI追加**: `GuiManager` に新しいGUI作成メソッドを追加、対応するリスナーを作成
4. **多言語対応**: `MobTranslator` を拡張し、言語設定に対応
5. **API公開**: 他プラグイン向けのAPIサービスクラスを作成

---

## 11. 関連ドキュメント

- [冗長コード・不要ロジック調査レポート](./OYASAIPETS_CODE_REDUNDANCY_ANALYSIS.md) - コード品質改善のための調査結果
- [アーキテクチャ検証レポート](./OYASAIPETS_ARCHITECTURE_VERIFICATION.md) - 本ドキュメントの正確性検証
- [BigWolf 概要](./BigWolf_Overview.md) - プラグインの機能概要
- [BigWolf 技術仕様](./BigWolf_Technical_Specification.md) - 詳細な技術仕様

