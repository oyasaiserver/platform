import decompress from 'decompress'

interface Mapping {
  artifact: string
  path: string
}

export class Artifact {
  private static readonly base =
    'https://nightly.link/oyasaiserver/platform/workflows/cd.yaml/main/'

  public static async download(mappings: Mapping[]): Promise<void> {
    for (const mapping of mappings) {
      const url = new URL(mapping.artifact, Artifact.base)
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      await decompress(buffer, mapping.path)
    }
  }
}
