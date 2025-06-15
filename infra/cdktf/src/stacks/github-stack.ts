import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { GithubProvider } from '@cdktf/provider-github/lib/provider'
import { RepositoryRuleset } from '@cdktf/provider-github/lib/repository-ruleset'
import { directory } from '@oyasaiserver/lib/directory'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { parse } from 'yaml'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class GitHubStack extends TerraformStack {
  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new GithubProvider(this, id, {
      owner: 'oyasaiserver',
      appAuth: {
        id: secrets.GITHUB_APP_ID,
        installationId: secrets.GITHUB_APP_INSTALLATION_ID,
        pemFile: secrets.GITHUB_APP_PEM_FILE
      }
    })

    new RepositoryRuleset(this, `${id}-repository-ruleset`, {
      repository: 'platform',
      enforcement: 'active',
      name: 'main',
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
          requiredApprovingReviewCount: 1,
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

  private getRequiredCheckContexts(): readonly string[] {
    return ['ci.yaml', 'pr.yaml'].flatMap(file => {
      const path = join(directory.root, '.github/workflows', file)
      const content = readFileSync(path).toString()
      const { jobs } = parse(content)
      return Object.keys(jobs)
    })
  }
}
