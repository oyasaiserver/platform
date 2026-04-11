import { DnsRecord } from "@oyasaiserver/cdktf-providers/cloudflare/dns-record";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { R2Bucket } from "@oyasaiserver/cdktf-providers/cloudflare/r2-bucket";
import type { WorkerVersionModules } from "@oyasaiserver/cdktf-providers/cloudflare/worker-version";
import {
  WorkerVersion,
  type WorkerVersionConfig,
} from "@oyasaiserver/cdktf-providers/cloudflare/worker-version";
import { Worker } from "@oyasaiserver/cdktf-providers/cloudflare/worker";
import { WorkersDeployment } from "@oyasaiserver/cdktf-providers/cloudflare/workers-deployment";
import { WorkersRoute } from "@oyasaiserver/cdktf-providers/cloudflare/workers-route";
import { ZoneDnssec } from "@oyasaiserver/cdktf-providers/cloudflare/zone-dnssec";
import { R2CustomDomain } from "@oyasaiserver/cdktf-providers/cloudflare/r2-custom-domain";
import type { Secrets } from "@oyasaiserver/secrets";
import type { Construct } from "constructs";
import { globSync } from "node:fs";
import { join } from "node:path";
import { readJsonFileSync } from "../fs.ts";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

export class CloudflareStack extends OyasaiTerraformStack {
  private readonly zoneId = "3a06bb11a935fe62b10f7ee4a312e85d";
  private readonly dummyIp = "192.0.2.1"; // RFC 5737 - reserved for documentation

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

    // TODO: create "internal" stack
    if (this.environment === "production") {
      const nixCacheBucket = new R2Bucket(this, "nix-cache", {
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        name: "nix-cache",
      });

      new R2CustomDomain(this, "nix-cache-custom-hostname", {
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        bucketName: nixCacheBucket.name,
        domain: `nix-cache.${rootDnsRecord.name}`,
        enabled: true,
        zoneId: this.zoneId,
      });
    }

    for (const { name, config } of this.getApps()) {
      const domain = `${name}.${rootDnsRecord.name}`;

      new DnsRecord(this, this.envAwareId(name, "dns-record"), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: domain.replace(".oyasai.io", ""),
        type: "A",
        proxied: true,
        content: this.dummyIp,
      });

      const worker = new Worker(this, this.envAwareId(name, "workers"), {
        name: this.envAwareId(name),
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        observability: {
          enabled: true,
          logs: {
            enabled: true,
          },
        },
      });

      const workerVersion = new WorkerVersion(
        this,
        this.envAwareId(name, "worker-version"),
        {
          accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
          workerId: worker.id,
          ...config,
        },
      );

      const workersDeployment = new WorkersDeployment(
        this,
        this.envAwareId(name, "workers-deployment"),
        {
          accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
          scriptName: worker.name,
          strategy: "percentage",
          versions: [
            {
              versionId: workerVersion.id,
              percentage: 100,
            },
          ],
        },
      );

      new WorkersRoute(this, this.envAwareId(name, "workers-route"), {
        zoneId: this.zoneId,
        pattern: `${domain}/*`,
        script: workersDeployment.scriptName,
      });
    }

    new R2Bucket(this, this.envAwareId("r2-bucket"), {
      accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
      name: this.secrets.R2_BUCKET_NAME,
    });
  }

  private getApps(): {
    name: string;
    config: Omit<WorkerVersionConfig, "accountId" | "workerId">;
  }[] {
    return [];
    // FIXME: until we nixify cdktf
    // const dir = join(directory.root, "apps");
    // return readdirSync(dir).map((name) => {
    //   const path = join(dir, name);
    //   return {
    //     name,
    //     config: this.packageJsonToWorkerVersionConfig(path),
    //   };
    // });
  }

  private packageJsonToWorkerVersionConfig(
    dir: string,
  ): Omit<WorkerVersionConfig, "accountId" | "workerId"> {
    const packageJson = readJsonFileSync(join(dir, "package.json"));
    return {
      mainModule: packageJson.main?.replace("dist/", ""),
      modules: packageJson.main
        ? globSync(join(dir, "dist/**/*.js")).map((file) => {
            return {
              contentFile: file,
              contentType: "application/javascript+module",
              name: file.replace(join(dir, "dist") + "/", ""),
            } satisfies WorkerVersionModules;
          })
        : [],
      assets: {
        directory: join(dir, "dist"),
      },
      compatibilityFlags: ["nodejs_compat"],
      // Minimal compatibility date to enable `nodejs_compat_v2`
      // https://developers.cloudflare.com/workers/configuration/compatibility-flags/#nodejs-compatibility-flag
      compatibilityDate: "2024-09-23",
      // TODO: respect SPA?
    };
  }
}
