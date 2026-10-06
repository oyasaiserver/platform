# EssentialsX の移動とデータ（段階3）

対象仕様: [EssentialsX 2.22.1-dev+12-776f709](https://github.com/EssentialsX/Essentials/tree/776f709)。
`teleport` パッケージを Main の try/catch 内で有効化する。全員分の一括移行は行わない。
本番・共有ローカルサーバーの操作や jar の反映は、この作業では行っていない。

## コマンドと権限

| 正規名     | 別名         |
| ---------- | ------------ |
| home       | homes        |
| sethome    | なし         |
| delhome    | remhome      |
| warp       | warps        |
| tp         | tp2p         |
| tphere     | s            |
| tpa        | tpask        |
| tpaccept   | tpyes        |
| tpdeny     | tpno         |
| tpacancel  | なし         |
| tpahere    | なし         |
| togglejail | jail, unjail |

基本権限は `essentials.<正規名>`。宣言した権限の既定は upstream 同様 OP。
`home.others` / `home.bed`、`sethome.others` / `multiple` / `multiple.<rank>` /
`multiple.unlimited`、`delhome.others`、`warp.list` / `others` / `otherplayers`、
`tp.others` / `position`、`togglejail.offline`、`jail.exempt`、`jail.notify` を扱う。
`/spawn` も `essentials.spawn` / `essentials.spawn.others` に統一する。
既存の `/back` と `/forward` の権限・別名・履歴方式は保持する。

指定の通常名・別名および spawn を Essentials またはバニラが持つ場合は、
段階2と同じ knownCommands 差し替えを行う。他プラグイン所有の同名は奪わない。
無効化時は自分がまだ所有するラベルのみ復元する。
Essentials が無い場合も plugin.yml に自作 tp を登録し、バニラに戻さない。
`essentials:` / `minecraft:` の名前空間は従来どおり。入獄者には原因によらず移動制御が効く。

- `/home 他人:名前`、`/sethome 他人:名前`（他人 名前も可）、`/delhome 他人:名前`。
  他人の UUID を直接指定することも可能。`/delhome *` は全ホーム削除。
- 引数無し home は1個ならそのホーム、複数なら一覧、ホーム無しなら bed または世界の spawn。
  名前が bed の場合は home.bed が必要。ホーム上限は default=3 / vip=5 / staff=10。
  multiple が無ければ1個、multiple.unlimited があれば無制限。
- `/warp` は一覧、`/warp 名前 [player]` は移動。setwarp / delwarp は作らない。
- `/tp player`、`/tp from to`、`/tp [player] x y z`。座標の `~` に対応。
- `/tpa player` / `/tpahere player`、`/tpaccept [player|*|all]` /
  `/tpdeny [player|*|all]`、`/tpacancel [player]`。最新の申請を既定で選ぶ。
  tpahere は申請時の地点へ移動。重複申請を拒否し、切断時にも関連申請を消す。
  申請はメモリだけに保存し、120秒で失効する。
- `/togglejail player jail [duration]` で入獄、`/togglejail player` で釈放。
  既に同じ牢屋にいる人に期間を指定すると刑期更新。setjail / deljail は作らない。
  オフライン入獄は togglejail.offline が必要。オンラインは jail.exempt を尊重する。

## 保存と初回移行

共通 `oyasaiutilities.db` の `schema_versions` に `teleport=1` を記録する。
機能の表変更と版更新は共通基盤のトランザクションで行う。

| 表               | 定義                                                                                                                                                                                                                                                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| teleport_players | player_uuid TEXT PRIMARY KEY; essentials_imported INTEGER CHECK(=1); jailed INTEGER CHECK(IN(0,1)); jail TEXT nullable; jail_timeout INTEGER (epoch ms); online_jail_until_ticks INTEGER (累積プレイ ticks); return_world_uuid / return_world_name TEXT nullable; return_x / y / z / yaw / pitch REAL nullable |
| teleport_homes   | player_uuid / name TEXT、複合 PRIMARY KEY; world_uuid / world_name TEXT nullable（片方必須）; x / y / z / yaw / pitch REAL NOT NULL                                                                                                                                                                            |

参加時と他人のホーム・牢屋操作時に対象 UUID だけを読む。自分の行・ホーム・移行印が
全て無い場合だけ `Essentials/userdata/<UUID>.yml` を読む。元ファイル無し・ホーム無しでも
移行印を保存する。全削除・釈放・再起動後に古い状態を再移行しない。
壊れた YAML は初期値で上書きせず失敗し、参加者は移動データの読込エラーとして切断する。
孤立した自分のホーム行がある場合も移行せず、移行印を補う。

ホームは world UUID と名前を保存し、UUID → 名前で解決する。
world に名前だけが入る旧形式と world-name だけの形式にも対応。
入獄は jailed / jail / **timestamps.jail** / timestamps.onlinejail / lastlocation を読む。
非標準 jail-timeout は timestamps.jail が無い場合のフォールバック。
牢屋名が欠落していても jailed=true は保持して移動を拒否する。
期限は毎秒と参加時に確認。オンライン刑期は累積 PLAY_ONE_MINUTE ticks も確認する。

保存値をコピーし、共通DBの専用スレッドでホームと入獄行を同時にコミットする。
保存待ちの再参照には最新 snapshot を使う。参加時には flush 成功を確認してから
Essentials の旧入獄状態を解除する。これにより旧 listener / timer が釈放を妨げず、
DB 保存失敗時に元の入獄状態だけを失うことも防ぐ。
**共存時、移行成功後に Essentials の jailed / jail / jailTimeout / onlineJailedTime は消す。**
それ以降は自前DBが正であり、Essentials userdata に入獄状態を書き戻す運用はしない。
この互換処理は専用 bridge に隔離し、Essentials 無しでも Feature / Spawn はロードできる。

## 人が編集する YAML

以下のファイルが無い場合だけ初回生成。元が壊れている場合は生成に失敗する。
既存の自作 YAML は上書きしない。編集は再起動で反映する。

- `Warps/warps.yml`: Essentials/warps/\*.yml の地点。
- `Jail/jails.yml`: Essentials/jail.yml の jails。
- `Kits/kits.yml`: Essentials/kits.yml の kits.tools.items。
- `Teleport/config.yml`: 安全探索=true、中心補正=true、world-teleport-permissions=true、
  world-home-permissions=false、per-warp-permission=false、spawn-if-no-home=true、
  tpa-accept-cancellation=120、teleport-back-when-freed-from-jail=true、jail-online-time=false、
  上記ホーム上限。遅延・クールダウン・無敵時間は指定どおり常に0。
- `Spawn/config.yml`: 従来の spawn 地点に加え、復活設定・歓迎文を初回だけ取り込む。
  既定 respawn-at-home=true / bed=true / anchor=false。設定済みの値は保持。

world-teleport-permissions は upstream 同様 TP 系に適用し、warp には適用しない。
home は別の world-home-permissions に従う。
TPA承認時の world 権限は、upstream の相手の現在世界を確認する分岐も保持する。
`/tpset` の OP / ホワイトリスト / ブラックリスト / open-close を tp・tphere・tpa・tpahere、
承認時にも確認する。メニューからの player_cmd も通常の executor を使う。

## 牢屋と既存機能

[upstream Jails.java](https://github.com/EssentialsX/Essentials/blob/776f709/Essentials/src/main/java/com/earth2me/essentials/Jails.java)
は HIGH の PlayerTeleportEvent で **全原因**の移動先を牢屋へ変更する。
PLUGIN も例外ではなく、ミニゲームのアリーナ移動にも牢屋の効き目がある。
こちらも PLUGIN の例外を作らず、エンダーパール・コーラスフルーツ・ポータルを含め、
牢屋の外へ向かう PlayerTeleportEvent を HIGHEST で取り消す。
差分は「牢屋へ差し戻す」から「取り消す」への変更で、依頼の明示要件に従う。
他プラグイン側は teleport の失敗を受け取り、プレイヤーは元の地点に残る。

YAML は領域ではなく地点なので、許可する移動先は同じ牢屋の world・xyz の一点。
入獄・釈放の内部移動は、同期 teleport の間だけ、指定した移動先に限定して通す。
入獄する移動も先に仮の入獄状態で検査し、他 listener が外へ変更したら拒否して戻す。
普通の歩行を凍結する機能ではない。牢屋の建築による囲いは従来どおり必要。

入獄中の自作 home / tp / tpa / warp / spawn / back / forward は操作前に拒否する。
/back と /forward は拒否時に履歴を動かさない。tpath listener は従来どおり
全 teleport を記録し、取り消された teleport も既存の記録方式に従う。
Spawn は自分のホーム・牢屋で復活地点を決め、初参加 tools キットも自作 YAML から配布。
釈放は保存された復帰地点へ戻す。ワールドが無ければ自作 spawn、最後は既定世界 spawn。

## 意図的な差異と範囲

- メッセージは固定の日本語。プレイヤー検索・オフライン名前指定は Bukkit の既知 profile
  と UUID に限定する。Essentials の全オフライン名前索引は再実装しない。
  オフライン jail.exempt は共存中には bridge から権限を確認し、無しの場合は OP を確認する。
  Essentials 無しで非OPのオフライン権限を引く専用索引はない。オンラインでは常に権限を確認。
- 安全探索は upstream の危険素材と半径3探索を使うが、負の最低高度と世界境界の扱いを
  有限探索に整理する。東への最大48ブロック探索までに安全地点が無ければ拒否する。
  探索範囲のチャンクを非同期で読み込んでからサーバースレッドで判定する。
  creative/spectator の免除は同じ。Essentials 固有 god mode の免除は依存削除のため非対応。
  他人を送る /tp の座標指定等も、安全地点を使う。upstream の now(false) の安全無視は、
  移動先の危険回避を統一するため保持しない。境界外は自動補正せず拒否する。
- 運営向けの block-break / place / interact / PvP / gamemode 禁止、全コマンドの jail allow
  一覧等は今回の移動制御の範囲に含めない。Essentials の旧入獄状態を解除するので、これらの
  副作用は共存中も自作からは提供しない。mute 等の他プラグイン担当機能を追加しない。
- Essentials の HomeModify / UserTeleportHome / TPARequest / TeleportRequestResponse /
  JailStatusChange といった独自 API イベント、料金・ignore・tptoggle・tpaauto・vanish
  独自キャッシュは再実装しない。通常 Bukkit PlayerTeleportEvent の取消は尊重する。
  受け入れ制御は自作 /tpset が正。Essentials の旧 tptoggle を新たに移行しない。
- tools は素材別名、個数、耐久、名前・説明・一般的な enchantment を扱う。
  kit 内の任意コマンド・特殊 metadata は非対応（tools の内製化だけが対象）。
  指定版の stonesword / stoneshovel / stonepickaxe / stoneaxe は対応済み。
  配布前に全行を解析し、非対応なら部分配布せず警告する。余剰品は足元へ落とす。
- 初参加の歓迎文は既存設定と一般的な名前 placeholder を使う。Essentials の全キーワード
  展開・broadcast 除外・装飾は再実装しない。

## 検証とゲーム内で試す項目

自動テストは別名・権限、DB の1回だけの読み込み、UUID / 名前形式、移行印と保存待ち、
不正 YAML、ワープ・牢屋・キット YAML の初回生成、牢屋の移動判定、TPA の120秒失効、
安全地点・小数Y・境界・飛行、Essentials 無しのクラスロード、flush の保存失敗を扱う。
サーバー上の commandMap / クライアント / 他プラグインの実挙動は未検証。

Claude による jar 反映とフル再起動の後、次を確認する。

1. Essentials 有り / 無しの両方で12正規名と全別名、spawn。tp がバニラに戻らないこと。
   権限無し・others無し・座標tp.position・world拒否と許可。namespaced tp の拘束も確認。
2. 未移行の本人参加と `/home 他人:名前`、UUID形式と名前形式のワールドを実物で確認。
   ホームを全削除して再参加・再起動しても復活しないこと。上限・無制限・bed・複数一覧。
3. 6ワープ・7牢屋の生成 YAML、編集後の再起動と再取り込み無し、メニューの warp shop。
4. tpa / tpahere の方向と申請時地点、120秒失効、承認・拒否・取消・複数申請と最新選択。
   メニューの tpaccept / tpdeny、/tpset close・各リスト・OP、申請後の受け入れ設定変更。
5. 移行対象の入獄状態・期限・復帰地点を安全なコピーで確認。自作DB保存後だけ旧 jailed が
   false になること。入獄中はhome/tp/tpa/warp/spawn/backが無効で履歴操作が進まないこと。
6. 入獄中のパール・コーラス・ポータル・ミニゲーム／他プラグインteleportを拒否。
   同じ牢屋への内部移動、入獄・釈放・刑期更新・期限切れ・オフライン釈放、死亡・再参加。
7. 牢屋内死亡、home/bed/anchorの復活順、初参加spawnとtoolsがEssentials無しでも動くこと。
   JoinCommands との順序、キット余剰品、歓迎文が1回であること。
8. 安全探索の壁・溶岩・空洞・ネザー屋根・負の高度・境界・飛行、他人への座標移動。
   全teleportの/back履歴、取り消しを含む既存履歴方式も確認する。
