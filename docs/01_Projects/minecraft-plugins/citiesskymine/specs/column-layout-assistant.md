---
title: "CitiesSkyMine Column Layout Assistant"
category: specification
status: draft
owner: marzipan99
source_of_truth: "docs/01_Projects/minecraft-plugins/citiesskymine/specs/column-layout-assistant.md"
related_paths:
  - docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md
  - plugins/CitiesSkyMine/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-10"
agent_task: "Do not implement from this note without a follow-up request."
---

# 柱割り・間隔サジェスト 仕様案

CitiesSkyMine に、WorldEdit selection の幅に対して柱の太さと柱間の空間を計算し、きれいに割り付けるための補助機能を追加する案。

この文書は後日実装を検討するための仕様メモであり、現時点ではコード実装を行わない。

## 背景

建築で柱を等間隔に置きたい場合、選択範囲の長さ、柱の太さ、柱間の空間、端の処理によって、見た目がきれいに収まる配置が変わる。

単純に「7 ブロック間隔で置く」と決めても、全体幅に合わず、途中だけ 5 ブロックになったり、左右端が不揃いになったりする。そこで、選択範囲に対して複数の柱割り候補を計算し、プレイヤーにサジェストする。

## 目的

- WorldEdit selection から、柱を置く軸方向と全体長を取得する。
- 柱の太さと希望する柱間の空間を入力できる。
- 端に柱を置く配置と、端に半分の空間を残す配置を切り替えられる。
- 完全等間隔で割れる案を優先して提示する。
- 完全に割れない場合でも、`3,5,3,5` のような見た目が整いやすい間隔パターンを提示する。
- 必要に応じて、計算結果に沿って柱を仮表示または設置できる。

## 用語

| 用語 | 意味 |
|---|---|
| selection length | WorldEdit selection の対象軸方向の長さ |
| column width | 柱の太さ。例: 1, 2, 3 ブロック |
| gap | 柱と柱の間の空間 |
| edge column mode | 一番端に柱を置く方式 |
| centered gap mode | 両端に半分ずつ空間を残す方式 |
| pattern | 柱間の空間の並び。例: `7,7,7` や `3,5,3,5` |

## 配置モード

### 端柱モード

選択範囲の両端に柱を置く。

```text
柱 空間 柱 空間 柱
```

このモードでは、最初と最後の柱が selection の端に揃う。建物の外枠や柱芯を端に合わせたい場合に向く。

### 両端余白モード

選択範囲の両端に半分ずつ空間を残し、その内側に柱を並べる。

```text
半空間 柱 空間 柱 空間 柱 半空間
```

このモードでは、柱間のリズムを中心に合わせる。壁面や装飾の途中に柱列を入れる場合に向く。

## 入力案

コマンド名は仮案。実装時に既存 CSM コマンド体系に合わせて調整する。

```text
/csm columns suggest <columnWidth> <gap>
  現在の WorldEdit selection に対して柱割り候補を表示する。

/csm columns suggest <columnWidth> <gap> --centered
  両端余白モードで候補を表示する。

/csm columns preview <columnWidth> <gap>
  候補のうち推奨案をパーティクルや一時ブロックで表示する。

/csm columns apply <material> <columnWidth> <gap>
  推奨案に従って柱を設置する。
```

## 出力案

候補表示では、少なくとも以下を出す。

```text
selection: 37 blocks
column width: 2
preferred gap: 7
mode: edge columns

候補:
1. gap 7 x 4, columns 5, 余り 0
2. gaps 6,7,7,6, columns 5, 端の見た目が安定
3. gaps 5,7,5,7, columns 5, 交互配置
```

## 計算方針

### 端柱モードの基本式

柱が `n` 本あるとき、柱間の gap は `n - 1` 個。

```text
total = n * columnWidth + sum(gaps)
```

完全等間隔の場合:

```text
total = n * columnWidth + (n - 1) * gap
```

この式が selection length と一致する候補を最優先にする。

### 両端余白モードの基本式

柱が `n` 本あるとき、中央の gap は `n - 1` 個、両端の余白は合計で gap 1 個分として扱う。

```text
total = n * columnWidth + n * gap
```

左端と右端には `gap / 2` 相当の余白を置く。奇数 gap の場合は、左端と右端の余白が 1 ブロック違ってもよい。

## サジェスト方針

候補は以下の順で評価する。

1. 希望 gap で完全に割り切れる案。
2. 希望 gap に近い単一 gap で完全に割り切れる案。
3. 希望 gap を中心に、複数 gap を混ぜる案。
4. 左右対称または中心対称に近い案。
5. 端の gap が極端に短くならない案。

混在 gap の例:

```text
7 が希望だが合わない場合:
- 6,7,7,6
- 5,7,5,7
- 5,6,7,6,5
```

視覚的に汚くなりやすい案は低評価にする。

- 端だけ 1 ブロックなど極端に短い。
- `7,7,7,2` のように余りが片側に寄る。
- 柱数が多すぎて柱だらけになる。
- gap の種類が多すぎてリズムが読めない。

## preview / apply

preview は実ブロックを置く前に、柱予定位置を見せる。

- パーティクル
- 一時的な glass 表示
- block display / text display

apply は preview 済みの候補を実際に配置する。初期実装では、selection の底面から上面まで同じ素材で柱を立てるだけでよい。

## MVP

最初に作るなら以下に絞る。

1. WorldEdit selection の X または Z 方向の長さを取得する。
2. `columnWidth` と希望 `gap` を受け取る。
3. 端柱モードで完全等間隔候補を出す。
4. 完全に割れない場合、希望 gap の前後 2 ブロック程度で候補を出す。
5. preview で柱位置だけ可視化する。

両端余白モード、混在 gap、実ブロック設置は MVP の次段階でもよい。

## 未決定事項

- selection が X/Z 両方向に広い場合、どちらを柱列の軸とみなすか。
- 2D グリッド状に柱を配置する機能を最初から入れるか。
- 柱の高さを selection の Y 全体にするか、コマンド引数で指定するか。
- 柱素材を手持ちブロック、引数、設定ファイルのどれから取るか。
- preview をどの程度永続表示するか。
