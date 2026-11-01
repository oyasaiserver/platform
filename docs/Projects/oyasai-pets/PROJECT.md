---
title: "OyasaiPets — ペットシステム"
status: active
source: plugins/OyasaiPets/（コードから作成。ゲーム内での確認は未実施）
source_of_truth: "plugins/OyasaiPets/"
related_paths:
  - packages/oyasai-minecraft-main.nix
  - plugins/OyasaiEconomy/
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-10-13"
---

# OyasaiPets

ペットの購入、召喚、育成、収納、死亡後の復活、交配を提供するプラグインです。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-pets/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | <code>plugins/OyasaiPets/</code> |
| 主要コード | <code>src/main/kotlin/me/marzipan/OyasaiPets/OyasaiPetsUnified.kt</code>（プラグイン本体と機能群をまとめたソース）、<code>BigWolfConfig.kt</code>（共通設定） |
| テスト | <code>src/test/kotlin/me/marzipan/OyasaiPets/BigWolfConfigTest.kt</code> と <code>src/test/resources/bigwolf-config-fingerprint.txt</code>。設定の既定値・読込・旧キー・一覧・取得・変更の指紋だけを検証 |
| ビルド | <code>nix develop --command gradle :plugins:OyasaiPets:build</code>。ビルド出力名は <code>OyasaiPets.jar</code> |
| Nix package | <code>packages/oyasai-minecraft-main.nix</code> のパッケージ一覧に <code>oyasaipets</code> がある |
| 実行記述子 | <code>src/main/resources/plugin.yml</code>。メインクラスは <code>me.marzipan.OyasaiPets.BigWolfPlugin</code>。<code>paper-plugin.yml</code> はない |

## 技術仕様

### 構成

- <code>OyasaiPetsUnified.kt</code> にプラグインの起動・停止、コマンド、データ管理、レジストリ、各System・Service・GUI・Listenerをまとめています。セクションコメントで論理ファイル名と役割を示す構成です。
- <code>BigWolfConfig.kt</code> は共通設定の既定値、読み込み、コマンド向け一覧・取得・更新を管理します。種別ごとの能力・移動値は <code>PetRegistry</code> が設定から読み込みます。
- <code>plugin.yml</code> はプラグイン名 <code>OyasaiPets</code>、APIバージョン <code>1.21</code>、必須依存 <code>OyasaiEconomy</code>、コマンド <code>bigwolf</code> とOP限定の <code>bigwolfop</code> を宣言します。別名や公開権限ノードの宣言はありません。
- GradleではPurpur APIとOyasaiEconomyをコンパイル専用依存、Kotlin stdlibを実装依存にしています。実行時にOyasaiEconomyプラグインが必要です。

### 起動からペット操作まで

1. 起動時にOyasaiEconomyの存在と有効状態を調べます。満たさない場合は <code>OyasaiEconomy not found! This plugin requires OyasaiEconomy to work.</code> を記録して本プラグインを無効化します。
2. PersistentDataContainerキーとペットデータ管理を初期化し、共通値・ペット種別値の不足分を補完して設定を保存します。各System、Service、Listenerを登録します。
3. 購入、復活、収納エッグの使用、交配などでペットを生成します。ペットIDと所有者IDを設定してから <code>onPetSpawned</code> を呼び、非定型ペットの独自行動AI・追従管理が参照するレジストリへ登録します。
4. <code>ActivePetRegistry</code> が召喚中エンティティをメモリ内で管理します。エンティティUUIDからエンティティ、ペットID、所有者を参照し、無効エンティティは検索時に遅延削除します。全ワールドの生物スキャンを使いません。
5. JSON保存時の同期先は、アクティブレジストリに登録された同じ所有者のエンティティだけです。名前・レベル・スキル・統計・解放済みパーティクル・バリアントを戻しますが、全情報の同期ではなく、既存エッグも更新しません。通常収納・死亡・放棄では登録を解除します。譲渡は収納エッグを生成して所有者を変更し実体を削除しますが、その場でレジストリ解除はせず、後続検索の遅延清掃に依存します。

プレイヤーコマンドには購入・一覧・収納・復活・履歴・位置・再取得・交配・改名・譲渡・放棄があります。管理側の実装コマンドは <code>version</code>、<code>reload</code>、<code>item</code>、<code>force_store</code>、<code>force_storeall</code>、<code>history</code>、<code>debug_egg</code>、<code>config</code> です。現行実装と使い方は [operator.md](https://github.com/oyasaiserver/docs/blob/main/Projects/oyasai-pets/operator.md) を参照してください。旧資料に記載されていた一部の管理コマンドは実装されていません。

### データ形式と永続化

- SQLiteや外部データベースは使いません。プレイヤーごとのJSONをプラグインデータフォルダー配下の <code>players/&lt;UUID&gt;/</code> に保存します。
- JSONはGsonで整形出力され、ペットID・番号・種別・バリアント・名前・状態・位置・死亡情報・統計・食事レベル・スキル・所有者移転・交配・パーティクル・移動値などを保持します。状態は <code>ALIVE</code>、<code>STORED</code>、<code>DEAD</code> です。
- ファイル名はゼロ埋めした番号、種別、任意のバリアントから作ります（例: <code>001_WOLF.json</code>）。放棄時のJSONコピーは <code>players_archive/&lt;UUID&gt;/</code> に置きます。
- エンティティと収納エッグにはPersistentDataContainerを使います。現行バージョン定数は3ですが、通常購入・復活では番号を書かず、未設定の実体から読む値は1です。通常収納エッグは実体の値を保存し、交配・デバッグ・再取得エッグでは3を書きます。解放時はエッグの値（未設定なら3）を復元します。ペットID、所有者、種別、状態、能力や収納時の情報などが対象です。
- JSONは同期的に直接書き込みます。書き込み失敗は <code>Failed to save pet data for &lt;owner UUID&gt; / &lt;pet ID&gt;: &lt;exception message&gt;</code> の警告を出しますが、メモリ更新を巻き戻さず、プレイヤーへ保存失敗を通知しません。原子的な置換も行いません。
- 読み込み不能なJSONは <code>Failed to load pet data: &lt;file name&gt; - &lt;exception message&gt;</code> の警告とともに読み飛ばされます。
- 保存済みJSONはプレイヤーのデータ参照時に読み込みます。起動時に既存エンティティをワールド全体から走査して再登録する処理はありません。通常の退出・停止処理は召喚中ペットを収納しますが、異常終了でJSON・ワールドエンティティ・エッグに不一致が残る可能性があります。
- 旧設定キー <code>skillbook.costLv1</code>～<code>costLv3</code> は <code>BigWolfConfig.loadFrom</code> 単独では欠けた購入・使用キーそれぞれのフォールバックです。通常起動は <code>ensureDefaultConfig</code> → <code>loadFrom</code> の順で、新キーを既定価格50 / 100 / 150で補完・保存するため、旧価格の自動引き継ぎは行われません。移行時は新キーへ価格を明示します。特定の旧名を持つペットの所有者情報を、持ち主が操作したときに補完する互換処理もあります。コードから一括移行機能は確認できません。

### 生成・復元で情報が一致しない経路

- 購入は実体に性質を抽選してから <code>recordPurchase</code> でJSONを作りますが、JSONの性質は既定の定型です。交配も能力倍率・性質・初期レベルを実体に設定してから <code>recordBreeding</code> でJSONを作り、JSON側は倍率1.0・定型・レベル0です。生成時に実体の全情報をJSONへ転写せず、収納・死亡などで保存するまでは履歴・バックアップが実体と異なり得ます。
- <code>createRecoveredStoredPetItem</code> は通常の <code>createStoredPetItem</code> と異なり、速度・ジャンプ倍率、性質、選択中パーティクル、ホバリング状態を保存しません。解放では倍率1.0・定型・エフェクトなし・ホバリングOFFに戻り得ます。<code>markAsAlive</code> のJSON→実体同期にもこれらの項目は含まれません。
- 解放・復活は <code>onPetSpawned</code> で登録した後に性質を復元します。<code>ActivePetRegistry.register</code> が非定型判定を登録時にキャッシュし、<code>ChildAISystem</code> はそのキャッシュを参照するため、表示・育成確率は非定型でも独自行動の対象外になり得ます。独自行動は年齢や購入・交配の別に関係なく登録済み非定型ペットが対象で、生成時は成体化します。<code>spawnAiEnabled</code> の通常AIとは別です。

根拠は <code>OyasaiPetsUnified.kt</code> の <code>recordPurchase</code> / <code>recordBreeding</code>、<code>PetSynchronizer</code>、<code>PetStorageService</code>、<code>PetReviveService</code>、<code>ActivePetRegistry</code> / <code>ChildAISystem</code> です。実機での再現は未確認です。

### 同期・非同期とイベント

- コマンド処理、Bukkitイベント、JSON読書き、OyasaiEconomy API呼び出しは呼び出し元のBukkitスレッド上で実行されます。JSON処理やOyasaiEconomy連携を非同期化するコードは確認できません。
- Bukkitのスケジューラーを使い、ペット追従、非定型ペットの独自行動AI、騎乗操作、スキル・効果の時間制御を行います。追従は5秒ごとに距離を確認し、同じワールドで20ブロックを超えた場合に飼い主付近へ移動します。
- 主なListenerはプレイヤー・エンティティの操作、GUIのクリックと終了、死亡、退出、騎乗・降車、釣り、アイテム落下、テレポート、ダメージ、ショップ対象エンティティとの操作を扱います。
- 騎乗中の飛行ペット制御では、AIを単純に停止するのではなく移動・飛行属性を制御し、降車時に元の値を戻す処理があります。

### 外部API・依存

- OyasaiEconomyApi を ServicesManager から取得し、通貨ID `token` で残高確認・消費・返金を行う。受付がfalseなら購入を中止する。
- OyasaiEconomyへの返金処理が例外になった場合はログに記録します。呼び出し元の処理が返金の成否を確認できない箇所があるため、成功を断定できません。
- ビルドはPurpur API、Kotlin stdlib、OyasaiEconomyのGradleプロジェクトを参照します。plugin.ymlでの実行時依存宣言はOyasaiEconomyのみです。
- 外部の保護プラグインを照会する連携コードや、他プラグイン向けのOyasaiPets公開APIは確認できません。ショップ用の印を持つエンティティとの操作を処理するコードはありますが、現行コマンドにショップ作成・削除処理はありません。

### テストが保証する範囲

<code>BigWolfConfigTest</code> は設定の既定値とキー一覧、全パスを使った設定読込、スキル旧キーの互換読み込み、アイテムショップ価格の参照、設定名からの取得、無効値・有効値での更新を出力指紋と比較します。期待値が変わると差分用ファイルも出力します。

購入、ポイント処理、生成・収納、死亡・復活、交配、譲渡、イベント、JSON保存失敗、PersistentDataContainer、GUI、追従・騎乗、外部プラグイン連携を検証する自動テストはありません。この文書作成時にビルドやテストは実行していません。

### 既知の制限・注意点

- <code>breed.maxCount</code> は設定・読込されていますが、交配処理で上限として参照されません。異なる種類の親を選べ、子の種類は先に選んだ親にそろいます。
- <code>traits.atypicalAffectionBonus</code> は設定・読込されていますが、利用箇所を確認できません。
- <code>/bigwolfop config mob</code> は速度・ジャンプ・スケールだけを更新し、<code>maxHealth</code> は更新できません。値域の検証もありません。
- アイテムショップ価格6項目は <code>BigWolfConfig.applyDefaultsTo</code> で起動時に補完・保存されますが、管理コマンドの一覧・取得・更新には含まれません。補完対象外というコードコメントより実処理を正とします。
- ブラシ・おやつだけが <code>tryPlayLevelUp</code> を呼びます。おもちゃは遊んだ回数を加算しますが、レベルアップ抽選はありません。親密度の保存・加算処理もありません。
- 購入確認・ケア用品などのGUIには上側スロット境界の検査がなく、所持品側の対応アイテムでも購入・課金などが処理され得ます（<code>PetInventoryListener.onInventoryClick</code>、<code>PetShopGuiListener</code>）。一覧・詳細GUIは <code>rawSlot</code> の範囲を検査します。
- 譲渡は複数データの更新を一括コミットするトランザクションではありません。途中失敗時の自動ロールバックを保証しません。
- JSON書き込み失敗時にもキャッシュ更新を維持し、保存済みデータとの不一致が生じる可能性があります。
- 収納エッグの重複検査は同じペットIDがアクティブレジストリに存在するか、再取得時に所持品・エンダーチェストを確認する範囲です。あらゆる複製や保存失敗を防ぐ仕組みではありません。
- 起動時の全ワールド照合がないため、異常終了後にJSONがALIVEのままでもエンティティがレジストリへ載らないことがあります。
- 「保護されています」という召喚失敗表示はありますが、外部保護プラグインを照会する実装はありません。表示文言から保護の原因を特定できません。

### 判断の記録

- 2026-10-13: 外部レビューの指摘を起動順序・生成・保存・復元・イベントの呼び出し元までコードで照合し、3文書を訂正した。設定の互換読込テストを起動時移行の保証とみなさず、再取得エッグを通常収納エッグと同等と説明しない。ゲーム内検証は未実施。
- 2026-03-08: ActivePetRegistryへの登録前に、エンティティへペットIDと所有者IDを設定する。登録処理はペットIDがないエンティティを無視し、所有者別の参照情報も登録時に作るため、この順序を崩さない。
- 2026-03-08 の既存記録を現行コードと照合: PUFFERFISHは現在の公式ペット一覧に含まれない。アルマジロは生成時と騎乗中に丸まり状態を解除する。空中で降車したオウムには降下タスクを設定し、着地時などに終了する。
- ActivePetRegistryは召喚中エンティティを直接保持し、全ワールド走査の代わりに使う。起動時に既存エンティティを再構成する仕組みは別途存在しないため、レジストリの設計とクラッシュ後の復旧範囲を混同しない。
- 飛行ペットの騎乗制御について、AI停止だけで説明する古い記述は現行ソースと一致しない。搭乗時に移動・飛行属性を制御し、降車時に復元する処理を正とする。

## 2026-10-25 経済APIの統合

経済連携は `io.oyasai.economy.api.OyasaiEconomyApi` を ServicesManager から取得する。金額はLongで、通貨IDを引数に渡す。円とトークンに別のAPIサービスは使わない。参照は既存口座だけを扱い、APIによる口座の自動作成はない。詳細は [OyasaiEconomy](../oyasai-economy/PROJECT.md) を参照。
