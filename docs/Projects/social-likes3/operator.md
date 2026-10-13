---
date: 2026-10-13
record_type: reference
source: plugins/SocialLikes3/（コードから作成。ゲーム内での確認は未実施）
---

# SocialLikes3 の運用（運営向け）

通常の操作は [player.md](player.md)、処理の正本と検証範囲は [PROJECT.md](PROJECT.md) を参照。以下はリポジトリの実装と既定値であり、実サーバーの設定・報酬付与・移行済み状態は未確認です。

## 権限と管理操作

`plugin.yml` に `permissions` とコマンドの `permission` 宣言はありません。SocialLikes3 専用の権限ノードも実装されていません。

| 対象 | コードの判定・既定の扱い |
|---|---|
| 登録、いいね、一般コマンド | 権限検査なし。通常はプレイヤー専用 |
| `/sldataop`（`/slop`・`/sldataadmin`）、`/slrankup`、`/sldatafont`、`/sldatapack` | `isOp`。専用ノードによる代替はできない |
| 他者の詳細統計・dump | OP。旧 `/sldata dialog stats2 名前`・`dump` でも OP を検査 |
| `/slsignget ID [hanging]` | 建築の所有者または OP |
| 看板の詳細設定・削除 | しゃがみ右クリック時に所有者または OP にボタンを出す。ボタンの実行時には所有者を再検査しない |
| 看板のコメント | 通常のいいね一覧では所有者だけに編集ボタン。ガイド経由では編集可能な個人ガイドの掲載建築も編集できる |
| `/slupdate`・`/slupdate region` | **OP・権限・所有者の検査なし**。region は WorldEdit の選択範囲を使用 |
| `/slsignbreak` | SLTP看板に記録された所有者、建築所有者、または OP。視線3ブロック以内 |
| 個人旅行ガイドの編集 | 作成者または OP。編集キーを所持するだけでは許可しない |
| 公式旅行ガイドの作成・編集 | OP。公式ガイドは作者以外の建築も追加できる |
| 個人ガイドの冊数 | `group.<設定キー>` を持つグループの最大値＋購入済み枠。OP は設定内の最大値＋購入済み枠。該当なしは基本0冊 |
| SLTP看板の価格区分 | OP、または `minecraft.command.gamemode`・`bukkit.command.gamemode`・`essentials.gamemode`・`essentials.gamemode.creative` のいずれかを持つとクリエ価格 |

`/slupdate` は10秒後のタスクで解除します。同じ人が短時間に再実行しても以前の解除タスクは取消さず、後のモードが早く終了することがあります。右クリックでの更新は登録位置が違う看板だけで、元の登録位置にある看板を押してもモードを消費しません。移動先へ保存後、元の位置のブロックが看板ならIDを照合せず除去します。

`/slupdate region` は実行者が今いるワールドに選択範囲の座標を当て、登録データがあるSL看板を処理します。位置が同じでも保存・`moved` ログ記録・Discord編集の呼出が走ります。登録IDのPDCを持つ複製看板をregion更新、またはアップデートモード中の右クリックで処理すると、登録位置が複製先へ移り、元の位置に残る看板が除去されます。WorldEditで複製した後は、PDCがコピーされたかを確認してください。

OPが登録位置にある現行Like看板を通常の右クリックすると、未いいねならいいねし、看板に運営チェック「✓」を付けて保存します。既にいいね済みでも✓は付きます。チェック解除の操作はありません。他人の建築への新しいいいねなら、OPもお金1000の報酬対象です。

`/slsignbreak` で回収したSLTP看板は、回収者が新しい持ち主になります。建築所有者・OPが他人の案内看板を回収した場合も同じです。

| コマンド | 用途・注意 |
|---|---|
| `/sldataop`・`help` | 管理操作一覧 |
| `/sldataop stats [名前]` | 自分または他者の詳細統計。`stats2`・`detail`・`details` も同じ。画面はプレイヤー専用 |
| `/sldataop dump [名前]` | 全カテゴリの集計を `sldata-stats2-dump.txt` へ上書き。コンソールは名前必須 |
| `/sldataop reload` | `config.yml`、ガイド配色・文言、`sldata-dialog.yml`、`sldata-stats2-text.md` を再読込 |
| `/sldataop rewrite-sign-pdc` | SQLite の現役建築の登録座標にある看板のID・世代を更新。コンソール可。二重実行は「看板PDC書換は既に実行中です。」で拒否 |
| `/sldataop font [pack\|vanilla]` | グラフ試作の確認。`/sldatafont [vanilla]` と同等。プレイヤー専用 |
| `/sldatapack` | 試作リソースパック再送。プレイヤー専用 |
| `/slrankup [グループ,… または 日数]` | 候補一覧。引数なしは `default,chukyu` と30日。実装は**第1引数だけ**から日数を読むため、`/slrankup jokyu 7` でも30日。`/slrankup 7` なら既定グループと7日 |
| `/slguide create official` | 公式ガイド作成。編集・公開は通常ガイドと同じ画面 |

非OPの `/sldataop`・フォント検証・パック再送は「このコマンドを実行する権限がありません。」。`/slrankup` は無言で false を返します。旧 `/sldata dialog reload` は**OP検査なし**で描画設定・統計文言を再読込でき、`config.yml` は再読込しません。コンソールの旧 `/sldata dialog stats2 dump 名前` 経路にも `isOp` 検査はありません。

ランク一覧は昇格実行ではありません。LuckPerms の primary group、建築数、初回参加・最終オンライン日時を表示するだけです。建築数は `Data.save` のたびに加算され、更新・いいねでも増えるため、候補一覧を正確な登録数やログイン率の証明にしないでください。

## 設定と既定値

以下のファイルはすべて `plugins/SocialLikes3/` 内です。

### config.yml

| キー | 既定値 | 作用 |
|---|---|---|
| `readSource` | `yaml` | 起動時の建築キャッシュと主保存先。`sqlite` は移行完了マーカーがあるときだけ。不明値は警告して YAML |
| `backupOnStartup` | `true` | enable の最初にデータフォルダ全体をコピー。初回でフォルダなしならスキップ |
| `backupKeepCount` | `5` | コピー成功後、古い `startup-*` フォルダを削除。0以下は削除しない。手動バックアップは対象外 |
| `reconcileIntervalMinutes` | `10` | SQLite 保存失敗IDの定期再保存。最小1分 |
| `guidebook.personalBookLimits` | `jokyu: 1, builder: 2, takumi: 3, blue: 4, white: 5` | グループ別の個人ガイド基本上限。独自の節があれば、その節だけを使用 |
| `guidebook.extraSlotPrices` | `[150, 400, 800, 1200, 1500]` | 購入枠の順番別価格。以後は最後の価格。正の数だけ採用、空なら既定リスト |
| `guidebook.repost.basePrice` | `10` | ガイド宣伝の基本P。最小1 |
| `guidebook.repost.pricePerEntry` | `1` | 有効な掲載建築1件ごとのP。最小0 |
| `guidebook.teleportCooldownSeconds` | `30` | 未いいね建築へのガイド案内の間隔。0以下は待機なし。退出時に履歴は消さない |
| `guidebook.entriesPerBookLimit` | `30` | 1冊の掲載上限。最小1。重複禁止 |
| `guidebook.descriptionMaxLines` | `8` | 説明の表示行数。1〜8に丸める。保存は最初のページだけ |
| `guidebook.commentMaxLines` | `5` | 個人ガイドの建築コメント表示行数。1〜5に丸める。カンマより前だけ |
| `guidebook.announce.enabled` | `true` | 初公開・編集後の再公開を全員へ通知 |
| `guidebook.announce.sound` | `entity.player.levelup` | 告知音。空なら音なし、不正なキーは警告して音なし |
| `guidebook.announce.volume` / `pitch` | `0.75` / `1.0` | 告知音の音量・音高 |
| `guidebook.style.options.brackets` | `true` | 本のボタンを角括弧で囲む |
| `guidebook.style.roles.<役割>.color/bold/underline` | 下表 | 各役割の配色・太字・下線。不正な色は警告してその役割の既定色 |
| `guidebook.style.texts.<キー>` | 下表 | 本と一覧の文言。未指定は既定。`{n}`・`{m}`・`{author}`・`{title}` を対応する画面で置換 |

`readSource`・バックアップ・再保存間隔は起動時の値です。ガイド設定は `/sldataop reload` で再読込できます。既定ファイルの行数・styleのコメントは「再起動で反映」と書いていますが、コードは行数を利用時に読み、styleも reload で更新します。上限を下げても既存の本や掲載建築を自動削除しません。

配色の既定（太字・下線は記載した役割以外すべて false）:

| 色 | 役割 |
|---|---|
| `#00AA00` | `title`・`complete`・`heading`・`eTitle`（太字）、`progress`・`liked`・`ePublic`・`eOk` |
| `#555555` | `author`・`sub` |
| `#00AAAA` | `nextLabel`・`nextName`・`entry` |
| `#000000` | `desc`・`eEntry` |
| `#AAAAAA` | `unfound`・`ePrivate`・`eNote`・`cLore`・`cPrivate` |
| `#FF5555` | `invalid`・`eNg`、`eDanger`（下線） |
| `#5555FF` | `eButton` |
| `#FFFFFF` | `cName`・`hover` |
| `#FFAA00` | `cOfficial` |
| `#55FF55` | `cAction`・`cPublic` |

文言の既定:

| キー | 値 |
|---|---|
| `progress` / `author` / `next` / `complete` | `進捗: {n}/{m}` / `作者: {author}` / `Next: `（末尾空白あり）/ `コンプリート！` |
| `heading` / `invalid` / `entryAuthor` | `掲載建築` / `案内不可` / `作者: {author}` |
| `hNext` / `hEntry` | どちらも `クリックでこの建築へ案内` |
| `eTitle` / `ePublic` / `ePrivate` | `編集: {title}` / `公開中` / `非公開` |
| `bAdd` / `bToggle` / `bPublish` / `bDesc` | `建築追加` / `非公開にする` / `公開する` / `説明を書く` |
| `bList` / `bDelete` | `ガイド一覧へ` / `このガイドを削除` |
| `eNote` / `eEmpty` / `eHeading` | `次のページから掲載建築を編集できます。` / `掲載建築はありません。` / `掲載建築の編集` |
| `eOk` / `eNg` | `案内可能` / `案内不可` |
| `bUp` / `bDown` / `bComment` / `bRemove` | `↑` / `↓` / `コメント` / `削除` |
| `hAdd`・`hToggle`・`hPublish`・`hDesc`・`hList`・`hDelete`・`hUp`・`hDown`・`hComment`・`hRemove` | 空文字（ホバーを付けない） |
| `cOfficialMark` / `cAuthor` / `cProgress` | `★ `（末尾空白あり）/ `作者: {author}` / `進捗: {n}/{m}` |
| `cGet` / `cPublic` / `cPrivate` / `cGetKey` | `クリックで入手` / `公開中` / `非公開` / `クリックで編集キーを入手` |

### その他の設定

| ファイル | キーと既定値・注意 |
|---|---|
| `DiscordConfig.yml` | `Bot_Token`・`TextCH` は空文字。`Server_IP` は地図リンクのアドレスで、コードの既定はローカル向け（公開資料には値を転載しない）。実際の値は秘密情報として扱う。reload の対象外 |
| `sltpsign.yml` | `priceSltpSignCreative: 100`、`priceSltpSign: 50`（Long）。設定画面を開くたびに読む。ファイルは空で作られ、未記入キーにコードの既定値を使う。負値の補正はない |
| `worldborder.yml` | `<ワールド名>.centerX/centerZ/radiusX/radiusZ`。同梱ファイル・有効な既定範囲なし。空き地探索に必須。中心欠落・半径欠落または0以下なら「コンフィグにWorldBorderが設定されていません。」 |
| `sldata-dialog.yml` | 初回利用時生成。`style: ascii-low`、`normal.horizontal-scale/vertical-scale: 1/1`、`large.horizontal-scale/vertical-scale: 2/2`。倍率は1〜4。明示styleがあれば旧 `line-char`・`empty-char`・`label-style`・`right-axis-gap` は無視。通常の表示経路では LARGE と ASCII_LOW に強制し、largeの倍率だけを使う |
| `sldata-stats2-text.md` | enable 時に同梱の文言定義を未作成時だけコピー。全キー・既定文言は [同梱ファイル](../../../plugins/SocialLikes3/sldata-stats2-text.md)。節・行見出し下のコードブロック内 `key: value` を読む。重複は後の有効値、空値・未知のプレースホルダは内蔵文言に戻す。既存ファイルはjar更新で上書きしない |
| `sldata-font.yml` | 初回利用時生成。`background-code-point: U+F8F0`、`cursor-reset-code-point: U+F8F1`、`bar-start-offset-code-point: U+F8F2`、`bar-base-code-point: U+F900`、`bar-levels: 16`（最小1）、`bar-separator-code-point: null`、`gui-slots: 54`（他値も54へ固定）、`display-weeks: 9`（1〜9）。フォント検証を開くたびに読む |

## データと起動・停止

| 保存先 | 内容 |
|---|---|
| `plugins/SocialLikes3/SocialLikesShadow.db` と SQLite 補助ファイル | 建築・いいね・プレイヤー名・宣伝履歴・イベント履歴・移行表・ガイド・追加枠・完成記録。名前が Shadow でも SQLite 主保存時に同じDBを使う |
| `data/<50件区切り>/<ID>.yml` | 建築データ。既定の主保存先、SQLite 主保存時は非同期のミラー。削除フラグ付きデータも残す |
| `PublicityHistory.yml` | 建築の宣伝履歴。readSource に関係なくここから読み、起動時に SQLite へ同期 |
| `lastSLTP-Time.yml` | 各プレイヤーの最後の移動対象の作成日時。停止時保存 |
| `offlineLikePoint.yml` | オフラインいいねの未受取ポイント。増減時と停止時に一時ファイルから原子的に置換 |
| `UserFollowData/<UUID>.yml` | フォロー先と退出日時 |
| `dirty-builds.yml` | SQLite 保存を再試行するID。正常化すると除去。空ならファイル削除 |
| `logs/sldata-YYYY-MM-DD.log` | 統計・管理・抽選コマンドのJSON Linesログ。送信者、UUID、接続元アドレス、引数、所要時間など。公開しない |
| `sldata-stats2-dump.txt` | 詳細統計dump。1ファイルに上書き。公開資料へ生データを貼らない |
| `plugins/SocialLikes3-backups/startup-<日時>/` | enable の起動前コピー。ワールドや他プラグインのデータは含まない |
| 看板・アイテムのワールドデータ | 登録IDと世代、SLTP案内先・所有者、ガイドのIDなど。上記プラグインフォルダのコピーだけでは退避できない |

通常の建築読込では `Load completion! source=...` のログを確認してから操作を案内してください。これは一覧画面・宣伝履歴まで準備完了した保証ではありません。YAMLのdataフォルダがない場合は、このログなしで読込処理を終えます。起動・停止の順序と待機時間は [PROJECT.md](PROJECT.md#起動と主要な処理の流れ) を参照。

バックアップコピー・SQLite初期化の失敗は起動を中断します。バックアップの世代削除失敗はログに出して続行します。`offlineLikePoint.yml` の整数でない値・不正なUUIDキー、`lastSLTP-Time.yml` の不正なUUIDキーも例外で起動を中断します。後者の読み込み時点ではイベント登録・建築読込が始まっているため、途中まで初期化された状態で失敗します。`UserFollowData/<UUID>.yml` の `FollowList` に不正なUUIDがあると参加時の処理が失敗し、起動時にオンラインプレイヤーを読み直す場合も起動を中断します。

建築YAMLの不正な日時・UUID・必須項目はスキップされる場合があり、ファイル読込例外で全体が中断する場合もあります。ワールド未ロードのデータは保持され、ワールド読込時に参照を解決します。ワールド名の変更には自動追従しません。停止時もYAML書込みやコマンドログの全件排出は保証されません。

## 移行と障害対応

- **IDの自動移行は現行の起動処理にありません。** `readSource=sqlite` は `migration_state.sqlite_primary_id_migration_complete=true` がある場合だけ有効。負IDの件数は警告の説明用に取得するだけで、マーカーがtrueなら負IDが残っていても選択を許します。`markSqlitePrimaryReady()` に呼出元はなく、マーカーを立てるコマンドもありません。マーカーだけを手で作って完全性の証明にしないでください。
- 旧看板の座標不一致では、プレイヤーへ運営への報告を促し、`[SocialLikes3] 旧Like看板の座標違いがクリックされました` とワールド名・座標を警告ログに出します。登録位置と現物を照合してください。
- 移行表 `id_migration_map` は旧IDを現在IDへ解決するためのものです。世代2の看板はIDをそのまま使い、旧世代だけ表で解決します。数値指定の `/sltp`・`/slsignget` は旧IDを自動変換しません。
- `/sldataop rewrite-sign-pdc` はSQLiteの現役登録座標だけを処理します。1tick最大8チャンク起動、同時最大24。看板なし・ワールド未ロード・不一致・エラーはスキップして集計。世界全体、持ち物、SLTP看板の案内先・クリックコマンド、旧 `[SocialLikes]` の文字色IDは書き換えません。再実行時は同じIDでも世代を付け直します。完了表示は全件成功の意味ではありません。
- `tools/release-timestamps.sh` は `TimestampMigrationMain` を要求しますが、現行ソースにそのクラスはありません。利用可能な移行jarと実行成功は未確認。過去の [設計書](sqlite-migration-design.md) をそのまま現行の作業手順に使わないでください。
- YAML を主にすると、起動時の全件同期はキャッシュにないSQLiteの建築・いいねを物理削除します。ガイド掲載なども外部キーの削除に巻き込まれます。不完全なYAMLや復元途中のデータで通常起動しないでください。
- 建築の同じ座標に現役データが重複すると、SQLiteの一意インデックス作成を警告してスキップし、既存の重複は統合しません。インデックスがあれば新規の重複保存は失敗します。登録処理自体には事前の座標重複検査がありません。
- 保存前にメモリ・表示を更新します。失敗しても戻さず、「イイねしました！」・登録告知・移動完了・消去成功の表示が先に出る場合があります。主保存失敗通知は「この看板のデータを保存できませんでした。運営に報告してください（ID: ID）」、SQLite主保存での削除失敗は「データの削除に失敗しました。」です。オフラインの操作主へ通知を後送する処理はありません。
- SQLiteの建築保存は最大5回、100・200・300・400msの待機で再試行。制約違反は最初で打ち切り。最終失敗IDはdirtyへ記録して定期再保存します。起動時はYAML優先、稼働中はメモリ優先。どちらにもデータがないIDは3回の照合後にdirtyから外し、復旧を諦めます。dirtyファイル自体の保存失敗もログ確認が必要です。
- 登録・移動・削除のログ記録や宣伝履歴同期は建築保存と別トランザクションです。全操作の監査履歴が必ず揃う保証はありません。YAML主保存の削除ミラー失敗はログだけで、プレイヤーへの失敗通知はありません。
- いいねのイベント・お金・作者報酬は主保存の成功後。オンライン報酬の失敗は未受取ポイントへ積み直しません。オフライン報酬は次回参加の20tick後に処理し、可能なら `addTokensWithCommit(UUID,long)` の確定を待って消します。旧TokenManagerへは受付成功で消す経路を使います。確定後の未受取ファイル保存に失敗すると未受取額を戻すため、次回の重複付与を防ぐ保証はありません。
- 建築の宣伝とSLTP看板購入は `removeTokens` の戻り値・保存確定を検査しません。ガイド宣伝・追加枠購入は非同期chargeの成功を確認し、ガイド状態変化や保存失敗で返金を試みます。ポイントDBとSLのDBを一括コミットしないため、障害・停止時の完全な一回限り課金は保証しません。

障害時は対象ID、主保存先、YAMLとDBの実データ、dirty一覧、起動・保存ログを確認します。`tools/compare_shadow_data.py` は**コピーしたデータ**でYAMLとDBを比較する読取専用ツール、`tools/backfill-player-names.py` はDBへ名前を書き込むツールです。バックアップ・復元にはプラグインフォルダ、SQLite補助ファイル、対象ワールド、必要な報酬連携データを揃える必要があります。

## 守られるもの・守られないもの

- 正しく登録位置と一致するSL看板は、破壊、爆発、ピストンの押し引きをキャンセルします。看板を含む爆発はリストから看板だけ除くのではなく、**爆発イベント全体**をキャンセルします。OPもこの制限を受けます。
- 支えは、対象の上の普通看板、下の吊り看板、水平4方向で向きが一致する壁看板を探します。分岐は上→下→横の順で、すべてを総当たりしません。壁付き吊り看板の横の支えなど全形状を網羅する保証はありません。
- `[SocialLikes]` の旧看板はデータ照合せず破壊をキャンセル。通常のSL看板はIDなし・現役データなし・登録位置不一致だと守りません。ロード中はロゴのあるSL看板を止めます。
- SLTP看板は建築の存否に関係なくPDCで破壊を止めます。通常のSLTP看板は紹介先の建築が消えてもOPを含め通常破壊できず、爆発リストに含まれると爆発全体をキャンセルします。`/slsignbreak` も「IDが存在しないため、看板の再入手に失敗しました」で止まります。建築削除の前に案内看板を回収してください。ただしSLロゴの分岐で先にreturnする場合はSLTP判定まで到達せず、他プラグインの直接ブロック変更まで防ぐものではありません。
- 建築全体、土地所有、ホッパー、延焼、流体、他プラグインの直接ブロック変更を保護する処理はありません。キャンセル済み右クリックも処理するので、他の保護プラグインが先に止めてもいいね等が進む場合があります。
- `/vtp` は設定範囲のチャンク中心を抽選してSL看板数を数えるだけ。バイオームなしの探索は最大33回。指定ありでは全抽選を数える `biomeCount` とバイオーム一致候補だけを数える `totalCount` が別で、33回以上抽選する場合があります。不一致時は `biomeCount>=33`、一致候補の検査後は `totalCount>=33` で終了します。一致候補33回目で空き地が見つかると、移動処理と「空き地が見つかりませんでした。」の両方が予約されます。地表判定はY=321から-64まで。土地保護・危険ブロック・頭上空間を総合判定しません。SL看板インデックスがないワールドではメッセージなしで終了します。

## 他プラグインとの連携

- `plugin.yml` のsoftdependは TokenManager、Multiverse-Core、DiscordSRV、LuckPerms、FastAsyncWorldEdit、floodgate。softdependは各機能がなくても安全に使える保証ではありません。
- いいね報酬・建築宣伝・SLTP購入はTokenManager互換API。ガイド課金・返金・追加枠はOyasaiTokenService登録とTokenManager取得の両方が必要。OyasaiTokenServiceを直接参照しますが、OyasaiTokenはsoftdependにもdependにもなく、SocialLikes3側で読み込み順を指定していません。ビルド依存だけでは実行時のサービス提供を保証しません。TokenManagerが取得できない場合、SLTP看板の入手ボタンは通知なしで終わります。
- DynamicProfileのクリックリンクが `/sltp`、OyasaiMenuが `/slbuild`・`/sluser`・`/slmenu`・`/slnear`・`/vtp` を使います。コマンド名を変える場合は呼出側も修正してください。
- 外部向け `LikeEvent` はいいねした人と建築所有者のUUIDだけで、建築IDを含みません。同じ作者のどの建築へのいいねかをイベント単体では判別できません。
- お金1000の付与はコンソールへ `eco give <名前> 1000` を渡します。コマンドの存在・実行結果は検査しません。
- ランク候補の取得はLuckPerms APIを直接利用。WorldEdit/FAWEはregion更新で直接利用し、選択なしの例外を捕捉する処理はありません。
- DiscordはDiscordSRVの中継ではなく、Javacordで専用Botとして接続します。空トークン・空/不正チャンネルIDは警告して接続しません。接続失敗ログは `Failed to connect to Discord! Disabling plugin!` ですが、SL自体を無効化するコードはありません。新規建築の投稿、タイトル・位置更新時の編集、削除時の「削除済み」編集だけで、Discordの👍をゲーム内いいねへ反映するリスナーはありません。
- プレイヤーヘッドはPlayerDBを非同期照会（接続・読取各3秒）、失敗時は名前・通常ヘッドにフォールバック。floodgateのUUID・名前を補助判定します。Multiverse向けの専用API呼出はなく、Bukkitのワールド読込・解除イベントで追従します。
- フォントグラフはローカル実験用の固定配布先とzipを使う試作です。配布サーバーを立てるコードはありません。拒否・取得失敗・600tickの時間切れで「リソースパックが有効でないためグラフを表示できません。」。通常の統計Dialogにこのパックは不要です。
