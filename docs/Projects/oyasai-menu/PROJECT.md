---
title: "OyasaiMenu — GUIメニューシステム"
status: active
source_of_truth: "plugins/OyasaiMenu/"
source: "plugins/OyasaiMenu/（コードから作成。2026-10-13 にレビュー指摘をコードと照合済み。ゲーム内での確認は未実施）"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
  - docs/Projects/oyasai-menu/editors-doc/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiMenu

YAML で定義したメニュー、Popup、通常ショップ、ポイントショップ、売却画面を提供する Paper プラグインです。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-menu/operator.md)
- 既存の編集者向け資料: [editors-doc/index.html](editors-doc/index.html)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiMenu/` |
| 主要コード | `src/main/kotlin/com/github/sahyuya/oyasaiMenu/OyasaiMenu.kt`、`command/`、`engine/`、`loader/`、`manager/`、`item/` |
| テスト | `src/test/kotlin/com/github/sahyuya/oyasaiMenu/item/`。`MenuItemTest` は初回参加者への付与、レシピクラフトのキャンセル文言、同じ tick の二重起動抑止、次 tick での起動、テンプレート不一致を確認します。`loader/PointShopLoaderTest` は cost の0・正値・負値・省略・不正型と enabled、`engine/PointShopCommandsTest` は失敗位置と後続中断を確認します。GUI、権限、経済・ポイント連携、Paper イベント実動作、保存失敗は保証しません。2026-10-26 に OyasaiMenu の build と全9テストの成功を確認しました。 |
| ビルド | `nix develop --command gradle :plugins:OyasaiMenu:build`。成果物は `plugins/OyasaiMenu/build/libs/OyasaiMenu.jar`。ルート Gradle の build は shadowJar に依存します。 |
| Nix package | `packages/oyasai-plugins.nix` が `plugins/OyasaiMenu/` から `oyasaimenu` 属性を公開します。`packages/oyasai-minecraft-main.nix` のプラグイン一覧から参照されています。 |

## 技術仕様

### 構成と処理の流れ

- `OyasaiMenu.onEnable` はデフォルト設定を保存し、メニューアイテム保存機能、各 YAML ローダー、経済・ポイント・クールダウン管理を初期化します。その後コマンドの executor と tab completer を登録し、GUI・プレイヤーイベントの listener を登録します。
- `command/` は Bukkit コマンドを受け付け、`engine/` が GUI 作成と取引・アクションを処理します。`loader/` はデータフォルダの YAML をモデルへ読み込みます。`manager/` は外部経済・ポイント API、クールダウン、お知らせ、売却ホワイトリストを扱います。`item/` は配布用メニューアイテムと SQLite ストアを扱います。
- 通常メニューは `menus/` 以下の YAML を再帰走査します。`menus/popup/` は Popup ローダーが別に読み、ショップ・ポイントショップ用 YAML は通常メニュー走査から除外します。
- メニュー項目は権限判定後にアクションリストを順番に実行します。`check_permission` は success/fail のアクション列へ分岐します。Popup は `required_permission`・`op_only` で表示と実行を制限し、権限不足時は fallback item/icon/actions を使えます。
- メニュー画面はプレイヤーごとの holder にメニュー ID とページを保持します。通常メニュー、Popup、通常ショップ、ポイントショップ、売却画面、管理画面はそれぞれ固有の holder を使います。
- `/oyasaimenu reload` は config、全 YAML と各 manager を再初期化します。通常メニューのキャッシュ画面は閉じます。メニューアイテム用 SQLite は再オープンしません。各ローダーが個別に警告して読み飛ばしても、リロード処理全体は継続します。

### メニューとアクション

- 通常メニュー YAML は title、size、items を読みます。size は9〜54に収め、9の倍数へ丸めます。item は slot、icon、name、lore、actions、permission、texture、enchanted を持ちます。`AIR` は空スロットです。存在しない Material 名は通常メニューでは `STONE` に置き換えます。
- 通常メニューで置換する値は `%player%`、`%player_name%`、`%online%`、`%server_tps%`、`%tps%`、`%dp_level%`、`%money%`、`%tokens%`、`%announcement_title%`、`%announcement_line_1%`〜`%announcement_line_10%` です。lore の単独要素が `%announcement_body%` の場合は本文の複数行へ展開します。config の `placeholders.server-name` は参照されません。
- item slot の範囲・重複はローダーで検証しません。通常メニューでは表示条件を満たし実際に配置された後の item が上書きします。クリック処理は最初の定義を選び、その後に AIR・権限を判定するため、表示と実行が一致しない、または無反応になる場合があります。Popup のクリックも最初の定義で判定します（表示の AIR 消去は後述）。負の slot も通常メニューでは loader を通過して Inventory.setItem に渡るため、表示時の結果は未確認です。
- ActionEngine はメニューを開く、Popup を開く、プレイヤー/コンソール/OP コマンド、メッセージ、サウンド、broadcast、URL 表示、クリップボードコピー、コマンド提案、ショップ・売却・ポイントショップを扱います。画面を開く一部アクションは1 tick後に実行します。コマンド実行結果は検査しません。
- Popup のアクションはプレイヤー/コンソール/OP コマンド、URL・チャット表示、コマンド提案、Popup/通常メニュー/ショップ/売却/ポイントショップの遷移です。Popup の URL はクリック可能な Component ではなく、チャットへ文字列で送ります。Popup から同じ画面を再度開くと、1 tick 後に root メニューを開きます。
- Popup の action value は `player_cmd`、`console_cmd`、`op_player_cmd`、`suggest_command` だけ実行時に `%player%` を置換します。`url`、`chat_paste`、画面遷移先は置換しません。Popup の title/name/lore には通常メニューの PlaceholderContext 置換を行いません。PointShop は name/lore/message/commands ごとに置換対象が異なります（運営向けの [メニュー定義の既定値](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-menu/operator.md#メニュー定義の既定値) を参照）。

### アクション設定契約

通常メニューの各 item の `actions` は、次の type と引数を持つ map のリストです。type は大文字化し、ハイフンをアンダースコアへ置換して解釈します。未知の type は警告します。正本は `loader/MenuLoader.kt` の parseActionMap と `engine/ActionEngine.kt` です。

| type | 引数キー | 実行内容 |
|---|---|---|
| `OPEN_MENU` / `OPEN_POPUP` | `target` | 指定画面を次 tick に開く。OPEN_MENU は Popup として登録済みなら Popup へ委譲。空 target は警告して終了 |
| `OPEN_SHOP` | `category`（省略時空） | 次 tick に通常ショップを開く。空なら shopindex |
| `OPEN_POINT_SHOP` | `category`（省略時空） | 次 tick にポイントショップを開く。空なら先頭カテゴリ |
| `RUN_COMMAND` / `CONSOLE_CMD` | `command` | コンソールで実行 |
| `RUN_PLAYER_COMMAND` / `PLAYER_CMD` | `command` | プレイヤーで実行。先頭の `/` を除去 |
| `OP_PLAYER_CMD` | `command` | 現在 OP のプレイヤーでのみ実行。OP を付与しない。非 OP には拒否文言と警告 |
| `MESSAGE` / `PLACEHOLDER_TEXT` | `text` | プレイヤーへメッセージ |
| `BROADCAST` | `text` | 全体へメッセージ |
| `URL` | `url` | クリックで開ける URL をチャットへ表示 |
| `CHAT_PASTE` | `text` | クリックでクリップボードへコピーする文を表示 |
| `SUGGEST_COMMAND` | `command` | 先頭の `/` を除去してチャット入力候補を表示 |
| `SOUND` | `sound`、`volume`、`pitch` | minecraft 名前空間のサウンド。省略時 UI_BUTTON_CLICK / 1.0 / 1.0 |
| `CHECK_PERMISSION` | `permission`、`success`、`fail` | 権限に応じて success / fail のアクションリストを再帰実行 |
| `CLOSE_MENU` / `CLOSE` | なし | 閉じる |
| `OPEN_UTILITY` / `OPEN_CHANNEL` / `OPEN_SOCIALLIKES` / `OPEN_CARBUILDER` / `OPEN_LINKS` | なし | 次 tick に対応する Popup を開く |
| `OPEN_INFO` / `OPEN_SELL` | なし | 次 tick に root / 売却 GUI を開く |

command、text、url のテキスト系引数には、前節の通常メニュープレースホルダーを適用します。target / category / permission / sound は置換しません。

```yaml
menu:
  title: "&8ショップ入口"
  size: 9
items:
  blocks:
    slot: 0
    icon: CHEST
    name: "&aブロック"
    actions:
      - {type: OPEN_SHOP, category: blocks}
  spawn:
    slot: 1
    icon: COMPASS
    actions:
      - type: CHECK_PERMISSION
        permission: example.spawn
        success:
          - {type: PLAYER_CMD, command: spawn}
        fail:
          - {type: MESSAGE, text: "&c利用権限がありません。"}
```

### Popup 設定契約

Popup の actions / fallback_actions は type ではなく、1要素につき1つのアクションキーを書く形式です。複数キーを同じ map に書くと、`loader/PopupMenuLoader.kt` の parseAction の最初の該当分岐だけを採用します。

| キー | 値・挙動 |
|---|---|
| `player_cmd` / `console_cmd` / `op_player_cmd` | コマンド文字列。プレイヤー / コンソール / 現在 OP のプレイヤーで実行。OP は付与しない |
| `url` / `chat_paste` | そのままチャットへ表示する文字列 |
| `suggest_command` | チャット入力候補の文字列 |
| `open_popup` / `open_menu` | 画面 ID |
| `open_shop` | カテゴリ ID。空文字列なら shopindex |
| `open_point_shop` | カテゴリ ID。空文字列または true なら先頭カテゴリ |
| `open_sell` / `close` | キーの存在で判断し、値は使わない |

`player_cmd`、`console_cmd`、`op_player_cmd`、`suggest_command` だけ `%player%` を置換します。title/name/lore（fallback 側を含む）に通常メニューの置換はありません。閉じるタイミングは [同期・非同期処理](#同期非同期処理) を参照。URL・chat_paste はその場で送信し、残りの列を予約実行します。

item / fallback_item の対応範囲は次のとおりです。任意の Minecraft コンポーネントを適用する実装ではありません。正本は `loader/PopupMenuLoader.kt` の parseItemSpec と `engine/PopupMenuEngine.kt` の buildBaseItemStack / applySpecToMeta / applyDataComponents です。

| 設定 | 適用内容 |
|---|---|
| `id`（別名 `material`） | 素材。minecraft: 接頭辞も受け付ける。不明・未指定なら警告して spec を使わない |
| `count`（別名 `amount`） | 個数。省略時1、1〜64に制限。texture 付き PLAYER_HEAD の生成は CustomHead 側を使う |
| `block_state` / `components.minecraft:block_state` | BlockDataMeta にブロック状態を適用。components 側を先に読み、直下の block_state で同じキーを上書き。状態があれば BLOCK_DATA の tooltip を非表示にする |
| `components.minecraft:potion_contents` | PotionMeta の potion と custom_effects（type / amplifier / duration / ambient / show_particles） |
| `components.minecraft:stored_enchantments` | EnchantmentStorageMeta にエンチャント ID と数値レベルの map を適用 |
| `components.minecraft:enchantments` | 通常エンチャント ID と数値レベルの map を適用 |

components の minecraft: 接頭辞は省略できます。表示名・説明は item 内の components ではなく、外側の name/lore または fallback_name/fallback_lore を使います。

- 通常側が `icon: AIR` かつ item 未指定なら空欄にし、クリックも fallback を含め無視します。item があれば icon に優先して表示用 stack を作ります。
- 権限不足時は fallback_item を最優先します。それがなければ fallback_icon 未指定は空き枠のガラス埋め、AIR は最後に強制消去、他素材は指定アイコンを表示します。
- 権限不足時のクリックは、fallback の見た目にかかわらず fallback_actions があれば実行します（通常側 AIR・item 未指定の除外が先）。表示だけを空にして操作を止めたつもりにならないでください。
- 重複 slot の通常配置は後の表示が上書きしますが、通常側 AIR・item 未指定の定義や権限不足時 fallback_icon: AIR の slot は配置後に消去します。クリックは最初の定義を選ぶため、表示とアクションの一致を保証しません。

```yaml
title: "&8案内"
items:
  spawn:
    slot: 0
    icon: COMPASS
    name: "&aスポーン"
    required_permission: example.spawn
    actions:
      - {player_cmd: spawn}
    fallback_icon: AIR
    fallback_actions:
      - {chat_paste: "利用条件を運営に確認してください。"}
  enchanted_book:
    slot: 1
    name: "&a表示用の本"
    item:
      id: minecraft:enchanted_book
      count: 1
      components:
        minecraft:stored_enchantments:
          minecraft:unbreaking: 1
```

### ショップ、売却、ポイント

- 通常ショップ商品行は `<material> <buy> <sell>`、カスタム商品行は `$<key> <buy> <sell>` です。買値・売値は有限値かつ0以上でないと読み飛ばします。0は読み込みますが購入・売却できません。未知の通常素材は Material を null として保持し、画面には表示しません。
- カスタム商品定義は素材・name・lore・enchantments を持ちます。GUI 表示には name/lore/enchants を使いますが、購入処理は素材と enchantments だけの ItemStack を作ります。所持品へ入りきらない購入品は地面に落とします。
- 商品売却はショップの sell price とホワイトリストを使います。`SellEngine.getSellPrice` はカスタム名、BookMeta のタイトルまたはページ、カスタムモデルデータの有無でホワイトリストへ分岐し、それ以外は素材単位です。署名前の本と羽根ペンもページがあれば対象です。通常ショップ GUI では、素材一致と getSellPrice が null でないことに加え、通常エンチャントの map が商品行と完全一致する必要があります。`/sell` 系は商品行とのエンチャント一致を求めません。ショップの商品行の表示名・loreとの一致は比較しません。
- 容器の中身・任意の PDC はカスタム品判定条件ではなく、中身入りシュルカーボックスも素材価格で売れる場合があります。売却成功時はアイテムと中身を失います。ホワイトリストの照合も任意の PDC・容器の中身・本の本文を比較しません。本はタイトル・著者（前後空白除去）・ページ数を比較し、カスタム名はプレーンテキストで比較するため色・装飾を区別しません。比較の正本は `manager/SellWhitelistManager.kt` の hasCustomContent / matchesComponents です。
- エンチャント付き商品の購入は Shift 操作でも1個固定ですが、通常売却は選択数量、Shift 売却は一致する所持分すべてです。エンチャント商品の表示数量・売却 lore が1個でも、売却処理の数量とは限りません（`engine/ShopEngine.kt`）。
- 通常売却用の price map は Material ごとに1件です。ショップ読込時に後から処理された売却可能な同素材行が map の価格を上書きします。`/sell hand`、`/sell all`、売却 GUI はこの値を使います。通常ショップ GUI の売却は選択した商品行の sell price を使います。
- 売却 GUI は上段0〜44を入力枠、45〜53を操作枠として使います。売却に失敗したときは入力アイテムを消費しません。未売却品は閉じるとプレイヤーへ戻し、入りきらない分は地面に落とします。InventoryDragEvent は操作枠へのドラッグだけキャンセルします。
- ポイントショップはカテゴリ内キーを数値順に並べ、1ページ45件で表示します。`cost` は必須の0以上の整数で、省略・負値・整数以外は警告して読み飛ばします。`enabled` は既定 true で、false の商品は読み込みません。cost 0 はポイントを引かず、ポイント価格・不足の表示や購入ヒントの「(0P)」を出しません。コマンド側で円などを課金する商品にも使えます。購入時に正の cost だけ OyasaiEconomy から引き落とし、その後 YAML の commands をコンソールから順に実行します。最初に false が返った時点で中断し、最初のコマンドなら引いたポイントを返金します。2つ目以降は部分付与の可能性があるため返金しません。どちらも警告ログと運営への連絡案内を出し、返金自体に失敗した場合もその旨を通知します。close-on-purchase も同じ判定です。戻り値 true は商品の付与成功を保証しません。

- PaintTools の `painttools canvas <player>` と `painttools dye <player>` はコンソールから付与・画面表示を行いますが、現在の OyasaiFrames の実装は処理後も false を返します（`com/github/srain3/painttools/commands/PaintToolsCmd.kt`）。同梱商品12では最初の canvas 処理後に返金・中断となり、後続の染料・額縁・権限付与は実行されません。コマンド側の成功時戻り値の修正が必要です。

### データ形式と永続化

| データ | 保存先・形式 | 読込・更新上の注意 |
|---|---|---|
| 設定 | データフォルダの `config.yml` | 同梱時は menu.default=root、server-name=OyasaiServer、click-ms=100、command-ms=300、sell-whitelist.enabled=true。server-name と sell-whitelist.enabled は現在参照されません。 |
| GUI 定義 | `menus/root.yml`、`menus/popup/*.yml` | 不足時に一部の標準リソースを作成します。既存ファイルは上書きしません。 |
| 通常ショップ | `menus/shop/shops.yml`、`menus/shop/custom_items.yml` | 商品価格とカスタム商品設定。in-game 編集で保存失敗してもコマンド側が成功表示する場合があります。 |
| ポイントショップ | `menus/shop/pointshop.yml` | `cost` は必須で0以上の整数。0はポイント引き落としなし。`enabled: false` は読み込み対象外（既定 true）。`message` は購入者へ送る文字列、`commands` はコンソールコマンドです。 |
| お知らせ | `announcements.yml` | announcements の先頭要素だけを読みます。空・解析失敗時は現在の値を消しません。 |
| 売却ホワイトリスト | `sell-whitelist.yml` | entries に ID、表示名、素材、売値、Base64 の ItemStack bytes を保存します。比較時は amount を1、damageを0、loreを空に正規化します。保存エラー時にメモリ状態を戻しません。 |
| 配布用アイテム | `command-items.db` | SQLite。`command_items(name TEXT PRIMARY KEY, item BLOB NOT NULL)` に name=menu の行を保存します。テーブルがなければ作成します。 |

保存先はすべてプラグインのデータフォルダです。プレイヤーごとの GUI ページ、通常ショップの数量・左右反転、クールダウンは永続化しません。経済残高とポイント残高は外部プラグインが管理します。旧ファイル形式からの明示的な移行処理はありません。

### 同期・非同期処理

- Bukkit のコマンド・イベント、YAML 読み込み、OyasaiEconomy/OyasaiEconomy 呼び出し、SQLite 読み書きは非同期 executor に移していません。通常は呼び出し元のメインスレッド上で処理します。
- ActionEngine の画面遷移は1 tick後に予約します。Popup のアクションも通常1 tick後に実行し、close・suggest_command・op_player_cmd を含む場合は画面を閉じてさらに1 tick後に実行します。close-on-purchase のポイント商品も画面を閉じて次 tick にコマンドを実行します。
- GUI click cooldown は通常メニュー・Popup・通常ショップ・ポイントショップ・管理画面で共有する System.currentTimeMillis() の UUID ごとのメモリ map で管理します。別画面へ移った直後も無言で無視され得ます。売却 GUI はこの確認を呼びません。初期値は100msです。sell コマンド cooldown は別 map で300ms、/sell hand と /sell all だけに使います。ログアウト時に両方の記録を消します。
- メニューアイテムの SQLite 接続は起動時に開き、停止時に閉じます。sqlite.jdbc は implementation 依存で、JDBC 接続は同期です。保存失敗時に GUI 等の他機能を止めないよう初期化例外を局所的に捕捉します。

### イベント

- MenuEngine、PopupMenuEngine、ShopEngine、PointShopEngine、AdminEngine は InventoryClickEvent を処理します。売却画面は InventoryClickEvent、InventoryDragEvent、InventoryCloseEvent を処理し、閉じると入力枠のアイテムを返します。
- MenuItem は PlayerJoinEvent、PlayerQuitEvent、PlayerInteractEvent、PlayerInteractEntityEvent、PlayerInteractAtEntityEvent、CraftItemEvent を処理します。AIR 以外の登録テンプレートとメインハンドを isSimilar で照合し、右クリックで menu コマンドを実行します。名前やメタデータの変更で一致しなくなる場合があります。初回配布は保存個数のまま、/getmenu は1個です。空の手も保存できますが AIR は起動しません。クラフト欄に一致アイテムがあればクラフトをキャンセルします。同 tick の重複イベントはプレイヤーごとに抑止します。
- 通常メニュー・Popup・ショップ・ポイントショップ・管理画面に InventoryDragEvent handler はありません。イベント上のクリックキャンセルだけでドラッグ移動も阻止されるかは未確認です。

### 外部 API・依存

- plugin.yml は api-version 1.21、softdepend LuckPerms / DynamicProfile / OyasaiEconomy です。
- build.gradle.kts は Purpur API、LuckPerms API、OyasaiEconomy と DynamicProfile project を compileOnly、SQLite JDBC を implementation とします。テストは Purpur API を使用します。
- EconomyManager は Bukkit ServicesManager から OyasaiEconomy Economy provider を取得します。未検出なら通常ショップと売却を止めます。
- TokenCurrencyManager は ServicesManager から共通APIを取得する。未検出ならポイントショップを止める。
- PlayerAccess は LuckPerms API が使えるときに通常メニューの権限・lpgroup 条件を評価し、取得失敗時は Bukkit hasPermission に戻ります。Popup の required_permission は Player.hasPermission を直接使用します。
- DynamicProfile の Calculator と validatedTitle からレベル・タイトルを取得します。プラグイン無効または処理例外では --- を返します。
- YAML に定義された player_cmd / console_cmd 等は Bukkit に渡します。外部コマンドの存在、成功、権限結果は確認しません。PlaceholderAPI の連携は実装されていません。

### テストコードが扱う範囲

`ItemTemplateStoreTest` は一時 SQLite ファイルを開き、空の key の読み取り、同じ key への再保存、close 後の再オープンで最後の bytes が残ることを確認します。

`MenuItemTest` は Bukkit object を proxy し、初回参加者だけに配ること、レシピ contents に一致アイテムがあると指定文言でキャンセルすること、1 tick 内の複数 activation を1回にすること、次 tick で再実行すること、テンプレート不一致では起動しないことを確認します。activation テストの item matcher はテストから注入され、本番の ItemStack.isSimilar や実イベント dispatch を検証していません。

GUI 配置、コマンド権限、YAML の異常系、Economy/OyasaiEconomy/LuckPerms/DynamicProfile API、入金失敗時の実動作、drag、SQLite 破損・書込失敗、Paper 上の統合動作はテスト範囲外です。

この資料作成時点ではビルド・テストを実行していません。上記はテストコードから読める検証範囲です。

### 既知の制限と未確認事項

- config.yml の placeholders.server-name と sell-whitelist.enabled は現在のコードから参照されません。cooldown.click-ms のコード側 fallback は同梱値と異なる200msです。
- menu.default が存在しない ID を指すと「メニューが見つかりません: <ID>」を表示します。root.yml を読み込めない場合は、root の空の fallback GUI を開きます。
- お知らせはリストの最初だけ読みます。空リストや解析失敗は、直前のメモリ値を消去しません。
- 売却ホワイトリストは保存失敗時もメモリ上の編集を戻さず成功表示する場合があります。ショップ追加・削除は一時的な YamlConfiguration を保存してファイルから全体を再読込するため、編集結果をメモリに保持しません。ファイルが変更されなければ旧内容へ戻りますが、成功表示は出る場合があります。部分書込後の失敗結果は未確認です。`loader/ShopLoader.kt`、`command/MenuEditCommand.kt`、`manager/SellWhitelistManager.kt` を参照し、ログと再読込後の一覧を確認してください。
- 標準 GUI の drag 操作、メニューアイテムの初回配布・右クリック・レシピイベント、外部経済・ポイント連携はゲーム内で未確認です。
- `docs/Projects/oyasai-menu/editors-doc/` は既存資料として残しています。スロットや動作の変更時は実装と照合してください。

## 判断の記録


## 2026-10-25 経済APIの統合

経済連携は `io.oyasai.economy.api.OyasaiEconomyApi` を ServicesManager から取得する。金額はLongで、通貨IDを引数に渡す。円とトークンに別のAPIサービスは使わない。参照は既存口座だけを扱い、APIによる口座の自動作成はない。詳細は [OyasaiEconomy](../oyasai-economy/PROJECT.md) を参照。

ショップ価格・売却価格は整数。既定のパン購入価格は2円。小数を整数へ変換する処理はなく、設定や入力で小数を拒否する。
