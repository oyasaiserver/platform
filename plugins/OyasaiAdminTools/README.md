# OyasaiAdminTools

サーバー運営と鯖民の意思共有を円滑にするための管理支援ツールです。
定期放送（BroadCast）や、詳細なカスタマイズが可能なアンケート機能を備えています。

---

## コマンド一覧

| コマンド            | 説明                         | 権限              |
|:----------------|:---------------------------|:----------------|
| `/svo`          | 最後に放送されたアンケートを即座に開く        | `oyasai.survey` |
| `/sv open`      | 最後に放送されたアンケートを即座に開く        | `oyasai.survey` |
| `/sv resume`    | 中断したアンケートを再開する             | `oyasai.survey` |
| `/sv help`      | 利用可能なコマンド一覧を表示する           | `oyasai.survey` |
| `/sv <id>`      | 指定したIDのアンケートを開始する          | `oyasai.survey` |
| `/sv gui`       | 管理GUI（放送・アンケートの有効化切替）を開く   | `oyasai.admin`  |
| `/sv send <id>` | アンケート結果をCSV形式でDiscordに送信する | `oyasai.admin`  |
| `/sv reload`    | 設定ファイルをリロードする              | `oyasai.admin`  |

---

## 設定リファレンス

### 1. 定期放送 (`broadcasts.json`)
各放送設定（JSONオブジェクト）の全項目説明です。

| 項目名             | 型       | 説明                           | 例                         |
|:----------------|:--------|:-----------------------------|:--------------------------|
| `id`            | String  | 管理用のユニークID。                  | `"vote-notice"`           |
| `message`       | String  | 放送されるメッセージ内容（MiniMessage形式）。 | `"<green>投票してね！</green>"` |
| `interval`      | Long    | 放送の間隔（秒単位）。                  | `1800` (30分)              |
| `enabled`       | Boolean | 有効か無効か。GUIでも切り替え可能。          | `true`                    |
| `requiredGroup` | String? | 表示対象を限定するLuckPermsグループ名。     | `"admin"` (nullで全員)       |

### 2. アンケート (`surveys.json`)
各アンケート設定の全項目説明です。

| 項目名                 | 型       | 説明                               |
|:--------------------|:--------|:---------------------------------|
| `id`                | String  | アンケートのユニークID。                    |
| `title`             | String  | アンケートのタイトル（本を開いた時などに表示）。         |
| `broadcastMessage`  | String  | アンケートを告知するメッセージ（MiniMessage形式）。  |
| `broadcastInterval` | Long    | 告知メッセージを流す間隔（秒）。                 |
| `questions`         | List    | 質問のリスト（後述）。                      |
| `rewardCommands`    | List    | 完了時に実行するコマンド（`%player%`使用可）。     |
| `enabled`           | Boolean | アンケート告知と回答受付の有効化状態。              |
| `maxResponses`      | Int     | 一人のプレイヤーが回答できる最大回数（デフォルト: 1）。    |
| `maxRewards`        | Int     | 一人のプレイヤーが報酬を受け取れる最大回数（デフォルト: 1）。 |
| `respondedPlayers`  | Map     | プレイヤーごとの回答回数リスト（自動更新）。           |
| `rewardedPlayers`   | Map     | プレイヤーごとの報酬受取回数リスト（自動更新）。         |
| `requiredGroup`     | String? | 回答できるグループを制限（LuckPerms）。         |
| `discordWebhookUrl` | String? | 回答完了時の通知先Discord Webhook。        |

#### 質問オブジェクト (`questions` の中身)
| 項目名       | 型      | 説明                                                      |
|:----------|:-------|:--------------------------------------------------------|
| `text`    | String | 質問文。                                                    |
| `type`    | String | 回答方式: `CHAT_CHOICE`, `CLICK_TO_ANSWER`, `WRITE_IN_BOOK` |
| `options` | List   | 選択肢のリスト（`WRITE_IN_BOOK` 以外で使用）。                         |

---

## 表現・装飾ガイド (MiniMessage & Placeholders)

メッセージ（`message`, `broadcastMessage`, `text`）で使用できる全てのタグと変数のガイドです。

### プレースホルダー
*   **`%player%`**: 閲覧しているプレイヤーのの名前に置き換わります。
    *   例: `"<green>%player%さん、こんにちは！</green>"`

### 文字の色と装飾
*   **基本色**: `<red>`, `<green>`, `<blue>`, `<yellow>`, `<gold>`, `<white>`, `<gray>`, `<black>`, `<aqua>`, `<light_purple>` など
*   **装飾**:
    *   `<b>太字</b>`
    *   `<i>斜体</i>`
    *   `<u>下線</u>`
    *   `<st>取り消し線</st>`
    *   `<obf>難読化</obf>`
*   **リセット**: `<reset>` または `</color>`

### インタラクティブ（クリック・ホバー）
*   **コマンド実行**: `<click:run_command:/vote>クリックで投票</click>`
*   **コマンド提案（チャット欄入力）**: `<click:suggest_command:/tell admin >不具合報告</click>`
*   **URLを開く**: `<click:open_url:https://google.com>ここをクリック</click>`
*   **クリップボードにコピー**: `<click:copy_to_clipboard:123-456>コードをコピー</click>`
*   **ホバーテキスト（マウスを乗せた時）**: `<hover:show_text:'ここをクリックすると公式Wikiへ飛びます'>[詳細]</hover>`

---

## 設定例

### 定期放送例 (`broadcasts.json`)
```json
[
  {
    "id": "broadcast",
    "message": "<gold>【お知らせ】 %player%さん、公式Wikiをチェックしましたか？ <hover:show_text:'公式Wikiを開きます'><click:open_url:https://wiki.oyasai.example.com><aqua><u>[Wikiを見る]</u></aqua></click></hover> <gray>|</gray> <hover:show_text:'クリックで投票ページ案内を表示'><click:run_command:/vote><yellow><u>[投票する]</u></yellow></click></hover>",
    "interval": 1800,
    "enabled": true,
    "requiredGroup": null
  },
  {
    "id": "admin-security-alert",
    "message": "<red><bold>[緊急告知]</bold> 運営メンバーは速やかに管理パネルを確認してください。 <hover:show_text:'パスワードをクリップボードにコピー'><click:copy_to_clipboard:SafePassword123><gray>[Passをコピー]</gray></click></hover>",
    "interval": 300,
    "enabled": true,
    "requiredGroup": "admin"
  }
]
```

### アンケート例 (`surveys.json`)
```json
[
  {
    "id": "full-example",
    "title": "アンケート",
    "broadcastMessage": "<hover:show_text:'クリックでアンケート開始！'><click:run_command:/sv full-example><gold>【重要】 %player%様、新機能アンケートにご協力ください！ <yellow><u>[ここをクリック]</u></yellow></gold></click></hover>",
    "broadcastInterval": 3600,
    "questions": [
      {
        "text": "どの色が一番好きですか？（チャットで即答）",
        "type": "CHAT_CHOICE",
        "options": ["<red>赤</red>", "<blue>青</blue>", "<green>緑</green>"]
      },
      {
        "text": "<bold>次のアプデに期待することは？</bold>",
        "type": "CLICK_TO_ANSWER",
        "options": ["新アイテム", "新Mob", "バグ修正", "その他"]
      },
      {
        "text": "自由に意見を書いてください（本に記入）",
        "type": "WRITE_IN_BOOK"
      }
    ],
    "rewardCommands": [
      "give %player% netherite_ingot 1",
      "broadcast <green>%player%さんがアンケートに回答し、報酬を受け取りました！"
    ],
    "enabled": true,
    "maxResponses": 3,
    "maxRewards": 1,
    "requiredGroup": "member",
    "discordWebhookUrl": "https://discord.com/api/webhooks/...",
    "respondedPlayers": {},
    "rewardedPlayers": {}
  }
]
```

---

## 開発者・運営向けメモ
*   **統合版（Bedrock）自動判別**: 名前が `.` から始まるプレイヤーには `CHAT_CHOICE` を自動的に `CLICK_TO_ANSWER` (本UI) として提供します。
*   **データ構造**: `surveys/results_<id>.json` は安全なJSONで保持し、`/sv send` 時のみCSVへ変換して送信します。
*   **エラー対策**: JSONに文法エラーがある場合、エラーログを出力して既存データを保護します。

↑本READMEはAIにより生成されました
