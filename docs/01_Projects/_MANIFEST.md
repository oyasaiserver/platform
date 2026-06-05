# 01_Projects

個別プロジェクト単位の公開台帳と、AIエージェントの作業入口を置く。
必要に応じて公開可能な実体ミラーも同じプロジェクトフォルダに置く。

## Index

Project list: `docs/01_Projects/INDEX.md`

## 分類

| ディレクトリ | 対象 |
|---|---|
| `minecraft-plugins/` | Kotlin/Java/Paper/Purpur系プラグイン |
| `tools/` | 非プラグインのCLI、ブラウザツール、解析・変換ツール |
| `automation/` | AI連携、Discord連携、文字起こしなどの自動化 |
| `web/` | 静的サイト、Wiki、Web公開物 |

## ルール

- 各プロジェクトは `<category>/<project>/PROJECT.md` を持つ。
- `PROJECT.md` は概要だけでなく、AIが実装・検証・関連資料へ移動するための操作入口として書く。
- Platform本体のプラグイン実装の正本は `plugins/*/`。ここには公開可能な仕様・利用方法・思想・判断理由・作業入口を書く。
- 非プラグインのツール、Web、自動化プロジェクトは、必要に応じて実体ファイルも同じプロジェクトフォルダに置いてよい。
- Minecraftに関係するがサーバープラグインではないものは `tools/` に分類する。関連プラグインへの導線は `related_paths` と `AI 作業入口` に書く。
- 横断的な手順、調査、理論は `02_Docs/` に置く。
- 個人用メモ、秘密情報、未整理ログ、一時生成物は `docs/` に置かない。Git管理外の `archive/` または `local/` に退避する。
- プロジェクトを追加・削除・改名した場合は `INDEX.md` も更新する。

## PROJECT.md の必須入口

各 `PROJECT.md` は以下を持つ。

```yaml
project_kind: plugin | tool | automation | web
runtime_kind: paper-plugin | browser-tool | python-cli | node-service | static-site | local-only
minecraft_related: true | false
```

本文には `AI 作業入口` セクションを置き、少なくとも次を明記する。

- 実装の正本
- よく読むファイル
- ビルド・テスト・ローカル実行・デプロイの入口
- 関連プラグインまたは関連ツール
- 非公開メモの扱い
