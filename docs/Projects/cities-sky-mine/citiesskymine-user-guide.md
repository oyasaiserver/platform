# CitiesSkyMine 使用ガイド

CitiesSkyMine は、Minecraft 内で都市建築を補助する Paper/Purpur プラグインである。WorldEdit / FAWE の選択範囲を使い、道路、交差点、窓、階段、柱割り、雲、ベジェ曲線などを生成する。

## 基本

主要コマンドは `/csm <command>` で実行する。よく使う機能には slash-dot 形式のショートカットがある。

```text
/csm help <command>
/.help <command>
```

生成系の取り消しは、原則として FAWE の `//undo` を使う。

## コマンド一覧

```text
コマンド              ショートカット    内容
────────────────────────────────────────────────────────────
/csm help           /.help          ヘルプを表示
/csm window         /.win           正面方向に窓を生成
/csm slabstairs     /.ss            選択範囲に階段・坂道を生成
/csm columns        /.col           選択範囲に柱を生成
/csm stack          /.ns            選択範囲を視点基準で複製
/csm selection      /.sel           WorldEdit 選択範囲を保存・復元
/csm settings       /.settings      個人設定 GUI を開く
/csm config         /.config        config.yml の権限設定を編集
/csm cloud          /.cloud         cobweb の雲を生成
/csm bezier         /.bez           ベジェ曲線をプレビュー・生成
/csm debugstick     /.ds            BlockData を変更
/csm preset         /.brp           ブラシプリセットを保存・実行
/csm schematic      /.sc            スキマティックを貼り付け
/csm payload        /.pl            payload を復元して配置
/csm reload                         config.yml を再読み込み
```

互換コマンドとして `/rc`、`/.rc`、`/ri`、`/.ri`、`/hb`、`/.hb` も残っている。新しく覚える場合は `/csm ...` と slash-dot ショートカットを優先する。

## ヘルプ

```text
/.help cloud
/.help bezier
/csm help columns
```

`/.help` の後ろに指定する項目は 1 つだけである。

## 窓生成

```text
/.win [width] [height] [frame] [glass] [backing]
```

例:

```text
/.win
/.win 3 4
/.win 2 3 OAK_TRAPDOOR GLASS
```

プレイヤーの正面方向に、フレーム、ガラス、裏地を持つ窓を生成する。素材を省略した場合はデフォルト値または前回設定が使われる。

## SlabStairs

```text
/.ss [material]
```

例:

```text
/.ss stone_brick
/.ss oak
/.ss quartz
```

WorldEdit で 2 点を選択してから実行する。選択範囲の勾配に応じて slab、stairs、full block を組み合わせた坂道を生成する。

## 柱割り

```text
/.col <columnWidth> <gap> [edge|center] [2d]
/.col <columnWidth> <gap> [edge|center] [2d] -s
/.col <columnWidth> <count|leftxdepth> -p [edge|center] [2d]
/.col <columnWidth> <count|leftxdepth> -p [edge|center] [2d] -s
```

例:

```text
/.col 2 7
/.col 2 7 center -s
/.col 2 7 center 2d
/.col 2 5 -p center
/.col 2 5x3 -p center 2d
```

WorldEdit 選択範囲に、手持ちブロックで柱を生成する。通常形式は柱の太さと柱間から候補を計算する。`-p` は柱の太さと本数から均等配置する。`2d` では `5x3` のように左右方向と奥行き方向の本数を分けられる。`-s` は生成せず、柱割り候補だけを表示する。ショートカットは `/.col` のみで、`/.cols` や `/.columns` は使わない。

## Stack

```text
/.ns <direction...> <times> [skip-blocks...]
```

例:

```text
/.ns forward 5
/.ns right 3
/.ns up 2
/.ns f 4 -a
```

WorldEdit 選択範囲を、プレイヤーの向きを基準に複製する。`forward`、`back`、`left`、`right`、`up`、`down` を使える。`-a` は空気を上書きしない指定である。

## Selection

```text
/.sel save [name]
/.sel list
/.sel delete <name>
/.sel p
/.sel <name>
```

WorldEdit の選択範囲を保存・復元する。直前の選択範囲は自動記録され、`/.sel p` で復元できる。cuboid に加えて convex/polyhedral や polygonal 系の頂点選択も保存対象になる。

## 個人設定 GUI

```text
/.settings
/.settings win
/.settings road
/.settings ri
/.settings pl
```

旧 `/csm config` と `/.cf` が担っていた個人設定 GUI は、`/csm settings` と `/.settings` に移動した。

GUI では、道路、窓、交差点、payload 配置などのプレイヤー個人設定を変更できる。ここで変更した値は、プレイヤーデータとして保存される。

## サーバー設定コマンド

```text
/.config access status
/.config access set <key> <true|false>
/.config access command <command> <role...|none>
/.config access role <role> permission <permission>
/.config access role <role> inherits <role...|none>
/.config access command-blocks <command...|none>
/.config access non-player <command...|none>
/.config reload
```

`/csm config` と `/.config` は、CitiesSkyMine の `config.yml` を編集する管理者向けコマンドである。現時点では権限系の設定だけを扱う。

このコマンド自体は admin 専用である。既存の `config.yml` に古い `access.commands.config` が残っていても、OP、`citiesskymine.config`、`citiesskymine.admin`、`citiesskymine.role.admin` のいずれかがない送信者は編集できない。

### 権限設定の確認

```text
/.config access status
```

現在の `access.enabled`、`op-bypass`、`console-bypass`、`legacy-permissions-bypass`、各コマンドに割り当てられたロールを表示する。

### 権限判定スイッチ

```text
/.config access set enabled true
/.config access set op-bypass false
/.config access set console-bypass true
/.config access set legacy-permissions-bypass true
```

設定値:

- `enabled`: CitiesSkyMine のロールベース権限判定を使うかどうか
- `op-bypass`: OP を常に許可するかどうか
- `console-bypass`: コンソールを常に許可するかどうか
- `legacy-permissions-bypass`: `citiesskymine.cloud` などの旧 permission を許可に使うかどうか

### コマンドごとのロール設定

```text
/.config access command cloud builder takumi admin
/.config access command config admin
/.config access command debugstick takumi admin
/.config access command cloud none
```

`none` を指定すると、そのコマンドにロールを割り当てない。OP bypass や legacy permission bypass が有効な場合は、ロール設定が空でも使用できる場合がある。

### ロールの permission と継承

```text
/.config access role builder permission citiesskymine.role.builder
/.config access role takumi inherits builder
/.config access role admin inherits takumi
/.config access role guest inherits none
```

ロールは `access.roles.<role>` に保存される。`inherits` を設定すると、上位ロールが下位ロールの権限を含む。

### コマンドブロック・非プレイヤー送信者

```text
/.config access command-blocks payload load load64
/.config access command-blocks none
/.config access non-player *
/.config access non-player none
```

`command-blocks` はコマンドブロックから許可する CitiesSkyMine コマンドを指定する。`non-player` はコンソール以外の非プレイヤー送信者を対象にする。`*` は全許可である。

## 雲生成

```text
/.cloud [size] [height] [density] [seed] [yOffset]
```

例:

```text
/.cloud
/.cloud 128 16 0.50
/.cloud 128 16 0.50 2026 128
```

現在位置から上方向に、cobweb の雲を生成する。`size` は X/Z 両方に使われるため、生成範囲は正方形である。`seed` を省略するとランダム値が使われる。`yOffset` を省略すると 100 ブロック上に生成される。

4 番目の引数は seed、5 番目の引数は yOffset である。

## ベジェ曲線

```text
/.bez add
/.bez set <1-32>
/.bez plane <on|off>
/.bez remove [1-32]
/.bez preview <on|off>
/.bez build [material] [radius]
/.bez build flat [material] [width]
/.bez segments [8-256]
/.bez status
/.bez clear
```

例:

```text
/.bez add
/.bez plane on
/.bez preview on
/.bez build stone 3
/.bez build flat gray_concrete 7
```

制御点からベジェ曲線を作る。制御点は最大 32 点まで扱える。`preview`、`build`、`status` 実行時には現在の WorldEdit 選択頂点を自動で制御点に読み込む。選択頂点はブロック中心座標として扱い、プレビュー表示だけは実生成位置より 1 ブロック上に表示する。`plane on` は制御点の Y をそろえて平面上の線として扱う。`build` は半径指定の曲線、`build flat` は道路向けの 1 枚板を生成する。

## DebugStick

```text
/.ds select
/.ds cycle
```

見ているブロックの BlockData プロパティを選択・変更する。バニラのデバッグ棒に近い操作をコマンドで行う。

## ブラシプリセット

```text
/.brp save <name> "<brush>" [-m "<mask>"] [-g "<global mask>"]
/.brp load <name>
/.brp <name>
/.brp list
/.brp delete <name>
```

例:

```text
/.brp save road "//br sphere gray_concrete 5"
/.brp save road "//br sphere -h andesite 3" -m ">0 smoothquartz" -g "<global mask>"
/.brp road
```

よく使う WorldEdit brush と、その mask/gmask を保存して呼び出す。`-m` は mask、`-g` は global mask である。保存対象は brush / mask / gmask に限定され、任意のマクロコマンドとしては扱わない。

## Schematic

```text
/csm schematic <name> [-a]
/.sc <name> [-a]
/.sc list
/.sc reload
```

FAWE/WorldEdit の schematic 保存先に置かれた `.schem` / `.schematic` ファイルを、名前だけで読み込んで貼り付ける。FAWE の per-player schematics が有効な場合は、実行したプレイヤーの UUID フォルダを参照する。`/.sc oak_tree` は `oak_tree.schem` または `oak_tree.schematic` を探す。

貼り付け先は、プレイヤーの足元の 1 ブロック前である。回転引数はなく、プレイヤーの向きに合わせて自動回転する。空気を貼らずに既存ブロックを残したい場合は、FAWE の `//paste -a` と同じ意味で `-a` を指定する。

`/.sc list` は FAWE の `//schem list` をそのまま実行する。

例:

```text
/.sc oak_tree
/.sc bench -a
```

貼り付け後は、FAWE の `//undo` で取り消せる。

## Payload

```text
/csm payload load <payload>
/csm payload load64 <payload>
/.pl load <payload>
/.pl load64 <payload>
```

Base997 / Base64 payload を復元して配置する。Web ビューワーのコピー結果が250文字を超える場合は、次のような複数行コマンドとして出力される。全行をプレイヤー自身がチャット欄へ貼り付けて実行する。

```text
/.pl p <id> 1/3 <payload片>
/.pl p <id> 2/3 <payload片>
/.pl p <id> 3/3 <payload片>
/.pl r <id> [0-3] [L|R] [hollow|solid]
```

`/.pl p` は分割 payload を一時保存し、最後の `/.pl r` が結合して配置する。一時保存を消す場合は `/.pl clear <id>` を使う。

## よくある質問

### 権限がないと表示される

サーバー管理者に `builder`、`takumi`、`admin` のいずれかのロール、または該当する `citiesskymine.*` permission の付与を依頼する。

### 個人設定 GUI が見つからない

個人設定 GUI は `/.settings` に移動した。`/.cf` は使わない。

### サーバー設定を変更したい

`/.config access ...` を使う。権限系以外の設定編集は現時点では未対応である。

### 生成が大きすぎて失敗する

`config.yml` の `limits.*` に上限がある。上限変更は管理者に依頼する。
