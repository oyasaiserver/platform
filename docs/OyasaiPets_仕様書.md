# OyasaiPets (BigWolf) 仕様書

> ソースコード (`OyasaiPetsUnified.kt`) を唯一の根拠として作成。

---

## 目次

1. [概要](#%E6%A6%82%E8%A6%81)
1. [依存関係](#%E4%BE%9D%E5%AD%98%E9%96%A2%E4%BF%82)
1. [ペット種類一覧](#%E3%83%9A%E3%83%83%E3%83%88%E7%A8%AE%E9%A1%9E%E4%B8%80%E8%A6%A7)
1. [ペットカテゴリ](#%E3%83%9A%E3%83%83%E3%83%88%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA)
1. [ペットデータ仕様](#%E3%83%9A%E3%83%83%E3%83%88%E3%83%87%E3%83%BC%E3%82%BF%E4%BB%95%E6%A7%98)
1. [ペット状態](#%E3%83%9A%E3%83%83%E3%83%88%E7%8A%B6%E6%85%8B)
1. [コマンド一覧 (プレイヤー)](#%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E4%B8%80%E8%A6%A7-%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC)
1. [コマンド一覧 (OP 専用)](#%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E4%B8%80%E8%A6%A7-op%E5%B0%82%E7%94%A8)
1. [GUI 一覧](#gui%E4%B8%80%E8%A6%A7)
1. [アイテム一覧](#%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E4%B8%80%E8%A6%A7)
1. [スキルシステム](#%E3%82%B9%E3%82%AD%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [パーティクルシステム](#%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%82%AF%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [おもちゃシステム](#%E3%81%8A%E3%82%82%E3%81%A1%E3%82%83%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [経済システム](#%E7%B5%8C%E6%B8%88%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [交配システム](#%E4%BA%A4%E9%85%8D%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [性質システム (定型/非定型)](#%E6%80%A7%E8%B3%AA%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-%E5%AE%9A%E5%9E%8B%E9%9D%9E%E5%AE%9A%E5%9E%8B)
1. [譲渡システム](#%E8%AD%B2%E6%B8%A1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [収納システム](#%E5%8F%8E%E7%B4%8D%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [ショップシステム](#%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)
1. [データ保存形式](#%E3%83%87%E3%83%BC%E3%82%BF%E4%BF%9D%E5%AD%98%E5%BD%A2%E5%BC%8F)
1. [config.yml 設定値](#configyml-%E8%A8%AD%E5%AE%9A%E5%80%A4)

---

## 概要

- プラグイン名：**OyasaiPets (BigWolf)**
- コマンド：`/bigwolf`, `/bigwolfop`
- 通貨：**TokenManager** のトークン（以下「pt」）
- 同時召喚上限：**3 匹**
- ペットはプレイヤーが騎乗して操作する MOB エンティティ
- ペットデータは JSON ファイルでサーバー上に永続化される

---

## 依存関係

| 依存 | 必須 | 説明 | |------|------|------| | TokenManager | 必須 |
経済システム。不在時はプラグイン無効化 |

---

## ペット種類一覧

公式サポートペット（`PetRegistry.officialPets`）:

| EntityType | 日本語名 | カテゴリ | baseSpeed | maxSpeed | jumpPower | スケール範囲 | おもちゃ素材
| おもちゃ名 | おもちゃタイプ |
|------------|---------|---------|-----------|----------|-----------|------------|------------|------------|-------------|
| WOLF | オオカミ | LAND | 0.6 | 1.2 | 0.6 | 1.5〜2.5 | BONE | 骨のおもちゃ | THROW_FETCH |
| CAT | ネコ | LAND | 0.7 | 1.3 | 0.9 | 1.2〜2.2 | FISHING_ROD | 猫じゃらし |
FISHING_ROD | | FOX | キツネ | LAND | 0.7 | 1.3 | 0.7 | 1.5〜2.5 | SWEET_BERRIES |
ベリーのおもちゃ | THROW_FETCH | | RABBIT | ウサギ | LAND | 0.6 | 1.2 | 0.8 | 1.5〜2.5 |
CARROT | ニンジン | THROW_FETCH | | PANDA | パンダ | LAND | 0.4 | 0.8 | 0.5 | 2.0〜3.0 |
BAMBOO | 竹 | THROW_FETCH | | POLAR_BEAR | シロクマ | LAND | 0.5 | 1.0 | 0.6 |
2.5〜3.5 | COD | 魚 | THROW_FETCH | | ARMADILLO | アルマジロ | LAND | 0.5 | 1.0 | 0.5 |
1.2〜2.2 | SPIDER_EYE | クモの目 | THROW_FETCH | | DOLPHIN | イルカ | WATER | 0.5 | 1.0
| - | 1.2〜2.2 | PUFFERFISH | フグ風船 | BALLOON_JUMP | | AXOLOTL | ウーパールーパー | WATER
| 0.5 | 1.0 | - | 1.0〜2.0 | TROPICAL_FISH_BUCKET | お魚バケツ | THROW_FETCH | | FROG
| カエル | WATER | 0.5 | 1.0 | 1.2 | 1.0〜2.0 | SLIME_BALL | スライムボール | THROW_FETCH |
| PUFFERFISH | フグ | WATER | 0.4 | 0.8 | - | 1.0〜2.0 | KELP | 昆布 | THROW_FETCH |
| TURTLE | カメ | WATER | 0.3 | 0.7 | - | 1.5〜2.5 | SEAGRASS | 海草 | THROW_FETCH |
| PARROT | オウム | FLYING | 0.5 | 1.0 | - | 1.0〜2.0 | WHEAT_SEEDS | 種のおもちゃ |
THROW_FETCH | | CHICKEN | ニワトリ | FLYING | 0.4 | 0.9 | - | 1.5〜2.5 | MELON_SEEDS
| スイカの種 | THROW_FETCH | | BEE | ミツバチ | FLYING | 0.6 | 1.1 | - | 1.0〜2.0 |
HONEY_BOTTLE | ハチミツ | THROW_FETCH | | ALLAY | アレイ | FLYING | 0.6 | 1.2 | - |
1.0〜2.0 | AMETHYST_SHARD | キラキラ | THROW_FETCH |

※ jumpPower はデフォルト 0.5。水棲・飛行型には地上ジャンプがないため実質不使用の場合あり。 ※ RABBIT と CHICKEN は最大体力が
20 に強制設定される（デフォルトが低すぎるため）。

### バリアント一覧

| ペット | バリアント | |--------|-----------| | WOLF | pale, spotted, snowy, black,
ashen, rusty, woods, chestnut, striped など（Registry から動的取得） | | CAT | tabby,
tuxedo, red, siamese, british_shorthair, calico, persian, ragdoll, white,
jellie, all_black など | | FOX | RED（アカギツネ）, SNOW（ホッキョクギツネ） | | RABBIT | BROWN,
WHITE, BLACK, WHITE_SPLOTCHED, GOLD, SALT, TOAST | | AXOLOTL | LUCY（ピンク）,
WILD（茶色）, GOLD（金色）, CYAN（水色）, BLUE（青色）| | PARROT | RED_BLUE, BLUE, GREEN,
YELLOW_BLUE, GRAY | | PANDA | NORMAL, LAZY, WORRIED, PLAYFUL, BROWN, WEAK,
AGGRESSIVE | | FROG | TEMPERATE（温帯）, WARM（暖かい）, COLD（寒い）|

---

## ペットカテゴリ

| カテゴリ | 挙動 | |---------|------| | LAND | 水中で速度 30% に低下（スキル 3 使用時を除く） | | WATER
| 水中で速度×1.2、陸上で速度×0.6（TURTLE は陸上×0.3） | | FLYING |
ジャンプキーで上昇（速度×jumpMultiplier）、離すと降下（y=-0.15）。スキル 3(ホバリング)ON 時は y=0 固定 |

---

## ペットデータ仕様

各ペットは以下のデータを持つ（JSON ファイルおよびエンティティの PersistentDataContainer に保存）:

| フィールド | 説明 | |-----------|------| | petId | UUID（一意識別子） | | petNumber |
オーナーごとの通し番号（1 から） | | type | EntityType 名（例：WOLF） | | variant | バリアント名（null =
デフォルト） | | customName | ペット表示名 | | purchasedAt | 購入日時（ISO 形式） | | status | ALIVE
/ DEAD / STORED | | lastLocation | 最終確認位置（ワールド名，x, y, z） | | deathData |
死亡日時と死亡位置 | | stats.distance | 騎乗移動距離（メートル） | | stats.jumps | ジャンプ回数 | |
stats.toys | おもちゃで遊んだ回数 | | stats.brushes | なでた回数 | | stats.treats | おやつを与えた回数 |
| foodLevel | レベル（0〜maxFoodLevel、デフォルト最大 50） | | skillType |
セットスキル番号（0=なし，1=咆哮，2=突進，3=特殊） | | skillUnlockedLevel | 解放済みスキル上限（0〜3） | |
particleUnlocked | 解放済みパーティクル ID のカンマ区切り文字列 | | originalOwner | 初代オーナーUUID | |
transferHistory | 譲渡履歴リスト | | breedInfo | 交配情報（parent1Id, parent2Id, generation）
| | breedCount | このペットの交配回数（上限 maxBreedCount=3） | | temperament |
"typical"（定型）または "atypical"（非定型）|

### デフォルトペット名

購入時：`{プレイヤー名}の{バリアント日本語名}{MOB日本語名} #{通し番号}` 例：`Playerのトラネコ #1`

---

## ペット状態

| 状態 | 説明 | |------|------| | ALIVE | ワールドに召喚中 | | STORED | スポーンエッグアイテムとして収納中 |
| DEAD | 死亡（復活待ち） |

---

## コマンド一覧 (プレイヤー)

コマンド名：`/bigwolf`

| サブコマンド | 引数 | 説明 | コスト | |------------|------|------|--------| | `menu` | - |
メインメニュー GUI を開く | 無料 | | `buy` | - | ペットショップ GUI を開く | 無料 | |
`buy <MOB> [variant]` | MOB 名、バリアント名（任意） | 指定ペットの購入確認画面を開く | 購入時消費 | | `list` |
\- | 購入可能なペット一覧を表示 | 無料 | | `storeall` | - | 自分の全ペットをアイテムに収納 | 無料 | | `dead` | -
| 死亡したペット一覧を表示 | 無料 | | `revive <番号>` | ペット番号 | 死亡ペットを復活させる | reviveCost
pt（デフォルト 50） | | `breed` | - | 交配 GUI を開く | 交配時消費 | | `rename <番号> <名前>` |
ペット番号、新しい名前（最大 32 文字） | 召喚中ペットの名前を変更（ペットを召喚中が必要） | 無料 | |
`transfer <番号> <プレイヤー名>` | ペット番号、譲渡先プレイヤー名 | 召喚中ペットを別プレイヤーに譲渡（2 回実行で確定、有効期限 30
秒） | 無料 | | `history [ページ]` | ページ番号（任意、デフォルト 1） | 全ペット履歴を表示（10 匹/ページ） | 無料 | |
`locate <番号>` | ペット番号 | ペットの最終確認位置を表示 | 無料 | | `recover <番号>` | ペット番号 |
収納中ペットのスポーンエッグを再取得 | recoverCost pt（デフォルト 100） | | `version` | - | プラグインバージョンを表示
| 無料 |

### タブ補完

- `buy` の第 2 引数：公式ペット名一覧
- `buy <MOB>` の第 3 引数：その MOB のバリアント名一覧
- `revive`, `locate`, `recover`, `transfer` の第 2 引数：1〜10 の番号候補
- `transfer` の第 3 引数：オンラインプレイヤー名
- `history` の第 2 引数：1〜5 のページ番号候補

---

## コマンド一覧 (OP 専用)

コマンド名：`/bigwolfop`（OP 権限が必要）

| サブコマンド | 引数 | 説明 | |------------|------|------| | `version` | - | バージョン表示 | |
`reload` | - | config.yml をリロード | | `item <種類>` | 下表参照 | アイテムを自分に配布 | |
`exp <MOB> [variant]` | MOB 名、バリアント（任意） | 実験的召喚（公式外 MOB も可） | |
`shop <MOB> [variant] [cost] [yaw]` | MOB 名、バリアント、価格（pt）、向き角度 | ショップ MOB を現在地に設置
| | `shopremove` | - | 10m 以内の最近接ショップ MOB を削除 | | `shopremoveall` | - |
全ワールドのショップ MOB を削除（15 秒以内に 2 回実行で確定） | | `force_store` | - |
視線先のペットを強制収納して自分のインベントリへ | | `force_storeall <プレイヤー名>` | プレイヤー名 |
指定プレイヤーの全召喚中ペットを強制回収 | | `history <プレイヤー名> [ページ]` | プレイヤー名、ページ番号（任意） |
他プレイヤーのペット履歴を表示 | | `spawn_ai <on\|off\|status>` | on / off / status | ペットスポーン時
AI の ON/OFF 切替・状態確認 | | `reset_speed [all]` | all（任意） | 全ペットの移動速度をデフォルトに戻す |

### `/bigwolfop item` の種類

| 種類 | 配布物 | |------|--------| | `food` | 魔法のペットフード ×1 | | `brush` | ペットブラシ ×1 |
| `treat` | ペットのおやつ ×1 | | `heal` | ヒールポーション ×1 | | `toys` | 全公式ペット用おもちゃセット | |
`skillbook` | 咆哮の書 + 突進の書 + 極意の書 各 1 冊 | | `skillbook1` | 咆哮の書 ×1 | |
`skillbook2` | 突進の書 ×1 | | `skillbook3` | 極意の書 ×1 | | `particle` | パーティクルの結晶（ID
5〜10）各 1 個 | | `all` | 上記全て |

---

## GUI 一覧

### メインメニュー (`★ BigWolf メインメニュー`)

27 スロット。各ボタンからコマンドと同等の操作が可能。

| スロット | 素材 | 機能 | |--------|------|------| | 10 | CHEST | 全ペット収納（`storeall`相当）
| | 11 | SKELETON_SKULL | 死亡ペット一覧表示 | | 12 | BOOK | ペット履歴表示 | | 13 |
HEART_OF_THE_SEA | 交配画面を開く | | 14 | TOTEM_OF_UNDYING | `revive`コマンドの案内表示 | | 15
| EGG | `recover`コマンドの案内表示 | | 16 | COMPASS | `locate`コマンドの案内表示 | | 22 | BARRIER
| 閉じる |

### ペットステータス GUI (`ペットステータス`)

9 スロット。ペットに素手で**Shift クリック**で開く。

| スロット | 素材 | 機能 | |--------|------|------| | 0 | NAME_TAG |
基本情報表示（名前・種類・性質・オーナー・体力）。クリックで名前変更コマンドをチャットに挿入 | | 1 | PAPER | 能力値・遊んだ記録・譲渡履歴表示
| | 2 | COOKED_BEEF | 食事・成長。クリックでフードを与える（foodPointCost pt 消費） | | 3 | IRON_SWORD
/ BARRIER | スキル設定。左クリックで順送り、右クリックで逆送り。未解放時は BARRIER | | 4 | BLAZE_POWDER |
エフェクト設定。クリックでパーティクル選択 GUI を開く | | 5 | LIME_WOOL / RED_WOOL | マナーモード切替（サイレントモード）
| | 6 | CHEST | 収納（アイテム化してインベントリに戻す） | | 7 | PLAYER_HEAD | 譲渡。クリックで transfer
コマンドをチャットに挿入 | | 8 | BARRIER | 閉じる |

### パーティクル選択 GUI (`パーティクル選択`)

27 スロット。

- スロット 0〜4: デフォルトパーティクル（常時選択可能）
- スロット 9〜14: アンロック可能パーティクル（未解放は`???`として表示）
- スロット 26: 戻る（ペットステータス GUI へ）

### ペットショップ GUI (`★ ペットショップ`)

54 スロット。公式ペットのスポーンエッグが一覧表示される。 クリックでバリアント選択 GUI または購入確認 GUI へ。 スロット 49
に所持ポイント表示アイテム。

### バリアント選択 GUI (`{MOB名} のバリアント選択`)

各バリアントのスポーンエッグ + デフォルトオプション + 戻るボタン。

### 購入確認 GUI (`購入確認`)

27 スロット。

| スロット | 素材 | 機能 | |--------|------|------| | 10 | スポーンエッグ | 購入対象・価格・所持ポイント表示 |
| 13 | PAPER | ステータス（baseSpeed, maxSpeed, jumpPower, scale 範囲）| | 16 |
EMERALD_BLOCK | 購入確定（ポイント消費→即スポーン・騎乗） | | 22 | BARRIER | キャンセル |

### 交配 GUI (`★ 交配するペットを選択`)

27 スロット。

- スロット 0〜17: 交配可能ペット（Lv.breedMinLevel 以上）一覧（最大 18 匹）
- スロット 18: 親 1 選択状態表示
- スロット 20: 親 2 選択状態表示
- スロット 22: 交配手順説明
- スロット 26: 交配実行ボタン（緑ウール）

---

## アイテム一覧

### ペットフード（魔法のペットフード）

- 素材：COOKED_BEEF
- 使用：ペットに右クリック → レベルアップ（foodPointCost pt 消費）
- アイテムは消費しない（減らない）

### ペットブラシ（ペットブラシ）

- 素材：BRUSH
- 使用：ペットに右クリック → なでる（brushes+1、ハートパーティクル、猫の鳴き声）
- クールダウン：5 秒
- 遊びレベルアップ判定あり

### ペットのおやつ（ペットのおやつ）

- 素材：COOKIE
- 使用：ペットに右クリック → treats+1、体力 +2 回復
- 1 個消費
- 遊びレベルアップ判定あり

### ヒールポーション（ヒールポーション）

- 素材：GOLDEN_APPLE
- 使用：ペットに右クリック → 体力を healItemAmount（デフォルト 10）回復
- 1 個消費

### スキルブック（咆哮の書 / 突進の書 / 極意の書）

- 素材：BOOK
- レベル 1（咆哮）: コスト skillBookCostLv1（デフォルト 50pt）
- レベル 2（突進）: コスト skillBookCostLv2（デフォルト 100pt）
- レベル 3（極意）: コスト skillBookCostLv3（デフォルト 150pt）
- 使用：ペットに右クリック → スキル解放（順番通りに解放が必要）
- 1 個消費

### パーティクルの結晶

- 素材：パーティクル ID ごとに異なる（下表）
- 使用：ペットに右クリック → 対応パーティクルをアンロック（1 個消費）
- 対象：ID 5〜10（デフォルト 0〜4 は常時解放済み）

### おもちゃ（各ペット専用）

| おもちゃ名 | 素材 | 対象 | 投げ方 | |----------|------|------|--------| | 骨のおもちゃ | BONE |
WOLF | 右クリック投擲 | | 猫じゃらし | FISHING_ROD | CAT | 釣りキャスト | | ベリーのおもちゃ |
SWEET_BERRIES | FOX | 右クリック投擲 | | フグ風船 | PUFFERFISH | DOLPHIN | 右クリック（浮遊型） | |
お魚バケツ | TROPICAL_FISH_BUCKET | AXOLOTL | 右クリック投擲 | | スライムボール | SLIME_BALL | FROG
| 右クリック投擲 | | 種のおもちゃ | WHEAT_SEEDS | PARROT | 右クリック投擲 | | スイカの種 | MELON_SEEDS |
CHICKEN | 右クリック投擲 | | ハチミツ | HONEY_BOTTLE | BEE | 右クリック投擲 | | キラキラ |
AMETHYST_SHARD | ALLAY | 右クリック投擲（重力なし） | | ニンジン | CARROT | RABBIT | 右クリック投擲 | |
竹 | BAMBOO | PANDA | 右クリック投擲 | | 魚 | COD | POLAR_BEAR | 右クリック投擲 | | 昆布 | KELP |
PUFFERFISH | 右クリック投擲 | | 海草 | SEAGRASS | TURTLE | 右クリック投擲 | | クモの目 | SPIDER_EYE
| ARMADILLO | 右クリック投擲 |

---

## スキルシステム

### スキル概要

| スキル番号 | 名前 | 発動方法 | 効果 | クールダウン |
|----------|------|---------|------|------------| | 0 | なし | - | スキル未設定 | - | |
1 | 咆哮 (Roar) | 騎乗中に左クリック | 半径 8m 以内の生物を吹き飛ばし（速度 1.5 倍 + 上昇、ダメージ 2）、エンダードラゴンの咆哮音
| 5 秒 | | 2 | 突進 (Dash) | 騎乗中に左クリック | 前方高速移動（乗算 4.0、上昇 0.6）、0.8 秒間持続 | 5 秒 | | 3
| 特殊 (Special) | 騎乗中に左クリック（トグル式） | 飛行型→ホバリング（空中静止）、水棲型→水面走行（速度×2.5） | なし（トグル） |

### スキル解放フロー

1. 「咆哮の書」をペットに使用 → スキル 1 解放（50pt）
1. 「突進の書」をペットに使用 → スキル 2 解放（100pt）
1. 「極意の書」をペットに使用 → スキル 3 解放（150pt）
1. ペット GUI の剣アイコンをクリックしてセットするスキルを切り替え

---

## パーティクルシステム

### パーティクル種類

| ID | 名前 | 素材（アイテム/GUI） | Minecraft パーティクル | 解放方法 |
|----|------|------------------|--------------------|---------| | 0 | なし |
BARRIER | - | デフォルト解放済み | | 1 | 電気 | LIGHTNING_ROD | ELECTRIC_SPARK | デフォルト解放済み
| | 2 | 炎 | BLAZE_POWDER | FLAME | デフォルト解放済み | | 3 | 青炎 | SOUL_CAMPFIRE |
SOUL_FIRE_FLAME | デフォルト解放済み | | 4 | ハート | RED_DYE | HEART | デフォルト解放済み | | 5 | 星
| NETHER_STAR | END_ROD | パーティクルの結晶 | | 6 | 音符 | NOTE_BLOCK | NOTE | パーティクルの結晶 |
| 7 | 雪 | SNOWBALL | SNOWFLAKE | パーティクルの結晶 | | 8 | 桜 | CHERRY_LEAVES |
CHERRY_LEAVES | パーティクルの結晶 | | 9 | エンド | ENDER_PEARL | PORTAL | パーティクルの結晶 | | 10
| スライム | SLIME_BALL | ITEM_SLIME | パーティクルの結晶 |

- 騎乗中に移動しているとき、または突進スキル使用中に周期的にスポーン

---

## おもちゃシステム

### THROW_FETCH（投げて取ってこい）

1. 右クリックでおもちゃアイテムを投擲（1 個消費）
1. 15m 以内の対象ペットが向かって走る
1. 拾ったらプレイヤーに返却しにくる（10 秒でタイムアウト）
1. statToys +1

### FISHING_ROD（猫じゃらし・ネコ専用）

1. 釣竿をキャストでネコがジャンプ
1. 前方 6m 付近にジャンプさせる
1. statToys +1

### BALLOON_JUMP（風船ジャンプ・イルカ専用）

1. 右クリックでフグ風船を斜め上に放出（重力なし、光る）
1. 15m 以内のイルカが風船を追いかける
1. 水面付近でジャンプ（速度：水平 1.0, 垂直 0.9）
1. 風船に 2.5m 以内で当たれば成功、エフェクト再生
1. 10 秒（200tick）でタイムアウト
1. statToys +1

---

## 経済システム

- 通貨：TokenManager のトークン（「pt」と表示）
- 取得：`TMAPI.getTokens(playerUUID)`
- 消費：`TMAPI.removeTokens(playerUUID, amount)`

### コスト一覧（デフォルト値）

| 操作 | コスト | |------|--------| | ペット購入 | 100pt（defaultShopCost） | | フード 1
回（レベルアップ 1 回） | 100pt（foodPointCost） | | スキルブック Lv.1 | 50pt | | スキルブック Lv.2 |
100pt | | スキルブック Lv.3 | 150pt | | ペット復活 | 50pt（reviveCost） | | 交配 |
200pt（breedCost） | | スポーンエッグ再取得 | 100pt（recoverCost） |

---

## 交配システム

### 交配条件

- 自分のペットが 2 匹以上同時召喚中
- 両親ともレベル **breedMinLevel**（デフォルト 10）以上
- 両親が異なるペット（同じ petId は不可）
- 同時召喚数が上限（3 匹）未満（子供のスペースが必要）
- コスト：**breedCost**（デフォルト 200pt）
- 1 匹のペットが交配できる最大回数：**maxBreedCount**（デフォルト 3 回）

### 能力値の遺伝計算

```
親の平均 = (parent1.speedMultiplier + parent2.speedMultiplier) / 2
ランダム係数 = breedRandomMin〜breedRandomMax の乱数（デフォルト 0.9〜1.1）
世代ボーナス = newGeneration × breedGenBonusPerGen（上限 breedGenBonusMax）
突然変異 = breedMutationChance（10%）の確率で breedMutationBoost（+0.15）加算

新しい能力値 = 親の平均 × ランダム係数 × 突然変異 + 世代ボーナス
上限: breedStatCap（デフォルト1.5）
```

### 世代ボーナスレベル

```
初期レベル = (newGeneration - 1) × breedBonusLevelPerGen
上限: breedBonusLevelMax（デフォルト5）
```

### バリアント遺伝

候補プールを重みで構築してランダム選択：

| 候補 | 重み | |------|------| | 親 1 のバリアント | breedParentVariantWeight（デフォルト 7） | |
親 2 のバリアント | breedParentVariantWeight（デフォルト 7） | | その他の各バリアント |
breedOtherVariantWeight（デフォルト 3）× 種類数 |

例（オオカミ 9 種、parent=7, other=3）: 親 1=20%, 親 2=20%, その他各約 8.6%

### 生成演出

- 上空 10 ブロックからプレイヤーの足元に降臨
- HEART / TOTEM_OF_UNDYING / FIREWORK パーティクル
- 非定型の場合は追加エフェクトと特別メッセージ

---

## 性質システム (定型/非定型)

### 性質の種類

| 性質 | 内部値 | 表示名 | |------|--------|--------| | 定型 | "typical" | 定型 | | 非定型 |
"atypical" | 非定型 ★ |

### 購入時の性質決定

- 基本確率：**atypicalBaseChance**（デフォルト 7%）で非定型

### 交配時の性質決定

| 親の組み合わせ | 非定型確率 | |-------------|-----------| | 両親とも定型 |
atypicalBaseChance（7%） | | 片親が非定型 | atypicalOneParentChance（15%） | | 両親とも非定型 |
atypicalBothParentChance（35%） |

### 非定型ペットの特典

| 項目 | 効果 | |------|------| | 遊びレベルアップ確率 | atypicalLevelUpBonus（デフォルト 1.5 倍） | |
親密度上昇倍率 | atypicalAffectionBonus（デフォルト 1.3 倍） |

### 非定型ペットの AI（ChildAISystem）

`childAiEnabled` が true の場合、オーナーが 30m 以内にいて乗っていない非定型ペットが自律行動する：

| アクション | 確率 | 内容 | |----------|------|------| | ジャンプ | 30% | ジャンプ +
HAPPY_VILLAGER パーティクル | | 飼い主に近づく | 20% | 3〜15m 離れている場合に接近、HEART パーティクル | |
周囲を探索 | 20% | ランダム方向に移動、END_ROD パーティクル | | 鳴き声 | 15% | 種族に応じた鳴き声サウンド | | くるくる回る
| 15% | 10tick（0.5 秒）で 1 回転 |

アクション間隔：5〜15 秒のランダム

---

## 譲渡システム

- ペットを召喚中の状態でのみ実行可能
- 2 段階確認（30 秒以内に同じコマンドを 2 回実行）
- 譲渡すると：エンティティが削除され、スポーンエッグが相手のインベントリへ
- 新オーナーのペット番号は連番で振り直し
- 譲渡履歴（fromOwner, toOwner, timestamp）が記録される
- originalOwner は変更されない（初代オーナーを記録）

---

## 収納システム

### 収納（ペット → アイテム）

- ペット GUI の「収納する」またはコマンド `storeall`
- ペットエンティティをスポーンエッグアイテム化
- アイテムの PersistentDataContainer に全データを保存
- PetDataManager の status を `STORED` に更新
- エンティティは `remove()` される

### 解放（アイテム → ペット）

- スポーンエッグアイテムを右クリック（ブロック面、または空中）
- オーナーUUID が一致しない場合は拒否
- 同じ petId のペットが既に召喚中の場合は拒否（コピー防止）
- 同時召喚上限（3 匹）チェック
- スポーンエッグを 1 個消費

### 収納アイテムの表示内容（Lore）

```
右クリックで解放
オーナー: {名前}
性質: {定型/非定型 ★}
ID: {petIdの先頭8文字}...
記録:
  距離: {x.x} m
  ジャンプ: {n} 回
  おもちゃ: {n} 回
  なでた: {n} 回
  おやつ: {n} 回
```

---

## ショップシステム

### ショップ MOB の設置

- `/bigwolfop shop <MOB> [variant] [cost] [yaw]` で設置
- AI 無効・無敵・ノックバック不可（ダメージイベントキャンセル）
- カスタム名：`★ {MOB名} ({variant}) - {cost}pt`
- PersistentDataContainer にタイプ・バリアント・コストを保存

### ショップ MOB へのインタラクション

- 右クリックで購入確認 GUI が開く
- 購入確認 GUI で「購入する」を押すと購入完了

---

## データ保存形式

### ファイルパス

```
plugins/BigWolf/players/{playerUUID}/{NNN}_{TYPE}[_{variant}].json
```

例：`players/550e8400-.../001_WOLF_pale.json`

### JSON フィールド（PetData）

```json
{
  "petId": "UUID 文字列",
  "petNumber": 1,
  "type": "WOLF",
  "variant": "pale",
  "customName": "Player の白色オオカミ #1",
  "purchasedAt": "2026-01-01T12:00:00",
  "status": "ALIVE",
  "lastLocation": { "world": "world", "x": 0.0, "y": 64.0, "z": 0.0 },
  "deathData": null,
  "stats": {
    "distance": 0.0,
    "jumps": 0,
    "toys": 0,
    "brushes": 0,
    "treats": 0
  },
  "skillType": 0,
  "skillUnlockedLevel": 0,
  "foodLevel": 0,
  "originalOwner": null,
  "transferHistory": [],
  "breedInfo": null,
  "breedCount": 0,
  "particleUnlocked": "0,1,2,3,4"
}
```

---

## config.yml 設定値

| キー | デフォルト値 | 説明 | |------|------------|------| | `economy.foodPointCost` |
100 | フード 1 回のコスト（pt） | | `pets.maxFoodLevel` | 50 | ペットの最大レベル | |
`pets.spawnAiEnabled` | true | 召喚時に AI を有効にするか | |
`pets.freeRoamSpeedMultiplier` | 0.5 | 非騎乗時の陸上ペット速度倍率 | | `shop.defaultCost` |
100 | ペット購入デフォルト価格（pt） | | `skillbook.costLv1` | 50 | スキルブック Lv.1 コスト | |
`skillbook.costLv2` | 100 | スキルブック Lv.2 コスト | | `skillbook.costLv3` | 150 |
スキルブック Lv.3 コスト | | `revive.cost` | 50 | ペット復活コスト（pt） | | `recover.cost` | 100 |
エッグ再取得コスト（pt） | | `items.healAmount` | 10 | ヒールアイテムの回復量 | | `play.levelUpChance`
| 0.05 | 遊びでのレベルアップ確率（5%） | | `play.levelUpMaxLevel` | 10 | 遊びによるレベルアップの上限 | |
`breed.minLevel` | 10 | 交配に必要な最低レベル | | `breed.cost` | 200 | 交配コスト（pt） | |
`breed.maxCount` | 3 | 1 匹の最大交配回数 | | `breed.randomMin` | 0.9 | 能力値ランダム係数の下限 | |
`breed.randomMax` | 1.1 | 能力値ランダム係数の上限 | | `breed.genBonusPerGen` | 0.02 |
世代ごとの能力値ボーナス | | `breed.genBonusMax` | 0.2 | 世代ボーナスの上限 | |
`breed.mutationChance` | 0.1 | 突然変異の確率（10%） | | `breed.mutationBoost` | 0.15 |
突然変異による能力値追加 | | `breed.statCap` | 1.5 | 能力値の上限倍率 | | `breed.bonusLevelPerGen` |
1 | 世代ごとの初期レベルボーナス | | `breed.bonusLevelMax` | 5 | 初期レベルボーナスの上限 | |
`breed.variantWeights.parent` | 7 | 親のバリアントが選ばれる重み | |
`breed.variantWeights.other` | 3 | その他バリアントが選ばれる重み | |
`traits.atypicalBaseChance` | 0.07 | 購入時の非定型確率 | |
`traits.atypicalOneParentChance` | 0.15 | 片親非定型時の非定型確率 | |
`traits.atypicalBothParentChance` | 0.35 | 両親非定型時の非定型確率 | |
`traits.atypicalLevelUpBonus` | 1.5 | 非定型のレベルアップ確率倍率 | |
`traits.atypicalAffectionBonus` | 1.3 | 非定型の親密度上昇倍率 | | `traits.childAiEnabled`
| true | 非定型ペットの子供 AI 有効化 | | `pets.{mob}.baseSpeed` | MOB 依存 | 各ペットの baseSpeed
上書き | | `pets.{mob}.maxSpeed` | MOB 依存 | 各ペットの maxSpeed 上書き | |
`pets.{mob}.jumpPower` | MOB 依存 | 各ペットの jumpPower 上書き | | `pets.{mob}.scaleMin`
| MOB 依存 | 各ペットのスケール最小値上書き | | `pets.{mob}.scaleMax` | MOB 依存 | 各ペットのスケール最大値上書き
|

---

## システム定数

| 定数 | 値 | 説明 | |------|-----|------| | MAX_PET_COUNT | 3 | 同時召喚上限 | |
SKILL_COOLDOWN_MS | 5000ms | スキルクールダウン | | REMOVEALL_CONFIRM_TIMEOUT_MS |
15000ms | shopremoveall 確認タイムアウト | | PCD_VERSION（現在） | 3 |
PersistentDataContainer のバージョン |
