---
title: "OyasaiUtilities — 小物系ユーティリティ集"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiUtilities/"
related_paths:
  - plugins/OyasaiUtilities/src/main/kotlin/icu/oyasai/utilities/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
agent_task: null
---

# OyasaiUtilities

おやさい鯖向けの小規模ユーティリティ機能をまとめた複合プラグイン。README（`plugins/OyasaiUtilities/README.md`）に機能別の説明がある。

## 内蔵機能

| 機能 | 内容 |
|---|---|
| NotNBT | クリエ経由のアイテム持ち出し対策（NBTタグ除去） |
| OreReappears | 鉱石が時間経過で再生成するワールド機能（`/orerepopreload`, `/orerepopswitch`） |
| AdminBP | ページ送り可能な管理者用バックパックGUI（`/adminbp`, `abp`） |
| OreSmelter | 自動精錬（`/oresmelter`, `os`） |
| GetUUID | プレイヤーUUID取得（`/uuid`） |
| TimerBar | ボスバー式タイマー（`/timerbar`） |
| TPath | テレポート履歴の戻る/進む（`/back`, `/forward`） |
| TPswitch | `/tpset` で TP 受付と許可・拒否リストを管理。設定は SQLite に保存 |
| CreativeManagement | クリエ/サバイバル間のアイテム受け渡し制限（`cm.bypass`） |
| DebugOnBE | ブロック配置デバッグ表示・Togo設定GUI（`/debugonbe`, `/togo`, `/togom`） |
| Workstations | EssentialsX 互換の `/skull`, `/hat`, `/enderchest`, 作業台系（仕様は `plugins/OyasaiUtilities/WORKSTATIONS.md`） |

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiUtilities/src/main/kotlin/icu/oyasai/utilities/` |
| 仕様の正本（Workstations） | `plugins/OyasaiUtilities/WORKSTATIONS.md` |
| 主要コード | `Main.kt`（エントリ）、機能ごとに `adminbp/`, `ore_reappears/`, `oresmelter/`, `debugonbe/` 等のサブパッケージ |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiUtilities:compileKotlin` |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置く |

## 統合版（Bedrock）の頭（`/skull`）

仕様は `plugins/OyasaiUtilities/WORKSTATIONS.md`。ここは作業中に踏みやすい落とし穴。

- Java 側の名前で `.` 付き（`.gamertag`）を指定したときだけ、統合版の経路に入る（`BedrockSkull.kt`, `WorkstationFeature.skull`）。統合版の名前を Mojang の名前照会へ落とすと、同名の Java プレイヤーのスキンになる。失敗時は中止する。
- 統合版の Floodgate UUID（`00000000-0000-0000-` 始まり）は Mojang の sessionserver に存在しない（HTTP 204）。統合版の名前・UUID を Mojang で解決しようとしない。
- Global API `GET https://api.geysermc.org/v2/skin/{xuid}` は、保存済みならスキン情報の JSON（`texture_id`, `value` など）を返し、未保存なら `{}` を返す（[公式説明](https://geysermc.org/wiki/api/api.geysermc.org/global-api-web-api-skin-controller-get-skin/)）。`texture_id` が 64 桁 hex であることは未実測。
- Floodgate の公式 features には、Bedrock スキンの Java 形式への変換と Mojang へのアップロードが記載されている（[Floodgate features](https://geysermc.org/wiki/floodgate/features/)）。「そうした機能はない」と断定しない。
- Geyser の custom skull は事前登録方式で、起動時にリソースパックを生成する。稼働中に追加する API は確認できていない（未確認）。統合版クライアントで見せるには、登録と再起動が必要。
- Floodgate API（`FloodgateApi.getPlayer`、`FloodgatePlayer.getJavaUsername` / `getXuid`）は、2.2.5-SNAPSHOT の jar でメソッドの存在を確認済み。
- Geyser の設定は、運用環境ではプロキシ側にある構成があり得る。backend の `plugins/` に残っている設定ファイルが読み込まれているとは限らないので、起動ログで確認する。
- 状態（2026-10-13）: 解析部分（`parseTextureId`、XUID 検証）だけユニットテストあり。実サーバーでの Global API の応答と、統合版クライアントでの表示は未確認。
