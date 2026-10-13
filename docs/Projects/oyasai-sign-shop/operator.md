---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiSignShop/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiSignShop の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、内部仕様は [PROJECT.md](PROJECT.md)、DB の退避・旧版への書き出しは [`plugins/OyasaiSignShop/tools/RUNBOOK.md`](../../../plugins/OyasaiSignShop/tools/RUNBOOK.md) を参照。

## 必要なプラグイン

- **Vault**（必須、`depend`）と、Vault に経済を登録するプラグイン。値段が 0 より大きい店は、経済がないと「経済サービスがありません」で取引できない。
- **LWC**（`softdepend`）。実際には必須: `LWC` という名前で `com.griefcraft.lwc.LWCPlugin` 型のプラグイン（OyasaiLWC が `provides: [LWC]` で該当）が見つからないと、店の作成も取引もできない。
- 外製 SignShop など、名前が `SignShop`/`OyasaiSignShop` か `provides: [SignShop]` の別プラグインがあると「別の SignShop が読み込まれています」で無効化する。

## 権限

| 権限 | plugin.yml の既定 | 効果 |
|---|---|---|
| `Signshop.Signs.*` | OP | 全種類の作成（`iBuy`/`iSell` は下の Admin 権限も必要） |
| `Signshop.Signs.<種類>` | 宣言なし（Bukkit の扱いで OP のみ） | その種類の作成。`<種類>` は `Buy`/`Sell`/`iBuy`/`iSell`/`Device` |
| `SignShop.Admin.*` / `SignShop.Admin.iBuy` / `SignShop.Admin.iSell` | `*` は OP、個別は宣言なし | `iBuy`/`iSell` の作成に、`Signs` 権限と**両方**必要 |
| `Signshop.Destroy.Others` | OP | 管理者扱い（下記） |
| `SignShop.SuperAdmin` | OP | 管理者扱い（下記）。**作成権限にはならない** |
| `Signshop.Inspect.Own` | 全員 | 自分の店を本と羽ペンで閲覧 |
| `Signshop.Inspect.Others` | OP | 他人の店を閲覧 |
| `SignShop.DenyUse.<種類>` | 宣言なし | その種類の店を使えなくする（下記） |

- **管理者扱い**（OP・`Signshop.Destroy.Others`・`SignShop.SuperAdmin`）: 他人の店の箱を開く・壊す、他人の店の更新・削除、全店の閲覧。作成権限は含まない（OP だけは作成もできる）。
- **作成**: OP、または `Signshop.Signs.<種類>` か `Signshop.Signs.*`。`iBuy`/`iSell` はさらに `SignShop.Admin.<種類>` か `SignShop.Admin.*`。更新は作成権限ではなく店主か管理者かで判定する。
- **利用禁止**: `SignShop.DenyUse.<種類>` を持つ人は「この店は現在利用できません」になる。ただし OP、`SignShop.SuperAdmin`、`Signshop.Signs.<種類>`/`.*`、`SignShop.Admin.<種類>`/`.*` のどれかを持っていれば禁止は効かない。
- `/signshop list`（店の種類を表示）だけがコマンドで、権限はない。運営専用コマンドはない。

## 店の作成・管理（操作）

| 操作 | 方法 |
|---|---|
| 箱・レバーを選ぶ | レッドストーンを持って左クリック（取り消し不可。作成・更新が成功するか再起動まで残る） |
| 作成 | レッドストーンを持って看板を左クリック。1つ目に選んだ箱の中身すべてが1回分の商品になる |
| 更新 | イカスミ（または新しく選んでからレッドストーン）で看板を左クリック。商品・値段・リンクを今の状態で取り直す |
| 閲覧 | 本と羽ペンで看板を左クリック（種類・店キー・値段） |
| 削除 | 看板を壊す。クリエイティブでは金のオノが必要 |

- 使える容器はチェスト・トラップチェスト・樽・シュルカーボックスだけ。最大100個、看板と同じワールド。
- 選択時・作成時に、リンク先が**別の店の箱かどうかは見ない**。確認するのは LWC のアクセス可否だけ。
- 店主の変更機能はない。更新しても店主は元のまま。

## 守られるもの・守られないもの

- **守られる:** 店の箱の開閉・中身の操作・破壊（店主と管理者以外）、看板の破壊（店主と管理者以外）、看板を支えるブロックの破壊（**全員**。撤去したいときは先に店を消す）、爆発・延焼・ピストン（看板・支え・リンク箱）。
- **守られない:** ホッパーによる箱からの搬出入（LWC の鍵で防ぐ）、Device 店のレバー（誰でも切り替え・破壊できる）。
- 店主・管理者がリンク箱を壊すと、その店は「リンク箱が破壊されました」で停止する。

## 停止店

停止すると、看板1行目が赤になり、ログ（SEVERE）とオンラインの OP に `[SignShop] 店 <キー> を停止: <理由>` が出る。左クリックの表示でプレイヤーにも理由が見える。起動時にも停止中の店が同じ経路で通知される。

| 理由 | 原因 |
|---|---|
| 未照合の取引があります | 起動時、`pending`/`compensation_failed` で `reviewed_at` が空の取引がある（メモリ上だけの停止。DB の `halt_reason` には書かない） |
| 取引 `<ID>`: 入出金結果不明 / 品物の復元結果不明 / 終状態の保存失敗 / 取り消し失敗: … / 取引例外: … | 取引の結果が確かめられない。お金・品物・記録を照合する |
| 取引 `<ID>`: レバーの外部作用を要確認 | Device 店でレバー操作が失敗し、お金は戻した |
| 看板の値段を読めません: … | 取引時に看板4行目が読めない（旧データで起きうる） |
| 内部処理で中身が変わる容器です | 旧データのリンクに使えない容器がある |
| リンク箱が破壊されました | 店主・管理者がリンク箱を壊した |
| 同じ看板が複数領域にあります | 同じ看板が `sellers` などの複数領域に登録されている |
| 店の保存に失敗しました / 削除の保存に失敗しました / 失敗記録を書けません / 取引記録の保存に失敗しました | DB 書き込みの失敗 |

**再開:**

- 自動再開はしない。未照合取引は RUNBOOK に従い、取引 ID で Vault/Essentials の履歴、残高、現物在庫、CoreProtect、DB 行を照合する。残高差だけで原因を決めない。停止中に DB を退避してから、照合済み取引の `reviewed_at`・`review_note` と店の `halt_reason` を一つのトランザクションで更新し、`status` は残す。
- **ゲーム内でも解除される:** 店主か管理者が店を更新（イカスミ等）すると、`halt_reason` は消えて取引できるようになる。未照合取引が残っていれば次の起動でまた停止するが、それまでは使える。照合が済むまでは店主に更新させない。
- DB への書き込みが一度でも失敗すると、**全店の取引**が再起動まで「この店は現在利用できません」になる（作成・更新は止まらない）。原因を直してから再起動する。

## データ

- 設定ファイルはない。データは `plugins/OyasaiSignShop/shops.db`（SQLite、WAL。`-wal`/`-shm` も同じ一組）。稼働中の退避は `.backup`、停止中は checkpoint 済みの DB（停止時に `wal_checkpoint(TRUNCATE)` する）か3ファイルの同時点の組。
- 取引は1回ごとに `shop_transactions` へ記録する。状態は `pending`（開始のまま・結果不明）、`success`、`failed`（お金が動く前の失敗。残高不足などで断った試行も1行ずつ残る）、`compensated`（入出金を戻した）、`compensation_failed`（戻せなかった）。
- 起動ログに読み込んだ店の件数が出る。DB が読めない・初期化が中途半端なときは「SignShop の DB または sellers.yml を読み込めません」で無効化する。

## 外製 SignShop からの移行

1. 外製 SignShop の jar を外す（同時に置くと OyasaiSignShop が無効化する）。
2. `plugins/OyasaiSignShop/` が**存在しない**ことを確かめる。あると旧フォルダをコピーしない。
3. 起動すると `plugins/SignShop/` 全体をコピーし（旧フォルダは残す）、DB が空なら `sellers.yml` を一度だけ取り込む。コピーに失敗したら無効化し、新フォルダは作らない。
4. `sellers.yml` は `sellers`・`deferred_sellers`・`invalid_sellers` の3領域と整数の `DataVersion` が必須。YAML の別名・タグ・重複キーがあると取り込まず起動を止める。取り込み後は元の YAML を変更しない。
5. 件数・SHA-256・キー集合は DB の `schema_meta` に記録される。起動ログの件数と照合する。

**引き継がれても使えないもの:**

- `deferred_sellers`・`invalid_sellers` の店は取り込まれるが、取引できない（更新しても領域は変わらない）。
- 看板1行目が `[Buy]`/`[Sell]`/`[iBuy]`/`[iSell]`/`[Device]` 以外の店は、看板・箱の保護は効くがクリックしても何も起きない。
- 商品が `YAML:` 形式でない店は「見本を読めません」。値段が読めない店・使えない容器にリンクした店は、最初の取引で停止する。

## 旧版への書き戻し

RUNBOOK の手順で、サーバー停止中に `tools/export_sqlite_to_sellers.py` で `sellers.yml` を書き出す。未照合の `pending`/`compensation_failed` が残っていると書き出さない。書き出しには停止理由（`halt_reason`）と取引記録は含まれない。外製版と自作版を同時に置かない。
