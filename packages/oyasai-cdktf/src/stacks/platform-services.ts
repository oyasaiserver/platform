import { Container } from "@oyasaiserver/cdktf-providers/docker/container";
import { Network } from "@oyasaiserver/cdktf-providers/docker/network";
import { DockerProvider } from "@oyasaiserver/cdktf-providers/docker/provider";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import { Password } from "@oyasaiserver/cdktf-providers/random/password";
import { RandomProvider } from "@oyasaiserver/cdktf-providers/random/provider";
import { LocalBackend } from "cdktf";
import { Construct } from "constructs";
import { join } from "node:path";
import { envs, mustEnv, ports } from "../helpers.ts";
import { createSecrets } from "../secrets.ts";
import type { CommonInfra } from "./common-infra.ts";
import { OyasaiPlatformTerraformStack } from "./oyasai-terraform-stack.ts";
import type { PlatformInfra } from "./platform-infra.ts";

type Props = Readonly<{
  commonInfra: CommonInfra;
  platformInfra: PlatformInfra;
}>;

export class PlatformServices extends OyasaiPlatformTerraformStack {
  constructor(
    scope: Construct,
    id: string,
    environment: string,
    { commonInfra, platformInfra }: Props,
  ) {
    super(scope, id, environment);

    new InfisicalProvider(this, this.t("infisical-provider"));
    new RandomProvider(this, this.t("random-provider"));

    const { r2Bucket } = platformInfra;
    const secrets = createSecrets(this, commonInfra);

    if (this.isMaster) {
      this.createCloudBackend();

      new DockerProvider(this, id, {
        host: "tcp://oyasai.io:2376",
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

    const randoms = {
      // Can't find official spec but this works - ueda 2026-07
      rconPassword: new Password(this, this.t("rcon-password"), {
        length: 32,
        special: false,
      }),
      // Can't find official spec but this works - ueda 2026-07
      velocityForwardingSecret: new Password(
        this,
        this.t("velocity-forwarding-secret"),
        {
          length: 32,
          special: false,
        },
      ),
    } as const;

    const imageIds = JSON.parse(mustEnv("OYASAI_IMAGE_ID"));
    const images = {
      // keep-sorted start
      caddy: imageIds["caddy"],
      mariadb: imageIds.mariadb,
      minecraftAxiom: imageIds["oyasai-minecraft-axiom"],
      minecraftBackup: imageIds["mc-backup"],
      minecraftLobby: imageIds["oyasai-minecraft-lobby"],
      minecraftMain: imageIds["oyasai-minecraft-main"],
      mysqlBackup: imageIds["mysql-backup"],
      oyasaiWeb: imageIds["oyasai-web"],
      velocity: imageIds["oyasai-velocity"],
      // keep-sorted end
    } as const;

    const baseHostPath = join("/opt/platform", this.environment);
    const hostPaths = {
      // keep-sorted start
      caddy: join(baseHostPath, "caddy"),
      mariadb: join(baseHostPath, "mariadb"),
      minecraftAxiom: join(baseHostPath, "minecraft-axiom"),
      minecraftLobby: join(baseHostPath, "minecraft-lobby"),
      minecraftMain: join(baseHostPath, "minecraft-main"),
      velocity: join(baseHostPath, "velocity"),
      // keep-sorted end
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
          hostPath: hostPaths.mariadb,
        },
        {
          containerPath: "/docker-entrypoint-initdb.d",
          hostPath: hostPaths.mariadb,
        },
      ],
    });

    const minecraftMainContainer = new Container(
      this,
      this.t("minecraft-main-container"),
      {
        image: images.minecraftMain,
        name: "oyasai-minecraft-main",
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
        }),
        env: envs({
          MEMORY: this.isMaster
            ? // On-prem has 64GB
              "28G"
            : // GitHub Action runners have 16G
              "10G",
          RCON_PASSWORD: randoms.rconPassword.result,

          ...(this.isMaster && {
            DISCORDSRV_TOKEN: secrets.get("DISCORDSRV_TOKEN"),
          }),
          PAPER_VELOCITY_SECRET: randoms.velocityForwardingSecret.result,
        }),
        volumes: [
          {
            containerPath: "/data",
            hostPath: hostPaths.minecraftMain,
          },
        ],
        ...(this.isMaster && {
          // Pin container to P-cores only (logical CPUs 0–11) to avoid latency
          // spikes caused by the main tick thread being scheduled on E-cores.
          cpuSet: "0-11",
        }),
      },
    );

    const minecraftLobbyContainer = new Container(
      this,
      this.t("minecraft-lobby-container"),
      {
        image: images.minecraftLobby,
        name: "oyasai-minecraft-lobby",
        dependsOn: [mariadbContainer],
        restart: "unless-stopped",
        tty: true,
        stdinOpen: true,
        destroyGraceSeconds: 2 * 60,
        init: true,
        networksAdvanced: [network],
        env: envs({
          MEMORY: "2G",
          PAPER_VELOCITY_SECRET: randoms.velocityForwardingSecret.result,
        }),
        volumes: [
          {
            containerPath: "/data",
            hostPath: hostPaths.minecraftLobby,
          },
        ],
      },
    );

    const minecraftAxiomContainer = new Container(
      this,
      this.t("minecraft-axiom-container"),
      {
        image: images.minecraftAxiom,
        name: "oyasai-minecraft-axiom",
        dependsOn: [mariadbContainer],
        restart: "unless-stopped",
        tty: true,
        stdinOpen: true,
        destroyGraceSeconds: 2 * 60,
        init: true,
        networksAdvanced: [network],
        env: envs({
          MEMORY: "8G",
          PAPER_VELOCITY_SECRET: randoms.velocityForwardingSecret.result,
        }),
        volumes: [
          {
            containerPath: "/data",
            hostPath: hostPaths.minecraftAxiom,
          },
        ],
      },
    );

    new Container(this, this.t("velocity-container"), {
      image: images.velocity,
      name: "oyasai-velocity",
      restart: "unless-stopped",
      networksAdvanced: [network],
      ports: ports({
        tcp: [25565], // Java
        udp: [19132], // Bedrock
      }),
      env: envs({
        VELOCITY_FORWARDING_SECRET: randoms.velocityForwardingSecret.result,
        MEMORY: "512M",
      }),
      volumes: [
        {
          containerPath: "/data",
          hostPath: hostPaths.velocity,
        },
      ],
    });

    const oyasaiWebContainer = new Container(
      this,
      this.t("oyasai-web-container"),
      {
        image: images.oyasaiWeb,
        name: "oyasai-web",
        restart: "unless-stopped",
        networksAdvanced: [network],
        env: envs({
          OYASAI_LISTEN_PORT: 80,
        }),
      },
    );

    new Container(this, this.t("caddy-container"), {
      image: images.caddy,
      name: "caddy",
      restart: "unless-stopped",
      networksAdvanced: [network],
      ports: ports({
        tcp: [
          80, // http
          443, // https
        ],
      }),
      command: [
        "reverse-proxy",
        "--from",
        platformInfra.rootDnsRecord.name,
        "--to",
        oyasaiWebContainer.name,
      ],
      volumes: [
        {
          containerPath: "/data",
          hostPath: hostPaths.caddy,
        },
      ],
    });

    if (this.isMaster) {
      const cloudflareBaseUrl = `https://${commonInfra.cloudflareAccountId}.r2.cloudflarestorage.com`;

      const backedupMinecraftContainers = {
        ["minecraft-main"]: minecraftMainContainer,
        ["minecraft-axiom"]: minecraftAxiomContainer,
      } as const;

      for (const [backupId, minecraftContainer] of Object.entries(
        backedupMinecraftContainers,
      )) {
        new Container(this, this.t(`${backupId}-backup-container`), {
          name: `${backupId}-backup`,
          dependsOn: [minecraftContainer],
          image: images.minecraftBackup,
          networksAdvanced: [network],
          restart: "unless-stopped",
          env: envs({
            // keep-sorted start block=yes
            AWS_ACCESS_KEY_ID: secrets.get("CLOUDFLARE_ACCESS_KEY_ID"),
            AWS_SECRET_ACCESS_KEY: secrets.get("CLOUDFLARE_SECRET_ACCESS_KEY"),
            BACKUP_INTERVAL: "6h",
            BACKUP_METHOD: "restic",
            BACKUP_NAME: minecraftContainer.name,
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
            RCON_HOST: minecraftContainer.name,
            RCON_PASSWORD: randoms.rconPassword.result,
            RESTIC_ADDITIONAL_TAGS: "", // Set to an empty string to disable additional tags.
            RESTIC_PASSWORD: secrets.get("RESTIC_PASSWORD"),
            RESTIC_REPOSITORY: `s3:${cloudflareBaseUrl}/${r2Bucket.name}/${backupId}-backup`,
            // keep-sorted end
          }),
          volumes: minecraftContainer.volumesInput,
        });
      }

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
