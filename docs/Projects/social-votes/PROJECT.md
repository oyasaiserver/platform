---
title: "SocialVotes — 看板投票システム"
status: active
source: "plugins/SocialVotes/（コードから作成。ゲーム内での確認は未実施）"
source_of_truth: "plugins/SocialVotes/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-plugin-registry/package.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# SocialVotes

看板への投票と、投票グループ・結果GUIを提供する Paper プラグイン。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/social-votes/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/SocialVotes/` |
| 主要コード | `src/main/kotlin/com/github/sahyuya/socialvotes/SocialVotes.kt`（初期化・登録）、`data/DataManager.kt`・`data/Models.kt`（データと保存）、`listeners/SignCreateListener.kt`・`SignClickListener.kt`・`ProtectListener.kt`（看板イベント・投票）、`gui/`・`ChatInput.kt`（GUI・入力）、`commands/`（コマンド） |
| テスト | `src/test/` はなく、今回確認した SocialVotes ツリーに自動テストはありません。 |
| ビルド | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:SocialVotes:build`。ルート Gradle は `build` に `shadowJar` を含めます。 |
| Nix package | `packages/oyasai-plugins.nix` が `SocialVotes.jar` を生成して小文字の `socialvotes` 属性を公開し、`packages/oyasai-plugin-registry/package.nix` がレジストリへ統合します。`packages/oyasai-minecraft-main.nix` の Paper プラグイン一覧が `socialvotes` を選択します。 |

## 技術仕様

### 構成

- `paper-plugin.yml` の名前は `SocialVotes`、メインクラスは `com.github.sahyuya.socialvotes.SocialVotes`、API バージョンは `1.21.5`。コマンドは `socialvotes`（別名 `sv`）、`svupdate`、`svtp` として記載されています。
- プラグイン固有の Gradle 依存は Purpur API の `compileOnly` のみです。ルート Gradle が Kotlin JVM、Shadow、Java Library を適用し、プラグインの build に Shadow JAR を加えます。
- `onEnable` は NamespacedKey `socialvotes:sv_sign_id` を用意し、`DataManager.load()` の後にコマンドとイベントを登録します。コマンド登録ではサーバー実装の `commandMap` フィールドをリフレクションで取得します。
- `paper-plugin.yml` に他プラグインの依存指定はなく、プラグイン間の公開 API もありません。詳細な権限・操作範囲は [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/social-votes/operator.md) を参照してください。

### 主要な処理の流れ

1. 看板の1行目が大文字小文字を問わず `vote` なら登録します。2行目を名前として `SVSign` を作り、最小の未使用正整数IDを割り当てます。看板の PDC にIDを書き、`data.yml` に保存した後、次の tick で表示を更新します。
2. 登録看板のメインハンド右クリックを受けると、看板PDCのIDから `SVSign` を探します。しゃがみ中は簡易GUIを開き、それ以外は制作者・グループ期間・看板上限・グループ上限を確認して票を加算し、同期保存と看板表示更新を行います。
3. グループの追加・除外・移設は UUID ごとの一時状態を保持し、後続の看板右クリックで処理します。SV看板以外のブロックをメインハンドで右クリックすると各モードを解除します。状態に期限はありません。
4. 簡易GUIから制作者編集、自分の票のリセット、グループ詳細画面へ進めます。詳細GUIは上限・表示・期間の変更、全体票のリセット、看板またはグループの削除を行います。結果GUIと投票者一覧はグループ看板と票数を表示します。
5. `/svtp <id>` は記録されたワールド名を Bukkit から解決し、座標中央へテレポートします。ワールドが見つからない場合は `ワールド <ワールド名> が読み込まれていません。` を返します。

### データ形式と永続化

- `plugins/SocialVotes/data.yml` を `YamlConfiguration` で読み書きします。ファイルがない場合は空データを保存します。移行処理、スキーマバージョン、バックアップ処理はありません。
- `signs.<id>` は `world`、`x/y/z`、`name`、`creators`（UUID文字列）、`creatorDisplayName`、`votes`、`showVotes`、`group`、`maxVotesPerSign`、`createdAt` を保存します。
- `groups.<name>` は `signIds`、`owner`（UUID文字列）、`maxVotesPerPlayer`、`showVotesGroup`、`sortMode`、`startTime`、`endTime` を保存します。未設定時刻は `-1` として保存し、読み込み時に `null` に戻します。
- `playerVotes.<group>.<UUID>` はグループ票数、`playerVotesPerSign.<id>.<UUID>` は看板ごとの票数を保存します。0票も保存されます。
- 看板の PDC に登録IDを保持します。起動時の位置索引 `locationToId` は、データ読み込み時点で Bukkit から取得できるワールドについてだけ再構築されます。PDCとYAMLの整合性を検査・修復する処理はありません。
- 新規看板の初期値は `votes=0`、`showVotes=true`、`group=null`、`maxVotesPerSign=1`、制作者1人です。新規グループは `signIds=[]`、`maxVotesPerPlayer=1`、`showVotesGroup=true`、`sortMode="id"`、開始・終了時刻未設定です。
- 保存は直接 `yaml.save(dataFile)` し、呼び出し元で例外を捕捉したりメモリ状態を戻したりしません。投票・設定変更の多くはメインスレッド上で保存します。停止時にも保存します。

### 同期・非同期

- Bukkit の看板、ブロック、GUI、コマンド処理は通常イベントスレッドで実行され、`DataManager.save()` もその場でファイルへ書き込みます。非同期 executor や書き込みキューはありません。
- `ChatInput` は `AsyncPlayerChatEvent` で入力状態を取り出し、チャットをキャンセルしてから `BukkitScheduler.runTask` で変更処理をメインスレッドへ戻します。チャット入力状態マップだけは `ConcurrentHashMap` です。
- `onDisable` は `DataManager.save()` を同期で呼びます。保存失敗の例外処理・停止順序の調整はありません。

### イベント

| イベント | 実装 |
|---|---|
| `SignChangeEvent` | 1行目が `vote` の看板を登録し、PDCへIDを付けます。 |
| `PlayerInteractEvent` | メインハンドのブロック右クリックを受け、操作モード、GUI表示、投票を処理します。 |
| `InventoryClickEvent` | GUIタイトルに応じて簡易・詳細・結果・投票者一覧GUIへ振り分けます。 |
| `PlayerSignOpenEvent` | 登録座標に対する看板編集画面をキャンセルします。 |
| `BlockBreakEvent` | 登録看板と一部の支持ブロックの破壊をキャンセルします。 |
| `AsyncPlayerChatEvent` | GUIからの次のチャット入力を捕捉し、通常チャットとして流さず設定へ使います。 |

`QuitListener` クラスは存在しますが、`onEnable` でイベント登録されていません。そのため切断時の操作モード・チャット入力・GUI閲覧状態の消去は実行されません。

### 外部 API・依存

- Bukkit/Paper 系 API を通じてイベント、プレイヤー、インベントリ、Persistent Data Container、スケジューラを利用します。ビルドでは Purpur API を `compileOnly` として参照します。
- Bukkit Services の登録や他プラグインへの依存指定はありません。`ChatInput.start/cancel` などの公開メソッドはありますが、リポジトリ内に外部利用箇所はなく、互換性保証は未確認です。コマンドマップへのリフレクションアクセスはサーバー実装の内部フィールドに依存します。
- 時刻入力は `Asia/Tokyo` の `Calendar` で変換します。日と時のトークンは必須ですが、範囲検証はなく、入力不正時は変更を通知せずに終了する経路があります。

### テストが保証する範囲

SocialVotes 配下にテストソースはありません。コマンド権限、投票上限、GUI操作、YAML読み書き、ロード失敗、看板保護、移設、他プラグインとの併用のいずれも自動テストで保証されていません。ゲーム内動作も未確認です。

### 既知の制限

- `socialvotes.use` は descriptor に定義されていますが、実装では参照されません。投票やGUIをこの権限で制限できません。
- 得票非公開は看板表示だけに適用されます。グループ詳細から開く結果・投票者一覧には得票数と名前が表示されます。
- 看板保護は看板編集と通常ブロック破壊イベント中心で、爆発・ピストン・ワールド編集・他プラグインによる直接変更を保護しません。壁吊り看板の支持ブロックは保護対象外です。
- 座標索引は起動時に読み込まれたワールドだけで構築され、後から読み込まれたワールド用の再索引処理がありません。
- 看板・グループ削除の一部経路で `playerVotes` のグループ票が残る場合があります。空き看板IDは再利用されるため、未読み込みワールドに残った古い看板PDCと衝突する可能性があります。
- 操作モード・チャット入力に期限がなく、切断時に解除されません。サーバープロセスの再起動でメモリ上の状態は失われます。
- 保存エラーを処理するコードがなく、失敗時のデータ状態・サーバー継続性は未確認です。
