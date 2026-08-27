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
last_validated: "2026-08-25"
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
| `/r <message>` | 最後のPM相手へ返信 |
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
変換固有のprovider、cache、状態、看板処理はOyasaiChatへ実装しない。契約は[`TEXT_TRANSFORM_API.md`](TEXT_TRANSFORM_API.md)を正本とする。

外部APIはcompileOnly依存。対象プラグインが未導入でもOyasaiChat全体は停止しない。Discordからの受信は`inbound-backend`に一致するbackendだけがMinecraftへ取り込む。
