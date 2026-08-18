# /sldata GUI チューナー

大型チェストの GUI（176 × 222 px）を実寸の canvas に描き、その上にグラフのオーバーレイを重ねて、
座標・配色・グラフ形状を詰めるための道具。画面右下に出る値が、そのままリソースパックと プラグインに入れる数値になる。

対象プラグイン: `plugins/SocialLikes3` の `/sldata`（カスタムフォント + 負スペース方式）。 設計の根拠は Cogito
Vault の `Knowledge/apple-chart-design-framework.md` と
`Knowledge/minecraft-custom-font-gui-graph.md`。

## 開く

```bash
cd plugins/SocialLikes3/tools/tuner
python3 -m http.server 8765
# → http://127.0.0.1:8765/
```

`file://` で直接開いても動く（classic script なので CORS の制約を受けない）が、
ローカルサーバー経由のほうが文字コードの取り違えが起きない。

## ファイル構成

| ファイル | 役割 | |---|---| | `index.html` | ページ本体。`<script src>`
の**順番に依存する**ので並べ替えないこと | | `css/tuner.css` | ページ自体のスタイル。描画される GUI の配色ではない | |
`js/mcfont-data.js` | **自動生成物。手で編集しない。** Minecraft の実フォント（ascii.png の base64 と
unifont 10,374 グリフ） | | `js/core.js` | 定数、canvas、`rect()` などの基礎 | |
`js/mcfont.js` | 字送りの計算とテキスト描画。ASCII は実測値、全角は 9px | | `js/state.js` | 状態オブジェクト
`S`、テーマ定義、`link()` | | `js/axis.js` | 軸の上限（固定 / 変動 / 切上げ）、目盛りの値 | |
`js/metrics.js` | 統計指標の定義集 | | `js/controls.js` | UI の生成とイベント配線 | | `js/gui.js`
| チェストのクローム、スロット枠 | | `js/chart.js` | 各グラフの描画 | | `js/palette.js` | Apple
システムカラー（macOS 公式値） | | `js/tooltip.js` | ツールチップの見え方の確認 | | `js/export.js` | font
json / テクスチャ生成 / yml の書き出し | | `js/lint.js` | Apple の原則に対する点検 | | `js/main.js` |
`draw()` と数値の表示。**最後に読み込む** |

### なぜ ES modules でなく classic script か

元は単一の IIFE だった。IIFE を外すと、classic script のトップレベルの `var` と `function`
はすべてグローバルになるため、**中身を一切書き換えずに**複数ファイルへ割れる。 ES modules にすると全関数に `import` /
`export` を付ける大がかりな改修が要り、 `file://` で開けなくなり、バンドラも複雑になる。この規模の道具には見合わない。

代償はグローバル名前空間の汚染だが、単一目的の開発ツールなので許容する。

## Artifact 用に1枚へ戻す

Claude の Artifact は単一ファイルしか受け付けず、外部ホストへの要求は CSP で落ちる。 公開するときはバンドルしてから渡す。

```bash
python3 tools/bundle.py -o /tmp/tuner-bundled.html
```

`<title>` から始まり `<!doctype>` / `<html>` / `<head>` / `<body>` を含まない形で出力する
（Artifact 側がそれらで包むため）。出力後に自己検証まで走る。

`<script src>` の順序は `index.html` から読み取るので、**バンドラ側に順序を書き足す必要はない**。

## フォントデータの再生成

通常は不要。Minecraft のバージョンが上がって字幅が変わったときだけ。

```bash
python3 tools/build_mcfont.py    # assets/mcfont/ を読んで js/mcfont-data.js を吐く
```

`assets/mcfont/` には Minecraft 1.21.11 の `assets/minecraft/font/`、
`textures/font/ascii.png`、`store/unifont*.zip` が入っている。
