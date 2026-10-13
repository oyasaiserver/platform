---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiGames/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiGames の運用（運営向け）

通常の遊び方は [player.md](player.md)、処理と検証範囲は [PROJECT.md](PROJECT.md) を参照。
ここでは同梱設定と、設定がないときにコードが使う値を区別します。実際の会場・景品・武器・ミッションのデータは同梱されていません。

## 権限

| 権限 | 既定 | 用途 |
|---|---|---|
| `oyasaigames.use` | 全員 | `/games`。plugin.yml の受付権限にも指定 |
| `oyasaigames.admin` | OP | `/games reload`、ルーレット再読込 |
| `oyasaigames.roulette.use` | 全員 | `/roulette` の受付権限 |
| `oyasaigames.roulette.admin` | OP | `/roulette reload` |
| `oyasaigames.roulette.special` | OP | 特殊ブロックを抽選候補に含める |
| `oyasaigames.dice.use` | 全員 | `/dice` の受付権限 |
| `headhunt.use` | 全員 | ヘルプ・チーム一覧/情報 |
| `headhunt.admin` | OP | 宝の登録・イベント・チーム編成。use の代わりにもなる |
| `oyasaigames.pvp.use` | 全員 | PvP 参加・観戦・準備・クラス・賭け・統計 |
| `oyasaigames.pvp.admin` | OP | PvP 再読込、アリーナ有効/無効 |
| `oyasaigames.bedwars.use` | 全員 | `/bw`・`/bwparty`・`/shout` |
| `tntrun.join` | 全員 | TNTRun への参加。看板・パーティー参加でも確認 |
| `tntrun.party` | 全員 | TNTRun パーティー操作 |
| `tntrun.shop` | 全員 | TNTRun 商品の購入。これ**または**商品の permission が必要 |
| `slotmachine.access.default` | 全員 | スロットの既定アクセス権限 |
| `oyasaigames.slot.admin` | OP | `/oslot` |
| `oyasaigames.weapons.admin` | OP | `/shot` と武器ショップ看板作成・撤去 |
| `op` | OP | 肝試しの管理コマンド群（下表） |

- 特殊ルーレットは `citiesskymine.role.takumi`・`group.takumi` または OP でも解放します。一般候補から除く11材質は `roulette/service/BlockClassifier.java` の `SPECIAL_ADMIN_BLOCKS` が正本です。
- `/roulette` の executor 内では roulette.use **または** games.use を認めますが、plugin.yml の受付には roulette.use が必要です。ハブからのルーレット・サイコロ入手は、各利用権限を再確認しません。サイコロのアイテム操作にも権限確認がありません。
- PvP の list/help は利用権限の確認前、reload は管理権限で処理します。enable/disable はプレイヤー専用で use と admin の両方が必要です。
- TNTRun の list/stats/leave/vote/shop 自体に join 権限の一律確認はなく、参加と個別機能で判定します。商品権限を自動付与する処理はありません。
- 肝試しの `/startgame` は **OP 限定ではありません**。`/checkmission` はコンソール専用で、専用の権限確認はありません。`/points 名前` は `op` ノードではなく実際の OP 状態を要求します。
- BedWars の看板・GUIからの参加やパーティー同行は、join 処理内で use 権限を再確認しません。権限だけで会場操作全体を閉じる保証はありません。

## 管理コマンドと再読み込み

**`/games reload` は進行中の PvP・BedWars・TNTRun を強制終了し、参加・観戦者を退出・復元へ回します。** PvP は未消費（charged）の参加費と未決着の賭けの返金を試みます。試合開始時に consumed になった参加費は、中断でも返金されません。返金や復元の成功は保証されず、未完了の記録は下記の障害対応で確認してください。BedWars・TNTRun に参加費・賭けはありません。

| コマンド | 操作・条件 |
|---|---|
| `/games reload` | ルート設定を読む。slot/weapons を再設定し、PvP・BedWars・TNTRun を終了→有効化。ルーレットの設定と候補を更新 |
| `/roulette reload` | ルート設定と候補を更新。roulette.admin または games.admin（コマンド受付には roulette.use も必要） |
| `/oslot list` / `info 台UUIDまたは一意な台名` / `reload` | 台を一覧・確認・再読込。抽選中の reload は拒否。同名台は UUID で指定 |
| `/shot list [allまたはページ]` | accessory と Hidden_From_List を除いた武器一覧。ページは10件ずつ |
| `/shot get 武器 [数]` / `give 名前 武器 [数]` | 1〜64個。get は自分、give は完全一致のオンライン相手。満杯なら地面へ落とす |
| `/shot reload` / `/shot config reload` | 前者は手持ちの装填（プレイヤー専用）、後者は設定・定義の再読込 |
| `/pa reload`（`/pa 会場 reload` も可） | 参加・観戦者がいると拒否 |
| `/pa 会場 enable` / `disable` | 試合を中断・復元し、`general.enabled` をアリーナ YAML に保存 |
| `/givemission 名前` | 肝試しの探索者にミッションを配る。op が必要 |
| `/checkmission x y z 名前` | コンソールから目的地判定。近くの探索者1人を選ぶ |
| `/setteam 名前 役割` / `/clearteams` | op。setteam は役割文字列をそのまま設定。clearteams は待機中のみ |
| `/eventstats` | op。累積ポイントが正のプレイヤー一覧 |
| `/editpoints add\|remove\|set 名前 discovery\|kill\|event 数値` | op。オンライン相手のみ。負数も受け付け、下限補正なし |
| `/stopgame` | op。肝試しを強制終了し、今回のポイントを加算して復元へ進む |
| `/recovergameplayer 名前` | op。肝試しの未復元データをオンライン相手に適用。未 pending なら報酬0として復元へ切り替える |

**`/games reload` の成功表示だけで再設定成功と判断しないでください。** 個別モジュールの例外をログに出した後も「[おやさいゲームズ] 全ての設定を再読み込みしました。」と表示します。slot は抽選中なら再設定を延期します。HeadHunt・肝試し・Toys・Dice は再初期化しません。無効起動したルーレットの新規有効化も行いません。これらの切替にはプラグインの再起動が必要です。

BedWars・TNTRun のアリーナ編集コマンドはありません。設定を直接編集して再初期化します。`/oslot reload` は台・共通設定・プレイヤークールダウンだけを読み、未決済返金の再試行はしません。

## HeadHunt の準備と管理

| コマンド | 内容 |
|---|---|
| `/headhunt setmode on\|off` | admin、プレイヤー専用。設定モードを切り替える |
| `/headhunt start solo` / `start team [shared\|individual]` | admin。チーム戦の省略値は shared。全登録を検証してから開始 |
| `/headhunt reset` / `stop` | admin。reset は発見状況だけを消し、進行中でも使える。stop はゲームを終了 |
| `/headhunt list` / `validate` / `repair` | admin。登録一覧、検証、修復。repair は進行中不可 |
| `/headhunt deleteall` → `deleteall confirm` | admin。同じ送信者が30秒以内に確定。進行中不可 |
| `/headhunt team create チーム` / `delete チーム` | admin。進行中は編成変更不可 |
| `/headhunt team join チーム [名前]` / `leave [名前]` | admin。名前省略は自分。対象はオンライン。1人1チーム |

設定モードで頭ブロックを置くか、空のメインの手で既存の頭を右クリックして登録します。しゃがんで右クリックすると登録解除です。モード中の管理者は停止中の宝を壊して解除できます。開始時に全員の設定モードを解除しますが、ログアウトだけでは設定モードを消しません。

開始時の拒否理由は「既にイベントが進行中です。」「宝HEADが1件も登録されていません。」「メンバーがいる参加チームが2つ以上必要です。」、または登録検証の問題です。検証では未読込ワールド、範囲外のY、重複座標、頭がない、宝ID不一致を検出します。

repair は重複・範囲外・頭がない定義を削除し、頭があれば宝IDを書き直します。未読込ワールドや更新失敗は保持します。deleteall は宝の登録情報とIDを消し、頭ブロック自体は残します。更新できなかった定義は保持します。確認期限切れは「確認がタイムアウトしました。もう一度 /headhunt deleteall を実行してください。」です。

## ルート設定

保存先は `plugins/OyasaiGames/config.yml`。

| キー | 同梱値 / 未指定時 | 内容 |
|---|---|---|
| `games.headhunt.enabled`・`games.slot.enabled`・`games.weapons.enabled`・`games.pvp.enabled`・`games.tntrun.enabled`・`games.roulette.enabled` | すべて true / true | モジュール起動スイッチ |
| `games.bedwars.enabled` | false / false | BedWars は明示的に有効化する |
| `roulette.cooldown-seconds` | 10 / 10 | 抽選完了からの秒数。0で待ち時間なし |
| `roulette.chat-interval-ticks` | 同梱なし / 16 | 結果通知のtick間隔 |
| `roulette.excluded-materials`・`force-full-blocks`・`force-non-full-blocks` | 同梱なし / 空リスト | 除外と分類上書き。force-full が force-non-full より優先 |
| `roulette.broadcast.sound`・`volume`・`pitch` | `ENTITY_PLAYER_LEVELUP`・1.0・1.2 | **設定は同梱されるが読み取られない**。実際の効果音はコード固定で本人にだけ再生 |
| `weapons.compatibility.projectile-speed-scale`・`recoil-scale`・`knockback-scale`・`spread-scale` | すべて0.1 / 0.1 | 弾速・反動・ノックバック・散布の換算係数。有限の非負値が必要 |
| `games.slot.legacy-last-used-unit` | 同梱なし / 空文字（milliseconds と同じ） | 旧クールダウンの時刻単位。seconds も指定可 |
| `games.slot.legacy-cooldown-duration-unit` | 同梱なし / 空文字（seconds と同じ） | 旧待ち時間単位。milliseconds は1000で割り切れる値のみ |

ルーレットは `roulette.*` の指定がない場合、同名のルート旧キーを参照します。無効な材質名は警告して飛ばします。チャット間隔の正値検証はありません。正のtick数を指定してください。実行中の印を付けてからスケジューラーへ渡すため、スケジュール失敗や繰り返し実行されない場合は印が残り、再抽選できなくなるおそれがあります。ログアウトまたはプラグイン停止で印を消します。負値の具体的な扱いはサーバー側依存で未確認です。Dice・Toys・肝試しには有効化スイッチや調整用設定を読み取る処理がありません。

## スロットの設定

`slot/config.yml`（以下のデータパスは `plugins/OyasaiGames/` からの相対パス）を読みます。初めて作る空の環境では Luck の2係数だけを書きます。

| キー | 未指定時 | 内容 |
|---|---|---|
| `luckLevelToPercentConversion` / `badLuckLevelToPercentConversion` | 12.5 / -12.5 | 効果レベルごとの当選率加算（百分率） |
| `noPermissionNeededForDefaultAccess` | false | 既定 guiPermission の権限判定を省略 |
| `permissionDenied` / `notEnoughMoney` / `goodLuck` | 拒否・金欠の日本語表示 / `Good luck!` | 文言。旧翻訳キーそのものは使わずコードの代替文にする |
| `showItemName` | true | 台の `displayItemNameInChat` と合わせて景品名を表示 |
| `backupMachinesOnPluginUnload` | false | 停止時に `slot/machinesLastBackup/` へ台だけコピー |

`defaultWinMessage`・`defaultLossMessage`・language/OTA/例外送信・各種別通貨のキーなどは、読込時の許可リストに含まれるものもありますが、それによる動作は実装されていません。

台は `slot/machines/*.yml` に置きます。作成・編集 GUI はありません。

| 台のキー | 必須条件・未指定時の扱い |
|---|---|
| `machineUUID` / `machineType` | UUID / BLOCK・BLOCK_LINK・ENTITY。重複 UUID の後の台は読込拒否 |
| `worldUID`・`blockX/Y/Z` / `entityUID` | ブロックはワールド UUID と整数座標、エンティティは UUID |
| `linkTo` | BLOCK_LINK の参照先 UUID。連鎖可、循環・参照先なしは無効 |
| `isCitizensNPC` | ENTITY は true を拒否。景品のない ENTITY は遊べない台として保持 |
| `slotMachineName` / `guiPermission` / `locked` | 未指定は台 UUID / `slotmachine.access.default` / false |
| `priceType` / `playMode` / `pullPrice` | MONEY / LIMITED_PLAYER / 有限の非負値が必要 |
| `visualType` | SLOTMACHINE・CSGOWHEEL・CSGOWHEEL_VERTICAL のいずれか |
| `chanceToWin` / `cooldown` / `secondsBeforePrize` / `timesUsed` | 0〜1 / 非負の秒数 / 1〜3600秒 / 非負の整数が必要。wheel は減速・停止待ちを加えるので指定秒数と総演出時間は同一でない |
| `backgroundItem`・`emphasisItem`・`leverItem`・`leverItemActivated`・`itemListItem` | AIR 以外の Bukkit ItemStack が必要 |
| `hasWinMessage`・`hasLossMessage`・`displayItemNameInChat`・`broadcastWonItem`・`customLever`・`affectedByLuck`・`allowContentPreview`・`itemWeightOnPreview`・`itemChanceOnPreview` | すべて boolean の明示が必要。customLever は検証するが切替分岐に使わない |
| `winMessage` / `lossMessage` | 未指定は空文字。has* が false または空なら表示しない |
| `leverTitle` / `leverDescription` | 未指定は `&6Play for $price` / `$machineName$newline$balance` |
| `sounds.machineOpen/leverTrigger/machineSpin/csgoSpin/win/loss/error.key` | 名前空間付きの音名が必要。isCustom は読込許可されるが再生分岐には使わない。音量・ピッチは1固定 |
| `items.<景品>.item/weight/rewards` | 表示用 ItemStack、0〜20億の重み、空でない景品一覧。重み総和は正であること |
| `rewards.<番号>.type/item/command` | ITEM は正数量の ItemStack、COMMAND は空でないコマンド。コンソールから実行 |
| `items.<景品>.stats.timesWon` / `showAttributeModifiers` | 未指定は0 / true（一覧の属性表示） |

文言・コマンドの `$player`・`$machineName`・`$price`・`$balance`・`$newline` を置換します。景品は当選率判定後に重みで選びます。BLOCK_LINK は参照先のアクセス・料金・クールダウン・統計を使い、ブロック保護だけは設置側の locked を見ます。

## 武器の設定

`weapons/` 直下の `.yml`・`.yaml` と `general.yml` を読みます。取り込みはサブフォルダもコピーしますが、定義読込は再帰しません。武器IDは大文字小文字を区別せず一意である必要があります。通常品の `Item_Information.Item_Type` と `Item_Name` は必須です。accessory は単体配布できません。有効な定義が0件なら Weapons の起動に失敗します。新規環境で `weapons/` も旧 CrackShot の取り込み元もない場合、既定の有効設定では SEVERE ログが出ます。`/shot config reload` は現在の武器処理を止めてから読み直すため、失敗後は武器処理が停止したままです。定義を直して再読込してください。

| 定義グループ | 設定と未指定時の扱い |
|---|---|
| `Item_Information` | 材質・名前・`Item_Lore`（`|` 区切り）、`Melee_Mode`、`Melee_Attachment`、`Attachments.Type/Info/Toggle_Delay/Sounds_Toggle`、`Inventory_Control`、`Hidden_From_List`、`Remove_Unused_Tag`、入手音。参照先の attachment 不在は全体読込の失敗 |
| `Shooting`・`Sneak` | 左/右・二丁、Projectile_Type/Amount/Speed/Damage/Subtype、散布、反動、クリック/破壊抑制、落下距離リセット。対応 projectile は energy・grenade・flare・egg・fireball、その他は Snowball。未指定の量・威力・速度・散布は0 |
| `Reload`・`Ammo`・`Firearm_Action` | 容量、初期残弾、装填時間、個別装填、弾アイテム、装填時の消費、マガジン、二丁装填、銃の開閉。Reload.Enable が true なら容量は正必須。Starting_Amount 未指定は満弾。時間・射撃間隔はtick |
| `Fully_Automatic`・`Burstfire` | 自動射撃の Fire_Rate は有効時1〜16。バーストは未指定発数を最低1、間隔を最低0として使う。CHAINSAW・AK-47・RITTAIKIDOU の固定上書きは下記参照 |
| `Scope` | Enable、Zoom_Amount、Night_Vision、Zoom_Before_Shooting、Zoom_Bullet_Spread、切替音。ズームは移動低下効果を使う |
| `Abilities`・`Extras` | ノックバック、無敵時間解除、落下無効、死亡時保持、種別倍率、反動縦成分抑制、水中無効、使い切り、Run_Command。Run_Command の先頭 `@` はコンソール、他は本人実行 |
| `Headshot`・`Backstab`・`Critical_Hits`・`Damage_Based_On_Flight_Time` | 基礎ダメージに加算後、種別倍率。Critical の Chance は百分率。飛行加算上限は未指定で Double.MAX_VALUE |
| `Explosions`・`Lightning`・`Airstrikes`・`Cluster_Bombs`・`Shrapnel` | 爆発、地形損傷/所有者免疫、雷、空爆、分裂、破片。爆発半径は未指定4、倍率は100（%）、空爆回数/範囲・分裂数は未指定1。他の数値は基本0 |
| `Particles`・`Potion_Effects`・`Hit_Events`・`Fireworks`・`Spawn_Entity_On_Hit`・`Custom_Death_Message` | エフェクト・効果・文言・召喚。音は `音名-音量-ピッチ-遅延tick`（省略1・1・0）、ポーションは `名前-持続tick-レベル`（レベル1以上） |
| `Explosive_Devices` | Enable、Device_Type（landmine・remote・itembomb・trap）、Device_Info、作動文言・音。書式は `WeaponDevices.kt` の `DeviceInfo.parse` 参照。遠隔設置上限は未ロード分・設置確定待ちも数える |
| `Riot_Shield`・`SignShops` | 盾の正面防御/耐久減少、ショップ有効・価格・Sign_Gun_ID。看板1行目は `[CS]1`〜`[CS]999` の完全一致。価格は `材質ID-正整数`、支払いはアイテム |

武器の boolean は原則 false、整数/小数は0、文字列は空です。例外や対応キーの正本は `WeaponCatalog.kt`・各処理ファイルです。`supportedKeys` は警告抑制のリストで、全項目の完全互換性や消費を保証しません。逆に、実際に使う `Potion_Effects.Potion_Effect_Victim`、`Headshot.Message_Shooter/Message_Victim`、`Hit_Events.Sounds_Impact` もリスト外なので警告されます。「未対応キー」の警告だけで未実装と判断せず、各処理ファイルを確認してください。発射体の失効は通常1200tick、空爆等の落下物は200tick上限です。

CHAINSAW・AK-47・RITTAIKIDOU は武器ID（大文字小文字を区別しない）で観測値の固定上書きが選ばれます。自動射撃（Fully_Automatic 有効・Burstfire 無効）の周期は CHAINSAW が10tick中1〜9、AK-47 が2tick中0、RITTAIKIDOU が5tick中1〜4。非近接の命中ダメージはそれぞれ3・4・0、RITTAIKIDOU の反動速度は1.6、CHAINSAW の energy 命中判定は専用形状です。一般の CrackShot 換算ではなく、この3種に限る実装です（`WeaponObservedOverrides.kt`・`WeaponCombat.kt`）。

`general.yml` の `Disabled_Worlds`（空）、`Inventory_Control.<グループ>.Limit`（0）・Message_Exceeded/Sounds_Exceeded（空）、`Merged_Reload.Disable`（false）・Message_Denied/Sounds_Denied（空）を使います。Inventory_Control はホットバーの所持枠数を数えます。旧名称だけの武器は材質と正規化した名前で照合し、曖昧なら認識しません。弾速等の既定係数で旧 CrackShot と同じになる保証はありません。

## PvP の設定

`pvp/config.yml` はコマンド `whitelist`（未指定は空）だけを使います。`pvp/classes.yml` はコピーしますが、クラスをそこから読む処理はありません。クラスは `pvp/arenas/*.yml` の `classitems` に定義します。

以下はアリーナ YAML の未指定時の値です。`general.goal`、`spawns`、空でない `classitems` は必須。チーム戦ではチームごとに fight/lounge 地点、個人戦でも fight/lounge 地点が必要です。地点はワールドと座標をカンマで区切り、任意で向きを続けます。`arenaregion` は cuboid のみで、旧文字列と section 形式に対応します。

| キー | 未指定時 | 内容 |
|---|---|---|
| `general.goal` | 必須 | TeamDeathMatch・TeamLives・TeamPlayerLives・PlayerDeathMatch・PlayerLives |
| `general.enabled` / `gamemode` / `quickspawn` | true / SURVIVAL / true | 有効、ゲームモード、ランダムスポーン（false はチーム内順番） |
| `general.timer.end` / `classSwitchAfterRespawn` / `leavedeath` | 0 / false / false | 制限秒（0はなし）、次の復活でクラス変更、範囲外で死亡判定 |
| `goal.teamdm.tdlives`・`playerdm.pdlives`・`teamlives.tlives`・`teamplayerlives.plives`・`playerlives.plives` | 各3 | 該当 goal のキル目標/残機。実際のルールでは最低1として扱う |
| `goal.teamdm.suicideScore` / `uses.suicidepunish` | false | キル目標型の自滅を他の側の得点にする |
| `teams` / `classitems` / `classchests` | red・blue / 必須 / 空 | チーム色、items/armor/offhand の装備、装備元容器。classchests は末尾4枠が防具、その前1枠がオフハンド |
| `ready.autoClass` / `block` / `minPlayers` | none / IRON_BLOCK / 2 | 自動クラス、準備ブロック、最低人数。minPlayers は2以上。2未満は開始可否の判定で例外となり、アリーナを失敗状態へ回す |
| `ready.maxPlayers` / `maxTeam` | 0 / 0 | 上限。0は無制限 |
| `ready.checkEachPlayer` / `checkEachTeam` / `neededRatio` | false / true / 0.5 | 全員/各チームの準備、必要割合。QuickLounge 等の自動準備は別判定 |
| `time.startCountDown` / `endCountDown` / `teleportProtect` | 10 / 5 / 3 | 開始・終了・移動保護の秒数 |
| `join.allowDuringMatch` / `allowRejoin` | false / false | 途中参加・同じ試合への再参加 |
| `uses.ingameClassSwitch` / `woolHead` / `perms.teamkill` | false | 試合中クラス変更、頭の羊毛、味方攻撃許可 |
| `player.health` / `maxhealth` | -1 / -1 | 正値で上書き。health 未指定は最大まで回復、maxhealth 未指定は属性を維持 |
| `player.foodLevel` / `saturation` / `exhaustion` | 20 / 20 / 0 | 満腹度・隠し満腹度・消耗 |
| `player.preventDeath` / `hunger` / `collision` | true | 致命打を模擬死亡にする、空腹変動、衝突 |
| `player.itemsonkill` | 空 | キル時アイテム。addItem の余剰を扱う処理はない |
| `protection.enabled` / `spawn` | true / 0 | 領域の保護、スポーン保護半径（0はなし） |
| `block.blacklist.break` / `cmds.whitelist` | 空 | 破壊禁止材質と参加中に許す追加コマンド |
| `tp.exit` / `win` / `lose` | old | 元の場所。別値は spawns のキーを指定 |
| `mods` | 空 | 下記機能を使用するモジュール名 |
| `modules.battlefieldjoin.joinDuration` / `modules.aftermatch.aftermatch` | 30 / 空 | 途中参加秒数（0以下は制限なし）/ `time:秒数` で after 地点へ移し個人残機を1にする |
| `modules.betterclasses.<クラス>.neededEXPLevel/maxGlobalPlayers/maxTeamPlayers/permEffects` / `modules.betterclasses.maxPlayerSwitches` | 0 / -1 / -1 / 空 / -1 | 必要レベル、人数、効果レベル、変更回数。-1は上限なし |
| `modules.bettergears.head/chest/leg/foot/onlyifleather` / `colors.<チーム>.RED/GREEN/BLUE` | true / 未指定ならチーム色等 | 防具の色付け |
| `modules.chestfiller.clear/minItems/maxItems/sourceLocation/items/containerList` | true / 0 / 5 / 空 / 空 / 空 | 中身を配る。sourceLocation 指定ならそこから、なければ items。最大27個、空の供給元は失敗 |
| `modules.projectiles.egg/snowball/fishHook/enderPearl` | false | 対象の命中で0.05ダメージとノックバック |
| `modules.blockrestore.hard/restoreblocks/restorecontainers` | false / true / false | 全領域退避/変更ブロック復元/容器内容復元 |
| `modules.worldedit.autoload/regions/replaceair` | false / 空 / true | schematic 自動復元。regions 未指定は BATTLE |
| `modules.vault.conditions.entryFee/minPlayers/minPlayTime` | 0 / 2 / 0 | 参加費、勝利報酬の最低人数・プレイ秒 |
| `modules.vault.reward.kill/win/death` | 0 | Vault/Vaultre 使用時の報酬 |
| `modules.vault.bet.enabled/time/minAmount/maxAmount/winFactor` | false / 60 / 0 / 0 / 1 | 賭け受付、秒、下限、上限（0なし）、勝ち配当倍率 |
| `modules.announcements.start/join/winner` | false | 全体通知 |
| `msg.lounge` / `starting` | クラス選択・準備の案内 / 会場名＋starting | 待機/開始文言。starting の `%1%` は会場名 |

対応する mods は StandardLounge・StandardSpectate・QuickLounge・BattlefieldJoin・BetterGears・BetterClasses・Vault・Vaultre・ChestFiller・AfterMatch・Announcements・Projectiles・BlockRestore・WorldEdit・NCModule です。外製モジュール JAR を実行する機能はありません。未知キー/モジュールはログに出ます。旧賞金・残機キーへの代替読込はありません。

## BedWars の設定

設定は `bedwars/config.yml`、`bedwars/SBA/sbaconfig.yml`、`bedwars/arenas/*.yml`、ショップ YAML に分かれます。既定データファイルを生成する処理はなく、下表は未指定時のコード値です。

アリーナは `name/world/pos1/pos2/lobbySpawn/specSpawn/teams` が必須。`lobbySpawnWorld` 未指定は会場ワールドです。name に使えるのは英数字・空白・`_`・`-`（`[A-Za-z0-9 _-]+`）だけです。参加 GUI の対象は1チームの人数が1〜4の会場だけです。地点は `x;y;z[;yaw;pitch]`。チームは2つ以上、一意な名前と色、`bed/spawn` と `maxPlayers`（既定1、1〜64）が必要です。`minPlayers=2`、`pauseCountdown=60`秒、`gameTime=3600`秒、`postGameWaiting=3`秒。範囲内にチーム地点・資源・店舗を置きます。

`spawners` は location/type（iron・gold・diamond・emerald）、startLevel=1、maxSpawnedResources=-1、hologramEnabled=true、任意の team。`stores` は loc、shop=`shop.yml`、type=`VILLAGER`、name=`Shop`、任意の team。店舗の実体は type に関係なく Villager、team の店舗アクセス制限はありません。boolean 設定の `constant.<キー>` は inherit なら共通値、それ以外は文字列 true だけを有効とします。

| config.yml のキー | 未指定時 | 内容 |
|---|---|---|
| `mainlobby.enabled/location/world` | false / 必須（有効時） | 終了・中断時の復元先（reload・停止・試合失敗の abort を含む）。通常の途中退出・起動復旧は参加前 |
| `game-start-items` / `gived-game-start-items` | true / 空なら木の剣・革防具一式 | 開始/復活装備。コンパスを自動で装備に足さない |
| `friendlyfire` / `allow-crafting` | false | 味方攻撃、クラフト |
| `allow-spectator-join` / `compass-enabled` / `remove-unused-target-blocks` / `disable-hunger` | true | 試合中観戦参加、敵方向更新、未使用ベッド撤去、空腹停止 |
| `respawn-cooldown.enabled/time` / `respawn.protection-enabled/time` | true・5 / true・3 | 復活待機と保護の秒数 |
| `preventArenaFromGriefing` / `destroy-placed-blocks-by-explosion` | true | 待機会場保護、設置済みブロックへの爆発 |
| `destroy-placed-blocks-by-explosion-except` | 空 | 爆発から除外する材質 |
| `breakable.enabled/asblacklist/blocks` | false / false / 空 | 元地形を壊せる材質。設置ブロックでも自動保護範囲は破壊不可 |
| `use-chunk-tickets-if-available` | true | 会場のチャンク保持。1024チャンク上限 |
| `spawn-resources-on-game-start` | false | 開始直後の資源生成 |
| `resources.iron/gold/diamond/emerald.interval` | 2.5 / 8 / 30 / 60 | 秒。小数部を切り捨ててtickへ換算し、最低1tick |
| `reset-full-spawner-countdown-after-picking` / `spawner-disable-merge` | true | 拾得後の生成時計リセット、資源のマージ防止 |
| `specials.teamchest.turn-all-enderchests-to-teamchests` | true | エンダーチェストを試合内チーム共有容器として開く |
| `vault.enable` / `vault.reward.kill/win/final-kill/bed-destroy` | false / すべて0 | 報酬。**final-kill は指定額に関係なく支払わない** |
| `statistics.scores.kill/final-kill/bed-destroy/win/lose` | 10 / 15 / 30 / 70 / 0 | 統計得点 |
| `specials.throwable-fireball.damage/incendiary/damage-thrower` | 2 / true / true | 爆発の大きさ、着火、投げ主へのダメージ |
| `specials.auto-igniteable-tnt.explosion-time/damage/damage-placer` | 3 / 2.5 / true | 導火秒、爆発の大きさ、設置主へのダメージ |
| `specials.golem.name-format/show-name/collidable/health/speed/follow-range` | `%team% Golem` / true / false / 20 / 0.25 / 10 | ゴーレムの表示と属性。speed/follow は商品定義優先 |

| SBA/sbaconfig.yml のキー | 未指定時 | 内容 |
|---|---|---|
| `party.enabled/invite-expiration-time/leader-autojoin-autoleave` | false / 60 / true | パーティーと招待期限秒・同行 |
| `games-inventory.enabled` / `shout.time-out` | true / 60 | 参加 GUI、全体チャット待ち秒 |
| `chat-format.game-chat.enabled` / `lobby-chat.enabled` | true | 書式使用。false でも試合内の宛先振り分けは行う |
| `chat-format.game-chat.format/format-spectator/all-chat-format` / `chat-format.lobby-chat.format` | `%player% > %message%` | 書式。%player%・%team%・%color%・%message% を置換 |
| `chat-format.game-chat.all-chat-prefix` | `@a` | 通常チャットの全体宛接頭辞 |
| `npc.enabled/replace-stores-with-npc` / `shop.normal-shop.entity-name`・`shop.upgrade-shop.entity-name` | true / 空なら ITEM SHOP・TEAM UPGRADES | 村人の名前。人型 NPC を作る設定ではない |
| `give-killer-resources` / `running-generator-drops` | true / 空 | キル時に移す資源材質 |
| `generator-splitter.allowed-materials` | 空 | 取得時、同チームの各軸±3ブロック内に同数量を分配する材質 |
| `final-kill-lightning` / `replace-sword-on-upgrade` | true | 最終キルの雷演出、剣購入時に既存剣を除く |
| `explosion-damage` / `tnt-fireball-jumping.detection-distance/acceleration-y/reduce-y/launch-multiplier/fall-damage` | 0.25 / 3 / 0.5 / 2.2 / 2 / 3 | 試合所有の爆発ダメージとジャンプ・着地ダメージ |
| `upgrades.timer-upgrades-enabled/multiplier/show-upgrade-message` | true / 0.25 / true | 時間による生成量強化（間隔は短縮しない） |
| `upgrades.time.Diamond-II/III/IV`・`Emerald-II/III/IV` | 空 | 段階に上がる経過秒。指定された時刻だけ使う |
| `upgrades.limit.Iron/Gold`・`Diamond-I/II/III/IV`・`Emerald-I/II/III/IV` | -1 | 周囲の資源数量上限。アリーナの maxSpawnedResources が非負ならそちら優先 |
| `upgrades.limit.Sharpness/Protection/Efficiency` | 1 / 4 / 2 | チーム強化上限 |
| `upgrades.prices.Sharpness-I/II/III/IV`・`Prot-I/II/III/IV`・`Efficiency-I/II/III/IV` | 商品価格（なければ0） | 段階価格。0以下または上限到達で購入不可 |
| `upgrades.trap-detection-range` | 7 | ベッド周囲の罠・healpool 範囲 |
| `floating-generator.enabled/height/mapping.DIAMOND/mapping.EMERALD` | true / 2.5 / 未指定は表示なし | 資源表示 |
| `game-scoreboard.enabled/lobby-scoreboard.enabled/show-health-in-tablist/show-health-under-player-name` | true | スコアボードと体力表示 |
| `disable-item-damage/disable-armor-inventory-movement/block-item-drops/block-players-putting-certain-items-onto-chest` | true | 耐久減少、防具移動、投棄、装備を容器へ入れる操作の制限 |
| `allowed-item-drops` | 空 | 投棄制限の例外材質 |
| `automatic-protection.spawner-diameter/team-spawn-diameter/store-diameter` | 5 / 3 / 3 | 資源・スポーン・店舗の保護直径 |
| `spectator.teleporter` / `spectator.tracker` の `enabled/name/material/slot` | true・Players・REPEATER・0 / true・Players・COMPASS・4 | 両方とも観戦先メニューを開く。slot は0〜8に補正 |

ショップの `data` に、stack（文字列または map）、price（`正整数 of iron|gold|diamond|emerald`）、properties、items/id/locate、row（1〜6）・column（0〜8）・skip を指定します。stack は type、amount（1〜64、省略1）、display-name、lore、enchants、effects、potion-type。不正な商品は警告して飛ばします。最初の property を使い、通常の色付け・quickbuy・特殊アイテム、強化の protection/sharpness/efficiency/forge/healpool/blindtrap/minertrap/trap に対応します。forge は増分0.2だけを受け付け、商品未指定の上限2.0。罠の効果・特殊品の options は `BedWarsShop.kt`・`BedWarsSpecials.kt` が正本です。

未対応キーは起動ログで確認します。設定を取り込んだことと、旧外製の GUI・外観・動作が再現されることは別です。

## TNTRun の設定

`tntrun/config.yml`・`arenas/*.yml`・`shop.yml`・`signs.yml`・`lobby.yml`・`configtitles.yml`・`configbars.yml` を使います。ファイルの既定生成はありません。

| アリーナのキー | 未指定時・制約 |
|---|---|
| `world/p1/p2/loselevel.p1/spawnpoint.p1/spectatorspawn.p1` | 必須。Vector または x/y/z section。範囲体積1〜50万、同ワールドの会場の重なり不可 |
| `spawnpoint.yaw/pitch`・`spectatorspawn.yaw/pitch` | 0 |
| `finished` / `enableOnRestart` | false / true。両方trueの会場を公開 |
| `minPlayers/maxPlayers/countdown/timelimit` | 2 / 12 / 10秒 / 300秒。最大100人、countdown は0〜3600、時間は0〜86400（0なし） |
| `gameleveldestroydelay/regenerationdelay` | 8 / 60 **tick**。0〜1200 / 0〜12000 |
| `votePercent` / `startVisibleCountdown` | 0.75 / 10。必要票は最低人数×割合の切上げ。強制開始でも最低2人 |
| `teleportto` / `damageenabled` / `punchDamage` | PREVIOUS / NO / true。復元先は PREVIOUS・LOBBY、ダメージは NO・YES |
| `allowDoublejumps/shop.enabled/stats.enabled` | true |
| `stats.minPlayers` / `reward.minPlayers/money/xp` | 0 / 0・0・0。勝者のみ、開始人数を判定 |
| `displayfinalpositions` | 3 |
| `kits.enabled/joinfee/testmode/commandsOnStart/commandsOnStop/spawnpoints` | false / 0 / false / 空 / 空 / 空だけを受け付ける |
| `places.<順位>.money/xp` / reward・places の command/material | 下位報酬は0のみ、command は空、material は未指定だけ許可 |

| config.yml のキー | 未指定時 | 内容 |
|---|---|---|
| `gamemode/database/onstart.delay/freedoublejumps.enabled` | SURVIVAL / file / 0 / false | ADVENTURE も可。後3項目はこの既定値のみ許可 |
| `onjoin.fillhunger` / `onjoin.fillhealth` / `disablecollisions` | true / false / false | 参加時の満腹・回復・衝突。disablecollisions はトップレベル。onjoin.disablecollisions は未対応 |
| `parties.enabled` / `fireworksonwin` | true / false | パーティー、勝利花火 |
| `anticamping.enabled/teleporttime` | true / 5 | 開始前に移動。teleporttime は最低5秒として比較 |
| `doublejumps.multiplier/height` | 1.5 / 0.7 | ジャンプ速度 |
| `shop.enabled/name/size/doublejump.maxdoublejumps` | true / TNTRun SHOP / 27 / 10 | size は9〜54の9の倍数 |
| `currency.suffix` | ` coins` | 残高表示。currency.prefix は許可キーだが表示に使わない |
| `usexpbar.countdown/timelimit` | true | 残秒をレベル欄に表示 |
| `special.UseBossBar/UseTitle/UseScoreboard/FancyBlockBreak` / `special.BossBarColor` | true / RANDOM | 表示・床破壊演出 |
| `scoreboard.header/waiting/playing/removefromspectators` | TNTRUN / 空 / 空 / true | スコアボード。最大15行 |
| `broadcastwinlevel` / `commandsonwin` | 2 / 空 | 0通知なし、1試合内、2以上全体。勝利コマンドの `{PLAYER}` を置換 |
| `sounds.arenastart/itemselect/blockbreak.enabled/sound/volume/pitch` | true / LEVELUP・BUTTON_CLICK・SAND_BREAK の現行音名 / 1 / 1 | 音 |
| `items.vote/info/shop/stats/leave.use/material/slot/name` | true / DIAMOND・EMERALD・NETHER_STAR・REDSTONE・GREEN_BED / 0・1・2・3・8 / キー名 | 待機アイテム。配布slotを0〜8に補正、操作照合は設定値そのもの |
| `signs.prefix/arena/join/status.*` | `&6TNTRun` / `&0` / `[Join]` / 状態名 | 登録済み看板を書き換える |

ショップ購入には0円の商品でも Vault と経済プロバイダーが必要です。`shop.doublejump.maxdoublejumps` は購入回数ではなく、現在の残数＋購入数の上限です。

shop.yml は `<商品>.material=FEATHER` のジャンプ商品だけで、cost（既定0、有限非負）、amount（既定1、1〜10）、name（商品キー）、lore（空）、permission（空）、items.1.amount（既定1、正なら在庫あり）を使います。

看板は `signs.yml` の `arenas.<会場>.<番号>.world/x/y/z`、ロビーは `lobby.yml` の `lobby.world/vector/yaw/pitch`。タイトルは join/subjoin・starting/substarting・start/substart・win/subwin（未指定は空）、バーは waiting/starting/playing（未指定 `TNTRun {COUNT} / {SECONDS}`）です。表示の置換は `TntrunModule.kt` の display/title 参照。旧 messages.yml・kits.yml は保持しますが内容を使いません。

## 肝試し・Toys・Dice の準備

肝試しはゲームワールド、会場・ロビー・装備チェスト・ミッションチェスト・制御ブロックの座標を**コードに固定**しています。公開資料に実配置は転記しません。設定で別会場へ切り替える機能はありません。開始前に実装の必要地点に対応するワールドと容器を確認してください。

- 最低3人、最大10人。6人以下は鬼2人、それ以上は鬼4人。鬼希望を先にシャッフルして選ぶため、希望以外から補充されることもあります。
- 装備用チェスト2個と名付き FILLED_MAP が必要です。準備失敗・接続確認失敗は中断し、退避したデータを復元へ回します。
- `/checkmission` は指定地点10ブロック以内の、演出中でない探索者の最も近い1人を選びます。地図名は色を除いて大文字小文字無視の完全一致。不一致なら2ダメージ。次の地図の重複回避は最大10回の引き直しで、重複を完全には禁止しません。
- 実行する外部コマンドは ch/leave、vanilla の team・scoreboard・attribute・effect です。チャットコマンドの提供元・成功は未確認。起動ごとに team の作成・設定と `minigame_left` objective の削除・再作成を実行します。起動2tick後、試合がなければメインスコアボードの sidebar 表示を解除し、試合があればゲーム用表示へ切り替えて runner の名前を隠します。
- Toys は名前・lore で識別します。花火の lore は `§8クリックで着火`、材質は TIPPED_ARROW、名前には「線香花火」が必要です。粒子は「鬼百合」「楓」「矢車菊」「桜」の完全名で選び、それ以外は燃焼状態だけで粒子なし。着火は200tickで、ログアウト中は進みません。ナイフは IRON_SWORD と `§c自決用ナイフ` の完全一致です。
- Dice は専用品を配布し、モード/通知をアイテムに保存します。通常のログアウト・停止ではオンラインの持ち主へ返却を試みますが、投擲状態の永続台帳はありません。満杯なら地面へ落とし、持ち主のいない自動回収は返却しません。

## データの保存場所

すべて `plugins/OyasaiGames/` 配下です。個人データ・復旧記録・実設定を公開 docs に貼り付けないでください。

| 場所 | 内容 |
|---|---|
| `treasures.yml`・`.bak` | 宝UUID→ワールド名・整数座標。変更前のバックアップ |
| ワールド内の宝HEAD | `headhunt:treasure_id`。旧 namespace を維持 |
| `slot/machines/`・`players/`・`payments/` | 台・統計、UUIDごとのクールダウン、プレイヤーUUID_台UUIDごとの決済状態 |
| `weapons/`・`weapons-devices.yml`・ワールド/アイテム内PDC | 武器定義、遠隔装置と未ロード装置、残弾・所有者等 |
| `pvp/arenas/`・`config.yml`・`classes.yml`・`schematics/` | アリーナと取り込みデータ |
| `pvp/players/`・`terrain/`・`matches/`・`payments.yml`・`stats.yml` | 持ち物退避、地形、試合中断マーカー、経済台帳、累積 K/D/勝利 |
| `bedwars/arenas/`・ショップ YAML・`SBA/`・`sign.yml`・`database/` | アリーナ、店舗、取り込んだ追加設定/quickbuy/旧統計 |
| `bedwars/players/`・`terrain/`・`payments.yml`・`statistics.yml` | 復元記録、経済台帳、イベントキー付き統計 |
| `tntrun/records.yml`・`players/`・`terrain/`・`payments.yml`・`purchases/`・`results/` | ジャンプ残数/統計/処理済み印、退避、床、経済、購入意図、試合報酬 |
| `tntrun/players.yml`・`stats.yml`・`import.yml` と各設定 YAML | 旧個人データ・統計、取り込み記録、会場設定 |
| `kimodameshi.db` | SQLite。累積ポイント/名前、復元 YAML、進行状態 YAML、移行済み印 |
| メモリだけ | ルーレットの選択/待ち時間、サイコロ投擲、HeadHunt のチーム/発見/進行、PvP・BedWars・TNTRun の進行とパーティー/Toys燃焼 |

## 起動と移行

肝試しと Toys の初期化はモジュール単位の例外処理で保護されていません。肝試しの SQLite 接続や対象 Skript CSV の解析などで例外が出ると `OyasaiGamesPlugin.onEnable` へ伝播し、プラグインの起動処理全体が途中で失敗します。後続の Dice・ハブ登録まで進めません。初期化済みモジュールの最終状態はサーバー側の例外処理に依存し、実機では未確認です。

1. 対象の旧ゲームを終了し、旧設定・個人データとワールドを保管する。肝試しは旧 Skript の持ち物退避を取り込まないため、旧側で復元を終えてから切り替える。
2. 対応する旧プラグイン/旧スクリプトの処理を停止する。外製の未対応 API や同名コマンドへの依存も確認する。
3. 下表の取り込み先の存在を確認する。**空フォルダでも存在すれば再取り込みしない**ものがある。
4. 必要なワールドを事前にロードし、起動ログの有効化・取り込み件数・拒否したデータ・未知キーを確認する。
5. 元の持ち物へ戻れること、地形復元、課金/返金、旧アイテムの認識をゲーム内で確認する。この文書の確認では未実施。

| 機能 | 初回取り込み条件・対象 |
|---|---|
| HeadHunt | 新 treasures.yml がなく、旧 `HeadHunt/treasures.yml` がファイルならコピー。旧を残す |
| Slot | 新 slot/ がなく、旧 SlotMachine/machines がある。machines/players の YAML と必須 config.yml をコピーし imported.txt を作る |
| Weapons | 新 weapons/ がなく、旧 CrackShot/weapons がある。YAML と旧 general.yml をコピー |
| PvP | 新 pvp/ がなく、旧 pvparena/arenas がある。コードの固定対象15会場の読める YAML、config/classes、schematics。対象名の正本は `PvpConfig.kt` の legacyArenas |
| BedWars | 新 bedwars/ がなく、旧 BedWars/arenas がある。読める会場・指定店舗/追加店舗・共通設定/看板/統計、SBA 設定と games-inventory/quickbuy/shops の YAML |
| TNTRun | 新 tntrun/ がなく、旧 TNTRun_reloaded/ がある。会場・設定・看板・ロビー・任意の players/stats 等 |
| 肝試し | DB の players が0行で移行印なし、旧 Skript/variables.csv がある。`minigame::event_points::` と `minigame::player_name::` のみ。ゲーム状態・持ち物・スタミナは取り込まない |

HeadHunt 以外の上記フォルダコピーは staging から atomic move で公開し、原本を変更しません。PvP/BedWars は読める対象会場が0件なら取り込みを公開しません。staging が残っていたら内容を調べてから再試行します。肝試しの取り込みは全対象行を解析して SQLite transaction で確定し、失敗なら部分的な取り込みを残しません。成功0件でも移行印を残します。

- SlotMachine・CrackShot・BedWars/ScreamingBedWars・TNTRun_reloaded が有効なら対応モジュールは起動せず、後から有効になった場合も停止します。PvP は起動時に外製 pvparena を検出しますが、後からの有効化監視はありません。
- TNTRun は Multiverse-Core 後に起動する softdepend があります。未ロード会場は拒否され、ロード後の `/games reload` で再初期化できます。
- TNTRun の旧ジャンプは players.yml の UUID を優先し、なければプレイヤー名の大文字小文字無視の完全一致で初回 enlist 時に読みます。旧 `doublejumps.<名前>` 形式は自動移行しません。統計は旧 `stats.<UUIDまたは名前>.played/wins`。
- BedWars は旧統計の wins+loses から games を作ります。旧 finalKills は取り込まず0。SBA 参加 GUI 設定は保管しますが、内蔵 GUI は読めた会場から作ります。

## 保存失敗・中断時の対応

- **HeadHunt:** 登録・ID更新が先、YAML保存が後です。保存失敗では「宝HEAD情報の保存に失敗しました。管理者に連絡してください。」などを返しますが、メモリ/ブロックの変更を元に戻しません。`.bak`・現在の宝と定義を照合し、validate/repair を使います。不正エントリは読込時に飛ばすため、次の保存で元ファイルから失われることがあります。
- **共通持ち物復元:** PvP・BedWars・TNTRun は参加前に記録を書き、退出で全枠を置き換えます。復元後の vanilla player data 保存が成功してから記録を消します。死亡画面、ワールドなし、不正データ、移動キャンセル、I/O失敗では記録を残し、再接続・リスポーンで再試行します。復元処理で例外が出るとプレイヤーをキックします。原因が残ると再ログイン時の再試行でもキックされるため、ログ・ワールド・復旧記録を調べて原因を直してください。BedWars は停止・reload 時に復元を終えられなかった参加者もキックします。未復元ファイルを安易に削除しないでください。これら3ゲーム同士の重複退避は拒否しますが、**肝試しや他プラグインとの共通排他はありません**。
- **地形:** 変更前の記録が書けなければ変更を止めます。PvP・BedWars は対象の BlockData と設定された容器内容を戻しますが、`PvpTerrain.restore` はワールド保存を待たず記録を削除します。直後の強制終了まで含む永続復元は保証しません。TNTRun は床復元→ワールド保存→記録削除の順です。
- **経済台帳:** PvP・BedWars・TNTRun の payments.yml は Vault 呼び出し前に uncertain を保存します。結果不明は自動再送しません。起動時に charged の未消費引落しを返金へ回し、pending の入金を再試行します。経済ログ・残高と照合してから解決してください。Vault とファイルの一体のトランザクションはありません。
- **スロット:** PAID/REFUND_FAILED はモジュール有効化時に返金を試みます。`/games reload` の disable→enable でも実行しますが、抽選中は再設定を延期し、無効設定・Vault 不在などで有効化に進めない場合も実行しません。`/oslot reload` は定義の再読込だけで、この返金再試行はしません。CHARGING/DELIVERING/REFUNDING は結果不明として再実行しません。コマンド景品開始前の失敗は持ち物・統計・クールダウンを戻して返金を試みますが、開始後の失敗は「景品の処理が未確定です。自動返金せず管理者確認を待ちます: 理由」とし、返金も景品再実行も止めます。実行済みコマンドの副作用は取り消せません。決済成功後の表示失敗では返金しません。
- **TNTRun:** 未確定取引/購入記録のある人は参加できません。購入・賞金・XPは保存済み記録を再利用して復旧します。勝利コマンドや通知は再起動復旧で再実行しないため、強制終了時に通知・コマンドが欠けることがあります。外製が有効な間は復元も止め、復元待ちの人を保護のため切断します。
- **肝試し:** 自前 SQLite の退避と進行状態を使い、grace/playing は再起動で続行、preparing/ending は待機へ戻して復元に回します。復元コマンドの成功表示は1tick後の適用・保存の完了証明ではありません。DB 操作の一般的な例外復旧・複数更新の原子的なゲーム終了・player data 保存後の退避削除は実装されていません。再起動途中のポイント加算や復元を、共通 PlayerStore と同じ保証として扱わないでください。
- **Weapons:** 遅延処理が例外になればモジュールを停止します。遠隔装置保存失敗はログに出ます。旧地雷を認識する移行処理はなく、アイテム爆弾はセッション終了時・再起動で撤去します。

## 守られる範囲・連携の限界

- HeadHunt が防ぐのは宝IDの付いた頭の手動破壊です。爆発・ピストン等から守るハンドラはありません。発見操作は use 権限を確認しません。
- スロットの locked は台ブロックの手動破壊・爆発・ピストンを止めます。支えの破壊、ENTITY 台の破壊、ワールド編集全般の保護はありません。
- PvP は領域の指定保護を持ちます。BlockRestore は BATTLE 内で記録したブロックだけ、hard は1領域50万ブロックまで同期退避。容器の開閉・内容の変更全般を個別記録する機能ではないため、hard/容器復元/ChestFiller/WorldEdit の組み合わせを確認してください。TileState の任意PDC等の完全復元は保証しません。NOCAMP・WIN 等の旧領域フラグはパースされてもすべて処理されるわけではありません。
- BedWars は領域と試合所有の資源・発射体・店舗を追跡し、通常の破壊/設置・爆発・容器/ホッパー・流体等を制限します。試合所有の生成物は非永続です。記録外のプラグインによる直接変更や任意PDC・エンティティの完全巻き戻しは保証しません。
- TNTRun は参加者と読み込んだ会場内の破壊/設置、容器操作、爆発、流体、ピストン等を制限します。床消去で TileState と領域外を避けます。外部コードが直接変えた全状態の復元機能ではありません。
- Vault と経済プロバイダーはスロットに必須、他のゲームは有料機能/報酬を使う場合に必要です。WorldEdit/FAWE は PvP schematic 自動復元、floodgate は Dice の統合版判定に使います。Geyser 自体への API 呼び出しはありません。
- 同名コマンドの衝突・外製 API 互換は未確認です。PvPArena のチャット/Titles/外製イベント、BedWars の Citizens/人型スキン/旧GUI配置/ボスバー装飾/コマンド報酬/MySQL/Bungee、TNTRun の旧追跡GUI/帽子・エフェクト購入/ランキング/MySQL/Bungee/旧文言、Slot の別通貨/OTA/編集コマンドは実装していません。
- 肝試しは元の位置、効果、速度等の属性値を保存せず、終了時に固定ロビーへ移動・属性リセット・効果解除を行います。専用会場の制御ブロックも変更します。旧スクリプトと併用しないでください。
