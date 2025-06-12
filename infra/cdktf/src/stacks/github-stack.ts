import { GithubProvider } from '@cdktf/provider-github/lib/provider'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class GitHubStack extends TerraformStack {
  public constructor(scope: Construct) {
    const id = 'github'
    super(scope, id)

    new NamedCloudBackend(this, id)

    new GithubProvider(this, id, {
      organization: 'oyasaiserver'
    })
  }
}
