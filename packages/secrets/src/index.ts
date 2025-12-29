import { ok } from "node:assert";
import { env } from "node:process";
import { defaults } from "./defaults.ts";
import { readEnvironment } from "./environment.ts";

export type Secrets = Readonly<Record<keyof typeof defaults, string>> & {
  ENVIRONMENT: "local" | "development" | "production";
};

export function createSecrets(): Secrets {
  const environment = readEnvironment();
  if (environment === "local") {
    return defaults;
  }
  return mapValues<Secrets, string>(defaults, (key) => {
    const value = env[key];
    ok(value, `Environment variable ${key} is not set.`);
    return value;
  }) as Secrets;
}

// TODO: unify into a lib (along with cdktf).

export function objectKeys<const T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}

export function mapValues<T extends object, V>(
  object: T,
  predicate: (key: keyof T, value: T[keyof T], object: T) => V,
): Record<keyof T, V> {
  const result = {} as Record<keyof T, V>;
  const keys = objectKeys(object);
  for (const key of keys) {
    const value = object[key];
    result[key] = predicate(key, value, object);
  }
  return result;
}
