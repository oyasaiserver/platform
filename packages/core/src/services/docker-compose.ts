import { $ } from 'zx'

export class DockerCompose {
  public static async up(environment: string): Promise<void> {
    await $({
      quiet: true
    })`${DockerCompose.cmd(environment)} up -d --wait`
  }

  public static async down(environment: string): Promise<void> {
    await $({
      quiet: true,
      nothrow: true
    })`${DockerCompose.cmd(environment)} down --remove-orphans`
  }

  private static cmd(environment: string): string[] {
    return `docker compose --file ${environment}/compose.yaml`.split(' ')
  }
}
