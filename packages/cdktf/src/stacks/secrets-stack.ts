import type { Construct } from 'constructs'
import { DataInfisicalProjects } from 'terraform-providers/infisical/data-infisical-projects'
import { ProjectEnvironment } from 'terraform-providers/infisical/project-environment'
import { InfisicalProvider } from 'terraform-providers/infisical/provider'
import { Secret } from 'terraform-providers/infisical/secret'
import { objectKeys } from '../object.ts'
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

    const project = new DataInfisicalProjects(this, 'project', {
      slug: 'platform'
    })

    const environment = new ProjectEnvironment(this, this.envAwareId('project-environment'), {
      projectId: project.id,
      name: this.environment,
      slug: this.environment
    })

    for (const key of objectKeys(this.secrets)) {
      new Secret(this, this.envAwareId('secret', key), {
        workspaceId: project.id,
        envSlug: environment.slug,
        folderPath: '/',
        name: key,
        value: this.secrets[key]
      })
    }
  }
}
