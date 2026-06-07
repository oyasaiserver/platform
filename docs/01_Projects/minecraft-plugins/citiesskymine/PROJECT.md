---
title: "CitiesSkyMine — CitiesSkylines変換・GuiMakerシステム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/CitiesSkyMine/"
related_paths:
  - plugins/CitiesSkyMine/
  - plugins/CitiesSkyMine/GUIMAKER_GUIDE.md
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-05"
agent_task: null
---

# CitiesSkyMine

CitiesSkylinesの都市データをMinecraftワールドに変換するプラグイン。
GuiMakerシステムによるGUIビルダーも内包する。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/CitiesSkyMine/` |
| 主要コード | `plugins/CitiesSkyMine/src/main/kotlin/` |
| プラグイン定義 | `plugins/CitiesSkyMine/src/main/resources/plugin.yml` |
| 関連資料 | `plugins/CitiesSkyMine/GUIMAKER_GUIDE.md`, `docs/02_Docs/tools/oyasai-menu-editors-doc/` |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:CitiesSkyMine:compileKotlin` |
| ローカル反映 | `plugins/CitiesSkyMine/build/libs/CitiesSkyMine.jar` を `dev-server/plugins/CitiesSkyMine.jar` にコピーし、必要に応じてリロードまたは再起動 |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置き、このファイルには公開可能な判断だけを書く |

## GuiMaker

GUIを視覚的に設計・編集できるシステム。ドラフト/ライブの2フェーズで運用する。

詳細: `plugins/CitiesSkyMine/GUIMAKER_GUIDE.md`

### ドラフト/ライブ方式

- **ドラフト**: エディターで編集中の状態（プレイヤーには非公開）
- **ライブ**: 公開済み状態（プレイヤーが使用可能）

## 関連ドキュメント

- GuiMaker詳細: `plugins/CitiesSkyMine/GUIMAKER_GUIDE.md`
- PLATEAU Viewer: [`../../tools/plateau-viewer/PROJECT.md`](../../tools/plateau-viewer/PROJECT.md)
- CityGML Converter: [`../../tools/citygml-converter/PROJECT.md`](../../tools/citygml-converter/PROJECT.md)
