# OyasaiPets 運営向け総合ガイド

| 項目 | 内容 |
|---|---|
| 対象読者 | サーバー運営メンバー（OP権限保持者） |
| 対象バージョン | OyasaiPets v2.5.0 |
| 最終更新日 | 2026-03-29 |

---

## 概要

OyasaiPets（内部名: BigWolf）は、PaperMC 1.21 向けのペットシステムプラグインです。
プレイヤーはトークン（TokenManager）を使ってペットの購入・育成・復活・交配を行います。

**必須依存:** TokenManager（無効/未導入の場合、OyasaiPets は起動しません）

> **v2.5.0 更新ポイント**
> - プレイヤーから買えた `PUFFERFISH`（フグ）をラインアップから削除
> - `/bigwolf locate` の出力を改善し、迷子対応がしやすくなりました
> - ペットの召喚順序・アルマジロ状態に関する既知不具合を修正

---

## 導入手順

### 前提条件

- PaperMC 1.21 以上のサーバー
- TokenManager プラグイン導入済み
- ゲーム内OPアカウント（本プラグインのコマンドはコンソール実行不可）

### 手順

1. ビルド済み JAR を `plugins/` に配置
   ```
   plugins/OyasaiPets-<version>.jar
   ```
1. サーバーを起動
1. 起動ログを確認
   ```
   OyasaiPets (BigWolf) v<version>
   TokenManager found - Economy system enabled
   ```
1. `plugins/OyasaiPets/config.yml` を必要に応じて編集
1. `/bigwolfop reload` で設定を再読込

### 確認方法

- `/bigwolfop version` が応答する
- `/bigwolfop shop wolf` でテストショップが設置できる

### 失敗時対応

- `TokenManager not found!` が出る: TokenManager の導入状態と起動状態を確認
- `api-version` 関連エラー: PaperMC バージョンを確認

---

## 設定ファイル

設定本体: `plugins/OyasaiPets/config.yml`

### 主要設定項目（初期値）

| セクション | キー | 初期値 | 説明 | |---|---|---|---| | economy | foodPointCost | 100 |
ペットのエサやり時に消費するトークン | | pets | maxFoodLevel | 50 | ペット最大レベル | | shop |
defaultCost | 100 | ショップMOBのデフォルト販売価格 | | skillbook | costLv1/Lv2/Lv3 |
50/100/150 | スキル解放コスト | | revive | cost | 50 | 復活コスト | | recover | cost | 50 |
スポーンエッグ再取得コスト（自動補完キー） | | breed | minLevel | 10 | 交配最低レベル | | breed | cost | 200
| 交配コスト | | breed | maxCount | 3 | 1体あたりの最大交配回数 |

### 設定反映

```
/bigwolfop reload
```

### 注意事項

- 召喚済みペットの一部パラメータは即時に変わらないため、再召喚で確認する
- `reload` は設定再読込であり、プラグイン再起動ではない

---

## コマンド運用

詳細なコマンド一覧は以下を参照してください。

- 運営用コマンド一覧: [ops/commands.md](commands.md)
- ユーザー用コマンド一覧: [users/commands.md](../users/commands.md)

よく使う運営コマンド:

- バージョン確認: `/bigwolfop version`
- 設定再読込: `/bigwolfop reload`
- ショップ設置: `/bigwolfop shop <mob> [variant] [cost] [yawDeg]`
- 全ショップ削除: `/bigwolfop shopremoveall`（15秒以内に再実行で確定）
- スポーン時AI切替: `/bigwolfop spawn_ai <on|off|status>`
- ペット速度リセット: `/bigwolfop reset_speed [all]`

---

## 更新時チェックリスト

- [ ] `plugins/OyasaiPets/players/` をバックアップ
- [ ] `plugins/OyasaiPets/config.yml` をバックアップ
- [ ] サーバー停止
- [ ] 旧 JAR を差し替え
- [ ] サーバー起動
- [ ] 起動ログでバージョンと依存ロードを確認
- [ ] `/bigwolfop version` でバージョン確認
- [ ] テストアカウントで `buy / summon / storeall / revive / breed` を確認
- [ ] ドキュメント更新（本ガイド・Runbook・ユーザー向けガイド）

---

## 関連資料

- [運営用コマンド一覧](commands.md)
- [障害対応 Runbook](runbook.md)
- [バックアップ/復旧手順](backup-restore.md)
- [既知の不具合・制約](../known-issues.md)
- [用語集](../glossary.md)
- [一般ユーザーガイド](../users/README.md)
