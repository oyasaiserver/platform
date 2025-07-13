import type { ComposeSpec } from '@oyasaiserver/json/store/compose_spec'
import type { Environment } from '@oyasaiserver/schema/environment'

export async function defineInfra(
  definition: (environment: Environment) => Promise<ComposeSpec>
): Promise<Record<Environment, ComposeSpec>> {
  return {
    production: await definition('production'),
    development: await definition('development'),
    local: await definition('local')
  }
}
