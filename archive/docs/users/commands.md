# OyasaiPets ユーザー用コマンド一覧

| 項目 | 内容 |
|---|---|
| 対象読者 | 一般プレイヤー |
| 対象バージョン | OyasaiPets v2.5.0 |
| 最終更新日 | 2026-03-29 |

---

## 前提

- すべてゲーム内プレイヤーとして実行する（コンソール不可）
- 金額が必要な操作はトークン残高が必要

---

## `/bigwolf` コマンド一覧

| コマンド | 用途 | よく使うタイミング | |---|---|---| | `/bigwolf` | 使い方表示 | 困ったときの入口 | |
`/bigwolf menu` | メインメニューを開く | 何をするか迷ったとき | | `/bigwolf buy` | ショップGUIを開く |
ペット購入 | | `/bigwolf buy <mob> [variant]` | 種類指定で購入画面へ | 目的のペットをすぐ買いたい | |
`/bigwolf list` | 購入可能ペット一覧表示 | 種類確認 | | `/bigwolf storeall` | 展開中ペットを全収納 |
ログアウト前、移動前 | | `/bigwolf dead` | 死亡ペット一覧表示 | 死亡後の確認 | | `/bigwolf revive <番号>` |
死亡ペット復活 | 復活処理 | | `/bigwolf history [page]` | 所有ペット履歴表示 | 番号確認、状態確認 | |
`/bigwolf locate <番号>` | 最終位置表示 | 迷子チェック | | `/bigwolf recover <番号>` |
収納中ペットのエッグ再取得 | エッグ紛失時 | | `/bigwolf breed` | 交配GUIを開く | 繁殖 | |
`/bigwolf rename <番号> <名前>` | ペット名変更 | 見分けやすくしたいとき | |
`/bigwolf transfer <番号> <プレイヤー名>` | ペット譲渡 | 共有・引き継ぎ | | `/bigwolf abandon <番号>`
| ペット放棄 | 不要個体の整理 | | `/bigwolf version` | バージョン表示 | サポート時の情報共有 |

---

## よく使う流れ（短縮版）

### まず1匹飼う

1. `/bigwolf buy`
1. ペット購入
1. スポーンエッグ右クリックで召喚

### 迷子・紛失対応

1. `/bigwolf history`
1. `/bigwolf locate <番号>` または `/bigwolf recover <番号>`

### 死亡時対応

1. `/bigwolf dead`
1. `/bigwolf revive <番号>`

---

## 関連資料

- [ユーザーガイド](README.md)
- [はじめての遊び方ガイド](journey.md)
- [FAQ](faq.md)
