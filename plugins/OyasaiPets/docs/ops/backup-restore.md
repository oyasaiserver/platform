# OyasaiPets バックアップ/復旧手順

| 項目 | 内容 |
|---|---|
| 対象読者 | サーバー運営メンバー（OP権限保持者） |
| 対象バージョン | OyasaiPets v2.4.0 |
| 最終更新日 | 2026-03-07 |

---

## バックアップ対象

| パス | 内容 | 優先度 |
|---|---|---|
| `plugins/OyasaiPets/players/` | 全プレイヤーのペットデータ（JSON） | 最高 |
| `plugins/OyasaiPets/config.yml` | プラグイン設定 | 高 |

> **やってはいけないこと:** `players/` ディレクトリを削除・移動しながらバックアップを取ること。必ずコピーで実施する。

---

## バックアップ手順

### 前提条件
- サーバーへのシェルアクセス（または FTP/SFTP）
- サーバーが停止しているか、後述の注意事項を理解していること

### 推奨: サーバー停止中のバックアップ

1. サーバーを停止する
2. `players/` ディレクトリをコピーする
   ```bash
   cp -r plugins/OyasaiPets/players/ /backup/oyasaipets-players-$(date +%Y%m%d)/
   cp plugins/OyasaiPets/config.yml /backup/oyasaipets-config-$(date +%Y%m%d).yml
   ```
3. バックアップ先のファイル数を確認する
   ```bash
   ls /backup/oyasaipets-players-$(date +%Y%m%d)/ | wc -l
   ```

### 稼働中バックアップ（仮定）

> **仮定:** 稼働中のバックアップは JSONが書き込み途中の場合に破損するリスクがあります。可能な限りサーバー停止中に実施してください。

稼働中に行う場合は、プレイヤーに `/bigwolf storeall` を案内してペットを収納状態にしてからコピーを実施する。

---

## 復旧手順

### ケース A: 特定プレイヤーのデータ復旧

**前提条件:** バックアップが存在する、対象プレイヤーの UUID がわかる

**手順:**

1. サーバーを停止する
2. バックアップから対象プレイヤーディレクトリをコピーする
   ```bash
   # UUID例: f2ebf4ff-5691-41bf-b239-a78bcdbdfc3b
   cp -r /backup/oyasaipets-players-20260305/f2ebf4ff-5691-41bf-b239-a78bcdbdfc3b \
         plugins/OyasaiPets/players/
   ```
3. サーバーを起動する
4. 対象プレイヤーが `/bigwolf history` でペットを確認できることを検証する

**確認方法:** `/bigwolfop history <プレイヤー名>` で復旧したペットが表示される

**失敗時対応:** JSON ファイルを個別に確認し、壊れているファイルのみ上書き復旧する

---

### ケース B: 全データ復旧

**前提条件:** バックアップが存在する

**手順:**

1. サーバーを停止する
2. 現在の `players/` ディレクトリを退避する
   ```bash
   mv plugins/OyasaiPets/players/ plugins/OyasaiPets/players_broken_$(date +%Y%m%d)/
   ```
3. バックアップを復元する
   ```bash
   cp -r /backup/oyasaipets-players-<日付>/ plugins/OyasaiPets/players/
   ```
4. サーバーを起動し動作確認する

---

### ケース C: 設定ファイルの復旧

```bash
cp /backup/oyasaipets-config-<日付>.yml plugins/OyasaiPets/config.yml
```

サーバー起動後に `/bigwolfop reload` で反映される。

---

## ペットデータの JSON 構造（参考）

`players/<UUID>/<3桁番号>_<TYPE>[_<variant>].json` の例:

```json
{
  "petId": "74f2fbe8-6a7f-4d38-b99c-4a8c1a93f3d9",
  "petNumber": 1,
  "type": "WOLF",
  "variant": "black",
  "customName": "Steveの黒オオカミ #1",
  "purchasedAt": "2026-03-07T12:34:56",
  "status": "STORED",
  "foodLevel": 5,
  "lastLocation": {
    "world": "world",
    "x": 100.0,
    "y": 64.0,
    "z": 200.0
  },
  "deathData": null,
  "stats": {
    "distance": 12.5,
    "jumps": 3,
    "toys": 1,
    "brushes": 0,
    "treats": 0
  },
  "skillType": 1,
  "skillUnlockedLevel": 1,
  "breedCount": 0,
  "particleUnlocked": "0,1,2,3,4"
}
```

**status の値:**
- `STORED` : 収納中（スポーンエッグとして保持）
- `ALIVE` : 展開中
- `DEAD` : 死亡済み（reviveで復活可能）

---

## 関連資料

- [運営向け総合ガイド](README.md)
- [障害対応 Runbook](runbook.md)
