import type { ContainerPorts } from "@oyasaiserver/cdktf-providers/docker/container";
import { ok } from "node:assert";
import { env } from "node:process";

export const DAY_IN_SECONDS = 24 * 60 * 60;

export type Primitive = string | number | boolean;

export function envs(object: Readonly<Record<string, Primitive>>): string[] {
  return Object.entries(object).map(([key, value]) => [key, value].join("="));
}

export function ports(
  mapping: Readonly<Partial<Record<"tcp" | "udp", number[]>>>,
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

export function mapRecord<K extends string, V, K2 extends string, W>(
  obj: { readonly [P in K]: V },
  fn: (key: K, value: V) => readonly [K2, W],
): { [P in K2]: W } {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => fn(key as K, value as V)),
  ) as { [P in K2]: W };
}

export function mustEnv(name: string): string {
  const value = env[name];
  ok(value, `Required envvar ${name} missing`);
  return value;
}

export function pick<T, K extends readonly (keyof T)[]>(
  obj: T,
  ...keys: K
): { [P in K[number]]: T[P] } {
  const result = {} as any;
  for (const k of keys) {
    result[k] = obj[k];
  }
  return result;
}
