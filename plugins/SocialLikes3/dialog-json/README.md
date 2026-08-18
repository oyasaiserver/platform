# SocialLikes3 overview JSON preview

`overview-comparison/` は Minecraft 1.21.6 以降の `minecraft:dialog` 用データパックです。

これは `/sldata dialog stats2 tab overview` の表示確認を速くするための**静的スナップショット**で、 プレイヤーや DB
の実データに応じて更新はされません。値は `/tmp/overview-population-fix.png` の表示を
固定したものです。カテゴリ等のボタンはスクロール領域とレイアウトを再現するために置いてあり、 押すと閉じるだけで実データの画面切替は行いません。

ローカル確認では、この `overview-comparison/` ディレクトリを
`local/paperclip-tmp/world/datapacks/` にコピーしてからサーバーを再起動し、次を実行します。 今回の Paper
1.21.11 では、新規の dialog JSON は `/reload` 単体ではレジストリに追加されず、
再起動後に読み込まれることを実機で確認しています。

```
/dialog show marzipan99 sociallikes3:overview_comparison
```

本文・タイトルとも `minecraft:uniform` を指定し、バーは実装と同じ `█` (U+2588)、区切り・パディングは `▁` (U+2581)
を使う。バーの実績・残りは文字を変えず、green / dark_gray の色だけで区別する。
