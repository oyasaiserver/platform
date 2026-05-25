import { Container } from "@oyasaiserver/cdktf-providers/docker/container";
import { Network } from "@oyasaiserver/cdktf-providers/docker/network";
import { DockerProvider } from "@oyasaiserver/cdktf-providers/docker/provider";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import { LocalBackend } from "cdktf";
import { Construct } from "constructs";
import { join } from "node:path";
import { envs, ports } from "../helpers.ts";
import { createSecrets } from "../secrets.ts";
import type { CommonInfra } from "./common-infra.ts";
import { OyasaiPlatformTerraformStack } from "./oyasai-terraform-stack.ts";
import type { PlatformInfra } from "./platform-infra.ts";

type Props = Readonly<{
  commonInfra: CommonInfra;
  platformInfra: PlatformInfra;
}>;

export class PlatformServices extends OyasaiPlatformTerraformStack {
  private readonly workdir = join("/opt/platform", this.environment);

  constructor(
    scope: Construct,
    id: string,
    environment: string,
    { commonInfra, platformInfra }: Props,
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

    const imageIds = JSON.parse(process.env.OYASAI_IMAGE_ID as string);
    const images = {
      mariadb: imageIds.mariadb,
      mysqlBackup: imageIds["mysql-backup"],
      minecraftMain: imageIds["oyasai-minecraft-main"],
      minecraftBackup: imageIds["mc-backup"],
      velocity: imageIds["oyasai-velocity"],
    } as const;

    const network = new Network(this, this.t("network"), {
      name: "network",
    });

    const mariadbContainer = new Container(this, this.t("mariadb-container"), {
      image: images.mariadb,
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
        image: images.minecraftMain,
        name: "minecraft-main",
        dependsOn: [mariadbContainer],
        restart: "unless-stopped",
        tty: true,
        stdinOpen: true,
        destroyGraceSeconds: 2 * 60,
        init: true,
        networksAdvanced: [network],
        ports: ports({
          tcp: [
            8100, // Bluemap
            8192, // Votifier
            25575, // Rcon
          ],
          udp: [
            19132, // Bedrock
          ],
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

          ...(this.isMaster && {
            DISCORDSRV_TOKEN: secrets.get("DISCORDSRV_TOKEN"),
          }),
          PAPER_VELOCITY_SECRET: secrets.get("VELOCITY_FORWARDING_SECRET"),
        }),
        volumes: [
          {
            containerPath: "/data",
            hostPath: join(this.workdir, "minecraft-main"),
          },
        ],
        ...(this.isMaster && {
          // Pin container to P-cores only (logical CPUs 0–11) to avoid latency
          // spikes caused by the main tick thread being scheduled on E-cores.
          cpuSet: "0-11",
        }),
      },
    );

    new Container(this, this.t("velocity-container"), {
      image: images.velocity,
      name: "velocity",
      dependsOn: [minecraftMainContainer],
      restart: "unless-stopped",
      networksAdvanced: [network],
      ports: ports({
        tcp: [25565],
        udp: [],
      }),
      env: envs({
        VELOCITY_FORWARDING_SECRET: secrets.get("VELOCITY_FORWARDING_SECRET"),
        MEMORY: "512M",
      }),
      volumes: [
        {
          containerPath: "/data",
          hostPath: join(this.workdir, "velocity"),
        },
      ],
    });

    if (this.isMaster) {
      const cloudflareBaseUrl = `https://${secrets.get("CLOUDFLARE_ACCOUNT_ID")}.r2.cloudflarestorage.com`;

      new Container(this, this.t("minecraft-backup-container"), {
        name: "minecraft-main-backup",
        dependsOn: [minecraftMainContainer],
        image: images.minecraftBackup,
        networksAdvanced: [network],
        restart: "unless-stopped",
        env: envs({
          // keep-sorted start block=yes
          AWS_ACCESS_KEY_ID: secrets.get("CLOUDFLARE_ACCESS_KEY_ID"),
          AWS_SECRET_ACCESS_KEY: secrets.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
          BACKUP_INTERVAL: "6h",
          BACKUP_METHOD: "restic",
          BACKUP_NAME: minecraftMainContainer.name,
          EXCLUDES: [
            // keep-sorted start
            "*.hprof", // Spark profiles - they are huge.
            "*.jar",
            "*.tmp",
            "archive",
            "bluemap",
            "cache",
            "crash-reports",
            "debug",
            "logs",
            "versions",
            // keep-sorted end
          ].join(","),
          PRUNE_RESTIC_RETENTION:
            "--keep-daily 7 --keep-weekly 4 --keep-monthly 3",
          RCON_HOST: "minecraft-main",
          RCON_PASSWORD: secrets.get("RCON_PASSWORD"),
          RESTIC_ADDITIONAL_TAGS: "", // Set to an empty string to disable additional tags.
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
        image: images.mysqlBackup,
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
