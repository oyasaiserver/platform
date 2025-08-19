# OyasaiUtilities

おやさい鯖の小物系便利Plugin

## NotNBT (by Srain3)

クリエインベントリから保存されたホットバー経由で  
サバイバルへアイテムを渡す行為を防ぐ機能  
`アイテム内のNBTタグ{item:}か{items:}`に反応してNBTタグを消す

## OreReappears (by Srain3)

資源ワールドの改良版`「リポップ(再生成)する鉱石ワールド」`用の機能  
`config.yml`の`EnableWorldName`に有効化するワールド名リスト  
`EnableBlockNameAndTickAndMoney`に有効化する鉱石ブロック名と直るまでのTick数と得るお金  
だけで動く。configリロードは`/orerepopreload`で行える。  
もし鯖民で鉱山作るときは`/orerepopswitch`で無効化/有効化が出来る。荒らされ注意。

## AdminBP (by Srain3)

`/adminbp`か`/abp`でOP持ちなら開ける。  
現在9ページまで存在して、インベントリの外側(slotの無い、ドロップが出来る場所)を  
左右クリックで前後のページが開ける。

## OreSmelter (by Srain3)

自動精錬の機能。`/os toggle`でon/off切り替え  
`/os status`でon/off確認  
ちなみに前作者からの改良でconfigファイル式になり、アイテムドロップを直接編集するように改良しました。  
`/os reload`でコンフィグリロード出来ます。

## GetUUID (by Srain3)

`/uuid <ユーザー名>`でユーザーのUUIDが取得できる。  
チャットをクリックでコピー可能

## TimerBar (by Srain3)

`/timerbar [start/add/end] <Time>`でタイマーを起動/時間を追加/終了ができる。  
`<Time>`は「1h」や「5m30s」等の「〇〇h〇〇m〇〇s」の形であれば認識する。

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
・逆にサバイバルのブロックは、クリエでは弄れない。(`cm.bypass`(OP)はスルーする)  
・インベントリもゲームモード別に切り替わる。
