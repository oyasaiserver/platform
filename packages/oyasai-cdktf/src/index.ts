#!/usr/bin/env node --enable-source-maps
import { App } from "cdktf";
import { mustEnv } from "./helpers.ts";
import { CommonInfra } from "./stacks/common-infra.ts";
import { CommonInternal } from "./stacks/common-internal.ts";
import { PlatformInfra } from "./stacks/platform-infra.ts";
import { PlatformServices } from "./stacks/platform-services.ts";

function synth() {
  const app = new App();

  const environment = mustEnv("ENVIRONMENT");
  const oyasaiImageId = mustEnv("OYASAI_IMAGE_ID");

  const commonInfra = new CommonInfra(app, "common-infra");

  new CommonInternal(app, "common-internal", { commonInfra });

  const platformInfra = new PlatformInfra(
    app,
    `platform-${environment}-infra`,
    environment,
    { commonInfra },
  );

  new PlatformServices(
    app,
    `platform-${environment}-services`,
    environment,
    { commonInfra, platformInfra },
    { oyasaiImageId },
  );

  app.synth();
}

synth();
