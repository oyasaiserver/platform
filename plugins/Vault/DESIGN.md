# Vault 経済実装

## 範囲と切り替え

このプラグインは VaultAPI 1.7.1 の型を元のパッケージのまま同梱し、`name: Vault`・`load: STARTUP` で既存 Vault を置き換える。VaultAPI の LGPL v3 本文は jar 内の `LICENSE-VaultAPI-LGPL-3.0.txt` に含める。LuckPerms が提供する Permission と Chat のサービスには触れない。

`economy-enabled: false` では経済サービスを登録しない。DB が開けない、または台帳の不変条件が崩れている場合もプラグイン自体は有効のままにし、取引を止める。経済を有効にした場合は `ServicePriority.Highest` でサービスを登録する。サーバーの読み込み完了時と Essentials の reload 後に Essentials の経済 9 コマンドと別名をコマンド表・Brigadier から外し、自作の経済コマンドと別名を登録する。最優先の Economy 提供元、各コマンドの到達先、`essentials:` 付き経済コマンドが残らないこと、Essentials `disabled-commands` の必須 9 件を確認する。いずれかが違えば全入出金を拒否する。`/vault-info` で状態を表示する。

Essentials 側では `disabled-commands` に `balance, balancetop, pay, eco, paytoggle, payconfirmtoggle, sell, worth, setworth` を指定する。`/sell` は OyasaiMenu の実装を使う。切り替え後の Essentials userdata `money` は正本ではない。旧 Vault jar と新 jar を同時に置かない。

## 金額と口座

内部は整数の円。Vault API の `double` は `BigDecimal.valueOf` と `HALF_UP` で円に丸める。負、NaN、無限大、正の値が 0 円になる額の入出金は失敗し、ちょうど 0 だけ成功して履歴を作らない。上限は 10,000,000,000,000 円。通常の出金下限は 0 円。オンラインで `essentials.eco.loan` を持つ利用者に限り、出金下限を −999,999,114,514 円にする。`has` は loan を見ず、残高と丸め後の額を比べる。

参加時に口座がなければ 10,240 円と `initial` 履歴を同じトランザクションで作る。口座がない UUID への入出金は失敗する。名前指定の旧 API とコマンドは `accounts.name_lower` で引き、大文字小文字を区別しない。2 件見つかれば失敗する。参加時には当人の名前を更新し、同じ名前の他口座からは名前を外す。Mojang への名前検索は行わない。

Vault API は小数桁 0、`¥1,234` 形式、通貨名 `¥`、銀行未対応。`/pay **`・paytoggle・payconfirmtoggle・無視リスト連動は実装しない。

## 台帳

保存先は `plugins/Vault/economy.db`。`accounts` は UUID、名前、整数残高、作成・更新時刻を持つ。`transactions` は時刻、UUID、常に差分の `delta`、取引後の残高、理由、コマンド由来の `source` と `actor_uuid`、送金の `transfer_id`、移行元の値の `note` を持つ。`schema_meta` は移行時刻を記録する。名前と残高順位、UUID 別履歴のインデックスを作る。

接続は 1 本を同期化して使い、API 呼び出しごとに呼び出し元のスレッドで残高更新と履歴を同じ SQLite トランザクションへ書く。`/pay` は両口座と履歴 2 行を 1 トランザクションへ書き、自分宛て・存在しない相手・0 円は何も書かない。Vault API を 2 回呼ぶ外部プラグインの送金は各 API 呼び出しで個別に確定する。`eco set` の履歴は目標残高と旧残高の差分。理由は `migrate`、`initial`、`deposit`、`withdraw`、`pay`、`eco_give`、`eco_take`、`eco_set`、`eco_reset`。

SQLite は WAL と `synchronous=FULL`。停止時には `wal_checkpoint(TRUNCATE)` して閉じる。残高キャッシュは持たない。DB エラー後に入金を自動再試行しない。起動時に各口座の残高と履歴差分合計が一致することを確認し、不一致は直さずに取引を止める。バックアップは停止後、または SQLite の `.backup` を使う。稼働中に `economy.db` だけをコピーしない。

## コマンドと権限

| コマンド                                    | 別名                                 | 権限                                                      |
| ------------------------------------------- | ------------------------------------ | --------------------------------------------------------- |
| `balance [player]`                          | `bal, ebal, ebalance, money, emoney` | `essentials.balance`、他人は `essentials.balance.others`  |
| `pay <player> <amount>`                     | `epay`                               | `essentials.pay`、オフライン宛は `essentials.pay.offline` |
| `balancetop [page]`                         | `ebalancetop, baltop, ebaltop`       | `essentials.balancetop`                                   |
| `eco give/take/set/reset <player> <amount>` | `eeco, economy, eeconomy`            | `essentials.eco`                                          |

コマンド権限ノードには Bukkit の既定値を付けない。実際の許可は LuckPerms が決める。`pay` は `-` を含む額を拒否し、数字と小数点以外を除いて読む。最小額は 1 円。`balancetop` は 10 人ずつ。`eco` はコンソールからも使える。`take` は下限まで許す。`reset` は 10,240 円。メッセージは日本語。

## 移行と復旧

停止後の Essentials `userdata/*.yml` のコピーから `tools/migrate_essentials_to_sqlite.py` で移す。`userdata.tar.gz` や `usermap.csv` は使用しない。全口座・履歴・`schema_meta.migrated_at` を 1 トランザクションで書く。金額は文字列から Python `Decimal` で読み、指数表記を含め `ROUND_HALF_UP` で整数化する。`money` のないファイルは 10,240 円として、元の合計にも入れる。各口座に `migrate` 履歴 1 行を作り、元の表記を `note` に保存する。ファイル数、範囲、UUID ごとの残高、丸め差の合計を同じトランザクションで照合してから commit する。失敗時は rollback する。中身がある DB への再移行は拒否する。

切り替え直後は停止して退避した userdata、旧 Vault jar、Essentials 設定を戻せる。この方法では切り替え後の取引が失われる。取引を残したい場合は `tools/restore_sqlite_to_essentials.py` で SQLite の現在残高を userdata の `money` に書き戻す。ファイルのない UUID が 1 件でもあれば書き戻しを始めない。移行前の端数は復元できない。

## 配置前に必要な検証

PR1 は配布しない。次段階で経済を切った axiom に先に配置し、LuckPerms の Permission と Chat、FAWE、OyasaiChat、LunaChat を確認する。その後 main の停止、退避、移行、照合、配置、起動確認をメンテナンス中に実施する。起動時の所有者検査と `/essentials reload` 後の検査、経済利用プラグイン、同時出金、強制終了、`eco set`、境界額、本番 userdata コピーでの移行、1 取引と 1 tick に 100 入金の所要時間を確認する。性能結果により `synchronous=NORMAL` の採用を検討する。
