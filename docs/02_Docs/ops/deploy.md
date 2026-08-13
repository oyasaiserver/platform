---
title: "デプロイ・ビルド手順"
category: ops
status: active
owner: platform-maintainers
source_of_truth: "docs/02_Docs/ops/deploy.md"
related_paths:
  - local/paperclip-tmp/
last_validated: "2026-07-22"
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

## ローカル検証環境へのデプロイ

```bash
# ビルド後
cp plugins/OyasaiMenu/build/libs/OyasaiMenu.jar local/paperclip-tmp/plugins/

# Minecraft上でPlugManXによるリロード
/plugman reload OyasaiMenu
```

**ローカル検証環境**: `local/paperclip-tmp/`（リポジトリルートからの相対パス）
- Paper 1.21.11 build 69（`paper-paperclip.jar`）
- 起動・停止・トラブルシューティングの詳細は [[local-server.md]] を参照

## 外部ツール（Nexus）のデプロイ

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
