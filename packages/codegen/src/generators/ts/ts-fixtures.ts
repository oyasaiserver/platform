import { mkdir } from 'node:fs/promises'
import { writeJsonFile } from '@oyasaiserver/lib/fs'

export async function tsFixtures(dir: string) {
  await mkdir(dir, {
    recursive: true
  })
  await writeJsonFile(`${dir}/package.json`, {
    name: '@oyasaiserver/gen',
    version: '1.0.0',
    type: 'module',
    exports: {
      './*': {
        import: './src/*.ts'
      }
    }
  })
  await writeJsonFile(`${dir}/tsconfig.json`, {
    extends: '../../../tsconfig.json',
    include: ['**/*']
  })
}
