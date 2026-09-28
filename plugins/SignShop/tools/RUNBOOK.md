# SignShop の DB と旧版への書き出し

初回起動は、旧 SignShop を取り外した後、既存の `plugins/SignShop/sellers.yml` を読み取って `shops.db` に一度だけ取り込む。元 YAML は変更しない。`books.db` と旧設定も保管する。初回の件数・SHA-256・停止店をログと DB で照合する。

書き出しは**サーバー停止中**に行う。まず DB と旧 jar、YAML、`books.db`、経済データを退避する。稼働中にバックアップが必要な場合は SQLite `.backup` を使い、DB 本体だけをコピーしない。停止後は checkpoint 済み DB、または DB・WAL・SHM を同時点の一組で保存する。

```sh
python3 -m venv /path/to/signshop-export-venv
/path/to/signshop-export-venv/bin/pip install -r plugins/SignShop/tools/requirements.txt
/path/to/signshop-export-venv/bin/python plugins/SignShop/tools/export_sqlite_to_sellers.py --input /path/to/shops.db --output /path/to/sellers-export.yml
```

既存の出力ファイルは上書きしない。書き出し前に `pending`・`compensation_failed` のうち `reviewed_at IS NULL` が 0 件であることを確認する。件数、全キー、`DataVersion`、`items` の `YAML:` 文字列、owner、リンク、未知フィールドを元 DB と照合し、旧 5.2.2 jar で読み込めることを隔離環境で試してから切り替える。外製 jar と自作 jar は同時に置かない。

停止店の再開は自動で行わない。取引 ID を使って Vault/Essentials の履歴、残高、現物在庫、CoreProtect、DB 行を人が照合する。残高差だけで因果関係を決めない。停止中に DB バックアップ後、照合済み取引の `reviewed_at`・`review_note` と該当店の `halt_reason` を一トランザクションで更新し、失敗した取引の `status` は残す。通常の店の操作ではこの更新をしない。
