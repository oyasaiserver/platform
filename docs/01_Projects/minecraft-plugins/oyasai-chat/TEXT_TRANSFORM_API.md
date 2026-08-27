---
title: "OyasaiChat Text Transform API"
category: platform
status: active
owner: platform-maintainers
source_of_truth: "plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/api/"
related_paths:
  - plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/api/
  - plugins/OyasaiChat/src/main/kotlin/io/oyasai/chat/paper/transform/
last_validated: "2026-08-25"
agent_task: null
---

# Text Transform API

## 目的

OyasaiChatのrouting、権限、viewer、format、Velocity transportを変更せず、受信者ごとの本文Component差し替えを行えるPaper APIを提供する。
翻訳、検閲、アクセシビリティ変換などの実装はOyasaiChatへ組み込まず、外部プラグインがこのAPIへ登録する。

## 所有境界

OyasaiChatが所有するもの:

- チャンネル、PM、外部チャット、Velocity Envelopeのrouting
- `AsyncChatEvent.viewers()`との積集合、送信権限、受信権限
- 送信者Presentation snapshotと最終フォーマット
- Console、Velocity、Discordへ送る原文
- 受信者単位の配送順、online/session確認、reload/disable境界
- transformer例外・失敗時の原文fail-open

外部transformerが所有するもの:

- 本文を差し替えるかどうかの判断
- 外部I/O、cache、timeout、変換固有の設定と状態
- 差し替えComponentの安全性

OyasaiChatは翻訳provider、言語設定、看板、変換結果cacheを所有しない。

## API契約

PaperのBukkit Services Managerから`OyasaiChatApi`を取得する。

```kotlin
val api = server.servicesManager.load(OyasaiChatApi::class.java)
val registration = api.registerTextTransformer(plugin, descriptor, transformer)
```

`RecipientTextTransformRequest`は次を含む。

- message ID
- `PUBLIC_CHAT` / `PRIVATE_MESSAGE` / `EXTERNAL_CHAT`
- UUID、名前、任意のclient localeを持つ送信者snapshot
- 受信者`Player`
- 原文plain text

transformerのエントリポイントはメインスレッド上で呼び出され、すぐに次のいずれかを返す。
この呼び出し内で同期HTTP、`Future.get()`、`join()`などの外部I/O待機を行ってはならない。
LLM APIなどの外部APIは`sendAsync`や`CompletableFuture`等で非同期に開始し、完了Stageだけを返す。

- `null`: この要求をclaimしない。次のtransformerへ進む。
- `CompletionStage<PassThrough>`: 原文を表示する。
- `CompletionStage<Replace>`: 返したComponentを本文として表示する。

`TextTransformerDescriptor.includeSender = true`を指定したrecipient transformerは、ローカル送信者本人にも適用される。既定値は`false`で、既存の送信者原文表示を維持する。

同一surfaceを複数transformerが扱う場合、priority降順、登録順で最初にclaimしたものだけを使う。
登録は`TextTransformerRegistration.close()`で解除し、所有plugin以外は解除できない。

## URL表示

URLは常に短縮表示する。許可されたURLはクリック可能にし、許可されていないURLはクリック不可の短縮テキストとして表示する。
許可判定は送信権限と`links.allowed-domains`のドメイン制限で行う。
変換後の本文も同じ規則でリンク化する。許可済みURLは短縮表示かつクリック可能にし、未許可URLは短縮表示のみとする。

## Threadと配送

- 登録、解除、transform開始はPaperメインスレッド限定。transformerは外部I/Oを待たず、すぐにStageを返す。
- future完了threadは問わない。
- OyasaiChatはfuture完了後にPaper schedulerへ戻り、同じPlayer instanceがonlineか確認して送信する。
- transformerの完了後にOyasaiChatが本文を整形して配送する。外部I/Oには利用側でtimeoutを設定する。
- transformerの例外、`null`結果、close、timeout結果は原文へfail-openする。
- transformerが存在するsurfaceはOyasaiChatがPlayer viewerを手動配送する。ConsoleなどPlayer以外のviewerは既存Rendererで原文を受け取る。
- reloadは受理済みの受信者別配送queueが空のときだけ行い、旧runtime closeによる欠落を防ぐ。

## 互換性

API型は`io.oyasai.chat.api`に限定し、OyasaiChat内部のconfig/state/formatter型を公開しない。
Velocity側はこのPaper APIを読み込まず、Envelopeの任意`senderLocale`だけを透過する。field欠落を受理するためrolling更新を維持する。
