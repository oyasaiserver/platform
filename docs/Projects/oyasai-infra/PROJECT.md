---
date: 2026-10-13
record_type: knowledge
source:
  - packages/oyasai-infra/
  - packages/oyasai-cdktf/
  - packages/oyasai-cdktf-bindings/
  - packages/oyasai-cron/
  - packages/oyasai-web/
  - packages/oyasai-standalone-images/
  - nix/nixos/oyasai-scope.nix
  - nix/oyasai-scope.nix
  - nix/oyasai-docker-tools.nix
  - nix/flake-parts/codegen.nix
  - nix/flake-parts/docker.nix
  - nix/flake-parts/oyasai-scope.nix
  - .github/workflows/modify-platform-stack.yaml
  - .github/workflows/deploy-platform.yaml
  - .github/workflows/destroy-platform.yaml
  - .github/workflows/cd.yaml
  - .github/workflows/ci.yaml
  - .github/workflows/deploy-label.yaml
  - .github/workflows/auto-deploy-empty.yaml
  - .github/workflows/destroy-stale-envs.yaml
  - .github/workflows/push-to-ghcr.yaml
---

# oyasai-infra — 本番・PR 環境のインフラ

**何について**: Terraform（CDKTF 0.21、TypeScript）で書いた、Cloudflare・Grafana Cloud・Infisical・GitHub・Docker のスタック群と、それを GitHub Actions から流す仕組み。
**結論**: スタックは `common-*`（全環境共通）と `platform-<環境>-*`（環境ごと）の 2 系統。環境名 `master`（本番）と `pr-<番号>`（PR 検証）は `ENVIRONMENT` 環境変数で切り替わる。synth は毎回 4 スタックすべてを組み立てるため、どのスタックを流すときも全スタックの必須環境変数が要る。
**未確認のこと**: 末尾「未確認」節を参照。特に、PR 環境の services の破棄で何が起きるか、`common-*` を誰がどこから流すか。synth・apply はこの作業では実行していない。

## AI 作業入口

| 項目 | 内容 |
|---|---|
| 実装の正本 | `packages/oyasai-cdktf/src/`（スタック定義）、`.github/workflows/`（起動経路） |
| 主要コード | `src/index.ts`（synth の入口）、`src/stacks/*.ts`（4 スタック）、`src/secrets.ts`（秘密の読み取り）、`src/stacks/oyasai-terraform-stack.ts`（環境名の前置と state の置き場）、`src/helpers.ts`（`mustEnv`・`envs`・`ports`） |
| 操作用 CLI | `packages/oyasai-infra/`（`justfile` と `terraform_io.just`。TF Cloud のワークスペース作成・削除・一覧） |
| 生成物 | `packages/oyasai-cdktf-bindings/gen/`（自動生成。手で編集しない。再生成は §7） |
| イメージの参照元 | `packages/oyasai-standalone-images/`、`nix/flake-parts/docker.nix`、`nix/flake-parts/oyasai-scope.nix` |
| テスト | インフラのテストはない（`packages/oyasai-cdktf/` にテストなし） |
| 整形 | `/nix/var/nix/profiles/default/bin/nix fmt`（[Home](../../Home.md) の「ビルドと検証の基本」） |
| 関連 Knowledge | ワークフローの起動条件・PR 環境の作成と削除・イメージ配布・秘密の取り出し方は [ci-cd.md](../../Knowledge/ci-cd.md)。リポジトリ全体の流れは [architecture.md](../../Knowledge/architecture.md)。「本番反映の前」は [mistakes.md](../../Knowledge/mistakes.md)。 |

## 1. 全体構成

4 つのスタックがある。依存は `common-infra` → `common-internal`、`common-infra` → `platform-<env>-infra` → `platform-<env>-services`（コンストラクタ引数で参照。`src/index.ts`）。

| スタック ID | 定義 | 主なリソース | state の置き場 |
|---|---|---|---|
| `common-infra` | `src/stacks/common-infra.ts` | ドメイン登録とゾーン、Infisical のプロジェクト・環境・機械アイデンティティ（GitHub Actions の OIDC で認証）、Grafana Cloud のスタック・サービスアカウント・アクセスポリシーとトークン、Loki データソース、ダッシュボード | TF Cloud（`CloudBackend`、ワークスペース名 = スタック ID） |
| `common-internal` | `src/stacks/common-internal.ts` | Nix キャッシュ用 R2 バケット（カスタムドメイン・ライフサイクル）、GitHub リポジトリ設定・既定ブランチ・ruleset・Actions の権限・組織変数（Nix キャッシュの公開鍵と取得先） | TF Cloud |
| `platform-<env>-infra` | `src/stacks/platform-infra.ts` | 環境別の R2 バケット、ルートの DNS A レコード。master のみ外部 wiki への CNAME | TF Cloud |
| `platform-<env>-services` | `src/stacks/platform-services.ts` | Docker ネットワーク、イメージ、コンテナ群（§2 の表）、ランダム値（RCON パスワード・転送用シークレット・Floodgate 鍵） | master は TF Cloud、それ以外は `LocalBackend`（ランナー上） |

- 各スタックは `src/stacks/oyasai-terraform-stack.ts` の基底クラスを継承する。`createCloudBackend()` が TF Cloud の名前付きワークスペースを指す。
- 秘密は `src/secrets.ts` の `createSecrets()` が Infisical のデータソースから読む。値は `Fn.sensitive` で包む。読める名前は同ファイルの `secretKeys` が正本（「最小限に保つ」とコメントにある）。
- `common-*` の一部の値（Grafana Cloud の操作用トークン、Nix キャッシュの公開鍵）は秘密ストアではなく環境変数から `mustEnv` で読む（`common-infra.ts`、`common-internal.ts`）。`src/index.ts` は毎回 4 スタックすべてを組み立てるので、platform のスタックだけを流すときもこれらが要る。CI では `modify-platform-stack.yaml` の秘密取得 step とラッパーの `runtimeEnv`（`packages/oyasai-cdktf/package.nix`）が与えている。

## 2. 環境の区別

**仕組み**

- `src/index.ts` が `ENVIRONMENT` を `mustEnv` で読み、`platform-${environment}-infra` / `-services` を作る。未設定なら synth で止まる。
- `OyasaiPlatformTerraformStack`（`oyasai-terraform-stack.ts`）の `t(...)` は、Terraform のリソース ID（construct ID）の先頭に環境名を付ける。**実リソースの名前に付くとは限らない**: R2 バケット名は `t("platform")` を含むので環境別だが、Docker のコンテナ名・ネットワーク名は固定（`platform-services.ts`）。同じ Docker ホストに 2 環境を流すと名前が衝突する。
- `isMaster = environment === "master"` で分岐する。それ以外（`pr-<PR番号>` など）は PR 検証用として扱われる。

**master と PR 環境の違い**（すべてコードの分岐）

| 項目 | master | PR 環境 | 根拠 |
|---|---|---|---|
| services の state | TF Cloud | `LocalBackend` | `platform-services.ts` |
| Docker の接続先 | infra スタックの IPv4 へ TLS 接続（証明書は秘密ストアから） | ランナーのローカル docker ソケット | `platform-services.ts` |
| R2 のロケーション | 本番ホストに近い値 | ランナーに近い値 | `platform-infra.ts` |
| DNS の名前 | ルートドメイン | `<env>.` 付きのサブドメイン | `platform-infra.ts` |
| メモリ・CPU | 大きめ、main は `cpuSet` で P コアに固定 | 小さめ | `platform-services.ts` |
| Discord 連携のトークン | main に渡す | 渡さない | `platform-services.ts` |
| バックアップ・DB ダンプ・`oyasai-cron` | あり | なし | `platform-services.ts` の `if (this.isMaster)` |

**コンテナ**（`platform-services.ts`。イメージ名は `OYASAI_IMAGE_IDS` のキー）

| コンテナ | イメージ | 備考 |
|---|---|---|
| `alloy` | `alloy` | docker ソケットを読み、全コンテナのログを Grafana Cloud の Loki へ。設定は `packages/oyasai-cdktf/assets/config.alloy` |
| `mariadb` | `mariadb` | 同じホストディレクトリをデータと `docker-entrypoint-initdb.d` の両方にマウントしている |
| `oyasai-minecraft-main` / `-lobby` / `-axiom` | 同名 | `mariadb` に依存。データはホスト側の環境別ディレクトリ（`baseHostPath`）にバインド |
| `oyasai-velocity` | `oyasai-velocity` | Java・Bedrock の入口 |
| `oyasai-web` / `caddy` | `oyasai-web` / `caddy` | §5 |
| `minecraft-main-backup` / `minecraft-axiom-backup`（master のみ） | `mc-backup` | lobby と velocity はバックアップしない |
| `mariadb-backup`（master のみ） | `mysql-backup` | `command: ["dump"]` |
| `oyasai-cron`（master のみ） | `oyasai-cron` | §4 |

ホストへ公開するポートは各コンテナの `ports({...})` にある。main は RCON のポートもホストへ公開している。

**共通**

- ログは全環境が同じ Grafana Cloud スタックに送られる。区別はログの `environment` ラベル（`config.alloy` が `ENVIRONMENT` を入れる）。`service` ラベルはコンテナ名。
- ダッシュボードの `environment` 変数の既定値は `master`（`common-infra.ts`）。

**名前の規則（重要）**

- `destroy-stale-envs.yaml` は TF Cloud のワークスペース名から `pr-[0-9]+` を拾って掃除する。PR 環境の名前をこの形から外すと掃除から漏れる。
- PR の services は `LocalBackend` だが、`modify-platform-stack.yaml` は deploy のたびにスタック ID 名のワークスペースを作る（`operation` だけで判定し、backend の種類は見ない）。この空のワークスペースが掃除の目印にもなっている。

## 3. デプロイ・破棄の操作

起動の入口（`cd.yaml`、`ci.yaml`、`deploy-label.yaml`、`auto-deploy-empty.yaml`、`destroy-stale-envs.yaml`）、同時実行の制御、PR 環境の作成と削除の流れは [ci-cd.md](../../Knowledge/ci-cd.md) にある。ここではスタック操作に固有のことだけを書く。

- deploy は `deploy-platform.yaml`（`infra` → `services`）、destroy は `destroy-platform.yaml`（`services` → `infra`）。どちらも `workflow_call` のみ。destroy を呼ぶのは `destroy-stale-envs.yaml` だけで、master を destroy する経路はワークフローにない。
- `common-infra` / `common-internal` を流すワークフローはない。

### 1 回の操作の中身（`modify-platform-stack.yaml`）

作業ディレクトリは `packages/oyasai-cdktf`、`ENVIRONMENT` はジョブの環境変数。

1. Infisical から秘密を取得（`packages/oyasai-secrets-action`。取得する名前の一覧はワークフローの `secrets:`）。R2 の資格情報を設定。
2. deploy のときだけ、TF Cloud のワークスペースを作る: `nix run .#oyasai-infra -- terraform_io::create_workspace <スタック ID>`。
3. `nix run .#oyasai-cdktf -- <deploy|destroy> <スタック ID> --ignore-missing-stack-dependencies --auto-approve`。
4. destroy のときだけ、ワークスペースを削除する（`terraform_io::delete_workspace`、TF Cloud の `safe-delete`）。
5. `nix run .#nix-copy-to-s3` で Nix キャッシュへ送る。
6. `start-proxy` のときだけ、`docker logs -f minecraft-main` をバックグラウンドで流し、`bore-cli` でポート 25565（velocity の Java の入口）を公開の中継へ出す（step の上限 30 分）。**ログの対象名 `minecraft-main` は実際のコンテナ名 `oyasai-minecraft-main` と一致しない**ため、ログは流れないはず（バックグラウンドなので step は落ちない）。

### 手元からの操作

- `packages/oyasai-cdktf/cdktf.json` の `app` は `exit 1`。素の `cdktf` では synth できない。`nix run .#oyasai-cdktf -- ...` を使うと、`CDKTF_APP` が Nix でビルドした本体を指す（`packages/oyasai-cdktf/package.nix`）。
- ラッパーが与える値: `CDKTF_APP`、`NIX_CACHE_PUBLIC_KEY`（公開値。`constants` から）、`OYASAI_IMAGE_IDS`（フレークの `packages` 経由のときだけ。`nix/flake-parts/oyasai-scope.nix`）。`OYASAI_IMAGE_IDS` は**常に `x86_64-linux` のイメージのタグ**（`self.packages.x86_64-linux.all-docker-tags.attrs`）。
- `terraform` は `withPlugins` でプロバイダーを Nix から入れたもの（`nix/oyasai-scope.nix`）。
- 手元で別に要るもの: `ENVIRONMENT`、TF Cloud の認証、Infisical の認証、`common-infra.ts` が `mustEnv` で読む Grafana Cloud のトークン、`terraform_io.just` が読む TF Cloud の API トークン。名前は各ファイルの読み取り箇所と `modify-platform-stack.yaml` の `secrets:` を見る。

## 4. 定期処理

ワークフロー側の定期処理（空サーバー時の master 再デプロイ、閉じた PR 環境の掃除）は [ci-cd.md](../../Knowledge/ci-cd.md)。ここではインフラ内で動くものを書く。

| 処理 | 場所 | 内容 |
|---|---|---|
| X のハッシュタグ投稿の通知（`oyasai-cron`） | `packages/oyasai-cron/src/main.rs`、master のみ | 1 時間ごとに外部の検索 API で対象ハッシュタグの投稿を取り、各投稿の URL を Discord の Webhook に流す。「Best-effort」とコメントにある |
| Minecraft のバックアップ | `platform-services.ts`（master のみ） | main と axiom を restic で 6 時間ごとに環境の R2 バケットへ。保持は日 7・週 4・月 3。jar・ログ・bluemap などは除外（`EXCLUDES`） |
| DB のダンプ | `platform-services.ts`（master のみ） | MariaDB を 360 分ごとに gzip で R2 へ。保持 14 日 |
| Nix キャッシュの期限 | `common-internal.ts` | 180 日でオブジェクトを消す。期限はアップロード時刻基準で、`nix copy` は既存を飛ばすため、定期的に `nix copy --force` で年齢を戻すようコメントにある |

`oyasai-cron` の注意（`main.rs`）:

- 環境変数が無い・投稿に `url` が無いと `unwrap` で panic する。検索 API の通信エラーや応答の JSON 解析失敗は `?` で main を抜ける。どちらも `restart: unless-stopped` で立ち上がり直す。
- Discord への POST は応答のステータスを見ない。4xx/5xx でも成功扱いで進む。
- 検索期間は「その回の開始時刻の 1 時間前から」。処理後に 1 時間 sleep するので、処理時間の分だけ取りこぼしうる。重複・取りこぼしの補正はない。

## 5. Web（`oyasai-web`）

- `packages/oyasai-web/src/index.ts` は `OYASAI_LISTEN_PORT` で待ち受け、「Hello World!」を返すだけ。
- イメージは `packages/oyasai-web/package.nix` の `passthru.docker`（`buildLayeredImage`、Linux のみ）。services が `OYASAI_LISTEN_PORT` を渡す（`platform-services.ts`）。
- 公開の入口は `caddy` コンテナ。`caddy reverse-proxy --from <infra のルート DNS 名> --to oyasai-web` で流す。ホスト側の `caddy` ディレクトリをコンテナの `/data` にマウントしている。
- TLS 証明書の取得・更新は設定に書かれていない。Caddy の `reverse-proxy` の既定の挙動に依存している（未確認）。

## 6. 単体イメージ（`oyasai-standalone-images`）

- `packages/oyasai-standalone-images/nvfetcher.toml` が 5 つの上流イメージを定義する: alloy、caddy、mariadb、mc-backup、mysql-backup。どれも `fetch.docker`（linux/amd64）。版は `src.container`（上流の最新を追う: alloy、mc-backup）か `src.manual`（固定: caddy、mariadb、mysql-backup）。
- `_sources/generated.nix`・`generated.json` は nvfetcher の生成物。更新の実行手順はこの repo では確認できない（未確認）。
- `package.nix` が上流イメージを `fromImage` にして `Entrypoint`（一部は `Cmd` も）を付け直す（`buildImage`）。
- `nix/flake-parts/docker.nix` が `<名前>-docker`、`all-docker-images`、`all-docker-tags`、`all-docker-derivations` を公開する。`all-docker-tags` は単体イメージに加え、scope 内で `docker` を持つ全パッケージ（web、cron、各 Minecraft サーバー、velocity など）を含む。
- 名前空間は `nix/oyasai-docker-tools.nix` が付ける。配布の仕組みは [ci-cd.md](../../Knowledge/ci-cd.md) の「イメージの作成と配布」。
- **タグは Nix の評価時に固定される**: `all-docker-tags.attrs` → `oyasaiImageIds` → `OYASAI_IMAGE_IDS`。`platform-services.ts` の `imageId(name)` は名前が無ければ例外で止まる。新しいコンテナを足すときは、対応するイメージが `all-docker-tags` に入る（scope のパッケージに `passthru.docker` を持たせるか、単体イメージに足す）必要がある。

## 7. bindings の再生成

- `packages/oyasai-cdktf-bindings/gen/` は `cdktf get` の生成物（`providers/<名前>/`、`constraints.json`、`versions.json`）。手で編集しない。
- 生成元は `packages/oyasai-cdktf-bindings/package.nix` の `gen`。Nix のビルド内で一時的な `cdktf.json` を作り、`terraformProviders` に対象プロバイダーを入れて `cdktf get` を実行し、`.gen/` を出力する。
- 対象プロバイダーの一覧は `nix/oyasai-scope.nix` の `oyasaiTerraformProviders`（入力は `nixpkgs-terraform-providers-bin`）。足すときはここに足してから再生成する。生成時の版は `gen/versions.json` に記録される。版を上げるのはこの入力の更新（`flake.lock`）。
- 作業ツリーへの反映: `nix/flake-parts/codegen.nix` が `gen` の出力を `packages/oyasai-cdktf-bindings/gen` に配置する。仕組みは外部フレーク `anteriorcore/codegen` の flake module（`flake.nix`）。実行するコマンド名はこの repo からは確認できない（未確認）。
- 利用側は `@oyasaiserver/cdktf-bindings/providers/...` で import する。`package.json` の `exports` は `./dist/*/index.js` を指し、`dist/` は `build`（`tsc`）で作る。
- 同梱の `cdktf` スクリプト（`packages/oyasai-cdktf-bindings/cdktf`）は `cdktf-cli` を `exec` するだけ。`oyasai-cdktf` のラッパーはこれを `runtimeInputs` に入れて呼ぶ。

## 8. NixOS モジュール（`nix/nixos/`）

- `nix/nixos/oyasai-scope.nix` は、NixOS の設定に `oyasai.scope` オプションを足し、`nix/oyasai-scope.nix` の scope を入れるだけのモジュール。
- 本番ホスト自体の NixOS 構成（Docker デーモンの TLS など）はこの repo にない。

## 9. 変更するときの注意・危険な操作

**やらない（やるなら、まず確認）**

- **master のスタックを手元から destroy しない**。手元から流すと、動いているコンテナとバックアップ先の R2 バケットを消しうる。`platform-infra.ts` の R2 バケット、`common-internal.ts` の Nix キャッシュのバケットには `preventDestroy` がない。
- **`common-*` の名前・スラッグを変えない**。Grafana のスタックは `deleteProtection: false`、「作り直しが要る変更がある」とコメントにある（`common-infra.ts`）。
- **restic の暗号化に使う秘密を変えない**（`secrets.ts` のコメント「static, do not change」）。変えると既存のバックアップを読めなくなる。
- ダッシュボードは `overwrite: true` で毎回上書きされる（`common-infra.ts`）。Grafana の画面で直した内容は次の適用で消える。
- 保護されているもの: リポジトリと既定ブランチに `preventDestroy`（`common-internal.ts`）、Infisical の機械アイデンティティに削除保護（`common-infra.ts`）。外す変更は意図を明記する。

**注意して変える**

- **master の変更は、空サーバーの瞬間に自動で反映される**（`auto-deploy-empty.yaml`。詳細は [ci-cd.md](../../Knowledge/ci-cd.md)）。master への push 自体ではデプロイされない。
- **CI のジョブ名を変えるとマージできなくなる**: `common-internal.ts` の ruleset が必須チェックをジョブ名で列挙している。ジョブ名を変えたら ruleset も直して `common-internal` を適用する。
- Infisical の機械アイデンティティは、このリポジトリの任意の ref の GitHub Actions OIDC で入れる条件になっている（`common-infra.ts` の `boundSubject`）。役割は admin。
- `services` の state を失うと（TF Cloud のワークスペース削除など）、ランダム値（RCON パスワード、転送用シークレット、Floodgate 鍵）が作り直されて変わる。
- MariaDB のパスワードはプラグインの設定ファイルにも書かれている（`secrets.ts` のコメント）。変えるときはプラグイン側も合わせる。
- ワークスペースは `global-remote-state: true` で作る（`terraform_io.just`）。外す前に、出力を参照しているスタックがないか確認する。
- DNS の A レコードと master の Docker 接続先は、`platform-infra.ts` の固定の IPv4（`ipv4`）を共有する。ホスト移転時はここを変える。
- 秘密は Terraform の state に値として入る（Terraform の一般的な性質）。state のアクセス制御は TF Cloud 側の設定で、この repo からは確認できない。
- 新しいコンテナ・環境変数は `envs({...})` で渡す（`platform-services.ts`）。秘密は `secretKeys` に名前を足してから `secrets.get(...)` で読む。CI で使う秘密は、別に各ワークフローの `secrets:` に足す。

## 10. 未確認

- **PR 環境の services の破棄**: state は `LocalBackend`（ランナー上）で、破棄は別ランナーで走るため、destroy は空の state で動くはず。PR のコンテナは deploy したランナー上にあり、ジョブ終了でランナーと共に消えると考えられるが、実行して確かめていない。infra の destroy は services の成功に依存する（`destroy-platform.yaml` の `needs`）。
- **PR の DNS**: PR のサブドメインも master と同じ固定 IPv4 を指す（`platform-infra.ts`）。PR のコンテナはランナー上で動くので、この名前で PR 環境に届くことはないはず。外からの確認経路は `start-proxy` の中継だけ。意図は未確認。
- **`create_workspace` の既存時の挙動**: `--fail` が無いので、既存ワークスペースへの POST がエラー応答でも step は止まらない。応答の中身は未確認。
- **`list_workspaces` のページ送り**: 1 回の GET だけで、ページ送りを扱っていない。ワークスペースが 1 ページに収まらないと掃除から漏れる可能性がある。TF Cloud API の既定のページサイズは未確認。
- **`common-infra` / `common-internal` の適用**: どのワークフローからも流れない。誰が、どこから、どの順で適用するかは未確認。
- **`secretKeys` のコメント**: CI 用の秘密を「GitHub provider で ActionSecrets として設定」とあるが、`common-internal.ts` に該当リソースはない（組織変数だけ）。古いコメントか未実装かは未確認。
- **`--ignore-missing-stack-dependencies`**: 毎回付けている。何を省くかは確認していない。
- **TLS とホスト側の設定**: Docker デーモンの証明書の発行・更新の手順、Caddy の証明書管理は、この repo にない。
- **synth の実行結果**: 生成されるリソースの差分、`ENVIRONMENT` を変えた synth の結果は実行して確かめていない。
- **`oyasai-cron` の動作**: テストはなく、実際の通知が届くかは未確認。
