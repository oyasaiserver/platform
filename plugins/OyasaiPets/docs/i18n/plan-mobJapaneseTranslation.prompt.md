# MOB名称日本語化 実装計画書

**作成日**: 2026年1月27日
**目的**: OyasaiPetsプラグイン全体でMOB名称（wolf, cat等）を日本語（オオカミ、ネコ等）に統一する

---

## 📋 現状分析

### MOB名称が表示される箇所

1. **コマンド入力時**
   - `/bigwolf wolf` → `/bigwolf オオカミ` or 英語のまま
   - 例: `sender.sendMessage(Component.text("例: /bigwolf wolf, /bigwolf cat tabby", GRAY))`

2. **GUI表示**
   - ショップGUI、ペットステータスGUI、交配GUI等
   - アイテム名・Lore内の表示

3. **メッセージ出力**
   - `そのMOB (${type.name}) は通常召喚できません。`
   - ペット履歴、死亡リスト等での種類表示

4. **設定ファイル**
   - `config.yml` の `pets.wolf.baseSpeed` 等

5. **Tab補完**
   - コマンド入力時のサジェスト

---

## 🎯 実装方針

### Option A: 完全日本語化（推奨）
- **コマンド入力**: 英語・日本語両対応（`wolf` または `オオカミ`）
- **表示**: すべて日本語
- **メリット**: ユーザーフレンドリー、日本語特化
- **デメリット**: 実装コストがやや高い

### Option B: 表示のみ日本語化
- **コマンド入力**: 英語のまま
- **表示**: 日本語に変換
- **メリット**: 実装が簡単
- **デメリット**: コマンド入力時は英語が必要

**推奨**: **Option A（完全日本語化）**

---

## 🛠️ 実装手順

### Step 1: 翻訳マッピングクラスの作成

**新規ファイル**: `src/main/kotlin/me/marzipan/OyasaiPets/i18n/MobTranslator.kt`

**実装内容**:
- EntityType → 日本語のマッピング
- 日本語 → EntityType の逆引き
- 英語名も受け付ける
- Tab補完用の候補リスト生成

**実装規模**: 約100-150行

**実装例**:
```kotlin
package me.marzipan.OyasaiPets.i18n

import org.bukkit.entity.EntityType

/**
 * MOB名称の日本語翻訳を管理するオブジェクト
 */
object MobTranslator {

    /** EntityType → 日本語のマッピング */
    private val translations = mapOf(
        EntityType.WOLF to "オオカミ",
        EntityType.CAT to "ネコ",
        EntityType.FOX to "キツネ",
        EntityType.RABBIT to "ウサギ",
        EntityType.PANDA to "パンダ",
        EntityType.POLAR_BEAR to "シロクマ",
        EntityType.OCELOT to "ヤマネコ",
        EntityType.HORSE to "ウマ",
        EntityType.DONKEY to "ロバ",
        EntityType.MULE to "ラバ",
        EntityType.LLAMA to "ラマ",
        EntityType.TRADER_LLAMA to "行商人のラマ",
        EntityType.PIG to "ブタ",
        EntityType.COW to "ウシ",
        EntityType.SHEEP to "ヒツジ",
        EntityType.CHICKEN to "ニワトリ",
        EntityType.GOAT to "ヤギ",
        EntityType.CAMEL to "ラクダ",
        EntityType.SNIFFER to "スニッファー",
        EntityType.ARMADILLO to "アルマジロ",
        EntityType.DOLPHIN to "イルカ",
        EntityType.TURTLE to "カメ",
        EntityType.AXOLOTL to "ウーパールーパー",
        EntityType.FROG to "カエル",
        EntityType.TADPOLE to "オタマジャクシ",
        EntityType.TROPICAL_FISH to "熱帯魚",
        EntityType.PUFFERFISH to "フグ",
        EntityType.COD to "タラ",
        EntityType.SALMON to "サケ",
        EntityType.PARROT to "オウム",
        EntityType.BAT to "コウモリ",
        EntityType.BEE to "ミツバチ",
        EntityType.ALLAY to "アレイ",
        EntityType.IRON_GOLEM to "鉄のゴーレム",
        EntityType.SNOW_GOLEM to "雪のゴーレム",
        EntityType.STRIDER to "ストライダー",
        EntityType.SKELETON_HORSE to "スケルトンホース",
        EntityType.ZOMBIE_HORSE to "ゾンビホース",
        EntityType.VILLAGER to "村人",
        EntityType.WANDERING_TRADER to "行商人",
        EntityType.MOOSHROOM to "ムーシュルーム"
    )

    /** 日本語 → EntityType の逆引きマップ */
    private val reverseMap: Map<String, EntityType> = translations.entries.associate { (k, v) ->
        v.lowercase() to k
    }

    /** 英語名 → EntityType のマップ */
    private val englishMap: Map<String, EntityType> = EntityType.values().associate { type ->
        type.name.lowercase() to type
    }

    /**
     * EntityTypeを日本語に変換
     * @param type EntityType
     * @return 日本語名（マッピングがない場合は英語名）
     */
    fun toJapanese(type: EntityType): String {
        return translations[type] ?: type.name
    }

    /**
     * 文字列からEntityTypeを取得（英語・日本語両対応）
     * @param input 入力文字列（英語名 or 日本語名）
     * @return EntityType（見つからない場合はnull）
     */
    fun fromString(input: String): EntityType? {
        val lower = input.lowercase()
        return reverseMap[lower] ?: englishMap[lower]
    }

    /**
     * Tab補完用の候補リスト（日本語のみ）
     * @return 日本語名のリスト（ソート済み）
     */
    fun getJapaneseCompletionList(): List<String> {
        return translations.values.sorted()
    }

    /**
     * 英語名も含めたTab補完リスト
     * @return 日本語名+英語名のリスト（ソート済み）
     */
    fun getAllCompletionList(): List<String> {
        return (translations.values + translations.keys.map { it.name.lowercase() })
            .distinct()
            .sorted()
    }

    /**
     * 指定されたEntityTypeが日本語翻訳を持つか確認
     */
    fun hasTranslation(type: EntityType): Boolean {
        return translations.containsKey(type)
    }
}
```

---

### Step 2: コマンド入力の日本語対応

**修正ファイル**:
- `BigWolf.kt` の `handleNormalSummon()` (行499-506)
- `commands/CommandTabCompleter.kt` (Tab補完)
- `commands/OpCommands.kt` (OP用実験的召喚)

**修正内容**:

#### BigWolf.kt
```kotlin
// Before (行501-503)
val type = runCatching { EntityType.valueOf(typeName.uppercase()) }.getOrNull()
if (type == null) {
  player.sendMessage(Component.text("そのエンティティは見つかりません: $typeName", RED))
  return
}

// After
val type = MobTranslator.fromString(typeName)
if (type == null) {
  player.sendMessage(Component.text("その生物は見つかりません: $typeName", RED))
  player.sendMessage(Component.text("使用可能: オオカミ, ネコ, キツネ等 (英語も可)", GRAY))
  return
}
```

#### commands/CommandTabCompleter.kt
```kotlin
// Before
return PetRegistry.officialPets
    .map { it.name.lowercase() }
    .filter { it.startsWith(args[0].lowercase()) }
    .toList()

// After
val input = args[0].lowercase()
val japaneseList = MobTranslator.getJapaneseCompletionList()
    .filter { it.lowercase().startsWith(input) }
val englishList = PetRegistry.officialPets
    .map { it.name.lowercase() }
    .filter { it.startsWith(input) }
return (japaneseList + englishList).distinct()
```

**実装規模**: 3ファイル、約15行修正

---

### Step 3: 表示の日本語化

#### 3-1. メッセージ出力の変更

**影響箇所**:
- `BigWolf.kt`: エラーメッセージ、ヘルプメッセージ（約10箇所）
- `services/PetQueryService.kt`: ペット履歴表示（約5箇所）
- `services/PetReviveService.kt`: 復活メッセージ（約3箇所）
- `services/TransferService.kt`: 譲渡メッセージ（約2箇所）
- `systems/BreedingSystem.kt`: 交配GUI（約10箇所）

**修正内容**:
```kotlin
// Before
Component.text("そのMOB (${type.name}) は通常召喚できません。", RED)

// After
Component.text("その${MobTranslator.toJapanese(type)}は通常召喚できません。", RED)
```

**具体的な修正箇所**:

##### BigWolf.kt
- 行351: `"例: /bigwolf wolf, /bigwolf cat tabby"` → `"例: /bigwolf オオカミ, /bigwolf ネコ tabby"`
- 行508: `"そのMOB (${type.name}) は通常召喚できません。"` → `"その${MobTranslator.toJapanese(type)}は通常召喚できません。"`

##### services/PetQueryService.kt
- 行54-55: ペット種類表示（`#${pet.petNumber} ${pet.type}$variantStr$nameStr`）
- 行119-130: ペット履歴での種類表示

##### services/PetReviveService.kt
- 行122: 復活メッセージでの種類表示

##### systems/BreedingSystem.kt
- 行69: GUI内のアイテム名（`${entity.type.name}`）

**実装規模**: 約30箇所の修正

---

#### 3-2. GUI表示の変更

**影響箇所**:
- `gui/GuiManager.kt`: 全GUI表示（約15箇所）
- `systems/BreedingSystem.kt`: 交配GUI（約5箇所）
- `items/PetItemFactory.kt`: アイテム作成（約3箇所）

**修正内容**:
```kotlin
// Before
displayName(Component.text("${entity.type.name} ", YELLOW).append(nameComp))

// After
displayName(Component.text("${MobTranslator.toJapanese(entity.type)} ", YELLOW).append(nameComp))
```

**実装規模**: 約23箇所の修正

---

### Step 4: Tab補完の更新

**修正ファイル**: `commands/CommandTabCompleter.kt`

**修正内容**:
- 日本語候補を優先表示
- 英語名でも補完可能
- 入力に応じた候補のフィルタリング

**実装例**:
```kotlin
fun onTabCompletePlayer(args: Array<out String>): List<String> {
    if (args.isEmpty()) return emptyList()

    val subcommand = args[0].lowercase()

    // 最初の引数（サブコマンドまたはMOB名）
    if (args.size == 1) {
        val commands = listOf("menu", "storeall", "dead", "revive", "history",
            "locate", "recover", "breed", "rename", "transfer")

        val mobNames = if (subcommand.isEmpty()) {
            // 入力なし：日本語優先
            MobTranslator.getJapaneseCompletionList()
        } else {
            // 入力あり：日本語・英語両方から検索
            MobTranslator.getAllCompletionList()
                .filter { it.lowercase().startsWith(subcommand) }
        }

        return (commands + mobNames)
            .filter { it.lowercase().startsWith(subcommand) }
            .sorted()
    }

    // 以降のTab補完...
    return emptyList()
}
```

**実装規模**: 約15行修正

---

### Step 5: ヘルプメッセージの更新

**修正ファイル**: `BigWolf.kt`

**修正箇所**:
1. 行340: `"/bigwolf <mob名> [variant]"` → `"/bigwolf <生物名> [variant]"`
2. 行351: `"例: /bigwolf wolf, /bigwolf cat tabby"` → `"例: /bigwolf オオカミ, /bigwolf ネコ tabby"`
3. 行351追加: `"   (英語名も使用可: wolf, cat)"`
4. 行296: `"/bigwolfop exp <mob> [variant]"` → `"/bigwolfop exp <生物名> [variant]"`
5. 行297: `"/bigwolfop shop <mob> [variant]"` → `"/bigwolfop shop <生物名> [variant]"`

**実装規模**: 約5箇所のメッセージ修正

---

### Step 6: 設定ファイルの互換性維持（変更なし）

**方針**: `config.yml` の `pets.wolf.*` は英語のまま維持
- **理由**: 既存サーバーの設定ファイル互換性
- **対応**: PetRegistry内部では英語キーを継続使用
- **影響**: なし（内部処理のみ）

---

## 📊 実装規模の総計

| 項目 | ファイル数 | 修正行数 | 新規行数 | 見積時間 |
|------|-----------|----------|----------|----------|
| **MobTranslator作成** | 1 | 0 | 150 | 30分 |
| **コマンド入力対応** | 3 | 15 | 5 | 20分 |
| **メッセージ日本語化** | 5 | 30 | 0 | 30分 |
| **GUI日本語化** | 3 | 23 | 0 | 25分 |
| **Tab補完更新** | 1 | 15 | 0 | 15分 |
| **ヘルプ更新** | 1 | 5 | 0 | 10分 |
| **テスト・検証** | - | - | - | 30分 |
| **合計** | **14** | **88** | **155** | **2.5時間** |

---

## 🌐 MOB日本語名称一覧

### 陸上動物（19種）
```
Wolf → オオカミ          Cat → ネコ
Fox → キツネ            Rabbit → ウサギ
Panda → パンダ          Polar Bear → シロクマ
Ocelot → ヤマネコ       Horse → ウマ
Donkey → ロバ           Mule → ラバ
Llama → ラマ            Trader Llama → 行商人のラマ
Pig → ブタ              Cow → ウシ
Sheep → ヒツジ          Chicken → ニワトリ
Goat → ヤギ             Camel → ラクダ
Sniffer → スニッファー  Armadillo → アルマジロ
```

### 水生生物（9種）
```
Dolphin → イルカ        Turtle → カメ
Axolotl → ウーパールーパー  Frog → カエル
Tadpole → オタマジャクシ    Tropical Fish → 熱帯魚
Pufferfish → フグ       Cod → タラ
Salmon → サケ
```

### 飛行生物（4種）
```
Parrot → オウム         Bat → コウモリ
Bee → ミツバチ          Allay → アレイ
```

### 特殊・幻想生物（5種）
```
Iron Golem → 鉄のゴーレム     Snow Golem → 雪のゴーレム
Strider → ストライダー        Skeleton Horse → スケルトンホース
Zombie Horse → ゾンビホース
```

### その他（3種）
```
Villager → 村人         Wandering Trader → 行商人
Mooshroom → ムーシュルーム
```

**合計: 40種類**

---

## ✅ 修正が必要なファイル一覧

### 新規作成（1ファイル）
```
src/main/kotlin/me/marzipan/OyasaiPets/i18n/
└── MobTranslator.kt ★ NEW (150行)
```

### 修正対象（13ファイル）

#### コマンド層（3ファイル）
```
src/main/kotlin/me/marzipan/OyasaiPets/
├── BigWolf.kt (約20箇所)
└── commands/
    ├── CommandTabCompleter.kt (約15行)
    └── OpCommands.kt (約5行)
```

#### Services層（4ファイル）
```
src/main/kotlin/me/marzipan/OyasaiPets/services/
├── PetQueryService.kt (約5箇所)
├── PetReviveService.kt (約3箇所)
├── PetCommandService.kt (約2箇所)
└── TransferService.kt (約2箇所)
```

#### Systems層（2ファイル）
```
src/main/kotlin/me/marzipan/OyasaiPets/systems/
├── BreedingSystem.kt (約15箇所)
└── PetSpawnSystem.kt (約3箇所)
```

#### GUI・Items層（2ファイル）
```
src/main/kotlin/me/marzipan/OyasaiPets/
├── gui/GuiManager.kt (約15箇所)
└── items/PetItemFactory.kt (約3箇所)
```

#### Listeners層（2ファイル）
```
src/main/kotlin/me/marzipan/OyasaiPets/listeners/
├── PetInventoryListener.kt (約3箇所)
└── PlayerActionListener.kt (約2箇所)
```

---

## 🎯 実装の具体例

### 例1: コマンド入力の変更

**ファイル**: `BigWolf.kt` (行501-503)

```kotlin
// Before
val type = runCatching { EntityType.valueOf(typeName.uppercase()) }.getOrNull()
if (type == null) {
  player.sendMessage(Component.text("そのエンティティは見つかりません: $typeName", RED))
  return
}

// After
val type = MobTranslator.fromString(typeName)
if (type == null) {
  player.sendMessage(Component.text("その生物は見つかりません: $typeName", RED))
  player.sendMessage(Component.text("例: オオカミ, ネコ, キツネ (英語も可)", GRAY))
  return
}
```

---

### 例2: GUI表示の変更

**ファイル**: `systems/BreedingSystem.kt` (行69)

```kotlin
// Before
displayName(Component.text("${entity.type.name} ", YELLOW).append(nameComp))

// After
displayName(Component.text("${MobTranslator.toJapanese(entity.type)} ", YELLOW).append(nameComp))
```

---

### 例3: メッセージ出力の変更

**ファイル**: `BigWolf.kt` (行508)

```kotlin
// Before
player.sendMessage(Component.text("そのMOB (${type.name}) は通常召喚できません。", RED))

// After
player.sendMessage(Component.text("その${MobTranslator.toJapanese(type)}は通常召喚できません。", RED))
```

---

### 例4: ペット履歴表示の変更

**ファイル**: `services/PetQueryService.kt` (行54-55)

```kotlin
// Before
player.sendMessage(
    Component.text("#${pet.petNumber} ${pet.type}$variantStr$nameStr - $deathTime 死亡", RED)
)

// After
val typeName = runCatching {
    EntityType.valueOf(pet.type)
}.getOrNull()?.let {
    MobTranslator.toJapanese(it)
} ?: pet.type

player.sendMessage(
    Component.text("#${pet.petNumber} ${typeName}$variantStr$nameStr - $deathTime 死亡", RED)
)
```

---

## ✅ テスト計画

### 1. 単体テスト（MobTranslator）
```kotlin
@Test
fun testToJapanese() {
    assertEquals("オオカミ", MobTranslator.toJapanese(EntityType.WOLF))
    assertEquals("ネコ", MobTranslator.toJapanese(EntityType.CAT))
}

@Test
fun testFromString() {
    assertEquals(EntityType.WOLF, MobTranslator.fromString("オオカミ"))
    assertEquals(EntityType.WOLF, MobTranslator.fromString("wolf"))
    assertEquals(EntityType.WOLF, MobTranslator.fromString("WOLF"))
    assertEquals(EntityType.CAT, MobTranslator.fromString("ねこ"))
    assertNull(MobTranslator.fromString("存在しない"))
}
```

### 2. 統合テスト（コマンド）
- `/bigwolf オオカミ` → オオカミ召喚成功
- `/bigwolf wolf` → オオカミ召喚成功
- `/bigwolf WOLF` → オオカミ召喚成功
- `/bigwolf 無効` → エラーメッセージ（日本語）

### 3. GUI表示テスト
- ショップGUI: "オオカミ" 表示確認
- ペット履歴: "ネコ" 表示確認
- 交配GUI: "キツネ" 表示確認
- 死亡リスト: "イルカ" 表示確認

### 4. Tab補完テスト
- `/bigwolf <TAB>` → 日本語リスト表示
- `/bigwolf オ<TAB>` → オオカミ, オウム, オタマジャクシ
- `/bigwolf w<TAB>` → wolf
- `/bigwolf cat<TAB>` → cat

---

## 🚨 互換性の保証

### 既存機能への影響: なし
- ✅ 英語コマンド（`/bigwolf wolf`）も引き続き使用可能
- ✅ 設定ファイル（`config.yml`）の構造は変更なし
- ✅ データファイル（JSON）の`type`フィールドは英語のまま（内部処理用）
- ✅ 既存プレイヤーへの影響なし

### マイグレーション: 不要
- データベース変更なし
- 既存プレイヤーデータへの影響なし
- バージョン間の互換性維持

---

## 📝 実装優先順位

### Phase 1（必須） - 1.5時間
1. ✅ MobTranslatorクラス作成（30分）
2. ✅ コマンド入力の日本語対応（20分）
3. ✅ 基本的なメッセージ日本語化（40分）

### Phase 2（推奨） - 1時間
4. ✅ GUI表示の日本語化（25分）
5. ✅ Tab補完の更新（15分）
6. ✅ 残りのメッセージ日本語化（20分）

### Phase 3（オプション） - 将来
7. ⭕ ひらがな対応（`おおかみ` → `オオカミ`）
8. ⭕ 多言語対応（英語・中国語等）
9. ⭕ カスタム名称設定機能

---

## 📊 実装後の効果

### ユーザー体験の向上
- ✅ 日本語でのコマンド入力が可能に
- ✅ GUI表示が自然な日本語に
- ✅ エラーメッセージがわかりやすく
- ✅ 初心者プレイヤーの参入障壁低下

### 保守性の向上
- ✅ 翻訳が一箇所（MobTranslator）に集約
- ✅ 新しいMOB追加時の対応が簡単
- ✅ 将来の多言語化への拡張が容易
- ✅ コードの可読性向上

### 拡張性の向上
- ✅ Localeベースの多言語対応への準備
- ✅ カスタム翻訳のサポート可能
- ✅ 他のプラグインからの参照可能

---

## 🎯 完了基準

実装完了の判断基準:

- [ ] MobTranslatorクラスが作成され、全40種類の翻訳がマッピングされている
- [ ] `/bigwolf オオカミ` と `/bigwolf wolf` の両方でペット召喚が可能
- [ ] すべてのGUI表示が日本語化されている
- [ ] すべてのメッセージ出力が日本語化されている
- [ ] Tab補完で日本語候補が表示される
- [ ] ビルドエラーが発生しない
- [ ] 既存機能の互換性が維持されている
- [ ] 全テストケースが通過する
- [ ] ドキュメントが更新されている

---

## 🔄 ロールバック計画

万が一問題が発生した場合の対応:

1. **即時ロールバック**: バックアップから復元
2. **部分的無効化**: MobTranslator.toJapanese() を type.name に戻す
3. **段階的ロールバック**: Phase 2 → Phase 1 → 元に戻す

---

## 📚 関連ドキュメント

- `PHASE2_REFACTORING_SUMMARY.md` - Phase 2リファクタリング成果
- `REFACTORING_SUCCESS_ANALYSIS.md` - Phase 0-1の成功要因分析
- `BigWolf_Overview.md` - プラグイン概要

---

**策定者**: GitHub Copilot
**策定日**: 2026年1月27日
**ステータス**: レビュー待ち
**推奨実装時期**: Phase 3 以降（Phase 2完了後）
