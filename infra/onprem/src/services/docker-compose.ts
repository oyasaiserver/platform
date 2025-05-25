import { $ } from 'zx'

export class DockerCompose {
  private static readonly cmd = 'docker compose --file compose.yaml'.split(' ')

  public static async up(environment: string): Promise<void> {
    await $`${DockerCompose.cmd} ${DockerCompose.profile(environment)} up -d --wait`
  }

  public static async down(environment: string): Promise<void> {
    await $`${DockerCompose.cmd} ${DockerCompose.profile(environment)} down --remove-orphans`.nothrow()
  }

  private static profile(environment: string): string[] {
    return ['--profile', environment]
  }
}
