# OyasaiUtilities

おやさい鯖の小物系便利Plugin

## TPswitch

`/tpset open|close|mode|oklist|nglist` で TP 受付を設定・確認し、`/tpset ok|ng|none <名前>` で許可・拒否リストを編集する。既定は open で、open は拒否リスト、close は許可リストを参照する。OP だけは拒否を通過できる。`/tp <名前>` の受付判定を行い、設定は `tpswitch.db` に保存する。初回起動時に旧 `TPswitch/config.yml` があれば一度だけ取り込み、旧ファイルは残す。取り込み件数とスキップ件数はログと SQLite の `tp_meta` に記録する。

## Sit

`/sit`、`/lay`、`/bellyflop`、`/spin`、`/crawl` で座る・ポーズを切り替える。`/sit toggle` で右クリック座りを切り替える。
`Sit/` フォルダがあるサーバーだけで有効。

## Fart

`/fart` で通常のおならモードを ON にする。ON のときに引数なしで使うと、どのモードでも OFF にする。しゃがみ始めると、おならの音と硫黄色の煙を、視線と逆向きの後ろから出す。

- `/fart stay`: 居座りモード。他のプレイヤーの頭に乗ってしゃがんでも降りず、おならだけ出す。降りるには `/fart` で OFF にしてからしゃがむ。
- `/fart fly`: 飛行モード。しゃがむたびに上向き速度を0.3加算（上限0.6）し、落下距離をリセットする。飛行モード中は連打をやめて落ちても落下ダメージを受けない。

`/fart [stay|fly] [player]` または `/fart <player>` で、オンラインの対象のモードを切り替える（名前だけなら通常モード）。名前指定は自分自身でも `oyasaiutilities.fart.others`（既定 OP）が必要。コンソールは名前指定時だけ使える。結果は実行者に、別の対象にも現在のモードを通知する。タブ補完は stay・fly を提示し、この権限がある場合はオンラインのプレイヤー名も前方一致で提示する。

3モードは同時に使えず、同じモードの再指定でも OFF になる。状態はメモリだけで、再起動で全員 OFF に戻る。

## JoinCommands

参加時に `plugins/OyasaiUtilities/JoinCommands/config.yml` の `server-join-commands` を記述順に判定し、指定した遅延後にコマンドを実行する。各定義は `command-list`（文字列リスト）、`permission`（任意）、`first-join-only`（既定 false）、`delay`（tick、既定 0）を指定できる。`[PLAYER]` 付きはプレイヤー、それ以外はコンソールとして実行し、`{player}` を参加者名に置換する。変更は再起動で反映され、設定ファイルが無ければ何もしない。

## Spawn

外製 EssentialsSpawn の置き換え。`/spawn [player]` でスポーン地点へ移動（他人指定は `oyasaiutilities.spawn.others`）。地点は `Spawn/config.yml` の1か所で、無ければ起動時に `Essentials/spawn.yml` の `spawns.default` を取り込む。死亡時の復活先（牢屋・`respawn-at-home`）と初参加時のキット・移動・歓迎文は Essentials の設定に従う。Essentials が無いときは無効。

## Schematics (by shunueda)

`/oyasai-schematics load <ID または URL>` で schematic.cloud の共有 ID から `.schem` をダウンロードし、`plugins/FastAsyncWorldEdit/schematics/` に置く。権限は `oyasaiutilities.schematics.load`（既定 OP）。FastAsyncWorldEdit（FAWE）が必要。

ロードは自動で行わない。成功メッセージをクリックして `/schematic load <ID>.schem` をコピーし、自分で実行してロードする。ダウンロードは32 MiBまで。

## NotNBT (by Srain3)

クリエインベントリから保存されたホットバー経由でサバイバルへアイテムを渡す行為を防ぐ機能`アイテム内のNBTタグ{item:}か{items:}`に反応してNBTタグを消す

## OreReappears (by Srain3)

資源ワールドの改良版`「リポップ(再生成)する鉱石ワールド」`用の機能`config.yml`の`EnableWorldName`に有効化するワールド名リスト`EnableBlockNameAndTickAndMoney`に有効化する鉱石ブロック名と直るまでのTick数と得るお金だけで動く。configリロードは`/orerepopreload`で行える。もし鯖民で鉱山作るときは`/orerepopswitch`で無効化/有効化が出来る。荒らされ注意。

## AdminBP (by Srain3)

`/adminbp`か`/abp`でOP持ちなら開ける。現在9ページまで存在して、インベントリの外側(slotの無い、ドロップが出来る場所)を左右クリックで前後のページが開ける。

## OreSmelter (by Srain3)

自動精錬の機能。`/os toggle`でon/off切り替え`/os status`でon/off確認ちなみに前作者からの改良でconfigファイル式になり、アイテムドロップを直接編集するように改良しました。`/os reload`でコンフィグリロード出来ます。

## GetUUID (by Srain3)

`/uuid <ユーザー名>`でユーザーのUUIDが取得できる。チャットをクリックでコピー可能

## TimerBar (by Srain3)

`/timerbar [start/add/end] <Time>`でタイマーを起動/時間を追加/終了ができる。`<Time>`は「1h」や「5m30s」等の「〇〇h〇〇m〇〇s」の形であれば認識する。

## TPath (by takucan)

テレポート履歴を保存し、「戻る/進む」をすることが出来る。

- 戻る：`/back`
- 進む：`/forward`

## CreativeManagement (by Srain3)

クリエとサバイバルでアイテムの受け渡しが出来ないようにする。

・クリエで置いたブロックには特別なメタデータが含まれるようになり、アイテムがドロップしなくなる。
・クリエの人がドロップしたアイテムには特別なメタデータが含まれるようになり、サバイバルが拾えなくなる。(`cm.bypass`(OP)はスルーする)
・サバイバルのドロップアイテムはクリエでは拾えない。(`cm.bypass`(OP)はスルーする)
・クリエで置いた機能がある(アイテム増殖に繋がりそうな)ブロックは、クリエの人しか弄れなくなる。(`cm.bypass`(OP)はスルーする)
・逆にサバイバルのブロックは、クリエでは弄れない。(`cm.bypass`(OP)はスルーする) ・インベントリもゲームモード別に切り替わる。

## Items

運営が登録した特殊アイテムを、`/items`（一覧 GUI）、`/items search <名前>`（空白区切りの全語を含む名前、大文字小文字を区別しない）か `/items get <番号>` で受け取れる台帳。`/items help` は見出し・コマンド一覧・番号の補足を表示し、運営には管理コマンドとルールの意味も表示する。コンソールでも利用できる。番号は1から登録順に自動採番し、削除後も再利用しない。一覧の説明の先頭に `No.<番号>` を表示し、検索結果のページ送りも絞り込みを保つ。取得ルールは free・once・staff。運営は `/items register [free|once|staff] [説明]`（番号の入力は不要）と `/items update <番号> [ルール]`・`remove <番号>`・`info [番号]`・`reset <番号> <プレイヤー>`（`oyasaiutilities.items.manage`）。`/items info` はメインハンドと同じアイテムを個数を無視して探し、削除済みを含む全一致の詳細を表示する。削除済みは番号と名前に明記する。コンソールでは番号が必須。保存は共通 SQLite。持ち主の追跡はしない。
