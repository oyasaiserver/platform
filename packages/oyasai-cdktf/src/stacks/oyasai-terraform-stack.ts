import { CloudBackend, Fn, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { mustEnv } from "../helpers.ts";

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  protected readonly id: string;

  protected constructor(scope: Construct, id: string) {
    super(scope, id);
    this.id = id;
  }

  protected t(...fragments: string[]): string {
    return fragments.join("-");
  }

  protected createCloudBackend(): CloudBackend {
    return new CloudBackend(this, {
      hostname: "app.terraform.io",
      organization: "oyasaiserver",
      workspaces: new NamedCloudWorkspace(this.id),
    });
  }
}

/**
 * OyasaiTerraformStack with environment.
 */
export abstract class OyasaiPlatformTerraformStack extends OyasaiTerraformStack {
  protected readonly environment: string;
  protected readonly isMaster: boolean;

  constructor(scope: Construct, id: string, environment: string) {
    super(scope, id);
    this.environment = environment;
    this.isMaster = this.environment === "master";
  }

  protected override t(...fragments: string[]): string {
    return super.t(this.environment, ...fragments);
  }
}
