# ハッシュタグ監視ボット 仕様書

## 1. 概要

特定のハッシュタグ付きツイートを twitterapi.io 経由で定期的に監視し、マッチしたツイートを処理するボット。

現在は開発の第一段階として「マッチしたツイートを Discord webhook に流して表示する」ところまでを実装している。最終的には Minecraft
サーバーへ RCON でコマンドを実行し、ツイート投稿者に対してゲーム内報酬を付与する仕組みを目指す。

このドキュメントは、現在の実装仕様と、最終形に向けた設計方針の両方を記述する。

---

## 2. 目的とゴール

### 最終ゴール

登録ユーザーが指定ハッシュタグ + 画像付きでツイートすると、そのユーザーの Minecraft アカウントに対して 1 日 1 回まで RCON
経由で報酬コマンドが実行される。

### 現段階のゴール

プログラムがハッシュタグを正しく監視でき、マッチしたツイートに反応できていることを Discord
上で目視確認する。RCON・ユーザー紐付け・報酬ロジックはまだ組み込まない。

---

## 3. 開発フェーズ

| フェーズ | 内容 | 状態 | |---|---|---| | **Phase 1** | ハッシュタグ監視 → マッチしたツイートを Discord
webhook に表示 | ✅ 実装済み（現在地） | | **Phase 2** | Twitter アカウント ⇔ Minecraft
アカウントの事前リンク機構 | ⬜ 未着手（後日） | | **Phase 3** | RCON 接続、ツイート投稿者への報酬コマンド実行、1 日 1 回制限
| ⬜ 未着手（後日） |

現在のコードは Phase 1 の状態。Phase 2・3 で必要になる要素（画像付き条件、1 日 1 回制限、JST
日付管理）は過去バージョンで実装・検証済みのため、再導入は容易。

---

## 4. Phase 1（現在の実装）仕様

### 4.1 動作フロー

1. 常駐プロセスとして起動する。
1. 起動直後に 1 回スキャンし、以降は `INTERVAL_MS`（既定 10 分）ごとに
   `for await (const _ of setInterval(...))` でスキャンを繰り返す。
1. 各スキャンで twitterapi.io の `advanced_search` エンドポイントを叩き、対象ハッシュタグにマッチするツイートを取得する。
1. まだ通知していないツイートを、**古い順に** Discord webhook へ投稿する。
1. 通知済みツイート ID は SQLite に記録し、次回以降の重複通知を防ぐ。

### 4.2 使用技術

- **ランタイム**: Node.js（型は実行時ストリップ or tsc）
- **言語**: TypeScript
- **DB**: `node:sqlite`（Node 組み込み。Node 22.x では `--experimental-sqlite` フラグ必要、24+
  で安定）
- **ポーリングループ**: `node:timers/promises` の `setInterval`（async イテレータ）
- **HTTP**: 組み込み `fetch`
- **通知先**: Discord Incoming Webhook

### 4.3 環境変数

| 変数 | 必須 | 既定値 | 説明 | |---|---|---|---| | `TWITTERAPI_IO_KEY` | ✅ | — |
twitterapi.io の API キー | | `DISCORD_WEBHOOK_URL` | ✅ | — | 通知先の Discord webhook
URL | | `HASHTAG` | | `#example` | 監視するハッシュタグ | | `INTERVAL_MS` | | `600000`（10
分） | ポーリング間隔（ミリ秒） | | `IMAGES_ONLY` | | なし（全件） | `"1"` のとき画像付きツイートのみに絞る | |
`DB_FILE` | | `./seen.db` | SQLite ファイルのパス |

> **注**: Phase 3 に向けて `IMAGES_ONLY=1`
> が最終的な標準運用になる（画像付きのみが報酬対象のため）。現在は動作確認しやすいよう既定は全件。

### 4.4 API 仕様（twitterapi.io）

- エンドポイント：`GET https://api.twitterapi.io/twitter/tweet/advanced_search`
- 認証：`X-API-Key` ヘッダ
- パラメータ：
  - `query`: `#hashtag`（`IMAGES_ONLY` のとき `#hashtag filter:images`）
  - `queryType`: `Latest`（新着順）
  - `cursor`: ページング用（2 ページ目以降）
- 1 スキャンあたり最大 `MAX_PAGES`（= 20）ページまで辿る（クレジット浪費・暴走防止）。
- リトライ：HTTP 429 / 5xx は指数バックオフで最大 4 回。

### 4.5 データベーススキーマ

```sql
CREATE TABLE seen_tweets (
  tweet_id TEXT PRIMARY KEY,
  seen_at  TEXT NOT NULL      -- 通知した時刻（UTC ISO8601）
);
```

Phase 1 では重複通知防止のためだけに使用する。`INSERT OR IGNORE` の結果
`changes === 1`（新規挿入成功）だったツイートのみ Discord に投稿するため、多重起動やプロセス再起動があっても同一ツイートは 1
回しか通知されない。

### 4.6 Discord 投稿フォーマット

```
**表示名** (@username)
（ツイート本文）
https://x.com/username/status/xxxxx
```

- URL 単体を含めることで Discord のリンクカード展開に任せ、画像もプレビューされる。
- `allowed_mentions.parse: []` を指定し、ツイート本文中の `@` が誤ってメンションを発火させないようにしている。
- Discord から 429 が返った場合は `retry_after` に従って 1 回だけ再送する。

### 4.7 投稿順序

`advanced_search` は新着順で返るため、未通知ツイートを一旦配列に溜めて `reverse()` し、**古い順**に Discord
へ投稿する。これによりチャンネル上の時系列が自然になる。

### 4.8 エラー処理・運用

- スキャン中の例外はプロセスを落とさず握りつぶし、`⚠️` プレフィックス付きで Discord に通知したうえで次回スキャンを継続する。
- `SIGINT` / `SIGTERM` 受信時に SQLite をクローズして正常終了する。
- 常駐プロセスのため、本番では `systemd` や `pm2` 等での自動再起動を推奨。

### 4.9 コスト概算

twitterapi.io の課金は「API コール 1 回あたり最低 15 クレジット（$0.00015）」＋「取得ツイート 1 件あたり 1
クレジット」。$1 = 100,000 クレジット。

- 10 分間隔（1 日 144 回、月 4,320 コール）の最低課金分 ≒ **月 $0.65** + 取得ツイート分。
- 5 分間隔 ≒ 月 $1.30、15 分間隔 ≒ 月 $0.43。
- 全件取得のためヒット数が多いハッシュタグでは取得ツイート分が上乗せされるが、最低課金分が支配的で **月 $1 前後** の見込み。

---

## 5. Phase 2 設計方針（アカウント紐付け）

Twitter アカウントと Minecraft アカウントを事前にリンクさせる。実装方式は未確定（TBD）だが、想定される候補：

- リンクテーブルを SQLite に持つ（`twitter_username` ⇔ `minecraft_uuid` / `minecraft_name`）。
- 紐付けの登録手段（Web フォーム、Discord ボットのコマンド、手動投入など）は後日決定。

報酬対象を「リンク済みユーザーのツイートのみ」に絞る形になるため、過去バージョンにあった「登録アカウント照合」ロジックがこの層で復活する。

### 想定スキーマ（ドラフト）

```sql
CREATE TABLE account_links (
  twitter_username TEXT PRIMARY KEY,   -- 小文字正規化して保存
  minecraft_name   TEXT,
  minecraft_uuid   TEXT,
  linked_at        TEXT NOT NULL
);
```

---

## 6. Phase 3 設計方針（RCON 報酬）

### 6.1 RCON 接続

対象は **Minecraft サーバー**（標準 RCON プロトコル）。以下の環境変数を後日追加する：

| 変数 | 説明 | |---|---| | `RCON_HOST` | RCON 接続先ホスト | | `RCON_PORT` | RCON
ポート（Minecraft 既定 25575） | | `RCON_PASSWORD` | RCON パスワード |

### 6.2 報酬付与フロー（想定）

1. ツイートがハッシュタグ + **画像付き** の条件を満たす。
1. 投稿者の Twitter アカウントが Phase 2 のリンクテーブルに存在する。
1. その投稿者に対して **当日（JST 基準）まだ報酬を付与していない**。
1. リンク先の Minecraft アカウントに対し RCON でコマンドを実行する。
1. 付与を記録する（同日重複を防ぐ）。

### 6.3 1 日 1 回制限（JST 基準）

- リセット境界は **日本時間（Asia/Tokyo）00:00**。
- 「同一アカウントは JST の 1 日につき 1 回まで」。
- 実装は `(account_id, jst_date)` を主キーにした `rewards` テーブル + `INSERT OR IGNORE`
  により、挿入成功時（`changes === 1`）のみコマンド実行する方式。過去バージョンで実装・検証済み。
- JST 日付はツイートの投稿時刻を `Asia/Tokyo` タイムゾーンに変換して算出するため、サーバーの TZ が UTC でも正しく JST
  00:00 で切り替わる。

### 6.4 画像付き条件

Phase 3 では画像付きツイートのみを報酬対象とする（`IMAGES_ONLY=1` 相当を常時有効化）。クエリ側の `filter:images`
に加え、レスポンス側でもメディアの有無を二重チェックする実装が過去バージョンにあり、再利用可能。

### 6.5 想定スキーマ（ドラフト）

```sql
CREATE TABLE rewards (
  account_id TEXT NOT NULL,     -- Twitter アカウント ID
  username   TEXT NOT NULL,
  jst_date   TEXT NOT NULL,     -- 'YYYY-MM-DD'（JST 基準）
  tweet_id   TEXT NOT NULL,
  granted_at TEXT NOT NULL,
  PRIMARY KEY (account_id, jst_date)
);
```

---

## 7. 未確定事項（TBD）

| 項目 | 状態 | |---|---| | Twitter ⇔ Minecraft の紐付け登録手段 | 未定（Phase 2 で決定） | |
リンクテーブルにゲーム内 ID として `name` / `uuid` どちらを主に使うか | 未定 | | RCON で実行する具体的なコマンド内容 |
未定（Phase 3 で決定） | | RCON 接続失敗時のリトライ / フォールバック方針 | 未定 | | 報酬付与時に Discord へも通知を残すか
| 未定 | | Phase 3 移行後、Discord 表示を残すか報酬ログに置き換えるか | 未定 |

---

## 8. 既知の注意点

- **メディア判定のフィールド名**:
  画像付き条件で使うツイートオブジェクトのメディアフィールド名（`extendedEntities.media[].type` 等）は
  twitterapi.io の実レスポンス形状を 1 件確認して確定させる必要がある。`filter:images`
  でクエリ側は絞れるが、二重チェックのフィールド名がずれると素通りになる。
- **常駐プロセスの永続性**: プロセスが落ちると監視も停止する。プロセス監視・自動再起動の仕組みが本番運用では必須。
- **node:sqlite のバージョン依存**: Node 22.x ではフラグが必要。運用環境の Node バージョンを固定しておくのが望ましい。
