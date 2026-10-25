---
title: "OyasaiTab — タブリスト・名前タグ"
status: active
source_of_truth: "plugins/OyasaiTab/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-velocity.nix
  - packages/oyasai-minecraft-main.nix
  - packages/oyasai-minecraft-lobby.nix
  - packages/oyasai-minecraft-axiom.nix
  - nix/oyasai-velocity.nix
project_kind: plugin
runtime_kind: paper-plugin / velocity-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiTab

TAB プラグインの本番で使っている部分（ヘッダー・フッター、タブ名、並び順、名前タグの接頭辞、ping の表示）を、Paper / Bukkit の API で置き換える自作プラグイン。Velocity 側では、別サーバーのプレイヤーをタブリストに出す。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-tab/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiTab/` |
| 主要コード | `OyasaiTabPlugin.kt`（Paper 側。起動の分岐・タブリスト・名前タグ・ping・送信、設定、整形 `TablistFormatter`、並び順 `TabOrder`）、`OyasaiTabProtocol.kt`（送受信データの形式、別サーバー向けの計算 `CrossServerTabLogic`）、`velocity/OyasaiVelocityPlugin.kt`（Velocity 側の受信と表示） |
| 設定の既定値 | `src/main/resources/config.yml`（Paper）、`src/main/resources/velocity-config.yml`（Velocity） |
| plugin 宣言 | `src/main/resources/plugin.yml`（Paper。`paper-plugin.yml` はない）、`src/main/resources/velocity-plugin.json`（Velocity） |
| テスト | `src/test/kotlin/io/oyasai/oyasaitab/TablistFormatterTest.kt`。整形・並び順・別サーバーの差分計算・データ形式の往復を確認する。Bukkit / Velocity の実動作、設定の読み込み、名前タグのチーム処理にはテストがない |
| ビルド | `nix develop --command gradle :plugins:OyasaiTab:build`（ShadowJar を含む） |
| Nix package | `packages/oyasai-plugins.nix` が `plugins/*` を検出して `oyasaitab` を公開する。`packages/oyasai-velocity.nix` と `packages/oyasai-minecraft-{main,lobby,axiom}.nix` がこの jar を使う |

## 技術仕様

### 構成

- **1 つの jar に 2 つのエントリポイント**を持つ。Paper 側は `io.oyasai.oyasaitab.OyasaiTabPlugin`（`plugin.yml`）、Velocity 側は `io.oyasai.oyasaitab.velocity.OyasaiVelocityPlugin`（`velocity-plugin.json` と `@Plugin` 注釈）。
- Paper 側の `plugin.yml` は `api-version: "26.2"`、`softdepend` に SocialLikes3・OyasaiEconomy・OyasaiEconomy・LuckPerms・OyasaiUtilities・DynamicProfile を宣言する。`depend` はないので、どれが欠けても読み込みは止まらない。
- ビルド依存は Purpur API、LuckPerms API、Velocity API（`net.kyori` を除外）、DynamicProfile・OyasaiEconomy・SocialLikes3 のプロジェクト依存（すべて compileOnly）、Kotlin stdlib（implementation）。ShadowJar をルートの Gradle 設定で使う。
- 別プラグインの API は**実行時にだけ**使う。サービスの取得（`ServicesManager`）が失敗すると、表示を止めて送信だけ続ける（後述の起動の分岐）。

### 起動の分岐（`OyasaiTabRuntime.create`）

1. 設定を読む（`OyasaiTabConfig.load`）。
2. 4 つのプラグイン名（SocialLikes3、DynamicProfile、LuckPerms、OyasaiEconomy）を `PluginManager.getPlugin` で確かめる。欠けていれば `SnapshotOnlyOyasaiTabRuntime`。
3. サービスを取る（OyasaiEconomy の `OyasaiEconomyApi` と LuckPerms の `LuckPerms`）。一つでも欠ければ `SnapshotOnlyOyasaiTabRuntime`。
4. 揃えば `FullOyasaiTabRuntime`。AFK の判定は `OyasaiUtilitiesAfkLookup.isAfk` を渡す。


- 判定は `onEnable` の1回だけ。`getPlugin` は無効化されたプラグインも返すので、依存プラグインが有効化に失敗していても `FullOyasaiTabRuntime` になり得る（そのときの静的参照の挙動は未確認）。
- nix 構成では `oyasai-minecraft-lobby`・`-axiom` に SocialLikes3・DynamicProfile・OyasaiEconomy が入っていないため、この2つは送信専用になる（コードの読み）。

### 主要な処理の流れ

**Paper 側（`FullOyasaiTabRuntime`）**

- 起動時に `network.start()`、ping の objective を用意、自分が作った空のチームを掃除、イベントを登録し、すぐ1回と、以後 20 tick ごとに `updateAll()` を動かす。
- `updateAll()`: 全オンラインプレイヤーの `PlayerProfile`（グループ、色、称号、Likes、所持金、トークン、AFK、レベル）を作る。並び順（`TabOrder.calculate`）を求め、各プレイヤーにヘッダー・フッター、タブ名（前回と違うときだけ設定）、並び順（`setPlayerListOrder`）、名前タグ、ping を設定する。最後に別サーバー向けの名前を `network.send` で送る。例外を捕まえていないので、1 人の取得（OyasaiEconomy・DynamicProfile など）で例外が出るとその回は全員分の更新と送信が止まる。
- グループは LuckPerms の `primaryGroup` を小文字にしたもの。ユーザーが読み込まれていなければ空文字（色なし・順位最後・`default` の名前タグ・称号なし）。
- 名前タグ（`updateNameTag`）: 接頭辞と後置きの組から、チーム名を `nametag.team-prefix` ＋ CRC32（`group|prefix|suffix`）の base36 6 文字で作る。既存のチームに別のプラグインが入っているプレイヤーは触らない（`currentTeam != null && !ownsTeam`）。値が変わったときだけチームを更新する。
- ping（`updatePing`）: `oyasaitab_ping` の objective（表示名 `TAB`、`PLAYER_LIST` スロット）のスコアを ping に合わせる。退出時にスコアを消す（`onQuit`）。
- 停止（`stop`）: タイマーを止め、送信の登録を外し、objective と自分のチームだけを外す。

**Paper 側（`SnapshotOnlyOyasaiTabRuntime`）**

- すぐ1回と、以後 1 秒ごとに `playerListName()` を送る（他プラグインが書き換えていなければ素の名前）。表示の設定（並び順を含む）はせず、イベントも登録しない。並び順が未設定（0）なので、Velocity が足す別サーバーの entry（1〜999）が自サーバーの人より上に並ぶはず（未確認）。

**送信（`PaperTabSnapshotBridge.send`）**

- 先頭のオンラインプレイヤーを「運び手」にして、`carrier.sendPluginMessage` で `oyasaitab:main` へ送る。オンラインプレイヤーがいないときは送らない。
- 名前は `<1234>` の Likes バッジを含まない形（`playerNameNoBadgeLegacy`）。Velocity が所属サーバー名を前に付ける。

**Velocity 側（`OyasaiVelocityPlugin`）**

- `ProxyInitializeEvent`: `plugins/oyasaitab/config.yml` が無ければ `velocity-config.yml` からコピーし、`delayed-reapply-ms` を読み、チャンネル `oyasaitab:main` を登録する。
- `PluginMessageEvent`（受信）: 送信元が `ServerConnection` でなければ捨てる。データを復号し、送信元のバックエンド名で records を置き換える（そのバックエンドから消えた人の記録は、他のバックエンドの記録で上書きされていなければ消す）。その後 `applyAll()`。メッセージは常に handled（転送しない）。
- `ServerPostConnectEvent`（最初の接続とサーバー移動）: 移動したプレイヤーの「管理中の entry」を忘れ、`delayed-reapply-ms` の遅延のあと、全員の表示で移動したプレイヤーの entry を強制的に追加し直す。さらに、移動したプレイヤー自身の表示は全員分を追加し直す。
- `DisconnectEvent`（切断）: 遅延のあと、まだ接続されていなければ、records と全員のタブリストから消す。
- `applyTo(viewer)`: 別サーバーの人（`serverName != viewerServer` かつ、接続中で、viewer 自身でも viewer と同じサーバーの人でもない）だけを対象にする。viewer のタブリストに entry を追加・更新し、管理外になった entry は消す。並び順は `remoteOrders`（999 から下へ）。追加する entry は対象プレイヤーの `gameProfile`、`latency` は送られた ping（負は 0 に丸める）、`gameMode(0)`（実際のモードに関係なくサバイバル扱い）、`listed`・`showHat` は true。viewer が所属サーバー未確定なら何もしない。
- 送信データのサーバー名（`backend-id`）は使わず、records の `serverName` には接続元の `serverInfo.name` を入れる。

### 表示の計算ルール

- **タブ名（`TablistFormatter.playerNameLegacy`）:** `&r` ＋（グループ色があれば `色*`）＋ 称号 ＋ `&7<&6Likes&7>&f ` ＋ 名前。名前は AFK なら `&7名前 &o[AFK]`。
- **別サーバー向けの名前（`playerNameNoBadgeLegacy`、Velocity の `remoteDisplayNameLegacy`）:** Likes のバッジを外し、Velocity 側で `§7<§6サーバー名§7>§f ` を付ける。サーバー名は `serverName.replaceFirstChar { uppercase }`（`main` → `Main`）。
- **並び（`TabOrder.calculate`）:** AFK（0/1）→ `sort-groups` の順位（無ければ `Int.MAX_VALUE`）→ 名前の大文字小文字を無視した比較 → 名前の完全一致。`baseOrder`（1000）＋ 人数 − 順位 − 1 を listOrder にする。ローカルは 1000 以上、別サーバーは 1 から 999 の帯。
- **別サーバーの並び（`remoteOrders`）:** サーバー名 → 名前 → UUID の順。最大 999 件まで（超えた分は表示されない）。
- **フッター:** 所持金は `#,##0.##`、トークンは `#,##0`、TPS は `Bukkit.getTPS()` の先頭（1 分平均）を `#.##` で上限 20。人数は自サーバーのオンライン数。Likes 合計は `Data.userLikesInt` の全員分の合計（オンラインに限らない）。ヘッダーの `Likes：` は閲覧者本人の Likes、バージョンは `Bukkit.getMinecraftVersion()`。
- **名前タグ:** テンプレートは `group-prefixes[group]`、無ければ `group-prefixes.default`。後置きは `group-suffixes[group]` で、`default` には戻らない。ping は自サーバーのスコアボードにだけ出すので、Velocity が足した別サーバーの entry には付かない（コードの読み）。
- **称号（`normalizeSuffix`）:** MiniMessage のタグを含むときは legacy 形式に変換して保存する（hex の形式を崩さないため）。

### データ形式と永続化

- 送信データ（`OyasaiTabSnapshotCodec`）: 先頭 1 byte がバージョン（現在 2）、サーバー名（UTF）、人数（unsigned short）、人ごとに UUID（long 2 つ）・名前（UTF）・サーバー名（UTF）・ping（int）。人数は 1000 以下（`MAX_PLAYERS`）。バージョンが違えば例外。
- Velocity は受けた値を `ConcurrentHashMap` に持つ（メモリのみ）。永続化はない。
- Paper の設定は `saveDefaultConfig()` で作る（既存のファイルは上書きしない）。Velocity の設定は、ファイルがないときだけ resource からコピーする。
- データベースやファイルの出力はない。

### 同期・非同期

- Paper 側はすべて Bukkit のメインスレッド（`runTaskTimer`、20 tick ごと）。送信も同じスレッドで行う。
- Velocity 側はイベントのスレッドで受信し、records は `ConcurrentHashMap`。移動・切断後の組み直しは `proxy.scheduler` の遅延タスク（既定 200 ms）。
- Velocity の `ProxyShutdownEvent` でこのプラグインのタスクを止める。

### イベント

- Paper: `FullOyasaiTabRuntime` の `PlayerQuitEvent`（`onQuit`）のみ（送信専用ではイベントなし）。退出時に、名前の記録、自分のチームの entry、ping の score を消す。
- Velocity: `ProxyInitializeEvent`、`ProxyShutdownEvent`、`PluginMessageEvent`、`ServerPostConnectEvent`、`DisconnectEvent`。

### 外部 API・依存

| 相手 | 使う内容 | 取得の方法 |
|---|---|---|
| SocialLikes3 | `Data.userLikesInt`（個人の Likes）、`Data.userLikesInt.values.sum()`（合計）、`Data.getBuildingInt()`（SLIDs） | 静的参照 |
| DynamicProfile | `Calculator.getLevel(player)`（`Lv.` の値） | 静的参照 |
| LuckPerms | `userManager.getUser`、主グループ、`cachedData.metaData.suffix` | `ServicesManager` |
| OyasaiEconomy | `OyasaiEconomyApi.balance(currency, uuid)` で円とトークンを取得 | `ServicesManager` |
| OyasaiUtilities | メタデータ `oyasaiutilities-afk`（所有プラグインが有効なときだけ真を読む） | Bukkit メタデータ |
| Velocity | チャンネル `oyasaitab:main`（送信・受信） | Bukkit / Velocity の plugin messaging |
| Purpur API | Bukkit の各 API、Adventure、MiniMessage | 直接参照 |

### テストが保証する範囲

`TablistFormatterTest`（16 件）が確かめる範囲:

- タブ名・AFK 表示・ヘッダー・フッター・TPS・名前タグの書式の文字列。
- 称号の MiniMessage → legacy 変換と、hex の読み戻し。
- 並び順（AFK → グループ → 名前）と、別サーバーの帯（999 から下）。
- 別サーバーの差分（`diffForViewer`）: 除去・忘れる・移動中の二重表示の抑止。
- 切断時の除去（再接続していれば残す）。
- データ形式の往復（`roundTripsSnapshotCodec`）と、別サーバーの名前の表示。

テストで保証**しない**もの: Bukkit・Velocity の実動作、スコアボードのチーム・objective の挙動、送信と受信の結合、不正なデータの扱い（版違い・人数超過）、設定ファイルの読み込み、起動の分岐。

### 既知の制限

- **人数の上限:** 送信側は 1000 人を超えると書き出しで例外（`require`）。受信側は復号で拒否。`send` は `updateAll()` の最後なので、自サーバーの表示は更新されてから例外になる。
- **自分のチームの判定は接頭辞だけ:** `ownsTeam` は `team-prefix` で始まるかを見る。他のプラグインが同じ接頭辞のチームを作ると、停止時に外される。`team-prefix` を変えると古いチームは残る。
- **Velocity の設定読み込み:** YAML パーサーではなく、`delayed-reapply-ms:` で始まる行を探して `toLongOrNull` するだけ（引用符付きは読めず 200）。
- **別サーバーの表示は 999 件まで**。
- **`network.backend-id` は表示に効かない:** Velocity は接続元のサーバー名を使う。送信データにだけ入る。
- **別サーバーの名前タグは出ない**（Velocity はタブリストだけを操作する）。
- **サーバーの名前ラベル:** サーバー名の先頭だけを大文字にする（コードの注記。日本語名などは設定にしていない）。
- **名前の書き戻し:** 本プラグインの計算結果が変わるまで `playerListName` を書き直さない（キャッシュ比較）。他のプラグインが書き換えると、その状態が続くことがある。
- **設定の反映:** Paper・Velocity とも起動時に読むだけ。再読み込みの処理はない。
- **メインスコアボードを使う:** 名前タグのチームと ping の objective は `mainScoreboard` に作る。TAB の同じ機能を併用すると衝突するため、TAB 側の該当機能を止める必要がある（[運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-tab/operator.md)）。
- **処理の負荷:** 毎秒、全プレイヤーにヘッダー・フッターを送り、所持金・トークン・レベルの値を取り直す。人数が多いときの負荷は未計測。

### 判断の記録（コードのコメントより。日付はコードに書かれていない）

- チームと ping の objective は、値が変わったときだけ設定する。毎回設定すると UPDATE が全員に飛ぶため（`OyasaiTabPlugin.kt` の該当コメント）。
- Paper・Velocity とも、hex 色を `useUnusualXRepeatedCharacterHexFormat()` で書き出し、読み戻す。既定の legacy の変換は hex を近い既定色に丸めるため（`OyasaiTabPlugin.kt`、`OyasaiVelocityPlugin.kt`、`TablistFormatter`）。
- 送信名は Likes のバッジを含めず、プロキシが所属サーバー名を前に付ける（`OyasaiTabProtocol.kt`、`TablistFormatter.playerNameNoBadgeLegacy`）。
- 表示側が無効なときは、名前を素のまま送る（`SnapshotOnlyOyasaiTabRuntime`）。

## 2026-10-25 経済APIの統合

経済連携は `io.oyasai.economy.api.OyasaiEconomyApi` を ServicesManager から取得する。金額はLongで、通貨IDを引数に渡す。円とトークンに別のAPIサービスは使わない。参照は既存口座だけを扱い、APIによる口座の自動作成はない。詳細は [OyasaiEconomy](../oyasai-economy/PROJECT.md) を参照。
