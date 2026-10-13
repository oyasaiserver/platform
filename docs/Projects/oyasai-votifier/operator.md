---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiVotifier/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiVotifier の運用（運営向け）

プレイヤー向け説明は [player.md](player.md)、実装の入口は [PROJECT.md](PROJECT.md) を参照。

投票サイトからの投票（NuVotifier v1/v2 形式）を受け付け、個人報酬と投票パーティ報酬を配る。旧 `Votifier`（NuVotifier）と `zVoteParty` の置き換え。

## 必要なプラグイン

- `Vault`（と、Vault に経済を登録するプラグイン）、`TokenManager`（OyasaiToken が `provides: [TokenManager]` で名乗る）。どちらかがないと起動しない。
- `provides: [Votifier]` を宣言するので、`depend: [Votifier]` のプラグイン（DynamicProfile など）はそのまま動く。旧 `Votifier`・`zVoteParty` と同時に入れない。

## コマンドと権限

| コマンド | 権限（既定） | 用途 |
|---|---|---|
| `/testvote <名前> [service] [v1\|v2]` | `nuvotifier.testvote`（OP） | 認証済みの投票として扱い、イベント発行と報酬処理を実際に行う |
| `/votifierstats` | `nuvotifier.stats`（OP） | `Votifier accepted: v1=…, v2=…, party=進捗/必要数` を表示 |

`/testvote` の注意:

- **本物の投票と同じ処理をする。** 本人の報酬、全体通知、パーティ進捗の加算（到達すればパーティ報酬の配布）まで起きる。本番では報酬内容を考えて使う。
- service を省くと `testvote`、プロトコルを省くと `v2`。`v1`/`v2` は `/votifierstats` のどちらの件数に数えるかが変わるだけで、通信や認証の試験ではない。`v1`/`v2` 以外を書くと使い方が表示される。
- 名前が英数字と `_` の16文字以内でないと、イベントは出るが報酬・通知・進捗は処理されない（ログに `Skipped vote rewards for unsafe username`）。
- 返答は英語（`Test V2 vote accepted for 名前.`）。

`/votifierstats` の v1/v2 件数はメモリ上の値で、再起動で0に戻る。`/testvote` の分も含む。

起動に失敗して投票を受け付けていないときは、どちらのコマンドも `Votifier is not accepting votes: 理由` を返す。

## 設定（`plugins/OyasaiVotifier/config.yml`）

初回起動時に同梱の `config.yml` が書き出される。**書かれていないキーは同梱 `config.yml` の値で補われる**（報酬表・メッセージ・listener も同じ）。

| キー | 既定 | 内容 |
|---|---|---|
| `listener.host` | `0.0.0.0` | 待ち受けアドレス |
| `listener.port` | `8192` | 待ち受けポート。1〜65535 以外なら起動失敗 |
| `listener.socket-timeout-seconds` | `10` | 1接続のタイムアウト。1〜60 に丸める |
| `protocol-v1.enabled` | `true` | `false` で v1 を拒否し v2 だけ受け付ける |
| `tokens.<service名>` | `default` のみ（プレースホルダー） | v2 の token。service 名の token がなければ `default` を使う。どちらもなければその投票は拒否 |
| `messages.*` | 同梱の日本語文 | 下の「メッセージ」参照 |
| `rewards.individual` | 同梱の表 | 投票した本人の報酬表 |
| `rewards.party.votes-needed` | 同梱値 | パーティに必要な投票数。1以上 |
| `rewards.party.rewards` | 同梱の表 | パーティ時にオンラインの各人が引く報酬表 |
| `rewards.party.commands` | `[]` | パーティ時に1回だけ実行するコマンド |

報酬の値は同梱 `plugins/OyasaiVotifier/src/main/resources/config.yml` を見る（この文書には転記しない）。

**token:** `tokens` がない・空、または値が `REPLACE_WITH_` で始まるものが1つでもあると起動しない。同梱の値はこのプレースホルダーなので、実 token を入れるまで投票を受け付けない。実 token は公開リポジトリに書かない。

**旧 NuVotifier の設定との違い:** 読むのは上の表のキーだけ。旧設定の最上位 `host`・`port` は読まれず、`listener.host`・`listener.port`（未記入なら同梱の既定）が使われる。v1 を止める設定も `protocol-v1.enabled` だけを見る。`tokens` は同じ形で読まれる。

### 報酬表

`rewards.individual` と `rewards.party.rewards` は次の項目を持つ行のリスト。1回の投票ごとに1行を抽選する。

| 項目 | 内容 |
|---|---|
| `weight` | 当たりやすさ（正の整数）。合計を100にする必要はない |
| `money` | Vault 経済で渡す金額（0以上。0なら渡さない） |
| `tokens` | OyasaiToken で渡すポイント（0以上の整数。0なら渡さない。通知なしで付与） |
| `commands` | コンソールから実行するコマンド（先頭の `/` は外す。空文字は飛ばす） |

表が空、weight が0以下、数値の項目がない・数値でない、`commands` に文字列以外がある場合は起動しない。

コマンドで使える置換:

| 場所 | `%player%` | `%service%` | `%votes%` |
|---|---|---|---|
| 個人報酬の `commands` | 投票者 | 投票サイトの service 名 | **この投票を数える前**のパーティ進捗 |
| パーティ報酬表の `commands` | 受け取る各プレイヤー | 同上 | 必要投票数 |
| `rewards.party.commands` | 使えない（含む行は実行せず警告） | 同上 | 必要投票数 |

- `%service%` を含むコマンドは、service 名が英数字・`_`・`-` の64文字以内でないと実行しない（ログに `Skipped … unsafe service`）。`.` を含む service 名もここで飛ばされる。
- 渡す相手のプレイヤー名が取れない場合、その人の `commands` は飛ばされる（ログに `Skipped vote command for unsafe username`）。v2 で UUID だけ分かりサーバーに来たことがない人などが該当しうるが、実際の挙動は未確認。

### メッセージ

| キー | 送り先 | 備考 |
|---|---|---|
| `messages.prefix` | — | チャット通知とお礼の先頭に付く。アクションバーとパーティ通知には付かない |
| `messages.vote.broadcast.chat` | 全員のチャット | |
| `messages.vote.broadcast.action-bar` | オンライン全員のアクションバー | |
| `messages.vote.thank-you` | 投票者（名前でオンラインのときだけ） | |
| `messages.party-start` | 全員のチャット（行ごと） | リスト |

- 置換は `%player%`（投票者）、`%zvoteparty_votes_recorded%`（この投票を数えた後の進捗。到達時は必要数と同じ値）、`%zvoteparty_votes_required_total%`（必要数）。お礼とパーティ通知では `%player%` は空、`%zvoteparty_votes_recorded%` は `0` になる。
- 色は `&` コード。結果が空白だけになる文は送らないので、空文字にすればその通知を止められる。ただしチャット通知とお礼は prefix が付くので、本文を空にしても prefix が空でなければ prefix だけが送られる（同梱 `config.yml` のコメントとは異なる。コードから判断し、ゲーム内では未確認）。

## 報酬が配られる流れ

1. 投票を受け付けると、メインスレッドで `VotifierEvent` を出す（他プラグインはここで受け取る）。
2. 投票者に個人報酬を1回抽選して渡す。v2 で UUID が付いていれば UUID、なければ名前でプレイヤーを引く。**オフラインでも渡そうとする。**
3. パーティ進捗を1増やして `party-progress.yml` に保存し、チャット・アクションバー通知、お礼を出す。
4. 進捗が必要数に届いたら0に戻し、パーティ通知を出し、その時点のオンライン全員がそれぞれ報酬表を1回ずつ引き、最後に `rewards.party.commands` を実行する。

経済プラグインがない・入金に失敗した、OyasaiToken のサービスがない・付与に失敗した場合は、ログに `Could not grant vote money to …` または `Could not grant vote tokens to …` が出るだけで、やり直しはしない。

`votes-needed` を現在の進捗以下に下げると、次の1票でパーティになる。

## RSA 鍵（v1）

- `plugins/OyasaiVotifier/rsa/public.key` と `private.key`（Base64 文字列）。両方なければ 2048 bit の鍵を作って保存する。片方だけなら起動失敗。
- v1 は 256 バイトの暗号ブロックを読むので、2048 bit 以外の鍵では v1 投票を受け取れない。
- 投票サイトに登録する公開鍵は `public.key` の中身。

## 起動・受付の失敗

- 設定・鍵・ポートの bind のどれかで失敗すると、プラグインは有効表示のまま**投票を受け付けず報酬も処理しない**。ログに `OyasaiVotifier is enabled, but is NOT accepting votes.` と理由が出る。直してサーバーを再起動する（リロードコマンドはない）。
- 同時に処理する接続は4、待ち行列は64。あふれた接続は切られ、`Vote listener is busy` が出る。
- 署名・challenge・token が合わない投票は `Rejected unauthenticated vote from …` を警告で出す。名前の形式違いなどその他の拒否は FINE レベルのログなので、既定の設定では表示されない。拒否しても投票サイトにエラー内容は返さない。

## データと移行

- パーティ進捗: `plugins/OyasaiVotifier/party-progress.yml` の `votes`。投票ごとに保存する。zVoteParty の進捗を引き継ぐなら、切り替え前に残り数を確認してここに書く。
- 旧 `plugins/Votifier/` からのコピー: `plugins/OyasaiVotifier/` が**存在せず**旧フォルダがあるときだけ、起動時に全内容（`config.yml`・`rsa/`・その他）を一時フォルダへコピーしてから移す。旧フォルダは残る。空でも新フォルダがあればコピーしない。コピーに失敗すると新フォルダは作られず、投票受付は無効になる（原因を直せば次の起動でやり直す）。
- コピーした旧 `config.yml` は、上の「旧 NuVotifier の設定との違い」のとおり `listener.*` へ書き直す必要がある。報酬とメッセージは書き足さなければ同梱値になる。
- 切り替え後は `/testvote 名前` と `/votifierstats`、実際の投票サイトからの v1/v2 投票で確認してから旧 jar を片付ける。
