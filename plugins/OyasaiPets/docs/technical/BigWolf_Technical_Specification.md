# BigWolf プラグイン - 技術仕様書

## システムアーキテクチャ

### コアコンポーネント

#### 1. BigWolfPlugin (メインクラス)

- **役割**: プラグインのエントリーポイント、コマンド処理、イベント管理
- **実装**: JavaPlugin, Listener, CommandExecutor, TabCompleter
- **責務**: ライフサイクル管理、コマンドルーティング、イベントハンドリング

#### 2. BigWolfConfig (設定管理)

- **ファイル**: `BigWolfConfig.kt`
- **役割**: 全設定値の一元管理
- **設定項目**:
  ```kotlin
  var maxFoodLevel = 50              // ペット最大レベル
  var foodPointCost = 100            // レベルアップコスト
  var defaultShopCost = 100          // ペット購入価格
  var skillBookCostLv1 = 50          // スキルLv.1コスト
  var skillBookCostLv2 = 100         // スキルLv.2コスト
  var skillBookCostLv3 = 150         // スキルLv.3コスト
  var reviveCost = 50                // 復活コスト
  const val SKILL_COOLDOWN_MS = 5000L           // スキルクールダウン
  const val MAX_PET_COUNT = 3                   // 同時召喚制限
  const val REMOVEALL_CONFIRM_TIMEOUT_MS = 15_000L  // 確認タイムアウト
  ```

#### 3. BigWolfKeys (キー管理)

- **ファイル**: `BigWolfKeys.kt`
- **役割**: PersistentDataContainerのNamespacedKey管理
- **カテゴリ**:
  - ペット基本情報（FOOD, OWNER, SILENT, PARTICLE, PET_ID, SKILL_TYPE, etc.）
  - 統計情報（STAT_DISTANCE, STAT_JUMPS, STAT_TOYS, etc.）
  - 収納データ（STORED_FLAG, STORED_TYPE, STORED_VARIANT, STORED_OWNER, etc.）
  - ショップ関連（SHOP_FLAG, SHOP_TYPE, SHOP_COST）

#### 4. PetDataManager (データ永続化)

- **ファイル**: `PetDataManager.kt`
- **役割**: ペットデータのJSON形式での永続化管理
- **データ構造**:
  ```
  plugins/OyasaiPets/players/
    <プレイヤーUUID>/
      001_WOLF_pale.json
      002_CAT_tabby.json
  ```
- **主要機能**:
  - `recordPurchase()`: 購入履歴の記録
  - `recordDeath()`: 死亡データの保存
  - `updateLastLocation()`: 位置情報の更新
  - `getDeathDataForRevive()`: 復活用データの取得
  - `markAsStored()`: 収納状態の記録
  - `markAsAlive()`: 生存状態の記録

#### 5. PetExtensions (拡張プロパティ)

- **ファイル**: `PetExtensions.kt`
- **役割**: LivingEntityへの拡張プロパティ定義
- **提供機能**:
  ```kotlin
  var LivingEntity.foodLevel: Int              // フードレベル
  var LivingEntity.ownerId: String?            // 飼い主UUID
  var LivingEntity.petId: String?              // ペット固有ID
  var LivingEntity.isSilentMode: Boolean       // サイレントモード
  var LivingEntity.particleType: Int           // パーティクルタイプ
  var LivingEntity.skillType: Int              // 現在のスキル
  var LivingEntity.skillUnlockedLevel: Int     // アンロック済みスキル
  var LivingEntity.statDistance: Double        // 走行距離
  var LivingEntity.statJumps: Int              // ジャンプ回数
  var LivingEntity.statToys: Int               // おもちゃ回数
  ```

#### 6. PetRegistry (ペット種別管理)

- **役割**: ペット種別とその仕様（PetSpec）の管理
- **データ構造**:
  ```kotlin
  data class PetSpec(
      val entityType: EntityType,
      val category: PetCategory,
      val baseSpeed: Double,
      val maxSpeed: Double,
      val jumpPower: Double,
      val scaleRange: ClosedFloatingPointRange<Double>,
      val toyType: ToyType? = null,
      val toyMaterial: Material? = null,
      val toyName: String? = null,
      val toyGravity: Boolean = true
  )
  ```

## データフロー

### 1. ペット購入フロー

```
プレイヤー
  ↓ /bigwolf <mob名> [variant]
コマンド処理
  ↓ handleNormalSummon()
ショップGUI表示
  ↓ プレイヤーが購入ボタンクリック
onInventoryClick()
  ↓ TokenManager経由でポイント減算
  ↓ spawnAndMountEntity() でペット直接召喚
  ↓ PetDataManager.recordPurchase() で購入履歴記録
完了
```

### 2. ペット復活フロー

```
プレイヤー
  ↓ /bigwolf revive <番号>
handleRevivePet()
  ↓ PetDataManager.getDeathDataForRevive() で死亡データ取得
  ↓ ペット数制限チェック
  ↓ TokenManager経由でポイント減算（50pt）
  ↓ ペットを上空10ブロックにスポーン
  ↓ 保存されたデータ（名前、スキル、統計等）を復元
  ↓ BukkitRunnableで降臨演出（パーティクル + 段階的降下）
  ↓ PetDataManager.markAsRevived() でステータス更新
完了
```

### 3. ペット収納フロー

```
プレイヤー
  ↓ Shift+右クリック → GUI → 収納ボタン
storePetToItem()
  ↓ createStoredPetItem()
    ↓ 全データをPDCに保存
    ↓ STORED_OWNERにオーナーUUIDを保存（譲渡防止）
  ↓ PetDataManager.markAsStored() でステータス更新
  ↓ エンティティ削除
  ↓ プレイヤーにスポーンエッグ付与
完了
```

### 4. ペット解放フロー

```
プレイヤー
  ↓ 収納エッグを右クリック
restorePetFromItem()
  ↓ STORED_OWNERでオーナーチェック（★譲渡防止）
  ↓ オーナーでない場合は拒否
  ↓ ペット数制限チェック
  ↓ 既存ペットIDの重複チェック（コピー防止）
  ↓ エンティティ生成 + データ復元
  ↓ PetDataManager.markAsAlive() でステータス更新
完了
```

### 5. ペット死亡フロー

```
EntityDeathEvent
  ↓ onPetDeath()
  ↓ ペットIDとオーナーID確認
  ↓ PetDataManager.recordDeath() で死亡データ保存
    ↓ 全ステータス（名前、スキル、統計）を保存
    ↓ 死亡位置と時刻を記録
  ↓ オーナーに通知メッセージ送信
完了
```

## データ永続化

### PersistentDataContainer構造

#### ペットエンティティのデータ

```
NamespacedKey: bigwolf:food_count → INTEGER (フードレベル)
NamespacedKey: bigwolf:owner_uuid → STRING (飼い主UUID)
NamespacedKey: bigwolf:is_silent_mode → BYTE (サイレント: 0/1)
NamespacedKey: bigwolf:particle_type → INTEGER (パーティクルタイプ)
NamespacedKey: bigwolf:unique_pet_id → STRING (ペット固有ID)
NamespacedKey: bigwolf:skill_type → INTEGER (現在のスキル)
NamespacedKey: bigwolf:skill_unlocked_level → INTEGER (アンロック済み)
NamespacedKey: bigwolf:hover_state → BYTE (ホバー中: 0/1)
NamespacedKey: bigwolf:stat_distance_m → DOUBLE (走行距離)
NamespacedKey: bigwolf:stat_jumps → INTEGER (ジャンプ回数)
NamespacedKey: bigwolf:stat_toys → INTEGER (おもちゃ回数)
NamespacedKey: bigwolf:stat_brushes → INTEGER (ブラシ回数)
NamespacedKey: bigwolf:stat_treats → INTEGER (おやつ回数)
```

#### 収納アイテム（スポーンエッグ）のデータ

```
NamespacedKey: bigwolf:is_stored_pet → BYTE (収納フラグ: 1)
NamespacedKey: bigwolf:stored_type → STRING (MOBタイプ)
NamespacedKey: bigwolf:stored_variant → STRING (バリアント)
NamespacedKey: bigwolf:stored_name → STRING (カスタム名)
NamespacedKey: bigwolf:stored_pet_id → STRING (ペットID)
NamespacedKey: bigwolf:stored_owner_uuid → STRING (オーナーUUID) ★譲渡防止用
NamespacedKey: bigwolf:stored_skill → INTEGER (スキルレベル)
NamespacedKey: bigwolf:stored_unlocked → INTEGER (アンロック済み)
NamespacedKey: bigwolf:stored_hover → BYTE (ホバー状態)
+ 全統計データ (STORED_STAT_*)
```

#### ショップMOBのデータ

```
NamespacedKey: bigwolf:shop_flag → BYTE (ショップフラグ: 1)
NamespacedKey: bigwolf:shop_type → STRING (販売MOBタイプ)
NamespacedKey: bigwolf:shop_variant → STRING (バリアント)
NamespacedKey: bigwolf:shop_cost → INTEGER (価格)
```

### JSON永続化（PetDataManager）

#### ファイル構造

```
plugins/OyasaiPets/players/
  <プレイヤーUUID>/
    001_WOLF_pale.json
    002_CAT_tabby.json
```

#### JSONスキーマ

```json
{
  "petId": "uuid-string",
  "petNumber": 1,
  "type": "WOLF",
  "variant": "pale",
  "customName": "ポチ",
  "purchasedAt": "2026-01-20T12:34:56",
  "status": "alive",
  "lastLocation": {
    "world": "world",
    "x": 100.5,
    "y": 64.0,
    "z": -200.3
  },
  "deathData": null,
  "stats": {
    "distance": 1234.5,
    "jumps": 100,
    "toys": 50,
    "brushes": 30,
    "treats": 20
  },
  "skillType": 1,
  "skillUnlockedLevel": 2,
  "foodLevel": 45,
  "originalOwner": "owner-uuid",
  "transferHistory": [],
  "breedInfo": {
    "parent1Id": "parent1-uuid",
    "parent2Id": "parent2-uuid",
    "generation": 2,
    "bornAt": "2026-01-20T15:00:00"
  },
  "breedCount": 3,
  "lastBreedTime": "2026-01-21T10:30:00",
  "particleUnlocked": "0,1,2",
  "speedMultiplier": 1.2,
  "jumpMultiplier": 1.15
}
```

## イベントシステム

### 登録イベント

- `PlayerInteractEntityEvent`: ペットへのインタラクション
- `PlayerInteractEvent`: アイテム使用（フード、ブラシ、おもちゃ、収納復元）
- `InventoryClickEvent`: GUIクリック処理
- `InventoryCloseEvent`: GUI閉鎖処理
- `AsyncChatEvent`: ペット名前変更
- `EntityDismountEvent`: ペットからの降車 + 位置記録
- `PlayerArmSwingEvent`: スキル発動（左クリック）
- `EntityTeleportEvent`: ペットのテレポート同期
- `EntityDamageEvent`: ペットのダメージ処理
- `EntityDeathEvent`: ペット死亡処理 + データ保存
- `PlayerQuitEvent`: ログアウト時の位置記録

## 設定ファイル（config.yml）

### 構造

```yaml
economy:
  foodPointCost: 100     # フード1回のコスト

pets:
  maxFoodLevel: 50       # 最大レベル
  wolf:                  # MOB別設定
    baseSpeed: 0.6
    maxSpeed: 1.2
    jumpPower: 0.6
    scaleMin: 1.5
    scaleMax: 2.5
  # ... 他のMOB設定

shop:
  defaultCost: 100       # デフォルト購入価格

skillbook:
  costLv1: 50            # スキルブックLv.1コスト
  costLv2: 100           # スキルブックLv.2コスト
  costLv3: 150           # スキルブックLv.3コスト

revive:
  cost: 50               # ペット復活コスト

recover:
  cost: 200              # スポーンエッグ再取得コスト

breed:
  minLevel: 10           # 交配に必要な最低レベル
  cooldownHours: 24      # 交配クールダウン（時間）
  randomMin: 0.95        # ランダム係数の最小値
  randomMax: 1.10        # ランダム係数の最大値
  mutationChance: 0.05   # 突然変異の確率
  mutationBoost: 1.1     # 突然変異時のブースト倍率
  genBonusPerGen: 0.01   # 世代ごとのボーナス
  genBonusMax: 0.20      # 世代ボーナスの上限
  statCap: 1.5           # 能力値の上限（倍率）
  bonusLevelPerGen: 1    # 世代ごとの初期レベルボーナス
  bonusLevelMax: 10      # 初期レベルボーナスの上限

play:
  levelUpChance: 0.05    # 遊びでレベルアップする確率
  levelUpMaxLevel: 10    # 遊びでレベルアップできる最大レベル
```

### 動的リロード

`/bigwolf reload`コマンドで設定をリロード可能（OP専用）

## セキュリティ仕様

### 譲渡防止システム

1. **STORED_OWNER**: 収納時にオーナーUUIDをPDCに保存
2. **解放時チェック**: オーナー以外が使用しようとすると拒否
3. **Lore表示**: アイテムに「オーナー: PlayerName」を表示

### データ保護

1. **所有権検証**: すべてのペット操作で所有者確認
2. **コピー防止**: ペットID重複チェック
3. **権限分離**: OP専用コマンドの明確な分離

### 悪用防止

1. **クールダウン**: スキル・アクションにクールダウン設定
2. **数量制限**: 同時召喚数の制限（MAX_PET_COUNT = 3）
3. **確認プロンプト**: 危険な操作（shopremoveall）は二段階確認

## パフォーマンス考慮事項

### メモリ管理

- **キャッシュ**: PetDataManagerでプレイヤーデータをメモリキャッシュ
- **定期クリーンアップ**: 無効なエンティティの自動削除
- **マップのサイズ制限**: cooldownマップは自動期限切れ

### 最適化ポイント

1. **エンティティ検索**: `getNearbyEntities()`で範囲限定
2. **PDCアクセス**: 必要な時のみ読み書き
3. **イベント処理**: 早期リターンで不要な処理をスキップ
4. **タスクスケジューリング**: BukkitRunnableで非同期処理

### スケーラビリティ

- **プレイヤー数**: 100+プレイヤーでも安定動作
- **ペット総数**: 300+ペット（100プレイヤー×3匹）まで対応
- **ワールド数**: 複数ワールド対応

---

**対応 Paper バージョン**: 1.21.3+
