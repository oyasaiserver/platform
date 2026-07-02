---
title: "デプロイ・ビルド手順"
category: ops
status: active
owner: platform-maintainers
source_of_truth: "docs/02_Docs/ops/deploy.md"
related_paths:
  - dev-server/
last_validated: "2026-05-20"
agent_task: null
---

# デプロイ・ビルド手順

## ビルド環境

- **Nix**: `/nix/var/nix/profiles/default/bin/nix`（PATHに入っていない）
- **Java**: nix環境内のJDK
- **ビルドツール**: Gradle（nix develop経由）

## ビルドコマンド

```bash
# 全体ビルド
/nix/var/nix/profiles/default/bin/nix develop --command gradle build

# 特定プラグインのみ
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiMenu:build
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:CitiesSkyMine:build
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiPets:build

# コンパイルのみ（高速確認）
/nix/var/nix/profiles/default/bin/nix develop --command gradle :plugins:OyasaiPets:compileKotlin

# フォーマット（CIはtreefmtで検証 — gradle fmt は使わない）
/nix/var/nix/profiles/default/bin/nix fmt
```

## 開発サーバーへのデプロイ

```bash
# ビルド後
cp plugins/OyasaiMenu/build/libs/OyasaiMenu.jar dev-server/plugins/

# Minecraft上でPlugManXによるリロード
/plugman reload OyasaiMenu
```

**開発サーバー**: `dev-server/`（リポジトリルートからの相対パス）
- Purpur 1.21.11
- 主要プラグイン: FAWE, CitiesSkyMine, OyasaiMenu, Vault, PlaceholderAPI, PlugManX

## 外部ツール（Antigravity）のデプロイ

各ツールはHTMLファイル1枚で動作するため、以下の方法でデプロイ可能:

| ツール | デプロイ方法 |
|---|---|
| glass-gradient | GitHub Pages / CDNにそのまま配置 |
| plateau-viewer | 同上 |
| minecraft-analyzer | 同上 |
| anamorph-voxel | 同上 |
| citygml-converter | 同上 / Dockerで `python api.py` |

## CI/CD

- フォーマットチェック: `nix fmt`（treefmt）がCIで実行される
- 既知CI問題: detekt 1.23.6 + Java 25 → `IllegalArgumentException: 25`（コードと無関係）
