import type { Environment } from '@oyasaiserver/schema/environment'
import type { ComposeSpecification } from './compose-specification.ts'

export function defineInfra(
  definition: (environment: Environment) => ComposeSpecification
): Record<Environment, ComposeSpecification> {
  return {
    production: definition('production'),
    development: definition('development'),
    local: definition('local')
  }
}
