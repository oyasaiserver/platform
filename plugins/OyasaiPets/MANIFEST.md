# OyasaiPets MANIFEST

## AIエージェント向け作業規約

### バックアップ必須ルール

**コードを変更する前に必ず以下を実行すること:**

```bash
# バックアップ先: /Users/aa/platform/archive/
# ファイル名形式: OyasaiPetsUnified-YYYY-MM-DD-HHmm.kt.bak

cp plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/OyasaiPetsUnified.kt \
   archive/OyasaiPetsUnified-$(date +%Y-%m-%d-%H%M).kt.bak
```

バックアップなしでの変更は禁止。

---

## プロジェクト概要

- **プラグイン名**: OyasaiPets（旧称 BigWolf）
- **サーバー**: PaperMC 1.21 / Purpur 1.21.8
- **言語**: Kotlin
- **メインファイル**: `src/main/kotlin/me/marzipan/OyasaiPets/OyasaiPetsUnified.kt`（単一ファイル構成、~8400行）

---

## ビルド方法

```bash
# nix が PATH にない場合
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiPets:build

# コンパイルのみ確認
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiPets:compileKotlin
```

**既知の問題**:
- detekt 1.23.6 が Java 25 で失敗する（`IllegalArgumentException: 25`）— コードと無関係、無視してよい
- `:plugins:SocialLikes3:compileKotlin` がタイムアウトする — `build.gradle.kts` でコメントアウト済み（未使用）

---

## アーキテクチャ概要

### 主要クラス（ファイル内コメント `// ===== File: *.kt =====` で区切られている）

| クラス | 役割 |
|---|---|
| `BigWolfPlugin` | エントリーポイント、onEnable/onDisable、コマンドルーティング |
| `BigWolfConfig` | 設定値の読み書き（object） |
| `ActivePetRegistry` | 召喚中ペットのインメモリ管理（UUID→Entity） |
| `PetDataManager` | JSON永続化（players/{uuid}/xxx.json） |
| `PetRegistry` | 公式ペット一覧・PetSpec管理 |
| `PetControlSystem` | 騎乗中の移動・速度制御タスク |
| `PetStorageService` | ペット収納・復元・スポーンエッグ生成 |
| `PetSpawnSystem` | 新規スポーン・マウント |
| `PetReviveService` | 死亡ペット復活 |
| `BreedingSystem` | 交配・世代管理 |
| `FetchSystem` | おもちゃ・フェッチ処理 |
| `ChildAISystem` | 非定型ペットAI |
| `PetLifecycleListener` | 死亡・降車・ログアウトイベント |

### 重要な設計制約

1. **`onPetSpawned` 呼び出し順序**: `entity.petId` と `entity.ownerId` を PDC に設定してから呼ぶこと。`ActivePetRegistry.register` は `entity.petId ?: return` でガードされている。順序を逆にするとペットが未登録になりすべての機能が壊れる。
2. **`ActivePetRegistry` 登録を前提とするもの**: `storeAll`, `locate`, `countActivePets`（3体制限）, `getByOwner`。ペットが未登録だとすべて機能しない。
3. **FLYING ペットの速度管理**: マウント中は `setAI(false)` + 属性ゼロ。降車時は `onPetDismount` が AI 復元を担当（制御タスク内では AI を触らない）。

---

## 設定ファイル

- `src/main/resources/config.yml` — デフォルト値
- `config_example.yml` — 全パラメータの説明付き例

---

## バージョン管理

- `build.gradle.kts` の `version` を変更のたびにインクリメント
- 現在のバージョン: `2.5.0`
- 次回更新時: `2.6.0`

---

## 変更履歴サマリー

| バージョン | 主な変更 |
|---|---|
| 2.4.0 | ActivePetRegistry 導入、タスクリーク修正 |
| 2.5.0 | onPetSpawned 順序バグ修正、PUFFERFISH 削除、アルマジロ状態修正、locate 改善 |
| 2.6.0 | FLYING ペット速度アーキテクチャ再設計 |
