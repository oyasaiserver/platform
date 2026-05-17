# GuiMaker / CsmMenu — 使用ガイド

CitiesSkyMine が内蔵する GUI メニュー作成ツール **GuiMaker** と、 作ったメニューを実際にプレイヤーへ提供する
**CsmMenu エンジン** の説明書です。

---

## 目次

1. [概要](#1-%E6%A6%82%E8%A6%81)
1. [コマンドリファレンス（ユーザー向け）](#2-%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9)
   - 2-1. `/.gm` — メニュー編集
   - 2-2. `/.csmenu` — メニュー表示
1. [編集フロー（作業手順）](#3-%E7%B7%A8%E9%9B%86%E3%83%95%E3%83%AD%E3%83%BC)
1. [GUI 画面の説明](#4-gui-%E7%94%BB%E9%9D%A2%E3%81%AE%E8%AA%AC%E6%98%8E)
1. [アクションタイプ一覧](#5-%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%97%E4%B8%80%E8%A6%A7)
1. [カラーコード](#6-%E3%82%AB%E3%83%A9%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89)
1. [YAML フォーマット仕様](#7-yaml-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E4%BB%95%E6%A7%98)
1. [技術仕様](#8-%E6%8A%80%E8%A1%93%E4%BB%95%E6%A7%98)

---

## 1. 概要

| 機能 | 説明 | |------|------| | **GuiMaker** | OP がゲーム内でメニューを WYSIWYG 編集する GUI
エディタ | | **CsmMenu** | 作成したメニューをプレイヤーに表示する実行エンジン |

**ファイルの保存場所**

```
plugins/CitiesSkyMine/
  menus/          ← コミット済みメニュー（CsmMenu が読み込む）
  guimaker/       ← 保存中のドラフト（コミット前の作業ファイル）
  favorites/      ← プレイヤーごとのお気に入りアクション
  ui-skin/        ← GuiMaker 自身の UI 配置・アイコン設定
```

**権限**: `/.gm` コマンドは **OP のみ**使用できます。`/.csmenu` でのメニュー表示はすべてのプレイヤーが使えます（メニュー内
`permission` 設定が優先）。

---

## 2. コマンドリファレンス

### 2-1. `/.gm` — メニュー編集

#### 基本コマンド

| コマンド | 説明 | |----------|------| | `/.gm new <id>` | 新しいメニューを作成してキャンバスを開く | |
`/.gm edit <id>` | 既存メニューのキャンバスを開く | | `/.gm list` | 存在するメニュー ID を一覧表示 | |
`/.gm help` | ヘルプを表示 | | `/.gm ui ...` | GuiMaker 自身の UI デザインを変更 |

**メニュー ID のルール**: 英数字・`_`・`-`・`.` と階層区切りの `/` のみ使用可能。 例:
`shop`、`shop/items`、`rank.menu`

#### `/.gm edit <id> <操作>`

| 操作 | 引数 | 説明 | |------|------|------| | `canvas`（省略可） | — |
キャンバスを開く（ドラフトがあればドラフト優先） | | `preview` | — | 現在の編集内容をプレビュー（アクションも動作する） | |
`commit` | — | ドラフトを確定し `menus/<id>.yml` に書き出す。CsmMenu を自動リロード | | `revert` | —
| ドラフトを破棄してライブ版（最後のコミット）に戻す | | `info` | — | メニュー ID・タイトル・サイズ・アイテム数・ドラフト有無を表示 |
| `discard` | — | 編集セッションをメモリから破棄（ファイルは消さない） | | `title` | `[text]` |
メニュータイトルを設定。引数省略でカラー選択 GUI を開く | | `name` | `<slot> <text>` | 指定スロットのアイテム名を設定 |
| `lore` | `<slot> <text>` | 指定スロットにロア（説明文）を 1 行追加 | | `clearlore` | `<slot>` |
指定スロットのロアをすべて削除 | | `perm` | `<slot> [permission]` | 表示権限を設定。省略でクリア | | `action`
| `<slot> <type> [value]` | アクションを追加（タイプ一覧は §5 参照） | | `clearactions` | `<slot>`
| 指定スロットのアクションをすべて削除 | | `clearslot` | `<slot>` | 指定スロットのアイテムと設定をすべて削除 |

> **スロット番号**: キャンバス左上が 0、右下が（サイズ-1）。54 マスの場合は 0〜53。

#### `/.gm ui <操作>`

| 操作 | 説明 | |------|------| | `/.gm ui list` | 編集可能な GUI 画面名を一覧表示 | |
`/.gm ui edit <screen>` | 指定した画面のボタン素材・位置を変更 | | `/.gm ui silent` |
編集操作時のチャットログのミュートをトグル |

編集可能な画面名（`<screen>`）: `context`、`action_type`、`action_manage`、`action_edit`、
`lore_manage`、`lore_edit`、`permission`、`sound_category`、`sound_pick`、
`color`、`popup_pick`、`menu_pick`、`favorites`、`confirm`

---

### 2-2. `/.csmenu` — メニュー表示

| コマンド | 説明 | |----------|------| | `/.csmenu <menu-id>` | 指定したメニューを自分に対して開く | |
`/.csmenu reload` | `menus/` フォルダを再読み込み（OP のみ） |

`/.csmenu` のタブ補完: OP にはメニュー ID と `reload` が候補として表示されます。

---

## 3. 編集フロー

```
1. /.gm new myshop        ← メニューを新規作成
   または
   /.gm edit myshop       ← 既存メニューを開く

2. キャンバスが開く
   ・アイテムを自分のインベントリから
     キャンバスへ移動 → アイコンとして配置
   ・キャンバス内のアイテムを右クリック
     → コンテキストメニューが開く

3. コンテキストメニューで
   ・名前 / ロア / 権限 / アクションを設定

4. /.gm edit myshop commit ← 確定（YAMLに書き出し）
   → CsmMenu が自動リロードされる

5. /.csmenu myshop         ← 動作確認
```

**ドラフトとライブ**

- **ドラフト**: `guimaker/<id>.yml` に随時自動保存。コミット前の作業コピー。
- **ライブ**: `menus/<id>.yml` に存在するコミット済みファイル。CsmMenu が読む。
- キャンバスを開いたとき、ドラフトが存在すればドラフトが優先される。
- `revert` でドラフトを破棄してライブ版に戻せる。

---

## 4. GUI 画面の説明

### キャンバス

編集中のメニューをそのまま表示した画面。

| 操作 | 効果 | |------|------| | アイテムを自インベントリ → キャンバスへ移動 | アイコンとして配置 | |
キャンバス内アイテムを**右クリック** | コンテキストメニューを開く | | キャンバス内アイテムを**左クリック** | 位置を入れ替え / 移動 | |
キャンバスを閉じる | 自動ドラフト保存 |

> アイテムを移動しても名前・ロア・アクションなどのデータは **アイテムの
> PDC（PersistentDataContainer）に埋め込まれているため失われません**。

### コンテキストメニュー（スロット右クリック）

54 スロットの編集パネル。

| 位置 | ボタン | 機能 | |------|--------|------| | 9 | 表示カテゴリ | — | | 10 | 名前を設定 |
カラー選択 → テキスト入力 | | 11 | ロアを追加 | カラー選択 → テキスト入力 | | 12 | ロア編集 | ロア管理画面を開く | | 18
| 条件と動作カテゴリ | — | | 19 | 権限を設定 | LuckPerms グループ一覧から選択 | | 20 | アクションを追加 |
アクション選択画面を開く | | 21 | アクション管理 | アクション一覧・並べ替え・削除 | | 27 | 危険操作カテゴリ | — | | 28 |
スロットをクリア | アイテムと全設定を削除 | | 36 | お気に入りカテゴリ | — | | 37 | お気に入りを管理 | 登録済みアクションの管理 |
| 38〜44 | お気に入り(最大 7 件) | クリックで即アクション追加 |

### ロア管理

- グリッド表示（最大 21 行）で各行をクリック → 個別編集画面
- 上下矢印で行の並べ替え
- Barrier でその行を削除（確認あり）
- TNT で全行削除（確認あり）

### アクション管理

- グリッド表示（最大 21 件）で各アクションをクリック → 個別編集画面
- 上下矢印で実行順の並べ替え
- Barrier でそのアクションを削除（確認あり）
- TNT で全アクション削除（確認あり）

### 権限ピッカー

LuckPerms のロード済みグループを一覧表示する。 選択すると `lpgroup:<グループ名>` という値が保存される。

現時点の CsmMenu 実行側は `lpgroup:` を特別なグループ条件としては解釈せず、 `player.hasPermission()`
に渡して判定する。 そのため、確実に表示条件を動かすには「手入力」で通常の権限ノード （例: `citiesskymine.menu.shop`）を指定する。

### 効果音ピッカー

カテゴリ一覧 → サウンド一覧（ページ付き）の 2 段階選択。

| 操作 | 効果 | |------|------| | 左クリック | アクションに SOUND を追加 | | 右クリック |
視聴のみ（アクションは追加しない） | | 音量ボタン | 効果音カテゴリ画面・サウンド一覧画面の下段で ±0.25 調整 | | 手入力 |
`ui.button.click` のように `minecraft:` を付けないサウンド名を入力 |

利用可能なカテゴリ: `ui`、`entity`、`block`、`item`、`music`、`ambient`、`weather`、`event`

### カラーピッカー

テキスト入力前にカラーを選ぶ画面（名前・ロア・タイトルで使用）。

| コード | 色 | |--------|----| | `&0` | 黒 | | `&1` | 濃紺 | | `&2` | 緑 | | `&3` | シアン
| | `&4` | 濃赤 | | `&5` | 紫 | | `&6` | 金色 | | `&7` | 灰色 | | `&8` | 暗灰 | | `&9` |
青 | | `&a` | 黄緑 | | `&b` | 水色 | | `&c` | 赤 | | `&d` | ピンク | | `&e` | 黄色 | | `&f`
| 白 |

「カラーなし / 手動入力」を選ぶと、`&` コードを自分で書いたテキストを直接入力できる。

### お気に入り

よく使うアクション設定を保存しておく機能。

- コンテキストメニュー左下「お気に入りを管理」から登録・削除
- お気に入りから追加する場合: コンテキストメニュー下段のアイコンをクリック
- 最大 8 件保存可能
- `favorites/<UUID>.yml` にプレイヤーごとに保存される

### UI スキン編集

`/.gm ui edit <screen>` で GuiMaker 自身の編集画面をカスタマイズできる。

| 操作 | 効果 | |------|------| | 上段の機能ブロックを左クリック移動 | ボタン位置を変更 | | 上段のスロットを右クリック |
手持ちアイテムでアイコン変更。空手ならデフォルトに戻す | | 削除モード | 機能ブロックを画面から非表示にする | | UIブロック |
その画面で使える機能ブロック一覧を開き、インベントリへ追加する | | 保存して閉じる | `ui-skin/<screen>.yml` に保存 |

UIブロックから取得した機能ブロックは、見た目の素材だけでなく PDC に機能ラベルを持つ。 削除してしまった `音量 -0.25` や `手入力`
なども、一覧から取り直して上段へ置けば再配置できる。

---

## 5. アクションタイプ一覧

アクションはクリック時に **上から順に** 実行される。

| タイプ | 必要パラメータ | 説明 | |--------|---------------|------| | `OPEN_MENU` |
`target=<menu-id>` | 指定した CsmMenu メニューを開く | | `OPEN_POPUP` | `target=<popup-id>`
| OyasaiMenu のポップアップを開く（※統合後に有効） | | `PLAYER_CMD` | `command=<cmd>` |
プレイヤーとしてコマンドを実行 | | `CONSOLE_CMD` | `command=<cmd>` | コンソールとしてコマンドを実行 | |
`OP_PLAYER_CMD` | `command=<cmd>` | 一時的に OP 権限を付与してコマンドを実行 | | `MESSAGE` |
`text=<text>` | プレイヤーにメッセージを送る | | `BROADCAST` | `text=<text>` | サーバー全員にメッセージを送る
| | `SOUND` | `sound=<name>`、任意で `volume=<float>` `pitch=<float>` | 効果音を再生 | |
`URL` | `url=<url>` | チャットにクリック可能な URL を送る | | `CHAT_PASTE` | `text=<text>` |
クリップボードにコピーできるテキストを送る | | `SUGGEST_COMMAND` | `command=<cmd>` |
クリックするとチャット欄にコマンドを入力してくれる | | `CLOSE` | — | メニューを閉じる |

**プレースホルダー**

コマンド・テキスト内で以下が使用できる。PlaceholderAPI がインストールされていれば全 PAPI 変数も有効。

| 変数 | 展開後 | |------|--------| | `%player%` | クリックしたプレイヤー名 | | `%player_name%` |
同上 | | PlaceholderAPI 変数 | PlaceholderAPI が対応する全変数 |

---

## 6. カラーコード

名前・ロア・タイトルには Minecraft の `&` カラーコードが使用できる。

```
&0 黒  &1 濃紺  &2 緑   &3 シアン
&4 濃赤 &5 紫   &6 金色  &7 灰色
&8 暗灰 &9 青   &a 黄緑  &b 水色
&c 赤  &d ピンク &e 黄色  &f 白

&l 太字  &o 斜体  &n 下線  &m 取り消し線  &r リセット
```

---

## 7. YAML フォーマット仕様

GuiMaker がコミットしたファイルの形式（OyasaiMenu の YAML フォーマットと互換）。

```yaml
menu:
  title: "&8ショップ" # & カラーコード使用可
  size: 54 # 9 の倍数で 9〜54

items:
  item_0: # キー名は任意（item_<slot> が慣習）
    slot: 0 # 0 起点のスロット番号
    icon: CHEST # Material 名（大文字）
    name: "&eアイテムショップ"
    lore:
      - "&7クリックして開く"
      - "&7在庫: &f100"
    permission: "citiesskymine.menu.shop" # 省略可。指定した権限がないと非表示
    actions:
      - type: OPEN_MENU
        target: shop/items
      - type: SOUND
        sound: ui.button.click
        volume: "1.0"
        pitch: "1.0" # 省略時は 1.0
      - type: CLOSE
```

**permission の書き方**

| 値 | 意味 | |----|------| | 省略 | 全員に表示 | | 通常の権限ノード | `player.hasPermission()`
で判定 | | `lpgroup:<group>` | GuiMaker のグループ選択で保存される形式。ただし現時点の CsmMenu
実行側では通常の権限文字列として扱われる |

---

## 8. 技術仕様

### アーキテクチャ

```
GuiMaker (編集)                CsmMenu (実行)
─────────────                  ──────────────
GuiMakerCommand (.gm)         CsmMenuCommand (.csmenu)
  └─ GuiEditorEngine            └─ CsmMenuEngine
       ├─ GuiEditorSession            ├─ CsmMenuLoader
       ├─ GuiMakerExporter            └─ CsmActionEngine
       └─ GuiMakerUiSkin
```

### PDC（PersistentDataContainer）によるデータ追従

キャンバス上のアイテムには以下の PDC キーが埋め込まれている。 アイテムを移動してもデータが失われないのはこの仕組みによる。

| PDC キー | 型 | 内容 | |----------|----|------| | `citiesskymine:gm_name` | STRING
| 表示名（`&` コード付き） | | `citiesskymine:gm_lore` | STRING | ロア（改行区切り） | |
`citiesskymine:gm_perm` | STRING | 権限文字列 | | `citiesskymine:gm_actions` | STRING
| シリアライズされたアクション列 |

UIスキン編集用の機能ブロックには、追加で以下の PDC キーが使われる。

| PDC キー | 型 | 内容 | |----------|----|------| | `citiesskymine:gm_func` | STRING
| UI機能ブロックの機能ラベル | | `citiesskymine:gm_screen` | STRING | 対象UI画面名 | |
`citiesskymine:gm_skin_item` | STRING | UIスキン編集用アイテムであることを示す印 |

### InventoryHolder の分離

CsmMenu は `CsmMenuHolder` という専用 `InventoryHolder` を使用している。 OyasaiMenu
が開いたインベントリとイベント処理が干渉しない。

### ファイルの優先順

`/.gm edit <id>` で既存メニューを開く際の読み込み優先順:

```
1. guimaker/<id>.yml  (ドラフト)  ← 存在すれば優先
2. menus/<id>.yml     (ライブ)
3. どちらもなければエラー
```

### CsmMenu リロードのタイミング

- `/.gm edit <id> commit` 実行時に **自動リロード**
- `/.csmenu reload` で手動リロード（OP のみ）
- サーバー起動時（プラグイン `onEnable`）

### OyasaiMenu との関係・将来の統合計画

CsmMenu は OyasaiMenu のソースをフォークして実装された。 YAML フォーマットは OyasaiMenu と互換性を維持しており、将来的には
OyasaiMenu へ統合する設計になっている。

| CsmMenu クラス | 対応する OyasaiMenu クラス |
|----------------|---------------------------| | `CsmMenuDef` | `MenuDefinition`
| | `CsmMenuLoader` | `MenuLoader` | | `CsmMenuEngine` | `MenuEngine` | |
`CsmActionEngine` | `ActionEngine` + `PopupMenuEngine` | | `CsmActionType` |
`ActionType` + `PopupActionType` |

統合時の変更点:

1. `menus/` への書き出し先を OyasaiMenu の `menus/` フォルダへ変更
1. `CsmActionEngine` のアクション実装を OyasaiMenu の `ActionEngine` へ追加
1. `CsmMenuEngine` を廃止し OyasaiMenu の `MenuEngine` に委譲
