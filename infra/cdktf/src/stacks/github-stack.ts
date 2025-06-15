import { GithubProvider } from '@cdktf/provider-github/lib/provider'
import { RepositoryRuleset } from '@cdktf/provider-github/lib/repository-ruleset'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class GitHubStack extends TerraformStack {
  private readonly requiredChecks = ['check', 'codegen-no-drift']

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
          requiredCheck: this.requiredChecks.map(context => ({
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
