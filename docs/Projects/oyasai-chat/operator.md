---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiChat/（コードから作成。2026-10-13 にレビュー指摘をコードと照合。ゲーム内での確認は未実施）
---

# OyasaiChat の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、開発者・AI向けの内部仕様は [PROJECT.md](PROJECT.md) を参照。

## 権限

| 権限 | 既定 | できること |
|---|---|---|
| `oyasaichat.lang` | 全員 | `/lang` で言語 mode を選ぶ、発言を判定する |
| `oyasaichat.links.send` | 全員 | link filter の条件を満たす URL を clickable にする |
| `oyasaichat.admin.setchannel` | OP | オンラインプレイヤーの参加・選択チャンネルを変更する |
| `oyasaichat.japanize.dictionary` | OP | 変換辞書を追加・削除・表示・検索する |
| `oyasaichat.admin.import` | OP | LunaChat の staged data を取り込む |
| `oyasaichat.admin.reload` | OP | Paper / Velocity の設定を reload する |
| `essentials.mute` | OP | `/mute` を使う |
| `essentials.mute.offline` | OP | プレイヤーからのオフライン mute 操作を許可する |
| `essentials.mute.exempt` | なし | オンライン対象を mute 操作から免除する |
| `essentials.mute.unlimited` | OP | 設定した最大 mute 期間を超える指定を許可する |
| `essentials.mute.notify` | OP | 他の運営者と対象者への通知を受け取る |

- Paper の `/oyasaichat reload` と `/oyasaichat import-lunachat` は対応する権限を実行時に確認する。Velocity の `/oyasaichatvelocity reload` も `oyasaichat.admin.reload` を要求する。
- `/japanize` / `/jp` の本人切替には権限設定がなく、プレイヤーが実行できる。辞書 subcommand は `oyasaichat.japanize.dictionary` を確認する。
- `/mute` は command の permission に `essentials.mute` を指定。権限既定値は plugin.yml に定義され、`essentials.mute.exempt` のみ default false。

## 管理コマンド

| コマンド | 動作 |
|---|---|
| `/setchannel <player> <channel>` | オンライン対象の active channel を変更。OP または `oyasaichat.admin.setchannel` |
| `/japanize dict add <key> <value...>` | ファイル辞書へ追加・上書き。後続引数を空白で連結 |
| `/japanize dict remove <key>` | ファイル辞書の項目を削除 |
| `/japanize dict list [page]` | キー順に10件ずつ表示 |
| `/japanize dict lookup <key>` | ファイル辞書の値と、有効なら config 上書き値を表示 |
| `/oyasaichat reload` | Paper 設定・online player state を reload |
| `/oyasaichat import-lunachat` | import folder の LunaChat data を非同期で取り込む |
| `/oyasaichatvelocity reload` | Velocity の group と login message 設定を reload |

`/mute <player> [duration] [reason]` は mute を切替・更新する運営 command。`/ch`、`/join`、`/leave` などプレイヤー向け command は [player.md](player.md) を参照。

`/jp` は `/japanize` の alias で、辞書 subcommand も使える。チャンネル alias と追加 shortcut は動的 command として登録される。既定 alias は `g`。引数なしでチャンネルを選び、`/g <message>` は Global 参加中のプレイヤーが一度だけ送る。追加 shortcut は Paper の `channels` 設定で定義する。OyasaiChat は自分の primary command と shortcut label を command map に登録し、同じ label を持つ既存 command は一時退避して disable 時に復元する。shortcut の衝突検査は `ch/join/leave/chwho/chlist/setchannel/msg/r/japanize/oyasaichat` とその aliases が対象。`lang` と `mute` は検査対象に含まれず、shortcut に指定すると通常コマンドの利用経路へ影響するため避ける。

`/msg` を Console から実行すると `Console PM requires an online target and is not supported for replies.`、Console の `/r` は `Only players can use /r.` と表示する。

### 辞書の境界と保存

- key は小文字化し、1〜64文字で空白・制御文字なし。value は256文字以下。config の `japanize.dictionary` が同じ key の file value を上書きする。
- `add` は同じ key を上書きし、`remove` は file dictionary だけを削除する。config に同じ key があればその変換は残る。変更はメモリへ即時反映し、save は単一 writer が順番に行う。
- save failure でもメモリの値を維持し、実行者へ `Dictionary is active in memory but saving failed. Retry the change: <reason>` と通知する。Console log にも failure を出す。成功時は `Dictionary saved: <key>`。辞書処理中の拒否は `Dictionary is being imported or reloaded; please try again shortly.`。pending save がある間の reload は拒否。disable 時は writer に shutdown を依頼するが完了待ちはしない。

## 設定と既定値

Paper の既定値は [`config.yml` resource](../../../plugins/OyasaiChat/src/main/resources/config.yml) と PaperConfigLoader に基づく。既存 `config.yml` は起動時に既定ファイルで上書きしない。行内の範囲・条件は loader/validator の実装にある。

### Paper `config.yml`

| 項目 | 既定値・動作 |
|---|---|
| `network.backend-id` | `main`。Velocity が登録名を通知するまでの初期値 |
| `network.remote-message-prefix` | `<dark_gray>[<backend>]</dark_gray> ` |
| `network.remote-message-suffix` | 空 |
| `network.groups` | `gameplay: [main, axiom]`、`all: [main, axiom, lobby]` |
| `channels.global` | display-name/prefix `Global`、alias `g`、auto-join/default true、permission なし、network-group `gameplay` |
| `channels."2"`、`channels."3"` | display-name/prefix は ID と同じ。auto-join/default false、permission なし、local |
| `channels.staff` | display-name/prefix `Staff`、auto-join/default false、permission `venturechat.staffchannel`、local |
| 各 channel の `shortcut-commands` | 空。aliases も shortcut command として登録 |
| `formatting.chat` | `<dark_gray>[<channel>]</dark_gray> <vault_prefix><name><vault_suffix><dark_gray>: </dark_gray><message>` |
| `formatting.private-message-chat` | `<gray>[<light_purple>PM</light_purple>]</gray> <white><sender></white> <dark_gray>-></dark_gray> <white><target></white><dark_gray>: </dark_gray><message>` |
| `formatting.external-chat` | `<dark_purple>[Discord #<channel>]</dark_purple> <white><displayname_colored></white><dark_gray>: </dark_gray><message>` |
| `formatting.player-name-hover` | `<gray>Player: <white><name>` |
| `formatting.player-name-click-command` | `/msg <name> `。空なら共通 suggestion click を使わない |
| `private-messages.enabled-by-default` | true |
| `private-messages.receive-sound.enabled` | true |
| `private-messages.receive-sound.sound` | `minecraft:entity.experience_orb.pickup` |
| `private-messages.receive-sound.volume / pitch` | `1.0 / 1.0`。volume は0.0〜16.0、pitch は0.5〜2.0 |
| `discord.enabled` | true。DiscordSRV がない場合は無効 |
| `links.domain-filter` | true。false なら sender link permission による制限を適用しない |
| `links.allowed-domains` | Discord CDN の2 host を許可。実値は同梱 config resource を参照。host の完全一致とその subdomain に適用 |
| `japanize.enabled / player-default` | true / true |
| `japanize.none-marker / strip-marker` | `#` / true |
| `japanize.timeout-millis` | 2000。許容範囲100〜10000 |
| `japanize.format` | `<converted> <gray><original></gray>`。512文字以下、各 placeholder を1個 |
| `japanize.dictionary` | 空 map。ファイル辞書より優先 |
| `mute.enabled` | resource に項目なし。省略時は `network.backend-id == main` なら true、それ以外 false。明示設定で override |
| `mute.commands` | `[f, kittycannon]` |
| `mute.max-mute-time` | `-1`。追加上限なし。値の単位は秒、duration parser は最大10年 |

channel は最低1件、default はちょうど1件必要。参照する network group は定義済みであること。remote message prefix/suffix は各256文字以下。sound key は小文字の `[namespace:]key` 形式（namespace は省略可）。既定 Paper config 内の `login-messages` block は Paper loader が読まない。

### 表示 format の placeholder

- 通常 chat: `<channel>`、`<name>` / `<displayname>`（表示名 Component）、`<player_name>`（実名）、`<vault_prefix>`、`<vault_suffix>`、`<message>`。name hover は `<name>`、`<displayname>`、`<player_name>` を使える。
- PM: `<sender>`（表示名）、`<sender_name>`（実名）、`<target>`、`<player_name>`、`<vault_prefix>`、`<vault_suffix>`、`<message>`。
- Discord: `<channel>`、`<displayname_colored>`、`<name>`、`<username>`、`<displayname>`、`<user_id>`、`<message>`。
- 通常 chat・PM・name hover の `$name` は実名の文字列置換。通常 chat の `<name>` は表示名を挿入するため、click command 内の実名指定には `$name` を使う。`player-name-click-command` だけは `<name>` と `$name` の両方を実名へ置換する。通常 chat format が `<name>` / `<displayname>` を `<click:...>...</click>` で囲む場合は、その指定を優先して共通の suggestion click を付けない。

### Velocity plugin data `config.yml`

| 項目 | 既定値 |
|---|---|
| `network.groups` | Paper と同じ `gameplay: [main, axiom]`、`all: [main, axiom, lobby]` |
| `channels` | `global: gameplay`、`2/3/staff: null` |
| `login-messages.backend-display-names` | `main: Main`、`axiom: Axiom`、`lobby: Lobby` |
| `login-messages.from-suffix-format` | ` <gray>from <white><backend></white></gray>` |
| `login-messages.to-suffix-format` | ` <gray>to <white><backend></white></gray>` |

Velocity は group の backend が登録済みか、channel の group が定義済みかを検証する。backend display name は1〜64文字、suffix format は1024文字以下で control character なし、MiniMessage strict mode で有効な値が必要。resource を初回起動時に plugin data に作る。

接続通知の対象は Velocity の `network.groups` に含まれる backend の和集合。初回接続先が対象なら全対象 backend に `to 接続先` 付き参加通知、対象から切断すると全体に退出通知を出す。移動時は対象の移動元だけに `to 移動先` 付き退出通知、対象の移動先だけに `from 移動元` 付き参加通知を出す。Paper の通常参加・退出通知は standalone でも抑止する。実装は `velocity/lifecycle/LoginMessageService.kt`、`paper/PaperChatEvents.kt`。

変換・翻訳と `/lang check` は本文を Google へ送る。公開 chat と PM の両方が対象。明示した翻訳先では名前・URL・辞書置換語も含む準備済み本文全体を送るため、利用者への案内に含める。

## mute の運用と移行

- mute state は Paper ごとに独立し、既定では `network.backend-id` が `main` の Paper だけで有効。Velocity へ同期しない。`mute.enabled` と `mute.commands` は起動時に読み、`/oyasaichat reload` では更新しない。無効時の `/mute` は `このバックエンドでは mute は無効です。`、初期化失敗時は `mute は有効化に失敗しています。ログを確認してください。` と表示する。
- 同じ階層に Essentials の `config.yml` があれば、設定済みの `mute-commands` / `max-mute-time` が OyasaiChat 側の値より優先。Essentials が後から enable された場合も読み直す。
- `/mute <player>` は現在の mute を切替。duration または reason を付けると設定・更新する。年・月・週・日・時・分・秒、複合表記、単位なし秒を受け付ける。暦の月・年を使い、最大10年。解析できない最初の引数は reason として扱うため無期限 mute。 `0s` は即期限切れ。最初の追加引数の中で最初に一致する期間を使うため、理由のつもりの `spam123` も123秒になり、その引数は理由から除かれる。
- 正の `max-mute-time` は player operator に追加上限として適用し、`essentials.mute.unlimited` は超過を許可。期限0の無期限 mute は正の上限を設定しても拒否しない。Console はこの追加上限の対象外。対象が online なら `essentials.mute.exempt` を確認。player operator が offline target を指定するには `essentials.mute.offline` が必要。
- name は online exact/prefix、UUID、Bukkit known-name cache から解決。Essentials userdata は UUID の初回参照時に取り込み、後続の再起動・unmute 後は二重取り込みしない。取り込み後の Essentials cleanup は SQLite commit の後。cleanup 失敗・Essentials 不在は pending flag で再試行し、元 YAML は削除しない。
- mute は chat、PM、設定した command root、既存 messaging command、sign edit を拒否する。標準では受信は許可。mail/email は通常 read を許可して send を拒否するが、設定で root 自体を指定すれば read も拒否。`*` は全 command root を対象にする。
- mute 期限は操作時と online player の1秒周期で確認。期限は `expiresAt <= now` で切れ、mute 行を解除し「mute の期限が切れました。」を表示。mute DB の user read/write に失敗すると、その user の発言は fail closed。mute feature 初期化自体に失敗した場合は mute のみ無効化し、他の chat 機能は起動する。
- Essentials と共存するとき `/mute` は Essentials が所有するか未登録の場合だけ取得する。他 plugin 所有の `/mute` は奪わない。Essentials mute status event は取り消し、二重管理を防ぐ。

## データ保存先

- Paper plugin data: `plugins/OyasaiChat/config.yml`、`players/<UUID>.yml`、`japanize-dictionary.yml`、`oyasaichat.db`。
- LunaChat import input: `plugins/OyasaiChat/imports/lunachat/japanize.yml`、`dictionary.yml`、`uuidcache.yml`。
- Essentials migration source: `plugins/Essentials/userdata/<UUID>.yml`。設定参照元は `plugins/Essentials/config.yml`。
- Velocity plugin data: Velocity plugin data folder 内の `config.yml`。

Player YAML の key は active channel、joined channels、PM receive setting、japanize setting、language mode。書込みは単一 writer と atomic replace を使う。read failure は warning と既定値で続行し、後続 save が問題ファイルを置き換える場合がある。停止時は writer を最大5秒待ち、最後に読み込み済み state を保存する。

PM 受信可否を変更するには、Paper を正常停止して保存完了後に `players/<UUID>.yml` の `private-messages-enabled` を true/false に編集し、起動して読み直す。オンライン中の編集は保存に上書きされ得る。reload も旧 state を保存してから読み直すため、オンライン中の手動編集を反映する手順には使わない（`paper/OyasaiChatPlugin.kt`、`paper/state/PlayerStateStore.kt`）。

SQLite は `schema_versions` と `mute_players` を持ち、chat/PM 本文を保存しない。`WAL`、`synchronous=FULL`、`busy_timeout=5000` を使う。schema migration は feature ごとに transaction で実行する。

## LunaChat data の取り込み

自動移行しない。指定フォルダへ手動でコピーし、Paper 上で `/oyasaichat import-lunachat` を実行する。`oyasaichat.admin.import` が必要。

- `japanize.yml`: player name → Boolean。`dictionary.yml`: key → String。`uuidcache.yml`: flat name → UUID / UUID → name。
- 解決順は uuidcache、LuckPerms、Bukkit known offline-player cache。Mojang query と offline UUID 生成はしない。LuckPerms は optional。
- 不正名・辞書 key は集計して除外。unknown name は UNRESOLVED。値型不正、nested YAML、重複/矛盾データなどで import が失敗する場合がある。
- file dictionary へ merge し、config の同 key が優先。player preference は既存 UUID state の他項目を維持。player-default と同値の取り込み値は保存対象から除き、既存 preference を維持する。
- parse/name lookup は非同期。辞書と Player state は個別に保存し、全体 transaction ではない。途中失敗は表示された集計を確認する。同じ入力の再実行を想定するが、全ファイル一括 rollback はない。

## 起動・reload・障害時

- Paper の `proxies.velocity.enabled: false` は standalone mode。local channel、local PM、Discord の local 連携は動くが backend 間転送はしない。
- Network mode では同じ protocol version の JAR を Velocity と全 Paper に配置し、group/channel mapping を揃える。`network.backend-id` の初期値より Velocity 登録名を使う。
- 不正 Paper config は起動を止める。reload 時の validation 失敗は旧 runtime を維持し、`Reload failed; the previous configuration is still active. <reason>` を表示する。import・辞書 save・送信元処理・chat commit・PM 応答待ちの間は reload/import を拒否する。reload はさらに受信者別配送 queue も確認する。reload の拒否表示は `Reload is temporarily unavailable while chat or private messages are in flight. Try again.`、import は `Wait until pending messages finish before importing.`。
- Paper reload は online player state と PM conversation mode を引き継ぐ。mute startup setting は再構成しない。Velocity reload は routing と login message 設定だけを更新する。
- backend ID conflict は reload で復旧しない。Velocity 登録名・構成を確認して Paper を再起動し、ID を再確認する。identity 未確定、network group mismatch、backend 未登録は配送されない。ローカル表示後の失敗に ACK・再送はない。Discord からの inbound は carrier がいないと network 配送せず local 表示に留まる。
- Remote PM は失敗応答が届けば表示するが、受信側で宛先が消えた場合などは結果を返さない。30秒超の pending は次の安全判定時に削除するだけで、タイムアウトの失敗表示・再送はない。
- 受信者別 transformer には OyasaiChat 側の timeout がない。Stage が完了しないと、その受信者の後続配送が待機し reload も拒否され得る。remote PM の成功応答は受信者への表示後まで待つ。連携 plugin 側の完了・timeout 処理を確認する。
- Player YAML read failure は既定値で続行し、後続 save がファイルを置き換えることがある。辞書 save failure は新値をメモリ上に保つ。mute DB failure は対象 user の発言を拒否する。各ログと実行者への表示を確認する。

## 他プラグインとの連携と制限

| 連携 | 範囲 |
|---|---|
| Velocity | network chat、remote PM、presence、接続/移動/退出通知。backend identity は Velocity 登録名で確認 |
| DiscordSRV | Paper channel mapping による公開 chat。PM は送信しない。未導入・初期化失敗時は無効 |
| Vault Chat | chat prefix/suffix。provider がなければ空表示 |
| LuckPerms | LunaChat import の名前解決。未導入なら次の Bukkit cache lookup |
| Essentials | mute config・userdata の初回 migration と /mute 共存。compile dependency なし |
| OyasaiChat Text Transform API | Paper Services Manager で受信者別 Component を変換。契約は [TEXT_TRANSFORM_API.md](TEXT_TRANSFORM_API.md) |

- 通常 chat のローカル配送は AsyncChatEvent viewer と channel 参加・利用可否の両方を満たす相手へ送る。viewer 制限はネットワークへ送らず、他 Paper は独自の channel 参加・権限条件で受信者を決める。先行 plugin が event を cancel した場合は処理しない。
- Mute はこの Paper 上の chat / PM / 対象 command / sign edit を制限する。Velocity へ状態同期せず、別 Paper へ移動した場合も引き継がない。対象外 command や別 plugin 独自の発言経路まで遮断する保証はない。
- PM 受信可否は player state の値で初期設定。利用者自身が OyasaiChat command で切り替える機能はない。
- DiscordSRV の `Channels` は OyasaiChat channel の display-name と Discord channel ID を対応付ける。例: `Channels: {"Global": "1234567890", "Staff": "3456789012"}`（例示 ID は実際の ID に置換）。受信時は channel ID でも照合する。未対応チャンネルは OyasaiChat では処理・cancel しない。対応チャンネルは cancel して受け取り、bot 投稿は転送しない。
- Discord 添付 URL・nickname・role color などの装飾はローカル表示だけ。backend 間 envelope に添付・装飾は含めず本文だけを転送する。添付だけの投稿も remote 側では添付が見えない。
- チャット履歴用の永続 table はない。公開 chat とローカル PM は Paper console に出力する。remote PM は送信側で対応する pending が残った状態で成功応答を受けたときだけ出力し、受信側 Paper は本文を console に出力しない。DiscordSRV 設定時は public channel へ送信する。console log や Discord retention はこの plugin の管理外。
