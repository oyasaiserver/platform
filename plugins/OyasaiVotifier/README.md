# OyasaiVotifier

`Votifier` の Bukkit API と NuVotifier v1/v2 の受信を維持しつつ、zVoteParty の文字列コマンド報酬を Vault と OyasaiToken の型付き API に置き換えるプラグインです。

## 本番移行

1. 本番の `plugins/Votifier/config.yml` から `host`、`port`、`tokens.default`（およびサービス別トークン）、`rsa/public.key` と `rsa/private.key` をこのプラグインのデータディレクトリへ移す。鍵とトークンはリポジトリへ追加しない。
2. 本番の `plugins/zVoteParty/config.yml` から個別報酬額、Party の `votes_needed`、Party 報酬額を `config.yml` の `rewards` へ転記する。未確認の数値をサンプル値で確定しない。
3. `eco give` は `money`、`tm add`/`tm addall` は `tokens` に移す。`tellraw` など表示だけが必要なものだけを `commands` / `commands-per-player` に残す。
4. zVoteParty の進捗を維持したい場合は、切替直前に残り投票数を確認し、`party-progress.yml` の `votes` に設定する。確認不能なら Party カウントは 0 から開始する。
5. 旧 `Votifier` と `zVoteParty` を同時にロードしない。`/testvote <player>`、`/votifierstats`、実際の v1/v2 投票サイトのテストで確認してから旧 JAR を退避する。

`commands` はコンソール実行の明示的な表示用エスケープハッチです。個別・per-player は `%player%`、`%service%`、`%votes%` を使え、Party の一度だけ実行する `commands` は `%service%`、`%votes%` のみです。プレイヤー名は安全な Minecraft 名に限定します。
