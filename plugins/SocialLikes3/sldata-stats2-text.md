# /sldata dialog stats2 文言定義

編集後、ゲーム内で `/sldata dialog reload` すれば反映される。再ビルド不要。 `{...}` は Kotlin
側で実データに置き換わるプレースホルダ。数値・順位・棒・目盛りはここに書かない。 各ブロック内の
`title`、`subtitle`、`desc`、`note`、`empty`、`label`、`value`、`hover`、`tooltip`
等を編集する。 形式が壊れた行は warning を出し、その項目だけ既定値を使う。

## Section.stats2.window

```
title: SocialLikes 詳細統計: {target_name} / {category_label}
```

## Section.stats2.actions

```
details_label: 詳細統計
details_tooltip: 交流・応援・一番乗りの詳細を表示
reload_label: 再読込
reload_tooltip: 詳細統計を再表示
world_exclude_label: ライフ除外
world_include_label: ライフ含む
world_filter_tooltip: ワールド別反応のライフワールド表示を切替
graph_label: 通常グラフ
graph_tooltip: 週次グラフへ戻る
top5_label: Top5
top5_tooltip: 制作者別いいね数ランキング
other_formats_label: 他の形式で見る
other_formats_tooltip: Map、Slots、Displayを選択
close_label: 閉じる
close_tooltip: 閉じます
```

## Section.stats2.category.overview

```
label: 概要
tooltip: 比較表を見る
```

## Section.stats2.category.builds

```
label: あなたの建築
tooltip: 建築Top5、経過日数、初速
```

## Section.stats2.category.given

```
label: あなたのいいね
tooltip: 活動リズム、自己ベスト、継続日数
```

## Section.stats2.category.social

```
label: 人とのつながり
tooltip: 相互、リピーター、最速サポーター
```

## Section.stats2.category.publicity

```
label: 宣伝
tooltip: 宣伝効果と宣伝回数
```

## Section.stats2.category.server

```
label: サーバー全体
tooltip: 全体ランキング、ワールド別、週次
```

## Section.stats2.overview.comparison

```
title: 比較表
desc_line: 説明:{description}
empty: 比較できる建築データはまだありません。
```

### row.avg_per_build

```
label: 1作品あたりのいいね（平均）
desc: 作品がどれだけ反応を集めたか
own_label: あなた
own_sample: {own_build_count}作品
global_label: 全体平均
global_sample: {global_build_count}作品
unit: いいね/作品
```

### row.median_per_build

```
label: 1作品あたりのいいね（中央値）
desc: 突出した1作品に引っ張られない実力
own_label: あなた
own_sample: {own_build_count}作品
global_label: 全体中央値
global_sample: {global_build_count}作品
unit: いいね/作品
```

### row.given_build_popularity

```
label: 押した作品の人気
desc: 自分が選ぶ作品は人気寄りか
given_label: あなたが押した作品
given_sample: {given_build_count}作品
global_label: 全体平均
global_sample: {global_build_count}作品
unit: いいね/作品
```

### row.give_receive

```
label: 送ったいいねと受けたいいね
desc: 応援する側か、される側か
received_label: 受けた
received_sample: 自分の建築へ
given_label: 送った
given_sample: 相手の建築へ
unit: いいね
```

### row.mutual_rate

```
label: 相互になっている割合
desc: 片思いか、応え合えているか
supporting_label: 応援している側
supporting_sample: {supporting_count}人中{mutual_count}人
supported_label: されている側
supported_sample: {supported_count}人中{mutual_count}人
unit: %
```

### row.likes_per_day

```
label: 1日あたりのいいね
desc: 公開期間で正規化した反応ペース
latest_label: 最新の{latest_count}作品
latest_sample: 公開日で後半
past_label: 過去の{past_count}作品
past_sample: 公開日で前半
unit: いいね/日
```

### row.server_publicity

```
label: サーバー全体の宣伝・前後24時間
desc: サーバー全体の宣伝機能にどれだけ効果があるか
after_label: サーバー全体・宣伝後
after_sample: {repost_count}回の平均
before_label: サーバー全体・宣伝前
before_sample: {repost_count}回の平均
unit: いいね/回
```

## Section.stats2.builds.top_builds

```
title: 建築Top5
value: {like_count}いいね
empty: {target_name} の建築Top5はまだありません。
```

## Section.stats2.builds.age

```
title: 公開からの経過日数 ⏱
subtitle: 対象: 2026/7/2以降に公開した建築 {age_target_count}件{age_missing_suffix}
note: 受けたいいねが付くまでの日数。
same_day_label: 当日
within_7_days_label: 7日以内
within_30_days_label: 30日以内
over_30_days_label: 30日超
```

## Section.stats2.builds.initial_speed

```
title: 初速（初いいねまで）⏱
subtitle: 期間: 2026/7/2以降に公開した建築のみ
desc: 本人いいねは除外。作成時刻といいね時刻を同じ基準で計算。
range: 最短 {minimum_duration} / 中央値 {median_duration} / 最長 {maximum_duration} / 平均 {average_duration}
coverage: 対象 {target_build_count}作品 / 計測 {measured_build_count}作品
seconds_duration: {seconds}秒
minutes_duration: {minutes}分
hours_duration: {hours}時間{minutes}分
days_duration: {days}日{hours}時間
empty: {target_name} の作品で、2026/7/2以降に本人以外の初いいね時刻を持つデータはまだありません。
```

## Section.stats2.given.activity_rhythm

```
title: 活動リズム（JST）⏱
subtitle: 対象: いいね時刻がある送ったいいね {timestamped_given_count}件
legend: 凡例:▁0件/░少/▒中/▓多/█最多
hour_axis_label: 時
monday_label: 月
tuesday_label: 火
wednesday_label: 水
thursday_label: 木
friday_label: 金
saturday_label: 土
sunday_label: 日
night_type: あなたは夜型です
morning_type: あなたは朝型です
weekend_type: 週末型です
weekday_type: 平日型です
diagnosis: {rhythm_type} / {day_type}。反応する時間帯がこの範囲に寄っています。
empty: いいねした時刻のデータはまだありません。
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
daily_row: 日別: {best_history}
weekly_row: 週別: {best_history}
monthly_row: 月別: {best_history}
record: {period_label} {like_count}件
no_record: なし
empty: 日・週・月の自己ベスト更新はまだありません。
```

## Section.stats2.given.streak

```
title: 送ったいいね継続日数⏱
subtitle: 対象: いいね時刻がある送ったいいね {timestamped_given_count}件
summary: 現在 {current_days}日連続 / 最長 {longest_days}日 — {streak_title}
legendary_title: 称号: 伝説の継続者
habit_keeper_title: 称号: 習慣の守り手
weekly_supporter_title: 称号: 週刊サポーター
sprout_title: 称号: 継続の芽
first_step_title: 称号: はじめの一歩
future_title: 称号: これから
empty: 日次いいねデータはまだありません。
```

## Section.stats2.social.give_receive

```
title: もらった数と返した数
desc: 全期間。受取寄り（受÷送 {receive_per_given}）。
received_label: 受けた
received_value: {received_count}いいね
received_hover: {target_name} の建築が受けたいいね
given_label: 送った
given_value: {given_count}いいね
given_hover: {target_name} が相手の建築へ送ったいいね
empty: いいねの送受信データはまだありません。
```

## Section.stats2.social.mutual

```
title: 押した順の往復
desc: 棒＝あなたが押したいいね / 数字＝相手から返ったいいね
value: 返{received_count}
hover: あなたが送ったいいね
empty: まだ相互いいねペアはありません。
```

## Section.stats2.social.regular_supporters

```
title: 常連サポーター
desc: あなたの建築へ複数回いいねした人。
value: {like_count}いいね
hover: あなたの建築へ送ったいいね
empty: {target_name} の建築への常連サポーターはまだいません。
```

## Section.stats2.social.repeater

```
title: リピーター率
repeater_label: リピーター
first_only_label: 初回のみ
note: {repeater_rate} が2作品以上にいいね。
```

## Section.stats2.social.fastest_supporters

```
title: 新作最速サポーター ⏱
subtitle: 対象: いいね時刻が揃った自作品 {fastest_supporter_build_count}作品
value: {fastest_count}回
hover: 最速でいいねした作品数
empty: {target_name} の新作への最速サポーターデータはまだありません。
```

## Section.stats2.publicity.effect

```
title: 宣伝効果（前後24時間）⏱
desc: あなたの建築のリポスト {total_reposts}回。前後24時間平均（差 {reaction_delta}件）。\n宣伝＝10ポイント（P）を消費して建築を再表示する機能。他人のリポスト分も含みます。
after_label: 宣伝後
after_value: {after_average}いいね/回
after_hover: リポスト後24時間の平均
before_label: 宣伝前
before_value: {before_average}いいね/回
before_hover: リポスト前24時間の平均
empty: このプレイヤーの建築には、まだ宣伝履歴がありません。
```

## Section.stats2.publicity.recurring

```
title: 複数回宣伝の反応変化（イベント分析）⏱
desc: 反応増加の大きい順。各作品のリポスト前後24時間平均。
before_label: {build_title} 前
before_value: 前{before_average}
after_label: {build_title} 後
after_value: 後{after_average}
empty: 複数回宣伝された建築はまだありません。
```

## Section.stats2.publicity.top_builds

```
title: 宣伝回数ランキング Top5
desc: 宣伝回数の多い順。あなたの建築のリポスト履歴。
value: {publicity_count}回
empty: まだ宣伝された建築はありません。
```

## Section.stats2.server.first_likers

```
title: 全体の一番乗りランキング（押した人）⏱
subtitle: 対象: いいね時刻が揃った建築 {complete_liked_build_count}件
value: {first_like_count}回
hover: 一番乗り回数
empty: まだ一番乗りデータはありません。
```

## Section.stats2.server.world_ratio

```
title: ワールド別のいいねレシオ{life_world_suffix}
life_included_suffix: （ライフ含む）
life_excluded_suffix: （ライフ除外）
desc: ライフ＝生活ワールド（lifeworld）。受÷押の高い順・上位10ワールド。
value: 受÷押 {like_ratio}
hover: いいねレシオ
empty: 押したいいねを持つワールドはまだありません。
```

## Section.stats2.server.weekly_owners

```
title: 今週いいねした制作者 ⏱
desc: 今週、あなたがいいねした建築の制作者。送ったいいね数の多い順。
value: {like_count}いいね
hover: 今週送ったいいね
empty: 今週いいねした制作者データはありません。
```

## Section.stats2.server.weekly_likes

```
title: 週次いいね（サーバー全体）
desc: 直近{weekly_bucket_count}週。
```
