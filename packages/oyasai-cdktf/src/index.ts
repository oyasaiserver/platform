#!/usr/bin/env node --enable-source-maps
import { App } from "cdktf";
import { PlatformInfra } from "./stacks/platform-infra.ts";
import { CommonInternal } from "./stacks/common-internal.ts";
import { PlatformServices } from "./stacks/platform-services.ts";
import { mustEnv } from "./helpers.ts";
import { CommonInfra } from "./stacks/common-infra.ts";

function synth() {
  const app = new App();
  const environment = mustEnv("ENVIRONMENT");

  new CommonInternal(app, "common-internal");

  new CommonInfra(app, "common-infra");

  const platformInfra = new PlatformInfra(
    app,
    `platform-${environment}-infra`,
    environment,
  );

  new PlatformServices(app, `platform-${environment}-services`, environment, {
    platformInfra,
  });

  app.synth();
}

synth();
