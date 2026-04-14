import { GithubProvider } from "@oyasaiserver/cdktf-providers/github/provider";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";
import type { Construct } from "constructs";

export class CommonInternal extends OyasaiTerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.createCloudBackend();

    new GithubProvider(this, "github-provider", {
      owner: "oyasaiserver",

      // @ts-expect-error https://github.com/hashicorp/terraform-plugin-sdk/issues/142
      appAuth: {},
    });
  }
}
