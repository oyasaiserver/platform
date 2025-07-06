import { cp, readdir, readFile, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { nodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { directory } from '@oyasaiserver/lib/directory'
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

const seaConfig = nodeSeaConfig.parse({
  main: 'dist/index.cjs',
  output: 'dist/sea.blob',
  disableExperimentalSEAWarning: true
})

await spinner('copy-infra', async () => {
  await cp(
    `${directory.root}/gen/compose/compose.${secrets.ENVIRONMENT}.yaml`,
    `dist/compose.yaml`
  )
})

await spinner('create-sea-config', async () => {
  const dir = 'assets'
  const dirents = await readdir(dir, {
    recursive: true,
    withFileTypes: true
  })
  const assets = Object.fromEntries(
    dirents
      .filter(dirent => dirent.isFile())
      .map(dirent => join(dirent.parentPath, dirent.name))
      .map(path => [path.substring(dir.length + 1), path])
  )
  seaConfig.assets = {
    ...assets,
    ['compose.yaml']: 'dist/compose.yaml',
    [config.sea]: config.sea
  }
})

await spinner('compile', async () => {
  await cp(process.execPath, bin)
  await writeJsonFile(config.sea, seaConfig)
  await $`node --experimental-sea-config ${config.sea}`
  await rm(config.sea)
})

await spinner('inject', async () => {
  const isDarwin = process.platform === 'darwin'

  await inject(bin, 'NODE_SEA_BLOB', await readFile(seaConfig.output), {
    sentinelFuse: 'NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2',
    machoSegmentName: isDarwin ? 'NODE_SEA' : undefined,
    overwrite: true
  })

  if (isDarwin) {
    await $`codesign --force --sign - ${bin}`
  }
})
