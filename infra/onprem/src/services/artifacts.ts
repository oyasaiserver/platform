import decompress from 'decompress'

interface Mapping {
  artifact: string
  path: string
}

export class Artifacts {
  private static readonly base =
    'https://nightly.link/oyasaiserver/platform/workflows/cd.yaml/main/'

  public static async pull(mappings: Mapping[]): Promise<void> {
    for (const mapping of mappings) {
      const res = await fetch(
        new URL(`${mapping.artifact}.zip`, Artifacts.base)
      )
      const buffer = Buffer.from(await res.arrayBuffer())
      await decompress(buffer, mapping.path)
    }
  }
}
