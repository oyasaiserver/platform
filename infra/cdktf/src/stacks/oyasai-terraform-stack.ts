import type { Environment, Secrets } from '@oyasaiserver/secrets'
import { CloudBackend, LocalBackend, NamedCloudWorkspace, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  protected readonly secrets: Secrets

  protected constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id)
    this.secrets = secrets

    if (secrets.ENVIRONMENT === 'local') {
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
    return [...fragments, this.secrets.ENVIRONMENT].join('-')
  }

  protected envAwareConfig<const T extends Record<Environment, any>>(
    config: T
  ): Readonly<T[keyof T]> {
    return config[this.secrets.ENVIRONMENT]
  }
}
