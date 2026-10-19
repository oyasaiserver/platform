# 早見表（プラグインごとに 何ができるか ／ 主なコマンド ／ 資料）

資料は /docs/\<名前>/player.md（使い方）と operator.md（運営向け）。

## 自作プラグイン

- cities-sky-mine：道路・交差点・外壁・窓・坂道・柱・群衆・雲などを作る建築補助。WorldEdit の選択範囲を使う ／ /csm（短縮
  /.col /.ns /.hb など）
- direct-state：ブロックを壊さずに向き・接続・形・素材を編集 ／ /directstate（/ds）
- dynamic-profile：プロフィール・レベル・称号、昇格の条件と昇格 ／ /dprofile
  /syokaku（iscandidate・getrank・seerequirements・seeplayerinfo・promote・demote）
  /dpleaderboard
- entity-pose：アーマースタンドなどの向き・姿勢・位置の調整、まとめてコピー・貼り付け・削除 ／ /ep
- oyasai-admin-tools：お知らせ・アンケート、ワールド境界、運営用の調べもの（invsee・vanish・tpoffline など） ／
  /bulletin /anke /wborder /playermanager /kakutyo /invsee /vanish /tpoffline
- oyasai-ban：BAN（サーバー全体に効く。プロキシ側で動くので、このサーバーからは照会できない）
- oyasai-chat：チャンネル、PM、日本語変換、ミュート ／ /ch /chlist /chwho /msg /r /japanize /mute
  /setchannel
- oyasai-frames：画像を地図にして飾る、額縁の保護、地図に絵を描く ／ /tomap /gakubuchilock
  /gakubuchiunlock /painttools
- oyasai-games：建築ルーレット、サイコロ、HeadHunt、PvP、BedWars、TNTRun、スロット、肝試しなど ／ /joingame
  /leavegame /headhunt /bw /oslot /dice /eventstats
- oyasai-lwc：チェストやドアの鍵 ／ /lock /unlock /cinfo /cmodify /cdisplay /chopper（c
  で始まる旧コマンドの多くは廃止済み）
- oyasai-menu：メニュー、ショップ、売却 ／ /menu /shop /sell /pointshop /menuedit /adminmenu
- oyasai-music：ノートブロックの録音・公開・再生、BGM ／ /oyasaimusic
- oyasai-pets：ペットの購入・召喚・育成 ／ /bigwolf
- oyasai-sign-shop：看板のお店 ／ /signshop
- oyasai-tab：タブリストと頭上の名前の表示（コマンドなし）
- oyasai-token：トークンの残高・送金・ランキング ／ /token
- oyasai-utilities：移動・持ち物・採掘・飛行・ポーズなどの便利機能。tp・gamemode・home・warp などもここ ／ /tp
  /gamemode /home /warp /back /afk ほか多数
- oyasai-vehicles：車（CarBuilder2）・飛行機（AircraftBuilder）、マイルポイント ／ /carbuilder2
  /aircraftbuilder /milepoint /timeattack
- oyasai-votifier：投票の報酬 ／ /votifierstats
- oyasai-world-generator：展示用ワールドへの移動とポータル、ワールドの作成・読み込み（Multiverse の代わり） ／ /owg
  /mv /mvp /mvtp
- social-likes3：建築の Like 看板、いいね、建築一覧、旅行ガイド、統計、昇格候補 ／ /slmenu /slnear /slbuild
  /slrankup /sldataop
- social-votes：看板をクリックして票を数える ／ /sv
- vault：お金（円）の残高・送金・ランキング ／ /balance /balancetop /pay /eco
- vertex：schematic.cloud から建築データ（schematic）をダウンロード ／ 資料を参照

## 外部プラグイン（資料なし。一般的な知識で答える）

- FastAsyncWorldEdit（FAWE）：範囲の選択・まとめて置く・コピー・ブラシ ／ //wand //set //copy //paste
  //undo
- FastAsyncVoxelSniper：地形用のブラシ
- WorldGuard：保護区域（region）とフラグ ／ /rg info /rg list /rg flag
- CoreProtect：ブロックの変更履歴と巻き戻し ／ /co lookup /co rollback /co restore
- LuckPerms：権限とグループ ／ /lp user \<名前> info
- BlueMap：Web 地図 ／ /bluemap
- DiscordSRV：Discord との連携
- PlugManX：プラグインの一覧と情報 ／ /plugman list /plugman info
- ViaVersion・floodgate：別の版のクライアントからの接続

## バニラ

- list・time・weather・gamerule・data get など。ゲームモードや tp は oyasai-utilities 側が受け持つ。
