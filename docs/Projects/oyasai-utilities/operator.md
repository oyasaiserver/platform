---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiUtilities/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiUtilities の運用（運営向け）

通常の操作は [player.md](player.md)、コード・テストの入口は [PROJECT.md](PROJECT.md) を参照。以下の設定・保存先は、特記しなければ `plugins/OyasaiUtilities/` からの相対パスです。

## 権限と既定値

既定値の正本は `src/main/resources/plugin.yml` です。「OP」は OP 既定、「全員」は true、「なし」は false を表します。**このプラグインで未宣言のノードは、別プラグインや権限設定によって既定値が変わるため、ここでは未宣言と記載します。**

### 移動

| 権限 | 既定 | 内容 |
|---|---|---|
| `essentials.home` / `sethome` / `delhome` | OP | 各ホーム操作（後者2つも `essentials.` 接頭辞） |
| `essentials.home.others` / `sethome.others` / `delhome.others` | OP | 他人のホームを操作する |
| `essentials.home.bed` | OP | bed の利用、ホーム無し時の復活地点利用 |
| `essentials.sethome.multiple` / `.vip` / `.staff` / `.unlimited` | OP | 複数ホーム。multiple 無しは1、multiple 有りは通常3、vip=5、staff=10、unlimited は無制限 |
| `essentials.warp` / `essentials.warp.list` | OP | ワープ・一覧 |
| `essentials.warp.others` / `essentials.warp.otherplayers` | OP | どちらかがあれば他人をワープさせる |
| `essentials.tp` / `essentials.tphere` / `essentials.tpa` / `essentials.tpahere` | OP | 直接移動・呼び寄せ・申請 |
| `essentials.tpaccept` / `essentials.tpdeny` / `essentials.tpacancel` | OP | 申請の承認・拒否・取消。申請先にも tpaccept が必要 |
| `essentials.tp.others` / `essentials.tp.position` | OP | 他人を移動・座標指定 |
| `essentials.spawn` / `essentials.spawn.others` | OP | スポーン移動・他人を送る |
| `essentials.worlds.<ワールド名>` / `essentials.warps.<名前>` | 未宣言 | 設定によるワールド・ワープ個別許可。TPA 申請は申請者の移動先世界、承認は承認者の権限で下記の世界を検査 |
| `essentials.togglejail` / `essentials.togglejail.offline` | OP | 入獄・釈放、オフライン新規入獄 |
| `essentials.jail.exempt` / `essentials.jail.notify` | OP | 入獄免除、入獄・刑期更新の通知受信 |
| `tpswitch.tpset` | 全員 | `/tpset`。OP は受け入れ拒否を通過する |
| `oyasaiutilities.spawn` / `oyasaiutilities.spawn.others` | 全員 / OP | 宣言は残るが、現在の `/spawn` 判定では使わない |
| `oyasaiutilities.tpdata` | OP | 宣言は残るが `/tpdata` の executor は登録されない |

`/back`・`/forward` にコマンド権限の指定はありません。コンソールは利用できません。
`essentials.sethome.multiple.*` の表記は、ここでは multiple に `.vip` などを付ける意味です。任意の設定階層も `essentials.sethome.multiple.<階層名>` で確認します。

### プレイヤー状態

| 権限 | 既定 | 内容 |
|---|---|---|
| `essentials.<gamemode,fly,speed,jump,time,weather,ptime,heal,afk,nick,realname>` の各ノード | OP | 各コマンドの基本権限 |
| `essentials.gamemode.all` / `essentials.gamemode.<survival,creative,adventure,spectator>` | OP | 変更先モードの許可。基本権限だけでは足りない |
| `essentials.<gamemode,fly,speed,ptime,heal,afk,nick>.others` の各ノード | OP | 他人への操作 |
| `essentials.gamemode.*` | OP | children は gamemode、others、all |
| `essentials.fly.safelogin` | OP | 危険な空中ログインで飛行を有効にする |
| `essentials.speed.fly` / `.walk` / `.bypass` | OP | 速度種別の補正、上限を1.0にする |
| `essentials.jump.lock` | OP | 飛行中の空中左クリックジャンプ |
| `essentials.time.set` / `essentials.time.world.all` | OP | 時刻変更、全世界時刻の許可 |
| `essentials.time.world.<名前>` | 未宣言 | world-time-permissions が有効なら必要（名前を小文字化し空白は `_`） |
| `essentials.heal.cooldown.bypass` | OP | 回復クールダウンを省く |
| `essentials.afk.message` / `essentials.afk.kickexempt` / `essentials.sleepingignored` | OP | 離席理由、放置キック免除、睡眠人数から除外 |
| `essentials.afk.auto` | なし | 自動離席 |
| `essentials.kick.exempt` | 未宣言 | 放置キック免除にも使う |
| `essentials.keepinv` / `essentials.keepxp` | なし | 死亡時の持ち物・経験値を独立に保持 |
| `essentials.nick.color` / `.format` / `.magic` / `.rgb` | OP | ニックネームの色・書式・難読化・RGB |
| `essentials.nick.changecolors` / `.changecolors.bypass` / `.blacklist.bypass` | OP | 色だけの変更制限、その解除、禁止名の例外 |
| `essentials.nick.allowunsafe` / `.hideprefix` | なし | 許可文字検査を省く、接頭辞を表示しない |
| `essentials.nick.<色名・書式名>` | 未宣言 | 個別の明示 true / false を優先する。MAGIC の個別名は `obfuscated` |
| `essentials.vanish.interact` | OP | 見えないオンライン対象の検索を許可（対応コマンドのみ） |

PlayerState のコマンド内部ではコンソールの追加権限検査を省きます。ただし対象を省略できない操作があります。回復は対象検索・死亡判定・回復イベントの取消より**先に**実行者の待ち時間を保存します。
`nick.changecolors` が有効で bypass が無い場合、他人の変更でも実行者の実名との比較になります。

### 作業台・装飾・その他

| 権限 | 既定 | 内容 |
|---|---|---|
| `essentials.<workbench,enderchest,disposal,anvil,loom,grindstone,stonecutter,smithingtable,hat,skull>` の各ノード | OP | 作業台系10コマンド。全てプレイヤー専用 |
| `essentials.enderchest.others` / `.modify` | OP | 他人のエンダーチェストを見る・操作する |
| `essentials.hat.ignore-binding` | OP | 束縛の呪いを無視する |
| `essentials.hat.prevent-type.<item-name>` | OP | 宣言上の文字列。実際の素材禁止は下記の完全一致で判定 |
| `essentials.hat.prevent-type.*` / `essentials.hat.prevent-type.<小文字素材名>` | 未宣言 | effectivePermissions の完全一致が true なら禁止。`*` true に素材 false を設定すると例外 |
| `essentials.skull.others` / `.modify` / `.spawn` / `.spawn.others` | OP | 所有者指定、既存所有者の変更、自分・他人への生成 |
| `backpack.use` / `backpack.size.1`〜`.6` | なし | 個人バックパック。サイズは最大の許可段数、use だけなら1段 |
| `backpack.user` / `backpack.userBig` | なし | children は use + size.1 / use + size.6 |
| `oyasai.skin` | OP | スキン変更 |
| `redbull.use` / `redbull.give` | 全員 / OP | `/redbull`、購入コマンド |
| `oyasaiutilities.timerbar` | 明示なし（OP 既定） | タイマー操作 |
| `ore.smelt.smelt` | 未宣言 | 自動精錬 toggle。ドロップ時は再検査しない |
| `cm.bypass` / `cm.bypass.spawn_egg` | OP | モード別持ち物・一部取得制限の例外、スポーンエッグの例外 |
| `debugonbe.refresh` / `debugonbe.admin` | 全員 / OP | togo / togom、管理操作・全体置換先 |
| `oyasai.utilities.sit.admin` | OP | PlayerSit のモード変更。OP も直接許可 |
| `oyasai.hats.use` / `particlehats.command.h` | 全員 | 帽子メニュー（plugin.yml の受付は oyasai.hats.use）。use の child に旧ノード |
| `oyasai.hats.donator` / `particlehats.particle.all` | なし | 全帽子の装備。前者には全現行帽子と後者、後者には旧個別ノードを children として宣言 |
| `oyasai.hats.<ID>` / `particlehats.particle.<ID>` | なし | 既定13種類の個別装備 |
| `group.donator` | 未宣言 | 全帽子装備にも使う |
| `oyasai.night_vision` / `oyasai.flyspeed` / `reach.use` | 未宣言 | anshi / sokudo / reach の受付 |
| `reach.white` / `.blue` / `.takumi` / `.builder` | 未宣言 | reach 上限64 / 48 / 32 / 16。左から先に判定 |
| `group.admin` | 未宣言 | 他人の scale（OP も許可）、案内看板の破壊 |
| `group.jokyu` / `group.default` / `group.chukyu` / `server.annai.use` | 未宣言 | 案内登録・閲覧、初心者判定、中級除外、案内メニュー。group.jokyu は Red Bull のポイント・アイテム消費も免除 |

未指定のコマンド権限や追加ノードは plugin.yml と実行コードで区別してください。`/adminbp` と鉱石再生成の管理コマンドは **OP そのもの**を判定します。`/uuid`・`/pita`・自分の `/scale`・各ポーズ・`/getdebugstick`・`/c`・`/d`・`/l` にはこのプラグインの受付権限指定がありません。getdebugstick はクリエイティブ限定、c / d / l は転送先コマンドの権限に従います。

## 管理コマンド

通常名が他プラグインと競合する場合、自作コマンドを明示するには `oyasaiutilities:` 名前空間を使います。

| 対応 | 方法・注意 |
|---|---|
| 他人のホーム | `/home 人:ホーム`、`/sethome 人:ホーム`、`/delhome 人:ホーム`。sethome / delhome は `人 ホーム` 形式も可。人は既知名または UUID。sethome は実行者の現在地と上限を使うためプレイヤー専用 |
| 他人の移動 | `/warp 名前 人`、`/spawn 人`、`/tp 移動する人 行先の人`、`/tp [人] x y z`。座標は `~` に対応、各軸の絶対値30000000以内 |
| 入獄 | `/togglejail 人 牢屋 [30m・2h・1dなど]`（`/jail`・`/unjail` も同じ toggle）。未入獄で牢屋省略なら登録が1つの時だけその牢屋。期限無しは無期限 |
| 釈放・刑期更新 | 入獄中に `/togglejail 人` で釈放。同じ牢屋と期限を指定すると更新。違う牢屋や期限無しの更新は拒否。期限は最大10年。オフラインで釈放すると復帰地点を消し、次回参加時にも元の場所へ戻さない |
| 状態変更 | `/gamemode モード 人`、`/gmc 人` 等、`/fly 人 [on・off]`、`/speed fly 数値 人`、`/speed walk 数値 人`、`/heal 人`、`/afk 人 [理由]`、`/nick 人 名前またはoff`、`/ptime 時刻 人`、`/scale 人 数値` |
| 世界の時刻・天気 | `/time [set・add] 時刻 [ワールド・all・*]`。プレイヤーの省略は現在世界、コンソールの省略は全世界。`/weather storm [秒]`、コンソールは `/weather ワールド storm [秒]`。`/rain` は雨、`/weather rain` は晴れ。`/day`・`/night` は時刻の別名、`/sun` は晴れ |
| 他人のエンダーチェスト | `/enderchest 人`。オンラインのみ。others 無しは引数を無視して自分を開く。modify 無しなら下側を含む全クリック・全ドラッグを禁止 |
| 頭の付与 | `/skull 所有者 人`。引数がちょうど2個の場合のみ人を受取人とする。所有者の指定には**受取人**の skull.others、他人への生成には実行者の skull.spawn.others を使う |
| 管理者用バックパック | `/adminbp`（`/abp`）。OP ごとの個人保管庫で9ページ×54枠。インベントリの外側を右クリックで次、左クリックで前。参加時（またはプラグイン起動時）に OP だった人だけ読み込む。参加後に OP にした場合、未読込なら再ログインまで何も開かない |
| Red Bull 購入 | `/buyredbull 人` は1本213円、`/buyredbullset 人` は12本2480円。**対象者の残高**から徴収。オンラインの完全一致名のみ、余りは足元へ落とす |
| タイマー | `/timerbar start 1h30m`、`add 3m`、`end`。サーバー全体で1つ、操作はプレイヤー限定。0秒になっても `END!` 表示を続け、end するまで次の start は拒否 |
| 再生成鉱山の設定 | `/orerepopreload` は設定再読込、`/orerepopswitch` は全対象世界の処理を切り替える。switch は再起動で有効に戻る |
| 自動精錬 | `/oresmelter reload` は OP のプレイヤー限定。現在の実装は YAML をディスクから再読込せず、既に読み込んだ値で変換表を作り直す。ファイル編集の反映は再起動が必要 |
| PlayerSit | `/sit playermode` で確認、`/sit playermode rank` または `all` で全体変更。DB 保存成功後だけ変更する |
| DebugOnBE | `/debugonbe refresh [半径]` は30秒（全体上限へ補正）、`reload` は形状データのみ再読込。`/togom replace ブロック` は全体置換先、air / reset / off で AIR に戻す |

`/timerbar` はサーバー共通の1個のタイマーです。残り時間のカウントは1秒単位、ボスバー更新は4 tickごとで、全プレイヤー（途中参加者も含む）に表示します。0秒になっても `END!` 表示で残り、`/timerbar end` まで次の開始を受け付けません。

`/adminbp` と `/orerepopreload`・`/orerepopswitch` は plugin.yml のコマンド権限だけでなく、実行者が OP かをコードで確認します。`/orerepopswitch` の停止状態は再起動で有効へ戻ります。`/uuid` は一度も参加していない名前を照会できません。

gamemode の他人指定にはコード上の引数長の条件があり、通常形式の2番目の引数は3文字以上、fly / speed の他人指定は2文字以上です。オンライン検索は可視性や実名・前方一致などを使いますが、コマンドごとに異なります。オフライン操作は Bukkit の既知キャッシュ・UUID の範囲であり、全ユーザーの名前索引は持ちません。

### ホログラムを設置・編集する

`/oholo` は **OP かつ `oyasaiutilities.hologram`（OP 既定）**が必要です。権限だけでは非OPに編集を許可できません。

1. `/oholo create 名前 [本文]` で現在地に作成する。同名は `[oholo] 既にある: 名前` で拒否。
2. `/oholo line add 名前 本文`、`line set 名前 行番号 本文`、`line remove 名前 行番号` で編集する。行番号は1から。
3. `/oholo movehere 名前` で位置・向きを現在の位置へ移す。`list` / `near [半径]`（既定16）で確認、`delete 名前` で削除する。
4. `/oholo range 名前 数値またはdefault`、`seethrough 名前 onまたはoff`、`background 名前 onまたはoff` で表示を変える。range は非負の TextDisplay viewRange 値であり、ブロック距離へ変換する処理はない。

`/oholo tool` のホロクリスタルは、Shift+地面右クリックで新規設置、Shift+文字右クリックでメニュー、左クリックで X→Y→Z→向きの調整項目、右クリックで加算、Shift+左クリックで減算。位置刻みは0.1、角度は15°。`/oholo angle 数値`（0より大きく360以下）または reset で個人の刻みを変更します。文字の選択は6ブロック以内の近似判定です。

`/oholo menu 名前` から表示モード・正面追従・縦書き・影・背景・スクロールなどを変更します。行編集は左クリックでチャット入力、右クリックで色パレット、Shift+右クリックで削除。チャット入力は60秒、`cancel` で中止。入力中に他者が同じホログラムを変更すると `[oholo] 入力待ち中にホログラムが変更されました。もう一度編集してください` となり、上書きしません。ホログラム全体をメニューから削除するときは確認画面がありますが、テキスト画面の「末尾の行を削除」「すべての行をクリア」とコマンド delete は確認なしで直ちに実行します。

`/oholo import` は同階層の `DecentHolograms/holograms/*.yml` を手動取り込み。同名・読めないファイルは skip、原本は残します。最初のページの本文・位置・enabled だけを取り込みます。複数ページ、アクション、行の高さ・offset、範囲・向き等は引き継ぎません。`<ANIM:...>` はタグを外して中身だけを表示し、旧アニメーションは再現しません。PlaceholderAPI 展開もありません。

## 設定項目と既定値

全体を再読込する管理コマンドはありません。特記した再読込以外は再起動で反映します。初回生成のタイミングは機能によって異なります。

### Teleport/config.yml

ファイルが無いときだけ次の既定値で生成します。既存ファイルへ不足項目を補う処理はありません。

| 項目 | 既定 | 内容 |
|---|---|---|
| `teleport-safety` / `teleport-to-center` | true / true | 安全探索、X・Z中央とY丸めへの補正 |
| `world-teleport-permissions` | true | tp / tphere / tpa 系の世界間権限。warp・spawn・履歴には適用しない |
| `world-home-permissions` | false | home の世界間権限（bed 分岐等には検査なし） |
| `per-warp-permission` | false | 個別ワープ権限 |
| `spawn-if-no-home` | true | 自分のホームが無い場合、復活地点または現在世界のスポーンへ |
| `jail-online-time` | false | 刑期に累積プレイ tick 条件も加える |
| `tpa-accept-cancellation` | 120 | 申請有効秒数。0以下は失効させない |
| `teleport-back-when-freed-from-jail` | true | 釈放時に復帰地点へ戻す |
| `sethome-multiple.default` / `.vip` / `.staff` | 3 / 5 / 10 | 許可された階層の最大値を採用（最低1） |

`world-teleport-permissions=true` の場合、TPA 申請時は申請者に移動先の `essentials.worlds.<世界名>` を求めます（同じ世界なら不要）。承認時は両者の**現在世界が異なる場合だけ、承認者**の権限を見ます。`/tpa` は申請者の現在世界、`/tpahere` は承認者自身の現在世界のノードを検査し、共通の worldAllowed 判定を使いません。保存された tpahere の目的地世界だけに基づく判定ではありません。遅延・クールダウン・無敵時間・料金の設定はありません。

`Warps/warps.yml` の `warps.<名前>`、`Jail/jails.yml` の `jails.<名前>` に地点を記述します。world（UUID または名前）/ world-name、x / y / z（数値）、yaw / pitch（省略時0）。world は UUID を優先し、見つからなければ world-name へフォールバック。座標不正で Teleport 有効化が失敗します。setwarp / delwarp / setjail / deljail は実装していません。

### PlayerState/config.yml

起動時に既定値を補い、ファイルへ保存します。

| 項目 | 既定 | 内容 |
|---|---|---|
| `auto-afk` / `auto-afk-kick` | 600 / -1 | 無操作秒数。正数以外はその自動処理なし。自動離席には afk.auto も必要 |
| `cancel-afk-on-move` / `cancel-afk-on-interact` / `cancel-afk-on-chat` / `cancel-afk-on-fish` | 全て true | 離席解除。魚イベントは interact の設定にも従う |
| `sleep-ignores-afk-players` | true | 離席者を睡眠人数から除く |
| `freeze-afk-players` | false | 離席者の移動制限・ダメージ/食料/満腹回復の取消。上方向への動作で解除 |
| `broadcast-afk-message` | true | 可視性に従って他人にも離席・復帰を通知 |
| `max-fly-speed` / `max-walk-speed` | 0.8 / 0.8 | 0.1〜1必須。速度指定10の上限 |
| `world-change-fly-reset` / `world-change-speed-reset` / `world-change-preserve-flying` | 全て true | 世界変更時に権限無しの飛行・速度を戻す、権限のある同tickの PLUGIN/COMMAND 飛行を維持 |
| `nickname-prefix` / `max-nick-length` | 空文字 / 32 | ニックネーム接頭辞・最大長 |
| `change-displayname` | true | 表示名を書き換える |
| `allowed-nicks-regex` | `^[a-zA-Z_0-9§]+$` | 許可文字の正規表現 |
| `ignore-colors-in-max-nick-length` | false | false は色指定を長さへ含める |
| `nick-blacklist` | 空リスト | 禁止名の正規表現リスト（大文字小文字を区別しない） |
| `heal-cooldown` / `remove-effects-on-heal` | 60 / true | 回復待ち秒数・回復時の効果除去 |
| `world-time-permissions` | false | 世界ごとの時刻変更権限 |
| `vanishing-items-policy` / `binding-items-policy` | keep / keep | keepinv 時の呪い品。keep / drop / delete のみ。消滅が keep 以外ならそちらを優先 |

再ログイン時の速度復元は -1〜1 に補正し、設定の速度上限への補正は世界変更時に行います。保存 flymode=false は他機能の飛行を取り消しません。個人時刻・AFK・左クリックジャンプモードはこの DB へ保存しません。

### TPswitch と構成ファイルを持たない機能

- `/tp 名前` の前処理は、名前が英数字・`_`（先頭の `.` も可）で引数1つの通常ラベルを対象にします。オンラインの完全一致名が見つからないと、OP でも無言で取り消します。拒否設定の場合の表示は `TPinfo:名前 is in closed mode!`。別名・名前空間付きや前処理対象外の入力はこの処理を通りません。Teleport 側の受付判定で断る場合は「名前 はテレポートを受け入れていません」です。
- TPswitch の通常データは `tpswitch.db` です。新規プレイヤーの初期値は open=true。旧 `plugins/TPswitch/config.yml` が存在し、DB の移行印が無い場合だけ一度取り込みます。壊れた項目は飛ばして件数を記録し、取り込み印は立てるため、旧 YAML を直して再起動しても再試行しません。以後の設定は `/tpset` から変更します。起動失敗時は `TPswitch failed to start; its commands remain unavailable` を確認してください。プレイヤーによる他人への tp / tphere / tpa / tpahere と承認などの受付判定が OP も含めて拒否されます。自分への座標指定 tp とコンソールからの tp はこの受付判定を通りません。
- `backpacks.db` はサイズを権限で決めます。独立した YAML 設定値はありません。
- `Sit/` ディレクトリの存在が機能の有効条件です。`Sit/sit.db` の初期 playermode は RANK、右クリック座りはプレイヤー別の保存値が無い場合 ON です。
- 帽子の個人保存先は `Hats/players.yml` です。`Hats/config.yml` の `max-hats` 同梱値は7、設定値は1〜28に補正されます。
- CreativeManagement は4モードそれぞれで持ち物を保存します。`cm.bypass` が無い場合、参加時に `server.properties` の `force-gamemode` が true で既存保存があれば、サーバー既定モードの持ち物を読み込みます。保存データが全く無ければ現在モードを保存します。
- 容器内のクリックでは、SURVIVAL 以外はクリエ設置印のない通常容器を操作できません。チェスト付きトロッコ等のブロック以外の容器も SURVIVAL 以外はクリックを拒否します（`cm.bypass` は免除）。クリエのスポーンエッグは `cm.bypass` または `cm.bypass.spawn_egg` が必要です。
- `NotNBT`、`CreativeManagement`、`Elevator`、`TimerBar`、`Guidance`、`Scale`、`reach`、`/anshi`、`/sokudo`、`/uuid` はソース内の判定・定数で動き、専用設定 YAML はありません。案内の完了履歴は `guidance.db`、クリエイティブ持ち物は個別ファイルへ保存します。
- Red Bull の値は固定です。個人券は20ポイントで24時間、購入コマンドは1個213円・12個2480円です。`/redbull` は OyasaiToken が提供する `TokenManager` 互換 API と `LuckPerms`、購入コマンドは `Vault` の経済プロバイダーを使います。各連携が無い場合の動作は「守る範囲・連携の境界」を参照してください。
- Skin は設定ファイルを使いません。名前別署名付きテクスチャのキャッシュ有効期間は最大6時間、HTTP 接続10秒・要求15秒です。

### Spawn/config.yml・Kits/kits.yml

- 地点は world / world-name / x / y / z / yaw / pitch の1か所。world が無い場合に `plugins/Essentials/spawn.yml` の spawns.default を取り込みます。設定コマンドはありません。
- `settings-imported` が false または未設定なら、未設定の `respawn-at-home`（true）、`respawn-at-bed`（true）、`respawn-at-anchor`（false）、`welcome-format`（空文字）を `plugins/Essentials/config.yml` から取り込み、印を true にします。welcome-format の取り込み元キーは `newbies.announce-format` です。既存値は保持します。
- 復活順は入獄地点（欠落時は死亡時の現在位置）→ 設定で許可されたベッド/アンカー → 自分のホーム → 設定スポーン。home=false ならベッド/ホーム分岐全体を省きます。設定スポーンも無い場合はバニラに任せます。
- 初参加は1 tick 後にスポーンへ同期移動、2 tick 後に歓迎文と tools キット。歓迎文は `{DISPLAYNAME}` / `{USERNAME}` / `{PLAYER}` と `&` 色指定だけを置換します。
- `Kits/kits.yml` の `kits.tools.items` は初回に Essentials の同名キットから取り込み、移行元無しなら空リスト。素材・数量、素材の耐久値、name / lore / unbreakable、一般的なエンチャントに対応。名前等の `_` は空白、lore の `|` は行分け。digspeed / durability は efficiency / unbreaking。任意コマンドなど非対応行が1つでもあれば、配布前の全行解析で警告し何も配りません。余りは足元へ落とします。

### 採掘・飛行・座る機能

| ファイル・項目 | 既定・反映 |
|---|---|
| `OreSmelter/config.yml` の `smelter_item_list` | raw_iron → iron_ingot、raw_copper → copper_ingot、raw_gold → gold_ingot。`素材 to 素材` または `素材 -> 素材`。不正行は無視。編集後は再起動 |
| `Veinminer/config.yml` | max_chain=64（最初の1個込み、1以上）、cooldown_ticks=20（0以上）、require_sneak=true。不正な整数は警告して64/20。専用再読込コマンドなし |
| `Veinminer/config.yml` の `groups.ores` | 通常/深層の石炭・鉄・銅・金・ラピス・レッドストーン・ダイヤ・エメラルド、ネザー金・クォーツ、古代の残骸を1グループに登録。不明素材は無視、重複グループは最初を採用して警告 |
| `OreReappears/config.yml` の `EnableWorldName` / 実行時 switch | 同梱ファイルにはワールド名1件。実名は資料へ転記しない。switch=false が有効、`/orerepopswitch` で一時停止し、再起動すると有効へ戻る |
| `EnableBlockNameAndTickAndMoney` | `素材 tick 単価`。不正 tick は100、単価は5、素材不明/3要素未満は無視。下表が有効な同梱値 |
| `Pita/config.yml` の `default-enabled` | false。true は全員へ慣性停止を適用するので、個人の OFF 表示でも無効化できない。再起動で反映 |
| `Sit/` | フォルダがある場合だけ有効。YAML 設定は無し。DB の click_sit_off は未登録なら右クリック座り ON、player_mode は RANK |

| 再生成の鉱石（通常・深層とも同値） | tick | ドロップ1個あたり単価 |
|---|---|---|
| 石炭 | 1000 | 5 |
| 鉄 | 1600 | 40 |
| 銅 | 1600 | 20 |
| 金 | 2000 | 85 |
| レッドストーン | 1300 | 5 |
| ラピス | 1800 | 5 |
| ダイヤ | 2600 | 70 |

エメラルドは同梱設定でコメントアウトされています。OP+クリエの採掘は再生成・入金を記録しません。その他の対象採掘は現在の道具から計算したドロップ数×単価を Vault に入金します。支払い結果は検査しません。停止時に記録した鉱石を戻しますが、待機リストはメモリだけなので異常終了後の復元はありません。switch 無効化後も、既存の待機リストの復元タイマーは動きます。

PlayerSit の RANK は LuckPerms primaryGroup の次の順に比較し、左側の人だけが右側へ乗れます。同階級・未知同士は不可、未知の階級は最後です。
`white → blue → takumi → builder → jokyu → chukyu → default → mod → admini → admin → dev`。
ALL は階級検査を省きます。右クリック座り OFF は、他人へ乗る操作の拒否設定ではありません。

### 帽子・DebugOnBE・ホログラム

- `Hats/config.yml`: max-hats=7（1〜28に補正）。`Hats/particles.yml`: settings.title=`&8パーティクルを選ぶ`、settings.size=6（1〜6段）。既定 ID は halo / cape / plumbob / creeper / angel_wings / rainbow / thief / rocket / magic_aura / notes / tornado / witches_sphere / bubble_wings。
- 帽子の `items.<スロット>` は key、permission、name、id（アイコン、既定 STONE）、description、type、location（既定 head）、offset、tracking、mode（既定 always）、count=1（最低1）、speed=0、random-offset、update-frequency=2（最低1）、scale=1（0以下は1）、animated=false、particles を指定します。particles の各項目は particle、color（整数または random）、size=1（0.1〜10）、items（空）。既定の個別上書きは同梱 `particles.yml` を参照。新規 type の描画機構や任意PNG・nodes・ショップ・MySQLはありません。ファイル編集は再起動で反映します。
- `DebugOnBE/togo-global.yml`: version=1、replacementMaterial=air、limits.maxBlocks=256、limits.radius=32、limits.durationSeconds=300。各上限は1〜ハード上限へ補正します。`togo-users.yml` の users.UUID は enabledShapes（省略は全対応形状、空は対象なし）、maxBlocks=35、radius=10、durationSeconds=60、debugStickAutoEnabled=false。個人値も全体上限に補正します。version を拒否する検査はありません。global/users は起動で読み込み、変更時・停止時に保存します。
- `shapes/<形状名>.yml`: states の状態キーごとに表示用配置リスト。offsetX/Y/Z・yaw・各 Pose の x/y/z は0、isSmall=true、scale=1、visible=false、装備品は未設定が既定。角度はファイル上で度。一致する状態の配置が無いブロックは表示しません。既定の形状ファイルは同梱されていません。`/debugonbe reload` はこれだけを読み直します。
- `Holograms/holograms.yml`: holograms のリスト。name / world / x / y / z が必要、lines は空、enabled=true、viewRange=未指定（TextDisplay既定）、seeThrough=true、background=DEFAULT、scale=1（0.5〜3）、vertical=false、shadow=false、follow=true、yaw=0、mode=NORMAL、windowLines=5（1〜20）、scrollSpeed=40（5〜1200 tick/行）、playMode=PROXIMITY、proximityRange=10（1〜128）が読込既定です。background は TRANSPARENT / DEFAULT / BLACK（旧 true / false も対応）、mode は NORMAL / END_ROLL、playMode は ALWAYS / PROXIMITY / MANUAL。手動再生中の状態・スクロール位置は保存しません。同名のリスト項目は後のものが勝ち、不正地点の項目は飛ばします。

### 参加時コマンド

`JoinCommands/config.yml` が無ければ機能は無効で、生成もしません。`server-join-commands.<ID>` の command-list（必須の文字列リスト）、permission（省略は無条件。指定ノードの既定は false）、first-join-only=false、delay=0（tick）を使います。空リスト・負の遅延は警告して飛ばします。

先頭 `[PLAYER]` はプレイヤー、その他はコンソール実行、`{player}` は参加者の実名です。`/` は付けずに書きます。プレイヤー実行は preprocess イベントを発火し、取消や書き換えを尊重します。条件・権限は参加時だけ検査し、遅延後はオンラインかだけ検査します。定義は記述順に予約しますが、delay が異なれば実行順は変わります。例外が出たコマンドを警告し、残りは続行します。dispatch の false は検査しません。

## データの保存場所と失敗時

| 保存先 | 内容・保存時点・失敗時 |
|---|---|
| `oyasaiutilities.db` | PlayerState と Teleport の UUID 行、ホーム・入獄。順序付き非同期保存。成功表示はコミットを待たない。失敗は `Shared SQLite: write failed`、メモリを戻さず、以降の flush / 停止でも失敗を報告 |
| `backpacks.db` | UUIDごとの ItemStack バイト列。閉じた時に非同期保存。失敗した最新内容はメモリ保持し、再度開くとそれを使う。停止で開いた内容・未保存を再保存、最大10秒待つ。失敗・時間切れ後の永続化は保証しない |
| `AdminBP/<UUID>.yml` | ページ・枠ごとの ItemStack。閉じた時・停止時に同期保存。YamlConfig の IOException は `Could not save config` を出すだけで、メモリは更新済み |
| `tpswitch.db` | open・許可/拒否の UUID と表示名、旧データ取り込み件数。設定変更は非同期。失敗は `Could not save TPswitch settings for UUID`、本人へ通知せず、メモリは戻さない。停止は最大30秒待つ |
| `Sit/sit.db` | 右クリック座り OFF の UUID、PlayerSit モード。同期保存成功後だけメモリ更新。失敗は「今は使えません。」。DBが開けないとコマンドによるポーズは使えるが、右クリック座り・PlayerSit・設定変更は使えない |
| `guidance.db` | 案内看板 ID ごとのクリック、最後の案内者/名前/epoch ms、取り込み印。同期トランザクション。案内ペア・モードはメモリのみ |
| `skins.properties`（一時ファイル `.tmp`） | 名前別署名付きtexture・取得時刻、UUID別割当。非同期でファイルを置換します。失敗時にメモリ変更を戻さず、表示変更と保存は一体の処理ではない。停止時に保存・通信の完了は待ちません |
| `Hats/players.yml` | UUID別の装備 ID リスト。装備変更・退出・停止で保存。失敗してもメモリ・成功表示は戻さない |
| `Pita/data.yml` | enabled-players の UUID リスト。切替・停止で保存。不正UUIDは読込時に無視 |
| `CreativeManagement/data/<UUID>.yml` | ゲームモード名ごとの content / armor（Base64）。モード変更前、退出・キックで同期保存。未保存モードへ切替時は持ち物を空にする。読込 IOException はログ、保存例外には機能内の回復処理なし |
| ワールドのチャンク・アイテム・エンティティの PDC | クリエ設置座標・由来の印。ブロック印はチャンク保存に従う。旧 Metadata からの取り込みなし |
| プレイヤーの PDC と LuckPerms | Red Bull 一日券の絶対期限と期限付き fly 権限。LuckPerms保存失敗でもPDCは残り、次回使用・参加で再付与・再保存を試みる |
| `Holograms/holograms.yml` / DebugOnBEの上記YAML | 編集時に同期保存。ホログラムはメモリ変更後に保存し、例外時の巻き戻しなし。Togo設定は保存 IOException をログへ出しメモリは保持する |

バックパックのバイト列変換に失敗すると、オンラインなら次tickに同じ内容を再び開きます。読めないバイト列・54枠超・現在の段数を超える位置の非空アイテムがある場合は開きません。外製バックパックを読む機能はありません。

共通 DB・backpacks・tpswitch・sit は WAL / synchronous=FULL / busy_timeout=5000 を使います。guidance は busy_timeout のみ明示します。SQLite の補助ファイルを含む整合性のあるバックアップが必要です。各 DB をまとめてコミットする仕組みはありません。

## 起動・移行時の注意

1. 旧データと自作データを保持した状態で起動し、各機能の起動ログ・移行件数を確認する。一括で全員の移行をする仕組みではありません。
2. PlayerState / Teleport は DB の対象UUIDに自作行が無い時だけ、同階層 `Essentials/userdata/<UUID>.yml` を読む。元ファイル無しでも移行済み行を作るので、後から旧ファイルを置いても取り込みません。Tele­port は孤立した自作ホーム行があっても旧データを読み込まず、移行印を補います。
3. PlayerState は nickname / flymode / timestamps.lastheal、Teleport は homes / jailed / jail / timestamps.jail（無ければ jail-timeout）/ timestamps.onlinejail / lastlocation を引き継ぎます。壊れた YAML・地点では初期値を保存して続行せずエラーになります。
4. Teleport は参加時に共通 DB の flush 成功後、Essentials の旧入獄状態・期限を消します。以降は自作 DB が正です。読み込み・flush 失敗では `Teleport: failed to import UUID` とログを出し、「移動データの読み込みに失敗しました。運営へ連絡してください。」で切断します。一度記録された共通DB書込失敗は復旧してもそのインスタンスの flush で再報告されます。
5. Warps / Jail / Kits は自作の各ファイルが無いときだけ Essentials の対応 YAML を取り込みます。空の自作ファイルがあるだけでも再取り込みしません。Essentials 無しでも空の自作ファイルが生成されます。Spawn は上記の別の判定です。
6. TPswitch は旧 `plugins/TPswitch/config.yml` があり取り込み印が無い場合だけ取り込み。壊れたUUID・型は skipped として飛ばし、件数をログと tp_meta に残します。skipped があっても取り込み完了印を立てるため、修正した旧ファイルを再起動だけで取り込み直すことはできません。旧ファイルは残ります。
7. Guidance は `plugins/Skript/guide_data.csv` があり、クリック表・記録表・取り込み印表が全て空の時だけ一度取り込みます。一時的なペア・モードは移行しません。不正型・重複・不正UTF-8等は失敗し、案内記録機能は準備完了になりません。
8. Sit の schema 1 は設定を保持して2へ移行し、初期モードは RANK。backpacks / tpswitch は版1、共通DBは機能ごとに版1。未対応の未来版を読み込むと利用機能が失敗します。DBや移行印の手動削除は旧データの再取り込みにつながるため、復旧時はどちらを正とするか確認してください。

共通 DB が開けなくても、他機能の有効化は続きます。Workstation / PlayerState / Teleport は個別に失敗を処理して続行し、Spawn は Teleport が有効な時だけです。**共通 DB または Teleport の起動に失敗すると、このプラグインの入獄による移動制限も働きません。** 再開前に起動ログと入獄機能の有効化を確認してください。その他の全機能が独立して例外隔離されているわけではありません。

## 守る範囲・連携の境界

- **入獄:** 原因が COMMAND / PLUGIN / パール / ポータル等であっても、許可地点以外へのテレポートを取り消します（Teleport が有効な場合）。読み込み失敗時もキャンセルします。ただし徒歩、ブロック破壊・設置、操作、PvP、ゲームモード変更、全コマンド制限は提供しません。牢屋の地点が欠けても jailed=true を維持しますが、領域保護ではありません。期限は参加時・オンラインの毎秒に確認し、オンライン刑期は実時刻と累積プレイtickの両条件が必要です。
- **移動安全:** 通常移動は非同期チャンク読み込み後に安全探索。creative / spectator は安全検査免除。境界外は拒否。履歴・`/jump`・エレベーター・初参加移動・牢屋内部移動は共通安全探索を通りません。キャンセル済みの履歴操作も履歴の取り出しは戻しません。
- **採掘:** 連鎖は読み込み済みチャンクだけをたどり、追加の各ブロックにもプレイヤーの破壊処理を使います。他プラグインの取消を尊重します。再生成は記録した位置へ無条件で元の BlockData を戻すため、その間に置き換えたブロックも上書きします。異常終了・爆発等から鉱山全体を守る機能ではありません。
- **クリエ制限:** モード別持ち物、クリエ設置印、取得・ドロップ・容器クリック、防具立て・額縁、ディスペンサー・調理を扱います。全経路の持ち出し防止は保証しません。未対応の経路は [PROJECT.md](PROJECT.md) の既知の制限を参照してください。`cm.bypass` は全ハンドラ共通の免除ではなく、クリエ設置の印や対象ブロックのドロップ抑止は続きます。NotNBT の例外は権限ではなく OP です。
- **DebugOnBE:** 実ワールドは変更せず実行者へ偽ブロック・偽防具立て等のパケットを送ります。表示中の対象の破壊イベントは取消。利用中の権限変更だけで表示・設定操作が止まる保証はありません。詳細は [PROJECT.md](PROJECT.md) を参照してください。ワールド移動時の専用クリーンアップは無く、解除処理は現在世界を基準にするため、移動をまたぐ表示復元はゲーム内で未確認です。
- **案内:** 看板の表面1行目 `[案内完了]`、2行目IDで判定し、同じIDは大小文字を区別せず一度だけ。破壊を止めるだけで爆発・支えの破壊等は保護しません。案内登録の初心者判定は group.default 有り・chukyu 無し、クリックは default だけ。複数案内者による同じ初心者の再登録を拒否しません。`lp ... parent add/remove guide` と `token add 案内者名 10` をコンソール実行し、実行結果は検査しません。報酬を先に処理してからDB記録するので、DB失敗時に支払いと記録の整合性は保証しません。
- **Red Bull:** Vaultの経済プロバイダー、TokenManager名のAPI、LuckPermsオンラインユーザーを使います。券は再使用・参加で延長しません。ポイントを引く前にLPの準備を確認しますが、ポイント徴収・PDC・LP保存は一体のトランザクションではありません。期限確認は通常30秒ごとと参加/使用時。既存の無期限・別期限の権限を消しません。設置した頭から元の飲用アイテムへ復元する処理はありません。
- **スキン:** Mojang への通信でスキンを取得し、キャッシュは6時間です。短時間の連続要求では最終的にどの変更が表示されるか保証しません。Floodgate 導入時は統合版を識別し、APIが使えない場合は安全側に全員の変更を拒否します。
- **Essentials共存:** 状態・移動の通常名/別名は Essentials・バニラが持つ場合だけ差し替え、他プラグインの同名は奪いません。作業台は ec / eskull だけを明示差し替え、他の通常名の移譲はEssentials側の設定・動作に依存します。名前空間付きの Essentials/バニラは保持。無効化時は自分がまだ持つラベルだけ戻します。
- **Essentials API:** PlayerState は nickname/fly のキャッシュ同期と変更イベントの取消、旧 AFK の取消を bridge で扱います。Essentialsの全設定・料金・god・jailの副作用・独自vanish索引・移動独自APIイベントまで再現しません。飛行の同期は実行中の Essentials の版に依存するため、別版での互換性は未確認です。内部の呼び出しは [PROJECT.md](PROJECT.md) を参照してください。

連携先は Vault・LuckPerms・EssentialsX・OyasaiToken・Floodgate です。Red Bull のポイント API は同じリポジトリの OyasaiToken が提供し、`TokenManager` 名で取得します。外製 TokenManager を別途用意する前提ではありません。実行環境で OyasaiToken が読み込まれ、その互換 API を取得できるか確認してください。

実サーバーの有効機能・権限付与、経済の支払い、Essentialsとのコマンド競合、Java/統合版クライアント表示、移行後の実データ、保存障害からの復旧はゲーム内で未確認です。
