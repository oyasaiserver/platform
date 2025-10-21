import { DataGithubRepository } from '@cdktf/provider-github/lib/data-github-repository/index.js'
import { GithubProvider } from '@cdktf/provider-github/lib/provider/index.js'
import { RepositoryEnvironment } from '@cdktf/provider-github/lib/repository-environment/index.js'
import { RepositoryRuleset } from '@cdktf/provider-github/lib/repository-ruleset/index.js'
import type { Construct } from 'constructs'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'
import { directory } from '../fs.ts'
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

    // GitHub is a special case - we want to deploy for each push to main
    if (this.environment === 'development') {
      new RepositoryRuleset(this, `${id}-repository-ruleset`, {
        repository: repository.name,
        enforcement: 'active',
        name: 'protect-main',
        target: 'branch',
        conditions: {
          refName: {
            include: ['~DEFAULT_BRANCH'],
            exclude: []
          }
        },
        rules: {
          mergeQueue: {
            groupingStrategy: 'ALLGREEN',
            mergeMethod: 'SQUASH'
          },
          pullRequest: {
            requiredApprovingReviewCount: 0,
            requireCodeOwnerReview: true,
            requiredReviewThreadResolution: true
          },
          requiredStatusChecks: {
            requiredCheck: this.getRequiredCheckContexts().map(context => ({
              context
            }))
          }
        },
        bypassActors: [
          {
            actorId: 1,
            actorType: 'OrganizationAdmin',
            bypassMode: 'always'
          }
        ]
      })
    }
  }

  private getRequiredCheckContexts(): readonly string[] {
    return ['ci.yaml', 'pr.yaml'].flatMap(file => {
      const path = join(directory.root, '.github/workflows', file)
      const content = readFileSync(path).toString()
      const { jobs } = parse(content)
      return Object.keys(jobs)
    })
  }
}
