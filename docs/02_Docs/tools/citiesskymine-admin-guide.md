# CitiesSkyMine 管理者ガイド

> サーバー管理者・オペレーター向けの設定・権限・運用リファレンスです。

---

## 基本情報

```
プラグイン名:    CitiesSkyMine
バージョン:      0.2.0
API:            Paper 1.21.x
必須依存:       FastAsyncWorldEdit (FAWE)
任意依存:       LuckPerms, PlaceholderAPI
設定ファイル:    plugins/CitiesSkyMine/config.yml
プレイヤーデータ: plugins/CitiesSkyMine/playerdata/
```

---

## インストール

```
1. FastAsyncWorldEdit が導入済みであることを確認
2. CitiesSkyMine.jar を plugins/ に配置
3. サーバーを再起動（または /csm reload でホットリロード）
4. plugins/CitiesSkyMine/config.yml が自動生成される
```

> FAWE が見つからない場合、CitiesSkyMineは自動的に無効化されます。

---

## ロールベースアクセス制御

CitiesSkyMineは独自のロールベースアクセス制御システムを持っています。
LuckPerms等と組み合わせて使うことを想定しています。

### ロール階層

```
admin（アドミン）
  └─ takumi（たくみ）を継承
       └─ builder（建築士）を継承
```

上位ロールは下位ロールの全権限を自動的に含みます。

### ロール別アクセス権限

```
コマンド          builder    takumi    admin    備考
──────────────────────────────────────────────────────
road              ✓          ✓         ✓       実験的
intersection      ✓          ✓         ✓       実験的
facade            ✓          ✓         ✓       実験的
payload           ✗          ✓         ✓       実験的
load / load64     ✗          ✓         ✓       実験的
window            ✓          ✓         ✓
slabstairs        ✓          ✓         ✓
stack             ✓          ✓         ✓
selection         ✓          ✓         ✓
settings          ✓          ✓         ✓       個人設定GUI
config            ✗          ✗         ✓       server config編集
debugstick        ✗          ✓         ✓
preset            ✓          ✓         ✓
schematic         ✓          ✓         ✓
reload            ✗          ✗         ✓
```

> 「実験的」のコマンド（road / intersection / facade / payload）は一般ユーザーには未公開です。詳細は本ガイド末尾の「実験的コマンド」セクションを参照してください。

### ロールの付与方法

LuckPermsを使っている場合：

```
/lp user <プレイヤー> permission set citiesskymine.role.builder true
/lp user <プレイヤー> permission set citiesskymine.role.takumi true
/lp user <プレイヤー> permission set citiesskymine.role.admin true
```

グループに付与する場合：

```
/lp group builder permission set citiesskymine.role.builder true
/lp group takumi permission set citiesskymine.role.takumi true
```

### アクセス制御のバイパス

config.yml の `access` セクションで制御できます：

```yaml
access:
  enabled: true                    # false にするとロール制御が無効化（旧パーミッションのみ）
  op-bypass: true                  # OP は全コマンド使用可
  console-bypass: true             # コンソールは全コマンド使用可
  legacy-permissions-bypass: true  # 旧形式パーミッションでもアクセス可
```

---

## パーミッション一覧

ロール制御に加えて、旧形式のパーミッションノードも使えます。
`legacy-permissions-bypass: true`（デフォルト）の場合、これらのパーミッションがあればロールなしでもアクセスできます。

```
パーミッション                説明                              デフォルト
───────────────────────────────────────────────────────────────────────
citiesskymine.*              全権限                             op
citiesskymine.role.admin     アドミンロール                      op
citiesskymine.role.takumi    たくみロール                        false
citiesskymine.role.builder   建築士ロール                        false
citiesskymine.use            統合コマンドの使用（旧形式）         false
citiesskymine.admin          管理コマンドの使用（旧形式）         false
citiesskymine.road           道路生成コマンド（旧形式）           false
citiesskymine.build          建築生成コマンド（旧形式）           false
citiesskymine.payload        payload配置コマンド（旧形式）        false
citiesskymine.window         窓生成コマンド（旧形式）             false
citiesskymine.slabstairs     SlabStairs生成（旧形式）             false
citiesskymine.stack          選択範囲複製（旧形式）               false
citiesskymine.selection      選択保存（旧形式）                   false
citiesskymine.settings       個人設定GUI（旧形式）                false
citiesskymine.config         server config編集（旧形式）           false
citiesskymine.debugstick     debug-stick互換（旧形式）            false
citiesskymine.preset         ブラシプリセット（旧形式）            false
citiesskymine.schematic      スキマティック貼り付け（旧形式）      false
```

---

## config.yml リファレンス

### ブロック数上限

大規模な生成操作からサーバーを保護するための上限です。

```yaml
limits:
  max-blocks-csm: 2000000          # payload配置のブロック数上限
  max-source-blocks-csm: 2000000   # payload復元元のブロック数上限
  max-columns-csm: 100000          # payload柱数上限
  max-blocks-window: 512           # 窓生成のブロック数上限
  max-blocks-slab-stairs: 200000   # SlabStairs生成のブロック数上限
  max-blocks-stack: 2000000        # Stack複製のブロック数上限
  max-blocks-schematic: 500000     # schematic貼り付けのブロック数上限
  max-volume-schematic: 500000     # schematic範囲ボリューム上限
  max-schematic-file-bytes: 10485760 # schematicファイルサイズ上限
```

> 0 に設定すると上限なしになります。パフォーマンスに注意してください。

### 窓のデフォルト設定

```yaml
window:
  default-width: 2                 # デフォルト幅
  default-height: 3                # デフォルト高さ
  frame: IRON_TRAPDOOR             # フレーム素材
  glass: WHITE_STAINED_GLASS       # ガラス素材
  backing: DRIED_KELP_BLOCK        # 裏地素材
  fill-air-around-glass: true      # ガラス周辺の空気を自動埋め
  fill: SMOOTH_QUARTZ              # 空気埋め素材
  select-after-fill: true          # 生成後にWorldEdit選択を設定
```

### SlabStairsのデフォルト素材

```yaml
slab-stairs:
  material: stone_brick            # デフォルトの素材ファミリー
```

### Schematic

```yaml
schematic:
  select-after-paste: true         # 貼り付け後にWorldEdit選択を設定
```

スキマティックファイルは FAWE/WorldEdit の schematic 保存先に配置します。FAWE の per-player schematics が有効な場合は、実行したプレイヤーの UUID フォルダを参照します。`/.sc <name>` は `<name>.schem` または `<name>.schematic` を読み込みます。任意パス指定や上位ディレクトリ参照は許可されません。`/.sc list` は FAWE の `//schem list` をそのまま実行します。

### ブラシプリセット

```yaml
brush-preset:
  max-presets-per-player: 20       # プレイヤーごとの最大プリセット数
  max-command-length: 200          # コマンド文字列の最大長
  load-cooldown-ticks: 20          # ロード間のクールダウン（tick）
  allowed-commands:                # 保存を許可するコマンドのプレフィックス
    - "//br "
    - "//brush "
    - "//mask "
    - "//gmask "
```

### DebugStick

```yaml
debug-stick:
  enabled: true                    # 機能の有効/無効
  max-distance: 6.0                # ブロックまでの最大距離
  require-creative: false          # クリエイティブモード限定にするか
  apply-physics: false             # 物理更新を適用するか
  memory-persist: true             # プロパティ選択をサーバー再起動後も保持
```

### その他

```yaml
prefix: "<gray>[<gold>CitiesSkyMine</gold>]</gray> "   # メッセージ接頭辞（MiniMessage形式）
debug: false                                             # デバッグログの有効化
```

---

## アーキテクチャ（モジュール構成）

```
icu.oyasai.citiesskymine/
├── Main.kt                    メインプラグインクラス（セッション管理）
├── access/
│   └── CsmAccessController    ロールベースアクセス制御
├── command/
│   └── CitiesSkyMineCommand   /csm 統合コマンドルーター
├── config/
│   └── ConfigGuiCommand       チェストGUI設定画面
├── debugstick/
│   ├── DebugStickCommand      コマンドハンドラ
│   ├── DebugStickService      BlockDataプロパティ操作
│   ├── DebugStickMemoryStore  プロパティ選択の永続化
│   └── BlockDataPropertyAccess プロパティアクセサ
├── facade/
│   ├── HaussmannCommand       /hb コマンド
│   ├── FacadeGenerator        プロシージャル生成
│   ├── FacadePalette          カラーパレット定義
│   └── SchematicFacadeGenerator  スキマティック生成
├── payload/
│   └── PayloadCommand         Base997/Base64デコード・配置
├── preset/
│   └── BrushPresetCommand     ブラシプリセット管理
├── schematic/
│   └── SchematicCommand       .schem/.schematic読み込み・貼り付け
├── road/
│   ├── RoadCurveCommand       /rc コマンド
│   ├── RoadBuilder            FAWE経由の道路ブロック設置
│   ├── RoadGeometry           ベジェ曲線計算
│   ├── RoadPreview            パーティクルプレビュー
│   ├── RoadSession            プレイヤーごとのセッション
│   ├── RoadSettings           道路パラメータ
│   ├── IntersectionCommand    /ri コマンド
│   ├── IntersectionBuilder    交差点ブロック設置
│   ├── IntersectionPreview    交差点プレビュー
│   ├── IntersectionSession    交差点セッション
│   ├── WaypointListener       Bone右クリックのイベントリスナー
│   └── WhiteLineSmoother      白線の階段スムージング
├── selection/
│   └── SelectionCommand       WorldEdit選択の保存・復元
├── slabstairs/
│   └── SlabStairsCommand      斜面の自動ハーフ/階段生成
├── stack/
│   └── StackCommand           視点基準の選択範囲複製
├── storage/
│   └── PlayerDataStore        プレイヤーごとの設定永続化
├── util/
│   ├── MessageUtil            MiniMessage送信ユーティリティ
│   └── ItemVisuals            アイテム表示名設定
├── window/
│   └── WindowCommand          窓生成
└── worldedit/
    ├── CsmEditSession         FAWE EditSession ラッパー
    └── FaweUndo               FAWE undo履歴統合
```

---

## データフロー

### payload配置の流れ

```
ユーザー入力（Base997/Base64文字列）
    ↓
デコード → zlib展開 → CMC/CMB形式パース
    ↓
Column リスト（x, z, yMin, height）
    ↓
[hollow モード] → 表面ブロック抽出 + 屋根降下処理
    ↓
配置変換（回転 × 視点方向 × 左右配置）
    ↓
CsmEditSession（FAWEラッパー）→ ブロック設置
    ↓
FAWE undo履歴に登録 + WorldEdit選択範囲を設定
```

### 道路生成の流れ

```
Bone右クリック → WaypointListener → 通過点をRoadSessionに追加
    ↓
2点以上 → RoadGeometry.computePath() → ベジェ曲線 + 緩和曲線
    ↓
RoadPreview → 10tickごとにパーティクル描画
    ↓
/rc build → RoadBuilder.buildInto() → CsmEditSession → FAWE
```

---

## 運用Tips

### サーバーパフォーマンス

- payload配置やroad buildは非同期で実行されますが、大規模な操作はFAWEのキューに負荷をかけます
- `limits` セクションで各操作のブロック数上限を適切に設定してください
- 特にpayload配置のhollowモードでも、`max-source-blocks-csm` が大きすぎるとメモリを消費します

### ロールの運用例

```
一般建築メンバー:  citiesskymine.role.builder
  → 窓・SlabStairs・Stack・Selection・Presetなどの建築コマンド
  → ※実験的コマンド（road/intersection/facade/payload）にもアクセス可能だが未公開

上級建築メンバー:  citiesskymine.role.takumi
  → 上記に加えて payload配置・debugstick（CS変換データの取り込みが可能）

スタッフ:          citiesskymine.role.admin
  → 全機能 + reload
```

### コマンドブロック連携

payload配置はコマンドブロックから実行できます。
コマンドブロックの向きが配置の基準方向になります。

```
コマンドブロック設定例:
  csm payload load <payload文字列> 0 R hollow
```

`access.command-blocks.allowed-commands` で許可するコマンドを制限できます。

### トラブルシューティング

```
問題: 「依存プラグインが見つかりません」でCSMが無効化される
原因: FastAsyncWorldEditが導入されていない or 無効化されている
対処: FAWEを導入してサーバーを再起動

問題: FAWE undo履歴への登録に失敗
原因: FAWEのEditSession取得タイミングの競合
対処: 通常は再試行で解決。頻発する場合はFAWEのバージョンを確認

問題: 設定変更が反映されない
対処: /csm reload で設定をリロード

問題: DebugStickが動作しない
確認: config.yml の debug-stick.enabled が true か
確認: require-creative が true の場合、クリエイティブモードか
```

### 設定リロード

```
/csm reload
```

config.yml の変更を即座に反映します。プレイヤーごとの設定やセッションはリセットされません。

---

## 実験的コマンド

> 以下のコマンドは**実験的な機能**であり、一般ユーザーには未公開です。
> 予告なく仕様が変更・削除される可能性があります。
> ユーザーガイドには記載していません。管理者・テスターのみが使用する想定です。
> 対象: road / intersection / facade / payload

---

### 道路カーブ (`/rc`)

Boneアイテムを持ってブロックを右クリックすると「通過点」が追加されます。
2点以上設定するとパーティクルでプレビューが表示されます。

**サブコマンド:**

```
/rc build         道路ブロックを設置する
/rc smoothline    白線を階段ブロックでスムージングする
/rc reset         通過点をリセットしてプレビューを停止
/rc status        現在の設定を表示
/rc set <...>     設定を変更（複数一括可）
/rc debugline     白線デバッグ色分けの切り替え
/rc version       バージョンを表示
```

**基本の流れ:**

```
1. Bone を手に持つ
2. 道路を通したいブロックを右クリック → 通過点が追加される
3. 2点以上でプレビュー（パーティクル）が自動表示
4. /rc build で道路ブロックを設置
5. やり直すなら //undo
```

**設定変更 (`/rc set`):**

複数のパラメータをまとめて変更できます。変更するとプレビューに即時反映されます。

```
パラメータ    説明                 例
───────────────────────────────────────────
radius       カーブ半径            /rc set radius 30
transition   緩和曲線の長さ        /rc set transition 15
lane         車道幅（片側）         /rc set lane 3
centerline   中央白線の幅          /rc set centerline 1
outerline    外縁白線の幅          /rc set outerline 1
sidewalk     歩道の幅              /rc set sidewalk 2
roadmat      車道の素材            /rc set roadmat gray_concrete
sidewalkmat  歩道の素材            /rc set sidewalkmat stone_bricks
linemat      白線の素材            /rc set linemat quartz_slab
```

**一括変更の例:**

```
/rc set radius 30 lane 3 sidewalk 2 roadmat gray_concrete
```

**チュートリアル: 道路を作ってみよう**

```
Step 1: 道路の設定
  /rc set radius 20 lane 3 sidewalk 2 roadmat gray_concrete sidewalkmat stone_bricks linemat quartz_slab

Step 2: 通過点を設定
  Bone（骨）を手に持ち、道路を通したい地点を順番に右クリック。
  2点目以降パーティクルのプレビューが表示される。

Step 3: 道路を生成
  /rc build
  → 気に入らなければ //undo

Step 4: 白線をスムージング（linemat が階段ブロックの場合）
  /rc smoothline

Step 5: リセット
  /rc reset
  → 通過点をリセットして次の道路に取りかかれる。
```

---

### 交差点 (`/ri`)

道路の交差点を自動生成します。道路設定（車道幅・歩道幅・素材）は `/rc set` と共有しています。

**サブコマンド:**

```
/ri here                      足元を交差点の中心に設定（プレイヤーの向きが基準）
/ri set arms <3-6>            腕の数（3=Y字、4=十字、5=五叉路…）
/ri set armlength <n>         腕の長さ（ブロック数）
/ri set cornerradius <n>      コーナーの丸め量
/ri set rotation <角度>        全体を手動回転（度）
/ri build                     交差点を設置
/ri status                    現在の設定を表示
```

**基本の流れ:**

```
1. 交差点の中心にしたい場所に立つ
2. /ri here で中心を設定
3. /ri set で腕の数やサイズを調整
4. /ri build で交差点を設置
5. やり直すなら //undo
```

**チュートリアル: 交差点を作ってみよう**

```
Step 1: 道路設定を確認（道路と設定共有）
  /rc status

Step 2: 交差点の中心を設定
  /ri here
  → 足元ブロックが中心、プレイヤーの向きが基準方向

Step 3: パラメータを調整
  /ri set arms 4 cornerradius 3

Step 4: 交差点を設置
  /ri build
  → 4方向の十字交差点が生成される。//undo で取り消し可能。
```

---

### ファサード (`/hb`)

オスマン様式の建物外壁（ファサード）を自動生成します。

**サブコマンド:**

```
/hb build [ベイ数] [palette]      プロシージャル生成
/hb schem full                    スキマティック全体を1棟貼り付け
/hb schem <ベイ数> [pattern]      スキマティックからベイ単位で生成
```

**パラメータ:**

```
palette:  cream / grey / brown / red  （カラーバリエーション）
pattern:  regular(3幅) / wide(4幅) / grand(4幅左)
ベイ数:   1〜40（build）、1〜60（schem）
```

**使い方の例:**

```
/hb build 6 cream     → クリーム色のファサード（6ベイ）をプロシージャル生成
/hb schem full        → スキマティックファイルから1棟をそのまま貼り付け
/hb schem 8 wide      → 8ベイの幅広パターンで生成
```

**スキマティックファイルの配置:**

```
デフォルトのファイルパス:
  plugins/CitiesSkyMine/fasard.schem

/hb schem コマンドの第3引数でファイルパスを直接指定することも可能:
  /hb schem 4 regular /path/to/custom.schem
```

**チュートリアル: ファサードと窓で建物を作ろう**

```
Step 1: ファサードを生成
  建物を作りたい場所の前に立つ
  /hb build 5 cream
  → クリーム色の5ベイのファサードが生成される

Step 2: 窓を追加
  ファサードの壁に向かって立つ
  /.win 2 3
  → 2×3の窓が生成される

Step 3: 窓を横に並べる
  窓を生成すると自動で選択範囲が設定されるので:
  /.ns right 4
  → 右方向に4回複製され、同じ間隔で窓が並ぶ
```

---

### Payload配置 (`/.pl`)

CitiesSkylines変換ツールが出力したデータ（payload）をMinecraftワールドに配置します。
Base997またはBase64でエンコードされた建物データをデコードし、プレイヤーの足元を基準にブロックを設置します。

**サブコマンド:**

```
/.pl load <payload文字列> [回転] [左右] [hollow/solid]     Base997/Base64を自動判定
/.pl load64 <payload文字列> [回転] [左右] [hollow/solid]   Base64専用
/.pl p <id> <番号>/<総数> <payload片>                     長いpayloadの分割登録
/.pl r <id> [回転] [左右] [hollow/solid]                  分割payloadを結合して配置
/.pl clear [id]                                           分割payloadの一時保存を削除
```

**パラメータ:**

```
回転:      0 / 1 / 2 / 3    （90度単位で建物を回転）
左右:      L / R              （プレイヤー基準で左に配置 / 右に配置）
hollow:    hollow / solid      （中空にする / 中身を詰める）
```

> パラメータはくっつけて書くこともできます: `2R`, `L1`, `0L` など

**使い方の例:**

```
/.pl load <payload> 1 L hollow    → 1回転・左配置・中空
/.pl load <payload> 2R            → 2回転・右配置
/.pl load64 <payload> 0 R solid   → Base64専用・回転なし・右配置・ソリッド
```

**hollowモードについて:**

hollowを有効にすると、建物の内部ブロックを省略し外壁と屋根床のみを設置します。
大きな建物でもブロック数を大幅に削減でき、パフォーマンスと `//undo` の速度が向上します。

```
hollow処理の流れ:
  元データ → 表面ブロック抽出 → 屋根降下処理 → 外壁(STONE_BRICKS) + 屋根床(SMOOTH_STONE)
```

**コマンドブロックからの実行:**

payload配置はコマンドブロックから実行できます。

```
コマンドブロック設定例:
  csm payload load <payload文字列> 0 R hollow
```

- `csm payload <payload文字列>` のように `load` を省くと実行されません
- コマンドブロックの向き（Directional BlockData）が配置基準方向になります
- FAWE undo履歴はプレイヤー実行でないため登録されません
- `access.command-blocks.allowed-commands` で許可するコマンドを制限できます
- Web ビューワーのコピー結果が250文字を超える場合は、コマンドブロックではなくプレイヤーが複数行をチャット欄に貼り付けて実行します

**config.yml の関連設定:**

```yaml
limits:
  max-blocks-csm: 2000000          # 配置ブロック数上限
  max-source-blocks-csm: 2000000   # 復元元ブロック数上限
  max-columns-csm: 100000          # 柱数上限

csm:
  default-rotation: 0              # デフォルト回転（0-3）
  default-side: R                  # デフォルト左右（L/R）
  select-after-load: true          # 配置後にWorldEdit選択を設定
  hollow-on-load: true             # デフォルトでhollowにする

access:
  command-blocks:
    allowed-commands:
      - payload
      - load
      - load64
```
