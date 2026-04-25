import { GithubProvider } from "@oyasaiserver/cdktf-providers/github/provider";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";
import type { Construct } from "constructs";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import type { CommonInfra } from "./common-infra.ts";
import { R2CustomDomain } from "@oyasaiserver/cdktf-providers/cloudflare/r2-custom-domain";

type Props = {
  commonInfra: CommonInfra;
};

export class CommonInternal extends OyasaiTerraformStack {
  constructor(scope: Construct, id: string, { commonInfra }: Props) {
    super(scope, id);

    const { secrets, oyasaiIoRegistrarDomain, oyasaiIoZone } = commonInfra;

    this.createCloudBackend();

    new GithubProvider(this, "github-provider", {
      owner: "oyasaiserver",

      // @ts-expect-error https://github.com/hashicorp/terraform-plugin-sdk/issues/142
      appAuth: {},
    });

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    const nixCacheBucket = new R2Bucket(this, "nix-cache-r2-bucket", {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      name: "nix-cache",
    });

    // Practically read-only because Cloudflare limits upload to 100MB for
    // "proxied" domains. - shun 2026-04
    //
    // https://developers.cloudflare.com/support/troubleshooting/http-status-codes/4xx-client-error/error-413/#cloudflare-specific-information
    new R2CustomDomain(this, "nix-cache-r2-custom-domain", {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      bucketName: nixCacheBucket.name,
      domain: `nix-cache.${oyasaiIoRegistrarDomain.domainName}`,
      enabled: true,
      zoneId: oyasaiIoZone.id,
    });
  }
}
