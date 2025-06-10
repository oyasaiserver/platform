import { mkdir } from 'node:fs/promises'
import { writeJsonFile } from '@oyasaiserver/lib/fs'

export async function json(dst: string) {
  await mkdir(dst, {
    recursive: true
  })
  await writeJsonFile(`${dst}/package.json`, {
    name: '@oyasaiserver/gen',
    version: '1.0.0',
    type: 'module',
    exports: {
      './*': {
        import: './src/*.ts'
      }
    }
  })
  await writeJsonFile(`${dst}/tsconfig.json`, {
    extends: '../../tsconfig.json',
    include: ['**/*']
  })
}
