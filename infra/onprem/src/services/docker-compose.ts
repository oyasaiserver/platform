import { $ } from 'zx'

export class DockerCompose {
  private static readonly cmd = this.words(
    'docker compose --profile production --profile development -f compose.yaml'
  )

  public static async up(): Promise<void> {
    await $`${DockerCompose.cmd} up -d --wait`
  }

  public static async down(): Promise<void> {
    await $`${DockerCompose.cmd} down --remove-orphans`
  }

  private static words(cmd: string): string[] {
    return cmd.split(' ')
  }
}
