import type { ComposeSpec } from '@oyasaiserver/json/store/compose_spec'
import type { Environment } from '@oyasaiserver/schema/environment'

export function defineInfra(
  definition: (environment: Environment) => ComposeSpec
): Record<Environment, ComposeSpec> {
  return {
    production: definition('production'),
    development: definition('development'),
    local: definition('local')
  }
}
