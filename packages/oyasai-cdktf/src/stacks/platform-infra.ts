import { DnsRecord } from "@oyasaiserver/cdktf-providers/cloudflare/dns-record";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import type { Construct } from "constructs";
import { OyasaiPlatformTerraformStack } from "./oyasai-terraform-stack.ts";
import { arrayToObject, mustEnv } from "../helpers.ts";

const secretKeys = [
  "CLOUDFLARE_ACCOUNT_ID",
  "TLS_CA_PEM",
  "TLS_CERT_PEM",
  "TLS_KEY_PEM",
  "MARIADB_PASSWORD",
  "RCON_PASSWORD",
  "CLOUDFLARE_ACCESS_KEY_ID",
  "CLOUDFLARE_SECRET_ACCESS_KEY",
  "RESTIC_PASSWORD",
] as const;

export class PlatformInfra extends OyasaiPlatformTerraformStack {
  public readonly ipv4 = "121.81.157.109";

  private readonly zoneId = "3a06bb11a935fe62b10f7ee4a312e85d";

  public readonly secrets: Record<(typeof secretKeys)[number], string>;
  public readonly r2Bucket: R2Bucket;

  public constructor(scope: Construct, id: string, environment: string) {
    super(scope, id, environment);

    this.createCloudBackend();

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    this.secrets = arrayToObject(secretKeys, mustEnv);

    this.r2Bucket = new R2Bucket(this, this.t("r2-bucket"), {
      accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
      name: `oyasai-${this.t("platform")}`,
    });

    if (this.isMaster) {
      // We _can_ make dns record for every environment, though it's currently
      // unnecessary. - shun 2026-04
      new DnsRecord(this, this.t("root-dns-record"), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: "oyasai.io",
        type: "A",
        proxied: false,
        content: this.ipv4,
      });

      // Proxy to our seesaawiki. Implicitly reserves `wiki.oyasai.io`.
      new DnsRecord(this, "seesaawiki-cname-dns-record", {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: "wiki",
        type: "CNAME",
        proxied: true,
        content: "wiki-01.seesaawiki.jp",
      });
    }
  }
}
