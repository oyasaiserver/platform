# CitiesSkyMine 統合計画書

作成日: 2026-05-06  
対象リポジトリ: `/Users/aa/platform`  
統合先: `plugins/CitiesSkyMine`  
統合元: `/Volumes/SamsungSSD/Antigravity/01_Projects/BuildMaster/build/libs/BuildMaster-1.0.0.jar`  
参照元ソース: `/Volumes/SamsungSSD/Antigravity/01_Projects/BuildMaster/src/main`

## 目的

BuildMaster に含まれる CitiesSkyMine 関連機能を、このリポジトリ内の CitiesSkyMine プラグインへ統合する。統合後もプラグイン名と配置先は `CitiesSkyMine` のままとし、コマンド体系は `/csm` を主入口に統一する。

## 統合対象

### 維持する既存機能

- 道路カーブ生成: 現行 `/rc`
- 交差点生成: 現行 `/ri`
- オスマン様式ファサード生成: 現行 `/hb`

### BuildMaster から取り込む機能

- CitiesSkyMine payload 配置
  - Base997 / Base64 payload 復元
  - 追加回転指定
  - 左右配置指定
  - undo snapshot
  - 配置後の WorldEdit 選択範囲更新
- 自動窓生成
- debug-stick 互換コマンド
- player-data 保存
  - 道路設定
  - 交差点設定
  - 窓設定
  - debug-stick 選択状態
- 共通メッセージユーティリティ
- BuildMaster 側 config のうち、上記機能に必要な設定

## 統合しない機能

次の BuildMaster 機能は CitiesSkyMine へ統合しない。関連ソース、plugin.yml 定義、config 項目、ヘルプ表示、権限定義を追加しない。

- `/csm shape <box|cylinder|sphere|torus|pyramid|arch> ...`
- `/csm terrain <erode|ridge|voronoi|mesa|canyon|smooth> ...`
- `/csm brush <rock|layer|ridge|organic|none> ...`
- `/csm paste <scatter|array|randomrot> ...`

削除対象の BuildMaster ソース:

- `net.buildmaster.commands.BMShapeCommands`
- `net.buildmaster.commands.BMTerrainCommands`
- `net.buildmaster.commands.BMBrushCommands`
- `net.buildmaster.commands.BMPasteCommands`
- `net.buildmaster.brush.*`
- shape / terrain / brush / paste のみで使う `FAWEUtil` のノイズ・パターン処理

## コマンド統一方針

公式入口は `/csm` に統一する。既存の短縮コマンドは互換用に残すが、ヘルプでは `/csm` を主表記にする。

### 主コマンド

```text
/csm help
/csm version
/csm reload
/csm info

/csm road <help|set|build|undo|reset|status|debugline|smoothline|version>
/csm intersection <here|set|build|undo|status|help>
/csm facade <build|undo|help> [options]
/csm payload <load|load64|undo> <payload> [0-3] [L|R]
/csm window [width] [height] [frame] [glass] [backing]
/csm debugstick <select|cycle>
```

### 互換コマンド

次の既存コマンドは、サーバー運用中の既存導線を壊さないために残す。

```text
/rc -> /csm road
/ri -> /csm intersection
/hb -> /csm facade
```

BuildMaster 由来の `/bm*` コマンドは追加しない。payload 互換として `/csm load`, `/csm load64`, `/csm undo` は残し、内部的に `/csm payload` と同じ実装を呼ぶ。

## payload の FAWE セッション方針

payload 配置は、どの入口から実行しても同じ FAWE EditSession 経路を使う。

対象入口:

- `/csm payload load`
- `/csm payload load64`
- `/csm payload undo`
- 互換 `/csm load`
- 互換 `/csm load64`
- 互換 `/csm undo`
- コマンドブロックからの payload 実行

実装方針:

- payload の配置処理は `PayloadCommand` などの単一クラスに集約する。
- `/csm payload load` と互換 `/csm load` は同じ `handleLoad(...)` を呼ぶ。
- ブロック配置は Bukkit API で直接変更せず、必ず `WorldEdit.getInstance().newEditSessionBuilder()` で作成した `EditSession` を使う。
- Player 実行時は `actor(BukkitAdapter.adapt(player))` を設定し、FAWE / WorldEdit の actor 付きセッションとして扱う。
- コマンドブロック実行時は actor が存在しないため、world を指定した FAWE EditSession を作成する。配置方式は Player 実行時と同じ `setBlocks(...)` と `commit()` に統一する。
- undo snapshot の取得も FAWE EditSession 経由で `getFullBlock(...)` を読む。
- undo 復元も FAWE EditSession 経由で `setBlocks(...)` する。
- 配置後の選択範囲更新は Player 実行時のみ WorldEdit LocalSession に反映する。コマンドブロック実行時は選択範囲更新をスキップする。

この方針により、payload は「ロードと同じ方式」で FAWE セッションを利用し、Player 実行とコマンドブロック実行で配置ロジックが分岐しない。

## 権限体系

`buildmaster.*` は使わず、CitiesSkyMine 名義に統一する。

```text
citiesskymine.*
citiesskymine.use
citiesskymine.admin
citiesskymine.road
citiesskymine.build
citiesskymine.payload
citiesskymine.window
citiesskymine.debugstick
```

`citiesskymine.*` は上記すべてを children として持ち、default は `op` にする。

## plugin.yml 方針

維持:

- `name: CitiesSkyMine`
- `main: icu.oyasai.citiesskymine.Main`
- `depend: FastAsyncWorldEdit`

追加:

- `/csm`
- `/window` または `/csm window` のみで運用する場合は単独コマンドなし
- `/debugstick` または `/csm debugstick` のみで運用する場合は単独コマンドなし

互換:

- `rc`
- `ri`
- `hb`

追加しない:

- `bm`
- `bmshape`
- `bmterrain`
- `bmbrush`
- `bmpaste`
- `bmwindow`
- `bmds`
- `bmcsm`

## config.yml 方針

BuildMaster の config から必要な項目のみを CitiesSkyMine に取り込む。

取り込む:

```yaml
limits:
  max-blocks-csm: 2000000
  max-columns-csm: 100000
  max-undo-blocks-csm: 2000000
  max-undo-snapshots-csm: 4
  max-blocks-window: 512
  max-undo-snapshots-window: 8

window:
  default-width: 2
  default-height: 3
  frame: IRON_TRAPDOOR
  glass: WHITE_STAINED_GLASS
  backing: DRIED_KELP_BLOCK

csm:
  default-rotation: 2
  default-side: R
  select-after-load: true

debug-stick:
  enabled: true
  max-distance: 6.0
  require-creative: false
  apply-physics: false
  memory-persist: true

prefix: "<gray>[<gold>CitiesSkyMine</gold>]</gray> "
debug: false
```

取り込まない:

```yaml
limits:
  max-blocks-shape
  max-blocks-terrain
  max-brush-radius

brush:
  default-radius
  rock-roughness
  organic-scale
  layer-height

terrain:
  erode-iterations
  ridge-octaves
  ridge-scale
  mesa-layer-height
  canyon-depth
```

## 実装手順

1. 作業前に `plugins/CitiesSkyMine/src` の Git 状態を整理する。
   - 現状、同じファイルが staged deletion と untracked として見えている。
   - 実装前に staged deletion を外し、既存ファイルを通常の tracked 変更として扱える状態にする。

2. `Main.kt` を拡張する。
   - `saveDefaultConfig()`
   - FAWE 依存確認
   - `PlayerDataStore`
   - `DebugStickMemoryStore`
   - preview task cleanup
   - `/csm` と互換コマンド登録

3. BuildMaster の必要ソースだけを移植する。
   - `CSMCommand` は payload 専用として移植し、`PayloadCommand` などに整理する。
   - `BMWindowCommand` を window 機能として移植する。
   - `DebugStickCommand`, `DebugStickService`, `DebugStickMemoryStore`, `BlockDataPropertyAccess` を移植する。
   - `PlayerDataStore` と `MessageUtil` を CitiesSkyMine 名義に変更する。

4. 移植時に package と permission を置換する。
   - `net.buildmaster.*` -> `icu.oyasai.citiesskymine.*`
   - `BuildMasterPlugin` -> `Main`
   - `buildmaster.*` -> `citiesskymine.*`

5. `/csm` dispatcher を作る。
   - `road`, `intersection`, `facade`, `payload`, `window`, `debugstick` をサブコマンドとして委譲する。
   - `load`, `load64`, `undo` は payload 互換として処理する。
   - shape / terrain / brush / paste は登録しない。

6. payload 実装を FAWE セッションに一本化する。
   - load / load64 / undo / command block 実行で共通の `createEditSession(world, actor)` を使う。
   - actor が Player の場合のみ WorldEdit actor を設定する。
   - command block 実行時も Bukkit の直接 block 変更を使わない。

7. `plugin.yml` を更新する。
   - `/csm` を主入口として追加する。
   - `/rc`, `/ri`, `/hb` は互換として残す。
   - BuildMaster 系 `/bm*` は追加しない。

8. `config.yml` を追加・更新する。
   - payload / window / debug-stick / prefix / limits のみ取り込む。
   - shape / terrain / brush / paste 用の設定は入れない。

9. ビルド確認を行う。
   - `./gradlew :plugins:CitiesSkyMine:compileKotlin`
   - 必要なら `./gradlew :plugins:CitiesSkyMine:build`

10. 手動確認項目を実施する。
    - `/csm help` に不要機能が出ないこと。
    - `/csm payload load` と `/csm load` が同じ挙動になること。
    - command block から payload load しても FAWE EditSession 経由で配置されること。
    - `/csm undo` が Player と command block の両方で機能すること。
    - `/rc`, `/ri`, `/hb` の互換が壊れていないこと。

## リスクと対策

- Git 状態が staged deletion / untracked 重複になっている。
  - 実装前に index を整理してから編集する。

- `/csm undo` の意味が payload undo と他機能 undo で衝突する。
  - 互換の `/csm undo` は payload undo として扱う。
  - road / intersection / facade / window はそれぞれ `/csm road undo` のようにサブコマンド内で undo する。

- command block には WorldEdit actor がない。
  - actor なしの FAWE EditSession を作成し、配置と undo は同じ処理を使う。
  - WorldEdit selection 更新は Player のみに限定する。

- BuildMaster の不要機能がヘルプや権限に残る。
  - shape / terrain / brush / paste はソース移植対象から外し、plugin.yml と config.yml にも定義しない。

## 完了条件

- `plugins/CitiesSkyMine` の単一 JAR に必要機能が統合されている。
- `/csm` が公式入口になっている。
- shape / terrain / brush / paste が追加されていない。
- payload は Player 実行、互換実行、command block 実行、undo のすべてで FAWE EditSession を利用している。
- `:plugins:CitiesSkyMine:compileKotlin` が成功する。
