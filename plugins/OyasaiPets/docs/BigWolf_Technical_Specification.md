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
  - 収納データ（STORED_FLAG, STORED_TYPE, STORED_VARIANT, etc.）
  - ショップ関連（SHOP_FLAG, SHOP_TYPE, SHOP_COST）
  - 購入券（VOUCHER_FLAG, VOUCHER_TYPE, VOUCHER_VARIANT）

#### 4. PetExtensions (拡張プロパティ)

- **ファイル**: `PetExtensions.kt`
- **役割**: LivingEntityへの拡張プロパティ定義
- **提供機能**:
  ```kotlin
  var LivingEntity.foodLevel: Int              // フードレベル
  var LivingEntity.ownerId: String?            // 飼い主UUID
  var LivingEntity.isSilentMode: Boolean       // サイレントモード
  var LivingEntity.particleType: Int           // パーティクルタイプ
  var LivingEntity.skillType: Int              // 現在のスキル
  var LivingEntity.skillUnlockedLevel: Int     // アンロック済みスキル
  var LivingEntity.statDistance: Double        // 走行距離
  var LivingEntity.statJumps: Int              // ジャンプ回数
  var LivingEntity.statToys: Int               // おもちゃ回数
  fun LivingEntity.isPet(): Boolean            // ペット判定
  fun LivingEntity.isOwnedBy(playerId: String): Boolean  // 所有権判定
  ```

#### 5. PetRegistry (ペット種別管理)

- **役割**: ペット種別とその仕様（PetSpec）の管理
- **データ構造**:
  ```kotlin
  data class PetSpec(
      val entityType: EntityType,
      val category: String,
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
  ↓ 購入券（スポーンエッグ）生成
createVoucherEgg()
  ↓ プレイヤーに付与
完了
```

### 2. ペット召喚フロー

```
プレイヤー
  ↓ 購入券を右クリック
onVoucherUse()
  ↓ MAX_PET_COUNTチェック
  ↓ spawnAndMountEntity()
エンティティ生成
  ↓ setupPetEntity()
  ↓ VariantHandler.applyVariant()
  ↓ PDCにデータ設定
  ↓ プレイヤーをマウント
完了
```

### 3. ペット育成フロー

```
プレイヤー
  ↓ フードアイテムでペットを右クリック
onPlayerInteractEntity()
  ↓ isPetFood()チェック
  ↓ giveFood()
  ↓ TokenManager経由でポイント減算
  ↓ foodLevel++
  ↓ updateStats()
    ↓ スケール・速度を計算
    ↓ Attribute更新
完了
```

### 4. スキル使用フロー

```
プレイヤー（ペットに乗車中）
  ↓ 左クリック
onPlayerArmSwing()
  ↓ activateSkill()
  ↓ クールダウンチェック
  ↓ スキルタイプ判定
    ├→ Lv.1: activateRoarSkill() (ノックバック)
    ├→ Lv.2: activateDashSkill() (高速移動)
    └→ Lv.3: activateHoverSkill() (飛行)
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
NamespacedKey: bigwolf:stored_skill → INTEGER (スキルレベル)
NamespacedKey: bigwolf:stored_unlocked → INTEGER (アンロック済み)
NamespacedKey: bigwolf:stored_hover → BYTE (ホバー状態)
+ 全統計データ (STORED_STAT_*)
```

#### 購入券（スポーンエッグ）のデータ

```
NamespacedKey: bigwolf:voucher_flag → BYTE (購入券フラグ: 1)
NamespacedKey: bigwolf:voucher_type → STRING (MOBタイプ)
NamespacedKey: bigwolf:voucher_variant → STRING (バリアント)
```

#### ショップMOBのデータ

```
NamespacedKey: bigwolf:shop_flag → BYTE (ショップフラグ: 1)
NamespacedKey: bigwolf:shop_type → STRING (販売MOBタイプ)
NamespacedKey: bigwolf:shop_variant → STRING (バリアント)
NamespacedKey: bigwolf:shop_cost → INTEGER (価格)
```

## イベントシステム

### 登録イベント

- `PlayerInteractEntityEvent`: ペットへのインタラクション
- `PlayerInteractEvent`: アイテム使用（フード、ブラシ、おもちゃ、収納復元、購入券）
- `InventoryClickEvent`: GUIクリック処理
- `InventoryCloseEvent`: GUI閉鎖処理
- `AsyncChatEvent`: ペット名前変更
- `EntityDismountEvent`: ペットからの降車
- `PlayerArmSwingEvent`: スキル発動（左クリック）
- `EntityTeleportEvent`: ペットのテレポート同期
- `EntityDamageEvent`: ペットのダメージ処理

### イベント処理パターン

```kotlin
@EventHandler
fun onSomeEvent(event: SomeEvent) {
    // 1. 早期リターン（不要な処理をスキップ）
    if (!condition) return

    // 2. データ取得・検証
    val data = getData() ?: return

    // 3. 権限・所有権チェック
    if (!hasPermission()) return

    // 4. ビジネスロジック実行
    performAction()

    // 5. イベントキャンセル（必要に応じて）
    event.isCancelled = true
}
```

## 設定ファイル（config.yml）

### 構造

```yaml
economy:
  foodPointCost: 100 # フード1回のコスト

pets:
  maxFoodLevel: 50 # 最大レベル
  wolf: # MOB別設定
    baseSpeed: 0.6
    maxSpeed: 1.2
    jumpPower: 0.6
    scaleMin: 1.5
    scaleMax: 2.5
  # ... 他のMOB設定

shop:
  defaultCost: 100 # デフォルト購入価格

skillbook:
  costLv1: 50 # スキルブックLv.1コスト
  costLv2: 100 # スキルブックLv.2コスト
  costLv3: 150 # スキルブックLv.3コスト
```

### 動的リロード

`/bigwolf reload`コマンドで設定をリロード可能（OP専用）

## パフォーマンス考慮事項

### メモリ管理

- **WeakReference不使用**: エンティティは直接管理
- **定期クリーンアップ**: 無効なエンティティの自動削除
- **マップのサイズ制限**: cooldownマップは自動期限切れ

### 最適化ポイント

1. **エンティティ検索**: `getNearbyEntities()`で範囲限定
1. **PDCアクセス**: 必要な時のみ読み書き
1. **イベント処理**: 早期リターンで不要な処理をスキップ
1. **タスクスケジューリング**: BukkitRunnableで非同期処理

### スケーラビリティ

- **プレイヤー数**: 100+プレイヤーでも安定動作
- **ペット総数**: 300+ペット（100プレイヤー×3匹）まで対応
- **ワールド数**: 複数ワールド対応

## API（他プラグイン連携）

### 依存プラグインAPI

- **TokenManager**: `tm add/remove <player> <amount>` コマンド経由

### 拡張可能性

```kotlin
// カスタムPetSpecの追加
PetRegistry.registerCustom(
    EntityType.CUSTOM_MOB,
    PetSpec(...)
)

// イベントリスナーの追加
Bukkit.getPluginManager().registerEvents(CustomListener(), plugin)
```

## セキュリティ仕様

### データ保護

1. **所有権検証**: すべてのペット操作で所有者確認
1. **コピー防止**: ペットID重複チェック
1. **権限分離**: OP専用コマンドの明確な分離

### 悪用防止

1. **クールダウン**: スキル・アクションにクールダウン設定
1. **数量制限**: 同時召喚数の制限（MAX_PET_COUNT）
1. **確認プロンプト**: 危険な操作（shopremoveall）は二段階確認

## バージョン管理

### データ互換性

- **マイグレーション**: 旧バージョンからの自動移行
- **後方互換**: 既存のペットデータを保持

### アップデート戦略

1. config.ymlのバックアップ
1. 新機能追加時は既存機能に影響なし
1. deprecatedマーキングで段階的移行

---

**最終更新**: 2026-01-11\
**API バージョン**: 1.0\
**対応 Paper バージョン**: 1.21.3+
