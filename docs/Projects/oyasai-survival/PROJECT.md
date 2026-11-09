---
title: "OyasaiSurvival — サバイバル補助"
status: active
source_of_truth: "plugins/OyasaiSurvival/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-survival.nix
  - gradle/libs.versions.toml
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-11-05"
---

# OyasaiSurvival

収穫・倉庫・湧き上限と距離・エンダーチェストの引き継ぎをまとめた Java プラグイン。
SurvivalHarvest 1.2.0、SurvivalPull 3.0.0、SurvivalSpawnLimit 1.1.0、SurvivalEnderKeep 1.0.0 の機能を引き継ぐ。
使い方は [プレイヤー向け](player.md) を参照。

## 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiSurvival/` |
| エントリポイント | `src/main/java/io/oyasai/survival/OyasaiSurvival.java` |
| 共通の起動・設定 | `SurvivalFeature.java`、`LegacyDataMigration.java` |
| 機能の実装 | `io/oyasai/survival/` 以下の `harvest/`・`pull/`・`spawnlimit/`・`enderkeep/` |
| リソース | `src/main/resources/plugin.yml`、`pull/`・`spawnlimit/`・`enderkeep/` |
| テスト | `src/test/java/io/oyasai/survival/`、`src/test/resources/warehouses-2.7.yml` |
| ビルド | `nix develop --command gradle :plugins:OyasaiSurvival:build` |
| 出力 | `plugins/OyasaiSurvival/build/libs/OyasaiSurvival.jar` |

## 構成とライフサイクル

Java 25、Purpur API、`api-version: '26.3'` を使う。Gradle の共通設定が `java-library` と ShadowJar を適用し、`plugin.yml` の `${version}` を展開する。実行時の追加依存はない。テストは共通の JUnit Jupiter と Mockito を使う。

`OyasaiSurvival` だけが `JavaPlugin` を継承する。各機能は通常の Java クラスで、共通の `SurvivalFeature` が機能別の設定とライフサイクルを担当する。Bukkit のイベント・スケジューラ・チャンクチケット・プラグインメッセージの所有者は共通の本体。

起動は harvest → pull → spawnlimit → enderkeep、停止は逆順。機能の生成・起動を個別に例外処理し、失敗した機能をログに出して他の機能を継続する。起動途中で失敗した機能は、登録済みリスナーを解除して終了処理を呼び、そのコマンドを機能の処理から切り離す。終了処理の例外も記録する。

## 機能

### harvest

- 成熟した小麦・ニンジン・ジャガイモ・ビートルート・ネザーウォートをメインハンドの右クリックで収穫し、成長段階を戻す。種は消費しない。
- スニーク時は同じ高さで東西南北につながる同種の作物を最大128マス訪問する。未成熟のマスは通過のみ。
- サトウキビは右クリックした列の一番下の1ブロックを残し、その上を上から順に空気にしてドロップを落とす（物理更新なし）。スニーク時は一番下の段で東西南北につながる列を最大128列たどる。
- 各収穫で `BlockBreakEvent` の拒否を確認する。サトウキビは拒否されたブロックで止め、その下は残す。
- 丸太・幹の破壊後、1 tick 後に所持品の対応する苗木・菌類を1つ植える。地面・空気・オンライン状態を再確認し、`BlockPlaceEvent` で拒否された場合は元の状態に戻す。
- プレイヤー・モブによる耕地の踏み荒らしをキャンセルする。

### pull

- `/wh` で登録する範囲とメンバーに基づき、現在位置から範囲までの各軸の距離が探索半径以内にある最寄りの利用可能な倉庫1件を選ぶ。
- 対象はチェスト・トラップチェスト・樽・シュルカーボックス。両側チェストの範囲外の半分も扱う。
- `WarehouseManager` が登録・メンバー・除外・リンクの YAML を保持する。`WarehouseIndex` が実物の枠と個数を照合して移動し、不一致は対象容器を再読込する。
- `WarehouseSnapshot` の不変コピーから一覧を作る。`WorkPipeline` が処理を tick に分割し、検索・集計・JSON の準備を非同期で行う。アイテムの移動・Bukkit 操作はメインスレッド。
- `WarehouseInput` がリンク投入口から自動格納する。名前付きアイテム・除外種類・入りきらない物は投入口に残る。
- `WarehouseLock` が倉庫の開封・自動搬送・破壊・爆発・ピストン・燃焼を制御する。
- `/pull` は対応 MOD があれば MOD 画面、なければ `PullGui` を開く。`/pull gui` は常に GUI。
- `/pullbench` のコマンド・CSV 形式も引き継ぐ。性能測定設備の操作はコンソール専用で、既定では無効。

#### クライアント通信

チャンネルは `survivalpull:main`。UTF-8 の JSON オブジェクトをそのままペイロードにし、`t` で種類を示す。

| 方向 | 種類と内容 |
|---|---|
| クライアント → サーバー | `list`、`pull`（`id`・`n`・省略可能な `k`） |
| サーバー → クライアント | `open`、`list`（`scope`・`items`）、`pulled`（`id`・`n`・`k`）、`error`（`msg`） |

一覧の各アイテムは `id`・`n`・`src`・`k` を持つ。`src` は上位3容器の座標と個数。個体データを持つ場合だけ `item` に個数1の Paper アイテムバイト列を Base64 で載せる。個体キーは同バイト列の SHA-256 の先頭16桁。素の物と旧クライアントの省略キーは空文字。

取り出し数は1〜2304、`-1` は入るだけ、`0` は1スタック。サーバー側で種類・個体キー・個数・利用可能な倉庫を検証し、1プレイヤーの要求は1 tick に1回まで。検索用の紙のマーカー `survivalpull:search-paper` も維持する。

### spawnlimit

`/spawnlimit`（別名 `/sl`）と `/distance` の表示・変更・補完を引き継ぐ。保存されている値だけを起動時とワールド読込時に適用する。湧き上限は MISC を除くカテゴリの0以上、描画・シミュレーション距離は2〜32。`sim` は `simulation` の省略形。

### enderkeep

メインワールドの UUID が保存時と変わった場合だけ、ログイン時にエンダーチェストを復元する。埋まったマスが5つを超えたら5マスを抽選し、元のマスに戻す。シュルカーボックスとバンドルは本体のメタデータを維持して中身を空にする。復元直後は元のペイロードと新しいワールド UUID を保存し、二重復元を防ぐ。

Paper のアイテムバイト列・ワールド UUID・個数・CRC32 をプレイヤー別ファイルに保存する。読み書きは単一の専用スレッドで順序を保ち、アイテム操作はメインスレッドで行う。破損時はその接続での復元・通常保存を止め、以前のファイルを保持する。停止時は最大30秒、保存を待つ。`/enderkeep info <player>` も維持する。

## 設定・永続化の仕様

保存先は共通データフォルダの下の `pull/`・`spawnlimit/`・`enderkeep/`。設定の既定ファイルと日本語名リソースも jar 内の同名サブフォルダから取得する。harvest に設定はないが、既存データがあれば `harvest/` に移行する。

`LegacyDataMigration` は対象サブフォルダが存在せず、対応する旧プラグインのデータフォルダがある場合だけ全ファイル・下位ディレクトリをコピーする。旧フォルダは変更しない。既存の移行先は空でも上書きしない。

コピーは同じ親ディレクトリの一時領域で完了させ、atomic move で移行先を確定してから成功ログを1行出す。途中失敗はその機能の起動を止め、移行先に不完全なデータを公開しない。シンボリックリンクなど通常ファイル以外は失敗として扱う。atomic move に対応しないファイルシステムでは移行しない。

設定の既定値・倉庫 YAML・エンダーチェストのバイナリ形式・コマンドの権限宣言は元の形式を維持する。

## テストと確認範囲

元の Java テストと倉庫の旧形式 fixture を移植した。Bukkit API に渡す所有者とリソースの場所に関する期待値だけを統合後の構造へ合わせた。

追加テストは、4機能のコピー・元データ保持・既存移行先の保護・途中失敗後の再試行、起動／停止失敗の分離、設定の既定値・移行・保存先を対象にする。

2026-11-05 時点でコード・宣言・リソースの静的照合を実施。統合版のビルド・単体テスト・実サーバー・実クライアントとの接続は未確認。

## 制限と判断

- 2026-11-05: 既存の挙動を保つため Java のまま統合し、通信とデータ形式を変更しない。
- 倉庫は他プラグインによる容器への直接編集や保護との統合を保証しない。空枠への外部追加は再読込まで一覧に出ない場合がある。
- 木の植え直しは1本のみ。2×2の苗木を自動で揃える機能はない。
- エンダーチェストは強制終了時に直近の未保存の変更を失う可能性がある。ワールド UUID が同じなら復元しない。
