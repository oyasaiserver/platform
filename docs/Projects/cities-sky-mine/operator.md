---
date: 2026-10-13
record_type: reference
source: plugins/CitiesSkyMine/（コードから作成。レビュー指摘をコードと再照合。ゲーム内での確認は未実施）
---

# CitiesSkyMine の運用（運営向け）

操作は [player.md](player.md)、処理と検証範囲は [PROJECT.md](PROJECT.md) を参照。以下は同梱設定とコード上の既定値です。ゲーム内での確認は未実施です。

## 導入と利用者への開放

1. FastAsyncWorldEdit と CitiesSkyMine の jar を入れて起動し、`CitiesSkyMine enabled` を確認する。
2. 同梱 config と既存の `plugins/CitiesSkyMine/config.yml` を比較し、生成量上限と公開する機能を確認する。
3. 権限管理プラグインで、建築機能を使わせる人に `citiesskymine.role.builder`、payload・デバッグ棒も使わせる人に `citiesskymine.role.takumi` を付与する。
4. 一般利用者で使える機能と保護・取り消しを確認する。既定でロールは OP 以外に付かないが、HUD/SUI とヘルプ・version・info はロールなしでも使える。

`/rc`・`/ri`・`/hb` も直接登録しています。他プラグインと衝突したら `/citiesskymine:rc`・`/citiesskymine:ri`・`/citiesskymine:hb` を使って対象を指定してください。

## 権限

| 権限 | 既定 | 用途 |
|---|---|---|
| `citiesskymine.*` | OP | plugin.yml に列挙されたすべての子権限 |
| `citiesskymine.role.admin` | OP | admin（takumi を継承） |
| `citiesskymine.role.takumi` | false | takumi（builder を継承） |
| `citiesskymine.role.builder` | false | builder（継承なし） |
| `citiesskymine.hud` / `citiesskymine.sui` | 全員 | HUD／SUI のコマンド |
| `citiesskymine.sui.maxselectionsize.bypass` | OP | SUI の体積上限回避 |

通常のアクセス判定は次の順です。

1. `access.enabled=false` なら対応する旧権限だけを確認する。
2. `access.op-bypass=true` なら OP を許可する。
3. `access.legacy-permissions-bypass=true` なら対応する旧権限で許可する。
4. 非プレイヤーはコンソールの bypass、コマンドブロックの許可一覧、その他の非プレイヤー一覧を確認する。
5. プレイヤーは持っているロールと継承先を確認する。

bypass は送信者の種類チェックを免除しません。payload の配置はプレイヤー・コマンドブロックだけで、コンソールには対応しません。

| コマンドキー | 許可ロール（既定） | 旧権限（すべて `citiesskymine.` に続ける。既定 false） |
|---|---|---|
| `reload` | admin | `admin` |
| `road` / `intersection` | builder・takumi・admin | `road` |
| `facade` | builder・takumi・admin | `build` |
| `payload` / `load` / `load64` | takumi・admin | `payload` |
| `window` / `slabstairs` / `columns` / `stack` / `crowd` / `selection` / `settings` / `cloud` / `bezier` / `preset` / `schematic` | builder・takumi・admin | 各キーと同名 |
| `crowd-heads` | admin | `admin` |
| `debugstick` | takumi・admin | `debugstick` |
| `config` | 独立した固定判定（下記） | `config` |

`citiesskymine.use` は宣言されていますが、実装は参照しません。ヘルプ・version・info は権限判定なしです。タブ補完は一律の権限フィルタではありません。

- **設定編集:** OP、`citiesskymine.config`、`citiesskymine.admin`、`citiesskymine.role.admin` のいずれかで許可。`access.commands.config` やカスタム admin の権限設定では、この固定判定を変更できません。
- **HUD/SUI:** ロール判定を使わず専用権限を確認します。GUI の表示切り替えは settings 権限だけで操作できます。HUD の実表示には HUD 権限も必要ですが、SUI の定期描画は SUI 権限を再確認しません。
- 通常の生成は受付後に権限を再確認しません。個人設定GUIのクリックは settings 権限を再確認します。
- `access.commands.<key>` はロールのリスト、または `.roles` のリストで指定できます。空リストはロール経由の不許可ですが、bypass は別です。`*` でもプレイヤーには少なくとも1つのロールが必要です。
- コマンドブロックの既定許可は `payload, load, load64`、その他の非プレイヤーは空です。OP・旧権限の bypass はこの一覧より先に判定されます。`/csm payload load64` は payload と load64 の両方、`/csm load64` は load64 を確認します。

## 管理コマンド

| コマンド | 動作 |
|---|---|
| `/csm reload` | config を再読込し、群衆の胴・脚の壁素材も再構築 |
| `/.config reload`（`/csm config reload`） | config の再読込だけ |
| `/.config access status` | スイッチ・許可一覧・コマンドのロールを表示 |
| `/.config access set <enabled|op-bypass|console-bypass|legacy-permissions-bypass> <true|false>` | スイッチを変更・保存 |
| `/.config access command <key> <role...|none>` | 許可ロールを変更・保存 |
| `/.config access role <role> permission <node>` | ロールの権限ノードを変更・保存 |
| `/.config access role <role> inherits <role...|none>` | 継承を変更・保存 |
| `/.config access command-blocks <key...|none>` | コマンドブロック許可一覧を変更・保存 |
| `/.config access non-player <key...|none>` | その他の非プレイヤー許可一覧を変更・保存 |
| `/.crowd heads add <MCID>` / `remove <MCID>` / `list` | 群衆に使う頭の登録・削除・一覧。コンソールからも可 |
| `/.crowd heads import [selection|clipboard]` | プレイヤーの cuboid またはクリップボードから頭を取り込む |
| `/.sc reload` | FAWE の保存先を確認・必要なら作成。貼り付け権限で使えるプレイヤー専用操作 |

設定のロール名は英数字・ハイフン・アンダースコア。リストは空白またはカンマ区切り、`none` は単独指定、許可リストでは `*` が全許可です。存在しないロールも設定でき、継承の循環は再訪問で止めます。
`status` はリスト形式だけを表示するため、`.roles` 形式やコードのフォールバック値を必ずしも正しく表示しません。

頭の MCID は3〜16文字の英数字・`_`。プロフィール取得は非同期で行います。登録済み UUID は更新します。取り込みは textures がない頭を飛ばし、UUID がなければ textures から生成したUUIDを使います。同じUUIDの重複は後の内容で更新されます。登録済みプレイヤーのログイン時にも textures を更新します。

## 設定と既定値

保存先は `plugins/CitiesSkyMine/config.yml`。起動時にファイルがなければ同梱既定を保存します。既存ファイルへ新しいキーを自動追記しません。古い設定では個別の上限キーを明示してください。例えば `limits.max-blocks-bezier` がないと `max-blocks-csm`（なければ2000000）を使い、同梱値20000より緩くなります。柱・坂・複製・群衆・雲・一般スキマティックにも同様の代替値があります。個人設定のある項目はそちらが優先され、リロードしても個人設定・既存セッションはリセットしません。

### 操作量の上限

以下は `limits.` の下のキーです。いずれも値が0以下なら、その上限判定を行いません。

| キー | 既定 | 判定対象 |
|---|---|---|
| `max-blocks-csm` | 2000000 | payload の配置柱の高さ合計（各 height + 1） |
| `max-source-blocks-csm` | 2000000 | hollow 前の元ブロック数。同座標の重複も加算 |
| `max-columns-csm` | 100000 | CMC の柱数／CMB 展開後の柱数 |
| `max-blocks-window` | 512 | 窓3層と周辺空気の埋め対象 |
| `max-blocks-slab-stairs` | 200000 | 坂の配置計画の件数 |
| `max-blocks-columns` | 200000 | 柱の配置計画の件数（候補だけの `-s` は判定しない） |
| `max-blocks-stack` | 2000000 | 選択体積 × 回数。スキップ対象も加算 |
| `max-blocks-crowd` | 200000 | block モードの目標人数 × 3 |
| `max-blocks-cloud` | 200000 | 計算後の配置件数 |
| `max-volume-cloud` | 4000000 | 計算前の size × height × size |
| `max-blocks-bezier` | 20000 | 曲線の重複を除いた配置件数 |
| `max-blocks-schematic` | 500000 | 貼り付け対象数（`-a` なら minecraft:air を除く） |
| `max-volume-schematic` | 500000 | 読込後のクリップボード体積 |
| `max-schematic-file-bytes` | 10485760 | 読込前のファイルサイズ |

道路・交差点・ファサードには上記の生成量制限が適用されません。payload の展開バイト数にも専用制限はありません。多くの計画は上限判定より前に生成されるため、上限は計算量・メモリ使用量全体の保証ではありません。

道路のコマンドでは `lane`・`sidewalk`・`centerline`・`outerline` に整数の範囲検査がなく、負数や非常に大きい値を受け付けます。`transition` にも範囲・有限値検査はありません。交差点の `armlength`・`cornerradius` は下限補正だけで上限はありません。GUI の調整範囲ではコマンド入力を制限できず、巨大な幅は非同期編集の計算量・メモリを増やします。道路・交差点・白線スムージングは同じ人の多重実行も防ぎません。利用者を信頼できる人に限り、大きい値や生成中の再実行を避けるよう案内してください。

### 生成と表示

| キー | 既定 | 用途 |
|---|---|---|
| `window.default-width` / `default-height` | 2 / 3 | 窓の初回寸法 |
| `window.frame` / `glass` / `backing` | `IRON_TRAPDOOR` / `WHITE_STAINED_GLASS` / `DRIED_KELP_BLOCK` | 窓の素材 |
| `window.fill-air-around-glass` / `fill` / `select-after-fill` | true / `SMOOTH_QUARTZ` / true | 周辺空気の埋め・生成後の選択 |
| `slab-stairs.material` | `stone_brick` | 坂の素材ファミリー |
| `crowd.max-mannequins` | 300 | 1回の目標人数上限。0以下は0に補正し、無制限にはならない |
| `crowd.heads.max-scan-blocks` | 200000 | 頭の走査体積。最低1に補正 |
| `crowd.torso-walls` / `leg-walls` | `[]` / `[]` | 胴・脚の抽選素材。空、または有効素材が0件なら全 Wall 素材 |
| `crowd.natural.density` / `group` / `stand` | 0.12 / 0.6 / 50 | 群衆の既定引数 |
| `crowd.natural.noise` / `scale` / `gap` | 0.6 / 14 / 1 | 同上 |
| `crowd.natural.fb` / `forward` / `right` / `jitter` / `mode` | 0 / 50 / 50 / 15 / `block` | 同上。各値の範囲は player.md |
| `csm.default-rotation` / `default-side` | 0 / `R` | payload 配置（回転は4で剰余、未知のsideはR） |
| `csm.select-after-load` / `hollow-on-load` | true / true | payload 後の選択／中空化 |
| `schematic.select-after-paste` | true | スキマティック後の選択 |
| `brush-preset.max-presets-per-player` / `max-command-length` / `load-cooldown-ticks` | 20 / 200 / 20 | 保存件数／実行コマンド合計文字数／待ち時間（ticks × 50ms）。0以下は判定なし |
| `brush-preset.allowed-commands` | `"//br "`, `"//brush "`, `"//mask "`, `"//gmask "` | 許可接頭辞。空リストでもこの既定へ戻る |
| `debug-stick.enabled` / `max-distance` / `require-creative` | true / 6.0 / false | 有効化／距離（1〜64へ補正）／クリエイティブ限定 |
| `debug-stick.apply-physics` / `memory-persist` | false / true | 物理更新／選択した状態名の保存 |
| `hud.default-mode` / `max-value-length` / `show-selection` | `off` / 40 / true | HUD 初回設定。幅は8〜96へ補正、未知のmodeはoff |
| `sui.default-enabled` | true | 選択範囲のパーティクル既定 |
| `sui.max-selection-size-to-display` | 10000000 | cuboid の体積上限。0以下は判定なし |
| `sui.enable-max-selection-bypass-perm` | true | 体積上限回避権限を使う |
| `sui.particle-viewdistance` | 99 | 描画距離（1〜500へ補正） |
| `sui.max-ping` | 150 | 超えると描画しない。0以下は判定なし |
| `prefix` | `<gray>[<gold>CitiesSkyMine</gold>]</gray> ` | MiniMessage の接頭辞（一部の旧コマンドは独自表示） |
| `debug` | false | 同梱されているがコードからは参照されない |

`brush-preset.allowed-commands` は許可対象を絞る設定です。ブラシは `//br ` または `//brush `、マスクはそれぞれ `//mask `・`//gmask ` が別途必須で、他の接頭辞を追加しても使えるコマンドは増えません。

`slab-stairs.slab`・`slab-stairs.stair` は同梱設定にはありませんが、material を解決できないときの代替指定として読まれます。両方が有効なら使用し、通常ブロックを推定できない場合は石レンガです。

### アクセス設定

`access.enabled`・`op-bypass`・`console-bypass`・`legacy-permissions-bypass` はすべて true。`access.roles.admin|takumi|builder` の `display-name` は「アドミン」「たくみ」「建築士」、`permission` は各 `citiesskymine.role.<role>`、`inherits` は `[takumi]`・`[builder]`・`[]` です。display-name は実装で参照しません。
`access.commands` の全キーと既定ロールは上の権限表、`access.command-blocks.allowed-commands` は `[payload, load, load64]`、`access.non-player.allowed-commands` は `[]` です。

config 外の初回既定は道路の半径20・緩和曲線長10・片側車道幅4・中央白線幅1・外縁白線幅1・歩道幅2、素材 `GRAY_CONCRETE`・`ANDESITE`・`SMOOTH_QUARTZ`、debugline=false。交差点は腕数4・長さ16・コーナー半径4・回転0、中心未設定です。個人GUIの調整範囲とコマンドの入力範囲は一致しません（例: 道路半径のGUIは1〜200、コマンドは0より大きく1000以下）。

## データと移行

| 場所 | 内容 |
|---|---|
| `plugins/CitiesSkyMine/player-data/<UUID>.yml` | 名前、道路・交差点・窓・payloadの省略値、選択範囲、HUDの設定と表示文字列、SUI、デバッグ棒の状態選択 |
| `plugins/CitiesSkyMine/brush-presets/<UUID>.yml` | プリセット名・brush・mask・gmask |
| `plugins/CitiesSkyMine/crowd-heads.yml` | UUIDごとの名前・textures・署名・更新時刻 |
| `plugins/CitiesSkyMine/debug-stick-memory.yml` | 旧形式。起動時に player-data へ不足項目だけをコピーする入力元 |
| `plugins/CitiesSkyMine/fasard.schem` | ファサードの既定素材（コードは作成しない） |

一般の `/.sc` は WorldEdit の `saveDir` を参照し、FAWE の `PER_PLAYER_SCHEMATICS` が有効ならUUIDサブフォルダを使います。実際の保存先は連携先設定次第です。`.schem` を先に、次に `.schematic` を探します。指定できるファイルは保存先の中に限ります（シンボリックリンク等の解決後も確認）。見つからない場合と `/.sc reload` では、保存先の絶対パスをプレイヤーに表示します。
**ファサードの `/.hb schem` は別処理**で、`schem <bays|full> <pattern> <file>` の file 位置に任意パスを受け付けます。通常のスキマティック上限・パス制限は適用されません。full のときも file は同じ位置です。相対パスはサーバーの作業ディレクトリ基準で、サーバープロセスの読取権限内で、保存先を限定せず対応形式のスキマティックを読み込みます。形式を判別できないファイルは開かずに拒否します。存在しないファイルは絶対パス付きで通知され、パスの存在確認に使われ得ます。サイズ上限なしの読み込みによるメモリ負荷もあるため、`access.commands.facade` を信頼できるロールに絞ってください。
同じパスの素材は1件キャッシュされます。`fasard.schem` を差し替えても config リロードでは更新されないため、確実に読み直すにはサーバーを再起動してください。別パスの素材を正常に読み込むとキャッシュは置き換わります。

- 旧デバッグ棒ファイルは消しません。不正UUIDは飛ばし、既存の新形式の項目は上書きしません。旧ファイルを残すと、後日新形式の項目を消した場合に次の起動で再取り込みされます。
- デバッグ棒の `memory-persist=false` は新しい選択をメモリに持つだけで、旧データの読み込み・移行や過去の保存内容の参照を止めません。
- `playerdata/` からの移行処理はありません。正しいフォルダは `player-data/` です。
- 道路の点・交差点中心・ベジェの点や分割数・分割payloadはメモリのみ。ログアウトではセッション自体を削除せず、プレビューは次のタイマーで停止します。再接続で点は残り、プレビューは自動再開しません。無効化・再起動で消えます。

## 起動・障害時の注意

FAWE が必須で、LuckPerms・TAB は任意依存です。jar 導入後は起動が必要です。`/csm reload` は jar のロードやプラグインの再初期化ではありません。FAWE が未導入なら必須依存の解決に失敗し、CSM の起動処理には進みません。CSM の起動処理に進んだ時点で FAWE が無効なら、独自チェックで `FastAsyncWorldEdit が見つかりません!` と `依存プラグインが見つかりません。CitiesSkyMine を無効化します。` をログに出します。起動完了ログは `CitiesSkyMine enabled` です。

- **個人データ保存失敗:** `プレイヤーデータの保存に失敗しました: <UUID> / <理由>` を警告します。変更はメモリに残り、呼び出し元は成功を表示できます。保存の成功をプレイヤーには保証しません。通常変更時と停止時に同期保存します。
- **ブラシ保存失敗:** YAML 保存の例外を捕捉しません。通常の成功表示には進まず、独自の復旧・巻き戻しはありません。
- **頭の保存失敗:** `頭の保存に失敗しました。` または `頭の削除に失敗しました。`、ログには `crowd-heads.yml の保存に失敗: <理由>`。メモリの追加・更新・削除は巻き戻しません。頭ファイルは起動時に読み、config リロードでは読み直しません。
- **設定保存失敗:** 成功表示のあとも `config.yml` の内容と保存エラーログを確認してください。設定はメモリ上で先に変更され、保存成否を確認せず成功表示するため、表示だけではディスクへの反映を確認できません。
- **生成失敗:** 全処理を巻き戻すトランザクションはありません。エラー後の部分変更と FAWE 履歴を実地確認してください。undo 登録失敗の原因は例外ログ次第で、競合が原因とは断定できません。
- **手続きファサード:** 1ブロックごとの配置例外を無視するため、一部を置けなくても完了と表示することがあります。生成後に外壁と取り消しの可否を確認してください。
- **個人設定GUI:** 持ち物をドラッグで入れないよう案内してください。クリックは止めますがドラッグを止める処理も持ち物を返す処理もなく、取り出せず画面の切り替えや終了で失うおそれがあります。実機での消失は未確認です。
- **道路設定の入力失敗:** 複数指定の途中で失敗すると、それ以前の変更はセッションに残りますが、その入力では保存・プレビュー更新を行いません。正しい設定を再入力させてください。後で保存する操作を行えば、その値も保存され得ます。
- **停止:** 個人データを保存し、雲の登録タスク・プレビューを停止します。実行中の道路・交差点・スキマティックの完了を待つ独自処理はありません。

## 守られる範囲・連携の限界

- CSM 自身は権限・入力・一部の量制限を確認します。土地、チェスト、所有者、地面、既存建築、物理更新の安全性を保証する保護プラグインではありません。
- 実際の環境で土地保護とログ記録を確認してください。FAWE の編集は実行者を渡して行いますが、WorldGuard・LWC・CoreProtect との直接連携はありません。各環境の保護・ログ記録が有効かは未確認です。コマンドブロックは実行者のプレイヤー指定なしで、undo と配置後の選択を登録しません。起点はコマンドブロックの1つ上、向きはブロックの向きです。
- デバッグ棒は Bukkit で直接状態を変更し、CSM 内で保護確認・undo登録をしません。既定では物理更新なしです。
- マネキンは重力なし・移動不可で CSM 専用の印を持ちます。削除は作者を区別せず、選択内の印付きマネキンを対象にします。上限は1回の目標数で、累計数を制限しません。生成途中に例外なら、その回で記録できた個体を削除します。削除途中の例外は削除済み数を通知し、戻しません。
- 群衆の頭スキンはブロック設置後に Bukkit で適用し、失敗個数を通知します。この後処理は別途 undo に記録しません。
- TAB が使えれば HUD を TAB scoreboard で表示し、使えなければ Bukkit scoreboard へ切り替えます。Bukkit版を外すと main scoreboard に戻し、以前の他プラグインの scoreboard は復元しません。
- LuckPerms API はビルド依存・softdepend にありますが、ソースから直接呼びません。権限は Bukkit の `hasPermission` を使います。外部プロフィール取得の成功、サーバーバージョンごとのブロック状態互換性、他プラグインとの実動作は未確認です。
