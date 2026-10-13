---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiVehicles/（コードから作成。レビュー指摘をコードと照合済み。ゲーム内での確認は未実施）
---

# OyasaiVehicles の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、内部仕様は [PROJECT.md](PROJECT.md) を参照してください。

## 権限

| 権限 | 既定 | できること |
|---|---|---|
| `oyasaivehicles.admin` | OP | 管理コマンド、車・飛行機の利用・作成・乗車、購入車両数上限の免除。plugin.yml では下表の権限を子権限に持つ |
| `oyasaivehicles.carbuilder2.use` | false | CarBuilder2 の直接コマンドによるメニュー・購入・情報表示。子権限として作成・乗車も許可 |
| `oyasaivehicles.carbuilder2.use.create` | false | CarBuilder2 の新規車両作成 |
| `oyasaivehicles.carbuilder2.use.ride` | false | CarBuilder2 の試乗・乗車・アイテムからのスポーン |
| `oyasaivehicles.aircraftbuilder.use` | false | AircraftBuilder の直接コマンドによるメニュー・購入・情報表示。子権限として作成・乗車も許可 |
| `oyasaivehicles.aircraftbuilder.use.create` | false | AircraftBuilder の新規機体作成 |
| `oyasaivehicles.aircraftbuilder.use.ride` | false | AircraftBuilder の試乗・乗車・アイテムからのスポーン |
| `oyasaivehicles.vehicle.unlimited` | false | 購入車両の同時スポーン数上限を免除 |
| `oyasaivehicles.vip.car.smoke` | false | `/realvehicle vip car_smoke` の利用 |

`/realvehicle` の総合メニューと、そこから開くビルダー GUI は `use` 権限を確認しません。GUI 内の購入・性能カスタムも確認しません。GUI 試乗は直接コマンドを実行するため乗車権限を確認します。両ビルダーの自動搭乗には乗車権限の確認がありません。権限を外すだけでは購入・カスタム・搭乗の全経路を止められません。

コード上の管理者判定は OP または `oyasaivehicles.admin` です。既存車両の編集・削除は、設定に保存された所有者 UUID または管理者に許可されます。設定に所有者 UUID がない、または UUID として読めない場合、プレイヤーは誰でも編集者として通ります。新規データの保存完了時に作成者 UUID が記録されます。

`oyasaivehicles.vehicle.unlimited` は購入車両数の制限だけに使われます。設計エンティティ数上限を迂回する判定はスポーン対象プレイヤーの `isOp` です。非 OP の `oyasaivehicles.admin` 保有者が非 OP のプレイヤーを対象にした場合は上限を迂回しません。運営用コマンドの権限はコマンドごとにコード側で判定され、plugin.yml に各コマンドの `permission` はありません。

## 管理コマンド

### 共通管理

| コマンド | 動作 |
|---|---|
| `/realvehicle admin eventmode`（別名: `/rvmenu admin eventmode`） | イベントモードを切り替えます。状態はメモリ上のみで、再起動後は無効に戻ります。 |
| `/realvehicle admin ubc` | `UnderBlockIsSpeed.yml` を読み直し、認識した Material 数を `UnderBlockIsSpeed.yml reload! load Material=> <数>` と表示します。 |
| `/realvehicle admin reload [all\|config\|vehicles]` | `config` はプラグイン設定と路面設定を再読込。`vehicles` は車両データキャッシュの再読込を開始。`all` または引数なしは両方を実行します。`vehicle` もコード上は `vehicles` と同じ対象です。 |
| `/milepoint add <amount> [player]` | 管理者用。オンラインプレイヤーのポイントを加算・減算します。プレイヤー送信者は対象を省略すると自分が対象ですが、コンソールは対象名が必要です。数値は負数も受け付けます。 |
| `/milepoint check <player>` | 管理者用。オンラインプレイヤーのポイントを表示します。 |

イベントモードは通常の明るさ更新、車輪アニメーション、車の前方 LIGHT ブロック更新を抑止します。走行、音、煙、ライト用素材・ブレーキ・ウインカーの表示処理は引き続き動きます。既に置いた LIGHT の即時撤去を行う切替ではありません。

`vehicles` の実行時表示は `[OyasaiVehicles] 車両データの再読込を開始しました` です。完了通知ではありません。完了時はログに `Load CarBuilder2 completion!`、`Load AircraftBuilder completion!` が出ます。`all` の設定再読込は `[OyasaiVehicles] 設定を再読込しました (UnderBlock=<数>)` を返します。

再読込は既存車両を作り直しません。キャッシュを新しい基礎データに差し替えても、出ている車両の `baseData` は交換されません。設定・schematic を確実に反映するには、対象車両を終了し、再読込の完了ログを確認してから出し直します。

### 車両データの作成・管理

新規データの `save` は WorldEdit clipboard を使うためプレイヤー専用です。非プレイヤー送信者は保存処理から戻り、結果メッセージも出しません。車両名に使える文字は ASCII 英数字と `_` だけです。既存データの設定変更・削除は所有者または管理者の判定を通り、管理者コマンドは一律にプレイヤー専用ではありません。新規データ作成には対応する `use.create` が必要です。

| コマンド | 用途・制約 |
|---|---|
| `/cbmenu <name> save <body\|wheel\|wheel2\|headlight> [size]` | FAWE/WorldEdit の clipboard を保存し、指定パーツの schematic を更新します。 |
| `/cbmenu <name> size <type> <value> [auto]` | `body`・`wheel`・`wheel2`・`headlight` のサイズ変更。`body` に `auto` を付けると関連する保存済み offset/size も倍率変更します。 |
| `/cbmenu <name> offset <body\|seat\|wheel\|wheel2\|headlight> <index> <x> <y> <z>` / `... del` | パーツまたは座席の offset を設定・削除します。 |
| `/cbmenu <name> headlight angle <value>` / `headlight rotateoffset <x> <y> <z>` | ヘッドライトの角度・回転 offset を設定します。 |
| `/cbmenu <name> sound <name>` / `spring <value>` | エンジン音設定・サスペンション相当の値を設定します。 |
| `/cbmenu <name> info` / `delete` | データの表示・削除。削除は設定ファイルと車両フォルダを削除します。 |
| `/cbmenu <name> machineset <topSpeed> <power> <brake> <gears> <grip> <isMT> [mode] [player\|direction]` | 管理者用に性能を指定してスポーンします。`mode`: `Normal`, `Normal_Race`, `Pro`, `Pro+`, `Real`。通常はオンラインのプレイヤー名を指定します。プレイヤーが5ブロック以内のコマンドブロックを見て実行する場合、またはコマンドブロックから実行する場合は方角を指定し、発信元近くのプレイヤーにスポーンします。コンソールからはオンラインプレイヤー名を指定します。 |
| `/cbmenu <name> eventcar <costLimit>` | 管理者プレイヤーにイベント用車両を渡します。`costLimit` は 1 以上。カスタム時にポイントを消費しません。 |

| コマンド | 用途・制約 |
|---|---|
| `/acmenu <name> save [size]` | FAWE/WorldEdit の clipboard を機体 schematic として保存します。引数はサイズとして読み取られますが、現行の schematic 保存処理では使われません。 |
| `/acmenu <name> size <value>` / `offset <body\|seat> <index> <x> <y> <z>` / `... del` | 機体サイズ・本体または座席 offset を設定します。 |
| `/acmenu <name> info` / `delete` | データの表示・削除。 |
| `/acmenu <name> machineset <topSpeed> <power> <brake> <player\|direction>` | 管理者用の性能試乗機をスポーンします。プレイヤー指定時はオンラインプレイヤー名、コマンドブロックからは方角を使います。 |
| `/acmenu <name> eventcar <costLimit>` | 管理者プレイヤーにイベント用機体を渡します。`costLimit` は 1 以上。カスタム時にポイントを消費しません。 |

車の `machineset` は、プレイヤーが対象を省略した場合だけ所有者なし試乗です。プレイヤー名・方角で対象を指定すると、その対象者が owner と summoner の両方になり、終了時には性能設定済みアイテムが返却されます。この経路では6台制限を確認せず、通常の試乗置換にも入りません。飛行機は対象指定時も所有者なし試乗です。飛行機の対象省略は自分へのスポーンにならず、車両が出ないまま成功メッセージだけが表示されます。

車体の `save body` はスケルトンの頭（壁付きも含む）から `Wheel`、ゾンビの頭から `Wheel2`、クリーパーの頭から `HeadLight` の offset を生成します。マーカーがある種類の既存 offset 全体を置換し、マーカーは車体表示から除外します。該当種類のマーカーがなければ既存 offset は残ります。再保存前に YAML と schematic を退避してください。

車の `save [size]` は車体マーカーの offset 計算にだけ使い、設定の `Size` は変更しません。表示サイズは `size` コマンドで変更します。`vehicleSizeLimit` は `size` コマンドの上側だけを制限し、0・負数の拒否やスポーン時のサイズ検証はありません。座席を設定する場合は番号0を残してください。座席が一つもなければ0を補いますが、他番号だけがある場合は運転者を取得できません。

CarBuilder2 の `machineset` は `isMT` に `true`/`false` を指定します。性能値の範囲は最高速 1〜180、パワー・ブレーキ 1〜1000、ギア数 1〜100、タイヤ 1〜200 です。AircraftBuilder は最高速 1〜180、パワー・ブレーキ 1〜1000 です。AircraftBuilder の `machineset` はサーバーコンソールからも実行できます。`eventcar` はどちらのビルダーも管理者プレイヤー専用です。

### タイムアタック計測

プレイヤーは `/timeattack <コース名>` で自分の記録を表示します。計測操作はコマンドブロックから行い、近くに運転者が乗った CarBuilder2 車両が必要です（コードの検索指定値は X/Z=4.0、Y=5.0）。

```text
/timeattack <コース名> start <中間区間数N>
/timeattack <コース名> sector <区間番号>
/timeattack <コース名> lap <次周の中間区間数N>
/timeattack <コース名> goal <数値>
```

`start N` で開始地点の時刻が1個入ります。中間地点に `sector 1` 〜 `sector N` を順に置き、最後に `goal` または `lap` を置くと、ゴールまで含めて **N+1区間**を計測します。例: `start 2` → `sector 1` → `sector 2` → `goal 2` は3区間です。`sector` は現在の記録時刻数と番号が一致する場合だけ記録します。完走条件は開始時のNで決まり、`goal` の数値引数は完走判定に使いません。

`lap` は完走の成否にかかわらず指定Nで再開始を試みます。中間地点を一つ以上通過していれば、未完走でも再開始できます。開始直後（時刻が1個だけ）は `start`・`lap` による再開始ができません。性能コストが変わると計測データを作り直します。該当車両や運転者がいない、または区間順が合わない場合は通知されません。

コスト区分は0〜50が `CP:50`、51〜100が `CP:100`、101〜9999が `(cost / 100 + 1) * 100` です。200など100の倍数も次の区分（200なら `CP:300`）に入ります。負数・10000以上は `CP:Minus`。記録を保存しても `CP:Minus` や表示一覧外の区分は自己ベスト表示に出ません。

## 設定と既定値

### `config.yml`

| 項目 | 同梱値 | 動作 |
|---|---:|---|
| `totalEntityLimit.oyasaivehicles1500` | 1500 | `oyasaivehicles1500` 権限を持つスポーン対象プレイヤーに選ばれる上限値です。 |
| `totalEntityLimit.default` | 1000 | コードは `default` も権限名として `hasPermission("default")` で確認します。設定済みキーのうち一致した最大値を使い、どのキーにも一致しなければ上限は 0 です。 |
| `upgradeCostLimit` | -1 | 負数のとき、通常車両のカスタム上限は `(累計走行距離 / 1000).toInt() + 10`。0 以上ならその値を上限にします。イベント車はアイテムの `CostLimit` を使い、ポイントを消費しません。 |
| `vehicleSizeLimit` | 100 | `size` コマンドの上側の上限。0・負数の入力やスポーン時の検証はしません。読み込み値は 0 未満にならないよう処理されます。 |
| `vehicleTuning.car.overspeedFriction` | 0.995 | 車の速度超過時の摩擦係数。読み込み時に 0〜1 に収めます。 |
| `vehicleTuning.car.coastFriction` | 0.99 | 車の惰性摩擦係数。設定キーがないときのコード既定値は 0.6 です。 |
| `vehicleTuning.car.turnFriction` | 0.9965 | `Normal` / `Normal_Race` だけで使う旋回摩擦係数。`Pro` / `Pro+` / `Real` には適用されません。0〜1。 |
| `vehicleTuning.car.brakeMultiplier` | 1.12 | 車のブレーキ倍率。0 未満を 0 にします。 |
| `vehicleTuning.aircraft.coastFriction` | 0.9925 | 読み込みのみ。現行の飛行処理では未参照で、惰性計算は固定値。0〜1。 |
| `vehicleTuning.aircraft.turnFriction` | 0.99 | 読み込みのみ。現行の旋回処理では未参照で、固定式を使用。0〜1。 |
| `vehicleTuning.aircraft.brakeMultiplier` | 1.15 | 読み込みのみ。現行のブレーキ処理では未参照で、固定式を使用。0 未満を 0 にします。 |

スポーン上限はスポーン対象プレイヤーの権限に応じて設定値の最大を選びます。`totalEntityLimit` が存在しない場合だけメソッドの戻り値は 1000 です。実際の同梱設定にはこの節があるため、設定キーの権限に一つも一致しない場合に 0 になる（`default` に一致すれば同梱値は1000）点を確認してください。スポーン対象プレイヤーが OP の場合は設計エンティティ数上限を迂回します。

`UnderBlockIsSpeed.yml` は同梱 `config.yml` とは別の YAML です。トップレベルに Material 名と数値を置きます。未登録 Material は 1.0、値は 0 未満にならないように扱われます。`/realvehicle admin ubc` で再読込できます。`/realvehicle admin reload config` でも設定と一緒に再読込されます。

### 車両ごとの設定

値はビルダーごとの YAML に保存されます。offset が未設定の箇所はコード側の既定値を使います。

| ビルダー | キー | 既定値 |
|---|---|---:|
| CarBuilder2 | `Body.Size` | 3.5 |
| CarBuilder2 | `Wheel.Size`, `Wheel2.Size` | `Body.Size / 7` |
| CarBuilder2 | `HeadLight.Size` | `Body.Size / 28` |
| CarBuilder2 | `Body.Offset`, `HeadLight.rOffset` | (0, 0, 0) |
| CarBuilder2 | `HeadLight.Angle` | 45.0 |
| CarBuilder2 | `Spring` | 0.1 |
| CarBuilder2 | `Sound` | `entity.minecart.riding` |
| AircraftBuilder | `Body.Size` | 7.0 |
| AircraftBuilder | `Body.Offset` | (0, 0, 0) |
| AircraftBuilder | `Body.Rotate` | 0.0（現状、スポーン処理で参照されません） |
| 両方 | `Seat.<番号>` | 未設定時は運転席を (0, 0, 0) に 1 つ作成 |

パーツ配置は `Body.Offset`、`Wheel.Offset.<番号>`、`Wheel2.Offset.<番号>`、`HeadLight.Offset.<番号>` などに保存されます。AircraftBuilder は `Body.Offset` と `Seat.<番号>` を使います。保存済みの値は size 変更などで変わる場合があるため、編集前にバックアップしてください。

## データ保存場所

以下はすべてプラグインのデータフォルダ配下です。

| パス | 内容 |
|---|---|
| `config.yml` | 上記の共通設定 |
| `UnderBlockIsSpeed.yml` | Material ごとの路面補正値 |
| `NetworkModeSetting.yml` | プレイヤー UUID ごとの表示更新モード。初期値は 0 (`Ultra`) |
| `VehicleGarage/<UUID>.yml` | `ItemSize` と 1 始まりのスロット番号で保存した車両アイテム。初期サイズは 54 |
| `MileagePoint/<UUID>.yml` | `NowPoint` (0)、`Mileage` (0.0)、`FirstBonus` (false)。ドリフト煙の色も `CarSmoke` に保存 |
| `TimeAttackData/<コース名>/<UUID>.yml` | `CP:<区分>.BEST.Time` と `BEST.Day` |
| `CarBuilder2/<名前>/<名前>.yml` | 車の所有者 UUID、サイズ、offset、座席、音など |
| `CarBuilder2/<名前>/<名前>_<body\|wheel\|wheel2\|headlight>.schem` | 車体・パーツの schematic |
| `AircraftBuilder/<名前>/<名前>.yml` | 機体の所有者 UUID、サイズ、offset、座席など |
| `AircraftBuilder/<名前>/<名前>.schem` | 機体 schematic |

通常のポイント増減・購入・カスタムによる支払いはメモリ上だけで、ポイントと累計距離は退出・プラグイン停止時に保存します（初回ボーナスは参加時に即時保存）。ガレージは GUI を閉じるとき・退出・停止時に保存し、オンライン車庫への自動返却はその場では保存しません。オフライン所有者への車庫返却はその場で保存します。ネットワーク設定はプラグイン停止時だけ保存します。強制停止では未保存の残高・距離・返却品・表示設定変更が失われ、支払いが戻る場合もあります。通常停止と保存ログを確認してください。

運転者の距離ポイントは `floor(距離 / 250 × 2)`、同乗者は `floor(距離 / 250)`。乗車分の精算ごとに端数を切り捨て、累計距離は別に保持します。ワールド変更・1tickで16mを超える移動は加算しません。

SQLite や外部の経済データベースは使いません。タイムアタックは `CP:50` から `CP:2500` までの区分を表示対象にしています。コース名を変えても旧フォルダは移動されません。

## 起動・移行・障害時の注意

- 起動時に `saveDefaultConfig()` を実行し、車両データのディレクトリを非同期で走査します。空のデータ（有効な schematic からブロックを読めないもの）はキャッシュに入りません。
- ビルダーの schematic は FastAsyncWorldEdit/WorldEdit の clipboard から保存します。`WorldEdit.getInstance()` が null の場合はログに `[CarBuilder2] WorldEdit読み込み失敗` / `[AircraftBuilder] WorldEdit読み込み失敗` が出て、保存時は `WorldEdit読み込み失敗` と表示されます。WorldEdit クラス自体がない場合のクラス解決エラーは捕捉しておらず、未導入時にこの警告で処理される保証はありません。読み込み不備・不明な形式ではデータがロードされないことがあります（読込例外は stack trace を出します）。
- schematic 書き込みや非同期読込の例外で完了処理へ到達しないと、保存中フラグが解除されません。同じプレイヤーによる同じビルダーの再保存が、車両名を変えても `Saving process is already running` で拒否され続ける場合があります。ログと保存先のファイルを確認し、原因を解消してください。車両データの再読込だけではこのフラグを解除しません。
- 移行専用コード、データ版番号、旧フォルダからのコピー処理は見当たりません。フォルダ名や保存形式を変える前に、上表のデータ一式を退避してください。旧形式からの互換性は未確認です。
- `/realvehicle admin reload vehicles` はバックグラウンドの読込開始を返すだけです。完了ログを待ってください。再読込中の削除・保存との競合時の結果は実機で確認していません。
- YAML 保存時の `IOException` は `Could not save config to <file>` とログに記録されますが、`CustomYaml.save()` は呼び出し元へ失敗を返しません。そのためゲーム内の成功表示が出ても、ディスク保存を確認できたことにはなりません。
- 車両終了時、購入品はオンライン所有者のインベントリへ返り、空きがなければガレージへ送られます。オンライン中にガレージも満杯ならアイテムを足元へ落とします。オフライン所有者のガレージが満杯の場合は、コード上はリスト末尾に追加して保存します。
- ログアウトによる終了は、退出者がその時点で対象車両に搭乗し、かつ召喚者である場合だけです。降車済み召喚者・他人の車両の乗客の退出では終了しません。車両エンティティのチャンクアンロード、プラグイン停止で車両を終了する経路があります。停止時は車両アイテム返却後にオンラインプレイヤーのガレージ・ポイント等を保存します。
- `MileagePoint`、ガレージ、モード設定、タイムアタックの各 YAML 保存失敗は、ゲーム内処理を取り消すトランザクションではありません。ログを確認し、実データの残高・アイテム・記録を照合してください。
- `delete` のファイル削除に失敗した場合、AircraftBuilder は警告を記録してもキャッシュからデータを外します。CarBuilder2 は削除成功時だけキャッシュから外し、失敗時はプレイヤーへの詳細表示がありません。

## 守られる範囲・守られない範囲

- 座席の右クリック、試乗コマンド、購入車両アイテムからのスポーンは、各ビルダーの乗車権限で判定します。自動搭乗では判定しません。クルーズ切替は前進速度0.05以上で、S系のブレーキ入力で解除します。前後速度が -0.05〜0.05 のとき、空席付近の接地中・非スニークのプレイヤーを自動搭乗させます。所有者なし試乗は、召喚者ごと・ビルダーごとに直前の1台を置換します。車両アイテムに記録された購入者名は表示用で、所持者本人だけに制限する判定はありません。
- ガレージから出せる購入車両は通常 6 台までです。カウントは車両の所有者 UUID を使い、`oyasaivehicles.vehicle.unlimited` があれば上限を無視します。
- 車両の ArmorStand は攻撃ダメージを受けないよう処理されます。ただし空席の運転席が攻撃された場合、乗り物を終了する分岐があります。終了した車両は所有者へ返却処理されます。
- 本プラグインは車両やアイテムのエリア保護、プレイヤー間の所有権確認、他プラグインの保護領域連携を実装していません。乗車権限を持つプレイヤー間で車両を共有しない保証はありません。
- 設計エンティティ数上限はスポーン条件、サイズ上限は `size` コマンドの編集条件です。ワールドの負荷、他プラグインによるキャンセル、実機での動作までは保証しません。

## 他のプラグインとの連携

- `FastAsyncWorldEdit` は `softdepend`、FAWE Bukkit API は `compileOnly` です。ビルダーの schematic 保存・読み込みに WorldEdit API を使います。
- 購入ポイントはプラグイン内の `MileagePoint` で管理します。Vault 等の経済 API、外部 DB、プレースホルダー連携はコード上確認できません。
- パケットのメタデータ制御や乗客同期は Paper/Purpur の CraftBukkit/NMS API を使います。異なるサーバーバージョンでの互換性は未確認です。

