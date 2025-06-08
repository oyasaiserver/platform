import { writeJsonFile } from '@oyasaiserver/platform/fs'

export async function json(dst: string) {
  await writeJsonFile(`${dst}/package.json`, {
    name: '@oyasaiserver/gen',
    version: '1.0.0',
    type: 'module',
    exports: {
      './*': {
        import: './src/ts/*.ts'
      }
    }
  })
  await writeJsonFile(`${dst}/tsconfig.json`, {
    extends: '../tsconfig.json',
    include: ['**/*']
  })
}
