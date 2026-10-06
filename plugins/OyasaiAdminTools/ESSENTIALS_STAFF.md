# 運営コマンドの内製化（段階4）

土台: SQLite 化 PR #1075、`887850bab`。対象仕様は
[EssentialsX 2.22.1-dev+12-776f709](https://github.com/EssentialsX/Essentials/tree/776f709)。
`OyasaiUtilities`、`OyasaiChat`、Essentials の必須依存/API 依存は追加していない。
既存機能が持つ他プラグインへの依存は今回の対象外。

## コマンドと権限

基本権限は `essentials.<正規名>`、既定 OP。
新しい別名は `vanish` の `v` だけ。`otp`、`tpoff`、e 接頭辞等は作らない。

| 正規名    | 用法                                                    | 追加権限                                                                                              |
| --------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| invsee    | `/invsee <player> [equip]`                              | `essentials.invsee.modify` / `.preventmodify` / `.equip`                                              |
| vanish    | `/vanish [on\|off]`、`/vanish <player> [on\|off]`       | `essentials.vanish.others` / `.see` / `.interact` / `.effect` / `.pickup` / `.pvp`                    |
| socialspy | `/socialspy [on\|off]`、`/socialspy <player> [on\|off]` | `essentials.socialspy.others`、`essentials.chat.spy.exempt`                                           |
| whois     | `/whois <player>`                                       | `essentials.whois.ip`                                                                                 |
| sudo      | `/sudo <player\|*\|**> <command\|c:message>`            | `essentials.sudo.multiple` / `.exempt`                                                                |
| seen      | `/seen <player>`                                        | `essentials.seen.ip` / `.location` / `.uuid` / `.firstlogin` / `.whitelist` / `.banreason` / `.extra` |
| tpoffline | `/tpoffline <player>`                                   | 任意設定時の `essentials.worlds.<world>`                                                              |

`invsee.preventmodify`、`sudo.exempt` は upstream と同じ既定 false。
他の宣言済み権限は OP。`chat.spy.exempt` も upstream と同じ OP なので、
OP の入力も監視したい場合は LuckPerms でこのノードを明示的 false にする。
`seen.extra` の子権限も upstream と同じ5つ。

`on/off/1/0` と小文字 `ena` / `dis` 前方一致、他人指定時の
Bukkit `matchPlayer` と最短2文字は EssentialsToggleCommand に合わせる。
others がないプレイヤーの不明な引数は自分のトグルとして扱う。

`invsee` はオンライン相手の実インベントリを開くので編集は直接反映される。
自分は開けない。modify がない、相手に preventmodify がある、相手が退出した、
実行者の基本権限が失われた場合はクリック・ドラッグを拒否する。
装備は9枠の読み取り専用スナップショット（防具4枠＋副手）。
Essentials と同じく、equip 権限があれば第2引数の内容にかかわらず装備を開く。
相手の退出・無効化時はビューを閉じる。

vanish は自作プラグイン所有の `hidePlayer` / `showPlayer` で表示とタブを制御し、
see を持つ観察者には隠さない。状態は再起動・再参加で復元する。
`vanished` metadata も自作所有で出す。effect に応じて透明効果を付け、
睡眠除外・pickup・対人攻撃/燃焼・mob のターゲット・sculk 振動を扱う。
本番の既存 vanish 中の人数は依頼では0人なので、Essentials の vanish は取り込まない。

socialspy の ON/OFF も保存する。初回に userdata の `socialspy` を取り込む。
権限がなくなった参加者の ON は OFF にする。
監視は PlayerCommandPreprocessEvent（HIGHEST、取消済みを除く）で、送信者自身を除き
ON かつ権限ありのオンライン監視者に入力全文を送る。chat.spy.exempt を尊重する。
対象は依頼の21ラベル＋OyasaiChat の `message`（`pm` は21ラベルに含まれる）。
大文字小文字と名前空間を正規化し、コマンド名全体を一致させる。
本番の8人のONという件数は本番に接続せず、各 UUID の参加/初回操作時に順次引き継ぐ。

whois は実名、UUID、オンライン状態、OP、whitelist、ban、初回参加、最終 login/logout、
権限に応じたIPを表示する。オンラインでは表示名、体力、満腹、経験値/level、
プレイ時間、現在位置、ゲームモード、飛行許可/飛行中/速度、vanish も表示する。
オフラインでは保存された最終場所を表示し、体力等の現在値を捏造しない。
seen はオンライン状態と絶対日時を表示し、追加ノードで UUID/IP/初回/whitelist/
オフライン場所/ban理由を制限する。vanish.interact も canSee による検索を補う。

sudo は本人を除き、プレイヤー実行時は相手の exempt を尊重する。
コンソールは免除を無視する（upstream と同じ）。multiple があれば `*` / `**` は
全オンライン対象。`c:` は chat、コマンドは次tickに `chat("/...")` で実行し、
対象の権限と PlayerCommandPreprocessEvent を通す。

## 登録と機能の分離

`staff/` は登録・検索・トグル引数の共通部分だけ。コマンドは機能ごとのパッケージ。
Main で機能ごとの try/catch を使い、有効化失敗はその機能の listener/ビュー/登録を
片付ける。履歴DBの失敗は履歴を使う seen/whois/tpoffline に限定し、
invsee/vanish/socialspy/sudo の初期化は続ける。SQLite 接続全体の失敗時に
プラグインを止める #1075 の方針は継承する。

通常名と指定別名が Essentials 所有なら Paper の knownCommands を差し替える。
`overridden-commands` に左右されない。他プラグインの所有名は奪わない。
Essentials が後から有効化された場合も再確認する。無効化時には自分がまだ所有する
差し替え名だけ元に戻す。`essentials:` 名前空間の別コマンドは移譲しない。
softdepend の Essentials は読み込み順の指定だけで、Essentials 無しでも動く。

共存中の二重 SocialSpy を防ぐため `EssentialsSpyCompatibility` が指定版の
`UserData.holder` → `UserConfigHolder.socialSpy(false)` を reflection で操作する。
Essentials クラスを型として参照せず、有効な場合だけ呼ぶ。userdata を保存する
`setSocialSpyEnabled` は呼ばない。初回取り込みを先に行い、退出/無効化時に元の
実行時値を戻す。holder の再読込も検知し、キャッシュはオンライン分に限定する。
Essentials 自身が別の操作で userdata を保存する間に旧 socialspy=false が保存される
可能性はあるが、自作の ON/OFF の正は既に SQLite にあり再取り込みされない。
この互換部分は指定版の内部構造に依存する。Essentials 更新時に再検証が必要。

## 保存（すべて admintools.db）

接続・順序制御・transaction は #1075 の AdminDb を共用。
新機能のDDLは有効化ごとに独立して作り、書込失敗は呼出元まで返す。
トグルは SQLite commit 成功後にゲーム内へ反映する。

```sql
CREATE TABLE playerhistory_players(
  uuid TEXT PRIMARY KEY,
  name TEXT,
  login INTEGER NOT NULL,
  logout INTEGER NOT NULL,
  world TEXT,
  world_name TEXT,
  x REAL, y REAL, z REAL, yaw REAL, pitch REAL,
  ip TEXT
);
CREATE TABLE vanish_players(uuid TEXT PRIMARY KEY, enabled INTEGER NOT NULL);
CREATE TABLE socialspy_players(uuid TEXT PRIMARY KEY, enabled INTEGER NOT NULL);
-- 各機能にそれぞれ次の表を持つ。schema_version=1。
CREATE TABLE playerhistory_meta(key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE vanish_meta(key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE socialspy_meta(key TEXT PRIMARY KEY, value TEXT NOT NULL);
```

日時は epoch ミリ秒。未記録は0。位置なしは world と座標をNULL。
自作記録の world は UUID、world_name は名前。Essentials の UUID/名前の両方を復元可。
参加で login/実名/IP、退出で logout/位置を記録する。停止時もオンライン分を退出記録し、
プラグインを途中で有効化した場合は Bukkit の lastLogin を使う。

UUID ごとの行があることを「初回取り込み完了」の印とする。
記録がない問い合わせ時に `../Essentials/userdata/<UUID>.yml` の
`timestamps.login` / `timestamps.logout` / `logoutlocation` / `ipAddress` を読む。
socialspy は独立した行で1回だけ読む。ファイルなしでも空/falseの行を保存し、
YAML の構文エラーは取り込み済みにせずエラーとして再試行可能にする。
既存の行はログイン、名前変更、OFF、再起動によって再取り込みされない。
名前→UUID は Bukkit の既知のプレイヤーキャッシュ、UUID指定、オンライン実名を使う。
Essentials usermap の走査やネットワークによる名前解決は行わない。

人が直す設定は `config.yml` の `staff` に保存する。既定値は
hide-displayname-in-vanish=true、sleep-ignores-vanished=true、
world-teleport-permissions=false、socialspy-commands は上記22ラベル。
既存 config.yml に staff がなくても同梱 config の既定値を使用する。

## 意図的な差分と理由

- `/playermanager tpoffline` は残し、`/tpoffline` と同じ executor を呼ぶ。
  **同じ処理の入口が2つ残る**。既存は「オフライン相手を実行者位置へ移す」だったが、
  依頼どおり「実行者が相手の最終ログアウト場所へ飛ぶ」に変更した。
  playermanager の基本権限に加え essentials.tpoffline も確認する。
- tpoffline は保存座標へ Paper teleportAsync（COMMAND）で移動する。
  Essentials 共通の料金・待機・安全位置探索・履歴・移動後無敵時間は再実装しない。
  ワールドが未ロード/存在しない、場所記録なし、テレポート失敗は明示して中止する。
- vanish の永続化は依頼による追加。Essentials は logout で通常解除する。
  hide-displayname-in-vanish は upstream の User.getDisplayName と同じく、
  自作が出す表示名を実名にする。Bukkit displayName 自体を破壊的に書き換えず、
  他の表示名・TABプラグインとの競合を避ける。退出/解除時は自作の hide だけ解除する。
  既存の透明効果/睡眠状態は可能な範囲で復元し、他プラグインの hide を解除しない。
- invsee の read-only はドラッグ・クリエイティブの複製操作も拒否する。
  upstream 装備ビューの middle-click を許可する抜け道は複製防止のため閉じる。
- SocialSpy は OyasaiChat の msg/r を含む対象入力を直接拾う。
  upstream は正規名 msg/r を SimpleMessageRecipient に任せるが、それは OyasaiChat
  の処理では呼ばれないため省略しない。ログは送信された会話の結果ではなく入力。
  r の相手解決、ignore/mute/jail、private mail の復号は他プラグインAPIを呼ばず行わない。
- whois をオフラインにも拡張した（依頼）。経済残高、GeoIP、god/AFK/jail/mute、
  nickname の独自キャッシュは他プラグインのデータなので表示しない。
  seen の IP検索・alts・過去の名前一覧は全ユーザー索引を必要とするため対象外。
  名前は既知キャッシュに限定するので、キャッシュにない実名は見つからないと返す。
  メッセージは固定の日本語、日時はJVMのタイムゾーンの絶対日時（zoneを併記）。
- 他プラグイン所有の同名コマンドは奪わない。既存 playermanager の `pm` 別名と
  OyasaiChat の `pm` は競合しうるため、実環境の所有者確認が必要。spy は入力ラベルを
  判定するので、所有者にかかわらず対象として拾うが、そのコマンドの成功は保証しない。

## ローカルで確認する項目

この作業ではサーバー起動/停止、jar入替、本番接続は行っていない。

1. Essentials あり/なしで7正規名と v の所有者・権限を確認。
   Essentials overridden-commands があっても通常名は自作、他プラグイン所有名は維持。
   `otp`/`tpoff` 等を自作が追加しないことも確認。
2. invsee の閲覧/編集、防具/副手、shift-click、数字キー、double-click、drag、
   creative clone、権限の途中剥奪、preventmodify、対象の退出。複製/消失がないこと。
3. vanish ONで非seeプレイヤーの画面とTABから消えること、seeでは見えること。
   ONのまま退出/再参加/再起動、OFFの保存、既存透明効果、睡眠、mob、sculk、pickup、PvP。
4. userdata socialspy=true の初回参加、OFFにして再起動後もOFF。
   msg/pm/message/r/mailと各別名、名前空間・大文字、非対象、exempt、送信者自身の除外。
   Essentials 共存中の二重表示がなく、取消済み入力は配信しないこと。
5. seen/whois のオンライン/オフライン、join/quitの日時、名前変更、UUID、権限による
   IP/UUID/場所/ban理由の表示制限、vanishの相手、初回userdata・ファイルなし・壊れたYAML。
6. tpoffline と playermanager tpoffline が同じ位置へ実行者を移動させ、対象を動かさないこと。
   world UUID/旧名前、未ロードworld、記録なし、権限、異世界移動、非同期失敗。
7. sudo のコマンド・c:発言、免除、コンソール免除無視、本人の除外、\*と\*\*、
   対象の権限/チャット処理/コマンドイベントを通ること。
8. 実サーバーで `/pm` の所有者が期待する OyasaiChat か確認する。

## 検証

- `./gradlew :plugins:OyasaiAdminTools:build`
- `nix build .#oyasai-plugins.oyasaiadmintools`（flakeの実際の属性）
- `nix fmt`

回帰テストは AdminDb の既存3件に、別名/権限、トグル引数、spyの対象判定、
userdata の一度だけの読込（ファイルなし・壊れたYAML・再起動・OFFを含む）、
seen のjoin/quit日時と場所保持、vanishの再起動保存、機能単位のschema失敗分離、
旧spyの実行時抑止が保存setterを呼ばないことを追加。
