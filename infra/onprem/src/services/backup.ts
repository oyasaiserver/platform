export class Backup {
  private static readonly worldsDirs = ['production/minecraft-main/worlds']

  public static async create(...worldDirs: string[]): Promise<void> {}

  public static async restore(): Promise<void> {}
}
