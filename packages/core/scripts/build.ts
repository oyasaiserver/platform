import { cp, readdir, readFile, rm } from 'node:fs/promises'
import { join } from 'node:path'
import type { NodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { writeJsonFile } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { inject } from 'postject'
import { build } from 'tsdown'
import { $, spinner } from 'zx'
import { bin, config } from '../package.json'

await build({
  format: ['cjs'],
  minify: true,
  env: {
    ENVIRONMENT: secrets.ENVIRONMENT
  }
})

const seaConfig: NodeSeaConfig = {
  main: 'dist/index.cjs',
  output: 'dist/sea.blob',
  disableExperimentalSEAWarning: true
}

await spinner('create sea config', async () => {
  const assets = 'assets'
  const dirents = await readdir(assets, {
    recursive: true,
    withFileTypes: true
  })
  seaConfig.assets = Object.fromEntries(
    dirents
      .filter(dirent => dirent.isFile())
      .map(dirent => join(dirent.parentPath, dirent.name))
      .map(path => [path.substring(assets.length + 1), path])
  )
  seaConfig.assets[config.sea] = config.sea
})

await spinner('compile', async () => {
  await cp(process.execPath, bin)
  await writeJsonFile(config.sea, seaConfig)
  await $`node --experimental-sea-config ${config.sea}`
  await rm(config.sea)
})

const isDarwin = process.platform === 'darwin'

await inject(bin, 'NODE_SEA_BLOB', await readFile(seaConfig.output), {
  sentinelFuse: 'NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2',
  machoSegmentName: isDarwin ? 'NODE_SEA' : undefined,
  overwrite: true
})

if (isDarwin) {
  await $`codesign --force --sign - ${bin}`
}
