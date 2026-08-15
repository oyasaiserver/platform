# /sldata dialog stats2 文言定義

編集後、ゲーム内で `/sldata dialog reload` すれば反映される。再ビルド不要。 `{...}` は Kotlin
側で実データに置き換わるプレースホルダ。数値・順位・棒・目盛りはここに書かない。 各ブロック内の
`title`、`subtitle`、`desc`、`note`、`empty` を編集する。形式が壊れた行は warning
を出し、その項目だけ既定値を使う。

## Section.stats2.window

```
title: SocialLikes 詳細統計: {target_name} / {category_label}
```

## Section.stats2.overview.comparison

```
title: 比較表
empty: 比較できる建築データはまだありません。
```

### row.avg_per_build

```
label: 1作品あたりのいいね（平均）
desc: 作品がどれだけ反応を集めたか
```

### row.median_per_build

```
label: 1作品あたりのいいね（中央値）
desc: 突出した1作品に引っ張られない実力
```

### row.given_build_popularity

```
label: 押した作品の人気
desc: 自分が選ぶ作品は人気寄りか
```

### row.give_receive

```
label: 送ったいいねと受けたいいね
desc: 応援する側か、される側か
```

### row.mutual_rate

```
label: 相互になっている割合
desc: 片思いか、応え合えているか
```

### row.likes_per_day

```
label: 1日あたりのいいね
desc: 公開期間で正規化した反応ペース
```

### row.server_publicity

```
label: サーバー全体の宣伝・前後24時間
desc: サーバー全体の宣伝機能にどれだけ効果があるか
```

## Section.stats2.builds.top_builds

```
title: 建築Top5
empty: {target_name} の建築Top5はまだありません。
```

## Section.stats2.builds.age

```
title: 公開からの経過日数 ⏱
subtitle: 対象: 2026/7/2以降に公開した建築 {age_target_count}件{age_missing_suffix}
note: 受けたいいねが付くまでの日数。
```

## Section.stats2.builds.initial_speed

```
title: 初速（初いいねまで）⏱
subtitle: 期間: 2026/7/2以降に公開した建築のみ
desc: 本人いいねは除外。作成時刻といいね時刻を同じ基準で計算。
empty: {target_name} の作品で、2026/7/2以降に本人以外の初いいね時刻を持つデータはまだありません。
```

## Section.stats2.given.activity_rhythm

```
title: 活動リズム（JST）⏱
subtitle: 対象: いいね時刻がある送ったいいね {timestamped_given_count}件
legend: 凡例:▁0件/░少/▒中/▓多/█最多
```

## Section.stats2.given.monthly_pace

```
title: 月別ペース変化（送ったいいね）⏱
note: 縞の棒＝集計途中の当月。完了月との比較には使いません。
```

## Section.stats2.given.personal_best

```
title: 自己ベスト更新履歴（送ったいいね）⏱
subtitle: 対象: いいね時刻がある送ったいいね {timestamped_given_count}件
```

## Section.stats2.given.streak

```
title: 送ったいいね継続日数⏱
subtitle: 対象: いいね時刻がある送ったいいね {timestamped_given_count}件
empty: 日次いいねデータはまだありません。
```

## Section.stats2.social.give_receive

```
title: もらった数と返した数
desc: 全期間。受取寄り（受÷送 {receive_per_given}）。
empty: いいねの送受信データはまだありません。
```

## Section.stats2.social.mutual

```
title: 押した順の往復
desc: 棒＝あなたが押したいいね / 数字＝相手から返ったいいね
empty: まだ相互いいねペアはありません。
```

## Section.stats2.social.regular_supporters

```
title: 常連サポーター
desc: あなたの建築へ複数回いいねした人。
empty: {target_name} の建築への常連サポーターはまだいません。
```

## Section.stats2.social.repeater

```
title: リピーター率
note: {repeater_rate} が2作品以上にいいね。
```

## Section.stats2.social.fastest_supporters

```
title: 新作最速サポーター ⏱
subtitle: 対象: いいね時刻が揃った自作品 {fastest_supporter_build_count}作品
empty: {target_name} の新作への最速サポーターデータはまだありません。
```

## Section.stats2.publicity.effect

```
title: 宣伝効果（前後24時間）⏱
desc: あなたの建築のリポスト {total_reposts}回。前後24時間平均（差 {reaction_delta}件）。\n宣伝＝10ポイント（P）を消費して建築を再表示する機能。他人のリポスト分も含みます。
empty: このプレイヤーの建築には、まだ宣伝履歴がありません。
```

## Section.stats2.publicity.recurring

```
title: 複数回宣伝の反応変化（イベント分析）⏱
desc: 反応増加の大きい順。各作品のリポスト前後24時間平均。
empty: 複数回宣伝された建築はまだありません。
```

## Section.stats2.publicity.top_builds

```
title: 宣伝回数ランキング Top5
desc: 宣伝回数の多い順。あなたの建築のリポスト履歴。
empty: まだ宣伝された建築はありません。
```

## Section.stats2.server.first_likers

```
title: 全体の一番乗りランキング（押した人）⏱
subtitle: 対象: いいね時刻が揃った建築 {complete_liked_build_count}件
empty: まだ一番乗りデータはありません。
```

## Section.stats2.server.world_ratio

```
title: ワールド別のいいねレシオ{life_world_suffix}
desc: ライフ＝生活ワールド（lifeworld）。受÷押の高い順・上位10ワールド。
empty: 押したいいねを持つワールドはまだありません。
```

## Section.stats2.server.weekly_owners

```
title: 今週いいねした制作者 ⏱
desc: 今週、あなたがいいねした建築の制作者。送ったいいね数の多い順。
empty: 今週いいねした制作者データはありません。
```

## Section.stats2.server.weekly_likes

```
title: 週次いいね（サーバー全体）
desc: 直近{weekly_bucket_count}週。
```
