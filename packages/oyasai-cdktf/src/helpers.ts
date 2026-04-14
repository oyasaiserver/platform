import type { ContainerPorts } from "@oyasaiserver/cdktf-providers/docker/container";
import { ok } from "node:assert";
import { env } from "node:process";

export function envs(
  object: Readonly<Record<string, string | number | boolean>>,
): string[] {
  return Object.entries(object).map(([key, value]) => [key, value].join("="));
}

export function ports(
  mapping: Readonly<Record<"tcp" | "udp", number[]>>,
): ContainerPorts[] {
  return Object.entries(mapping).flatMap(([protocol, ports]) =>
    ports.map((port) => ({
      internal: port,
      external: port,
      protocol,
    })),
  );
}

export function arrayToObject<K extends string, V>(
  arr: readonly K[],
  predicate: (key: K) => V,
): Record<K, V> {
  return arr.reduce(
    (acc, key) => {
      acc[key] = predicate(key);
      return acc;
    },
    {} as Record<K, V>,
  );
}

export function mustEnv(name: string): string {
  const value = env[name];
  ok(value, `Required envvar ${name} missing`);
  return value;
}
