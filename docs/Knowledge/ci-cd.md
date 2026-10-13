---
date: 2026-10-13
record_type: knowledge
source:
  - .github/workflows/
  - packages/oyasai-secrets-action/
  - packages/oyasai-push-nix-images/
  - packages/nix-copy-to-s3/
  - packages/oyasai-infra/terraform_io.just
  - packages/oyasai-cdktf/src/stacks/common-internal.ts
  - packages/oyasai-cdktf/src/stacks/platform-services.ts
  - CODEOWNERS
  - flake.nix
  - nix/flake-parts/docker.nix
  - nix/flake-parts/oyasai-scope.nix
  - nix/oyasai-scope.nix
  - nix/oyasai-docker-tools.nix
  - nix/oyasai-overlay.nix
  - nix/treefmt.nix
---

# CI/CD（GitHub Actions）

## 要約

何について: `.github/workflows/` の全ワークフロー、PR 検査と必須チェック、PR 用環境の作成と削除、空きサーバーへの自動デプロイ、プラグインの自動更新、イメージと Nix キャッシュの配布、手動デプロイ、秘密情報の取り出し方。

結論: 流れは「PR を開く → 検査 → 同じ PR 用の環境へデプロイ」と「master 更新 → 検査とイメージ配布のみ（自動デプロイはしない）」の二本立て。PR 環境は PR が閉じたあと、毎日の掃除ジョブが削除する。本番（`master` 環境）への反映は、空きサーバーの自動デプロイか、手動の CD のどちらか。必須チェックとマージ方法はリポジトリ設定としてコード（cdktf）に書かれている。

未確認のこと（末尾にもまとめる）:
- リポジトリ設定のコード（`common-internal` スタック）が実際に適用済みか。どのワークフローもこのスタックをデプロイしない。
- 外部のもの（`nocommit` アクション、外部 flake の `nix-flake-check-changed`）の中身。
- 実際の実行結果、Infisical や Terraform Cloud 側の設定。

関連: PR の作り方は [workflows.md](workflows.md)、CI で起きた失敗の訂正は [mistakes.md](mistakes.md)。

## ワークフロー一覧

| ファイル | 起動 | 役割 |
|---|---|---|
| `ci.yaml` | `pull_request`（既定の種類: opened・synchronize・reopened）、`push`（master） | 検査、イメージ配布、PR 環境のデプロイ |
| `pr.yaml` | `pull_request` | base ブランチと PR タイトルの検査 |
| `deploy-label.yaml`（名前は Deploy） | PR の `opened` `synchronize` `labeled` | イメージ配布（ラベルに関係なく毎回）と、ラベル `deploy` 付きの PR の起動プロキシ付きデプロイ |
| `cd.yaml` | 手動（`workflow_dispatch`） | 指定した環境へ手動デプロイ |
| `push-to-ghcr.yaml` | 他から呼ばれる（`workflow_call`） | Docker イメージの作成と配布 |
| `deploy-platform.yaml` | 他から呼ばれる | infra → services の順にデプロイ |
| `modify-platform-stack.yaml` | 他から呼ばれる | 1 スタックの deploy / destroy 本体 |
| `destroy-platform.yaml` | 他から呼ばれる | services → infra の順に削除 |
| `destroy-stale-envs.yaml` | 毎日 19:00 UTC（日本時間 4:00）、手動 | 閉じた PR の環境を削除 |
| `auto-deploy-empty.yaml` | 30 分ごと、手動 | 誰もいないときに master を再デプロイ |
| `update-plugins.yaml` | 毎日 0:00 UTC（日本時間 9:00）、手動 | プラグインのロックファイルを更新する PR を作り、自動マージを予約 |

根拠: 各ファイルの `on:` 節。

## PR で通る検査

- `pr.yaml`
  - `merging-into-master`: base が `master` であることを確認する。
  - `pr-title`: PR タイトルが Conventional Commits 形式であることを確認する。type は `build` `chore` `ci` `docs` `feat` `fix` `perf` `refactor`（`prefactor` も可）`revert` `style` `test`。scope は英数字・`_`・`-` のみ（日本語不可）、`!` 任意、続けて `: `。
- `ci.yaml`（PR と `master` への push）
  - `nocommit`: `nocommit` の検出（外部アクション。規則は未確認）。
  - `nix-flake-check`（Ubuntu と macOS）: 秘密情報を取り出し、R2 の資格情報を設定し、`nix run .#nix-flake-check-changed` を実行する。その後 `nix run .#nix-copy-to-s3` を `if: always()` で実行する。
    - `nix-flake-check-changed` は外部 flake（`tools` 入力）のもので、中身は未確認。
    - 整形の検査: treefmt-nix の flake モジュールを読み込んでおり（`flake.nix`、`nix/flake-parts/treefmt.nix`）、整形は flake の check として扱われる見込み。`nix-flake-check-changed` がそれを実際にビルドするかは未確認。`docs/*` は treefmt の対象外（`nix/treefmt.nix` の `global.excludes`）。
  - `nix-flake-health`（Ubuntu のみ）: `nix flake show`、`nix flake lock --no-update-lock-file`（ロックがずれていないか）、`nix flake check --no-build`（評価だけでビルドしない）。秘密情報は使わない。
  - `nix-devshell`（Ubuntu と macOS）: `nix develop` の環境を作り、キャッシュを配布する。
  - `non-nix-development`（Ubuntu と macOS、Temurin 25）: Nix を使わずに `./gradlew build --parallel`、`./gradlew fmt`、`./gradlew lock` を実行し、差分（`git status`）が出たら「Nix 側とずれている」として失敗させる。
    - `./gradlew fmt` を CI が呼んでいるが、手元の整形は `nix fmt` を使う（[Home.md](../Home.md)）。この検査は Gradle だけの環境が壊れていないかを見るもの。

### 必須チェックとマージの条件

リポジトリ設定は `packages/oyasai-cdktf/src/stacks/common-internal.ts` に書かれている（このスタックを適用するワークフローはなく、実際の設定と一致しているかは未確認）。

- 必須チェック: `nocommit`、`merging-into-master`、`pr-title`、`nix-flake-health`、`nix-flake-check`（macOS・Ubuntu）、`nix-devshell`（macOS・Ubuntu）。
- `non-nix-development`、`push-to-ghcr`、`deploy` は必須ではない。落ちてもマージは止まらない。
- マージは squash のみ。squash のコミットタイトルは PR タイトルになる（だから `pr-title` 検査がコミット履歴の形式を守る）。マージ後にブランチは自動削除。自動マージは許可。
- 承認数は 0。ただし CODEOWNERS でオーナーが付いたパスはオーナーのレビューが要る。オーナーなしは `plugins/`、`gradle/libs.versions.toml`、`gradle.lock`、`docs/`、`packages/oyasai-plugin-registry/lock.json`（`CODEOWNERS`）。
- 未解決のレビュースレッドがあるとマージできない。

## PR 用の環境の作成

環境名は `pr-<PR番号>`。1 つの環境は 2 つの Terraform スタック（`platform-pr-<番号>-infra` と `platform-pr-<番号>-services`）からなる。

作成の経路は 2 つある。

1. `ci.yaml` の `deploy` ジョブ: PR の opened・synchronize・reopened のたびに走る（ラベル不要。docs だけの PR でも走る）。`push-to-ghcr` の成功が前提。コード上に `TODO: enable merge deploy` の注記がある。
2. `deploy-label.yaml`: PR に `deploy` ラベルがあるとき、opened・synchronize・labeled で走る。`start-proxy: true` を渡すので、この経路だけ起動プロキシが立つ。`push-to-ghcr` はラベルの有無に関係なく毎回走る（`ci.yaml` 側と二重）。

どちらも `deploy-platform.yaml` を呼ぶ。流れ:

1. `infra` スタック（`modify-platform-stack.yaml`、`operation: deploy`）: Terraform Cloud の workspace を作る（`oyasai-infra` の `terraform_io::create_workspace`。`curl` に `--fail` がなく、既にあっても失敗にならない）→ `oyasai-cdktf deploy <スタック> --ignore-missing-stack-dependencies --auto-approve` → Nix キャッシュを配布（この step は `if: always()` ではない）。
2. `services` スタック: `infra` が成功してから同じ手順。

PR 環境のコンテナは、Actions のランナー自身の Docker（`unix:///var/run/docker.sock`）に作られ、状態はローカルの backend に置かれる。本番（`master`）だけが TLS 付きでリモートの Docker に繋ぐ（`packages/oyasai-cdktf/src/stacks/platform-services.ts`）。つまり PR 環境のサーバーは、そのジョブが動いている間だけランナー上に存在する。

並行制御: `concurrency.group` はスタック名。`services` は master 以外で `cancel-in-progress: true` なので、同じ PR の新しい実行が古い実行を止める。`infra` は `cancel-in-progress: false`（待つ）。

ラベル付きの PR では、opened・synchronize のときに 2 つの経路が同時に走り、同じスタック名を取り合う。`services` は後から来た方が先の方を取り消すが、どちらが後になるかは実行順次第。

起動プロキシ（`start-proxy`）: `services` ジョブの最後で、ランナー上の `minecraft-main` コンテナのログを流しつつ、`bore-cli` で Minecraft のポート（25565）を公開の中継サービスへ転送する。step の `timeout-minutes` は 30 で、30 分で止まる。中継先の接続先はジョブのログに出る（未確認）。公開範囲を変える変更では、ここを先に見る。

根拠: `.github/workflows/ci.yaml`（`deploy` ジョブ）、`deploy-label.yaml`、`deploy-platform.yaml`、`modify-platform-stack.yaml`、`packages/oyasai-infra/terraform_io.just`。

## PR 用の環境の削除

- 自動の経路は 1 つだけ: 毎日 19:00 UTC（日本時間 4:00）の `destroy-stale-envs.yaml`。PR の `closed` イベントで消す仕組みはない（どのワークフローにも `closed` の指定がない）。マージ済みの PR も `closed` として扱われる。
- 処理:
  1. `oyasai-infra` の `terraform_io::list_workspaces` で Terraform Cloud の workspace 一覧を取り、名前から `pr-<番号>` を抜き出して重複を除く（workspace 名が正本）。
  2. 各番号の PR の状態を GitHub API で見て、`closed` のものだけを選ぶ。
  3. 選ばれた環境ごとに matrix で `destroy-platform.yaml` を呼ぶ。`services` を消してから `infra` を消す。各スタックの destroy の後に `terraform_io::delete_workspace`（Terraform Cloud の safe-delete）で workspace も消す。
- 一覧取得はページ指定をしていない。workspace が多いと先頭ページ分しか対象にならない可能性がある（API の既定の件数は未確認）。
- 手動では `destroy-stale-envs.yaml` を `Run workflow` で起動する（同じ選び方をする）。特定の環境だけを消すワークフローはない。

根拠: `.github/workflows/destroy-stale-envs.yaml`、`destroy-platform.yaml`、`modify-platform-stack.yaml`、`packages/oyasai-infra/terraform_io.just`。

## 空きサーバーへの自動デプロイ

`auto-deploy-empty.yaml` は 30 分ごとに動く（手動起動も可）。

1. `push-to-ghcr` は条件なしで毎回走る。人がいてもいなくても、30 分ごとにイメージ配布の確認が走る。
2. `check-players`: 本番サーバーの状態を `nix run .#mc-monitor -- status ... -show-player-count` で取り、人数を `count` に出す。
3. `count` が `0` で、かつ `push-to-ghcr` が成功したとき、`deploy-platform.yaml` を `master` 環境で呼ぶ。人数が取れなかった（空や非数値）ときはデプロイしない。

`0` が続く限り、同じ master 環境のデプロイが 30 分ごとに走る。変化がないとき実質 no-op になるかは未確認（`cdktf deploy --auto-approve` の差分次第）。

注意: `mc-monitor` は overlay で `pkgs` に入っているが（`nix/oyasai-overlay.nix`）、flake の `packages` は `nix/oyasai-scope.nix` のスコープから作られ、そこに `mc-monitor` の指定が見当たらない。`nix run .#mc-monitor` が解決できているかは未確認。空きなのにデプロイされないときは、まずこの step を見る。

根拠: `.github/workflows/auto-deploy-empty.yaml`、`nix/flake-parts/oyasai-scope.nix`、`nix/oyasai-scope.nix`、`nix/oyasai-overlay.nix`。

## 本番（master 環境）への反映

- `master` への push: `ci.yaml` は検査と `push-to-ghcr` だけで、デプロイはしない（`deploy` ジョブは `pull_request` のときだけ）。
- 自動: 上の「空きサーバーへの自動デプロイ」。master の変更は、次にサーバーが 0 人になった 30 分刻みの時点で反映される。
- 手動: 次の「手動デプロイの手順」。

## 手動デプロイの手順

1. GitHub の Actions で `CD` ワークフローを開き、`Run workflow` を押す。
2. ブランチを選ぶ。デプロイされるのは選んだブランチの内容。ブランチと環境の組み合わせを確かめる仕組みはないので、本番へは `master` を選ぶ。
3. `environment` に環境名を入れる（既定は `master`）。PR 環境なら `pr-<番号>`。自由入力なので綴りを間違えると新しい環境ができる。
4. `push-to-ghcr` → `deploy-platform`（infra → services）の順に走る。起動プロキシは立たない。
5. 本番の `services` は `cancel-in-progress: false` なので、自動デプロイと重なったときは取り消さずに順番を待つ。

根拠: `.github/workflows/cd.yaml`、`deploy-platform.yaml`、`modify-platform-stack.yaml`。

## イメージの作成と配布

1. `nix/flake-parts/docker.nix`: flake の各パッケージの `docker` 属性と `oyasai-standalone-images` から、「イメージ名:タグ と derivation のパス」の一覧を `all-docker-derivations` として出す。
2. `oyasai-push-nix-images`（`push-to-ghcr.yaml` から実行。GitHub のトークンでレジストリにログイン済み）:
   - 一覧の各イメージについて、レジストリに同じ名前:タグがあるかを `skopeo inspect` で確かめる。
   - 無いものだけをまとめてビルドし（`--keep-going`）、`docker-archive` からレジストリへ `skopeo copy` する。
   - 行き先は GitHub Container Registry の組織の配下。`nix/oyasai-docker-tools.nix` が名前に接頭辞を付ける。
   - タグ: このリポジトリのどのイメージもタグを指定していない。nixpkgs の dockerTools の既定では出力パスのハッシュがタグになり、内容が変わればタグも変わる（nixpkgs 側の挙動で、このリポジトリでは未確認）。
3. デプロイ側は同じ一覧のタグを使う: `oyasai-cdktf` に `all-docker-tags`（x86_64-linux）を渡している（`nix/flake-parts/oyasai-scope.nix`）。
4. `nix-copy-to-s3`（`push-to-ghcr` と検査ジョブの最後は `if: always()`、`modify-platform-stack` では成功時のみ）:
   - 署名鍵で全ストアパスに署名する。
   - `nix path-info --all` から `.drv` などを除き、50 件ずつ 8 並列で `nix copy` して R2 のキャッシュへ送る。
   - キャッシュの URL と公開鍵はリポジトリの Actions 変数から渡される。

根拠: `.github/workflows/push-to-ghcr.yaml`、`packages/oyasai-push-nix-images/oyasai-push-nix-images.sh`、`packages/nix-copy-to-s3/nix-copy-to-s3.sh`、`nix/flake-parts/docker.nix`、`nix/oyasai-docker-tools.nix`。

## プラグインの自動更新

`update-plugins.yaml`（毎日 0:00 UTC、手動も可）:

1. `packages/oyasai-plugin-registry` で `nix run .#oyasai-plugin-registry -- 26.2 > lock.json` を実行する。引数 `26.2` の意味は未確認。
2. 固定の作業ブランチ `chore/plugin-registry-automatic-update` を作り直す（手元の同名ブランチは削除）。
3. 差分が無ければ何もせず終わる。
4. 差分があれば `chore(oyasai-plugin-registry): update lockfile` で commit し、force push して PR を作り（`gh pr create --fill`）、`gh pr merge --squash --auto` で自動マージを予約する。

`lock.json` には CODEOWNERS のオーナーが付いていないので、レビューは不要。必須チェックが通れば自動でマージされる。

未確認: PR は `GITHUB_TOKEN` で作られる。GitHub の仕様では、このトークンで作った PR では他のワークフローが起動しないため、必須チェックが報告されず自動マージが止まったままになる可能性がある。また、前回の PR が開いたままだと `gh pr create` が失敗する可能性がある（その場合も force push で PR の中身は更新される）。

根拠: `.github/workflows/update-plugins.yaml`、`CODEOWNERS`。

## 秘密情報の取り出し方

仕組みは `packages/oyasai-secrets-action/`（`action.yaml`、`src/main.ts`、`src/actions-toolkit.ts`）。秘密の保管先は Infisical。

1. ジョブに `id-token: write` があると、GitHub が OIDC トークンを発行できる。無いと取り出しは失敗する（`actions-toolkit.ts` がこの旨のエラーを出す）。
2. そのトークンで Infisical の machine identity に OIDC でログインし、一時的なアクセストークンを得る。identity の指定は各ワークフローの `uses: ./packages/oyasai-secrets-action` の `with:` にある。
3. 得たトークンで、指定の環境・プロジェクト・パスの秘密情報を全件取得する。
4. 全件の値を `add-mask` で伏せ字にする（アクセストークンも伏せる）。
5. `with.secrets` に列挙した名前だけを `GITHUB_ENV` に書き出す。アクセストークン自体は、特別な名前を列挙したときだけ書き出す。

新しい秘密情報を使うときは、Infisical に登録し、使うジョブの `secrets:` に名前を足す。

失敗の出方（コードから読めること）: ログイン・取得の HTTP 応答の成否を確かめていない（`main.ts` の `oidcLogin`、`getSecrets`）。認証や取得に失敗すると、エラー内容ではなく `undefined` を扱う `TypeError` で step が落ちる。一方、列挙した名前が Infisical に無い場合はエラーにならず、その変数が設定されないまま後の step が動く。

## 失敗したとき最初に見るところ

| 症状 | 最初に見る場所 |
|---|---|
| PR がすぐ落ちる（`pr-title` や `merging-into-master`） | `pr.yaml`。タイトルの type・scope（英数字のみ）と base を直す |
| `nocommit` で落ちる | ログに出た箇所。外部アクションの規則は未確認 |
| 秘密情報の step で `TypeError` | `oyasai-secrets-action` のログ。`id-token: write` の有無、Infisical 側の identity 設定（外部、未確認） |
| 後の step で資格情報が空 | そのジョブの `secrets:` に名前があるか、Infisical に同名があるか |
| `nix flake lock` の検査で落ちる | `flake.lock` が古い。手元で `nix flake lock` を実行してコミット |
| `non-nix-development` が drifting で落ちる | `./gradlew fmt` `./gradlew lock` の差分。必須ではないがマージ前に直す |
| PR 環境が立たない | `ci.yaml` の `deploy` と `deploy-label.yaml` のどちらが走ったか、前段の `push-to-ghcr` が成功したか。`modify-platform-stack` の `Create TF Workspace` と deploy の step |
| 環境のデプロイが途中で止まる | `concurrency` による取り消し（同じスタックへの後続の実行） |
| 閉じた PR の環境が消えない | `destroy-stale-envs.yaml` の `list-stale-environments` の出力。一覧のページ漏れ、対象が空のときの matrix の挙動（未確認） |
| 空きなのにデプロイされない | `auto-deploy-empty.yaml` の `Check player count` の step と出力 `count`、`push-to-ghcr` の成否 |
| イメージが上がらない | `push-to-ghcr` の `oyasai-push-nix-images` step。レジストリへのログインと、同名タグの既存判定 |
| キャッシュに載らない | `nix-copy-to-s3` の step（検査ジョブでは前段が落ちても走る） |
| 自動更新の PR がマージされない | 必須チェックが起動・報告されているか（上の未確認点） |

## 未確認のこと（まとめ）

- `common-internal` スタック（リポジトリ設定・必須チェック）が実際に適用されているか、誰がどう適用するか。
- 外部アクション `nocommit` と、外部 flake の `nix-flake-check-changed` の中身（整形の check を含むか）。
- `nix run .#mc-monitor` が flake の出力として解決できるか。
- `oyasai-plugin-registry` の引数 `26.2` の意味。自動更新の PR で必須チェックが走るか。
- イメージタグが内容で決まるか（nixpkgs の既定に依存）。
- Terraform Cloud の workspace 一覧のページ数の上限。対象が空のときの matrix の挙動。
- `auto-deploy-empty.yaml` の master 再デプロイが、変化のないとき実質 no-op かどうか。
- 起動プロキシの接続先がどこに表示されるか。
- Infisical と Terraform Cloud 側の設定、実際の実行ログ。
