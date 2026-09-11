# OyasaiWorldGenerator

展示用の `THE_END` ワールドをボイドジェネレータで生成し、Purpur 26.2 のワールド高さを起動時に適用するプラグインです。CustomWorldHeight には実行時依存しません。

## 使い方

`config.yml` の `worlds` に対象を定義し、サーバーを完全再起動します。`min-y + height` は 2032 以下、`min-y` と `height` は16の倍数である必要があります。`maxHeight` は排他的です。

- `/owg status`: 期待値、実測値、ロード状態、provider、自己テスト結果
- `/owg tp [world]`: 設定したゲームモードと飛行可否を付与して入場
- `/owg load <world>`: 起動時安全検査を通過した対象だけをロード
- `/owg unload <world>`: 保存してアンロード（フォルダは削除しない）
- `/owg check`: 設定・バージョン・ロード済みワールドを読み取り検査

`owg_selftest` は、対象ワールドより先に同じ高さパッチを試すための使い捨てワールドです。起動前から同名フォルダがある場合は再利用も削除もせず、fail closed します。削除コードは、現在の起動で作成した `owg_selftest` のみに限定し、従来形式のワールド直下と 26.2 の namespaced dimension 配下を完全一致の allowlist で検査します。

Multiverse-Core の `auto-import-3rd-party-worlds` が有効な場合、ロード後に OWG 対象が自動登録されることがあります。OWG は Multiverse 5 の `removeWorld` を `unloadBukkitWorld=false` / `saveBukkitWorld=false` で呼び、Bukkit ワールドをロードしたまま登録簿だけから外します。`deleteWorld` は呼びません。

## 高さ適用の設計

`HeightProvider` を境界にし、現行の `NmsHeightProvider` は Purpur 26.2 以外で何も変更せず `false` を返します。`WorldInitEvent` (`NORMAL`) ではアンロードせず、次を行います。

1. バニラ `the_end` の `DimensionType` を複製し、`minY` / `height` / `logicalHeight` だけを変更する。
2. `DimensionType` レジストリの元の frozen 状態と intrusive-holder map を保存し、一時的に登録可能にしてから必ず復元する。
3. `ServerLevel` の dimension holder と6個の高さキャッシュを書き換える。
4. Moonrise/Starlight の4個の light-section 境界を書き換える。
5. 各段階を直後に読み返し、1つでも一致しなければ例外とスタックトレースを記録して失敗扱いにする。

フィールドはまず Purpur 26.2 の Mojang mapping 名で探し、見つからない場合だけ型・宣言順・変更前の値が一意に一致することを要求します。一意に解決できなければ成功扱いにはしません。final フィールドは JDK の `Unsafe` を使って書き換え、公開 getter と反射読み返しの両方で検証します。

## CustomWorldHeight 参照記録

参照時点は upstream `Lumine1909/CustomWorldHeight` の `v2.2.0-build-4` (`e2a9fb8b304330a89278e024be62cc96afe9a4d0`) です。GPL-3.0 の core/NMS 実装からコードは転記していません。

当たりを付けるために参照したもの:

- `nms/nms_26_2/.../DataHandler_26_2.java`: Purpur 26.2 で対象になる Minecraft クラスと高さ・Starlight フィールド名、dimension holder の所在。
- `core/.../proxy/LevelProxy.java`, `MappedRegistryProxy.java`, `StarLightInterfaceProxy.java`: mapping 変更時に候補となるフィールド名。
- `api/` と README: CWH の API 部分が LGPL-3.0、その他が GPL-3.0 であるという upstream の区分。

OWG 側で独自に書いたもの:

- `HeightProvider` の境界、宣言・適用・検証状態の管理。
- バニラ `the_end` レコードを3項目だけ差し替えて複製する処理と、OWG 固有 namespace/key の設計。
- レジストリ状態を `try/finally` で保存・復元し、各書き込みを読み返す処理。
- フィールド名が変わった場合の型・宣言順・変更前値による一意探索と fail-closed 判定。
- 自己テストの既存フォルダ拒否、作成元追跡、固定パス削除ガード。
- ボイド生成、設定検証、ライフサイクル、Multiverse 登録解除、コマンド、ログ文面。

ライセンスの最終判断は別途行う前提で、このモジュールには LICENSE ファイルやソースヘッダを追加していません。
