# SocialLikes3 SQLite 移行 + OyasaiToken 内製化 — 設計書

- ターゲット: Minecraft 26.2
- ステータス: 設計完了・実装前
- 作成日: 2026-07-01

## 全体構成

```
[SocialLikes3]  ←──API呼出──→  [OyasaiToken]
  SocialLikes.db                  OyasaiToken.db
  (builds, build_likes,           (token_balances)
   publicity_history)

[DynamicProfile] ───API呼出──→  [OyasaiToken]
[OyasaiAdminTools] ─API呼出─→  [OyasaiToken]
[OyasaiMenu] ──────API呼出──→  [OyasaiToken]
[OyasaiPets] ──────API呼出──→  [OyasaiToken]
```

2つの独立した SQLite DB。OyasaiToken は独立プラグインとして Bukkit ServicesManager に API を公開し、5つのプラグインが利用する。

## 確定方針

| 項目 | 方針 |
|------|------|
| ORM | Exposed（型安全、`suspendedTransaction`） |
| Coroutines | 採用（`Dispatchers.IO` でDB操作、メインスレッド復帰は `BukkitScheduler`） |
| 依存管理 | shadow + relocate（JAR に閉じ込める） |
| 旧 API 互換 | なし。5プラグイン全て直接書き換え |
| API 引数 | UUID 統一 |
| DB 構成 | 2DB 分離 |
| 報酬付与 | fire-and-forget（現行踏襲） |
| PlaceholderAPI | 不要（`%tokenmanager%` の使用箇所ゼロを確認済み） |
| マイグレーション | 起動時に YAML 検出 → SQLite 変換 → backup 化 |

## 1. OyasaiToken — スキーマ & API

### テーブル定義

```sql
-- OyasaiToken.db
CREATE TABLE token_balances (
    uuid       TEXT PRIMARY KEY,  -- プレイヤーUUID
    balance    INTEGER NOT NULL DEFAULT 0,
    updated_at INTEGER NOT NULL   -- epoch millis
);
```

### API インターフェース

```kotlin
interface OyasaiTokenAPI {
    fun getBalance(uuid: UUID): Long
    fun addTokens(uuid: UUID, amount: Long)
    fun removeTokens(uuid: UUID, amount: Long): Boolean  // 残高不足時 false
}
```

最小限の3メソッド。`setTokens` や `hasEnough` は必要になった時点で追加する。

### 公開方法

```kotlin
// OyasaiToken プラグインの onEnable() 内
server.servicesManager.register(
    OyasaiTokenAPI::class.java,
    OyasaiTokenImpl(database),
    this,
    ServicePriority.Normal
)
```

### 利用側（例: SocialLikes3）

```kotlin
val tokenAPI = server.servicesManager.getRegistration(OyasaiTokenAPI::class.java)
    ?.provider
    ?: error("OyasaiToken not found")

tokenAPI.addTokens(player.uniqueId, 2)
```

### マイグレーション（TokenManager data.yml → SQLite）

TokenManager の `data.yml` は以下の形式:
```yaml
Players:
  f2ebf4ff-5691-41bf-b239-a78bcdbdfc3b: 958340
```

起動時に `plugins/TokenManager/data.yml` を検出したら全エントリを `token_balances` に INSERT し、ファイルを `data.yml.migrated` にリネーム。

## 2. SocialLikes3 — スキーマ

### テーブル定義

```sql
-- SocialLikes.db
CREATE TABLE builds (
    id              INTEGER PRIMARY KEY,
    world_name      TEXT    NOT NULL,
    loc_x           REAL    NOT NULL,
    loc_y           REAL    NOT NULL,
    loc_z           REAL    NOT NULL,
    created_at      TEXT    NOT NULL,  -- ISO 8601 (LocalDateTime.toString())
    owner_uuid      TEXT    NOT NULL,
    title           TEXT    NOT NULL,
    checked         INTEGER NOT NULL DEFAULT 0,  -- boolean
    comment         TEXT    NOT NULL DEFAULT 'No comment',
    discord_text_id INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_builds_owner ON builds(owner_uuid);
CREATE INDEX idx_builds_world_chunk ON builds(world_name, loc_x, loc_z);

CREATE TABLE build_likes (
    build_id    INTEGER NOT NULL REFERENCES builds(id) ON DELETE CASCADE,
    player_uuid TEXT    NOT NULL,
    liked_at    INTEGER,  -- epoch millis, nullable (旧データでは不明)
    PRIMARY KEY (build_id, player_uuid)
);

CREATE INDEX idx_build_likes_player ON build_likes(player_uuid);

CREATE TABLE publicity_history (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp  TEXT    NOT NULL,
    user_uuid  TEXT    NOT NULL,
    sl_id      INTEGER NOT NULL REFERENCES builds(id) ON DELETE CASCADE
);

-- メタデータ（最終ID管理等）
CREATE TABLE meta (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
);
```

### 現在の YAML 構造との対応

| YAML | SQLite |
|------|--------|
| `{id}.yml` 各ファイル | `builds` テーブルの1行 |
| `likes:` (UUID リスト) | `build_likes` テーブル（`liked_at = NULL`） |
| `likesWithTimestamp:` (UUID→epoch マップ) | `build_likes` テーブル（`liked_at` に値あり） |
| `PublicityHistory.yml` | `publicity_history` テーブル |
| `Data.lastID` / `emptyIDList` | `meta` テーブル or `SELECT MAX(id) FROM builds` |

### 現在のインメモリキャッシュとの対応

| 現在のキャッシュ | SQLite 後 |
|-----------------|-----------|
| `dataMap` (全SLDataのメモリ保持) | 必要時にクエリ。頻繁アクセスはアプリ層キャッシュ |
| `userLikesInt` (UUID→いいね総数) | `SELECT owner_uuid, COUNT(*) FROM build_likes GROUP BY ...` |
| `slNearData` (チャンク別の3重Map) | `WHERE world_name = ? AND loc_x/16 BETWEEN ? AND ?` |
| `emptyIDList` (空きID) | `SELECT MAX(id)+1 FROM builds` or 再利用が必要なら gaps クエリ |

## 3. 非同期設計

```
メインスレッド (Tick)          IO スレッド (Dispatchers.IO)
─────────────────────         ──────────────────────────
  プレイヤーがいいね
        │
        ▼
  suspend fun addLike()
        │ ── launch(Dispatchers.IO) ──→  DB INSERT (build_likes)
        │                                DB SELECT count → userLikesInt 更新
        │  ◄── withContext(Main) ──────  結果
        ▼
  プレイヤーにメッセージ送信
  tokenAPI.addTokens(uuid, 2)
```

- DB 操作は全て `Dispatchers.IO` 上の `suspendedTransaction {}` で実行
- Bukkit API（プレイヤーへの送信、ワールド操作）はメインスレッドに戻してから
- SQLite は WAL モード + `busy_timeout=5000` を起動時に設定

## 4. マイグレーション（SocialLikes YAML → SQLite）

```
起動時フロー:

1. plugins/SocialLikes3/SocialLikes.db が存在するか?
   ├── YES → 通常起動（SQLite モード）
   └── NO  → data/ ディレクトリが存在するか?
              ├── YES → マイグレーション実行
              │         a. SocialLikes.db 作成、テーブル初期化
              │         b. data/*/*.yml を全読み込み → builds + build_likes へバルク INSERT
              │         c. PublicityHistory.yml → publicity_history へ INSERT
              │         d. 検証: レコード数、MAX(id)、likes総数の一致確認
              │         e. 成功 → data/ を data_backup_{日付}/ にリネーム
              │         f. 失敗 → SocialLikes.db を削除、YAML モードで起動
              └── NO  → 新規（空DB作成）
```

## 5. 各プラグインの書き換え箇所

| プラグイン | ファイル | 現在 | 書き換え後 |
|-----------|---------|------|-----------|
| **SocialLikes3** | `Tools.kt:36` | `getTokenManager(): TokenManager?` | 削除。OyasaiTokenAPI を ServicesManager から取得 |
| **SocialLikes3** | `Events.kt:263` | `dispatchCommand("tokenmanager:tm add ... 2")` | `tokenAPI.addTokens(uuid, 2)` |
| **SocialLikes3** | `Events.kt:380` | `dispatchCommand("tokenmanager:tm add ... $pointInt")` | `tokenAPI.addTokens(uuid, pointInt)` |
| **DynamicProfile** | `Tools.kt:113-118` | `getTokenManager()` + `token` lazy | ServicesManager から取得 |
| **DynamicProfile** | `Stats.kt:97` | `Tools.token?.getTokens(player)?.asLong` | `tokenAPI.getBalance(player.uniqueId)` |
| **OyasaiAdminTools** | `KakutyoCommandExecutor.kt:51-57` | `getPlugin("TokenManager") as TokenManager` | ServicesManager から取得 |
| **OyasaiMenu** | `TokenCurrencyManager.kt` 全体 | リフレクション経由の120行 | OyasaiTokenAPI の薄いラッパーに置換（~20行） |
| **OyasaiPets** | `OyasaiPetsUnified.kt` | `TMAPI.getTokens/addTokens/removeTokens(UUID)` | `tokenAPI.getBalance/addTokens/removeTokens(uuid)` |

全10箇所。OyasaiMenu の `TokenCurrencyManager` はリフレクション地獄が消えて大幅に簡素化される。

## 6. 依存関係（build.gradle.kts）

### OyasaiToken（新規プラグイン）

```kotlin
dependencies {
    paperweightDevelopmentBundle(libs.paper.dev.bundle)
    implementation(libs.exposed.core)
    implementation(libs.exposed.dao)
    implementation(libs.exposed.jdbc)
    implementation(libs.sqlite.jdbc)
    implementation(libs.kotlinx.coroutines.core)
}

tasks.shadowJar {
    relocate("org.jetbrains.exposed", "io.oyasai.libs.exposed")
    relocate("org.sqlite", "io.oyasai.libs.sqlite")
}
```

### SocialLikes3（既存書き換え）

```kotlin
dependencies {
    // compileOnly(libs.tokenmanager) を削除
    compileOnly(project(":plugins:OyasaiToken"))  // API のみ参照
    implementation(libs.exposed.core)
    implementation(libs.exposed.jdbc)
    implementation(libs.sqlite.jdbc)
    implementation(libs.kotlinx.coroutines.core)
}
```

### 他4プラグイン

```kotlin
// compileOnly(libs.tokenmanager) を削除
compileOnly(project(":plugins:OyasaiToken"))  // API のみ参照
```

## 7. 実装順序

```
Phase 1: OyasaiToken プラグイン新規作成
  → API インターフェース定義
  → SQLite バックエンド実装
  → TokenManager data.yml マイグレーション
  → ローカルテスト

Phase 2: 5プラグインの TokenManager 依存を書き換え
  → OyasaiMenu（最大の書き換え、リフレクション全廃）
  → OyasaiPets（TMAPI → OyasaiTokenAPI）
  → SocialLikes3（dispatchCommand → API 呼び出し）
  → DynamicProfile（1箇所）
  → OyasaiAdminTools（1箇所）
  → libs.versions.toml から tokenmanager 行を削除

Phase 3: SocialLikes3 の SQLite 移行
  → Exposed スキーマ定義
  → Data.kt のリファクタ（YAML → SQLite）
  → PublicityHistory のリファクタ
  → マイグレーションツール
  → インメモリキャッシュの整理（全件キャッシュ → 必要時クエリ）

Phase 4: テスト & リリース
  → ローカルサーバーで YAML → SQLite 移行テスト
  → 本番データのコピーで検証
  → 段階的デプロイ（OyasaiToken 先行 → 5プラグイン同時切替 → SL3 SQLite化）
```

Phase 2 と Phase 3 は独立しているので並行作業可能。Phase 1 が前提条件。
