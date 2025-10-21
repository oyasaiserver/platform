# @oyasaiserver/cdktf

おやさい鯖では、**Terraform (CDK for Terraform / cdktf)** を用いてインフラを定義しています。
構成は複数の **stack** に分かれており、それぞれが異なるインフラ領域を管理しています。

## Stacks

| Stack          | 管理対象                                        |
|----------------|---------------------------------------------|
| **Cloudflare** | DNS / Workers / R2 など Cloudflare 上のクラウドリソース |
| **Docker**     | オンプレ環境上のコンテナ（例：minecraft-server、mariadb 等）  |
| **GitHub**     | GitHub リポジトリや権限管理                           |
| **Secrets**    | 環境変数・シークレットの管理。**後述の手動デプロイが必要。**            |

## Secrets のデプロイ手順

Secrets Stack は他と異なり、自動ではなく **手動デプロイ** が必要です。

### 例：環境ごとに `HELLO_WORLD` を設定する場合

- production: `"prod"`
- development: `"dev"`

1. デフォルト値を定義する（ローカル環境用）

`packages/secrets/src/defaults.ts`

```diff
export const defaults = {
  ...
+ HELLO_WORLD: "unset"
}
```

2. 各環境にデプロイする

```
# production
HELLO_WORLD="prod" ENVIRONMENT=production infisical run --env=production -- npm run deploy:secrets -w packages/cdktf
```

```
# development
HELLO_WORLD="dev" ENVIRONMENT=development infisical run --env=development -- npm run deploy:secrets -w packages/cdktf
```
