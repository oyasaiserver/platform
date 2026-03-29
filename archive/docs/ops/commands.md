# OyasaiPets 運営用コマンド一覧

| 項目 | 内容 |
|---|---|
| 対象読者 | サーバー運営メンバー（OP権限保持者） |
| 対象バージョン | OyasaiPets v2.5.0 |
| 最終更新日 | 2026-03-29 |

---

## 前提

- すべてゲーム内プレイヤーとして実行する（コンソール不可）
- OP権限が必要

---

## `/bigwolfop` コマンド一覧

| コマンド | 用途 | 補足 | |---|---|---| | `/bigwolfop version` | バージョン確認 | 初期切り分けで最初に実行
| | `/bigwolfop reload` | `config.yml` 再読込 | 設定変更後に実行 | |
`/bigwolfop item <type>` | 管理用アイテム配布 |
`food / brush / treat / heal / toys / skillbook / skillbook1 / skillbook2 / skillbook3 / particle / all`
| | `/bigwolfop exp <mob> [variant]` | 実験的にMOB召喚 | テスト用途 | |
`/bigwolfop shop <mob> [variant] [cost] [yawDeg]` | ショップMOB設置 | コスト未指定時はデフォルト価格
| | `/bigwolfop shopremove` | 視線先ショップMOB削除 | 1体削除 | | `/bigwolfop shopremoveall`
| 全ショップMOB削除 | 15秒以内に再実行で確定 | | `/bigwolfop force_store` | 視線先ペットを強制収納 |
収納アイテムは実行者に渡る | | `/bigwolfop force_storeall <player>` | 指定プレイヤーの展開中ペットを全強制収納 |
収納アイテムは実行者に渡る | | `/bigwolfop history <player> [page]` | 指定プレイヤーの履歴確認 |
サポート対応で利用 | | `/bigwolfop spawn_ai <on\|off\|status>` | スポーン時AI設定を切替/確認 |
召喚コマンドではない点に注意 | | `/bigwolfop reset_speed [all]` | アクティブペットの速度を既定値へ戻す |
現在は実質全体リセット | | `/bigwolfop debug_egg <mob> [key=value ...]` | デバッグ用エッグ生成 | 検証用途
| | `/bigwolfop perf_debug <on\|off\|status>` | パフォーマンスデバッグ表示切替 | 有効化時のみ表示 |

---

## 運用でよく使う組み合わせ

### 設定変更後の反映確認

1. `/bigwolfop reload`
1. `/bigwolfop version`
1. テストプレイヤーで召喚・収納・復活を確認

### ショップ再配置

1. `/bigwolfop shopremoveall`
1. 15秒以内に `/bigwolfop shopremoveall`
1. `/bigwolfop shop <mob> [variant] [cost] [yawDeg]`

### 速度異常時の一次対応

1. `/bigwolfop reset_speed`
1. プレイヤーに再乗車を案内

---

## 関連資料

- [運営向け総合ガイド](README.md)
- [障害対応 Runbook](runbook.md)
- [バックアップ/復旧手順](backup-restore.md)
- [ユーザー用コマンド一覧](../users/commands.md)
