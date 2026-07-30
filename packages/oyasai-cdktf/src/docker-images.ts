import { join } from "node:path";
import { mustEnv } from "./helpers.ts";

export function getDockerImages() {
  const imageIds = JSON.parse(mustEnv("OYASAI_IMAGE_ID"));
  return {
    // keep-sorted start
    caddy: imageIds["caddy"],
    mariadb: imageIds.mariadb,
    minecraftAxiom: imageIds["oyasai-minecraft-axiom"],
    minecraftBackup: imageIds["mc-backup"],
    minecraftLobby: imageIds["oyasai-minecraft-lobby"],
    minecraftMain: imageIds["oyasai-minecraft-main"],
    mysqlBackup: imageIds["mysql-backup"],
    niks3: imageIds.niks3,
    oyasaiWeb: imageIds["oyasai-web"],
    postgres: imageIds["postgres"],
    velocity: imageIds["oyasai-velocity"],
    // keep-sorted end
  } as const;
}

export function getHostPaths(environment: string) {
  const baseHostPath = join("/opt/platform", environment);
  return {
    // keep-sorted start
    caddy: join(baseHostPath, "caddy"),
    mariadb: join(baseHostPath, "mariadb"),
    minecraftAxiom: join(baseHostPath, "minecraft-axiom"),
    minecraftLobby: join(baseHostPath, "minecraft-lobby"),
    minecraftMain: join(baseHostPath, "minecraft-main"),
    postgres: join(baseHostPath, "postgres"),
    velocity: join(baseHostPath, "velocity"),
    // keep-sorted end
  } as const;
}
