---
date: 2026-10-13
record_type: reference
source: "plugins/Vault/（コードから作成。ゲーム内での確認は未実施）"
---

# Vault の運用（運営向け）

Vault は、サーバーの経済を Vault の Economy API で他のプラグインに提供し、残高を SQLite（`economy.db`）に保存します。
プレイヤー向けの操作は [player.md](player.md)、内部の仕組みは [PROJECT.md](PROJECT.md) を参照してください。
移行と切り戻しの手順は [tools/RUNBOOK.md](../../../plugins/Vault/tools/RUNBOOK.md)、設計の経緯は [DESIGN.md](../../../plugins/Vault/DESIGN.md) にあります。

## 導入前の確認

- 旧 Vault の jar と新しい `Vault.jar` を同時に置かないでください。
- Essentials の `disabled-commands` に次の 9 件を入れてください。`balance, balancetop, pay, eco, paytoggle, payconfirmtoggle, sell, worth, setworth`
  - 不足があると起動時の検査で、**全入出金が止まります**（ログに `!!! Essentials disabled-commands に不足` が出ます）。
  - Essentials が入っていない場合、この検査は行われません。
- Vault は Permission と Chat のサービスを提供しません。別のプラグイン（設計上は LuckPerms。DESIGN.md）が提供している必要があります。
- 価格設定に 1 円未満の端数がある店やプラグインは、移行前に数えてください。0.5 円未満は入出金に失敗し、0.5 円以上は 1 円に丸められます（RUNBOOK 参照）。

## 権限

| 権限 | 使うコマンド・操作 |
|---|---|
| `essentials.balance` | `/balance`（別名 `/bal`・`/ebal`・`/ebalance`・`/money`・`/emoney`）。名前を付ける場合もこれが必要 |
| `essentials.balance.others` | `/balance 名前`（他の人の残高。自分の名前を指定する場合も必要） |
| `essentials.pay` | `/pay`（別名 `/epay`） |
| `essentials.pay.offline` | オフラインの相手への `/pay` |
| `essentials.balancetop` | `/balancetop`（別名 `/ebalancetop`・`/baltop`・`/ebaltop`） |
| `essentials.eco` | `/eco`（別名 `/eeco`・`/economy`・`/eeconomy`） |
| `essentials.eco.loan` | 残高がマイナスになる `/pay` と Vault API の出金（オンラインの人だけ判定。`/eco take` には不要） |

- `/vault-info` には権限がなく、だれでも使えます。
- コマンドの権限（`.others`・`.offline`・`.loan` 以外）は plugin.yml の `permission:` でサーバーが先に判定します。権限がないときの表示はサーバー標準のもので、文言は未確認です。
- 既定値は plugin.yml に書いていません。実際に誰が使えるかは LuckPerms の設定で決まります。
- コンソールは `/eco` を使えます。`/balance 名前` と `/balancetop` もコンソールから使えます。`/pay` の送り主はプレイヤーだけです（コンソールからは「プレイヤー専用です。」）。`/balance`（名前なし）は、コンソールからは「プレイヤーが見つかりません。」になります。

## 管理コマンド（`/eco`）

| コマンド | 結果 |
|---|---|
| `/eco give <player> <amount>` | 残高を加算します。0 円なら変わらず、履歴も作りません |
| `/eco take <player> <amount>` | 残高を減らします。残高をマイナスにできます（下限 −999,999,114,514 円。`essentials.eco.loan` は不要です） |
| `/eco set <player> <amount>` | 残高を指定値にします。小数は四捨五入します。マイナスの値も指定できます（下限まで） |
| `/eco reset <player>` | 残高を 10,240 円に戻します。金額は不要です |

- 名前は登録済みの口座から探します。オフラインの人にも使えます。
- 成功すると「残高を ¥X にしました。」と変更後の残高が出ます。
- `give` と `take` で金額がマイナス・0.5 円未満・省略の場合は「金額が無効です。」になります（0 はそのまま成功）。`set` にマイナスを入れると受け付けられます。`set` は `1e3` のような指数表記も読みます。
- サブコマンドが違う、または名前がない場合は使い方（`/eco give|take|set|reset <player> [amount]`）が出ます。
- 口座がない人、同じ名前の口座が 2 つある名前には「口座がありません。」と返ります。
- 上限・下限を超える操作と、DB の書き込み失敗は「変更に失敗しました。」になります。
- 対象のプレイヤーには通知されません。
- 履歴の `source` は `eco`、`actor_uuid` は実行したプレイヤーの UUID です（コンソールからの場合は空）。

管理者向けの状態確認は `/vault-info` です。経済の提供元の名前と「利用可」「停止中」、Permission と Chat の提供元を表示します。正常なら 1 行目が `Vault 経済: Oyasai Vault (利用可)` になります。経済が止まっていても `/vault-info` は使えます。

## 設定

`config.yml` の項目は 1 つだけです。

| 項目 | 既定 | 意味 |
|---|---|---|
| `economy-enabled` | `true` | `false` のとき DB を開かず、経済サービスを登録しません。`/vault-info` 以外のコマンドは「経済は現在利用できません。」を返し、参加しても口座は作られず、Essentials の検査は行いません |

- `economy-enabled: false` でも、Essentials が入っていれば `essentials:` 付きの経済コマンドは取り消されます（取り消しは設定に関係なく動きます）。
- Vault には設定の再読込コマンドがなく、稼働中に `config.yml` を書き換えても反映されません。変更はどちらの向きも再起動で反映します。

## データ

- 保存先は `plugins/Vault/economy.db` です（SQLite の WAL を使うため、`-wal`・`-shm` のファイルも一緒にできます）。
- `accounts` は UUID・名前・残高・作成日時・更新日時を持ちます。
- `transactions` は取引ごとの差額（`delta`）と取引後の残高を持ちます。`reason` は次のいずれかです。`initial`（口座作成時の 10,240 円）、`deposit`・`withdraw`（Vault API の入出金）、`pay`（送金。両方の行に同じ `transfer_id`、`source` は `pay`、`actor_uuid` は送り主）、`eco_give`・`eco_take`・`eco_set`・`eco_reset`（`/eco`）、`migrate`（移行時）。
- 起動時に、各口座の残高と履歴の差分の合計が一致するか確かめます。一致しなければ取引を止め、直すことはしません（後述）。
- 残高のキャッシュは持ちません。

### バックアップ

- サーバーを止めてから `economy.db` を退避するか、SQLite の `.backup` を使ってください。
- 稼働中に `economy.db` だけをコピーすると、WAL にある確定済みの取引が欠けます。
- 定期バックアップの対象に `plugins/Vault/economy.db` が入っているか、切り替え前に確かめてください。

## 起動・障害時の見方

- 正常に起動したら、ログに「経済提供元と Essentials disabled-commands を確認しました」が出ます。`/vault-info` で「利用可」になっているか確かめてください。
- DB を開けない、または起動時の合計検査に失敗すると、ログに「経済 DB の起動確認に失敗しました。取引を停止します」が出ます。**プラグインは有効のまま、取引だけ止まります。** 自動では復旧しません。
- 経済の提供元が Vault でない場合は「Economy 提供元が自作 Vault ではありません」、Essentials の設定が不足している場合は「disabled-commands に不足」が出ます。どちらも全入出金を止めます。
- 次の DB エラーでは、**再起動まで取引が止まります**。
  - 読み取りで SQL のエラーが出たとき（「経済 DB の読み取りに失敗しました。取引を停止します」）
  - 書き込みで例外が出たとき（SQL 以外も含みます。「経済 DB の書き込みに失敗しました。取引を停止します」）
- 読み取りで SQL 以外の例外が出た場合（同じ名前の口座が 2 つあるときなど）は、その操作だけ失敗し、取引は止まりません。
- 保存に失敗した入出金は、残高不足などと同じ失敗として返ります。API の呼び出し元からは区別できません。
- 取引が止まっていても、Vault API の残高照会（`getBalance`・`has`）は動きます。そのため `has` が成功を返しても、入出金は失敗することがあります。プレイヤーの `/balance`・`/balancetop` は、経済が「利用可」でないと「経済は現在利用できません。」を返します。
- Essentials の reload を行うと、検査が 1 tick 後に走るまで取引が止まります。`disabled-commands` が足りないままなら、止まったままです。
- 同じ名前の口座が 2 つあると、その名前を使う操作（残高照会・送金）は失敗し、ログに SEVERE が出ます。どちらかが参加すると、もう一方の名前は外れて解消されます（コード上）。
- Essentials が入っていない場合、`essentials:` 付きコマンドの取り消しも、reload の検出も行いません。
- plugin.yml に softdepend を宣言していないため、Essentials が後から読み込まれることがあります。そこで、サーバーの読み込み完了時（ServerLoadEvent）にも検査します。
- 停止時は、WAL を統合（`wal_checkpoint(TRUNCATE)`）してから DB を閉じます。

## 守られる範囲・守られない範囲

**守られる範囲**

- 入出金と送金は 1 回の呼び出しごとに、残高と履歴をまとめて保存します。`/pay` は両方の口座と履歴 2 行を 1 回で保存します。失敗すると全部戻します。
- 同時に行われた出金で、残高を超える二重引き出しは起きません（同期化して 1 本の接続で処理します）。
- 起動時に残高と履歴の合計を比べ、ずれがあれば取引を止めます。
- 残高の上限（10,000,000,000,000 円）と下限（−999,999,114,514 円）を超える操作、マイナスの金額の入出金、小数の丸め後に 0 円になる入出金は、コードで拒否します。

**守られない範囲**

- Vault API を 2 回呼ぶ送金（他プラグインによる送金）は、呼び出しごとに確定します。途中で止まると、片方だけ反映されることがあります。
- Vault は他のプラグインのアイテム受け渡しと一緒に戻すことはできません。
- Essentials の `money`（`userdata`）は、切り替え後は正しい残高ではありません。
- 別名の経済コマンドを、イベントを通らずに `Bukkit.dispatchCommand` で実行された場合は止められません（DESIGN.md に記載）。
- 書き込みは呼び出し元のスレッドで同期的に行います。サーバーの処理が保存を待つことがあります（性能は未測定）。

## 他のプラグインとの連携

- **Essentials:** `disabled-commands` の検査、コマンドの別名（plugin.yml）、`essentials:` 付きの経済コマンドの取り消しに使います。
- **LuckPerms:** Permission と Chat は Vault では扱いません。権限の付与は LuckPerms で行います。
- **Vault Economy を呼ぶ他のプラグイン:** このリポジトリでは SignShop、OyasaiMenu、OyasaiGames などが呼びます。
  - OyasaiMenu の `/sell` は、Vault ではなく OyasaiMenu 側で実装されています（DESIGN.md）。
  - 各プラグインの経済の扱い（失敗時の処理など）は、それぞれの運営向け資料を参照してください。
- **未対応の機能:** 銀行、`/pay` の確認設定（`payconfirmtoggle`）、無視リストは未対応です。名前で口座を作る API（`createPlayerAccount(name)`）も使えません。

## 移行と切り戻し

移行の全手順は [RUNBOOK](../../../plugins/Vault/tools/RUNBOOK.md) にあります。要点は次のとおりです。

1. サーバーをきれいに止め、Essentials の `userdata/*.yml` のコピーを作る（アーカイブや `usermap.csv` は使わない）。
2. 空の出力先に、移行ツールを実行する。
   ```sh
   python3 plugins/Vault/tools/migrate_essentials_to_sqlite.py --input <userdata-copy> --output <economy.db>
   ```
   件数・元の合計・移行後の合計・丸め差が一致しなければ、ツールは rollback して終了します。次の場合も全体が失敗します: ファイル名が UUID でない `.yml` がある、`money` が 2 行ある・範囲外、`.yml` が 0 件、出力先の DB にすでに行がある。`money` がない人は 10,240 円になります。`last-account-name` がない人は名前なしの口座になり、本人が参加するまで名前で探せません（ランキングでは UUID 表示）。
3. 旧 jar を外し、`Vault.jar` と `economy.db` を置いて起動する。`/vault-info`、起動ログ、`disabled-commands` を確認する。

切り戻しは 2 通りあります。

- **第一の方法:** 停止時に退避した `userdata`・旧 jar・Essentials の設定を戻します。切り替え後の取引は失われます。
- **取引を残す方法:** `restore_sqlite_to_essentials.py` で DB の残高を退避した `userdata` のコピーに書き戻します。DB の口座すべてに対応するファイルがなければ、1 件も書き戻さずに止まります。ファイルの作成方法は未決のため、本番では使わない方針です（RUNBOOK 参照）。

移行の前に、次のことを確かめてください。

- 移行は停止中に行います。
- `plugins/Vault/economy.db` が定期バックアップの対象に含まれているか確かめます。
- 移行で丸めた端数（1 円未満）は、切り戻しでも戻りません。
