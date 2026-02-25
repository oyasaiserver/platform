import { Container } from "@cdktf/provider-docker/lib/container/index.js";
import { Network } from "@cdktf/provider-docker/lib/network/index.js";
import { DockerProvider } from "@cdktf/provider-docker/lib/provider/index.js";
import type { Secrets } from "@oyasaiserver/secrets";
import { Construct } from "constructs";
import { join } from "node:path";
import { directory } from "../fs.ts";
import { envs, ports } from "../object.ts";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

export class DockerStack extends OyasaiTerraformStack {
  // TODO: have a common place with minecraft-main, probably thru
  // nix + terranix + envvar
  public static readonly minecraftVersion = "1.21.8";

  private workdir = join(
    this.environment === "local" ? directory.root : "/opt/platform",
    this.environment,
  );

  public constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id, secrets);

    new DockerProvider(
      this,
      id,
      this.environment === "local"
        ? { host: "unix:///var/run/docker.sock" }
        : {
            host: `tcp://${this.secrets.PUBLIC_IPV4}:2376`,
            caMaterial: this.secrets.TLS_CA_PEM,
            certMaterial: this.secrets.TLS_CERT_PEM,
            keyMaterial: this.secrets.TLS_KEY_PEM,
          },
    );

    const imageIds = JSON.parse(process.env.OYASAI_IMAGE_ID as string);
    const images = {
      mariadb: imageIds.mariadb,
      minecraftMain: imageIds["oyasai-minecraft-main"],
      minecraftBackup: imageIds["mc-backup"],
    } as const;

    const network = new Network(this, this.envAwareId("network"), {
      name: "network",
    });

    const mariadbContainer = new Container(
      this,
      this.envAwareId("mariadb-container"),
      {
        image: images.mariadb.imageId,
        name: "mariadb",
        restart: "unless-stopped",
        env: envs({
          MARIADB_ROOT_PASSWORD: this.secrets.MARIADB_PASSWORD,
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
      },
    );

    const minecraftMainContainer = new Container(
      this,
      this.envAwareId("minecraft-main-container"),
      {
        image: images.minecraftMain.imageId,
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
          EULA: true,
          TYPE: "PURPUR",
          VERSION: DockerStack.minecraftVersion,
          USE_MEOWICE_FLAGS: this.environment !== "local",
          ENABLE_ROLLING_LOGS: true,
          LOG_TIMESTAMP: true,
          MOTD: `§l§r                 §b§lOyasai§f§lServer§7 [v${DockerStack.minecraftVersion}]§r\n§l§f            建築勢は集合だ！建築！建築！建築！！！`,
          MEMORY: this.envAwareConfig({
            production: "28G",
            development: "12G",
            local: "5G",
          }),
          ICON: "https://avatars.githubusercontent.com/oyasaiserver",
          RCON_PASSWORD: this.secrets.RCON_PASSWORD,
        }),
        healthcheck: {
          test: ["mc-health"],
          startPeriod: "1m",
          interval: "5s",
          retries: 20,
        },
        volumes: [
          {
            containerPath: "/data",
            hostPath: join(this.workdir, "minecraft-main"),
          },
        ],
      },
    );

    const r2CommonEnv = {
      BACKUP_METHOD: "restic",
      RESTIC_PASSWORD: this.secrets.RESTIC_PASSWORD,
      AWS_ACCESS_KEY_ID: this.secrets.CLOUDFLARE_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: this.secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
      RESTIC_VERBOSE: true,
      // bucket is production by default
      RESTIC_REPOSITORY: `s3:https://${this.secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/production/minecraft-main-backup`,
    } as const;

    if (this.environment === "production") {
      new Container(this, this.envAwareId("minecraft-backup-container"), {
        name: "minecraft-main-backup",
        dependsOn: [minecraftMainContainer],
        image: images.minecraftBackup.imageId,
        networksAdvanced: [network],
        restart: "unless-stopped",
        env: envs({
          ...r2CommonEnv,
          RCON_HOST: "minecraft-main",
          RCON_PASSWORD: this.secrets.RCON_PASSWORD,
          EXCLUDES: "*.jar,cache,logs,*.tmp,bluemap",
          BACKUP_INTERVAL: "6h",
          PRUNE_RESTIC_RETENTION:
            "--keep-daily 7 --keep-weekly 4 --keep-monthly 3",
        }),
        volumes: [
          {
            hostPath: join(this.workdir, "minecraft-main"),
            containerPath: "/data",
            readOnly: true,
          },
        ],
      });

      new Container(this, this.envAwareId("mariadb-backup-container"), {
        name: "mariadb-backup",
        dependsOn: [mariadbContainer],
        image: "databack/mysql-backup",
        restart: "unless-stopped",
        networksAdvanced: [network],
        command: ["dump"],
        env: envs({
          DB_SERVER: "mariadb",
          DB_USER: "root",
          DB_PASS: this.secrets.MARIADB_PASSWORD,
          DB_DUMP_FREQUENCY: 360,
          DB_DUMP_TARGET: `s3://${this.secrets.R2_BUCKET_NAME}/mariadb-backup`,
          AWS_ACCESS_KEY_ID: this.secrets.CLOUDFLARE_ACCESS_KEY_ID,
          AWS_SECRET_ACCESS_KEY: this.secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
          AWS_REGION: "auto",
          AWS_ENDPOINT_URL: `https://${this.secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
          DB_DUMP_COMPRESSION: "gzip",
          DB_DUMP_RETENTION: "14d",
          DB_DEBUG: true,
        }),
      });
    }

    if (this.environment === "development") {
      // TODO restore mc data from backup
    }
  }
}
