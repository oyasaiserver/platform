# Oyasai Bulletin (お知らせシステム)

サーバー運営と鯖民の意思共有を円滑にするためのお知らせシステムです。
定期的なお知らせや、詳細なカスタマイズが可能なアンケート機能を備えています。

---

## コマンド一覧

| コマンド | 説明 | 権限                   |
| :--- | :--- |:---------------------|
| `/anke` | 最新のアンケートを開く | `oyasai.survey`      |
| `/bl open` | 最新のアンケートを開く（`/anke` と同等） | `oyasai.survey`     |
| `/bl resume` | 中断したアンケートを再開する | `oyasai.survey` |
| `/bl help` | 利用可能なコマンド一覧を表示する | `oyasai.survey`  |
| `/bl <id>` | 指定したIDのアンケートを開始する | `oyasai.survey`  |
| `/bl gui` | 管理ダッシュボード（通知・アンケート）を開く | `oyasai.admin`|
| `/bl add survey <id>` | 新しいアンケートを追加する | `oyasai.admin`  |
| `/bl add notice <id>` | 新しい通知を追加する | `oyasai.admin`  |
| `/bl send <id>` | アンケート結果をCSV形式でDiscordに送信する | `oyasai.admin`  |
| `/bl reload` | 設定ファイルをリロードする | `oyasai.admin`  |

---

## 設定リファレンス

### 1. 通知 (`notices.json`)
各通知設定（JSONオブジェクト）の全項目説明です。

| 項目名 | 型 | 説明 | 例 |
| :--- | :--- | :--- | :--- |
| `id` | String | 管理用のユニークID。 | `"vote-notice"` |
| `message` | String | 通知されるメッセージ内容（MiniMessage形式）。 | `"<green>投票してね！</green>"` |
| `interval` | Long | 通知の間隔（秒単位）。 | `1800` (30分) |
| `enabled` | Boolean | 有効か無効か。GUIでも切り替え可能。 | `true` |
| `targetGroups`| List | 表示対象を限定するLuckPermsグループ名のリスト。 | `["admin"]` (空で全員) |
| `sound` | String? | 告知時に流す効果音ID。 | `"block.note_block.chime"` |
| `expiresAt` | Long? | 自動停止する期限（UNIXミリ秒）。 | `1717489825000` |

### 2. アンケート (`surveys.json`)
各アンケート設定の全項目説明です。

| 項目名 | 型 | 説明 |
| :--- | :--- | :--- |
| `id` | String | アンケートのユニークID。 |
| `title` | String | アンケートのタイトル（本を開いた時などに表示）。 |
| `broadcastMessage`| String | アンケートを告知するメッセージ（MiniMessage形式）。 |
| `broadcastInterval`| Long | 告知メッセージを流す間隔（秒）。 |
| `questions` | List | 質問のリスト（後述）。 |
| `rewardCommands` | List | 完了時に実行するコマンド（`%player%`使用可）。 |
| `enabled` | Boolean | 有効か無効か。 |
| `maxResponses` | Int | 一人のプレイヤーが回答できる最大回数。 |
| `maxRewards` | Int | 一人のプレイヤーが報酬を受け取れる最大回数。 |
| `respondedPlayers`| Map | プレイヤーごとの回答回数リスト。 |
| `rewardedPlayers` | Map | プレイヤーごとの報酬受取回数リスト。 |
| `targetGroups` | List | 表示・回答対象のLuckPermsグループ名リスト。 |
| `discordWebhookUrl`| String? | 回答完了時の通知先Discord Webhook。 |
| `sound` | String? | 告知時に流す効果音ID。 |
| `expiresAt` | Long? | 自動停止する期限（UNIXミリ秒）。 |

---

## インゲーム・エディター
`/bl gui` から各項目を **Shift + 左クリック** することで、ゲーム内から直接すべての設定を変更可能です。
テキストの編集には「本」が使用され、内容を書き換えて「署名（Sign）」することで保存されます。

---

## 開発者・運営向けメモ
*   **スマート・ターゲティング**: `/anke` コマンドは、過去に流れた告知履歴を遡り、プレイヤーが「権限を持っていて、かつ未回答」の最新アンケートを自動で選択して開きます。
*   **セキュリティ**: 管理GUI内のアイテムは、ラグや特殊操作によっても取り出せないよう保護されています。
*   **データ構造**: 回答結果は `plugins/OyasaiAdminTools/surveys/results_<id>.json` に保存されます。

↑本READMEはAIにより生成されました
