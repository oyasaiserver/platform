# Essentials userdata → Vault 経済の移行

この手順は次段階の配置作業用。PR1 ではサーバーを起動せず、本番のデータにも触れない。

## 事前確認

1. 価格設定を持つ SignShop、SlotMachine、TNTRun、OyasaiMenu の現在の設定を棚卸しし、1 円未満の端数がある価格を数える。0.5 円未満は API への入出金時に失敗し、0.5 円以上は 1 円へ丸められる。各プラグインの有効な価格項目を確認し、結果を記録する。
2. 旧 Vault jar が配置先に残らないことを確認する。axiom では `economy-enabled: false`、main では `true` を使用する。
3. main の Essentials `disabled-commands` に `balance, balancetop, pay, eco, paytoggle, payconfirmtoggle, sell, worth, setworth` を設定する準備をする。古い `money` は切り替え後の正本ではない。

## 停止・退避・移行

1. main をクリーン停止する。停止後に `plugins/Essentials/userdata/` と旧 Vault jar、Essentials 設定を時刻付きで退避し、userdata のコピーを変換入力にする。入力は `userdata/*.yml` のみ。アーカイブや `usermap.csv` を混ぜない。
2. 空の出力先で次を実行する。

   ```sh
   python3 plugins/Vault/tools/migrate_essentials_to_sqlite.py --input <userdata-copy> --output <economy.db>
   ```

3. スクリプトは件数、元の合計、整数化後の合計、丸め差を表示する。ファイル数と口座数が一致し、範囲外 0、UUID ごとの Decimal 再読込が一致し、`元の合計 − 移行後の合計 = 丸め差` であることを確認する。照合に失敗したら rollback される。DB と userdata のコピーを保管する。
4. 旧 jar を外して自作 jar と `economy.db` を配置し、Essentials のコマンドを無効化してから起動する。`/vault-info`、提供元・コマンド所有者と `disabled-commands` 9 件の起動ログ、LuckPerms の Permission/Chat 接続、代表的な残高、`eco give` の結果と SQLite を照合する。`/essentials reload` 後も確認する。

## バックアップと戻し

稼働中の DB をバックアップするときは SQLite `.backup` を使う。`economy.db` だけを稼働中にコピーすると WAL の確定済み取引が欠ける。停止後なら DB ファイルを退避できる。

第一の戻しは停止後に退避した userdata、旧 Vault jar、Essentials 設定を戻す。切り替え後の取引は失われる。

取引を残す逆変換は、停止後に **退避した userdata のコピー**へ次を実行する。

```sh
python3 plugins/Vault/tools/restore_sqlite_to_essentials.py --input <economy.db> --userdata <userdata-copy>
```

DB 内の UUID に対応するファイルが 1 件でもなければ全件の書き戻しを始めない。新規口座のファイル作成方法が決まるまで本番では使わない。逆変換後も移行前の端数は戻らない。
