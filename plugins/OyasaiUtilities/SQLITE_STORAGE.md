# Utilities 共通 SQLite

人が編集する設定は YAML、プレイ中に書くデータは SQLite とする。
`UtilitiesDatabase` はこのプラグイン内だけで使う小さな基盤。
データフォルダ直下の `oyasaiutilities.db` を有効化の最初に開き、
WAL・synchronous=FULL・busy_timeout=5000（BackpackStore と同じ）を設定する。
開けなければ利用機能の有効化だけが失敗し、他機能の有効化を続ける。

表名は機能名を頭につけ、機能をまたぐ参照は作らない。
`schema_versions(feature TEXT PRIMARY KEY, version INTEGER NOT NULL CHECK(version >= 0))`
に機能ごとの版を記録する。機能は有効化時に `migrate(feature, migrations)` へ
版順の変更処理を渡す。未適用の処理だけを実行し、表変更と版更新を同じ
トランザクションで確定する。失敗時は全て戻し、実装より新しい版は拒否する。
既存の版の処理は書き換えず、次の版の処理を末尾に追加する。

読み込みは別接続、書き込みは単一の専用スレッドで順番に実行する。
呼び出し側は保存する値をコピーし、非同期処理から Bukkit のオブジェクトに触れない。
非同期保存のエラーはログと停止時のエラーで報告する。
利用機能が停止時の保存を渡した後、Main が全書き込みの完了を待って接続を閉じる。

この基盤を使うのは `playerstate`（版1）と `teleport`（版1）。
`flush()` はそれ以前の保存を完了させ、保存失敗があれば例外にする。
段階3では、旧 Essentials の入獄状態を解除する前の耐久性確認に使う。
バックパック・座る・案内・テレポート受け入れの既存DBと他機能のYAMLは別途移行する。
