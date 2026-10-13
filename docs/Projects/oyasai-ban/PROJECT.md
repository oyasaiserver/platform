---
title: "OyasaiBan — Velocity BAN 管理"
status: active
source_of_truth: "plugins/OyasaiBan/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-velocity.nix
project_kind: plugin
runtime_kind: velocity-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiBan

Velocity 全体で BAN を管理し、ログイン時に有効 BAN を判定するプラグイン。AdvancedBan からの移行機能を持つ。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiBan/` |
| 主要コード | `OyasaiBanPlugin.kt`（登録・ログイン判定・BAN 後処理）、`BanCommand.kt`（5コマンド）、`OyasaiBanAdminCommand.kt`（`/oyasaiban`）、`Punishment.kt`（期間・引数の解析）、`PunishmentDatabase.kt`（SQLite）、`NameResolver.kt`（名前→UUID）、`AdvancedBanImporter.kt`（HSQLDB 解析）、`DiscordNotifier.kt`、`OyasaiBanConfig.kt` |
| メタデータ | `src/main/resources/velocity-plugin.json`（id `oyasaiban`、Floodgate は任意依存）。`@Plugin` 注釈にも同じ値がある |
| テスト | `src/test/kotlin/io/oyasai/oyasaiban/PunishmentParsersTest.kt`。期間解析と `/ban` 引数、AdvancedBan の解析（エスケープ・UUID 正規化・除外種別・`storage.log` の追加削除・名前だけの行の解決コールバック）、期限の境界、DB の期限切れ削除と取り込みの冪等性・既存 BAN を置き換えないこと。`NameResolver`・Webhook・コマンド・ログインイベントにはテストがない |
| ビルド | `nix develop --command gradle :plugins:OyasaiBan:build`（shadowJar で Kotlin stdlib と sqlite-jdbc を同梱した `OyasaiBan.jar`） |
| Nix package | `packages/oyasai-plugins.nix` が `oyasaiban` として公開し、`packages/oyasai-velocity.nix` がプロキシに入れる |

## 技術仕様

### 構成

- Velocity プラグイン。依存は Velocity API と（`compileOnly`・任意）Floodgate API。Floodgate のクラスは `FloodgateNameResolver` に閉じ込め、Floodgate が読み込まれているときだけ触る。
- `ProxyInitializeEvent` で DB・名前解決・設定を用意し、`ban`・`unban`・`check`・`history`・`banlist`・`oyasaiban` を登録する。別名はない。
- 5コマンドの `hasPermission` は「コンソール、または `oyasai.ban`」。`oyasaiban` はコンソールだけ。Velocity の権限は未設定なら false。
- `ProxyShutdownEvent` で DB を閉じる。

### `/ban` の解析（`BanArguments`・`DurationParser`）

- 単位は `y`(365日)・`mo`(30日)・`w`・`d`・`h`・`mi`・`s`。大文字小文字を区別せず、全体が単位の連なりでなければ null。合計0やオーバーフローも null。`m` は分か月か曖昧なので受け付けない。
- 2番目の引数が期間として読めれば期間 BAN（理由は3番目以降、必須）。読めず数字で始まれば `Invalid`。それ以外は永久 BAN で、2番目以降すべてが理由。
- `durationLabel` は打ち込んだ期間文字列（永久は「永久」）、`notificationReason` は理由の最初の1語。どちらも Webhook 用。
- 終了時刻は `now + millis` を `addExact` で計算し、溢れたら「期間が長すぎます」。
- 記録する `name` は `args[0]` そのもの（解決後の正式名ではない。`uuid:…` もそのまま入る）。

### 名前解決（`NameResolver`）

`uuid:` 接頭辞 → `proxy.getPlayer` → `seen_names`（`COLLATE NOCASE`、`last_seen` 降順の先頭）→ `.` 始まりなら Floodgate `getUuidFor`（10秒タイムアウト）→ Mojang `api.minecraftservices.com/minecraft/profile/lookup/name/<name>`（`[A-Za-z0-9_]{1,16}` のみ、接続5秒・応答10秒）。失敗はすべて null（ログに warn）。

### ログイン判定

`LoginEvent` を `EventTask.withContinuation` で非同期に止め、DB スレッドで `seen_names` 更新 → 全体の期限切れ削除 → `active_punishments` 照会をまとめて行う。有効 BAN があれば理由と残り期間（秒は切り上げ）で拒否。DB の例外時も拒否する（fail-closed）。DB 接続は起動時に非同期で開くため、開けなくてもプラグインは有効のままで、全ログインが拒否される。

### BAN 後処理（`afterBan`）

対象 UUID が接続中なら拒否画面と同じ文で切断 → 全プレイヤーに legacy 色コードのメッセージと `minecraft:item.mace.smash_ground_heavy`（音量0.5・ピッチ2.0）→ `DiscordNotifier.sendBan`。Webhook は手組みの JSON の embed（サムネイルは `vzge.me` の頭像）を `HttpClient.sendAsync` で投げっぱなしにする。URL が空なら毎回 warn。

### データ（`PunishmentDatabase`）

- `plugins/oyasaiban/punishments.db`。`journal_mode=WAL`・`synchronous=NORMAL`・`busy_timeout=5000`。全操作を単一スレッド `OyasaiBan-Database` で直列に行う。
- `active_punishments`（`uuid` 主キー＝1人1件）、`punishment_history`（自動採番、`uuid, start_at DESC` 索引）、`seen_names`（`uuid` 主キー、最後の名前と時刻）。`type` は `BAN`・`TEMP_BAN` の CHECK 制約付き。スキーマのバージョン管理・移行処理はない。
- `createBan` はトランザクションで、期限切れ削除 → 既存の有効 BAN があれば `AlreadyBanned` → active と history に挿入 → `seen_names` 更新。
- `unban` は active の行を消すだけで、解除の記録は残さない。
- 期限切れ削除（`end_at <= now`）は `login`・`createBan`・`check`・`banList`・取り込みの `run` で行う。`history` と `unban` では行わない。

### AdvancedBan 取り込み

- `storage.script` の `INSERT INTO [PUBLIC.]PUNISHMENTS|PUNISHMENTHISTORY` を行単位で読み、続けて任意の `storage.log` の INSERT と `DELETE … WHERE … ID=n` を ID 単位で反映する（`/*C数字*/` 接頭辞を除去）。列名付き INSERT は列名で、無ければ既定の列順で読む。`\uXXXX` を復号する。
- 種別は `-` を `_` に寄せて大文字化し、`BAN`・`TEMP_BAN` だけを変換する。件数（`activeCounts`・`historyCounts`）は全種別を数える。`END` が負なら永久。空の名前・理由・執行者は `unknown`・`none`・`CONSOLE`。
- UUID 欄はハイフンあり／なしを受け付け、読めなければ小文字の名前とみなして `usercache.json`（任意、名前は小文字化）→ Mojang 照会で解決する。この照会は DB スレッド上で同期実行される（`lookupMojangBlocking`）ため、その間ほかの DB 操作（ログイン判定を含む）が待つ。
- active は `isActiveAt(now)` かつ OyasaiBan 側に有効 BAN がない UUID だけ、history は `(uuid, type, start)` が未登録のものだけを新規とする。`run` は1トランザクションで挿入し、新規分の UUID ごとに最新の名前を `last_seen = 取り込み時刻` で `seen_names` に書く。`dry-run` は同じ計算をして書き込まない。

### 設定（`OyasaiBanConfig`）

YAML パーサーを使わず、行ごとに `#` 以降を捨てて `key: value` を読み、両端の引用符を外す。読むキーは `webhook-ban-url` だけ。ファイルが無ければ同梱の `config.yml` をコピーする。
