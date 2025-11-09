import type { Secrets } from '@oyasaiserver/secrets'
import { type Environment, readEnvironment } from '@oyasaiserver/secrets/environment'
import { CloudBackend, LocalBackend, NamedCloudWorkspace, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { createTerraformSensitiveSecrets } from '../secrets.ts'

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  protected readonly environment: Environment
  protected readonly secrets: Secrets

  protected constructor(scope: Construct, id: string) {
    super(scope, id)
    this.environment = readEnvironment()
    this.secrets = createTerraformSensitiveSecrets()

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
}
