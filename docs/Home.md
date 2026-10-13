---
date: 2026-10-14
record_type: index
---

# Platform docs Home — プラグインの技術仕様と使い方

`platform` は OyasaiServer のモノレポ（Minecraft プラグイン、Nix パッケージ、インフラ、ローカル検証環境）。
この `docs/` には、プラグインごとの技術仕様とプレイヤー向けの使い方を置く。

運営向けの資料（権限・管理コマンド・設定・障害対応）、構成・CI/CD・インフラ、作業手順、過去の失敗、作業の記憶のルールは、メンバー用の非公開リポジトリ [oyasaiserver/docs](https://github.com/oyasaiserver/docs) にある。メンバーの AI は、作業の前にそちらの `Home.md` を読む。

## 置き場所

`Projects/<name>/`（フォルダ名はプラグイン名のケバブケース。`OyasaiLWC` → `oyasai-lwc`）に次を置く。書式の見本は [oyasai-lwc](Projects/oyasai-lwc/PROJECT.md)。一覧は `ls docs/Projects`。

| ファイル | 読む人 | 中身 |
|---|---|---|
| `PROJECT.md` | 開発者・AI | 作業の入口（実装の正本 `source_of_truth`・関連パス `related_paths`）、技術仕様、分かった癖・判断 |
| `player.md` | プレイヤー | 使い方・制限・困ったときの表示。内部実装や権限ノードは書かない |

プラグインの挙動を変えたら、影響する `PROJECT.md`・`player.md` も同じ PR で直す。

## 公開リポジトリとして守ること

`docs/` は公開される。次は書かない。

- 個人情報、特定の人の好みや事情、個人のメモの名前・場所・使っている道具
- トークン・パスワード・webhook などの秘密、IP・ホスト名・個人のパス（`/Users/…`）
- 本番の構成・運用の詳細、運営向けの手順（非公開リポジトリへ）
- 生ログ・会話の全文、大きな一時生成物

この節は、ユーザーの明示的な依頼なしに削らない。
