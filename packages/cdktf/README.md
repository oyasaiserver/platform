# @oyasaiserver/cdktf

おやさい鯖では、**Terraform (CDK for Terraform / cdktf)** を用いてインフラを定義しています。
構成は複数の **stack** に分かれており、それぞれが異なるインフラ領域を管理しています。

## Stacks

| Stack          | 管理対象                                                     |
| -------------- | ------------------------------------------------------------ |
| **Cloudflare** | DNS / Workers / R2 など Cloudflare 上のクラウドリソース      |
| **Docker**     | オンプレ環境上のコンテナ（例：minecraft-server、mariadb 等） |
| **GitHub**     | GitHub リポジトリや権限管理                                  |
| **Secrets**    | 環境変数・シークレットの管理。                               |
