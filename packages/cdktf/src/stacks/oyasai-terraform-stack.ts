import { createSecrets } from '@oyasaiserver/secrets'
import { type Environment, getEnvironment } from '@oyasaiserver/secrets/environment'
import { CloudBackend, Fn, LocalBackend, NamedCloudWorkspace, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { mapValues } from '../object.ts'

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  protected readonly environment = getEnvironment()
  protected readonly secrets = this.createTerraformSensitiveSecrets()

  protected constructor(scope: Construct, id: string) {
    super(scope, id)

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

  private createTerraformSensitiveSecrets() {
    const secrets = createSecrets()
    return mapValues(secrets, (_, value) => {
      return Fn.sensitive(value) as string
    })
  }
}
