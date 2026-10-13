---
date: 2026-10-13
record_type: reference
source: "plugins/OyasaiAdminTools/（コードから作成。コードと照合してレビュー済み。ゲーム内での確認は未実施）"
---

# OyasaiAdminTools の運用（運営向け）

プレイヤー向けのアンケート操作は [player.md](player.md)、内部仕様は [PROJECT.md](PROJECT.md) を参照。

## 権限

以下は `plugin.yml` の既定値です。権限プラグインによる変更は別途反映されます。

| 権限 | 既定 | できること |
|---|---:|---|
| `oyasai.survey` | 全員 | `/bulletin`（`/bl`, `/anno`）と `/anke` の利用 |
| `oyasai.admin` | OP | お知らせ・アンケートの管理、広報リロード |
| `oyasai.admintools.applylifeworldsettings` | OP | `/applylifeworldsettings` |
| `oyasai.playermanager` | OP | `/playermanager`（`/pm`, `/pmanager`） |
| `oyasai.kakutyo` | OP | `/kakutyo` |
| `oyasai.worldborder` | OP | ワールド境界の変更・参照 |
| `essentials.invsee`, `essentials.vanish`, `essentials.socialspy`, `essentials.whois`, `essentials.sudo`, `essentials.seen`, `essentials.tpoffline` | OP | 対応する同名スタッフコマンドの基本権限 |
| `essentials.invsee.equip`, `essentials.invsee.modify` | OP | 装備表示、インベントリ編集 |
| `essentials.invsee.preventmodify` | `false` | 対象者のインベントリ編集を禁止 |
| `essentials.vanish.others` | OP | 他プレイヤーの vanish を切り替える |
| `essentials.vanish.see` | OP | vanish 中のプレイヤーを見えるようにする |
| `essentials.vanish.effect` | OP | vanish 時に透明化効果を付ける |
| `essentials.vanish.interact` | OP | 隠れているプレイヤーをスタッフコマンドで対象検索する際に見える扱いにする |
| `essentials.vanish.pickup`, `essentials.vanish.pvp` | OP | vanish 中のアイテム取得、プレイヤー攻撃を許可 |
| `essentials.socialspy.others` | OP | 他プレイヤーの SocialSpy を切り替える |
| `essentials.chat.spy.exempt` | OP | 自分のコマンド入力を SocialSpy 配信から除外 |
| `essentials.sudo.multiple` | OP | `*` / `**` で全対象を指定 |
| `essentials.sudo.exempt` | `false` | プレイヤーからの sudo を免除 |
| `essentials.whois.ip` | OP | `/whois` で IP を表示 |
| `essentials.seen.uuid`, `essentials.seen.firstlogin`, `essentials.seen.ip`, `essentials.seen.location`, `essentials.seen.whitelist`, `essentials.seen.banreason` | OP | `/seen` の各追加情報を表示 |
| `essentials.seen.extra` | OP | UUID・初回参加・IP・最終場所・Whitelist の各権限を子として付与 |

- OP は既定 OP のノードを持ちます。`essentials.chat.spy.exempt` も既定 OP のため、OP の入力を監視する場合は権限プラグインで明示的に無効化してください。
- `essentials.invsee.preventmodify` と `essentials.sudo.exempt` は既定で無効です。
- WorldBorder は `oyasai.worldborder`、または操作別の `worldborder.set` / `.radius` / `.list` / `.reload` / `.clear`、または `worldborder.*` を確認します。操作別ノードは `plugin.yml` では宣言されていません。`info` と `list` は `.list` を確認し、`help` は権限確認なしです。
- `/playermanager tpoffline` には `oyasai.playermanager` と `essentials.tpoffline` の両方が必要です。`staff.world-teleport-permissions: true` の場合、別ワールドへの移動にはさらに `essentials.worlds.<移動先ワールド名>` を確認します。
- `essentials.vanish.others` / `essentials.socialspy.others` がない状態で他人の名前をトグル引数として入力すると、他人には作用せず自分の状態を切り替える場合があります。
- Vanish 解除時は `essentials.sleepingignored` も確認しますが、このノードは本プラグインの `plugin.yml` では宣言していません。

## 広報・アンケート

広報管理コマンドはプレイヤー専用です。運営権限を持つプレイヤーが GUI から管理します。

| 操作 | 方法 |
|---|---|
| 総合画面 | `/bl gui` |
| お知らせ一覧 | `/bl announce gui` または `/bl announce` |
| お知らせを追加 | `/bl announce add <ID>` または GUI の「新規お知らせ作成」 |
| お知らせ設定を再読込 | `/bl announce reload` |
| アンケート一覧 | `/bl survey gui` |
| アンケートを追加 | `/bl survey add <ID>` または GUI の「新規アンケート作成」 |
| アンケート設定を再読込 | `/bl survey reload` |
| お知らせ・アンケートを両方再読込 | `/bl reload` |
| 回答 CSV を Discord へ送信 | `/bl survey send <ID>` またはアンケート編集画面の送信ボタン |

設定項目をクリックすると書込み本が渡されます。2ページ目以降に入力して署名すると値が保存されます。GUI ではお知らせの本文・間隔・効果音・期限・対象グループ、アンケートのタイトル・放送文・間隔・回答/報酬上限・Webhook・報酬コマンド・効果音・期限・対象グループ・質問を編集できます。ブラウザー画面の右クリックで有効/無効を切り替えます。

- 新規お知らせは本文「新しいお知らせ」、間隔300秒、有効、対象グループなし、音・期限なしで作られます。
- 新規アンケートはタイトル「新しいアンケート」、放送文・質問・報酬コマンドなし、放送間隔60秒、有効、回答上限1回、報酬上限1回、対象グループなし、Webhook・音・期限なしです。質問0件のまま回答が始まると即時完了扱いになるため、質問と放送文を設定してから有効にしてください。
- ID の重複判定は大文字小文字を区別します。`/bl survey <ID>` / `/anke <ID>` は大文字小文字を区別して検索します。`/bl <ID>` は最初の検索だけ大文字小文字を区別しません。
- 空の対象グループは全員が対象です。対象を設定すると、放送先とアンケートの開始対象は、該当グループ名に対応する `group.<名前>` 権限を持つ人に限られます。再開・回答時は対象グループを再確認せず、開始後に権限を失っても継続できます。グループ選択画面は LuckPerms のロード済みグループ一覧を使います。
- 本文と放送文は1行ずつ入力し、表示時にランダムで選ばれます。期限は UNIX 時刻のミリ秒です。期限入力を空にすると解除されます。アンケートは質問ごとに選択式・本への記述式・チャット選択式を切り替えられます。
- 間隔は秒の整数、回答/報酬上限は整数として読み取りますが、正数かどうかの検査はありません。0 や負数を設定しないでください。ID の重複判定は大文字小文字を区別します。
- 定期放送は有効で期限前のものだけがタイマー登録されます。起動時点ですでに期限を過ぎた項目は放送されませんが、有効状態は保存上 true のまま残ります。
- 放送文が空のアンケートはタイマー履歴に追加されず、新規作成しただけでは `/anke` の候補になりません。ただし、過去に履歴へ載った ID の放送文を空にしても履歴は残り、候補になり得ます。質問が空のまま ID 指定等で開始されると即時完了し、設定済み報酬コマンドが実行されます。
- Discord Webhook URL はアンケートごとに保存されます。CSV には時刻・UUID・プレイヤー名・回答、回答通知にはプレイヤー名・質問・回答が含まれます。回答通知に UUID は含まれません。Webhook を使う場合は送信先と DB のアクセスを管理してください。`config.yml` の `webhook-url` は現行コードから参照されません。

### 回答受付・編集時の注意

- 無効化・期限設定だけでは回答を締め切れません。ID 直接指定の開始では有効状態・期限を確認せず、再開・回答受付でも再確認しません。通常の `/anke` は履歴から有効なものを探しますが、期限そのものは確認しません。厳密な締切が必要な運用には使わないでください。
- `/anke answer <質問index> <回答>` は進行中の質問 index 一致だけを確認し、質問形式や選択肢に含まれる回答かを検証しません。選択式でも任意の文字列を記録して次へ進め、完了すれば報酬判定に進みます。選択肢だけの集計や回答内容を条件にした報酬を保証しません。
- 管理コマンド入口では `oyasai.admin` を確認しますが、開いた管理 GUI の操作と入力本の署名コールバックでは再確認しません。署名者と入力セッション所有者の一致も検査しないため、権限剥奪後の画面・本からの編集や、渡された本の署名で元の編集処理が実行される可能性があります。管理入力本を他人に渡さないでください。
- 管理入力本もインベントリ満杯時の付与失敗を確認せず、付与メッセージを出します。空き枠を確保して、GUI の設定項目をもう一度選んでください。
- アンケートの削除は定義だけを消し、DB の回答結果・回答数・報酬数は残します。同じ ID を再利用すると旧結果が CSV に混ざり、再読込後には旧回数も復元されます。新しいアンケートには新しい ID を使ってください。
- 回答は質問の順番で保存され、CSV は現在の質問一覧に旧回答を位置で対応させます。公開後の質問の削除・文面や形式の変更で列の意味が変わり、現在の質問数を超える旧回答は CSV に出ません。質問を変える場合は新しい ID で作り直してください。
- 報酬コマンドは1行に1つ入力します。`%player%` は回答者の名前へ置換し、コンソールとして実行します。戻り値による成否確認はなく、上限未到達ならコマンド一覧が空でも報酬回数を増やします。後から報酬を設定しても、過去の完了で報酬上限に達していれば付与されません。
- ID 作成時に予約語や数値との衝突を禁止しません。`/anke <ID>`・`/bl survey <ID>` では整数として読める ID は番号回答、`gui`・`add`・`open`・`resume`・`answer`・`text`・`send`・`reload` はサブコマンドになります（大文字小文字を区別しません）。`/bl <ID>` にも `help`・`announce`・`announcement`・`notice`・`a`・`survey`・`s`・`anke`・`reload`・`gui` の衝突があります。`survey_2026_01` のような接頭辞付きの ID を使ってください。

## スタッフコマンド

Essentials の同名コマンドを置き換えて使うコマンドです。基本権限はいずれも上の `essentials.<コマンド名>` です。

| コマンド | 動作と注意 |
|---|---|
| `/invsee <player> [equip]` | プレイヤー専用。オンラインの他プレイヤーのインベントリを開く。通常表示は実インベントリで、変更は対象に反映される。追加引数があり `essentials.invsee.equip` を持つと、防具・副手のコピーを読み取り専用で開く。通常表示も変更権限がない、対象が退出した、または対象が `essentials.invsee.preventmodify` を持つ場合はクリックとドラッグを拒否する。 |
| `/vanish [on\|off]` / `/vanish <player> [on\|off]` | 自分または他人の表示状態を切り替える。`on` / `off` のほか `1` / `0` と小文字の `ena...` / `dis...` も受け付ける。切替状態は DB に保存され、再参加時に復元する。`see` がない人から隠し、効果・アイテム取得・対人攻撃等は個別権限で制御する。 |
| `/socialspy [on\|off]` / `/socialspy <player> [on\|off]` | 自分または他人の監視状態を切り替える。状態は DB に保存する。起動時・参加時に `essentials.socialspy` がないプレイヤーの保存済み ON は OFF に戻す。設定対象のコマンド入力だけを配信し、通常チャットや実行結果は監視しない。`essentials.chat.spy.exempt` を持つ送信者の入力は配信しない。 |
| `/whois <player>` | プレイヤー状態、履歴、オンラインなら現在の状態を表示する。IP はコンソールまたは `essentials.whois.ip` を持つ実行者に表示する。オフライン時の最終場所は別権限なしで表示される。 |
| `/seen <player>` | オンライン状態、ログイン/ログアウト、権限に応じた UUID・初回参加・IP・Whitelist・オフライン最終場所・Ban 情報を表示する。隠れているプレイヤーは、実行者から見えない場合オフラインとして表示する。Ban 理由の権限がない場合も `Ban: true` と表示する。 |
| `/sudo <player\|*\|**> <command\|c:message>` | 対象プレイヤーとしてチャットまたはコマンド入力を行う。コマンドは次 tick に実行するため、その前に対象が退出すると実行されない。プレイヤー実行者は自分自身を対象にできず、`sudo.exempt` を持つ対象は免除される。プレイヤーからの複数対象指定には `sudo.multiple` が必要。コンソールは複数指定ができ、対象の `sudo.exempt` も無視する。対象の `chat` 経由で実行するため、対象側の権限とコマンド入力イベントを通る。 |
| `/tpoffline <player>` | 対象プレイヤーの最終ログアウト場所へ、実行者自身を非同期テレポートする。対象者を移動させる機能ではない。対象がオンラインでも保存済みの最終ログアウト場所を使う。プレイヤー専用。 |

Toggle コマンドで他人を指定する場合は `essentials.<コマンド名>.others` が必要で、名前は Bukkit の部分一致検索（最低2文字）です。自分の表示状態の変更には引数を省略するか `on` / `off` を指定してください。

`/seen`・`/whois`・`/tpoffline` の履歴対象は、完全な実名のオンライン検索、既知の名前キャッシュ、UUID の順で解決します。UUID でもオンライン・参加歴・旧 userdata のいずれかが必要です。外部サービスでの名前解決は行いません。`/invsee`・`/sudo` のオンライン対象検索は UUID・完全な実名に加えて実名の部分一致と色コードを除いた表示名の部分一致も使い、実行者から見える対象に限ります（`essentials.vanish.interact` は例外）。Toggle 系の名前検索は上記の最低2文字の Bukkit 検索です。

## ワールド境界・ワールド設定

### `/wb`（別名 `/wborder`）

| コマンド | 動作 |
|---|---|
| `/wb set <radiusX> [radiusZ]` | 実行者の現在ワールドに設定。中心は実行者の位置。 |
| `/wb set <world> <radiusX> [radiusZ]` | 指定ワールドに設定。実行者がそのワールドにいるなら現在位置、それ以外はロード済みならスポーン位置、未ロードなら `(0, 0)` が中心。コンソールはワールド名が必要。 |
| `/wb <world> set <radiusX> [radiusZ]` | 互換形式。 |
| `/wb radius <radiusX> [radiusZ]` / `/wb radius <world> <radiusX> [radiusZ]` | 既存境界の半径を設定。`+50` / `-50` の相対指定も可能。コンソールはワールド名を指定する。 |
| `/wb info [world]` / `/wb list` | 1ワールドまたは全ワールドの設定を表示。ワールド名を省略したコンソール実行は一覧を表示。 |
| `/wb reload` | `config.yml` と DB の境界を再読込。 |
| `/wb clear [world]` | 境界設定を削除。ロード済みワールドのバニラ境界も reset。 |
| `/wb help` | ヘルプを表示。権限確認なし。 |

既定では矩形境界、範囲外のプレイヤーは5 tick ごとに内側へ戻されます。範囲外へのテレポートも補正し、エンダーパールは拒否、ネザーポータル等は設定に応じて行先を補正します。範囲外メッセージと効果音も設定できます。

補正時には乗り物から降ろし、その速度をゼロにして乗り物も移動させ、プレイヤーの乗客も降ろします。飛行中は現在の高さをワールド範囲内に丸め、それ以外は移動先の最高ブロック上へ移すため、地下から地表へ戻る場合があります。補正位置が得られなければスポーン位置を使います。

旧 WorldBorder YAML から形状上書きが移行されたワールドでは、保存済みの上書きが `worldborder.round-border` より優先されます。上書きを設定するコマンドはありません。境界を削除しても独自 DB の他ワールド設定には影響しません。起動時とワールド読込時にバニラ境界を reset し、プラグイン停止時に元へ戻しません。

### その他

- `/kakutyo <プレイヤー名> <消費ポイント>` はプレイヤー専用です。対象はオンラインである必要があり、ポイントは正数かつ100の倍数です。実行者がいるワールドの既存境界を、対象の TokenManager 残高から100ポイントごとに半径50ずつ広げます。拡張後の半径が整数上限を超える場合も中止します。TokenManager がない、残高不足、境界未設定、トークン消費失敗では処理を止めます。トークンを消費して境界を更新した後、DB 保存は非同期です。保存失敗時のポイント返還処理はありません。
- `/playermanager tpoffline <player>` は `/tpoffline` と同じ移動処理です。両方の権限が必要です。
- `/applylifeworldsettings <world>` はロード済みワールドに対し、Multiverse のワールド設定・ゲームルールと WorldGuard のグローバルフラグを多数設定します。現在の lifeworld を読み取ってコピーする処理ではなく、固定のコマンド列です。主な指定値は以下のとおりです。実行した各外部コマンドの成否は確認せず、最後に完了メッセージを送ります。実行後に対象ワールドの実設定を個別確認してください。

| `/applylifeworldsettings` の主な対象 | 固定コマンドで指定する内容 |
|---|---|
| Multiverse | survival・難易度 normal・飛行許可・PvP 無効。モンスターの spawn は false、動物等は true。 |
| ゲームルール | `random_tick_speed=0`、`spawn_mobs=false`、`keep_inventory=false`、`mob_griefing=false`、`pvp=false`。 |
| ネザーポータル | `players_nether_portal_default_delay=100000000`、`players_nether_portal_creative_delay=100000`、`allow_entering_nether_using_portals=false`。 |
| WorldGuard の `__global__` | `water-flow`・`crop-growth`・`vine-growth`・`tnt`・`other-explosion`・`fire-spread` 等を deny。`mob-spawning`・`mob-damage`・`fall-damage` 等を allow。 |

全コマンドは `commands/ApplyLifeWorldSettingsCommandExecutor.kt`（[実装](../../../plugins/OyasaiAdminTools/src/main/kotlin/io/oyasai/oyasaiAdminTools/commands/ApplyLifeWorldSettingsCommandExecutor.kt)）を参照してください。外部プラグインのバージョンや設定次第で、指定どおりに反映されない場合があります。

## 設定と既定値

### `config.yml`

| 項目 | 既定値 | 用途・補足 |
|---|---|---|
| `webhook-url` | `""` | 現行コードでは参照されない。Webhook はアンケートごとのデータ項目で設定する。 |
| `worldborder.message` | `&cYou have reached the edge of this world.` | 境界で表示するメッセージ。`&` 色コードを変換する。 |
| `worldborder.round-border` | `false` | 既定形状。`false` は矩形、`true` は楕円。 |
| `worldborder.whoosh-effect` | `true` | 範囲外補正時の粒子・効果音。 |
| `worldborder.portal-redirection` | `true` | ポータルの範囲外行先を補正。 |
| `worldborder.knock-back-dist` | `3.0` | 境界内へ戻す距離。`0` なら独自境界チェックを停止。 |
| `worldborder.timer-delay-ticks` | `5` | 定期確認の間隔。1未満は1に丸める。 |
| `worldborder.deny-enderpearl` | `true` | 範囲外に着地するエンダーパールを拒否。 |
| `staff.hide-displayname-in-vanish` | `true` | Vanish 中のプレイヤー名を `/whois` と SocialSpy 表示で実名にする。Bukkit の `displayName` 自体は変更しない。 |
| `staff.sleep-ignores-vanished` | `true` | Vanish 中のプレイヤーを睡眠人数に数えない。 |
| `staff.world-teleport-permissions` | `false` | true の場合、異ワールドへの `/tpoffline` で移動先権限を確認。 |
| `staff.socialspy-commands` | `[msg, w, r, mail, m, t, whisper, emsg, tell, er, reply, ereply, email, action, describe, eme, eaction, edescribe, etell, ewhisper, pm, message]` | SocialSpy が監視するコマンド名。`*` を含めると全ての `/command` ラベルを対象にする。大文字小文字と名前空間は正規化し、コマンド名全体で比較。 |

設定ファイルを再読込する実装済みコマンドは `/wb reload` です。広報コマンドの `reload` は SQLite の広報データを読み直します。`staff.sleep-ignores-vanished` の変更は設定再読込だけでは現在の Vanish 状態に反映されません。反映するには一度 Vanish を解除して再設定するか、対象プレイヤーを再参加させてください。

### GUI で保存する項目

お知らせ・アンケートの定義、回答数・報酬数、回答内容、Webhook URL は `admintools.db` に保存されます。間隔や回答上限の数値入力に正数範囲の検査はありません。新規定義の値は「広報・アンケート」節に記載した初期値です。

## データ保存と移行

- 主データは `plugins/OyasaiAdminTools/admintools.db`。SQLite WAL を使うため稼働中の DB ファイルだけを単独コピーせず、サーバー／プラグインを停止してから DB と関連ファイルをバックアップしてください。
- 旧広報 JSON の移行印がないとき、`plugins/OyasaiAdminTools/announcements.json`、`surveys.json`、`surveys/results_<ID>.json` を一度だけ読み込みます。JSON が壊れている場合は広報機能が利用不可となり、移行印を付けないため、ファイル修復後の起動で再試行します。取込元は削除しません。
- 旧境界 YAML の移行印がないとき、`plugins/OyasaiAdminTools/worldborder.yml` を優先し、なければ `plugins/WorldBorder/config.yml` を読みます。旧 `worlds` のキーにある `<` は `.` に置換されます。半径は `radiusX` / `radiusZ` がなければ共通 `radius` を使います。旧設定値と現行 `config.yml` が異なる場合は警告を出し、設定値には現行ファイルを使います。移行印・移行件数と境界は DB に保存されます。
- 履歴・SocialSpy の UUID 行がまだない場合、隣接する Essentials の `userdata/<UUID>.yml` から履歴時刻・場所・IP・SocialSpy 状態を一回読みます。ファイルがない場合も空値で取込済みとなり、あとからの再取込はありません。壊れた YAML は行を保存せず、その機能の該当処理でエラーになります。
- Vanish は Essentials userdata から移行せず、DB に行がないプレイヤーの初期値は OFF です。
- 機能ごとの DB schema は版数1です。DB 接続または起動時に作る bulletin / worldborder 基本テーブルの初期化失敗ではプラグイン全体が停止します。履歴・Vanish・SocialSpy の機能 schema が不完全または異なる場合は該当機能の初期化が失敗し、その機能が利用不可になります。

## 障害時・保護される範囲

| 状況・表示 | 意味と対応 |
|---|---|
| `AdminTools SQLite unavailable: ...` | DB 接続や基本 schema の初期化失敗。プラグイン全体が無効化される。DB ファイル・schema・SQLite JDBC のログを確認する。 |
| `Bulletin storage is unavailable. Check the server log.` | 広報の旧データ取込等に失敗し、広報機能が無効。JSON/YAML を修正して再起動し、移行状態を確認する。 |
| `Worldborder storage is unavailable. Check the server log.` | 境界データ取込に失敗し、境界機能が無効。ログと旧 YAML を確認する。 |
| `Staff feature disabled` / `Player history disabled` | 個別機能または履歴機能の初期化失敗。Staff feature は個別、履歴は `seen`・`whois`・`tpoffline` に影響する。 |
| `AdminTools SQLite write failed: ...` | 定義・回答・境界の非同期書込み失敗。呼出側の成功表示やメモリ状態は戻らないため、DB と再起動後の値を確認する。回答保存に失敗すると回答・報酬の回数が再起動後に戻り、同じ報酬コマンドが再実行される場合がある。 |
| `処理に失敗しました。管理ログを確認してください。` | StaffFeature の処理中に例外。詳細はサーバーログの同名コマンド行を確認する。 |
| `テレポートに失敗しました。` | `/tpoffline` の非同期移動が失敗。保存先ワールド・対象履歴・Paper 側テレポート状態を確認する。 |
| `権限がありません。` | スタッフコマンドまたは WorldBorder の該当操作権限がない。 |
| `プレイヤーが見つかりません。` | オンラインまたは既知プレイヤーとして対象を解決できない。Toggle 系で他人を指定する場合は最低2文字。 |
| `他人への操作権限がありません。` | Toggle コマンドで他人を指定したが `.others` 権限がない。プレイヤーから名前らしい引数を1つ渡した場合は自分の切替として処理されることがある。 |
| `最終ログアウト場所の記録がありません。` / `保存先のワールドが見つかりません。` | `/tpoffline` に利用できる最終位置またはロード済みの移動先ワールドがない。 |

- `/tpoffline` は対象の保存済み最終ログアウト位置へ実行者を移します。対象がオンラインかどうかではなく保存履歴を使います。位置の安全地形探索や代金・待機時間は実装していません。
- SocialSpy は `PlayerCommandPreprocessEvent` に届いた入力のうち設定ラベルと一致するものだけを配信します。イベントが事前に取消済みなら無視し、コマンドが実際に成功したか、通常チャット本文、別プラグイン内部で処理されたメッセージは保証しません。
- Vanish は表示、タブ、権限付き透明効果、睡眠人数、アイテム取得・攻撃等を制御します。すべてのプラグインや外部表示への不可視性を保証するものではありません。
- 保存済み Vanish 状態は再参加時にも権限を再確認せず復元されます。`essentials.vanish` を外しても状態は自動解除されません。
- `/applylifeworldsettings` は複数の変更を順番に発行しますが、失敗時の巻き戻しや成功確認はありません。
- `/invsee` の装備画面はコピーで、ライブ装備編集機能ではありません。通常画面は対象の実インベントリです。
- このプラグインの DB には運営操作の監査ログや変更前後の復元履歴を保存しません。広報の回答結果は別途保存されます。

このプラグインが制御する範囲は、ここに記した各機能のイベントと権限に限られます。ワールド境界はプレイヤーの移動を補正しますが、物理的な壁は作らず、独立した一般エンティティの境界検査やブロックの移動処理はありません。プレイヤーの範囲外補正に伴う乗り物の移動と乗客の排出は行います。Vanish はすべての外部プラグイン・表示先から隠すことを保証しません。SocialSpy は対象コマンドの入力だけを確認し、通常チャットや実行結果を保護・記録しません。

## 他プラグインとの連携

| プラグイン | 連携 |
|---|---|
| Essentials | 同名のスタッフコマンドを置換。権限名を使用し、userdata の初回取込と SocialSpy 実行時状態の抑止を行う。Essentials の内部クラス構造に依存する箇所がある。 |
| LuckPerms | 広報 GUI の対象グループ一覧を読む。未導入時は「LuckPermsが見つかりません。」と表示しグループ編集画面を開かない。 |
| TokenManager | `/kakutyo` で残高を確認し、対象からポイントを消費する。 |
| Multiverse / WorldGuard | `/applylifeworldsettings` が `mv` / `rg` コマンドを呼び出す。API 連携・実行結果確認はない。 |
| Discord Webhook | アンケートの回答通知と CSV エクスポートを送る。Webhook URL はアンケートごとの DB 項目。 |
| DynamicProfile / SocialLikes3 | `plugin.yml` の softdepend に記載されるが、コードからの API 連携はない。 |
| OyasaiChat | API 連携はない。SocialSpy の既定監視ラベルに `pm` / `message` などが含まれる。`/playermanager` の `pm` 別名との実環境での競合は未確認。 |
