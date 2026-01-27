# /bigwolf buy エラー トラブルシューティングガイド

**エラーメッセージ**: `そのエンティティは見つかりません: buy`

**実施日**: 2026年1月27日
**対応内容**: デバッグログの追加と原因特定ガイド

---

## 🐛 問題の症状

`/bigwolf buy` コマンドを実行すると、購入GUIが開かずに以下のエラーが表示される：
```
そのエンティティは見つかりません: buy
```

---

## 🔍 原因の特定

### 最も可能性が高い原因

**サーバーが古いjarファイルをロードしている**

理由：
1. エラーメッセージは `handleNormalSummon()` から出力されている
2. 最新コードでは `/bigwolf buy` は `handleNormalSummon()` を呼び出さない
3. したがって、サーバーが最新のコードを実行していない

### 確認方法

**ステップ1: サーバーログを確認**

サーバー起動時に以下のログが出力されているか確認：
```
[OyasaiPets] ========================================
[OyasaiPets] OyasaiPets (BigWolf) v2.3.0
[OyasaiPets] Build Date: 2026-01-27
[OyasaiPets] Features: Breeding GUI v3, Variant Randomization, Config Auto-generation
[OyasaiPets] ========================================
```

**このログが出ていない場合** → 古いバージョンがロードされている

**ステップ2: /bigwolf buy 実行時のログを確認**

`/bigwolf buy` を実行すると、以下のログが出力されるはず：
```
[OyasaiPets] === BigWolf Command Execution ===
[OyasaiPets] Player: <プレイヤー名>
[OyasaiPets] Sub-command: 'buy'
[OyasaiPets] Args: [buy]
[OyasaiPets] Buy command detected! Opening shop GUI...
[OyasaiPets] Shop GUI opened successfully
```

**このログが出ていない場合** → 古いバージョンがロードされている

**以下のログが出る場合** → 確実に古いバージョン
```
[OyasaiPets] === handleNormalSummon called ===
[OyasaiPets] This should NOT happen for 'buy' command!
[OyasaiPets] Sub: 'buy', Args: [buy]
```

---

## ✅ 解決方法

### 方法1: jarファイルを差し替える（推奨）

1. **サーバーを停止**
   ```bash
   # サーバーのstopコマンドを実行
   ```

2. **最新のjarファイルをコピー**
   ```bash
   cp /Users/aa/platform/plugins/OyasaiPets/build/libs/OyasaiPets-2.3.0.jar \
      <サーバーディレクトリ>/plugins/OyasaiPets-2.3.0.jar
   ```

3. **古いjarファイルを削除**
   ```bash
   # サーバーのpluginsディレクトリ内の古いOyasaiPets jarを削除
   rm <サーバーディレクトリ>/plugins/OyasaiPets-*.jar
   ```

4. **サーバーを起動**

5. **ログを確認**
   - 起動時のバージョン情報を確認
   - `/bigwolf buy` を実行してログを確認

### 方法2: /reload は使わない（重要）

**注意**: `/reload` コマンドではjarファイルが正しく再読み込みされない可能性があります。

- ❌ `/reload`
- ❌ `/reload confirm`
- ✅ **サーバーを完全に停止して再起動**

---

## 🔧 追加されたデバッグ機能

### 1. プラグインバージョン情報

**起動時のログ**:
```
[OyasaiPets] ========================================
[OyasaiPets] OyasaiPets (BigWolf) v2.3.0
[OyasaiPets] Build Date: 2026-01-27
[OyasaiPets] Features: Breeding GUI v3, Variant Randomization, Config Auto-generation
[OyasaiPets] ========================================
```

このログで正しいバージョンがロードされているか確認できます。

### 2. コマンド実行ログ

**`/bigwolf buy` 実行時**:
```
[OyasaiPets] === BigWolf Command Execution ===
[OyasaiPets] Player: PlayerName
[OyasaiPets] Sub-command: 'buy'
[OyasaiPets] Args: [buy]
[OyasaiPets] Buy command detected! Opening shop GUI...
[OyasaiPets] Shop GUI opened successfully
```

### 3. エラー詳細ログ

**購入GUIが開けない場合**:
```
[OyasaiPets] Failed to open shop GUI: <エラーメッセージ>
java.lang.Exception: <スタックトレース>
```

### 4. 古いコード実行の警告

**`handleNormalSummon` が呼ばれた場合（古いバージョン）**:
```
[OyasaiPets] === handleNormalSummon called ===
[OyasaiPets] This should NOT happen for 'buy' command!
[OyasaiPets] Sub: 'buy', Args: [buy]
```

---

## 📊 コード変更内容

### BigWolf.kt の修正点

#### 1. onEnable() - バージョン情報追加

```kotlin
override fun onEnable() {
    // プラグインバージョン情報をログ出力
    logger.info("========================================")
    logger.info("OyasaiPets (BigWolf) v${description.version}")
    logger.info("Build Date: 2026-01-27")
    logger.info("Features: Breeding GUI v3, Variant Randomization, Config Auto-generation")
    logger.info("========================================")

    // ...既存の初期化処理
}
```

#### 2. handlePlayerCommand() - 詳細ログ追加

```kotlin
val sub = args[0].lowercase()

// デバッグログ - コマンド実行を記録
logger.info("=== BigWolf Command Execution ===")
logger.info("Player: ${sender.name}")
logger.info("Sub-command: '$sub'")
logger.info("Args: [${args.joinToString(", ")}]")

// buy コマンドを最優先で処理
if (sub == "buy") {
    logger.info("Buy command detected! Opening shop GUI...")
    try {
        petShopGuiService.openMainShopGui(sender)
        logger.info("Shop GUI opened successfully")
    } catch (e: Exception) {
        logger.severe("Failed to open shop GUI: ${e.message}")
        e.printStackTrace()
        sender.sendMessage(Component.text("購入GUIを開けませんでした: ${e.message}", RED))
    }
    return true
}
```

#### 3. handleNormalSummon() - 警告ログ追加

```kotlin
private fun handleNormalSummon(player: Player, sub: String, args: Array<out String>) {
    logger.warning("=== handleNormalSummon called ===")
    logger.warning("This should NOT happen for 'buy' command!")
    logger.warning("Sub: '$sub', Args: [${args.joinToString(", ")}]")

    // ...既存の処理
}
```

---

## 🎯 トラブルシューティングチェックリスト

- [ ] サーバーログで起動時のバージョン情報を確認
- [ ] `/bigwolf buy` 実行時のログを確認
- [ ] `handleNormalSummon called` ログが出ていないか確認
- [ ] 最新のjarファイルをサーバーにコピー
- [ ] 古いjarファイルを削除
- [ ] サーバーを完全再起動（/reload は使わない）
- [ ] 再度 `/bigwolf buy` を実行して動作確認

---

## 📝 ログの読み方

### 正常な場合

```
[INFO] OyasaiPets (BigWolf) v2.3.0
[INFO] Build Date: 2026-01-27
...
[INFO] === BigWolf Command Execution ===
[INFO] Player: TestPlayer
[INFO] Sub-command: 'buy'
[INFO] Buy command detected! Opening shop GUI...
[INFO] Shop GUI opened successfully
```

### 異常な場合（古いバージョン）

```
[WARNING] === handleNormalSummon called ===
[WARNING] This should NOT happen for 'buy' command!
[WARNING] Sub: 'buy', Args: [buy]
```

この場合、**必ずjarファイルを差し替えてサーバーを再起動**してください。

---

## ✅ ビルド結果

```bash
BUILD SUCCESSFUL in 1s
4 actionable tasks: 2 executed, 2 up-to-date
```

- ✅ コンパイルエラー: なし
- ✅ デバッグログ追加: 完了
- ✅ jarファイル生成: `/Users/aa/platform/plugins/OyasaiPets/build/libs/OyasaiPets-2.3.0.jar`

---

## 🚀 次のステップ

1. 最新のjarファイルをサーバーにデプロイ
2. サーバーを完全再起動
3. サーバーログでバージョン情報を確認
4. `/bigwolf buy` を実行してテスト
5. ログを確認して正常動作を確認

---

**作成日**: 2026年1月27日
**ステータス**: ✅ デバッグログ追加完了・要デプロイ
