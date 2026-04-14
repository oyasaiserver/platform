import { DnsRecord } from "@oyasaiserver/cdktf-providers/cloudflare/dns-record";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import { ZoneDnssec } from "@oyasaiserver/cdktf-providers/cloudflare/zone-dnssec";
import { R2CustomDomain } from "@oyasaiserver/cdktf-providers/cloudflare/r2-custom-domain";
import type { Secrets } from "../secrets.ts";
import type { Construct } from "constructs";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

export class CloudflareStack extends OyasaiTerraformStack {
  private readonly zoneId = "3a06bb11a935fe62b10f7ee4a312e85d";

  public constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id, secrets);

    new CloudflareProvider(this, id, {
      apiToken: this.secrets.CLOUDFLARE_API_TOKEN,
    });

    new ZoneDnssec(this, "zone-dnssec", {
      zoneId: this.zoneId,
      status: "active",
    });

    const rootDnsRecord = new DnsRecord(
      this,
      this.envAwareId("root-dns-record"),
      {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: this.environment === "production" ? "oyasai.io" : "dev.oyasai.io",
        type: "A",
        proxied: false,
        content: this.secrets.PUBLIC_IPV4,
      },
    );

    new DnsRecord(this, this.envAwareId("seesaawiki-cname-dns-record"), {
      ttl: 1, // automatic
      zoneId: this.zoneId,
      name: this.environment === "production" ? "wiki" : "wiki.dev",
      type: "CNAME",
      proxied: true,
      content: "wiki-01.seesaawiki.jp",
    });

    // TODO: create "internal" stack
    if (this.environment === "production") {
      const nixCacheBucket = new R2Bucket(this, "nix-cache", {
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        name: "nix-cache",
      });

      // Practically read-only because Cloudflare limits upload to 100MB for
      // "proxied" domains. - shun 2026-04
      //
      // https://developers.cloudflare.com/support/troubleshooting/http-status-codes/4xx-client-error/error-413/#cloudflare-specific-information
      new R2CustomDomain(this, "nix-cache-custom-hostname", {
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        bucketName: nixCacheBucket.name,
        domain: `nix-cache.${rootDnsRecord.name}`,
        enabled: true,
        zoneId: this.zoneId,
      });
    }

    new R2Bucket(this, this.envAwareId("r2-bucket"), {
      accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
      name: this.secrets.R2_BUCKET_NAME,
    });
  }
}
