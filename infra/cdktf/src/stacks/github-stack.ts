import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { BranchDefault } from '@cdktf/provider-github/lib/branch-default'
import { GithubProvider } from '@cdktf/provider-github/lib/provider'
import { Repository } from '@cdktf/provider-github/lib/repository'
import { RepositoryRuleset } from '@cdktf/provider-github/lib/repository-ruleset'
import { constants } from '@oyasaiserver/lib/constants'
import { directory } from '@oyasaiserver/lib/directory'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { parse } from 'yaml'
import { description, homepage } from '../../../../package.json'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class GitHubStack extends TerraformStack {
  private readonly repository = 'platform'
  private readonly defaultBranch = 'main'

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new GithubProvider(this, id, {
      owner: constants.github.organization,
      appAuth: {
        id: secrets.GITHUB_APP_ID,
        installationId: secrets.GITHUB_APP_INSTALLATION_ID,
        pemFile: secrets.GITHUB_APP_PEM_FILE
      }
    })

    new Repository(this, `${id}-repository`, {
      name: constants.github.repository,
      description,
      visibility: 'public',
      homepageUrl: homepage,
      hasIssues: true,
      hasWiki: false,
      hasProjects: false,
      deleteBranchOnMerge: true,
      allowAutoMerge: true,
      allowMergeCommit: false,
      allowRebaseMerge: false,
      allowSquashMerge: true,
      allowUpdateBranch: true,
      squashMergeCommitMessage: 'PR_BODY',
      squashMergeCommitTitle: 'PR_TITLE'
    })

    new BranchDefault(this, `${id}-branch-default`, {
      repository: this.repository,
      branch: this.defaultBranch
    })

    new RepositoryRuleset(this, `${id}-repository-ruleset`, {
      repository: this.repository,
      enforcement: 'active',
      name: 'base',
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
