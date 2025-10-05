import type { Secrets } from '@oyasaiserver/secrets'
import { TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

/**
 * An opinionated stack for managing Oyasai infrastructure.
 */
export abstract class OyasaiTerraformStack extends TerraformStack {
  private readonly secrets: Secrets

  protected constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id)
    this.secrets = secrets

    if (secrets.ENVIRONMENT !== 'local') {
      new NamedCloudBackend(this, this.envAwareId(id))
    }
  }

  protected envAwareId(...fragments: readonly string[]): string {
    return [...fragments, this.secrets.ENVIRONMENT].join('-')
  }

  protected objectToEnv(obj: Readonly<Record<string, string | number | boolean>>): string[] {
    return Object.entries(obj).map(([key, value]) => [key, value].join('='))
  }

  protected envAwareConfig<const T extends Record<Secrets['ENVIRONMENT'], any>>(
    config: T
  ): Readonly<T[keyof T]> {
    return config[this.secrets.ENVIRONMENT]
  }
}
