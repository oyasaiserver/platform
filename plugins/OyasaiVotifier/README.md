# OyasaiVotifier

`Votifier` の Bukkit API と NuVotifier v1/v2 の受信を維持しつつ、zVoteParty の文字列コマンド報酬を Vault と OyasaiToken の型付き API に置き換えるプラグインです。

## 本番移行

1. 初回起動時に `plugins/OyasaiVotifier/config.yml` を同梱設定から作成する。`plugins/Votifier/rsa/public.key`・`rsa/private.key` は新側の両方が未作成の場合だけ対で、`plugins/Votifier/party-progress.yml` は新側に無い場合だけ自動コピーする。旧 `config.yml` はコピーしないため、新設定の `host` と `port` を確認する。`VOTIFIER_TOKEN` は `tokens.default` より優先され、`VOTIFIER_RSA_PUBLIC_KEY` / `VOTIFIER_RSA_PRIVATE_KEY` は両方設定するとファイル鍵より優先される。RSA 環境変数は鍵ファイルと同じ Base64 の1行文字列で、環境変数から読んだ鍵は保存しない。鍵とトークンはリポジトリへ追加しない。
2. `rewards.individual` と `rewards.party.rewards` は、`weight`、`money`、`tokens`、`commands` の重み付き抽選表である。各抽選は独立し、weight は合計100でなくてもよい。表が欠ける・空の場合は起動を拒否する。
3. 同梱 `config.yml` は本番 zVoteParty の値をそのまま例示している。個別は 50% ¥30,000 + 15P、40% ¥20,000 + 10P、10% ¥50,000 + 20P（各 tier でオンライン全員へ順に 3P/2P/5P）、Party は 60 票でオンライン各人が 50% ¥10,000 + 20P / 50% ¥5,000 + 10P を抽選する。旧 `tokenaddall` は現在の `token addall` として `commands` に残している。
4. 旧 zVoteParty の個別 `needToBeOnline: false` と同様、個別の金額・個人ポイントはオフラインプレイヤーにも付与を試みる。Party は閾値到達時のオンラインプレイヤーだけが対象である。
5. `eco give` は `money`、`token add %player%` は `tokens` に移す。`tellraw` と `token addall` はコンソールコマンドとして `commands` に残す。
6. zVoteParty の進捗を維持したい場合は、切替直前に残り投票数を確認し、`party-progress.yml` の `votes` に設定する。確認不能なら Party カウントは 0 から開始する。
7. 旧 `Votifier` と `zVoteParty` を同時にロードしない。`/testvote <player>`、`/votifierstats`、実際の v1/v2 投票サイトのテストで確認してから旧 JAR を退避する。

`commands` はコンソール実行です。抽選 tier の `commands` は `%player%`、`%service%`、`%votes%` を使え、Party の一度だけ実行する `commands` は `%service%`、`%votes%` のみです。プレイヤー名は安全な Minecraft 名に限定します。
