import { createSecrets, type Secrets } from '@oyasaiserver/secrets'
import { getEnvironment, type Environment } from '@oyasaiserver/secrets/environment'
import { CloudBackend, Fn, LocalBackend, NamedCloudWorkspace, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { mapValues } from '../object.ts'

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  protected readonly environment: Environment
  protected readonly secrets: Secrets

  protected constructor(scope: Construct, id: string) {
    super(scope, id)
    this.environment = getEnvironment()
    this.secrets = this.createTerraformSensitiveSecrets(this.environment)

    if (this.environment === 'local') {
      new LocalBackend(this)
    } else {
      new CloudBackend(this, {
        hostname: 'app.terraform.io',
        organization: 'oyasaiserver',
        workspaces: new NamedCloudWorkspace(this.envAwareId(id))
      })
    }
  }

  protected envAwareId(...fragments: readonly string[]): string {
    return [...fragments, this.environment].join('-')
  }

  protected envAwareConfig<const T extends Record<Environment, any>>(
    config: T
  ): Readonly<T[keyof T]> {
    return config[this.environment]
  }

  private createTerraformSensitiveSecrets(environment: Environment): Secrets {
    return mapValues(createSecrets(environment), (_, value) => {
      return Fn.sensitive(value)
    })
  }
}
