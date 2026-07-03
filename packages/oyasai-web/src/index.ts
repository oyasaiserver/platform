#!/usr/bin/env node --enable-source-maps
import { ok } from "node:assert";
import { createServer } from "node:http";
import { env } from "node:process";

export function mustEnv(name: string): string {
  const value = env[name];
  ok(value, `Required envvar ${name} missing`);
  return value;
}

const server = createServer((_, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hello World!\n");
});

const port = mustEnv("OYASAI_LISTEN_PORT");

server.listen(port);
