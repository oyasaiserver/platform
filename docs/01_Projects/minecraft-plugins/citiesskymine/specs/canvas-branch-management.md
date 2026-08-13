---
title: "CitiesSkyMine Canvas Branch Management"
category: specification
status: draft
owner: marzipan99
source_of_truth: "docs/01_Projects/minecraft-plugins/citiesskymine/specs/canvas-branch-management.md"
related_paths:
  - docs/01_Projects/minecraft-plugins/citiesskymine/PROJECT.md
  - plugins/CitiesSkyMine/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-10"
agent_task: "Do not implement from this note without a follow-up request."
---

# キャンバスのブランチ/マージ管理 仕様案

CitiesSkyMine に、Minecraft ワールド上の大きな編集キャンバスを GitHub の branch / pull request / merge に近い形で管理する機能を追加する案。

この文書は後日実装を検討するための仕様メモであり、現時点ではコード実装を行わない。

## 背景

大人数で同じ建築キャンバスを編集すると、WorldEdit ブラシ、大規模コピー、地形削り、建物配置などの作業が重なって本番領域を壊す危険がある。

特に、複数案を比較したい場合や、作業途中の状態を本番から隔離したい場合は、同じ領域をそのまま共有するより、作業用の branch 領域を作ってから後で取り込む方が安全。

## 目的

- 本番キャンバスを直接壊さずに大規模編集を試せるようにする。
- 複数人が同時に別案を作業できるようにする。
- どの領域が正本で、どの branch がどこまで進んでいるかを可視化する。
- branch の内容を本番に戻す前に conflict を検出する。
- conflict がある場合は、Minecraft 内で場所と内容を確認できるようにする。

## 基本モデル

| 概念 | 意味 |
|---|---|
| repo | 管理対象の本番キャンバス領域。例: WorldEdit selection で登録した 256x256 などの範囲 |
| main | 現在の正本 |
| branch | main からコピーした作業用キャンバス |
| base | branch を作った時点の main のスナップショット |
| commit | branch の保存済み状態 |
| merge | branch の差分を main に反映する処理 |
| conflict | main と branch が同じ場所を別々に変更している状態 |

## 物理 branch 方式

branch は本番領域とは別座標に物理コピーして編集する。

```text
main    = 本番キャンバス
branchA = main からコピーされた作業場
branchB = main からコピーされた別作業場
```

この方式なら、プレイヤーは通常の Minecraft 操作、WorldEdit、FAWE、ブラシをそのまま使える。本番に影響するのは merge apply のタイミングだけにする。

## 3-way merge

merge 判定は `base`, `main`, `branch` の 3 つを比較する。

```text
base   = branch 作成時点の正本
main   = 現在の正本
branch = 作業用キャンバスの現在状態
```

ブロック単位の判定:

| main の変化 | branch の変化 | 判定 |
|---|---|---|
| なし | なし | 何もしない |
| なし | あり | branch 側を取り込み可能 |
| あり | なし | main 側を維持 |
| あり | あり、結果が同じ | conflict なし |
| あり | あり、結果が違う | conflict |

## conflict の種類

最初の実装ではブロック単位と範囲単位の conflict を優先する。

| 種類 | 説明 | 初期対応 |
|---|---|---|
| ブロック conflict | 同じ座標を main と branch が別々に変更した | 必須 |
| 範囲 conflict | 同じ 8x8 または 16x16 セル内で並行作業がある | 警告 |
| 破壊系 conflict | 一方が地形を削り、もう一方が上に建物を置いた | 後続検討 |
| 意味的 conflict | 道路接続、入口、高さ、支え、見た目が壊れる | 後続検討 |

## CoreProtect / WorldEdit 履歴との関係

CoreProtect や WorldEdit history は補助情報として扱う。

- CoreProtect: 誰が、いつ、どのブロックを変更したかの説明に使う。
- WorldEdit history: 作業者単位の undo / redo や操作履歴確認に使う。
- CitiesSkyMine: repo、base、branch、commit、merge 状態の正本を持つ。

CoreProtect だけを正本にすると、どの branch の変更か、どの base から派生したかが曖昧になるため、branch 管理の主データは CitiesSkyMine 側に置く。

## コマンド案

コマンド名は仮案。実装時に既存 CSM コマンド体系に合わせて調整する。

```text
/csm repo create <name>
  現在の WorldEdit selection を管理対象 repo として登録する。

/csm branch create <repo> <branch>
  main を別座標にコピーし、作業用 branch を作る。

/csm branch list <repo>
  branch 一覧、作成者、状態、最終保存時刻、conflict 数を表示する。

/csm branch tp <branch>
  branch 作業場へ移動する。

/csm branch save <branch>
  branch の現在状態を保存する。

/csm diff <branch>
  base と branch の差分、main と branch の差分を要約する。

/csm merge preview <branch>
  main に取り込んだ場合の変更範囲と conflict を表示する。

/csm merge apply <branch>
  conflict がなければ main に反映する。

/csm conflict show <branch>
  conflict 箇所を Minecraft 内で可視化する。
```

## Minecraft 内の可視化

- branch 側だけ変わった場所を青系のパーティクルで表示する。
- main 側も変わった conflict 箇所を赤系のパーティクルで表示する。
- 注意が必要な範囲 conflict を黄色系で表示する。
- merge preview 中は、反映予定の外枠を一時表示する。
- status 表示には変更ブロック数、conflict 数、触ったセル数、最終保存時刻を出す。

## 保存形式の候補

| 方式 | 長所 | 短所 |
|---|---|---|
| `.schem` 保存 | WorldEdit と相性が良い。復元やコピーが簡単 | 差分や conflict 検出には追加処理が必要 |
| block diff 保存 | conflict 判定がしやすい。保存量を減らせる | 復元処理を実装する必要がある |
| `.schem` + diff 併用 | 復元と判定を両立しやすい | 管理データが増える |

初期案としては `.schem` + block diff 併用が扱いやすい。base / main / branch のスナップショット復元には `.schem`、merge 判定には block diff を使う。

## MVP

最初に作るなら以下に絞る。

1. WorldEdit selection から repo を作る。
2. repo の main を別座標にコピーして branch を作る。
3. branch を保存する。
4. base / main / branch の 3-way 比較で block conflict を出す。
5. conflict がなければ main に反映する。
6. conflict があれば座標と可視化だけ出す。

PR レビュー、権限、詳細な履歴 UI、意味的 conflict は MVP の後で検討する。

## 未決定事項

- branch 作業場をどの座標に自動配置するか。
- branch の寿命、削除、アーカイブの扱い。
- merge apply 前に必ず管理者承認を要求するか。
- CoreProtect のログを UI にどこまで出すか。
- 256x256 より大きい範囲での保存性能とメモリ使用量。
