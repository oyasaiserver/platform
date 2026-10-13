---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiWorldGenerator/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiWorldGenerator の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、内部仕様と開発入口は [PROJECT.md](PROJECT.md) を参照してください。

## 権限

| 対象 | 権限 | 既定 | 備考 |
|---|---|---|---|
| `/owg` | `oyasai.owg.use` | OP | `/owg` コマンド全体に適用されます。 |
| `/owg load`・`create`・`unload`・`check` | `oyasai.owg.admin` | OP | 上の `/owg` 権限に加えて必要です。 |
| `/mv` サブコマンド | サブコマンド別 | このプラグインでは未定義 | `multiverse.core.list.worlds`、`multiverse.core.info`、`multiverse.core.create`、`multiverse.core.import`、`multiverse.core.load`、`multiverse.core.unload`、`multiverse.core.spawn.set`、`multiverse.core.modify`、`multiverse.core.entityspawnconfig.modify`、`multiverse.core.gamerule.set` を確認します。既定値はこの実装から確認できません。 |
| `/mvtp` | ワールド別 | このプラグインでは未定義 | 自分の移動は `multiverse.teleport.self.w.<ワールド名>`、他人の移動は `multiverse.teleport.other.w.<ワールド名>` を確認します。 |
| `/mvp` | サブコマンド別 | このプラグインでは未定義 | `multiverse.portal.create`、`modify`、`list`、`info`、`select`、`remove`、`multiverse.portal.givewand` を確認します。`select` には `multiverse.portal.create` も必要です。 |

`/mv`・`/mvtp`・`/mvp` の権限名と既定値は、このプラグインの `plugin.yml` には宣言されていません。権限管理プラグインやサーバー側での実際の解決結果は未確認です。

ポータル通過には権限チェックがありません。上表の `/mvp` 権限は管理操作用です。`/mvtp` のワールド別権限を拒否しても、ポータルからの入場制限には使えません。

## 管理コマンド

### 高さ管理ワールド

| コマンド | 動作・制限 |
|---|---|
| `/owg status` | プラグイン・サーバーの対応状況、自己テスト、各ワールドの期待値と実測値、ロード状態、適用結果、強制ロード中チャンク数を表示します。 |
| `/owg tp [ワールド]` | プレイヤー専用。対象ワールドの `(0.5, spawn-y, 0.5)` へ移動します。引数省略時は設定にある先頭のワールドを使います。移動成功後に設定のゲームモード・飛行可否を適用します。 |
| `/owg load <ワールド>` | 設定済みワールドだけをロードします。安全検査を通過していない起動中、または同じ起動中にロード失敗したワールドは拒否します。 |
| `/owg create <名前> <void-end\|flat>` | 設定追記とワールド作成を行います。名前・既存フォルダ、Purpur 26.2、`self-test: true`、自己テスト通過が必要です。作成値は `min-y=0`、`height=2032`、`logical-height=256`、`spawn-y=64`、ゲームモード `adventure`、飛行可です。自己テスト後、ワールド作成前に設定ファイルへ追記・保存します。 |
| `/owg unload <ワールド>` | 高さ適用成功後、現在の高さが設定と一致する場合だけ `save=true` でアンロードします。フォルダは削除しません。 |
| `/owg check` | 設定を読み直して設定・サーバーバージョン・ロード済み対象の高さ・自己テスト結果を検査します。ワールドをロードしたり修復したりはしません。 |

`void-end` はボイドの `THE_END` ワールド、`flat` はバニラのスーパーフラット `NORMAL` ワールドです。`/owg create` で使える生成種別はこの2つです。設定ファイルでは `void` も `void-end` の互換値として読み取ります。生成器入口 `getDefaultWorldGenerator()` が受け付ける ID は空（null を含む）・`void`・`void-end` だけです。`flat` など他の ID はログに理由を出して `null` を返します。flat は `WorldType.FLAT` を使います。

### 通常ワールド（Multiverse 形式のコマンド）

このプラグインが `/mv`・`/mvtp` を登録するのは、`Multiverse-Core` と `Multiverse-Portals` のどちらも見つからない場合だけです。

| コマンド | 動作・制限 |
|---|---|
| `/mv list`、`/mv info <ワールド>` | 登録済み通常ワールドと高さ管理ワールドを一覧・照会します。 |
| `/mv create <名前> <normal\|flat\|void\|nether\|the_end>` | 新しい通常ワールドを作ります。同名ワールド・キー・フォルダがある場合は拒否します。 |
| `/mv import <名前> <normal\|nether\|the_end>` | 既存フォルダのワールドを登録してロードします。フォルダが必要です。 |
| `/mv load <ワールド>`、`/mv unload <ワールド>` | 通常ワールドをロード、または保存してアンロードします。高さ管理ワールドには `/owg` を使います。 |
| `/mv setspawn` | 登録済みワールドにいるプレイヤーの現在位置をスポーン地点として保存します。ベッド・リスポーンアンカーでのリスポーンは上書きしません。 |
| `/mv modify <ワールド> set <項目> <値>` | `difficulty`、`pvp`、`allow-flight`、`alias`、`keep-spawn-in-memory`、`auto-load` を変更します。 |
| `/mv entity-spawn-config modify <ワールド> <monster\|animal> set spawn <true\|false>` | モンスター・動物のスポーンを変更します。他カテゴリは対象外です。 |
| `/mv gamerule set <ルール> <値> <ワールド>` | ロード済みの通常ワールドのゲームルールを変更します。高さ管理ワールドはこのコマンドで検索されません。 |
| `/mvtp <ワールド>` | 実行者を通常ワールドの保存済みスポーン地点（未設定ならワールドのスポーン地点）、または高さ管理ワールドの `(0.5, spawn-y, 0.5)` へ移動します。高さ管理対象では `/owg tp` と同じ設定適用を行います。 |
| `/mvtp <プレイヤー> <ワールド>` | オンラインのプレイヤーを移動します。移動先と設定適用は上の行と同じです。実行者と対象プレイヤーが同一なら `self`、異なるなら `other` のワールド別権限が必要です。自分の名前を明示しても `self` です。 |

`/mvtp <プレイヤー> <ワールド>` で `[MV] プレイヤーが見つかりません` と出た場合は、指定名とオンライン状態を確認してください。

`/mv modify` の `gamemode`、`generator`、`environment`、`spawn-location`、`monster-spawn`、`animal-spawn` などは対象外です。対象外として実装された項目では `[MV] <項目>: 対象外のため変更しませんでした` と表示します。

### ポータル

`/mvp` も Multiverse が存在しない場合だけ登録します。作成・位置変更・選択には範囲選択が必要です。これらの操作と木の斧配布は、実行時に FastAsyncWorldEdit が有効である必要があります。

| コマンド | 動作 |
|---|---|
| `/mvp create <名前> [移動先]` | 現在ワールドで選択中の直方体を登録します。名前は英数字・`_`・`-`・`.` のみです。既存名との重複は大文字小文字を区別せず拒否します。 |
| `/mvp modify <名前> dest <移動先>` | 移動先を変更します。 |
| `/mvp modify <名前> location` | 現在の選択範囲へポータルの位置を変更します。 |
| `/mvp list [ワールド]`、`/mvp info <名前>` | 登録を一覧・照会します。 |
| `/mvp select <名前>` | 保存済み範囲を WorldEdit/FAWE の選択範囲にします。`multiverse.portal.select` と `multiverse.portal.create` の両方が必要です。 |
| `/mvp remove <名前>` | ポータルを削除します。登録名と同じ大文字小文字で指定してください。 |
| `/mvp wand` | 木の斧を渡します。 |

`/mvp create` で移動先を省略すると空文字で保存され、OWG のポータル移動先として解決されません。`safe-teleport` を変更するコマンドはありません。`portals.yml` を編集した場合、値は起動時の初期化で読むためサーバーを再起動してください。

移動先は `p:<ポータル名>[:n|north|ne|northeast|e|east|se|southeast|s|south|sw|southwest|w|west|nw|northwest]`（別ポータル）または `e:<ワールド名>:<x>,<y>,<z>[:<pitch>:<yaw>]`（座標）です。対象ワールドはロード済みでなければ解決できません。`safe-teleport` は移動先ポータル側の値で、`p:` 形式の移動時だけ安全位置確認に使われます。座標形式には安全位置検査がありません。OWG が移動先を解決できない場合は独自の移動を適用せず、プレイヤーにエラーを返しません。Nether portal ブロック内では vanilla のポータル移動が続く場合があります。

`p:` 形式の安全位置探索は、移動先範囲の X/Z 中央列だけを調べます。足元と頭が固体でも `FIRE` でもなく、直下が固体で、足元がワールド境界内の位置を候補にします。範囲全体を探索したり、溶岩などすべての危険ブロックを除外したりはしません。到着地点の安全は運営が実際に確認してください。

徒歩・乗り物経由の移動には成功後1秒の使用間隔があります。`PlayerPortalEvent` で移動先を書き換える経路にはこの制限がありません。到着したポータルの再発動は範囲外へ出るまで抑止します。乗り物経由では移動するプレイヤーを降ろし、乗り物自体は残します。

## 設定と既定値

プラグインの既定 `config.yml` は次のとおりです。

| キー | 既定値 | 内容 |
|---|---:|---|
| `worlds` | `{}` | 高さ管理するワールド。空なら対象なしです。 |
| `self-test` | `true` | 設定が有効で高さ管理対象がある起動時と `/owg create` 前に高さ適用・保存・再ロードを検査します。`false` では高さ管理対象の新規ロードと `/owg create` を拒否し、すでにロード済みの対象は未検証のまま保持します。対象がない起動時はテストをスキップします。 |
| `clear-force-loaded-chunks` | `false` | `true` の場合、高さ検証に通った対象ワールドの強制ロード中チャンクを解除します。起動時ログに `[OWG][forceload] Explicitly clearing ...` が出ます。 |

各 `worlds.<名前>` の設定です。実際の有効高さは `[min-y, min-y + height)` で、上端は含みません。

| キー | 既定値 | 有効条件・内容 |
|---|---:|---|
| `generator` | `void` | `void` / `void-end` は `THE_END` のボイド、`flat` は `NORMAL` のスーパーフラットです。 |
| `min-y` | `0` | 16 の倍数かつ `-2032` 以上。 |
| `height` | `0` | 正数かつ16の倍数。`min-y + height` は `-2032` 以上 `2032` 以下。既定の `0` は無効なので、ワールドを定義する場合は必ず指定してください。 |
| `logical-height` | `height` | 正数で `height` 以下。 |
| `spawn-y` | `min-y` | `min-y <= spawn-y < min-y + height`。 |
| `gamemode` | `adventure` | Bukkit のゲームモード名。 |
| `allow-flight` | `false` | `/owg tp` または高さ管理対象への `/mvtp` 成功後に適用する飛行可否。`true` は飛行許可だけで、飛行開始はしません。 |

ワールド名は英数字・`_`・`-`・`.` のみ受け付けます。`worlds` セクション自体がない場合、設定エラーとなり対象ワールドを読み込みません。不正なワールド項目は設定一覧から外しますが、エラーとして残り、起動時の安全ゲートはすべての高さ管理ワールドのロードを拒否します。`/owg check` も NG になります。設定を手で変更したときは、ワールドの初期化より前に値を適用するためサーバーを完全再起動してください。

通常ワールドの `normal-worlds.yml` に保存する項目は、ワールド名ごとに `key`、`environment`、`generator`、`kind`、`difficulty`、`pvp`、`allow-flight`、`monster-spawn`、`animal-spawn`、`spawn`、`alias`、`keep-spawn-in-memory`、`auto-load` です。`NormalWorld` の初期値は、`environment=normal`、`generator` 空文字、環境から決まる `kind=normal`、`difficulty=normal`、PVP可、飛行不可、モンスター湧き可、動物湧き可、スポーン未指定、別名なし、スポーンチャンク保持、自動ロードです。`/mv create`・`/mv import` では種別の引数が `environment` と `kind` を決めます。キーはコマンドで新規登録すると `minecraft:<小文字名>` になります。`kind` は `normal`・`flat`・`void`・`nether`・`the_end`。通常・flat・void は `normal` 環境、nether と the_end は対応する環境でなければ読み飛ばされます。

通常ワールドの `allow-flight` は参加・ワールド移動後と、ロード済みワールドへの設定適用時に反映します。Spectator は値に関係なく飛行許可・飛行中になります。`true` は Creative に飛行許可を設定しますが、Survival・Adventure には新たな許可を与えず、既存の許可を維持します。`false` は Creative・Spectator 以外の飛行を解除します。スポーン設定がある場合、ベッド・リスポーンアンカー以外のリスポーン先をその位置にします。

`/mv modify` は台帳を保存し、ロード済みワールドへ難易度・PVP・スポーン等と飛行制御を適用します。ただし `keep-spawn-in-memory` は `WorldCreator` に渡す設定で、ロード済みワールドのチャンク保持を変更せず、次回ロード時に反映します。`auto-load` は次回の起動時自動ロードに使います。

高さ管理対象は通常ワールドの飛行イベント処理から除外します。高さ用のゲームモード・飛行設定を適用するのは `/owg tp` と高さ対象への `/mvtp` の成功時だけで、ポータルや他プラグインからの入場では適用しません。ボイドには足場を生成しません。退出時に入場前の状態を復元する処理もなく、退出先が通常ワールドならその飛行制御を受けます。

`portals.yml` は `portals.<名前>.location`、`action.type`、`action.value`、`safe-teleport` を保存します。`action.type` は `multiverse-destination`、`safe-teleport` の既定は `true` です。

## 保存場所・起動・移行

| データ | 保存場所 |
|---|---|
| 高さ管理設定 | `plugins/OyasaiWorldGenerator/config.yml` |
| 通常ワールド台帳 | `plugins/OyasaiWorldGenerator/normal-worlds.yml` |
| ポータル台帳 | `plugins/OyasaiWorldGenerator/portals.yml` |
| ワールド本体 | Bukkit/Paper が使用する各ワールドフォルダ |

通常ワールドの既存フォルダは、主ワールド（キー `minecraft:overworld`）から求めた保存ルートの `dimensions/<namespace>/<key>` です。主ワールドのパスが `dimensions/minecraft/overworld` ならその3階層上、それ以外なら主ワールドのパス自体を保存ルートとします。新規登録名 `Example` のキーは `minecraft:example` となり、`/mv import` が探すのは `dimensions/minecraft/example` です。表示名とフォルダ名が異なる場合があります。

`normal-worlds.yml` の再読込コマンドはありません。手動編集はサーバー再起動で反映してください。`/owg check` が再読込するのは高さ用 `config.yml` だけです。

このプラグインはデータベースを使いません。`normal-worlds.yml` と `portals.yml` は一時 YAML ファイルへ保存後、原子的な置換を試みます。保存失敗時にメモリ上の変更を巻き戻す処理はありません。YAML 自体の一時ファイル保存に失敗すると `.tmp` が残る場合があります。再起動後に台帳ファイルの内容とログを確認してください。`/mv gamerule` は台帳 YAML には書きません。

起動時、対応サーバー・設定検証・自己テストが通ってから高さ管理ワールドをロードします。高さを変更できる対象は Purpur 26.2 だけです。起動ログの `[OWG][startup]`、`[OWG][self-test]`、`[OWG][lifecycle]`、`[OWG][height]` を確認し、`/owg status` と `/owg check` で実測状態を確認してください。

`[OWG] Normal world registry failed` が出た場合は通常ワールド台帳の初期化に失敗しており、OWG の `/mv`・`/mvtp` は登録されません。`[OWG] Portal registry failed` の場合は `/mvp` が登録されません。`[OWG] Listener registration failed` や `[OWG] Command registration failed` が出た場合は、例外ログを確認し、`/owg` の利用可否も確かめてください。

自己テスト用の `owg_selftest` ワールドまたは許可された保存先フォルダが起動前からあると、再利用も削除もせずテストを失敗させます。削除処理に失敗した場合やアンロードできなかった場合も、フォルダが残り得ます。その場合の手動復旧手順はコードにありません（未確認）。自己テストが失敗した起動では対象ワールドの新規ロードを行わず、既にロード済みの対象も未検証のまま保持します。

高さ適用失敗・検証失敗時はワールドをアンロードしません。未検証のワールドを保存してデータを壊すことを避けるための動作です。対象はその起動中に再ロードされず、`/owg unload` も高さを照合できない場合は拒否します。外部要因で先にロードされた対象も `WorldInitEvent` で適用を試みますが、ログに `EXTERNAL PRELOAD` と記録します。

安全検査は入場制限ではありません。有効な高さ設定に残りロード済みなら、`/owg tp` と高さ対象への `/mvtp` は起動検査・失敗ワールド集合・高さ照合結果を確認せず移動できます。ポータルも高さの安全ゲートを参照しません。検査失敗を利用停止と扱う場合は、運営が別途入場を止めてください。

高さ管理対象ゼロで起動すると `self-test=NOT_RUN`、安全ゲート未通過になります。その後 `/owg create` が自己テストと作成に成功しても、起動時の自己テスト結果と安全ゲートは更新されません。作成したワールドをアンロードすると `/owg load` は拒否され、`/owg check` でも `NOT_RUN` のまま合格しません。有効な対象設定と `self-test: true`、対応サーバーで完全再起動し、起動検査が通ることを確認してください。

### Multiverse 形式データからの初回取り込み

Multiverse-Core または Multiverse-Portals のプラグインが検出されると、OWG の通常ワールド・ポータル管理は初期化されず、`/mv`・`/mvp` も登録されません。取り込み処理は両プラグインがどちらも見つからない場合だけ実行します。

- `normal-worlds.yml` がまだない場合だけ `plugins/Multiverse-Core/worlds.yml` を読み、`minecraft:` キーの登録から名前・キーと対応する設定値を取り込みます。非 minecraft 登録、無効名、重複名、高さ管理対象との重複は読み飛ばします。ワールドフォルダ自体はコピーしません。以後は `normal-worlds.yml` が正本です。
- `portals.yml` がまだない場合だけ `plugins/Multiverse-Portals/portals.yml` を読みます。対応する移動先アクションのみ取り込み、未対応アクションや不正範囲は読み飛ばします。元ファイルは削除・変更しません。
- いずれも新しい台帳ファイルがすでに存在すると旧ファイルを読みません。移行前に旧台帳・新台帳・ワールド本体を運営側でバックアップしてください。

通常ワールドの自動ロードは、既定ワールドのロード完了後に行います。`auto-load: false` の未ロードワールド、対応フォルダがないワールド、高さ管理ワールドとの重複は飛ばします。Multiverse 由来で旧台帳にあった他の機能設定は移行しません。

`/owg create` は自己テスト通過後に設定を保存してからワールドを作成します。後続の作成・高さ検証に失敗しても設定項目は自動削除されず、部分作成されたワールドも自動削除しません。`/mv create`・`/mv import` は台帳へ登録してからロードを試みます。失敗時、対象フォルダが残っていれば登録も残ります。設定・台帳・フォルダを個別に照合してください。

通常ワールドのロード失敗は `[MV] <ワールド> を読み込めませんでした。フォルダとログを確認してください`、アンロード失敗は `[MV] <ワールド> をアンロードできませんでした。プレイヤーが残っていないか確認してください` と表示します。後者の文言は確認候補であり、コードは失敗原因を判定していません。

## 障害対応と保証範囲

| 表示 | 対応 |
|---|---|
| `[OWG] NG: 対応対象は Purpur 26.2 のみです` | 対応外サーバーです。高さ管理ワールドのロード・作成は進みません。 |
| `[OWG] NG: 設定不正 (<validationErrors>)` | 高さ設定のエラーを修正して再起動してください。 |
| `[OWG] 安全検査を通過していないためロードしません` | `/owg check` が成功する状態まで、手動ロードを拒否しています。 |
| `[OWG] 自己テストに失敗したため作成しません` | `/owg create` 前の試験に失敗しました。起動ログの `[OWG][self-test]` を確認してください。 |
| `[OWG] <ワールド> は高さを照合できないためアンロードしません (applied=<値> verified=<値>)` | 現在の高さが未検証です。ワールドはロード状態のままです。 |

- 高さ適用は Purpur 26.2 の `THE_END` / `NORMAL` に限られます。実装は DimensionType、ServerLevel、Starlight の高さ情報を変更し、各書き込みを読み返して照合します。適用中に失敗した場合は保存した値への復元を試み、復元も失敗したら severe ログを出して未検証アンロードを拒みます。
- `self-test` は対象高さで一時ワールドを作成し、上下端近くのブロックを保存・再ロードして残存を調べます。すべてのワールド操作・他プラグインとの競合・長期運用を保証するものではありません。
- 外部プラグインによる先行ロードは検知してログに残し、初期化イベントで高さ適用を試みます。起動前の全プラグイン順序・他プラグインが持つ高さ情報まで保護できることはテストされていません。
- ポータル移動先のワールドロード、座標の安全性（座標形式）、不正な移動先の修復は行いません。プレイヤーには失敗理由を返しません。
- YAML 保存失敗後にメモリ上だけ残った変更の復旧、サーバー再起動をまたぐポータル・移動の実動作はゲーム内で未確認です。

他プラグインとの連携は [PROJECT.md](PROJECT.md) の「外部 API・依存」を参照してください。
