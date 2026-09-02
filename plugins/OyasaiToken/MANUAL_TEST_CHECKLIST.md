# OyasaiToken再設計 — 手動実機テストチェックリスト

対象サーバー: `~/platform/local/paperclip-tmp`(`localhost:8000`, online-mode=false, white-list=false)
デプロイ済み: TokenManager(=OyasaiToken), OyasaiPets, DynamicProfile, OyasaiMenu, SocialLikes3, OyasaiAdminTools, Votifier, Vault, LuckPerms, PlugManX

Codex(gpt-5.5)が実コード(ファイル・行番号)と照合して検証済み。

## 優先度: 高 — OyasaiToken本体(今回の中心的な変更)

- [ ] `/tm set <自分> 100` → `/token balance` で100が即座に表示される(メモリ主の即時反映)
- [ ] `/tm add <自分> 25` → 125になる
- [ ] `/tm remove <自分> 10` → 115になる
- [ ] `/tm remove <自分> 99999`(残高不足) → 失敗し115のまま
- [ ] `/token send <オンラインの他プレイヤー> 10` → 送金成功、双方の残高が正しく増減する(相手がオンラインだと`TMTokenSendEvent`が発火する仕様)
- [ ] `/tm top` でランキング表示される
- [ ] 上記操作の直後、`logs/latest.log`に `Token balance change listener failed` が出ていないことを確認
- [ ] 上記操作の直後、`Token persistence queue is full; rejected tx` が出ていないことを確認(通常運用でキューが枯渇しないことの確認)
- [ ] 一通り操作した後 `/stop` → 再起動 → `/tm balance <自分>` で残高が正しく引き継がれている(SQLite永続化確認)
- [ ] `/tm shop`, `/tm worth`, `/token shop` を試す → 該当コマンドが存在せずusageエラーになる(shop/worth系削除の確認)

## 優先度: 高 — OyasaiPets(今回1行修正した箇所、最重要)

- [ ] `/tm set <自分> 0` で残高を0にする
- [ ] 残高不足でペット/スキルブックの購入を試す → 失敗し購入されない
- [ ] 残高不足で餌やりを試す → 中断される
- [ ] 残高不足でスキル解放を試す → 中断される
- [ ] 残高不足で復活(revive)を試す → 中断される(**失敗時返金なし**が既知の仕様。トークンも減らないことを確認)
- [ ] 残高不足で交配(breeding)を試す → 前提条件不足なら消費前に中断。もし消費後にspawn失敗した場合のみ返金される設計(通常の残高不足では単に実行できない)
- [ ] `/tm set <自分> 999999` で十分な残高にする
- [ ] 上記の購入/餌やり/スキル解放/revive/breedingを再試行 → 全て成功し、コストぶんトークンが正しく減る
- [ ] `/bigwolf`, `/bigwolfop` コマンドが正常応答する

## 優先度: 中 — OyasaiMenu(リフレクション経由でTokenManagerを呼ぶ唯一のプラグイン)

- [ ] `/menu` でメインメニューが開く
- [ ] `/pointshop` でポイントショップが開く、残高表示が正しい(TokenCurrencyManager経由)
- [ ] ポイントショップでアイテムを購入 → 残高が正しく減る
- [ ] メニュー/ナビバーのポイント残高表示(プレースホルダー)が正しい値を表示する
- [ ] (参考、優先度低)`/shop`, `/sell` はVault経済の確認でありOyasaiToken再設計の直接検証ではない

## 優先度: 中 — DynamicProfile(Vault+Votifier導入で今回初めて起動確認)

- [ ] `/dprofile` で自分のプロフィールが表示される
- [ ] `/dprofile <他プレイヤー名>` で他人のプロフィールを開く → 送金ボタンが表示される(ダイヤ=Token送金、エメラルド=Vault送金)
- [ ] ダイヤボタンからToken送金を実行 → `/token send`コマンド経由で送金される(ログに`sendCommand: /token send`が出る)
- [ ] エメラルドボタンからVault送金を実行(`/pay`経由)も試す
- [ ] `/dprofile`内の「称号設定」から称号選択GUIを開く(`/dpsuki`ではない点に注意)
- [ ] `/dpleaderboard` でリーダーボードが表示される
- [ ] レベルアップ報酬(GOLD_INGOT)でトークンがAPI経由で加算されることを確認(LevelReward.kt)

## 優先度: 中低 — SocialLikes3(ServicesManager経由)

- [ ] SL看板を設置(1行目`likes`、2行目にタイトル必須)し建築を登録する
- [ ] 別プレイヤーがいいねを押す → オーナーがオンラインなら即2トークン加算、オフラインなら次回ログイン時に加算
- [ ] SL詳細GUIから「リポスト(宣伝)」を試す(10トークン消費) → 残高が減る
- [ ] `/slrankup` を試す(`sociallikes3.slrankup`権限がデフォルトopなので、テストは自分がop状態で)
- [ ] (参考)`/sltp`はトークン消費なし、単なるテレポート機能

## 優先度: 低 — OyasaiAdminTools

- [ ] `/kakutyo <オンラインの対象プレイヤー名> <100の倍数のポイント>` を実行(`oyasai.kakutyo`権限が必要) → WorldBorder変更とトークン減算が両方成功する
- [ ] 残高不足の状態で`/kakutyo`を試す → 事前チェックで中断され、WorldBorderも変更されない
  - (発展)もし残高確認後・WorldBorder保存後にremoveTokensが失敗するケースを意図的に作れれば、WorldBorderがロールバックされることも確認できるが、通常のテストでは省略可

## 参考: Obsidianの関連ノート

- [[oyasaitoken-plugin-audit]]
- [[2026-07-08-oyasaitoken-architecture-redesign]]
