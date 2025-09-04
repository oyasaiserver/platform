import { BranchDefault } from '@cdktf/provider-github/lib/branch-default/index.js'
import { GithubProvider } from '@cdktf/provider-github/lib/provider/index.js'
import { RepositoryRuleset } from '@cdktf/provider-github/lib/repository-ruleset/index.js'
import { Repository } from '@cdktf/provider-github/lib/repository/index.js'
import { directory } from '@oyasaiserver/lib/directory'
import { secrets } from '@oyasaiserver/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { YAML } from 'zx'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class GitHubStack extends TerraformStack {
  private readonly repository = 'platform'
  private readonly defaultBranch = 'main'

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

    new Repository(this, 'platform', {
      name: 'platform',
      description: 'Platform for Oyasai Server',
      visibility: 'public',
      homepageUrl: 'oyasai.io',
      hasIssues: true,
      hasWiki: true,
      hasProjects: true,
      deleteBranchOnMerge: true,
      allowAutoMerge: true,
      allowMergeCommit: false,
      allowRebaseMerge: false,
      allowSquashMerge: true,
      allowUpdateBranch: true,
      squashMergeCommitMessage: 'PR_BODY',
      squashMergeCommitTitle: 'PR_TITLE'
    })

    new BranchDefault(this, 'main', {
      repository: this.repository,
      branch: this.defaultBranch
    })

    new RepositoryRuleset(this, 'protect-main', {
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
        pullRequest: {
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

  private getRequiredCheckContexts() {
    return ['ci.yaml', 'pr.yaml'].flatMap(file => {
      const path = join(directory.root, '.github/workflows', file)
      const content = readFileSync(path).toString()
      const { jobs } = YAML.parse(content)
      return Object.keys(jobs)
    })
  }
}
