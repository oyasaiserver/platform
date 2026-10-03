---
title: "OyasaiChat — バックエンド間チャット同期"
category: platform
status: active
owner: takucan
source_of_truth: "plugins/OyasaiChat/"
related_paths:
  - plugins/OyasaiChat/
  - packages/oyasai-velocity.nix
  - packages/oyasai-plugin-registry/package.nix
  - packages/oyasai-cdktf/src/stacks/platform-services.ts
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-03"
agent_task: null
---

# OyasaiChat

Paperバックエンド間のチャットをVelocity経由で同期するプラグイン。
Paper用とVelocity用の実装を同一JARに同梱し、各実行環境が対応するエントリポイントだけを読み込む構成。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiChat/` |
| 共通モデル | `plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/common/` |
| Protocol | `plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/common/protocol/Protocol.kt` |
| Paper入口 | `plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/paper/OyasaiChatPlugin.kt` |
| Velocity入口 | `plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/velocity/OyasaiVelocityPlugin.kt` |
| Paper設定 | `plugins/OyasaiChat/src/main/resources/config.yml` |
| Velocity設定 | `plugins/OyasaiChat/src/main/resources/velocity-config.yml` |
| テキスト変換API | [`TEXT_TRANSFORM_API.md`](TEXT_TRANSFORM_API.md) |
| Paper descriptor | `plugins/OyasaiChat/src/main/resources/plugin.yml` |
| パッケージ | `packages/oyasai-velocity.nix`, `packages/oyasai-plugin-registry/package.nix` |
| CDKTF | `packages/oyasai-cdktf/src/stacks/platform-services.ts` |
| ビルド確認 | `./gradlew :plugins:OyasaiChat:build` |
| Velocity評価 | `nix derivation show .#oyasai-velocity` |
| 非公開メモ | 個人用の試作・退避・未整理ログは`archive/`または`local/`に置く |

## 目的と範囲

- Paperバックエンド間のGlobalチャンネル同期
- バックエンドを跨ぐPM配送
- プレイヤーのログイン・移動・退出通知
- DiscordSRV、Vault、PlaceholderAPIとの任意連携
- Paper・Velocity双方の設定reload

チャットの実装正本は`plugins/OyasaiChat/`。docsは仕様と作業入口を示し、実装そのものを複製しない。

## 実行構成

| 実行環境 | 担当 |
|---|---|
| Paper | チャンネル、権限、ローカルチャット、PM表示、Discord連携、プレイヤー状態 |
| Velocity | backend間メッセージ転送、PM宛先解決、ログイン通知、PM状態 |
| 共通 | 設定モデル、Protocol、Envelope変換 |

Paperのbackend IDは`network.backend-id`を基本値とし、`OYASAI_SERVER_ID`が明示されている場合はそちらを優先。backend IDは表示名ではなく、ネットワーク設定とルーティングに使う識別子。

## チャンネル仕様

チャンネルはPaperの`config.yml`の`channels`で定義。

| 設定 | 仕様 |
|---|---|
| `id` | チャンネル識別子 |
| `display-name` | 表示名 |
| `aliases` | チャンネル選択時の別名。省略コマンドとしても登録 |
| `shortcut-commands` | aliases以外に追加する、一度だけ送信またはチャンネル選択用のコマンド |
| `prefix` | チャット表示のチャンネル識別子 |
| `permission` | 利用可能なプレイヤーを制限。未設定で制限なし |
| `auto-join` | ログイン時の自動参加 |
| `default` | デフォルトチャンネル。1つだけ設定 |
| `network-group` | backend間共有先。未設定でlocal channel |

`network-group`の扱い。

- 存在しないgroup名。起動・reloadを拒否。
- 存在するgroupでも現在のbackendが所属していない場合。local channelとして扱う。
- 現在のbackendが所属するgroup。Velocityを経由して同じgroupの他backendへ配信。

Staffは特別なチャンネル種別ではなく、通常のpermission付きチャンネル。`oyasaichat.channel.staff`は提供しない。デフォルト設定では`venturechat.staffchannel`を使用。

## コマンド

| コマンド | 用途 |
|---|---|
| `/ch <channel>`、`/channel <channel>` | チャンネルを選択 |
| `/join <channel>` | チャンネルへ参加して選択 |
| `/leave <channel>` | チャンネルから退出 |
| `/chlist` | 利用可能なチャンネルを表示 |
| `/chwho <channel>` | 同じbackendの参加者を表示 |
| `/setchannel <player> <channel>` | 他プレイヤーの選択チャンネルを変更。`oyasaichat.admin.setchannel`が必要 |
| `/msg`、`/tell`、`/message`、`/pm` | PM送信 |
| `/r <message>`、`/reply <message>` | 最後のPM相手へ返信 |
| `/oyasaichat reload` | 設定reload。`oyasaichat.admin.reload`が必要 |
| `/oyasaichatvelocity reload` | Velocity設定reload。`oyasaichat.admin.reload`が必要 |

各チャンネルの`shortcut-commands`は動的コマンドとして登録し、コマンド入力時の候補に表示する。引数なしでチャンネルを選択し、メッセージ付きでは選択状態を変えず一度だけ送信する。
OyasaiChatのコマンドはLunaChatや標準コマンドと競合しても、名前空間なしのラベルをOyasaiChatへ割り当てる。競合元のコマンド登録は削除せず、名前空間付きで実行可能。
`/ch <channel>`や引数なしの省略コマンドでチャンネルを選択すると、PM会話モードを解除する。

## Globalチャット同期

1. Paperが送信者の選択チャンネル、参加状態、権限を確認。
2. local channelなら同じbackend内だけへ配信。
3. network channelなら送信元backendを含むEnvelopeをVelocityへ送信。
4. Velocityがnetwork-group内の送信元以外のbackendへ転送。
5. 受信側Paperが利用可能なプレイヤーへ配信。

同じbackendから受信したメッセージは再配信しない。送信元設定の`remote-message-prefix`と`remote-message-suffix`を、受信側のリモートメッセージ表示へ適用。

複数backendを同じDiscordチャンネルへ接続する場合、各backendの同じMinecraftチャンネルに同じ`discord-channel-id`を設定。ただしDiscordからMinecraftへの受信先は、各mappingの`inbound-backend`で1つに限定。

## PM

- 同じbackendの相手。Paper内で直接配送。
- 別backendの相手。VelocityがUUIDまたはプレイヤー名から接続先backendを解決。
- Velocityが解決後に`targetPlayerId`を設定し、`targetPlayerName`を`null`にする形式。正常なProtocol形式。
- オフライン、PM無効、または配送不能。送信者へ失敗結果を返す。
- `/r`の返信先とPM会話モード。Velocity上で管理し、reload後も維持。

## ログイン・移動通知

`login-messages`はVelocity側で処理。

| 状態 | 通知先 | 接尾辞 |
|---|---|---|
| managed backendへの新規ログイン | managed backend全体 | `to <backend>` |
| managed backendから別backendへ移動 | 移動元 | `to <移動先backend>` |
| 別backendからmanaged backendへ移動 | 移動先 | `from <移動元backend>` |
| managed backendから退出 | managed backend全体 | なし |

表示名は`backend-display-names`、接尾辞形式は`from-suffix-format`と`to-suffix-format`で指定。backend IDと表示名を分離。

## Protocol

PaperとVelocity間のPlugin Messageは、Gson JSONのEnvelopeで交換。

受信境界でGson変換前に以下を確認。

- `protocolVersion`が対応バージョンであること
- 必須フィールドの存在とJSON型
- UUIDフィールドの形式
- `type`と`originKind`の許可された組み合わせ
- typeごとの必須UUID、channel、network group
- 本文が4096文字以内であること
- backend originとproxy originの識別子が矛盾しないこと

不正なEnvelopeは受理せず、Paper・Velocityのハンドラーへ渡さない。Protocol境界の検証は、設定値の簡略化とは別に維持する。

## 設定reload

`/oyasaichat reload`は接続中のPaper backendで実行する。Velocityは同名コマンドを登録せず、コマンドとtab補完をPaperへ転送する。Velocity設定は`/oyasaichatvelocity reload`で再読み込みする。

- 不正な設定。新設定を適用せず、現在のruntimeを維持。
- Paper。チャンネル、チャット、PM、連携を新設定で再構成。保存済みプレイヤー状態を引き継ぐ。
- Velocity。network routerとログイン通知設定を差し替え。PM・返信状態を引き継ぐ。

## 外部連携

| 連携 | 仕様 |
|---|---|
| Vault | Chat APIからprefix・suffixを取得。未導入、またはprovider未登録時は空表示 |
| PlaceholderAPI | チャット表示用formatのPlaceholderを展開。未導入時は連携なし |
| DiscordSRV | MinecraftチャンネルとDiscordチャンネルの相互連携。設定でmappingを定義 |

## テキスト変換API

OyasaiChatはroutingとformatを維持したまま、外部Paperプラグインが配送前のplain textを書き換えたり、受信者ごとに本文Componentを非同期差し替えできるAPIを提供する。recipient transformerは設定により送信者本人も対象にできる。
ローマ字→かな漢字の日本語変換はOyasaiChatが送信元で所有する。翻訳などの外部provider、cache、看板処理は外部プラグインが所有する。契約は[`TEXT_TRANSFORM_API.md`](TEXT_TRANSFORM_API.md)を正本とする。

外部APIはcompileOnly依存。対象プラグインが未導入でもOyasaiChat全体は停止しない。Discordからの受信は`inbound-backend`に一致するbackendだけがMinecraftへ取り込む。


## 日本語変換（第1段階）

公開チャット（local / network）、チャンネル省略コマンド、PM（同じbackend / 別backend、会話モード、返信）を送信元Paperで一度だけ変換する。Discordから受信した文は変換しない。LunaChatのコードは参照・移植せず、独立したローマ字表を使用する。

- 全体設定と本人の設定がオンで、ASCIIのみかつ英字を含む本文を対象にする。
- `nn`は2文字を消費して「ん」。したがって `saikinnotiyasui` は「さいきんおちやすい」。`n'`、子音前と語末の `n`、促音、小書き、長音、一般的な異表記に対応する。
- URL、オンライン名、辞書キーは変換対象から分離する。辞書は語境界で置換し、置換結果もGoogleへ送らない。URLは `http://` / `https://` が対象。オンライン名は同じPaperのスナップショットとVelocityのpresenceを使い、変換時は現在のpresenceキャッシュを即座に使う。期限切れの場合は裏で更新を要求するだけで、発言の配送は応答を待たない。更新要求は10秒間隔に制限するため、未取得の別backendの名前は完全には保護できない。
- かな→漢字はGoogle transliterateの各文節の第1候補を連結する。HTTPは `java.net.http.HttpClient.sendAsync`。設定タイムアウトまたは通信・解析失敗時は当該部分のひらがなを使う。
- 実応答の形式は `[["こんにちは",["こんにちは", ...]]]` と確認済み（2026-10-03）。[Google API](https://www.google.com/transliterate?langpair=ja-Hira%7Cja&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF)。テストでは固定JSONと注入したfutureを使い、通信しない。

### 設定と状態

`config.yml` の `japanize` に `enabled`、`backends.<backend-id>`、`player-default`、`none-marker`、`strip-marker`、`timeout-millis`、`format`、`dictionary` を設定する。backend別指定が全体の `enabled` に優先する。既定の本人設定はオン、HTTPタイムアウトは2000ms。

配布configはmainだけ有効、lobby・axiomは無効。CDKTFの各Minecraftコンテナは `OYASAI_SERVER_ID` と `OYASAI_JAPANIZE_ENABLED` を明示する。後者は既存configに日本語変換の設定がまだない場合の既定値であり、明示的なconfig設定を優先する。Nixはプラグイン一覧を所有し、永続化されたプラグインconfigの上書きは行っていない。

`/japanize [on|off]`（`/jp`）は引数なしなら切替。既存 `players/<UUID>.yml` の `japanize-enabled` に保存する。旧ファイルにキーがない場合は `player-default` を使う。保存先は既存状態と同様にbackendごと。

先頭の `#` は変換を止め、既定では表示から1回だけ除去する（`strip-marker: false` で残す）。**LunaChatと同じ除去挙動かは未確認**。公開configコメントは「先頭にあれば変換しない」までしか説明していないため、導入前に実データまたは利用者の既知の挙動と照合する。[LunaChat公開設定](https://github.com/ucchyocean/LunaChat/blob/master/src/main/resources/config_ja.yml)。変換が無効なbackendでは印の除去もしない。

### 表示・順序・Protocol

変換した場合は送信元の `format`（既定 `<converted> <gray><original></gray>`）で表示する。本文と原文はMiniMessageのunparsed placeholderに入れ、入力に含むタグを解釈しない。formatには各placeholderを1個ずつ指定する。変換結果が同じ場合や長すぎる場合は原文だけを表示する。

送信元のUUID別キューは公開チャット・PM・省略コマンドを共有し、受理時に本人設定とオンライン名を取得する。HTTP待機はPaperのメインスレッドを止めない。完了後はschedulerでメインスレッドへ戻り、同じPlayer instanceがonlineのときだけ配送する。リモートPMは返信先解決と配送応答までキューの枠を保持する（応答がない場合は既存PMの30秒期限で解放）。1人の待機数は32件まで。

`AsyncChatEvent` は従来の配信先計画とviewerの積集合を取得した後、標準配信を止めて手動配送する。Consoleにも変換後の本文を出し、DiscordSRVへは同じ表示内容のplain textを渡す。Discordは色を表現せず「変換結果 原文」になる。PMは既存Discord bridgeが送信しないため、公開チャンネルへPMを流す機能は追加しない。

Envelopeの `content` は変換済み本文。任意の `japanizeOriginal` と `japanizeFormat` が原文と送信元の表示形式を保持し、Velocityはこれらを透過転送する。受信側は表示するだけでGoogle APIを呼ばない。本文と原文の合計は4096文字以内、formatは512文字以内。送信側はformatの文字数も加算して保守的に検査し、超える場合は原文へ戻す。

未変換の文も受信者別配送キューを通すため、遅いrecipient transformerを追い越さない。reloadは送信元キュー・受信者別配送・PM・チャット確定の待機中は拒否し、disableは未配送を破棄する。

Protocol version 3の任意field追加。旧実装も本文を読めるが、旧Velocityは再encode時に追加fieldを落とす。**導入はVelocityを先に更新し、Paperを更新した後に変換を有効にする。** 混在期間の旧Paperは変換済み本文だけを表示する。

### LunaChatデータの取り込み

本番データへ自動アクセスしない。管理者がOyasaiChatのデータフォルダ内 `imports/lunachat/` に `japanize.yml`、`dictionary.yml`、`uuidcache.yml` のコピーを用意し、`/oyasaichat import-lunachat` を実行する。`oyasaichat.admin.import`（既定OP）が必要。

- `japanize.yml`: プレイヤー名→Boolean。
- `dictionary.yml`: ローマ字キー→文字列。`./spawn` のようなドットも文字通り扱う。
- `uuidcache.yml`: flatな「名前→UUID」または「UUID→名前」を受理。名前は大文字小文字を区別しない。矛盾する同名UUIDは解決不能として数える。nested形式や不正な型は変更前に拒否する。
- 全入力の解析後、辞書を `japanize-dictionary.yml` へatomic保存し、UUID別の既存状態へ本人設定を保存する。他の状態は保持する。configの辞書が取り込み済み辞書に優先する。
- 同じコピーを再実行しても同じ設定・辞書になる。開始時に `resolved`、`unresolved`、`dictionary`、保存完了時に `changed` と `unresolved` を報告する。オフライン状態の読み込みと保存は既存の専用writerで実行し、Paperメインスレッドで完了を待たない。取り込み中は新規送信とreloadを拒否する。ファイルごとのatomic保存であり、全件トランザクションではない。保存途中の失敗は報告し、同じコピーを再実行して復旧できる。未解決の名前からoffline UUIDを作ったり、Mojang APIを呼んだりしない。

**公開リポジトリのREADME・Wiki・config・issueにはuuidcacheの実データ形式を確認できる資料が見つからなかった。flatの両方向は防御的に受理する形式であり、LunaChat v3.0.20の実形式を確認済みとは扱わない。** 事前に匿名化した実サンプルと照合する。実データの4650件/辞書11件の取り込み、未解決件数の実測、実Minecraftサーバー上の動作確認は未実施。

main・lobby・axiomのNix一覧、plugin registry / lock、Paper `loadbefore` からLunaChatを除去し、`/tell`・`/reply` はOyasaiChatが受け持つ。

### 検証

`nix develop --command gradle :plugins:OyasaiChat:build` で単体テストとshadowJarを生成する。生成物は `plugins/OyasaiChat/build/libs/OyasaiChat.jar`。ネットワーク、Paper起動、本番のデータを使わずに変換、保護語、Google JSON、Protocol境界、設定、保存・取り込み、配送順を検証する。整形は `nix fmt`。
