---
title: "OyasaiFrames — 画像地図・額縁ロック・お絵かき"
status: active
source: "plugins/OyasaiFrames/（コードから作成。ゲーム内での確認は未実施）"
source_of_truth: "plugins/OyasaiFrames/"
related_paths:
  - packages/oyasai-plugins.nix
  - plugins/OyasaiFrames/migration/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiFrames

画像地図、額縁のロック、PaintTools のお絵かき・透明化、染料起動アイテムをまとめたプラグインです。各機能は個別に初期化されます。既存データと PDC には旧名前空間を使います。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-frames/operator.md)
- 移行時の補足: [プラグイン README](../../../plugins/OyasaiFrames/README.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | <code>plugins/OyasaiFrames/</code> |
| 主要コード | <code>icu/oyasai/frames/OyasaiFrames.kt</code>（起動・機能の連結）、<code>icu/oyasai/imageonmap/</code>（<code>ImageOnMap.kt</code>、画像取得、地図 DB、ポスター配置・アニメーション）、<code>com/gakubuchilocker/</code>（額縁ロック）、<code>com/github/srain3/painttools/</code>（描画・キャンバス DB） |
| テスト | <code>src/test/kotlin/icu/oyasai/</code>。DB、変換、画像制限、PDC、所有者判定、描画道具を単体テストする。コマンド・権限解決・Paper イベント・実機 UI・WorldGuard・実際の外部 HTTP 通信は統合検証しない |
| ビルド | <code>/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiFrames:build</code> |
| Nix package | <code>packages/oyasai-plugins.nix</code> が各 plugin の JAR を束ね、ディレクトリ名を小文字化した <code>oyasaiframes</code> 属性を公開する。 |

この実装は <code>plugin.yml</code> を使い、<code>main</code> は <code>icu.oyasai.frames.OyasaiFrames</code>、API バージョンは 1.21 です。<code>paper-plugin.yml</code> はありません。

## 技術仕様

### 構成と起動

- <code>OyasaiFrames</code> は <code>ImageOnMap</code> を継承します。起動時に額縁ロック、画像地図、PaintTools、染料アイテムを順に初期化します。
- 旧データ検査以外の起動失敗は機能ごとに捕捉します。額縁ロック・画像地図・PaintTools・染料保存の一部が起動できなくても、他の機能の初期化を続けます。PaintTools の DB 初期化は非同期です。
- <code>requireMigratedDatabases</code> は旧 ImageOnMap DB、旧 Gakubuchi-Locker DB、旧 PaintTools フォルダのいずれかが残り、かつ新しい <code>frames.db</code> または <code>pictures.db</code> が欠ける場合に全体を停止します。旧データの自動移行はしません。
- <code>plugin.yml</code> は WorldGuard と FastAsyncWorldEdit を softdepend として宣言します。

### 主要な処理の流れ

#### 画像地図

1. <code>/tomap URL</code> の受付後、権限・プレイヤー・resize 引数を確認します。同一プレイヤーの同時取込を止め、全体では Semaphore で最大2件を処理します。
2. 画像取得と解析は2スレッドの image executor で行います。HTTP(S) の直接 URL、最大16 MiB、最大20秒、HTTP 200、最大3回の転送、標準ポート、公開アドレスを条件にし、PNG/JPEG/GIF/WebP を ImageIO で読みます。
3. 静止画像は最大100タイル、動く GIF は既定16タイル・60コマの範囲で地図タイルを作ります。動く GIF の同一位置・同一色番号のタイルは再利用し、各コマの地図割当を保存します。
4. Bukkit の map ID を発行し、画像索引・タイル・アニメーション情報を DB トランザクションで保存してから地図アイテムを渡します。保存に失敗すると作成処理は失敗扱いですが、先に発行済みの map ID はコードで回収しません。
5. 近くのプレイヤーへ動く画像の地図を tick ごとの上限内で送信します。すべての近くの閲覧者が地図を受け取るまでは、額縁の絵を最初のコマに保ちます。額縁アイテムは全閲覧者に共有されるため、閲覧者ごとに異なるアニメーション時刻を見せる仕組みはありません。

#### 額縁ロックとポスター

- 通常の額縁設置イベントで設置者 UUID を DB と PDC に保存します。ロック・解除・右クリック・破壊・爆発等は額縁 UUID と所有者を使って判定します。
- 画像ポスターは壁面セルを検査して透明・固定・ドロップ率0の ItemFrame を生成し、各額縁をポスター配置者にロックします。WorldGuard が有効なら全セルで建築可能か確認します。
- PDC の旧所有者を持つ額縁は EntitySpawnEvent 直後と1 tick後に読み取り、ロック DB へ補完します。保存済み地図がある額縁は、チャンク読込時や起動時にも追跡します。
- 保存済み画像地図入りの既存額縁も <code>considerFrame</code> / キュー処理で管理化します。<code>mark</code> は固定・ドロップ率0・管理 PDC を設定し、透明状態は変更しません。額縁ロック機能が利用でき、所有者がなければ画像作者へロックし、実行時に設置者を調べません（<code>ImageOnMap.kt</code>）。
- 管理ポスターのダメージ・破壊は所有者・OP・ロック解除状態によらずキャンセルします。<code>remove</code> / <code>glow</code> の <code>posterFrames</code> は見つかった全額縁を事前判定し、非 OP ではロック所有者一致、所有者がなければ建築条件を要求します。撤去は <code>frame.remove()</code> を直接呼び、破壊イベントを経由しません。
- <code>/tomap remove</code> は視線先からポスターの構成額縁を照合します。見つかった額縁だけを対象にするため、欠落した旧版ポスターでは一部だけ外れる場合があります。通常版はエンティティを除去し、legacy 版は画像を外して額縁を残します。

#### PaintTools と染料アイテム

- コンソールの `painttools canvas <player>`・`painttools dye <player>` は、オンラインの対象への処理完了後に true、対象不在なら false を返します。プレイヤー実行時の戻り値は変わりません。
- PaintTools はキャンバス ID を地図アイテムの PDC に格納し、額縁上の合成 PlayerInteractEvent を通じて描画します。16色の染料、紙、羽根、イカスミ、砂糖を描画道具として扱います。
- 描画内容・Undo・ロックはキャンバス ID 単位で共有します。同じ ID の地図を複数額縁に置いた場合も同じデータを変更します。通常描画は額縁の変更可否とキャンバスロックを確認しますが、<code>PaintToolsCmd.kt</code> の Undo は入口・描画権限と登録 ID だけを確認し、額縁所有者・キャンバスロックは確認しません。lock / unlock も所有者・OP 判定を行いません。
- しゃがみ左クリックは接続範囲に限定せず、キャンバス全体の同色を置換します。染料・紙・羽根・イカスミ・砂糖に対応し、羽根の <code>1,1,1</code> / <code>#010101</code> は透明色です（<code>PlayerClickEvent.kt</code>）。
- 描画色は 128×128 の RGBA PNG に保存します。塗り込み中の色はメモリに保持し、DB へは約60秒間隔で保存し、停止時に未保存分を flush します。
- <code>/savedyeitem</code> は手持ちアイテムを SQLite に保存します。保存済みで同じアイテムを右クリックすると1 tickに1回だけ <code>/painttools dye</code> を実行します。クラフト材料への使用はキャンセルします。

### データ形式と永続化

すべてのファイルはプラグインのデータフォルダにあります。

| ファイル | 形式・主な内容 |
|---|---|
| <code>frames.db</code> | SQLite user_version 1。<code>frames</code> 表の主キーは frame UUID。world UUID・名前・座標・owner UUID と、map ID・向き・設置日時を独立して持ちます。owner のない行はポスター記録、map ID のない行はロック記録になり、同じ行が両方を持つこともあります。 |
| <code>pictures.db</code> | SQLite。MapStore は user_version 1～3 を開き、必要なら v3 に更新します。<code>images</code>・<code>maps</code>・<code>blobs</code> は画像索引と地図データ、<code>animations</code>・<code>map_books</code> は GIF 情報、<code>canvases</code>・<code>canvas_meta</code> は PaintTools を保存します。GIF の遅延と地図割当はカンマ区切り文字列です。 |
| <code>command-items.db</code> | SQLite <code>command_items(name,item)</code> 表。version 管理はありません。 |
| <code>config.yml</code> | GIF の枚数・コマ数・送信量を設定します。既定値は [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-frames/operator.md) に記載。 |

<code>frames.db</code> と <code>pictures.db</code> は WAL、synchronous FULL、busy timeout 5000 ms を設定します。新規静止画タイルは SHA-256 をキーにした共有 <code>blobs</code> の zstd 圧縮データ、新規 GIF は <code>map_books</code> の zstd book、PaintTools は PNG として保存します。旧 GIF の個別地図データ（PNG・zlib 等）も読め、<code>recompress</code> で book に変換します（<code>MapStore.kt</code>）。DB の削除処理は参照のない blob を消しますが、DB ファイル容量は VACUUM まで縮まらない場合があります。

#### PDC と旧形式

- 額縁所有者: <code>gakubuchi-locker:owner</code>。DB 所有者を優先し、有効な UUID 文字列を PDC から補助的に読みます。
- PaintTools キャンバス ID: <code>painttools:id</code> の整数。Bukkit の地図 ID とは別です。
- 管理ポスター: <code>imageonmap:managed</code>、legacy 属性、<code>imageonmap:splatter</code> など旧 ImageOnMap 名前空間を保ちます。
- <code>migrate_to_sqlite.py</code> は旧 ImageOnMap YAML/PNG から中間 <code>image.db</code> を作ります。<code>migrate_frames_pictures.py</code> は既存 DB と PaintTools データをスナップショットして2つの DB に出力し、CoreProtect CSV がある場合だけ確実な履歴に基づく一部ロック所有者を変更します。手順と停止条件は [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-frames/operator.md) を参照してください。

### 同期・非同期

- 画像 DB は単一 <code>imageonmap-db</code> スレッド、画像取得・解析は2つの <code>imageonmap-image</code> スレッドで処理します。Paper/Bukkit API と GUI・プレイヤー通知へ戻る箇所はメインスレッドに予約します。
- HTTP 取得は最大2件同時、各リクエストの締切は20秒、取得本文は16 MiBまでです。DNS 解決時の公開アドレス検査を行います。実接続先を IP 固定する実装はありません。
- 額縁ロックの <code>FrameStore</code> はメインスレッドから同期利用されます。ポスター記録は画像 DB スレッドから同じ DB ファイルを別接続で利用します。SQLite の WAL と busy timeout で接続間の競合を扱いますが、ロック処理がメインスレッドを待たせる可能性があります。
- CanvasStore は <code>oyasai-frames-canvas</code> 単一スレッドです。メモリ上の描画状態と Undo はメインスレッドで扱い、DB の読込・保存を worker に送ります。メタデータ登録失敗はログだけで通知されません。
- 正常停止では PaintTools の dirty canvas を保存して worker を閉じます。画像 DB と額縁 DB は各接続を閉じます。プロセス強制終了時の flush は保証しません。

### イベント

| 処理 | イベント・タイミング |
|---|---|
| 額縁の自動ロック | <code>HangingPlaceEvent</code> の MONITOR、キャンセル済みイベントは無視。 |
| 旧 PDC 所有者の復元 | <code>EntitySpawnEvent</code> で即時および1 tick後。 |
| 額縁のロック保護 | 右クリック・ダメージ・破壊・爆発系 HangingBreak を処理。処理ごとにイベント優先度とキャンセル条件が異なります。 |
| 画像ポスター設置 | <code>PlayerInteractEvent</code> の右クリックブロック。メインハンドのみ。 |
| 管理額縁の検出・保存 | 起動時、チャンク・エンティティ読込、ItemFrame の追加・除去。除去はアンロードと実削除を次 tick に判定します。 |
| PaintTools 描画 | 合成した <code>PlayerInteractEvent</code>。管理額縁上の地図を額縁操作イベントからブロック操作へ変換します。 |
| 動く地図の配信 | tick タスクで近くのプレイヤーへ map packet を送り、全閲覧者の受取状態に基づいて額縁の map item を切り替えます。 |

### 外部 API・依存

- 実行 API は Purpur/Paper Bukkit API。ビルドは Purpur API を compileOnly として使います。
- WorldGuard Bukkit/Core と FastAsyncWorldEdit は compileOnly、plugin.yml の softdepend です。WorldGuard API はポスター配置の建築判定に使用します。FAWE の API は直接呼ばず、旧 PDC を持つ額縁を EntitySpawnEvent 後に記録します。
- SQLite JDBC、zstd-jni、WebP ImageIO、AnvilGUI は implementation 依存です。build.gradle.kts の shadowJar 設定で不要なネイティブライブラリ対象を除外します。WebP Reader は起動時に ImageIO registry へ登録し、停止時に解除します。
- CoreProtect は runtime dependency ではありません。移行時の CSV を外部で準備する場合のみ使います。
- 互換を目的にした公開 LWC API や ImageOnMap Bukkit API を宣言する実装はありません。

### テストが保証する範囲

単体テストは以下を検証します。

- <code>frames.db</code> のロックとポスター情報の独立更新、<code>pictures.db</code> の旧スキーマ更新・不正 version の拒否。
- PDC namespace、DB/PDC 所有者の優先順、所有者・OP の変更判定、旧データ検査。
- 染料起動アイテムの保存・再読込、初回参加時配布、同じ tick の重複起動防止、クラフト禁止判定。
- 画像寸法、タイル順序、poster 向き、GIF コマ合成・遅延・同位置タイル再利用、WebP 読込、PNG/色番号・zlib/zstd/book の復元。
- map budget、動く画像上限、旧 DB 更新、URL の保存、dedupe と再圧縮のトランザクション・検証失敗時の旧データ保持。

コマンド引数・権限解決、イベントを Paper 上で発火したときの額縁保護、GUI 操作、WorldGuard/FAWE 連携、実際の HTTP サーバー、ゲーム内表示・停止動作の統合テストはありません。テストをこの作業で実行していないため、実行結果は未確認です。

Python 移行スクリプトの <code>--self-test</code> はこの Kotlin テスト群とは別です。今回、移行スクリプトの self-test も実行していません。

### 既知の制限

- 新しい静止画は1画像あたり最大100枚です。動く GIF の既定は16タイル・60コマ・1画像500固有地図・1人あたり2000固有地図です。閲覧者1人3000地図の送信上限に達すると、動きが開始しない場合があります。作成時の枚数・コマ数は設定変更とサイズ迂回権限の影響を受けますが、閲覧者の送信上限はサイズ迂回権限では変わりません。
- 動く画像の額縁アイテムは全員で共有されます。近くの誰かが地図を受け取れていない間は全員に最初のコマを表示し、閲覧者別に別のコマを送る実装はありません。
- 入力 URL は query を含め画像 DB に保存します。URL に署名やアクセス用秘密情報が入ると、listother 権限を持つ利用者へ /tomap info・where から表示されます。登録前に公開可能な URL か確認してください。
- 隠した画像は通常の自分の一覧に戻す操作がありません。管理一覧には表示されますが、現行コマンドに非表示を解除する処理はありません。
- 額縁ロックに共有先・グループの機能はありません。ロック DB と旧 PDC のどちらにも有効な owner UUID がないと、所有者なしとして扱われます。
- PaintTools の Undo は最大3個のメモリスナップショットで、再起動後に残りません。3個揃うまで1段階も使えず、非同期初期化後200 tick・以後1200 tick間隔で取得するため、20 TPS なら通常約130秒後から使えます。対象 ID が記録時にメモリにある必要があります（<code>PaintTools.kt</code>・<code>UndoCash.kt</code>・<code>MapData.kt</code>）。キャンバス保存とメタデータ登録の非同期失敗はログにだけ出て、描画状態を巻き戻しません。
- 額縁・GUI・権限ノードの実サーバー動作とゲーム内表示は未確認です。

## 判断の記録

- 2026-10-13: 外部レビューの指摘を実装と再照合し、保護条件・自動管理化・キャンバス共有・保存方式を訂正した。既存額縁の管理化は透明状態を変更しないため、その部分は採用しない。Undo の約130秒は非同期初期化後・20 TPS の目安。ゲーム内・他プラグインとの連携とテスト実行は未確認。
