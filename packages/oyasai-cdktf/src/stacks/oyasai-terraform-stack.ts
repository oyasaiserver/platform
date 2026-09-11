import { CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { readFileSync, type PathLike } from "node:fs";
import { join } from "node:path";

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  protected readonly id: string;

  protected constructor(scope: Construct, id: string) {
    super(scope, id);
    this.id = id;
  }

  t(...fragments: string[]): string {
    return fragments.join("-");
  }

  protected assets(name: string) {
    const path = join(import.meta.dirname, "../..", "assets", name);
    return readFileSync(path, "utf-8");
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

  override t(...fragments: string[]): string {
    return super.t(this.environment, ...fragments);
  }
}
