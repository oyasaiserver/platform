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

  const commonInfra = new CommonInfra(app, "common-infra");

  new CommonInternal(app, "common-internal", { commonInfra });

  const platformInfra = new PlatformInfra(
    app,
    `platform-${environment}-infra`,
    environment,
    { commonInfra },
  );

  new PlatformServices(app, `platform-${environment}-services`, environment, {
    commonInfra,
    platformInfra,
  });

  app.synth();
}

synth();
