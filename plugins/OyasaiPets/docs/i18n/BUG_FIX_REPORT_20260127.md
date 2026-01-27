# バグ修正レポート - 2026年1月27日

## 🐛 報告された問題

1. **レポートの誤情報**: `/bigwolf wolf` でも購入できると記載されていたが、実際は非推奨
2. **交配GUIのバグ**: 27枠に変更されたはずが、実際には54枠のままだった

---

## ✅ 実施した修正

### 1. `/bigwolf buy` コマンドの整理

#### 問題点
- `handleNormalSummon` 関数に古い `buy` ロジックが残存
- `when` ブロックで `"buy"` がGUI表示用に処理されているのに、`handleNormalSummon` で引数チェックも実行されていた

#### 修正内容

**BigWolf.kt - handleNormalSummon()**
```kotlin
// Before
val (typeName, variantArg) =
    if (sub == "buy") {
      val mob = args.getOrNull(1)
      if (mob == null) {
        player.sendMessage(Component.text("使い方: /bigwolf buy <mob名> [variant]", RED))
        return
      }
      mob to args.getOrNull(2)
    } else {
      player.sendMessage(Component.text("ペット購入は /bigwolf buy $sub を推奨します。", YELLOW))
      sub to args.getOrNull(1)
    }

// After
val typeName = sub
val variantArg = args.getOrNull(1)

player.sendMessage(Component.text("ペット購入は /bigwolf buy を使用してください。", YELLOW))
```

#### 動作

- `/bigwolf buy` → 購入GUI表示（`when` ブロックで処理）
- `/bigwolf wolf` → "ペット購入は /bigwolf buy を使用してください。" メッセージ + 従来の購入処理（非推奨）

---

### 2. 交配GUIのサイズ修正

#### 問題点
- GUIサイズが54枠（6行）のままだった
- 説明アイテムの位置が49（最下段中央）だった

#### 修正内容

**systems/BreedingSystem.kt - openBreedGui()**

| 項目 | 変更前 | 変更後 |
|------|--------|--------|
| GUIサイズ | 54枠（6行） | **27枠（3行）** |
| ペット表示数 | 最大45匹 | **最大18匹** |
| 説明アイテム位置 | スロット49 | **スロット22**（3行目中央） |

```kotlin
// Before
val inv = Bukkit.createInventory(null, 54, title)
pets.forEachIndexed { index, entity ->
    if (index >= 45) return@forEachIndexed
    // ...
}
inv.setItem(49, infoItem)

// After
val inv = Bukkit.createInventory(null, 27, title)
pets.forEachIndexed { index, entity ->
    if (index >= 18) return@forEachIndexed
    // ...
}
inv.setItem(22, infoItem) // 3行目の中央（22 = 2*9 + 4）
```

#### GUIレイアウト（27枠）

```
行1: [ペット1] [ペット2] [ペット3] ... [ペット9]
行2: [ペット10] [ペット11] ... [ペット18]
行3: [ ] [ ] [ ] [ ] [説明] [ ] [ ] [ ] [ ]
                    ↑スロット22
```

---

### 3. ヘルプメッセージの修正

#### 修正内容

**BigWolf.kt - handlePlayerCommand()**

```kotlin
// Before
sender.sendMessage(Component.text("/bigwolf <mob名> [variant] - ペットを購入して召喚", YELLOW))
sender.sendMessage(Component.text("/bigwolf buy - ペットショップを開く", GOLD))
sender.sendMessage(Component.text("例: /bigwolf wolf, /bigwolf cat tabby", GRAY))

// After
sender.sendMessage(Component.text("/bigwolf buy - ペットショップを開く", YELLOW))
// <mob名> の行と例文を削除
```

#### 表示結果

```
=== BigWolf 使用方法 ===
/bigwolf buy - ペットショップを開く
/bigwolf storeall - 自分の全ペットを収納
/bigwolf dead - 死亡したペット一覧
/bigwolf revive <番号> - ペットを復活
...
/bigwolf menu - メインメニューを開く
```

---

## 📊 修正ファイル一覧

| ファイル | 修正内容 | 行数変更 |
|---------|---------|----------|
| **BigWolf.kt** | handleNormalSummon 簡略化 | -9行 |
| **BigWolf.kt** | ヘルプメッセージ修正 | -2行 |
| **systems/BreedingSystem.kt** | GUIサイズ 54→27 | -3行, 修正2行 |

**合計**: 2ファイル、14行修正

---

## ✅ ビルド結果

```bash
> Task :plugins:OyasaiPets:compileKotlin
w: 'class TMAPI : Any' is deprecated. Deprecated in Java.
w: 'val description: PluginDescriptionFile' is deprecated. Deprecated in Java.

BUILD SUCCESSFUL in 1s

> Task :plugins:OyasaiPets:build
BUILD SUCCESSFUL in 741ms
```

- ✅ コンパイルエラー: なし
- ✅ 警告: 既存のdeprecation warningsのみ
- ✅ shadowJar生成: 成功

---

## 🎯 修正後の動作

### `/bigwolf buy`
```
実行 → 購入GUI表示
- オオカミ、ネコ、キツネ等が日本語で表示
- 各ペットをクリックでバリアント選択または購入確認
```

### `/bigwolf wolf` (非推奨)
```
実行 → "ペット購入は /bigwolf buy を使用してください。"
     + 従来の購入処理（互換性のため残存）
```

### `/bigwolf breed`
```
実行 → 交配GUI表示（27枠）
- 最大18匹のペット表示
- 3行目中央に説明アイテム
```

---

## 📝 ドキュメント更新

**JAPANESE_TRANSLATION_IMPLEMENTATION_REPORT.md**

修正箇所:
1. 「従来の直接購入（引き続き使用可能）」→「非推奨・互換性のため残存」
2. コマンドヘルプの例文修正
3. バグ修正セクション追加

---

## 🚀 次回の推奨改善

1. **完全な非推奨化**
   - `/bigwolf wolf` を完全に無効化
   - 購入は `/bigwolf buy` のみに統一

2. **GUIのさらなる改善**
   - 交配GUIのページネーション（18匹以上の場合）
   - 購入GUIのカテゴリ分け（陸上・水生・飛行等）

3. **エラーメッセージの統一**
   - 全てのコマンドで一貫したメッセージ形式

---

**修正完了日**: 2026年1月27日
**所要時間**: 約15分
**ステータス**: ✅ 完了・テスト済み
