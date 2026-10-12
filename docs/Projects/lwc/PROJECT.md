---
title: "OyasaiLWC — ブロック保護"
status: active
source_of_truth: "plugins/OyasaiLWC/"
related_paths:
  - packages/oyasai-plugins.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-12"
---

# OyasaiLWC

外製 LWC の SQLite データ形式を引き継ぐ、自作のブロック保護プラグイン。

- 使い方: [プレイヤー向け](player.md) / [運営向け](operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiLWC/` |
| 主要コード | `LwcPlugin.kt`（コマンド・イベント）、`ProtectionStore.kt`（SQLite）、`Protection.kt`（判定・対象ブロック）、`LegacyDataMigration.kt`（旧フォルダのコピー） |
| 互換 API | `com/griefcraft/lwc/`（SignShop 向け） |
| テスト | `src/test/kotlin/icu/oyasai/lwc/`。`ProtectionTest` は共有・フラグの JSON 操作、対象判定、座標オフセット、残り秒数。`LegacyDataMigrationTest` は旧フォルダコピーの成功・スキップ・失敗時の後始末。コマンド・権限・イベント・SQLite 保存・ラージチェストの実動作にはテストがない |
| ビルド | `nix develop --command gradle :plugins:OyasaiLWC:build`（`OyasaiLWC.jar`） |
| Nix package | `packages/oyasai-plugins.nix` が検出し `oyasailwc` を公開する |

## 技術仕様

### 構成

- plugin.yml の名前は `OyasaiLWC`、`provides: [LWC]` で旧名への依存・検索を維持する。ビルド依存は Purpur API と Kotlin stdlib だけ。実行時に必要な SQLite JDBC（`org.sqlite.JDBC` を明示ロード）と Gson はサーバー側が提供する前提で、このプラグインは同梱しない。
- 廃止コマンドは送信者の種類・権限より先に判定し、廃止メッセージを返す。保護操作のコマンドはプレイヤー専用で、`lwc.protect` を受付時にだけ確認する（`lwc.admin` では代替しない。待機の実行時・自動保護の設置時には再確認しない）。コマンドはその場で実行せず、`Pending`（30 秒有効）として持ち、次の右クリック（`PlayerInteractEvent`、HIGHEST）で対象ブロックに適用する。
- `Pending` は次の右クリックで先に取り除く。対象外ブロックや権限のない保護をクリックしても消費される。別のコマンドで上書きされ、`/lock auto` で解除される。期限切れは毎秒のタイマーで通知して消す。
- 自動保護モード（`/lock auto`）はプレイヤーごとの期限（60 秒、容器を置いたときだけ延長）をメモリに持つ。設置した容器に関連ブロック経由で既存保護があれば新規作成せず、既存保護をそのまま使う。退出で `Pending` と自動保護の両方、ワールド移動で自動保護だけを消す。
- 全イベントハンドラは `ignoreCancelled = true`。先に他プラグインがキャンセルした操作は処理しない。

### 保護の種類

| type | 名前 | 挙動 |
|---|---|---|
| 2 | private | 持ち主・共有相手・管理者以外は右クリック不可 |
| 6 | display | 持ち主・管理者も含めて全員に適用。インベントリは開けるが、開いている間のクリックは下側（自分の持ち物）も含めてすべてキャンセル、ドラッグは上側スロットに触れるときだけキャンセル。コンポスター・飾り壺・シェルフ・クラフターと `isManual` の全対象（ドア・トラップドア・フェンスゲート・看板・旗）は右クリック自体をキャンセル。書見台の本は取れない |

上記以外の type は読み込み時に読み飛ばす（件数を `ignoredTypes` に数える）。DB の行は消さない。既存保護の type 変更はできず、`/lock`・`/cdisplay` は「すでに保護されています」で拒否する。

### 対象ブロックと関連ブロック

- 対象は `Protection.kt` の `isContainer`（容器）と `isManual`（ドア・トラップドア・フェンスゲート・看板・旗）。
- 保護キーはワールド名と座標（`BlockKey`）。DB の `blockId` は照合に使わず、現在のブロックが保護対象の種類かだけを見る。
- `relatedKeys` でドアの上下・ラージチェストの左右を同じ保護として引く（クリックした側を先に見る）。新規登録は1座標（登録時にクリックした側）だけに持つ。重複検査は同一座標だけなので、外製 LWC 由来で両側にレコードがあればそのまま読み込み、統合しない。インベントリ判定は左側を先に見るため、両側の設定が違うと操作ごとに参照する保護が変わる。
- チェスト設置時、水平4方向に「同種・同じ向き・管理権限のない保護」があり、かつ（設置したチェストが連結状態になった、または隣が単体でしゃがんでいない）なら設置をキャンセルする。連結方向かどうかは見ないため、前後など連結しない位置でも拒否することがある。

### 権限判定

- 使用: `lwc.admin`（または OP）・持ち主・共有相手
- 変更・撤去・破壊: `lwc.admin`（または OP）・持ち主
- 共有相手は data JSON の `rights` 配列の `{type:1, rights:1, name:<UUID>}` だけを有効とする（グループ共有や他の rights 値は無視し、読み込みでは JSON から消さない。`setShared` は対象 UUID の `type:1` エントリを rights 値に関係なく除去してから追加する）。HOPPER は `flags` 配列の `{id:5}`。どちらも外製 LWC の形式に合わせている。
- `/cmodify` の名前解決は `getPlayerExact` → `getOfflinePlayerIfCached`。見つからない名前は通知して飛ばし、最後に必ず「共有相手を更新しました」を出す。

### 保護するイベント

ブロック破壊、ブロック・エンティティの爆発（爆発リストから除外）、ピストンの押し・引き、延焼、ホッパー移動（移動元・移動先のどちらかに HOPPER off の保護があればキャンセル。display にも適用）。レッドストーンでの開閉やディスペンサー発射、支えのブロック経由の破壊・物理更新を止める処理はない（爆発リストから除外するのは保護ブロック自体だけ）。

保護ブロックを持ち主・管理者が壊したとき（`MONITOR`）、壊した座標が保護レコードの座標と一致するか、ドアの場合だけ保護レコードを消す。ラージチェストで記録側でない方を壊しても保護は残り、記録側を壊すと残った側も無保護になる。設置時、同じ座標に古い保護が残っていれば消す。

### データ

- `plugins/OyasaiLWC/lwc.db`。テーブルは外製 LWC 互換の `lwc_protections`・`lwc_blocks`・`lwc_internal`。新規作成時は `version=6` を入れる。
- 既存 DB の `version` が 6 以外なら例外を出して無効化する（書き込まない）。
- 起動時に全件をメモリのキャッシュへ読み込む。同じ座標の重複、壊れた UUID・JSON、`lwc_internal`・`lwc_protections` の欠落では例外で起動を止める。`lwc_blocks` は起動時に参照しないため、欠落は保護追加時の保存失敗で初めて分かる。新規 DB の初期化は途中失敗を巻き戻さない。
- 書き込みは単一スレッドの `LWC-SQLite` executor で行う。`add`・`remove` は `Future.get()` で完了を待ち（呼び出し元のメインスレッドを止める）、`update`（共有・HOPPER）は待たない。`update` が失敗するとログに出すだけで、メモリ上の変更は戻さずプレイヤーにも通知しない。停止時は executor の終了を待ってから接続を閉じる。
- `onLoad` で、新フォルダ（`plugins/OyasaiLWC/`）が**存在せず** `plugins/LWC/` がある場合だけ、一時フォルダへ全内容をコピーしてから移動する（SQLite 補助ファイル・設定・サブフォルダも対象）。空でも新フォルダが存在すればコピーしない。失敗時は新フォルダを作らず DB も開かずに無効化する。

### 互換 API（SignShop 向け）

`com.griefcraft.lwc.LWCPlugin`、`LWC.findProtection`、`LWC.canAccessProtection` の最小限を実装する。`findProtection` は保護があれば中身のない互換 `com.griefcraft.model.Protection` を返す（SignShop の null 判定用）。`canAccessProtection` は無保護なら true、保護があれば持ち主・共有相手・管理者で true（display でも同じ判定）。自動ロック用の `protectBlock` は非対応。

### 外製版から削った機能

public、パスワード、寄付、補給、HOPPER 以外のフラグ、履歴、WorldGuard・経済連携、MySQL、多言語。廃止コマンド（`lwc`, `cadmin`, `cpublic`, `cpassword`, `cdonation`, `csupply`, `cunlock`, `cremoveall`, `climits`, `credstone`, `cmagnet`, `cdroptransfer`, `cpersist`, `cnolock`, `cnospam`, `cexempt`, `cautoclose`, `callowexplosions`, `ctnt`, `cdefault`）は登録だけ残し「このコマンドは廃止しました」を返す。
