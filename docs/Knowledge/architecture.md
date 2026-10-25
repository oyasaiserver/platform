---
date: 2026-10-13
record_type: knowledge
source:
  - flake.nix
  - nix/
  - packages/*.nix
  - packages/oyasai-plugin-registry/
  - packages/oyasai-cdktf/src/
  - packages/oyasai-cdktf/package.nix
  - packages/oyasai-cdktf/package.json
  - packages/oyasai-cdktf/cdktf.json
  - packages/oyasai-cdktf-bindings/package.nix
  - packages/oyasai-cdktf-bindings/package.json
  - packages/oyasai-cdktf-bindings/cdktf
  - packages/oyasai-infra/
  - packages/oyasai-cron/package.nix
  - packages/oyasai-web/package.nix
  - packages/oyasai-standalone-images/
  - packages/oyasai-push-nix-images/
  - packages/nix-copy-to-s3/
  - packages/oyasai-secrets-action/action.yaml
  - plugins/*/build.gradle.kts
  - settings.gradle.kts
  - build.gradle.kts
  - .gitignore
  - README.md
  - .github/workflows/update-plugins.yaml
  - .github/workflows/modify-platform-stack.yaml
---

# リポジトリ構成とビルドからデプロイまでの流れ

- **何について**: platform リポジトリ全体の構成、プラグインのソースから Gradle・Nix・Docker イメージ・CDKTF を経て環境に載るまでの流れ、プラグインを追加するときに触るファイル。
- **結論**: Gradle がプラグイン jar を作り、Nix がそれを Purpur・Velocity のサーバー（Docker イメージ）に組み立てる。イメージ名とタグは Nix の出力から CDKTF へ渡り、CDKTF が Docker コンテナを立てる。自前のプラグインを足すには `plugins/<Name>/` を作り、サーバーの Nix ファイルの `plugins` 一覧に小文字の名前を足す。CDKTF は触らない。
- **未確認のこと**: 末尾「7. 未確認・注意」。特に、Paper・Velocity が転送用の秘密をどう読むか、`CDKTF_APP` を `cdktf` CLI が読むか。

ワークフロー（CI・イメージの配布・デプロイ・プラグインの自動更新）は [ci-cd.md](ci-cd.md)、PR の手順は [workflows.md](workflows.md)、ビルドとローカル検証は [local-server.md](local-server.md)。ここでは繰り返さない。

## 1. 全体の構成

```
platform/
├── flake.nix            入口。inputs と nix/flake-parts/* を読み込む
├── nix/                 flake の組み立てと共通関数（scope、Purpur・Velocity のラッパー、Docker ヘルパー）
│   ├── flake-parts/     perSystem の設定（devshell、docker 集約、treefmt、codegen など）
│   └── nixos/           NixOS モジュール版の scope（flake.nix からは読まれない）
├── packages/            Nix パッケージ。ファイル1つ（またはディレクトリ1つ）が1パッケージ
│   ├── oyasai-plugins.nix              Gradle で plugins/* をビルドした jar 群
│   ├── oyasai-plugin-registry/         外部プラグインの取得元・ロック・固定 jar
│   ├── oyasai-minecraft-{main,lobby,axiom}.nix   Purpur サーバー
│   ├── oyasai-velocity.nix             Velocity プロキシ
│   ├── oyasai-cdktf/ ・ oyasai-cdktf-bindings/ ・ oyasai-infra/   インフラ（CDKTF・Terraform Cloud）
│   └── その他（oyasai-cron・oyasai-web・standalone-images など）
├── plugins/             Minecraft プラグイン（Kotlin、Gradle サブプロジェクト 24 個）
├── gradle/              libs.versions.toml（依存のバージョン一覧）と wrapper（codegen が配置）
├── gradlew              codegen が配置
├── gradle.lock          Gradle 依存のロック（gradle2nix 形式）
├── settings.gradle.kts  plugins/ 直下を自動で include
├── build.gradle.kts     プラグイン共通のビルド設定（shadow、テスト、リポジトリ）
├── assets/              サーバーアイコンなど
└── docs/                作業の記憶（Home.md から入る）
```

## 2. 役割の表

### nix/

| パス | 役割 | 根拠 |
|---|---|---|
| `flake.nix` | inputs（nixpkgs 26.05、nixpkgs-unstable、nix-minecraft、gradle2nix、codegen など）と flake-parts モジュールの読み込み | `flake.nix:1-79` |
| `nix/flake-parts/misc.nix` | `pkgs` を overlay（`nix/oyasai-overlay.nix`）付き・unfree 許可で import | `nix/flake-parts/misc.nix:1-11` |
| `nix/flake-parts/constants.nix` | 共有定数（nix キャッシュの公開鍵） | `nix/flake-parts/constants.nix:1-12` |
| `nix/flake-parts/codegen.nix` | gradle wrapper・gradle-plugins・cdktf bindings の生成物を作業ツリーへ配置 | `nix/flake-parts/codegen.nix:1-18` |
| `nix/flake-parts/devshells.nix` | devshell（gradle、JDK 25、terraform、nodejs、infisical、just など） | `nix/flake-parts/devshells.nix:14-46` |
| `nix/flake-parts/oyasai-scope.nix` | scope の derivation を `packages` として公開し、各パッケージの `oyasai-tests` を `checks` にする。`oyasai-cdktf` にイメージのタグを注入 | `nix/flake-parts/oyasai-scope.nix:17-44` |
| `nix/flake-parts/docker.nix` | `docker` 出力を集約し `all-docker-tags`・`all-docker-derivations`・`all-docker-images` と `<name>-docker`（standalone 分）を作る | `nix/flake-parts/docker.nix:1-80` |
| `nix/flake-parts/treefmt.nix`・`nix/treefmt.nix` | 整形ツールの設定（ktfmt、nixfmt、prettier、shfmt など）。`docs/*` と `*/gen/*` は対象外 | `nix/treefmt.nix:1-91` |
| `nix/oyasai-scope.nix` | パッケージ集合の本体。`makeScope` で JDK 25・Node 26・gradle 9・terraform（provider 込み）などを定義し、`packages/` を `packagesFromDirectoryRecursive` で自動登録。`oyasai-cdktf`・`oyasai-cdktf-bindings` だけ Node 22 で組む | `nix/oyasai-scope.nix:12-111` |
| `nix/oyasai-purpur.nix` | Purpur サーバーの起動スクリプトと Docker イメージ（`passthru.docker`、`mc-monitor` のヘルスチェック付き） | `nix/oyasai-purpur.nix:1-130` |
| `nix/oyasai-velocity.nix` | Velocity の起動スクリプトと Docker イメージ（ヘルスチェックなし） | `nix/oyasai-velocity.nix:1-67` |
| `nix/oyasai-docker-tools.nix` | `dockerTools` の各ビルダーを包み、名前を `ghcr.io/oyasaiserver/<name>`、既定プラットフォームを Linux にする | `nix/oyasai-docker-tools.nix:1-21` |
| `nix/oyasai-overlay.nix` | `mc-monitor` を nixpkgs-unstable から取る（ヘルスチェック用） | `nix/oyasai-overlay.nix:1-14` |
| `nix/nixos/oyasai-scope.nix` | NixOS モジュールとして scope を渡す版 | `nix/nixos/oyasai-scope.nix:1-10` |

### packages/

| パッケージ | 役割 | 根拠 |
|---|---|---|
| `oyasai-plugins` | `plugins/*` を Gradle でビルドし、jar を束ねる。プラグインごとの属性を持つ | `packages/oyasai-plugins.nix:1-59` |
| `oyasai-plugin-registry` | 外部プラグインの取得元（`registry.json`）、解決結果（`lock.json`）、固定 jar（`static/`）を `fetchurl` 等に変換。実行すると `lock`（`src/lock.ts`）が動く | `packages/oyasai-plugin-registry/package.nix:1-45` |
| `oyasai-minecraft-main` | Purpur 26.2 のメインサーバー。プラグイン一覧と server.properties | `packages/oyasai-minecraft-main.nix:1-79` |
| `oyasai-minecraft-lobby` | Purpur 26.2 のロビー（フラット・void）。ゲームルールを起動コマンドで固定 | `packages/oyasai-minecraft-lobby.nix:1-85` |
| `oyasai-minecraft-axiom` | Purpur 26.2 の建築用サーバー（creative、ホワイトリスト） | `packages/oyasai-minecraft-axiom.nix:1-44` |
| `oyasai-velocity` | 入口のプロキシ。Velocity 用プラグインと、接続先サーバーの一覧 | `packages/oyasai-velocity.nix:1-43` |
| `oyasai-cdktf` | CDKTF の CLI ラッパー。`OYASAI_IMAGE_IDS`・`NIX_CACHE_PUBLIC_KEY`・`CDKTF_APP` を埋め込む | `packages/oyasai-cdktf/package.nix:1-35`、`packages/oyasai-cdktf/package.json:7` |
| `oyasai-cdktf-bindings` | cdktf の provider 生成バインディングと、`cdktf` コマンド（cdktf-cli）の提供元。`gen/` は自動生成（中身は未読） | `packages/oyasai-cdktf-bindings/package.nix:1-61`、`packages/oyasai-cdktf-bindings/package.json:10-12` |
| `oyasai-infra` | Terraform Cloud の workspace を一覧・作成・削除する `just` ラッパー | `packages/oyasai-infra/package.nix`、`packages/oyasai-infra/terraform_io.just` |
| `oyasai-cron` | TypeScript（Node）製の定期処理。`oyasai-web` と同じ構成（`package-lock2nix`、Docker イメージあり）。Discord・X 連携の設定を環境変数で受け取る（master のみ起動） | `packages/oyasai-cron/package.nix:1-21`、`packages/oyasai-cdktf/src/stacks/platform-services.ts:401-413` |
| `oyasai-web` | Node 製の Web。Docker イメージあり。`caddy` の reverse-proxy の転送先 | `packages/oyasai-web/package.nix:1-21`、`platform-services.ts:285-323` |
| `oyasai-standalone-images` | 既製イメージ（alloy、caddy、mariadb、mc-backup、mysql-backup）を nvfetcher で固定し、Nix の Docker イメージにする | `packages/oyasai-standalone-images/package.nix:1-65`、`nvfetcher.toml` |
| `oyasai-push-nix-images` | レジストリにまだ無いイメージだけビルドして `skopeo` で push（詳細は [ci-cd.md](ci-cd.md)） | `packages/oyasai-push-nix-images/oyasai-push-nix-images.sh:1-24` |
| `oyasai-secrets-action` | Infisical から OIDC で秘密を取り出す GitHub Action（詳細は [ci-cd.md](ci-cd.md)） | `packages/oyasai-secrets-action/action.yaml:1-32` |
| `nix-copy-to-s3` | ストアに署名し、Nix キャッシュ（R2）へ `nix copy` する（詳細は [ci-cd.md](ci-cd.md)） | `packages/nix-copy-to-s3/nix-copy-to-s3.sh:1-15` |
| `gradle-plugins` | gradle2nix と ktfmt の jar。codegen で `packages/gradle-plugins/gen/` へ配置 | `packages/gradle-plugins/package.nix:1-13`、`nix/flake-parts/codegen.nix:13-14` |
| `gradle-wrapper` | gradle wrapper を生成。codegen で `gradle/wrapper` と `gradlew` へ | `packages/gradle-wrapper.nix:1-23`、`nix/flake-parts/codegen.nix:11-12` |
| `prettier-plugins` | treefmt 用 prettier プラグインの node_modules | `packages/prettier-plugins/package.nix:1-3` |
| `paperweight-userdev-setup-hook` | Nix sandbox 内で paperweight の vanilla jar キャッシュを入れる setup hook。`oyasai-plugins` の `nativeBuildInputs` | `packages/paperweight-userdev-setup-hook.nix:1-50`、`packages/oyasai-plugins.nix:28` |

### Gradle（ルート）

| パス | 役割 | 根拠 |
|---|---|---|
| `settings.gradle.kts` | `plugins/` 直下の各ディレクトリを `:plugins:<dir>` として include | `settings.gradle.kts:1-7` |
| `build.gradle.kts` | Spotless（ktfmt）、`lock` タスク、リポジトリ、`:plugins:*` への共通設定 | `build.gradle.kts:1-96` |
| `gradle/libs.versions.toml` | 依存のバージョンを一箇所にまとめる | `gradle/libs.versions.toml`（中身は未読）、`README.md:105-108` |
| `gradle.lock` | 依存のロック。`oyasai-plugins` が Nix で参照する | `packages/oyasai-plugins.nix:26` |

## 3. 流れ

### 3.1 プラグインのソース → Gradle

1. `settings.gradle.kts:3-6` が `plugins/` 直下の各ディレクトリを `:plugins:<dir>` として登録する。
2. `build.gradle.kts:56-95` が、パスが `:plugins:` で始まるサブプロジェクトに Kotlin JVM・shadow・java-library を適用する。
   - shadow の出力は `<dir>.jar`（バージョン・classifier なし）。通常の `jar` は無効化される。
   - `processResources` が `plugin.yml` の中の `${version}` をプロジェクトの `version` で展開する。`velocity-plugin.json` は展開の対象外。
   - `build` は `shadowJar` に依存する。テストは JUnit 5。
3. 依存のバージョンは `gradle/libs.versions.toml`。依存を変えたら `gradle lock`（`build.gradle.kts:20-26`、gradle2nix の jar で `gradle.lock` を再生成）。

### 3.2 Gradle → Nix（`oyasai-plugins`）

1. `packages/oyasai-plugins.nix:16-26` が、`build.gradle.kts`・`gradle/`・`plugins/`・`settings.gradle.kts` だけを入力にして、`buildGradlePackage`（gradle2nix）でビルドする。ロックは `../gradle.lock`。
2. `gradle build --no-daemon` を実行し、`plugins/*/build/libs/*.jar` を `$out` に集める（`:30-44`）。
3. `passthru` は `plugins/` の各ディレクトリ名を**小文字化した属性**に `<Name>.jar` の derivation を割り当てる（`:46-56`）。例: `OyasaiLWC` → `oyasailwc`、`CitiesSkyMine` → `citiesskymine`。

### 3.3 サーバーの組み立て（Nix）

1. `packages/oyasai-minecraft-*.nix` は `oyasaiPurpur`（`nix/oyasai-purpur.nix`）を呼ぶ。引数は `name`・`version`（`26.2`）・`icon`・`properties`・`paperConfig`・`purpurConfig`・`plugins`。
2. `plugins` は `with oyasai-plugin-registry.forPlatform "paper" version; [ ... ]` で書く。registry の結果には自前の `oyasai-plugins` も混ざる（5 節）。
3. `nix/oyasai-purpur.nix` は、nix-minecraft の `purpur-26_2` を使い、vanilla jar を `cache/` に置き、`plugins/` の jar を入れ替え、`paper-global.yml`・`purpur.yml`・`server.properties` を書き、`java ... -jar server.jar nogui` を `exec` する `writeShellApplication` を作る（`:25-106`）。
   - 環境変数: `MEMORY`（既定 2G、`:91`）。ほかに RCON のパスワードと Floodgate の鍵を環境変数で受け取り、ファイルへ書き出す（`:67-71`、`:83-89`）。
4. `packages/oyasai-velocity.nix` は `oyasaiVelocity` を呼ぶ。`velocity.toml` に接続先 `main`・`lobby`・`axiom` を書き、`try = ["main", "lobby"]` にする（`:24-42`）。`MEMORY` の既定は 512M（`nix/oyasai-velocity.nix:45`）。
   - 接続先の値は、各サーバーの Nix の `name`（`oyasai-minecraft-main` など）。CDKTF でも同じ名前をコンテナ名にしている（`platform-services.ts:164`、`:212`、`:239`）。Docker ネットワーク上の名前で解決する前提。

### 3.4 イメージ

1. `nix/oyasai-purpur.nix:108-127`・`nix/oyasai-velocity.nix:56-64`・`packages/oyasai-cron/package.nix:17-26`・`packages/oyasai-web/package.nix:10-18` が、Linux のときだけ `passthru.docker`（`buildLayeredImage`）を付ける。
2. `nix/oyasai-docker-tools.nix` が、イメージ名を `ghcr.io/oyasaiserver/<name>` にする。
3. `nix/flake-parts/docker.nix:17-29` が、scope の中で `docker` を持つもの（`oyasai-minecraft-*`、`oyasai-velocity`、`oyasai-cron`、`oyasai-web`）と、`oyasai-standalone-images` の 5 種を集める。
   - `all-docker-tags`（`:49-69`）: パッケージ名 → `ghcr.io/…:<tag>`。`passthru.attrs` と `passthru.json` を持つ。
   - `all-docker-derivations`（`:70-77`）: `名前:タグ drvPath` の一覧。配布はこれを読む。
4. 配布（`oyasai-push-nix-images`）と Nix キャッシュへの送信は [ci-cd.md](ci-cd.md)「イメージの作成と配布」。

### 3.5 インフラ（CDKTF）

1. `nix/flake-parts/oyasai-scope.nix:29-31` が、`oyasai-cdktf` を `oyasaiImageIds = self.packages.x86_64-linux.all-docker-tags.attrs` で上書きする。
2. `packages/oyasai-cdktf/package.nix:21-25` が、その JSON を `OYASAI_IMAGE_IDS`、公開鍵を `NIX_CACHE_PUBLIC_KEY`、アプリ本体のパスを `CDKTF_APP` として `runtimeEnv` に入れる。つまり CDKTF 実行時のイメージのタグは、Nix の評価時に固定される。
3. `oyasai-cdktf` は `cdktf "$@"` を呼ぶラッパー（`package.nix:32-34`）。`cdktf` コマンドは `oyasai-cdktf-bindings` の `bin`（cdktf-cli を呼ぶ `packages/oyasai-cdktf-bindings/cdktf`）。アプリ本体は `packages/oyasai-cdktf/src/index.ts`（`package.json:7`）。CI は `packages/oyasai-cdktf` を作業ディレクトリにして `nix run .#oyasai-cdktf -- …` を実行し、`ENVIRONMENT` に環境名を渡す（`.github/workflows/modify-platform-stack.yaml:32-35`、`:75`）。
4. `src/index.ts:9-30` が `ENVIRONMENT` を必須で読み、次の 4 スタックを作る。スタック名がそのまま Terraform Cloud の workspace 名になる（`src/stacks/oyasai-terraform-stack.ts:26-32`）。workspace は `oyasai-infra` で作る・消す。
   - `common-infra`（`src/stacks/common-infra.ts`）: Cloudflare のドメインと Zone、Grafana Cloud のスタック・トークン・ダッシュボード、Infisical のプロジェクトと Machine Identity（GitHub OIDC 経由）。
   - `common-internal`（`src/stacks/common-internal.ts`）: nix キャッシュ用の R2 バケット（180 日で期限切れ）とそのカスタムドメイン、GitHub リポジトリの設定・ブランチ保護（必須チェック名を列挙）・Actions 変数。
   - `platform-<env>-infra`（`src/stacks/platform-infra.ts`）: 環境ごとの R2 バケット、ルートの DNS レコード。`master` とそれ以外で配置リージョンと DNS 名が変わる。
   - `platform-<env>-services`（`src/stacks/platform-services.ts`）: Docker 上のコンテナ群。
5. `platform-services.ts:77-94` が `OYASAI_IMAGE_IDS` の各キーから `docker.Image` を作る。`imageId(name)` で引けないと `Missing image in OYASAI_IMAGE_IDS` で失敗する。
6. コンテナ（`platform-services.ts`）:
   - 全環境: `alloy`（ログ送信）、`mariadb`、`oyasai-minecraft-main`・`-lobby`・`-axiom`、`oyasai-velocity`、`oyasai-web`、`caddy`（`oyasai-web` へ reverse-proxy）。
   - `master` のみ（`:325-414`）: `minecraft-main-backup`・`minecraft-axiom-backup`（mc-backup。restic で R2 へ）、`mariadb-backup`（mysql-backup）、`oyasai-cron`。
   - Docker ネットワークは `network`。サーバーのデータはホストのディレクトリを `/data` に割り当てる（`:96-106`）。
7. backend と Docker の接続先:
   - `common-infra`・`common-internal`・`platform-<env>-infra` は環境によらず Terraform Cloud（`CloudBackend`）。
   - `platform-<env>-services` だけが分かれる（`platform-services.ts:39-54`）。`master`（`oyasai-terraform-stack.ts:45` の `isMaster`）は Terraform Cloud と、TLS 付きでリモートの Docker API。それ以外は `LocalBackend` と、ローカルの `docker.sock`。
   - `master` が本番、それ以外が GitHub Actions 上の検証用。
8. 秘密情報は Infisical の data source から読む（`src/secrets.ts:10-33` にキーの一覧）。RCON・Velocity 転送・Floodgate の鍵は random provider で生成する（`platform-services.ts:56-75`）。

### 3.6 デプロイ

CDKTF をいつ・どの順で実行するか（PR 環境、`master` への自動・手動デプロイ）は [ci-cd.md](ci-cd.md)。

## 4. サーバーの組み立て

| 名前（Nix・コンテナ名） | Nix ファイル | プラットフォーム | 役割（コードの設定から） |
|---|---|---|---|
| `oyasai-velocity` | `packages/oyasai-velocity.nix` | velocity | 入口。`modern` 転送。`try` は `main` → `lobby`。Java と Bedrock のポートを公開 |
| `oyasai-minecraft-main` | `packages/oyasai-minecraft-main.nix` | Purpur 26.2（registry では `paper`） | メインワールド。プラグインが多い。Velocity 連携を有効化 |
| `oyasai-minecraft-lobby` | `packages/oyasai-minecraft-lobby.nix` | Purpur 26.2 | ロビー。void・フラット、ゲームルールを固定 |
| `oyasai-minecraft-axiom` | `packages/oyasai-minecraft-axiom.nix` | Purpur 26.2 | creative、`white-list = true`。`try` には入らない（接続先の登録のみ） |

- 各 Purpur サーバーのプラグインは `forPlatform "paper" "26.2"`（外部）と自前の小文字名（`oyasai-plugins` の passthru）が混ざる。`vault`・`directstate` なども自前（`plugins/Vault/` など）。
- Velocity のプラグインは `forPlatform "velocity"`（版の引数なし）。自前の `oyasaiban`・`oyasaichat`・`oyasaimusic`・`oyasaitab` もここに入る。`OyasaiChat` などは同じ jar に `plugin.yml` と `velocity-plugin.json` の両方を持ち、Paper と Velocity の両方で使われる。

## 5. 外部プラグイン（registry）

- `packages/oyasai-plugin-registry/registry.json`: プラグイン ID → プラットフォーム → 取得元。取得元の型は `modrinth`・`hangar`・`spiget`・`github`・`url`（`src/lock.ts:7-12`）。
- `src/lock.ts`: `nix run .#oyasai-plugin-registry -- <mc-version>…`（`meta.mainProgram = "lock"`）または `node src/lock.ts <mc-version>…` で各取得元を解決し、URL と SHA-256（SRI 形式）を JSON にする。
  - JSON は標準出力に出る（`:156`）。`lock.json` へはリダイレクトで書く。毎日の自動更新は `26.2` だけを渡して実行する（`.github/workflows/update-plugins.yaml:43`、詳細は [ci-cd.md](ci-cd.md)「プラグインの自動更新」）。
  - 出力は空のオブジェクトから作り、既存の `lock.json` を読まない（`:129`）。渡さなかった版のエントリは消える。複数の版を使うときは全部を渡す。
  - Velocity は MC バージョンを持たない（`:21`）。
  - 取得した内容が ZIP でないと失敗する（`:99-113`）。
  - `url` 型は HEAD で最終 URL に解決して固定する（`:88-95`）。
- `package.nix:16-41` の `forPlatform`:
  - paper: `lock.json` の該当バージョン ＋ `static/paper/<version>/*.jar` ＋ `oyasai-plugins`。
  - velocity: `lock.json` の velocity ＋ `static/velocity/*.jar`（現在は無い）＋ `oyasai-plugins`。
  - マージは右が優先。**同名の場合は自前プラグインが勝つ**。
- 現状: `static/paper/26.2/` に `arceon`・`arceon-axiom`・`ezedits` の 3 jar。`lock.json` には `26.2` のエントリだけがある。

## 6. 新しいプラグインを追加するときに触るファイル

Kotlin で自前のプラグインを作る場合。

| 順 | 触るもの | 内容 | 根拠 |
|---|---|---|---|
| 1 | `plugins/<Name>/`（新規） | `build.gradle.kts`（依存と、必要なら `version = "…"`）、`src/main/kotlin/…`、Paper なら `src/main/resources/plugin.yml`（`version` は `${version}` で書ける）、Velocity なら `velocity-plugin.json` か `@Plugin`。`settings.gradle.kts` は触らない（自動で include） | `settings.gradle.kts:3-6`、`build.gradle.kts:86-92`、`plugins/OyasaiBan/` |
| 2 | `gradle/libs.versions.toml`（依存を足すとき） | バージョンを追加し、`gradle lock` で `gradle.lock` を再生成 | `build.gradle.kts:20-26`、`README.md:105-116` |
| 3 | ビルド確認 | `nix develop --command gradle :plugins:<Name>:build`（[workflows.md](workflows.md) の Plugin Edit Workflow と同じ）。Nix では `nix build .#oyasai-plugins -L` | `build.gradle.kts:72-95`、`README.md:97-103` |
| 4 | サーバーの一覧に足す | Paper なら `packages/oyasai-minecraft-{main,lobby,axiom}.nix` の `plugins` に小文字名（例 `OyasaiXyz` → `oyasaixyz`）。Velocity なら `packages/oyasai-velocity.nix`。一覧は `keep-sorted` で並べる | `packages/oyasai-plugins.nix:46-56` |
| 5 | docs | `docs/Projects/<name>/PROJECT.md` と、プラグインなら `player.md`・`operator.md`（[workflows.md](workflows.md) の New Project Workflow） | `docs/Home.md:39-47` |
| 6 | 整形 | `nix fmt`。CI は `./gradlew fmt`・`./gradlew lock` の差分も検査する | `docs/Home.md`「ビルドと検証の基本」、`.github/workflows/ci.yaml` |

- **CDKTF は変更不要**。イメージ名はサーバーの derivation 名で決まり、jar が変わればタグが変わり、既存のコンテナがそのイメージを使う。
- 外部プラグインなら、`registry.json` に取得元を足し、`lock` で `lock.json` を再生成する（全版を渡す。5 節）。取得元の無い jar は `static/<platform>/<version>/`（Velocity は `static/velocity/`）に置く。どちらもサーバーの Nix の一覧に ID を足す。
- 新しいサーバーを足すなら、`packages/oyasai-minecraft-<name>.nix`（`passthru.docker` は `oyasaiPurpur` が付ける）に加え、`platform-services.ts` に `Container` とデータのディレクトリ、`packages/oyasai-velocity.nix` の `servers` に登録、が必要（コードからの推測。未実施）。

### 既存の workflows.md との比較

- `docs/Knowledge/workflows.md` の **New Project Workflow** は `docs/Projects/` 側だけを扱う。`plugins/` を作る手順、`settings.gradle.kts` による自動登録、サーバーの Nix 一覧への追加は書かれていない。**食い違いはないが、コード側の手順が抜けている**。本ノートの 6 節が補う。
- Plugin Edit Workflow の Gradle コマンドと、Local Server Jar Workflow の jar パス（`plugins/<Plugin>/build/libs/<Plugin>.jar`）は、`build.gradle.kts` の設定（shadow の `archiveBaseName`、`archiveVersion` 空）と一致する。

## 7. 未確認・注意

- **`CDKTF_APP`**: `package.nix:22` がこの環境変数を設定するが、`cdktf` CLI がこれを読むかは未確認。`packages/oyasai-cdktf/cdktf.json` の `app` は `exit 1` のプレースホルダ。
- **Docker イメージのタグ**: どのイメージもタグを指定していない。`image.imageTag` の既定値（nixpkgs の `dockerTools` の仕様）は未確認。
- **版を上げるとき**: `26.2` は `packages/oyasai-minecraft-{main,lobby,axiom}.nix`、`lock.json`、`static/paper/26.2/`、`.github/workflows/update-plugins.yaml:43` にある。全部を揃える必要がある（推測。未実施）。
- **`nix/nixos/oyasai-scope.nix`**: `flake.nix` からは読まれない。`nix/oyasai-scope.nix` が要求する `constants` を渡していないので、そのままでは評価できない可能性がある（未評価）。外部からの利用は未確認。
- **codegen の生成物**（`gradle/wrapper`、`gradlew`、`packages/gradle-plugins/gen/`、`packages/oyasai-cdktf-bindings/gen/`）: 作業ツリーに存在し、`.gitignore:408` が `gen/` の下の jar を除外から外しているので、コミットする運用と読める（git では未確認）。
- **未読**: `packages/oyasai-cdktf-bindings/gen/` の中身、`packages/oyasai-cdktf/assets/config.alloy`、`gradle/libs.versions.toml`。
- **環境固有の値**: アドレスや各サービスの ID は公開資料へ転載しない（`docs/Home.md`「公開リポジトリとして守ること」）。
