---
date: 2026-10-25
record_type: project
source_of_truth:
  - plugins/OyasaiEconomy/src/
related_paths:
  - plugins/OyasaiEconomy/build.gradle.kts
---

# OyasaiEconomy

整数の複数通貨を扱う経済プラグイン。通貨ごとの実装は持たず、`config.yml` の `currencies` に並べたデータを、同じ台帳・コマンド・通知・権限・イベント・プレースホルダーで処理する。外部経済プラグインの互換APIは提供しない。

## 通貨の定義

各通貨のキーがDBの `currency` とAPIの通貨IDになる。`display-name`、`prefix`、`suffix`、`initial`、`maximum`、`transfer-minimum`、`transfer-maximum`、`root`、`shortcuts`、`enabled` を定義する。金額設定は整数だけを受け付け、小数からの変換はしない。

既定データは、円 (`yen`) が初期10,240・上限10,000,000,000,000・表示 `¥1,234`、トークン (`token`) が初期25・上限9,223,372,036,854,775,807・表示 `1,234トークン`。`root` と短縮コマンド、権限は設定から動的に登録する。通貨を追加して再起動または再読み込みすれば、同じ処理が使える。ID・コマンド名の重複は拒否する。

再読み込みでは既存口座を超えて上限を引き下げることや、既存通貨を削除することを拒否する。初期値の変更で既存残高は書き換えない。無効な通貨は残高参照と金額操作を拒否し、通知を保留する。

## 口座と台帳

参加時に全通貨の口座を作り、初期残高を `initial` として記録する。参照や金額操作は口座を作らない。名前はオンライン完全一致の既存口座を優先し、それ以外は既存口座内で大文字小文字を区別せず検索する。同名が複数あれば拒否する。参加時には同名の別口座の名前を外す。

金額は `Long`。残高は0以上で通貨の上限まで。加算・減算・送金はオーバーフローを検査する。送金は自分宛てを拒否し、相手のオンライン状態では制限しない。APIの0の入出金・送金と、残高が変わらない設定は成功し、履歴・イベント・通知を作らない。未知口座や無効通貨への0操作は拒否する。

履歴の理由は `initial`、`transfer`、`admin_give`、`admin_take`、`admin_set`、`admin_reset`、`api_deposit`、`api_withdraw`。名前更新は履歴を作らない。旧DBから移した履歴は元の理由のまま残る。

## 公開API

`io.oyasai.economy.api.OyasaiEconomyApi` を Bukkit ServicesManager から取得する。公開するサービスはこれだけで、通貨は各メソッドの引数に渡す。

```kotlin
val economy = server.servicesManager.load(OyasaiEconomyApi::class.java)!!
val operation = economy.withdraw("yen", player.uniqueId, 100L, notify = false)
if (operation.accepted) {
  operation.completion.thenAccept { result ->
    // EconomyResult.Success はSQLiteへの保存完了を示す。
  }
}
```

`balance` は利用できない通貨・口座に `null` を返す。`deposit`、`withdraw`、`set`、`reset`、`transfer` は `EconomyOperation` を返す。`accepted` はメモリ変更とキュー受付の即時判定、`completion` は保存結果を待てる `CompletableFuture<EconomyResult>`。結果は `Success`、`InsufficientFunds`、`Failed`。通知は既定で抑止し、`notify = true` で共通の通知を依頼できる。保存失敗後は操作を停止し、メモリ上の変更を巻き戻さない。

## イベントと表示

`EconomyBalanceChangeEvent` と `EconomyTransferEvent` は通貨IDを持つ取消可能な共通イベント。キュー受付前に発火し、取消時は金額を変更しない。送金は送金イベントと両口座の残高イベントを通過した場合だけ、一つの保存処理で両側を変更する。イベントハンドラからの再入金額操作は拒否する。

TABへ `%economy_<id>_balance%` と `%economy_<id>_balance_commas%` を登録する。無効通貨・未知口座は空文字。OyasaiTabも同じAPIから表示を取得する。

送金の受取通知は保存後、オンラインなら即時、オフラインなら次回参加時に日本語で送る。送り主・通貨をoutboxに保存する。管理操作の通知は共通の `admin-notifications`（既定false）で設定し、`-s` で抑止する。通知送信後に配達済みを保存するため、その間の異常終了では再通知の可能性がある。

## 保存

保存先は `plugins/OyasaiEconomy/economy.db`。`accounts` の主キーは `(currency, uuid)`、`transactions` は通貨と送金共通の `transfer_id` を持つ。`notification_outbox` は通貨・送り主を持ち、`schema_meta` が書き込みの進捗を記録する。DB制約は通貨名に依存せず、残高の整数・非負を保証する。上限は台帳が守る。

API操作はメモリと有界FIFOキューだけを触る。専用ワーカーがSQLiteへまとめ書きし、停止時は受付済み操作を書き切る。起動時は各口座の残高と履歴差分の合計、外部キーを検査し、不一致なら起動しない。

## 旧データの移行

プラグインは旧 `Vault` / `OyasaiToken` のDBを読まない。旧データは、停止中に人がSQLで新しい `economy.db` へ移す。移した結果は起動時の検査（残高と履歴の合計、外部キー、0以上・上限以内）を通らなければ起動しない。参加時に、まだ口座のない通貨の口座を初期値で作る。

## コマンドと権限の契約

コマンドは [player.md](player.md) を参照。権限は `oyasaieconomy.<id>.balance`、`.balance.others`、`.pay`、`.top`、`.admin` と `oyasaieconomy.reload`。balance/pay/topの既定は全員、others/admin/reloadはOP。旧権限名・旧動詞・旧別名は受け付けない。

## 検証

通貨IDをパラメータ化し、既定2通貨と追加通貨へ同じ操作・拒否条件を与える。SQLiteの制約・履歴照合・キュー満杯・drainも検査する。Bukkitを置き換える統合テストではAPI、コマンド、権限、イベント取消、giveall確認、オフライン通知を検査する。実サーバーの表示やクラスローダーは、このテストだけでは保証しない。
