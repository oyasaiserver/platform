---

## name: build-and-deploy description: 指定プラグインをローカルでビルドし、SSH 経由でお野菜鯶 (oyasai-server) にコピーして minecraft-main コンテナの /plugman reload を実行する。各副作用ステップは必ず承認を取る。disable-model-invocation: true

# /build-and-deploy <plugin-name>

ローカルでプラグインをビルド → リモート (`oyasai-server`) にコピー → Minecraft (Docker コンテナ
`minecraft-main`) で `/plugman reload <name>` を発火するワークフロー。

## 環境前提

- **SSH alias**: `oyasai-server` (`~/.ssh/config` 登録済み)
- **リモート plugins**: `/opt/platform/master/minecraft-main/plugins/`
- **Docker コンテナ**: `minecraft-main` (itzg/docker-minecraft-server 系を想定 —
  `rcon-cli` 同梱)
- **ローカル jar**: `plugins/<name>/build/libs/<name>.jar`

## 重要原則

> 🛑 **このスキルの各 SSH/scp/docker exec ステップは絶対に自動承認しない。** Bash 許可リスト
> (`settings.local.json` の `permissions.allow`) には SSH/scp/docker 系コマンドを
> **追加しないこと**。毎回ユーザーに承認を求める形で進める。

## 引数

- `<plugin-name>`: プラグイン名（例：`OyasaiPets`, `OyasaiMenu`, `CitiesSkyMine`）
- 未指定なら `git status` から推定し、推定結果をユーザーに確認する。

## 実行手順

### Step 1 — ローカルビルド（承認要）

```bash
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:<name>:build
```

- 成功で `plugins/<name>/build/libs/<name>.jar` が生成される。
- 失敗したら停止し、エラーを報告して中断（リモートには触らない）。

### Step 2 — jar の存在確認

```bash
ls -la plugins/<name>/build/libs/<name>.jar
```

存在しなければ Step 1 が失敗している。再実行を促す。

### Step 3 — リモートへのコピー（承認要）

```bash
scp plugins/<name>/build/libs/<name>.jar oyasai-server:/opt/platform/master/minecraft-main/plugins/<name>.jar
```

- リモートの既存 jar は **上書き**。ユーザーに事前に「上書きします、続行しますか？」と確認する。
- scp 完了後、サイズと mtime を
  `ssh oyasai-server 'ls -la /opt/platform/master/minecraft-main/plugins/<name>.jar'`
  で検証する。

### Step 4 — PlugManX リロード（承認要）

```bash
ssh oyasai-server 'docker exec minecraft-main rcon-cli plugman reload <name>'
```

- `rcon-cli` がコンテナに無い場合は `mc-send-to-console plugman reload <name>` にフォールバック。
- それでもダメなら `docker exec minecraft-main rcon-cli` の存在をユーザーに確認する。
- 出力に `Plugin reloaded` のような成功メッセージがあるか確認。エラーが出たら停止。

### Step 5 — 動作確認の提案

リロード後、以下のいずれかをユーザーに提案：

- ゲーム内で `/plugin list` 確認
- ログを `ssh oyasai-server 'docker logs --tail 50 minecraft-main'` で確認
- スキル使用者がゲームでテストする時間を取る

## エラーハンドリング

- **Step 1 失敗**: ローカルでコンパイルエラー。`plugin-build-verifier` subagent を呼んで原因特定を提案。
- **Step 3 で Permission denied**: SSH 鍵 / sudo 権限の問題。ユーザーに `ssh oyasai-server`
  で疎通確認を依頼。
- **Step 4 で plugin not found**: jar 名と plugin.yml の `name` フィールドが不一致の可能性。

## 注意

- **本番サーバーへの書き込みである**ことを忘れない。プレイヤーが接続中の可能性がある場合、リロードのタイミングをユーザーに確認する。
- `OyasaiPets` のリロードは大量の Pet データを抱えているため副作用が大きい。サーバーが空いている時間帯を推奨。
- 一度に複数プラグインをデプロイする場合も、1 つずつ Step 1〜4 を完走させる（並列実行しない）。
