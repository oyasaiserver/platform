# BigWolf プラグイン - OP・管理者向けガイド

## 目次

1. [概要](#概要)
2. [基本設定](#基本設定)
3. [管理コマンド一覧](#管理コマンド一覧)
4. [アイテム配布](#アイテム配布)
5. [ショップシステム](#ショップシステム)
6. [強制収納機能](#強制収納機能)
7. [ペットデータ管理](#ペットデータ管理)
8. [設定ファイル](#設定ファイル)
9. [トラブルシューティング](#トラブルシューティング)
10. [権限管理](#権限管理)

---

## 概要

このガイドは、BigWolfプラグインを管理するOP（オペレーター）向けの包括的なマニュアルです。サーバー管理、プレイヤーサポート、トラブル対応に必要な全機能を網羅しています。

### 必要な権限

- **OP権限**: すべての管理コマンドにはOP権限が必要です

---

## 基本設定

### 初回セットアップ

1. **プラグインのインストール**

   ```
   plugins/
   ├── OyasaiPets.jar        (BigWolfプラグイン)
   └── TokenManager.jar      (必須依存)
   ```

2. **サーバー起動** 初回起動時に自動で`config.yml`が生成されます。

3. **設定の確認**

   ```
   plugins/OyasaiPets/config.yml
   ```

4. **設定のリロード**

   ```
   /bigwolf reload
   ```

### 依存プラグイン

#### 必須

- **TokenManager**: ポイントシステムに使用
  - プレイヤーへのポイント付与: `/tm add <player> <amount>`
  - ポイント確認: `/tm balance <player>`

#### 推奨

- **LuckPerms**: 詳細な権限管理
- **WorldGuard**: ペット召喚制限
- **CoreProtect**: ログ記録

---

## 管理コマンド一覧

### 一般コマンド（全プレイヤー使用可能）

| コマンド | 説明 |
|---------|------|
| `/bigwolf` | 使用方法を表示 |
| `/bigwolf <mob名> [variant]` | ペットを購入して直接召喚 |
| `/bigwolf storeall` | 自分の全ペットを収納 |
| `/bigwolf version` | バージョン情報を表示 |
| `/bigwolf dead` | 死亡したペット一覧を表示 |
| `/bigwolf revive <番号>` | 死亡したペットを復活（50pt） |
| `/bigwolf history` | ペット履歴を表示 |
| `/bigwolf locate <番号>` | ペットの最終位置を確認 |

### OP専用コマンド

| コマンド | 説明 |
|---------|------|
| `/bigwolf reload` | 設定をリロード |
| `/bigwolf item <種類>` | アイテムを配布 |
| `/bigwolf exp <mob> [variant]` | 実験的にペットを直接召喚（無料） |
| `/bigwolf shop <mob> [variant] [cost] [yaw]` | ショップMOBを設置 |
| `/bigwolf shopremove` | 視線の先のショップMOBを削除 |
| `/bigwolf shopremoveall` | 全ショップMOBを削除（確認必須） |
| `/bigwolf force_store` | 視線の先のペットを強制収納 |
| `/bigwolf force_storeall <player>` | 指定プレイヤーの全ペットを強制収納 |
| `/bigwolf history <player>` | 指定プレイヤーのペット履歴を表示 |

---

### `/bigwolf reload`

設定ファイルをリロードします。

**使用例**:

```
/bigwolf reload
```

**用途**:

- config.ymlを編集した後
- ペットのステータス設定を変更した後
- 価格設定を変更した後

**注意**: プラグイン全体の再起動ではなく、設定のみリロード

---

### `/bigwolf item <種類>`

OP専用アイテムを配布します。

#### サブコマンド一覧

| コマンド | 説明 |
|---------|------|
| `/bigwolf item food` | 魔法のペットフード（レベルアップ用） |
| `/bigwolf item brush` | ペットブラシ（愛情表現用） |
| `/bigwolf item treat` | ペットのおやつ（体力回復用） |
| `/bigwolf item toys` | 全種類のおもちゃセット |
| `/bigwolf item skillbook` | 全スキルブック（Lv.1〜3） |
| `/bigwolf item skillbook1` | スキルブックLv.1（咆哮の書）のみ |
| `/bigwolf item skillbook2` | スキルブックLv.2（突進の書）のみ |
| `/bigwolf item skillbook3` | スキルブックLv.3（極意の書）のみ |
| `/bigwolf item all` | 全アイテム |

**用途**:

- イベント景品の配布
- プレイヤーへの報酬
- テスト・デバッグ

---

### `/bigwolf exp <mob名> [variant]`

実験的にペットを直接召喚します（ポイント消費なし）。

**使用例**:

```
/bigwolf exp wolf
/bigwolf exp cat siamese
/bigwolf exp parrot blue
```

**用途**:

- テスト・デバッグ
- イベント用ペット配布
- 特別報酬

**注意**:

- 直接プレイヤーの位置に召喚されます
- 3匹制限は適用されます
- 購入履歴には記録されません

---

## ショップシステム

ワールド内に購入用ショップMOBを設置できます。プレイヤーはこのMOBをクリックして購入できます。

### `/bigwolf shop <mob名> [variant] [cost] [yaw]`

ショップMOBを設置します。

**パラメータ**:

- `<mob名>`: 販売するペットの種類（必須）
- `[variant]`: バリアント（オプション）
- `[cost]`: 価格（オプション、デフォルト: 100）
- `[yaw]`: 向き（度数、オプション、省略時は実行者の向き）

**使用例**:

```
/bigwolf shop wolf
/bigwolf shop cat tabby 150
/bigwolf shop parrot red 200 90
```

**ショップMOBの特徴**:

- ✅ **無敵**: ダメージを受けない
- ✅ **AI無効**: 動かない、攻撃しない
- ✅ **持続性**: サーバー再起動後も残る
- ✅ **クリック購入**: プレイヤーがクリックで購入画面を開ける

**設置手順**:

1. 設置したい場所に立つ
2. ショップMOBを向けたい方向を向く
3. コマンドを実行
4. ショップMOBが足元に出現

### `/bigwolf shopremove`

視線の先のショップMOBを削除します。

**使用方法**:

1. 削除したいショップMOBを見る（15ブロック以内）
2. コマンドを実行

### `/bigwolf shopremoveall`

全ワールドの全ショップMOBを削除します（確認必須）。

**使用方法**:

1. 1回目の実行: 確認メッセージが表示される
2. 15秒以内に再度実行: 全削除が実行される
3. 15秒経過: 確認がリセットされる

**⚠️ 警告**:

- この操作は取り消せません
- 全ワールドの全ショップMOBが削除されます
- 慎重に使用してください

---

## 強制収納機能

他のプレイヤーのペットを強制的に収納できます。

### `/bigwolf force_store`

視線の先のペットを強制収納します。

**使用方法**:

1. 収納したいペットを見る（15ブロック以内）
2. コマンドを実行
3. ペットがスポーンエッグ化され、実行者のインベントリに入る

**用途**:

- 放置されたペットの整理
- トラブル対応
- ワールド編集前のペット退避

### `/bigwolf force_storeall <player>`

指定プレイヤーの全ペットを強制収納します。

**使用例**:

```
/bigwolf force_storeall PlayerName
```

**用途**:

- プレイヤーのペットを一括管理
- 緊急時の対応
- サーバーメンテナンス前の整理

---

## ペットデータ管理

### データ保存場所

ペットデータは以下の場所にプレイヤーごとに保存されます：

```
plugins/OyasaiPets/players/
  <プレイヤーUUID>/
    001_WOLF_pale.json
    002_CAT_tabby.json
    003_AXOLOTL_blue.json
```

### JSONファイルの構造

各ペットのJSONファイルには以下の情報が含まれます：

- `petId`: ペットの一意ID
- `petNumber`: プレイヤーごとの連番
- `type`: ペットの種類
- `variant`: バリアント
- `customName`: カスタム名
- `purchasedAt`: 購入日時
- `status`: ステータス（alive/dead/stored）
- `lastLocation`: 最終位置
- `deathData`: 死亡データ（死亡時のみ）
- `stats`: 統計情報
- `skillType`: 現在のスキル
- `skillUnlockedLevel`: アンロック済みスキルレベル
- `foodLevel`: フードレベル

### プレイヤーのペット履歴確認

OPは他のプレイヤーのペット履歴を確認できます：

```
/bigwolf history <player>
```

---

## 設定ファイル

### config.yml の構造

```yaml
economy:
  foodPointCost: 100     # フードのコスト

pets:
  maxFoodLevel: 50       # 最大レベル
  wolf:                  # ペット種別ごとの設定
    baseSpeed: 0.6       # 初期速度
    maxSpeed: 1.2        # 最大速度
    jumpPower: 0.6       # ジャンプ力
    scaleMin: 1.5        # 初期サイズ
    scaleMax: 2.5        # 最大サイズ
  # ... 他のペット設定

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
  # 交配能力値パラメータ
  randomMin: 0.95        # ランダム係数の最小値（95%）
  randomMax: 1.10        # ランダム係数の最大値（110%）
  mutationChance: 0.05   # 突然変異の確率（5%）
  mutationBoost: 1.1     # 突然変異時のブースト倍率（1.1倍）
  genBonusPerGen: 0.01   # 世代ごとのボーナス（1%/世代）
  genBonusMax: 0.20      # 世代ボーナスの上限（20%）
  statCap: 1.5           # 能力値の上限（1.5倍=150%）
  bonusLevelPerGen: 1    # 世代ごとの初期レベルボーナス（1Lv/世代）
  bonusLevelMax: 10      # 初期レベルボーナスの上限（10Lv）

play:
  levelUpChance: 0.05    # 遊びでレベルアップする確率（5%）
  levelUpMaxLevel: 10    # 遊びでレベルアップできる最大レベル
```

### 設定のカスタマイズ

#### 価格設定の変更

```yaml
shop:
  defaultCost: 200       # 購入価格を200ptに

economy:
  foodPointCost: 50      # レベルアップを50ptに

revive:
  cost: 100              # 復活コストを100ptに

recover:
  cost: 300              # エッグ再取得を300ptに
```

#### ペット性能の調整

```yaml
pets:
  wolf:
    baseSpeed: 0.8       # 速度を上げる
    maxSpeed: 1.5
    jumpPower: 0.8       # ジャンプ力を上げる
    scaleMin: 2.0        # サイズを大きく
    scaleMax: 3.0
```

#### 交配システムの調整

**より強力なペットを作りやすくする場合:**

```yaml
breed:
  randomMin: 0.98        # ランダム性を減らす（98%〜115%）
  randomMax: 1.15
  mutationChance: 0.10   # 突然変異を10%に増加
  mutationBoost: 1.2     # 突然変異時のブースト1.2倍に
  genBonusPerGen: 0.02   # 世代ボーナスを2%/世代に
  genBonusMax: 0.30      # 世代ボーナス上限を30%に
  statCap: 2.0           # 能力値上限を200%に
  bonusLevelPerGen: 2    # 世代ごとに2レベルボーナス
  bonusLevelMax: 20      # 初期レベル最大20まで
```

**バランス重視の場合（デフォルト推奨）:**

```yaml
breed:
  randomMin: 0.95        # 95%〜110%のランダム性
  randomMax: 1.10
  mutationChance: 0.05   # 5%の確率で突然変異
  mutationBoost: 1.1     # 1.1倍ブースト
  genBonusPerGen: 0.01   # 1%/世代のボーナス
  genBonusMax: 0.20      # 最大20%
  statCap: 1.5           # 上限150%
  bonusLevelPerGen: 1    # 1レベル/世代
  bonusLevelMax: 10      # 最大10レベル
```

**ハードモード（育成難易度高）:**

```yaml
breed:
  randomMin: 0.90        # より大きなランダム性（90%〜110%）
  randomMax: 1.10
  mutationChance: 0.02   # 突然変異は2%のみ
  mutationBoost: 1.05    # 1.05倍の小さなブースト
  genBonusPerGen: 0.005  # 0.5%/世代の小さなボーナス
  genBonusMax: 0.10      # 最大10%まで
  statCap: 1.3           # 上限130%に制限
  bonusLevelPerGen: 0    # 初期レベルボーナスなし
  bonusLevelMax: 0
```

#### 交配クールダウンの調整

```yaml
breed:
  minLevel: 20           # 交配可能レベルを20に引き上げ
  cooldownHours: 48      # クールダウンを48時間に延長
```

または

```yaml
breed:
  minLevel: 5            # 交配可能レベルを5に引き下げ
  cooldownHours: 12      # クールダウンを12時間に短縮
```

### 設定反映

```
/bigwolf reload
```

---

## トラブルシューティング

### 問題1: ペットが消えた

**原因**: サーバークラッシュ、再起動

**解決策**:

1. `/bigwolf locate <番号>` で最終位置を確認
2. プレイヤーに`/bigwolf storeall`を事前に使用してもらう
3. 定期的なバックアップ推奨

### 問題2: ポイントが減らない

**原因**: TokenManagerとの連携エラー

**確認**:

```
/tm balance <player>
```

**解決策**:

1. TokenManagerが正常に動作しているか確認
2. サーバーログを確認
3. 両プラグインを最新版に更新

### 問題3: ペットが召喚できない

**原因**: 保護プラグインによる制限

**確認**:

- WorldGuardの`mob-spawning`フラグ
- 他の保護プラグインの設定

**解決策**: 該当エリアでペット召喚を許可

### 問題4: ショップMOBが消える

**原因**: 他プラグインによるMOB削除

**解決策**:

1. MobClearなどのプラグインの除外設定
2. エンティティ管理プラグインの設定確認

### 問題5: 設定が反映されない

**解決策**:

```
/bigwolf reload
```

### 問題6: プレイヤーのペットが多すぎる

**解決策**:

```
/bigwolf force_storeall <player>
```

### 問題7: プレイヤーが他人のペットを使おうとしている

**回答**: 仕様です。ペットは購入した本人のみが使用できます。譲渡はできません。

### 問題8: 死亡したペットを確認したい

**解決策**:

```
/bigwolf history <player>
```

ステータスが「死亡」のペットを確認できます。

---

## 権限管理

### 現在の権限システム

- **OP**: すべての管理コマンド使用可能
- **非OP**: プレイヤー向けコマンドのみ

---

## 運用ベストプラクティス

### 1. 定期メンテナンス

```
# 毎週実施推奨
1. 放置ペットの確認と整理
2. ショップMOBの状態確認
3. プレイヤーからのフィードバック収集
```

### 2. イベント運営

```
# ペットイベント用
1. /bigwolf item all でテストアイテム入手
2. /bigwolf exp <mob> で景品ペット配布
3. /bigwolf shop でショップ設置
```

### 3. サーバーメンテナンス前

```
# メンテナンス前にアナウンス
1. プレイヤーに /bigwolf storeall を推奨
2. 必要に応じて /bigwolf force_storeall で強制収納
```

### 4. バックアップ

```
# バックアップ対象
plugins/OyasaiPets/
├── config.yml         # 設定ファイル
└── players/           # ペットデータ（重要）
```

---

## 📞 サポート

問題が解決しない場合は、プラグイン開発者にお問い合わせください。
