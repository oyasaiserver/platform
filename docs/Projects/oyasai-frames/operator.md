---
date: 2026-10-13
record_type: reference
source: "plugins/OyasaiFrames/（コードから作成。ゲーム内での確認は未実施）"
---

# OyasaiFrames の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、実装の詳細は [PROJECT.md](PROJECT.md) を参照してください。以下は <code>plugins/OyasaiFrames/</code> の実装・設定・移行スクリプトに基づいています。ゲーム内での動作確認はしていません。

## 権限

### 画像地図

| 権限 | plugin.yml の既定 | できること |
|---|---:|---|
| <code>imageonmap.*</code> | true | 子権限の既定値は下記の通りです。 |
| <code>imageonmap.new</code> | true | <code>/tomap URL</code> で画像を取り込む。 |
| <code>imageonmap.list</code> | true | 自分の画像一覧を開く。 |
| <code>imageonmap.get</code> | true | 一覧から自分の画像を受け取る。 |
| <code>imageonmap.give</code> | op | <code>/tomap give</code>。 |
| <code>imageonmap.bypasssize</code> | op | 地図枚数・GIF コマ数・作成者別の動く画像地図数の上限を迂回する。 |
| <code>imageonmap.listother</code> | op | 他人・全員の一覧、<code>/tomap where</code>、<code>/tomap info</code> の取得元 URL 表示。 |
| <code>imageonmap.getother</code> | op | 他人・全員の一覧から画像を受け取る。 |
| <code>imageonmap.deleteother</code> | op | 画像削除、再圧縮、重複整理、管理一覧から削除。 |
| <code>imageonmap.placesplattermap</code> | true | ポスターを貼る、額縁の種類を切り替える。 |
| <code>imageonmap.removesplattermap</code> | true | ポスター額縁を外す。 |

サイズ迂回権限でも、取得本文16 MiB、8192ピクセル／辺、2500万画素、URL 接続条件は迂回できません。閲覧者の送信上限にも適用されません。

<code>imageonmap.*</code> の child map は <code>new</code>・<code>list</code>・<code>get</code>・<code>placesplattermap</code>・<code>removesplattermap</code> が true、<code>give</code>・<code>bypasssize</code>・<code>listother</code>・<code>getother</code>・<code>deleteother</code> が false です。子ノードにも個別の既定値が定義されています。

### 額縁ロック・お絵かき

| 権限 | plugin.yml の既定 | できること |
|---|---:|---|
| <code>gakubuchilocker.use</code> | true | 額縁ロック、解除、自動透明化、透明額縁の検索モードを使う。 |
| <code>painttools.command.painttools</code> | 未指定 | <code>/painttools</code> コマンドの入口。plugin.yml の command に権限名はありますが、permissions 節には定義がありません。 |
| <code>painttools.command.painttools.canvas</code> | 未指定 | プレイヤーがキャンバスを作る。 |
| <code>painttools.canvas.use</code> | 未指定 | 描画、キャンバスロック・解除、ブラシサイズ、Undo。 |
| <code>painttools.command.painttools.dye</code> | 未指定 | プレイヤーが Dye Box を開く。 |
| <code>painttools.command.toumeigakubuti.admin</code> | 未指定 | <code>/toumeigakubuti force</code>・<code>count</code>。 |
| <code>save.dye.item</code> | 未指定 | <code>/savedyeitem</code> の command 権限。permissions 節には定義がありません。 |

ここで「未指定」は plugin.yml に default が書かれていない意味です。実際の権限解決はサーバー上で確認してください。<code>/getdye</code> は plugin.yml に権限指定がなく、コマンド実装も権限を確認しません。

額縁のロック所有者は UUID または旧 PDC に記録された UUID です。通常のロック済み額縁を破壊できるのは所有者か OP です。管理ポスターは所有者・OP・ロック解除状態に関係なく通常の破壊を拒否し、撤去には <code>/tomap remove</code> を使います。ロックモードから解除できるのは所有者本人だけで、OP でも別人のロックを解除する操作は拒否されます。OP は通常額縁の破壊や透明化の切替では所有者を迂回できますが、ロック済み額縁の右クリック操作は所有者以外キャンセルされます。

## 管理コマンド

| コマンド | 実行方法・挙動 |
|---|---|
| <code>/tomap list &lt;プレイヤー&gt;</code> | プレイヤー専用。キャッシュ済みプレイヤーだけ検索できます。隠し画像を含む管理一覧を開きます。 |
| <code>/tomap all</code> | プレイヤー専用。全員の画像一覧を開きます。隠し画像も含みます。 |
| <code>/tomap give &lt;プレイヤー&gt; &lt;画像ID&gt;</code> | プレイヤーまたはコンソール。受取人はオンラインかつ名前完全一致である必要があります。通知は受取人に送られます。 |
| <code>/tomap delete &lt;画像ID&gt;</code> | プレイヤー専用の二段階確認です。実行後は取り消せず、画像地図と管理額縁の画像も削除します。 |
| <code>/tomap where &lt;画像ID&gt;</code> | プレイヤーまたはコンソール。登録された設置場所を最大20件表示します。未読み込みチャンク等の状態も表示します。 |
| <code>/tomap recompress &lt;画像ID または all&gt;</code> | プレイヤーまたはコンソール。旧形式の動く画像を圧縮し直します。1件ずつ処理します。 |
| <code>/tomap dedupe</code> | プレイヤーまたはコンソール。旧地図画像を重複排除し、画像データを段階的に移します。 |
| <code>/tomap remove</code> | プレイヤー専用。視線先5ブロック以内の管理額縁を外します。通常版の額縁はエンティティごと除去し、旧版の額縁は画像を外します。 |
| <code>/tomap glow</code> / <code>/tomap glow on</code> / <code>off</code> | プレイヤー専用。見ているポスターの額縁を切り替えるか、今後貼る額縁の種類を選びます。 |
| <code>/gakubuchilock on|off</code>、<code>/gakubuchiunlock on|off</code> | 額縁を右クリックしてロック・解除するモード。短縮形は <code>/glock</code>、<code>/gunlock</code>。モードはログアウト時に解除されます。 |
| <code>/gakubuchitoumei on|off</code> | 額縁設置時の自動透明化モード。短縮形は <code>/gtoumei</code>。ログアウト時に解除されます。 |
| <code>/gakubuchifinder [radius]</code> | 通常プレイヤーは自分の透明・ロック済み額縁を、実行者が OP なら所有者を問わず透明・ロック済み額縁を検索し、10秒間パーティクル表示します。既定32、数値は1～100に丸められます。 |
| <code>/toumeigakubuti</code>（<code>/toumei</code>、<code>/invisibleframe</code>） | 視線先8ブロック以内の額縁の表示を切り替えます。 |
| <code>/toumeigakubuti count</code> / <code>force</code> | 権限を持つプレイヤー専用です。count は8ブロック範囲の透明額縁数、force は変更可能な透明額縁を表示状態にします。count はロックや所有者を絞りません。 |
| <code>/painttools brushsize 0..20</code>、<code>undo [1..3]</code> | プレイヤー専用。ブラシは初期サイズ2。Undo は3回分のメモリ内スナップショットから戻します。 |
| <code>/painttools lock &lt;ID&gt;</code> / <code>unlock &lt;ID&gt;</code> | キャンバス ID 単位の描画ロック。入口権限と <code>painttools.canvas.use</code> があれば他人の ID もロック・解除でき、OP・キャンバス所有者・額縁所有者の確認はありません。 |
| <code>/painttools canvas</code> | プレイヤーはキャンバス地図を作成します。コンソールは <code>/painttools canvas &lt;オンライン名&gt;</code> で指定プレイヤーに作成できます。数値 ID を指定する実装経路は登録・永続化を行わないため、運用コマンドとして使わないでください。 |
| <code>/painttools dye [プレイヤー]</code> | Dye Box を開きます。プレイヤーから他人を指定する場合は OP 判定も必要です。コンソールはオンラインプレイヤーを指定できます。 |
| <code>/savedyeitem</code> / <code>/getdye</code> | <code>/savedyeitem</code> は実行者の手持ちを染料起動アイテムとして保存します。<code>/getdye</code> は保存済みの1個を渡します。未登録でも成功表示が出る実装です。どちらもプレイヤー専用です。 |

権限不足や引数誤りのコマンドは false を返す実装があり、プラグイン独自の案内文を出さずサーバーの usage 表示になる場合があります。

Undo は入口権限と <code>painttools.canvas.use</code> を確認しますが、視線先の登録済みキャンバスについて額縁所有者・キャンバスロックを確認しません。通常描画の保護条件とは異なります。描画内容・Undo・描画ロックはキャンバス ID 単位で共有され、同じ ID の地図を複数の額縁に飾ると、そのすべてに影響します。額縁単位のロックとは別です。

Undo はスナップショットが3個揃うまで1段階も使えません。PaintTools の非同期初期化後、200 tick 後に初回、以後1200 tick 間隔で記録するため、20 TPS なら通常約130秒後から使用できます。対象キャンバスがそのスナップショットの記録時にメモリに存在する必要があり、復元時に未読み込みでもその実行では戻りません。

## 設定と既定値

既定値は <code>plugins/OyasaiFrames/src/main/resources/config.yml</code> にあります。設定の再読込コマンドはありません。変更はプラグイン再起動後に読み込ませてください。

| 設定 | 既定値 | 適用範囲 |
|---|---:|---|
| <code>animation.max-tiles</code> | 16 | 動く GIF 1画像の縦横タイル数の上限。サイズ迂回権限がないときに使用。 |
| <code>animation.max-frames</code> | 60 | 動く GIF のコマ数上限。サイズ迂回権限がないときに使用。 |
| <code>animation.max-maps</code> | 500 | 動く GIF 1画像で保存する固有地図数の上限。色変換後の重複タイルは再利用されます。 |
| <code>animation.max-maps-per-player</code> | 2000 | 1人が所有する動く画像の固有地図数。隠し画像も数え、静止画は含みません。 |
| <code>animation.max-maps-per-viewer</code> | 3000 | 接続中のプレイヤーへ送る動く画像地図の累計上限。ログアウト・ワールド移動・リスポーンで送信状態がリセットされます。 |
| <code>animation.min-delay-ticks</code> | 2 | GIF のコマ表示間隔の最小 tick 数。 |
| <code>animation.push-maps-per-tick</code> | 50 | 1 tick あたり、各プレイヤーへ送信する地図数。 |

設定値はコード上1以上に丸められます。静止画の最大100枚/画像は config 項目ではありません。動く画像は近くにいる全員の地図送信が終わるまで最初のコマを表示します。閲覧上限に達した場合、専用のプレイヤー向けエラーは出ません。権限による上限迂回は設定値とは別です。

同一プレイヤーの同時取り込みは禁止され、サーバー全体で最大2件です。どちらの条件でも <code>混雑しています</code> と表示されます。画像取得の締切は20秒、リダイレクトは最大3回、本文は16 MiBまでです。取得失敗の問い合わせでは直接リンクとこれらの条件を確認してください。

## データの保存場所

以下はプラグインのデータフォルダ内です。SQLite は WAL を使用するため、稼働中に <code>-wal</code> / <code>-shm</code> の補助ファイルが見えることがあります。

| ファイル | 内容 |
|---|---|
| <code>frames.db</code> | 額縁 UUID、ワールド、位置、ロック所有者、ポスター地図 ID、向き、設置日時など。user_version 1。ロックとポスター記録は同じ行に独立して保存できます。 |
| <code>pictures.db</code> | 画像一覧、地図タイル、圧縮データ、動く画像、PaintTools キャンバス。MapStore は user_version 1～3 を開き、必要なスキーマを更新します。 |
| <code>command-items.db</code> | <code>/savedyeitem</code> で保存したアイテムのバイト列。version 列はありません。 |
| <code>config.yml</code> | 動く画像の設定。既定値は上表の通りです。 |

塗ったキャンバスはおおむね60秒間隔で保存され、停止処理でも未保存分を書き出します。Undo スナップショットはメモリ内だけにあり、再起動後は残りません。

## 起動・移行

### 旧データがある場合

OyasaiFrames は旧データを自動取り込みしません。旧 ImageOnMap の YAML・PNG が残っている場合は、先に SQLite 化し、その後に額縁ロック・画像・PaintTools のデータをまとめて移行します。旧プラグインの書き込みが止まった状態で一度だけ実行してください。

1. 旧 ImageOnMap が <code>maps/*.yml</code> と <code>images/map*.png</code> を使う形式なら、旧データフォルダを指定して SQLite 化します。既に <code>image.db</code> がある場合はこの手順を飛ばします。

   <code>python3 plugins/OyasaiFrames/migration/migrate_to_sqlite.py --data-dir &lt;旧ImageOnMapデータフォルダ&gt;</code>

   スクリプトはそのフォルダに <code>image.db</code> を作ります。既存の <code>image.db</code> は上書きせず、既存の <code>image.db.tmp</code> がある場合は停止します。

2. 出力先を OyasaiFrames のデータフォルダにして、必要な入力を指定します。

   <code>python3 plugins/OyasaiFrames/migration/migrate_frames_pictures.py --image-db &lt;image.db&gt; --locker-db &lt;gakubuchi.db&gt; --paint-dir &lt;PaintToolsフォルダ&gt; --output-dir plugins/OyasaiFrames</code>

   このスクリプトが受け付ける入力 DB は、<code>image.db</code> が user_version 1、<code>gakubuchi.db</code> が user_version 0 です。異なる version や必要な表の不足は移行エラーになります。

   CoreProtect の CSV を使って旧ロック所有者を確実に再判定する場合は、スクリプトにある SELECT と同じ列順の CSV を用意して <code>--coreprotect-csv &lt;CSV&gt;</code> を追加します。記録なし・撤去後・所有者不明・複数の候補がある場合は所有者を推測で変更しません。

3. 出力の件数と <code>integrity_check=ok</code> を確認してから有効化します。旧 DB と PaintTools の入力は変更されません。出力 DB または一時出力が既にあると上書きせず停止します。

PaintTools の移行では、同じ ID の YAML と PNG があれば YAML を優先します。タグ一覧にない画像ファイルも保存しますが、未登録として扱います。<code>MapID_TagList.yml</code> がなければ、取り込んだキャンバスはすべて未登録になります。

旧データがあるのに <code>frames.db</code> または <code>pictures.db</code> のどちらか一方でもない場合、プラグイン全体が起動を拒否します。ログには次の文が出ます。

> 旧データがあるため OyasaiFrames を起動しません。先に移行スクリプト plugins/OyasaiFrames/migration/migrate_frames_pictures.py を実行してください。

旧データが見つからない場合は空の DB を初期化できます。<code>pictures.db</code> は起動時に v1～v3 のスキーマを確認・更新します。<code>frames.db</code> は v1 のみ受け付け、列構成が違う場合は額縁ロック機能の起動に失敗します。画像地図側の MapStore も同じ <code>frames.db</code> を FrameStore で開くため、スキーマ不整合は画像地図機能にも影響します。

## 保存失敗・障害時

- 起動ログの <code>ImageOnMap disabled:</code> は画像地図側、<code>Painting disabled:</code> は描画側、<code>Command item storage failed to start</code> は染料アイテム保存側、<code>Frame locking failed to start:</code> は額縁ロック側です。これらの機能は個別に失敗を処理し、旧データ検査を除きプラグイン全体を停止しません。
- 額縁ロックの初期化に失敗しても画像地図機能は初期化を続けます。画像地図側が起動できた場合でも、ポスター額縁をロックする登録先がなく、通常のロックを期待できません。
- 旧データ検査で停止した場合は、両 DB の有無と移行出力を確認します。移行が失敗して残った <code>.tmp</code> は自動削除されません。原因と中身を確認してから再実行してください。
- 額縁ロックの DB 書き込みはゲームイベント内で同期実行されます。失敗時に操作を成功扱いできる保証はなく、保存エラーをプレイヤーへ返す経路もありません。DB とサーバーログを確認してください。
- 画像地図の DB 操作は専用スレッドで実行し、作成・削除などはトランザクションです。処理失敗時の出力はプレイヤーへ表示されます。地図 ID を先に作成した後に DB 保存が失敗した場合、その ID の後始末はコードにありません。
- キャンバスの読込・保存・メタデータ登録は別スレッドです。失敗はログに記録され、描画やロックのメモリ状態を巻き戻しません。保存完了が画面上の操作と同時に確認できる仕組みもありません。
- 正常な停止処理では PaintTools の未保存分を書き出し、各 SQLite 接続を閉じます。強制終了後に DB の破損が疑われる場合は、起動を繰り返す前に DB と SQLite の補助ファイルを保全してください。

## 守られる範囲・守られない範囲

- 額縁ロックは額縁単位です。通常は設置者が所有者となり、他人の右クリック・破壊を止めます。ロック済み額縁の爆発等による破壊もキャンセルします。共有相手を登録する機能はありません。
- 所有者と OP は通常の額縁を破壊できます。管理ポスターのダメージ・破壊はどちらもキャンセルされます。ロック解除モードは所有者 UUID だけを許可します。OP でも、他人のロックを解除モードで外すことはできません。
- ロック所有者が DB と有効な旧 PDC のどちらにもない額縁は所有者なしとして扱われ、PaintTools の変更判定では誰でも変更できます。壊れた PDC UUID を所有者としては扱いません。
- WorldGuard が有効な場合、ポスター配置では全セルに建築権限を確認します。WorldGuard が無効な場合、この追加確認は通過します。通常のバニラ額縁設置に対して、OyasaiFrames が同じ WorldGuard 照会を行う実装はありません。
- ポスター設置の入口では、既にキャンセルされた右クリックイベントを処理しません。撤去と対象ポスターへの glow は、見つかった全額縁を事前判定します。ロック所有者がいれば本人一致だけ、いなければ WorldGuard の建築条件を確認し、1枚でも拒否されると全体を実行しません。OP はこの両条件を迂回できます。ロック所有者は区域の建築権限を失っても操作できます。撤去は直接エンティティを除去し、通常の破壊イベントを経由しないため、他プラグインの破壊保護が適用される保証はありません。
- 保存済みの画像地図を入れた既存額縁も、起動・チャンク読込などで自動的に管理対象へ取り込みます。固定・ドロップ率0を設定し、既存のロック所有者がなければ画像作者へロックします（額縁ロック機能が利用できる場合）。実行時に設置者を調べず、表示・透明状態は変更しません。既存展示の所有権と撤去方法が変わることに注意してください。
- 画像の削除は不可逆です。管理額縁の画像も消えます。旧版から引き継いだポスターは画像を外した後も物理額縁が残り、その額縁のロック所有者が残る場合があります。
- プレイヤーが一覧から隠した画像を、現行コマンドで再表示する操作はありません。管理一覧から受け取り・削除はできますが、非表示状態は解除できません。
- 透明額縁検索の radius は X・Y・Z 各方向の検索幅として使われます。円形距離ではありません。<code>force</code> はロック所有者または OP が変更できる額縁だけを表示状態にし、<code>count</code> は所有者に関係なく範囲内の透明額縁を数えます。
- 画像の入力 URL と最終取得 URL は <code>pictures.db</code> に保存され、<code>imageonmap.listother</code> を持つ利用者の <code>/tomap info</code> と <code>/tomap where</code> で表示されます。クエリに秘密情報を含む URL は登録しないでください。

問い合わせ時は <code>管理している額縁が見つかりません</code>（対象が管理ポスターでない）、<code>切り替える権限がありません</code>（glow の所有者・建築条件）、<code>アイテム保存機能は現在利用できません。</code>（染料アイテム保存側の停止）を区別してください。

## 他プラグインとの連携

- <code>WorldGuard</code> は任意依存です。有効時にポスター配置先の建築権限を確認します。
- <code>FastAsyncWorldEdit</code> は plugin.yml の softdepend です。実装は EntitySpawnEvent 後に額縁の旧 PDC 所有者を読み取り、DB へ同期します。FAWE API を直接呼ぶ実装はありません。
- <code>CoreProtect</code> は移行時の任意 CSV 入力としてのみ参照し、稼働中に API 連携しません。
- <code>ImageOnMap</code>・<code>Gakubuchi-Locker</code>・<code>PaintTools</code> の PDC 名前空間と DB 形式を移行・互換目的で読みます。現在のプラグイン名は OyasaiFrames ですが、既存の地図・額縁データとの互換性のため旧名前空間を使います。
