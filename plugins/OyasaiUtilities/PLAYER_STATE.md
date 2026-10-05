# EssentialsX プレイヤー状態の移行（段階2）

対象仕様: [EssentialsX 2.22.1-dev+12-776f709](https://github.com/EssentialsX/Essentials/tree/776f709)。
段階1の `workstation` と同じく `playerstate` を `Main` の try/catch 内で有効化する。
有効化失敗時は listener・task・コマンド登録の差し替えを片付け、他機能の有効化を続ける。

## コマンド・権限

基本権限は全て `essentials.<正規名>`。追加の権限も upstream の名前を使う。
基本権限だけでは gamemode の全モードを許可しない。変更先の
`essentials.gamemode.<survival|creative|adventure|spectator>` または
`essentials.gamemode.all` が必要。

| 正規名   | 登録する別名                                                     | 用法                                                 |
| -------- | ---------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------- | -------------------------------- |
| gamemode | gm, gmc, gms, gmsp, gma, sp, spec, spectator, survival, creative | `/gm <mode> [player]` / `/gmc [player]`              |
| fly      | なし                                                             | `/fly [on                                            | off]`/`/fly <player> [on        | off]`                            |
| speed    | flyspeed                                                         | `/speed <speed>` / `/speed <fly                      | walk> <speed> [player]`         |
| jump     | j, jumpto                                                        | `/jump` / `/jump lock`（飛行中の左クリックジャンプ） |
| time     | day, night                                                       | `/time` / `/time [set                                | add] <time> [world]`            |
| weather  | sun, rain                                                        | `/weather <storm                                     | sun> [seconds]`/`/rain`/`/sun`  |
| ptime    | playertime                                                       | `/ptime [get                                         | reset                           | time] [player]`/`/ptime @<time>` |
| heal     | なし                                                             | `/heal [player]`                                     |
| afk      | なし                                                             | `/afk [message]` / `/afk <player> [message]`         |
| nick     | なし                                                             | `/nick <nickname                                     | off>`/`/nick <player> <nickname | off>`                            |
| realname | なし                                                             | `/realname <nicknameの一部>`                         |

他人への操作は `essentials.<command>.others`、時間変更は `essentials.time.set`。
`speed.fly` / `speed.walk` の片方だけを持つ場合の種別補正も upstream と同じ。
速度1は fly=0.1 / walk=0.2、1〜10はそこから上限への線形補間、1未満は既定速度の倍率。
`speed.bypass` があれば上限1.0。入力値を0.0001〜10に制限する。
`heal.cooldown.bypass`、`nick.color` / `format` / `magic` / `rgb`、
色・書式ごとの個別ノードの明示的 false、`nick.allowunsafe`、`nick.changecolors`
（と `changecolors.bypass`）、`nick.blacklist.bypass`、`nick.hideprefix` も見る。

宣言済み権限の既定は upstream と同じ OP。ただし `keepinv` / `keepxp` /
`afk.auto` / `nick.allowunsafe` / `nick.hideprefix` は false。
`nick.changecolors.bypass` はソースが参照する未宣言ノードなので OP 既定で追加する。

`/day` は0、`/night` は14000 ticks。`/time 100` は100 ticks、
`/ptime 100` は無効（upstream と同じく ticks 接尾辞、時刻名、時計表記を使う）。
相対 ptime の見える時刻は `/time` で世界の時刻を変更しても維持する。
`/weather rain` は晴れにする一方、引数無し `/rain` は雨にする。
これは Commandweather の「引数は storm のみを雨と判定する」挙動をそのまま保持したもの。

## 保存と設定

初回有効化で `plugins/OyasaiUtilities/PlayerState/config.yml` を生成する。
AFK: 600秒、キック-1（なし）、move/interact/chat/fishで解除、睡眠対象から除外、
freeze=false、全体通知=true。`afk.auto` の個別拒否を尊重する。
視点変更や同一ブロック内の移動だけでは活動を更新しない。
AFK中は記録位置から3ブロックを超えて移動したときに解除する。
コマンド入力は interact として扱うが `/afk` 自体では解除しない。
`essentials.sleepingignored` も尊重する。

速度上限はfly/walkとも0.8。世界変更時は fly 権限のないサバイバル系プレイヤーの
飛行を止め、speed 権限のないプレイヤーの速度を既定に戻す。
権限があれば設定上限に補正し、PLUGIN/COMMAND による同tickの世界移動では飛行を保つ。
再ログイン時も fly 権限を確認する。`fly.safelogin` があれば空中ログインを保護する。

ニックネームの既定は prefix空、最大32文字、displayname変更=true。
許可文字の正規表現は upstream 既定、長さには色コードを含める。
heal は upstream 既定の60秒クールダウン、効果除去=true。
死亡時は `keepinv` / `keepxp` を独立に確認し、inventory / levelを保持する。
元のインベントリに対応するドロップだけを除去し、追加戦利品は残す。
消滅・束縛の呪いの policy は upstream 既定の keep（設定でdrop/deleteも可能）。

`PlayerState/userdata/<UUID>.yml` に nickname、flymode、飛行中かどうか、速度とhealクールダウンの時刻を保存する。
専用ファイルがない場合だけ同階層の `Essentials/userdata/<UUID>.yml` から nickname と
flymode（およびhealクールダウンの時刻）を読み込む。nickname がない場合も `essentials-imported: true` を保存する。
`/nick off` や再起動後も再移行しない。ファイルは一時ファイルから atomic move で保存する。
移行元・保存済みファイルが壊れている場合は無視して初期値で上書きせず、エラーにする。

## Essentials との共存

- 指定された通常名・別名が Essentials またはバニラ所有なら knownCommands を
  自作へ差し替える。gamemode/time/weatherも対象。Essentials の overridden-commands
  に左右されず、Essentials削除後もバニラへ戻らない。他プラグイン所有の同名は奪わない。
  無効化時は、自分がまだ所有しているラベルだけ元へ戻す。
  `essentials:` / `minecraft:` の名前空間付きコマンドは元の所有者のまま。
- Essentials の API は専用 bridge だけに隔離し、有効な場合だけ生成する。
  APIのないテスト実行環境でも Feature / Commands / Rules / bridge interface の
  クラス初期化とメソッド型解決を確認する。
- `AfkStatusChangeEvent` を HIGHEST で取り消し、Essentials の自動AFK・コマンドAFKの
  状態変更と通知を止める。起動時の既存オンラインユーザー、および通知しない JOIN/QUIT
  の false 変更だけは古い AFK=true を消すために許可する。
  User.setAfk は取消後に状態を更新せず、Commandafk は前後の状態が同じなら通知せず、
  User.checkActivity も実際にAFKになった場合だけ通知するため、通知が二重にならない。
- nickname は自分の保存値を正とする。参加時の全handlerと Essentials の遅延join処理の
  後に自分の表示名を再適用する。オンラインの変更時と参加時に Essentials の
  nicknameキャッシュ・保存値も同期し、Essentials がチャットや世界変更時に再描画しても
  古い nickname に戻らない。
- flyコマンド変更を Essentials の flymode にも同期する。参加時は LOWEST で自分の
  flymode/nicknameを Essentials に同期し、Essentials の HIGHEST の参加処理が古い値を
  復元するのを防ぐ。次tickにも自分の保存値から flymode=true の飛行を復元する。
  falseのときは他機能の飛行を取り消さず、既存RedBullの一時fly復元を維持する。
  同じ値への再設定なので重複保持は起きない。
  共存時には自分から参加時の fly通知を追加せず、世界移動時の微小な速度補正も二重適用しない。
  保存 flymode setter は compileOnly の2.21.2にはないため、指定runtimeの
  `setFlyModeEnabled(boolean)` を bridge 内のreflectionで呼ぶ。
- keepxp は同じ keepLevel=true / droppedExp=0 への再設定。
  keepinv は既に keepInventory=true ならドロップ除去を繰り返さない。
  同内容の追加戦利品を二重に消すのを防ぐ意図的な差分。
- Tab / Music は `oyasaiutilities-afk` metadata の有効な OyasaiUtilities 所有値だけを読む。
  自作がない・無効・metadataがない場合は false。Essentials APIへの依存と必須判定を外した。

## 意図的な差分・範囲

- upstream は flymode（飛行許可）を保存する。この実装は依頼に合わせ「飛行中」も保存し、
  flymode=trueかつ権限ありの場合に再ログインで実際の飛行を復元する。速度も自分で保存する。
- jump は300ブロックの照準先を探し、足元の危険ブロック・足と頭の衝突を確認して
  Paper teleportAsync を使う。Essentials全体の teleport safety探索・料金・遅延・履歴・
  無敵時間は再実装しない。安全でない照準先は別の場所へ自動補正せず拒否する。
- プレイヤー検索は Bukkit の UUID・実名・前方一致・表示名と canSee を使用。
  nickのオフライン操作・本名の衝突検査は Bukkit の既知プレイヤーキャッシュに限定する。
  Essentials独自のオフラインユーザー索引・jail・mute・vanishキャッシュ、command料金や
  disabled-commands、Essentials の全プラグイン横断設定は再実装しない。
- 自作displaynameは実名またはnickname/prefix。Essentials固有のOP色・Vault prefix/suffix
  の装飾を加えない。TABの装飾は既存のOyasaiTabに任せる。
- メッセージは固定の日本語。Essentialsがある間のオンラインnick/fly変更では既存の
  NickChangeEvent/FlyStatusChangeEventを発火し取消を尊重するが、Essentials削除後には
  そのAPIイベントは発火しない。AFKの連携先はmetadataに統一する。

## ゲーム内で確認する項目

ビルド・純粋ロジックテストのみ実行し、サーバー起動・jar入替・本番アクセスは行っていない。
Claudeによるjar反映とフル再起動後、次を本人が確認する。

1. 権限のある/ない一般プレイヤーで各正規名・表の全別名を使用。
   `/gmc`・`/gmsp`・`/gm survival`・他人への変更、`gamemode.all`とモード別拒否も確認。
2. keep_inventory=falseの世界で通常品・防具・副手・呪い品を持って死亡。
   keepinv有無、keepxp有無を別々に試し、持ち物と経験値の複製・喪失がないこと。
3. `/afk` と600秒の放置で通知が1回、TabのAFK表示、Musicの視聴カウント除外を確認。
   個別 afk.auto=false では自動AFKにならない。視点だけでは活動を更新せず、
   3ブロック以内はAFK維持、超過移動・操作・チャットで解除。睡眠を妨げずキックしないこと。
4. `/fly on`で飛行しログアウト、再参加で飛行復元。
   `/fly off`後は無効のまま、fly権限を外すと復元しない。
   creative/spectator、RedBullの一時fly、空中のsafeloginも確認。
5. `/speed 1`、`/flyspeed 10`、fly/walk種別、speed.bypass、他人の速度、
   世界移動後の上限/既定速度と飛行の維持を確認。
6. `/j`・`/jumpto`で安全な照準先、壁際・危険ブロック・照準なし、`/jump lock`の左クリック。
7. `/time`・`/day`・`/night`・`/time add 1000`、別世界、
   `/ptime day`・`/ptime @midnight`・`/ptime reset`と世界時刻変更後の維持。
   `/rain`・`/sun`・`/weather storm 60`も確認。
8. `/heal`の体力・食料・火・空気・効果、60秒クールダウンと他人への操作。
9. 既存nicknameの初回引継ぎ、色/RGB/unsafe/長さ32/名前の衝突、`/realname`、
   `/nick off`の後に再参加・再起動して古い名前が復活しないこと。
10. 同じ検証をEssentials無しでも行い、gamemode/time/weatherが自作のままであること。
    OyasaiUtilities無しでもTab/Musicが停止せずAFK=falseで動き続けること。
