---

## name: mc-api-lookup description: Purpur / Paper / Bukkit / FAWE / PlaceholderAPI など Minecraft 関連 API の正しい使い方を、最新ドキュメントから引いて回答する。Armadillo の rollOut() のような API 罠を避けるために使う。

# /mc-api-lookup <api-question>

このプロジェクトは Purpur 1.21.10 (Paper 系) で動作しており、API の挙動はバージョンによって細かく変わる。記憶や training
data ベースで答えると間違いやすいので、必ず最新の一次情報を参照するためのスキル。

## 既知の API 罠（このプロジェクトで踏んだもの）

- `org.bukkit.entity.Armadillo`: `setState()` は存在しない。`rollOut()` / `rollUp()`
  で状態遷移する。
- `Attribute`: `GENERIC_MOVEMENT_SPEED` などの命名規則は API バージョン依存。Purpur 1.21.x
  は名前空間付き Key に移行している。
- `Entity.setVelocity` 直後に `teleport` するとベロシティが失われる。順序に注意。
- Allay / Parrot などの FLYING 系エンティティは `MOVEMENT_SPEED` と `FLYING_SPEED` の **両方**
  をクリア / 復元する必要がある。

## 動作手順

1. **質問の整理**
   - API クラス名・メソッド名・対象 Minecraft バージョン (このプロジェクトは Purpur 1.21.10) を明確にする。

1. **一次情報を引く（優先順位順）**
   - `context7` MCP が利用可能なら最優先で使う（`use context7 to look up Bukkit Armadillo`
     のような形）。
   - 次点：WebFetch で以下のドメインから取得（settings に許可済み）:
     - `jd.papermc.io` — Paper Javadoc
     - `hub.spigotmc.org` — Spigot Javadoc
     - `minecraft.wiki` — ゲーム挙動 / NBT
     - `github.com` — PurpurMC / PaperMC ソース
     - `bukkit.org`, `www.spigotmc.org` — フォーラム情報
   - 最終手段：既存コードベース内の Grep（`plugins/OyasaiPets/src/...` で類似の用例を探す）。

1. **回答フォーマット**

   ```
   ## <API 名>

   **シグネチャ**: <最新の正しいシグネチャ>
   **バージョン**: <導入バージョン>
   **使用例**:
       <コード>
   **既知の落とし穴**: <あれば>
   **出典**: <URL>
   ```

1. **検証**
   - 提示する前に `OyasaiPetsUnified.kt` で既に使われていれば、現行コードの書き方と一致しているか確認する。
   - 不一致なら「既存コードはこう書いている、最新 API はこう、移行するか？」と提案する形にする。

## 注意

- **記憶や training data だけで答えない**。Minecraft API は破壊的変更が頻繁。
- バージョンが特定できない場合は Purpur 1.21.10 / Java 25 をデフォルト前提とする。
- NMS / reflection を提案するのは最終手段。Bukkit API で完結する方法を優先する。
