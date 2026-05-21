# 01_Projects

個別プロジェクト単位の資料と、必要に応じた実体ミラーを置く。

## 分類

| ディレクトリ | 対象 |
|---|---|
| `minecraft-plugins/` | Kotlin/Java/Paper/Purpur系プラグイン |
| `tools/` | 非プラグインのCLI、ブラウザツール、解析・変換ツール |
| `automation/` | AI連携、Discord連携、文字起こしなどの自動化 |
| `web/` | 静的サイト、Wiki、Web公開物 |

## ルール

- 各プロジェクトは `<category>/<project>/PROJECT.md` を持つ。
- Platform本体のプラグイン実装の正本は `plugins/*/`。ここには仕様・利用方法・思想・判断理由を書く。
- 非プラグインのツール、Web、自動化プロジェクトは、必要に応じて実体ファイルも同じプロジェクトフォルダに置いてよい。
- 横断的な手順、調査、理論は `02_Docs/` に置く。
