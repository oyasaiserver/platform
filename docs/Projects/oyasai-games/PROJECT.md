---
title: "OyasaiGames — ゲーム・武器統合プラグイン"
category: platform
status: active
source: plugins/OyasaiGames/（コードから作成。ゲーム内での確認は未実施）
source_of_truth: "plugins/OyasaiGames/"
related_paths:
  - plugins/OyasaiGames/README.md
  - plugins/OyasaiGames/src/main/resources/plugin.yml
  - plugins/OyasaiGames/build.gradle.kts
  - plugins/OyasaiGames/LICENSE-TNTRUN.txt
  - packages/oyasai-plugins.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
agent_task: null
---

# OyasaiGames

OyasaiGames は、ミニゲーム・武器・生活アイテムをまとめた Bukkit/Paper 系プラグインです。ユーザー向けの手順は [player.md](player.md)、権限・設定・運用時の復旧は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-games/operator.md) を参照してください。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiGames/`。プラグイン記述子は `src/main/resources/plugin.yml`（`paper-plugin.yml` はありません） |
| 主要コード | 起動・再読み込み: `src/main/java/icu/oyasai/games/OyasaiGamesPlugin.java`。各機能: `src/main/kotlin/icu/oyasai/games/`。ルーレット: `src/main/java/icu/oyasai/games/roulette/` |
| テスト | `src/test/`。設定、ルール、データ形式・復旧補助、武器定義などの単体テスト。実行: `gradle :plugins:OyasaiGames:test` |
| ビルド | `nix develop --command gradle :plugins:OyasaiGames:build`。ルートの `build` は `shadowJar` を含む |
| Nix package | `packages/oyasai-plugins.nix` がプラグイン JAR を集約し、派生属性 `oyasaigames` を公開する。出力名は `OyasaiGames.jar` |

## 技術仕様

### 構成と起動

- Java はプラグイン本体、共通メニュー、ルーレットを実装します。Kotlin は BedWars、Dice、HeadHunt、肝試し、PvP、Slot、Tank、TNTRun、Toys、Weapons の機能を実装します。
- 起動時に `config.yml` を保存・読み込み、機能を初期化します。`games.headhunt.enabled`・`games.slot.enabled`・`games.weapons.enabled`・`games.pvp.enabled`・`games.tntrun.enabled`・`games.roulette.enabled` は同梱既定で有効、`games.bedwars.enabled` と `games.tank.enabled` は無効です。Dice・肝試し・Toys には同様の有効化スイッチがありません。
- 初期化順は `OyasaiGamesPlugin.onEnable` が正本です。各機能は外部プラグインとの競合や依存を個別に確認します。肝試し・Toys の初期化には個別の try/catch がなく、SQLite 接続・対象 Skript CSV の解析などの例外が onEnable へ伝播すると起動処理が途中で失敗します。後続の Dice・ハブ登録は実行されず、初期化済み機能の最終状態はサーバー側依存で未確認です。
- `/games reload` はルート設定を読み直します。Slot と Weapons を再設定し、PvP・BedWars・TNTRun を停止して再初期化し、ルーレット設定と候補を再読込します。HeadHunt・Dice・肝試し・Toys は再初期化しません。起動時に無効だったルーレットを再有効化する用途にも使えません。

### 主要処理の流れ

- **ルーレット:** GUI で抽選条件を選択し、材料候補を分類してランダム抽選します。結果は Bukkit スケジューラーで順次表示します。選択内容、実行中タスク、完了後の待ち時間はメモリ上にあります。
- **Dice:** アイテムに種類・個数と公開/非公開の真偽値を保持します。公開チャットの通知範囲は同ワールドの周囲30ブロック固定です。チャージ操作後に表示エンティティを動かし、停止・回収・時間切れで所有者へ返却します。結果は物理的な出目からではなく、停止時に乱数で決めます。
- **HeadHunt:** 宝HEADの配置を登録・検証し、ブロックの TileState に宝UUIDを保存します。開始時に宝と参加チームを検証し、ゲーム中の発見状況をメモリで管理します。
- **Tank（試作）:** `tank/`。実車 10 種（第二次大戦の `light` M24 チャーフィー、`sherman` M4A3(75)W シャーマン、`t34` T-34-85、`medium` パンターG型、`heavy` ティーガーI、`pz3` III号戦車 N型、`hago` 九五式軽戦車 ハ号、`chiha` 九七式中戦車 チハ（新砲塔）、戦後の `type90` 90式戦車、`type10` 10式戦車。ほかに `heavy` と同じ諸元で見た目だけ違う `tiger`）を、1 ブロック = 1 m・1 秒 = 20 tick で再現する。諸元は `TankRules.SPECS`。見た目は、サーバーの `plugins/OyasaiGames/tank-models/<車種>.json` があればそれ（`TankModels.load`）、なければ組み込みの簡易モデル（`TankModels.create`、40 枚以内）。どちらも表示 1 枚ごとに「グループ（車体・砲塔・砲身）＋グループの原点からの変換行列」を持つ。透明な ItemDisplay を土台にして、運転手と全表示をその乗客にし、毎 tick は土台だけを動かす（BDEngine と同じ作り。乗客はクライアント側で付いてくる）。向きは各表示の変換行列（`setTransformationMatrix`）にし、変わった tick だけ送る。モデルファイルは `plugins/OyasaiGames/tools/bdengine_tank.py` で BDEngine の書き出し（datapack の `create.mcfunction`）から作る。部品を形から車体・砲塔・砲身に分け、実車の車体長へ等倍で合わせる。`--spin` で指定した部品（転輪）には `spin` が付き、箱の中心を通る横向きの軸まわりに、すべて同じ角度で回る（最高速で `tank.wheel-rpm`、既定 280 rpm、速さに比例。`/tank rpm <数>` で変えて config に残す）。回る部品はブロックのアイテムの ItemDisplay で出す。BlockDisplay は箱の角が原点なので、中心まわりに回すと平行移動が円を描き、クライアントの補間（平行移動は直線、回転は球面）で軸から外れて揺れる。ItemDisplay は中心が原点なので平行移動が変わらない。1 tick に 180 度を超えると補間が逆向きに回って見える（最高速で約 590 rpm）。分け方は推定なので `--preview` の色分け図で確かめる。モデルの著作物はリポジトリに入れない。毎 tick `Tank.tick` が運転手の `currentInput`（WASD）から速度（最高速・出力重量比の加速）と車体の向きを更新し、砲塔は視線へ実車の旋回速度で向かい、砲身は俯仰の範囲で視線に追従する。表示の補間は `teleportDuration`・`interpolationDuration`（2 tick）。左クリックで主砲（実車の装填時間・搭載弾数）。運転手の目は砲より上にあるので、主砲・機銃とも、目から砲の向きに見た先（400 m まで、ブロック・生き物・戦車の最も近い所）へ砲口から向けて撃つ（砲塔が視線に追いついていればクロスヘアの先）。砲弾は実際の弾速で飛び、弧が見えるよう実物の 10 倍の重力（98.1 m/s²、ゲーム上の値）で落ち、1 tick ごとに `rayTraceBlocks`・`rayTraceEntities`（生き物。戦車の運転手は除く）と、戦車ごとの 4 つの箱（`TankRules.hitBoxes`：車体・左右の履帯は車体の向き、砲塔は砲塔の向きに回す）で当たりを判定し、最も近い箱を採る（`Tank.hitTest`）。箱ごとに装甲厚（砲塔は `turretArmor`、履帯は車体の側面と同じ）を持ち、前・後・横・上の面で判定する。車体は上面（砲塔の回転中心の高さ）まで、履帯はその 7 割の高さまで。壁・地形の衝突は、車体と履帯の箱を車体の向きに回し、ブロックの当たり判定（`collisionShape`）と分離軸判定で調べる（`TankRules.overlapsXZ`）。回るとめり込むときは回らない。段差の乗り越え（1 ブロック）は以前のまま。表示（ブロックディスプレイ）ごとの判定は、重く、小さな飾りが引っかかるのでしない。生き物に直撃すると、戦車の貫通と同じダメージを与える。地形・生き物への着弾ではブロックを壊さない爆発（`createExplosion`、強さは口径に比例し 75mm で 2、TNT は 4）で周りにもダメージを与える。戦車への命中では爆発させず、装甲の計算だけにする。当たった面（正面・側面・背面・上面）の装甲を、正面の傾斜と入射角で実質の厚さにし、距離で減る貫通力と比べて貫通・非貫通・跳弾（法線から 70 度超）を決める。貫通したときだけ耐久（100）が減る。砲弾は毎 tick 飛んだ線分に橙色の光点（1 m ごと）と煙（2 m ごと）を出し、着弾で口径に比例した爆発（地形なら破片、貫通なら火花）を出す。粒子は遠くからも見えるよう強制表示。エンジン音は OyasaiVehicles の CarBuilder2 の標準の音と同じ式で毎 tick 鳴らし、回転数の代わりに最高速に対する速さの割合を使う。右クリック長押しで同軸機銃（実車の毎分発射数、射程 400、即着）。生き物に当たるとダメージ 4、戦車には効かず止まる。右クリックは手に物を持たないとサーバーへ届かないため、乗っている間はホットバーの空き枠に操縦用の棒（PDC `tank_control`）を置いて持たせ、降りると取り除く。持ち替え・落とす・動かすは止め、参加時に残りを取り除く。運転手が座席から外れる（Shift・退出・死亡）と戦車を消す。表示は `isPersistent=false` で、停止時と `/tank clear` でも消す。
- **PvP・BedWars・TNTRun:** 参加前に PlayerStore が持ち物とプレイヤー状態を YAML に退避します。退出・死亡・再接続時に復元します。PvP/BedWars の地形記録と PvPEconomy の決済台帳は各モジュールで共有します。
- **Slot:** 抽選前に料金と受取可能枠を確認し、決済段階をファイルへ保存してから賞品処理を進めます。起動時の再試行対象と、結果不明として止める段階は `SlotPayment.kt` が定義します。
- **Weapons:** `weapons/` の YAML 定義を読み、武器・弾薬・装置状態をアイテム PDC やデータファイルに保持します。射撃、再装填、爆発などはイベントとスケジュール処理で実行します。有効な定義が0件なら起動失敗、再読込失敗後は武器処理が停止したままです。3武器のID別固定上書きは `WeaponObservedOverrides.kt` が定義し、`WeaponCombat.kt` が適用します。数値と運営上の注意は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-games/operator.md) の武器節を参照。
- **肝試し:** 予約・役割・進行を管理し、SQLite にイベントポイント、参加者スナップショット、進行中状態を保存します。旧 Skript CSV から取り込むのは累計ポイントと名前のみです。

### データ形式と永続化

データパスはプラグインのデータフォルダーからの相対パスです。以下のファイルは YAML、SQLite、またはワールド内 PDC を使います。

| 機能 | 永続データ | メモリのみ、または注意点 |
|---|---|---|
| ルーレット | `config.yml` | GUI 選択、抽選タスク、クールダウンは再起動で失われる |
| Dice | なし | モードはアイテムに保持。投擲・回収途中の台帳はなく、再起動をまたぐ投擲復旧はしない |
| HeadHunt | `treasures.yml` と `.bak`、宝ブロックの `headhunt:treasure_id` | チーム、参加者、発見状況、ゲーム状態はメモリのみ |
| Slot | `slot/config.yml`、`slot/machines/`、`slot/players/`、`slot/payments/` | 台定義・利用回数・クールダウン・支払い状態。支払いファイルは段階を持つ |
| Weapons | `weapons/`、`weapons-devices.yml`、アイテム・エンティティ PDC | 銃撃・再装填・地雷・アイテム爆弾など一部の実行状態はメモリのみ |
| PvP | `pvp/arenas/`、`pvp/players/`、`pvp/terrain/`、`pvp/matches/`、`pvp/payments.yml`、`pvp/stats.yml` | 持ち物スナップショット、ブロック復元記録、決済台帳、累計統計。試合進行そのものは永続化しない |
| BedWars | `bedwars/arenas/`、ショップ YAML、`bedwars/players/`、`bedwars/terrain/`、`bedwars/payments.yml`、`bedwars/statistics.yml`、`bedwars/SBA/` | チーム・試合・パーティーはメモリのみ。マッチ所有エンティティは PDC で識別し、再起動時に掃除する |
| TNTRun | `tntrun/arenas/`、各設定 YAML、`tntrun/records.yml`、`players/`、`terrain/`、`payments.yml`、`purchases/`、`results/` | ジャンプ・統計、状態復旧、床復元、購入・結果処理記録。パーティー・試合進行はメモリのみ |
| 肝試し | `kimodameshi.db`（SQLite） | `kimodameshi_players`, `kimodameshi_recovery`, `kimodameshi_metadata`, `kimodameshi_runtime` の各テーブルを使う。進行 YAML は文字列として格納 |
| Toys | なし | 着火中の線香花火はメモリ上の残tickだけを持つ |

共通 PlayerStore のスナップショットは PvP・BedWars・TNTRun 間の重複を拒否します。他プラグインや肝試しとの包括的な排他制御ではありません。スナップショット復元はファイルを残した状態で Bukkit のプレイヤーデータ保存を行い、その後に復旧ファイルを削除します。

### 同期・非同期

- Bukkit のコマンド、イベント、ワールド・インベントリ操作はサーバーのメインスレッドで実行します。ゲームの時間進行、Dice の物理更新、肝試しのスタミナ、線香花火、TNTRun の床更新などは Bukkit スケジューラーを使います。
- ファイル・YAML・SQLite の読み書きと決済連携にも専用の非同期実行基盤はありません。特に肝試しの SQLite 操作、PvP の hard terrain snapshot（最大50万ブロック）、設定移行は呼び出し元スレッドで動きます。
- BedWars のチャットは `AsyncChatEvent` からプレーンテキストを取り出し、プレイヤー・試合状態の処理をメインスレッドへ送ります。

### イベントと外部 API

- `plugin.yml` は Bukkit/Paper のプラグイン記述子です。`api-version` は `1.21` です。
- `build.gradle.kts` のコンパイル時依存は Purpur API、FAWE Bukkit API、Floodgate API。実装に Kotlin 標準ライブラリと SQLite JDBC を同梱します。テストには Purpur API と OyasaiEconomy API を使います。
- `plugin.yml` の softdepend は OyasaiEconomy、SlotMachine、CrackShot、pvparena、WorldEdit、FastAsyncWorldEdit、BedWars、ScreamingBedWars、SBA、TNTRun_reloaded、Multiverse-Core、floodgate です。
- OyasaiEconomy は Slot の経済決済、PvP/BedWars/TNTRun の有効化された支払い・報酬で使います。WorldEdit/FAWE は PvP schematic の貼り戻し、Floodgate は Dice の Bedrock クライアント判定に使います。
- SlotMachine、CrackShot、BedWars/ScreamingBedWars、TNTRun_reloaded は同名機能との競合時に内蔵機能を停止します。PvP は起動時に有効な PvPArena を検出して停止します。後から有効になったプラグインを監視するかどうかは機能ごとに異なります。
- 肝試しは Bukkit のコマンドディスパッチで vanilla の team・scoreboard・attribute・effect と外部コマンドを実行します。必要な外部コマンドの提供元・成功はコードから確認できません。
- `LICENSE-TNTRUN.txt` は GNU GPL v3 のライセンス文書です。Shadow JAR の `META-INF/licenses/` に同梱されます。これは TNTRun_reloaded 由来の挙動を含む配布物向けのライセンス同梱を示し、ここではプラグイン全体のライセンス範囲を断定しません。

### テストが保証する範囲

`src/test/` には、設定読み込み、ルール判定、境界値、移行・保存処理、決済台帳、武器データ解析、ルーレットのブロック分類などを扱うテストがあります。例として、PvP/BedWars/TNTRun の復旧ファイル保持、BedWars のショップ支払い計画とイベント重複防止、HeadHunt の宝ファイル保存、Slot の景品配置・決済状態、肝試し CSV デコードとスタミナ、Weapons の装填・効果判定を検証します。

これらは主に純粋関数・一時ファイル・モックを使ったテストです。実サーバー上のイベント順序、導入プラグインとの共存、ゲーム画面、実ワールドでの座標や演出、データ移行後の実運用は保証しません。この作業ではテスト・ビルドを実行していません。

### 既知の制限

- ゲーム内動作は未確認です。会場 YAML、店舗・景品・武器定義、ワールド、権限プラグインなどの実運用設定もこのコード確認の対象外です。
- `/games reload` は全モジュールを同じ方法で再初期化しません。設定を変更した後は、機能ごとの再読込範囲を確認してください。
- HeadHunt のゲーム進行はメモリだけです。宝登録の保存に失敗しても、先に行ったメモリ・ブロック変更を完全には戻しません。
- Dice の投擲中状態は永続化されません。停止・クラッシュと投擲が重なる場合の返却は保証されません。
- Slot は料金・賞品・コマンド実行の段階を記録しますが、外部コマンドの副作用を巻き戻せません。結果が不明な決済段階を自動で再実行しない場合があります。
- PvP/BedWars/TNTRun のプレイヤー復元・経済・地形処理は複数ファイルと外部 API をまたぎ、OyasaiEconomy とローカルファイルを単一トランザクションにはできません。結果不明の経済処理は自動再送しない設計です。
- PvP/BedWars の地形復元は記録した BlockData と対象設定の容器内容が中心です。TileState の任意データや他プラグインが直接加えた変更を含む完全なワールド巻き戻しではありません。
- TNTRun の床復元は記録したブロック状態を戻す方式で、TileState の復元を含みません。勝利時コマンド・通知は復旧時に再実行しない経路があります。
- 肝試しは固定されたワールド・座標・チェスト構成に依存します。元の位置・状態効果・各属性の完全なスナップショットは保存しません。SQLite 操作は同期です。
- Weapons は CrackShot 形式の設定を読みますが、すべての外部プラグイン機能・設定キーの互換を保証しません。武器効果の一部は YAML のコマンド設定から実行できます。
- 機能の許可判定はコマンド入口・各操作に分かれており、コマンド受付権限だけで全 GUI・アイテム操作を閉じる統一ゲートではありません。必要な範囲は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-games/operator.md) に記載します。

- Tank は試作です。チーム・試合・報酬・アリーナ・持ち物の退避はなく、耐久（100）と貫通時の減り（75mm 34、88mm 50）、機銃のダメージ、加速の係数、後退速度（前進の 1/4）、車体の旋回速度はゲーム上の値または推定です。形は少数のブロックで実車を近似したもので、細部や曲面は再現していません。当たり被弾と衝突の判定は、車体・左右の履帯・砲塔の 4 つの箱で近似します。防盾や細部、坂での傾きは区別しません。砲塔の大きさと装甲の一部は推定です。統合版の操作と、何台まで同時に動かせるかは未確認です。`/games reload` では切り替わらず、有効化は再起動が必要です。

#### 戦車の諸元と出典（2026-10-28 調査）

| | M24 チャーフィー（light） | パンターG型（medium） | ティーガーI（heavy） |
|---|---|---|---|
| 全長（車体）・全幅・全高 | 5.03・3.0・2.77 m | 6.88・3.27・2.99 m | 6.316・3.56・3.00 m |
| 重量・出力・最高速 | 18.37 t・220 hp・56 km/h | 44.8 t・690 hp・46 km/h | 57 t・690 hp・45.4 km/h |
| 主砲 | 75mm M6（L/39、2.92 m） | 7.5cm KwK 42（L/70、5.25 m） | 8.8cm KwK 36（L/56） |
| 弾速・貫通（100 m / 1000 m、垂直） | 618 m/s・88 / 73 mm | 925 m/s・159 / 128 mm（30 度板の 138 / 111 を換算） | 773 m/s・152 / 114 mm（30 度板の 132 / 99 を換算） |
| 装填・搭載弾数 | 3 秒・48 発 | 6 秒（推定）・79 発 | 6 秒・92 発 |
| 装甲（正面・側面・背面・上面） | 25（60 度、推定）・25・19・13（推定） | 80（55 度）・50・40・16 | 100・80・80・25 |
| 砲塔旋回・俯仰 | 24 度/秒（推定）・+15/-10（推定） | 24 度/秒（推定）・+20/-8（推定） | 19 度/秒（2000 rpm）・+15/-8（推定） |
| 機銃 | M1919A4 450 発/分 | MG 34 850 発/分 | MG 34 850 発/分 |

パンターG型（`medium`）: 7.5cm KwK 42 L/70 は 30 度傾斜板に対する値（100 m 138 mm、1000 m 111 mm）を cos30 で垂直板へ換算。装甲は上部前面 80 mm・傾斜 55 度、側面 50 mm、後面 40 mm、上面 16 mm。車体と砲塔の旋回、装填 6 秒、俯仰、損害（40）はゲーム上の値または推定。見た目は自作の BDEngine 由来で、砲塔が簡素。

III号戦車 N型（`pz3`）: 5.56×2.90×2.5 m、23 t、300 PS、40 km/h。7.5cm KwK 37 L/24（砲身 1.76 m、385 m/s、Pzgr. 39/1 の垂直板への計算値 100 m 54 mm・1000 m 46 mm、毎分 12〜15 発→装填 4.5 秒）、MG 34。装甲は N 型の値が資料になく、同じ車体の J〜M 型（正面 50 mm ＋ 20 mm の増加装甲）を使う。正面の傾斜・上面・砲塔旋回・俯仰・搭載弾数は推定。出典: [Panzer III](https://en.wikipedia.org/wiki/Panzer_III)、[7.5 cm KwK 37](https://en.wikipedia.org/wiki/7.5_cm_KwK_37)。

九七式中戦車 チハ 新砲塔（`chiha`）: 5.52×2.33×2.38 m、15.8 t、170 hp、38 km/h。一式四十七粍戦車砲（810 m/s）、搭載 104 発、九七式車載重機関銃。装甲は車体 25 mm、砲塔正面 33 mm。貫通力・装填・旋回・俯仰・履帯幅・砲塔寸法は推定。出典: [Type 97 Chi-Ha](https://en.wikipedia.org/wiki/Type_97_Chi-Ha)。

九五式軽戦車 ハ号（`hago`）: 4.38×2.06×2.13 m、7.4 t、120 hp、40 km/h。九四式三十七粍戦車砲（575 m/s）、搭載 119 発、九七式車載重機関銃。装甲 6〜12 mm。貫通力・装填・旋回・俯仰・履帯幅・砲塔寸法は推定。出典: [Type 95 Ha-Go](https://en.wikipedia.org/wiki/Type_95_Ha-Go)。

M4A3(75)W シャーマン（`sherman`）: 以前の `medium` の諸元のまま（上の表の出典）。砲塔の装甲・寸法は推定。

T-34-85（`t34`）: 6.1×3.0×2.72 m、32 t、500 hp、54 km/h。85mm ZiS-S-53（792 m/s、毎分 7〜8 発→装填 8 秒）、搭載 56 発、DT 機銃。装甲は車体正面 45 mm・傾斜 60 度、側面・背面 45 mm、砲塔正面 90 mm。貫通力・旋回の速さ・砲塔寸法は推定。出典: [T-34](https://en.wikipedia.org/wiki/T-34)、[85 mm air defense gun M1939 (52-K)](https://en.wikipedia.org/wiki/85_mm_air_defense_gun_M1939_(52-K))。

90式戦車（`type90`）・10式戦車（`type10`）: 90式は全長 9.76 m（砲を含む）×3.33×2.34 m、50.2 t、1500 hp、70 km/h、120mm L44（1650 m/s）、搭載 40 発。10式は全長 9.42 m（砲を含む）×3.24×2.30 m、44 t、1200 hp、70 km/h、120mm L44。どちらも 74式車載7.62mm機関銃。車体長・複合装甲の換算厚・貫通力・装填・旋回・俯仰・10式の弾速と搭載数は公開値がなく推定（2026-10-31、試作の見た目を試すために足した）。出典: [Type 90](https://en.wikipedia.org/wiki/Type_90_(tank))、[Type 10](https://en.wikipedia.org/wiki/Type_10_(tank))。

足回りの参考: [The Tank Museum: Tiger Wheels](https://tankmuseum.org/article/tiger-wheels/)（ティーガーの挟み込み式転輪）、[AFV Weapons Profile: M4 Medium Sherman](https://ciar.org/ttk/mbt/afv_weapons_profile_pack/afv_weapons_profile_29__m4_medium_sherman.pdf)（シャーマンのサスペンション）。

出典: Wikipedia の [M24 Chaffee](https://en.wikipedia.org/wiki/M24_Chaffee)、[M4 Sherman](https://en.wikipedia.org/wiki/M4_Sherman)、[Tiger I](https://en.wikipedia.org/wiki/Tiger_I)、[75 mm gun M2–M6](https://en.wikipedia.org/wiki/75_mm_gun_M2%E2%80%93M6)（M61 APC の 90 度・RHA の推定値、毎分 20 発）、[8.8 cm KwK 36](https://en.wikipedia.org/wiki/8.8_cm_KwK_36)（PzGr. 39、毎分 10 発）、[M1919](https://en.wikipedia.org/wiki/M1919_Browning_machine_gun)。シャーマンの装甲と砲塔旋回は [armedconflicts.com](https://www.armedconflicts.com/-t6347)・[AFV Database](https://afvdatabase.com/usa/m4sherman.html)。MG 34 の発射速度は [War Thunder Wiki](https://wiki.warthunder.com/MG34_(7.92_mm)) の幅（400〜900）の上寄りで、ゲームの資料。ティーガーの最高速は初期型の値（後に約 38 km/h に制限）。

## 判断の記録

- 2026-10-28: Display の `setInterpolationDelay` は値が同じでも毎回クライアントへ送られ（`SynchedEntityData.set` の force）、クライアントは受け取るたびに補間の開始時刻を戻す。毎 tick 呼ぶと、止まっていても直前の向きとの間で回転方向に揺れ続けた。変換（`setTransformation`）が変わった tick だけ、変換と一緒に呼ぶ（`Tank.render`）。座席の teleport も位置が変わった tick だけにする。実機で揺れが消えたことを確認。
- 2026-10-28: 戦車（`tank/`）を OyasaiGames のモジュールとして試作した。独立プラグインにしなかったのは、後で PvP のアリーナ・退避・決済を使い回すため。入力は NMS のパケットではなく Paper の `Player.getCurrentInput()` を毎 tick 読む。砲弾はエンティティではなく自前のレイで判定する。既定は無効・OP 限定。
- 2026-10-28: BDEngine で作ったモデル（ティーガーI H 型と III 号戦車）を読めるようにし、III 号戦車を 4 つ目の車種にした。表示が 1 台 400 枚前後になるので、全表示を土台の乗客にして土台だけを動かす。分類はサーバーで毎回推定せず、手元のツールで一度だけ行い、色分け図で確かめる。
- 2026-10-30: 弾がクロスヘアより下へ飛んでいたので、目から見た先へ砲口から向けるようにした。座席を下げる・運転手を透明にする案より、見た目を変えずに済む（人の指示は「どうするかはともかくクロスヘアから」）。転輪を進んだ距離に合わせて回すようにした（人の指示）。
- 2026-10-30: 主砲が生き物に当たらず、地面での爆発もダメージがなかったので、直撃と爆発のダメージを足した（人の指示）。実際の弾速では弧がほとんど見えない（500 m で約 1.4 m）ため、重力をゲーム上 10 倍にした。
- 2026-10-28: 戦車を第二次大戦の実車 3 種に置き換えた（人の指示: 大型・中型・小型を選べる、左クリック主砲・右クリック機銃）。現代の主力戦車は軽・中・重の区分が薄いため、区分がはっきりした時代を選んだ。右クリックを受けるため、乗車中だけ操縦用アイテムを持たせる（インベントリを丸ごと預からず、空き枠がなければ乗せない）。

- 2026-10-26: PvP の賭けは有効のまま倍率 1.4 を維持し、配当の端数は四捨五入（HALF_UP）して整数にする。
- 2026-10-13: 文書レビューの指摘を関連コードで照合し、無効時のコマンド登録、TNTRun の設定・パーティー・ジャンプ所持上限、復元失敗時のキック、再読込と武器の固定上書きを訂正した。プレイヤー向けの賭け直しは結果だけを案内する。
- 2026-10-13: 再読込時の返金・復元は成功を保証しない。PvP は charged だけを返金対象とし、開始時に consumed になった参加費は返金しない（`PvpEconomy.settle`）。Slot は抽選中に再設定を延期する。肝試し・Toys の初期化例外と負のルーレット間隔について、プラグイン内の制御は確認したがサーバー側の最終挙動は未確認として残す。

## 2026-10-25 経済APIの統合

経済連携は `io.oyasai.economy.api.OyasaiEconomyApi` を ServicesManager から取得する。金額はLongで、通貨IDを引数に渡す。円とトークンに別のAPIサービスは使わない。参照は既存口座だけを扱い、APIによる口座の自動作成はない。詳細は [OyasaiEconomy](../oyasai-economy/PROJECT.md) を参照。

PvPの倍率設定modules.economy.bet.winFactorだけは有限で0以上の小数を許し、省略時は1とする。それ以外の金額設定と支払い記録は整数型だけを受け付ける。PvPの経済モジュールはEconomy/EconomyRefund、設定はmodules.economy、BedWarsの経済設定はeconomy。比例配当は倍率を掛けてから四捨五入（HALF_UP）してLongにし、Longの範囲を超えた試合は全員へ元金を返す。PvPの保存結果が不明な取引は自動再送しない。
