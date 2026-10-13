# DynamicProfile の昇格と保存

DynamicProfile はプロフィール表示と昇格の判断・実行を持つ。昇格は
`com.baakun.dynamicprofile.promotion` 配下に移した。

移管したファイルは `rank/{Rank,RankManager}.kt`、
`commands/{SyokakuCommandExecutor,SyokakuManagerCommandExecutor}.kt`、
`commands/syokaku/{Promote,Demote,GetRank,IsCandidate,SeeRequirements,SeePlayerInfo}.kt`、
`commands/syokakuManager/LoadPast.kt`、`notifications/*.kt`、
`discord/SendEmbedMessage.kt`、`utils/{DateTimeUtils,PermsUtils,PlayerUtils}.kt`。

コマンド名、別名、サブコマンド、使用方法、権限ノードと default、プレイヤー向けの文言は維持する。
既存の昇格時の `move += 100` も維持し、レベル・経験値の計算は変更しない。
`Tools.getStats`、`Calculator`、`Stats`、`PromotionRecord` は引き続き公開する。
AdminTools と Menu の変更は同じブランチの jar として組み合わせる。

## 設定の引き継ぎ

DP 側に `ranks.json` がなければ、隣の `OyasaiAdminTools/ranks.json` をコピーする。
DP 側の `config.yml` に `webhook-url` がなければ、AdminTools の同じキーのみコピーする。
DP 側に明示的な空文字がある場合も DP の設定を優先する。元ファイルは変更しない。
AdminTools は昇格のコマンド・権限登録と DP・SocialLikes3 の依存を持たなくなる。
Discord のライブラリはアンケートで使っているため AdminTools にも残る。

## SQLite

保存先は DP フォルダの `dynamicprofile.db`。依存は既存の `libs.sqlite.jdbc` を使用する。

| 表                       | 内容                                                                                                                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schema_versions`        | `feature` を主キーとするスキーマ版数。`profiles=1` と初回取り込み完了の `legacy_json_import=1`                                                                                                                        |
| `profiles`               | `uuid` を主キーとし、昇格履歴以外の全 Stats 項目を `stats_json` に保持する。`timePlayed` も保存する                                                                                                                   |
| `promotions`             | 主キー `(uuid, position)`。履歴の順序を維持し、種別、変更前後ランク、実行者、強制フラグ、日時、備考、プレイ秒数、最終建築 ID、建築数、レベル、経験値をそれぞれの列に持つ。日時に索引。`uuid` は `profiles` を参照する |
| `legacy_import_failures` | 読めなかった JSON のファイル名。UUID のファイル名なら、次回起動でも既存の読み込み失敗通知の対象になる                                                                                                                 |

writer と reader の接続を分け、WAL、`synchronous=FULL`、`busy_timeout=5000`、外部キーを有効にする。
書き込みは専用の単一スレッドに直列化する。プロフィールと履歴は同じトランザクションで更新する。
キューへ渡す前に内容をコピーするため、後からメモリ上の Stats を変更しても保存中の内容は変わらない。

## 初回取り込み

DB 内に取り込み完了印がなく、プロフィールが空の場合だけ `UserStatsJSON/*.json` を取り込む。
項目が欠けた古い JSON は Stats の既存の初期値を使う。
読めない JSON はファイル名のみをログへ出して記録し、残りを続ける。
成功件数・失敗件数をログへ出す。元 JSON は削除も変更もしない。
取り込み全体と完了印は同じトランザクションで確定する。
SQL の失敗では全体を取り消して完了印を残さず、次の起動で再試行する。
DB の初期化・読み込み自体に失敗した場合は DP を無効にし、旧 JSON へ自動で切り替えない。

一度完了すると、成功がゼロでも再取り込みしない。
元 JSON の修正・追加も自動では DB に反映されない。
失敗したプロフィールの復旧には、元 JSON の調査と DB への個別復旧が別途必要になる。

初期読み込みは別スレッドで行い、完了後にコマンドとイベントを登録する。
読み込み前の公開 API の参照は初期値を返すが、その値をキャッシュしない。
保存時期は従来の退出・投票・管理コマンドに加え、昇格履歴記録と称号修復。
停止時にはオンライン・オフライン双方のメモリ上の Stats を保存し、キューを最後まで処理して接続を閉じる。
保存失敗はログと flush/close のエラーとして報告する。

既存の `auto_backup` は、読み込み失敗 JSON をコピーしていた機能だった。
元 JSON を常に保持するため同機能は廃止し、DB の自動バックアップは追加しない。
既存の `auto_backup` フォルダは変更しない。
LeaderBoards、Titles.json、groups.yml、receiveStatus.yml などは従来の保存のまま。

## 古い jar に戻す場合

旧 DP と昇格を持つ旧 AdminTools、旧 Menu を組み合わせて戻す。
新 Menu は DP の新しい称号検証 API を呼ぶため、旧 DP との混在ではレベル表示が `---` になる。
旧 DP は保持した JSON を読むため、プロフィールは移行直前の状態に戻る。
SQLite 化後のプロフィール・昇格履歴の変更は旧 jar では読めず、JSON へ自動逆変換もしない。
LuckPerms のランク変更はそのまま残るため、履歴とのずれがあり得る。
Titles.json など今回は移していないファイルも、以後の変更がそのまま残る。

旧 jar で更新した後にこの jar へ戻すと、完了印がある DB が引き続き正となり、
旧 jar が変更した JSON は再取り込みしない。現在の DB を破棄する操作は自動では行わない。

## 自動テストとローカルでの確認

サーバーを使わず、合成した JSON と一時 SQLite で次を検証する。

- 履歴あり・なし・古い項目欠け JSON の全項目の読み戻し、元 JSON のバイト列の保持
- 2 回目の起動で再取り込みしないこと、失敗のみの初回取り込みの完了印
- 読めない JSON と不正な履歴を含む JSON の個別スキップ
- 保存内容をキュー投入時に固定すること、別スレッドの書き込み、close の待機
- プロフィールと履歴の一括取り消し、SQL 取り込み失敗時の再試行
- ranks.json と webhook-url のコピー、DP 側の設定優先、元ファイルの保持

ローカルサーバーを使える別の作業で、以下を確認する。

- 退避コピー上で初回起動し、元 JSON 数・成功数・失敗数・DB 行数を照合する
- `/syokaku` の全サブコマンド、補完、OP と非 OP の権限、チャット・GUI・Discord の文言
- 昇格・降格・GOOD と loadpast の履歴順序、LuckPerms のランク、SocialLikes3 の建築数
- DP のプロフィール、称号修復、紹介文・おすすめ・友達、Menu・Tab・`%dp_level%`
- 退出・投票・管理保存・正常停止と再起動での保存、既存 DB 起動時の再取り込みなし
- 読めない JSON を混ぜた初回取り込みと既存の管理者・本人への通知
- SQLite 読み込み完了前に既存データを上書きしないこと
