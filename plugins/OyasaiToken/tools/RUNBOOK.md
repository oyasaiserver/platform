# TokenManager → OyasaiToken 本番移行 手順書

## 前提

- 残高の正本は **MariaDB `token.tokenmanager`**（9,601行）。`plugins/TokenManager/data.yml` は 2025-07-23 の古い残骸（68行）で**移行元にしてはいけない**
- OyasaiToken の `data.yml` 自動 import は既定で無効（`migration.import-tokenmanager-data-yml: false`）
- 変換後の `tokens.db` には `schema_meta.tokenmanager_data_yml_imported_at` を書き込むため、あとから誤って data.yml が取り込まれることはない

## 手順

### 1. サーバーをクリーン停止

TokenManager は残高の一部を RAM に持ち、停止時の `insertCache()` で MySQL に確定する。
**必ず停止してからエクスポートすること。** 稼働中のダンプは直近の変動を取りこぼす。

### 2. バックアップ

```bash
# 本番側で
cp -a /opt/platform/master/minecraft-main/plugins/TokenManager \
      /opt/platform/master/minecraft-main/plugins/TokenManager.bak-$(date +%Y%m%d-%H%M%S)
# MariaDB 側も
docker exec mariadb mariadb-dump -uroot -p"$PW" token > token-backup-$(date +%Y%m%d-%H%M%S).sql
```

### 3. エクスポート

```bash
./export_tokenmanager.sh /tmp/tokenmanager-export.tsv
```

期待値（2026-09-02 時点）: 行数 9,601 / 合計 1,189,491 / 負残高 7

### 4. 変換

```bash
scp oyasai-server:/opt/platform/master/minecraft-main/usercache.json /tmp/usercache.json

python3 migrate_tokenmanager_to_sqlite.py \
  --input /tmp/tokenmanager-export.tsv \
  --output /tmp/tokens.db \
  --names /tmp/usercache.json \
  --negative clamp
```

`--negative clamp` は負残高を 0 にする。対象7名（合計 -203）:
`lixwui` -56 / `alstikk` -54 / `xX_Albedo` -29 / `Mochix64` -20 / `SHION_KUNN` -20 / `.nanaguuun` -14 / `kasasagizyx` -10

負残高は第三者版 `removeTokens()` が残高チェックなしで減算していたことによるもの
（`TokenManagerPlugin.java:218`）。OyasaiToken では `CHECK (balance >= 0)` と Boolean 失敗伝播で再発しない。

### 5. 検証（配置前）

```bash
sqlite3 /tmp/tokens.db "SELECT COUNT(*), SUM(balance), MAX(balance) FROM token_balances;"
# → 9601 | 1189694 | 119407   （合計は負7件を0にした分 +203）
sqlite3 /tmp/tokens.db "SELECT key FROM schema_meta;"
# → tokenmanager_data_yml_imported_at / last_applied_tx_id / migration_source / migrated_at
```

### 6. 配置

```bash
# 旧 plugins/TokenManager/ は手順2で退避済み
# 新しい data folder に tokens.db を置く（plugin.yml の name が TokenManager のため同じ場所）
cp /tmp/tokens.db /opt/platform/master/minecraft-main/plugins/TokenManager/tokens.db
```

JAR は Nix イメージ側で `tokenmanager`（第三者版）→ `oyasaitoken` に切り替わる（コミット `31bd0f2f`）。
**TokenManager 名の JAR が2つ存在しないこと**を配置後に確認する。

### 7. 起動後の確認

```
/tm balance maikukosyou   → 119407
/tm balance inmr          → 114610
/tm balance marzipan99    → 56567
/tm balance Nacukat       → 43972
/tm top
```

依存プラグインの起動時エラーがないことをログで確認する:
OyasaiPets / DynamicProfile / OyasaiMenu / SocialLikes3 / OyasaiAdminTools

`/bigwolf` 系を実際に叩き、`NoSuchFieldError` / `NoSuchMethodError` が出ないことを確認する。

### 8. ロールバック

```bash
# 停止 → 退避したディレクトリを戻す → 旧イメージ（第三者版 tokenmanager）で起動
mv plugins/TokenManager plugins/TokenManager.failed
mv plugins/TokenManager.bak-<timestamp> plugins/TokenManager
```

MariaDB `token.tokenmanager` は移行では**一切変更しない**（読み取りのみ）。
そのため第三者版へ戻せば残高はそのまま復元される。
MariaDB を消すのは、OyasaiToken の安定稼働を十分に確認した後にする。
