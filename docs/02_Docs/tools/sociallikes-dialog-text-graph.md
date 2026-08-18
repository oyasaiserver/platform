---
title: "SocialLikes3 Dialog Text Graph Notes"
category: tool
status: active
owner: marzipan99
source_of_truth: "plugins/SocialLikes3/src/main/kotlin/com/github/srain3/sociallikes/command/SLData.kt"
related_paths:
  - plugins/SocialLikes3/src/main/kotlin/com/github/srain3/sociallikes/command/SLData.kt
last_validated: "2026-08-06"
agent_task: null
---

# SocialLikes3 Dialog Text Graph Notes

## 結論

Paper Dialog API の `DialogBody.plainMessage(Component, width)` に、Minecraft 標準フォントの文字だけで棒グラフを描く場合、最も安定した方針は次の通り。

- グラフ本体は 5px 幅の文字だけで作る。
- 棒は `▁▂▃▄▅▆▇█` を使う。
- グリッドは `▁` または `_` を使えるが、見た目としては `▁` が最も自然だった。
- 右軸ラベルと日付ラベルは半角英数字を避け、全角数字と漢字表記にする。
- 右軸ラベルはグラフ外側に置く。
- 2倍表示では棒幅と間隔だけでなく、下の日付ラベルにも個別補正を入れる。
- リソースパックなしでは、ピクセル単位で完全制御できない。実機スクリーンショットで微調整する前提にする。

現時点の推奨表示は `low` スタイル。

```mcfunction
/sldata dialog week large low
```

## 技術仕様

実装箇所は `SLData.kt` の Dialog グラフ生成処理。

使っている Paper 側の機能は、動的に `Dialog` を作成してプレイヤーへ表示する API。Paper Docs では Dialog API は Experimental とされ、`Dialog#create`、`DialogBase.body(...)`、`DialogBody.plainMessage(...)`、`DialogType.multiAction(...)` などで構成する。

SocialLikes3 側では次のように分けている。

| 項目 | 現在の扱い |
|---|---|
| 描画媒体 | Paper Dialog API の plain message |
| フォント | Minecraft 標準フォント |
| グラフ本体セル | 5px 幅文字 |
| 棒 | Unicode ブロック要素 `▁▂▃▄▅▆▇█` |
| 推奨グリッド | `▁` |
| 右軸 | グラフ右側、全角数字 |
| 下軸日付 | `６月８日` 形式 |
| 2倍表示 | 棒幅・間隔・行数を2倍 |
| プレイヤーヘッド | `DialogBody.item(ItemStack)` でグラフとは別 body として表示 |
| 更新方法 | jar ビルド後、ローカル実験サーバーを再起動 |
| 自動アーカイブ | SocialLikes3 の `compileKotlin` 前に `SLData.kt` を `docs/03_Outputs/sociallikes-dialog-archives/` へコピー |

## 成功したこと

### 右軸ラベルを右側に移した

左側に数値軸を置くと、`7,500`、`1,500`、`0` のように文字数が違うラベルで、グラフ本体の開始位置が崩れる。右側に出すと、グラフ本体は左端を固定できる。

### 半角英数字を全角にした

`7,500` や `6/8` は Minecraft 標準フォントでは視覚的な幅が揃わない。右軸を `７，５００`、日付を `６月８日` にすると、ラベル周辺のズレがかなり減った。

### グラフ本体を5px文字に限定した

棒とグリッドを同じ送り幅の文字で揃えると、棒の縦方向と横方向の整列が安定した。特に `low` スタイルの通常サイズはかなり綺麗に見えた。

### 2倍表示をオプション化した

通常サイズと2倍サイズは同じロジックで描けるが、2倍では文字幅の誤差が目立つ。切替ボタンを残したことで、実機で比較しながら調整できるようになった。

### ログにプレビューと計測値を出した

サーバーログに次の情報を出したことで、スクリーンショットの見た目とコード上の配置を対応付けられるようになった。

- `plotWidthChars`
- `plotWidthPx`
- `rightAxisWidthChars`
- `rowAdvances`
- `glyphAdvances`
- 日付ラベルの `labelStartPx` / `labelCenterPx` / `deltaPx`

### プレイヤーヘッドを別 body にした

プレイヤーヘッドは文字列グラフ内に混ぜず、`DialogBody.item(ItemStack)` としてグラフの上に出す。これにより、グラフ本体の文字幅・セル幅・行幅計算を壊さずにアイコン表示を追加できる。

### ビルド前アーカイブを入れた

`SLData.kt` は試行錯誤で壊れやすいため、SocialLikes3 の `compileKotlin` 前に日付付きコピーを保存する。現在の保存先は `docs/03_Outputs/sociallikes-dialog-archives/`。

## 失敗したこと

### 左軸ラベル

左軸に数値を置く構成は、半角数字の幅差でグラフ本体の左端が揃わなかった。右軸方式に切り替えた。

### 半角 ASCII アート前提

コードブロック上では綺麗に見える `-`、`_`、`|` でも、Minecraft Dialog 上ではフォント幅・描画位置・アンチエイリアスの影響でズレて見える。

### アンダーバーへの単純置換

`-` を `_` に変えるだけでは解決しなかった。送り幅が同じでも、描画される縦位置が違うため、軸としての見え方が変わる。`_` は下線として見えるが、グリッド全体としては線の高さが期待と違う場合がある。

### 全角ブロックだけで埋める方式

全角ブロックや全角線で画面を作ると、幅は揃いやすいが見た目が重くなった。グラフとしては「醜い」表示になりやすい。

### リロード運用

PlugManX で SocialLikes3 をリロードすると、依存プラグインの二重ロード問題が出た。ローカル実験ではフル再起動の方が安全。

## 今回の経緯

1. まず Dialog API で ASCII アート風グラフを表示した。
2. 左軸の `1,500` と `0` 付近で縦軸がズレて見えた。
3. 原因候補として、半角文字の送り幅差、記号の描画位置差、Dialog body の中央寄せ、フォント設定を検討した。
4. 軸ラベルを右側に移した。
5. 通常サイズと2倍サイズを切り替えられるようにした。
6. `-`、`_`、`▁`、線なしを比較した。
7. `▁` の低ブロック軸が最も自然に見えた。
8. 数値ラベルと日付ラベルを全角化した。
9. 日付を `6/8` から `６月８日` に変えた。
10. 下軸ラベル間の見た目を揃えるため、日付ラベルにセル単位の追加補正を入れた。

## ベストプラクティス

### 1. 本体とラベルを同じ問題として扱わない

グラフ本体はセルアート、ラベルはテキストであり、制約が違う。本体は5pxセルで固定し、ラベルは別途補正する。

### 2. 左端固定を優先する

横方向のズレは、グラフ本体の左端が揺れると一気に目立つ。数値軸は右側に逃がし、本体の左端を固定する。

### 3. 半角数字を信用しない

Minecraft Dialog 上では、半角数字・カンマ・スラッシュは視覚的にズレやすい。数値ラベルは全角数字、日付は漢字表記に寄せる。

### 4. 実測ログを残す

スクリーンショットだけでは原因が分からない。各行の文字幅、ラベル中心、棒中心、差分 px をログに残す。

### 5. 実機スクリーンショットを正にする

Web の Dialog ジェネレーターやコードブロックは参考になるが、最終判断は Minecraft クライアント上のスクリーンショットで行う。

### 6. リソースパックなしの限界を認める

標準フォントだけでは、負の送り幅、独自 glyph、1px 単位の重ね合わせはできない。完全な GUI 画像を作るなら、リソースパック、Map 描画、Display Entity、または GUI 用フォントへ移行する。

## ログ資料の形式調査

今回のような「試行錯誤を経て仕様を固める」資料には、既存の形式をそのまま1つ採用するより、複数の型を組み合わせるのが合う。

| 形式 | 向いている用途 | 今回への適用 |
|---|---|---|
| ADR | なぜその設計判断にしたかを残す | 右軸化、全角化、`low` 推奨などの判断記録 |
| ポストモーテム | 失敗から再発防止策を残す | `-` / `_` / 全角ブロック方式の失敗整理 |
| 変更履歴 | 何がいつ変わったかを追う | 実装差分、オプション追加、表示調整の履歴 |
| Diataxis | 読者目的ごとに資料を分ける | 結論、手順、仕様、背景を分ける |
| C4 | システム構造を図で整理する | Dialog、Map、Display Entity、Resource Pack の比較時に有効 |
| 構造化ログ | 機械処理できる観測値を残す | `rowAdvances`、`deltaPx`、glyph 幅のログ |

このリポジトリでは、次の2層構造が扱いやすい。

- 正本: 現在の結論、推奨設定、技術仕様、ベストプラクティスだけを書く。
- 経緯ログ: 試した案、スクリーンショット、失敗、ログ抜粋、採用しなかった理由を書く。

このファイルは正本寄りの資料であり、長期的にはスクリーンショットごとの細かい経緯を別の `*-log.md` に分けるとよい。

## 推奨ログテンプレート

同じ種類の試行錯誤を残すときは、1件ごとに次の粒度で書く。

```markdown
## YYYY-MM-DD HH:mm JST - 試行名

### 目的

何を改善したかったか。

### 変更

- 変更したファイル:
- 変更した表示モード:
- 変更した文字:
- 変更した配置補正:

### 観測

- 実機スクリーンショット:
- サーバーログ:
- `rowAdvances`:
- `deltaPx`:
- 見た目の評価:

### 結果

- 採用 / 不採用 / 保留
- 理由:

### 次に試すこと

- 次の仮説:
- 次の変更候補:
```

このテンプレートは、ADR の「判断理由」、ポストモーテムの「失敗と再発防止」、構造化ログの「観測値」を混ぜた形にしている。Minecraft の Dialog 表示は最終的に実機見た目で判断するため、スクリーンショットとログ数値を同じ単位で残すことを優先する。

## 参考資料

- [PaperMC Dialog API](https://docs.papermc.io/paper/dev/dialogs/)
- [Architectural Decision Records](https://adr.github.io/)
- [Diataxis](https://diataxis.fr/)
- [Google SRE: Postmortem Culture](https://sre.google/sre-book/postmortem-culture/)
- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- [RFC 5424: The Syslog Protocol](https://www.rfc-editor.org/info/rfc5424/)
- [C4 model](https://c4model.com/)
