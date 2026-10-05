# EssentialsX 作業台コマンドの移行（段階1）

対象仕様: EssentialsX **2.22.1-dev+12-776f709**。
ソース: https://github.com/EssentialsX/Essentials/tree/776f709

## 登録と権限

`workstation` パッケージに10コマンドをまとめ、`Main` で個別に例外を捕捉して有効化する。
この機能は Essentials API を使わない。既存の SpawnFeature の Essentials 依存は今回変更しない。
`/c` と `/d` は `oyasaiutilities:workbench` と `oyasaiutilities:disposal` を呼ぶ。

別名は依頼の表にあるものだけを登録する。`head` は `hat` の別名。
権限は `essentials.<command>` と以下を使用する。

- `essentials.enderchest.others` / `essentials.enderchest.modify`
- `essentials.hat.prevent-type.*` / `essentials.hat.prevent-type.<素材名（小文字）>`
- `essentials.hat.ignore-binding`
- `essentials.skull.others` / `essentials.skull.modify`
- `essentials.skull.spawn` / `essentials.skull.spawn.others`
- `essentials.vanish.interact`（他人のエンダーチェストの検索で非表示の対象を許可）

Essentials の plugin.yml では対象の宣言済みノードに default 指定がなく、Bukkit の既定値は OP。
こちらは `default: op` を明記する。`skull.spawn.others` はソースで参照されるが upstream の
plugin.yml に宣言がないため、同じ OP 既定で追加する。
`hat.prevent-type.<item-name>` は upstream と同じリテラルのプレースホルダーを宣言する。
具体的な素材やワイルドカードは宣言せず、Essentials の SuperpermsHandler と同様に
`effectivePermissions` の完全一致を三値（true / false / 未設定）で読む。
これにより OP を素材禁止にせず、ワイルドカード禁止の素材単位 false 例外も扱う。

## 別名の移譲の根拠

`Essentials.java#onCommandEssentials` は次の条件で AlternativeCommandsHandler を呼ぶ。

- `overridden-commands` に正規コマンドがない
- 入力ラベルが `e` で始まらない、またはラベルが正規コマンド名そのもの

`AlternativeCommandsHandler#addPlugin` は Bukkit の knownCommands 全体から別名を含めて拾い、
名前空間を除いた入力ラベルで保存する。`getAlternative` は別名も返す。
PluginEnableEvent でも登録されるため、softdepend で Essentials より後に有効化されても対象になる。

したがって craft / wb / trash / head / playerskull は通常移譲されるが、**ec / eskull は移譲されない**。
この2ラベルだけ、既存の PluginCommand が Essentials 所有なら Paper の knownCommands を
OyasaiUtilities のコマンドに切り替える。他プラグイン所有なら変更しない。無効化時には元へ戻す。
`essentials:` 名前空間のコマンドは Essentials 所有のまま。
`overridden-commands` の指定がある場合は通常の移譲が抑止されるため、その設定は別途確認が必要。
本番へのアクセスは今回行っていない。

## /head の実 jar 検証

読み取り対象:
`/nix/store/mnalnimpbz7p37yyb4ch35b5sx4im76l-essentialsx.jar`

- plugin.yml の version: `2.22.1-dev+12-776f709`
- SHA-256: `ed0c4432bb286ce06820ba5a162ffac91e34e02eba644cfcf66aec4fda86af42`
- jar 内の plugin.yml では hat が skull より前にあり、両方が head を別名に持つ。
- Purpur API `26.2.build.2622-stable` の `PluginDescriptionFile` →
  `PluginCommandYamlParser.parse` → `SimpleCommandMap.registerAll` に実定義を通した。
  サーバーは起動せず、Server / PluginManager / Plugin をプロキシにした独立 JVM で実行。
- 実出力: `head=hat`、`essentials:head=skull`、アサーション成功。
- SimpleCommandMap は名前空間付き別名を先に保存し、既存の通常別名がある場合は登録を拒否する。
  そのため通常の `/head` は先に登録された **hat**、名前空間付きの別名は後の skull になる。
- 同 jar の Essentials クラスの javap 出力でも、e 接頭辞の抑止条件を確認した。

## 動作と意図的な差分

- 作業台類は upstream の PaperContainerProvider と同じ `openX(null, true)` を使用する。
- disposal は36枠、タイトル「廃棄」の使い捨てインベントリ。
- enderchest は others がなければ引数を無視して自分を開く。他人はオンラインのみ。
  modify がなければクリック全体を禁止する。加えてドラッグも禁止し、upstream の抜け道を塞ぐ。
- hat は主手の全スタックと帽子を交換する。耐久値のある物を拒否し、束縛の呪いを確認する。
  remove 判定の部分一致・大文字小文字の挙動も upstream に合わせる。
- skull は第2引数を「引数がちょうど2個の場合だけ」受取人として扱う。
  所有者指定には**受取人**の skull.others、他人への生成には実行者の skull.spawn.others を見る。
  主手が空なら副手の既存の頭も変更する。名前、64桁テクスチャハッシュ、180文字 Base64 を扱う。
  スキン解決は非同期で行い、アイテムの反映はサーバースレッドで行う。
- 安全上の差分: hat remove / skull 生成でインベントリが満杯なら余りを足元に落とす。
  upstream は Inventories.addItem の戻り値（余り）を無視する。
  skull のスキン取得中に手の物が変わった場合や受取人がログアウトした場合は中止する。
- Essentials 全体の設定依存機能（コマンド料金、jail 制限、disabled-commands、
  direct-hat のインベントリ操作、独自 vanish 判定等）は内製化の対象外。
  プレイヤー検索は Bukkit の UUID / 実名 / 前方一致 / 表示名と canSee に基づく。
  Essentials 固有のキャッシュ・隠蔽状態・タブ補完名設定は使わない。
  enderchest の vanish.interact による検索許可は同じ権限で扱う。
- メッセージは近い日本語で固定。skull のアイテム名は upstream と同じ英語。

回帰テストは別名・権限定義、skull の引数と Base64、hat の素材禁止例外を確認する。
稼働中の検証サーバーや本番での GUI / クライアント操作の確認は行っていない。
