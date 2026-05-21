---
title: "プロジェクトコンテキスト — AI向け技術スタック・設計思想"
category: meta
status: active
owner: marzipan99
source_of_truth: "docs/00_Context/CONTEXT.md"
related_paths:
  - plugins/
  - dev-server/
last_validated: "2026-05-20"
agent_task: null
---

# Platform プロジェクトコンテキスト

AIエージェントが作業を開始する前に把握すべき技術スタック・設計思想・制約事項。
Antigravityワークスペースの `00_Context/context.md` に相当するplatform固有版。

---

## プロジェクト概要

Minecraftサーバー（Purpur 1.21.x）向けKotlinプラグインのモノレポ。
おやさいサーバーというMinecraft鯖で実際に稼働するプロダクションコード。

---

## 技術スタック

| 技術 | バージョン | 用途 |
|---|---|---|
| Kotlin | 1.9.x | プラグイン開発言語 |
| Purpur (Paper fork) | 1.21.10 | Minecraftサーバー |
| Gradle | 8.x | ビルドシステム |
| Nix | flake | 再現可能ビルド環境 |
| treefmt | — | CIフォーマット検証 |
| detekt | 1.23.6 | Kotlin静的解析（Java 25で既知問題あり） |

### ビルドの重要な注意点
- `nix` は `/nix/var/nix/profiles/default/bin/nix`（PATHに入っていない）
- フォーマットは `nix fmt`（treefmt経由）。**`gradle fmt` は使わない** — CI乖離の原因になる
- detekt 1.23.6 + Java 25 → `IllegalArgumentException: 25` は既知の非コード問題

---

## プラグイン設計の方針

### 依存注入の原則
コンストラクタインジェクションを優先。Bukkit APIのグローバルオブジェクトへの直接アクセスは最小限に。

### スレッドセーフ設計
- 複数プレイヤー操作を伴うMapは `ConcurrentHashMap`
- Scheduler経由のタスクはBukkitの非同期スレッドで動作する場合がある

### イベント駆動
Bukkit EventListenerパターン。重い処理は非同期Schedulerに分離する。

### ActivePetRegistry（OyasaiPets v2.5.0の教訓）
「全ワールドのエンティティをスキャンして探す」パターンは禁止。
専用レジストリ（インメモリ）を用意し、spawn/despawnタイミングで登録・解除する。

---

## 設計判断の履歴

### GuiMaker: ドラフト/ライブ方式
GUIをドラフト（編集中）とライブ（公開済み）の2フェーズに分けることで、
プレイヤーが使用中の画面に編集中の変更が反映されることを防ぐ。

### OyasaiPets v2.5.0: `onPetSpawned`呼び出し順序
**旧仕様（バグあり）**: `onPetSpawned` → `petId/ownerId設定`
**現在の正解**: `petId/ownerId設定` → `applyVariant` → `setupPetEntity` → `onPetSpawned`
この順序を守らないと `ActivePetRegistry` が空になり、全ペット関連機能が壊れる。

---

## AIエージェント向け編集規約

1. **コメントは書かない**: 関数名・変数名で自明なコメントは削除対象
2. **抽象化は最小限**: 3つ似たコードがあっても安易に共通化しない
3. **エラーハンドリング**: システム境界（プレイヤー入力・外部API）のみバリデーション
4. **ビルド確認**: 変更後は必ず `compileKotlin` を実行して確認
5. **フォーマット**: `nix fmt` を実行してからコミット

---

## 外部知識の扱い

- **Antigravityの理論文書** (`~/Desktop/Antigravity/02_Docs/`) はplatformへ複製しない
  → `docs/02_Docs/tools/` の各ファイルにリンクのみ掲載
- **Purpur/Paper API** はjavadocを参照。バージョンによってAPIが異なることに注意
- **Kotlin標準ライブラリ**: JVM 1.8以上対応の範囲で使用

---

## 禁止事項

- `gradle fmt` の使用（CI乖離）
- `build.gradle.kts` の設定をいじる前に確認なしで変更
- `detekt` エラーを `@Suppress` で黙らせることによる根本原因放置
- 本番プラグインJARを `dev-server/plugins/` 以外にデプロイ
