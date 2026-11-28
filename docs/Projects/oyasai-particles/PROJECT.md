---
title: "OyasaiParticles — 個人向けパーティクル・疑似天候・環境音エリア"
status: active
source_of_truth: "plugins/OyasaiParticles/"
related_paths:
  - packages/oyasai-plugins.nix
  - packages/oyasai-minecraft-main.nix
project_kind: plugin
runtime_kind: paper-plugin
minecraft_related: true
last_validated: "2026-11-26"
---

# OyasaiParticles

ワールド全体の設定を変更せず、指定した範囲（四角・円柱）に入ったプレイヤー個人にだけパーティクル、疑似天候、個人時間、環境音を表示・再生する Purpur プラグイン。

- 使い方: [プレイヤー向け](player.md) / [運営向け](https://github.com/oyasaiserver/Misumaru/blob/main/Projects/oyasai-particles/operator.md)

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `plugins/OyasaiParticles/` |
| 主要コード | `OyasaiParticlesPlugin.kt`（起動・タスク・WorldGuard フラグ登録）、`engine/ParticleRenderEngine.kt`（個人描画・疑似天候・個人時間・個人天気CLEAR固定・環境音）、`engine/AreaVisualizer.kt`（境界線・中心マーカー描画・視線判定）、`gui/AreaGuiManager.kt`（一覧・設定・項目選択・回収 GUI）、`service/AreaService.kt`（エリア・履歴・ロールバック管理） |
| テスト | `src/test/kotlin/io/oyasai/particles/`（`AreaShapeTest`, `AreaIdValidatorTest`, `AreaServiceAndHistoryTest`, `GuiSafetyTest`） |
| ビルド | `nix develop --command gradle :plugins:OyasaiParticles:build`（`OyasaiParticles.jar`） |
| Nix package | `packages/oyasai-plugins.nix` が `oyasaiparticles` として公開し、`packages/oyasai-minecraft-main.nix` に登録 |

## 技術仕様

### 構成と設計方針

- **ワールド非改変・個人向け API のみ使用**:
  - 描画は `Player#spawnParticle`、時間は `Player#setPlayerTime(..., false)`、環境音は Adventure `Sound.Emitter.self()` によるプレイヤー追従再生（雷鳴のみ周囲オフセット座標へ再生）を使用する。
  - エリア内にいる間はワールドの雨・雷雨の影響を受けないよう `Player#setPlayerWeather(WeatherType.CLEAR)` を適用する。エリア外・トグル OFF・ワールド移動・ログアウト・プラグイン停止時に `resetPlayerTime()` / `resetPlayerWeather()` / `SoundStop` を実行し元に戻す。
  - 疑似天候（`RAIN` / `SNOW` / `STORM`）はパーティクルで降らせるため、砂漠など本来のバイオームに依存せず雨や雪を表示できる。
- **ワンドと非設置アイテムのハイブリッド操作**:
  - 専用ワンド（PDC タグ付きブレイズロッド）で四角（`BOX`）または円柱（`CYLINDER`）の範囲を指定し、コマンド（`/opart create`）または非設置のパーティクルアイテム（染料等の素材に PDC で設定を埋め込んだもの）の右クリックで空間へエリアを登録する。ブロックは設置しない。
  - 設定変更・範囲更新・アイテム回収（`RECLAIM`）・削除（`DELETE`）は共通 GUI（`AreaGuiManager`）から操作できる。項目変更時は一覧選択サブメニュー（`AreaOptionSelectHolder`）が開く。
  - 可視化中にエリア中心の白いパーティクル（`END_ROD`）を視線で狙って `Shift + 右クリック` すると、直接そのエリアの設定 GUI を開ける。
- **悪用・セキュリティ・不具合対策**:
  - `ItemProtectionListener` により、ワンドおよびパーティクルアイテムのクラフト・金床・砥石・鍛冶台・かまど燃料・エンティティ相互作用・看板/大釜等へのバニラ使用をブロックする。
  - `GuiListener` は専用 `InventoryHolder`（`AreaListHolder`, `AreaEditorHolder`, `AreaOptionSelectHolder`）のみで判定し、クリック（`COLLECT_TO_CURSOR`・`SHIFT_CLICK`・`HOTBAR_SWAP` 含む）およびドラッグを全面キャンセルした上で操作を処理する。回収時はインベントリの空き枠を事前検証する。
  - `WandAndItemUseListener` は `EquipmentSlot.HAND` 以外を抑止し、オフハンドの二重発火を防ぐ。
  - Paper 26.3 の単体テスト環境で静的初期化エラー（`ExceptionInInitializerError`）を避けるため、レジストリ依存 enum（`Particle`, `Sound`, `Material`）は文字列キーで保持し実行時に遅延解決する。
  - ID 検証（`AreaIdValidator`）で `..`・`.`・`/`・`\` を拒否し、`^[a-zA-Z0-9_-]{1,32}$` のみ許可する。体積計算には `Math.multiplyExact` / `Math.addExact` を使用する。

### WorldGuard 連携と操作履歴

- `onLoad()` 時にカスタムフラグ `oyasai-particles`（`StateFlag`、既定 `true`）を登録する。
- エリア作成・範囲更新時は、範囲の境界・内部から抽出したサンプル点すべてについて WorldGuard の建築権限（`testBuild`）および `oyasai-particles` フラグを確認する（`oyasaiparticles.admin` または WorldGuard バイパス権限でバイパス可能）。
- 操作履歴は CoreProtect には残さず、プラグイン独自に `history.yml` へ変更前後のスナップショットを記録し、`/opart history`・`/opart rollback <履歴ID>` で復元・取り消しを行う。

### データ

- `plugins/OyasaiParticles/config.yml`: 上限値・描画間隔・履歴保持件数
- `plugins/OyasaiParticles/areas.yml`: 登録エリア一覧
- `plugins/OyasaiParticles/history.yml`: 操作履歴スナップショット（既定最大 500 件）
- `plugins/OyasaiParticles/preferences.yml`: プレイヤーごとの表示 OFF 設定
