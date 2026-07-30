import { DnsRecord } from "@oyasaiserver/cdktf-providers/cloudflare/dns-record";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import type { Construct } from "constructs";
import type { CommonInfra } from "./common-infra.ts";
import { OyasaiPlatformTerraformStack } from "./oyasai-terraform-stack.ts";

type Props = {
  commonInfra: CommonInfra;
};

export class PlatformInfra extends OyasaiPlatformTerraformStack {
  public readonly r2Bucket: R2Bucket;
  public readonly rootDnsRecord: DnsRecord;

  public constructor(
    scope: Construct,
    id: string,
    environment: string,
    { commonInfra }: Props,
  ) {
    super(scope, id, environment);

    this.createCloudBackend();

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    new InfisicalProvider(this, this.t("infisical-provider"));

    const { oyasaiIoZone, oyasaiIoRegistrarDomain } = commonInfra;

    this.r2Bucket = new R2Bucket(this, this.t("r2-bucket"), {
      accountId: commonInfra.cloudflareAccountId,
      name: `oyasai-${this.t("platform")}`,
      // If master, pick the closest to on-prem server location, otherwise use
      // the most popular location for GitHub Action runners.
      location: this.isMaster ? "apac" : "enam",
    });

    // TODO: centralize to vanity domains
    this.rootDnsRecord = new DnsRecord(this, this.t("root-dns-record"), {
      ttl: 1, // automatic
      zoneId: oyasaiIoZone.id,
      name: this.isMaster
        ? oyasaiIoRegistrarDomain.domainName
        : `${this.environment}.${oyasaiIoRegistrarDomain.domainName}`,
      type: "A",
      proxied: false,
      content: commonInfra.ipv4,
    });

    if (this.isMaster) {
      // Proxy to our seesaawiki. Implicitly reserves `wiki.oyasai.io`.
      // TODO: centralize to vanity domains
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
