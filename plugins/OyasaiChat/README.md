# OyasaiChat mute（段階4）

Paper 側のチャット所有者が mute を管理する。Utilities などへの照会・通知はしない。
対象仕様は [EssentialsX 2.22.1-dev+12-776f709 の Commandmute](https://github.com/EssentialsX/Essentials/blob/776f709/Essentials/src/main/java/com/earth2me/essentials/commands/Commandmute.java)。

## コマンド・効く範囲

`/mute <player> [期間] [理由]` のみ。別名は追加しない。
引数なしで mute/解除を切り替える。期間または理由を付けると既存 mute を更新する。
期間は Essentials の DateUtil と同じ年月週日時分秒の順序（例 `1mo`, `1h30m`）、
単位なしの秒数、最初に見つかった期間、暦による月・年、最大10年を扱う。
期間として読めない第2引数以降は理由になる。`0s` は即期限切れ。

権限は `essentials.mute` / `.offline` / `.exempt` / `.unlimited` / `.notify`。
`.exempt` は既定 false、それ以外は OP。免除の判定は upstream と同じくオンライン対象と
コンソールからの操作に適用し、プレイヤーによるオフライン操作は `.offline` を先に確認する。
送信者・対象・`.notify` のある運営へ通知し、操作をログに残す。

既定は `network.backend-id=main` のときのみ有効。`mute.enabled` の明示指定で変更できる。
全体/チャンネル/ショートカットの発言、個人チャット（会話モード・返信・遅延宛先解決も含む）を
送信前に拒否する。受信は可能。main から他バックエンドへの発言も Velocity に渡す前に止まる。
別バックエンドへ移動した後の状態同期は追加していない。各 Paper の DB は独立している。

Essentials 共存時は同階層の `Essentials/config.yml` の `mute-commands` と
`max-mute-time` を使う。Essentials が後から有効化されたときも読み直す。
Essentials 削除後は OyasaiChat 設定の `mute.commands`（初期値 `f`, `kittycannon`）と
`mute.max-mute-time`（初期値 -1）を使う。
本番の実ファイルは未確認（この作業では SSH 禁止）。通常の `/oyasaichat reload` は既存チャットだけを
再読み込みするため、mute 設定変更はフル再起動で反映する。
PM と Essentials の msg/r/me/mail-send 系別名も拒否する。名前空間付きコマンドも根の名前で判定し、
`*` は全コマンドを拒否する。mail の読み取りは設定で拒否していなければ可能。

## 保存・初回移行

プラグインデータフォルダの `oyasaichat.db` 1ファイル。
既存 `players/<UUID>.yml` は変更・移行しない。
共通 `ChatDatabase` が WAL、synchronous=FULL、busy_timeout=5000、機能ごとの
トランザクション付きスキーマ移行を提供する。将来の機能はこのDBに自身の接頭辞付き表と版を追加する。

```sql
CREATE TABLE schema_versions (
  feature TEXT PRIMARY KEY,
  version INTEGER NOT NULL CHECK(version >= 0)
);
-- feature='mute', version=1
CREATE TABLE mute_players (
  uuid TEXT PRIMARY KEY,
  muted INTEGER NOT NULL CHECK(muted IN (0,1)),
  expires_at INTEGER NOT NULL, -- epoch milliseconds; <=0 means permanent
  reason TEXT,
  essentials_imported INTEGER NOT NULL CHECK(essentials_imported = 1),
  essentials_cleanup_pending INTEGER NOT NULL CHECK(essentials_cleanup_pending IN (0,1))
);
```

参加時・`/mute` の対象指定時の初回参照で、行がなければ同階層の
`Essentials/userdata/<UUID>.yml` を読む。`muted` / `mute-reason` と
`timestamps.mute`（優先）、互換用 `mute-timeout` を扱う。
元ファイルがない・非muteでも移行済みの行を作り、解除/再起動後に再取り込みしない。
壊れたYAML・不正な型は初期値で上書きせずエラーとする。

**取り込んだ mute は SQLite の保存完了後、Essentials API のキャッシュと保存値の
muted=false / timeout=0 / reason=null へ解除する。**
プラグイン依存は増やさず、Essentials 有効時のみ reflection で API を呼ぶ。
処理途中で停止・失敗した場合は `essentials_cleanup_pending=1` を残し、次回参照時に解除を再試行する。
Essentials 不在時は元YAMLを書き換えず、後から Essentials が有効になれば解除する。

参加中はキャッシュを使用する。書き込みは専用スレッドに直列化し、完了を待ってから
キャッシュ・Essentials を更新する（低頻度の運営操作と初回移行を想定）。
期限は発言/操作前とオンライン対象の1秒周期で判定して解除する。オフライン中に期限が切れても
再参加時には解除される。未参照のDB行は次回参照時に解除状態へ保存する。
停止時は書き込みを待って接続を閉じる。

## 共存と意図的な差分

- `/mute` の通常名は Essentials 所有/未登録の場合だけ自作へ差し替え、他プラグインからは奪わない。
  無効化時は自分がまだ所有する通常名だけ戻す。
  名前空間付きや既存 emute/unmute は新たに登録しない。
  Essentials の MuteStatusChangeEvent を取り消して古いコマンド/APIイベントによる二重管理を防ぐ。
  OyasaiChat の操作では Essentials イベントを発火しない（Essentials 削除後も単独で動くため）。
- 対象解決は Paper のオンライン実名/前方一致・既知のオフライン名・UUID。
  Essentials のオフライン索引・ニックネーム検索・未知名の仮ユーザー作成は追加しない。
  UUID指定なら Paper の名前キャッシュにない既存 userdata も移行できる。
- メッセージは固定日本語。Essentials のロケール・料金・SocialSpy に拒否された本文を表示する処理は
  複製しない。名前空間付き mute-commands の根を正規化して迂回を防ぐ。
- 有効化失敗は mute だけを片付けて既存チャット機能を起動する。
  有効な機能で特定 UUID の読み書きが失敗した場合はそのプレイヤーの発言を拒否し、SEVERE ログへ記録する。

## ローカルで確認する項目

自動テストは切り替え/更新、期限境界、期間解析、1回移行、欠損/壊れたYAML、再起動と
解除途中の印、コマンド拒否、スキーマ移行のロールバックを確認する。
実サーバーの起動・停止・jar交換、本番アクセスはこの作業では行わない。

1. Essentials 共存で `/mute` の所有者、OP/一般プレイヤー、offline/exempt/unlimited/notify の権限を確認。
2. 無期限、`10s`、理由だけ、既存 mute の期限/理由更新、引数なし解除、期限切れ通知を確認。
3. 全体・チャンネル・`/g 本文`・会話モード・msg/tell/message/pm/r と main→別 backend のPMを拒否すること。
   受信できること、別backendへ移動すると main の mute は効かないことも確認。
4. 本番と同じ mute-commands の拒否、名前空間付き、mail send/read、`*` を確認。
5. コピーした userdata の初回参加/オフライン指定で SQLite の印・期限・理由を確認し、
   Essentials 側3項目が解除され、再参加/再起動/自作解除後に復活しないことを確認。
6. Essentials の後からの有効化、Essentials無し、壊れた userdata、DBを開けない条件で他のチャット機能が起動すること。
   古い `/essentials:mute`・emute/unmute はイベントで取消され、二重 mute が作られないこと。
