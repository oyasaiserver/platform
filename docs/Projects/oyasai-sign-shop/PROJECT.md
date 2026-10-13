---
title: "OyasaiSignShop — 看板ショップ"
status: active
source_of_truth: "plugins/OyasaiSignShop/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
  - plugins/OyasaiLWC/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiSignShop

外製 SignShop の `sellers.yml` を取り込み、看板・リンクした箱やレバーで Vault 経済の取引をする自作プラグイン。取引は SQLite に記録し、結果が確かめられない取引があると店を止める。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-sign-shop/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiSignShop/` |
| 主要コード | `SignShopPlugin.kt`（イベント・登録・取引・保護）、`ShopStore.kt`（SQLite・旧 YAML 取込）、`ShopData.kt`（店レコード・値段・座標・商品の符号化）、`Trade.kt`（入出金と補償）、`StockPlan.kt`（品物移動の計画と復元）、`LegacyDataMigration.kt`（旧フォルダコピー） |
| テスト | `src/test/kotlin/io/oyasai/signshop/`。`SignShopTest` は `denyUse`、Vault 応答の判定、値段の解釈、`Trade` の補償と停止、旧 YAML 取込（1回だけ・不正 YAML の拒否）。環境変数 `SIGN_SHOP_REAL_YAML`（＋`SIGN_SHOP_EXPORT_PYTHON`）があれば実データの往復も試す。`LegacyDataMigrationTest` は旧フォルダコピー。`tools/test_export_sqlite_to_sellers.py` は書き出しツール。`StockPlan`、登録ルール、イベント・保護、Vault/LWC 連携にはテストがない |
| 運用手順 | `tools/RUNBOOK.md`（退避、旧版書出し、未照合取引の照合） |
| ビルド | `nix develop --command gradle :plugins:OyasaiSignShop:build`（`OyasaiSignShop.jar`）。SQLite JDBC と Kotlin stdlib は同梱、OyasaiLWC は `compileOnly` |
| Nix package | `packages/oyasai-plugins.nix` が検出し `oyasaisignshop` を公開、`packages/oyasai-minecraft-main.nix` が使う |

## 技術仕様

### 構成

- `plugin.yml`: `provides: [SignShop]`、`depend: [Vault]`、`softdepend: [LWC]`。コマンドは `/signshop list` のみ（権限なし）。
- onEnable で、自分以外に名前 `SignShop`/`OyasaiSignShop` または `provides` に `SignShop` を含むプラグインがあれば無効化する。
- LWC は `getPlugin("LWC") as? com.griefcraft.lwc.LWCPlugin`（OyasaiLWC の互換 API）。見つからないと登録は拒否、取引も拒否するので実質必須。
- 店は `store.shops`（`(section, key)` → `Shop`）をメモリに持ち、`reindex` で看板座標・リンク箱座標・看板の支えブロック座標の索引を作る。`reindex` は登録・削除・`WorldLoadEvent` で再実行。支えは看板のチャンクが読み込まれているときだけ求め、`ChunkLoadEvent` で追加する（壁付きは背面、それ以外は真下。天井の吊り看板も真下として扱う）。

### 店レコード

- 外製 SignShop のレコードをそのまま `MutableMap` で持ち、未知のフィールドも保持する。使うキーは `shopworld`、`owner`（UUID 文字列）、`sign`、`containables`、`activatables`（`x/y/z[/world]`）、`items`（`YAML:` + Base64 の `ItemStack.serialize()`。他の形式は読めない）。
- 種類は看板表面1行目 `[Buy]` 等（大小無視、先頭の色コード1つは除去）。値段は表面4行目。`priceYen`: 前後空白・先頭の `¥`/`￥`/`$` を除き、整数か3桁区切りのカンマ、小数は HALF_UP で丸める。負数、正の値が 0 に丸まるもの、10兆超は不可。
- 看板1行目は `refreshSign` が `§1[種類]`（取引可能の見込み）/`§4[種類]` に書き換える（裏面は1行目が同じ文字列のときだけ）。更新は起動時・チャンク読込・登録・取引後・停止時・Device のレバー復帰時だけで、箱の中身の変化では更新しない。

### 登録（`register`）

- レッドストーンで容器かレバーを左クリックすると、プレイヤーごとの `LinkedHashSet` に追加する。取り消しはなく、登録成功時にだけ消える（退出でも消えない）。
- 看板左クリック: レッドストーン＝作成（既存店なら更新）、イカスミ＝更新（選択が空なら既存のリンクを使う）、本と羽ペン＝閲覧、金のオノ＝案内だけ出してキャンセルしない、それ以外＝プレビュー。金のオノ以外はイベントをキャンセルする。
- 判定順: 店主か管理者（更新時）→ 作成権限（新規時）→ 値段 → 選択数 1〜100・同一ワールド → 全ブロックが読込済みかつ LWC アクセス可 → 種類に応じた箱/レバーの有無 → 容器の種類（`CHEST`・`TRAPPED_CHEST`・`BARREL`・`*SHULKER_BOX` だけ）→ 見本。他の店のリンク箱かどうかは見ない。
- 見本は1つ目の容器の中身すべて（`iBuy`/`iSell` も容器が必要）。新規キーは看板座標文字列から `.` を除いたもの、領域は `sellers`。更新は元の領域・キー・owner を引き継ぎ、`haltReason = null` で保存するので**停止が解除される**。

### 取引（`trade`）

- 拒否（「この店は現在利用できません」）: `dbHealthy` が false、停止中、領域が `sellers` 以外、`denyUse`、同じ店か同じ箱を使う取引が実行中。`dbHealthy` は DB 書き込み失敗で false になり、再起動まで戻らない。
- 以降の拒否は `reject` で `failed` 行を1件書く（書けなければ店を停止）。値段が読めない・使えない容器へのリンクは店を停止してから拒否する。
- 品物: `StockPlan.plan` が箱（読込済みのものだけ。最初に成立した1つ）とプレイヤー持ち物（スロット 0〜35）の変更を `isSimilar` で計画し、`apply` で変更前を確かめてから書く。途中で失敗すれば書いた分を戻す（`RESTORED`）、戻せなければ `UNKNOWN`。
- 入出金（`Trade`）: 品物より先にすべて行う。`Buy`/`Device` は客→店主、`Sell` は店主→客、`iBuy` は客から引くだけ、`iSell` は客に入れるだけ。残高確認は `Sell` は店主、`iSell` はなし、他は客。値段 0 なら経済を呼ばない。Vault 応答は成功かつ金額一致で OK、`FAILURE` で失敗、他は不明。
- 失敗時は成功した入出金を逆順で戻す（`failed`/`compensated`）。結果不明・品物の復元不明・終状態の保存失敗・例外は `pending` のまま店を停止、取り消し失敗は `compensation_failed` にして停止。
- Device: 全レバーがオフであることを確かめ、オンにして 200 tick 後にオフへ戻す。レバーは保護しない。

### 保護

- `PlayerInteractEvent`（HIGHEST、`ignoreCancelled`、メインハンドのみ）でリンク箱の右クリック、`InventoryOpen/Click/Drag`（上側インベントリ。ラージチェストは両側）を、管理者でも全リンク店の店主でもなければキャンセル。
- `BlockBreakEvent`: 支えブロックは全員キャンセル。看板・リンク箱は店主か管理者だけ、クリエイティブでは金のオノが必要。看板を壊すと店を削除、リンク箱を壊すとリンクしている店を停止。
- 爆発・延焼・ピストンは看板・支え・リンク箱を除外/キャンセル。ホッパー（`InventoryMoveItemEvent`）とレバーは扱わない。
- 管理者 = OP・`Signshop.Destroy.Others`・`SignShop.SuperAdmin`。作成権限は `canCreate`（SuperAdmin を含まない）。

### データ

- `plugins/OyasaiSignShop/shops.db`。WAL、`synchronous=FULL`、`busy_timeout=5000`。停止時に `wal_checkpoint(TRUNCATE)`。
- テーブル: `schema_meta`、`shops`（`section`・`shop_key`・`record_yaml`・`halt_reason`・`updated_at`）、`shop_transactions`（種類・客/店主 UUID・金額・状態・詳細・開始/終了時刻・`reviewed_at`・`review_note`）。
- 3テーブルとも空なら: `sellers.yml` があれば取込（3領域と整数 `DataVersion` 必須、別名・タグ・重複キー・非文字列キーは拒否、3領域以外のルートキーは `source_root_yaml` に保存、SHA-256・領域ごとの件数とキー集合の SHA-256 を `schema_meta` に記録し、読み戻して照合）。なければ新規として `fresh` を記録。空でなければ `schema_version=1` と `imported_at` か `fresh` を要求し、なければ起動を止める。
- 起動時、`pending`/`compensation_failed` で `reviewed_at IS NULL` の取引がある店をメモリ上で停止する。
- `onLoad` で、`plugins/OyasaiSignShop/` が存在せず `plugins/SignShop/` があれば一時フォルダへ全体をコピーしてから移動する。失敗時は新フォルダを作らず無効化する。
- 書き出し `tools/export_sqlite_to_sellers.py`（PyYAML 6.0.2）は読み取り専用で開き、未照合取引があれば拒否、既存ファイルは上書きしない。`halt_reason` と取引記録は書き出さない。

## 運用上の注意

運営向けの手順は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-sign-shop/operator.md) と [`tools/RUNBOOK.md`](../../../plugins/OyasaiSignShop/tools/RUNBOOK.md)。プラグインの挙動を変えたら player/operator も直す。
