import { $ } from 'zx'

export class DockerCompose {
  private static readonly base = 'docker compose --file compose.yaml'.split(' ')

  public static async up(environment: string): Promise<void> {
    await $({
      quiet: true
    })`${DockerCompose.cmd(environment)} up -d --wait`
  }

  public static async down(environment: string): Promise<void> {
    await $({
      quiet: true
    })`${DockerCompose.cmd(environment)} down --remove-orphans`.nothrow()
  }

  private static cmd(environment: string): string[] {
    return [...DockerCompose.base, '--profile', environment]
  }
}
