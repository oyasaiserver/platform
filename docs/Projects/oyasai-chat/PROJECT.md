---
title: "OyasaiChat — チャットとバックエンド間同期"
status: active
source: "plugins/OyasaiChat/（コードから作成。2026-10-13 にレビュー指摘をコードと照合。ゲーム内での確認は未実施）"
source_of_truth: "plugins/OyasaiChat/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-plugin-registry/package.nix
  - packages/oyasai-velocity.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiChat

Paper のチャンネルチャット、PM、日本語変換を扱い、必要に応じて Velocity 経由で Paper バックエンド間へ届けるプラグイン。Paper 用と Velocity 用の entrypoint を同じ JAR に含む。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)
- 受信者別テキスト変換 API: [TEXT_TRANSFORM_API.md](TEXT_TRANSFORM_API.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiChat/` |
| 主要コード | Paper: `src/main/kotlin/io/oyasai/chat/paper/OyasaiChatPlugin.kt`、`paper/chat/`、`paper/pm/`、`paper/network/`、`paper/mute/`、`paper/japanize/`、`paper/state/`、`paper/transform/`。共通: `common/model/`、`common/protocol/Protocol.kt`、`common/japanize/`、`api/`。Velocity: `velocity/OyasaiVelocityPlugin.kt`、`velocity/routing/`、`velocity/lifecycle/LoginMessageService.kt` |
| 設定と descriptor | `src/main/resources/config.yml`、`velocity-config.yml`、`plugin.yml`、`velocity-plugin.json` |
| テスト | `src/test/kotlin/io/oyasai/chat/`。変換、辞書・LunaChat形式データ、Protocol、backend ID、順序、standalone 判定、mute 規則・DB 移行を確認する。Paper/Velocity を起動する統合テストはない |
| ビルド | `nix develop --command gradle :plugins:OyasaiChat:build`。生成物は `plugins/OyasaiChat/build/libs/OyasaiChat.jar` |
| Nix package | `packages/oyasai-plugins.nix` が `oyasaichat` を生成し、`packages/oyasai-plugin-registry/package.nix` が platform registry に加える。Velocity package は `packages/oyasai-velocity.nix` |

## 技術仕様

### 構成と設定の読み込み

- Paper descriptor は `plugin.yml`、Velocity descriptor は `velocity-plugin.json`。それぞれの実行環境が対応する entrypoint を読み込む。
- Gradle module の implementation dependency は SQLite JDBC、Gson、Kotlin stdlib。Purpur API、DiscordSRV、Velocity API、Vault API、LuckPerms API は compileOnly。Essentials は compile-time dependency にせず、mute 連携で reflection を使う。
- Paper の初回起動では resource の `config.yml` を plugin data folder に作る。既存設定は起動時に既定値で上書きしない。Velocity は `velocity-config.yml` resource から plugin data の `config.yml` を用意する。
- Paper の runtime は `PaperConfigLoader` が設定を読み、チャンネル default の個数、network group の参照、サウンド値、日本語変換 format などを検証して構築する。不正なら Paper plugin の有効化を止める。Velocity は group/backend、channel/group、login message format を検証する。
- 同梱 Paper 設定にも `login-messages` があるが、PaperConfigLoader は読まない。接続・移動通知の実設定は Velocity の plugin data `config.yml`。

### チャンネル、イベント、ネットワーク

- Paper のチャンネル設定は `config.yml`。同一 Paper の利用者へ配送する local channel と、Velocity の network group を使う channel がある。チャンネルが参照する group が未定義なら設定エラー。backend が定義済み group のメンバーでない場合、その backend では channel を local として扱う。
- 通常チャットのローカル配送は `AsyncChatEvent` の viewer と OyasaiChat のチャンネル受信者候補の積集合へ手動配送する。先にキャンセル済みのイベントは処理しない。表示前に標準配信を止め、各受信者へ個別に届ける。viewer 一覧は envelope に含めず、他 Paper は自分のチャンネル参加・権限条件で受信者を決める（`paper/PaperChatEvents.kt`、`paper/chat/ChatService.kt`）。
- network channel は Paper の Plugin Message を Velocity へ送り、Velocity が同じ group の送信元以外の backend へ転送する。受信 Paper は protocol、origin、timestamp、group、backend ID を検証し、送信元自身の backend から戻ったものは再配信しない。
- `network.backend-id` は起動時の初期値。Paper は照合 ID 付き `BACKEND_ID_REQUEST` を送り、Velocity は実際の接続元 `ServerInfo.name` を `BACKEND_ID` で返信する。Paper は応答の origin、照合 ID、接続プレイヤー UUID が一致してから ID を確定する。設定 ID と登録名が異なれば登録名を採用して警告する。確定後に異なる名前を受け取ると network send を止め、再起動後に確認する必要がある。
- Paper の `proxies.velocity.enabled` が false なら standalone mode。backend ID 要求・network delivery を止め、Global は local 表示、Discord 連携は local Paper 内で動く。モードは起動時に決まり、reload では切り替えない。
- Public channel の Plugin Message は接続中のプレイヤーを carrier に使う。利用可能な carrier がない場合は送信できず、ローカル表示後に「Network delivery was unavailable; this message was shown only on this backend.」を返す。Velocity が受け付けた後に受信側 Paper が実際に表示したかを確認する ACK・再送はない。
- Remote PM は Velocity で接続中の宛先を解決し、受信 Paper の表示後に `PRIVATE_MESSAGE_RESULT` を返す。宛先 offline、PM 受信無効、Velocity から宛先 backend への送信失敗はそれぞれ送信元へ結果を返す。受信 Paper で宛先が消えていた場合は拒否ログだけで応答しない。結果が返らない pending は30秒超で次の安全判定時に削除するだけで、タイムアウト表示・再送はない（`paper/pm/PrivateMessageService.kt`、`paper/network/PaperNetworkHandler.kt`）。
- 接続通知は `velocity/lifecycle/LoginMessageService.kt` が network groups の backend 和集合を対象に計画する。初回接続先が対象なら全対象へ `to` 付き参加通知、対象からの切断は全対象へ退出通知。移動は対象の移動元に `to` 付き退出・対象の移動先に `from` 付き参加通知。`paper/PaperChatEvents.kt` は standalone でも通常の参加・退出通知を抑止する。
- Velocity は backend 間転送、remote PM の宛先解決、返信・会話 mode、presence、login/move/quit message を扱う。Proxy 起点のメッセージは専用の origin 値を使い、backend 起点の origin と混同しない。

### Protocol 形式と検証

- Paper と Velocity は Gson JSON の envelope を交換する。protocol version は `4`。必須項目は `protocolVersion`、`messageId`、`type`、`originKind`、`originBackend`、`timestamp`、`senderName`、`content`。type に応じて channel、group、player UUID、target などを使う。
- 任意項目には `replyToMessageId`、`channelId`、`networkGroup`、backend prefix/suffix、origin/target player ID/name、sender locale、リンク送信可否がある。日本語変換済みの public chat/PM では `japanizeOriginal` と `japanizeFormat` を対で付ける。片方だけ、非対応 type、空の原文、不正な UUID・JSON 型、type と origin の不一致は拒否する。
- 本文と日本語変換前の原文は合計 4096 文字以内、format は 512 文字以内。timestamp は現在から30秒より古いもの、または5秒より先のものを拒否する。重複抑止は各受信プロセスで最大4096 ID、60秒の記録を使う。
- protocol の異なる Paper/Velocity JAR の混在をサポートしない。network mode の全 backend と Velocity を同じ対応版へ揃える。

### チャンネル、PM、コマンド表示

- channel ID と alias は大文字小文字を区別せず解決する。default channel はちょうど1件必要。alias と追加 shortcut command はコマンドとして登録される。引数なしは参加・選択、本文付きは参加状態を変えずに一度だけ送信する。
- `/ch` / `/join` はチャンネルを参加・選択し、`/leave` は一時的に参加を外す。利用可能な auto-join channel は状態正規化で再追加するため、次の一覧表示・chat 処理・再ログインなどで参加に戻る（`paper/state/PlayerStateNormalization.kt`）。最後の参加可能 channel は外せない。`/chwho` は同一 Paper の参加者を列挙する。
- `/msg <player>` は会話 mode、`/msg <player> <message>` は一度だけ PM。`/r` は最後の PM 相手へ返信する。remote PM の名前/UUID 解決と返信状態は Velocity 経由。会話 mode、返信先、pending message はプロセス内メモリで、再起動・切断を越えて永続化しない。Paper reload 中のオンライン PM 状態は引き継ぐ。
- OyasaiChat は descriptor の primary command と channel shortcut のラベルを取得し、競合する command map の登録を退避する。disable 時に退避した登録を復元する。runtime の衝突検査は `ch/join/leave/chwho/chlist/setchannel/msg/r/japanize/oyasaichat` とその aliases だけ。`lang` と `mute` は対象外で、shortcut が通常コマンドのラベル取得へ影響する（`paper/runtime/PaperRuntime.kt`、`paper/OyasaiChatPlugin.kt`）。
- `ChatFormatter` は MiniMessage format と AsyncChatEvent 時点の送信者表示 snapshot を使う。URL は短い表示にし、送信者のリンク可否と許可 domain 条件を満たした場合にクリック可能にする。Vault prefix/suffix provider がなければ空にする。
- `DiscordSRV` の設定 mapping がある公開 channel を Paper が受信・送信する。Paper の汎用 GameChat event は二重送信防止のため cancel する。Discord 添付 URL はローカル表示に加える。backend 間 envelope は本文だけで、添付・nickname・role color 等は転送しない。添付だけの投稿は remote で添付を表示できない（`paper/integration/DiscordIntegration.kt`、`paper/chat/ChatService.kt`）。Discord から Minecraft への転送は online Paper player を Plugin Message carrier として必要とする。carrier がいない間は network へ送らず local 表示と警告になる。OyasaiChat 側に inbound-backend 設定はない。PM を Discord へ送る処理はない。
- Paper Services Manager で受信者別テキスト変換 API を公開する。transformer は priority 降順、同 priority は登録順。呼び出しの同期例外・null Stage は次の transformer へ進む。最初の非 null Stage だけを採用し、非同期失敗・null 結果・PassThrough は元の本文へ戻す。次の transformer は試さず、変換を重ねない（`paper/transform/RecipientTextTransformerRegistry.kt`、`paper/transform/RecipientTextDispatcher.kt`）。非同期完了後、同じ Player instance が online の場合に表示する。API 契約は [TEXT_TRANSFORM_API.md](TEXT_TRANSFORM_API.md)。

### 日本語変換と言語判定

- Public chat、shortcut、PM は送信元 Paper で1回だけ準備し、受信 Paper や Velocity で Google 変換を再実行しない。Discord 起点の文章はこの変換経路を通らない。
- LunaChat のコードは参照・移植せず、独立したローマ字変換を行う。`auto` は既定で有効。空白だけではない ASCII 文が対象で、英字は必須ではない。数字式も transliterate へ送り、数字の辞書キーも置換する。英字を含まない文で NFKC 正規化後の結果が原文と同じなら変換表示しない。URL、online player name、辞書置換語は分離し、auto の transliterate では保護部分を Google へ送らない。英語と高い確度で判定された複数語文は日本語翻訳を試し、それ以外はローマ字かな変換と Google transliterate 第1候補を使う。失敗・timeout・空結果時はかな変換または元文へ戻る。
- 変換・翻訳は `common/japanize/Japanize.kt` の Google HTTP endpoint へ本文を送る。auto の翻訳判定では保護語がない複数語文全体、transliterate では保護されていない変換対象部分を送る。明示した翻訳先では名前・URL・辞書置換語も含む準備済み本文全体を送り、`/lang check` も判定本文を送る（`common/japanize/LanguageMode.kt`）。PM も `paper/japanize/SourceMessageQueue.kt` の同じ経路を使う。
- `/japanize on` は `PlayerChatState.japanizeEnabled` の setter により languageMode を `auto` へ変更し、選択済み翻訳先を解除する。
- `/lang <language-name>` は英語名を受け付ける。保存値や内部処理には language code を使うが、コマンド入力で code や日本語名は受け付けない。Japanese はローマ字かな変換をせず、日本語翻訳を要求する。指定翻訳で要求に失敗した場合は auto の処理へ戻る。
- 既定 marker `#` は auto 変換を止める。既定では先頭の1個を表示から除去する。明示した翻訳先では marker は翻訳要求を止めない。`japanize.enabled: false` なら変換も marker 除去もしない。
- 変換後表示は既定で `<converted> <gray><original></gray>`。format は 512 文字以下で各 placeholder を1回ずつ含む必要がある。本文・原文は MiniMessage の unparsed placeholder に入れる。同じ結果、空結果、長さ上限超過では原文だけを表示する。
- 各 public player chat と PM に `[?]` を付ける。判定文はメモリ上の最大500件。表示を受け取った UUID だけが判定でき、同じ UUID の判定は3秒間隔。HTTP/JSON error、timeout 等で判定できない場合がある。

### データ形式と永続化

| 保存先 | 内容 |
|---|---|
| Paper plugin data `players/<UUID>.yml` | `active-channel`、`joined-channels`、`private-messages-enabled`、`japanize-enabled`、`language-mode`。PM 会話 mode/返信先は保存しない |
| Paper plugin data `japanize-dictionary.yml` | ゲーム内で編集する辞書。config の同じ key が優先 |
| Paper plugin data `oyasaichat.db` | `schema_versions(feature, version)` と `mute_players(uuid, muted, expires_at, reason, essentials_imported, essentials_cleanup_pending)`。チャット本文・履歴用の table はない |
| Paper plugin data `imports/lunachat/` | 明示的に取り込む LunaChat の `japanize.yml`、`dictionary.yml`、`uuidcache.yml` |
| Velocity plugin data `config.yml` | network groups、channel routing、backend display name、login message suffix |

- player YAML は単一 writer で順序付け、一時ファイルから atomic replace を試す。atomic move 非対応時は通常置換へ fallback。読み込み失敗は警告して既定 state を使い、後続保存で問題のあるファイルを置き換える場合がある。停止時は writer を最大5秒待ち、最後に読み込み済み state を保存する。
- 旧 player YAML の `japanize-enabled` は読み込み互換として残る。false なら mode は `off`。true なら `language-mode` を読み、無効値は `auto` に戻す。
- 辞書 key は小文字化し、追加・削除時は空、空白/制御文字を含む、64文字超を拒否。値は256文字超を拒否する。config dictionary はファイル辞書より優先。書き込みは単一 writer で順序付ける。保存失敗でもメモリの変更は維持され、reload は pending save がある間拒否する。disable 時の close は shutdown を依頼するが完了を待たない。
- `mute_players.essentials_imported` は `NOT NULL CHECK(essentials_imported = 1)`。mute の追加期間上限は `expiresAt - now` と比較するため、期限0の無期限指定を拒否しない（`paper/mute/MuteStore.kt`、`paper/mute/MuteFeature.kt`）。
- mute DB は WAL、`synchronous=FULL`、`busy_timeout=5000`。feature ごとの schema version と migration を transaction で管理する。mute 操作は commit 後に cache を更新する。Essentials userdata は UUID の初回参照時にだけ取り込み、DB commit 後の Essentials cleanup が未完了なら pending flag を再試行する。元 YAML は削除しない。
- LunaChat import は自動実行しない。名前解決は uuidcache、LuckPerms、Bukkit known-player cache の順で、Mojang 問い合わせ・offline UUID 生成はしない。辞書と player state は別々に atomic 保存し、全入力を束ねる transaction ではない。同じ入力の再実行を想定する。
- `RecentSpeech` と last PM recipient / conversation state はメモリ上。チャット本文を履歴として永続保存しない。

### 同期・非同期と外部依存

- Bukkit の表示・状態更新は server thread。AsyncChatEvent は MONITOR で plan を作り、必要な Bukkit read は同期 call（最大2秒）を使い、配信確定は scheduler へ戻す。
- `SourceMessageQueue` は送信者 UUID ごとに変換・配送を順序付け、最大32件。HTTP は `sendAsync` と有限 timeout。遅い online-name/presence refresh は発言配送を待たない。Presence cache は10秒で古くなり、更新要求も10秒間隔に制限する。
- recipient transformer は server thread で開始し、future 完了後に scheduler へ戻す。OyasaiChat 側の timeout はなく、未完了 Stage は `OrderedRecipientDelivery` で同じ受信者の後続配送を待たせる。reload は配送 queue が空になるまで拒否する。remote PM の成功応答も表示後の callback まで待つ。同じ Player instance が online のときだけ送信する。
- Mute は AsyncChatEvent、command preprocess、sign change を検査する。`DiscordSRV` は public chat と Discord message event を購読する。

| 連携 | 動作 |
|---|---|
| Velocity | backend 間 chat、remote PM、presence、login/move/quit message |
| DiscordSRV | optional。Paper channel mapping による public chat。未導入・初期化失敗時は無効 |
| Vault Chat | optional。prefix/suffix provider。未導入なら空表示 |
| LuckPerms | optional。LunaChat import の名前 UUID 解決 |
| Essentials | optional。mute 設定・旧 userdata の初回移行、/mute 共存 |
| SQLite JDBC / Gson | runtime implementation dependency |
| Google translate / transliterate endpoint | 非同期 HTTP の外部境界。endpoint の稼働・応答互換性は本作業では未確認 |

### テストが保証する範囲

| テスト | 確認する範囲 |
|---|---|
| `JapanizeTest`、`JapanizeTranslationTest` | ローマ字、保護語、URL、marker、Google 応答 parse、timeout/failure fallback、長さ上限 |
| `LanguageModeTest`、`JapanizeConfigTest` | language name/引数、mode 保存互換、判定アクセスと throttle、設定 validation、unparsed 表示 |
| `JapanizeDictionaryTest` | key/value validation、config 優先、ページング、atomic save、順序、失敗後の再保存 |
| `LunaImportResolverTest`、`LunaInvalidImportTest` | UUID cache/LuckPerms/Bukkit cache の解決順、無効な行、flat YAML |
| `BackendIdentityTest`、`StandaloneNetworkTest` | correlated backend ID 応答、conflict、standalone/network 分岐 |
| `OrderingTest` | sender/recipient FIFO、容量、失敗、遅い future の順序 |
| `paper/mute/MuteTest` | 期間規則、command root、期限境界、Essentials 一回取り込み、壊れた YAML、schema migration rollback |

テストは固定応答や mock を使う単体テスト。Paper/Velocity の起動、実コマンドと permission 登録、DiscordSRV/Vault/Essentials の実環境、Google 接続、backend 間実配送、ゲーム内表示は保証しない。本作業でテスト・build・ゲーム内確認は実行していない。

## 判断の記録

- 2026-10-13: 3文書へのレビュー指摘を実装と照合し、読者別に訂正した。PM 応答なし経路、auto-join の再追加、Google への送信範囲、transformer の完了待ちは利用・運用上の制限として明記。数字だけの変換表示には NFKC 同一結果を除く条件がある。PM 受信設定は reload 前の保存で手動編集が消えるため、正常停止後に編集する手順とした。build・実サービス・ゲーム内での確認は未実施。

## 既知の制限

- Network group と channel mapping の不一致、未登録 backend、backend ID 未確定/conflict は転送の失敗または破棄になる。ACK・再送はない。
- Mute state は Paper ごとの SQLite に保存し、Velocity へ同期しない。`mute.enabled` は起動時に決まり、`/oyasaichat reload` では切り替わらない。
- PM 受信可否は player state の値。受信者が自分で切り替える OyasaiChat command はない。Discord への PM 送信もない。
- 外部変換・判定サービスは実行時に失敗し得る。実 service との互換性は unit test で保証しない。
- 既存設計・運用資料として [TEXT_TRANSFORM_API.md](TEXT_TRANSFORM_API.md) を維持する。Nix package と registry の関連 path は frontmatter の `related_paths` を参照。
