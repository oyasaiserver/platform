---
title: "uuid-resolver"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Nexus/01_Projects/uuid-resolver/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# uuid-resolver

## 概要

Minecraft の UUID からプレイヤー名を解決するPythonスクリプト。標準ライブラリのみで動作し、外部依存ゼロ。

## 解決ソース（優先順）

1. **Mojang公式API** — オンラインプレイヤー
2. **usercache.json** — サーバーローカルキャッシュ
3. **Essentials** データファイル
4. **LuckPerms** ユーザーデータ
5. **DiscordSRV** リンクデータ

Bedrock（Floodgate/Geyser）の疑似UUIDにも対応。

## 使用方法

```bash
python uuid_resolver.py <UUID>
python uuid_resolver.py --batch <file>   # 複数UUID一括処理
```

## 技術仕様

| 項目 | 内容 |
|------|------|
| 言語 | Python 3.8+ |
| 依存 | 標準ライブラリのみ |
| Bedrockサポート | Floodgate/Geyser 疑似UUID対応 |
