OyasaiPets リファクタリング計画（関心の分離 / 単一責務 / 階層化）

目的
- 関心の分離: ドメイン / 永続化 / コマンド / リスナー / ゲームロジックを明確に分割
- 単一責務: 1ファイル=1責務に近づける
- 階層化: API層(コマンド/イベント) → ユースケース層(サービス) → ドメイン層 → インフラ層(Bukkit/PDC/Config) の依存方向を固定
- 機能単位の整理: スポーン/収納/復元/ショップ/交配/フェッチ/GUI などの機能ごとにユースケースを分ける
- シンプル化: 現状ロジックを「最小の状態・最小の分岐」で再現できるかを常に検証

現状評価（観測できる範囲）
1) エントリポイントが巨大
- BigWolf.kt が初期化・DI・コマンド・イベント登録・ユースケース組み立てまで全て保持。
- 変更影響範囲が広く、修正のたびに依存関係の把握が必要。

2) サービスの責務が肥大
- PetStorageService は「PDCマッピング」「アイテム生成」「スポーンと初期化」「UI向け表示生成」を一手に持ち、責務過多。
- 例: createStoredPetItem / restorePetFromItem / setupPetEntity でドメイン変換・UI・ゲーム挙動が混在。

3) PDCフィールドの読み書きが散在
- ST ORED_* の読み書きが複数箇所に直書き。
- 仕様変更時の影響が大きく、バグ混入率が高い。

4) 速度・AI・属性の初期化が一箇所に集中
- setupPetEntity でスケール・速度・AI・体力などが混ざっている。
- スポーン初期化の責務を分離しないと調整が難しい。

5) 依存方向が不明確
- services/systems/listeners の境界はあるが、責務や依存方向が明確に固定されていない。
- 「イベント→サービス→ドメイン→インフラ」のルールを定義する必要あり。

冗長/未使用の調査方針
- 未使用の関数・クラス・古い設定キーを抽出
- 直近の警告（未使用メソッド、実験APIなど）を一覧化
- PDCキーやconfigキーで使われていないものを検出
- /backup/ や旧ファイル群はビルド対象外なら削除候補にマーク（管理ルール次第）

リファクタリング方針（階層化）
Layer 1: API/Entry
- BigWolf.kt の責務縮小。初期化を Bootstrap/ModuleRegistry に移管。
- コマンド / リスナー登録のみ残す。

Layer 2: UseCase
- Service群を用途別に分割。
- 例: PetStorageUseCase, PetSpawnUseCase, PetRestoreUseCase など。

Layer 3: Domain
- PetEntity/PetData の変換、ステータス計算、命名などはドメインへ。
- PDC や Bukkit への依存を排除。

Layer 4: Infra
- PDCマッピング / Bukkitエンティティ操作 / Config読み書きを集約。
- DTO/Mapper を導入し「PDC ↔ Domain」を一元化。

機能単位の整理案（機能→責務）
1) スポーン/復元
- PetSpawnUseCase: スポーン条件・安全位置・初期化の指揮
- PetSpawnInitializer: AI/属性/見た目など初期化のみ
- PetPdcMapper: 保存済みデータの復元/保存

2) 収納/回収
- PetStorageUseCase: 収納の入口/出口のオーケストレーション
- PetItemFactory: アイテム生成・Lore構築

3) ショップ
- PetShopUseCase: 購入/確認/経済処理のオーケストレーション
- PetShopGuiService: UI表示のみ

4) 交配
- BreedUseCase: 交配条件・コスト・結果生成
- BreedGuiService: UI表示のみ

5) フェッチ/遊び
- PlayUseCase: フェッチ/風船など遊び全体の制御
- FetchSystem/JumpTask: 物理挙動の最小ロジックに限定

6) クエリ/履歴
- PetQueryUseCase: 検索/履歴表示/ページング

シンプル化のチェック観点
- 状態数を最小にできるか（phaseを減らせるか）
- 同じ判定が複数箇所にないか（共通化 or 1箇所へ集約）
- 例外処理やタイムアウトが多すぎないか
- 速度・AI・向きの制御が分散していないか
- 目的が同じならデータ構造を統一できるか

移行計画（段階的）
Phase 1: 低リスク
- PDCマッピングの抽出 (PetPdcMapper)
- PetItemFactory の抽出
- setupPetEntity の初期化処理を PetSpawnInitializer に移動

Phase 2: 中リスク
- PetStorageService をユースケースに分割
- BigWolf.kt の Bootstrap化
- コマンド層からサービス直参照を排除

Phase 3: 高リスク
- domainモデルの整理
- API層とユースケース層の依存方向固定
- 既存のシステム間の依存整理

検証/回帰確認
- スポーン/収納/復元系の動作テスト
- 交配、GUI、ショップ、フェッチ系の動作テスト
- configキー互換の検証（旧キーも動作するか）

成果物
- 分割後のパッケージ構成図
- 責務一覧表（ファイル→責務）
- マイグレーション手順書

次の具体アクション
1) PetStorageService の責務分解マッピングを作成
2) PDCの読み書きを PetPdcMapper に抽出
3) setupPetEntity の初期化を PetSpawnInitializer に移動
4) BigWolf.kt を Bootstrap化

================================================================================
新機能: ペットの性質システム（定型/非定型）
================================================================================

概要
- ペットに「定型(typical)」と「非定型(atypical)」の2種類の性質を追加
- 非定型はレアで、育成メリットがある
- 非定型には子供っぽいAI挙動を内蔵可能

性質の決定確率
1) 購入時・野生スポーン時
   - 定型: 93%
   - 非定型: 7%

2) 交配時（親の性質による確率変動）
   - 両親とも定型: 非定型 7%
   - 片親が非定型: 非定型 15%
   - 両親とも非定型: 非定型 35%

非定型のメリット（案）
- レベルアップ確率が1.5倍
- 遊んだ時の親密度上昇が1.3倍
- 特殊パーティクルエフェクト（ハートや星など）
- 名前にマーク表示（例: ★マーク）

非定型の子供AI（案）
- 動きが活発（ランダムにジャンプ、周囲を駆け回る）
- 飼い主に甘える行動（近くに寄ってくる頻度が高い）
- 好奇心旺盛（アイテムや他のMOBに反応）
- 鳴き声の頻度が高い

データ構造
- PDCキー: `pet_temperament` (String: "typical" or "atypical")
- PetExtensions に拡張プロパティ追加: `var LivingEntity.temperament: String`
- 収納アイテムにも保存: `STORED_TEMPERAMENT`

実装箇所
1) 購入時の性質決定
   - PetShopGuiService / BreedingSystem で購入・スポーン時に確率判定

2) 交配時の性質遺伝
   - BreedingSystem.executeBreeding で親の性質を参照して子の性質を決定

3) メリットの適用
   - PetInteractionService でレベルアップ判定時に性質を参照
   - FetchSystem で遊び判定時に性質を参照

4) 子供AIの実装
   - PetControlSystem または新規 ChildAISystem でタスクベースの挙動追加
   - 騎乗中は無効化、自由移動時のみ発動

5) UI表示
   - ペットステータスGUIに性質を表示
   - 収納アイテムのLoreに性質を表示
   - 非定型は名前に★マークを追加

設定（config.yml）
temperament:
  atypicalBaseChance: 0.07        # 基本確率 7%
  atypicalOneParentChance: 0.15   # 片親非定型 15%
  atypicalBothParentChance: 0.35  # 両親非定型 35%
  atypicalLevelUpBonus: 1.5       # レベルアップ確率倍率
  atypicalAffectionBonus: 1.3     # 親密度上昇倍率
  childAiEnabled: true            # 子供AI有効化

子供AIの技術検討
- Minecraftのデフォルト子供MOB（Baby）のAIはエンティティのage属性で制御
- ペットは成体のまま子供っぽい挙動を追加するため、カスタムタスクで実装
- BukkitのGoalAPIまたはタスクスケジューラで定期的に行動を発火
- 候補行動:
  - ランダムジャンプ（5-10秒間隔）
  - 飼い主追従（通常より近い距離を維持）
  - 周囲探索（ランダム方向に短距離移動）
  - アイドル時のアニメーション（首振り、回転など）

移行計画
Phase 0: データ構造追加
- PDCキー追加、PetExtensions拡張、BigWolfKeys追加
- 既存ペットはデフォルトで「定型」として扱う

Phase 1: 性質決定ロジック
- 購入時・交配時の確率判定を実装
- 収納/復元で性質を保存・復元

Phase 2: メリット適用
- レベルアップ・親密度計算に性質を反映
- UI表示（名前マーク、ステータスGUI、Lore）

Phase 3: 子供AI
- ChildAITaskを実装
- 非定型ペットに定期的に行動を発火
- 騎乗中・遊び中は無効化

検証項目
- 購入時の確率が正しいか（100回テストで約7%）
- 交配時の親の性質で確率が変わるか
- レベルアップ確率の差が体感できるか
- 子供AIが自然に見えるか
- 収納・復元で性質が保持されるか
