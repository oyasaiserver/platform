---
title: "Vault — SQLite 経済"
status: active
source_of_truth: "plugins/Vault/"
source: "plugins/Vault/（コードから作成。ゲーム内での確認は未実施）"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
  - packages/oyasai-minecraft-axiom.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# Vault

Vault の Economy API を実装し、Essentials の経済を SQLite の台帳へ置き換える自作プラグイン。`name: Vault`・`load: STARTUP` で既存の Vault を置き換えます。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)
- 移行・切り戻しの手順: [RUNBOOK](../../../plugins/Vault/tools/RUNBOOK.md)
- 設計の経緯: [DESIGN](../../../plugins/Vault/DESIGN.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/Vault/` |
| 主要コード | `src/main/kotlin/io/oyasai/vault/VaultPlugin.kt`（コマンド・イベント・提供元と Essentials の検査・取引の停止判定）、`VaultEconomy.kt`（Economy API の実装）、`Ledger.kt`（SQLite 台帳と `Money` の金額規則）、`src/main/kotlin/net/milkbowl/vault/Vault.kt`（plugin.yml の main クラス。`VaultPlugin` を継承するだけ） |
| 移行・復旧ツール | `tools/migrate_essentials_to_sqlite.py`（停止中の userdata から DB を作る）、`tools/restore_sqlite_to_essentials.py`（DB の残高を userdata へ書き戻す） |
| テスト | `src/test/kotlin/io/oyasai/vault/`。`LedgerTest` は金額規則、残高・送金・不変条件、同時出金、改ざんの検出、同名の解決。`VaultPluginTest` は plugin.yml の main クラス、Essentials 別名の判定、コマンドの分解。`tools/test_migrate.py` は移行の丸めと照合、戻し、照合失敗時の空 DB。コマンドの出力・権限・イベント・提供元の検査・API の応答・Essentials の実動作はテストにない |
| ビルド | `nix develop --command gradle :plugins:Vault:build`（`Vault.jar`。`build` は `shadowJar` に依存） |
| Nix package | `packages/oyasai-plugins.nix` がディレクトリ名から検出し `vault` を公開する。サーバー向けの組み合わせは `packages/oyasai-minecraft-main.nix` と `packages/oyasai-minecraft-axiom.nix` に `vault` として入る |

## 技術仕様

### 構成

- plugin.yml: `name: Vault`、`main: net.milkbowl.vault.Vault`、`load: STARTUP`、`api-version: "1.21.11"`、`version: "0.1.0"`（直書き。ルートの `processResources` は plugin.yml に `expand` をかけるが、プレースホルダーがないので Gradle の `version` は入らない）。コマンドは `balance`・`pay`・`balancetop`・`eco`・`vault-info`。各コマンドの `permission:`（`vault-info` 以外）で Bukkit が `onCommand` より前に権限を判定する。`permissions:` セクションはなく、`depend`・`softdepend` も宣言していない。
- Gradle の依存: Purpur の dev bundle（`paperweightDevelopmentBundle`）、Kotlin stdlib・SQLite JDBC・VaultAPI 1.7.1（implementation。VaultAPI のため `jitpack.io` を repositories に追加）。`build` は `shadowJar` に依存し、ルートの設定で `runtimeClasspath` が同梱される想定。ビルド成果物の中身は未確認。
- 設定: `config.yml` は `economy-enabled: true` の 1 項目。
- 同梱資料: `LICENSE-VaultAPI-LGPL-3.0.txt`（VaultAPI の LGPL v3 本文）。

### 起動と検査

- `onEnable`: `saveDefaultConfig`、コマンド別名の取得、`VaultEconomy` の作成。`economy-enabled` が true なら `dataFolder` を作り `Ledger("economy.db")` を開く。開けなくても、Economy サービスは `ServicePriority.Highest` で登録する（`isEnabled` が `ready` を返すので取引だけ止まる）。その後イベントを登録し、次の tick に `verify()` を呼ぶ。
- `onLoad`（`ServerLoadEvent`）: 再度コマンド別名を取り、`verify()`。
- `verify()`: `verified = false` から始め、次を満たすときだけ true にする。
  - `economy-enabled` が true、`ledger` がある、`dbHealthy` が true
  - Economy の最優先の登録（`getRegistration`）が自分の `VaultEconomy` であること
  - Essentials が入っていれば、その `config.yml` の `disabled-commands` に必須 9 件（大文字小文字は無視）が含まれること。Essentials がなければこの条件は見ない
- `ready` = `economy-enabled && ledger != null && dbHealthy && verified`。`config` を毎回参照するが、`reloadConfig()` を呼ぶ箇所はないため、稼働中に `config.yml` を書き換えても反映されない（再起動が必要）。
- `read {}` は `ledger` があれば DB を読む。`ready`・`verified`・`dbHealthy` は見ない。
- `write {}` は `ready` でないと null を返す。例外が出ると `dbHealthy = false`、`verified = false` にし、以後 `dbHealthy` は再起動まで戻らない。
- `read {}` は SQLException のときだけ `dbHealthy = false`。それ以外の例外はログに出して null を返す。

### 主要な処理の流れ

- **Vault API の入出金**（`VaultEconomy.response`）: 金額を `Money.round` で整数の円にする（失敗なら「金額が無効です」）→ `uuid == null` か `!ready` なら「経済を利用できません」→ `write { change(...) }`。`change` が null（残高不足・上限・下限・口座なし・例外）なら「残高不足、上限超過、または口座がありません」。出金の下限は、オンラインで `essentials.eco.loan` を持つときだけ MIN。0 円は成功し、残高も履歴も変えない。名前指定の API は `resolve` が同名で例外を出すと `read` が null を返し、口座なしと同じ扱いになる。`has` は `ready` も loan も見ない。
- **参加**（`PlayerJoinEvent`）: `ready` のときだけ `join(uuid, name)`。同じ名前の他口座の `name` を NULL にし、当人が口座を持たなければ 10,240 円で作成して `initial` 履歴を作る。持っていれば名前だけ更新する。
- **`/pay`**: `Player` 専用 → 引数 2 個 → 相手を `resolve`（名前は `name_lower`）→ 相手がオフラインなら `essentials.pay.offline` が必要 → `Money.payInput` で数字と `.` 以外を除き（残りが空なら使い方の表示）、`-` を含めば「金額は 1 円以上にしてください。」→ `toDouble`（`1.2.3` などは失敗）と `Money.round` で 1 円以上 → `write { pay(..., loan(payer), ...) }`。送り主がオンラインで `essentials.eco.loan` を持てば MIN まで送れる。成功は「¥X を送金しました。」、失敗は「送金に失敗しました。残高と上限を確認してください。」。受取人への通知はない。
- **`/balance`**: 引数なしは送信者の UUID（コンソールは「プレイヤーが見つかりません。」）。引数ありは `essentials.balance.others` を見てから `resolve`。口座がなければ残高 0 として表示する。
- **`/balancetop [page]`**: 1 以上のページを 10 件ずつ、`ORDER BY balance DESC, uuid`。名前がなければ UUID を出す。数字でない引数はページ 1 として扱う。
- **`/eco give|take|set|reset <player> [amount]`**: サブコマンドは大文字小文字を区別しない。`give`・`take` は `toDouble` と `Money.round`（負・0.5 未満の正・省略は「金額が無効です。」、0 は変化なしで成功）。`set` は `BigDecimal`（指数表記も可）を `HALF_UP` で整数にする（負も可、例外は null）。`reset` は 10,240 固定で金額を見ない。`take` だけ `loan = true`。`change` が null なら「変更に失敗しました。」、成功は「残高を ¥X にしました。」。
- **Essentials の経済コマンドの取り消し**（`PlayerCommandPreprocessEvent`・`ServerCommandEvent`・`RemoteServerCommandEvent`、HIGHEST、`ignoreCancelled = true`）: `essentials:` 付きの経済コマンドの名前（Essentials の plugin.yml の commands と aliases から作る）を取り消し、「Essentials の経済コマンドは使えません。」を返す。Essentials が入っていなければ名前の集合が空になり、何も取り消さない。`economy-enabled` には関係なく動く。`essentials` の reload（別名を含む）を見つけたら `verified = false` にし、1 tick 後に `verify()`。

### 金額

- `Money.START` = 10,240、`MAX` = 10,000,000,000,000、`MIN` = −999,999,114,514（円、整数）。
- `Money.round(Double)`: 有限かつ 0 以上で、`BigDecimal.valueOf(value)` を `HALF_UP` で 0 桁にする。結果が 0 のときは 0 のときだけ許す（0.4 は null、0.5 は 1）。
- `Money.payInput(String)`: `-` を含めば null。それ以外は `[^0-9.]` を除く。
- 表示（`VaultEconomy.format`）: `¥` + `NumberFormat.getIntegerInstance(Locale.JAPAN)`。非有限値は `¥0`。

### 台帳（データ形式と永続化）

- ファイル: `plugins/Vault/economy.db`。接続は 1 本。`PRAGMA journal_mode=WAL`、`synchronous=FULL`、`busy_timeout=5000`。
- `accounts(uuid TEXT PK, name, name_lower, balance INTEGER NOT NULL CHECK (balance BETWEEN MIN AND MAX), created_at, updated_at)`。インデックスは `name_lower`（非ユニーク）と `balance DESC`。
- `transactions(id AUTOINCREMENT, created_at, uuid, delta, balance_after, reason, source, actor_uuid, transfer_id, note)`。インデックスは `(uuid, id)`。`delta` は常に差分。`transfer_id` は送金 2 行で共有する（`MAX + 1`）。
- `schema_meta(key PK, value)`。Kotlin 側は書かない。移行ツールが `migrated_at` だけを書く。
- 残高の変更は `change`・`pay` ごとに 1 トランザクション（`autoCommit = false`、成功で commit、失敗で rollback）。
- `change` の `kind` と下限（`next` の範囲チェック）: `deposit`・`eco_give`（加算）、`withdraw`・`eco_take`（減算）、`eco_set`・`eco_reset`（目標値）。`withdraw` で `loan == false` のときだけ下限は 0、それ以外は MIN。
- 起動時 `invariant()`: 残高と `SUM(delta)` が一致しない口座、または口座のない履歴がなければ true。失敗すると `check` が `IllegalStateException` を投げ、`Ledger` の初期化は DB を閉じて例外を出す。
- `reason` の値: `initial`、`deposit`、`withdraw`、`pay`、`eco_give`、`eco_take`、`eco_set`、`eco_reset`、`migrate`。
- API 経由の入出金は `source` と `actor_uuid` が空（`response` が渡さないため）。`/eco` は `source = "eco"`・`actor_uuid` は実行プレイヤー（コンソールは空）。`/pay` は 2 行とも `source = "pay"`・`actor_uuid` は送り主。`note` は移行ツールだけが書く。
- 移行ツール（Python、標準ライブラリのみ）: `userdata/*.yml` の行頭の `money` と `last-account-name` を正規表現で読む（YAML ライブラリは使わない。引用符は外す。同じキーが 2 行あれば失敗）。ファイル名が UUID でない、`money` が非有限・範囲外、`*.yml` が 0 件のときは全体が失敗する。`last-account-name` がなければ名前は NULL。`money` がなければ 10,240（`note` に `(missing: 10240)`）。文字列を `Decimal` で読み、`ROUND_HALF_UP` で整数にする。各口座に `migrate` 履歴を 1 行、`note` に元の表記。出力 DB の既存テーブルに行があれば拒否。全件を 1 トランザクションで書き、`verify` で件数・範囲・UUID ごとの残高・履歴件数・残高と差分合計・丸め差（`元の合計 − 移行後の合計 = 丸め差`）を照合してから commit。失敗時は rollback。
- 戻しツール（Python）: DB に口座が 0 件なら失敗。`accounts` の全 UUID に対応する `*.yml` があるかを先に確かめ、なければ何も書かない。各ファイルの `money:` 行を置換（なければ末尾に追加）し、一時ファイルを経て置き換える。書き込みの途中で失敗すると、先に書かれたファイルだけ変わる。

### 同期・非同期

- `Ledger` の公開メソッドはすべて `@Synchronized`。API 呼び出しは呼び出し元のスレッドで同期的に実行する。非同期の executor はない。
- 残高の照会（`read`）も同じロックを使う。
- 停止時（`onDisable`）: `verified = false` にし、提供元の登録を解除し、`ledger.close()`（`wal_checkpoint(TRUNCATE)` → `close`）。

### イベント

- `ServerLoadEvent`: 別名の再取得と `verify()`。
- `PlayerJoinEvent`: `ready` なら `join`。
- `PlayerCommandPreprocessEvent`・`ServerCommandEvent`・`RemoteServerCommandEvent`: Essentials の経済コマンドの取り消し（`essentials:` 付きのみ）と、Essentials の reload の検出。
- Bukkit の登録: Economy サービス（`Highest`）。Permission と Chat のサービスには触れない。

### 外部 API・依存

- Economy（`AbstractEconomy`）: 残高・有無・入出金・口座作成（オンラインの `Player` かつ `ready` のときだけ `join` を呼ぶ）を実装。提供元名は `Oyasai Vault`。口座のない相手の `getBalance` は 0。ワールド指定の版はワールドを無視する。`hasBankSupport` は false、`fractionalDigits` は 0、通貨名は「¥」。銀行系（`createBank` など）は「銀行は未対応です」を返す。`createPlayerAccount(name)` は false。`getBanks` は空。
- Essentials: plugin.yml の commands と aliases（別名の集合）、`plugins/Essentials/config.yml` の `disabled-commands`（ファイルを直接読む）。`essentials.*` の権限ノード名は、Vault のコマンドと `essentials.eco.loan` で使う。
- LuckPerms: コードからは呼ばない。Permission と Chat の提供元の名前を `/vault-info` で表示するだけ。

### テストが保証する範囲

- `LedgerTest`: `Money.round`・`payInput`・必須 9 件の差分（大文字小文字の無視を含む）。残高・加算・減算・下限と上限・`eco_set` の差分履歴・送金の 2 行と `transfer_id`・`invariant()`・名前の解決（大文字小文字を区別しない、同名は例外、参加での名前の付け替え）。同時の 2 出金（片方だけ成功）。残高の改ざんで `Ledger` の起動が `IllegalStateException` になる。
- `VaultPluginTest`: plugin.yml の main クラスを読めて `VaultPlugin` のサブクラスである。Essentials の別名判定（`essentials:` 付き・大文字小文字・タブ・末尾の別語）と、コマンドの分解。
- `test_migrate.py`: 指数表記・欠損・負の値・長い小数・0.5 の丸め。照合の成功と `schema_meta.migrated_at`。既存 DB への再移行の拒否。UUID の重複・不正なファイル名・範囲外の拒否はテストにない。戻しで欠けたファイルがあれば何も書かない。途中の照合失敗で空の DB。

### テストが保証しない範囲

- コマンドの出力と権限（plugin.yml の permission による Bukkit の判定）、参加・Essentials・提供元の検査（`verify`）、Economy API の応答、Essentials の別名の到達先、実サーバーの起動。
- `VaultEconomy` の API 経路は単体テストにない。
- Kotlin 側の移行処理はない（移行は Python のみ）。

## 既知の制限・未確認

- `dbHealthy` は再起動まで戻らない。SQL 以外を含む書き込み例外でも同じ。
- 書き込みの失敗は API 上で「残高不足などの失敗」と区別できない。
- 停止中も `read` は動くため、`has` と `getBalance` は DB の値を返す（入出金は失敗する）。
- `/eco set` はマイナスを受け付ける（下限まで）。`/eco give` はマイナスを受け付けない。
- `top` の page が大きすぎると `(page - 1) * 10` の `multiplyExact` が例外になり、空の結果と SEVERE ログになる。
- 同名の口座が複数ある状態は、どちらかのログインまで解消しない。移行直後の同名データもこれに当たる（コード上）。
- Essentials の reload 検出は、Essentials の plugin.yml の `essentials` 名と別名に依存する。`ess` が別名として定義されているかは未確認。
- Essentials の読み込み順は保証されない（softdepend なし）。`verify()` は `onEnable` の次 tick と `ServerLoadEvent` の 2 回呼ばれる。
- Economy サービスの優先度 `Highest` と別のプラグインの登録が衝突したときの動作は、未確認。
- 同期の SQLite 書き込み（`synchronous=FULL`）の性能は未測定。DESIGN と RUNBOOK で、`synchronous=NORMAL` を検討する予定。
- 移行・照合・配置の実機検証（起動時の所有者検査、`essentials reload` 後の検査、同時出金、強制終了、本番データの移行、1 tick あたりの処理時間）は未実施。
- Vault API の呼び出しでは `source` と `actor_uuid` が空のため、履歴から誰の操作かは分からない。
- 別名の経済コマンドを `Bukkit.dispatchCommand` で直接呼ぶ経路は止められない（DESIGN.md）。
- `shadowJar` の中身（VaultAPI や SQLite JDBC が同梱されているか）は、ビルド成果物を確認していない。

## 判断の記録

- 経済を SQLite の台帳へ移す判断、Essentials の経済を止める方式（イベントの取り消しと disabled-commands の検査）、移行と切り戻しの方針は、[DESIGN.md](../../../plugins/Vault/DESIGN.md) と [RUNBOOK](../../../plugins/Vault/tools/RUNBOOK.md) に書いてあります。DESIGN.md には日付がないため、判断の時期は確かめられていません。
