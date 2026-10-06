# OyasaiGames - おやさい鯖 ミニゲーム統合プラットフォーム

おやさい鯖（Minecraft 1.21.x / Purpur 26.2, Java 25）向けのミニゲーム統合プラグインです。  
みんなで開発した様々なミニゲームを1つのプラグインに集約・管理できる構造になっています。

---

## 🎮 収録ミニゲーム一覧

### 1. 建築用アイテム抽選ルーレット (Roulette)

建築で使うブロックを完全ランダムに抽選するミニゲームです。

- **3つのモード**:
  - 全建築用アイテム（設置可能な全ブロック）
  - フルブロックのみ（完全な立方体ブロック）
  - フルブロック以外（階段、ハーフ、フェンス、装飾など）
- **抽選回数**: 1回 / 3回 / 5回
- **公開設定**: 全体公開（サーバー全員に見える） ⇄ 自分のみ（非公開）
- **演出**: GUI画面を開いたまま当選ブロックが1つずつ出現。当選ブロックはアイテム本来のテクスチャで綺麗に表示。
- **安全性**: インベントリ操作による持ち出し・増殖を100%防止。ログアウト時の自動解放および二重実行防止。

### 2. HeadHunt

設置した頭ブロックを探す、ソロ・チーム対応の宝探しミニゲームです。旧 `plugins/HeadHunt/treasures.yml` があり、OyasaiGames 側にデータがない場合は、初回起動時にコピーします。旧ファイルは残ります。

### 3. Weapons

CrackShot 形式の YAML を読む、生活アイテム・武器モジュールです。`games.weapons.enabled` で個別に切り替えます。CrackShot が有効なら起動せず、後から有効になった場合も停止します。

定義は `plugins/OyasaiGames/weapons/` に置きます。このフォルダが無く、旧 `plugins/CrackShot/weapons/` があれば初回にコピーし、旧 `general.yml` も新フォルダ内にコピーします。元ファイルは変更しません。本番の定義・景品・キットのデータは同梱しません。

既存品は材質と、色・残弾・銃の動作記号を除いた表示名で照合します。曖昧な名前は認識しません。旧染料 ID `351~8` の定義は、キットに残る `GRAY_DYE` も受け入れます。新しい品には識別用 PDC を付けます。装填は Q、スコープ・アタッチメント切り替えは射撃と反対のクリックです。`/shot reload` は手持ちの武器を装填し、`/shot config reload` は定義を再読み込みします。

射撃ダメージ・装填容量・装填時間は定義を使い、連射は公開ガイドの RPM を tick に配分します。弾速・反動・散布の旧エンジン内部換算は公開されていないため、`weapons.compatibility` の係数は実機比較による調整用です。初期値を CrackShot と同じと保証するものではありません。名前だけの旧品、エネルギー弾の当たり判定、爆発ダメージ・PvPArena の味方判定、既設の旧地雷の移行は別途サーバーで確認してください。武器の持ち替え・装填・死亡時は予約済みの連射やバーストを取り消します。銃の差し替え前に PvP の比較が必要です。

例外として `CHAINSAW`・`AK-47`・`RITTAIKIDOU` の武器IDだけは `WeaponObservedOverrides.kt` の観測値を使います。連射は入力の翌tickから5tickの間、CHAINSAWは10tick中9発、AK-47は2tick中1発、RITTAIKIDOUは5tick中4発（各1発消費）。射撃の1命中は順に3・4・0ダメージ、RITTAIKIDOUの突進は視線方向に速度1.6を設定します。CHAINSAWだけは観測したブロック単位のエネルギー判定を使い、この3種だけは承認された命中後に無敵時間を解除します。通常攻撃・装填・散布・他の武器の式は従来の処理です。発数は入力のtick位相、命中とHPは散布・防具・外部プラグインの保護で変わるため、比較記録の最終残数やHPを固定するものではありません。

[CrackShot 公開ガイド](https://github.com/Shampaggon/CrackShot/wiki/The-Complete-Guide-to-CrackShot) と [コマンド仕様](https://github.com/Shampaggon/CrackShot/wiki/Commands-and-Permissions) を仕様の参照先としています。

### 4. PvP

PvPArena の既存 YAML を使う対戦モジュールです。TeamDeathMatch、TeamLives、TeamPlayerLives、PlayerDeathMatch、PlayerLives に対応します。待機・クラス選択・準備・観戦・試合結果と NCModule 相当の K/D 表示、Vault の賞金・参加費・賭け、ChestFiller、ブロック復元を含みます。武器の動作は weapons モジュール側で扱い、PvP はキットのアイテムとメタデータを配布します。

- `config.yml` の `games.pvp.enabled` で個別に起動を切り替えます。外製 `pvparena` が有効な場合は警告を出して PvP を起動しません。
- `OyasaiGames/pvp` が存在せず、旧 `pvparena/arenas` がある場合だけ、使用対象の15アリーナ・`config.yml`・`classes.yml`・schematic をコピーします。元データは変更しません。対象外の Food/EventActions や外製 goal/module JAR は取り込みません。
- アリーナの作成・範囲変更は `OyasaiGames/pvp/arenas/*.yml` を直接編集します。既存 PvPArena と同じ `general.goal`、`spawns`、`teams`、`classitems`、`arenaregion` 形式です。全員が退出してから `/pa reload` を実行します。読み込めないアリーナと未対応キーはログに出ます。
- WorldEdit の自動復元には WorldEdit/FAWE と `pvp/schematics/<arena>_<region>.schem`（または `.schematic`）が必要です。旧 `schematicpath` の外部パスは使いません。hard ブロック復元は同期処理のため50万ブロックまでです。
- 参加前の状態は `pvp/players` へ先に永続保存します。退出・切断・無効化で復元し、死亡中や復元失敗時はファイルを残して再接続・リスポーン時に再試行します。復元ファイルを手動削除しないでください。ワールド未読込や破損がある場合は管理者による復旧が必要です。
- `pvp/payments.yml` は Vault の入出金記録です。API 呼び出し中に停止して結果が不明な `uncertain` は自動再送せず警告します。残高と照合して管理者が解決してください。
- 現行キーを優先します。旧キーが併存していても旧賞金・残機設定へ戻しません。チャット、Titles、独自外製イベントなど未対応設定は警告対象です。Vaultre と NCModule の独自挙動・他プラグインとの連携はサーバーで確認してください。

参照した挙動仕様: [PvPArena v2.1.1](https://github.com/Eredrim/pvparena/tree/2.1.1)、[公開モジュール](https://github.com/Eredrim/pvparena_modules)。実装は OyasaiGames 用に書き直しています。

---

## 📋 コマンド一覧

| コマンド                                            | エイリアス            | 権限                         | 説明                                             |
| :-------------------------------------------------- | :-------------------- | :--------------------------- | :----------------------------------------------- |
| `/tntrun join <arena>` / `leave` / `stats` / `list` | `/tr`                 | `tntrun.join`                | TNTRun への参加・退出・統計・一覧                |
| `/shot list`                                        | -                     | `oyasaigames.weapons.admin`  | 武器一覧                                         |
| `/shot get <武器> [数]`                             | -                     | `oyasaigames.weapons.admin`  | 自分へ配布                                       |
| `/shot give <プレイヤー> <武器> [数]`               | -                     | `oyasaigames.weapons.admin`  | 他プレイヤーへ配布                               |
| `/shot reload`                                      | -                     | `oyasaigames.weapons.admin`  | 手持ちの武器を装填                               |
| `/shot config reload`                               | -                     | `oyasaigames.weapons.admin`  | 定義を再読み込み                                 |
| `/games`                                            | `/og`, `/oyasaigames` | `oyasaigames.use`            | おやさいゲームズのメインメニューを開く           |
| `/games help`                                       | -                     | `oyasaigames.use`            | コマンド一覧・ヘルプを表示                       |
| `/games reload`                                     | -                     | `oyasaigames.admin`          | プラグイン全体の設定を再読み込み                 |
| `/roulette`                                         | `/oroulette`          | `oyasaigames.roulette.use`   | 建築用アイテム抽選ルーレットGUIを開く            |
| `/roulette reload`                                  | -                     | `oyasaigames.roulette.admin` | ルーレット設定とブロックリストを再読み込み       |
| `/headhunt`                                         | `/hhunt`              | `headhunt.use`               | 宝探しのヘルプ・チーム情報を表示                 |
| `/headhunt <管理操作>`                              | `/hhunt <管理操作>`   | `headhunt.admin`             | 宝の設置・イベント管理など                       |
| `/headhunt`                                         | `/hhunt`              | `headhunt.use`               | 宝探しのヘルプ・チーム情報を表示                 |
| `/pa <arena> [team]`                                | `/ogpa`               | `oyasaigames.pvp.use`        | 対戦に参加                                       |
| `/pa leave` / `/pa ready`                           | -                     | `oyasaigames.pvp.use`        | 退出・準備完了                                   |
| `/pa class <kit>`                                   | -                     | `oyasaigames.pvp.use`        | クラス選択                                       |
| `/pa <arena> spectate`                              | -                     | `oyasaigames.pvp.use`        | 観戦                                             |
| `/pa bet <target> <amount>`                         | -                     | `oyasaigames.pvp.use`        | 賭け。対象が複数アリーナで曖昧ならアリーナを指定 |
| `/pa <arena> bet <target> <amount>`                 | -                     | `oyasaigames.pvp.use`        | アリーナを指定して賭け                           |
| `/pa stats` / `/pa list`                            | -                     | `oyasaigames.pvp.use`        | 累積 K/D/勝利・アリーナ一覧                      |
| `/pa reload` / `/pa <arena> enable\|disable`        | -                     | `oyasaigames.pvp.admin`      | 再読込・アリーナの有効/無効                      |

---

## 🔐 権限ノード (Permissions)

- `tntrun.join` / `tntrun.shop` / `tntrun.party`: TNTRun の参加・ショップ共通アクセス・パーティー（デフォルト: 全員）
- `oyasaigames.weapons.admin`: 武器管理コマンド・看板ショップ作成の権限（デフォルト: OP）
- `oyasaigames.use`: ゲームハブの利用権限（デフォルト: 全員）
- `oyasaigames.admin`: 管理コマンドの実行権限（デフォルト: OP）
- `oyasaigames.roulette.use`: ルーレットの利用権限（デフォルト: 全員）
- `oyasaigames.roulette.admin`: ルーレットの管理権限（デフォルト: OP）
- `oyasaigames.pvp.use`: PvP の参加・観戦・賭け（デフォルト: 全員）
- `oyasaigames.pvp.admin`: PvP の再読込・有効/無効（デフォルト: OP）
- `headhunt.use`: HeadHunt の基本コマンド利用権限（デフォルト: 全員）
- `headhunt.admin`: HeadHunt の管理権限（デフォルト: OP）

---

## 🛠️ 新しいミニゲームの追加方法（開発者向けガイドライン）

本プラグインは、今後のミニゲーム追加を容易にするモジュール設計となっています。

1. **パッケージの作成**:
   - `icu.oyasai.games.<ゲーム名>` パッケージを作成します。
2. **ロジック & GUIの実装**:
   - ゲームマネージャー、コマンド、GUI等を実装します。
3. **`OyasaiGamesPlugin` への登録**:
   - `onEnable()` でゲームマネージャーの初期化・コマンド登録を行います。
   - `onDisable()` で終了処理（シャットダウン）を呼び出します。
   - `games.<ゲーム名>.enabled` で個別に無効化できるようにし、初期化失敗を捕捉して他のモジュールを継続します。
4. **ハブメニューへの追加**:
   - `GamesHubGui.java` および `GamesHubListener.java` に該当ゲームのアイコンと起動ロジックを追加します。
5. **`plugin.yml` / `config.yml` への追記**:
   - 必要なコマンドや設定項目を追加します。

### 5. Slot（旧 SlotMachine の引き継ぎ）

`config.yml` の `games.slot.enabled: true` で有効化します。Vault と経済プロバイダーが必要です。外製 SlotMachine が有効な場合は起動せず、起動後に外製が有効になった場合も停止します。

初回だけ、OyasaiGames に `slot/` がない場合、`plugins/SlotMachine/machines/`・`players/`・`config.yml` を `plugins/OyasaiGames/slot/` にコピーします。元ファイルを変更しません。コピーは一時ディレクトリからの atomic move で確定し、`imported.txt` を残します。既存 `slot/` があれば再取り込みしません。切り替え時には必ず players も含むバックアップを用意してください。`backupMachinesOnPluginUnload: true` なら停止時に台ファイルを `slot/machinesLastBackup/` へコピーします。

ブロック／エンティティを右クリックして台を開き、レバーを押すと MONEY 料金で抽選します。BLOCK_LINK は `linkTo` の台を使います。SLOTMACHINE（3リール）・CSGOWHEEL（横）・CSGOWHEEL_VERTICAL（縦）、景品一覧、Luck/Unluck、メッセージ、サウンドを扱います。ITEM 景品は Bukkit の ItemStack デシリアライズと clone で名前・lore・components を保ち、COMMAND 景品はコンソールから実行します。`locked: true` はブロックの破壊・爆発・ピストン移動を防ぎます。

`/oslot list`、`/oslot info <台UUIDまたは一意な台名>`、`/oslot reload` は `oyasaigames.slot.admin`（OP）が必要です。新規作成・編集は `slot/machines/*.yml` の直接編集で行い、既存と同じ YAML 構造を使って reload してください。抽選中の reload は拒否します。reload 時には既存の slot 画面を閉じます。ワールドは `worldUID`、エンティティは `entityUID`、台は `machineUUID` で照合します。同名台は UUID で指定します。

`chanceToWin` は 0〜1 の当選率です。当選時だけ景品の `weight`（0〜20億）で抽選し、0 の景品は表示だけになります。Luck/Unluck の効果レベル×共通設定の百分率を加算して 0〜1 に収めます。`cooldown` と `cooldownDuration` は秒、`lastUsed` は epoch ミリ秒として保存します。リンク元とリンク先ではクールダウンと統計を共有します。旧データも既定で同じ単位として読みます。別単位のデータに限り `games.slot.legacy-last-used-unit` と `games.slot.legacy-cooldown-duration-unit` で明示できます。読み込み時にメモリ上で変換し、プレイ成功時に `slotCooldownFormat` とともに OyasaiGames 側へ保存します。元ファイルは変更しません。リンクの共有範囲は、切り替え前にサーバーで照合してください。

課金前に全景品の受け取り容量を確認します。抽選中は同じプレイヤー・同じ台への二重課金を防ぎ、画面を閉じても抽選を継続します。ログアウト・死亡・停止・処理失敗時は返金を試みます。景品は地面に捨てず、空き不足時は返金します。課金・返金の結果が不明になった場合は、その組の再プレイを止めます。

`slot/payments/` は処理状態の記録です。再起動時の PAID / REFUND_FAILED は返金し、CHARGING / DELIVERING / REFUNDING は自動再実行しません。Vault とコンソールコマンドは共通のトランザクションを持たず、強制終了をまたぐ厳密な exactly-once は保証できません。管理者は経済ログ・受取アイテム・クールダウン・統計を照合した後、該当ファイルを別途保管して手動で解決してください。返金失敗時の再試行は再起動時に行います。複数の COMMAND の途中で失敗した場合、すでに実行されたコマンドの副作用は取り消せません。景品は再実行せず料金を返金します。

GUI の細かなセル配置・回転速度／停止順・音量／ピッチ、共通言語キーの文言、プレビュー確率の表示方法は、公開説明だけで旧プラグインと一致を断言できません。切り替え前のサーバー比較が必要です。Tokens／他の通貨、Citizens、外部プラグイン用編集コマンド、言語OTA・作者への送信は実装しません。未知のキーはログに出します。台の統計保存は `timesUsed` と当選景品の `timesWon` の行だけを更新し、景品の本文を保ちます。読み込めない台とプレイヤーは課金せず停止します。

### 6. BedWars（旧 ScreamingBedWars + SBA の引き継ぎ）

`games.bedwars.enabled: true` で有効化します（既定は false）。Vault 報酬を使う設定では経済プロバイダーが必要です。外製 BedWars が有効な場合は開始せず、後から有効になった場合も内部試合を終了します。切替前に旧データとワールドをバックアップしてください。

`vault.reward.final-kill` は読み込みを残しますが、外製の実測挙動に合わせて支払わず、通常キル・勝利の報酬は設定通り支払います。

参照する外製の版は **ScreamingBedWars 0.2.44 系、SBA 1.5.20.2** です。ただし、確認した設定ファイルの `version` と取得設定は SBA 1.5.21 でした。本番 jar の実際の版は別途照合が必要です。挙動の確認には [BedWars 0.2.x 公開実装](https://github.com/ScreamingSandals/BedWars/tree/ver/0.2.x)（LGPL-3.0）と [SBA 公開実装](https://github.com/boiscljo/SBA/tree/release)（GPL-3.0）を参照しました。外製をフォークせず、Paper の公開 API で新規に実装しています。NMS、外製 jar の逆コンパイル、外製コードの貼り付けは行っていません。新しい外製版の機能を取り込むときは変更履歴と設定差分を確認してください。

初回に `OyasaiGames/bedwars/` が存在せず、隣の `BedWars/arenas/` がある場合だけ、読めるアリーナ、共通／アリーナ別ショップ、強化ショップ、設定、看板、YAML 統計、SBA 設定／参加 GUI／quickbuy をコピーします。一時ディレクトリから atomic move で公開し、原本を変更しません。読み取りに失敗したアリーナを分離し、件数と未消費キーをログに出します。既存 `bedwars/` がある場合は再取り込みしません。SBA の GUI 設定は保管しますが、表示は実際に読み込めたアリーナから組み立てます。

`/bw join <arena>`、`/bw leave`、`/bw rejoin`、`/bw list`、`/bw stats`、`/bw leaderboard` を使用できます。`/bw gui [solo|double|triples|squads]` と `/games` に参加メニューがあります。取り込んだ看板の右クリックでも参加できます。店舗の右クリック、または `/bw shop`・`/bw upgrades` で購入できます。quickbuy は右クリックして商品を登録します。`/bwparty invite <player>`・`accept <leader>`・`leave`・`kick <player>`・`disband`、`/shout <message>` に対応します。

チームの自動振り分け、カウントダウン、四資源、時間による生成量強化、資源共有、ベッド破壊、復活／最終キル、勝敗、観戦・追跡、共有チームチェスト、チーム強化・罠、統計／ランキング／スコアボードを扱います。再参加できるのは、同じ起動中の試合で元のチームのベッドが残っている場合です。退出・切断時はゲームの持ち物を引き継がず、元の持ち物に戻します。ゴーレム、設置罠、追跡、火の玉、自動着火 TNT、橋の卵、簡易タワーに対応します。

参加前の持ち物・位置・体力などは pvp と共通の永続スナップショットに保存し、復元は追加ではなく置き換えで行います。元のプレイヤーデータを保存してから記録を削除します。pvp と bedwars が互いのゲーム用持ち物を保存することを拒否します。地形・コンテナは変更前に永続記録を残し、終了時・起動時に戻します。死亡画面や I/O 失敗で復元できない場合は記録を保持し、ログイン／復活／復元タスクで再試行します。試合例外時は当該アリーナを停止します。ゲームの生成物・店舗は試合所有として追跡し、ワールドへの永続保存を無効にします。

Vault 支払いは pvp の台帳を再利用し、試合・死亡・ベッド・勝利イベントを識別して再送を防ぎます。Vault とファイルには共通トランザクションがないため、強制終了や応答例外で結果が不明になった支払いは `bedwars/payments.yml` に `uncertain` として残し、自動で繰り返しません。管理者が経済ログと照合してください。復元記録を未確認で削除しないでください。

旧外製との完全な互換性は保証しません。店舗は Villager 表示で、人型 NPC のスキン・Citizens、旧 GUI のセル配置・アニメーション、タワーの出現アニメーション、旧看板の動的書換え、編集用ホログラム、更新チェック、外部連携を実装していません。ボスバーやタブの装飾も未対応です。試合終了時は有効な `mainlobby` の指定先に戻し、途中退出・切断・起動時の復旧では参加前の位置に戻します。ゴーレム／設置罠は所有者の退出後の挙動が異なる可能性があります。コマンド報酬、MySQL、Bungee は未使用なので実装していません。設定の未消費キーを必ず確認し、切替前に別サーバーで復元・ショップ・特殊アイテム・生成量・報酬を比較してください。

### 7. TNTRun

`games.tntrun.enabled` で切り替える、Paper API を使った TNTRun モジュールです。外製 `TNTRun_reloaded` が有効なら警告して起動せず、後から有効になった場合も終了します。アリーナとロビーのワールドは事前のロードが必要です。`Multiverse-Core` の後に起動し、未ロードのワールドを参照するアリーナは拒否します。ワールドをロードした後に `/games reload` で再読み込みできます。

互換性の基準は稼働元の **TNTRun_reloaded 9.34** の設定です。挙動の確認には公開ソースの固定リビジョン [v9.34-SNAPSHOT.142](https://github.com/steve4744/TNTRun/tree/01d8e1e1b7d8958d9c299a3e98341aa439f33465) を使用しました。公開タグは snapshot なので、稼働 JAR と同じソースとは断定していません。足元の判定・脱落高度を Kotlin に書き直し、境界チェックと同時脱落の処理を変更しています。原作者は Shevchikden、steve4744 および contributors、変更者は OyasaiGames contributors です。この翻案部分は GPL-3.0-or-later とし、[ライセンス全文](LICENSE-TNTRUN.txt) をリポジトリと配布 JAR に収録します。今後は必要な機能の変更履歴を確認して個別に取り込みます。

`plugins/OyasaiGames/tntrun/` が存在せず、旧 `plugins/TNTRun_reloaded/` があれば、設定・アリーナ・看板・ロビー・任意の `players.yml` / `stats.yml` を初回にコピーします。元ファイルは変更せず、既存データには再取り込みしません。コピー件数と未対応キーをログに出します。実アリーナ・個人データは同梱しません。

- `/tntrun join <arena>`、`leave`、`stats`、`list`（別名 `/tr`）と登録済み看板から参加できます。名前は大文字小文字を除く完全一致で、曖昧な名前は拒否します。
- 待機・人数による開始カウント・足元とその下の 2 ブロックの遅延消去・落下脱落・時間切れ・勝敗・床の復元に対応します。同じ tick に最後の全員が脱落した場合は引き分け、時間切れも勝者なしです。
- 無料参加、勝者の Vault 賞金・XP、統計、PvP 有効/無効、開始投票（`vote`）、購入済みダブルジャンプの持ち越し、待機中のダブルジャンプショップ（`shop`）、タイトル・ボスバー・スコアボード・音・勝利通知に対応します。ショップは `tntrun.shop` **または**商品の `permission` が必要です。商品権限を自動付与しません。
- 有効な内蔵パーティーには `/tntrun party create|invite|accept|decline|kick|unkick|leave|info` を使います。リーダーが全員を参加させ、途中で参加に失敗すれば加入済みのメンバーも元に戻します。パーティーはメモリ内で管理し、ログアウト時に離脱します。
- 脱落後は Paper の観戦モードです。退出時に参加前の持ち物・体力・経験値・効果などを復元します。`teleportto: PREVIOUS` は元の位置、`LOBBY` は取り込んだロビーに戻ります。参加処理の失敗時は元の位置です。

PvP の `PlayerStore` と `PvpEconomy` を再利用します。両モジュールの保存データを確認し、同時参加を拒否します。持ち物は追加で返さず全スロットを置き換え、vanilla のプレイヤーデータ保存後に復元記録を削除します。床は消去前に復元記録を保存し、ワールド保存が済んでから記録を削除します。ブロックエンティティと領域外のブロックは消しません。復元待ち・不明な取引があるプレイヤーは再参加できません。

`tntrun/payments.yml`、`purchases/`、`results/`、`players/`、`terrain/` は復旧用データです。購入は引落し・購入レシート・固定のジャンプ残数、報酬は試合ごとの固定台帳キーと保存済み XP の置換で処理します。起動時に未完了購入・報酬・床・オンラインプレイヤーを復元し、後から接続したプレイヤーも復元します。モジュール無効時も復元リスナーを残します。外製が有効な間は復元も行わず、復元待ちのプレイヤーを保護のため退出させます。Vault は経済プラグインとの原子的トランザクションを持たないため、呼び出し中の停止で結果が不明な `uncertain` を自動再送しません。管理者が経済ログ・残高・購入レシートを照合して解決する必要があります。

本番で無効なキット、無料ジャンプ、参加料、有料の下位報酬、アイテム/コマンド報酬、追加スポーン、アリーナ管理コマンド、MySQL、BungeeCord は対象外です。キット・参加料・下位報酬などを後から有効にした定義はアリーナを拒否します。HeadsPlus の帽子購入、エフェクト選択メニュー、旧コンパスの追跡 GUI、ランキング表示、旧メッセージ文言・ランクチャット、Metrics、更新通知、旧 BarAPI は実装しません。観戦は Paper のメニューを使います。旧 `doublejumps.<name>` は自動移行せず、現行 `players.yml` の完全一致データを使います。花火は簡易な 1 発の演出です。ショップの位置、終了演出の長さ、文言、足元の端・ハーフブロック、PvP・ダブルジャンプ・他モジュールとの干渉は切り替え前のサーバー確認が必要です。
