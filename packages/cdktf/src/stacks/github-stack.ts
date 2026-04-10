import { DataGithubRepository } from "@oyasaiserver/cdktf-providers/github/data-github-repository";
import { GithubProvider } from "@oyasaiserver/cdktf-providers/github/provider";
import { RepositoryEnvironment } from "@oyasaiserver/cdktf-providers/github/repository-environment";
import type { Secrets } from "@oyasaiserver/secrets";
import type { Construct } from "constructs";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

export class GitHubStack extends OyasaiTerraformStack {
  public constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id, secrets);

    new GithubProvider(this, id, {
      owner: "oyasaiserver",
      appAuth: {
        id: this.secrets.GITHUB_APP_ID,
        installationId: this.secrets.GITHUB_APP_INSTALLATION_ID,
        pemFile: this.secrets.GITHUB_APP_PEM_FILE,
      },
    });

    const repository = new DataGithubRepository(this, "repository", {
      name: "platform",
    });

    new RepositoryEnvironment(this, this.envAwareId("repository-environment"), {
      repository: repository.name,
      environment: this.environment,
    });
  }
}
