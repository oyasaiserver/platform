---
title: "OyasaiVotifier — 投票受付と報酬"
status: active
source_of_truth: "plugins/OyasaiVotifier/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
  - plugins/DynamicProfile/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiVotifier

NuVotifier v1/v2 互換の投票受付と、個人・投票パーティ報酬を扱う。旧 `Votifier`（NuVotifier）と `zVoteParty` の置き換え。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiVotifier/` |
| 主要コード | `OyasaiVotifierPlugin.kt`（起動・コマンド・旧フォルダのコピー）、`VoteServer.kt`（v1/v2受付・RSA 鍵）、`VotifierConfig.kt`（設定の検証・報酬表・メッセージ）、`VoteRewards.kt`（報酬・通知・パーティ進捗） |
| 互換 API | `com/vexsoftware/votifier/model/` の `Vote`（Kotlin）・`VotifierEvent`（Java）。NuVotifier 2.7.2 の公開面に合わせた独自実装 |
| 移行メモ | `plugins/OyasaiVotifier/README.md`（zVoteParty の報酬の移し方） |
| テスト | `src/test/kotlin/io/oyasai/oyasaivotifier/`。`VoteProtocolTest` は v1 の RSA 往復・v1/v2 の実ソケット受付・challenge 不一致と短すぎるパケットの拒否・65535 バイト境界・HMAC。`VotifierConfigTest` は旧形式設定で同梱既定へフォールバックすること・重み抽選の範囲・プレースホルダー token の拒否・メッセージ描画。`VoteMessagesTest` は進捗表示とパーティ後のリセット・不正な名前の拒否。`LegacyDataMigrationTest` は旧フォルダコピーの成功・スキップ・失敗後の再試行。`VoteRewards.deliver`（Vault・OyasaiToken・コマンド実行）、コマンド、`VoteKeys` のファイル読み書き、v1 無効時、未知 service にはテストがない |
| ビルド | `nix develop --command gradle :plugins:OyasaiVotifier:build` |
| 依存 | ビルド: Purpur API・Vault API・Gson（compileOnly）・`:plugins:OyasaiToken`（compileOnly）・Kotlin stdlib。実行時: `depend: [Vault, TokenManager]`（TokenManager は OyasaiToken の `provides`） |
| 利用側 | DynamicProfile が `depend: [Votifier]` で `VotifierEvent` を受け取る |
| Nix package | `packages/oyasai-plugins.nix` が検出し `oyasaivotifier` を公開、`packages/oyasai-minecraft-main.nix` が含める |

## 技術仕様

### 起動

- `onLoad` で旧データをコピー（下記）。`onEnable` は `saveDefaultConfig` → `VotifierConfig.load`（`reloadConfig` するので同梱 `config.yml` が既定値として効き、欠けたキーは同梱値になる）→ `VoteKeys.loadOrCreate` → `VoteServer.start` の順。
- どこかで例外が出ると listener を閉じ、`configModel`・`rewards` を null にして `unavailableReason` を残す。プラグインは enabled のまま、投票受付・報酬処理・コマンドが無効になる。再読み込みの手段はなく再起動が必要。
- 設定の検証: `listener.port` 1〜65535（範囲外は起動失敗）、timeout は 1〜60 に丸める、`tokens` 必須で非空、`REPLACE_WITH_` で始まる値があれば拒否。報酬表は非空・weight 正（合計は Int 範囲）・`money`/`tokens` は0以上の数値必須・`commands` は文字列のみ。`rewards.party.votes-needed` は正。
- 読むキーは `listener.*`・`protocol-v1.enabled`・`tokens`・`rewards.*`・`messages.*` だけ。旧 NuVotifier の最上位 `host`/`port` は読まない（`VotifierConfigTest` が確認）。

### 受付（`VoteServer`）

- `ServerSocket`（`reuseAddress`）を daemon スレッドで accept し、4 スレッド・待ち行列 64 の pool で処理。あふれた接続は閉じて警告。
- 接続ごとに 32 バイトの乱数を URL-safe Base64 にした challenge を `VOTIFIER 2 <challenge>\n` で送り、先頭2バイトで判別する。`0x733A` なら v2、それ以外は v1（無効なら拒否）。
- v2: 長さ 2〜65535。外側 JSON の `payload` 文字列の UTF-8 バイトを、`serviceName` の token（なければ `default`）で HMAC-SHA256 し、`signature`（Base64）と定数時間比較。challenge 一致、username が `[A-Za-z0-9_]{1,16}`、`address` が IP リテラル（`[0-9A-Fa-f:.]+` かつ `InetAddress` で解釈可）を要求。`uuid` があれば `Vote` に保持（個人報酬の対象決定に使う）。成功時だけ `{"status":"ok"}\r\n` を返し、失敗時は何も返さず切断する。
- v1: 256 バイトを `RSA/ECB/PKCS1Padding` で復号し、改行区切り `VOTE`・service・username・address・timestamp。username は v2 と同じ正規表現。address は検証しない。256 バイト固定なので 2048 bit 鍵前提。
- 認証失敗（復号失敗・challenge・未知 service・署名）は WARNING、それ以外の拒否は FINE でログ。
- 鍵: `rsa/public.key`（X.509）・`private.key`（PKCS#8）を Base64 テキストで読む。両方なければ 2048 bit を生成、片方だけなら例外。

### イベントと報酬（`VoteRewards`）

- 受付スレッドで v1/v2 カウンタ（`AtomicLong`、メモリのみ）を増やし、メインスレッドで `VotifierEvent` を発行してから `rewards.deliver` を直接1回呼ぶ。自分のイベントは購読しない（二重付与防止）。`VotifierEvent` は Cancellable ではない。listener が `Vote` を書き換えると、その後の報酬処理は書き換え後の値を使う。
- `/testvote` も同じ `receive` を通るので、カウンタ・イベント・報酬・パーティ進捗すべてに効く。service 既定 `testvote`、address `127.0.0.1`、UUID なし。username はコマンドでは検証しない。
- `deliver`: username が不正なら警告して何もしない（進捗も増えない）。対象は `playerUuid` があれば `getOfflinePlayer(UUID)`、なければ `getOfflinePlayer(name)`。個人報酬の `%votes%` は**加算前の進捗**。その後 `recordPartyVote` で進捗を加算し、到達なら0にして `party-progress.yml` を保存、通知（chat は `broadcastMessage`、action bar はオンライン全員、お礼は `getPlayerExact(username)`）。到達時はパーティ通知 → オンライン全員が各自 `party.rewards.pick` → `rewards.party.commands` の順。パーティ側の `%votes%` は `votesNeeded`。
- 付与: `money > 0` で Vault `depositPlayer`（Economy 未登録・失敗は警告のみ）。`tokens > 0` で `OyasaiTokenService.grant(..., Delivery.Silent)`（非同期、失敗は警告のみ）。コマンドはコンソールで `dispatchCommand`、先頭 `/` を除去、空白のみは飛ばす。`player.name` が null または不正名なら飛ばす。`%service%` を含むコマンドは service 名が `[A-Za-z0-9_-]{1,64}` でなければ飛ばす。`rewards.party.commands` は `%player%` を含むと飛ばす（警告文の `commands-per-player` は実在しないキー名で、実際は `rewards.party.rewards[].commands`）。
- `party-progress.yml` の保存は同期。保存で例外が出ると、個人報酬は渡し済み・メモリの進捗は更新済みのまま、通知とパーティ処理が行われない。
- `votes-needed` を現在の進捗以下に変えると、次の投票で `recorded >= votesNeeded` となり到達扱い。

### メッセージ（`VoteMessages`）

- `prefix` は chat 通知とお礼にだけ付く。`%player%`・`%zvoteparty_votes_recorded%`（加算後）・`%zvoteparty_votes_required_total%` を置換し、`&` 色コードを変換。結果が blank なら送らない。お礼・パーティ通知では player は空、recorded は 0。
- `%player%` に入れる名前は描画時にも正規表現で検査し、不正なら例外。

### 旧データのコピー

`plugins/OyasaiVotifier/` が存在せず `plugins/Votifier/` がディレクトリのときだけ、`plugins/` 直下の一時フォルダ（`.oyasaivotifier-copy-*`）へ全内容をコピーしてから `Files.move` で公開する。旧フォルダは残す。空でも新フォルダがあれば何もしない。失敗時は一時フォルダを消して例外を投げ、`onEnable` が `legacyDataReady` を見て受付を無効にする。次回起動で再試行される。

## 判断・未確認

- 同梱 `config.yml` は本番 zVoteParty の報酬表と投票サイトへの案内コマンドを含む。公開文書には報酬値や運用 URL を転記せず、ファイルへ案内する。秘密 token は設定ファイルにコミットしない（プレースホルダーで起動を拒否させる）。
- 同梱 `config.yml` のコメントは「空文字にすると通知を無効化できる」としているが、chat 通知とお礼は prefix が非空だと prefix だけが送られる（コードから判断。ゲーム内未確認）。
- 実サーバーでの投票サイトからの受付、Vault・OyasaiToken への付与結果、一度も参加していないプレイヤー（名前のみ・UUID のみ）への付与の挙動は未確認。
