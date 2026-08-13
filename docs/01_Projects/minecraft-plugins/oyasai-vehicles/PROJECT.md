---
title: "OyasaiVehicles — 乗り物ビルダーシステム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiVehicles/src/main/kotlin/io/oyasai/"
related_paths:
  - plugins/OyasaiVehicles/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-07-22"
agent_task: null
---

# OyasaiVehicles

おやさい鯖の乗り物プラグイン。`CarBuilder2`（車両ビルダー）と`AircraftBuilder`（航空機ビルダー）でカスタム乗り物を作成・試乗でき、`MileagePoint`（マイルポイント）や`TimeAttack`（タイムアタック）も内蔵する。paperweight-userdev（NMSアクセス）でエンティティのパケット送信・物理演算を扱う。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiVehicles/src/main/kotlin/io/oyasai/` |
| 主要コード | `OyasaiVehicles.kt`（メイン）、`anybuilder/carbuilder2/`, `anybuilder/aircraftbuilder/`, `vehicle/`（走行物理） |
| コマンド | `/realvehicle`（`rvmenu`）, `/carbuilder2`（`cbmenu`）, `/aircraftbuilder`（`acmenu`）, `/milepoint`, `/timeattack`（`ta`） |
| 依存 | FAWE（compileOnly）、paperweight userdev |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiVehicles:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |
