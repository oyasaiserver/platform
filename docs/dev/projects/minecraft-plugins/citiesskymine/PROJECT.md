---
title: "CitiesSkyMine — CitiesSkylines変換・建築支援システム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/CitiesSkyMine/"
related_paths:
  - plugins/CitiesSkyMine/
  - docs/dev/projects/minecraft-plugins/citiesskymine/specs/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-17"
agent_task: null
---

# CitiesSkyMine

CitiesSkylinesの都市データをMinecraftワールドに変換し、道路・交差点・建築補助コマンドを提供するプラグイン。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/CitiesSkyMine/` |
| 主要コード | `plugins/CitiesSkyMine/src/main/kotlin/` |
| プラグイン定義 | `plugins/CitiesSkyMine/src/main/resources/plugin.yml` |
| 仕様・規約入口 | `docs/dev/projects/minecraft-plugins/citiesskymine/specs/_MANIFEST.md` |
| コマンド追加・変更 | `specs/command-conventions.md` を先に読み、命名・ショートカット・引数・タブ補完・権限の規約に合わせる |
| 関連資料 | `docs/dev/guides/tools/oyasai-menu-editors-doc/` |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:CitiesSkyMine:compileKotlin` |
| ローカル反映 | `plugins/CitiesSkyMine/build/libs/CitiesSkyMine.jar` を `local/paperclip-tmp/plugins/CitiesSkyMine.jar` にコピーし、必要に応じてリロードまたは再起動 |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置き、このファイルには公開可能な判断だけを書く |

## 関連ドキュメント

- **仕様・規約入口**: [`specs/_MANIFEST.md`](specs/_MANIFEST.md)
- **コマンド追加・変更規約**: [`specs/command-conventions.md`](specs/command-conventions.md)
- **仕様案: キャンバスのブランチ/マージ管理**: [`specs/canvas-branch-management.md`](specs/canvas-branch-management.md)
- **仕様案: 柱割り・間隔サジェスト**: [`specs/column-layout-assistant.md`](specs/column-layout-assistant.md)
- **ユーザーガイド（Discord投稿用）**: [`../../../guides/tools/citiesskymine-user-guide.md`](../../../guides/tools/citiesskymine-user-guide.md)
- **管理者ガイド（Discord投稿用）**: [`../../../guides/tools/citiesskymine-admin-guide.md`](../../../guides/tools/citiesskymine-admin-guide.md)
- メニュー編集: `docs/dev/guides/tools/oyasai-menu-editors-doc/`
- PLATEAU Viewer: [`../../tools/plateau-viewer/PROJECT.md`](../../tools/plateau-viewer/PROJECT.md)
- CityGML Converter: [`../../tools/citygml-converter/PROJECT.md`](../../tools/citygml-converter/PROJECT.md)

## つながり

- [build-master](../build-master/PROJECT.md) — FAWE と CitiesSkyMine をつなぐ建物コピー・WorldEdit ブリッジ
- [citygml-converter](../../tools/citygml-converter/PROJECT.md) — CityGML を CitiesSkyMine 向けに変換するツール
- [plateau-viewer](../../tools/plateau-viewer/PROJECT.md) — PLATEAU 都市データを確認するビューア
- [oyasai-menu](../oyasai-menu/PROJECT.md) — GUI メニューの仕組みとエディター資料
- [仕様と実装規約の入口](specs/_MANIFEST.md)
- [ベストプラクティス](specs/best-practices.md)
- [実装規約](specs/implementation-conventions.md)
- [ユーザーガイド](../../../guides/tools/citiesskymine-user-guide.md)
- [管理者ガイド](../../../guides/tools/citiesskymine-admin-guide.md)
- [プロジェクト一覧](../../INDEX.md)
