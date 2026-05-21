---
title: "CitiesSkyMine — CitiesSkylines変換・GuiMakerシステム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/CitiesSkyMine/"
related_paths:
  - plugins/CitiesSkyMine/
  - plugins/CitiesSkyMine/GUIMAKER_GUIDE.md
last_validated: "2026-05-20"
agent_task: null
---

# CitiesSkyMine

CitiesSkylinesの都市データをMinecraftワールドに変換するプラグイン。
GuiMakerシステムによるGUIビルダーも内包する。

## GuiMaker

GUIを視覚的に設計・編集できるシステム。ドラフト/ライブの2フェーズで運用する。

詳細: `plugins/CitiesSkyMine/GUIMAKER_GUIDE.md`

### ドラフト/ライブ方式

- **ドラフト**: エディターで編集中の状態（プレイヤーには非公開）
- **ライブ**: 公開済み状態（プレイヤーが使用可能）

## 関連ドキュメント

- GuiMaker詳細: `plugins/CitiesSkyMine/GUIMAKER_GUIDE.md`
- 外部ビューワー: [plateau-viewer.md](../02_Docs/tools/plateau-viewer.md)
