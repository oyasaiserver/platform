---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiTab/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiTab の運用（運営向け）

プレイヤーに見える内容は [player.md](player.md)、内部の仕組みは [PROJECT.md](PROJECT.md) を参照。

OyasaiTab は 1 つの jar で 2 か所に入ります。

- **Paper（各バックエンド: main・lobby・axiom）:** 表示が有効なら、タブリストのヘッダー・フッター・名前・並び・名前タグ・ping を設定する（下の「表示が有効になる条件」）。どちらの場合も別サーバー向けの名前を Velocity へ送る。
- **Velocity（プロキシ）:** 各バックエンドから届いた名前を受け取り、別サーバーの人としてタブリストに足す。

## 権限とコマンド

- 権限ノードはありません。`plugin.yml` にもコマンドの宣言はありません。
- 管理用のコマンドもありません。設定の変更は `config.yml` を編集して再起動します。

## 表示が有効になる条件

Paper 側の表示は、次の 5 つのプラグインと 3 つのサービスがすべて揃ったときだけ有効になります。

| 種類 | 名前 | 確認方法 |
|---|---|---|
| プラグイン | SocialLikes3、DynamicProfile、LuckPerms、TokenManager、Vault | プラグイン名で探す |
| サービス | Vault Economy、OyasaiTokenApi、LuckPerms API | ServicesManager に登録されているか |

一つでも欠けると、表示は無効になります。その場合も、別サーバー向けの名前の送信は続きます。送る名前はその時点の `playerListName` です（他のプラグインが書き換えていなければ素の名前）。判定は起動時（`onEnable`）の1回だけで、あとから依存プラグインを入れても再起動しない限り表示は有効になりません。

**リポジトリの nix 構成での状態（コードの読み。本番では未確認）:** `oyasai-minecraft-main` は 5 つのプラグインをすべて含むので表示が有効になる見込みです。`oyasai-minecraft-lobby`・`oyasai-minecraft-axiom` は SocialLikes3・DynamicProfile・OyasaiToken を含まないので、送信専用になります。送信専用のサーバーでは、ヘッダー・フッター、名前の飾り、並び順、名前タグ、ping の数字が出ません。並び順を設定しないため、別サーバーの人（並び順 1〜999）が同じサーバーの人（未設定）より上に並ぶ可能性があります（未確認）。

起動ログで状態を確認できます。

| ログ | 意味 |
|---|---|
| `OyasaiTab enabled.` | 表示が有効（別サーバー向けの送信も含む） |
| `OyasaiTab display disabled: missing plugins <名前>; cross-server snapshots stay enabled.` | プラグインが欠けている。表示は無効 |
| `OyasaiTab display disabled: missing services <名前>; cross-server snapshots stay enabled.` | サービスが欠けている。表示は無効 |
| `OyasaiTab cross-server snapshots enabled.` | 表示は無効で、送信だけ動いている |
| `OyasaiTab Velocity bridge enabled.` | Velocity 側が起動した |

> **未確認:** 判定しているプラグイン名のうち `TokenManager` は、OyasaiToken の `plugin.yml` では `provides: [TokenManager]` で宣言されているだけで、プラグイン名は `OyasaiToken` です。`provides` の名前で `getPlugin` が見つかるかは Paper 本体の実装しだいで、このリポジトリのコードでは確かめられません。起動ログに `missing plugins ... TokenManager` が出るかどうかで確かめてください。出る場合、OyasaiToken を入れていても表示は無効になります。

## 設定と既定値

### バックエンド（Paper）: `plugins/OyasaiTab/config.yml`

ファイルがないときだけ、起動時に既定の内容で作られます。既存の設定はジャーを更新しても書き換わりません。設定は起動時に読み込まれ、再読み込みの仕組みはありません。

| キー | 既定値 | 働き |
|---|---|---|
| `network.backend-id` | `main` | 送信データに入るサーバー ID。環境変数 `OYASAI_SERVER_ID` が空でなければそちらを使う。Velocity は接続元のサーバー名で判断するため、表示には影響しない |
| `tablist.sort-groups` | `white, blue, takumi, builder, jokyu, chukyu, default, mod, admini, admin, dev` | グループの並び順。先頭が上。ここにないグループ（既定では `guide` も）は最後にまとまり、その中は名前順。AFK の人はグループに関係なく最後 |
| `tablist.group-colors` | `default: &a`、`white: &7`、`blue: &9`、`takumi: &c`、`builder: &5`、`jokyu: &3`、`chukyu: &x&4&0&8&0&2&0`、`mod: &d`、`dev: &e`、`guide: &b`、`admin: ""`、`admini: ""` | タブ名の `*` の色。値が空、またはキーがないグループには `*` を付けない |
| `nametag.team-prefix` | `oyasaitab_` | 名前タグのチーム名の接頭辞。この文字で始まるチームを、このプラグインのものとして扱う（停止時に外す） |
| `nametag.group-prefixes` | `default` と各グループの書式（`guide` は `&b【案内人】&f`） | 名前タグの書式。`%dp_level%`（`Lv.数字`）と `%luckperms-suffix%`（称号）を置き換える。キーがないグループは `default` の書式を使う |
| `nametag.group-suffixes` | `default: ""` | 名前タグの後ろに付ける文字。キーがないグループは何も付けない（`default` には戻らない） |

- グループは LuckPerms の主グループ（primary group）です。グループ名・キーは大文字小文字を区別しません（小文字にそろえて比べる）。
- 色や書式は `&` 形式で書きます。hex は `&x&4&0&8&0&2&0` の形です。LuckPerms の称号（suffix）は `&` 形式と MiniMessage（`<color:#F1C40F>` など）のどちらでも表示できます。
- キーがない場合は、リストやマップが空として扱われます。`sort-groups` が空なら全員が同じ順位（名前順）になり、`group-prefixes` が空なら名前タグの接頭辞は空になります。
- `team-prefix` を変えると、古い接頭辞のチームは掃除されずに残ります。変える前に停止して、古いチームを `/team remove` などで消してください。

### Velocity: `plugins/oyasaitab/config.yml`

Velocity の data directory（フォルダ名は Velocity の規則に従う）に置かれます。ファイルがないときだけ、既定の内容で作られます。起動時に読むだけです。

| キー | 既定値 | 働き |
|---|---|---|
| `delayed-reapply-ms` | `200` | 接続・サーバー移動・切断のあと、タブリストを組み直すまでの遅延（ミリ秒）。負の値は 0 になる。数値として読めないとき（引用符で囲んだ値も含む）は 200 になる |

このファイルは YAML として読まず、`delayed-reapply-ms:` で始まる行を探すだけです。他のキーを書いても効きません。

## 導入の手順

1. **プロキシ:** Velocity の plugins に `oyasaitab` の jar を入れる。nix 構成では `oyasai-velocity` に含まれています。
2. **バックエンド:** `main`・`lobby`・`axiom` の Paper に同じ jar を入れる。
3. **TAB を併用する場合:** TAB の機能を止める。TAB を外すのは、Velocity 側の全体タブリストの置き換えが済んでからにする（[plugins/OyasaiTab/README.md](../../../plugins/OyasaiTab/README.md) の内容）。
   ```yaml
   # plugins/TAB/config.yml
   header-footer:
     enabled: false
   tablist-name-formatting:
     enabled: false
   scoreboard-teams:
     enabled: false
   playerlist-objective:
     enabled: false
   ```
4. プロキシとバックエンドを起動し、上の起動ログを確かめる。設定を変えたら、そのサーバーを再起動する。

## データ

- **永続データはありません。** データベースはなく、プラグインが書くのは設定ファイル（上の 2 つ）だけです。
- Paper のメモリ上にあるもの: 名前タグのチーム（`oyasaitab_` ＋ 6 文字の名前）、ping の表示（`oyasaitab_ping`、タブリストの枠に表示）。停止時にはこのプラグインが作ったものだけを外します。
- Velocity のメモリ上にあるもの: 各プレイヤーの名前と所属サーバーの記録。再起動すると空になり、バックエンドからの次の送信で埋まります。

## 障害時と注意

| 事象 | 動き | 確認・対応 |
|---|---|---|
| 依存プラグインやサービスが欠けている | 表示は無効。送信は続く | 起動ログの `display disabled` |
| Velocity 側の jar がない | 未確認 | Velocity に `OyasaiTab Velocity bridge enabled.` が出ているか |
| 形式が違う、または未対応のバージョンのデータが届いた | 捨てる。その回の表示は更新されない | Velocity のログ `Rejected malformed OyasaiTab snapshot` |
| クライアントから同じチャンネルに送られた | 捨てる（転送もしない） | Velocity のログ `Rejected client-originated OyasaiTab plugin message.` |
| 1 つのサーバーで全員が退出した | Paper は何も送らない（送るにはオンラインのプレイヤーが要る）。Velocity にはそのサーバーの最後の記録が残るが、表示するのは今プロキシにつながっている人だけで、その人の移動先からの送信か切断で置き換わる・消える | 通常の動作 |
| 1 サーバーが 1000 人を超えた | Paper 側は書き出しで例外になり送れない（自サーバーの表示の更新は送信より先に終わる）。Velocity 側も 1000 人を超えるデータは拒否する | 上限を超える構成では確認が必要 |
| 所持金・トークン・レベルなどの取得で例外が出た | その秒の更新は全員分止まり、送信もされない（例外を捕まえていない） | サーバーログの例外 |
| 別サーバーの人が 999 人を超えた | 超えた分は表示されない | 通常は起こらない |
| LuckPerms のユーザーが読み込まれていない | 所属グループ空扱いになり、既定の名前タグと色なしで表示 | LuckPerms 側の読み込み状態 |
| 他のプラグインが同じ人の名前タグを別のチームに入れている | その人の名前タグは触らない。そのチームから外れると、次の更新（約 1 秒後）で戻す | 他のチームに入っている人の名前タグを上書きしないための仕様 |
| 他のプラグインが名前（playerListName）を書き換えた | 本プラグインの計算結果が変わるまで書き戻さない（前回値との比較で送るため） | TAB などの併用を止める |
| プラグインの停止 | 自分の作った名前タグのチームと ping の表示を外す | — |

### Velocity の起動オプション

nix 構成は `-Dvelocity.max-plugin-message-payload-size=2100000` を付けて起動します。別の方法で起動する場合、既定値のままでは大きなデータが届かない可能性があります（未確認）。

## 守られる・守られない範囲

- このプラグインは表示用です。誰かを保護する機能や、権限で表示を制限する機能はありません。
- Velocity は、バックエンドからの接続だけを受け付けます。クライアントから届いたメッセージは転送せずに捨てます。
- 送る名前は、表示が有効なら OyasaiTab が組み立てた名前（Likes なし）、送信専用ならその時点の `playerListName` です。Velocity 側で文字列の検査はしていません。

## 他のプラグインとの連携

| 相手 | 使う内容 | 必須か |
|---|---|---|
| SocialLikes3 | 個人の Likes、全体の Likes 合計、SLIDs（建築数） | 表示に必要 |
| DynamicProfile | レベル（`Lv.`） | 表示に必要 |
| LuckPerms | 主グループ、称号（suffix） | 表示に必要 |
| Vault（Economy） | 所持金 | 表示に必要 |
| OyasaiToken（OyasaiTokenApi） | トークン残高 | 表示に必要 |
| OyasaiUtilities | AFK 状態 | 任意。なければ AFK 表示は付かない |
| Velocity | 別サーバーの名前を `oyasaitab:main` のプラグインメッセージで渡す | 別サーバー表示に必要 |
| TAB | 併用時は TAB 側の機能を止める | 任意 |
