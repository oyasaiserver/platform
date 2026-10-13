---
date: 2026-10-13
record_type: reference
source: plugins/OyasaiPets/（コードから作成。ゲーム内での確認は未実施）
---

# OyasaiPets の運用（運営向け）

プレイヤー向けの操作は [player.md](player.md)、実装と開発時の入口は [PROJECT.md](PROJECT.md) を参照してください。

## 権限と実行者

| 操作 | 既定 | 注意 |
|---|---|---|
| <code>/bigwolf</code> | コマンド定義に権限指定なし | プレイヤー専用です。コンソールから実行すると「プレイヤーのみ可能です。」を返します |
| <code>/bigwolfop</code> | OP | コマンド定義に <code>permission: op</code> があります。管理コマンドもプレイヤー専用です |
| <code>force_store</code> と <code>force_storeall</code> | OP | コマンド定義のOP制限に加えて、処理内でもOPか確認します |

独自の権限ノードは定義されていません。運営向け管理コマンドをコンソールから使うこともできません。

## 管理コマンド

すべてOPのプレイヤーがゲーム内で実行します。

| コマンド | 内容・制限 |
|---|---|
| <code>/bigwolfop version</code> | プラグイン名とバージョンを表示 |
| <code>/bigwolfop reload</code> | 設定を再読込し、共通設定とペット種別設定を適用。表示は <code>BigWolf: config reloaded!</code> |
| <code>/bigwolfop item &lt;food&vert;brush&vert;treat&vert;heal&vert;toys&vert;skillbook&vert;skillbook1&vert;skillbook2&vert;skillbook3&vert;particle&vert;all&gt;</code> | 自分に試験用アイテムを付与。インベントリに入らない分の扱いはこの処理で個別に補償されません |
| <code>/bigwolfop force_store</code> | 視線の先15ブロック以内にいる対象を強制収納。OyasaiPets のIDと所有者情報を持つ生物が対象。エッグは実行者の所持品へ、入りきらない分は足元へ |
| <code>/bigwolfop force_storeall &lt;プレイヤー名&gt;</code> | 指定所有者のアクティブレジストリに載っているペットを強制収納。作成したエッグは対象者でなく実行者へ渡り、入りきらない分は実行者の足元へ落ちる。ロード済みが0匹なら何もしない |
| <code>/bigwolfop history &lt;プレイヤー名&gt; [ページ]</code> | 指定プレイヤーの履歴を表示。1ページ10匹 |
| <code>/bigwolf detail &lt;番号&gt; &lt;プレイヤー名&gt;</code> | OPは通常コマンドから他人の詳細を表示できる |
| <code>/bigwolfop debug_egg &lt;mob&gt; [key=value ...]</code> | 指定した生物のデバッグ用収納エッグを作成し、実行者のデータにもペットとして記録 |
| <code>/bigwolfop config [list]</code> | 管理コマンドで扱える共通設定を表示 |
| <code>/bigwolfop config get &lt;key&gt;</code> | 対象の共通設定を表示 |
| <code>/bigwolfop config set &lt;key&gt; &lt;value&gt;</code> | 対象の共通設定を保存 |
| <code>/bigwolfop config mob &lt;mob&gt; [list&vert;get &lt;key&gt;&vert;set &lt;key&gt; &lt;value&gt;]</code> | ペット種別ごとの移動・サイズ設定を表示または保存 |

デバッグ用エッグの書式は、<code>/bigwolfop debug_egg &lt;mob&gt; [variant=&lt;name&gt;] [level=&lt;n&gt;] [skill=&lt;0-3&gt;] [unlocked=&lt;0-3&gt;] [speed=&lt;倍率&gt;] [jump=&lt;倍率&gt;] [gen=&lt;世代&gt;] [temperament=&lt;typical|atypical&gt;]</code> です。レベルは整数で読めた場合に0～最大食事レベル、スキル段階と解放段階は整数で読めた場合に0～3の範囲へ丸められます。読めない値は既定値の0になります。速度・ジャンプは小数として読めない場合に1.0、世代は整数として読めない場合に0になります。速度・ジャンプに値域検証はありません。temperamentは省略時だけtypicalになり、指定値の検証はありません。種別は生存する生物であれば公式ペット以外も受け付けます。

### 管理コマンドの境界

- 他人の履歴の行クリックは <code>/bigwolf detail &lt;番号&gt;</code> を実行し、実行者自身の同番号を探します。他人の詳細はプレイヤー名付きで直接実行してください。
- <code>force_store</code> は視線の先の生物から必要なID・所有者情報を読みます。単なる見た目や名前だけでは対象になりません。
- <code>force_storeall</code> は保存ファイルを検索して召喚体を探す機能ではなく、実行時メモリに登録された対象だけを収納します。オフラインの所有者でも登録済みの生物があれば対象になりえます。
- 旧資料にあるショップ作成・削除、AI生成、速度リセット、性能デバッグのコマンドは現在のコマンド処理にはありません。
- 通常コマンドと管理コマンドはいずれもプレイヤー専用です。サーバーコンソールから実行する仕組みはありません。

## 設定と既定値

正本はプラグインに同梱される <code>config.yml</code> です。起動時に未定義の共通キーと移動・サイズのキーを補完して保存します。共通値は <code>/bigwolfop config</code> からも変更できます。

### 共通設定

| 設定パス | 既定値 | 用途 |
|---|---:|---|
| <code>economy.foodPointCost</code> | 10 | フードによる育成1回のポイント |
| <code>shop.defaultCost</code> | 100 | ショップの既定購入額 |
| <code>skillbook.shopCostLv1</code> / <code>skillbook.shopCostLv2</code> / <code>skillbook.shopCostLv3</code> | 50 / 100 / 150 | スキルブックの購入額 |
| <code>skillbook.useCostLv1</code> / <code>skillbook.useCostLv2</code> / <code>skillbook.useCostLv3</code> | 50 / 100 / 150 | スキルブックを使うときのポイント |
| <code>skillbook.costLv1</code> / <code>skillbook.costLv2</code> / <code>skillbook.costLv3</code> | 50 / 100 / 150 | 読込関数単独では新キーがないときの互換用。通常起動では先に新キーを既定値で補完するため、旧価格の自動引き継ぎは保証されない |
| <code>revive.cost</code> | 50 | 死亡ペットの復活額 |
| <code>recover.cost</code> | 50 | 収納エッグの再取得額 |
| <code>items.healAmount</code> | 10 | ヒールアイテムの回復量 |
| <code>itemshop.petFoodCost</code> | 20 | ペットフードの購入額 |
| <code>itemshop.petBrushCost</code> | 15 | ブラシの購入額 |
| <code>itemshop.petTreatCost</code> | 15 | おやつの購入額 |
| <code>itemshop.healPotionCost</code> | 30 | ヒールポーションの購入額 |
| <code>itemshop.particleCost</code> | 200 | パーティクル結晶1個の購入額 |
| <code>itemshop.toyCost</code> | 50 | おもちゃの購入額 |
| <code>pets.maxFoodLevel</code> | 50 | 最大食事レベル |
| <code>pets.spawnAiEnabled</code> | true | 生成したペットのAI |
| <code>pets.freeRoamSpeedMultiplier</code> | 0.5 | 自由移動中の陸上カテゴリの速度倍率。水中カテゴリには適用されない |
| <code>pets.freeRoamFlyingSpeedMultiplier</code> | 0.5 | 自由移動中の飛行カテゴリの移動・飛行速度倍率 |
| <code>play.levelUpChance</code> | 0.05 | ブラシ・おやつによるレベルアップ確率。おもちゃには適用されない |
| <code>play.levelUpMaxLevel</code> | 10 | ブラシ・おやつで上げられるレベル上限 |
| <code>breed.minLevel</code> | 10 | 交配可能な最低レベル |
| <code>breed.cost</code> | 100 | 交配額 |
| <code>breed.maxCount</code> | 3 | 設定上の1組あたりの子ども上限。現行処理では強制されない |
| <code>breed.randomMin</code> / <code>breed.randomMax</code> | 0.9 / 1.1 | 遺伝能力値の乱数幅 |
| <code>breed.mutationChance</code> / <code>breed.mutationBoost</code> | 0.10 / 0.15 | 突然変異確率と能力上昇幅 |
| <code>breed.genBonusPerGen</code> / <code>breed.genBonusMax</code> | 0.02 / 0.2 | 世代ごとの能力ボーナスと上限 |
| <code>breed.statCap</code> | 1.5 | 速度・ジャンプ力の倍率上限 |
| <code>breed.bonusLevelPerGen</code> / <code>breed.bonusLevelMax</code> | 1 / 5 | 世代による初期レベル加算と上限 |
| <code>breed.variantWeights.parent</code> / <code>breed.variantWeights.other</code> | 7 / 3 | 親・その他バリアントの抽選重み |
| <code>traits.atypicalBaseChance</code> | 0.07 | 非定型の基本発生確率 |
| <code>traits.atypicalOneParentChance</code> | 0.15 | 片親が非定型の場合の発生確率 |
| <code>traits.atypicalBothParentChance</code> | 0.35 | 両親が非定型の場合の発生確率 |
| <code>traits.atypicalLevelUpBonus</code> | 1.5 | 非定型のレベルアップ確率倍率 |
| <code>traits.atypicalAffectionBonus</code> | 1.3 | 設定項目。現行コード内に利用箇所を確認できない |
| <code>traits.childAiEnabled</code> | true | 登録された非定型ペットの独自行動。年齢や購入・交配の別を問わず対象で、通常の生物AIを設定する spawnAiEnabled とは別 |

### コード内で固定された上限・待ち時間

- 同時召喚数は3匹です。<code>pets.maxFoodLevel</code> のような設定項目ではなく、コード内の定数です。
- スキルLv.1・Lv.2の再使用待ち時間はプレイヤー単位で共有する5秒です。ペットの乗り換えでも続きます。Lv.3の切替スキルはこの待ち時間の判定を通りません。設定ファイルから変更する項目はありません。

### ペット種別ごとの既定値

各行は <code>pets.&lt;mob&gt;</code> 配下の <code>maxHealth</code>、<code>baseSpeed</code>、<code>maxSpeed</code>、<code>jumpPower</code>、<code>scaleMin</code>～<code>scaleMax</code> の順です。<code>maxHealth: -1</code> は生物本来の最大体力を使います。

| 種別 | maxHealth | baseSpeed | maxSpeed | jumpPower | scaleMin～scaleMax |
|---|---:|---:|---:|---:|---:|
| wolf | -1.0 | 0.6 | 1.2 | 0.6 | 1.5～2.5 |
| cat | -1.0 | 0.5 | 1.0 | 0.8 | 2.0～3.0 |
| fox | -1.0 | 0.5 | 1.0 | 0.7 | 1.5～2.5 |
| rabbit | 20.0 | 0.4 | 0.8 | 1.0 | 2.5～3.25 |
| panda | -1.0 | 0.4 | 0.8 | 0.4 | 1.25～1.5 |
| polar_bear | -1.0 | 0.5 | 1.0 | 0.4 | 1.25～1.5 |
| armadillo | -1.0 | 0.4 | 0.8 | 0.5 | 1.5～2.25 |
| dolphin | -1.0 | 0.5 | 1.0 | 0.5 | 1.5～2.2 |
| axolotl | -1.0 | 0.5 | 1.0 | 0.5 | 1.5～2.0 |
| frog | -1.0 | 0.4 | 0.8 | 1.2 | 2.0～2.8 |
| turtle | -1.0 | 0.3 | 0.7 | 0.5 | 1.25～1.75 |
| parrot | -1.0 | 0.5 | 1.0 | 0.5 | 2.0～3.0 |
| chicken | 20.0 | 0.4 | 0.9 | 0.5 | 1.5～2.5 |
| bee | 16.0 | 0.5 | 1.0 | 0.5 | 1.25～1.75 |
| allay | -1.0 | 0.5 | 1.0 | 0.5 | 1.5～2.0 |

## 設定変更時の注意

- <code>/bigwolfop config list</code>、<code>get</code>、<code>set</code> で扱える共通設定名は設定パスではなく <code>BigWolfConfig</code> の項目名です。主要な名前は <code>foodPointCost</code>、<code>defaultShopCost</code>、<code>reviveCost</code>、<code>recoverCost</code>、<code>breedCost</code> などです。
- スキルブックの新しい項目名は <code>skillBookShopCostLv1</code>～<code>skillBookShopCostLv3</code>、<code>skillBookUseCostLv1</code>～<code>skillBookUseCostLv3</code> です。旧 <code>skillBookCostLv1</code>～<code>skillBookCostLv3</code> も受け付け、その場合は購入額・使用額を同じ値にします。
- アイテムショップ価格6項目は <code>config.yml</code> にはありますが、管理コマンドの一覧・取得・変更対象には含まれません。ファイルで変更したあと <code>/bigwolfop reload</code> を実行してください。
- <code>/bigwolfop config mob &lt;mob&gt;</code> で一覧・変更できるのは <code>baseSpeed</code>、<code>maxSpeed</code>、<code>jumpPower</code>、<code>scaleMin</code>、<code>scaleMax</code> です。<code>maxHealth</code> はファイルでのみ指定できます。
- 数値の型は確認しますが、負数・確率範囲・速度範囲などの値域検証はありません。変更前に妥当な値を確認してください。
- config.ymlのコメントは freeRoamSpeedMultiplier を陸上・水中向けと説明していますが、現行コードでは水中カテゴリは1.0固定で、この値を使いません。
- <code>config_example.yml</code> は同梱の既定値と食い違う古い例を含みます。設定の正本は <code>src/main/resources/config.yml</code> です。
- 設定に存在しても、現行コード内で参照されない値があります。少なくとも <code>breed.maxCount</code> は交配上限として適用されず、<code>traits.atypicalAffectionBonus</code> の利用箇所は確認できません。

## データの保存とバックアップ

- 個々のペットはプラグインのデータフォルダー配下の <code>players/&lt;UUID&gt;/&lt;番号&gt;_&lt;種類&gt;[_&lt;variant&gt;].json</code> に保存されます。形式はJSONで、ペットID、番号、種類、状態、名前、位置、食事レベル、スキル、能力値、履歴などを保持します。
- 放棄したペットのJSONは <code>players_archive/&lt;UUID&gt;/</code> にコピーされます。放棄の取り消しや通常データへの自動復元はありません。
- エンティティと収納エッグにも所有者・ペットID・状態などを保持します。JSONだけを戻してもワールド上の実体との整合が戻るとは限りません。
- 定期バックアップでは設定と <code>players/</code>、<code>players_archive/</code> を保存してください。稼働中ペットのエンティティ情報はワールドデータ側にもあるため、復元時はワールドとJSONを同じ時点にそろえてください。
- 保存は同期的なファイル書き込みです。書き込み失敗時は <code>Failed to save pet data for &lt;owner UUID&gt; / &lt;pet ID&gt;: &lt;exception message&gt;</code> の警告を出しますが、プレイヤーへ失敗を知らせず、メモリ上の更新も巻き戻しません。JSON書き込みが原子的である保証もありません。
- JSON読み込みに失敗したファイルは <code>Failed to load pet data: &lt;file name&gt; - &lt;exception message&gt;</code> の警告を出して読み飛ばします。バックアップから戻す前に元ファイルを退避し、該当プレイヤーの履歴とエッグを照合してください。
- 購入直後のJSONでは性質が定型、交配直後では能力倍率1.0・性質が定型・食事レベル0の既定値で記録され、実体の抽選結果や初期レベルと一致しない場合があります。収納・死亡などで実体の情報を保存するまで、履歴表示やJSONバックアップを実体の全情報とみなさないでください。

### 再取得・復元の制限

- <code>recover</code> の重複検査は所持品とエンダーチェストだけです。通常チェストなどの旧エッグは検査せず、残っていても再取得できます。解放時の重複検査もアクティブレジストリ上の同じIDに限られます。再取得前に他の保管場所も確認してください。
- 再取得エッグには速度倍率・ジャンプ倍率・性質・選択中パーティクル・ホバリング状態を保存しません。解放すると倍率1.0・定型・エフェクトなし・ホバリングOFFに戻り得ます。JSONにこれらの値が残っていても、解放時に全項目をJSONから戻す処理はありません。
- 収納エッグからの解放と死亡後の復活は、性質の復元前にレジストリへ登録します。登録時に非定型判定をキャッシュするため、表示や育成確率が非定型でも、独自行動AIでは定型として扱われ得ます。

根拠は <code>OyasaiPetsUnified.kt</code> の <code>createRecoveredStoredPetItem</code>、<code>restorePetFromItem</code>、<code>PetReviveService</code>、<code>ActivePetRegistry.register</code> です。詳細は [PROJECT.md](PROJECT.md) を参照してください。

## 起動・停止・移行・障害時

- 実行時依存のTokenManagerが存在しない、または無効な場合、<code>TokenManager not found! This plugin requires TokenManager to work.</code> を記録して本プラグインを無効化します。トークン連携なしでの起動はできません。
- 起動時に設定の既定値を補い、ペットデータ用フォルダーを用意します。保存済みJSONを読み込んでも、既存のワールドエンティティを全走査してアクティブレジストリへ再登録する処理はありません。
- プレイヤー退出時はその人の召喚中ペットを収納します。通常停止時はオンラインプレイヤーのペットを収納してから、AI・騎乗制御タスクとレジストリを片付けます。強制終了やクラッシュはこの処理を通りません。
- <code>BigWolfConfig.loadFrom</code> 単独では、旧設定の <code>skillbook.costLv1</code>～<code>costLv3</code> を、欠けている購入額・使用額それぞれの読込既定値に使います。しかし通常起動では、その前に新キーを既定価格50 / 100 / 150で補完・保存するため、旧キーだけをカスタマイズした価格は引き継がれません。移行前に旧価格を確認し、新しい購入額・使用額を明示してください。管理コマンドの旧 <code>skillBookCostLv1</code>～<code>skillBookCostLv3</code> を変更すると新旧三つのキーを同じ値で保存します。
- 旧ペット所有者情報は、持ち主が操作した際に、名前がプレイヤー名に続く「の大」または「's Big 」で始まるペットに限って遅延補完する処理があります。全プレイヤーのデータを一括移行する仕組みは確認できません。
- PDCの現行バージョン定数は3ですが、通常購入・復活ではバージョンを書きません。未設定の実体から読む値は1で、通常収納エッグはその値を保存します。交配・デバッグ・再取得エッグでは3を書き、解放時はエッグの値（未設定なら3）を復元します。一括変換を行う一般的なPDC移行処理は確認できません。古いワールドやエッグを引き継ぐ場合は、複製環境で確認してから本番へ適用してください。
- 譲渡は2段階確認ですが、複数のJSON更新とエンティティ・エッグ更新をまとめてロールバックするトランザクションではありません。処理中に失敗した疑いがあれば、同じ譲渡を繰り返す前にログ、双方のJSON、所持エッグを確認してください。
- 購入・復活などの失敗後にポイントを返す処理が例外になっても、返金失敗はログへの記録にとどまります。成功を断定せず、TokenManagerとペットデータの両方を確認してください。

## 守られる範囲・連携

- 購入確認・ケア用品ショップなどの一部GUIは、上側GUI内のクリックかを検査しません。対応する種類のアイテムを自分の所持品側でクリックしても購入・課金などへ進み得るため、開いている間は所持品側を操作しないでください。ペット一覧・詳細GUIには上側スロットの境界検査があります。
- 咆哮は使用者・発動ペット・その同乗者を除く周囲の生物へノックバックと2ダメージを与える処理です。敵対性や所有者の判定がなく、他プレイヤーや他ペットも対象になり得ます。実際のダメージ結果は無敵フラグや他のイベント処理に左右されます。
- 生成時のペットエンティティにはBukkitの無敵フラグが設定され、通常の遠距離デスポーンも無効化されます。全ダメージ源・全サーバー環境での挙動はゲーム内で確認していません。
- 乗る操作は所有者に限定され、別の人が乗ろうとすると「このペットには飼い主しか乗れません。」を返します。ペットの操作画面や育成処理も所有者確認を行います。
- ワールドの領域保護を提供するプラグインではありません。外部保護プラグインの領域を照会して召喚・解放を許可する連携も確認できません。表示された保護メッセージだけでは拒否元を特定できません。
- アクティブペット数の上限は3匹です。購入・復活・交配時などに枠を確認します。
- ペット追従は同一ワールド内で20ブロックを超えて離れたとき、5秒ごとに行います。騎乗中や別ワールドではこの追従条件に入りません。
- <code>この場所では召喚できません（保護されています）。</code> と <code>この場所ではペットを解放できません（保護されています）。</code> という表示はありますが、コード上でWorldGuardなどの外部保護プラグインを照会する処理は確認できません。この文言だけでは実際の保護範囲や拒否元は特定できません。
- TokenManagerのポイント情報を購入、育成、スキル、復活、回収、交配などで参照・消費します。消費APIがfalseを返すと処理を中止します。残高取得失敗は <code>ポイント情報の取得に失敗しました。</code>、消費時例外は <code>ポイント処理中にエラーが発生しました。</code>、消費拒否は <code>ポイント処理を完了できなかったため中止しました。時間をおいて再度お試しください。</code> を返します。
- <code>plugin.yml</code> の依存宣言はTokenManagerだけです。OyasaiPets側から他プラグイン向けの公開APIや保護連携は確認できません。ショップ用エンティティを判定する処理はありますが、現行コードにはショップ作成・削除コマンドがありません。

本書はコードから作成し、ゲーム内・運用環境での確認は行っていません。
