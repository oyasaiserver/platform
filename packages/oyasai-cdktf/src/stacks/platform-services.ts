import { Container } from "@oyasaiserver/cdktf-providers/docker/container";
import { Network } from "@oyasaiserver/cdktf-providers/docker/network";
import { DockerProvider } from "@oyasaiserver/cdktf-providers/docker/provider";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import { LocalBackend } from "cdktf";
import { Construct } from "constructs";
import { ok } from "node:assert";
import { join } from "node:path";
import { envs, ports } from "../helpers.ts";
import { createSecrets } from "../secrets.ts";
import type { CommonInfra } from "./common-infra.ts";
import { OyasaiPlatformTerraformStack } from "./oyasai-terraform-stack.ts";
import type { PlatformInfra } from "./platform-infra.ts";

type StackDependencies = Readonly<{
  commonInfra: CommonInfra;
  platformInfra: PlatformInfra;
}>;

type Config = Readonly<{
  oyasaiImageId: string;
}>;

export class PlatformServices extends OyasaiPlatformTerraformStack {
  private readonly workdir = join("/opt/platform", this.environment);

  constructor(
    scope: Construct,
    id: string,
    environment: string,
    { commonInfra, platformInfra }: StackDependencies,
    { oyasaiImageId }: Config,
  ) {
    super(scope, id, environment);

    new InfisicalProvider(this, this.t("infisical-provider"));

    const { r2Bucket } = platformInfra;
    const secrets = createSecrets(this, commonInfra);

    if (this.isMaster) {
      this.createCloudBackend();

      new DockerProvider(this, id, {
        host: `tcp://${platformInfra.ipv4}:2376`,
        caMaterial: secrets.get("TLS_CA_PEM"),
        certMaterial: secrets.get("TLS_CERT_PEM"),
        keyMaterial: secrets.get("TLS_KEY_PEM"),
      });
    } else {
      new LocalBackend(this);

      new DockerProvider(this, id, {
        host: "unix:///var/run/docker.sock",
      });
    }

    function oyasaiImage(name: string): string {
      // Special case for situation where we want to synth but don't deploy.
      if (oyasaiImageId === "<nodeploy>") {
        return oyasaiImageId;
      }
      const parsed = JSON.parse(oyasaiImageId);
      ok(name in parsed, `Image ${name} not found`);
      return parsed[name];
    }

    const network = new Network(this, this.t("network"), {
      name: "network",
    });

    const mariadbContainer = new Container(this, this.t("mariadb-container"), {
      image: oyasaiImage("mariadb"),
      name: "mariadb",
      restart: "unless-stopped",
      env: envs({
        MARIADB_ROOT_PASSWORD: secrets.get("MARIADB_PASSWORD"),
      }),
      networksAdvanced: [network],
      volumes: [
        {
          containerPath: "/var/lib/mysql",
          hostPath: join(this.workdir, "mariadb"),
        },
        {
          containerPath: "/docker-entrypoint-initdb.d",
          hostPath: join(this.workdir, "mariadb"),
        },
      ],
    });

    const minecraftMainContainer = new Container(
      this,
      this.t("minecraft-main-container"),
      {
        image: oyasaiImage("oyasai-minecraft-main"),
        name: "minecraft-main",
        dependsOn: [mariadbContainer],
        restart: "unless-stopped",
        tty: true,
        stdinOpen: true,
        destroyGraceSeconds: 2 * 60,
        init: true,
        networksAdvanced: [network],
        ports: ports({
          tcp: [8100, 8192, 25565, 25575],
          udp: [19132],
        }),
        env: envs({
          MEMORY: this.isMaster
            ? // On-prem has 64GB but looks like 28GB is the most stable because
              // JVM GC overhead. No calculation, based on experiments.
              "28G"
            : // GitHub Action runners have 16GB, but also runs other containers
              // so limiting to 10GB.
              "10G",
          RCON_PASSWORD: secrets.get("RCON_PASSWORD"),
        }),
        volumes: [
          {
            containerPath: "/data",
            hostPath: join(this.workdir, "minecraft-main"),
          },
        ],
      },
    );

    if (this.isMaster) {
      const cloudflareBaseUrl = `https://${secrets.get("CLOUDFLARE_ACCOUNT_ID")}.r2.cloudflarestorage.com`;

      new Container(this, this.t("minecraft-backup-container"), {
        name: "minecraft-main-backup",
        dependsOn: [minecraftMainContainer],
        image: oyasaiImage("mc-backup"),
        networksAdvanced: [network],
        restart: "unless-stopped",
        env: envs({
          // keep-sorted start
          AWS_ACCESS_KEY_ID: secrets.get("CLOUDFLARE_ACCESS_KEY_ID"),
          AWS_SECRET_ACCESS_KEY: secrets.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
          BACKUP_INTERVAL: "6h",
          BACKUP_METHOD: "restic",
          EXCLUDES: "*.jar,cache,logs,*.tmp,bluemap",
          PRUNE_RESTIC_RETENTION:
            "--keep-daily 7 --keep-weekly 4 --keep-monthly 3",
          RCON_HOST: "minecraft-main",
          RCON_PASSWORD: secrets.get("RCON_PASSWORD"),
          RESTIC_PASSWORD: secrets.get("RESTIC_PASSWORD"),
          RESTIC_REPOSITORY: `s3:${cloudflareBaseUrl}/${r2Bucket.name}/minecraft-main-backup`,
          RESTIC_VERBOSE: true,
          // keep-sorted end
        }),
        volumes: [
          {
            hostPath: join(this.workdir, "minecraft-main"),
            containerPath: "/data",
            readOnly: true,
          },
        ],
      });

      new Container(this, this.t("mariadb-backup-container"), {
        name: "mariadb-backup",
        dependsOn: [mariadbContainer],
        image: oyasaiImage("mysql-backup"),
        restart: "unless-stopped",
        networksAdvanced: [network],
        command: ["dump"],
        env: envs({
          DB_SERVER: "mariadb",
          DB_USER: "root",
          DB_PASS: secrets.get("MARIADB_PASSWORD"),
          DB_DUMP_FREQUENCY: 360,
          DB_DUMP_TARGET: `s3://${r2Bucket.name}/mariadb-backup`,
          AWS_ACCESS_KEY_ID: secrets.get("CLOUDFLARE_ACCESS_KEY_ID"),
          AWS_SECRET_ACCESS_KEY: secrets.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
          AWS_REGION: "auto",
          AWS_ENDPOINT_URL: cloudflareBaseUrl,
          DB_DUMP_COMPRESSION: "gzip",
          DB_DUMP_RETENTION: "14d",
          DB_DEBUG: true,
        }),
      });
    }
  }
}
