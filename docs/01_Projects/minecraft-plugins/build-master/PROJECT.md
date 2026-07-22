---
title: "build-master"
category: tool
status: active
owner: marzipan99
source_of_truth: "~/Desktop/Nexus/01_Projects/build-master/"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# build-master

## 概要

Kotlin製Paperプラグイン。FAWE（FastAsyncWorldEdit）およびCSM（CitiesSkyMine）と連携し、建物コピー・WorldEditブリッジ機能を提供する建築支援プラグイン。

## アーキテクチャ

- **言語**: Kotlin / Paper API
- **連携**: FAWE（非同期WorldEdit）、CitiesSkyMine（CSM）
- **機能**: 建物・構造物のコピー、スキーマ（.schem）入出力、WorldEditブリッジ
- **ソース**: `~/Desktop/Nexus/01_Projects/build-master/src/`

## 使用方法

Paperサーバーにプラグインとしてデプロイ。FAWEとCSMが前提依存。  
コマンド・設定はプラグインのconfig.ymlで管理。

## 技術仕様

| 項目 | 内容 |
|------|------|
| ランタイム | Paper 1.21.x |
| 依存 | FAWE, CitiesSkyMine (CSM) |
| ビルド | Gradle + Kotlin |
| 配置 | `dev-server/plugins/` |
