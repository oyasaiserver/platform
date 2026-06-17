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
/.col suggest <columnWidth> <gap> [edge|center] [2d]
/.col build <columnWidth> <gap> [edge|center] [2d]
```

例:

```text
/.col 2 7
/.col suggest 2 7 center
/.col 2 7 center 2d
```

WorldEdit 選択範囲に、手持ちブロックで柱を生成する。`suggest` は生成せず、柱割り候補だけを表示する。ショートカットは `/.col` のみで、`/.cols` や `/.columns` は使わない。

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

WorldEdit の選択範囲を保存・復元する。直前の選択範囲は自動記録され、`/.sel p` で復元できる。

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
/.cloud [size] [height] [density] [yOffset] [seed]
```

例:

```text
/.cloud
/.cloud 128 16 0.50
/.cloud 128 16 0.50 128 2026
```

現在位置から上方向に、cobweb の雲を生成する。`size` は X/Z 両方に使われるため、生成範囲は正方形である。`yOffset` を省略すると 100 ブロック上に生成される。`seed` を省略するとランダム値が使われる。

4 番目の引数だけを指定した場合は seed として扱われる。yOffset を指定したい場合は、5 番目の seed まで指定する。

## ベジェ曲線

```text
/.bez add
/.bez set <1-8>
/.bez fromsel
/.bez remove [1-8]
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
/.bez fromsel
/.bez preview on
/.bez build stone 3
/.bez build flat gray_concrete 7
```

制御点からベジェ曲線を作る。`fromsel` は FAWE の convex/polyhedral 選択から頂点を読み込む。`build` は半径指定の曲線、`build flat` は道路向けの 1 枚板を生成する。

## DebugStick

```text
/.ds select
/.ds cycle
```

見ているブロックの BlockData プロパティを選択・変更する。バニラのデバッグ棒に近い操作をコマンドで行う。

## ブラシプリセット

```text
/.brp save <name> <command>
/.brp load <name>
/.brp <name>
/.brp list
/.brp delete <name>
```

例:

```text
/.brp save road //br sphere gray_concrete 5
/.brp road
```

よく使うブラシ系コマンドを保存して呼び出す。

## Payload

```text
/csm payload load <payload>
/csm payload load64 <payload>
/.pl load64 <payload>
```

Base997 / Base64 payload を復元して配置する。巨大な payload はチャット欄の長さ制限に注意する。

## よくある質問

### 権限がないと表示される

サーバー管理者に `builder`、`takumi`、`admin` のいずれかのロール、または該当する `citiesskymine.*` permission の付与を依頼する。

### 個人設定 GUI が見つからない

個人設定 GUI は `/.settings` に移動した。`/.cf` は使わない。

### サーバー設定を変更したい

`/.config access ...` を使う。権限系以外の設定編集は現時点では未対応である。

### 生成が大きすぎて失敗する

`config.yml` の `limits.*` に上限がある。上限変更は管理者に依頼する。
