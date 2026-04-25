import { DnsRecord } from "@oyasaiserver/cdktf-providers/cloudflare/dns-record";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import type { Construct } from "constructs";
import { OyasaiPlatformTerraformStack } from "./oyasai-terraform-stack.ts";
import type { CommonInfra } from "./common-infra.ts";

type Props = {
  commonInfra: CommonInfra;
};

export class PlatformInfra extends OyasaiPlatformTerraformStack {
  public readonly ipv4 = "121.81.157.109";

  public readonly r2Bucket: R2Bucket;

  public constructor(
    scope: Construct,
    id: string,
    environment: string,
    { commonInfra }: Props,
  ) {
    super(scope, id, environment);

    this.createCloudBackend();

    const { secrets, oyasaiIoZone, oyasaiIoRegistrarDomain } = commonInfra;

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    this.r2Bucket = new R2Bucket(this, this.t("r2-bucket"), {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      name: `oyasai-${this.t("platform")}`,
      // If master, pick the closest to on-prem server location, otherwise use
      // the most popular location for GitHub Action runners.
      location: this.isMaster ? "apac" : "enam",
    });

    if (this.isMaster) {
      // We _can_ make dns record for every environment, though it's currently
      // unnecessary. - shun 2026-04
      new DnsRecord(this, this.t("root-dns-record"), {
        ttl: 1, // automatic
        zoneId: oyasaiIoZone.id,
        name: oyasaiIoRegistrarDomain.domainName,
        type: "A",
        proxied: false,
        content: this.ipv4,
      });

      // Proxy to our seesaawiki. Implicitly reserves `wiki.oyasai.io`.
      new DnsRecord(this, "seesaawiki-cname-dns-record", {
        ttl: 1, // automatic
        zoneId: oyasaiIoZone.id,
        name: "wiki",
        type: "CNAME",
        proxied: true,
        content: "wiki-01.seesaawiki.jp",
      });
    }
  }
}
