import type { DotenvPopulateInput } from '@dotenvx/dotenvx'
import { $ } from 'zx'

$.quiet = true

export class DockerCompose {
  private static readonly base =
    'docker compose --file compose/compose.yaml'.split(' ')

  public static async up(
    environment: string,
    processEnv: DotenvPopulateInput
  ): Promise<void> {
    await $({
      env: processEnv
    })`${DockerCompose.cmd(environment)} up -d --wait`
  }

  public static async down(environment: string): Promise<void> {
    await $`${DockerCompose.cmd(environment)} down --remove-orphans`.nothrow()
  }

  private static cmd(environment: string): string[] {
    return [...DockerCompose.base, '--profile', environment]
  }
}
