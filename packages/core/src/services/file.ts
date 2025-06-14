// package.json#files
type Asset = 'dist' | 'overlays' | 'compose.yaml'

export class File {
  static async copy(...assets: Asset[]) {}
}
