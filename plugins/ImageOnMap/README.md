# ImageOnMap

おやさいサーバー用に Kotlin と Paper の公開 API だけで作った独自実装です。旧版のフォークではありません。プラグイン名を維持し、旧データフォルダを引き継ぎます。

## コマンド

- `/tomap <URL> [resize [幅 高さ]]`: 画像を取り込みます。`/maptool new ...` も同じです。
- `/maps`: 自分の画像を開き、受け取り直しや一覧からの非表示を行います。
- `/givemap <プレイヤー> <画像ID>`: 指定画像を渡します。

2枚以上の画像はポスターになります。空の額縁を並べ、左下をポスターで右クリックして貼ります。スニークして1枚を叩くと回収します。

## データと移行

正データは `plugins/ImageOnMap/image.db` です。`maps` 表の PNG は `map_id` ごとに保持され、索引のない PNG も描画します。スキーマ `user_version = 1` では、`maps.png` は **128×128 の PNG バイト列**です。GUI の非表示は索引に印を付けるだけで、PNG は消しません。

旧データからの移行は、プラグインを停止し、`plugins/ImageOnMap/` 全体をバックアップしてから一度だけ実行します。Python 3 と PyYAML が必要です。

```sh
python3 plugins/ImageOnMap/migration/migrate_to_sqlite.py --self-test
python3 plugins/ImageOnMap/migration/migrate_to_sqlite.py --data-dir plugins/ImageOnMap
```

スクリプトは `maps/*.yml` と `images/map*.png` を読み、一時 DB を検査してから `image.db` に改名します。元ファイルには書きません。索引にあるが PNG がない地図 ID は報告され、その画像はポスターの形が完全でないため貼り直しには使えません。既存の `image.db` や調査待ちの `image.db.tmp` があれば上書きしません。検査結果と欠けた ID を確認してからプラグインを有効にしてください。
