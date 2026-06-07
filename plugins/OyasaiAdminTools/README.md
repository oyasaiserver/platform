# Oyasai Announcement & Survey (お知らせ・アンケートシステム)

サーバー運営と鯖民の意思共有を円滑にするためのお知らせ・アンケートシステムです。
定期的なお知らせ機能と、詳細なカスタマイズが可能なアンケート機能を備えています。

---

## コマンド一覧

### アンケート (Survey)

| コマンド | 説明 | 権限 | | :--- | :--- | :--- | | `/anke` | 最新のアンケートを開く |
`oyasai.survey` | | `/survey resume` | 中断したアンケートを再開する | `oyasai.survey` | |
`/survey <ID>` | 指定したIDのアンケートを開始する | `oyasai.survey` | | `/survey help` |
アンケートのヘルプを表示する | `oyasai.survey` |

### お知らせ (Announcement)

| コマンド | 説明 | 権限 | | :--- | :--- | :--- | | `/announce help` | お知らせのヘルプを表示する |
`oyasai.survey` |

### 管理者用 (Admin)

| コマンド | 説明 | 権限 | | :--- | :--- | :--- | | `/survey gui` | アンケート管理画面を開く |
`oyasai.admin` | | `/survey add <ID>` | 新しいアンケートを追加する | `oyasai.admin` | |
`/survey send <ID>` | アンケート結果をDiscordに送信する | `oyasai.admin` | | `/survey reload`
| アンケート設定をリロードする | `oyasai.admin` | | `/announce gui` | お知らせ管理画面を開く |
`oyasai.admin` | | `/announce add <ID>` | お知らせを追加する | `oyasai.admin` | |
`/announce reload` | お知らせ設定をリロードする | `oyasai.admin` |

---

## 設定ファイル

データは以下のJSONファイルに保存されます：

- `plugins/OyasaiAdminTools/announcements.json` : お知らせ設定
- `plugins/OyasaiAdminTools/surveys.json` : アンケート設定
- `plugins/OyasaiAdminTools/surveys/results_<ID>.json` : アンケート回答結果

↑本READMEはAIにより生成されました
