import { DataGithubRepository } from '@cdktf/provider-github/lib/data-github-repository/index.js'
import { GithubProvider } from '@cdktf/provider-github/lib/provider/index.js'
import { RepositoryEnvironment } from '@cdktf/provider-github/lib/repository-environment/index.js'
import type { Construct } from 'constructs'
import { OyasaiTerraformStack } from './oyasai-terraform-stack.ts'

export class GitHubStack extends OyasaiTerraformStack {
  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new GithubProvider(this, id, {
      owner: 'oyasaiserver',
      appAuth: {
        id: this.secrets.GITHUB_APP_ID,
        installationId: this.secrets.GITHUB_APP_INSTALLATION_ID,
        pemFile: this.secrets.GITHUB_APP_PEM_FILE
      }
    })

    const repository = new DataGithubRepository(this, 'repository', {
      name: 'platform'
    })

    new RepositoryEnvironment(this, this.envAwareId('repository-environment'), {
      repository: repository.name,
      environment: this.environment
    })
  }
}
