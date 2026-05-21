# docs/_MANIFEST.md — ドキュメント権限・Tier定義

本ファイルはAIエージェントが `docs/` 内で作業する際の**ソースオブトゥルース（SOT）**。
Antigravityワークスペースのマニフェスト設計を参考に、platform固有の文脈に適合させたもの。

> **改変禁止**: 本ファイルはAIが単独で書き換えてはならない。
> 変更が必要な場合はユーザーに提案し、承認を得てから実施すること。

---

## Tier 分類

| Tier | ディレクトリ | 分類 | 書き込み |
|------|------------|------|---------|
| **Tier 1 (Canonical)** | `00_Context/` | AI向けナビゲーション・プロジェクトSOT | 慎重に（提案→承認） |
| **Tier 1 (Canonical)** | `01_Projects/` | 個別プロジェクト単位の資料（プラグイン・ツール・自動化・Web） | 可（実態に合わせて更新） |
| **Tier 2 (Domain)** | `02_Docs/tools/` | 外部ツール・HTML資料 | 可（実態に合わせて更新） |
| **Tier 2 (Domain)** | `02_Docs/ops/` | デプロイ・運用手順 | 可（実態に合わせて更新） |
| **Tier 2 (Domain)** | `03_Outputs/` | 生成物・キャッシュ・検証出力 | 可（追記主体） |
| **Tier 2 (Domain)** | `04_Resources/` | 小さな参照素材・設定例・サンプル入力 | 可（小容量のみ） |
| **Tier 3 (Archival)** | `05_Archives/` | 廃止仕様 | **原則禁止**（移送のみ） |
| **Tier 4 (Inbox)** | `99_Inbox/` | 未分類・判定保留 | 自由（整理後に移動） |

## `01_Projects/` の分類

`01_Projects/` はMinecraftプラグイン専用ではない。Platform周辺で扱う個別プロジェクトを、実装形態に応じて以下へ分類する。

| ディレクトリ | 対象 | 例 |
|---|---|---|
| `01_Projects/minecraft-plugins/` | Kotlin/Java/Paper/Purpur系プラグイン、またはそれに準ずるサーバープラグイン | `oyasai-menu`, `citiesskymine`, `oyasai-pets`, `build-master` |
| `01_Projects/tools/` | 非プラグインのCLI、ブラウザツール、解析ツール、変換ツール | `minecraft-glass-gradient`, `plateau-viewer`, `citygml-converter` |
| `01_Projects/automation/` | AI連携、Discord連携、文字起こしなどの自動化プロジェクト | `ai-debate`, `discord-codex-bridge`, `auto-transcription` |
| `01_Projects/web/` | 静的サイト、Web公開物、Wiki | `oyasai-wiki` |

---

## SOT（正本）の所在

| 文書種別 | 正本の場所 | 理由 |
|---------|----------|------|
| Kotlinプラグインの仕様 | `plugins/*/src/` のコード | コードが変わるたびに文書も変わるため |
| プロジェクトの設計判断・背景 (Why) | `docs/01_Projects/<category>/<project>/PROJECT.md` | コードから読み取れないコンテキストを保持 |
| 非プラグインツールの実体ミラー | `docs/01_Projects/tools/<tool>/` など | Antigravity側で編集されたツールをプロジェクト単位で保持 |
| 外部ツールの配布元 | 各ツールのGitHubリポジトリ | 公開リポジトリが存在する場合の上流 |
| AIエージェント向け規約 | `docs/00_Context/AGENTS.md` | 本ファイル + AGENTS.md の2点セット |
| ビルド・デプロイ手順 | `docs/02_Docs/ops/deploy.md` | ただしNixfile/build.gradleが真のSOT |

## 配置ルール

- `PROJECT.md` は各プロジェクトフォルダに1つ置く。
- Platform本体のMinecraftプラグインは、実装を `plugins/*/` に置き、`docs/01_Projects/minecraft-plugins/*/PROJECT.md` には仕様・利用方法・思想・判断理由を書く。
- 非プラグインのツール、Web、 automation は、必要に応じて `docs/01_Projects/<category>/<project>/` に実体ファイルも置いてよい。
- 横断的な手順、理論、調査資料は `01_Projects/` ではなく `02_Docs/` に置く。
- 生成物、比較結果、キャッシュは `03_Outputs/` に置く。
- 小さな参照素材、設定例、サンプル入力は `04_Resources/` に置く。巨大データ本体は置かない。
- どこに分類すべきか判断できないものは `99_Inbox/` に一時配置する。

---

## AIエージェントへの読み順

1. `docs/_MANIFEST.md`（本ファイル）
2. `docs/00_Context/AGENTS.md`（ルーティング・作業規約）
3. `docs/00_Context/CONTEXT.md`（技術スタック・設計思想）
4. `docs/00_Context/INDEX.md`（全体索引）
5. タスク該当プロジェクトの `PROJECT.md`

---

## 外部参照

- Antigravityワークスペース理論文書: `~/Desktop/Antigravity/02_Docs/`
  - `glass_gradient_theory.md` — ガラスグラデーションのアルゴリズム理論
  - `plugins_overview.md` — プラグイン全体俯瞰
  - `plugin_dependencies.md` — プラグイン依存関係
  - `claude_cowork_best_practices_ja.md` — Claude協調ベストプラクティス
- 各ツールGitHub: `https://github.com/marzipan99/`
