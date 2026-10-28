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
- **Tank（試作）:** `tank/`。戦車 1 台は BlockDisplay 5 枚（車体・履帯 2・砲塔・砲身）と、運転手が乗る透明な ItemDisplay です。毎 tick `Tank.tick` が運転手の `currentInput`（WASD）から速度・車体の向きを更新し、砲塔と砲身は運転手の視線に追従させます。位置と回転は自前で計算し、表示の `teleportDuration`・`interpolationDuration`（2 tick）でクライアントに補間させます。砲弾は 1 tick ごとに `rayTraceBlocks` と戦車の箱（軸に平行）への `BoundingBox.rayTrace` で当たりを判定し、重力で落ちます。装甲は車体の向きと砲弾の水平方向から正面 0.5・側面 1.0・背面 1.5 倍です（`TankRules`）。運転手が座席から外れる（Shift・退出・死亡）と戦車を消します。表示は `isPersistent=false` で、停止時と `/tank clear` でも消します。
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

- Tank は試作です。チーム・試合・報酬・アリーナ・持ち物の退避はなく、数値（速度・装填 40 tick・砲弾速度 3.0・威力 35・HP 100）は `TankRules` の仮置きです。当たり判定と衝突は車体の向きに合わせた箱ではなく軸に平行な箱で近似します。ゲーム内の見え方（座席の高さ、補間の滑らかさ、砲塔の向き）と統合版の操作は未確認です。`/games reload` では切り替わらず、有効化は再起動が必要です。

## 判断の記録

- 2026-10-28: Display の `setInterpolationDelay` は値が同じでも毎回クライアントへ送られ（`SynchedEntityData.set` の force）、クライアントは受け取るたびに補間の開始時刻を戻す。毎 tick 呼ぶと、止まっていても直前の向きとの間で回転方向に揺れ続けた。変換（`setTransformation`）が変わった tick だけ、変換と一緒に呼ぶ（`Tank.render`）。座席の teleport も位置が変わった tick だけにする。実機で揺れが消えたことを確認。
- 2026-10-28: 戦車（`tank/`）を OyasaiGames のモジュールとして試作した。独立プラグインにしなかったのは、後で PvP のアリーナ・退避・決済を使い回すため。入力は NMS のパケットではなく Paper の `Player.getCurrentInput()` を毎 tick 読む。砲弾はエンティティではなく自前のレイで判定する。既定は無効・OP 限定。

- 2026-10-26: PvP の賭けは有効のまま倍率 1.4 を維持し、配当の端数は四捨五入（HALF_UP）して整数にする。
- 2026-10-13: 文書レビューの指摘を関連コードで照合し、無効時のコマンド登録、TNTRun の設定・パーティー・ジャンプ所持上限、復元失敗時のキック、再読込と武器の固定上書きを訂正した。プレイヤー向けの賭け直しは結果だけを案内する。
- 2026-10-13: 再読込時の返金・復元は成功を保証しない。PvP は charged だけを返金対象とし、開始時に consumed になった参加費は返金しない（`PvpEconomy.settle`）。Slot は抽選中に再設定を延期する。肝試し・Toys の初期化例外と負のルーレット間隔について、プラグイン内の制御は確認したがサーバー側の最終挙動は未確認として残す。

## 2026-10-25 経済APIの統合

経済連携は `io.oyasai.economy.api.OyasaiEconomyApi` を ServicesManager から取得する。金額はLongで、通貨IDを引数に渡す。円とトークンに別のAPIサービスは使わない。参照は既存口座だけを扱い、APIによる口座の自動作成はない。詳細は [OyasaiEconomy](../oyasai-economy/PROJECT.md) を参照。

PvPの倍率設定modules.economy.bet.winFactorだけは有限で0以上の小数を許し、省略時は1とする。それ以外の金額設定と支払い記録は整数型だけを受け付ける。PvPの経済モジュールはEconomy/EconomyRefund、設定はmodules.economy、BedWarsの経済設定はeconomy。比例配当は倍率を掛けてから四捨五入（HALF_UP）してLongにし、Longの範囲を超えた試合は全員へ元金を返す。PvPの保存結果が不明な取引は自動再送しない。
