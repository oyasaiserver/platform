import type { SecretKey } from '@oyasaiserver/secrets'
import type { Construct } from 'constructs'
import { Project } from 'terraform-providers/infisical/project'
import { ProjectEnvironment } from 'terraform-providers/infisical/project-environment'
import { InfisicalProvider } from 'terraform-providers/infisical/provider'
import { Secret } from 'terraform-providers/infisical/secret'
import { OyasaiTerraformStack } from './oyasai-terraform-stack.ts'

export class SecretsStack extends OyasaiTerraformStack {
  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new InfisicalProvider(this, id, {
      auth: {
        universal: {
          clientId: this.secrets.INFISICAL_CLIENT_ID,
          clientSecret: this.secrets.INFISICAL_CLIENT_SECRET
        }
      }
    })

    const project = new Project(this, 'project', {
      name: 'platform',
      slug: 'platform'
    })

    new ProjectEnvironment(this, this.envAwareId('project-environment'), {
      projectId: project.id,
      name: this.environment,
      slug: this.environment
    })

    for (const key of Object.keys(this.secrets) as SecretKey[]) {
      new Secret(this, this.envAwareId('secret', key), {
        workspaceId: project.id,
        envSlug: this.environment,
        folderPath: '/',
        name: key,
        value: this.secrets[key]
      })
    }
  }
}
