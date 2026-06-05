---
title: "OyasaiPets — ペットシステム"
category: platform
status: active
owner: marzipan99
source_of_truth: "plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/OyasaiPetsUnified.kt"
related_paths:
  - plugins/OyasaiPets/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-06-05"
agent_task: null
---

# OyasaiPets

Minecraft向けペット召喚・育成・管理プラグイン（v2.5.0）。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiPets/` |
| 主要コード | `plugins/OyasaiPets/src/main/kotlin/` |
| 重要設計 | `ActivePetRegistry` と `onPetSpawned` 呼び出し順序 |
| ビルド確認 | `/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiPets:compileKotlin` |
| ローカル反映 | ビルド済みjarを `dev-server/plugins/` にコピーし、必要に応じてリロードまたは再起動 |
| 非公開メモ | 個人用の試作・退避・未整理ログは `archive/` または `local/` に置き、このファイルには公開可能な判断だけを書く |

## 主要クラス

メインソース（モノリシック）: `OyasaiPetsUnified.kt`（約7800行）

### ActivePetRegistry（v2.5.0）

全ペットエンティティのインメモリレジストリ。ワールドスキャンを廃止し高速化。

```kotlin
object ActivePetRegistry {
    fun register(entity: Entity)
    fun unregister(entityUuid: UUID)
    fun findByPetId(petId: String): Entity?
    fun getByOwner(ownerUuidStr: String): List<Entity>
    fun countByOwner(ownerUuidStr: String): Int
    fun getAll(): Collection<Entity>
    fun clear()
}
```

**重要**: `register` 前に必ず `petId` と `ownerId` をエンティティにセットすること。

## ビルド

```bash
gradle :plugins:OyasaiPets:compileKotlin
gradle :plugins:OyasaiPets:build
```

**既知の問題**: detekt 1.23.6 が Java 25 で `IllegalArgumentException: 25` — コードと無関係のCI既知問題。

## 主要バグ修正履歴

### v2.5.0 (2026-03-08)
- `onPetSpawned` 呼び出し順序修正（petId/ownerIdセット後に呼ぶ）— registry全バグの根本原因
- PUFFERFISH削除
- Armadillo shell状態管理
- FLYING pet descent on ground
- ALLAY/PARROT FLYING_SPEED 復元
- pet follow teleport（20ブロック超で自動テレポート）

### v2.4.0 (2026-03-05)
- Flying pet descent task leak修正
- Breeding cost before validation
- breedSelections thread safety
