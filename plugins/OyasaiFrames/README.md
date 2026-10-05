# OyasaiFrames

画像地図、額縁ロック、お絵かきを一つにまとめたプラグインです。データは `OyasaiFrames/frames.db` と `OyasaiFrames/pictures.db` に保存します。

## コマンド

| コマンド                            | 内容                                                           |
| ----------------------------------- | -------------------------------------------------------------- |
| `/tomap`                            | 権限のあるコマンドの使い方を表示                               |
| `/tomap <URL> [resize [幅 高さ]]`   | 画像を取り込む                                                 |
| `/tomap list`                       | 自分の画像一覧。左クリックで受け取り、右クリックで一覧から隠す |
| `/tomap list <プレイヤー>`          | 指定プレイヤーの画像一覧（管理者向け）                         |
| `/tomap all`                        | 全員の画像一覧を新しい順に表示（管理者向け）                   |
| `/tomap info`                       | 手持ちまたは視線の先の額縁の地図情報（管理者向け）             |
| `/tomap give <プレイヤー> <画像ID>` | 指定画像を渡す。コンソールでも可（管理者向け）                 |
| `/tomap delete <画像ID>`            | 画像の削除確認を開く（管理者向け）                             |
| `/tomap remove`                     | 視線の先の画像と管理額縁を外す                                 |
| `/tomap where <画像ID>`             | 画像の額縁の記録場所を表示（管理者向け）                       |

管理者向け一覧では隠した画像も表示し、左クリックで受け取り、右クリックで削除確認を開きます。削除は二重確認後に実行され、取り消せません。額縁に飾った絵も消えます。

2枚以上の画像はポスターになります。地図を持ち、貼りたい面の左下のブロックを右クリックすると、プラグインが透明な額縁を並べます。壁・床・天井に貼れます。地図は減りません。額縁を直接右クリックしても貼れません。外すときは5ブロック以内から額縁を見て `/tomap remove` を実行します。額縁アイテムは貼る時も外す時もやり取りしません。旧版の額縁は外すと空の額縁に戻ります。

額縁の持ち主とロックは額縁ロック機能、区域の建築権限は WorldGuard、画像と額縁の場所の一覧は画像地図機能が管理します。ロックがあるポスターは持ち主か op、ロックがないポスターは建築権限のある人か op が外せます。

## データと移行

`frames.db` の `frames` 表は額縁 UUID を主キーとし、位置と、独立したロック持ち主・ポスター map ID を持ちます。どちらか一方を外しても、もう一方は残ります。`pictures.db` の `images`・`maps` は画像地図、`canvases` は PaintTools のキャンバスを保存します。両 DB は `PRAGMA user_version = 1` です。

キャンバス ID は地図の map ID ではなく、アイテム PDC `painttools:id` の整数です。`MapID_TagList.yml` の `ID` は利用可能なキャンバス ID、`LastID` は次の自動発行に使う値、`LockID` は描画禁止 ID です。`MapID_List.yml` は現行コードから使われていません。PNG と YAML は移行時に取り込み、移行後のゲーム処理では旧フォルダを読みません。

移行は新プラグインを有効にする前に一度だけ実行します。入力 SQLite は読み取り専用で開き、SQLite backup API で整合したコピーを作ります。既存の出力 DB は上書きしません。旧 DB と PaintTools フォルダも変更しません。

```sh
python3 plugins/OyasaiFrames/migration/migrate_frames_pictures.py --self-test
python3 plugins/OyasaiFrames/migration/migrate_frames_pictures.py \
  --image-db plugins/ImageOnMap/image.db \
  --locker-db plugins/Gakubuchi-Locker/gakubuchi.db \
  --paint-dir plugins/PaintTools \
  --output-dir plugins/OyasaiFrames
```

出力の件数と `integrity_check=ok` を確認してから有効化してください。読めない PNG は旧コードと同じ白紙画像に置き換え、件数とファイル名を報告します。旧 YAML は 128×128 PNG に変換します。描画内容は描画後 60 秒以内を目安に DB に保存し、プラグイン停止時にも書き出します。Undo 用のスナップショットは従来通り 60 秒ごとにメモリへ保存します。
